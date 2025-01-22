r.r(n),
    r.d(n, {
        default: function () {
            return s;
        }
    });
var i = r(528734),
    a = r(951516);
function o(e) {
    return (o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function s(e) {
    var n, r;
    if (((0, a.Z)(1, arguments), e && 'function' == typeof e.forEach)) n = e;
    else {
        if ('object' !== o(e) || null === e) return new Date(NaN);
        n = Array.prototype.slice.call(e);
    }
    return (
        n.forEach(function (e) {
            var n = (0, i.default)(e);
            (void 0 === r || r < n || isNaN(Number(n))) && (r = n);
        }),
        r || new Date(NaN)
    );
}
