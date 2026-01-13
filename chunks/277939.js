n.d(t, { U: () => s }), n(539854);
var r = n(54381);
n(473749);
var i = n(902820),
    a = n(981631),
    o = n(570810);
let s = {
    title: "Unified Checkout",
    stories: [
        {
            name: "Primitive: Order Summary Accordion",
            id: "unified-checkout-order-summary",
            component: (e) => {
                let { label: t, hasDiscount: n, hasLineItems: s } = e,
                    l = s
                        ? [
                              {
                                  id: 1,
                                  label: "Nitro Basic (Monthly)",
                                  amount: 299,
                              },
                              {
                                  id: 2,
                                  label: "Server Boost",
                                  amount: 499,
                              },
                          ]
                        : [];
                return (
                    n &&
                        s &&
                        l.push({
                            id: 3,
                            label: "Discount Applied",
                            amount: -100,
                        }),
                    (0, r.jsx)("div", {
                        className: o.orderSummaryContainer,
                        children: (0, r.jsx)(i.Q, {
                            label: t,
                            lineItems: l,
                            currency: a.pKx.USD,
                        }),
                    })
                );
            },
            controls: {
                label: {
                    label: "Label",
                    type: "text",
                    defaultValue: "Order Summary",
                },
                hasDiscount: {
                    label: "Has Discount",
                    type: "boolean",
                    defaultValue: !0,
                },
                hasLineItems: {
                    label: "Has Line Items",
                    type: "boolean",
                    defaultValue: !0,
                },
            },
        },
    ],
};
