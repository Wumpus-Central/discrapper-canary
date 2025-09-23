n.d(t, { x: () => x }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(100527),
    l = n(906732),
    s = n(562218),
    o = n(284829),
    c = n(586920),
    d = n(45474),
    u = n(594135),
    m = n(881493),
    h = n(407965),
    p = n(981631);
let x = (e) => {
        let {
                transitionState: t,
                onClose: n,
                premiumSubscription: s,
                premiumType: o,
                churnDiscount: c,
                planId: d,
                renewalInvoice: m,
                renewalInvoiceDetails: h,
                errorOnCancel: x,
                errorOnRedeem: b,
                setActiveStep: g,
                activeStep: j,
            } = e,
            { analyticsLocations: v } = (0, l.ZP)(i.Z.USER_SETTINGS),
            [_, y] = r.useState(f(j));
        return (
            (0, r.useEffect)(() => {
                y(f(j));
            }, [j]),
            (0, a.jsx)(u.D.Provider, {
                value: {
                    setStep: g,
                    premiumType: o,
                    onClose: n,
                    transitionState: t,
                    premiumSubscription: s,
                    analyticsLocations: v,
                    analyticsLocation: p.Sbl.USER_SETTINGS,
                    confettiCanvas: null,
                    churnUserDiscountOffer: c,
                    isFetchingChurnDiscountOffer: !1,
                    fullPrice: "$9.99",
                    discountedPrice: "$4.99",
                    planId: d,
                    paymentsBlocked: !1,
                    renewalInvoice: m,
                    renewalInvoiceDetails: h,
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
                return (0, a.jsx)(o.U, {});
            case d.R.CONFIRM:
                return (0, a.jsx)(s.G, {});
            case d.R.PREVIEW:
                return (0, a.jsx)(m.w, {});
            case d.R.WHAT_YOU_LOSE:
            default:
                return (0, a.jsx)(h.n, {});
        }
    };
