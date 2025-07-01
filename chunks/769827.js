var r = n(860788),
    i = n(434431),
    a = n(497464),
    o = n(727025);
e.exports =
    Object.setPrototypeOf ||
    ('__proto__' in {}
        ? (function () {
              var e,
                  t = !1,
                  n = {};
              try {
                  ((e = r(Object.prototype, '__proto__', 'set'))(n, []), (t = n instanceof Array));
              } catch (e) {}
              return function (n, r) {
                  return (a(n), o(r), i(n) && (t ? e(n, r) : (n.__proto__ = r)), n);
              };
          })()
        : void 0);
