t.d(n, { I: () => c }), t(953529);
var r = t(54381);
t(473749);
var i = t(120356),
    l = t.n(i),
    s = t(781160),
    o = t(793030),
    u = t(316492),
    a = t(494933);
function c(e) {
    let {
        title: n,
        description: t,
        headerImage: i,
        onDetails: c,
        onPurchase: d,
        PurchaseButton: p,
        GiftButton: m,
        availabilityLabel: b,
    } = e;
    return (0, r.jsx)(s.tE, {
        children: (0, r.jsxs)("div", {
            className: l()(u.wrapper, a.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != c ? c() : null != d && d();
            },
            onKeyUp: (e) => {
                "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != c ? c() : null != d && d());
            },
            children: [
                (0, r.jsx)("div", {
                    className: u.cardHeaderImg,
                    style:
                        null != i ? { backgroundImage: null != i ? "url(".concat(i.toString(), ")") : void 0 } : void 0,
                    children:
                        null == i &&
                        (0, r.jsx)(o.Prq, {
                            color: "white",
                            size: "custom",
                            height: 80,
                            width: 80,
                        }),
                }),
                (0, r.jsxs)("div", {
                    className: u.details,
                    children: [
                        (0, r.jsx)(o.xvT, {
                            color: "header-primary",
                            variant: "text-md/semibold",
                            children: n,
                        }),
                        null != t &&
                            (0, r.jsx)(o.xvT, {
                                className: u.description,
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: t,
                            }),
                    ],
                }),
                (null != p || null != m) &&
                    (0, r.jsxs)("div", {
                        className: u.footer,
                        children: [
                            null != p &&
                                (0, r.jsx)(o.xvT, {
                                    color: "interactive-text-default",
                                    variant: "text-sm/normal",
                                    children: b,
                                }),
                            (0, r.jsxs)("div", {
                                className: u.buttonGroup,
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
