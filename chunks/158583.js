n.d(t, { T: () => N });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(793574),
    o = n(688810),
    d = n(792656),
    c = n(976860),
    u = n(12901),
    _ = n(287809),
    m = n(975571),
    g = n(474090),
    A = n(181079),
    h = n(422258),
    x = n(668267),
    p = n(93055),
    T = n(652215),
    E = n(788868),
    S = n(665606),
    C = n(985018);
let f = m.A.getArticleURL(T.MVz.FAVORITES_GUILD);
function b() {
    let { analyticsLocations: e } = (0, o.Ay)(r.A.USER_SETTINGS_FAVORITES),
        t = s.useCallback(() => {
            (0, x.mv)("settings_page"), (0, c.uh)(T.YYv), (0, u.default)();
        }, []);
    return (0, i.jsx)(o.f5, {
        value: e,
        children: (0, i.jsx)(a.D0$, {
            label: C.intl.string(S.default.OT1NK5),
            description: C.intl.format(S.default.GR2KOG, { helpCenterLink: f }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, i.jsxs)(a.BJc, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, i.jsx)(a.Button, {
                        variant: "secondary",
                        text: C.intl.string(S.default["7WwLnr"]),
                        onClick: t,
                    }),
                    (0, i.jsx)(d.A, {
                        subscriptionTier: E.pe.TIER_2,
                        defaultTextOverride: C.intl.string(S.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
function N() {
    let e = (0, l.bG)([A.A], () => A.A.favoriteGuildEnabled),
        t = (0, l.bG)([_.default], () => {
            let e = _.default.getCurrentUser();
            return null != e && g.Ay.isPremiumExactly(e, E.PremiumTypes.TIER_2);
        }),
        n = (0, p.DZ)(),
        r = s.useCallback(
            (e) => {
                (0, h.tV)(e, "settings_page"), !e && n && (0, c.pX)(T.BVt.ME);
            },
            [n],
        );
    return t
        ? (0, i.jsx)(a.dOG, {
              checked: e,
              description: C.intl.format(S.default.GR2KOG, { helpCenterLink: f }),
              onChange: r,
              label: C.intl.string(S.default.OT1NK5),
              badge: "beta",
          })
        : (0, i.jsx)(b, {});
}
