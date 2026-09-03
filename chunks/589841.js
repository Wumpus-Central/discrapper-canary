var n = r(404312),
    i = Object.prototype.hasOwnProperty,
    o = Array.isArray,
    a = (function () {
        for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e;
    })(),
    s = function (e) {
        for (; e.length > 1; ) {
            var t = e.pop(),
                r = t.obj[t.prop];
            if (o(r)) {
                for (var n = [], i = 0; i < r.length; ++i) void 0 !== r[i] && n.push(r[i]);
                t.obj[t.prop] = n;
            }
        }
    },
    l = function (e, t) {
        for (var r = t && t.plainObjects ? { __proto__: null } : {}, n = 0; n < e.length; ++n)
            void 0 !== e[n] && (r[n] = e[n]);
        return r;
    };
e.exports = {
    arrayToObject: l,
    assign: function (e, t) {
        return Object.keys(t).reduce(function (e, r) {
            return (e[r] = t[r]), e;
        }, e);
    },
    combine: function (e, t) {
        return [].concat(e, t);
    },
    compact: function (e) {
        for (var t = [{ obj: { o: e }, prop: "o" }], r = [], n = 0; n < t.length; ++n)
            for (var i = t[n], o = i.obj[i.prop], a = Object.keys(o), l = 0; l < a.length; ++l) {
                var u = a[l],
                    c = o[u];
                "object" == typeof c && null !== c && -1 === r.indexOf(c) && (t.push({ obj: o, prop: u }), r.push(c));
            }
        return s(t), e;
    },
    decode: function (e, t, r) {
        var n = e.replace(/\+/g, " ");
        if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(n);
        } catch (e) {
            return n;
        }
    },
    encode: function (e, t, r, i, o) {
        if (0 === e.length) return e;
        var s = e;
        if (
            ("symbol" == typeof e ? (s = Symbol.prototype.toString.call(e)) : "string" != typeof e && (s = String(e)),
            "iso-8859-1" === r)
        )
            return escape(s).replace(/%u[0-9a-f]{4}/gi, function (e) {
                return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
            });
        for (var l = "", u = 0; u < s.length; u += 1024) {
            for (var c = s.length >= 1024 ? s.slice(u, u + 1024) : s, f = [], d = 0; d < c.length; ++d) {
                var p = c.charCodeAt(d);
                if (
                    45 === p ||
                    46 === p ||
                    95 === p ||
                    126 === p ||
                    (p >= 48 && p <= 57) ||
                    (p >= 65 && p <= 90) ||
                    (p >= 97 && p <= 122) ||
                    (o === n.RFC1738 && (40 === p || 41 === p))
                ) {
                    f[f.length] = c.charAt(d);
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
                (d += 1),
                    (p = 65536 + (((1023 & p) << 10) | (1023 & c.charCodeAt(d)))),
                    (f[f.length] =
                        a[240 | (p >> 18)] + a[128 | ((p >> 12) & 63)] + a[128 | ((p >> 6) & 63)] + a[128 | (63 & p)]);
            }
            l += f.join("");
        }
        return l;
    },
    isBuffer: function (e) {
        return !!e && "object" == typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
    },
    isRegExp: function (e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
    },
    maybeMap: function (e, t) {
        if (o(e)) {
            for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
            return r;
        }
        return t(e);
    },
    merge: function e(t, r, n) {
        if (!r) return t;
        if ("object" != typeof r && "function" != typeof r) {
            if (o(t)) t.push(r);
            else {
                if (!t || "object" != typeof t) return [t, r];
                ((n && (n.plainObjects || n.allowPrototypes)) || !i.call(Object.prototype, r)) && (t[r] = !0);
            }
            return t;
        }
        if (!t || "object" != typeof t) return [t].concat(r);
        var a = t;
        return (o(t) && !o(r) && (a = l(t, n)), o(t) && o(r))
            ? (r.forEach(function (r, o) {
                  if (i.call(t, o)) {
                      var a = t[o];
                      a && "object" == typeof a && r && "object" == typeof r ? (t[o] = e(a, r, n)) : t.push(r);
                  } else t[o] = r;
              }),
              t)
            : Object.keys(r).reduce(function (t, o) {
                  var a = r[o];
                  return i.call(t, o) ? (t[o] = e(t[o], a, n)) : (t[o] = a), t;
              }, a);
    },
};
