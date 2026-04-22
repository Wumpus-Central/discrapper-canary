"use strict";
var r = n(788409),
    i = n(589841),
    s = n(404312),
    a = Object.prototype.hasOwnProperty,
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
    d = function (e, t) {
        u.apply(e, l(t) ? t : [t]);
    },
    c = Date.prototype.toISOString,
    _ = s.default,
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
        formatter: s.formatters[_],
        indices: !1,
        serializeDate: function (e) {
            return c.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1,
    },
    E = {},
    h = function e(t, n, s, a, o, u, c, _, h, p, m, g, A, I, T, S, y, N) {
        for (var O, R, v = t, C = N, b = 0, D = !1; void 0 !== (C = C.get(E)) && !D; ) {
            var L = C.get(t);
            if (((b += 1), void 0 !== L))
                if (L === b) throw RangeError("Cyclic object value");
                else D = !0;
            void 0 === C.get(E) && (b = 0);
        }
        if (
            ("function" == typeof p
                ? (v = p(n, v))
                : v instanceof Date
                  ? (v = A(v))
                  : "comma" === s &&
                    l(v) &&
                    (v = i.maybeMap(v, function (e) {
                        return e instanceof Date ? A(e) : e;
                    })),
            null === v)
        ) {
            if (u) return h && !S ? h(n, f.encoder, y, "key", I) : n;
            v = "";
        }
        if (
            "string" == typeof (O = v) ||
            "number" == typeof O ||
            "boolean" == typeof O ||
            "symbol" == typeof O ||
            "bigint" == typeof O ||
            i.isBuffer(v)
        )
            return h
                ? [T(S ? n : h(n, f.encoder, y, "key", I)) + "=" + T(h(v, f.encoder, y, "value", I))]
                : [T(n) + "=" + T(String(v))];
        var w = [];
        if (void 0 === v) return w;
        if ("comma" === s && l(v))
            S && h && (v = i.maybeMap(v, h)), (R = [{ value: v.length > 0 ? v.join(",") || null : void 0 }]);
        else if (l(p)) R = p;
        else {
            var M = Object.keys(v);
            R = m ? M.sort(m) : M;
        }
        var P = _ ? String(n).replace(/\./g, "%2E") : String(n),
            U = a && l(v) && 1 === v.length ? P + "[]" : P;
        if (o && l(v) && 0 === v.length) return U + "[]";
        for (var k = 0; k < R.length; ++k) {
            var x = R[k],
                G = "object" == typeof x && x && void 0 !== x.value ? x.value : v[x];
            if (!c || null !== G) {
                var V = g && _ ? String(x).replace(/\./g, "%2E") : String(x),
                    F = l(v) ? ("function" == typeof s ? s(U, V) : U) : U + (g ? "." + V : "[" + V + "]");
                N.set(t, b);
                var B = r();
                B.set(E, N),
                    d(w, e(G, F, s, a, o, u, c, _, "comma" === s && S && l(v) ? null : h, p, m, g, A, I, T, S, y, B));
            }
        }
        return w;
    },
    p = function (e) {
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
        var r = s.default;
        if (void 0 !== e.format) {
            if (!a.call(s.formatters, e.format)) throw TypeError("Unknown format option provided.");
            r = e.format;
        }
        var i = s.formatters[r],
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
        var d = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || f.allowDots : !!e.allowDots;
        return {
            addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : f.addQueryPrefix,
            allowDots: d,
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
        i = e,
        s = p(t);
    "function" == typeof s.filter ? (i = (0, s.filter)("", i)) : l(s.filter) && (n = s.filter);
    var a = [];
    if ("object" != typeof i || null === i) return "";
    var u = o[s.arrayFormat],
        c = "comma" === u && s.commaRoundTrip;
    n || (n = Object.keys(i)), s.sort && n.sort(s.sort);
    for (var _ = r(), f = 0; f < n.length; ++f) {
        var E = n[f],
            m = i[E];
        (s.skipNulls && null === m) ||
            d(
                a,
                h(
                    m,
                    E,
                    u,
                    c,
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
                    _,
                ),
            );
    }
    var g = a.join(s.delimiter),
        A = !0 === s.addQueryPrefix ? "?" : "";
    return (
        s.charsetSentinel && ("iso-8859-1" === s.charset ? (A += "utf8=%26%2310003%3B&") : (A += "utf8=%E2%9C%93&")),
        g.length > 0 ? A + g : ""
    );
};
