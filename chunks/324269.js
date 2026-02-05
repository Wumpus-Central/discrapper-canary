i.d(t, { default: () => C });
var s = i(627968),
    r = i(64700),
    n = i(732955),
    l = i(397927),
    d = i(558060),
    a = i(284683),
    o = i(985018);
function c(e) {
    let { closePopout: t, sortOptionContext: i } = e,
        { sortOption: n, setSortOption: d, onReset: c } = i,
        C = r.useMemo(
            () =>
                a.aq.map((e) =>
                    (0, s.jsx)(
                        l.iDA,
                        { id: `${e}`, group: "sort-by", label: (0, a.Ac)(e), action: () => d(e), checked: n === e },
                        e,
                    ),
                ),
            [d, n],
        );
    return (0, s.jsx)("div", {
        children: (0, s.jsxs)(l.W1t, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": o.intl.string(o.t["4jfWTK"]),
            hideScroller: !0,
            onClose: t,
            onSelect: t,
            children: [
                (0, s.jsx)(l.rXV, { label: o.intl.string(o.t.mBvLev), children: C }),
                (0, s.jsx)(l.rXV, {
                    children: (0, s.jsx)(l.Drp, { id: "reset-all", label: o.intl.string(o.t["3b//lO"]), action: c }),
                }),
            ],
        }),
    });
}
function C() {
    let e = (0, d.R)(),
        t = (0, a.Ac)(e.sortOption),
        i = r.useRef(null);
    return (0, s.jsx)(l.YNO, {
        targetElementRef: i,
        renderPopout: (t) => {
            let { closePopout: i } = t;
            return (0, s.jsx)(c, { closePopout: i, sortOptionContext: e });
        },
        position: "bottom",
        align: "left",
        children: (e) => (0, s.jsx)(n.$nd, { ...e, text: t, icon: l.JNJ, variant: "secondary", buttonRef: i }),
    });
}
