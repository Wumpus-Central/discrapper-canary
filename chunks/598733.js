n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(421380),
    c = n(397927),
    u = n(686956),
    d = n(976860),
    _ = n(71393),
    E = n(967198),
    A = n(449054),
    T = n(652215),
    I = n(985018),
    N = n(236458),
    p = n(215433);
let h = () => {
    let e = (0, a.bG)([E.A], () => E.A.getGuildId(), []),
        t = (0, a.bG)([_.A], () => _.A.getGuild(e), [e]),
        [n, r] = l.useState(!1);
    if (null == t) return null;
    let h = async () => {
        r(!0);
        try {
            A.cf(t.id), await u.A.joinGuild(t.id, { source: T.Q4z.NOTICE_BAR });
        } catch {
            r(!1);
        }
    };
    return (0, i.jsxs)("div", {
        className: s()(N.lm, p.lm),
        children: [
            (0, i.jsxs)(o.$n, {
                look: o.$n.Looks.OUTLINED,
                color: o.$n.Colors.WHITE,
                size: o.$n.Sizes.NONE,
                className: s()(N.x6, N.aX),
                innerClassName: N.gb,
                onClick: () => {
                    (0, d.JK)().goBack();
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
                onClick: h,
                children: I.intl.format(I.t.uHN7ny, { guild: t.name }),
            }),
        ],
    });
};
