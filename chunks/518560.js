n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    a = n(286379),
    o = n(481060),
    s = n(493773),
    l = n(797614),
    c = n(626135),
    u = n(103879),
    d = n(451284),
    f = n(802429),
    _ = n(846488),
    p = n(181211),
    h = n(811085),
    m = n(967254),
    g = n(981631),
    E = n(388032),
    b = n(387191);
function y() {
    let e = (0, p.Z)(),
        t = (0, _.e)(),
        n = (0, d.P)(),
        y = (0, f.i)();
    (0, s.ZP)(() => {
        u.yq();
    });
    let O = i.useRef(n);
    return (i.useEffect(() => {
        O.current = n;
    }),
    i.useEffect(() => {
        t &&
            (c.default.track(g.rMx.SAFETY_HUB_VIEWED, { account_standing: O.current.state }),
            l.Z.increment({ name: a.V.SAFETY_HUB_VIEW }));
    }, [t]),
    e)
        ? (0, r.jsx)(o.$jN, {})
        : null != y
          ? (0, r.jsxs)(o.qXd, {
                color: o.DM8.DANGER,
                className: b.nagbar,
                children: [
                    E.intl.string(E.t.TDRvqs),
                    (0, r.jsx)(o.EyT, {
                        onClick: () => u.yq(),
                        children: E.intl.string(E.t.R1AN4F),
                    }),
                ],
            })
          : (0, r.jsxs)("div", {
                className: b.container,
                children: [(0, r.jsx)(h.Z, {}), (0, r.jsx)(m.N, {})],
            });
}
