"use strict";
var t = "object" == typeof document && document.all;
e.exports =
    void 0 === t && void 0 !== t
        ? function (e) {
              return "function" == typeof e || e === t;
          }
        : function (e) {
              return "function" == typeof e;
          };
