n.d(t, { Z: () => A }), n(388685);
var r = n(200651),
    i = n(192379),
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
    v = n(919778),
    O = n(435020),
    I = n(612853),
    S = n(981631),
    T = n(843856);
function A(e) {
    let { premiumSubscription: t, setPurchaseState: n, onBack: a, onNext: A, legalTermsNodeRef: N, flashLegalTerms: C, invoiceError: R, planError: P, onPurchaseError: w, baseAnalyticsData: D, flowStartTime: L, trialId: x, planGroup: M, analyticsLocation: k, purchaseTokenAuthState: j, openInvoiceId: U, metadata: G, backButtonEligible: B, disablePurchase: F, isTrial: V = !1 } = e,
        { selectedPlan: Z, priceOptions: H, setHasAcceptedTerms: Y, setPurchaseError: W, purchaseType: K, paymentSourceId: z, paymentSources: q, selectedSkuId: Q, skusById: X, skuPricePreviewsById: J, referralCode: $, contextMetadata: ee, invoicePreview: et, inReverseTrial: en } = (0, b.JL)(),
        { isGift: er, selectedGiftStyle: ei, customGiftMessage: ea, emojiConfetti: eo, soundEffect: es, giftRecipient: el, selectedGiftingPromotionReward: ec } = (0, E.wD)(),
        eu = (0, u.a5)(Z),
        ed = (0, m.MY)(el),
        ef = {};
    (ef.gift_style = ei), (ef.reward_sku_ids = eu && (null == ec ? void 0 : ec.skuId) != null ? [null == ec ? void 0 : ec.skuId] : []), ed === m.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (o()(null != el, 'Gift recipient must be set at purchase review step for these gift options.'), (ef.recipient_id = el.id), (ef.custom_message = ea), (ef.emoji_id = null == eo ? void 0 : eo.id), (ef.emoji_name = (null == eo ? void 0 : eo.id) == null ? (null == eo ? void 0 : eo.surrogates) : void 0), (ef.sound_id = null == es ? void 0 : es.soundId));
    let e_ = null == Z ? void 0 : Z.id,
        ep = (0, v.sE)(x, H.paymentSourceId, e_),
        { analyticsLocations: eh } = (0, l.ZP)(),
        em = (0, O.m)(q, z),
        [eg, eE] = i.useState(ep),
        [eb, ey] = i.useState(!1),
        { hasEntitlements: ev } = (0, _.H)(e_, er),
        eO = (0, g.Ap)(H.paymentSourceId),
        eI = ev || ep,
        eS = (0, d.U)(),
        eT = null,
        eA = null;
    if (K === S.GZQ.ONE_TIME) {
        var eN;
        o()(null != Q, 'SKU must be selected for one-time purchases'), (eT = null != (eN = X[Q]) ? eN : null), o()(null != eT, 'SKU must exist and be fetched.');
        let e = J[Q],
            t = null != z ? z : h.c;
        eA = null != e ? e[t] : null;
    }
    let eC = async () => {
            await (0, y.H)({
                setPurchaseState: n,
                setHasAcceptedTerms: Y,
                setIsSubmitting: eE,
                setPurchaseError: W,
                hasRedirectURL: eb,
                setHasRedirectURL: ey,
                isGift: er,
                baseAnalyticsData: D,
                analyticsLocation: k,
                analyticsLocations: eh,
                flowStartTime: L,
                subscriptionPlan: Z,
                planGroup: M,
                trialId: x,
                priceOptions: H,
                paymentSource: em,
                isPrepaidPaymentPastDue: eS,
                openInvoiceId: U,
                premiumSubscription: t,
                onNext: A,
                metadata: G,
                sku: eT,
                skuPricePreview: eA,
                purchaseType: K,
                referralCode: $,
                loadId: ee.loadId,
                giftInfoOptions: ef,
                invoicePreview: et
            });
        },
        eR = {
            baseAnalyticsData: D,
            flowStartTime: L,
            makePurchase: eC,
            onNext: A,
            onPurchaseError: w,
            paymentSource: em,
            paymentSourceId: z,
            purchaseTokenAuthState: j,
            setPurchaseState: n
        },
        eP = i.useRef(eR);
    i.useEffect(() => {
        eP.current = eR;
    }),
        i.useEffect(() => {
            let { makePurchase: e } = eP.current;
            ep && !er && null == t && e();
        }, [ep, er, t]);
    let ew = null != U || (K === S.GZQ.ONE_TIME && !er);
    return ep
        ? null
        : (0, r.jsxs)(s.mzw, {
              align: c.Z.Align.CENTER,
              children: [
                  (0, r.jsx)(p.Z, {
                      legalTermsNodeRef: N,
                      invoiceError: R,
                      planError: P,
                      disablePurchase: F,
                      flashLegalTerms: C,
                      isSubmitting: eg,
                      premiumSubscription: t,
                      isGift: er,
                      planGroup: M,
                      isPrepaid: eO,
                      isTrial: V,
                      makePurchase: eC,
                      needsPaymentSource: null == em && !eI,
                      onNext: A,
                      inReverseTrial: en
                  }),
                  (0, r.jsx)(I.Z, {}),
                  B && !ew
                      ? (0, r.jsx)('div', {
                            className: T.back,
                            children: (0, r.jsx)(f.Z, { onClick: a })
                        })
                      : null
              ]
          });
}
