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
    h = {},
    m = function e(t, n, a, s, o, c, d, f, m, g, E, b, y, O, A, v, S, I) {
        for (var T, C = t, N = I, R = 0, w = !1; void 0 !== (N = N.get(h)) && !w; ) {
            var P = N.get(t);
            if (((R += 1), void 0 !== P))
                if (P === R) throw RangeError("Cyclic object value");
                else w = !0;
            void 0 === N.get(h) && (R = 0);
        }
        if (
            ("function" == typeof g
                ? (C = g(n, C))
                : C instanceof Date
                  ? (C = y(C))
                  : "comma" === a &&
                    l(C) &&
                    (C = i.maybeMap(C, function (e) {
                        return e instanceof Date ? y(e) : e;
                    })),
            null === C)
        ) {
            if (c) return m && !v ? m(n, p.encoder, S, "key", O) : n;
            C = "";
        }
        if (_(C) || i.isBuffer(C))
            return m
                ? [A(v ? n : m(n, p.encoder, S, "key", O)) + "=" + A(m(C, p.encoder, S, "value", O))]
                : [A(n) + "=" + A(String(C))];
        var D = [];
        if (void 0 === C) return D;
        if ("comma" === a && l(C))
            v && m && (C = i.maybeMap(C, m)), (T = [{ value: C.length > 0 ? C.join(",") || null : void 0 }]);
        else if (l(g)) T = g;
        else {
            var x = Object.keys(C);
            T = E ? x.sort(E) : x;
        }
        var L = f ? String(n).replace(/\./g, "%2E") : String(n),
            j = s && l(C) && 1 === C.length ? L + "[]" : L;
        if (o && l(C) && 0 === C.length) return j + "[]";
        for (var M = 0; M < T.length; ++M) {
            var k = T[M],
                U = "object" == typeof k && k && void 0 !== k.value ? k.value : C[k];
            if (!d || null !== U) {
                var G = b && f ? String(k).replace(/\./g, "%2E") : String(k),
                    V = l(C) ? ("function" == typeof a ? a(j, G) : j) : j + (b ? "." + G : "[" + G + "]");
                I.set(t, R);
                var F = r();
                F.set(h, I),
                    u(D, e(U, V, a, s, o, c, d, f, "comma" === a && v && l(C) ? null : m, g, E, b, y, O, A, v, S, F));
            }
        }
        return D;
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
            if (!s.call(a.formatters, e.format)) throw TypeError("Unknown format option provided.");
            r = e.format;
        }
        var i = a.formatters[r],
            c = p.filter;
        if (
            (("function" == typeof e.filter || l(e.filter)) && (c = e.filter),
            (t =
                e.arrayFormat in o
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
        s = g(t);
    "function" == typeof s.filter ? (a = (i = s.filter)("", a)) : l(s.filter) && (n = i = s.filter);
    var c = [];
    if ("object" != typeof a || null === a) return "";
    var d = o[s.arrayFormat],
        f = "comma" === d && s.commaRoundTrip;
    n || (n = Object.keys(a)), s.sort && n.sort(s.sort);
    for (var p = r(), _ = 0; _ < n.length; ++_) {
        var h = n[_],
            E = a[h];
        (s.skipNulls && null === E) ||
            u(
                c,
                m(
                    E,
                    h,
                    d,
                    f,
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
                    p,
                ),
            );
    }
    var b = c.join(s.delimiter),
        y = !0 === s.addQueryPrefix ? "?" : "";
    return (
        s.charsetSentinel && ("iso-8859-1" === s.charset ? (y += "utf8=%26%2310003%3B&") : (y += "utf8=%E2%9C%93&")),
        b.length > 0 ? y + b : ""
    );
};
