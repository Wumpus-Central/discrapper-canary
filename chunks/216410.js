t.d(n, { A: () => c }), t(228524);
var r = t(627968);
t(64700);
var l = t(503698),
    i = t.n(l),
    s = t(187322),
    o = t(158954),
    u = t(581444),
    a = t(671816);
function c(e) {
    let {
        title: n,
        description: t,
        headerImage: l,
        onDetails: c,
        onPurchase: d,
        PurchaseButton: p,
        GiftButton: m,
        availabilityLabel: b,
    } = e;
    return (0, r.jsx)(s.vN, {
        children: (0, r.jsxs)("div", {
            className: i()(u.iE, a.t),
            tabIndex: 0,
            onClick: () => {
                null != c ? c() : null != d && d();
            },
            onKeyUp: (e) => {
                "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != c ? c() : null != d && d());
            },
            children: [
                (0, r.jsx)("div", {
                    className: u.Td,
                    style:
                        null != l ? { backgroundImage: null != l ? "url(".concat(l.toString(), ")") : void 0 } : void 0,
                    children:
                        null == l &&
                        (0, r.jsx)(o.qyI, {
                            color: "white",
                            size: "custom",
                            height: 80,
                            width: 80,
                        }),
                }),
                (0, r.jsxs)("div", {
                    className: u.zH,
                    children: [
                        (0, r.jsx)(o.EYj, {
                            color: "text-strong",
                            variant: "text-md/semibold",
                            children: n,
                        }),
                        null != t &&
                            (0, r.jsx)(o.EYj, {
                                className: u.h_,
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: t,
                            }),
                    ],
                }),
                (null != p || null != m) &&
                    (0, r.jsxs)("div", {
                        className: u.qr,
                        children: [
                            null != p &&
                                (0, r.jsx)(o.EYj, {
                                    color: "interactive-text-default",
                                    variant: "text-sm/normal",
                                    children: b,
                                }),
                            (0, r.jsxs)("div", {
                                className: u.GC,
                                children: [
                                    null != p &&
                                        (0, r.jsx)(p, {
                                            onClick: (e) => {
                                                e.stopPropagation(), null == d || d();
                                            },
                                        }),
                                    null != m && (0, r.jsx)(m, {}),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
