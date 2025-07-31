var r = n(260674),
    i = n(288660),
    a = n(72689),
    o = Object.prototype.hasOwnProperty,
    s = {
        brackets: function (e) {
            return e + '[]';
        },
        comma: 'comma',
        indices: function (e, t) {
            return e + '[' + t + ']';
        },
        repeat: function (e) {
            return e;
        }
    },
    l = Array.isArray,
    c = Array.prototype.push,
    u = function (e, t) {
        c.apply(e, l(t) ? t : [t]);
    },
    d = Date.prototype.toISOString,
    _ = a.default,
    f = {
        addQueryPrefix: !1,
        allowDots: !1,
        allowEmptyArrays: !1,
        arrayFormat: 'indices',
        charset: 'utf-8',
        charsetSentinel: !1,
        commaRoundTrip: !1,
        delimiter: '&',
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
        strictNullHandling: !1
    },
    p = function (e) {
        return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e || 'symbol' == typeof e || 'bigint' == typeof e;
    },
    h = {},
    m = function e(t, n, a, o, s, c, d, _, m, g, E, b, y, O, v, I, T, S) {
        for (var A, N = t, C = S, R = 0, P = !1; void 0 !== (C = C.get(h)) && !P; ) {
            var w = C.get(t);
            if (((R += 1), void 0 !== w))
                if (w === R) throw RangeError('Cyclic object value');
                else P = !0;
            void 0 === C.get(h) && (R = 0);
        }
        if (
            ('function' == typeof g
                ? (N = g(n, N))
                : N instanceof Date
                  ? (N = y(N))
                  : 'comma' === a &&
                    l(N) &&
                    (N = i.maybeMap(N, function (e) {
                        return e instanceof Date ? y(e) : e;
                    })),
            null === N)
        ) {
            if (c) return m && !I ? m(n, f.encoder, T, 'key', O) : n;
            N = '';
        }
        if (p(N) || i.isBuffer(N)) return m ? [v(I ? n : m(n, f.encoder, T, 'key', O)) + '=' + v(m(N, f.encoder, T, 'value', O))] : [v(n) + '=' + v(String(N))];
        var D = [];
        if (void 0 === N) return D;
        if ('comma' === a && l(N)) (I && m && (N = i.maybeMap(N, m)), (A = [{ value: N.length > 0 ? N.join(',') || null : void 0 }]));
        else if (l(g)) A = g;
        else {
            var L = Object.keys(N);
            A = E ? L.sort(E) : L;
        }
        var x = _ ? String(n).replace(/\./g, '%2E') : String(n),
            k = o && l(N) && 1 === N.length ? x + '[]' : x;
        if (s && l(N) && 0 === N.length) return k + '[]';
        for (var M = 0; M < A.length; ++M) {
            var j = A[M],
                U = 'object' == typeof j && j && void 0 !== j.value ? j.value : N[j];
            if (!d || null !== U) {
                var G = b && _ ? String(j).replace(/\./g, '%2E') : String(j),
                    B = l(N) ? ('function' == typeof a ? a(k, G) : k) : k + (b ? '.' + G : '[' + G + ']');
                S.set(t, R);
                var V = r();
                (V.set(h, S), u(D, e(U, B, a, o, s, c, d, _, 'comma' === a && I && l(N) ? null : m, g, E, b, y, O, v, I, T, V)));
            }
        }
        return D;
    },
    g = function (e) {
        if (!e) return f;
        if (void 0 !== e.allowEmptyArrays && 'boolean' != typeof e.allowEmptyArrays) throw TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
        if (void 0 !== e.encodeDotInKeys && 'boolean' != typeof e.encodeDotInKeys) throw TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
        if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder) throw TypeError('Encoder has to be a function.');
        var t,
            n = e.charset || f.charset;
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var r = a.default;
        if (void 0 !== e.format) {
            if (!o.call(a.formatters, e.format)) throw TypeError('Unknown format option provided.');
            r = e.format;
        }
        var i = a.formatters[r],
            c = f.filter;
        if ((('function' == typeof e.filter || l(e.filter)) && (c = e.filter), (t = e.arrayFormat in s ? e.arrayFormat : 'indices' in e ? (e.indices ? 'indices' : 'repeat') : f.arrayFormat), 'commaRoundTrip' in e && 'boolean' != typeof e.commaRoundTrip)) throw TypeError('`commaRoundTrip` must be a boolean, or absent');
        var u = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || f.allowDots : !!e.allowDots;
        return {
            addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : f.addQueryPrefix,
            allowDots: u,
            allowEmptyArrays: 'boolean' == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : f.allowEmptyArrays,
            arrayFormat: t,
            charset: n,
            charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : f.charsetSentinel,
            commaRoundTrip: !!e.commaRoundTrip,
            delimiter: void 0 === e.delimiter ? f.delimiter : e.delimiter,
            encode: 'boolean' == typeof e.encode ? e.encode : f.encode,
            encodeDotInKeys: 'boolean' == typeof e.encodeDotInKeys ? e.encodeDotInKeys : f.encodeDotInKeys,
            encoder: 'function' == typeof e.encoder ? e.encoder : f.encoder,
            encodeValuesOnly: 'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : f.encodeValuesOnly,
            filter: c,
            format: r,
            formatter: i,
            serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : f.serializeDate,
            skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : f.skipNulls,
            sort: 'function' == typeof e.sort ? e.sort : null,
            strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : f.strictNullHandling
        };
    };
e.exports = function (e, t) {
    var n,
        i,
        a = e,
        o = g(t);
    'function' == typeof o.filter ? (a = (i = o.filter)('', a)) : l(o.filter) && (n = i = o.filter);
    var c = [];
    if ('object' != typeof a || null === a) return '';
    var d = s[o.arrayFormat],
        _ = 'comma' === d && o.commaRoundTrip;
    (n || (n = Object.keys(a)), o.sort && n.sort(o.sort));
    for (var f = r(), p = 0; p < n.length; ++p) {
        var h = n[p],
            E = a[h];
        (o.skipNulls && null === E) || u(c, m(E, h, d, _, o.allowEmptyArrays, o.strictNullHandling, o.skipNulls, o.encodeDotInKeys, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset, f));
    }
    var b = c.join(o.delimiter),
        y = !0 === o.addQueryPrefix ? '?' : '';
    return (o.charsetSentinel && ('iso-8859-1' === o.charset ? (y += 'utf8=%26%2310003%3B&') : (y += 'utf8=%E2%9C%93&')), b.length > 0 ? y + b : '');
};
