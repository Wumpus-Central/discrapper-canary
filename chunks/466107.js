"use strict";
var i = n(589841),
    r = Object.prototype.hasOwnProperty,
    s = Array.isArray,
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
        decoder: i.decode,
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
    o = function (e, t, n) {
        if (e && "string" == typeof e && t.comma && e.indexOf(",") > -1) return e.split(",");
        if (t.throwOnLimitExceeded && n >= t.arrayLimit)
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
        var n = { __proto__: null },
            l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
        l = l.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        var u = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
            c = l.split(t.delimiter, t.throwOnLimitExceeded ? u + 1 : u);
        if (t.throwOnLimitExceeded && c.length > u)
            throw RangeError("Parameter limit exceeded. Only " + u + " parameter" + (1 === u ? "" : "s") + " allowed.");
        var d = -1,
            _ = t.charset;
        if (t.charsetSentinel)
            for (h = 0; h < c.length; ++h)
                0 === c[h].indexOf("utf8=") &&
                    ("utf8=%E2%9C%93" === c[h] ? (_ = "utf-8") : "utf8=%26%2310003%3B" === c[h] && (_ = "iso-8859-1"),
                    (d = h),
                    (h = c.length));
        for (h = 0; h < c.length; ++h)
            if (h !== d) {
                var h,
                    f,
                    p,
                    E = c[h],
                    m = E.indexOf("]="),
                    g = -1 === m ? E.indexOf("=") : m + 1;
                -1 === g
                    ? ((f = t.decoder(E, a.decoder, _, "key")), (p = t.strictNullHandling ? null : ""))
                    : ((f = t.decoder(E.slice(0, g), a.decoder, _, "key")),
                      (p = i.maybeMap(o(E.slice(g + 1), t, s(n[f]) ? n[f].length : 0), function (e) {
                          return t.decoder(e, a.decoder, _, "value");
                      }))),
                    p &&
                        t.interpretNumericEntities &&
                        "iso-8859-1" === _ &&
                        (p = String(p).replace(/&#(\d+);/g, function (e, t) {
                            return String.fromCharCode(parseInt(t, 10));
                        })),
                    E.indexOf("[]=") > -1 && (p = s(p) ? [p] : p);
                var A = r.call(n, f);
                A && "combine" === t.duplicates
                    ? (n[f] = i.combine(n[f], p))
                    : (A && "last" !== t.duplicates) || (n[f] = p);
            }
        return n;
    },
    u = function (e, t, n, r) {
        var s = 0;
        if (e.length > 0 && "[]" === e[e.length - 1]) {
            var a = e.slice(0, -1).join("");
            s = Array.isArray(t) && t[a] ? t[a].length : 0;
        }
        for (var l = r ? t : o(t, n, s), u = e.length - 1; u >= 0; --u) {
            var c,
                d = e[u];
            if ("[]" === d && n.parseArrays)
                c = n.allowEmptyArrays && ("" === l || (n.strictNullHandling && null === l)) ? [] : i.combine([], l);
            else {
                c = n.plainObjects ? { __proto__: null } : {};
                var _ = "[" === d.charAt(0) && "]" === d.charAt(d.length - 1) ? d.slice(1, -1) : d,
                    h = n.decodeDotInKeys ? _.replace(/%2E/g, ".") : _,
                    f = parseInt(h, 10);
                n.parseArrays || "" !== h
                    ? !isNaN(f) && d !== h && String(f) === h && f >= 0 && n.parseArrays && f <= n.arrayLimit
                        ? ((c = [])[f] = l)
                        : "__proto__" !== h && (c[h] = l)
                    : (c = { 0: l });
            }
            l = c;
        }
        return l;
    },
    c = function (e, t, n, i) {
        if (e) {
            var s = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                a = /(\[[^[\]]*])/g,
                o = n.depth > 0 && /(\[[^[\]]*])/.exec(s),
                l = o ? s.slice(0, o.index) : s,
                c = [];
            if (l) {
                if (!n.plainObjects && r.call(Object.prototype, l) && !n.allowPrototypes) return;
                c.push(l);
            }
            for (var d = 0; n.depth > 0 && null !== (o = a.exec(s)) && d < n.depth; ) {
                if (((d += 1), !n.plainObjects && r.call(Object.prototype, o[1].slice(1, -1)) && !n.allowPrototypes))
                    return;
                c.push(o[1]);
            }
            if (o) {
                if (!0 === n.strictDepth)
                    throw RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
                c.push("[" + s.slice(o.index) + "]");
            }
            return u(c, t, n, i);
        }
    },
    d = function (e) {
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
            n = void 0 === e.duplicates ? a.duplicates : e.duplicates;
        if ("combine" !== n && "first" !== n && "last" !== n)
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
            delimiter: "string" == typeof e.delimiter || i.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
            depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
            duplicates: n,
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
    var n = d(t);
    if ("" === e || null == e) return n.plainObjects ? { __proto__: null } : {};
    for (
        var r = "string" == typeof e ? l(e, n) : e,
            s = n.plainObjects ? { __proto__: null } : {},
            a = Object.keys(r),
            o = 0;
        o < a.length;
        ++o
    ) {
        var u = a[o],
            _ = c(u, r[u], n, "string" == typeof e);
        s = i.merge(s, _, n);
    }
    return !0 === n.allowSparse ? s : i.compact(s);
};
