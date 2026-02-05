"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(732955),
    a = n(397927),
    s = n(156312),
    o = n(877062),
    l = n(252561);
let u = {
    name: "Deep Link Test",
    id: "deep-link-test",
    component: function (e) {
        let { deepLinkUrl: t } = e,
            n = () => {
                console.log("Opening deep link... ", t),
                    o.A.launch(t, (e) => {
                        console.log("onDone response: ", e);
                    });
            };
        return (0, r.jsx)(s.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, r.jsxs)(l.wn, {
                children: [
                    (0, r.jsx)(a.Heading, { variant: "heading-xl/semibold", children: "Deep Link Test" }),
                    (0, r.jsx)(l.Hq, {
                        label: "Test Deeplinking with a Custom Path",
                        direction: "vertical",
                        children: (0, r.jsx)(i.$nd, {
                            variant: "primary",
                            size: "sm",
                            text: "Test Deeplink",
                            onClick: n,
                        }),
                    }),
                ],
            }),
        });
    },
    controls: {
        deepLinkUrl: {
            label: "Deep Link URL",
            type: "text",
            defaultValue: `discord://${location.host}/feature/apple-payment-link`,
        },
    },
};
