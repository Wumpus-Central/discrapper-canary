var i = r(606861),
    a = r(28886),
    o = r(962768);
e.exports =
    Object.setPrototypeOf ||
    ('__proto__' in {}
        ? (function () {
              var e,
                  n = !1,
                  r = {};
              try {
                  (e = i(Object.prototype, '__proto__', 'set'))(r, []), (n = r instanceof Array);
              } catch (e) {}
              return function (r, i) {
                  return a(r), o(i), n ? e(r, i) : (r.__proto__ = i), r;
              };
          })()
        : void 0);
