n.d(t, { s: () => c });
var r = n(54381);
n(473749);
var i = n(159691),
    a = n(481060),
    o = n(563132),
    s = n(954824),
    l = n(261538);
let c = {
    name: "Deep Link Test",
    id: "deep-link-test",
    component: function (e) {
        let { deepLinkUrl: t } = e,
            n = () => {
                console.log("Opening deep link... ", t),
                    s.Z.launch(t, (e) => {
                        console.log("onDone response: ", e);
                    });
            };
        return (0, r.jsx)(o.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, r.jsxs)(l.$0, {
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        children: "Deep Link Test",
                    }),
                    (0, r.jsx)(l.E_, {
                        label: "Test Deeplinking with a Custom Path",
                        direction: "vertical",
                        children: (0, r.jsx)(i.zxk, {
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
            defaultValue: "discord://".concat(location.host, "/feature/apple-payment-link"),
        },
    },
};
