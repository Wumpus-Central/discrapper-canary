n.d(t, { p: () => m });
var i = n(627968);
n(64700);
var a = n(342494),
    r = n(397927),
    l = n(688810),
    s = n(532794),
    o = n(113359),
    d = n(788868),
    c = n(88001),
    u = n(49999),
    A = n(519412),
    _ = n(985018),
    h = n(438705);
let m = (e) => {
    let { targetElementRef: t, dismissPopover: m, children: g } = e,
        p = (0, o.Q)({ location: "nitro_tab_popover" }),
        { analyticsLocations: E } = (0, l.Ay)(),
        I = p
            ? _.intl.string(A.default.oOSj1l)
            : _.intl.format(A.default["c+NBSl"], { premiumGroupProductName: (0, c.DP)() }),
        f = p
            ? _.intl.string(A.default.nCLJQn)
            : _.intl.format(A.default.MuUV5u, { premiumGroupProductName: (0, c.DP)(), totalSeats: c.aw }),
        C = (0, i.jsx)(a.AM, {
            targetElementRef: t,
            title: I,
            body: f,
            graphic: { type: "image", src: h },
            badge: { type: "beta", variant: "expressive" },
            gradientColor: "nitro-pink",
            size: "md",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            actions: [
                {
                    text: p
                        ? _.intl.format(A.default.LwdrNi, { premiumGroupProductName: (0, c.DP)() })
                        : _.intl.string(A.default["IO+nlU"]),
                    variant: p ? "expressive" : "primary",
                    onClick: () => {
                        m(u.i.TAKE_ACTION),
                            p
                                ? (0, s.A)({
                                      subscriptionTier: d.pe.TIER_2,
                                      initialPlanId: d.gD.PREMIUM_GROUP_MONTH,
                                      analyticsLocations: E,
                                  })
                                : (0, r.mMO)(async () => {
                                      let { default: e } = await n.e("91976").then(n.bind(n, 526710));
                                      return (t) => (0, i.jsx)(e, { ...t });
                                  });
                    },
                    ...(p ? { icon: r.tvc, iconPosition: "start" } : {}),
                },
            ],
            onRequestClose: () => m(u.i.USER_DISMISS),
        });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: g }), C] });
};
