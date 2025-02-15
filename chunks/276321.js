var r = a(680500),
    n = a(24033),
    _ = a(340618);
t.exports =
    Object.setPrototypeOf ||
    ('__proto__' in {}
        ? (function () {
              var t,
                  e = !1,
                  a = {};
              try {
                  (t = r(Object.prototype, '__proto__', 'set'))(a, []), (e = a instanceof Array);
              } catch (t) {}
              return function (a, r) {
                  return n(a), _(r), e ? t(a, r) : (a.__proto__ = r), a;
              };
          })()
        : void 0);
