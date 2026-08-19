"use strict";
var n = r(404312),
    o = Object.prototype.hasOwnProperty,
    i = Array.isArray,
    a = (function () {
        for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e;
    })(),
    s = function (e) {
        for (; e.length > 1; ) {
            var t = e.pop(),
                r = t.obj[t.prop];
            if (i(r)) {
                for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
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
            for (var o = t[n], i = o.obj[o.prop], a = Object.keys(i), l = 0; l < a.length; ++l) {
                var u = a[l],
                    c = i[u];
                "object" == typeof c && null !== c && -1 === r.indexOf(c) && (t.push({ obj: i, prop: u }), r.push(c));
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
    encode: function (e, t, r, o, i) {
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
            for (var c = s.length >= 1024 ? s.slice(u, u + 1024) : s, f = [], p = 0; p < c.length; ++p) {
                var d = c.charCodeAt(p);
                if (
                    45 === d ||
                    46 === d ||
                    95 === d ||
                    126 === d ||
                    (d >= 48 && d <= 57) ||
                    (d >= 65 && d <= 90) ||
                    (d >= 97 && d <= 122) ||
                    (i === n.RFC1738 && (40 === d || 41 === d))
                ) {
                    f[f.length] = c.charAt(p);
                    continue;
                }
                if (d < 128) {
                    f[f.length] = a[d];
                    continue;
                }
                if (d < 2048) {
                    f[f.length] = a[192 | (d >> 6)] + a[128 | (63 & d)];
                    continue;
                }
                if (d < 55296 || d >= 57344) {
                    f[f.length] = a[224 | (d >> 12)] + a[128 | ((d >> 6) & 63)] + a[128 | (63 & d)];
                    continue;
                }
                (p += 1),
                    (d = 65536 + (((1023 & d) << 10) | (1023 & c.charCodeAt(p)))),
                    (f[f.length] =
                        a[240 | (d >> 18)] + a[128 | ((d >> 12) & 63)] + a[128 | ((d >> 6) & 63)] + a[128 | (63 & d)]);
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
        if (i(e)) {
            for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
            return r;
        }
        return t(e);
    },
    merge: function e(t, r, n) {
        if (!r) return t;
        if ("object" != typeof r && "function" != typeof r) {
            if (i(t)) t.push(r);
            else {
                if (!t || "object" != typeof t) return [t, r];
                ((n && (n.plainObjects || n.allowPrototypes)) || !o.call(Object.prototype, r)) && (t[r] = !0);
            }
            return t;
        }
        if (!t || "object" != typeof t) return [t].concat(r);
        var a = t;
        return (i(t) && !i(r) && (a = l(t, n)), i(t) && i(r))
            ? (r.forEach(function (r, i) {
                  if (o.call(t, i)) {
                      var a = t[i];
                      a && "object" == typeof a && r && "object" == typeof r ? (t[i] = e(a, r, n)) : t.push(r);
                  } else t[i] = r;
              }),
              t)
            : Object.keys(r).reduce(function (t, i) {
                  var a = r[i];
                  return o.call(t, i) ? (t[i] = e(t[i], a, n)) : (t[i] = a), t;
              }, a);
    },
};
