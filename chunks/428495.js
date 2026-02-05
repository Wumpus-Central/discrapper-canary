"use strict";
var r = n(521033),
    i = n(755311),
    a = n(783773);
e.exports = r
    ? function (e) {
          return r(e);
      }
    : i
      ? function (e) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw TypeError("getProto: not an object");
            return i(e);
        }
      : a
        ? function (e) {
              return a(e);
          }
        : null;
