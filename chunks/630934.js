n.d(t, { dL: () => q, Ay: () => J, oO: () => $ }), n(321073);
var l = n(477900),
    i = n(582128),
    r = n(575593),
    a = n(403581),
    s = n(278416),
    o = n(262427),
    u = n(120700),
    c = n(319668),
    d = n(38785),
    p = n(848584),
    m = n(241989),
    C = n(87725),
    h = n(993408),
    f = n(80151),
    E = n(629042),
    S = n(151115),
    A = n(287809),
    y = n(486020),
    P = n(158045),
    I = n(580630),
    g = n(1076),
    v = n(284009),
    T = n.n(v),
    _ = n(17928),
    x = n(318254),
    N = n(10716),
    b = n(206828),
    R = n(20015),
    j = n(202475),
    M = n(31823),
    O = n(427675),
    L = n(977445),
    k = n(812095),
    w = n(218075),
    U = n(118982),
    D = n(45938),
    G = n(240248),
    F = n(951305),
    H = n(566980),
    B = n(52635),
    Y = n(652215),
    W = n(375708),
    V = n(319820),
    K = n(327105),
    Z = n(594387);
function q(e) {
    return e.name;
}
let z = {
    [r.R.BUNDLE]: () => W.intl.string(K.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => W.intl.string(K.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => W.intl.string(K.default.eTYAvF),
    [r.R.NAMEPLATE]: () => W.intl.string(K.default.of9bom),
    [r.R.PROFILE_FRAME]: () => W.intl.string(K.default.HzDn6w),
};
function $(e) {
    let t = W.intl.string(K.default.iZe9Wy);
    if (null == e);
    else if (e.type in z) return (0, z[e.type])();
    return t;
}
function Q(e) {
    let {
            application: t,
            sku: n,
            invoicePreview: r,
            paymentMethodContent: c,
            legalContent: v,
            isGift: T,
            giftRecipient: _,
            upperInlineNoticeProps: N,
            footerInlineNoticeProps: b,
        } = e,
        { product: R, isSocialLayerGameItem: j } = (0, V.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: M, priceText: O } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, V.yh)({ invoicePreview: n });
                        return (
                            l.push({ id: "sku", label: q(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: W.intl.string(W.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: W.intl.string(K.default.eoXh7B),
                                    currency: n.currency,
                                    defaultExpanded: null != e,
                                },
                                priceText: (0, I.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: n, invoicePreview: r }),
            [n, r],
        ),
        L = i.useMemo(() => (null != M ? (0, l.jsx)(p.Vm, { ...M }) : null), [M]),
        w = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, product: n, application: i, isSocialLayerGameItem: r, giftRecipient: o } = e,
                        u = W.intl.string(K.default.iZe9Wy);
                    r
                        ? (u = W.intl.string(K.default.qwSlCO))
                        : null != n
                          ? (u = $(n))
                          : t.productLine === Y.EZt.GUILD_PRODUCT && (u = W.intl.string(K.default.hewwdA));
                    let c = r
                            ? {
                                  header: i.name,
                                  headerIconSrc: y.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }),
                              }
                            : {},
                        d = (0, l.jsx)(m.WH, { sku: t, product: n }),
                        p = {};
                    return (
                        null != n &&
                            (p = (function (e) {
                                let t = A.default.getCurrentUser(),
                                    n = P.Ay.canUseShopDiscounts(t),
                                    l = (0, h.xM)(t),
                                    i = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                                if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                                    if (l === h.D0.NITRO)
                                        return { PriceIcon: a.t, priceTooltip: W.intl.string(K.default.YUNJJa) };
                                    if (l === h.D0.THIRDPARTY)
                                        return { PriceIcon: s.g, priceTooltip: W.intl.string(Z.default.DePOcS) };
                                }
                                return {};
                            })(n)),
                        {
                            ...c,
                            ...p,
                            label: q(t),
                            description: u,
                            graphic: d,
                            target: null != o ? { type: "gift", user: o } : void 0,
                        }
                    );
                })({ sku: n, product: R, application: t, isSocialLayerGameItem: j, giftRecipient: _ }),
            [n, R, t, j, _],
        ),
        [U, D] = i.useMemo(
            () => [W.intl.string(K.default.Zxav97), null != r ? (0, I.$g)(r.total, r.currency) : void 0],
            [r],
        ),
        F = (0, f.A)(),
        H = (0, C.t4)((e) => e.unifiedCheckoutFlow),
        { setCollectedModalOverrideTitle: B, setCollectedModalGradientColor: z } = (0, g.z)(),
        Q = H === u.C.COLLECTIBLES_CHECKOUT && null != R ? (0, E.L0)(R, F) : null,
        J = Q?.rewardConfig?.discount?.id,
        X = null != J && r?.getDiscountIdIfExists() === String(J),
        ee = i.useMemo(() => {
            let e;
            return null == (e = Q?.tenantMetadata?.collectibles?.reward)
                ? null
                : { overrideTitle: e.collected?.overrideTitle, gradientColor: (0, S.KD)(e.flavor) };
        }, [Q]);
    i.useEffect(() => {
        let e = X ? ee : null;
        B(e?.overrideTitle), z(e?.gradientColor);
    }, [X, ee, B, z]);
    let et = i.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: l, product: i, promotion: r, unifiedCheckoutFlow: a } = t;
                if (a === u.C.COLLECTIBLES_CHECKOUT && null != i) {
                    let e = (0, E.L0)(i, r),
                        t = e?.tenantMetadata?.collectibles?.reward?.checkout?.offerNotice,
                        n = e?.tenantMetadata?.collectibles?.reward?.flavor,
                        l = t?.text;
                    if (!(0, G.uJ)(l))
                        return { Icon: (0, S.sj)(t?.icon), text: (0, k.U)(l), gradientColor: (0, S.lx)(n) };
                }
                if (null == e) return null;
                let s = e.orbsReward;
                if (null != s && s > 0) {
                    let e = l ? W.t["ZV+aS9"] : W.t["0StwHe"];
                    return {
                        Icon: x.C,
                        text: W.intl.format(e, { orbCount: s }),
                        gradientColor: n === Y.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(r, { productLine: n.productLine, isGift: T, product: R, promotion: F, unifiedCheckoutFlow: H });
            return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
        }, [r, T, R, F, n.productLine, H]),
        en = i.useMemo(() => (null != et ? { headerBadgeText: W.intl.string(K.default.Fjpyfj) } : {}), [et]);
    return (0, l.jsx)(d.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: en,
        purchaseItemContent: (0, l.jsx)(m.f7, { ...w, price: O }),
        invoiceSummaryContent: L,
        paymentMethodContent: c,
        legalContent: v,
        promotionalNoticeContent: et,
        upperInlineNoticeProps: N,
        footerInlineNoticeProps: b,
        invoiceTotalDueLabel: U,
        invoiceTotalDueValue: D,
    });
}
function J(e) {
    let { handlePaymentSourceAdd: t } = e,
        {
            sku: n,
            application: r,
            invoicePreview: a,
            isGift: s,
            eligiblePaymentGateways: o,
            purchaseTermsAndLegalContent: p,
            isStepLoading: m,
            giftRecipient: h,
            warningAndErrorMessages: f,
            disabled: E,
        } = (function () {
            let {
                    selectedSkuId: e,
                    purchaseState: t,
                    checkoutInvoicePreview: n,
                    paymentSourceId: r,
                    purchasePreviewError: a,
                    unifiedCheckoutFlow: s,
                    isCheckoutDataLoading: o,
                    checkoutPaymentSources: c,
                } = (0, C.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                    isCheckoutDataLoading: e.get("isCheckoutDataLoading"),
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                })),
                { hasPaymentSources: d } = (0, j.j)(),
                { application: p, isEmbeddedIAP: m } = (0, M.V)(),
                h = (0, _.bG)([N.A], () => N.A.getFetchState()),
                f = (0, O.gU)(),
                { isGift: E, giftRecipient: S } = (0, F.Pv)(),
                A = E && (0, D.Ik)(S),
                { fetched: y, hasAlreadyLinked: P } = (0, b.RD)(p);
            T()(null != e, "Expected selectedSkuId");
            let I = f[e],
                g = I?.eligiblePaymentGateways;
            T()(null != I, "SKU must exist and be fetched."), T()(null != p, "Application must exist.");
            let v = (0, L.uS)(p.id),
                x = t === H.h.PURCHASING || t === H.h.COMPLETED,
                k = c.find((e) => e.id === r) ?? null,
                G = null != k ? k.type : null,
                V = null != g && g.length > 0 && (null == r || null === G) && d ? w.fU.SELECT_PAYMENT_METHOD : void 0,
                K = I.productLine === Y.EZt.SOCIAL_LAYER_GAME_ITEM,
                Z = A && !K,
                q = i.useMemo(
                    () => ({
                        testModeWarning: v ? W.intl.string(W.t.OvMyMd) : null,
                        devShelfError:
                            (0, R.n)(p, Y.gfo.EMBEDDED) && h === N.$.ERROR ? W.intl.string(W.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: K && y && !P && !E ? (0, U.k3)(p) : null,
                    }),
                    [v, p, h, K, y, P, E],
                ),
                z = i.useMemo(
                    () =>
                        s === u.C.SLAYER_STOREFRONT_CHECKOUT
                            ? (0, l.jsx)(B.EB, { paymentSourceType: G, skuId: I.id, isGift: E })
                            : (0, l.jsx)(B.T3, { paymentSourceType: G }),
                    [G, s, I.id, E],
                );
            return {
                sku: I,
                application: p,
                giftRecipient: S,
                isGift: E,
                invoicePreview: n,
                isEmbeddedIAP: m,
                shouldShowPurchaseReviewImage: Z,
                paymentRestrictionBannerType: V,
                devShelfFetchState: h,
                isStepLoading: o,
                purchasePreviewError: a,
                warningAndErrorMessages: q,
                purchaseTermsAndLegalContent: z,
                eligiblePaymentGateways: g,
                disabled: x,
            };
        })(),
        S = i.useMemo(() => ({ paymentGatewayRestrictions: o, shouldUseUnifiedCheckoutUI: !0 }), [o]),
        A = (0, l.jsx)(c.N, {
            label: W.intl.string(W.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: S,
            disabled: E,
        }),
        y = i.useMemo(() => {
            let e = [];
            return (
                null != f.testModeWarning &&
                    e.push({ type: "warning", message: f.testModeWarning, key: "test-mode-warning-notice" }),
                null != f.devShelfError &&
                    e.push({ type: "critical", message: f.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [f.testModeWarning, f.devShelfError]),
        P = i.useMemo(() => {
            let e = [];
            return (
                null != f.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: f.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [f.socialLayerGameItemDisclaimer]);
    return m
        ? (0, l.jsx)(d.Ed, { shouldShowUnifiedHeader: !0 })
        : (0, l.jsx)(Q, {
              application: r,
              giftRecipient: h,
              isGift: s,
              sku: n,
              invoicePreview: a,
              paymentMethodContent: A,
              legalContent: p,
              upperInlineNoticeProps: y,
              footerInlineNoticeProps: P,
          });
}
