"use strict";
n.d(t, { A: () => C, H: () => A });
var i,
    a = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(550079),
    c = n(477782),
    d = n(628284),
    u = n(922016),
    h = n(834730),
    p = n(900797),
    m = n(661531),
    _ = n(847374),
    g = n(773669),
    x = n(493628);
function f(e) {
    let { items: t, onClose: n, onSelect: i, selected: s, ...l } = e;
    return (0, a.jsx)(o.W, {
        "data-menu-migrated-auto": !0,
        className: x.MK,
        navId: "global-discovery-search-filter-options",
        "aria-label": l["aria-label"],
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, a.jsx)(
            c.rX,
            {
                children: t.map((e) => {
                    let { id: t, name: n, count: l } = e;
                    return (0, a.jsx)(
                        c.Dr,
                        {
                            id: t,
                            label: n,
                            subtext: l.toLocaleString(g.default.locale),
                            icon: t === s ? d.y : void 0,
                            leadingAccessory: t === s ? { type: "icon", icon: d.y } : void 0,
                            action: () => i(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
var A = (((i = {}).FILLED = "FILLED"), (i.TRANSPARENT = "TRANSPARENT"), i);
function C(e) {
    let { items: t, title: n, onSelect: i, selected: l, variant: o = "TRANSPARENT", ...c } = e,
        d = s.useRef(null),
        g = s.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case "FILLED":
                            return x.PC;
                        case "TRANSPARENT":
                            return;
                    }
                })(o),
            [o],
        );
    return (0, a.jsx)(u.Y, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(f, { selected: l, onClose: n, items: t, onSelect: i, "aria-label": c["aria-label"] });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, a.jsxs)("div", {
                ...e,
                ref: d,
                className: r()(x.pb, g),
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "interactive-text-default", children: n }),
                    i
                        ? (0, a.jsx)(p.t, { size: "xs", color: m.A.colors.INTERACTIVE_TEXT_DEFAULT })
                        : (0, a.jsx)(_.a, { size: "xs", color: m.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                ],
            });
        },
    });
}
