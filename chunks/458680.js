"use strict";
var i = n(19167),
    r = n(598349),
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
                  (e = i(Object.prototype, "__proto__", "set"))(n, []), (t = n instanceof Array);
              } catch (e) {}
              return function (n, i) {
                  return s(n), a(i), r(n) && (t ? e(n, i) : (n.__proto__ = i)), n;
              };
          })()
        : void 0);
