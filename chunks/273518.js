"use strict";
n.r(t), n.d(t, { default: () => s });
var i = n(618027);
function r(e) {
    return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function s(e) {
    return (
        (0, i.A)(1, arguments),
        e instanceof Date || ("object" === r(e) && "[object Date]" === Object.prototype.toString.call(e))
    );
}
