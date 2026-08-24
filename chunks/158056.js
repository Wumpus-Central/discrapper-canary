"use strict";
var n = r(439619),
    i = r(906046),
    o = r(315646),
    a = r(12161),
    s = r(741623),
    l = n("%WeakMap%", !0),
    u = i("WeakMap.prototype.get", !0),
    c = i("WeakMap.prototype.set", !0),
    f = i("WeakMap.prototype.has", !0),
    d = i("WeakMap.prototype.delete", !0);
e.exports = l
    ? function () {
          var e,
              t,
              r = {
                  assert: function (e) {
                      if (!r.has(e)) throw new s("Side channel does not contain " + o(e));
                  },
                  delete: function (r) {
                      if (l && r && ("object" == typeof r || "function" == typeof r)) {
                          if (e) return d(e, r);
                      } else if (a && t) return t.delete(r);
                      return !1;
                  },
                  get: function (r) {
                      return l && r && ("object" == typeof r || "function" == typeof r) && e ? u(e, r) : t && t.get(r);
                  },
                  has: function (r) {
                      return l && r && ("object" == typeof r || "function" == typeof r) && e
                          ? f(e, r)
                          : !!t && t.has(r);
                  },
                  set: function (r, n) {
                      l && r && ("object" == typeof r || "function" == typeof r)
                          ? (e || (e = new l()), c(e, r, n))
                          : a && (t || (t = a()), t.set(r, n));
                  },
              };
          return r;
      }
    : a;
