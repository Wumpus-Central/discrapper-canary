n.d(e, {
    CancellationContext: () => l,
    a: () => s,
});
var i = n(647438),
    r = n(793030),
    a = n(474936);
let l = i.createContext({
        setStep: () => {},
        premiumType: a.PremiumTypes.TIER_0,
        onClose: () => {},
        transitionState: r.Dvm.ENTERING,
        premiumSubscription: {},
        analyticsLocations: [],
        analyticsLocation: void 0,
        confettiCanvas: null,
        churnUserDiscountOffer: null,
        isFetchingChurnDiscountOffer: !1,
        paymentsBlocked: !1,
        renewalInvoice: null,
        renewalInvoiceDetails: null,
        handleCancellation: async () => {},
        applyOffer: async () => {},
        pauseDuration: null,
        setPauseDuration: () => {},
    }),
    s = () => i.useContext(l);
