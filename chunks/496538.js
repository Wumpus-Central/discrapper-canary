"use strict";
var i = n(257943),
    r = n(703441),
    s = TypeError,
    a = Object.getOwnPropertyDescriptor;
e.exports =
    i &&
    !(function () {
        if (void 0 !== this) return !0;
        try {
            Object.defineProperty([], "length", { writable: !1 }).length = 1;
        } catch (e) {
            return e instanceof TypeError;
        }
    })()
        ? function (e, t) {
              if (r(e) && !a(e, "length").writable) throw new s("Cannot set read only .length");
              return (e.length = t);
          }
        : function (e, t) {
              return (e.length = t);
          };
