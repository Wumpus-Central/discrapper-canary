a.d(t, { i: () => i, o: () => o });
var n = a(284009),
    r = a.n(n),
    s = a(17928),
    l = a(287809);
let i = () => {
        let e = (0, s.bG)([l.default], () => l.default.getCurrentUser());
        return r()(null != e, "user has to be signed in before accessing shop"), e;
    },
    o = () => (0, s.bG)([l.default], () => l.default.getCurrentUser());
