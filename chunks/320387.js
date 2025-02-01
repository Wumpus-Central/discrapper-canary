var t,
    n,
    i = Function.prototype.toString,
    r = 'object' == typeof Reflect && null !== Reflect && Reflect.apply;
if ('function' == typeof r && 'function' == typeof Object.defineProperty)
    try {
        (t = Object.defineProperty({}, 'length', {
            get: function () {
                throw n;
            }
        })),
            (n = {}),
            r(
                function () {
                    throw 42;
                },
                null,
                t
            );
    } catch (e) {
        e !== n && (r = null);
    }
else r = null;
var a = /^\s*class\b/,
    s = function (e) {
        try {
            var t = i.call(e);
            return a.test(t);
        } catch (e) {
            return !1;
        }
    },
    o = function (e) {
        try {
            if (s(e)) return !1;
            return i.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    l = Object.prototype.toString,
    u = '[object Object]',
    c = '[object Function]',
    d = '[object GeneratorFunction]',
    f = '[object HTMLAllCollection]',
    _ = '[object HTML document.all class]',
    p = '[object HTMLCollection]',
    h = 'function' == typeof Symbol && !!Symbol.toStringTag,
    m = !(0 in [,]),
    g = function () {
        return !1;
    };
if ('object' == typeof document) {
    var E = document.all;
    l.call(E) === l.call(document.all) &&
        (g = function (e) {
            if ((m || !e) && (void 0 === e || 'object' == typeof e))
                try {
                    var t = l.call(e);
                    return (t === f || t === _ || t === p || t === u) && null == e('');
                } catch (e) {}
            return !1;
        });
}
e.exports = r
    ? function (e) {
          if (g(e)) return !0;
          if (!e || ('function' != typeof e && 'object' != typeof e)) return !1;
          try {
              r(e, null, t);
          } catch (e) {
              if (e !== n) return !1;
          }
          return !s(e) && o(e);
      }
    : function (e) {
          if (g(e)) return !0;
          if (!e || ('function' != typeof e && 'object' != typeof e)) return !1;
          if (h) return o(e);
          if (s(e)) return !1;
          var t = l.call(e);
          return !!(t === c || t === d || /^\[object HTML/.test(t)) && o(e);
      };
