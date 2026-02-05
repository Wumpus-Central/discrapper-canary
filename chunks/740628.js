"use strict";
var n = e(356467),
    o = e(407057),
    s = e(693755),
    i = e(613655);
t.exports =
    Object.setPrototypeOf ||
    ("__proto__" in {}
        ? (function () {
              var t,
                  r = !1,
                  e = {};
              try {
                  (t = n(Object.prototype, "__proto__", "set"))(e, []), (r = e instanceof Array);
              } catch (t) {}
              return function (e, n) {
                  return s(e), i(n), o(e) && (r ? t(e, n) : (e.__proto__ = n)), e;
              };
          })()
        : void 0);
