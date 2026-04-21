n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(892227),
    a = n(397927),
    s = n(320118),
    l = n(490285),
    o = n(985018),
    c = n(875679);
let d = () => {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, s.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, i.jsxs)("div", {
        className: c.kL,
        children: [
            null != n &&
                (0, i.jsxs)("div", {
                    className: c.nM,
                    children: [
                        (0, i.jsxs)("div", {
                            className: c.Pf,
                            children: [
                                (0, i.jsx)(a.CTc, { size: "sm", color: a.LU0.colors.TEXT_DEFAULT }),
                                (0, i.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: o.intl.string(l.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: o.intl.format(l.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && (0, i.jsx)("div", { className: c.yF }),
            (0, i.jsxs)("div", {
                className: c.nM,
                children: [
                    (0, i.jsxs)("div", {
                        className: c.Pf,
                        children: [
                            (0, i.jsx)(a.Cp8, { size: "sm", color: a.LU0.colors.TEXT_DEFAULT }),
                            (0, i.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: o.intl.string(l.default.F7Bhsg),
                            }),
                        ],
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: o.intl.format(l.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                    }),
                ],
            }),
        ],
    });
};
