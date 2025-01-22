r.d(n, {
    Z: function () {
        return w;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(512722),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(355467),
    f = r(906732),
    p = r(600164),
    h = r(717401),
    _ = r(160913),
    m = r(311821),
    g = r(459965),
    E = r(858987),
    v = r(975060),
    y = r(882712),
    b = r(855775),
    I = r(626135),
    T = r(669079),
    S = r(74538),
    A = r(987209),
    C = r(563132),
    N = r(632580),
    R = r(45572),
    O = r(919778),
    D = r(612853),
    L = r(981631),
    x = r(374172);
function w(e) {
    let { premiumSubscription: n, setPurchaseState: r, onBack: i, onNext: s, legalTermsNodeRef: w, flashLegalTerms: P, invoiceError: M, planError: k, onPurchaseError: U, baseAnalyticsData: B, flowStartTime: G, trialId: Z, planGroup: F, analyticsLocation: V, purchaseTokenAuthState: j, openInvoiceId: H, metadata: Y, backButtonEligible: W, disablePurchase: K, isTrial: z = !1 } = e,
        { selectedPlan: q, priceOptions: Q, setHasAcceptedTerms: X, setPurchaseError: J, purchaseType: $, paymentSourceId: ee, paymentSources: et, selectedSkuId: en, skusById: er, skuPricePreviewsById: ei, referralCode: ea, contextMetadata: eo, invoicePreview: es, inReverseTrial: el } = (0, C.usePaymentContext)(),
        { isGift: eu, selectedGiftStyle: ec, customGiftMessage: ed, emojiConfetti: ef, soundEffect: ep, giftRecipient: eh, selectedGiftingPromotionReward: e_ } = (0, A.wD)(),
        em = (0, h.a5)(q),
        eg = (0, T.MY)(eh),
        eE = {};
    (eE.gift_style = ec), (eE.reward_sku_ids = em && (null == e_ ? void 0 : e_.skuId) != null ? [null == e_ ? void 0 : e_.skuId] : []), eg === T.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (l()(null != eh, 'Gift recipient must be set at purchase review step for these gift options.'), (eE.recipient_id = eh.id), (eE.custom_message = ed), (eE.emoji_id = null == ef ? void 0 : ef.id), (eE.emoji_name = (null == ef ? void 0 : ef.id) == null ? (null == ef ? void 0 : ef.surrogates) : void 0), (eE.sound_id = null == ep ? void 0 : ep.soundId));
    let ev = null == q ? void 0 : q.id,
        ey = (0, O.sE)(Z, Q.paymentSourceId, ev),
        eb = (0, u.e7)([v.Z], () => v.Z.popupCallbackCalled),
        { analyticsLocations: eI } = (0, f.ZP)(),
        eT = null != ee ? et[ee] : null,
        [eS, eA] = o.useState(ey),
        [eC, eN] = o.useState(!1),
        { hasEntitlements: eR } = (0, g.H)(ev, eu),
        eO = (0, S.Ap)(Q.paymentSourceId),
        eD = eR || ey,
        eL = (0, _.U)(),
        ex = null,
        ew = null;
    if ($ === L.GZQ.ONE_TIME) {
        var eP;
        l()(null != en, 'SKU must be selected for one-time purchases'), (ex = null !== (eP = er[en]) && void 0 !== eP ? eP : null), l()(null != ex, 'SKU must exist and be fetched.');
        let e = ei[en],
            n = null != ee ? ee : b.c;
        ew = null != e ? e[n] : null;
    }
    let eM = async () => {
            await (0, N.H)({
                setPurchaseState: r,
                setHasAcceptedTerms: X,
                setIsSubmitting: eA,
                setPurchaseError: J,
                hasRedirectURL: eC,
                setHasRedirectURL: eN,
                isGift: eu,
                baseAnalyticsData: B,
                analyticsLocation: V,
                analyticsLocations: eI,
                flowStartTime: G,
                subscriptionPlan: q,
                planGroup: F,
                trialId: Z,
                priceOptions: Q,
                paymentSource: eT,
                isPrepaidPaymentPastDue: eL,
                openInvoiceId: H,
                premiumSubscription: n,
                onNext: s,
                metadata: Y,
                sku: ex,
                skuPricePreview: ew,
                purchaseType: $,
                referralCode: ea,
                loadId: eo.loadId,
                giftInfoOptions: eE,
                invoicePreview: es
            });
        },
        ek = {
            baseAnalyticsData: B,
            flowStartTime: G,
            makePurchase: eM,
            onNext: s,
            onPurchaseError: U,
            paymentSource: eT,
            paymentSourceId: ee,
            purchaseTokenAuthState: j,
            setPurchaseState: r
        },
        eU = o.useRef(ek);
    o.useEffect(() => {
        eU.current = ek;
    }),
        o.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: n, makePurchase: r, onNext: i, onPurchaseError: a, paymentSource: o, paymentSourceId: s, purchaseTokenAuthState: l, setPurchaseState: u } = eU.current;
            (async () => {
                if (!0 === eb)
                    try {
                        if (null == v.Z.redirectedPaymentId) return;
                        await (0, d.OP)(v.Z.redirectedPaymentId), u(R.A.COMPLETED), i();
                    } catch (r) {
                        u(R.A.FAIL),
                            a(r),
                            I.default.track(L.rMx.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: null == r ? void 0 : r.code,
                                payment_source_id: s,
                                payment_source_type: null == o ? void 0 : o.type,
                                duration_ms: Date.now() - n
                            });
                    } finally {
                        eA(!1), (0, d.K2)();
                    }
                else l === y.I.SUCCESS && (await r());
            })();
        }, [eb]),
        o.useEffect(() => {
            let { makePurchase: e } = eU.current;
            ey && !eu && null == n && e();
        }, [ey, eu, n]);
    let eB = null != H || ($ === L.GZQ.ONE_TIME && !eu);
    return ey
        ? null
        : (0, a.jsxs)(c.ModalFooter, {
              align: p.Z.Align.CENTER,
              children: [
                  (0, a.jsx)(E.Z, {
                      legalTermsNodeRef: w,
                      invoiceError: M,
                      planError: k,
                      disablePurchase: K,
                      flashLegalTerms: P,
                      isSubmitting: eS,
                      premiumSubscription: n,
                      isGift: eu,
                      planGroup: F,
                      isPrepaid: eO,
                      isTrial: z,
                      makePurchase: eM,
                      needsPaymentSource: null == eT && !eD,
                      onNext: s,
                      inReverseTrial: el
                  }),
                  (0, a.jsx)(D.Z, {}),
                  W && !eB
                      ? (0, a.jsx)('div', {
                            className: x.back,
                            children: (0, a.jsx)(m.Z, { onClick: i })
                        })
                      : null
              ]
          });
}
