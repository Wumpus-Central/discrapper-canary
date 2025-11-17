n.d(t, { d: () => _ });
var r = n(54381),
    i = n(442837),
    l = n(813820),
    a = n(907862),
    s = n(100527),
    o = n(336197),
    c = n(594174),
    u = n(74538),
    d = n(469165),
    p = n(675957),
    f = n(474936),
    h = n(981631),
    g = n(388032),
    m = n(398300);
let _ = (e) => {
    var t;
    let { targetElementRef: n } = e,
        _ = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        b = !1 === u.ZP.isPremiumExactly(_, f.PremiumTypes.TIER_2),
        E =
            (null == _ || null == (t = _.premiumState) ? void 0 : t.premiumSource) === l.d3.FRACTIONAL_NITRO &&
            (null == _ ? void 0 : _.premiumState.premiumSubscriptionType) !== l.W$.TIER_2,
        O = !0 === (null == _ || b || E) ? g.intl.string(g.t.E1ONHQ) : g.intl.string(g.t.CMKNhr);
    return (0, r.jsx)(a.J2, {
        targetElementRef: n,
        title: g.intl.string(g.t["V8J+16"]),
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
        align: "top",
        position: "right",
        caretConfig: { align: "start" },
        actions: [
            {
                text: g.intl.string(g.t["CDdYB/"]),
                onClick: () => {
                    (0, o.Z)(h.Z5c.NITRO_HOME),
                        (0, d.wQ)({ analyticsLocations: [s.Z.HOME_PAGE_PREMIUM_TAB] }),
                        (0, p.ow)();
                },
            },
        ],
        onRequestClose: p.ow,
    });
};
