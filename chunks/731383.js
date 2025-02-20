var r = n(728804),
    i = n(505388),
    o = n(363406),
    a = Object.prototype.hasOwnProperty,
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
    f = o.default,
    p = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: i.encode,
        encodeValuesOnly: !1,
        format: f,
        formatter: o.formatters[f],
        indices: !1,
        serializeDate: function (e) {
            return d.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    _ = function (e) {
        return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e || 'symbol' == typeof e || 'bigint' == typeof e;
    },
    h = {},
    m = function e(t, n, o, a, s, c, d, f, m, g, E, v, b, y, O, S) {
        for (var I, T = t, N = S, A = 0, C = !1; void 0 !== (N = N.get(h)) && !C; ) {
            var R = N.get(t);
            if (((A += 1), void 0 !== R)) {
                if (R === A) throw RangeError('Cyclic object value');
                C = !0;
            }
            void 0 === N.get(h) && (A = 0);
        }
        if (
            ('function' == typeof f
                ? (T = f(n, T))
                : T instanceof Date
                  ? (T = E(T))
                  : 'comma' === o &&
                    l(T) &&
                    (T = i.maybeMap(T, function (e) {
                        return e instanceof Date ? E(e) : e;
                    })),
            null === T)
        ) {
            if (s) return d && !y ? d(n, p.encoder, O, 'key', v) : n;
            T = '';
        }
        if (_(T) || i.isBuffer(T)) return d ? [b(y ? n : d(n, p.encoder, O, 'key', v)) + '=' + b(d(T, p.encoder, O, 'value', v))] : [b(n) + '=' + b(String(T))];
        var P = [];
        if (void 0 === T) return P;
        if ('comma' === o && l(T)) y && d && (T = i.maybeMap(T, d)), (I = [{ value: T.length > 0 ? T.join(',') || null : void 0 }]);
        else if (l(f)) I = f;
        else {
            var w = Object.keys(T);
            I = m ? w.sort(m) : w;
        }
        for (var D = a && l(T) && 1 === T.length ? n + '[]' : n, x = 0; x < I.length; ++x) {
            var L = I[x],
                M = 'object' == typeof L && void 0 !== L.value ? L.value : T[L];
            if (!c || null !== M) {
                var k = l(T) ? ('function' == typeof o ? o(D, L) : D) : D + (g ? '.' + L : '[' + L + ']');
                S.set(t, A);
                var j = r();
                j.set(h, S), u(P, e(M, k, o, a, s, c, 'comma' === o && y && l(T) ? null : d, f, m, g, E, v, b, y, O, j));
            }
        }
        return P;
    },
    g = function (e) {
        if (!e) return p;
        if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder) throw TypeError('Encoder has to be a function.');
        var t = e.charset || p.charset;
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var n = o.default;
        if (void 0 !== e.format) {
            if (!a.call(o.formatters, e.format)) throw TypeError('Unknown format option provided.');
            n = e.format;
        }
        var r = o.formatters[n],
            i = p.filter;
        return (
            ('function' == typeof e.filter || l(e.filter)) && (i = e.filter),
            {
                addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? p.allowDots : !!e.allowDots,
                charset: t,
                charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
                delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
                encode: 'boolean' == typeof e.encode ? e.encode : p.encode,
                encoder: 'function' == typeof e.encoder ? e.encoder : p.encoder,
                encodeValuesOnly: 'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
                filter: i,
                format: n,
                formatter: r,
                serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
                skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
                sort: 'function' == typeof e.sort ? e.sort : null,
                strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
            }
        );
    };
e.exports = function (e, t) {
    var n,
        i,
        o,
        a = e,
        c = g(t);
    'function' == typeof c.filter ? (a = (i = c.filter)('', a)) : l(c.filter) && (n = i = c.filter);
    var d = [];
    if ('object' != typeof a || null === a) return '';
    o = t && t.arrayFormat in s ? t.arrayFormat : t && 'indices' in t ? (t.indices ? 'indices' : 'repeat') : 'indices';
    var f = s[o];
    if (t && 'commaRoundTrip' in t && 'boolean' != typeof t.commaRoundTrip) throw TypeError('`commaRoundTrip` must be a boolean, or absent');
    var p = 'comma' === f && t && t.commaRoundTrip;
    n || (n = Object.keys(a)), c.sort && n.sort(c.sort);
    for (var _ = r(), h = 0; h < n.length; ++h) {
        var E = n[h];
        (!c.skipNulls || null !== a[E]) && u(d, m(a[E], E, f, p, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.format, c.formatter, c.encodeValuesOnly, c.charset, _));
    }
    var v = d.join(c.delimiter),
        b = !0 === c.addQueryPrefix ? '?' : '';
    return c.charsetSentinel && ('iso-8859-1' === c.charset ? (b += 'utf8=%26%2310003%3B&') : (b += 'utf8=%E2%9C%93&')), v.length > 0 ? b + v : '';
};
