"use strict";
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
    d = Date.prototype.toISOString,
    f = o.default,
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
        format: f,
        formatter: o.formatters[f],
        indices: !1,
        serializeDate: function (e) {
            return d.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1,
    },
    h = {},
    m = function e(t, r, o, a, s, u, d, f, m, g, v, y, b, _, w, x, E, S) {
        for (var k, T, C = t, A = S, P = 0, M = !1; void 0 !== (A = A.get(h)) && !M; ) {
            var O = A.get(t);
            if (((P += 1), void 0 !== O))
                if (O === P) throw RangeError("Cyclic object value");
                else M = !0;
            void 0 === A.get(h) && (P = 0);
        }
        if (
            ("function" == typeof g
                ? (C = g(r, C))
                : C instanceof Date
                  ? (C = b(C))
                  : "comma" === o &&
                    l(C) &&
                    (C = i.maybeMap(C, function (e) {
                        return e instanceof Date ? b(e) : e;
                    })),
            null === C)
        ) {
            if (u) return m && !x ? m(r, p.encoder, E, "key", _) : r;
            C = "";
        }
        if (
            "string" == typeof (k = C) ||
            "number" == typeof k ||
            "boolean" == typeof k ||
            "symbol" == typeof k ||
            "bigint" == typeof k ||
            i.isBuffer(C)
        )
            return m
                ? [w(x ? r : m(r, p.encoder, E, "key", _)) + "=" + w(m(C, p.encoder, E, "value", _))]
                : [w(r) + "=" + w(String(C))];
        var R = [];
        if (void 0 === C) return R;
        if ("comma" === o && l(C))
            x && m && (C = i.maybeMap(C, m)), (T = [{ value: C.length > 0 ? C.join(",") || null : void 0 }]);
        else if (l(g)) T = g;
        else {
            var I = Object.keys(C);
            T = v ? I.sort(v) : I;
        }
        var L = f ? String(r).replace(/\./g, "%2E") : String(r),
            D = a && l(C) && 1 === C.length ? L + "[]" : L;
        if (s && l(C) && 0 === C.length) return D + "[]";
        for (var F = 0; F < T.length; ++F) {
            var N = T[F],
                V = "object" == typeof N && N && void 0 !== N.value ? N.value : C[N];
            if (!d || null !== V) {
                var j = y && f ? String(N).replace(/\./g, "%2E") : String(N),
                    B = l(C) ? ("function" == typeof o ? o(D, j) : D) : D + (y ? "." + j : "[" + j + "]");
                S.set(t, P);
                var U = n();
                U.set(h, S),
                    c(R, e(V, B, o, a, s, u, d, f, "comma" === o && x && l(C) ? null : m, g, v, y, b, _, w, x, E, U));
            }
        }
        return R;
    },
    g = function (e) {
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
        o = g(t);
    "function" == typeof o.filter ? (i = (0, o.filter)("", i)) : l(o.filter) && (r = o.filter);
    var a = [];
    if ("object" != typeof i || null === i) return "";
    var u = s[o.arrayFormat],
        d = "comma" === u && o.commaRoundTrip;
    r || (r = Object.keys(i)), o.sort && r.sort(o.sort);
    for (var f = n(), p = 0; p < r.length; ++p) {
        var h = r[p],
            v = i[h];
        (o.skipNulls && null === v) ||
            c(
                a,
                m(
                    v,
                    h,
                    u,
                    d,
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
                    f,
                ),
            );
    }
    var y = a.join(o.delimiter),
        b = !0 === o.addQueryPrefix ? "?" : "";
    return (
        o.charsetSentinel && ("iso-8859-1" === o.charset ? (b += "utf8=%26%2310003%3B&") : (b += "utf8=%E2%9C%93&")),
        y.length > 0 ? b + y : ""
    );
};
