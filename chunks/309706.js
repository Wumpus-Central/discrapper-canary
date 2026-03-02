l.d(t, { U: () => s });
var a = l(627968);
l(64700);
var n = l(397927),
    r = l(99696),
    i = l(652215);
let s = {
    title: "Gift Card",
    stories: [
        {
            name: "Redemption Modal",
            id: "gift-card-redemption-modal",
            component: function () {
                return (0, a.jsxs)(n.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(n.Text, {
                            variant: "text-sm/normal",
                            children:
                                "Click the button below to open the gift card redemption modal (enter code form). On success it will open the success modal.",
                        }),
                        (0, a.jsx)(n.Button, {
                            variant: "primary",
                            text: "Open Redemption Modal",
                            onClick: () =>
                                (0, r.HF)({ withRedemptionSuccessModal: !0, onComplete: () => {}, onClose: () => {} }),
                        }),
                    ],
                });
            },
        },
        {
            name: "Success Modal",
            id: "gift-card-redemption-success-modal",
            component: function () {
                return (0, a.jsxs)(n.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(n.Text, {
                            variant: "text-sm/normal",
                            children:
                                "Click the button below to open the gift card redemption success modal (post-redemption).",
                        }),
                        (0, a.jsx)(n.Button, {
                            variant: "primary",
                            text: "Open Success Modal",
                            onClick: () =>
                                (0, r.cV)({ amountRedeemed: 5e3, currencyCode: i.Yri.USD, onClose: () => {} }),
                        }),
                    ],
                });
            },
        },
    ],
};
