n.d(t, { Z: () => A }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(906732),
    c = n(600164),
    u = n(717401),
    d = n(160913),
    f = n(311821),
    _ = n(459965),
    p = n(858987),
    h = n(855775),
    m = n(669079),
    g = n(74538),
    E = n(987209),
    b = n(563132),
    y = n(632580),
    O = n(919778),
    v = n(435020),
    I = n(612853),
    S = n(981631),
    T = n(843856);
function A(e) {
    let { premiumSubscription: t, setPurchaseState: n, onBack: a, onNext: A, legalTermsNodeRef: N, flashLegalTerms: C, invoiceError: R, planError: P, onPurchaseError: w, baseAnalyticsData: D, flowStartTime: L, trialId: x, planGroup: M, analyticsLocation: k, purchaseTokenAuthState: j, openInvoiceId: U, metadata: G, backButtonEligible: B, disablePurchase: V, isTrial: F = !1, onPaymentSourceAdd: Z } = e,
        { selectedPlan: H, priceOptions: Y, setHasAcceptedTerms: W, setPurchaseError: K, purchaseType: z, paymentSourceId: q, paymentSources: Q, selectedSkuId: X, skusById: J, skuPricePreviewsById: $, referralCode: ee, contextMetadata: et, invoicePreview: en, inReverseTrial: er } = (0, b.JL)(),
        { isGift: ei, selectedGiftStyle: ea, customGiftMessage: eo, emojiConfetti: es, soundEffect: el, giftRecipient: ec, selectedGiftingPromotionReward: eu } = (0, E.wD)(),
        ed = (0, u.a5)(H),
        ef = (0, m.MY)(ec),
        e_ = {};
    (e_.gift_style = ea), (e_.reward_sku_ids = ed && (null == eu ? void 0 : eu.skuId) != null ? [null == eu ? void 0 : eu.skuId] : []), ef === m.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (o()(null != ec, 'Gift recipient must be set at purchase review step for these gift options.'), (e_.recipient_id = ec.id), (e_.custom_message = eo), (e_.emoji_id = null == es ? void 0 : es.id), (e_.emoji_name = (null == es ? void 0 : es.id) == null ? (null == es ? void 0 : es.surrogates) : void 0), (e_.sound_id = null == el ? void 0 : el.soundId));
    let ep = null == H ? void 0 : H.id,
        eh = (0, O.sE)(x, Y.paymentSourceId, ep),
        { analyticsLocations: em } = (0, l.ZP)(),
        eg = (0, v.m)(Q, q),
        [eE, eb] = i.useState(eh),
        [ey, eO] = i.useState(!1),
        { hasEntitlements: ev } = (0, _.H)(ep, ei),
        eI = (0, g.Ap)(Y.paymentSourceId),
        eS = ev || eh,
        eT = (0, d.U)(),
        eA = null,
        eN = null;
    if (z === S.GZQ.ONE_TIME) {
        var eC;
        o()(null != X, 'SKU must be selected for one-time purchases'), (eA = null != (eC = J[X]) ? eC : null), o()(null != eA, 'SKU must exist and be fetched.');
        let e = $[X],
            t = null != q ? q : h.c;
        eN = null != e ? e[t] : null;
    }
    let eR = async () => {
            await (0, y.H)({
                setPurchaseState: n,
                setHasAcceptedTerms: W,
                setIsSubmitting: eb,
                setPurchaseError: K,
                hasRedirectURL: ey,
                setHasRedirectURL: eO,
                isGift: ei,
                baseAnalyticsData: D,
                analyticsLocation: k,
                analyticsLocations: em,
                flowStartTime: L,
                subscriptionPlan: H,
                planGroup: M,
                trialId: x,
                priceOptions: Y,
                paymentSource: eg,
                isPrepaidPaymentPastDue: eT,
                openInvoiceId: U,
                premiumSubscription: t,
                onNext: A,
                metadata: G,
                sku: eA,
                skuPricePreview: eN,
                purchaseType: z,
                referralCode: ee,
                loadId: et.loadId,
                giftInfoOptions: e_,
                invoicePreview: en
            });
        },
        eP = {
            baseAnalyticsData: D,
            flowStartTime: L,
            makePurchase: eR,
            onNext: A,
            onPurchaseError: w,
            paymentSource: eg,
            paymentSourceId: q,
            purchaseTokenAuthState: j,
            setPurchaseState: n
        },
        ew = i.useRef(eP);
    i.useEffect(() => {
        ew.current = eP;
    }),
        i.useEffect(() => {
            let { makePurchase: e } = ew.current;
            eh && !ei && null == t && e();
        }, [eh, ei, t]);
    let eD = null != U || (z === S.GZQ.ONE_TIME && !ei);
    return eh
        ? null
        : (0, r.jsxs)(s.mzw, {
              align: c.Z.Align.CENTER,
              children: [
                  (0, r.jsx)(p.Z, {
                      legalTermsNodeRef: N,
                      invoiceError: R,
                      planError: P,
                      disablePurchase: V,
                      flashLegalTerms: C,
                      isSubmitting: eE,
                      premiumSubscription: t,
                      isGift: ei,
                      planGroup: M,
                      isPrepaid: eI,
                      isTrial: F,
                      makePurchase: eR,
                      needsPaymentSource: null == eg && !eS,
                      onNext: A,
                      inReverseTrial: er,
                      onPaymentSourceAdd: Z
                  }),
                  (0, r.jsx)(I.Z, {}),
                  B && !eD
                      ? (0, r.jsx)('div', {
                            className: T.back,
                            children: (0, r.jsx)(f.Z, { onClick: a })
                        })
                      : null
              ]
          });
}
