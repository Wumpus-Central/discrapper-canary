n.d(t, { i: () => a, o: () => o });
var r = n(284009),
    i = n.n(r),
    s = n(17928),
    l = n(287809);
function a() {
    let e = (0, s.bG)([l.default], () => l.default.getCurrentUser());
    return i()(null != e, "user has to be signed in before accessing shop"), e;
}
function o() {
    return (0, s.bG)([l.default], () => l.default.getCurrentUser());
}
