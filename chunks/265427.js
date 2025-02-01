var i = n(606862),
    r = n(169742),
    a = n(160171),
    s = n(192853),
    o = n(49662),
    l = s('Object.prototype.toString'),
    u = n(703825)(),
    c = 'undefined' == typeof globalThis ? n.g : globalThis,
    d = r(),
    f = s('String.prototype.slice'),
    _ = Object.getPrototypeOf,
    p =
        s('Array.prototype.indexOf', !0) ||
        function (e, t) {
            for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
            return -1;
        },
    h = { __proto__: null };
u && o && _
    ? i(d, function (e) {
          var t = new c[e]();
          if (Symbol.toStringTag in t) {
              var n = _(t),
                  i = o(n, Symbol.toStringTag);
              i || (i = o(_(n), Symbol.toStringTag)), (h['$' + e] = a(i.get));
          }
      })
    : i(d, function (e) {
          var t = new c[e](),
              n = t.slice || t.set;
          n && (h['$' + e] = a(n));
      });
var m = function (e) {
        var t = !1;
        return (
            i(h, function (n, i) {
                if (!t)
                    try {
                        '$' + n(e) === i && (t = f(i, 1));
                    } catch (e) {}
            }),
            t
        );
    },
    g = function (e) {
        var t = !1;
        return (
            i(h, function (n, i) {
                if (!t)
                    try {
                        n(e), (t = f(i, 1));
                    } catch (e) {}
            }),
            t
        );
    };
e.exports = function (e) {
    if (!e || 'object' != typeof e) return !1;
    if (!u) {
        var t = f(l(e), 8, -1);
        return p(d, t) > -1 ? t : 'Object' === t && g(e);
    }
    return o ? m(e) : null;
};
