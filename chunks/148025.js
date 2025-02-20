var r,
    i,
    o,
    a,
    s = n(192853),
    l = n(703825)();
if (l) {
    (r = s('Object.prototype.hasOwnProperty')), (i = s('RegExp.prototype.exec')), (o = {});
    var c = function () {
        throw o;
    };
    (a = {
        toString: c,
        valueOf: c
    }),
        'symbol' == typeof Symbol.toPrimitive && (a[Symbol.toPrimitive] = c);
}
var u = s('Object.prototype.toString'),
    d = Object.getOwnPropertyDescriptor,
    f = '[object RegExp]';
e.exports = l
    ? function (e) {
          if (!e || 'object' != typeof e) return !1;
          var t = d(e, 'lastIndex');
          if (!(t && r(t, 'value'))) return !1;
          try {
              i(e, a);
          } catch (e) {
              return e === o;
          }
      }
    : function (e) {
          return !!e && ('object' == typeof e || 'function' == typeof e) && u(e) === f;
      };
