"use strict";
var i = n(788409),
    r = n(589841),
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
    c = function (e, t) {
        u.apply(e, l(t) ? t : [t]);
    },
    d = Date.prototype.toISOString,
    _ = s.default,
    h = {
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
        encoder: r.encode,
        encodeValuesOnly: !1,
        filter: void 0,
        format: _,
        formatter: s.formatters[_],
        indices: !1,
        serializeDate: function (e) {
            return d.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1,
    },
    f = {},
    p = function e(t, n, s, a, o, u, d, _, p, E, m, g, A, I, T, S, y, C) {
        for (var N, v, R = t, O = C, b = 0, D = !1; void 0 !== (O = O.get(f)) && !D; ) {
            var L = O.get(t);
            if (((b += 1), void 0 !== L))
                if (L === b) throw RangeError("Cyclic object value");
                else D = !0;
            void 0 === O.get(f) && (b = 0);
        }
        if (
            ("function" == typeof E
                ? (R = E(n, R))
                : R instanceof Date
                  ? (R = A(R))
                  : "comma" === s &&
                    l(R) &&
                    (R = r.maybeMap(R, function (e) {
                        return e instanceof Date ? A(e) : e;
                    })),
            null === R)
        ) {
            if (u) return p && !S ? p(n, h.encoder, y, "key", I) : n;
            R = "";
        }
        if (
            "string" == typeof (N = R) ||
            "number" == typeof N ||
            "boolean" == typeof N ||
            "symbol" == typeof N ||
            "bigint" == typeof N ||
            r.isBuffer(R)
        )
            return p
                ? [T(S ? n : p(n, h.encoder, y, "key", I)) + "=" + T(p(R, h.encoder, y, "value", I))]
                : [T(n) + "=" + T(String(R))];
        var w = [];
        if (void 0 === R) return w;
        if ("comma" === s && l(R))
            S && p && (R = r.maybeMap(R, p)), (v = [{ value: R.length > 0 ? R.join(",") || null : void 0 }]);
        else if (l(E)) v = E;
        else {
            var M = Object.keys(R);
            v = m ? M.sort(m) : M;
        }
        var P = _ ? String(n).replace(/\./g, "%2E") : String(n),
            x = a && l(R) && 1 === R.length ? P + "[]" : P;
        if (o && l(R) && 0 === R.length) return x + "[]";
        for (var k = 0; k < v.length; ++k) {
            var U = v[k],
                G = "object" == typeof U && U && void 0 !== U.value ? U.value : R[U];
            if (!d || null !== G) {
                var F = g && _ ? String(U).replace(/\./g, "%2E") : String(U),
                    V = l(R) ? ("function" == typeof s ? s(x, F) : x) : x + (g ? "." + F : "[" + F + "]");
                C.set(t, b);
                var B = i();
                B.set(f, C),
                    c(w, e(G, V, s, a, o, u, d, _, "comma" === s && S && l(R) ? null : p, E, m, g, A, I, T, S, y, B));
            }
        }
        return w;
    },
    E = function (e) {
        if (!e) return h;
        if (void 0 !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays)
            throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        if (void 0 !== e.encodeDotInKeys && "boolean" != typeof e.encodeDotInKeys)
            throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder)
            throw TypeError("Encoder has to be a function.");
        var t,
            n = e.charset || h.charset;
        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
            throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = s.default;
        if (void 0 !== e.format) {
            if (!a.call(s.formatters, e.format)) throw TypeError("Unknown format option provided.");
            i = e.format;
        }
        var r = s.formatters[i],
            u = h.filter;
        if (
            (("function" == typeof e.filter || l(e.filter)) && (u = e.filter),
            (t =
                e.arrayFormat in o
                    ? e.arrayFormat
                    : "indices" in e
                      ? e.indices
                          ? "indices"
                          : "repeat"
                      : h.arrayFormat),
            "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip)
        )
            throw TypeError("`commaRoundTrip` must be a boolean, or absent");
        var c = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || h.allowDots : !!e.allowDots;
        return {
            addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : h.addQueryPrefix,
            allowDots: c,
            allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : h.allowEmptyArrays,
            arrayFormat: t,
            charset: n,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : h.charsetSentinel,
            commaRoundTrip: !!e.commaRoundTrip,
            delimiter: void 0 === e.delimiter ? h.delimiter : e.delimiter,
            encode: "boolean" == typeof e.encode ? e.encode : h.encode,
            encodeDotInKeys: "boolean" == typeof e.encodeDotInKeys ? e.encodeDotInKeys : h.encodeDotInKeys,
            encoder: "function" == typeof e.encoder ? e.encoder : h.encoder,
            encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : h.encodeValuesOnly,
            filter: u,
            format: i,
            formatter: r,
            serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : h.serializeDate,
            skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : h.skipNulls,
            sort: "function" == typeof e.sort ? e.sort : null,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : h.strictNullHandling,
        };
    };
e.exports = function (e, t) {
    var n,
        r = e,
        s = E(t);
    "function" == typeof s.filter ? (r = (0, s.filter)("", r)) : l(s.filter) && (n = s.filter);
    var a = [];
    if ("object" != typeof r || null === r) return "";
    var u = o[s.arrayFormat],
        d = "comma" === u && s.commaRoundTrip;
    n || (n = Object.keys(r)), s.sort && n.sort(s.sort);
    for (var _ = i(), h = 0; h < n.length; ++h) {
        var f = n[h],
            m = r[f];
        (s.skipNulls && null === m) ||
            c(
                a,
                p(
                    m,
                    f,
                    u,
                    d,
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
