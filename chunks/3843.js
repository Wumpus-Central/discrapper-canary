var r = n(179560),
    i = n(923888),
    a = n(638934),
    o = n(166691),
    s = n(566817),
    l = n(143988),
    c = o("Object.prototype.toString"),
    u = n(195653)(),
    d = "undefined" == typeof globalThis ? n.g : globalThis,
    f = i(),
    p = o("String.prototype.slice"),
    _ =
        o("Array.prototype.indexOf", !0) ||
        function (e, t) {
            for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
            return -1;
        },
    m = { __proto__: null };
u && s && l
    ? r(f, function (e) {
          var t = new d[e]();
          if (Symbol.toStringTag in t && l) {
              var n = l(t),
                  r = s(n, Symbol.toStringTag);
              !r && n && (r = s(l(n), Symbol.toStringTag)), (m["$" + e] = a(r.get));
          }
      })
    : r(f, function (e) {
          var t = new d[e](),
              n = t.slice || t.set;
          n && (m["$" + e] = a(n));
      });
var h = function (e) {
        var t = !1;
        return (
            r(m, function (n, r) {
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
            r(m, function (n, r) {
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
    return s ? h(e) : null;
};
