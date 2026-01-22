n.d(i, {
    default: () => d,
});
var e = n(627968),
    t = n(64700),
    a = n(397927),
    s = n(442433),
    c = n(50268),
    r = n(985018);

function d(l) {
    let { guild: i, shiftId: n, onSelect: d, closePopout: o, "aria-label": u } = l,
        p = (0, c.A)({
            id: i.id,
            label: r.intl.string(r.t["94lLD7"]),
            shiftId: n,
            onSuccess: o,
        }),
        h = t.useCallback((l) => {
            l.stopPropagation();
        }, []);
    return (0, e.jsx)(a.DUT, {
        onClick: h,
        children: (0, e.jsx)(a.W1t, {
            onSelect: d,
            navId: "guild-discovery-context-menu",
            "aria-label": null != u ? u : r.intl.string(r.t.ogxXGq),
            onClose: s.Z_,
            children: (0, e.jsx)(a.rXV, {
                children: p,
            }),
        }),
    });
}
