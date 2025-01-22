r.r(n),
    r.d(n, {
        default: function () {
            return o;
        }
    });
var i = r(951516);
function a(e) {
    return (a =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function o(e) {
    return (0, i.Z)(1, arguments), e instanceof Date || ('object' === a(e) && '[object Date]' === Object.prototype.toString.call(e));
}
