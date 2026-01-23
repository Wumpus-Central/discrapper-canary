l.d(i, {
    default: () => r,
});
var n = l(627968),
    t = l(64700),
    a = l(397927),
    s = l(442433),
    c = l(50268),
    d = l(985018);

function r(e) {
    let { guild: i, shiftId: l, onSelect: r, closePopout: o, "aria-label": u } = e,
        p = (0, c.A)({
            id: i.id,
            label: d.intl.string(d.t["94lLD7"]),
            shiftId: l,
            onSuccess: o,
        }),
        h = t.useCallback((e) => {
            e.stopPropagation();
        }, []);
    return (0, n.jsx)(a.DUT, {
        onClick: h,
        children: (0, n.jsx)(a.W1t, {
            "data-menu-mixed": !0,
            onSelect: r,
            navId: "guild-discovery-context-menu",
            "aria-label": null != u ? u : d.intl.string(d.t.ogxXGq),
            onClose: s.Z_,
            children: (0, n.jsx)(a.rXV, {
                children: p,
            }),
        }),
    });
}
