n.d(t, { Z: () => A }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(481060),
    l = n(906732),
    u = n(600164),
    c = n(717401),
    d = n(160913),
    f = n(311821),
    _ = n(459965),
    p = n(858987),
    h = n(855775),
    m = n(669079),
    g = n(74538),
    E = n(987209),
    v = n(563132),
    y = n(632580),
    I = n(919778),
    T = n(612853),
    b = n(981631),
    S = n(374172);
function A(e) {
    let { premiumSubscription: t, setPurchaseState: n, onBack: a, onNext: A, legalTermsNodeRef: N, flashLegalTerms: C, invoiceError: R, planError: O, onPurchaseError: D, baseAnalyticsData: x, flowStartTime: L, trialId: P, planGroup: w, analyticsLocation: M, purchaseTokenAuthState: k, openInvoiceId: U, metadata: G, backButtonEligible: B, disablePurchase: Z, isTrial: F = !1 } = e,
        { selectedPlan: V, priceOptions: j, setHasAcceptedTerms: H, setPurchaseError: Y, purchaseType: W, paymentSourceId: K, paymentSources: z, selectedSkuId: q, skusById: Q, skuPricePreviewsById: X, referralCode: J, contextMetadata: $, invoicePreview: ee, inReverseTrial: et } = (0, v.JL)(),
        { isGift: en, selectedGiftStyle: ei, customGiftMessage: er, emojiConfetti: ea, soundEffect: es, giftRecipient: eo, selectedGiftingPromotionReward: el } = (0, E.wD)(),
        eu = (0, c.a5)(V),
        ec = (0, m.MY)(eo),
        ed = {};
    (ed.gift_style = ei), (ed.reward_sku_ids = eu && (null == el ? void 0 : el.skuId) != null ? [null == el ? void 0 : el.skuId] : []), ec === m.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (s()(null != eo, 'Gift recipient must be set at purchase review step for these gift options.'), (ed.recipient_id = eo.id), (ed.custom_message = er), (ed.emoji_id = null == ea ? void 0 : ea.id), (ed.emoji_name = (null == ea ? void 0 : ea.id) == null ? (null == ea ? void 0 : ea.surrogates) : void 0), (ed.sound_id = null == es ? void 0 : es.soundId));
    let ef = null == V ? void 0 : V.id,
        e_ = (0, I.sE)(P, j.paymentSourceId, ef),
        { analyticsLocations: ep } = (0, l.ZP)(),
        eh = null != K ? z[K] : null,
        [em, eg] = r.useState(e_),
        [eE, ev] = r.useState(!1),
        { hasEntitlements: ey } = (0, _.H)(ef, en),
        eI = (0, g.Ap)(j.paymentSourceId),
        eT = ey || e_,
        eb = (0, d.U)(),
        eS = null,
        eA = null;
    if (W === b.GZQ.ONE_TIME) {
        var eN;
        s()(null != q, 'SKU must be selected for one-time purchases'), (eS = null !== (eN = Q[q]) && void 0 !== eN ? eN : null), s()(null != eS, 'SKU must exist and be fetched.');
        let e = X[q],
            t = null != K ? K : h.c;
        eA = null != e ? e[t] : null;
    }
    let eC = async () => {
            await (0, y.H)({
                setPurchaseState: n,
                setHasAcceptedTerms: H,
                setIsSubmitting: eg,
                setPurchaseError: Y,
                hasRedirectURL: eE,
                setHasRedirectURL: ev,
                isGift: en,
                baseAnalyticsData: x,
                analyticsLocation: M,
                analyticsLocations: ep,
                flowStartTime: L,
                subscriptionPlan: V,
                planGroup: w,
                trialId: P,
                priceOptions: j,
                paymentSource: eh,
                isPrepaidPaymentPastDue: eb,
                openInvoiceId: U,
                premiumSubscription: t,
                onNext: A,
                metadata: G,
                sku: eS,
                skuPricePreview: eA,
                purchaseType: W,
                referralCode: J,
                loadId: $.loadId,
                giftInfoOptions: ed,
                invoicePreview: ee
            });
        },
        eR = {
            baseAnalyticsData: x,
            flowStartTime: L,
            makePurchase: eC,
            onNext: A,
            onPurchaseError: D,
            paymentSource: eh,
            paymentSourceId: K,
            purchaseTokenAuthState: k,
            setPurchaseState: n
        },
        eO = r.useRef(eR);
    r.useEffect(() => {
        eO.current = eR;
    }),
        r.useEffect(() => {
            let { makePurchase: e } = eO.current;
            e_ && !en && null == t && e();
        }, [e_, en, t]);
    let eD = null != U || (W === b.GZQ.ONE_TIME && !en);
    return e_
        ? null
        : (0, i.jsxs)(o.mzw, {
              align: u.Z.Align.CENTER,
              children: [
                  (0, i.jsx)(p.Z, {
                      legalTermsNodeRef: N,
                      invoiceError: R,
                      planError: O,
                      disablePurchase: Z,
                      flashLegalTerms: C,
                      isSubmitting: em,
                      premiumSubscription: t,
                      isGift: en,
                      planGroup: w,
                      isPrepaid: eI,
                      isTrial: F,
                      makePurchase: eC,
                      needsPaymentSource: null == eh && !eT,
                      onNext: A,
                      inReverseTrial: et
                  }),
                  (0, i.jsx)(T.Z, {}),
                  B && !eD
                      ? (0, i.jsx)('div', {
                            className: S.back,
                            children: (0, i.jsx)(f.Z, { onClick: a })
                        })
                      : null
              ]
          });
}
