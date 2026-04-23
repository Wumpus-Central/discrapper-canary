i.d(e, { A: () => c });
var t = i(627968);
i(64700);
var l = i(503698),
    s = i.n(l),
    r = i(187322),
    a = i(638916),
    d = i(834730),
    u = i(667055),
    o = i(693217);
function c(n) {
    let {
        title: e,
        description: i,
        headerImage: l,
        onDetails: c,
        onPurchase: m,
        PurchaseButton: p,
        GiftButton: h,
        availabilityLabel: x,
    } = n;
    return (0, t.jsx)(r.vN, {
        children: (0, t.jsxs)("div", {
            className: s()(u.iE, o.t),
            tabIndex: 0,
            onClick: () => {
                null != c ? c() : null != m && m();
            },
            onKeyUp: (n) => {
                "Enter" === n.key && (n.stopPropagation(), n.preventDefault(), null != c ? c() : null != m && m());
            },
            children: [
                (0, t.jsx)("div", {
                    className: u.Td,
                    style: null != l ? { backgroundImage: null != l ? `url(${l.toString()})` : void 0 } : void 0,
                    children: null == l && (0, t.jsx)(a.q, { color: "white", size: "custom", height: 80, width: 80 }),
                }),
                (0, t.jsxs)("div", {
                    className: u.zH,
                    children: [
                        (0, t.jsx)(d.E, { color: "text-strong", variant: "text-md/semibold", children: e }),
                        null != i &&
                            (0, t.jsx)(d.E, {
                                className: u.h_,
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: i,
                            }),
                    ],
                }),
                (null != p || null != h) &&
                    (0, t.jsxs)("div", {
                        className: u.qr,
                        children: [
                            null != p &&
                                (0, t.jsx)(d.E, {
                                    color: "interactive-text-default",
                                    variant: "text-sm/normal",
                                    children: x,
                                }),
                            (0, t.jsxs)("div", {
                                className: u.GC,
                                children: [
                                    null != p &&
                                        (0, t.jsx)(p, {
                                            onClick: (n) => {
                                                n.stopPropagation(), m?.();
                                            },
                                        }),
                                    null != h && (0, t.jsx)(h, {}),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
