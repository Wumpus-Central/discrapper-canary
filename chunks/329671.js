a.r(t), a.d(t, { default: () => b });
var i = a(477900),
    n = a(582128),
    r = a(192308),
    l = a(980707),
    d = a(477782),
    o = a(499373),
    c = a(234020),
    s = a(442433),
    u = a(313281),
    f = a(928424),
    h = a(449817),
    p = a(375708);
function b(e) {
    let { navId: t, onClose: b = s.Z_, onSelect: x } = e,
        { shouldShowUpsell: _, isAtLimit: g, favoriteLimit: j } = (0, u.ft)(),
        y = n.useCallback(() => {
            _ && g
                ? (0, f.A)(j)
                : (0, r.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          a.e("73883"),
                          a.e("73216"),
                          a.e("69977"),
                          a.e("74390"),
                          a.e("36946"),
                          a.e("92639"),
                          a.e("90480"),
                          a.e("40963"),
                          a.e("66031"),
                          a.e("94317"),
                          a.e("64307"),
                      ]).then(a.bind(a, 420222));
                      return (t) => (0, i.jsx)(e, { ...t, source: "favorites_header_add_button_context_menu" });
                  });
        }, [_, g, j]),
        k = n.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await a.e("28020").then(a.bind(a, 395199));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []);
    return (0, i.jsxs)(l.W, {
        variant: "fixed",
        "data-menu-migrated": !0,
        navId: t,
        onClose: b,
        "aria-label": p.intl.string(p.t.liqwPJ),
        onSelect: x,
        children: [
            (0, i.jsx)(d.rX, {
                children: (0, i.jsx)(d.Dr, {
                    id: "add-to-favorites",
                    label: p.intl.string(h.default.G9fGlP),
                    trailingIndicator: { type: "icon", icon: o.T },
                    icon: o.T,
                    action: y,
                }),
            }),
            (0, i.jsx)(d.rX, {
                children: (0, i.jsx)(d.Dr, {
                    id: "create-favorites-category",
                    label: p.intl.string(p.t["ISN+NM"]),
                    trailingIndicator: { type: "icon", icon: c.Y },
                    icon: c.Y,
                    action: k,
                }),
            }),
        ],
    });
}
