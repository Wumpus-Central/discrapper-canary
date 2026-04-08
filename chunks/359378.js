s.d(t, { A: () => u });
var i = s(627968);
s(64700);
var a = s(503698),
    l = s.n(a),
    n = s(837381),
    r = s(397927),
    A = s(956538);
function u(e) {
    let {
            listItemId: t,
            icon: s,
            label: a,
            subLabel: u,
            selected: d,
            disabled: o,
            onPress: c,
            "aria-setsize": _,
            "aria-posinset": h,
            className: I,
        } = e,
        E = (0, n.rm)(t);
    return (0, i.jsx)(r.vN3, {
        offset: { right: 4 },
        children: (0, i.jsxs)(r.DUT, {
            className: l()(A.HP, I, { [A.r9]: o }),
            onClick: o ? void 0 : c,
            "aria-selected": d,
            "aria-disabled": o,
            "aria-setsize": _,
            "aria-posinset": h,
            ...E,
            children: [
                (0, i.jsxs)("div", {
                    className: A.D_,
                    children: [
                        (0, i.jsx)("div", { className: A.P0, children: s }),
                        (0, i.jsxs)("div", {
                            className: A.WD,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    tag: "strong",
                                    color: o ? "text-muted" : void 0,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: a,
                                }),
                                null != u
                                    ? (0, i.jsx)(r.Text, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: u,
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: A.kv, children: (0, i.jsx)(r.P7L, { checked: !!d, disabled: o }) }),
            ],
        }),
    });
}
