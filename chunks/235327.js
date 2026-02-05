e.d(a, { default: () => d });
var i = e(627968),
    n = e(64700),
    l = e(397927),
    s = e(442433),
    r = e(50268),
    c = e(985018);
function d(t) {
    let { guild: a, shiftId: e, onSelect: d, closePopout: o, "aria-label": u } = t,
        p = (0, r.A)({ id: a.id, label: c.intl.string(c.t["94lLD7"]), shiftId: e, onSuccess: o }),
        h = n.useCallback((t) => {
            t.stopPropagation();
        }, []);
    return (0, i.jsx)(l.DUT, {
        onClick: h,
        children: (0, i.jsx)(l.W1t, {
            "data-menu-migrated-auto": !0,
            onSelect: d,
            navId: "guild-discovery-context-menu",
            "aria-label": u ?? c.intl.string(c.t.ogxXGq),
            onClose: s.Z_,
            children: (0, i.jsx)(l.rXV, { children: p }),
        }),
    });
}
