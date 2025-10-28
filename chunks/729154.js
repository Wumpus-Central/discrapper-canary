n.d(t, { x: () => x }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(100527),
    i = n(906732),
    o = n(562218),
    s = n(284829),
    c = n(586920),
    d = n(45474),
    u = n(594135),
    m = n(881493),
    p = n(407965),
    h = n(981631);
let x = (e) => {
        let {
                transitionState: t,
                onClose: n,
                premiumSubscription: o,
                premiumType: s,
                churnDiscount: c,
                planId: d,
                renewalInvoice: m,
                renewalInvoiceDetails: p,
                errorOnCancel: x,
                errorOnRedeem: b,
                setActiveStep: g,
                activeStep: v,
            } = e,
            { analyticsLocations: j } = (0, i.ZP)(l.Z.USER_SETTINGS),
            [_, y] = r.useState(f(v));
        return (
            (0, r.useEffect)(() => {
                y(f(v));
            }, [v]),
            (0, a.jsx)(u.CancellationContext.Provider, {
                value: {
                    setStep: g,
                    premiumType: s,
                    onClose: n,
                    transitionState: t,
                    premiumSubscription: o,
                    analyticsLocations: j,
                    analyticsLocation: h.Sbl.USER_SETTINGS,
                    confettiCanvas: null,
                    churnUserDiscountOffer: c,
                    isFetchingChurnDiscountOffer: !1,
                    fullPrice: "$9.99",
                    discountedPrice: "$4.99",
                    planId: d,
                    paymentsBlocked: !1,
                    renewalInvoice: m,
                    renewalInvoiceDetails: p,
                    handleCancellation: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                if (x) return void t();
                                e();
                            }, 1000);
                        }),
                    applyOffer: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                if (b) return void t();
                                e();
                            }, 1000);
                        }),
                    pauseDuration: null,
                    setPauseDuration: () => {},
                },
                children: _,
            })
        );
    },
    f = (e) => {
        switch (e) {
            case d.R.DISCOUNT_APPLIED:
                return (0, a.jsx)(c.i, {});
            case d.R.CONFIRM_DISCOUNT:
                return (0, a.jsx)(s.U, {});
            case d.R.CONFIRM:
                return (0, a.jsx)(o.G, {});
            case d.R.PREVIEW:
                return (0, a.jsx)(m.w, {});
            case d.R.WHAT_YOU_LOSE:
            default:
                return (0, a.jsx)(p.n, {});
        }
    };
