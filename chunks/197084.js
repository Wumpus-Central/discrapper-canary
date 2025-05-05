n.r(t), n.d(t, { default: () => a });
var r = n(528734),
    i = n(951516);
function a(e, t) {
    (0, i.Z)(2, arguments);
    var n = (0, r.default)(e).getTime(),
        a = (0, r.default)(t.start).getTime(),
        o = (0, r.default)(t.end).getTime();
    if (!(a <= o)) throw RangeError('Invalid interval');
    return n >= a && n <= o;
}
