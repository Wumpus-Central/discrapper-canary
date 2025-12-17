n.d(t, { d: () => b });
var r = n(54381),
    i = n(442837),
    l = n(813820),
    a = n(907862),
    o = n(100527),
    s = n(336197),
    c = n(594174),
    u = n(74538),
    d = n(469165),
    p = n(675957),
    f = n(474936),
    g = n(981631),
    h = n(388032),
    m = n(836236);
let b = (e) => {
    var t;
    let { targetElementRef: n } = e,
        b = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        _ = !1 === u.ZP.isPremiumExactly(b, f.PremiumTypes.TIER_2),
        E =
            (null == b || null == (t = b.premiumState) ? void 0 : t.premiumSource) === l.d3.FRACTIONAL_NITRO &&
            (null == b ? void 0 : b.premiumState.premiumSubscriptionType) !== l.W$.TIER_2,
        O = !0 === (null == b || _ || E) ? h.intl.string(h.t.E1ONHQ) : h.intl.string(h.t.CMKNhr);
    return (0, r.jsx)(a.J2, {
        targetElementRef: n,
        title: h.intl.string(h.t["V8J+16"]),
        body: O,
        graphic: {
            type: "image",
            src: m.Z,
        },
        badge: {
            type: "beta",
            variant: "expressive",
        },
        size: "md",
        alignmentStrategy: "edge",
        align: "top",
        position: "right",
        caretConfig: { align: "start" },
        actions: [
            {
                text: h.intl.string(h.t["CDdYB/"]),
                onClick: () => {
                    (0, s.Z)(g.Z5c.NITRO_HOME),
                        (0, d.wQ)({ analyticsLocations: [o.Z.HOME_PAGE_PREMIUM_TAB] }),
                        (0, p.ow)();
                },
            },
        ],
        onRequestClose: p.ow,
    });
};
