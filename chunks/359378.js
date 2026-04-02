l.d(t, { A: () => c });
var n = l(627968);
l(64700);
var s = l(503698),
    r = l.n(s),
    i = l(837381),
    a = l(397927),
    u = l(49995);
function c(e) {
    let {
            listItemId: t,
            icon: l,
            label: s,
            subLabel: c,
            selected: d,
            disabled: o,
            onPress: h,
            "aria-setsize": f,
            "aria-posinset": g,
            className: x,
        } = e,
        m = (0, i.rm)(t);
    return (0, n.jsxs)(a.DUT, {
        className: r()(u.HP, x, { [u.r9]: o }),
        onClick: o ? void 0 : h,
        "aria-selected": d,
        "aria-disabled": o,
        "aria-setsize": f,
        "aria-posinset": g,
        ...m,
        children: [
            (0, n.jsxs)("div", {
                className: u.D_,
                children: [
                    (0, n.jsx)("div", { className: u.P0, children: l }),
                    (0, n.jsxs)("div", {
                        className: u.WD,
                        children: [
                            (0, n.jsx)(a.Text, {
                                tag: "strong",
                                color: o ? "text-muted" : void 0,
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                children: s,
                            }),
                            null != c
                                ? (0, n.jsx)(a.Text, { variant: "text-xs/normal", color: "text-muted", children: c })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: u.kv, children: (0, n.jsx)(a.P7L, { checked: !!d, disabled: o }) }),
        ],
    });
}
