s.d(t, { Z: () => f });
var a = s(200651),
    n = s(192379),
    i = s(286379),
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
    N = s(981631),
    p = s(388032),
    v = s(618983);
function f() {
    let e = (0, x.Z)(),
        t = (0, h.e)(),
        s = (0, u.P)(),
        f = (0, m.i)();
    (0, l.ZP)(() => {
        d.yq();
    });
    let S = n.useRef(s);
    return (n.useEffect(() => {
        S.current = s;
    }),
    n.useEffect(() => {
        t && (o.default.track(N.rMx.SAFETY_HUB_VIEWED, { account_standing: S.current.state }), c.Z.increment({ name: i.V.SAFETY_HUB_VIEW }));
    }, [t]),
    e)
        ? (0, a.jsx)('div', { children: (0, a.jsx)(r.$jN, {}) })
        : null != f
          ? (0, a.jsxs)(r.qXd, {
                color: r.DM8.DANGER,
                className: v.nagbar,
                children: [
                    p.NW.string(p.t.TDRvqq),
                    (0, a.jsx)(r.EyT, {
                        onClick: () => d.yq(),
                        children: p.NW.string(p.t.R1AN4O)
                    })
                ]
            })
          : (0, a.jsxs)('div', {
                className: v.container,
                children: [(0, a.jsx)(g.Z, {}), (0, a.jsx)(j.N, {})]
            });
}
