"use strict";
var t,
    r,
    n = Function.prototype.toString,
    o = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
if ("function" == typeof o && "function" == typeof Object.defineProperty)
    try {
        (t = Object.defineProperty({}, "length", {
            get: function () {
                throw r;
            },
        })),
            (r = {}),
            o(
                function () {
                    throw 42;
                },
                null,
                t,
            );
    } catch (e) {
        e !== r && (o = null);
    }
else o = null;
var i = /^\s*class\b/,
    a = function (e) {
        try {
            var t = n.call(e);
            return i.test(t);
        } catch (e) {
            return !1;
        }
    },
    s = function (e) {
        try {
            if (a(e)) return !1;
            return n.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    l = Object.prototype.toString,
    u = "function" == typeof Symbol && !!Symbol.toStringTag,
    c = !(0 in [,]),
    f = function () {
        return !1;
    };
if ("object" == typeof document) {
    var p = document.all;
    l.call(p) === l.call(document.all) &&
        (f = function (e) {
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
e.exports = o
    ? function (e) {
          if (f(e)) return !0;
          if (!e || ("function" != typeof e && "object" != typeof e)) return !1;
          try {
              o(e, null, t);
          } catch (e) {
              if (e !== r) return !1;
          }
          return !a(e) && s(e);
      }
    : function (e) {
          if (f(e)) return !0;
          if (!e || ("function" != typeof e && "object" != typeof e)) return !1;
          if (u) return s(e);
          if (a(e)) return !1;
          var t = l.call(e);
          return (
              ("[object Function]" === t || "[object GeneratorFunction]" === t || !!/^\[object HTML/.test(t)) && s(e)
          );
      };
