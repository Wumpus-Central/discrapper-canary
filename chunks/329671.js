a.r(i);
var e = a(477900),
    n = a(582128),
    r = a(192308),
    c = a(165862),
    l = a(477782),
    d = a(499373),
    s = a(234020),
    o = a(442433),
    u = a(93055),
    f = a(17839),
    h = a(928424),
    b = a(708526),
    p = a(792996);
a.d(
    i,
    {},
    {
        default: function (t) {
            let { navId: i, onClose: x = o.Z_, onSelect: _ } = t,
                { shouldShowUpsell: g, isAtLimit: j, favoriteLimit: k } = (0, u.ft)(),
                v = n.useCallback(() => {
                    g && j ? (0, h.A)(k) : (0, f.A)({ source: "favorites_header_add_button_context_menu" });
                }, [g, j, k]),
                C = n.useCallback(() => {
                    (0, r.mM)(async () => {
                        let { default: t } = await a.e(303956).then(a.bind(a, 703551));
                        return (i) => (0, e.jsx)(t, { ...i });
                    });
                }, []);
            return (0, e.jsxs)(c.W, {
                variant: "fixed",
                "data-menu-migrated": !0,
                navId: i,
                onClose: x,
                "aria-label": p.intl.string(p.t.liqwPJ),
                onSelect: _,
                children: [
                    (0, e.jsx)(l.rX, {
                        children: (0, e.jsx)(l.Dr, {
                            id: "add-to-favorites",
                            label: p.intl.string(b.default.G9fGlP),
                            trailingIndicator: { type: "icon", icon: d.T },
                            icon: d.T,
                            action: v,
                        }),
                    }),
                    (0, e.jsx)(l.rX, {
                        children: (0, e.jsx)(l.Dr, {
                            id: "create-favorites-category",
                            label: p.intl.string(p.t["ISN+NM"]),
                            trailingIndicator: { type: "icon", icon: s.Y },
                            icon: s.Y,
                            action: C,
                        }),
                    }),
                ],
            });
        },
    },
);
