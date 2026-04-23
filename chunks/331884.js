r.d(t, { i: () => a });
var i = r(284009),
    n = r.n(i),
    l = r(17928),
    s = r(287809);
let a = () => {
    let e = (0, l.bG)([s.default], () => s.default.getCurrentUser());
    return n()(null != e, "user has to be signed in before accessing shop"), e;
};
