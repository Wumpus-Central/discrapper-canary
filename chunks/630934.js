n.d(t, { dL: () => z, Ay: () => X, oO: () => $ }), n(321073);
var l = n(477900),
    i = n(582128),
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
    h = n(80151),
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
    O = n(151115),
    L = n(977445),
    w = n(812095),
    k = n(218075),
    U = n(118982),
    D = n(288106),
    G = n(45938),
    F = n(240248),
    H = n(951305),
    B = n(566980),
    Y = n(52635),
    W = n(652215),
    V = n(375708),
    K = n(319820),
    Z = n(327105),
    q = n(594387);
function z(e) {
    return e.name;
}
let Q = {
    [r.R.BUNDLE]: () => V.intl.string(Z.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => V.intl.string(Z.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => V.intl.string(Z.default.eTYAvF),
    [r.R.NAMEPLATE]: () => V.intl.string(Z.default.of9bom),
    [r.R.PROFILE_FRAME]: () => V.intl.string(Z.default.HzDn6w),
};
function $(e) {
    let t = V.intl.string(Z.default.iZe9Wy);
    if (null == e);
    else if (e.type in Q) return (0, Q[e.type])();
    return t;
}
function J(e) {
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
        { product: v, isSocialLayerGameItem: N } = (0, K.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: R, priceText: b } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, K.yh)({ invoicePreview: n });
                        return (
                            l.push({ id: "sku", label: z(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: V.intl.string(V.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: V.intl.string(Z.default.eoXh7B),
                                    currency: n.currency,
                                    defaultExpanded: null != e,
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
                        u = V.intl.string(Z.default.iZe9Wy);
                    r
                        ? (u = V.intl.string(Z.default.qwSlCO))
                        : null != n
                          ? (u = $(n))
                          : t.productLine === W.EZt.GUILD_PRODUCT && (u = V.intl.string(Z.default.hewwdA));
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
                                        return { PriceIcon: a.t, priceTooltip: V.intl.string(Z.default.YUNJJa) };
                                    if (l === C.D0.THIRDPARTY)
                                        return { PriceIcon: s.g, priceTooltip: V.intl.string(q.default.DePOcS) };
                                }
                                return {};
                            })(n)),
                        {
                            ...c,
                            ...m,
                            label: z(t),
                            description: u,
                            graphic: d,
                            target: null != o ? { type: "gift", user: o } : void 0,
                        }
                    );
                })({ sku: n, product: v, application: t, isSocialLayerGameItem: N, giftRecipient: I }),
            [n, v, t, N, I],
        ),
        [k, U] = i.useMemo(
            () => [V.intl.string(Z.default.Zxav97), null != r ? (0, S.$g)(r.total, r.currency) : void 0],
            [r],
        ),
        G = (0, h.A)(),
        H = (0, m.t4)((e) => e.unifiedCheckoutFlow),
        B = i.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: l, product: i, promotion: r, unifiedCheckoutFlow: a } = t;
                if (a === x.C.COLLECTIBLES_CHECKOUT && null != i) {
                    let e = (0, j.L0)(i, r),
                        t = e?.tenantMetadata?.collectibles?.reward?.checkout?.offerNotice,
                        n = t?.text;
                    if (!(0, F.uJ)(n))
                        return {
                            Icon: (0, O.s)(t?.icon),
                            text: (0, w.U)(n),
                            gradientColor: t?.icon === D.cR.NITRO ? "nitro-pink" : "collectibles",
                        };
                }
                if (null == e) return null;
                let s = e.orbsReward;
                if (null != s && s > 0) {
                    let e = l ? V.t["ZV+aS9"] : V.t["0StwHe"];
                    return {
                        Icon: _.C,
                        text: V.intl.format(e, { orbCount: s }),
                        gradientColor: n === W.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(r, { productLine: n.productLine, isGift: P, product: v, promotion: G, unifiedCheckoutFlow: H });
            return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
        }, [r, P, v, G, n.productLine, H]),
        Y = i.useMemo(() => (null != B ? { headerBadgeText: V.intl.string(Z.default.Fjpyfj) } : {}), [B]);
    return (0, l.jsx)(c.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: Y,
        purchaseItemContent: (0, l.jsx)(p.f7, { ...L, price: b }),
        invoiceSummaryContent: M,
        paymentMethodContent: u,
        legalContent: y,
        promotionalNoticeContent: B,
        upperInlineNoticeProps: T,
        footerInlineNoticeProps: g,
        invoiceTotalDueLabel: k,
        invoiceTotalDueValue: U,
    });
}
function X(e) {
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
                { isGift: E, giftRecipient: f } = (0, H.Pv)(),
                A = E && (0, G.Ik)(f),
                { fetched: S, hasAlreadyLinked: y } = (0, g.RD)(u);
            P()(null != e, "Expected selectedSkuId");
            let _ = h[e],
                j = _?.eligiblePaymentGateways;
            P()(null != _, "SKU must exist and be fetched."), P()(null != u, "Application must exist.");
            let O = (0, L.uS)(u.id),
                w = t === B.h.PURCHASING || t === B.h.COMPLETED,
                D = p.find((e) => e.id === r) ?? null,
                F = null != D ? D.type : null,
                K = null != j && j.length > 0 && (null == r || null === F) && o ? k.fU.SELECT_PAYMENT_METHOD : void 0,
                Z = _.productLine === W.EZt.SOCIAL_LAYER_GAME_ITEM,
                q = A && !Z,
                z = i.useMemo(
                    () => ({
                        testModeWarning: O ? V.intl.string(V.t.OvMyMd) : null,
                        devShelfError:
                            (0, v.n)(u, W.gfo.EMBEDDED) && d === T.$.ERROR ? V.intl.string(V.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: Z && S && !y && !E ? (0, U.k3)(u) : null,
                    }),
                    [O, u, d, Z, S, y, E],
                ),
                Q = i.useMemo(
                    () =>
                        s === x.C.SLAYER_STOREFRONT_CHECKOUT
                            ? (0, l.jsx)(Y.EB, { paymentSourceType: F, skuId: _.id, isGift: E })
                            : (0, l.jsx)(Y.T3, { paymentSourceType: F }),
                    [F, s, _.id, E],
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
            label: V.intl.string(V.t["u+Cw58"]),
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
        : (0, l.jsx)(J, {
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
