var r = n(319135),
    i = n(879618),
    a = n(142896),
    s = n(906046),
    o = n(267768),
    l = n(428495),
    c = s("Object.prototype.toString"),
    u = n(581070)(),
    d = "u" < typeof globalThis ? n.g : globalThis,
    f = i(),
    p = s("String.prototype.slice"),
    _ =
        s("Array.prototype.indexOf", !0) ||
        function (e, t) {
            for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
            return -1;
        },
    h = {
        __proto__: null,
    };
u && o && l
    ? r(f, function (e) {
          var t = new d[e]();
          if (Symbol.toStringTag in t && l) {
              var n = l(t),
                  r = o(n, Symbol.toStringTag);
              !r && n && (r = o(l(n), Symbol.toStringTag)), (h["$" + e] = a(r.get));
          }
      })
    : r(f, function (e) {
          var t = new d[e](),
              n = t.slice || t.set;
          n && (h["$" + e] = a(n));
      });
var m = function (e) {
        var t = !1;
        return (
            r(h, function (n, r) {
                if (!t)
                    try {
                        "$" + n(e) === r && (t = p(r, 1));
                    } catch (e) {}
            }),
            t
        );
    },
    g = function (e) {
        var t = !1;
        return (
            r(h, function (n, r) {
                if (!t)
                    try {
                        n(e), (t = p(r, 1));
                    } catch (e) {}
            }),
            t
        );
    };
e.exports = function (e) {
    if (!e || "object" != typeof e) return !1;
    if (!u) {
        var t = p(c(e), 8, -1);
        return _(f, t) > -1 ? t : "Object" === t && g(e);
    }
    return o ? m(e) : null;
};
