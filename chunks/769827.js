var r = a(860788),
    n = a(434431),
    _ = a(497464),
    o = a(727025);
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
                  return _(a), o(r), n(a) && (e ? t(a, r) : (a.__proto__ = r)), a;
              };
          })()
        : void 0);
