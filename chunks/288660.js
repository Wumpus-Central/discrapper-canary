var r = n(72689),
    i = Object.prototype.hasOwnProperty,
    o = Array.isArray,
    a = (function () {
        for (var e = [], t = 0; t < 256; ++t) e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase());
        return e;
    })(),
    s = function (e) {
        for (; e.length > 1; ) {
            var t = e.pop(),
                n = t.obj[t.prop];
            if (o(n)) {
                for (var r = [], i = 0; i < n.length; ++i) void 0 !== n[i] && r.push(n[i]);
                t.obj[t.prop] = r;
            }
        }
    },
    l = function (e, t) {
        for (var n = t && t.plainObjects ? { __proto__: null } : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (n[r] = e[r]);
        return n;
    },
    c = function e(t, n, r) {
        if (!n) return t;
        if ('object' != typeof n && 'function' != typeof n) {
            if (o(t)) t.push(n);
            else {
                if (!t || 'object' != typeof t) return [t, n];
                ((r && (r.plainObjects || r.allowPrototypes)) || !i.call(Object.prototype, n)) && (t[n] = !0);
            }
            return t;
        }
        if (!t || 'object' != typeof t) return [t].concat(n);
        var a = t;
        return (o(t) && !o(n) && (a = l(t, r)), o(t) && o(n))
            ? (n.forEach(function (n, o) {
                  if (i.call(t, o)) {
                      var a = t[o];
                      a && 'object' == typeof a && n && 'object' == typeof n ? (t[o] = e(a, n, r)) : t.push(n);
                  } else t[o] = n;
              }),
              t)
            : Object.keys(n).reduce(function (t, o) {
                  var a = n[o];
                  return i.call(t, o) ? (t[o] = e(t[o], a, r)) : (t[o] = a), t;
              }, a);
    },
    u = 1024;
e.exports = {
    arrayToObject: l,
    assign: function (e, t) {
        return Object.keys(t).reduce(function (e, n) {
            return (e[n] = t[n]), e;
        }, e);
    },
    combine: function (e, t) {
        return [].concat(e, t);
    },
    compact: function (e) {
        for (
            var t = [
                    {
                        obj: { o: e },
                        prop: 'o'
                    }
                ],
                n = [],
                r = 0;
            r < t.length;
            ++r
        )
            for (var i = t[r], o = i.obj[i.prop], a = Object.keys(o), l = 0; l < a.length; ++l) {
                var c = a[l],
                    u = o[c];
                'object' == typeof u &&
                    null !== u &&
                    -1 === n.indexOf(u) &&
                    (t.push({
                        obj: o,
                        prop: c
                    }),
                    n.push(u));
            }
        return s(t), e;
    },
    decode: function (e, t, n) {
        var r = e.replace(/\+/g, ' ');
        if ('iso-8859-1' === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(r);
        } catch (e) {
            return r;
        }
    },
    encode: function (e, t, n, i, o) {
        if (0 === e.length) return e;
        var s = e;
        if (('symbol' == typeof e ? (s = Symbol.prototype.toString.call(e)) : 'string' != typeof e && (s = String(e)), 'iso-8859-1' === n))
            return escape(s).replace(/%u[0-9a-f]{4}/gi, function (e) {
                return '%26%23' + parseInt(e.slice(2), 16) + '%3B';
            });
        for (var l = '', c = 0; c < s.length; c += u) {
            for (var d = s.length >= u ? s.slice(c, c + u) : s, f = [], _ = 0; _ < d.length; ++_) {
                var p = d.charCodeAt(_);
                if (45 === p || 46 === p || 95 === p || 126 === p || (p >= 48 && p <= 57) || (p >= 65 && p <= 90) || (p >= 97 && p <= 122) || (o === r.RFC1738 && (40 === p || 41 === p))) {
                    f[f.length] = d.charAt(_);
                    continue;
                }
                if (p < 128) {
                    f[f.length] = a[p];
                    continue;
                }
                if (p < 2048) {
                    f[f.length] = a[192 | (p >> 6)] + a[128 | (63 & p)];
                    continue;
                }
                if (p < 55296 || p >= 57344) {
                    f[f.length] = a[224 | (p >> 12)] + a[128 | ((p >> 6) & 63)] + a[128 | (63 & p)];
                    continue;
                }
                (_ += 1), (p = 65536 + (((1023 & p) << 10) | (1023 & d.charCodeAt(_)))), (f[f.length] = a[240 | (p >> 18)] + a[128 | ((p >> 12) & 63)] + a[128 | ((p >> 6) & 63)] + a[128 | (63 & p)]);
            }
            l += f.join('');
        }
        return l;
    },
    isBuffer: function (e) {
        return !!e && 'object' == typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
    },
    isRegExp: function (e) {
        return '[object RegExp]' === Object.prototype.toString.call(e);
    },
    maybeMap: function (e, t) {
        if (o(e)) {
            for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
            return n;
        }
        return t(e);
    },
    merge: c
};
