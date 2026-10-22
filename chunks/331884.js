n.d(t, { i: () => l, o: () => u });
var r = n(284009),
    i = n.n(r),
    s = n(17928),
    a = n(287809);
function l() {
    let e = (0, s.bG)([a.default], () => a.default.getCurrentUser());
    return (i()(null != e, "user has to be signed in before accessing shop"), e);
}
function u() {
    return (0, s.bG)([a.default], () => a.default.getCurrentUser());
}
