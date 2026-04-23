n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(289873),
    a = n(73153),
    o = n(447696),
    d = n(403362),
    c = n(555337),
    u = n(92911);
let m = () => {
    let { guild: e } = (0, s.bG)([c.A], () => c.A.getProps()),
        [t, n] = l.useState(0);
    switch (
        (l.useEffect(() => {
            null != e &&
                a.h.wait(() => {
                    (0, o.Fy)(e.id).then(() => {
                        n(1);
                    });
                });
        }, [e]),
        t)
    ) {
        case 0:
            return (0, i.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE });
        case 1:
            return (0, i.jsx)(u.A, { guild: e });
        default:
            return (0, d.xb)(t);
    }
};
