"use strict";
var r = n(439619),
    i = n(906046),
    a = n(315646),
    s = n(12161),
    o = n(741623),
    l = r("%WeakMap%", !0),
    u = i("WeakMap.prototype.get", !0),
    c = i("WeakMap.prototype.set", !0),
    d = i("WeakMap.prototype.has", !0),
    _ = i("WeakMap.prototype.delete", !0);
e.exports = l
    ? function () {
          var e,
              t,
              n = {
                  assert: function (e) {
                      if (!n.has(e)) throw new o("Side channel does not contain " + a(e));
                  },
                  delete: function (n) {
                      if (l && n && ("object" == typeof n || "function" == typeof n)) {
                          if (e) return _(e, n);
                      } else if (s && t) return t.delete(n);
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
                  set: function (n, r) {
                      l && n && ("object" == typeof n || "function" == typeof n)
                          ? (e || (e = new l()), c(e, n, r))
                          : s && (t || (t = s()), t.set(n, r));
                  },
              };
          return n;
      }
    : s;
