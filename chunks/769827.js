var e = r(860788),
    o = r(434431),
    i = r(497464),
    u = r(727025);
t.exports =
    Object.setPrototypeOf ||
    ('__proto__' in {}
        ? (function () {
              var t,
                  n = !1,
                  r = {};
              try {
                  (t = e(Object.prototype, '__proto__', 'set'))(r, []), (n = r instanceof Array);
              } catch (t) {}
              return function (r, e) {
                  return i(r), u(e), o(r) && (n ? t(r, e) : (r.__proto__ = e)), r;
              };
          })()
        : void 0);
