l.d(t, { A: () => h });
var n = l(627968);
l(64700);
var s = l(503698),
    r = l.n(s),
    i = l(837381),
    a = l(187322),
    u = l(939249),
    c = l(834730),
    d = l(658675),
    o = l(680507);
function h(e) {
    let {
            listItemId: t,
            icon: l,
            label: s,
            subLabel: h,
            selected: f,
            disabled: g,
            onPress: m,
            "aria-setsize": p,
            "aria-posinset": _,
            className: x,
        } = e,
        b = (0, i.rm)(t);
    return (0, n.jsx)(a.vN, {
        offset: { right: 4 },
        children: (0, n.jsxs)(u.D, {
            className: r()(o.HP, x, { [o.r9]: g }),
            onClick: g ? void 0 : m,
            "aria-selected": f,
            "aria-disabled": g,
            "aria-setsize": p,
            "aria-posinset": _,
            ...b,
            children: [
                (0, n.jsxs)("div", {
                    className: o.D_,
                    children: [
                        (0, n.jsx)("div", { className: o.P0, children: l }),
                        (0, n.jsxs)("div", {
                            className: o.WD,
                            children: [
                                (0, n.jsx)(c.E, {
                                    tag: "strong",
                                    color: g ? "text-muted" : void 0,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: s,
                                }),
                                null != h
                                    ? (0, n.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: h })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)("div", { className: o.kv, children: (0, n.jsx)(d.P, { checked: !!f, disabled: g }) }),
            ],
        }),
    });
}
