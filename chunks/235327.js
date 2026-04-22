i.d(e, { default: () => u });
var t = i(627968),
    n = i(64700),
    l = i(939249),
    s = i(861672),
    r = i(477782),
    c = i(442433),
    d = i(50268),
    o = i(985018);
function u(a) {
    let { guild: e, shiftId: i, onSelect: u, closePopout: p, "aria-label": h } = a,
        b = (0, d.A)({ id: e.id, label: o.intl.string(o.t["94lLD7"]), shiftId: i, onSuccess: p }),
        g = n.useCallback((a) => {
            a.stopPropagation();
        }, []);
    return (0, t.jsx)(l.D, {
        onClick: g,
        children: (0, t.jsx)(s.W, {
            "data-menu-migrated-auto": !0,
            onSelect: u,
            navId: "guild-discovery-context-menu",
            "aria-label": h ?? o.intl.string(o.t.ogxXGq),
            onClose: c.Z_,
            children: (0, t.jsx)(r.rX, { children: b }),
        }),
    });
}
