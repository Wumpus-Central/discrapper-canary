"use strict";
var n = r(319135),
    o = r(879618),
    i = r(142896),
    a = r(906046),
    s = r(267768),
    l = r(428495),
    u = a("Object.prototype.toString"),
    c = r(581070)(),
    f = "u" < typeof globalThis ? r.g : globalThis,
    p = o(),
    d = a("String.prototype.slice"),
    h =
        a("Array.prototype.indexOf", !0) ||
        function (e, t) {
            for (var r = 0; r < e.length; r += 1) if (e[r] === t) return r;
            return -1;
        },
    m = { __proto__: null };
c && s && l
    ? n(p, function (e) {
          var t = new f[e]();
          if (Symbol.toStringTag in t && l) {
              var r = l(t),
                  n = s(r, Symbol.toStringTag);
              !n && r && (n = s(l(r), Symbol.toStringTag)), (m["$" + e] = i(n.get));
          }
      })
    : n(p, function (e) {
          var t = new f[e](),
              r = t.slice || t.set;
          r && (m["$" + e] = i(r));
      });
var v = function (e) {
        var t = !1;
        return (
            n(m, function (r, n) {
                if (!t)
                    try {
                        "$" + r(e) === n && (t = d(n, 1));
                    } catch (e) {}
            }),
            t
        );
    },
    y = function (e) {
        var t = !1;
        return (
            n(m, function (r, n) {
                if (!t)
                    try {
                        r(e), (t = d(n, 1));
                    } catch (e) {}
            }),
            t
        );
    };
e.exports = function (e) {
    if (!e || "object" != typeof e) return !1;
    if (!c) {
        var t = d(u(e), 8, -1);
        return h(p, t) > -1 ? t : "Object" === t && y(e);
    }
    return s ? v(e) : null;
};
