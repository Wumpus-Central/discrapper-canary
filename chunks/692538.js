var r = n(995769),
    i = Object.prototype.hasOwnProperty,
    o = Array.isArray,
    a = {
        allowDots: !1,
        allowEmptyArrays: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decodeDotInKeys: !0,
        decoder: r.decode,
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
    s = function (e) {
        return e.replace(/&#(\d+);/g, function (e, t) {
            return String.fromCharCode(parseInt(t, 10));
        });
    },
    l = function (e, t) {
        return e && 'string' == typeof e && t.comma && e.indexOf(',') > -1 ? e.split(',') : e;
    },
    c = 'utf8=%26%2310003%3B',
    u = 'utf8=%E2%9C%93',
    d = function (e, t) {
        var n = { __proto__: null },
            d = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
            f = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
            _ = d.split(t.delimiter, f),
            p = -1,
            h = t.charset;
        if (t.charsetSentinel) for (m = 0; m < _.length; ++m) 0 === _[m].indexOf('utf8=') && (_[m] === u ? (h = 'utf-8') : _[m] === c && (h = 'iso-8859-1'), (p = m), (m = _.length));
        for (m = 0; m < _.length; ++m)
            if (m !== p) {
                var m,
                    g,
                    E,
                    b = _[m],
                    y = b.indexOf(']='),
                    v = -1 === y ? b.indexOf('=') : y + 1;
                -1 === v
                    ? ((g = t.decoder(b, a.decoder, h, 'key')), (E = t.strictNullHandling ? null : ''))
                    : ((g = t.decoder(b.slice(0, v), a.decoder, h, 'key')),
                      (E = r.maybeMap(l(b.slice(v + 1), t), function (e) {
                          return t.decoder(e, a.decoder, h, 'value');
                      }))),
                    E && t.interpretNumericEntities && 'iso-8859-1' === h && (E = s(E)),
                    b.indexOf('[]=') > -1 && (E = o(E) ? [E] : E);
                var O = i.call(n, g);
                O && 'combine' === t.duplicates ? (n[g] = r.combine(n[g], E)) : (O && 'last' !== t.duplicates) || (n[g] = E);
            }
        return n;
    },
    f = function (e, t, n, r) {
        for (var i = r ? t : l(t, n), o = e.length - 1; o >= 0; --o) {
            var a,
                s = e[o];
            if ('[]' === s && n.parseArrays) a = n.allowEmptyArrays && '' === i ? [] : [].concat(i);
            else {
                a = n.plainObjects ? Object.create(null) : {};
                var c = '[' === s.charAt(0) && ']' === s.charAt(s.length - 1) ? s.slice(1, -1) : s,
                    u = n.decodeDotInKeys ? c.replace(/%2E/g, '.') : c,
                    d = parseInt(u, 10);
                n.parseArrays || '' !== u ? (!isNaN(d) && s !== u && String(d) === u && d >= 0 && n.parseArrays && d <= n.arrayLimit ? ((a = [])[d] = i) : '__proto__' !== u && (a[u] = i)) : (a = { 0: i });
            }
            i = a;
        }
        return i;
    },
    _ = function (e, t, n, r) {
        if (e) {
            var o = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
                a = /(\[[^[\]]*])/,
                s = /(\[[^[\]]*])/g,
                l = n.depth > 0 && a.exec(o),
                c = l ? o.slice(0, l.index) : o,
                u = [];
            if (c) {
                if (!n.plainObjects && i.call(Object.prototype, c) && !n.allowPrototypes) return;
                u.push(c);
            }
            for (var d = 0; n.depth > 0 && null !== (l = s.exec(o)) && d < n.depth; ) {
                if (((d += 1), !n.plainObjects && i.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)) return;
                u.push(l[1]);
            }
            return l && u.push('[' + o.slice(l.index) + ']'), f(u, t, n, r);
        }
    },
    p = function (e) {
        if (!e) return a;
        if (void 0 !== e.allowEmptyArrays && 'boolean' != typeof e.allowEmptyArrays) throw TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
        if (void 0 !== e.decodeDotInKeys && 'boolean' != typeof e.decodeDotInKeys) throw TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
        if (null !== e.decoder && void 0 !== e.decoder && 'function' != typeof e.decoder) throw TypeError('Decoder has to be a function.');
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var t = void 0 === e.charset ? a.charset : e.charset,
            n = void 0 === e.duplicates ? a.duplicates : e.duplicates;
        if ('combine' !== n && 'first' !== n && 'last' !== n) throw TypeError('The duplicates option must be either combine, first, or last');
        return {
            allowDots: void 0 === e.allowDots ? !0 === e.decodeDotInKeys || a.allowDots : !!e.allowDots,
            allowEmptyArrays: 'boolean' == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : a.allowEmptyArrays,
            allowPrototypes: 'boolean' == typeof e.allowPrototypes ? e.allowPrototypes : a.allowPrototypes,
            allowSparse: 'boolean' == typeof e.allowSparse ? e.allowSparse : a.allowSparse,
            arrayLimit: 'number' == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
            charset: t,
            charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : a.charsetSentinel,
            comma: 'boolean' == typeof e.comma ? e.comma : a.comma,
            decodeDotInKeys: 'boolean' == typeof e.decodeDotInKeys ? e.decodeDotInKeys : a.decodeDotInKeys,
            decoder: 'function' == typeof e.decoder ? e.decoder : a.decoder,
            delimiter: 'string' == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
            depth: 'number' == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
            duplicates: n,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities: 'boolean' == typeof e.interpretNumericEntities ? e.interpretNumericEntities : a.interpretNumericEntities,
            parameterLimit: 'number' == typeof e.parameterLimit ? e.parameterLimit : a.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects: 'boolean' == typeof e.plainObjects ? e.plainObjects : a.plainObjects,
            strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : a.strictNullHandling
        };
    };
e.exports = function (e, t) {
    var n = p(t);
    if ('' === e || null == e) return n.plainObjects ? Object.create(null) : {};
    for (var i = 'string' == typeof e ? d(e, n) : e, o = n.plainObjects ? Object.create(null) : {}, a = Object.keys(i), s = 0; s < a.length; ++s) {
        var l = a[s],
            c = _(l, i[l], n, 'string' == typeof e);
        o = r.merge(o, c, n);
    }
    return !0 === n.allowSparse ? o : r.compact(o);
};
