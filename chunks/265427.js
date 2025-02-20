var r = n(606862),
    i = n(169742),
    o = n(160171),
    a = n(192853),
    s = n(49662),
    l = a('Object.prototype.toString'),
    c = n(703825)(),
    u = 'undefined' == typeof globalThis ? n.g : globalThis,
    d = i(),
    f = a('String.prototype.slice'),
    p = Object.getPrototypeOf,
    _ =
        a('Array.prototype.indexOf', !0) ||
        function (e, t) {
            for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
            return -1;
        },
    h = { __proto__: null };
c && s && p
    ? r(d, function (e) {
          var t = new u[e]();
          if (Symbol.toStringTag in t) {
              var n = p(t),
                  r = s(n, Symbol.toStringTag);
              r || (r = s(p(n), Symbol.toStringTag)), (h['$' + e] = o(r.get));
          }
      })
    : r(d, function (e) {
          var t = new u[e](),
              n = t.slice || t.set;
          n && (h['$' + e] = o(n));
      });
var m = function (e) {
        var t = !1;
        return (
            r(h, function (n, r) {
                if (!t)
                    try {
                        '$' + n(e) === r && (t = f(r, 1));
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
                        n(e), (t = f(r, 1));
                    } catch (e) {}
            }),
            t
        );
    };
e.exports = function (e) {
    if (!e || 'object' != typeof e) return !1;
    if (!c) {
        var t = f(l(e), 8, -1);
        return _(d, t) > -1 ? t : 'Object' === t && g(e);
    }
    return s ? m(e) : null;
};
