"use strict";
var t,
    n,
    r = Function.prototype.toString,
    i = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
if ("function" == typeof i && "function" == typeof Object.defineProperty)
    try {
        (t = Object.defineProperty({}, "length", {
            get: function () {
                throw n;
            },
        })),
            (n = {}),
            i(
                function () {
                    throw 42;
                },
                null,
                t,
            );
    } catch (e) {
        e !== n && (i = null);
    }
else i = null;
var s = /^\s*class\b/,
    a = function (e) {
        try {
            var t = r.call(e);
            return s.test(t);
        } catch (e) {
            return !1;
        }
    },
    o = function (e) {
        try {
            if (a(e)) return !1;
            return r.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    l = Object.prototype.toString,
    u = "function" == typeof Symbol && !!Symbol.toStringTag,
    d = !(0 in [,]),
    c = function () {
        return !1;
    };
if ("object" == typeof document) {
    var _ = document.all;
    l.call(_) === l.call(document.all) &&
        (c = function (e) {
            if ((d || !e) && (void 0 === e || "object" == typeof e))
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
e.exports = i
    ? function (e) {
          if (c(e)) return !0;
          if (!e || ("function" != typeof e && "object" != typeof e)) return !1;
          try {
              i(e, null, t);
          } catch (e) {
              if (e !== n) return !1;
          }
          return !a(e) && o(e);
      }
    : function (e) {
          if (c(e)) return !0;
          if (!e || ("function" != typeof e && "object" != typeof e)) return !1;
          if (u) return o(e);
          if (a(e)) return !1;
          var t = l.call(e);
          return (
              ("[object Function]" === t || "[object GeneratorFunction]" === t || !!/^\[object HTML/.test(t)) && o(e)
          );
      };
