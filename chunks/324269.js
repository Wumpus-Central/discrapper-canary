n.d(e, { default: () => x });
var r = n(627968),
    i = n(64700),
    l = n(821609),
    o = n(477782),
    s = n(550079),
    a = n(922016),
    c = n(112173),
    d = n(558060),
    u = n(284683),
    p = n(985018);
function h(t) {
    let { closePopout: e, sortOptionContext: n } = t,
        { sortOption: l, setSortOption: a, onReset: c } = n,
        d = i.useMemo(
            () =>
                u.aq.map((t) =>
                    (0, r.jsx)(
                        o.iD,
                        { id: `${t}`, group: "sort-by", label: (0, u.Ac)(t), action: () => a(t), checked: l === t },
                        t,
                    ),
                ),
            [a, l],
        );
    return (0, r.jsx)("div", {
        children: (0, r.jsxs)(s.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": p.intl.string(p.t["4jfWTK"]),
            hideScroller: !0,
            onClose: e,
            onSelect: e,
            children: [
                (0, r.jsx)(o.rX, { label: p.intl.string(p.t.mBvLev), children: d }),
                (0, r.jsx)(o.rX, {
                    children: (0, r.jsx)(o.Dr, { id: "reset-all", label: p.intl.string(p.t["3b//lO"]), action: c }),
                }),
            ],
        }),
    });
}
function x() {
    let t = (0, d.R)(),
        e = (0, u.Ac)(t.sortOption),
        n = i.useRef(null);
    return (0, r.jsx)(a.Y, {
        targetElementRef: n,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(h, { closePopout: n, sortOptionContext: t });
        },
        position: "bottom",
        align: "left",
        children: (t) => (0, r.jsx)(l.$, { ...t, text: e, icon: c.J, variant: "secondary", buttonRef: n }),
    });
}
