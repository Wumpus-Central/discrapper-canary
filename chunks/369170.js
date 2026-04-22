n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(499373),
    a = n(192308),
    r = n(396478),
    o = n(331322),
    d = n(673698),
    c = n(821609),
    u = n(793574),
    h = n(688810),
    A = n(792656),
    _ = n(422258),
    m = n(93055),
    g = n(788868),
    p = n(335993),
    f = n(985018),
    E = n(14505),
    x = n(988572);
function I(e) {
    let { theme: t } = e,
        { hasAccess: I } = (0, m.TW)("favorites_empty_state"),
        { analyticsLocations: C } = (0, h.Ay)(u.A.FAVORITES_GUILD_HOME),
        b = l.useCallback(() => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e("59839").then(n.bind(n, 889186));
                return (t) => (0, i.jsx)(e, { ...t, source: "favorites_empty_state" });
            });
        }, []);
    return (0, i.jsx)(h.f5, {
        value: C,
        children: (0, i.jsx)(r.pp, {
            theme: t,
            children: (0, i.jsxs)(o.B, {
                direction: "vertical",
                align: "center",
                gap: "md",
                children: [
                    (0, i.jsx)(d._, { zoomable: !1, src: x.A, width: 197, height: 107 }),
                    (0, i.jsx)(r.SG, {
                        className: E.Y,
                        noteClassName: E.A,
                        note: f.intl.string(p.default["+SuGKb"]),
                        children: f.intl.string(p.default["wh+Rz1"]),
                    }),
                    I
                        ? (0, i.jsx)(c.$, { text: f.intl.string(p.default["6kk0gM"]), onClick: b, icon: s.T })
                        : (0, i.jsx)(A.A, {
                              subscriptionTier: g.pe.TIER_2,
                              defaultTextOverride: f.intl.string(p.default.yYVbdv),
                              onSubscribeModalClose: (e) => {
                                  e && (0, _.tV)(!0, "favorites_empty_state");
                              },
                          }),
                ],
            }),
        }),
    });
}
