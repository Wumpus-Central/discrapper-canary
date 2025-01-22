var i,
    a,
    o,
    s,
    l = r(192853),
    u = r(703825)();
if (u) {
    (i = l('Object.prototype.hasOwnProperty')), (a = l('RegExp.prototype.exec')), (o = {});
    var c = function () {
        throw o;
    };
    (s = {
        toString: c,
        valueOf: c
    }),
        'symbol' == typeof Symbol.toPrimitive && (s[Symbol.toPrimitive] = c);
}
var d = l('Object.prototype.toString'),
    f = Object.getOwnPropertyDescriptor,
    p = '[object RegExp]';
e.exports = u
    ? function (e) {
          if (!e || 'object' != typeof e) return !1;
          var n = f(e, 'lastIndex');
          if (!(n && i(n, 'value'))) return !1;
          try {
              a(e, s);
          } catch (e) {
              return e === o;
          }
      }
    : function (e) {
          return !!e && ('object' == typeof e || 'function' == typeof e) && d(e) === p;
      };
