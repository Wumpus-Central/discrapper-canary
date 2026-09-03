var n = Array.prototype.slice,
    i = r(560332),
    o = Object.keys,
    a = o
        ? function (e) {
              return o(e);
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
                  return i(e) ? s(n.call(e)) : s(e);
              })
            : (Object.keys = a),
        Object.keys || a
    );
}),
    (e.exports = a);
