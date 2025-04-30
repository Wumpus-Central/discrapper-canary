var t,
    n,
    r = Function.prototype.toString,
    i = 'object' == typeof Reflect && null !== Reflect && Reflect.apply;
if ('function' == typeof i && 'function' == typeof Object.defineProperty)
    try {
        (t = Object.defineProperty({}, 'length', {
            get: function () {
                throw n;
            }
        })),
            (n = {}),
            i(
                function () {
                    throw 42;
                },
                null,
                t
            );
    } catch (e) {
        e !== n && (i = null);
    }
else i = null;
var o = /^\s*class\b/,
    a = function (e) {
        try {
            var t = r.call(e);
            return o.test(t);
        } catch (e) {
            return !1;
        }
    },
    s = function (e) {
        try {
            if (a(e)) return !1;
            return r.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    l = Object.prototype.toString,
    c = '[object Object]',
    u = '[object Function]',
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
                    return (t === f || t === _ || t === p || t === c) && null == e('');
                } catch (e) {}
            return !1;
        });
}
e.exports = i
    ? function (e) {
          if (g(e)) return !0;
          if (!e || ('function' != typeof e && 'object' != typeof e)) return !1;
          try {
              i(e, null, t);
          } catch (e) {
              if (e !== n) return !1;
          }
          return !a(e) && s(e);
      }
    : function (e) {
          if (g(e)) return !0;
          if (!e || ('function' != typeof e && 'object' != typeof e)) return !1;
          if (h) return s(e);
          if (a(e)) return !1;
          var t = l.call(e);
          return (t === u || t === d || !!/^\[object HTML/.test(t)) && s(e);
      };
