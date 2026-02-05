e.d(i, { A: () => o });
var t = e(627968);
e(64700);
var l = e(503698),
    s = e.n(l),
    r = e(187322),
    a = e(158954),
    d = e(581444),
    u = e(671816);
function o(n) {
    let {
        title: i,
        description: e,
        headerImage: l,
        onDetails: o,
        onPurchase: c,
        PurchaseButton: m,
        GiftButton: p,
        availabilityLabel: x,
    } = n;
    return (0, t.jsx)(r.vN, {
        children: (0, t.jsxs)("div", {
            className: s()(d.iE, u.t),
            tabIndex: 0,
            onClick: () => {
                null != o ? o() : null != c && c();
            },
            onKeyUp: (n) => {
                "Enter" === n.key && (n.stopPropagation(), n.preventDefault(), null != o ? o() : null != c && c());
            },
            children: [
                (0, t.jsx)("div", {
                    className: d.Td,
                    style: null != l ? { backgroundImage: null != l ? `url(${l.toString()})` : void 0 } : void 0,
                    children: null == l && (0, t.jsx)(a.qyI, { color: "white", size: "custom", height: 80, width: 80 }),
                }),
                (0, t.jsxs)("div", {
                    className: d.zH,
                    children: [
                        (0, t.jsx)(a.EYj, { color: "text-strong", variant: "text-md/semibold", children: i }),
                        null != e &&
                            (0, t.jsx)(a.EYj, {
                                className: d.h_,
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: e,
                            }),
                    ],
                }),
                (null != m || null != p) &&
                    (0, t.jsxs)("div", {
                        className: d.qr,
                        children: [
                            null != m &&
                                (0, t.jsx)(a.EYj, {
                                    color: "interactive-text-default",
                                    variant: "text-sm/normal",
                                    children: x,
                                }),
                            (0, t.jsxs)("div", {
                                className: d.GC,
                                children: [
                                    null != m &&
                                        (0, t.jsx)(m, {
                                            onClick: (n) => {
                                                n.stopPropagation(), c?.();
                                            },
                                        }),
                                    null != p && (0, t.jsx)(p, {}),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
