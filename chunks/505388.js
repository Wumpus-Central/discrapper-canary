var i = r(363406),
    a = Object.prototype.hasOwnProperty,
    o = Array.isArray,
    s = (function () {
        for (var e = [], n = 0; n < 256; ++n) e.push('%' + ((n < 16 ? '0' : '') + n.toString(16)).toUpperCase());
        return e;
    })(),
    l = function (e) {
        for (; e.length > 1; ) {
            var n = e.pop(),
                r = n.obj[n.prop];
            if (o(r)) {
                for (var i = [], a = 0; a < r.length; ++a) void 0 !== r[a] && i.push(r[a]);
                n.obj[n.prop] = i;
            }
        }
    },
    u = function (e, n) {
        for (var r = n && n.plainObjects ? Object.create(null) : {}, i = 0; i < e.length; ++i) void 0 !== e[i] && (r[i] = e[i]);
        return r;
    },
    c = function e(n, r, i) {
        if (!r) return n;
        if ('object' != typeof r) {
            if (o(n)) n.push(r);
            else {
                if (!n || 'object' != typeof n) return [n, r];
                ((i && (i.plainObjects || i.allowPrototypes)) || !a.call(Object.prototype, r)) && (n[r] = !0);
            }
            return n;
        }
        if (!n || 'object' != typeof n) return [n].concat(r);
        var s = n;
        return (o(n) && !o(r) && (s = u(n, i)), o(n) && o(r))
            ? (r.forEach(function (r, o) {
                  if (a.call(n, o)) {
                      var s = n[o];
                      s && 'object' == typeof s && r && 'object' == typeof r ? (n[o] = e(s, r, i)) : n.push(r);
                  } else n[o] = r;
              }),
              n)
            : Object.keys(r).reduce(function (n, o) {
                  var s = r[o];
                  return a.call(n, o) ? (n[o] = e(n[o], s, i)) : (n[o] = s), n;
              }, s);
    },
    d = function (e, n) {
        return Object.keys(n).reduce(function (e, r) {
            return (e[r] = n[r]), e;
        }, e);
    },
    f = function (e, n, r) {
        var i = e.replace(/\+/g, ' ');
        if ('iso-8859-1' === r) return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i);
        } catch (e) {
            return i;
        }
    },
    p = function (e, n, r, a, o) {
        if (0 === e.length) return e;
        var l = e;
        if (('symbol' == typeof e ? (l = Symbol.prototype.toString.call(e)) : 'string' != typeof e && (l = String(e)), 'iso-8859-1' === r))
            return escape(l).replace(/%u[0-9a-f]{4}/gi, function (e) {
                return '%26%23' + parseInt(e.slice(2), 16) + '%3B';
            });
        for (var u = '', c = 0; c < l.length; ++c) {
            var d = l.charCodeAt(c);
            if (45 === d || 46 === d || 95 === d || 126 === d || (d >= 48 && d <= 57) || (d >= 65 && d <= 90) || (d >= 97 && d <= 122) || (o === i.RFC1738 && (40 === d || 41 === d))) {
                u += l.charAt(c);
                continue;
            }
            if (d < 128) {
                u += s[d];
                continue;
            }
            if (d < 2048) {
                u += s[192 | (d >> 6)] + s[128 | (63 & d)];
                continue;
            }
            if (d < 55296 || d >= 57344) {
                u += s[224 | (d >> 12)] + s[128 | ((d >> 6) & 63)] + s[128 | (63 & d)];
                continue;
            }
            (c += 1), (u += s[240 | ((d = 65536 + (((1023 & d) << 10) | (1023 & l.charCodeAt(c)))) >> 18)] + s[128 | ((d >> 12) & 63)] + s[128 | ((d >> 6) & 63)] + s[128 | (63 & d)]);
        }
        return u;
    },
    h = function (e) {
        for (
            var n = [
                    {
                        obj: { o: e },
                        prop: 'o'
                    }
                ],
                r = [],
                i = 0;
            i < n.length;
            ++i
        ) {
            for (var a = n[i], o = a.obj[a.prop], s = Object.keys(o), u = 0; u < s.length; ++u) {
                var c = s[u],
                    d = o[c];
                'object' == typeof d &&
                    null !== d &&
                    -1 === r.indexOf(d) &&
                    (n.push({
                        obj: o,
                        prop: c
                    }),
                    r.push(d));
            }
        }
        return l(n), e;
    },
    _ = function (e) {
        return '[object RegExp]' === Object.prototype.toString.call(e);
    },
    m = function (e) {
        return !!e && 'object' == typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
    },
    g = function (e, n) {
        return [].concat(e, n);
    },
    E = function (e, n) {
        if (o(e)) {
            for (var r = [], i = 0; i < e.length; i += 1) r.push(n(e[i]));
            return r;
        }
        return n(e);
    };
e.exports = {
    arrayToObject: u,
    assign: d,
    combine: g,
    compact: h,
    decode: f,
    encode: p,
    isBuffer: m,
    isRegExp: _,
    maybeMap: E,
    merge: c
};
