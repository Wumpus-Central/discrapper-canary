"use strict";
var n = r(788409),
    o = r(589841),
    i = r(404312),
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
    p = i.default,
    d = {
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
        encoder: o.encode,
        encodeValuesOnly: !1,
        filter: void 0,
        format: p,
        formatter: i.formatters[p],
        indices: !1,
        serializeDate: function (e) {
            return f.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1,
    },
    h = {},
    m = function e(t, r, i, a, s, u, f, p, m, v, y, g, b, w, _, S, E, x) {
        for (var k, C, T = t, M = x, P = 0, A = !1; void 0 !== (M = M.get(h)) && !A; ) {
            var O = M.get(t);
            if (((P += 1), void 0 !== O))
                if (O === P) throw RangeError("Cyclic object value");
                else A = !0;
            void 0 === M.get(h) && (P = 0);
        }
        if (
            ("function" == typeof v
                ? (T = v(r, T))
                : T instanceof Date
                  ? (T = b(T))
                  : "comma" === i &&
                    l(T) &&
                    (T = o.maybeMap(T, function (e) {
                        return e instanceof Date ? b(e) : e;
                    })),
            null === T)
        ) {
            if (u) return m && !S ? m(r, d.encoder, E, "key", w) : r;
            T = "";
        }
        if (
            "string" == typeof (k = T) ||
            "number" == typeof k ||
            "boolean" == typeof k ||
            "symbol" == typeof k ||
            "bigint" == typeof k ||
            o.isBuffer(T)
        )
            return m
                ? [_(S ? r : m(r, d.encoder, E, "key", w)) + "=" + _(m(T, d.encoder, E, "value", w))]
                : [_(r) + "=" + _(String(T))];
        var I = [];
        if (void 0 === T) return I;
        if ("comma" === i && l(T))
            S && m && (T = o.maybeMap(T, m)), (C = [{ value: T.length > 0 ? T.join(",") || null : void 0 }]);
        else if (l(v)) C = v;
        else {
            var D = Object.keys(T);
            C = y ? D.sort(y) : D;
        }
        var L = p ? String(r).replace(/\./g, "%2E") : String(r),
            R = a && l(T) && 1 === T.length ? L + "[]" : L;
        if (s && l(T) && 0 === T.length) return R + "[]";
        for (var F = 0; F < C.length; ++F) {
            var N = C[F],
                j = "object" == typeof N && N && void 0 !== N.value ? N.value : T[N];
            if (!f || null !== j) {
                var B = g && p ? String(N).replace(/\./g, "%2E") : String(N),
                    $ = l(T) ? ("function" == typeof i ? i(R, B) : R) : R + (g ? "." + B : "[" + B + "]");
                x.set(t, P);
                var K = n();
                K.set(h, x),
                    c(I, e(j, $, i, a, s, u, f, p, "comma" === i && S && l(T) ? null : m, v, y, g, b, w, _, S, E, K));
            }
        }
        return I;
    },
    v = function (e) {
        if (!e) return d;
        if (void 0 !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays)
            throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        if (void 0 !== e.encodeDotInKeys && "boolean" != typeof e.encodeDotInKeys)
            throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder)
            throw TypeError("Encoder has to be a function.");
        var t,
            r = e.charset || d.charset;
        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
            throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = i.default;
        if (void 0 !== e.format) {
            if (!a.call(i.formatters, e.format)) throw TypeError("Unknown format option provided.");
            n = e.format;
        }
        var o = i.formatters[n],
            u = d.filter;
        if (
            (("function" == typeof e.filter || l(e.filter)) && (u = e.filter),
            (t =
                e.arrayFormat in s
                    ? e.arrayFormat
                    : "indices" in e
                      ? e.indices
                          ? "indices"
                          : "repeat"
                      : d.arrayFormat),
            "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip)
        )
            throw TypeError("`commaRoundTrip` must be a boolean, or absent");
        var c = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || d.allowDots : !!e.allowDots;
        return {
            addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : d.addQueryPrefix,
            allowDots: c,
            allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : d.allowEmptyArrays,
            arrayFormat: t,
            charset: r,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : d.charsetSentinel,
            commaRoundTrip: !!e.commaRoundTrip,
            delimiter: void 0 === e.delimiter ? d.delimiter : e.delimiter,
            encode: "boolean" == typeof e.encode ? e.encode : d.encode,
            encodeDotInKeys: "boolean" == typeof e.encodeDotInKeys ? e.encodeDotInKeys : d.encodeDotInKeys,
            encoder: "function" == typeof e.encoder ? e.encoder : d.encoder,
            encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : d.encodeValuesOnly,
            filter: u,
            format: n,
            formatter: o,
            serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : d.serializeDate,
            skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : d.skipNulls,
            sort: "function" == typeof e.sort ? e.sort : null,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : d.strictNullHandling,
        };
    };
e.exports = function (e, t) {
    var r,
        o = e,
        i = v(t);
    "function" == typeof i.filter ? (o = (0, i.filter)("", o)) : l(i.filter) && (r = i.filter);
    var a = [];
    if ("object" != typeof o || null === o) return "";
    var u = s[i.arrayFormat],
        f = "comma" === u && i.commaRoundTrip;
    r || (r = Object.keys(o)), i.sort && r.sort(i.sort);
    for (var p = n(), d = 0; d < r.length; ++d) {
        var h = r[d],
            y = o[h];
        (i.skipNulls && null === y) ||
            c(
                a,
                m(
                    y,
                    h,
                    u,
                    f,
                    i.allowEmptyArrays,
                    i.strictNullHandling,
                    i.skipNulls,
                    i.encodeDotInKeys,
                    i.encode ? i.encoder : null,
                    i.filter,
                    i.sort,
                    i.allowDots,
                    i.serializeDate,
                    i.format,
                    i.formatter,
                    i.encodeValuesOnly,
                    i.charset,
                    p,
                ),
            );
    }
    var g = a.join(i.delimiter),
        b = !0 === i.addQueryPrefix ? "?" : "";
    return (
        i.charsetSentinel && ("iso-8859-1" === i.charset ? (b += "utf8=%26%2310003%3B&") : (b += "utf8=%E2%9C%93&")),
        g.length > 0 ? b + g : ""
    );
};
