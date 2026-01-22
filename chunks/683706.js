n.d(t, {
    A: () => a,
});
var r = n(29583),
    i = n(618027);

function a(e, t) {
    (0, i.A)(2, arguments);
    var n = (0, r.default)(e),
        a = (0, r.default)(t),
        s = n.getTime() - a.getTime();
    return s < 0 ? -1 : s > 0 ? 1 : s;
}
