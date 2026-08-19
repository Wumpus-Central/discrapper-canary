"use strict";
var n = Array.prototype.slice,
    o = r(560332),
    i = Object.keys,
    a = i
        ? function (e) {
              return i(e);
          }
        : r(963980),
    s = Object.keys;
(a.shim = function () {
    return (
        Object.keys
            ? !(function () {
                  var e = Object.keys(arguments);
                  return e && e.length === arguments.length;
              })(1, 2) &&
              (Object.keys = function (e) {
                  return o(e) ? s(n.call(e)) : s(e);
              })
            : (Object.keys = a),
        Object.keys || a
    );
}),
    (e.exports = a);
