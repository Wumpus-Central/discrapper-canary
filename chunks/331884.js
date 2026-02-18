r.d(e, { i: () => a });
var i = r(284009),
    l = r.n(i),
    n = r(311907),
    s = r(287809);
let a = () => {
    let t = (0, n.bG)([s.default], () => s.default.getCurrentUser());
    return l()(null != t, "user has to be signed in before accessing shop"), t;
};
