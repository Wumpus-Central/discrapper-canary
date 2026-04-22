a.d(t, { A: () => C, H: () => f });
var n,
    l = a(627968),
    i = a(64700),
    s = a(503698),
    r = a.n(s),
    o = a(861672),
    c = a(477782),
    d = a(628284),
    u = a(265872),
    h = a(834730),
    m = a(900797),
    p = a(827734),
    _ = a(847374),
    g = a(773669),
    x = a(493628);
function A(e) {
    let { items: t, onClose: a, onSelect: n, selected: i, ...s } = e;
    return (0, l.jsx)(o.W, {
        "data-menu-migrated-auto": !0,
        className: x.MK,
        navId: "global-discovery-search-filter-options",
        "aria-label": s["aria-label"],
        hideScroller: !0,
        onClose: a,
        onSelect: a,
        children: (0, l.jsx)(
            c.rX,
            {
                children: t.map((e) => {
                    let { id: t, name: a, count: s } = e;
                    return (0, l.jsx)(
                        c.Dr,
                        {
                            id: t,
                            label: a,
                            subtext: s.toLocaleString(g.default.locale),
                            icon: t === i ? d.y : void 0,
                            leadingAccessory: t === i ? { type: "icon", icon: d.y } : void 0,
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
var f = (((n = {}).FILLED = "FILLED"), (n.TRANSPARENT = "TRANSPARENT"), n);
function C(e) {
    let { items: t, title: a, onSelect: n, selected: s, variant: o = "TRANSPARENT", ...c } = e,
        d = i.useRef(null),
        g = i.useMemo(
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
    return (0, l.jsx)(u.Y, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, l.jsx)(A, { selected: s, onClose: a, items: t, onSelect: n, "aria-label": c["aria-label"] });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsxs)("div", {
                ...e,
                ref: d,
                className: r()(x.pb, g),
                children: [
                    (0, l.jsx)(h.E, { variant: "text-sm/medium", color: "interactive-text-default", children: a }),
                    n
                        ? (0, l.jsx)(m.t, { size: "xs", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT })
                        : (0, l.jsx)(_.a, { size: "xs", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                ],
            });
        },
    });
}
