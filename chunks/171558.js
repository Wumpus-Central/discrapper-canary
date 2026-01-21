n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    l = n(907862),
    a = n(481060),
    o = n(703656),
    s = n(375527),
    c = n(981631),
    u = n(921944),
    d = n(618435),
    p = n(388032),
    f = n(474917);
function g(e) {
    let { targetElementRef: t, dismissPopover: n, children: g } = e,
        { orbsRewardAmount: h } = (0, s.er)("PremiumOrbRewardsUpsellPopover"),
        m = i.useCallback(() => {
            n(u.L.TAKE_ACTION), (0, o.uL)(c.Z5c.APPLICATION_STORE);
        }, [n]),
        b = (0, r.jsx)(l.J2, {
            targetElementRef: t,
            onRequestClose: () => n(u.L.USER_DISMISS),
            graphic: {
                type: "image",
                src: f.Z,
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
            title: p.intl.string(d.default["3BI7j6"]),
            body: p.intl.formatToPlainString(d.default.FGYM4u, { orbsCount: h }),
            actions: [
                {
                    text: p.intl.string(p.t.hvVgAZ),
                    onClick: m,
                },
            ],
            gradientColor: {
                type: "custom",
                start: a.TVs.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
                end: a.TVs.colors.EXPRESSIVE_GRADIENT_PURPLE_END,
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", { children: g }), b],
    });
}
