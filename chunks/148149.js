i.d(e, { t: () => m });
var n = i(477900),
    l = i(582128),
    s = i(501907),
    t = i(315648),
    d = i(353509),
    c = i(834730),
    r = i(657718),
    o = i(219052);
function m(a) {
    let {
            items: e,
            selectedId: i,
            defaultSelectedId: l,
            onChange: d,
            variant: c = "default",
            disabled: r = !1,
            keyboardActivation: m = "manual",
            panelAnimation: h = "none",
            "aria-label": x,
            "aria-labelledby": p,
        } = a,
        j = (0, s.J)();
    return (0, n.jsxs)(t.tU, {
        className: o.vR,
        selectedKey: i,
        defaultSelectedKey: l,
        onSelectionChange: function (a) {
            let i = e.find((e) => e.id === a);
            null != i && d?.(i.id);
        },
        keyboardActivation: m,
        isDisabled: r,
        "data-mana-component": "tabs",
        "data-variant": c,
        children: [
            (0, n.jsxs)("div", {
                className: o.bB,
                children: [
                    (0, n.jsx)("div", { className: o.H$ }),
                    (0, n.jsx)(t.wb, {
                        className: o.ld,
                        "aria-label": x,
                        "aria-labelledby": p,
                        children: e.map((a) =>
                            (0, n.jsx)(
                                u,
                                { item: a, formattedCount: null != a.count ? j.format(a.count) : void 0 },
                                a.id,
                            ),
                        ),
                    }),
                ],
            }),
            (0, n.jsx)(t.T2, {
                className: o.C3,
                "data-animation": h,
                children: e.map((a) => (0, n.jsx)(b, { item: a, animation: h }, a.id)),
            }),
        ],
    });
}
function u(a) {
    let { item: e, formattedCount: i } = a,
        s = l.useRef(null);
    return (0, n.jsx)(t.oz, {
        id: e.id,
        ref: s,
        className: o.AS,
        isDisabled: e.disabled,
        "aria-label": e["aria-label"],
        children: (a) => {
            let { isDisabled: l } = a;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)("span", {
                        className: o.PG,
                        children: [
                            null != e.icon &&
                                (0, n.jsx)(r.a, {
                                    icon: e.icon,
                                    iconOpticalOffsetMargin: 0,
                                    iconPosition: "start",
                                    size: "md",
                                    ref: s,
                                    disabled: l,
                                }),
                            (0, n.jsx)(c.E, {
                                tag: "span",
                                variant: "text-md/medium",
                                color: "none",
                                children: e.label,
                            }),
                            null != i &&
                                (0, n.jsxs)(c.E, {
                                    tag: "span",
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children: ["(", i, ")"],
                                }),
                        ],
                    }),
                    (0, n.jsx)(d.i, { className: o.q3, "aria-hidden": "true" }),
                ],
            });
        },
    });
}
function b(a) {
    let { item: e, animation: i } = a;
    return (0, n.jsx)(t.Kp, { id: e.id, className: o.nd, "data-animation": i, children: e.panel() });
}
