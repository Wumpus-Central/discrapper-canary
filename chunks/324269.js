"use strict";
i.d(t, { default: () => f });
var r = i(627968),
    s = i(64700),
    n = i(821609),
    l = i(477782),
    a = i(550079),
    o = i(922016),
    c = i(112173),
    d = i(558060),
    _ = i(284683),
    u = i(985018);
function C(e) {
    let { closePopout: t, sortOptionContext: i } = e,
        { sortOption: n, setSortOption: o, onReset: c } = i,
        d = s.useMemo(
            () =>
                _.aq.map((e) =>
                    (0, r.jsx)(
                        l.iD,
                        { id: `${e}`, group: "sort-by", label: (0, _.Ac)(e), action: () => o(e), checked: n === e },
                        e,
                    ),
                ),
            [o, n],
        );
    return (0, r.jsx)("div", {
        children: (0, r.jsxs)(a.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": u.intl.string(u.t["4jfWTK"]),
            hideScroller: !0,
            onClose: t,
            onSelect: t,
            children: [
                (0, r.jsx)(l.rX, { label: u.intl.string(u.t.mBvLev), children: d }),
                (0, r.jsx)(l.rX, {
                    children: (0, r.jsx)(l.Dr, { id: "reset-all", label: u.intl.string(u.t["3b//lO"]), action: c }),
                }),
            ],
        }),
    });
}
function f() {
    let e = (0, d.R)(),
        t = (0, _.Ac)(e.sortOption),
        i = s.useRef(null);
    return (0, r.jsx)(o.Y, {
        targetElementRef: i,
        renderPopout: (t) => {
            let { closePopout: i } = t;
            return (0, r.jsx)(C, { closePopout: i, sortOptionContext: e });
        },
        position: "bottom",
        align: "left",
        children: (e) => (0, r.jsx)(n.$, { ...e, text: t, icon: c.J, variant: "secondary", buttonRef: i }),
    });
}
