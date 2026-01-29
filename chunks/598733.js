n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    s = n(421380),
    c = n(397927),
    u = n(686956),
    E = n(976860),
    d = n(71393),
    _ = n(967198),
    A = n(449054),
    T = n(652215),
    I = n(985018),
    O = n(163677),
    N = n(1624);
let p = () => {
    let e = (0, o.bG)([_.A], () => _.A.getGuildId(), []),
        t = (0, o.bG)([d.A], () => d.A.getGuild(e), [e]),
        [n, l] = i.useState(!1);
    if (null == t) return null;
    let p = async () => {
        l(!0);
        try {
            A.cf(t.id),
                await u.A.joinGuild(t.id, {
                    source: T.Q4z.NOTICE_BAR,
                });
        } catch (e) {
            l(!1);
        }
    };
    return (0, r.jsxs)("div", {
        className: a()(O.lm, N.lm),
        children: [
            (0, r.jsxs)(s.$n, {
                look: s.$n.Looks.OUTLINED,
                color: s.$n.Colors.WHITE,
                size: s.$n.Sizes.NONE,
                className: a()(O.x6, O.aX),
                innerClassName: O.gb,
                onClick: () => {
                    (0, E.JK)().goBack();
                },
                children: [
                    (0, r.jsx)(c.rJJ, {
                        size: "xs",
                        color: "currentColor",
                        className: O.UE,
                    }),
                    I.intl.string(I.t["13/7kX"]),
                ],
            }),
            (0, r.jsx)(c.Text, {
                className: O.wx,
                variant: "text-sm/normal",
                children: I.intl.string(I.t["N/y2WE"]),
            }),
            (0, r.jsx)(s.$n, {
                className: O.x6,
                look: s.$n.Looks.OUTLINED,
                color: s.$n.Colors.WHITE,
                size: s.$n.Sizes.NONE,
                submitting: n,
                onClick: p,
                children: I.intl.format(I.t.uHN7ny, {
                    guild: t.name,
                }),
            }),
        ],
    });
};
