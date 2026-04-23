a.d(l, { A: () => f });
var t = a(627968),
    s = a(64700),
    i = a(362599),
    n = a(265486),
    c = a(403581),
    h = a(31502),
    r = a(976860),
    o = a(920050),
    d = a(235365),
    v = a(652215),
    g = a(49999),
    p = a(490285),
    m = a(985018);
function f(e) {
    let { targetElementRef: l, dismissPopover: a, lastGrantedRewardAmount: f, children: w } = e,
        x = s.useCallback(() => {
            a(g.i.TAKE_ACTION);
            let e = (0, h.Q)("PremiumOrbRewardsOrbDropPopover")
                ? `${v.BVt.NITRO_HOME}?perk=${o.NITRO_ORBS_REWARDS_CARD_ID}`
                : `${v.BVt.NITRO_HOME}?section=${d.L}`;
            (0, r.pX)(e);
        }, [a]),
        u = (0, t.jsx)(n.A, {
            targetElementRef: l,
            onRequestClose: () => a(g.i.USER_DISMISS),
            graphic: { type: "rive", rive: i.Z },
            badge: { type: "beta", variant: "expressive" },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: m.intl.string(p.default["78+gLr"]),
            body: m.intl.formatToPlainString(p.default.Ry1TXC, { orbsCount: f }),
            actions: [{ text: m.intl.string(m.t.RzWDqY), icon: c.t, onClick: x }],
            gradientColor: "nitro-pink",
        });
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("div", { children: w }), u] });
}
