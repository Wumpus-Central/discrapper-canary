var n,
    r,
    i = Function.prototype.toString,
    a = 'object' == typeof Reflect && null !== Reflect && Reflect.apply;
if ('function' == typeof a && 'function' == typeof Object.defineProperty)
    try {
        (n = Object.defineProperty({}, 'length', {
            get: function () {
                throw r;
            }
        })),
            (r = {}),
            a(
                function () {
                    throw 42;
                },
                null,
                n
            );
    } catch (e) {
        e !== r && (a = null);
    }
else a = null;
var o = /^\s*class\b/,
    s = function (e) {
        try {
            var n = i.call(e);
            return o.test(n);
        } catch (e) {
            return !1;
        }
    },
    l = function (e) {
        try {
            if (s(e)) return !1;
            return i.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    u = Object.prototype.toString,
    c = '[object Object]',
    d = '[object Function]',
    f = '[object GeneratorFunction]',
    p = '[object HTMLAllCollection]',
    h = '[object HTML document.all class]',
    _ = '[object HTMLCollection]',
    m = 'function' == typeof Symbol && !!Symbol.toStringTag,
    g = !(0 in [,]),
    E = function () {
        return !1;
    };
if ('object' == typeof document) {
    var v = document.all;
    u.call(v) === u.call(document.all) &&
        (E = function (e) {
            if ((g || !e) && (void 0 === e || 'object' == typeof e))
                try {
                    var n = u.call(e);
                    return (n === p || n === h || n === _ || n === c) && null == e('');
                } catch (e) {}
            return !1;
        });
}
e.exports = a
    ? function (e) {
          if (E(e)) return !0;
          if (!e || ('function' != typeof e && 'object' != typeof e)) return !1;
          try {
              a(e, null, n);
          } catch (e) {
              if (e !== r) return !1;
          }
          return !s(e) && l(e);
      }
    : function (e) {
          if (E(e)) return !0;
          if (!e || ('function' != typeof e && 'object' != typeof e)) return !1;
          if (m) return l(e);
          if (s(e)) return !1;
          var n = u.call(e);
          return !!(n === d || n === f || /^\[object HTML/.test(n)) && l(e);
      };
