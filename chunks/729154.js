n.d(t, { x: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(100527),
    o = n(906732),
    s = n(562218),
    l = n(284829),
    c = n(586920),
    u = n(45474),
    d = n(594135),
    f = n(881493),
    p = n(407965),
    _ = n(981631);
let m = (e) => {
        let {
                transitionState: t,
                onClose: n,
                premiumSubscription: s,
                premiumType: l,
                churnDiscount: c,
                planId: u,
                renewalInvoice: f,
                renewalInvoiceDetails: p,
                errorOnCancel: m,
                errorOnRedeem: g,
                setActiveStep: E,
                activeStep: b,
            } = e,
            { analyticsLocations: y } = (0, o.ZP)(a.Z.USER_SETTINGS),
            [O, v] = i.useState(h(b));
        return (
            (0, i.useEffect)(() => {
                v(h(b));
            }, [b]),
            (0, r.jsx)(d.CancellationContext.Provider, {
                value: {
                    setStep: E,
                    premiumType: l,
                    onClose: n,
                    transitionState: t,
                    premiumSubscription: s,
                    analyticsLocations: y,
                    analyticsLocation: _.Sbl.USER_SETTINGS,
                    confettiCanvas: null,
                    churnUserDiscountOffer: c,
                    isFetchingChurnDiscountOffer: !1,
                    fullPrice: "$9.99",
                    discountedPrice: "$4.99",
                    planId: u,
                    paymentsBlocked: !1,
                    renewalInvoice: f,
                    renewalInvoiceDetails: p,
                    handleCancellation: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                if (m) return void t();
                                e();
                            }, 1000);
                        }),
                    applyOffer: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                if (g) return void t();
                                e();
                            }, 1000);
                        }),
                    pauseDuration: null,
                    setPauseDuration: () => {},
                },
                children: O,
            })
        );
    },
    h = (e) => {
        switch (e) {
            case u.R.DISCOUNT_APPLIED:
                return (0, r.jsx)(c.i, {});
            case u.R.CONFIRM_DISCOUNT:
                return (0, r.jsx)(l.U, {});
            case u.R.CONFIRM:
                return (0, r.jsx)(s.G, {});
            case u.R.PREVIEW:
                return (0, r.jsx)(f.w, {});
            case u.R.WHAT_YOU_LOSE:
            default:
                return (0, r.jsx)(p.n, {});
        }
    };
