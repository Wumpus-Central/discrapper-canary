var n = r(589841),
    i = Object.prototype.hasOwnProperty,
    o = Array.isArray,
    a = {
        allowDots: !1,
        allowEmptyArrays: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decodeDotInKeys: !1,
        decoder: n.decode,
        delimiter: "&",
        depth: 5,
        duplicates: "combine",
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictDepth: !1,
        strictNullHandling: !1,
        throwOnLimitExceeded: !1,
    },
    s = function (e, t, r) {
        if (e && "string" == typeof e && t.comma && e.indexOf(",") > -1) return e.split(",");
        if (t.throwOnLimitExceeded && r >= t.arrayLimit)
            throw RangeError(
                "Array limit exceeded. Only " +
                    t.arrayLimit +
                    " element" +
                    (1 === t.arrayLimit ? "" : "s") +
                    " allowed in an array.",
            );
        return e;
    },
    l = function (e, t) {
        var r = { __proto__: null },
            l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
        l = l.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        var u = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
            c = l.split(t.delimiter, t.throwOnLimitExceeded ? u + 1 : u);
        if (t.throwOnLimitExceeded && c.length > u)
            throw RangeError("Parameter limit exceeded. Only " + u + " parameter" + (1 === u ? "" : "s") + " allowed.");
        var f = -1,
            d = t.charset;
        if (t.charsetSentinel)
            for (p = 0; p < c.length; ++p)
                0 === c[p].indexOf("utf8=") &&
                    ("utf8=%E2%9C%93" === c[p] ? (d = "utf-8") : "utf8=%26%2310003%3B" === c[p] && (d = "iso-8859-1"),
                    (f = p),
                    (p = c.length));
        for (p = 0; p < c.length; ++p)
            if (p !== f) {
                var p,
                    h,
                    m,
                    v = c[p],
                    y = v.indexOf("]="),
                    g = -1 === y ? v.indexOf("=") : y + 1;
                -1 === g
                    ? ((h = t.decoder(v, a.decoder, d, "key")), (m = t.strictNullHandling ? null : ""))
                    : ((h = t.decoder(v.slice(0, g), a.decoder, d, "key")),
                      (m = n.maybeMap(s(v.slice(g + 1), t, o(r[h]) ? r[h].length : 0), function (e) {
                          return t.decoder(e, a.decoder, d, "value");
                      }))),
                    m &&
                        t.interpretNumericEntities &&
                        "iso-8859-1" === d &&
                        (m = String(m).replace(/&#(\d+);/g, function (e, t) {
                            return String.fromCharCode(parseInt(t, 10));
                        })),
                    v.indexOf("[]=") > -1 && (m = o(m) ? [m] : m);
                var b = i.call(r, h);
                b && "combine" === t.duplicates
                    ? (r[h] = n.combine(r[h], m))
                    : (b && "last" !== t.duplicates) || (r[h] = m);
            }
        return r;
    },
    u = function (e, t, r, i) {
        var o = 0;
        if (e.length > 0 && "[]" === e[e.length - 1]) {
            var a = e.slice(0, -1).join("");
            o = Array.isArray(t) && t[a] ? t[a].length : 0;
        }
        for (var l = i ? t : s(t, r, o), u = e.length - 1; u >= 0; --u) {
            var c,
                f = e[u];
            if ("[]" === f && r.parseArrays)
                c = r.allowEmptyArrays && ("" === l || (r.strictNullHandling && null === l)) ? [] : n.combine([], l);
            else {
                c = r.plainObjects ? { __proto__: null } : {};
                var d = "[" === f.charAt(0) && "]" === f.charAt(f.length - 1) ? f.slice(1, -1) : f,
                    p = r.decodeDotInKeys ? d.replace(/%2E/g, ".") : d,
                    h = parseInt(p, 10);
                r.parseArrays || "" !== p
                    ? !isNaN(h) && f !== p && String(h) === p && h >= 0 && r.parseArrays && h <= r.arrayLimit
                        ? ((c = [])[h] = l)
                        : "__proto__" !== p && (c[p] = l)
                    : (c = { 0: l });
            }
            l = c;
        }
        return l;
    },
    c = function (e, t, r, n) {
        if (e) {
            var o = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                a = /(\[[^[\]]*])/g,
                s = r.depth > 0 && /(\[[^[\]]*])/.exec(o),
                l = s ? o.slice(0, s.index) : o,
                c = [];
            if (l) {
                if (!r.plainObjects && i.call(Object.prototype, l) && !r.allowPrototypes) return;
                c.push(l);
            }
            for (var f = 0; r.depth > 0 && null !== (s = a.exec(o)) && f < r.depth; ) {
                if (((f += 1), !r.plainObjects && i.call(Object.prototype, s[1].slice(1, -1)) && !r.allowPrototypes))
                    return;
                c.push(s[1]);
            }
            if (s) {
                if (!0 === r.strictDepth)
                    throw RangeError("Input depth exceeded depth option of " + r.depth + " and strictDepth is true");
                c.push("[" + o.slice(s.index) + "]");
            }
            return u(c, t, r, n);
        }
    },
    f = function (e) {
        if (!e) return a;
        if (void 0 !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays)
            throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        if (void 0 !== e.decodeDotInKeys && "boolean" != typeof e.decodeDotInKeys)
            throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
        if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder)
            throw TypeError("Decoder has to be a function.");
        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
            throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        if (void 0 !== e.throwOnLimitExceeded && "boolean" != typeof e.throwOnLimitExceeded)
            throw TypeError("`throwOnLimitExceeded` option must be a boolean");
        var t = void 0 === e.charset ? a.charset : e.charset,
            r = void 0 === e.duplicates ? a.duplicates : e.duplicates;
        if ("combine" !== r && "first" !== r && "last" !== r)
            throw TypeError("The duplicates option must be either combine, first, or last");
        return {
            allowDots: void 0 === e.allowDots ? !0 === e.decodeDotInKeys || a.allowDots : !!e.allowDots,
            allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : a.allowEmptyArrays,
            allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : a.allowPrototypes,
            allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : a.allowSparse,
            arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
            charset: t,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : a.charsetSentinel,
            comma: "boolean" == typeof e.comma ? e.comma : a.comma,
            decodeDotInKeys: "boolean" == typeof e.decodeDotInKeys ? e.decodeDotInKeys : a.decodeDotInKeys,
            decoder: "function" == typeof e.decoder ? e.decoder : a.decoder,
            delimiter: "string" == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
            depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
            duplicates: r,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities:
                "boolean" == typeof e.interpretNumericEntities
                    ? e.interpretNumericEntities
                    : a.interpretNumericEntities,
            parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : a.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : a.plainObjects,
            strictDepth: "boolean" == typeof e.strictDepth ? !!e.strictDepth : a.strictDepth,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : a.strictNullHandling,
            throwOnLimitExceeded: "boolean" == typeof e.throwOnLimitExceeded && e.throwOnLimitExceeded,
        };
    };
e.exports = function (e, t) {
    var r = f(t);
    if ("" === e || null == e) return r.plainObjects ? { __proto__: null } : {};
    for (
        var i = "string" == typeof e ? l(e, r) : e,
            o = r.plainObjects ? { __proto__: null } : {},
            a = Object.keys(i),
            s = 0;
        s < a.length;
        ++s
    ) {
        var u = a[s],
            d = c(u, i[u], r, "string" == typeof e);
        o = n.merge(o, d, r);
    }
    return !0 === r.allowSparse ? o : n.compact(o);
};
