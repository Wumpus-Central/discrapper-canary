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
    (0, i.Z)(1, arguments);
    var n = Object.prototype.toString.call(e);
    return e instanceof Date || ('object' === a(e) && '[object Date]' === n) ? new Date(e.getTime()) : 'number' == typeof e || '[object Number]' === n ? new Date(e) : (('string' == typeof e || '[object String]' === n) && 'undefined' != typeof console && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(Error().stack)), new Date(NaN));
}
