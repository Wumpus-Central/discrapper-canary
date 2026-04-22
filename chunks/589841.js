"use strict";
var r = n(404312),
    i = Object.prototype.hasOwnProperty,
    s = Array.isArray,
    a = (function () {
        for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e;
    })(),
    o = function (e) {
        for (; e.length > 1; ) {
            var t = e.pop(),
                n = t.obj[t.prop];
            if (s(n)) {
                for (var r = [], i = 0; i < n.length; ++i) void 0 !== n[i] && r.push(n[i]);
                t.obj[t.prop] = r;
            }
        }
    },
    l = function (e, t) {
        for (var n = t && t.plainObjects ? { __proto__: null } : {}, r = 0; r < e.length; ++r)
            void 0 !== e[r] && (n[r] = e[r]);
        return n;
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
        for (var t = [{ obj: { o: e }, prop: "o" }], n = [], r = 0; r < t.length; ++r)
            for (var i = t[r], s = i.obj[i.prop], a = Object.keys(s), l = 0; l < a.length; ++l) {
                var u = a[l],
                    d = s[u];
                "object" == typeof d && null !== d && -1 === n.indexOf(d) && (t.push({ obj: s, prop: u }), n.push(d));
            }
        return o(t), e;
    },
    decode: function (e, t, n) {
        var r = e.replace(/\+/g, " ");
        if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(r);
        } catch (e) {
            return r;
        }
    },
    encode: function (e, t, n, i, s) {
        if (0 === e.length) return e;
        var o = e;
        if (
            ("symbol" == typeof e ? (o = Symbol.prototype.toString.call(e)) : "string" != typeof e && (o = String(e)),
            "iso-8859-1" === n)
        )
            return escape(o).replace(/%u[0-9a-f]{4}/gi, function (e) {
                return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
            });
        for (var l = "", u = 0; u < o.length; u += 1024) {
            for (var d = o.length >= 1024 ? o.slice(u, u + 1024) : o, c = [], _ = 0; _ < d.length; ++_) {
                var f = d.charCodeAt(_);
                if (
                    45 === f ||
                    46 === f ||
                    95 === f ||
                    126 === f ||
                    (f >= 48 && f <= 57) ||
                    (f >= 65 && f <= 90) ||
                    (f >= 97 && f <= 122) ||
                    (s === r.RFC1738 && (40 === f || 41 === f))
                ) {
                    c[c.length] = d.charAt(_);
                    continue;
                }
                if (f < 128) {
                    c[c.length] = a[f];
                    continue;
                }
                if (f < 2048) {
                    c[c.length] = a[192 | (f >> 6)] + a[128 | (63 & f)];
                    continue;
                }
                if (f < 55296 || f >= 57344) {
                    c[c.length] = a[224 | (f >> 12)] + a[128 | ((f >> 6) & 63)] + a[128 | (63 & f)];
                    continue;
                }
                (_ += 1),
                    (f = 65536 + (((1023 & f) << 10) | (1023 & d.charCodeAt(_)))),
                    (c[c.length] =
                        a[240 | (f >> 18)] + a[128 | ((f >> 12) & 63)] + a[128 | ((f >> 6) & 63)] + a[128 | (63 & f)]);
            }
            l += c.join("");
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
        if (s(e)) {
            for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
            return n;
        }
        return t(e);
    },
    merge: function e(t, n, r) {
        if (!n) return t;
        if ("object" != typeof n && "function" != typeof n) {
            if (s(t)) t.push(n);
            else {
                if (!t || "object" != typeof t) return [t, n];
                ((r && (r.plainObjects || r.allowPrototypes)) || !i.call(Object.prototype, n)) && (t[n] = !0);
            }
            return t;
        }
        if (!t || "object" != typeof t) return [t].concat(n);
        var a = t;
        return (s(t) && !s(n) && (a = l(t, r)), s(t) && s(n))
            ? (n.forEach(function (n, s) {
                  if (i.call(t, s)) {
                      var a = t[s];
                      a && "object" == typeof a && n && "object" == typeof n ? (t[s] = e(a, n, r)) : t.push(n);
                  } else t[s] = n;
              }),
              t)
            : Object.keys(n).reduce(function (t, s) {
                  var a = n[s];
                  return i.call(t, s) ? (t[s] = e(t[s], a, r)) : (t[s] = a), t;
              }, a);
    },
};
