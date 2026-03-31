n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(934551),
    a = n(397927),
    r = n(793574),
    o = n(688810),
    c = n(792656),
    d = n(422258),
    u = n(93055),
    h = n(788868),
    A = n(665606),
    _ = n(985018),
    m = n(147705),
    g = n(988572);
function p(e) {
    let { theme: t } = e,
        { hasAccess: p } = (0, u.TW)("favorites_empty_state"),
        { analyticsLocations: f } = (0, o.Ay)(r.A.FAVORITES_GUILD_HOME),
        x = l.useCallback(() => {
            (0, a.mMO)(async () => {
                let { default: e } = await n.e("59839").then(n.bind(n, 889186));
                return (t) => (0, i.jsx)(e, { ...t, source: "favorites_empty_state" });
            });
        }, []);
    return (0, i.jsx)(o.f5, {
        value: f,
        children: (0, i.jsx)(a.ppr, {
            theme: t,
            children: (0, i.jsxs)(a.BJc, {
                direction: "vertical",
                align: "center",
                gap: "md",
                children: [
                    (0, i.jsx)(a._V3, { zoomable: !1, src: g.A, width: 197, height: 107 }),
                    (0, i.jsx)(a.SGT, {
                        className: m.Y,
                        noteClassName: m.A,
                        note: _.intl.string(A.default["+SuGKb"]),
                        children: _.intl.string(A.default["wh+Rz1"]),
                    }),
                    p
                        ? (0, i.jsx)(a.Button, {
                              text: _.intl.string(A.default["6kk0gM"]),
                              onClick: x,
                              icon: s.PlusMediumIcon,
                          })
                        : (0, i.jsx)(c.A, {
                              subscriptionTier: h.pe.TIER_2,
                              defaultTextOverride: _.intl.string(A.default.yYVbdv),
                              onSubscribeModalClose: (e) => {
                                  e && (0, d.tV)(!0, "favorites_empty_state");
                              },
                          }),
                ],
            }),
        }),
    });
}
