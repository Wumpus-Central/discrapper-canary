n.d(t, {
    CancellationContext: () => o,
    a: () => s,
});
var r = n(647438),
    i = n(793030),
    a = n(474936);
let o = r.createContext({
        setStep: () => {},
        premiumType: a.PremiumTypes.TIER_0,
        onClose: () => {},
        transitionState: i.Dvm.ENTERING,
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
    s = () => r.useContext(o);
