function a(e) {
    return (a =
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
    return null !== e && "object" === a(e) && Object.prototype.hasOwnProperty.call(e, "current");
}
t.d(n, { i: () => r });
