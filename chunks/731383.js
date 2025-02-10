var i = n(728804),
    r = n(505388),
    a = n(363406),
    s = Object.prototype.hasOwnProperty,
    o = {
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
    u = Array.prototype.push,
    c = function (e, t) {
        u.apply(e, l(t) ? t : [t]);
    },
    d = Date.prototype.toISOString,
    f = a.default,
    _ = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: r.encode,
        encodeValuesOnly: !1,
        format: f,
        formatter: a.formatters[f],
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
    m = function e(t, n, a, s, o, u, d, f, m, g, E, v, y, I, T, b) {
        for (var S, A = t, N = b, C = 0, R = !1; void 0 !== (N = N.get(h)) && !R; ) {
            var O = N.get(t);
            if (((C += 1), void 0 !== O)) {
                if (O === C) throw RangeError('Cyclic object value');
                R = !0;
            }
            void 0 === N.get(h) && (C = 0);
        }
        if (
            ('function' == typeof f
                ? (A = f(n, A))
                : A instanceof Date
                  ? (A = E(A))
                  : 'comma' === a &&
                    l(A) &&
                    (A = r.maybeMap(A, function (e) {
                        return e instanceof Date ? E(e) : e;
                    })),
            null === A)
        ) {
            if (o) return d && !I ? d(n, _.encoder, T, 'key', v) : n;
            A = '';
        }
        if (p(A) || r.isBuffer(A)) return d ? [y(I ? n : d(n, _.encoder, T, 'key', v)) + '=' + y(d(A, _.encoder, T, 'value', v))] : [y(n) + '=' + y(String(A))];
        var D = [];
        if (void 0 === A) return D;
        if ('comma' === a && l(A)) I && d && (A = r.maybeMap(A, d)), (S = [{ value: A.length > 0 ? A.join(',') || null : void 0 }]);
        else if (l(f)) S = f;
        else {
            var L = Object.keys(A);
            S = m ? L.sort(m) : L;
        }
        for (var x = s && l(A) && 1 === A.length ? n + '[]' : n, w = 0; w < S.length; ++w) {
            var P = S[w],
                M = 'object' == typeof P && void 0 !== P.value ? P.value : A[P];
            if (!u || null !== M) {
                var k = l(A) ? ('function' == typeof a ? a(x, P) : x) : x + (g ? '.' + P : '[' + P + ']');
                b.set(t, C);
                var U = i();
                U.set(h, b), c(D, e(M, k, a, s, o, u, 'comma' === a && I && l(A) ? null : d, f, m, g, E, v, y, I, T, U));
            }
        }
        return D;
    },
    g = function (e) {
        if (!e) return _;
        if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder) throw TypeError('Encoder has to be a function.');
        var t = e.charset || _.charset;
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var n = a.default;
        if (void 0 !== e.format) {
            if (!s.call(a.formatters, e.format)) throw TypeError('Unknown format option provided.');
            n = e.format;
        }
        var i = a.formatters[n],
            r = _.filter;
        return (
            ('function' == typeof e.filter || l(e.filter)) && (r = e.filter),
            {
                addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : _.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? _.allowDots : !!e.allowDots,
                charset: t,
                charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : _.charsetSentinel,
                delimiter: void 0 === e.delimiter ? _.delimiter : e.delimiter,
                encode: 'boolean' == typeof e.encode ? e.encode : _.encode,
                encoder: 'function' == typeof e.encoder ? e.encoder : _.encoder,
                encodeValuesOnly: 'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : _.encodeValuesOnly,
                filter: r,
                format: n,
                formatter: i,
                serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : _.serializeDate,
                skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : _.skipNulls,
                sort: 'function' == typeof e.sort ? e.sort : null,
                strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : _.strictNullHandling
            }
        );
    };
e.exports = function (e, t) {
    var n,
        r,
        a,
        s = e,
        u = g(t);
    'function' == typeof u.filter ? (s = (r = u.filter)('', s)) : l(u.filter) && (n = r = u.filter);
    var d = [];
    if ('object' != typeof s || null === s) return '';
    a = t && t.arrayFormat in o ? t.arrayFormat : t && 'indices' in t ? (t.indices ? 'indices' : 'repeat') : 'indices';
    var f = o[a];
    if (t && 'commaRoundTrip' in t && 'boolean' != typeof t.commaRoundTrip) throw TypeError('`commaRoundTrip` must be a boolean, or absent');
    var _ = 'comma' === f && t && t.commaRoundTrip;
    n || (n = Object.keys(s)), u.sort && n.sort(u.sort);
    for (var p = i(), h = 0; h < n.length; ++h) {
        var E = n[h];
        (!u.skipNulls || null !== s[E]) && c(d, m(s[E], E, f, _, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, p));
    }
    var v = d.join(u.delimiter),
        y = !0 === u.addQueryPrefix ? '?' : '';
    return u.charsetSentinel && ('iso-8859-1' === u.charset ? (y += 'utf8=%26%2310003%3B&') : (y += 'utf8=%E2%9C%93&')), v.length > 0 ? y + v : '';
};
