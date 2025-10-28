n.d(t, { d: () => h });
var r = n(951288),
    i = n(442837),
    l = n(907862),
    a = n(100527),
    s = n(594174),
    o = n(74538),
    c = n(469165),
    u = n(675957),
    d = n(474936),
    p = n(388032),
    f = n(295234);
let h = (e) => {
    let { targetElementRef: t } = e,
        n =
            !0 ===
            (0, i.e7)([s.default], () => o.ZP.isPremiumExactly(s.default.getCurrentUser(), d.PremiumTypes.TIER_2))
                ? p.intl.string(p.t.CMKNhr)
                : p.intl.string(p.t.E1ONHQ);
    return (0, r.jsx)(l.J2, {
        targetElementRef: t,
        title: p.intl.string(p.t["V8J+16"]),
        body: n,
        graphic: {
            type: "image",
            src: f.Z,
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
                text: p.intl.string(p.t["CDdYB/"]),
                onClick: () => {
                    (0, c.w)({ analyticsLocations: [a.Z.HOME_PAGE_PREMIUM_TAB] }), (0, u.ow)();
                },
            },
        ],
        onRequestClose: u.ow,
    });
};
