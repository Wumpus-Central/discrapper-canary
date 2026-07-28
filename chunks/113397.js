n.d(t, { dL: () => q, Ay: () => J, oO: () => Q }), n(321073);
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
    m = n(316915),
    C = n(993408),
    h = n(223311),
    E = n(287809),
    f = n(486020),
    A = n(428262),
    S = n(580630),
    y = n(284009),
    P = n.n(y),
    I = n(17928),
    _ = n(318254),
    T = n(10716),
    g = n(206828),
    v = n(20015),
    x = n(120700),
    N = n(202475),
    R = n(364995),
    b = n(31823),
    M = n(427675),
    j = n(629042),
    O = n(288106),
    L = n(977445),
    w = n(812095),
    k = n(218075),
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
function Q(e) {
    let t = W.intl.string(K.default.iZe9Wy);
    if (null == e);
    else if (e.type in z) return (0, z[e.type])();
    return t;
}
function $(e) {
    let {
            application: t,
            sku: n,
            invoicePreview: r,
            paymentMethodContent: u,
            legalContent: y,
            isGift: P,
            giftRecipient: I,
            upperInlineNoticeProps: T,
            footerInlineNoticeProps: g,
        } = e,
        { product: v, isSocialLayerGameItem: N } = (0, V.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: R, priceText: b } = i.useMemo(
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
        M = i.useMemo(() => (null != R ? (0, l.jsx)(d.Vm, { ...R }) : null), [R]),
        L = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, product: n, application: i, isSocialLayerGameItem: r, giftRecipient: o } = e,
                        u = W.intl.string(K.default.iZe9Wy);
                    r
                        ? (u = W.intl.string(K.default.qwSlCO))
                        : null != n
                          ? (u = Q(n))
                          : t.productLine === Y.EZt.GUILD_PRODUCT && (u = W.intl.string(K.default.hewwdA));
                    let c = r
                            ? {
                                  header: i.name,
                                  headerIconSrc: f.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }),
                              }
                            : {},
                        d = (0, l.jsx)(p.WH, { sku: t, product: n }),
                        m = {};
                    return (
                        null != n &&
                            (m = (function (e) {
                                let t = E.default.getCurrentUser(),
                                    n = A.Ay.canUseShopDiscounts(t),
                                    l = (0, C.xM)(t),
                                    i = (0, C.WD)(e, { hasShopDiscount: n, discount: (0, C.fT)(e, n) });
                                if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                                    if (l === C.D0.NITRO)
                                        return { PriceIcon: a.t, priceTooltip: W.intl.string(K.default.YUNJJa) };
                                    if (l === C.D0.THIRDPARTY)
                                        return { PriceIcon: s.g, priceTooltip: W.intl.string(Z.default.DePOcS) };
                                }
                                return {};
                            })(n)),
                        {
                            ...c,
                            ...m,
                            label: q(t),
                            description: u,
                            graphic: d,
                            target: null != o ? { type: "gift", user: o } : void 0,
                        }
                    );
                })({ sku: n, product: v, application: t, isSocialLayerGameItem: N, giftRecipient: I }),
            [n, v, t, N, I],
        ),
        [k, U] = i.useMemo(
            () => [W.intl.string(K.default.Zxav97), null != r ? (0, S.$g)(r.total, r.currency) : void 0],
            [r],
        ),
        D = (0, h.A)(Y.FYj),
        F = (0, m.t4)((e) => e.unifiedCheckoutFlow),
        H = i.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: l, product: i, promotion: r, unifiedCheckoutFlow: o } = t;
                if (o === x.C.COLLECTIBLES_CHECKOUT && null != i) {
                    let e = (0, j.L0)(i, r),
                        t = e?.tenantMetadata?.collectibles?.reward?.checkout?.offerNotice,
                        n = t?.text;
                    if (!(0, G.uJ)(n))
                        return {
                            Icon: (function (e) {
                                switch (e) {
                                    case O.cR.TAG:
                                        return s.g;
                                    case O.cR.NITRO:
                                        return a.t;
                                    default:
                                        return null;
                                }
                            })(t?.icon),
                            text: (0, w.U)(n),
                            gradientColor: t?.icon === O.cR.NITRO ? "nitro-pink" : "collectibles",
                        };
                }
                if (null == e) return null;
                let u = e.orbsReward;
                if (null != u && u > 0) {
                    let e = l ? W.t["ZV+aS9"] : W.t["0StwHe"];
                    return {
                        Icon: _.C,
                        text: W.intl.format(e, { orbCount: u }),
                        gradientColor: n === Y.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(r, { productLine: n.productLine, isGift: P, product: v, promotion: D, unifiedCheckoutFlow: F });
            return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
        }, [r, P, v, D, n.productLine, F]),
        B = i.useMemo(() => (null != H ? { headerBadgeText: W.intl.string(K.default.Fjpyfj) } : {}), [H]);
    return (0, l.jsx)(c.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: B,
        purchaseItemContent: (0, l.jsx)(p.f7, { ...L, price: b }),
        invoiceSummaryContent: M,
        paymentMethodContent: u,
        legalContent: y,
        promotionalNoticeContent: H,
        upperInlineNoticeProps: T,
        footerInlineNoticeProps: g,
        invoiceTotalDueLabel: k,
        invoiceTotalDueValue: U,
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
            purchaseTermsAndLegalContent: d,
            isStepLoading: p,
            giftRecipient: C,
            warningAndErrorMessages: h,
            disabled: E,
        } = (function () {
            let {
                    selectedSkuId: e,
                    purchaseState: t,
                    checkoutInvoicePreview: n,
                    paymentSourceId: r,
                    purchasePreviewError: a,
                    unifiedCheckoutFlow: s,
                } = (0, m.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                })),
                { hasPaymentSources: o } = (0, N.jm)(),
                { application: u, isEmbeddedIAP: c } = (0, b.V)(),
                d = (0, I.bG)([T.A], () => T.A.getFetchState()),
                { checkoutPaymentSources: p, hasInvoiceOrderContextLoaded: C } = (0, R.t)(),
                h = (0, M.gU)(),
                { isGift: E, giftRecipient: f } = (0, F.Pv)(),
                A = E && (0, D.Ik)(f),
                { fetched: S, hasAlreadyLinked: y } = (0, g.RD)(u);
            P()(null != e, "Expected selectedSkuId");
            let _ = h[e],
                j = _?.eligiblePaymentGateways;
            P()(null != _, "SKU must exist and be fetched."), P()(null != u, "Application must exist.");
            let O = (0, L.uS)(u.id),
                w = t === H.h.PURCHASING || t === H.h.COMPLETED,
                G = p.find((e) => e.id === r) ?? null,
                V = null != G ? G.type : null,
                K = null != j && j.length > 0 && (null == r || null === V) && o ? k.fU.SELECT_PAYMENT_METHOD : void 0,
                Z = _.productLine === Y.EZt.SOCIAL_LAYER_GAME_ITEM,
                q = A && !Z,
                z = i.useMemo(
                    () => ({
                        testModeWarning: O ? W.intl.string(W.t.OvMyMd) : null,
                        devShelfError:
                            (0, v.n)(u, Y.gfo.EMBEDDED) && d === T.$.ERROR ? W.intl.string(W.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: Z && S && !y && !E ? (0, U.k3)(u) : null,
                    }),
                    [O, u, d, Z, S, y, E],
                ),
                Q = i.useMemo(
                    () =>
                        s === x.C.SLAYER_STOREFRONT_CHECKOUT
                            ? (0, l.jsx)(B.EB, { paymentSourceType: V, skuId: _.id, isGift: E })
                            : (0, l.jsx)(B.T3, { paymentSourceType: V }),
                    [V, s, _.id, E],
                );
            return {
                sku: _,
                application: u,
                giftRecipient: f,
                isGift: E,
                invoicePreview: n,
                isEmbeddedIAP: c,
                shouldShowPurchaseReviewImage: q,
                paymentRestrictionBannerType: K,
                devShelfFetchState: d,
                isStepLoading: !C && null == a,
                purchasePreviewError: a,
                warningAndErrorMessages: z,
                purchaseTermsAndLegalContent: Q,
                eligiblePaymentGateways: j,
                disabled: w,
            };
        })(),
        f = i.useMemo(() => ({ paymentGatewayRestrictions: o, shouldUseUnifiedCheckoutUI: !0 }), [o]),
        A = (0, l.jsx)(u.N, {
            label: W.intl.string(W.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: f,
            disabled: E,
        }),
        S = i.useMemo(() => {
            let e = [];
            return (
                null != h.testModeWarning &&
                    e.push({ type: "warning", message: h.testModeWarning, key: "test-mode-warning-notice" }),
                null != h.devShelfError &&
                    e.push({ type: "critical", message: h.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [h.testModeWarning, h.devShelfError]),
        y = i.useMemo(() => {
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
        : (0, l.jsx)($, {
              application: r,
              giftRecipient: C,
              isGift: s,
              sku: n,
              invoicePreview: a,
              paymentMethodContent: A,
              legalContent: d,
              upperInlineNoticeProps: S,
              footerInlineNoticeProps: y,
          });
}
