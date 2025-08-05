(n.d(t, { Z: () => R }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(906732),
    f = n(600164),
    _ = n(717401),
    p = n(160913),
    h = n(311821),
    m = n(459965),
    g = n(858987),
    E = n(855775),
    b = n(669079),
    y = n(74538),
    O = n(987209),
    v = n(563132),
    I = n(632580),
    T = n(919778),
    S = n(877820),
    A = n(435020),
    N = n(612853),
    C = n(981631),
    w = n(843856);
function R(e) {
    let { premiumSubscription: t, setPurchaseState: n, onBack: a, onNext: s, legalTermsNodeRef: R, flashLegalTerms: P, invoiceError: D, planError: L, onPurchaseError: x, baseAnalyticsData: k, flowStartTime: j, trialId: M, planGroup: U, analyticsLocation: G, purchaseTokenAuthState: B, openInvoiceId: Z, metadata: F, backButtonEligible: V, disablePurchase: H, isTrial: Y = !1, onPaymentSourceAdd: W } = e,
        { selectedPlan: K, priceOptions: z, setHasAcceptedTerms: q, setPurchaseError: $, purchaseType: X, paymentSourceId: Q, paymentSources: J, selectedSkuId: ee, skusById: et, skuPricePreviewsById: en, referralCode: er, contextMetadata: ei, invoicePreview: ea, inReverseTrial: eo, premiumBrandRefreshBackgroundClassName: es } = (0, v.JL)(),
        { isGift: el, selectedGiftStyle: ec, customGiftMessage: eu, emojiConfetti: ed, soundEffect: ef, giftRecipient: e_, selectedGiftingPromotionReward: ep } = (0, O.wD)(),
        eh = (0, _.a5)(K),
        em = (0, b.MY)(e_),
        eg = {};
    ((eg.gift_style = ec), (eg.reward_sku_ids = eh && (null == ep ? void 0 : ep.skuId) != null ? [null == ep ? void 0 : ep.skuId] : []), em === b.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (l()(null != e_, 'Gift recipient must be set at purchase review step for these gift options.'), (eg.recipient_id = e_.id), (eg.custom_message = eu), (eg.emoji_id = null == ed ? void 0 : ed.id), (eg.emoji_name = (null == ed ? void 0 : ed.id) == null ? (null == ed ? void 0 : ed.surrogates) : void 0), (eg.sound_id = null == ef ? void 0 : ef.soundId)));
    let eE = null == K ? void 0 : K.id,
        eb = (0, T.sE)(M, z.paymentSourceId, eE),
        { analyticsLocations: ey } = (0, d.ZP)(),
        eO = (0, A.m)(J, Q),
        [ev, eI] = i.useState(eb),
        [eT, eS] = i.useState(!1),
        { hasEntitlements: eA } = (0, m.H)(eE, el),
        eN = (0, y.Ap)(z.paymentSourceId),
        eC = eA || eb,
        ew = (0, p.U)(),
        eR = (0, c.e7)([S.Z], () => S.Z.currentOrderId),
        eP = null,
        eD = null;
    if (X === C.GZQ.ONE_TIME) {
        var eL;
        (l()(null != ee, 'SKU must be selected for one-time purchases'), (eP = null != (eL = et[ee]) ? eL : null), l()(null != eP, 'SKU must exist and be fetched.'));
        let e = en[ee],
            t = null != Q ? Q : E.c;
        eD = null != e ? e[t] : null;
    }
    let ex = async () => {
            await (0, I.H)({
                setPurchaseState: n,
                setHasAcceptedTerms: q,
                setIsSubmitting: eI,
                setPurchaseError: $,
                hasRedirectURL: eT,
                setHasRedirectURL: eS,
                isGift: el,
                baseAnalyticsData: k,
                analyticsLocation: G,
                analyticsLocations: ey,
                flowStartTime: j,
                subscriptionPlan: K,
                planGroup: U,
                trialId: M,
                priceOptions: z,
                paymentSource: eO,
                isPrepaidPaymentPastDue: ew,
                openInvoiceId: Z,
                premiumSubscription: t,
                onNext: s,
                metadata: F,
                sku: eP,
                skuPricePreview: eD,
                purchaseType: X,
                referralCode: er,
                loadId: ei.loadId,
                giftInfoOptions: eg,
                invoicePreview: ea,
                orderId: eR
            });
        },
        ek = {
            baseAnalyticsData: k,
            flowStartTime: j,
            makePurchase: ex,
            onNext: s,
            onPurchaseError: x,
            paymentSource: eO,
            paymentSourceId: Q,
            purchaseTokenAuthState: B,
            setPurchaseState: n
        },
        ej = i.useRef(ek);
    (i.useEffect(() => {
        ej.current = ek;
    }),
        i.useEffect(() => {
            let { makePurchase: e } = ej.current;
            eb && !el && null == t && e();
        }, [eb, el, t]));
    let eM = null != Z || (X === C.GZQ.ONE_TIME && !el);
    return eb
        ? null
        : (0, r.jsxs)(u.mzw, {
              'data-migration-pending': !0,
              align: f.Z.Align.CENTER,
              className: o()(es, w.modalFooter),
              children: [
                  (0, r.jsx)(g.Z, {
                      legalTermsNodeRef: R,
                      invoiceError: D,
                      planError: L,
                      disablePurchase: H,
                      flashLegalTerms: P,
                      isSubmitting: ev,
                      premiumSubscription: t,
                      isGift: el,
                      planGroup: U,
                      isPrepaid: eN,
                      isTrial: Y,
                      makePurchase: ex,
                      needsPaymentSource: null == eO && !eC,
                      onNext: s,
                      inReverseTrial: eo,
                      onPaymentSourceAdd: W
                  }),
                  (0, r.jsx)(N.Z, {}),
                  V && !eM
                      ? (0, r.jsx)('div', {
                            className: w.back,
                            children: (0, r.jsx)(h.Z, { onClick: a })
                        })
                      : null
              ]
          });
}
