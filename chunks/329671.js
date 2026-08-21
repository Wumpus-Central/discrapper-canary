i.r(a), i.d(a, { default: () => x });
var e = i(477900),
    n = i(582128),
    r = i(192308),
    l = i(980707),
    c = i(477782),
    d = i(499373),
    o = i(234020),
    s = i(442433),
    u = i(93055),
    f = i(17839),
    h = i(928424),
    p = i(867698),
    b = i(375708);
function x(t) {
    let { navId: a, onClose: x = s.Z_, onSelect: _ } = t,
        { shouldShowUpsell: g, isAtLimit: j, favoriteLimit: k } = (0, u.ft)(),
        v = n.useCallback(() => {
            g && j ? (0, h.A)(k) : (0, f.A)({ source: "favorites_header_add_button_context_menu" });
        }, [g, j, k]),
        y = n.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: t } = await i.e("303956").then(i.bind(i, 703551));
                return (a) => (0, e.jsx)(t, { ...a });
            });
        }, []);
    return (0, e.jsxs)(l.W, {
        variant: "fixed",
        "data-menu-migrated": !0,
        navId: a,
        onClose: x,
        "aria-label": b.intl.string(b.t.liqwPJ),
        onSelect: _,
        children: [
            (0, e.jsx)(c.rX, {
                children: (0, e.jsx)(c.Dr, {
                    id: "add-to-favorites",
                    label: b.intl.string(p.default.G9fGlP),
                    trailingIndicator: { type: "icon", icon: d.T },
                    icon: d.T,
                    action: v,
                }),
            }),
            (0, e.jsx)(c.rX, {
                children: (0, e.jsx)(c.Dr, {
                    id: "create-favorites-category",
                    label: b.intl.string(b.t["ISN+NM"]),
                    trailingIndicator: { type: "icon", icon: o.Y },
                    icon: o.Y,
                    action: y,
                }),
            }),
        ],
    });
}
