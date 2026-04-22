i.d(e, { default: () => h });
var s = i(627968),
    r = i(64700),
    n = i(821609),
    l = i(477782),
    a = i(861672),
    d = i(265872),
    o = i(112173),
    c = i(558060),
    C = i(284683),
    u = i(985018);
function x(t) {
    let { closePopout: e, sortOptionContext: i } = t,
        { sortOption: n, setSortOption: d, onReset: o } = i,
        c = r.useMemo(
            () =>
                C.aq.map((t) =>
                    (0, s.jsx)(
                        l.iD,
                        { id: `${t}`, group: "sort-by", label: (0, C.Ac)(t), action: () => d(t), checked: n === t },
                        t,
                    ),
                ),
            [d, n],
        );
    return (0, s.jsx)("div", {
        children: (0, s.jsxs)(a.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": u.intl.string(u.t["4jfWTK"]),
            hideScroller: !0,
            onClose: e,
            onSelect: e,
            children: [
                (0, s.jsx)(l.rX, { label: u.intl.string(u.t.mBvLev), children: c }),
                (0, s.jsx)(l.rX, {
                    children: (0, s.jsx)(l.Dr, { id: "reset-all", label: u.intl.string(u.t["3b//lO"]), action: o }),
                }),
            ],
        }),
    });
}
function h() {
    let t = (0, c.R)(),
        e = (0, C.Ac)(t.sortOption),
        i = r.useRef(null);
    return (0, s.jsx)(d.Y, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, s.jsx)(x, { closePopout: i, sortOptionContext: t });
        },
        position: "bottom",
        align: "left",
        children: (t) => (0, s.jsx)(n.$, { ...t, text: e, icon: o.J, variant: "secondary", buttonRef: i }),
    });
}
