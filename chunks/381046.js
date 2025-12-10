var r = n(260674),
    i = n(288660),
    a = n(72689),
    o = Object.prototype.hasOwnProperty,
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
    c = Array.prototype.push,
    u = function (e, t) {
        c.apply(e, l(t) ? t : [t]);
    },
    d = Date.prototype.toISOString,
    f = a.default,
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
        formatter: a.formatters[f],
        indices: !1,
        serializeDate: function (e) {
            return d.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1,
    },
    _ = function (e) {
        return (
            "string" == typeof e ||
            "number" == typeof e ||
            "boolean" == typeof e ||
            "symbol" == typeof e ||
            "bigint" == typeof e
        );
    },
    m = {},
    h = function e(t, n, a, o, s, c, d, f, h, g, E, b, y, O, v, S, I, T) {
        for (var C, A = t, N = T, P = 0, R = !1; void 0 !== (N = N.get(m)) && !R; ) {
            var D = N.get(t);
            if (((P += 1), void 0 !== D))
                if (D === P) throw RangeError("Cyclic object value");
                else R = !0;
            void 0 === N.get(m) && (P = 0);
        }
        if (
            ("function" == typeof g
                ? (A = g(n, A))
                : A instanceof Date
                  ? (A = y(A))
                  : "comma" === a &&
                    l(A) &&
                    (A = i.maybeMap(A, function (e) {
                        return e instanceof Date ? y(e) : e;
                    })),
            null === A)
        ) {
            if (c) return h && !S ? h(n, p.encoder, I, "key", O) : n;
            A = "";
        }
        if (_(A) || i.isBuffer(A))
            return h
                ? [v(S ? n : h(n, p.encoder, I, "key", O)) + "=" + v(h(A, p.encoder, I, "value", O))]
                : [v(n) + "=" + v(String(A))];
        var w = [];
        if (void 0 === A) return w;
        if ("comma" === a && l(A))
            S && h && (A = i.maybeMap(A, h)), (C = [{ value: A.length > 0 ? A.join(",") || null : void 0 }]);
        else if (l(g)) C = g;
        else {
            var x = Object.keys(A);
            C = E ? x.sort(E) : x;
        }
        var L = f ? String(n).replace(/\./g, "%2E") : String(n),
            j = o && l(A) && 1 === A.length ? L + "[]" : L;
        if (s && l(A) && 0 === A.length) return j + "[]";
        for (var M = 0; M < C.length; ++M) {
            var k = C[M],
                U = "object" == typeof k && k && void 0 !== k.value ? k.value : A[k];
            if (!d || null !== U) {
                var G = b && f ? String(k).replace(/\./g, "%2E") : String(k),
                    Z = l(A) ? ("function" == typeof a ? a(j, G) : j) : j + (b ? "." + G : "[" + G + "]");
                T.set(t, P);
                var B = r();
                B.set(m, T),
                    u(w, e(U, Z, a, o, s, c, d, f, "comma" === a && S && l(A) ? null : h, g, E, b, y, O, v, S, I, B));
            }
        }
        return w;
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
            n = e.charset || p.charset;
        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
            throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r = a.default;
        if (void 0 !== e.format) {
            if (!o.call(a.formatters, e.format)) throw TypeError("Unknown format option provided.");
            r = e.format;
        }
        var i = a.formatters[r],
            c = p.filter;
        if (
            (("function" == typeof e.filter || l(e.filter)) && (c = e.filter),
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
        var u = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || p.allowDots : !!e.allowDots;
        return {
            addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
            allowDots: u,
            allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : p.allowEmptyArrays,
            arrayFormat: t,
            charset: n,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
            commaRoundTrip: !!e.commaRoundTrip,
            delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
            encode: "boolean" == typeof e.encode ? e.encode : p.encode,
            encodeDotInKeys: "boolean" == typeof e.encodeDotInKeys ? e.encodeDotInKeys : p.encodeDotInKeys,
            encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
            encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
            filter: c,
            format: r,
            formatter: i,
            serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
            skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
            sort: "function" == typeof e.sort ? e.sort : null,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling,
        };
    };
e.exports = function (e, t) {
    var n,
        i,
        a = e,
        o = g(t);
    "function" == typeof o.filter ? (a = (i = o.filter)("", a)) : l(o.filter) && (n = i = o.filter);
    var c = [];
    if ("object" != typeof a || null === a) return "";
    var d = s[o.arrayFormat],
        f = "comma" === d && o.commaRoundTrip;
    n || (n = Object.keys(a)), o.sort && n.sort(o.sort);
    for (var p = r(), _ = 0; _ < n.length; ++_) {
        var m = n[_],
            E = a[m];
        (o.skipNulls && null === E) ||
            u(
                c,
                h(
                    E,
                    m,
                    d,
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
                    p,
                ),
            );
    }
    var b = c.join(o.delimiter),
        y = !0 === o.addQueryPrefix ? "?" : "";
    return (
        o.charsetSentinel && ("iso-8859-1" === o.charset ? (y += "utf8=%26%2310003%3B&") : (y += "utf8=%E2%9C%93&")),
        b.length > 0 ? y + b : ""
    );
};
