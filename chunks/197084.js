n.r(t), n.d(t, { default: () => a });
var i = n(528734),
    r = n(951516);
function a(e, t) {
    (0, r.Z)(2, arguments);
    var n = (0, i.default)(e).getTime(),
        a = (0, i.default)(t.start).getTime(),
        s = (0, i.default)(t.end).getTime();
    if (!(a <= s)) throw RangeError('Invalid interval');
    return n >= a && n <= s;
}
