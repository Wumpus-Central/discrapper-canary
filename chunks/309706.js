l.d(t, { U: () => d });
var a = l(627968);
l(64700);
var n = l(331322),
    r = l(834730),
    i = l(821609),
    o = l(99696),
    s = l(652215);
let d = {
    title: "Gift Card",
    stories: [
        {
            name: "Redemption Modal",
            id: "gift-card-redemption-modal",
            component: function () {
                return (0, a.jsxs)(n.B, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(r.E, {
                            variant: "text-sm/normal",
                            children:
                                "Click the button below to open the gift card redemption modal (enter code form). On success it will open the success modal.",
                        }),
                        (0, a.jsx)(i.$, {
                            variant: "primary",
                            text: "Open Redemption Modal",
                            onClick: () =>
                                (0, o.HF)({ withRedemptionSuccessModal: !0, onComplete: () => {}, onClose: () => {} }),
                        }),
                    ],
                });
            },
        },
        {
            name: "Success Modal",
            id: "gift-card-redemption-success-modal",
            component: function () {
                return (0, a.jsxs)(n.B, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(r.E, {
                            variant: "text-sm/normal",
                            children:
                                "Click the button below to open the gift card redemption success modal (post-redemption).",
                        }),
                        (0, a.jsx)(i.$, {
                            variant: "primary",
                            text: "Open Success Modal",
                            onClick: () =>
                                (0, o.cV)({ amountRedeemed: 5e3, currencyCode: s.Yri.USD, onClose: () => {} }),
                        }),
                    ],
                });
            },
        },
    ],
};
