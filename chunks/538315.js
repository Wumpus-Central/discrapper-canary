var i = Array.prototype.slice,
    a = r(560640),
    o = Object.keys,
    s = o
        ? function (e) {
              return o(e);
          }
        : r(973351),
    l = Object.keys;
(s.shim = function () {
    return (
        Object.keys
            ? !(function () {
                  var e = Object.keys(arguments);
                  return e && e.length === arguments.length;
              })(1, 2) &&
              (Object.keys = function (e) {
                  return a(e) ? l(i.call(e)) : l(e);
              })
            : (Object.keys = s),
        Object.keys || s
    );
}),
    (e.exports = s);
