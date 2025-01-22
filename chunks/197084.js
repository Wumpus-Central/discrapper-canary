r.r(n),
    r.d(n, {
        default: function () {
            return o;
        }
    });
var i = r(528734),
    a = r(951516);
function o(e, n) {
    (0, a.Z)(2, arguments);
    var r = (0, i.default)(e).getTime(),
        o = (0, i.default)(n.start).getTime(),
        s = (0, i.default)(n.end).getTime();
    if (!(o <= s)) throw RangeError('Invalid interval');
    return r >= o && r <= s;
}
