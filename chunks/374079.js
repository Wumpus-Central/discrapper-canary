a.d(l, { A: () => I });
var t = a(627968),
    s = a(64700),
    i = a(964892),
    n = a(208756),
    c = a(135564),
    h = a(916845),
    r = a(627330),
    o = a(403581),
    d = a(793574),
    v = a(688810),
    g = a(532794),
    p = a(295140),
    m = a(788868),
    f = a(652215),
    w = a(49999),
    x = a(587416),
    u = a(985018),
    A = a(89400);
function I(e) {
    let { targetElementRef: l, dismissPopover: a, children: I, numOrbs: M } = e,
        { analyticsLocations: Z } = (0, v.Ay)(d.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION),
        _ = s.useCallback(() => {
            a(w.i.TAKE_ACTION),
                (0, g.A)({
                    subscriptionTier: m.pe.TIER_2,
                    analyticsLocations: Z,
                    analyticsObject: { object: f.ZSU.BUTTON_CTA, objectType: f.AnalyticsObjectTypes.TIER_2 },
                });
        }, [a, Z]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", { children: I }),
            (0, t.jsx)(i.x, {
                targetElementRef: l,
                onRequestClose: () => a(w.i.USER_DISMISS),
                alignmentStrategy: "edge",
                align: "top",
                position: "right",
                caretConfig: { align: "start" },
                gradientColor: "nitro-pink",
                children: (0, t.jsxs)("div", {
                    "data-mana-component": "popover",
                    children: [
                        (0, t.jsx)(h.q, { onClick: () => a(w.i.USER_DISMISS), variant: "color-mix" }),
                        (0, t.jsx)("div", { className: A.O, children: (0, t.jsx)(p.A, { orbsCount: M }) }),
                        (0, t.jsx)(r.D, {
                            title: u.intl.string(x.default.hx5AFp),
                            body: u.intl.formatToPlainString(x.default.otQEii, { orbsCount: M }),
                            badge: { type: "beta", variant: "expressive" },
                            className: A.Q,
                        }),
                        (0, t.jsx)(n.Z, {
                            actions: [{ text: u.intl.string(u.t.pj0XBN), variant: "primary", icon: o.t, onClick: _ }],
                        }),
                        (0, t.jsx)(c.F, {}),
                    ],
                }),
            }),
        ],
    });
}
