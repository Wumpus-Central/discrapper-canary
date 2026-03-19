"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(934551),
    r = n(397927),
    a = n(793574),
    o = n(688810),
    c = n(792656),
    d = n(422258),
    u = n(93055),
    h = n(788868),
    A = n(665606),
    m = n(985018),
    p = n(210276),
    g = n(988572);
function _(e) {
    let { theme: t } = e,
        { hasAccess: _ } = (0, u.TW)("favorites_empty_state"),
        { analyticsLocations: f } = (0, o.Ay)(a.A.FAVORITES_GUILD_HOME),
        x = s.useCallback(() => {
            (0, r.mMO)(async () => {
                let { default: e } = await n.e("59839").then(n.bind(n, 889186));
                return (t) => (0, i.jsx)(e, { ...t, source: "favorites_empty_state" });
            });
        }, []);
    return (0, i.jsx)(o.f5, {
        value: f,
        children: (0, i.jsx)(r.ppr, {
            theme: t,
            children: (0, i.jsxs)(r.BJc, {
                direction: "vertical",
                align: "center",
                gap: "md",
                children: [
                    (0, i.jsx)(r._V3, { zoomable: !1, src: g.A, width: 197, height: 107 }),
                    (0, i.jsx)(r.SGT, {
                        className: p.Y,
                        noteClassName: p.A,
                        note: m.intl.string(A.default["+SuGKb"]),
                        children: m.intl.string(A.default["wh+Rz1"]),
                    }),
                    _
                        ? (0, i.jsx)(r.Button, {
                              text: m.intl.string(A.default["6kk0gM"]),
                              onClick: x,
                              icon: l.PlusMediumIcon,
                          })
                        : (0, i.jsx)(c.A, {
                              subscriptionTier: h.pe.TIER_2,
                              defaultTextOverride: m.intl.string(A.default.yYVbdv),
                              onSubscribeModalClose: (e) => {
                                  e && (0, d.tV)(!0, "favorites_empty_state");
                              },
                          }),
                ],
            }),
        }),
    });
}
