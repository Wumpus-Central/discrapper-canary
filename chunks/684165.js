n.r(t), n.d(t, { default: () => a });
var i = n(951516);
function r(e) {
    return (r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function a(e) {
    return (0, i.Z)(1, arguments), e instanceof Date || ('object' === r(e) && '[object Date]' === Object.prototype.toString.call(e));
}
