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
    (0, r.Z)(1, arguments);
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || ('object' === i(e) && '[object Date]' === t) ? new Date(e.getTime()) : 'number' == typeof e || '[object Number]' === t ? new Date(e) : (('string' == typeof e || '[object String]' === t) && 'undefined' != typeof console && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(Error().stack)), new Date(NaN));
}
