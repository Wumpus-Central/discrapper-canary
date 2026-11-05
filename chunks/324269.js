var r = n(477900),
    i = n(582128),
    o = n(821609),
    l = n(477782),
    s = n(165862),
    a = n(265872),
    c = n(112173),
    d = n(558060),
    u = n(284683),
    p = n(792996);
function h(t) {
    let { closePopout: e, sortOptionContext: n } = t,
        { sortOption: o, setSortOption: a, onReset: c } = n,
        d = i.useMemo(
            () =>
                u.aq.map((t) =>
                    (0, r.jsx)(
                        l.iD,
                        { id: `${t}`, group: "sort-by", label: (0, u.Ac)(t), action: () => a(t), checked: o === t },
                        t,
                    ),
                ),
            [a, o],
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
                (0, r.jsx)(l.rX, { label: p.intl.string(p.t.mBvLev), children: d }),
                (0, r.jsx)(l.rX, {
                    children: (0, r.jsx)(l.Dr, { id: "reset-all", label: p.intl.string(p.t["3b//lO"]), action: c }),
                }),
            ],
        }),
    });
}
n.d(
    e,
    {},
    {
        default: function () {
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
                children: (t) =>
                    (0, r.jsx)(o.$, { ...t, text: e, icon: c.ArrowsUpDownIcon, variant: "secondary", buttonRef: n }),
            });
        },
    },
);
