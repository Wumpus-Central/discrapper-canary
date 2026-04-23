a.d(l, { u: () => A });
var t = a(627968),
    s = a(64700),
    i = a(964892),
    n = a(208756),
    c = a(135564),
    h = a(916845),
    r = a(627330),
    o = a(403581),
    d = a(688810),
    v = a(532794),
    g = a(881373),
    p = a(788868),
    m = a(49999),
    f = a(962995),
    w = a(985018),
    x = a(146218),
    u = a(240703);
function A(e) {
    let { targetElementRef: l, dismissPopover: a, children: A } = e,
        { analyticsLocations: I } = (0, d.Ay)(),
        M = s.useCallback(() => {
            a(m.i.TAKE_ACTION), (0, v.A)({ subscriptionTier: p.pe.TIER_2, analyticsLocations: I });
        }, [a, I]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", { children: A }),
            (0, t.jsx)(i.x, {
                targetElementRef: l,
                onRequestClose: () => a(m.i.USER_DISMISS),
                alignmentStrategy: "edge",
                align: "top",
                position: "right",
                caretConfig: { align: "start" },
                gradientColor: "nitro-pink",
                children: (0, t.jsxs)("div", {
                    "data-mana-component": "popover",
                    children: [
                        (0, t.jsx)(h.q, { onClick: () => a(m.i.USER_DISMISS), variant: "color-mix" }),
                        (0, t.jsx)("div", {
                            className: x.h,
                            children: (0, t.jsx)("img", { src: u.A, alt: "", "aria-hidden": !0, className: x.S }),
                        }),
                        (0, t.jsx)(r.D, {
                            title: w.intl.string(f.default.OlObRa),
                            body: w.intl.format(f.default["A+56/R"], { discountPercent: g.aW }),
                            badge: { type: "beta", variant: "expressive" },
                        }),
                        (0, t.jsx)(n.Z, {
                            actions: [
                                {
                                    text: w.intl.string(w.t.pj0XBN),
                                    variant: "primary",
                                    icon: o.t,
                                    iconPosition: "start",
                                    onClick: M,
                                },
                            ],
                        }),
                        (0, t.jsx)(c.F, {}),
                    ],
                }),
            }),
        ],
    });
}
