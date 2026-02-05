"use strict";
var r = n(788409),
    i = n(589841),
    a = n(404312),
    s = Object.prototype.hasOwnProperty,
    o = {
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
    d = Date.prototype.toISOString,
    _ = a.default,
    f = {
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
        format: _,
        formatter: a.formatters[_],
        indices: !1,
        serializeDate: function (e) {
            return d.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1,
    },
    p = function (e) {
        return (
            "string" == typeof e ||
            "number" == typeof e ||
            "boolean" == typeof e ||
            "symbol" == typeof e ||
            "bigint" == typeof e
        );
    },
    h = {},
    m = function e(t, n, a, s, o, u, d, _, m, g, E, A, I, T, y, S, v, C) {
        for (var b, N = t, R = C, O = 0, D = !1; void 0 !== (R = R.get(h)) && !D; ) {
            var L = R.get(t);
            if (((O += 1), void 0 !== L))
                if (L === O) throw RangeError("Cyclic object value");
                else D = !0;
            void 0 === R.get(h) && (O = 0);
        }
        if (
            ("function" == typeof g
                ? (N = g(n, N))
                : N instanceof Date
                  ? (N = I(N))
                  : "comma" === a &&
                    l(N) &&
                    (N = i.maybeMap(N, function (e) {
                        return e instanceof Date ? I(e) : e;
                    })),
            null === N)
        ) {
            if (u) return m && !S ? m(n, f.encoder, v, "key", T) : n;
            N = "";
        }
        if (p(N) || i.isBuffer(N))
            return m
                ? [y(S ? n : m(n, f.encoder, v, "key", T)) + "=" + y(m(N, f.encoder, v, "value", T))]
                : [y(n) + "=" + y(String(N))];
        var w = [];
        if (void 0 === N) return w;
        if ("comma" === a && l(N))
            S && m && (N = i.maybeMap(N, m)), (b = [{ value: N.length > 0 ? N.join(",") || null : void 0 }]);
        else if (l(g)) b = g;
        else {
            var x = Object.keys(N);
            b = E ? x.sort(E) : x;
        }
        var P = _ ? String(n).replace(/\./g, "%2E") : String(n),
            M = s && l(N) && 1 === N.length ? P + "[]" : P;
        if (o && l(N) && 0 === N.length) return M + "[]";
        for (var k = 0; k < b.length; ++k) {
            var U = b[k],
                G = "object" == typeof U && U && void 0 !== U.value ? U.value : N[U];
            if (!d || null !== G) {
                var V = A && _ ? String(U).replace(/\./g, "%2E") : String(U),
                    F = l(N) ? ("function" == typeof a ? a(M, V) : M) : M + (A ? "." + V : "[" + V + "]");
                C.set(t, O);
                var B = r();
                B.set(h, C),
                    c(w, e(G, F, a, s, o, u, d, _, "comma" === a && S && l(N) ? null : m, g, E, A, I, T, y, S, v, B));
            }
        }
        return w;
    },
    g = function (e) {
        if (!e) return f;
        if (void 0 !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays)
            throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        if (void 0 !== e.encodeDotInKeys && "boolean" != typeof e.encodeDotInKeys)
            throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder)
            throw TypeError("Encoder has to be a function.");
        var t,
            n = e.charset || f.charset;
        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
            throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r = a.default;
        if (void 0 !== e.format) {
            if (!s.call(a.formatters, e.format)) throw TypeError("Unknown format option provided.");
            r = e.format;
        }
        var i = a.formatters[r],
            u = f.filter;
        if (
            (("function" == typeof e.filter || l(e.filter)) && (u = e.filter),
            (t =
                e.arrayFormat in o
                    ? e.arrayFormat
                    : "indices" in e
                      ? e.indices
                          ? "indices"
                          : "repeat"
                      : f.arrayFormat),
            "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip)
        )
            throw TypeError("`commaRoundTrip` must be a boolean, or absent");
        var c = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || f.allowDots : !!e.allowDots;
        return {
            addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : f.addQueryPrefix,
            allowDots: c,
            allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : f.allowEmptyArrays,
            arrayFormat: t,
            charset: n,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : f.charsetSentinel,
            commaRoundTrip: !!e.commaRoundTrip,
            delimiter: void 0 === e.delimiter ? f.delimiter : e.delimiter,
            encode: "boolean" == typeof e.encode ? e.encode : f.encode,
            encodeDotInKeys: "boolean" == typeof e.encodeDotInKeys ? e.encodeDotInKeys : f.encodeDotInKeys,
            encoder: "function" == typeof e.encoder ? e.encoder : f.encoder,
            encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : f.encodeValuesOnly,
            filter: u,
            format: r,
            formatter: i,
            serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : f.serializeDate,
            skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : f.skipNulls,
            sort: "function" == typeof e.sort ? e.sort : null,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : f.strictNullHandling,
        };
    };
e.exports = function (e, t) {
    var n,
        i,
        a = e,
        s = g(t);
    "function" == typeof s.filter ? (a = (i = s.filter)("", a)) : l(s.filter) && (n = i = s.filter);
    var u = [];
    if ("object" != typeof a || null === a) return "";
    var d = o[s.arrayFormat],
        _ = "comma" === d && s.commaRoundTrip;
    n || (n = Object.keys(a)), s.sort && n.sort(s.sort);
    for (var f = r(), p = 0; p < n.length; ++p) {
        var h = n[p],
            E = a[h];
        (s.skipNulls && null === E) ||
            c(
                u,
                m(
                    E,
                    h,
                    d,
                    _,
                    s.allowEmptyArrays,
                    s.strictNullHandling,
                    s.skipNulls,
                    s.encodeDotInKeys,
                    s.encode ? s.encoder : null,
                    s.filter,
                    s.sort,
                    s.allowDots,
                    s.serializeDate,
                    s.format,
                    s.formatter,
                    s.encodeValuesOnly,
                    s.charset,
                    f,
                ),
            );
    }
    var A = u.join(s.delimiter),
        I = !0 === s.addQueryPrefix ? "?" : "";
    return (
        s.charsetSentinel && ("iso-8859-1" === s.charset ? (I += "utf8=%26%2310003%3B&") : (I += "utf8=%E2%9C%93&")),
        A.length > 0 ? I + A : ""
    );
};
