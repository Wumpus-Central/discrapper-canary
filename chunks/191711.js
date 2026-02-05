a.d(t, { A: () => m, H: () => h });
var n,
    i = a(627968),
    s = a(64700),
    l = a(503698),
    r = a.n(l),
    o = a(397927),
    c = a(773669),
    d = a(272159);
function u(e) {
    let { items: t, onClose: a, onSelect: n, selected: s, ...l } = e;
    return (0, i.jsx)(o.W1t, {
        "data-menu-migrated-auto": !0,
        className: d.MK,
        navId: "global-discovery-search-filter-options",
        "aria-label": l["aria-label"],
        hideScroller: !0,
        onClose: a,
        onSelect: a,
        children: (0, i.jsx)(
            o.rXV,
            {
                children: t.map((e) => {
                    let { id: t, name: a, count: l } = e;
                    return (0, i.jsx)(
                        o.Drp,
                        {
                            id: t,
                            label: a,
                            subtext: l.toLocaleString(c.default.locale),
                            icon: t === s ? o.yr3 : void 0,
                            leadingAccessory: t === s ? { type: "icon", icon: o.yr3 } : void 0,
                            action: () => n(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
var h = (((n = {}).FILLED = "FILLED"), (n.TRANSPARENT = "TRANSPARENT"), n);
function m(e) {
    let { items: t, title: a, onSelect: n, selected: l, variant: c = "TRANSPARENT", ...h } = e,
        m = s.useRef(null),
        p = s.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case "FILLED":
                            return d.PC;
                        case "TRANSPARENT":
                            return;
                    }
                })(c),
            [c],
        );
    return (0, i.jsx)(o.YNO, {
        targetElementRef: m,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, i.jsx)(u, { selected: l, onClose: a, items: t, onSelect: n, "aria-label": h["aria-label"] });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsxs)("div", {
                ...e,
                ref: m,
                className: r()(d.pb, p),
                children: [
                    (0, i.jsx)(o.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: a }),
                    n
                        ? (0, i.jsx)(o.tN5, { size: "xs", color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT })
                        : (0, i.jsx)(o.abt, { size: "xs", color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
                ],
            });
        },
    });
}
