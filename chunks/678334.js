n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(481060),
    l = n(906732),
    c = n(600164),
    u = n(717401),
    d = n(160913),
    f = n(311821),
    p = n(459965),
    _ = n(858987),
    h = n(855775),
    m = n(669079),
    g = n(74538),
    E = n(987209),
    v = n(563132),
    b = n(632580),
    y = n(919778),
    O = n(612853),
    S = n(981631),
    I = n(379573);
function T(e) {
    let { premiumSubscription: t, setPurchaseState: n, onBack: o, onNext: T, legalTermsNodeRef: N, flashLegalTerms: A, invoiceError: C, planError: R, onPurchaseError: P, baseAnalyticsData: w, flowStartTime: D, trialId: x, planGroup: L, analyticsLocation: M, purchaseTokenAuthState: k, openInvoiceId: j, metadata: U, backButtonEligible: G, disablePurchase: B, isTrial: Z = !1 } = e,
        { selectedPlan: F, priceOptions: V, setHasAcceptedTerms: H, setPurchaseError: W, purchaseType: Y, paymentSourceId: K, paymentSources: z, selectedSkuId: q, skusById: Q, skuPricePreviewsById: X, referralCode: J, contextMetadata: $, invoicePreview: ee, inReverseTrial: et } = (0, v.JL)(),
        { isGift: en, selectedGiftStyle: er, customGiftMessage: ei, emojiConfetti: eo, soundEffect: ea, giftRecipient: es, selectedGiftingPromotionReward: el } = (0, E.wD)(),
        ec = (0, u.a5)(F),
        eu = (0, m.MY)(es),
        ed = {};
    (ed.gift_style = er), (ed.reward_sku_ids = ec && (null == el ? void 0 : el.skuId) != null ? [null == el ? void 0 : el.skuId] : []), eu === m.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (a()(null != es, 'Gift recipient must be set at purchase review step for these gift options.'), (ed.recipient_id = es.id), (ed.custom_message = ei), (ed.emoji_id = null == eo ? void 0 : eo.id), (ed.emoji_name = (null == eo ? void 0 : eo.id) == null ? (null == eo ? void 0 : eo.surrogates) : void 0), (ed.sound_id = null == ea ? void 0 : ea.soundId));
    let ef = null == F ? void 0 : F.id,
        ep = (0, y.sE)(x, V.paymentSourceId, ef),
        { analyticsLocations: e_ } = (0, l.ZP)(),
        eh = null != K ? z[K] : null,
        [em, eg] = i.useState(ep),
        [eE, ev] = i.useState(!1),
        { hasEntitlements: eb } = (0, p.H)(ef, en),
        ey = (0, g.Ap)(V.paymentSourceId),
        eO = eb || ep,
        eS = (0, d.U)(),
        eI = null,
        eT = null;
    if (Y === S.GZQ.ONE_TIME) {
        var eN;
        a()(null != q, 'SKU must be selected for one-time purchases'), (eI = null !== (eN = Q[q]) && void 0 !== eN ? eN : null), a()(null != eI, 'SKU must exist and be fetched.');
        let e = X[q],
            t = null != K ? K : h.c;
        eT = null != e ? e[t] : null;
    }
    let eA = async () => {
            await (0, b.H)({
                setPurchaseState: n,
                setHasAcceptedTerms: H,
                setIsSubmitting: eg,
                setPurchaseError: W,
                hasRedirectURL: eE,
                setHasRedirectURL: ev,
                isGift: en,
                baseAnalyticsData: w,
                analyticsLocation: M,
                analyticsLocations: e_,
                flowStartTime: D,
                subscriptionPlan: F,
                planGroup: L,
                trialId: x,
                priceOptions: V,
                paymentSource: eh,
                isPrepaidPaymentPastDue: eS,
                openInvoiceId: j,
                premiumSubscription: t,
                onNext: T,
                metadata: U,
                sku: eI,
                skuPricePreview: eT,
                purchaseType: Y,
                referralCode: J,
                loadId: $.loadId,
                giftInfoOptions: ed,
                invoicePreview: ee
            });
        },
        eC = {
            baseAnalyticsData: w,
            flowStartTime: D,
            makePurchase: eA,
            onNext: T,
            onPurchaseError: P,
            paymentSource: eh,
            paymentSourceId: K,
            purchaseTokenAuthState: k,
            setPurchaseState: n
        },
        eR = i.useRef(eC);
    i.useEffect(() => {
        eR.current = eC;
    }),
        i.useEffect(() => {
            let { makePurchase: e } = eR.current;
            ep && !en && null == t && e();
        }, [ep, en, t]);
    let eP = null != j || (Y === S.GZQ.ONE_TIME && !en);
    return ep
        ? null
        : (0, r.jsxs)(s.mzw, {
              align: c.Z.Align.CENTER,
              children: [
                  (0, r.jsx)(_.Z, {
                      legalTermsNodeRef: N,
                      invoiceError: C,
                      planError: R,
                      disablePurchase: B,
                      flashLegalTerms: A,
                      isSubmitting: em,
                      premiumSubscription: t,
                      isGift: en,
                      planGroup: L,
                      isPrepaid: ey,
                      isTrial: Z,
                      makePurchase: eA,
                      needsPaymentSource: null == eh && !eO,
                      onNext: T,
                      inReverseTrial: et
                  }),
                  (0, r.jsx)(O.Z, {}),
                  G && !eP
                      ? (0, r.jsx)('div', {
                            className: I.back,
                            children: (0, r.jsx)(f.Z, { onClick: o })
                        })
                      : null
              ]
          });
}
