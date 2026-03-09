n.d(t, { T: () => I });
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
    g = n(975571),
    m = n(474090),
    A = n(181079),
    h = n(422258),
    p = n(957300),
    x = n(652215),
    E = n(788868),
    T = n(525736),
    S = n(985018);
let C = g.A.getArticleURL(x.MVz.FAVORITES_GUILD);
function f() {
    let e = (0, p.E)((e) => e.enterPreview),
        { analyticsLocations: t } = (0, o.Ay)(r.A.USER_SETTINGS_FAVORITES),
        n = s.useCallback(() => {
            e(), (0, c.uh)(x.YYv), (0, u.default)();
        }, [e]);
    return (0, i.jsx)(o.f5, {
        value: t,
        children: (0, i.jsx)(a.D0$, {
            label: S.intl.string(T.default.OT1NK5),
            description: S.intl.format(T.default.GR2KOG, { helpCenterLink: C }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, i.jsxs)(a.BJc, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, i.jsx)(a.Button, {
                        variant: "secondary",
                        text: S.intl.string(T.default["7WwLnr"]),
                        onClick: n,
                    }),
                    (0, i.jsx)(d.A, {
                        subscriptionTier: E.pe.TIER_2,
                        defaultTextOverride: S.intl.string(T.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
function I() {
    let e = (0, l.bG)([A.A], () => A.A.favoriteGuildEnabled);
    return (0, l.bG)([_.default], () => {
        let e = _.default.getCurrentUser();
        return null != e && m.Ay.isPremiumExactly(e, E.PremiumTypes.TIER_2);
    })
        ? (0, i.jsx)(a.dOG, {
              checked: e,
              description: S.intl.format(T.default.GR2KOG, { helpCenterLink: C }),
              onChange: h.tV,
              label: S.intl.string(T.default.OT1NK5),
              badge: "beta",
          })
        : (0, i.jsx)(f, {});
}
