var i = n(606861),
    r = n(28886),
    a = n(962768);
e.exports =
    Object.setPrototypeOf ||
    ('__proto__' in {}
        ? (function () {
              var e,
                  t = !1,
                  n = {};
              try {
                  (e = i(Object.prototype, '__proto__', 'set'))(n, []), (t = n instanceof Array);
              } catch (e) {}
              return function (n, i) {
                  return r(n), a(i), t ? e(n, i) : (n.__proto__ = i), n;
              };
          })()
        : void 0);
