l.d(i, { A: () => h });
var s = l(477900);
l(582128);
var e = l(503698),
    r = l.n(e),
    t = l(837381),
    n = l(559106),
    d = l(939249),
    c = l(834730),
    o = l(105292),
    m = l(354886);
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
            trailing: b,
            "aria-label": j,
            "aria-setsize": N,
            "aria-posinset": k,
            className: C,
        } = a,
        f = (0, t.rm)(i),
        g = !0 === x && null != j ? o.intl.formatToPlainString(o.t.QymItZ, { text: j }) : j;
    return (0, s.jsx)(n.vN, {
        offset: { right: 4, bottom: 4 },
        children: (0, s.jsxs)(d.D, {
            className: r()(m.HP, C, { [m.r9]: p, [m.wD]: null != v }),
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
                                    variant: "body-md/semibold",
                                    lineClamp: 1,
                                    children: e,
                                }),
                                null != h
                                    ? (0, s.jsx)(c.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          lineClamp: u,
                                          children: h,
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                null != b ? (0, s.jsx)("div", { className: m.ZY, children: b }) : null,
            ],
        }),
    });
}
