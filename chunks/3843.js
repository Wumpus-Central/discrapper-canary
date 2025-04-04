var r = n(179560),
    i = n(923888),
    o = n(638934),
    a = n(166691),
    s = n(566817),
    l = n(143988),
    c = a('Object.prototype.toString'),
    u = n(195653)(),
    d = 'undefined' == typeof globalThis ? n.g : globalThis,
    f = i(),
    _ = a('String.prototype.slice'),
    p =
        a('Array.prototype.indexOf', !0) ||
        function (e, t) {
            for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
            return -1;
        },
    h = { __proto__: null };
u && s && l
    ? r(f, function (e) {
          var t = new d[e]();
          if (Symbol.toStringTag in t && l) {
              var n = l(t),
                  r = s(n, Symbol.toStringTag);
              !r && n && (r = s(l(n), Symbol.toStringTag)), (h['$' + e] = o(r.get));
          }
      })
    : r(f, function (e) {
          var t = new d[e](),
              n = t.slice || t.set;
          n && (h['$' + e] = o(n));
      });
var m = function (e) {
        var t = !1;
        return (
            r(h, function (n, r) {
                if (!t)
                    try {
                        '$' + n(e) === r && (t = _(r, 1));
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
                        n(e), (t = _(r, 1));
                    } catch (e) {}
            }),
            t
        );
    };
e.exports = function (e) {
    if (!e || 'object' != typeof e) return !1;
    if (!u) {
        var t = _(c(e), 8, -1);
        return p(f, t) > -1 ? t : 'Object' === t && g(e);
    }
    return s ? m(e) : null;
};
