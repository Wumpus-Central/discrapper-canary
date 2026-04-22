"use strict";
n.d(t, {
    Mv: () => s,
    kV: () => a,
    v2: () =>
        function e(t, n) {
            n && Array.isArray(t)
                ? t.forEach(function (t) {
                      return e(t, !1);
                  })
                : (0, r.V)(
                      "string" == typeof t || "symbol" === i(t),
                      n
                          ? "Type can only be a string, a symbol, or an array of either."
                          : "Type can only be a string or a symbol.",
                  );
        },
});
var r = n(321733);
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
function s(e) {
    (0, r.V)("function" == typeof e.canDrag, "Expected canDrag to be a function."),
        (0, r.V)("function" == typeof e.beginDrag, "Expected beginDrag to be a function."),
        (0, r.V)("function" == typeof e.endDrag, "Expected endDrag to be a function.");
}
function a(e) {
    (0, r.V)("function" == typeof e.canDrop, "Expected canDrop to be a function."),
        (0, r.V)("function" == typeof e.hover, "Expected hover to be a function."),
        (0, r.V)("function" == typeof e.drop, "Expected beginDrag to be a function.");
}
