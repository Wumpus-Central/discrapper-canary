var r = n(363406),
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
        for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (n[r] = e[r]);
        return n;
    },
    c = function e(t, n, r) {
        if (!n) return t;
        if ('object' != typeof n) {
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
    };
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
        for (var l = '', c = 0; c < s.length; ++c) {
            var u = s.charCodeAt(c);
            if (45 === u || 46 === u || 95 === u || 126 === u || (u >= 48 && u <= 57) || (u >= 65 && u <= 90) || (u >= 97 && u <= 122) || (o === r.RFC1738 && (40 === u || 41 === u))) {
                l += s.charAt(c);
                continue;
            }
            if (u < 128) {
                l += a[u];
                continue;
            }
            if (u < 2048) {
                l += a[192 | (u >> 6)] + a[128 | (63 & u)];
                continue;
            }
            if (u < 55296 || u >= 57344) {
                l += a[224 | (u >> 12)] + a[128 | ((u >> 6) & 63)] + a[128 | (63 & u)];
                continue;
            }
            (c += 1), (l += a[240 | ((u = 65536 + (((1023 & u) << 10) | (1023 & s.charCodeAt(c)))) >> 18)] + a[128 | ((u >> 12) & 63)] + a[128 | ((u >> 6) & 63)] + a[128 | (63 & u)]);
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
