"use strict";
var i = n(521033),
    r = n(755311),
    s = n(783773);
e.exports = i
    ? function (e) {
          return i(e);
      }
    : r
      ? function (e) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw TypeError("getProto: not an object");
            return r(e);
        }
      : s
        ? function (e) {
              return s(e);
          }
        : null;
