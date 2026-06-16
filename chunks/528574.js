"use strict";
var i = n(655310),
    r = n(594230),
    s = n(868089),
    a = n(741623);
e.exports = i
    ? function (e, t) {
          if (i(e, t)) return e;
          throw new a("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      }
    : r ||
      (s
          ? function (e, t) {
                return s(e, t), e;
            }
          : null);
