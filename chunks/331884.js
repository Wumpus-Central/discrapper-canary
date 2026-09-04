r.d(t, { i: () => a, o: () => o });
var n = r(284009),
    i = r.n(n),
    s = r(17928),
    l = r(287809);
function a() {
    let e = (0, s.bG)([l.default], () => l.default.getCurrentUser());
    return i()(null != e, "user has to be signed in before accessing shop"), e;
}
function o() {
    return (0, s.bG)([l.default], () => l.default.getCurrentUser());
}
