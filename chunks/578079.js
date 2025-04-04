var e = n(564498),
    o = n(829575),
    i = n(717130),
    u = n(293031);
t.exports =
    Object.setPrototypeOf ||
    ('__proto__' in {}
        ? (function () {
              var t,
                  r = !1,
                  n = {};
              try {
                  (t = e(Object.prototype, '__proto__', 'set'))(n, []), (r = n instanceof Array);
              } catch (t) {}
              return function (n, e) {
                  return i(n), u(e), o(n) && (r ? t(n, e) : (n.__proto__ = e)), n;
              };
          })()
        : void 0);
