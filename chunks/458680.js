var n = e(19167),
    o = e(598349),
    i = e(321727),
    a = e(828027);
r.exports =
    Object.setPrototypeOf ||
    ("__proto__" in {}
        ? (function () {
              var r,
                  t = !1,
                  e = {};
              try {
                  (r = n(Object.prototype, "__proto__", "set"))(e, []), (t = e instanceof Array);
              } catch (r) {}
              return function (e, n) {
                  return i(e), a(n), o(e) && (t ? r(e, n) : (e.__proto__ = n)), e;
              };
          })()
        : void 0);
