n.r(t), n.d(t, { default: () => o });
var r = n(951516);
function i(e) {
    return (i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function o(e) {
    return (0, r.Z)(1, arguments), e instanceof Date || ('object' === i(e) && '[object Date]' === Object.prototype.toString.call(e));
}
