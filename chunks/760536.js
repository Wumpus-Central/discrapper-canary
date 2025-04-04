var r = n(288660),
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
        decodeDotInKeys: !1,
        decoder: r.decode,
        delimiter: '&',
        depth: 5,
        duplicates: 'combine',
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1000,
        parseArrays: !0,
        plainObjects: !1,
        strictDepth: !1,
        strictNullHandling: !1,
        throwOnLimitExceeded: !1
    },
    s = function (e) {
        return e.replace(/&#(\d+);/g, function (e, t) {
            return String.fromCharCode(parseInt(t, 10));
        });
    },
    l = function (e, t, n) {
        if (e && 'string' == typeof e && t.comma && e.indexOf(',') > -1) return e.split(',');
        if (t.throwOnLimitExceeded && n >= t.arrayLimit) throw RangeError('Array limit exceeded. Only ' + t.arrayLimit + ' element' + (1 === t.arrayLimit ? '' : 's') + ' allowed in an array.');
        return e;
    },
    c = 'utf8=%26%2310003%3B',
    u = 'utf8=%E2%9C%93',
    d = function (e, t) {
        var n = { __proto__: null },
            d = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e;
        d = d.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
        var f = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
            _ = d.split(t.delimiter, t.throwOnLimitExceeded ? f + 1 : f);
        if (t.throwOnLimitExceeded && _.length > f) throw RangeError('Parameter limit exceeded. Only ' + f + ' parameter' + (1 === f ? '' : 's') + ' allowed.');
        var p = -1,
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
                      (E = r.maybeMap(l(b.slice(v + 1), t, o(n[g]) ? n[g].length : 0), function (e) {
                          return t.decoder(e, a.decoder, h, 'value');
                      }))),
                    E && t.interpretNumericEntities && 'iso-8859-1' === h && (E = s(String(E))),
                    b.indexOf('[]=') > -1 && (E = o(E) ? [E] : E);
                var O = i.call(n, g);
                O && 'combine' === t.duplicates ? (n[g] = r.combine(n[g], E)) : (O && 'last' !== t.duplicates) || (n[g] = E);
            }
        return n;
    },
    f = function (e, t, n, i) {
        var o = 0;
        if (e.length > 0 && '[]' === e[e.length - 1]) {
            var a = e.slice(0, -1).join('');
            o = Array.isArray(t) && t[a] ? t[a].length : 0;
        }
        for (var s = i ? t : l(t, n, o), c = e.length - 1; c >= 0; --c) {
            var u,
                d = e[c];
            if ('[]' === d && n.parseArrays) u = n.allowEmptyArrays && ('' === s || (n.strictNullHandling && null === s)) ? [] : r.combine([], s);
            else {
                u = n.plainObjects ? { __proto__: null } : {};
                var f = '[' === d.charAt(0) && ']' === d.charAt(d.length - 1) ? d.slice(1, -1) : d,
                    _ = n.decodeDotInKeys ? f.replace(/%2E/g, '.') : f,
                    p = parseInt(_, 10);
                n.parseArrays || '' !== _ ? (!isNaN(p) && d !== _ && String(p) === _ && p >= 0 && n.parseArrays && p <= n.arrayLimit ? ((u = [])[p] = s) : '__proto__' !== _ && (u[_] = s)) : (u = { 0: s });
            }
            s = u;
        }
        return s;
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
            if (l) {
                if (!0 === n.strictDepth) throw RangeError('Input depth exceeded depth option of ' + n.depth + ' and strictDepth is true');
                u.push('[' + o.slice(l.index) + ']');
            }
            return f(u, t, n, r);
        }
    },
    p = function (e) {
        if (!e) return a;
        if (void 0 !== e.allowEmptyArrays && 'boolean' != typeof e.allowEmptyArrays) throw TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
        if (void 0 !== e.decodeDotInKeys && 'boolean' != typeof e.decodeDotInKeys) throw TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
        if (null !== e.decoder && void 0 !== e.decoder && 'function' != typeof e.decoder) throw TypeError('Decoder has to be a function.');
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        if (void 0 !== e.throwOnLimitExceeded && 'boolean' != typeof e.throwOnLimitExceeded) throw TypeError('`throwOnLimitExceeded` option must be a boolean');
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
            strictDepth: 'boolean' == typeof e.strictDepth ? !!e.strictDepth : a.strictDepth,
            strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : a.strictNullHandling,
            throwOnLimitExceeded: 'boolean' == typeof e.throwOnLimitExceeded && e.throwOnLimitExceeded
        };
    };
e.exports = function (e, t) {
    var n = p(t);
    if ('' === e || null == e) return n.plainObjects ? { __proto__: null } : {};
    for (var i = 'string' == typeof e ? d(e, n) : e, o = n.plainObjects ? { __proto__: null } : {}, a = Object.keys(i), s = 0; s < a.length; ++s) {
        var l = a[s],
            c = _(l, i[l], n, 'string' == typeof e);
        o = r.merge(o, c, n);
    }
    return !0 === n.allowSparse ? o : r.compact(o);
};
