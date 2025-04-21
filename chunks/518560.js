n.d(e, { Z: () => N });
var s = n(200651),
    i = n(192379),
    a = n(286379),
    r = n(481060),
    l = n(493773),
    c = n(797614),
    o = n(626135),
    d = n(103879),
    u = n(451284),
    m = n(802429),
    h = n(846488),
    x = n(181211),
    g = n(811085),
    j = n(967254),
    p = n(981631),
    v = n(388032),
    f = n(618983);
function N() {
    let t = (0, x.Z)(),
        e = (0, h.e)(),
        n = (0, u.P)(),
        N = (0, m.i)();
    (0, l.ZP)(() => {
        d.yq();
    });
    let S = i.useRef(n);
    return (i.useEffect(() => {
        S.current = n;
    }),
    i.useEffect(() => {
        e && (o.default.track(p.rMx.SAFETY_HUB_VIEWED, { account_standing: S.current.state }), c.Z.increment({ name: a.V.SAFETY_HUB_VIEW }));
    }, [e]),
    t)
        ? (0, s.jsx)('div', { children: (0, s.jsx)(r.$jN, {}) })
        : null != N
          ? (0, s.jsxs)(r.qXd, {
                color: r.DM8.DANGER,
                className: f.nagbar,
                children: [
                    v.intl.string(v.t.TDRvqq),
                    (0, s.jsx)(r.EyT, {
                        onClick: () => d.yq(),
                        children: v.intl.string(v.t.R1AN4O)
                    })
                ]
            })
          : (0, s.jsxs)('div', {
                className: f.container,
                children: [(0, s.jsx)(g.Z, {}), (0, s.jsx)(j.N, {})]
            });
}
