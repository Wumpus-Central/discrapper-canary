"use strict";
var r = n(630017),
    i = Function.prototype,
    s = i.call,
    a = r && i.bind.bind(s, s);
e.exports = r
    ? a
    : function (e) {
          return function () {
              return s.apply(e, arguments);
          };
      };
