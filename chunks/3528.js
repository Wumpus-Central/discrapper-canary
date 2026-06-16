"use strict";
var i = Array.prototype.slice,
    r = n(560332),
    s = Object.keys,
    a = s
        ? function (e) {
              return s(e);
          }
        : n(963980),
    o = Object.keys;
(a.shim = function () {
    return (
        Object.keys
            ? !(function () {
                  var e = Object.keys(arguments);
                  return e && e.length === arguments.length;
              })(1, 2) &&
              (Object.keys = function (e) {
                  return r(e) ? o(i.call(e)) : o(e);
              })
            : (Object.keys = a),
        Object.keys || a
    );
}),
    (e.exports = a);
