n.d(t, { u: () => f });
var i = n(627968),
    l = n(64700),
    a = n(964892),
    r = n(208756),
    s = n(135564),
    o = n(916845),
    d = n(627330),
    c = n(397927),
    u = n(688810),
    A = n(532794),
    h = n(881373),
    _ = n(788868),
    m = n(49999),
    p = n(653624),
    g = n(985018),
    E = n(991674),
    I = n(240703);
function f(e) {
    let { targetElementRef: t, dismissPopover: n, children: f } = e,
        { analyticsLocations: C } = (0, u.Ay)(),
        T = l.useCallback(() => {
            n(m.i.TAKE_ACTION), (0, A.A)({ subscriptionTier: _.pe.TIER_2, analyticsLocations: C });
        }, [n, C]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { children: f }),
            (0, i.jsx)(a.x, {
                targetElementRef: t,
                onRequestClose: () => n(m.i.USER_DISMISS),
                alignmentStrategy: "edge",
                align: "top",
                position: "right",
                caretConfig: { align: "start" },
                gradientColor: "nitro-pink",
                children: (0, i.jsxs)("div", {
                    "data-mana-component": "popover",
                    children: [
                        (0, i.jsx)(o.q, { onClick: () => n(m.i.USER_DISMISS), variant: "color-mix" }),
                        (0, i.jsx)("div", {
                            className: E.h,
                            children: (0, i.jsx)("img", { src: I.A, alt: "", "aria-hidden": !0, className: E.S }),
                        }),
                        (0, i.jsx)(d.D, {
                            title: g.intl.string(p.default.OlObRa),
                            body: g.intl.format(p.default["A+56/R"], { discountPercent: h.aW }),
                            badge: { type: "beta", variant: "expressive" },
                        }),
                        (0, i.jsx)(r.Z, {
                            actions: [
                                {
                                    text: g.intl.string(g.t.pj0XBN),
                                    variant: "primary",
                                    icon: c.tvc,
                                    iconPosition: "start",
                                    onClick: T,
                                },
                            ],
                        }),
                        (0, i.jsx)(s.F, {}),
                    ],
                }),
            }),
        ],
    });
}
