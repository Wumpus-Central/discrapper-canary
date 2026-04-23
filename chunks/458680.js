"use strict";
var r = n(19167),
    i = n(598349),
    s = n(321727),
    a = n(828027);
e.exports =
    Object.setPrototypeOf ||
    ("__proto__" in {}
        ? (function () {
              var e,
                  t = !1,
                  n = {};
              try {
                  (e = r(Object.prototype, "__proto__", "set"))(n, []), (t = n instanceof Array);
              } catch (e) {}
              return function (n, r) {
                  return s(n), a(r), i(n) && (t ? e(n, r) : (n.__proto__ = r)), n;
              };
          })()
        : void 0);
