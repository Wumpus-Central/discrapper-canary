var i = n(995769),
    r = Object.prototype.hasOwnProperty,
    a = Array.isArray,
    s = {
        allowDots: !1,
        allowEmptyArrays: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decodeDotInKeys: !0,
        decoder: i.decode,
        delimiter: '&',
        depth: 5,
        duplicates: 'combine',
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1000,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    o = function (e) {
        return e.replace(/&#(\d+);/g, function (e, t) {
            return String.fromCharCode(parseInt(t, 10));
        });
    },
    l = function (e, t) {
        return e && 'string' == typeof e && t.comma && e.indexOf(',') > -1 ? e.split(',') : e;
    },
    u = 'utf8=%26%2310003%3B',
    c = 'utf8=%E2%9C%93',
    d = function (e, t) {
        var n = { __proto__: null },
            d = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
            f = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
            _ = d.split(t.delimiter, f),
            p = -1,
            h = t.charset;
        if (t.charsetSentinel) for (m = 0; m < _.length; ++m) 0 === _[m].indexOf('utf8=') && (_[m] === c ? (h = 'utf-8') : _[m] === u && (h = 'iso-8859-1'), (p = m), (m = _.length));
        for (m = 0; m < _.length; ++m)
            if (m !== p) {
                var m,
                    g,
                    E,
                    v = _[m],
                    y = v.indexOf(']='),
                    I = -1 === y ? v.indexOf('=') : y + 1;
                -1 === I
                    ? ((g = t.decoder(v, s.decoder, h, 'key')), (E = t.strictNullHandling ? null : ''))
                    : ((g = t.decoder(v.slice(0, I), s.decoder, h, 'key')),
                      (E = i.maybeMap(l(v.slice(I + 1), t), function (e) {
                          return t.decoder(e, s.decoder, h, 'value');
                      }))),
                    E && t.interpretNumericEntities && 'iso-8859-1' === h && (E = o(E)),
                    v.indexOf('[]=') > -1 && (E = a(E) ? [E] : E);
                var T = r.call(n, g);
                T && 'combine' === t.duplicates ? (n[g] = i.combine(n[g], E)) : (T && 'last' !== t.duplicates) || (n[g] = E);
            }
        return n;
    },
    f = function (e, t, n, i) {
        for (var r = i ? t : l(t, n), a = e.length - 1; a >= 0; --a) {
            var s,
                o = e[a];
            if ('[]' === o && n.parseArrays) s = n.allowEmptyArrays && '' === r ? [] : [].concat(r);
            else {
                s = n.plainObjects ? Object.create(null) : {};
                var u = '[' === o.charAt(0) && ']' === o.charAt(o.length - 1) ? o.slice(1, -1) : o,
                    c = n.decodeDotInKeys ? u.replace(/%2E/g, '.') : u,
                    d = parseInt(c, 10);
                n.parseArrays || '' !== c ? (!isNaN(d) && o !== c && String(d) === c && d >= 0 && n.parseArrays && d <= n.arrayLimit ? ((s = [])[d] = r) : '__proto__' !== c && (s[c] = r)) : (s = { 0: r });
            }
            r = s;
        }
        return r;
    },
    _ = function (e, t, n, i) {
        if (e) {
            var a = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
                s = /(\[[^[\]]*])/,
                o = /(\[[^[\]]*])/g,
                l = n.depth > 0 && s.exec(a),
                u = l ? a.slice(0, l.index) : a,
                c = [];
            if (u) {
                if (!n.plainObjects && r.call(Object.prototype, u) && !n.allowPrototypes) return;
                c.push(u);
            }
            for (var d = 0; n.depth > 0 && null !== (l = o.exec(a)) && d < n.depth; ) {
                if (((d += 1), !n.plainObjects && r.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)) return;
                c.push(l[1]);
            }
            return l && c.push('[' + a.slice(l.index) + ']'), f(c, t, n, i);
        }
    },
    p = function (e) {
        if (!e) return s;
        if (void 0 !== e.allowEmptyArrays && 'boolean' != typeof e.allowEmptyArrays) throw TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
        if (void 0 !== e.decodeDotInKeys && 'boolean' != typeof e.decodeDotInKeys) throw TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
        if (null !== e.decoder && void 0 !== e.decoder && 'function' != typeof e.decoder) throw TypeError('Decoder has to be a function.');
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var t = void 0 === e.charset ? s.charset : e.charset,
            n = void 0 === e.duplicates ? s.duplicates : e.duplicates;
        if ('combine' !== n && 'first' !== n && 'last' !== n) throw TypeError('The duplicates option must be either combine, first, or last');
        return {
            allowDots: void 0 === e.allowDots ? !0 === e.decodeDotInKeys || s.allowDots : !!e.allowDots,
            allowEmptyArrays: 'boolean' == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : s.allowEmptyArrays,
            allowPrototypes: 'boolean' == typeof e.allowPrototypes ? e.allowPrototypes : s.allowPrototypes,
            allowSparse: 'boolean' == typeof e.allowSparse ? e.allowSparse : s.allowSparse,
            arrayLimit: 'number' == typeof e.arrayLimit ? e.arrayLimit : s.arrayLimit,
            charset: t,
            charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : s.charsetSentinel,
            comma: 'boolean' == typeof e.comma ? e.comma : s.comma,
            decodeDotInKeys: 'boolean' == typeof e.decodeDotInKeys ? e.decodeDotInKeys : s.decodeDotInKeys,
            decoder: 'function' == typeof e.decoder ? e.decoder : s.decoder,
            delimiter: 'string' == typeof e.delimiter || i.isRegExp(e.delimiter) ? e.delimiter : s.delimiter,
            depth: 'number' == typeof e.depth || !1 === e.depth ? +e.depth : s.depth,
            duplicates: n,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities: 'boolean' == typeof e.interpretNumericEntities ? e.interpretNumericEntities : s.interpretNumericEntities,
            parameterLimit: 'number' == typeof e.parameterLimit ? e.parameterLimit : s.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects: 'boolean' == typeof e.plainObjects ? e.plainObjects : s.plainObjects,
            strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : s.strictNullHandling
        };
    };
e.exports = function (e, t) {
    var n = p(t);
    if ('' === e || null == e) return n.plainObjects ? Object.create(null) : {};
    for (var r = 'string' == typeof e ? d(e, n) : e, a = n.plainObjects ? Object.create(null) : {}, s = Object.keys(r), o = 0; o < s.length; ++o) {
        var l = s[o],
            u = _(l, r[l], n, 'string' == typeof e);
        a = i.merge(a, u, n);
    }
    return !0 === n.allowSparse ? a : i.compact(a);
};
