l.d(t, { A: () => C, H: () => v });
var s,
    i = l(627968),
    a = l(64700),
    n = l(503698),
    r = l.n(n),
    o = l(550079),
    c = l(477782),
    d = l(628284),
    u = l(922016),
    h = l(834730),
    m = l(900797),
    p = l(661531),
    g = l(847374),
    x = l(773669),
    A = l(493628);
function j(e) {
    let { items: t, onClose: l, onSelect: s, selected: a, ...n } = e;
    return (0, i.jsx)(o.W, {
        "data-menu-migrated-auto": !0,
        className: A.MK,
        navId: "global-discovery-search-filter-options",
        "aria-label": n["aria-label"],
        hideScroller: !0,
        onClose: l,
        onSelect: l,
        children: (0, i.jsx)(
            c.rX,
            {
                children: t.map((e) => {
                    let { id: t, name: l, count: n } = e;
                    return (0, i.jsx)(
                        c.Dr,
                        {
                            id: t,
                            label: l,
                            subtext: n.toLocaleString(x.default.locale),
                            icon: t === a ? d.y : void 0,
                            leadingAccessory: t === a ? { type: "icon", icon: d.y } : void 0,
                            action: () => s(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
var v = (((s = {}).FILLED = "FILLED"), (s.TRANSPARENT = "TRANSPARENT"), s);
function C(e) {
    let { items: t, title: l, onSelect: s, selected: n, variant: o = "TRANSPARENT", ...c } = e,
        d = a.useRef(null),
        x = a.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case "FILLED":
                            return A.PC;
                        case "TRANSPARENT":
                            return;
                    }
                })(o),
            [o],
        );
    return (0, i.jsx)(u.Y, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(j, { selected: n, onClose: l, items: t, onSelect: s, "aria-label": c["aria-label"] });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: s } = t;
            return (0, i.jsxs)("div", {
                ...e,
                ref: d,
                className: r()(A.pb, x),
                children: [
                    (0, i.jsx)(h.E, { variant: "text-sm/medium", color: "interactive-text-default", children: l }),
                    s
                        ? (0, i.jsx)(m.t, { size: "xs", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT })
                        : (0, i.jsx)(g.a, { size: "xs", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                ],
            });
        },
    });
}
