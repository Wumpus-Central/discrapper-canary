n.d(t, { A: () => f }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(73153),
    c = n(447696),
    o = n(403362),
    d = n(555337),
    u = n(92911);
let f = () => {
    let { guild: e } = (0, l.bG)([d.A], () => d.A.getProps()),
        [t, n] = i.useState(0);
    switch (
        (i.useEffect(() => {
            null != e &&
                a.h.wait(() => {
                    (0, c.Fy)(e.id).then(() => {
                        n(1);
                    });
                });
        }, [e]),
        t)
    ) {
        case 0:
            return (0, r.jsx)(s.y$y, { type: s.y$y.Type.SPINNING_CIRCLE });
        case 1:
            return (0, r.jsx)(u.A, { guild: e });
        default:
            return (0, o.xb)(t);
    }
};
