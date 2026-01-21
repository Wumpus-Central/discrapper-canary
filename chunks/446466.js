n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    l = n(907862),
    a = n(159691),
    o = n(481060),
    s = n(703656),
    c = n(375527),
    u = n(981631),
    d = n(921944),
    p = n(618435),
    f = n(388032),
    g = n(474917);
function h(e) {
    let { targetElementRef: t, dismissPopover: n, children: h } = e,
        { orbsRewardAmount: m } = (0, c.er)("PremiumOrbRewardsOrbDropPopover"),
        b = i.useCallback(() => {
            n(d.L.TAKE_ACTION), (0, s.uL)(u.Z5c.APPLICATION_STORE);
        }, [n]),
        E = (0, r.jsx)(l.J2, {
            targetElementRef: t,
            onRequestClose: () => n(d.L.USER_DISMISS),
            graphic: {
                type: "image",
                src: g.Z,
            },
            badge: {
                type: "beta",
                variant: "expressive",
            },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: f.intl.string(p.default["78+gLr"]),
            body: f.intl.formatToPlainString(p.default.Ry1TXC, { orbsCount: m }),
            actions: [
                {
                    text: f.intl.string(f.t.RzWDqY),
                    icon: a.SrA,
                    onClick: b,
                },
            ],
            gradientColor: {
                type: "custom",
                start: o.TVs.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
                end: o.TVs.colors.EXPRESSIVE_GRADIENT_PURPLE_END,
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", { children: h }), E],
    });
}
