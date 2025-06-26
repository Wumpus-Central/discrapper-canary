s.d(e, { Z: () => N });
var n = s(255367),
    i = s(73800),
    a = s(286379),
    r = s(481060),
    l = s(493773),
    c = s(797614),
    o = s(626135),
    d = s(103879),
    u = s(451284),
    m = s(802429),
    h = s(846488),
    x = s(181211),
    g = s(811085),
    j = s(967254),
    p = s(981631),
    f = s(388032),
    v = s(618983);
function N() {
    let t = (0, x.Z)(),
        e = (0, h.e)(),
        s = (0, u.P)(),
        N = (0, m.i)();
    (0, l.ZP)(() => {
        d.yq();
    });
    let S = i.useRef(s);
    return (i.useEffect(() => {
        S.current = s;
    }),
    i.useEffect(() => {
        e && (o.default.track(p.rMx.SAFETY_HUB_VIEWED, { account_standing: S.current.state }), c.Z.increment({ name: a.V.SAFETY_HUB_VIEW }));
    }, [e]),
    t)
        ? (0, n.jsx)('div', { children: (0, n.jsx)(r.$jN, {}) })
        : null != N
          ? (0, n.jsxs)(r.qXd, {
                color: r.DM8.DANGER,
                className: v.nagbar,
                children: [
                    f.intl.string(f.t.TDRvqq),
                    (0, n.jsx)(r.EyT, {
                        onClick: () => d.yq(),
                        children: f.intl.string(f.t.R1AN4O)
                    })
                ]
            })
          : (0, n.jsxs)('div', {
                className: v.container,
                children: [(0, n.jsx)(g.Z, {}), (0, n.jsx)(j.N, {})]
            });
}
