l.d(i, { A: () => h });
var s = l(477900);
l(582128);
var e = l(503698),
    t = l.n(e),
    r = l(837381),
    n = l(259678),
    d = l(939249),
    c = l(834730),
    o = l(375708),
    m = l(542787);
function h(a) {
    let {
            listItemId: i,
            icon: l,
            label: e,
            subLabel: h,
            subLabelLineClamp: u = 1,
            selected: x,
            disabled: p,
            onPress: v,
            trailing: j,
            "aria-label": b,
            "aria-setsize": N,
            "aria-posinset": k,
            className: C,
        } = a,
        f = (0, r.rm)(i),
        g = !0 === x && null != b ? o.intl.formatToPlainString(o.t.QymItZ, { text: b }) : b;
    return (0, s.jsx)(n.vN, {
        offset: { right: 4, bottom: 4 },
        children: (0, s.jsxs)(d.D, {
            className: t()(m.HP, C, { [m.r9]: p, [m.wD]: null != v }),
            onClick: p ? void 0 : v,
            "aria-label": g,
            "aria-selected": x,
            "aria-disabled": p,
            "aria-setsize": N,
            "aria-posinset": k,
            ...f,
            children: [
                (0, s.jsxs)("div", {
                    className: m.D_,
                    children: [
                        (0, s.jsx)("div", { className: m.P0, children: l }),
                        (0, s.jsxs)("div", {
                            className: m.WD,
                            children: [
                                (0, s.jsx)(c.E, {
                                    tag: "strong",
                                    color: p ? "text-muted" : void 0,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: e,
                                }),
                                null != h
                                    ? (0, s.jsx)(c.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: u,
                                          children: h,
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                null != j ? (0, s.jsx)("div", { className: m.ZY, children: j }) : null,
            ],
        }),
    });
}
