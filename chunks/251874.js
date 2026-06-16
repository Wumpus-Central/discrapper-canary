"use strict";
function i(e) {
    return (i =
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
function r(e) {
    return null !== e && "object" === i(e) && Object.prototype.hasOwnProperty.call(e, "current");
}
n.d(t, { i: () => r });
