s.d(e, { Z: () => f });
var i = s(200651),
    a = s(192379),
    n = s(286379),
    l = s(481060),
    r = s(493773),
    c = s(797614),
    o = s(626135),
    d = s(103879),
    m = s(451284),
    u = s(802429),
    x = s(846488),
    h = s(181211),
    g = s(811085),
    j = s(967254),
    v = s(981631),
    N = s(388032),
    p = s(335941);
function f() {
    let t = (0, h.Z)(),
        e = (0, x.e)(),
        s = (0, m.P)(),
        f = (0, u.i)();
    (0, r.ZP)(() => {
        d.yq();
    });
    let T = a.useRef(s);
    return (a.useEffect(() => {
        T.current = s;
    }),
    a.useEffect(() => {
        e && (o.default.track(v.rMx.SAFETY_HUB_VIEWED, { account_standing: T.current.state }), c.Z.increment({ name: n.V.SAFETY_HUB_VIEW }));
    }, [e]),
    t)
        ? (0, i.jsx)('div', { children: (0, i.jsx)(l.$jN, {}) })
        : null != f
          ? (0, i.jsxs)(l.qXd, {
                color: l.DM8.DANGER,
                className: p.nagbar,
                children: [
                    N.intl.string(N.t.TDRvqq),
                    (0, i.jsx)(l.EyT, {
                        onClick: () => d.yq(),
                        children: N.intl.string(N.t.R1AN4O)
                    })
                ]
            })
          : (0, i.jsxs)('div', {
                className: p.container,
                children: [(0, i.jsx)(g.Z, {}), (0, i.jsx)(j.N, {})]
            });
}
