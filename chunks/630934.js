n.d(t, { dL: () => z, Ay: () => X, oO: () => $ }), n(321073);
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
    C = n(316915),
    h = n(993408),
    f = n(80151),
    E = n(629042),
    A = n(151115),
    S = n(287809),
    y = n(486020),
    P = n(158045),
    I = n(580630),
    _ = n(1076),
    T = n(284009),
    g = n.n(T),
    v = n(17928),
    x = n(318254),
    N = n(10716),
    R = n(206828),
    b = n(20015),
    M = n(202475),
    j = n(364995),
    O = n(31823),
    L = n(427675),
    w = n(977445),
    k = n(812095),
    U = n(218075),
    D = n(118982),
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
            paymentMethodContent: c,
            legalContent: T,
            isGift: g,
            giftRecipient: v,
            upperInlineNoticeProps: N,
            footerInlineNoticeProps: R,
        } = e,
        { product: b, isSocialLayerGameItem: M } = (0, K.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: j, priceText: O } = i.useMemo(
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
                                priceText: (0, I.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: n, invoicePreview: r }),
            [n, r],
        ),
        L = i.useMemo(() => (null != j ? (0, l.jsx)(p.Vm, { ...j }) : null), [j]),
        w = i.useMemo(
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
                                  headerIconSrc: y.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }),
                              }
                            : {},
                        d = (0, l.jsx)(m.WH, { sku: t, product: n }),
                        p = {};
                    return (
                        null != n &&
                            (p = (function (e) {
                                let t = S.default.getCurrentUser(),
                                    n = P.Ay.canUseShopDiscounts(t),
                                    l = (0, h.xM)(t),
                                    i = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                                if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                                    if (l === h.D0.NITRO)
                                        return { PriceIcon: a.t, priceTooltip: V.intl.string(Z.default.YUNJJa) };
                                    if (l === h.D0.THIRDPARTY)
                                        return { PriceIcon: s.g, priceTooltip: V.intl.string(q.default.DePOcS) };
                                }
                                return {};
                            })(n)),
                        {
                            ...c,
                            ...p,
                            label: z(t),
                            description: u,
                            graphic: d,
                            target: null != o ? { type: "gift", user: o } : void 0,
                        }
                    );
                })({ sku: n, product: b, application: t, isSocialLayerGameItem: M, giftRecipient: v }),
            [n, b, t, M, v],
        ),
        [U, D] = i.useMemo(
            () => [V.intl.string(Z.default.Zxav97), null != r ? (0, I.$g)(r.total, r.currency) : void 0],
            [r],
        ),
        G = (0, f.A)(),
        H = (0, C.t4)((e) => e.unifiedCheckoutFlow),
        { setCollectedModalOverrideTitle: B, setCollectedModalGradientColor: Y } = (0, _.z)(),
        Q = H === u.C.COLLECTIBLES_CHECKOUT && null != b ? (0, E.L0)(b, G) : null;
    i.useEffect(() => {
        B(Q?.tenantMetadata?.collectibles?.reward?.collected?.overrideTitle),
            Y(null != Q ? (0, A.KD)(Q.tenantMetadata?.collectibles?.reward?.flavor) : void 0);
    }, [Q, B, Y]);
    let J = i.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: l, product: i, promotion: r, unifiedCheckoutFlow: a } = t;
                if (a === u.C.COLLECTIBLES_CHECKOUT && null != i) {
                    let e = (0, E.L0)(i, r),
                        t = e?.tenantMetadata?.collectibles?.reward?.checkout?.offerNotice,
                        n = e?.tenantMetadata?.collectibles?.reward?.flavor,
                        l = t?.text;
                    if (!(0, F.uJ)(l))
                        return { Icon: (0, A.sj)(t?.icon), text: (0, k.U)(l), gradientColor: (0, A.lx)(n) };
                }
                if (null == e) return null;
                let s = e.orbsReward;
                if (null != s && s > 0) {
                    let e = l ? V.t["ZV+aS9"] : V.t["0StwHe"];
                    return {
                        Icon: x.C,
                        text: V.intl.format(e, { orbCount: s }),
                        gradientColor: n === W.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(r, { productLine: n.productLine, isGift: g, product: b, promotion: G, unifiedCheckoutFlow: H });
            return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
        }, [r, g, b, G, n.productLine, H]),
        X = i.useMemo(() => (null != J ? { headerBadgeText: V.intl.string(Z.default.Fjpyfj) } : {}), [J]);
    return (0, l.jsx)(d.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: X,
        purchaseItemContent: (0, l.jsx)(m.f7, { ...w, price: O }),
        invoiceSummaryContent: L,
        paymentMethodContent: c,
        legalContent: T,
        promotionalNoticeContent: J,
        upperInlineNoticeProps: N,
        footerInlineNoticeProps: R,
        invoiceTotalDueLabel: U,
        invoiceTotalDueValue: D,
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
                } = (0, C.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                    isCheckoutDataLoading: e.get("isCheckoutDataLoading"),
                })),
                { hasPaymentSources: c } = (0, M.jm)(),
                { application: d, isEmbeddedIAP: p } = (0, O.V)(),
                m = (0, v.bG)([N.A], () => N.A.getFetchState()),
                { checkoutPaymentSources: h } = (0, j.t)(),
                f = (0, L.gU)(),
                { isGift: E, giftRecipient: A } = (0, H.Pv)(),
                S = E && (0, G.Ik)(A),
                { fetched: y, hasAlreadyLinked: P } = (0, R.RD)(d);
            g()(null != e, "Expected selectedSkuId");
            let I = f[e],
                _ = I?.eligiblePaymentGateways;
            g()(null != I, "SKU must exist and be fetched."), g()(null != d, "Application must exist.");
            let T = (0, w.uS)(d.id),
                x = t === B.h.PURCHASING || t === B.h.COMPLETED,
                k = h.find((e) => e.id === r) ?? null,
                F = null != k ? k.type : null,
                K = null != _ && _.length > 0 && (null == r || null === F) && c ? U.fU.SELECT_PAYMENT_METHOD : void 0,
                Z = I.productLine === W.EZt.SOCIAL_LAYER_GAME_ITEM,
                q = S && !Z,
                z = i.useMemo(
                    () => ({
                        testModeWarning: T ? V.intl.string(V.t.OvMyMd) : null,
                        devShelfError:
                            (0, b.n)(d, W.gfo.EMBEDDED) && m === N.$.ERROR ? V.intl.string(V.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: Z && y && !P && !E ? (0, D.k3)(d) : null,
                    }),
                    [T, d, m, Z, y, P, E],
                ),
                Q = i.useMemo(
                    () =>
                        s === u.C.SLAYER_STOREFRONT_CHECKOUT
                            ? (0, l.jsx)(Y.EB, { paymentSourceType: F, skuId: I.id, isGift: E })
                            : (0, l.jsx)(Y.T3, { paymentSourceType: F }),
                    [F, s, I.id, E],
                );
            return {
                sku: I,
                application: d,
                giftRecipient: A,
                isGift: E,
                invoicePreview: n,
                isEmbeddedIAP: p,
                shouldShowPurchaseReviewImage: q,
                paymentRestrictionBannerType: K,
                devShelfFetchState: m,
                isStepLoading: o,
                purchasePreviewError: a,
                warningAndErrorMessages: z,
                purchaseTermsAndLegalContent: Q,
                eligiblePaymentGateways: _,
                disabled: x,
            };
        })(),
        A = i.useMemo(() => ({ paymentGatewayRestrictions: o, shouldUseUnifiedCheckoutUI: !0 }), [o]),
        S = (0, l.jsx)(c.N, {
            label: V.intl.string(V.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: A,
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
        : (0, l.jsx)(J, {
              application: r,
              giftRecipient: h,
              isGift: s,
              sku: n,
              invoicePreview: a,
              paymentMethodContent: S,
              legalContent: p,
              upperInlineNoticeProps: y,
              footerInlineNoticeProps: P,
          });
}
