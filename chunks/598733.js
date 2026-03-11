n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(421380),
    c = n(397927),
    d = n(686956),
    u = n(976860),
    _ = n(71393),
    E = n(967198),
    T = n(449054),
    A = n(652215),
    I = n(985018),
    p = n(231667),
    N = n(504226);
let m = () => {
    let e = (0, a.bG)([E.A], () => E.A.getGuildId(), []),
        t = (0, a.bG)([_.A], () => _.A.getGuild(e), [e]),
        [n, r] = l.useState(!1);
    if (null == t) return null;
    let m = async () => {
        r(!0);
        try {
            T.cf(t.id), await d.A.joinGuild(t.id, { source: A.Q4z.NOTICE_BAR });
        } catch {
            r(!1);
        }
    };
    return (0, i.jsxs)("div", {
        className: s()(p.lm, N.lm),
        children: [
            (0, i.jsxs)(o.$n, {
                look: o.$n.Looks.OUTLINED,
                color: o.$n.Colors.WHITE,
                size: o.$n.Sizes.NONE,
                className: s()(p.x6, p.aX),
                innerClassName: p.gb,
                onClick: () => {
                    (0, u.JK)().goBack();
                },
                children: [
                    (0, i.jsx)(c.rJJ, { size: "xs", color: "currentColor", className: p.UE }),
                    I.intl.string(I.t["13/7kX"]),
                ],
            }),
            (0, i.jsx)(c.Text, { className: p.wx, variant: "text-sm/normal", children: I.intl.string(I.t["N/y2WE"]) }),
            (0, i.jsx)(o.$n, {
                className: p.x6,
                look: o.$n.Looks.OUTLINED,
                color: o.$n.Colors.WHITE,
                size: o.$n.Sizes.NONE,
                submitting: n,
                onClick: m,
                children: I.intl.format(I.t.uHN7ny, { guild: t.name }),
            }),
        ],
    });
};
