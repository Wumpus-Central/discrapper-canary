l.d(t, { A: () => d });
var a = l(627968);
l(64700);
var n = l(821609),
    r = l(534514),
    i = l(156312),
    o = l(877062),
    s = l(252561);
let d = {
    name: "Deep Link Test",
    id: "deep-link-test",
    component: function (e) {
        let { deepLinkUrl: t } = e;
        return (0, a.jsx)(i.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, a.jsxs)(s.wn, {
                children: [
                    (0, a.jsx)(r.D, { variant: "heading-xl/semibold", children: "Deep Link Test" }),
                    (0, a.jsx)(s.Hq, {
                        label: "Test Deeplinking with a Custom Path",
                        direction: "vertical",
                        children: (0, a.jsx)(n.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Test Deeplink",
                            onClick: () => {
                                console.log("Opening deep link... ", t),
                                    o.A.launch(t, (e) => {
                                        console.log("onDone response: ", e);
                                    });
                            },
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
