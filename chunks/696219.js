"use strict";
var t,
    n,
    i = Function.prototype.toString,
    r = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
if ("function" == typeof r && "function" == typeof Object.defineProperty)
    try {
        (t = Object.defineProperty({}, "length", {
            get: function () {
                throw n;
            },
        })),
            (n = {}),
            r(
                function () {
                    throw 42;
                },
                null,
                t,
            );
    } catch (e) {
        e !== n && (r = null);
    }
else r = null;
var s = /^\s*class\b/,
    a = function (e) {
        try {
            var t = i.call(e);
            return s.test(t);
        } catch (e) {
            return !1;
        }
    },
    o = function (e) {
        try {
            if (a(e)) return !1;
            return i.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    l = Object.prototype.toString,
    u = "function" == typeof Symbol && !!Symbol.toStringTag,
    c = !(0 in [,]),
    d = function () {
        return !1;
    };
if ("object" == typeof document) {
    var _ = document.all;
    l.call(_) === l.call(document.all) &&
        (d = function (e) {
            if ((c || !e) && (void 0 === e || "object" == typeof e))
                try {
                    var t = l.call(e);
                    return (
                        ("[object HTMLAllCollection]" === t ||
                            "[object HTML document.all class]" === t ||
                            "[object HTMLCollection]" === t ||
                            "[object Object]" === t) &&
                        null == e("")
                    );
                } catch (e) {}
            return !1;
        });
}
e.exports = r
    ? function (e) {
          if (d(e)) return !0;
          if (!e || ("function" != typeof e && "object" != typeof e)) return !1;
          try {
              r(e, null, t);
          } catch (e) {
              if (e !== n) return !1;
          }
          return !a(e) && o(e);
      }
    : function (e) {
          if (d(e)) return !0;
          if (!e || ("function" != typeof e && "object" != typeof e)) return !1;
          if (u) return o(e);
          if (a(e)) return !1;
          var t = l.call(e);
          return (
              ("[object Function]" === t || "[object GeneratorFunction]" === t || !!/^\[object HTML/.test(t)) && o(e)
          );
      };
