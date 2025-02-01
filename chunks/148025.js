var i,
    r,
    a,
    s,
    o = n(192853),
    l = n(703825)();
if (l) {
    (i = o('Object.prototype.hasOwnProperty')), (r = o('RegExp.prototype.exec')), (a = {});
    var u = function () {
        throw a;
    };
    (s = {
        toString: u,
        valueOf: u
    }),
        'symbol' == typeof Symbol.toPrimitive && (s[Symbol.toPrimitive] = u);
}
var c = o('Object.prototype.toString'),
    d = Object.getOwnPropertyDescriptor,
    f = '[object RegExp]';
e.exports = l
    ? function (e) {
          if (!e || 'object' != typeof e) return !1;
          var t = d(e, 'lastIndex');
          if (!(t && i(t, 'value'))) return !1;
          try {
              r(e, s);
          } catch (e) {
              return e === a;
          }
      }
    : function (e) {
          return !!e && ('object' == typeof e || 'function' == typeof e) && c(e) === f;
      };
