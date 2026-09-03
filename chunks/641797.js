var n = r(788409),
    i = r(589841),
    o = r(404312),
    a = Object.prototype.hasOwnProperty,
    s = {
        brackets: function (e) {
            return e + "[]";
        },
        comma: "comma",
        indices: function (e, t) {
            return e + "[" + t + "]";
        },
        repeat: function (e) {
            return e;
        },
    },
    l = Array.isArray,
    u = Array.prototype.push,
    c = function (e, t) {
        u.apply(e, l(t) ? t : [t]);
    },
    f = Date.prototype.toISOString,
    d = o.default,
    p = {
        addQueryPrefix: !1,
        allowDots: !1,
        allowEmptyArrays: !1,
        arrayFormat: "indices",
        charset: "utf-8",
        charsetSentinel: !1,
        commaRoundTrip: !1,
        delimiter: "&",
        encode: !0,
        encodeDotInKeys: !1,
        encoder: i.encode,
        encodeValuesOnly: !1,
        filter: void 0,
        format: d,
        formatter: o.formatters[d],
        indices: !1,
        serializeDate: function (e) {
            return f.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1,
    },
    h = {},
    m = function e(t, r, o, a, s, u, f, d, m, v, y, g, b, w, _, S, x, E) {
        for (var k, C, T = t, M = E, P = 0, A = !1; void 0 !== (M = M.get(h)) && !A; ) {
            var I = M.get(t);
            if (((P += 1), void 0 !== I))
                if (I === P) throw RangeError("Cyclic object value");
                else A = !0;
            void 0 === M.get(h) && (P = 0);
        }
        if (
            ("function" == typeof v
                ? (T = v(r, T))
                : T instanceof Date
                  ? (T = b(T))
                  : "comma" === o &&
                    l(T) &&
                    (T = i.maybeMap(T, function (e) {
                        return e instanceof Date ? b(e) : e;
                    })),
            null === T)
        ) {
            if (u) return m && !S ? m(r, p.encoder, x, "key", w) : r;
            T = "";
        }
        if (
            "string" == typeof (k = T) ||
            "number" == typeof k ||
            "boolean" == typeof k ||
            "symbol" == typeof k ||
            "bigint" == typeof k ||
            i.isBuffer(T)
        )
            return m
                ? [_(S ? r : m(r, p.encoder, x, "key", w)) + "=" + _(m(T, p.encoder, x, "value", w))]
                : [_(r) + "=" + _(String(T))];
        var O = [];
        if (void 0 === T) return O;
        if ("comma" === o && l(T))
            S && m && (T = i.maybeMap(T, m)), (C = [{ value: T.length > 0 ? T.join(",") || null : void 0 }]);
        else if (l(v)) C = v;
        else {
            var D = Object.keys(T);
            C = y ? D.sort(y) : D;
        }
        var R = d ? String(r).replace(/\./g, "%2E") : String(r),
            L = a && l(T) && 1 === T.length ? R + "[]" : R;
        if (s && l(T) && 0 === T.length) return L + "[]";
        for (var F = 0; F < C.length; ++F) {
            var N = C[F],
                j = "object" == typeof N && N && void 0 !== N.value ? N.value : T[N];
            if (!f || null !== j) {
                var B = g && d ? String(N).replace(/\./g, "%2E") : String(N),
                    K = l(T) ? ("function" == typeof o ? o(L, B) : L) : L + (g ? "." + B : "[" + B + "]");
                E.set(t, P);
                var $ = n();
                $.set(h, E),
                    c(O, e(j, K, o, a, s, u, f, d, "comma" === o && S && l(T) ? null : m, v, y, g, b, w, _, S, x, $));
            }
        }
        return O;
    },
    v = function (e) {
        if (!e) return p;
        if (void 0 !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays)
            throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        if (void 0 !== e.encodeDotInKeys && "boolean" != typeof e.encodeDotInKeys)
            throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder)
            throw TypeError("Encoder has to be a function.");
        var t,
            r = e.charset || p.charset;
        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
            throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = o.default;
        if (void 0 !== e.format) {
            if (!a.call(o.formatters, e.format)) throw TypeError("Unknown format option provided.");
            n = e.format;
        }
        var i = o.formatters[n],
            u = p.filter;
        if (
            (("function" == typeof e.filter || l(e.filter)) && (u = e.filter),
            (t =
                e.arrayFormat in s
                    ? e.arrayFormat
                    : "indices" in e
                      ? e.indices
                          ? "indices"
                          : "repeat"
                      : p.arrayFormat),
            "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip)
        )
            throw TypeError("`commaRoundTrip` must be a boolean, or absent");
        var c = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || p.allowDots : !!e.allowDots;
        return {
            addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
            allowDots: c,
            allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : p.allowEmptyArrays,
            arrayFormat: t,
            charset: r,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
            commaRoundTrip: !!e.commaRoundTrip,
            delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
            encode: "boolean" == typeof e.encode ? e.encode : p.encode,
            encodeDotInKeys: "boolean" == typeof e.encodeDotInKeys ? e.encodeDotInKeys : p.encodeDotInKeys,
            encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
            encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
            filter: u,
            format: n,
            formatter: i,
            serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
            skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
            sort: "function" == typeof e.sort ? e.sort : null,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling,
        };
    };
e.exports = function (e, t) {
    var r,
        i = e,
        o = v(t);
    "function" == typeof o.filter ? (i = (0, o.filter)("", i)) : l(o.filter) && (r = o.filter);
    var a = [];
    if ("object" != typeof i || null === i) return "";
    var u = s[o.arrayFormat],
        f = "comma" === u && o.commaRoundTrip;
    r || (r = Object.keys(i)), o.sort && r.sort(o.sort);
    for (var d = n(), p = 0; p < r.length; ++p) {
        var h = r[p],
            y = i[h];
        (o.skipNulls && null === y) ||
            c(
                a,
                m(
                    y,
                    h,
                    u,
                    f,
                    o.allowEmptyArrays,
                    o.strictNullHandling,
                    o.skipNulls,
                    o.encodeDotInKeys,
                    o.encode ? o.encoder : null,
                    o.filter,
                    o.sort,
                    o.allowDots,
                    o.serializeDate,
                    o.format,
                    o.formatter,
                    o.encodeValuesOnly,
                    o.charset,
                    d,
                ),
            );
    }
    var g = a.join(o.delimiter),
        b = !0 === o.addQueryPrefix ? "?" : "";
    return (
        o.charsetSentinel && ("iso-8859-1" === o.charset ? (b += "utf8=%26%2310003%3B&") : (b += "utf8=%E2%9C%93&")),
        g.length > 0 ? b + g : ""
    );
};
