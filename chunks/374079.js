n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    l = n(964892),
    a = n(208756),
    s = n(135564),
    o = n(916845),
    d = n(627330),
    c = n(397927),
    u = n(793574),
    A = n(688810),
    h = n(532794),
    _ = n(295140),
    m = n(788868),
    g = n(652215),
    p = n(49999),
    E = n(49370),
    I = n(985018),
    f = n(32743);
function C(e) {
    let { targetElementRef: t, dismissPopover: n, children: C, numOrbs: T } = e,
        { analyticsLocations: N } = (0, A.Ay)(u.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION),
        S = r.useCallback(() => {
            n(p.i.TAKE_ACTION),
                (0, h.A)({
                    subscriptionTier: m.pe.TIER_2,
                    analyticsLocations: N,
                    analyticsObject: { object: g.ZSU.BUTTON_CTA, objectType: g.AnalyticsObjectTypes.TIER_2 },
                });
        }, [n, N]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { children: C }),
            (0, i.jsx)(l.x, {
                targetElementRef: t,
                onRequestClose: () => n(p.i.USER_DISMISS),
                alignmentStrategy: "edge",
                align: "top",
                position: "right",
                caretConfig: { align: "start" },
                gradientColor: "nitro-pink",
                children: (0, i.jsxs)("div", {
                    "data-mana-component": "popover",
                    children: [
                        (0, i.jsx)(o.q, { onClick: () => n(p.i.USER_DISMISS), variant: "color-mix" }),
                        (0, i.jsx)("div", { className: f.O, children: (0, i.jsx)(_.A, { orbsCount: T }) }),
                        (0, i.jsx)(d.D, {
                            title: I.intl.string(E.default.hx5AFp),
                            body: I.intl.formatToPlainString(E.default.otQEii, { orbsCount: T }),
                            badge: { type: "beta", variant: "expressive" },
                            className: f.Q,
                        }),
                        (0, i.jsx)(a.Z, {
                            actions: [{ text: I.intl.string(I.t.pj0XBN), variant: "primary", icon: c.tvc, onClick: S }],
                        }),
                        (0, i.jsx)(s.F, {}),
                    ],
                }),
            }),
        ],
    });
}
