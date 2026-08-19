"use strict";
var n = r(655310),
    o = r(594230),
    i = r(868089),
    a = r(741623);
e.exports = n
    ? function (e, t) {
          if (n(e, t)) return e;
          throw new a("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      }
    : o ||
      (i
          ? function (e, t) {
                return i(e, t), e;
            }
          : null);
