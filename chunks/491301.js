"use strict";
function r(t) {
    return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                  return typeof t;
              }
            : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
              })(t);
}
n.d(e, { A: () => r });
