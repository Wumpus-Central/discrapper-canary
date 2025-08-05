(n.d(t, { Z: () => P }), n(388685));
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
    R = n(843856);
function P(e) {
    let { premiumSubscription: t, setPurchaseState: n, onBack: a, onNext: s, legalTermsNodeRef: P, flashLegalTerms: w, invoiceError: D, planError: L, onPurchaseError: x, baseAnalyticsData: M, flowStartTime: k, trialId: j, planGroup: U, analyticsLocation: G, purchaseTokenAuthState: B, openInvoiceId: V, metadata: F, backButtonEligible: Z, disablePurchase: H, isTrial: Y = !1, onPaymentSourceAdd: W } = e,
        { selectedPlan: K, priceOptions: z, setHasAcceptedTerms: q, setPurchaseError: X, purchaseType: Q, paymentSourceId: J, paymentSources: $, selectedSkuId: ee, skusById: et, skuPricePreviewsById: en, referralCode: er, contextMetadata: ei, invoicePreview: ea, inReverseTrial: eo, premiumBrandRefreshBackgroundClassName: es } = (0, v.JL)(),
        { isGift: el, selectedGiftStyle: ec, customGiftMessage: eu, emojiConfetti: ed, soundEffect: ef, giftRecipient: e_, selectedGiftingPromotionReward: ep } = (0, O.wD)(),
        eh = (0, _.a5)(K),
        em = (0, b.MY)(e_),
        eg = {};
    ((eg.gift_style = ec), (eg.reward_sku_ids = eh && (null == ep ? void 0 : ep.skuId) != null ? [null == ep ? void 0 : ep.skuId] : []), em === b.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (l()(null != e_, 'Gift recipient must be set at purchase review step for these gift options.'), (eg.recipient_id = e_.id), (eg.custom_message = eu), (eg.emoji_id = null == ed ? void 0 : ed.id), (eg.emoji_name = (null == ed ? void 0 : ed.id) == null ? (null == ed ? void 0 : ed.surrogates) : void 0), (eg.sound_id = null == ef ? void 0 : ef.soundId)));
    let eE = null == K ? void 0 : K.id,
        eb = (0, T.sE)(j, z.paymentSourceId, eE),
        { analyticsLocations: ey } = (0, d.ZP)(),
        eO = (0, A.m)($, J),
        [ev, eI] = i.useState(eb),
        [eT, eS] = i.useState(!1),
        { hasEntitlements: eA } = (0, m.H)(eE, el),
        eN = (0, y.Ap)(z.paymentSourceId),
        eC = eA || eb,
        eR = (0, p.U)(),
        eP = (0, c.e7)([S.Z], () => S.Z.currentOrderId),
        ew = null,
        eD = null;
    if (Q === C.GZQ.ONE_TIME) {
        var eL;
        (l()(null != ee, 'SKU must be selected for one-time purchases'), (ew = null != (eL = et[ee]) ? eL : null), l()(null != ew, 'SKU must exist and be fetched.'));
        let e = en[ee],
            t = null != J ? J : E.c;
        eD = null != e ? e[t] : null;
    }
    let ex = async () => {
            await (0, I.H)({
                setPurchaseState: n,
                setHasAcceptedTerms: q,
                setIsSubmitting: eI,
                setPurchaseError: X,
                hasRedirectURL: eT,
                setHasRedirectURL: eS,
                isGift: el,
                baseAnalyticsData: M,
                analyticsLocation: G,
                analyticsLocations: ey,
                flowStartTime: k,
                subscriptionPlan: K,
                planGroup: U,
                trialId: j,
                priceOptions: z,
                paymentSource: eO,
                isPrepaidPaymentPastDue: eR,
                openInvoiceId: V,
                premiumSubscription: t,
                onNext: s,
                metadata: F,
                sku: ew,
                skuPricePreview: eD,
                purchaseType: Q,
                referralCode: er,
                loadId: ei.loadId,
                giftInfoOptions: eg,
                invoicePreview: ea,
                orderId: eP
            });
        },
        eM = {
            baseAnalyticsData: M,
            flowStartTime: k,
            makePurchase: ex,
            onNext: s,
            onPurchaseError: x,
            paymentSource: eO,
            paymentSourceId: J,
            purchaseTokenAuthState: B,
            setPurchaseState: n
        },
        ek = i.useRef(eM);
    (i.useEffect(() => {
        ek.current = eM;
    }),
        i.useEffect(() => {
            let { makePurchase: e } = ek.current;
            eb && !el && null == t && e();
        }, [eb, el, t]));
    let ej = null != V || (Q === C.GZQ.ONE_TIME && !el);
    return eb
        ? null
        : (0, r.jsxs)(u.mzw, {
              align: f.Z.Align.CENTER,
              className: o()(es, R.modalFooter),
              children: [
                  (0, r.jsx)(g.Z, {
                      legalTermsNodeRef: P,
                      invoiceError: D,
                      planError: L,
                      disablePurchase: H,
                      flashLegalTerms: w,
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
                  Z && !ej
                      ? (0, r.jsx)('div', {
                            className: R.back,
                            children: (0, r.jsx)(h.Z, { onClick: a })
                        })
                      : null
              ]
          });
}
