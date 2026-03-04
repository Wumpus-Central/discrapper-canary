n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(311907),
    o = n(421380),
    c = n(397927),
    _ = n(686956),
    E = n(976860),
    d = n(71393),
    u = n(967198),
    A = n(449054),
    T = n(652215),
    I = n(985018),
    N = n(163677),
    R = n(1624);
let S = () => {
    let e = (0, s.bG)([u.A], () => u.A.getGuildId(), []),
        t = (0, s.bG)([d.A], () => d.A.getGuild(e), [e]),
        [n, r] = l.useState(!1);
    if (null == t) return null;
    let S = async () => {
        r(!0);
        try {
            A.cf(t.id), await _.A.joinGuild(t.id, { source: T.Q4z.NOTICE_BAR });
        } catch {
            r(!1);
        }
    };
    return (0, i.jsxs)("div", {
        className: a()(N.lm, R.lm),
        children: [
            (0, i.jsxs)(o.$n, {
                look: o.$n.Looks.OUTLINED,
                color: o.$n.Colors.WHITE,
                size: o.$n.Sizes.NONE,
                className: a()(N.x6, N.aX),
                innerClassName: N.gb,
                onClick: () => {
                    (0, E.JK)().goBack();
                },
                children: [
                    (0, i.jsx)(c.rJJ, { size: "xs", color: "currentColor", className: N.UE }),
                    I.intl.string(I.t["13/7kX"]),
                ],
            }),
            (0, i.jsx)(c.Text, { className: N.wx, variant: "text-sm/normal", children: I.intl.string(I.t["N/y2WE"]) }),
            (0, i.jsx)(o.$n, {
                className: N.x6,
                look: o.$n.Looks.OUTLINED,
                color: o.$n.Colors.WHITE,
                size: o.$n.Sizes.NONE,
                submitting: n,
                onClick: S,
                children: I.intl.format(I.t.uHN7ny, { guild: t.name }),
            }),
        ],
    });
};
