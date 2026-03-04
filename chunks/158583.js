i.d(e, { T: () => b });
var n = i(627968),
    l = i(64700),
    s = i(311907),
    a = i(397927),
    r = i(793574),
    u = i(688810),
    o = i(792656),
    d = i(976860),
    A = i(12901),
    T = i(287809),
    S = i(474090),
    E = i(181079),
    g = i(422258),
    c = i(957300),
    _ = i(652215),
    I = i(788868),
    C = i(665606),
    N = i(985018);
function O() {
    let t = (0, c.E)((t) => t.enterPreview),
        { analyticsLocations: e } = (0, u.Ay)(r.A.USER_SETTINGS_FAVORITES),
        i = l.useCallback(() => {
            t(), (0, d.uh)(_.YYv), (0, A.default)();
        }, [t]);
    return (0, n.jsx)(u.f5, {
        value: e,
        children: (0, n.jsx)(a.D0$, {
            label: N.intl.string(C.default["0h2CcM"]),
            description: N.intl.string(C.default.IF7iE0),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, n.jsxs)(a.BJc, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, n.jsx)(a.Button, { variant: "secondary", text: N.intl.string(C.default.v7GajN), onClick: i }),
                    (0, n.jsx)(o.A, { subscriptionTier: I.pe.TIER_2, defaultTextOverride: N.intl.string(N.t.mr4K7D) }),
                ],
            }),
        }),
    });
}
function b() {
    let t = (0, s.bG)([E.A], () => E.A.favoriteGuildEnabled);
    return (0, s.bG)([T.default], () => {
        let t = T.default.getCurrentUser();
        return null != t && S.Ay.isPremiumExactly(t, I.PremiumTypes.TIER_2);
    })
        ? (0, n.jsx)(a.dOG, {
              checked: t,
              description: N.intl.string(C.default.IF7iE0),
              onChange: g.tV,
              label: N.intl.string(C.default["0h2CcM"]),
              badge: "beta",
          })
        : (0, n.jsx)(O, {});
}
