a.d(l, { A: () => w });
var t = a(627968),
    s = a(311907),
    i = a(988506),
    n = a(265486),
    c = a(793574),
    h = a(22007),
    r = a(287809),
    o = a(927578),
    d = a(161319),
    v = a(385327),
    g = a(788868),
    p = a(652215),
    m = a(985018),
    f = a(174872);
let w = (e) => {
    let { targetElementRef: l } = e,
        a = (0, s.bG)([r.default], () => r.default.getCurrentUser()),
        w = !1 === o.Ay.isPremiumExactly(a, g.PremiumTypes.TIER_2),
        x =
            a?.premiumState?.premiumSource === i.fE.FRACTIONAL_NITRO &&
            a?.premiumState.premiumSubscriptionType !== i.jK.TIER_2,
        u = !0 === (null == a || w || x) ? m.intl.string(m.t.E1ONHQ) : m.intl.string(m.t.CMKNhr);
    return (0, t.jsx)(n.A, {
        targetElementRef: l,
        title: m.intl.string(m.t["V8J+16"]),
        body: u,
        graphic: { type: "image", src: f.A },
        badge: { type: "beta", variant: "expressive" },
        size: "md",
        alignmentStrategy: "edge",
        align: "top",
        position: "right",
        caretConfig: { align: "start" },
        actions: [
            {
                text: m.intl.string(m.t["CDdYB/"]),
                onClick: () => {
                    (0, h.A)(p.BVt.NITRO_HOME),
                        (0, d.u)({ analyticsLocations: [c.A.HOME_PAGE_PREMIUM_TAB] }),
                        (0, v.Es)();
                },
            },
        ],
        onRequestClose: v.Es,
    });
};
