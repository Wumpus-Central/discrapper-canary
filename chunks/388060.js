n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var a = n(892227),
    i = n(81466),
    s = n(827734),
    l = n(834730),
    c = n(318254),
    o = n(320118),
    d = n(490285),
    u = n(985018),
    _ = n(875679);
let m = () => {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, o.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, a.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, r.jsxs)("div", {
        className: _.kL,
        children: [
            null != n &&
                (0, r.jsxs)("div", {
                    className: _.nM,
                    children: [
                        (0, r.jsxs)("div", {
                            className: _.Pf,
                            children: [
                                (0, r.jsx)(i.C, { size: "sm", color: s.A.colors.TEXT_DEFAULT }),
                                (0, r.jsx)(l.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: u.intl.string(d.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, r.jsx)(l.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: u.intl.format(d.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && (0, r.jsx)("div", { className: _.yF }),
            (0, r.jsxs)("div", {
                className: _.nM,
                children: [
                    (0, r.jsxs)("div", {
                        className: _.Pf,
                        children: [
                            (0, r.jsx)(c.C, { size: "sm", color: s.A.colors.TEXT_DEFAULT }),
                            (0, r.jsx)(l.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: u.intl.string(d.default.F7Bhsg),
                            }),
                        ],
                    }),
                    (0, r.jsx)(l.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: u.intl.format(d.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                    }),
                ],
            }),
        ],
    });
};
