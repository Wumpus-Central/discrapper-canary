e.d(s, { A: () => x });
var i = e(627968);
e(64700);
var t = e(503698),
    l = e.n(t),
    r = e(837381),
    d = e(187322),
    n = e(939249),
    c = e(834730),
    o = e(658675),
    h = e(375708),
    m = e(680507);
function x(a) {
    let {
            listItemId: s,
            icon: e,
            label: t,
            subLabel: x,
            selected: v,
            disabled: u,
            onPress: p,
            "aria-label": j,
            "aria-setsize": b,
            "aria-posinset": k,
            className: N,
        } = a,
        f = (0, r.rm)(s),
        g = !0 === v && null != j ? h.intl.formatToPlainString(h.t.QymItZ, { text: j }) : j;
    return (0, i.jsx)(d.vN, {
        offset: { right: 4, bottom: 4 },
        children: (0, i.jsxs)(n.D, {
            className: l()(m.HP, N, { [m.r9]: u }),
            onClick: u ? void 0 : p,
            "aria-label": g,
            "aria-selected": v,
            "aria-disabled": u,
            "aria-setsize": b,
            "aria-posinset": k,
            ...f,
            children: [
                (0, i.jsxs)("div", {
                    className: m.D_,
                    children: [
                        (0, i.jsx)("div", { className: m.P0, children: e }),
                        (0, i.jsxs)("div", {
                            className: m.WD,
                            children: [
                                (0, i.jsx)(c.E, {
                                    tag: "strong",
                                    color: u ? "text-muted" : void 0,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: t,
                                }),
                                null != x
                                    ? (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: x })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: m.kv, children: (0, i.jsx)(o.P, { checked: !!v, disabled: u }) }),
            ],
        }),
    });
}
