n.d(t, { dL: () => H, Ay: () => q, oO: () => V }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(575593),
    a = n(403581),
    s = n(278416),
    o = n(262427),
    u = n(319668),
    c = n(38785),
    d = n(270537),
    p = n(241989),
    m = n(993408),
    h = n(287809),
    C = n(486020),
    A = n(428262),
    E = n(580630),
    f = n(284009),
    y = n.n(f),
    S = n(17928),
    P = n(318254),
    T = n(10716),
    I = n(206828),
    _ = n(20015),
    g = n(120700),
    x = n(364995),
    v = n(31823),
    N = n(426398),
    b = n(427675),
    R = n(6938),
    M = n(977445),
    j = n(218075),
    O = n(118982),
    L = n(45938),
    w = n(951305),
    D = n(566980),
    k = n(52635),
    U = n(652215),
    G = n(375708),
    F = n(319820),
    B = n(327105),
    Y = n(594387);
function H(e) {
    return e.name;
}
let W = {
    [r.R.BUNDLE]: () => G.intl.string(B.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => G.intl.string(B.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => G.intl.string(B.default.eTYAvF),
    [r.R.NAMEPLATE]: () => G.intl.string(B.default.of9bom),
    [r.R.PROFILE_FRAME]: () => G.intl.string(B.default.HzDn6w),
};
function V(e) {
    let t = G.intl.string(B.default.iZe9Wy);
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
            legalContent: f,
            isGift: y,
            giftRecipient: S,
            upperInlineNoticeProps: T,
            footerInlineNoticeProps: I,
        } = e,
        { product: _, isSocialLayerGameItem: g } = (0, F.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: x, priceText: v } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, F.yh)({ invoicePreview: n });
                        return (
                            l.push({ id: "sku", label: H(t), amount: i }),
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
                                    label: G.intl.string(B.default.eoXh7B),
                                    currency: n.currency,
                                },
                                priceText: (0, E.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: n, invoicePreview: r }),
            [n, r],
        ),
        N = i.useMemo(() => (null != x ? (0, l.jsx)(d.Vm, { ...x }) : null), [x]),
        b = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, product: n, application: i, isSocialLayerGameItem: r, giftRecipient: o } = e,
                        u = G.intl.string(B.default.iZe9Wy);
                    r
                        ? (u = G.intl.string(B.default.qwSlCO))
                        : null != n
                          ? (u = V(n))
                          : t.productLine === U.EZt.GUILD_PRODUCT && (u = G.intl.string(B.default.hewwdA));
                    let c = r
                            ? {
                                  header: i.name,
                                  headerIconSrc: C.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }),
                              }
                            : {},
                        d = (0, l.jsx)(p.WH, { sku: t, product: n }),
                        E = {};
                    return (
                        null != n &&
                            (E = (function (e) {
                                let t = h.default.getCurrentUser(),
                                    n = A.Ay.canUseShopDiscounts(t),
                                    l = (0, m.xM)(t),
                                    i = (0, m.WD)(e, { hasShopDiscount: n, discount: (0, m.fT)(e, n) });
                                if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                                    if (l === m.D0.NITRO)
                                        return { PriceIcon: a.t, priceTooltip: G.intl.string(B.default.YUNJJa) };
                                    if (l === m.D0.THIRDPARTY)
                                        return { PriceIcon: s.g, priceTooltip: G.intl.string(Y.default.DePOcS) };
                                }
                                return {};
                            })(n)),
                        {
                            ...c,
                            ...E,
                            label: H(t),
                            description: u,
                            graphic: d,
                            target: null != o ? { type: "gift", user: o } : void 0,
                        }
                    );
                })({ sku: n, product: _, application: t, isSocialLayerGameItem: g, giftRecipient: S }),
            [n, _, t, g, S],
        ),
        [R, M] = i.useMemo(
            () => [G.intl.string(B.default.Zxav97), null != r ? (0, E.$g)(r.total, r.currency) : void 0],
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
            })(r, { productLine: n.productLine, isGift: y });
            return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
        }, [r, y, n.productLine]),
        O = i.useMemo(() => (null != j ? { headerBadgeText: G.intl.string(B.default.Fjpyfj) } : {}), [j]);
    return (0, l.jsx)(c.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: O,
        purchaseItemContent: (0, l.jsx)(p.f7, { ...b, price: v }),
        invoiceSummaryContent: N,
        paymentMethodContent: u,
        legalContent: f,
        promotionalNoticeContent: j,
        upperInlineNoticeProps: T,
        footerInlineNoticeProps: I,
        invoiceTotalDueLabel: R,
        invoiceTotalDueValue: M,
    });
}
function q(e) {
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
                } = (0, R.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                })),
                { hasPaymentSources: o } = (0, N.jm)(),
                { application: u, isEmbeddedIAP: c } = (0, v.V)(),
                d = (0, S.bG)([T.A], () => T.A.getFetchState()),
                { checkoutPaymentSources: p, hasInvoiceOrderContextLoaded: m } = (0, x.t)(),
                h = (0, b.gU)(),
                { isGift: C, giftRecipient: A } = (0, w.Pv)(),
                E = C && (0, L.Ik)(A),
                { fetched: f, hasAlreadyLinked: P } = (0, I.RD)(u);
            y()(null != e, "Expected selectedSkuId");
            let F = h[e],
                B = F?.eligiblePaymentGateways;
            y()(null != F, "SKU must exist and be fetched."), y()(null != u, "Application must exist.");
            let Y = (0, M.uS)(u.id),
                H = t === D.h.PURCHASING || t === D.h.COMPLETED,
                W = p.find((e) => e.id === r) ?? null,
                V = null != W ? W.type : null,
                K = null != B && B.length > 0 && (null == r || null === V) && o ? j.fU.SELECT_PAYMENT_METHOD : void 0,
                q = F.productLine === U.EZt.SOCIAL_LAYER_GAME_ITEM,
                Z = E && !q,
                z = i.useMemo(
                    () => ({
                        testModeWarning: Y ? G.intl.string(G.t.OvMyMd) : null,
                        devShelfError:
                            (0, _.n)(u, U.gfo.EMBEDDED) && d === T.$.ERROR ? G.intl.string(G.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: q && f && !P && !C ? (0, O.k3)(u) : null,
                    }),
                    [Y, u, d, q, f, P, C],
                ),
                $ = i.useMemo(
                    () =>
                        s === g.C.SLAYER_STOREFRONT_CHECKOUT
                            ? (0, l.jsx)(k.EB, { paymentSourceType: V, skuId: F.id, isGift: C })
                            : (0, l.jsx)(k.T3, { paymentSourceType: V }),
                    [V, s, F.id, C],
                );
            return {
                sku: F,
                application: u,
                giftRecipient: A,
                isGift: C,
                invoicePreview: n,
                isEmbeddedIAP: c,
                shouldShowPurchaseReviewImage: Z,
                paymentRestrictionBannerType: K,
                devShelfFetchState: d,
                isStepLoading: !m && null == a,
                purchasePreviewError: a,
                warningAndErrorMessages: z,
                purchaseTermsAndLegalContent: $,
                eligiblePaymentGateways: B,
                disabled: H,
            };
        })(),
        A = i.useMemo(() => ({ paymentGatewayRestrictions: o, shouldUseUnifiedCheckoutUI: !0 }), [o]),
        E = (0, l.jsx)(u.N, {
            label: G.intl.string(G.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: A,
            disabled: C,
        }),
        f = i.useMemo(() => {
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
              paymentMethodContent: E,
              legalContent: d,
              upperInlineNoticeProps: f,
              footerInlineNoticeProps: P,
          });
}
