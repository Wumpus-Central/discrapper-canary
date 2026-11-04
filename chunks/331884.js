n.d(t, { i: () => a, o: () => u });
var r = n(284009),
    i = n.n(r),
    l = n(17928),
    s = n(287809);
function a() {
    let e = (0, l.bG)([s.default], () => s.default.getCurrentUser());
    return (i()(null != e, "user has to be signed in before accessing shop"), e);
}
function u() {
    return (0, l.bG)([s.default], () => s.default.getCurrentUser());
}
