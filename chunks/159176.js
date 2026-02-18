l.d(t, { A: () => u });
var a = l(627968);
l(64700);
var n = l(732955),
    r = l(397927),
    i = l(156312),
    s = l(877062),
    o = l(252561);
let u = {
    name: "Deep Link Test",
    id: "deep-link-test",
    component: function (e) {
        let { deepLinkUrl: t } = e;
        return (0, a.jsx)(i.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, a.jsxs)(o.wn, {
                children: [
                    (0, a.jsx)(r.Heading, { variant: "heading-xl/semibold", children: "Deep Link Test" }),
                    (0, a.jsx)(o.Hq, {
                        label: "Test Deeplinking with a Custom Path",
                        direction: "vertical",
                        children: (0, a.jsx)(n.$nd, {
                            variant: "primary",
                            size: "sm",
                            text: "Test Deeplink",
                            onClick: () => {
                                console.log("Opening deep link... ", t),
                                    s.A.launch(t, (e) => {
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
