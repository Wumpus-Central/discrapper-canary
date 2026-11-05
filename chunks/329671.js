i.r(e);
var n = i(477900),
    a = i(582128),
    r = i(192308),
    l = i(165862),
    c = i(477782),
    o = i(499373),
    d = i(234020),
    s = i(442433),
    u = i(93055),
    f = i(17839),
    h = i(928424),
    b = i(708526),
    p = i(792996);
i.d(
    e,
    {},
    {
        default: function (t) {
            let { navId: e, onClose: x = s.Z_, onSelect: I } = t,
                { shouldShowUpsell: _, isAtLimit: g, favoriteLimit: j } = (0, u.ft)(),
                k = a.useCallback(() => {
                    _ && g ? (0, h.A)(j) : (0, f.A)({ source: "favorites_header_add_button_context_menu" });
                }, [_, g, j]),
                m = a.useCallback(() => {
                    (0, r.mM)(async () => {
                        let { default: t } = await i.e(303956).then(i.bind(i, 703551));
                        return (e) => (0, n.jsx)(t, { ...e });
                    });
                }, []);
            return (0, n.jsxs)(l.W, {
                variant: "fixed",
                "data-menu-migrated": !0,
                navId: e,
                onClose: x,
                "aria-label": p.intl.string(p.t.liqwPJ),
                onSelect: I,
                children: [
                    (0, n.jsx)(c.rX, {
                        children: (0, n.jsx)(c.Dr, {
                            id: "add-to-favorites",
                            label: p.intl.string(b.default.G9fGlP),
                            trailingIndicator: { type: "icon", icon: o.PlusMediumIcon },
                            icon: o.PlusMediumIcon,
                            action: k,
                        }),
                    }),
                    (0, n.jsx)(c.rX, {
                        children: (0, n.jsx)(c.Dr, {
                            id: "create-favorites-category",
                            label: p.intl.string(p.t["ISN+NM"]),
                            trailingIndicator: { type: "icon", icon: d.FolderPlusIcon },
                            icon: d.FolderPlusIcon,
                            action: m,
                        }),
                    }),
                ],
            });
        },
    },
);
