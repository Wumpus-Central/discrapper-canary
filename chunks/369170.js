"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(934551),
    a = n(397927),
    r = n(793574),
    o = n(688810),
    c = n(792656),
    d = n(93055),
    u = n(788868),
    h = n(665606),
    A = n(985018),
    m = n(210276),
    p = n(988572);
function g(e) {
    let { theme: t } = e,
        { hasAccess: g } = (0, d.TW)("favorites_empty_state"),
        { analyticsLocations: _ } = (0, o.Ay)(r.A.FAVORITES_GUILD_HOME),
        f = s.useCallback(() => {
            (0, a.mMO)(async () => {
                let { default: e } = await n.e("15077").then(n.bind(n, 889186));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []);
    return (0, i.jsx)(o.f5, {
        value: _,
        children: (0, i.jsx)(a.ppr, {
            theme: t,
            children: (0, i.jsxs)(a.BJc, {
                direction: "vertical",
                align: "center",
                gap: "md",
                children: [
                    (0, i.jsx)(a._V3, { zoomable: !1, src: p.A, width: 197, height: 107 }),
                    (0, i.jsx)(a.SGT, {
                        className: m.Y,
                        noteClassName: m.A,
                        note: A.intl.string(h.default["+SuGKb"]),
                        children: A.intl.string(h.default["wh+Rz1"]),
                    }),
                    g
                        ? (0, i.jsx)(a.Button, {
                              text: A.intl.string(h.default["6kk0gM"]),
                              onClick: f,
                              icon: l.PlusMediumIcon,
                          })
                        : (0, i.jsx)(c.A, {
                              subscriptionTier: u.pe.TIER_2,
                              defaultTextOverride: A.intl.string(h.default.yYVbdv),
                          }),
                ],
            }),
        }),
    });
}
