"use strict";
var i = n(439619),
    r = n(906046),
    s = n(315646),
    a = n(12161),
    o = n(741623),
    l = i("%WeakMap%", !0),
    u = r("WeakMap.prototype.get", !0),
    c = r("WeakMap.prototype.set", !0),
    d = r("WeakMap.prototype.has", !0),
    _ = r("WeakMap.prototype.delete", !0);
e.exports = l
    ? function () {
          var e,
              t,
              n = {
                  assert: function (e) {
                      if (!n.has(e)) throw new o("Side channel does not contain " + s(e));
                  },
                  delete: function (n) {
                      if (l && n && ("object" == typeof n || "function" == typeof n)) {
                          if (e) return _(e, n);
                      } else if (a && t) return t.delete(n);
                      return !1;
                  },
                  get: function (n) {
                      return l && n && ("object" == typeof n || "function" == typeof n) && e ? u(e, n) : t && t.get(n);
                  },
                  has: function (n) {
                      return l && n && ("object" == typeof n || "function" == typeof n) && e
                          ? d(e, n)
                          : !!t && t.has(n);
                  },
                  set: function (n, i) {
                      l && n && ("object" == typeof n || "function" == typeof n)
                          ? (e || (e = new l()), c(e, n, i))
                          : a && (t || (t = a()), t.set(n, i));
                  },
              };
          return n;
      }
    : a;
