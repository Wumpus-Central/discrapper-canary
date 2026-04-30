"use strict";
var i = n(630017),
    r = Function.prototype,
    s = r.call,
    a = i && r.bind.bind(s, s);
e.exports = i
    ? a
    : function (e) {
          return function () {
              return s.apply(e, arguments);
          };
      };
