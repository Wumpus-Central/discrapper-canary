n.d(t, { dL: () => W, Ay: () => q, oO: () => K }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(575593),
    a = n(403581),
    s = n(278416),
    o = n(262427),
    u = n(319668),
    c = n(38785),
    d = n(214891),
    p = n(270537),
    m = n(241989),
    C = n(993408),
    h = n(287809),
    E = n(486020),
    A = n(428262),
    S = n(580630),
    f = n(284009),
    y = n.n(f),
    P = n(17928),
    T = n(318254),
    _ = n(10716),
    I = n(206828),
    g = n(20015),
    v = n(120700),
    x = n(364995),
    N = n(31823),
    R = n(426398),
    b = n(427675),
    M = n(6938),
    O = n(977445),
    j = n(218075),
    L = n(331329),
    D = n(45938),
    w = n(937008),
    U = n(566980),
    k = n(52635),
    G = n(652215),
    F = n(375708),
    B = n(319820),
    Y = n(327105),
    H = n(594387);
function W(e) {
    return e.name;
}
let V = {
    [r.R.BUNDLE]: () => F.intl.string(Y.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => F.intl.string(Y.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => F.intl.string(Y.default.eTYAvF),
    [r.R.NAMEPLATE]: () => F.intl.string(Y.default.of9bom),
    [r.R.PROFILE_FRAME]: () => F.intl.string(Y.default.HzDn6w),
};
function K(e) {
    let t = F.intl.string(Y.default.iZe9Wy);
    if (null == e);
    else if (e.type in V) return (0, V[e.type])();
    return t;
}
function Z(e) {
    let {
            application: t,
            sku: n,
            invoicePreview: r,
            paymentMethodContent: u,
            legalContent: f,
            isGift: y,
            giftRecipient: P,
            upperInlineNoticeProps: _,
            footerInlineNoticeProps: I,
        } = e,
        { product: g, isSocialLayerGameItem: v } = (0, B.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: x, priceText: N } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, B.yh)({ invoicePreview: n });
                        return (
                            l.push({ id: "sku", label: W(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: F.intl.string(F.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: F.intl.string(Y.default.eoXh7B),
                                    currency: n.currency,
                                },
                                priceText: (0, S.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: n, invoicePreview: r }),
            [n, r],
        ),
        R = i.useMemo(() => (null != x ? (0, l.jsx)(p.Vm, { ...x }) : null), [x]),
        b = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, product: n, application: i, isSocialLayerGameItem: r, giftRecipient: o } = e,
                        u = F.intl.string(Y.default.iZe9Wy);
                    r
                        ? (u = F.intl.string(Y.default.qwSlCO))
                        : null != n
                          ? (u = K(n))
                          : t.productLine === G.EZt.GUILD_PRODUCT && (u = F.intl.string(Y.default.hewwdA));
                    let c = r
                            ? {
                                  header: i.name,
                                  headerIconSrc: E.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }),
                              }
                            : {},
                        d = (0, l.jsx)(m.WH, { sku: t, product: n }),
                        p = {};
                    return (
                        null != n &&
                            (p = (function (e) {
                                let t = h.default.getCurrentUser(),
                                    n = A.Ay.canUseShopDiscounts(t),
                                    l = (0, C.xM)(t),
                                    i = (0, C.WD)(e, { hasShopDiscount: n, discount: (0, C.fT)(e, n) });
                                if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                                    if (l === C.D0.NITRO)
                                        return { PriceIcon: a.t, priceTooltip: F.intl.string(Y.default.YUNJJa) };
                                    if (l === C.D0.THIRDPARTY)
                                        return { PriceIcon: s.g, priceTooltip: F.intl.string(H.default.DePOcS) };
                                }
                                return {};
                            })(n)),
                        {
                            ...c,
                            ...p,
                            label: W(t),
                            description: u,
                            graphic: d,
                            target: null != o ? { type: "gift", user: o } : void 0,
                        }
                    );
                })({ sku: n, product: g, application: t, isSocialLayerGameItem: v, giftRecipient: P }),
            [n, g, t, v, P],
        ),
        [M, O] = i.useMemo(
            () => [F.intl.string(Y.default.Zxav97), null != r ? (0, S.$g)(r.total, r.currency) : void 0],
            [r],
        ),
        j = i.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: l } = t;
                if (null == e) return null;
                let i = e.orbsReward;
                if (null != i && i > 0) {
                    let e = l ? F.t["ZV+aS9"] : F.t["0StwHe"];
                    return {
                        Icon: T.C,
                        text: F.intl.format(e, { orbCount: i }),
                        gradientColor: n === G.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(r, { productLine: n.productLine, isGift: y });
            return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
        }, [r, y, n.productLine]),
        { setHeaderBadgeText: L, unsetHeaderBadgeText: D } = (0, d.v)();
    return (
        i.useEffect(
            () => (
                null != j && L(F.intl.string(Y.default.Fjpyfj)),
                () => {
                    D();
                }
            ),
            [j, L, D],
        ),
        (0, l.jsx)(c.T_, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: (0, l.jsx)(m.f7, { ...b, price: N }),
            invoiceSummaryContent: R,
            paymentMethodContent: u,
            legalContent: f,
            promotionalNoticeContent: j,
            upperInlineNoticeProps: _,
            footerInlineNoticeProps: I,
            invoiceTotalDueLabel: M,
            invoiceTotalDueValue: O,
        })
    );
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
            warningAndErrorMessages: C,
            disabled: h,
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
                { hasPaymentSources: o } = (0, R.jm)(),
                { application: u, isEmbeddedIAP: c } = (0, N.V)(),
                d = (0, P.bG)([_.A], () => _.A.getFetchState()),
                { checkoutPaymentSources: p, hasInvoiceOrderContextLoaded: m } = (0, x.t)(),
                C = (0, b.gU)(),
                { isGift: h, giftRecipient: E } = (0, w.Pv)(),
                A = h && (0, D.Ik)(E),
                { fetched: S, hasAlreadyLinked: f } = (0, I.RD)(u);
            y()(null != e, "Expected selectedSkuId");
            let T = C[e],
                B = T?.eligiblePaymentGateways;
            y()(null != T, "SKU must exist and be fetched."), y()(null != u, "Application must exist.");
            let Y = (0, O.uS)(u.id),
                H = t === U.h.PURCHASING || t === U.h.COMPLETED,
                W = p.find((e) => e.id === r) ?? null,
                V = null != W ? W.type : null,
                K = null != B && B.length > 0 && (null == r || null === V) && o ? j.fU.SELECT_PAYMENT_METHOD : void 0,
                Z = T.productLine === G.EZt.SOCIAL_LAYER_GAME_ITEM,
                q = A && !Z,
                z = i.useMemo(
                    () => ({
                        testModeWarning: Y ? F.intl.string(F.t.OvMyMd) : null,
                        devShelfError:
                            (0, g.n)(u, G.gfo.EMBEDDED) && d === _.$.ERROR ? F.intl.string(F.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: Z && S && !f && !h ? (0, L.k3)(u) : null,
                    }),
                    [Y, u, d, Z, S, f, h],
                ),
                $ = i.useMemo(
                    () =>
                        s === v.C.SLAYER_STOREFRONT_CHECKOUT
                            ? (0, l.jsx)(k.EB, { paymentSourceType: V, skuId: T.id, isGift: h })
                            : (0, l.jsx)(k.T3, { paymentSourceType: V }),
                    [V, s, T.id, h],
                );
            return {
                sku: T,
                application: u,
                giftRecipient: E,
                isGift: h,
                invoicePreview: n,
                isEmbeddedIAP: c,
                shouldShowPurchaseReviewImage: q,
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
        E = i.useMemo(() => ({ paymentGatewayRestrictions: o, shouldUseUnifiedCheckoutUI: !0 }), [o]),
        A = (0, l.jsx)(u.N, {
            label: F.intl.string(F.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: E,
            disabled: h,
        }),
        S = i.useMemo(() => {
            let e = [];
            return (
                null != C.testModeWarning &&
                    e.push({ type: "warning", message: C.testModeWarning, key: "test-mode-warning-notice" }),
                null != C.devShelfError &&
                    e.push({ type: "critical", message: C.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [C.testModeWarning, C.devShelfError]),
        f = i.useMemo(() => {
            let e = [];
            return (
                null != C.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: C.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [C.socialLayerGameItemDisclaimer]);
    return p
        ? (0, l.jsx)(c.Ed, {})
        : (0, l.jsx)(Z, {
              application: r,
              giftRecipient: m,
              isGift: s,
              sku: n,
              invoicePreview: a,
              paymentMethodContent: A,
              legalContent: d,
              upperInlineNoticeProps: S,
              footerInlineNoticeProps: f,
          });
}
