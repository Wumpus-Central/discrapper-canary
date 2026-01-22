n.d(t, {
    A: () => m,
});
var r = n(627968),
    i = n(311907),
    l = n(988506),
    a = n(342494),
    s = n(793574),
    o = n(22007),
    c = n(287809),
    u = n(927578),
    d = n(161319),
    p = n(385327),
    f = n(788868),
    h = n(652215),
    A = n(985018),
    g = n(174872);
let m = (e) => {
    var t;
    let { targetElementRef: n } = e,
        m = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        b = !1 === u.Ay.isPremiumExactly(m, f.PremiumTypes.TIER_2),
        _ =
            (null == m || null == (t = m.premiumState) ? void 0 : t.premiumSource) === l.fE.FRACTIONAL_NITRO &&
            (null == m ? void 0 : m.premiumState.premiumSubscriptionType) !== l.jK.TIER_2,
        E = !0 === (null == m || b || _) ? A.intl.string(A.t.E1ONHQ) : A.intl.string(A.t.CMKNhr);
    return (0, r.jsx)(a.AM, {
        targetElementRef: n,
        title: A.intl.string(A.t["V8J+16"]),
        body: E,
        graphic: {
            type: "image",
            src: g.A,
        },
        badge: {
            type: "beta",
            variant: "expressive",
        },
        size: "md",
        alignmentStrategy: "edge",
        align: "top",
        position: "right",
        caretConfig: {
            align: "start",
        },
        actions: [
            {
                text: A.intl.string(A.t["CDdYB/"]),
                onClick: () => {
                    (0, o.A)(h.BVt.NITRO_HOME),
                        (0, d.uE)({
                            analyticsLocations: [s.A.HOME_PAGE_PREMIUM_TAB],
                        }),
                        (0, p.Es)();
                },
            },
        ],
        onRequestClose: p.Es,
    });
};
