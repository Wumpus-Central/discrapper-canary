"use strict";
var n = r(521033),
    o = r(755311),
    i = r(783773);
e.exports = n
    ? function (e) {
          return n(e);
      }
    : o
      ? function (e) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw TypeError("getProto: not an object");
            return o(e);
        }
      : i
        ? function (e) {
              return i(e);
          }
        : null;
