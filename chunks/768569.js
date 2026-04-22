a.d(l, { p: () => f });
var t = a(627968);
a(64700);
var s = a(265486),
    i = a(192308),
    n = a(403581),
    c = a(688810),
    h = a(532794),
    r = a(113359),
    o = a(788868),
    d = a(88001),
    v = a(49999),
    g = a(466919),
    p = a(985018),
    m = a(438705);
let f = (e) => {
    let { targetElementRef: l, dismissPopover: f, children: w } = e,
        x = (0, r.Q)({ location: "nitro_tab_popover" }),
        { analyticsLocations: u } = (0, c.Ay)(),
        A = x
            ? p.intl.string(g.default.oOSj1l)
            : p.intl.format(g.default["c+NBSl"], { premiumGroupProductName: (0, d.DP)() }),
        I = x
            ? p.intl.string(g.default.nCLJQn)
            : p.intl.format(g.default.MuUV5u, { premiumGroupProductName: (0, d.DP)(), totalSeats: d.aw }),
        M = (0, t.jsx)(s.A, {
            targetElementRef: l,
            title: A,
            body: I,
            graphic: { type: "image", src: m },
            badge: { type: "beta", variant: "expressive" },
            gradientColor: "nitro-pink",
            size: "md",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            actions: [
                {
                    text: x
                        ? p.intl.format(g.default.LwdrNi, { premiumGroupProductName: (0, d.DP)() })
                        : p.intl.string(g.default["IO+nlU"]),
                    variant: x ? "expressive" : "primary",
                    onClick: () => {
                        f(v.i.TAKE_ACTION),
                            x
                                ? (0, h.A)({
                                      subscriptionTier: o.pe.TIER_2,
                                      initialPlanId: o.gD.PREMIUM_GROUP_MONTH,
                                      analyticsLocations: u,
                                  })
                                : (0, i.openModalLazy)(async () => {
                                      let { default: e } = await a.e("24833").then(a.bind(a, 526710));
                                      return (l) => (0, t.jsx)(e, { ...l });
                                  });
                    },
                    ...(x ? { icon: n.t, iconPosition: "start" } : {}),
                },
            ],
            onRequestClose: () => f(v.i.USER_DISMISS),
        });
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("div", { children: w }), M] });
};
