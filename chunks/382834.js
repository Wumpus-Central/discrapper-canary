n.d(t, { d: () => g });
var r = n(951288),
    i = n(442837),
    l = n(907862),
    a = n(100527),
    s = n(336197),
    o = n(594174),
    c = n(74538),
    u = n(469165),
    d = n(675957),
    p = n(474936),
    f = n(981631),
    m = n(388032),
    h = n(398300);
let g = (e) => {
    let { targetElementRef: t } = e,
        n =
            !0 ===
            (0, i.e7)([o.default], () => c.ZP.isPremiumExactly(o.default.getCurrentUser(), p.PremiumTypes.TIER_2))
                ? m.intl.string(m.t.CMKNhr)
                : m.intl.string(m.t.E1ONHQ);
    return (0, r.jsx)(l.J2, {
        targetElementRef: t,
        title: m.intl.string(m.t["V8J+16"]),
        body: n,
        graphic: {
            type: "image",
            src: h.Z,
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
                text: m.intl.string(m.t["CDdYB/"]),
                onClick: () => {
                    (0, s.Z)(f.Z5c.NITRO_HOME),
                        (0, u.wQ)({ analyticsLocations: [a.Z.HOME_PAGE_PREMIUM_TAB] }),
                        (0, d.ow)();
                },
            },
        ],
        onRequestClose: d.ow,
    });
};
