i.d(e, { t: () => m });
var n = i(477900),
    l = i(582128),
    s = i(703443),
    d = i(651392),
    t = i(527717),
    c = i(834730),
    r = i(657718),
    o = i(219052);
function m(a) {
    let {
            items: e,
            selectedId: i,
            defaultSelectedId: l,
            onChange: t,
            variant: c = "default",
            disabled: r = !1,
            keyboardActivation: m = "manual",
            panelAnimation: h = "none",
            "aria-label": p,
            "aria-labelledby": j,
        } = a,
        x = (0, s.J)();
    return (0, n.jsxs)(d.tU, {
        className: o.vR,
        selectedKey: i,
        defaultSelectedKey: l,
        onSelectionChange: function (a) {
            let i = e.find((e) => e.id === a);
            null != i && t?.(i.id);
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
                    (0, n.jsx)(d.wb, {
                        className: o.ld,
                        "aria-label": p,
                        "aria-labelledby": j,
                        children: e.map((a) =>
                            (0, n.jsx)(
                                u,
                                { item: a, formattedCount: null != a.count ? x.format(a.count) : void 0 },
                                a.id,
                            ),
                        ),
                    }),
                ],
            }),
            (0, n.jsx)(d.T2, {
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
    return (0, n.jsx)(d.oz, {
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
                                variant: "body-md/medium",
                                color: "none",
                                children: e.label,
                            }),
                            null != i &&
                                (0, n.jsxs)(c.E, {
                                    tag: "span",
                                    variant: "body-sm/medium",
                                    color: "none",
                                    children: ["(", i, ")"],
                                }),
                        ],
                    }),
                    (0, n.jsx)(t.i, { className: o.q3, "aria-hidden": "true" }),
                ],
            });
        },
    });
}
function b(a) {
    let { item: e, animation: i } = a;
    return (0, n.jsx)(d.Kp, { id: e.id, className: o.nd, "data-animation": i, children: e.panel() });
}
