(n.d(t, { Z: () => C }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(906732),
    u = n(600164),
    d = n(717401),
    _ = n(160913),
    f = n(311821),
    p = n(459965),
    h = n(858987),
    m = n(855775),
    g = n(669079),
    E = n(74538),
    b = n(987209),
    y = n(563132),
    O = n(632580),
    v = n(919778),
    I = n(877820),
    T = n(435020),
    S = n(612853),
    A = n(981631),
    N = n(843856);
function C(e) {
    let { premiumSubscription: t, setPurchaseState: n, onBack: a, onNext: C, legalTermsNodeRef: R, flashLegalTerms: P, invoiceError: w, planError: D, onPurchaseError: L, baseAnalyticsData: x, flowStartTime: M, trialId: k, planGroup: j, analyticsLocation: U, purchaseTokenAuthState: G, openInvoiceId: B, metadata: V, backButtonEligible: F, disablePurchase: Z, isTrial: H = !1, onPaymentSourceAdd: Y } = e,
        { selectedPlan: W, priceOptions: K, setHasAcceptedTerms: z, setPurchaseError: q, purchaseType: X, paymentSourceId: Q, paymentSources: J, selectedSkuId: $, skusById: ee, skuPricePreviewsById: et, referralCode: en, contextMetadata: er, invoicePreview: ei, inReverseTrial: ea, premiumBrandRefreshBackgroundClassName: eo } = (0, y.JL)(),
        { isGift: es, selectedGiftStyle: el, customGiftMessage: ec, emojiConfetti: eu, soundEffect: ed, giftRecipient: e_, selectedGiftingPromotionReward: ef } = (0, b.wD)(),
        ep = (0, d.a5)(W),
        eh = (0, g.MY)(e_),
        em = {};
    ((em.gift_style = el), (em.reward_sku_ids = ep && (null == ef ? void 0 : ef.skuId) != null ? [null == ef ? void 0 : ef.skuId] : []), eh === g.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (o()(null != e_, 'Gift recipient must be set at purchase review step for these gift options.'), (em.recipient_id = e_.id), (em.custom_message = ec), (em.emoji_id = null == eu ? void 0 : eu.id), (em.emoji_name = (null == eu ? void 0 : eu.id) == null ? (null == eu ? void 0 : eu.surrogates) : void 0), (em.sound_id = null == ed ? void 0 : ed.soundId)));
    let eg = null == W ? void 0 : W.id,
        eE = (0, v.sE)(k, K.paymentSourceId, eg),
        { analyticsLocations: eb } = (0, c.ZP)(),
        ey = (0, T.m)(J, Q),
        [eO, ev] = i.useState(eE),
        [eI, eT] = i.useState(!1),
        { hasEntitlements: eS } = (0, p.H)(eg, es),
        eA = (0, E.Ap)(K.paymentSourceId),
        eN = eS || eE,
        eC = (0, _.U)(),
        eR = (0, s.e7)([I.Z], () => I.Z.currentOrderId),
        eP = null,
        ew = null;
    if (X === A.GZQ.ONE_TIME) {
        var eD;
        (o()(null != $, 'SKU must be selected for one-time purchases'), (eP = null != (eD = ee[$]) ? eD : null), o()(null != eP, 'SKU must exist and be fetched.'));
        let e = et[$],
            t = null != Q ? Q : m.c;
        ew = null != e ? e[t] : null;
    }
    let eL = async () => {
            await (0, O.H)({
                setPurchaseState: n,
                setHasAcceptedTerms: z,
                setIsSubmitting: ev,
                setPurchaseError: q,
                hasRedirectURL: eI,
                setHasRedirectURL: eT,
                isGift: es,
                baseAnalyticsData: x,
                analyticsLocation: U,
                analyticsLocations: eb,
                flowStartTime: M,
                subscriptionPlan: W,
                planGroup: j,
                trialId: k,
                priceOptions: K,
                paymentSource: ey,
                isPrepaidPaymentPastDue: eC,
                openInvoiceId: B,
                premiumSubscription: t,
                onNext: C,
                metadata: V,
                sku: eP,
                skuPricePreview: ew,
                purchaseType: X,
                referralCode: en,
                loadId: er.loadId,
                giftInfoOptions: em,
                invoicePreview: ei,
                orderId: eR
            });
        },
        ex = {
            baseAnalyticsData: x,
            flowStartTime: M,
            makePurchase: eL,
            onNext: C,
            onPurchaseError: L,
            paymentSource: ey,
            paymentSourceId: Q,
            purchaseTokenAuthState: G,
            setPurchaseState: n
        },
        eM = i.useRef(ex);
    (i.useEffect(() => {
        eM.current = ex;
    }),
        i.useEffect(() => {
            let { makePurchase: e } = eM.current;
            eE && !es && null == t && e();
        }, [eE, es, t]));
    let ek = null != B || (X === A.GZQ.ONE_TIME && !es);
    return eE
        ? null
        : (0, r.jsxs)(l.mzw, {
              align: u.Z.Align.CENTER,
              className: eo,
              children: [
                  (0, r.jsx)(h.Z, {
                      legalTermsNodeRef: R,
                      invoiceError: w,
                      planError: D,
                      disablePurchase: Z,
                      flashLegalTerms: P,
                      isSubmitting: eO,
                      premiumSubscription: t,
                      isGift: es,
                      planGroup: j,
                      isPrepaid: eA,
                      isTrial: H,
                      makePurchase: eL,
                      needsPaymentSource: null == ey && !eN,
                      onNext: C,
                      inReverseTrial: ea,
                      onPaymentSourceAdd: Y
                  }),
                  (0, r.jsx)(S.Z, {}),
                  F && !ek
                      ? (0, r.jsx)('div', {
                            className: N.back,
                            children: (0, r.jsx)(f.Z, { onClick: a })
                        })
                      : null
              ]
          });
}
