var r = n(606861),
    i = n(28886),
    o = n(962768);
e.exports =
    Object.setPrototypeOf ||
    ('__proto__' in {}
        ? (function () {
              var e,
                  t = !1,
                  n = {};
              try {
                  (e = r(Object.prototype, '__proto__', 'set'))(n, []), (t = n instanceof Array);
              } catch (e) {}
              return function (n, r) {
                  return i(n), o(r), t ? e(n, r) : (n.__proto__ = r), n;
              };
          })()
        : void 0);
