n.d(t, {
    $o: () => o,
});
var r = n(600975),
    i = n(927578);
let a = (0, r.C)({
        kind: "user",
        id: "2022-06_no_payment_info_trial",
        label: "No Payment Info Trial",
        defaultConfig: {
            bypassCheckout: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Bypass collecting payment info",
                config: {
                    bypassCheckout: !0,
                },
            },
        ],
    }),
    s = (e, t, n) => {
        let r = null == n || (0, i.xq)(n);
        return null != e && null == t && r;
    },
    o = (e, t, n) => {
        let { bypassCheckout: r } = a.useExperiment(
                {
                    location: "aeb070_1",
                },
                {
                    autoTrackExposure: !1,
                },
            ),
            i = s(e, t, n);
        return r && i;
    };
