var i = r(505388),
    a = Object.prototype.hasOwnProperty,
    o = Array.isArray,
    s = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decoder: i.decode,
        delimiter: '&',
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1000,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    l = function (e) {
        return e.replace(/&#(\d+);/g, function (e, n) {
            return String.fromCharCode(parseInt(n, 10));
        });
    },
    u = function (e, n) {
        return e && 'string' == typeof e && n.comma && e.indexOf(',') > -1 ? e.split(',') : e;
    },
    c = 'utf8=%26%2310003%3B',
    d = 'utf8=%E2%9C%93',
    f = function (e, n) {
        var r = { __proto__: null },
            f = n.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
            p = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            h = f.split(n.delimiter, p),
            _ = -1,
            m = n.charset;
        if (n.charsetSentinel) for (g = 0; g < h.length; ++g) 0 === h[g].indexOf('utf8=') && (h[g] === d ? (m = 'utf-8') : h[g] === c && (m = 'iso-8859-1'), (_ = g), (g = h.length));
        for (g = 0; g < h.length; ++g) {
            if (g !== _) {
                var g,
                    E,
                    v,
                    y = h[g],
                    b = y.indexOf(']='),
                    I = -1 === b ? y.indexOf('=') : b + 1;
                -1 === I
                    ? ((E = n.decoder(y, s.decoder, m, 'key')), (v = n.strictNullHandling ? null : ''))
                    : ((E = n.decoder(y.slice(0, I), s.decoder, m, 'key')),
                      (v = i.maybeMap(u(y.slice(I + 1), n), function (e) {
                          return n.decoder(e, s.decoder, m, 'value');
                      }))),
                    v && n.interpretNumericEntities && 'iso-8859-1' === m && (v = l(v)),
                    y.indexOf('[]=') > -1 && (v = o(v) ? [v] : v),
                    a.call(r, E) ? (r[E] = i.combine(r[E], v)) : (r[E] = v);
            }
        }
        return r;
    },
    p = function (e, n, r, i) {
        for (var a = i ? n : u(n, r), o = e.length - 1; o >= 0; --o) {
            var s,
                l = e[o];
            if ('[]' === l && r.parseArrays) s = [].concat(a);
            else {
                s = r.plainObjects ? Object.create(null) : {};
                var c = '[' === l.charAt(0) && ']' === l.charAt(l.length - 1) ? l.slice(1, -1) : l,
                    d = parseInt(c, 10);
                r.parseArrays || '' !== c ? (!isNaN(d) && l !== c && String(d) === c && d >= 0 && r.parseArrays && d <= r.arrayLimit ? ((s = [])[d] = a) : '__proto__' !== c && (s[c] = a)) : (s = { 0: a });
            }
            a = s;
        }
        return a;
    },
    h = function (e, n, r, i) {
        if (!!e) {
            var o = r.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
                s = /(\[[^[\]]*])/,
                l = /(\[[^[\]]*])/g,
                u = r.depth > 0 && s.exec(o),
                c = u ? o.slice(0, u.index) : o,
                d = [];
            if (c) {
                if (!r.plainObjects && a.call(Object.prototype, c) && !r.allowPrototypes) return;
                d.push(c);
            }
            for (var f = 0; r.depth > 0 && null !== (u = l.exec(o)) && f < r.depth; ) {
                if (((f += 1), !r.plainObjects && a.call(Object.prototype, u[1].slice(1, -1)) && !r.allowPrototypes)) return;
                d.push(u[1]);
            }
            return u && d.push('[' + o.slice(u.index) + ']'), p(d, n, r, i);
        }
    },
    _ = function (e) {
        if (!e) return s;
        if (null !== e.decoder && void 0 !== e.decoder && 'function' != typeof e.decoder) throw TypeError('Decoder has to be a function.');
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var n = void 0 === e.charset ? s.charset : e.charset;
        return {
            allowDots: void 0 === e.allowDots ? s.allowDots : !!e.allowDots,
            allowPrototypes: 'boolean' == typeof e.allowPrototypes ? e.allowPrototypes : s.allowPrototypes,
            allowSparse: 'boolean' == typeof e.allowSparse ? e.allowSparse : s.allowSparse,
            arrayLimit: 'number' == typeof e.arrayLimit ? e.arrayLimit : s.arrayLimit,
            charset: n,
            charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : s.charsetSentinel,
            comma: 'boolean' == typeof e.comma ? e.comma : s.comma,
            decoder: 'function' == typeof e.decoder ? e.decoder : s.decoder,
            delimiter: 'string' == typeof e.delimiter || i.isRegExp(e.delimiter) ? e.delimiter : s.delimiter,
            depth: 'number' == typeof e.depth || !1 === e.depth ? +e.depth : s.depth,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities: 'boolean' == typeof e.interpretNumericEntities ? e.interpretNumericEntities : s.interpretNumericEntities,
            parameterLimit: 'number' == typeof e.parameterLimit ? e.parameterLimit : s.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects: 'boolean' == typeof e.plainObjects ? e.plainObjects : s.plainObjects,
            strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : s.strictNullHandling
        };
    };
e.exports = function (e, n) {
    var r = _(n);
    if ('' === e || null == e) return r.plainObjects ? Object.create(null) : {};
    for (var a = 'string' == typeof e ? f(e, r) : e, o = r.plainObjects ? Object.create(null) : {}, s = Object.keys(a), l = 0; l < s.length; ++l) {
        var u = s[l],
            c = h(u, a[u], r, 'string' == typeof e);
        o = i.merge(o, c, r);
    }
    return !0 === r.allowSparse ? o : i.compact(o);
};
