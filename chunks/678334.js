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
    T = n(981631),
    S = n(843856);
function A(e) {
    let { premiumSubscription: t, setPurchaseState: n, onBack: a, onNext: A, legalTermsNodeRef: N, flashLegalTerms: C, invoiceError: R, planError: P, onPurchaseError: w, baseAnalyticsData: D, flowStartTime: L, trialId: x, planGroup: k, analyticsLocation: M, purchaseTokenAuthState: j, openInvoiceId: U, metadata: G, backButtonEligible: B, disablePurchase: V, isTrial: F = !1, onPaymentSourceAdd: Z } = e,
        { selectedPlan: H, priceOptions: Y, setHasAcceptedTerms: W, setPurchaseError: K, purchaseType: z, paymentSourceId: q, paymentSources: X, selectedSkuId: Q, skusById: J, skuPricePreviewsById: $, referralCode: ee, contextMetadata: et, invoicePreview: en, inReverseTrial: er, premiumBrandRefreshBackgroundClassName: ei } = (0, b.JL)(),
        { isGift: ea, selectedGiftStyle: eo, customGiftMessage: es, emojiConfetti: el, soundEffect: ec, giftRecipient: eu, selectedGiftingPromotionReward: ed } = (0, E.wD)(),
        ef = (0, u.a5)(H),
        e_ = (0, m.MY)(eu),
        ep = {};
    (ep.gift_style = eo), (ep.reward_sku_ids = ef && (null == ed ? void 0 : ed.skuId) != null ? [null == ed ? void 0 : ed.skuId] : []), e_ === m.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (o()(null != eu, 'Gift recipient must be set at purchase review step for these gift options.'), (ep.recipient_id = eu.id), (ep.custom_message = es), (ep.emoji_id = null == el ? void 0 : el.id), (ep.emoji_name = (null == el ? void 0 : el.id) == null ? (null == el ? void 0 : el.surrogates) : void 0), (ep.sound_id = null == ec ? void 0 : ec.soundId));
    let eh = null == H ? void 0 : H.id,
        em = (0, O.sE)(x, Y.paymentSourceId, eh),
        { analyticsLocations: eg } = (0, l.ZP)(),
        eE = (0, v.m)(X, q),
        [eb, ey] = i.useState(em),
        [eO, ev] = i.useState(!1),
        { hasEntitlements: eI } = (0, _.H)(eh, ea),
        eT = (0, g.Ap)(Y.paymentSourceId),
        eS = eI || em,
        eA = (0, d.U)(),
        eN = null,
        eC = null;
    if (z === T.GZQ.ONE_TIME) {
        var eR;
        o()(null != Q, 'SKU must be selected for one-time purchases'), (eN = null != (eR = J[Q]) ? eR : null), o()(null != eN, 'SKU must exist and be fetched.');
        let e = $[Q],
            t = null != q ? q : h.c;
        eC = null != e ? e[t] : null;
    }
    let eP = async () => {
            await (0, y.H)({
                setPurchaseState: n,
                setHasAcceptedTerms: W,
                setIsSubmitting: ey,
                setPurchaseError: K,
                hasRedirectURL: eO,
                setHasRedirectURL: ev,
                isGift: ea,
                baseAnalyticsData: D,
                analyticsLocation: M,
                analyticsLocations: eg,
                flowStartTime: L,
                subscriptionPlan: H,
                planGroup: k,
                trialId: x,
                priceOptions: Y,
                paymentSource: eE,
                isPrepaidPaymentPastDue: eA,
                openInvoiceId: U,
                premiumSubscription: t,
                onNext: A,
                metadata: G,
                sku: eN,
                skuPricePreview: eC,
                purchaseType: z,
                referralCode: ee,
                loadId: et.loadId,
                giftInfoOptions: ep,
                invoicePreview: en
            });
        },
        ew = {
            baseAnalyticsData: D,
            flowStartTime: L,
            makePurchase: eP,
            onNext: A,
            onPurchaseError: w,
            paymentSource: eE,
            paymentSourceId: q,
            purchaseTokenAuthState: j,
            setPurchaseState: n
        },
        eD = i.useRef(ew);
    i.useEffect(() => {
        eD.current = ew;
    }),
        i.useEffect(() => {
            let { makePurchase: e } = eD.current;
            em && !ea && null == t && e();
        }, [em, ea, t]);
    let eL = null != U || (z === T.GZQ.ONE_TIME && !ea);
    return em
        ? null
        : (0, r.jsxs)(s.mzw, {
              align: c.Z.Align.CENTER,
              className: ei,
              children: [
                  (0, r.jsx)(p.Z, {
                      legalTermsNodeRef: N,
                      invoiceError: R,
                      planError: P,
                      disablePurchase: V,
                      flashLegalTerms: C,
                      isSubmitting: eb,
                      premiumSubscription: t,
                      isGift: ea,
                      planGroup: k,
                      isPrepaid: eT,
                      isTrial: F,
                      makePurchase: eP,
                      needsPaymentSource: null == eE && !eS,
                      onNext: A,
                      inReverseTrial: er,
                      onPaymentSourceAdd: Z
                  }),
                  (0, r.jsx)(I.Z, {}),
                  B && !eL
                      ? (0, r.jsx)('div', {
                            className: S.back,
                            children: (0, r.jsx)(f.Z, { onClick: a })
                        })
                      : null
              ]
          });
}
