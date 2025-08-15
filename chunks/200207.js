n.d(t, { I: () => d }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(67136),
    s = n(790472),
    a = n(777207),
    u = n(34322),
    c = n(818632);
function d(e) {
    let {
        title: t,
        description: n,
        headerImage: i,
        onDetails: d,
        onPurchase: p,
        PurchaseButton: b,
        GiftButton: m,
        availabilityLabel: f,
    } = e;
    return (0, r.jsx)(o.tE, {
        children: (0, r.jsxs)("div", {
            className: l()(u.wrapper, c.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != d ? d() : null != p && p();
            },
            onKeyUp: (e) => {
                "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != d ? d() : null != p && p());
            },
            children: [
                (0, r.jsx)("div", {
                    className: u.cardHeaderImg,
                    style:
                        null != i ? { backgroundImage: null != i ? "url(".concat(i.toString(), ")") : void 0 } : void 0,
                    children:
                        null == i &&
                        (0, r.jsx)(s.P, {
                            color: "white",
                            size: "custom",
                            height: 80,
                            width: 80,
                        }),
                }),
                (0, r.jsxs)("div", {
                    className: u.details,
                    children: [
                        (0, r.jsx)(a.x, {
                            color: "header-primary",
                            variant: "text-md/semibold",
                            children: t,
                        }),
                        null != n &&
                            (0, r.jsx)(a.x, {
                                className: u.description,
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: n,
                            }),
                    ],
                }),
                (null != b || null != m) &&
                    (0, r.jsxs)("div", {
                        className: u.footer,
                        children: [
                            null != b &&
                                (0, r.jsx)(a.x, {
                                    color: "interactive-normal",
                                    variant: "text-sm/normal",
                                    children: f,
                                }),
                            (0, r.jsxs)("div", {
                                className: u.buttonGroup,
                                children: [
                                    null != b &&
                                        (0, r.jsx)(b, {
                                            onClick: (e) => {
                                                e.stopPropagation(), null == p || p();
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
