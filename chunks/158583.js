n.d(t, { T: () => y });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(452027),
    r = n(331322),
    o = n(821609),
    d = n(243721),
    u = n(793574),
    c = n(688810),
    g = n(792656),
    m = n(976860),
    _ = n(779733),
    A = n(287809),
    h = n(975571),
    p = n(474090),
    x = n(181079),
    E = n(422258),
    T = n(668267),
    S = n(93055),
    f = n(652215),
    b = n(788868),
    C = n(335993),
    v = n(985018);
let N = h.A.getArticleURL(f.MVz.FAVORITES_GUILD);
function I() {
    let { analyticsLocations: e } = (0, c.Ay)(u.A.USER_SETTINGS_FAVORITES),
        t = s.useCallback(() => {
            (0, T.mv)("settings_page"), (0, m.uh)(f.YYv), (0, _.default)();
        }, []);
    return (0, i.jsx)(c.f5, {
        value: e,
        children: (0, i.jsx)(a.D, {
            label: v.intl.string(C.default.OT1NK5),
            description: v.intl.format(C.default.GR2KOG, { helpCenterLink: N }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, i.jsxs)(r.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, i.jsx)(o.$, { variant: "secondary", text: v.intl.string(C.default["7WwLnr"]), onClick: t }),
                    (0, i.jsx)(g.A, {
                        subscriptionTier: b.pe.TIER_2,
                        defaultTextOverride: v.intl.string(C.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
function y() {
    let e = (0, l.bG)([x.A], () => x.A.favoriteGuildEnabled),
        t = (0, l.bG)([A.default], () => {
            let e = A.default.getCurrentUser();
            return null != e && p.Ay.isPremiumExactly(e, b.PremiumTypes.TIER_2);
        }),
        n = (0, S.DZ)(),
        a = s.useCallback(
            (e) => {
                (0, E.tV)(e, "settings_page"), !e && n && (0, m.pX)(f.BVt.ME);
            },
            [n],
        );
    return t
        ? (0, i.jsx)(d.d, {
              checked: e,
              description: v.intl.format(C.default.GR2KOG, { helpCenterLink: N }),
              onChange: a,
              label: v.intl.string(C.default.OT1NK5),
              badge: "beta",
          })
        : (0, i.jsx)(I, {});
}
