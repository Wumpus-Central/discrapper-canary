"use strict";
t.exports = function (t, r) {
    return 1 === r
        ? function (r, e) {
              return r[t](e);
          }
        : function (r, e, n) {
              return r[t](e, n);
          };
};
