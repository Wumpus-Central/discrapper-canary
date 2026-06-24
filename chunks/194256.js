"use strict";
n.d(t, { dL: () => Q, Ay: () => en, oO: () => ee }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(575593),
    a = n(403581),
    o = n(278416),
    l = n(262427),
    u = n(376843),
    c = n(38785),
    d = n(214891),
    _ = n(270537),
    h = n(241989),
    f = n(993408),
    p = n(287809),
    E = n(486020),
    m = n(428262),
    g = n(580630),
    A = n(284009),
    I = n.n(A),
    T = n(997101),
    S = n(17928),
    y = n(318254),
    C = n(821891),
    N = n(953689),
    v = n(10716),
    R = n(46225),
    O = n(20015),
    b = n(364995),
    D = n(31823),
    L = n(426398),
    w = n(427675),
    M = n(211159),
    P = n(977445),
    x = n(778307),
    k = n(218075),
    U = n(118982),
    G = n(615405),
    F = n(45938),
    V = n(937008),
    B = n(566980),
    j = n(818824),
    H = n(944355),
    Y = n(367921),
    W = n(652215);
function K(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, V.Pv)(),
        { immediateDelivery: r } = (0, j.U)(),
        s = (0, Y.Ro)({
            purchaseType: W.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, i.jsx)(H._P, {
        variant: n ? { type: H.I0.GiftShop, purchaseButtonText: s } : { type: H.I0.Shop, purchaseButtonText: s },
        paymentSourceType: t,
        immediateDelivery: r,
    });
}
var $ = n(375708),
    z = n(666995),
    q = n(319820),
    Z = n(327105),
    X = n(594387);
function Q(e) {
    return e.name;
}
let J = {
    [s.R.BUNDLE]: () => $.intl.string(Z.default["jM8/71"]),
    [s.R.AVATAR_DECORATION]: () => $.intl.string(Z.default.r29Oel),
    [s.R.PROFILE_EFFECT]: () => $.intl.string(Z.default.eTYAvF),
    [s.R.NAMEPLATE]: () => $.intl.string(Z.default.of9bom),
    [s.R.PROFILE_FRAME]: () => $.intl.string(Z.default.HzDn6w),
};
function ee(e) {
    let t = $.intl.string(Z.default.iZe9Wy);
    if (null == e);
    else if (e.type in J) return (0, J[e.type])();
    return t;
}
function et(e) {
    let {
            application: t,
            sku: n,
            invoicePreview: s,
            paymentMethodContent: u,
            legalContent: A,
            isGift: I,
            giftRecipient: T,
            upperInlineNoticeProps: S,
            footerInlineNoticeProps: C,
        } = e,
        { product: N, isSocialLayerGameItem: v } = (0, q.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: R, priceText: O } = r.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        i = [];
                    if (null != n) {
                        let { discount: e, basePrice: r, showTaxes: s } = (0, q.yh)({ invoicePreview: n });
                        return (
                            i.push({ id: "sku", label: Q(t), amount: r }),
                            null != e &&
                                i.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            s && i.push({ id: "tax", label: $.intl.string($.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: i,
                                    label: $.intl.string(Z.default.eoXh7B),
                                    currency: n.currency,
                                },
                                priceText: (0, g.$g)(r, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: n, invoicePreview: s }),
            [n, s],
        ),
        b = r.useMemo(() => (null != R ? (0, i.jsx)(_.Vm, { ...R }) : null), [R]),
        D = r.useMemo(
            () =>
                (function (e) {
                    let { sku: t, product: n, application: r, isSocialLayerGameItem: s, giftRecipient: l } = e,
                        u = $.intl.string(Z.default.iZe9Wy);
                    s
                        ? (u = $.intl.string(Z.default.qwSlCO))
                        : null != n
                          ? (u = ee(n))
                          : t.productLine === W.EZt.GUILD_PRODUCT && (u = $.intl.string(Z.default.hewwdA));
                    let c = s
                            ? {
                                  header: r.name,
                                  headerIconSrc: E.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 16 }),
                              }
                            : {},
                        d = (0, i.jsx)(h.WH, { sku: t, product: n }),
                        _ = {};
                    return (
                        null != n &&
                            (_ = (function (e) {
                                let t = p.default.getCurrentUser(),
                                    n = m.Ay.canUseShopDiscounts(t),
                                    i = (0, f.xM)(t),
                                    r = (0, f.WD)(e, { hasShopDiscount: n, discount: (0, f.fT)(e, n) });
                                if (null != r && !r.showDefaultPriceOnly && r.showDiscountPrice) {
                                    if (i === f.D0.NITRO)
                                        return { PriceIcon: a.t, priceTooltip: $.intl.string(Z.default.YUNJJa) };
                                    if (i === f.D0.THIRDPARTY)
                                        return { PriceIcon: o.g, priceTooltip: $.intl.string(X.default.DePOcS) };
                                }
                                return {};
                            })(n)),
                        {
                            ...c,
                            ..._,
                            label: Q(t),
                            description: u,
                            graphic: d,
                            target: null != l ? { type: "gift", user: l } : void 0,
                        }
                    );
                })({ sku: n, product: N, application: t, isSocialLayerGameItem: v, giftRecipient: T }),
            [n, N, t, v, T],
        ),
        [L, w] = r.useMemo(
            () => [$.intl.string(Z.default.Zxav97), null != s ? (0, g.$g)(s.total, s.currency) : void 0],
            [s],
        ),
        M = r.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: i } = t;
                if (null == e) return null;
                let r = e.orbsReward;
                if (null != r && r > 0) {
                    let e = i ? $.t["ZV+aS9"] : $.t["0StwHe"];
                    return {
                        Icon: y.C,
                        text: $.intl.format(e, { orbCount: r }),
                        gradientColor: n === W.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(s, { productLine: n.productLine, isGift: I });
            return null != e ? (0, i.jsx)(l.J, { ...e }) : null;
        }, [s, I, n.productLine]),
        { setHeaderBadgeText: P, unsetHeaderBadgeText: x } = (0, d.v)();
    return (
        r.useEffect(
            () => (
                null != M && P($.intl.string(Z.default.Fjpyfj)),
                () => {
                    x();
                }
            ),
            [M, P, x],
        ),
        (0, i.jsx)(c.T, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: (0, i.jsx)(h.f7, { ...D, price: O }),
            invoiceSummaryContent: b,
            paymentMethodContent: u,
            legalContent: A,
            promotionalNoticeContent: M,
            upperInlineNoticeProps: S,
            footerInlineNoticeProps: C,
            invoiceTotalDueLabel: L,
            invoiceTotalDueValue: w,
        })
    );
}
function en(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s } = e,
        {
            sku: a,
            application: o,
            invoicePreview: l,
            isGift: d,
            eligiblePaymentGateways: _,
            purchaseTermsAndLegalContent: h,
            isStepLoading: f,
            giftRecipient: p,
            warningAndErrorMessages: E,
            disabled: m,
        } = (function (e) {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: s,
                    setHasAcceptedTerms: a,
                    purchaseState: o,
                    checkoutInvoicePreview: l,
                    paymentSourceId: u,
                    purchasePreviewError: c,
                    purchaseType: d,
                } = (0, M.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setHasAcceptedTerms: e.setHasAcceptedTerms,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    purchaseType: e.purchaseType,
                })),
                { hasPaymentSources: _ } = (0, L.jm)(),
                { application: h, isEmbeddedIAP: f } = (0, D.V)(),
                p = (0, S.bG)([v.A], () => v.A.getFetchState()),
                { checkoutPaymentSources: E, hasInvoiceOrderContextLoaded: m } = (0, b.t)(),
                g = (0, w.gU)(),
                { isGift: A, giftRecipient: y } = (0, V.Pv)(),
                j = A && (0, F.Ik)(y),
                { fetched: H, hasAlreadyLinked: Y } = (0, R.RD)(h);
            I()(null != s, "Expected selectedSkuId");
            let q = g[s],
                Z = q?.eligiblePaymentGateways;
            I()(null != q, "SKU must exist and be fetched."), I()(null != h, "Application must exist.");
            let X = (0, P.uS)(h.id),
                Q = T.M.EEA_COUNTRIES.has(G.A.ipCountryCodeWithFallback),
                J = o === B.h.PURCHASING || o === B.h.COMPLETED,
                ee = E.find((e) => e.id === u) ?? null,
                et = null != ee ? ee.type : null,
                en = null != Z && Z.length > 0 && (null == u || null === et) && _ ? k.fU.SELECT_PAYMENT_METHOD : void 0,
                ei = q.productLine === W.EZt.SOCIAL_LAYER_GAME_ITEM,
                er = j && !ei,
                es = r.useMemo(
                    () => ({
                        testModeWarning: X ? $.intl.string($.t.OvMyMd) : null,
                        devShelfError:
                            (0, O.n)(h, W.gfo.EMBEDDED) && p === v.$.ERROR ? $.intl.string($.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: ei && H && !Y && !A ? (0, U.k3)(h) : null,
                    }),
                    [X, h, p, ei, H, Y, A],
                ),
                ea = r.useMemo(
                    () =>
                        q.productLine === W.EZt.COLLECTIBLES
                            ? (0, i.jsx)(K, { paymentSourceType: et })
                            : (0, i.jsx)(x.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, i.jsx)(N.A, {
                                      onChange: a,
                                      forceShow: !0,
                                      showWithdrawalWaiver: Q,
                                      disabled: J,
                                      subscriptionPlan: null,
                                      finePrintClassname: z.i,
                                      purchaseType: d,
                                      isGift: A,
                                      finePrint: (0, i.jsx)(C.A, {
                                          paymentSourceType: et,
                                          isEmbeddedIAP: f,
                                          purchaseType: d,
                                          productLine: q.productLine,
                                          isGift: A,
                                          applicationName: h.name,
                                          applicationId: h.id,
                                          hasAlreadyLinked: !H || Y,
                                      }),
                                  }),
                              }),
                    [t, n, a, Q, J, d, A, et, f, q.productLine, h.name, h.id, H, Y],
                );
            return {
                sku: q,
                application: h,
                giftRecipient: y,
                isGift: A,
                invoicePreview: l,
                isEmbeddedIAP: f,
                shouldShowPurchaseReviewImage: er,
                paymentRestrictionBannerType: en,
                devShelfFetchState: p,
                isStepLoading: !m && null == c,
                purchasePreviewError: c,
                warningAndErrorMessages: es,
                purchaseTermsAndLegalContent: ea,
                eligiblePaymentGateways: Z,
                disabled: J,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        g = r.useMemo(() => ({ paymentGatewayRestrictions: _, shouldUseUnifiedCheckoutUI: !0 }), [_]),
        A = (0, i.jsx)(u.N, {
            label: $.intl.string($.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: s,
            additionalPaymentSourceDropdownProps: g,
            disabled: m,
        }),
        y = r.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning &&
                    e.push({ type: "warning", message: E.testModeWarning, key: "test-mode-warning-notice" }),
                null != E.devShelfError &&
                    e.push({ type: "critical", message: E.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError]),
        j = r.useMemo(() => {
            let e = [];
            return (
                null != E.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: E.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [E.socialLayerGameItemDisclaimer]);
    return f
        ? (0, i.jsx)(c.E, {})
        : (0, i.jsx)(et, {
              application: o,
              giftRecipient: p,
              isGift: d,
              sku: a,
              invoicePreview: l,
              paymentMethodContent: A,
              legalContent: h,
              upperInlineNoticeProps: y,
              footerInlineNoticeProps: j,
          });
}
