s.d(i, { A: () => h });
var e = s(477900);
s(582128);
var l = s(503698),
    t = s.n(l),
    r = s(837381),
    n = s(259678),
    d = s(939249),
    c = s(834730),
    o = s(375708),
    m = s(542787);
function h(a) {
    let {
            listItemId: i,
            icon: s,
            label: l,
            subLabel: h,
            selected: x,
            disabled: u,
            onPress: v,
            trailing: p,
            "aria-label": j,
            "aria-setsize": b,
            "aria-posinset": N,
            className: k,
        } = a,
        f = (0, r.rm)(i),
        g = !0 === x && null != j ? o.intl.formatToPlainString(o.t.QymItZ, { text: j }) : j;
    return (0, e.jsx)(n.vN, {
        offset: { right: 4, bottom: 4 },
        children: (0, e.jsxs)(d.D, {
            className: t()(m.HP, k, { [m.r9]: u }),
            onClick: u ? void 0 : v,
            "aria-label": g,
            "aria-selected": x,
            "aria-disabled": u,
            "aria-setsize": b,
            "aria-posinset": N,
            ...f,
            children: [
                (0, e.jsxs)("div", {
                    className: m.D_,
                    children: [
                        (0, e.jsx)("div", { className: m.P0, children: s }),
                        (0, e.jsxs)("div", {
                            className: m.WD,
                            children: [
                                (0, e.jsx)(c.E, {
                                    tag: "strong",
                                    color: u ? "text-muted" : void 0,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: l,
                                }),
                                null != h
                                    ? (0, e.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: h })
                                    : null,
                            ],
                        }),
                    ],
                }),
                null != p ? (0, e.jsx)("div", { className: m.ZY, children: p }) : null,
            ],
        }),
    });
}
