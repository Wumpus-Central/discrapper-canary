n.d(t, { dL: () => Y, Ay: () => Z, oO: () => V }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(575593),
    a = n(403581),
    s = n(278416),
    o = n(262427),
    u = n(319668),
    c = n(38785),
    d = n(848584),
    p = n(241989),
    m = n(993408),
    h = n(287809),
    C = n(486020),
    E = n(428262),
    f = n(580630),
    A = n(284009),
    S = n.n(A),
    y = n(17928),
    P = n(318254),
    I = n(10716),
    _ = n(206828),
    T = n(20015),
    g = n(120700),
    x = n(202475),
    v = n(364995),
    N = n(31823),
    R = n(427675),
    M = n(316915),
    b = n(977445),
    j = n(218075),
    O = n(118982),
    L = n(45938),
    k = n(951305),
    w = n(566980),
    D = n(52635),
    U = n(652215),
    G = n(375708),
    F = n(319820),
    H = n(327105),
    B = n(594387);
function Y(e) {
    return e.name;
}
let W = {
    [r.R.BUNDLE]: () => G.intl.string(H.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => G.intl.string(H.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => G.intl.string(H.default.eTYAvF),
    [r.R.NAMEPLATE]: () => G.intl.string(H.default.of9bom),
    [r.R.PROFILE_FRAME]: () => G.intl.string(H.default.HzDn6w),
};
function V(e) {
    let t = G.intl.string(H.default.iZe9Wy);
    if (null == e);
    else if (e.type in W) return (0, W[e.type])();
    return t;
}
function K(e) {
    let {
            application: t,
            sku: n,
            invoicePreview: r,
            paymentMethodContent: u,
            legalContent: A,
            isGift: S,
            giftRecipient: y,
            upperInlineNoticeProps: I,
            footerInlineNoticeProps: _,
        } = e,
        { product: T, isSocialLayerGameItem: g } = (0, F.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: x, priceText: v } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, F.yh)({ invoicePreview: n });
                        return (
                            l.push({ id: "sku", label: Y(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: G.intl.string(G.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: G.intl.string(H.default.eoXh7B),
                                    currency: n.currency,
                                },
                                priceText: (0, f.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: n, invoicePreview: r }),
            [n, r],
        ),
        N = i.useMemo(() => (null != x ? (0, l.jsx)(d.Vm, { ...x }) : null), [x]),
        R = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, product: n, application: i, isSocialLayerGameItem: r, giftRecipient: o } = e,
                        u = G.intl.string(H.default.iZe9Wy);
                    r
                        ? (u = G.intl.string(H.default.qwSlCO))
                        : null != n
                          ? (u = V(n))
                          : t.productLine === U.EZt.GUILD_PRODUCT && (u = G.intl.string(H.default.hewwdA));
                    let c = r
                            ? {
                                  header: i.name,
                                  headerIconSrc: C.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }),
                              }
                            : {},
                        d = (0, l.jsx)(p.WH, { sku: t, product: n }),
                        f = {};
                    return (
                        null != n &&
                            (f = (function (e) {
                                let t = h.default.getCurrentUser(),
                                    n = E.Ay.canUseShopDiscounts(t),
                                    l = (0, m.xM)(t),
                                    i = (0, m.WD)(e, { hasShopDiscount: n, discount: (0, m.fT)(e, n) });
                                if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                                    if (l === m.D0.NITRO)
                                        return { PriceIcon: a.t, priceTooltip: G.intl.string(H.default.YUNJJa) };
                                    if (l === m.D0.THIRDPARTY)
                                        return { PriceIcon: s.g, priceTooltip: G.intl.string(B.default.DePOcS) };
                                }
                                return {};
                            })(n)),
                        {
                            ...c,
                            ...f,
                            label: Y(t),
                            description: u,
                            graphic: d,
                            target: null != o ? { type: "gift", user: o } : void 0,
                        }
                    );
                })({ sku: n, product: T, application: t, isSocialLayerGameItem: g, giftRecipient: y }),
            [n, T, t, g, y],
        ),
        [M, b] = i.useMemo(
            () => [G.intl.string(H.default.Zxav97), null != r ? (0, f.$g)(r.total, r.currency) : void 0],
            [r],
        ),
        j = i.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: l } = t;
                if (null == e) return null;
                let i = e.orbsReward;
                if (null != i && i > 0) {
                    let e = l ? G.t["ZV+aS9"] : G.t["0StwHe"];
                    return {
                        Icon: P.C,
                        text: G.intl.format(e, { orbCount: i }),
                        gradientColor: n === U.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(r, { productLine: n.productLine, isGift: S });
            return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
        }, [r, S, n.productLine]),
        O = i.useMemo(() => (null != j ? { headerBadgeText: G.intl.string(H.default.Fjpyfj) } : {}), [j]);
    return (0, l.jsx)(c.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: O,
        purchaseItemContent: (0, l.jsx)(p.f7, { ...R, price: v }),
        invoiceSummaryContent: N,
        paymentMethodContent: u,
        legalContent: A,
        promotionalNoticeContent: j,
        upperInlineNoticeProps: I,
        footerInlineNoticeProps: _,
        invoiceTotalDueLabel: M,
        invoiceTotalDueValue: b,
    });
}
function Z(e) {
    let { handlePaymentSourceAdd: t } = e,
        {
            sku: n,
            application: r,
            invoicePreview: a,
            isGift: s,
            eligiblePaymentGateways: o,
            purchaseTermsAndLegalContent: d,
            isStepLoading: p,
            giftRecipient: m,
            warningAndErrorMessages: h,
            disabled: C,
        } = (function () {
            let {
                    selectedSkuId: e,
                    purchaseState: t,
                    checkoutInvoicePreview: n,
                    paymentSourceId: r,
                    purchasePreviewError: a,
                    unifiedCheckoutFlow: s,
                } = (0, M.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                })),
                { hasPaymentSources: o } = (0, x.jm)(),
                { application: u, isEmbeddedIAP: c } = (0, N.V)(),
                d = (0, y.bG)([I.A], () => I.A.getFetchState()),
                { checkoutPaymentSources: p, hasInvoiceOrderContextLoaded: m } = (0, v.t)(),
                h = (0, R.gU)(),
                { isGift: C, giftRecipient: E } = (0, k.Pv)(),
                f = C && (0, L.Ik)(E),
                { fetched: A, hasAlreadyLinked: P } = (0, _.RD)(u);
            S()(null != e, "Expected selectedSkuId");
            let F = h[e],
                H = F?.eligiblePaymentGateways;
            S()(null != F, "SKU must exist and be fetched."), S()(null != u, "Application must exist.");
            let B = (0, b.uS)(u.id),
                Y = t === w.h.PURCHASING || t === w.h.COMPLETED,
                W = p.find((e) => e.id === r) ?? null,
                V = null != W ? W.type : null,
                K = null != H && H.length > 0 && (null == r || null === V) && o ? j.fU.SELECT_PAYMENT_METHOD : void 0,
                Z = F.productLine === U.EZt.SOCIAL_LAYER_GAME_ITEM,
                q = f && !Z,
                z = i.useMemo(
                    () => ({
                        testModeWarning: B ? G.intl.string(G.t.OvMyMd) : null,
                        devShelfError:
                            (0, T.n)(u, U.gfo.EMBEDDED) && d === I.$.ERROR ? G.intl.string(G.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: Z && A && !P && !C ? (0, O.k3)(u) : null,
                    }),
                    [B, u, d, Z, A, P, C],
                ),
                Q = i.useMemo(
                    () =>
                        s === g.C.SLAYER_STOREFRONT_CHECKOUT
                            ? (0, l.jsx)(D.EB, { paymentSourceType: V, skuId: F.id, isGift: C })
                            : (0, l.jsx)(D.T3, { paymentSourceType: V }),
                    [V, s, F.id, C],
                );
            return {
                sku: F,
                application: u,
                giftRecipient: E,
                isGift: C,
                invoicePreview: n,
                isEmbeddedIAP: c,
                shouldShowPurchaseReviewImage: q,
                paymentRestrictionBannerType: K,
                devShelfFetchState: d,
                isStepLoading: !m && null == a,
                purchasePreviewError: a,
                warningAndErrorMessages: z,
                purchaseTermsAndLegalContent: Q,
                eligiblePaymentGateways: H,
                disabled: Y,
            };
        })(),
        E = i.useMemo(() => ({ paymentGatewayRestrictions: o, shouldUseUnifiedCheckoutUI: !0 }), [o]),
        f = (0, l.jsx)(u.N, {
            label: G.intl.string(G.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: E,
            disabled: C,
        }),
        A = i.useMemo(() => {
            let e = [];
            return (
                null != h.testModeWarning &&
                    e.push({ type: "warning", message: h.testModeWarning, key: "test-mode-warning-notice" }),
                null != h.devShelfError &&
                    e.push({ type: "critical", message: h.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [h.testModeWarning, h.devShelfError]),
        P = i.useMemo(() => {
            let e = [];
            return (
                null != h.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: h.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [h.socialLayerGameItemDisclaimer]);
    return p
        ? (0, l.jsx)(c.Ed, { shouldShowUnifiedHeader: !0 })
        : (0, l.jsx)(K, {
              application: r,
              giftRecipient: m,
              isGift: s,
              sku: n,
              invoicePreview: a,
              paymentMethodContent: f,
              legalContent: d,
              upperInlineNoticeProps: A,
              footerInlineNoticeProps: P,
          });
}
