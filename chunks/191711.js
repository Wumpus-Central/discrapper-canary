l.d(t, { A: () => C, H: () => A });
var i,
    s = l(477900),
    n = l(582128),
    a = l(503698),
    r = l.n(a),
    o = l(980707),
    c = l(477782),
    d = l(628284),
    u = l(265872),
    h = l(834730),
    m = l(900797),
    p = l(661531),
    g = l(847374),
    x = l(773669),
    v = l(619189);
function j(e) {
    let { items: t, onClose: l, onSelect: i, selected: n, ...a } = e;
    return (0, s.jsx)(o.W, {
        "data-menu-migrated-auto": !0,
        className: v.MK,
        navId: "global-discovery-search-filter-options",
        "aria-label": a["aria-label"],
        hideScroller: !0,
        onClose: l,
        onSelect: l,
        children: (0, s.jsx)(
            c.rX,
            {
                children: t.map((e) => {
                    let { id: t, name: l, count: a } = e;
                    return (0, s.jsx)(
                        c.Dr,
                        {
                            id: t,
                            label: l,
                            subtext: a.toLocaleString(x.default.locale),
                            icon: t === n ? d.y : void 0,
                            leadingAccessory: t === n ? { type: "icon", icon: d.y } : void 0,
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
    let { items: t, title: l, onSelect: i, selected: a, variant: o = "TRANSPARENT", ...c } = e,
        d = n.useRef(null),
        x = n.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case "FILLED":
                            return v.PC;
                        case "TRANSPARENT":
                            return;
                    }
                })(o),
            [o],
        );
    return (0, s.jsx)(u.Y, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, s.jsx)(j, { selected: a, onClose: l, items: t, onSelect: i, "aria-label": c["aria-label"] });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, s.jsxs)("div", {
                ...e,
                ref: d,
                className: r()(v.pb, x),
                children: [
                    (0, s.jsx)(h.E, { variant: "text-sm/medium", color: "interactive-text-default", children: l }),
                    i
                        ? (0, s.jsx)(m.t, { size: "xs", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT })
                        : (0, s.jsx)(g.a, { size: "xs", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                ],
            });
        },
    });
}
