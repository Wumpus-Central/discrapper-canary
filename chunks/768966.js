"use strict";
var n = e(673162).forEach;
t.exports = e(242291)("forEach")
    ? [].forEach
    : function (t) {
          return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
      };
