i.d(e, { A: () => x });
var a = i(627968);
i(64700);
var r = i(503698),
    t = i.n(r),
    d = i(837381),
    l = i(187322),
    c = i(939249),
    n = i(834730),
    o = i(658675),
    h = i(680507);
function x(s) {
    let {
            listItemId: e,
            icon: i,
            label: r,
            subLabel: x,
            selected: m,
            disabled: v,
            onPress: p,
            "aria-setsize": u,
            "aria-posinset": j,
            className: k,
        } = s,
        b = (0, d.rm)(e);
    return (0, a.jsx)(l.vN, {
        offset: { right: 4, bottom: 4 },
        children: (0, a.jsxs)(c.D, {
            className: t()(h.HP, k, { [h.r9]: v }),
            onClick: v ? void 0 : p,
            "aria-selected": m,
            "aria-disabled": v,
            "aria-setsize": u,
            "aria-posinset": j,
            ...b,
            children: [
                (0, a.jsxs)("div", {
                    className: h.D_,
                    children: [
                        (0, a.jsx)("div", { className: h.P0, children: i }),
                        (0, a.jsxs)("div", {
                            className: h.WD,
                            children: [
                                (0, a.jsx)(n.E, {
                                    tag: "strong",
                                    color: v ? "text-muted" : void 0,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: r,
                                }),
                                null != x
                                    ? (0, a.jsx)(n.E, { variant: "text-xs/normal", color: "text-muted", children: x })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("div", { className: h.kv, children: (0, a.jsx)(o.P, { checked: !!m, disabled: v }) }),
            ],
        }),
    });
}
