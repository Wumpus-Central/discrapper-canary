n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(362599),
    r = n(342494),
    s = n(732955),
    o = n(31502),
    d = n(976860),
    c = n(920050),
    u = n(235365),
    A = n(652215),
    h = n(49999),
    _ = n(490285),
    m = n(985018);
function g(e) {
    let { targetElementRef: t, dismissPopover: n, lastGrantedRewardAmount: g, children: p } = e,
        E = l.useCallback(() => {
            n(h.i.TAKE_ACTION);
            let e = (0, o.Q)("PremiumOrbRewardsOrbDropPopover")
                ? `${A.BVt.NITRO_HOME}?perk=${c.NITRO_ORBS_REWARDS_CARD_ID}`
                : `${A.BVt.NITRO_HOME}?section=${u.L}`;
            (0, d.pX)(e);
        }, [n]),
        I = (0, i.jsx)(r.AM, {
            targetElementRef: t,
            onRequestClose: () => n(h.i.USER_DISMISS),
            graphic: { type: "rive", rive: a.Z },
            badge: { type: "beta", variant: "expressive" },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: m.intl.string(_.default["78+gLr"]),
            body: m.intl.formatToPlainString(_.default.Ry1TXC, { orbsCount: g }),
            actions: [{ text: m.intl.string(m.t.RzWDqY), icon: s.tvc, onClick: E }],
            gradientColor: "nitro-pink",
        });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: p }), I] });
}
