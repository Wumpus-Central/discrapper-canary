var i = r(728804),
    a = r(505388),
    o = r(363406),
    s = Object.prototype.hasOwnProperty,
    l = {
        brackets: function (e) {
            return e + '[]';
        },
        comma: 'comma',
        indices: function (e, n) {
            return e + '[' + n + ']';
        },
        repeat: function (e) {
            return e;
        }
    },
    u = Array.isArray,
    c = Array.prototype.push,
    d = function (e, n) {
        c.apply(e, u(n) ? n : [n]);
    },
    f = Date.prototype.toISOString,
    p = o.default,
    h = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: a.encode,
        encodeValuesOnly: !1,
        format: p,
        formatter: o.formatters[p],
        indices: !1,
        serializeDate: function (e) {
            return f.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    _ = function (e) {
        return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e || 'symbol' == typeof e || 'bigint' == typeof e;
    },
    m = {},
    g = function e(n, r, o, s, l, c, f, p, g, E, v, y, b, I, T, S) {
        for (var A, C = n, N = S, R = 0, O = !1; void 0 !== (N = N.get(m)) && !O; ) {
            var D = N.get(n);
            if (((R += 1), void 0 !== D)) {
                if (D === R) throw RangeError('Cyclic object value');
                O = !0;
            }
            void 0 === N.get(m) && (R = 0);
        }
        if (
            ('function' == typeof p
                ? (C = p(r, C))
                : C instanceof Date
                  ? (C = v(C))
                  : 'comma' === o &&
                    u(C) &&
                    (C = a.maybeMap(C, function (e) {
                        return e instanceof Date ? v(e) : e;
                    })),
            null === C)
        ) {
            if (l) return f && !I ? f(r, h.encoder, T, 'key', y) : r;
            C = '';
        }
        if (_(C) || a.isBuffer(C)) return f ? [b(I ? r : f(r, h.encoder, T, 'key', y)) + '=' + b(f(C, h.encoder, T, 'value', y))] : [b(r) + '=' + b(String(C))];
        var x = [];
        if (void 0 === C) return x;
        if ('comma' === o && u(C)) I && f && (C = a.maybeMap(C, f)), (A = [{ value: C.length > 0 ? C.join(',') || null : void 0 }]);
        else if (u(p)) A = p;
        else {
            var L = Object.keys(C);
            A = g ? L.sort(g) : L;
        }
        for (var w = s && u(C) && 1 === C.length ? r + '[]' : r, P = 0; P < A.length; ++P) {
            var M = A[P],
                k = 'object' == typeof M && void 0 !== M.value ? M.value : C[M];
            if (!c || null !== k) {
                var U = u(C) ? ('function' == typeof o ? o(w, M) : w) : w + (E ? '.' + M : '[' + M + ']');
                S.set(n, R);
                var B = i();
                B.set(m, S), d(x, e(k, U, o, s, l, c, 'comma' === o && I && u(C) ? null : f, p, g, E, v, y, b, I, T, B));
            }
        }
        return x;
    },
    E = function (e) {
        if (!e) return h;
        if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder) throw TypeError('Encoder has to be a function.');
        var n = e.charset || h.charset;
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var r = o.default;
        if (void 0 !== e.format) {
            if (!s.call(o.formatters, e.format)) throw TypeError('Unknown format option provided.');
            r = e.format;
        }
        var i = o.formatters[r],
            a = h.filter;
        return (
            ('function' == typeof e.filter || u(e.filter)) && (a = e.filter),
            {
                addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : h.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? h.allowDots : !!e.allowDots,
                charset: n,
                charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : h.charsetSentinel,
                delimiter: void 0 === e.delimiter ? h.delimiter : e.delimiter,
                encode: 'boolean' == typeof e.encode ? e.encode : h.encode,
                encoder: 'function' == typeof e.encoder ? e.encoder : h.encoder,
                encodeValuesOnly: 'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : h.encodeValuesOnly,
                filter: a,
                format: r,
                formatter: i,
                serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : h.serializeDate,
                skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : h.skipNulls,
                sort: 'function' == typeof e.sort ? e.sort : null,
                strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : h.strictNullHandling
            }
        );
    };
e.exports = function (e, n) {
    var r,
        a,
        o,
        s = e,
        c = E(n);
    'function' == typeof c.filter ? (s = (a = c.filter)('', s)) : u(c.filter) && (r = a = c.filter);
    var f = [];
    if ('object' != typeof s || null === s) return '';
    o = n && n.arrayFormat in l ? n.arrayFormat : n && 'indices' in n ? (n.indices ? 'indices' : 'repeat') : 'indices';
    var p = l[o];
    if (n && 'commaRoundTrip' in n && 'boolean' != typeof n.commaRoundTrip) throw TypeError('`commaRoundTrip` must be a boolean, or absent');
    var h = 'comma' === p && n && n.commaRoundTrip;
    !r && (r = Object.keys(s)), c.sort && r.sort(c.sort);
    for (var _ = i(), m = 0; m < r.length; ++m) {
        var v = r[m];
        if (!c.skipNulls || null !== s[v]) d(f, g(s[v], v, p, h, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.format, c.formatter, c.encodeValuesOnly, c.charset, _));
    }
    var y = f.join(c.delimiter),
        b = !0 === c.addQueryPrefix ? '?' : '';
    return c.charsetSentinel && ('iso-8859-1' === c.charset ? (b += 'utf8=%26%2310003%3B&') : (b += 'utf8=%E2%9C%93&')), y.length > 0 ? b + y : '';
};
