var i = r(606862),
    a = r(169742),
    o = r(160171),
    s = r(192853),
    l = r(49662),
    u = s('Object.prototype.toString'),
    c = r(703825)(),
    d = 'undefined' == typeof globalThis ? r.g : globalThis,
    f = a(),
    p = s('String.prototype.slice'),
    h = Object.getPrototypeOf,
    _ =
        s('Array.prototype.indexOf', !0) ||
        function (e, n) {
            for (var r = 0; r < e.length; r += 1) if (e[r] === n) return r;
            return -1;
        },
    m = { __proto__: null };
c && l && h
    ? i(f, function (e) {
          var n = new d[e]();
          if (Symbol.toStringTag in n) {
              var r = h(n),
                  i = l(r, Symbol.toStringTag);
              !i && (i = l(h(r), Symbol.toStringTag)), (m['$' + e] = o(i.get));
          }
      })
    : i(f, function (e) {
          var n = new d[e](),
              r = n.slice || n.set;
          r && (m['$' + e] = o(r));
      });
var g = function (e) {
        var n = !1;
        return (
            i(m, function (r, i) {
                if (!n)
                    try {
                        '$' + r(e) === i && (n = p(i, 1));
                    } catch (e) {}
            }),
            n
        );
    },
    E = function (e) {
        var n = !1;
        return (
            i(m, function (r, i) {
                if (!n)
                    try {
                        r(e), (n = p(i, 1));
                    } catch (e) {}
            }),
            n
        );
    };
e.exports = function (e) {
    if (!e || 'object' != typeof e) return !1;
    if (!c) {
        var n = p(u(e), 8, -1);
        return _(f, n) > -1 ? n : 'Object' === n && E(e);
    }
    return l ? g(e) : null;
};
