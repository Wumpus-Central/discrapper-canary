var r = Array.prototype.slice,
    i = n(560640),
    a = Object.keys,
    o = a
        ? function (e) {
              return a(e);
          }
        : n(973351),
    s = Object.keys;
(o.shim = function () {
    return (
        Object.keys
            ? !(function () {
                  var e = Object.keys(arguments);
                  return e && e.length === arguments.length;
              })(1, 2) &&
              (Object.keys = function (e) {
                  return i(e) ? s(r.call(e)) : s(e);
              })
            : (Object.keys = o),
        Object.keys || o
    );
}),
    (e.exports = o);
