"use strict";
var n = r(521033),
    i = r(755311),
    o = r(783773);
e.exports = n
    ? function (e) {
          return n(e);
      }
    : i
      ? function (e) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw TypeError("getProto: not an object");
            return i(e);
        }
      : o
        ? function (e) {
              return o(e);
          }
        : null;
