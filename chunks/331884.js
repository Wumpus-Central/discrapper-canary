n.d(t, { i: () => s, o: () => o });
var r = n(284009),
    i = n.n(r),
    a = n(17928),
    l = n(287809);
function s() {
    let e = (0, a.bG)([l.default], () => l.default.getCurrentUser());
    return i()(null != e, "user has to be signed in before accessing shop"), e;
}
function o() {
    return (0, a.bG)([l.default], () => l.default.getCurrentUser());
}
