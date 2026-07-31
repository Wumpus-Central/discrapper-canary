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
    A = n(287809),
    S = n(486020),
    y = n(428262),
    P = n(580630),
    I = n(1076),
    _ = n(284009),
    T = n.n(_),
    g = n(17928),
    v = n(318254),
    x = n(10716),
    N = n(206828),
    R = n(20015),
    b = n(202475),
    M = n(364995),
    j = n(31823),
    O = n(427675),
    L = n(151115),
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
            legalContent: _,
            isGift: T,
            giftRecipient: g,
            upperInlineNoticeProps: x,
            footerInlineNoticeProps: N,
        } = e,
        { product: R, isSocialLayerGameItem: b } = (0, K.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: M, priceText: j } = i.useMemo(
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
                                priceText: (0, P.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: n, invoicePreview: r }),
            [n, r],
        ),
        O = i.useMemo(() => (null != M ? (0, l.jsx)(p.Vm, { ...M }) : null), [M]),
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
                                  headerIconSrc: S.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }),
                              }
                            : {},
                        d = (0, l.jsx)(m.WH, { sku: t, product: n }),
                        p = {};
                    return (
                        null != n &&
                            (p = (function (e) {
                                let t = A.default.getCurrentUser(),
                                    n = y.Ay.canUseShopDiscounts(t),
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
                })({ sku: n, product: R, application: t, isSocialLayerGameItem: b, giftRecipient: g }),
            [n, R, t, b, g],
        ),
        [U, D] = i.useMemo(
            () => [V.intl.string(Z.default.Zxav97), null != r ? (0, P.$g)(r.total, r.currency) : void 0],
            [r],
        ),
        G = (0, f.A)(),
        H = (0, C.t4)((e) => e.unifiedCheckoutFlow),
        { setCollectedModalOverrideTitle: B } = (0, I.z)(),
        Y = H === u.C.COLLECTIBLES_CHECKOUT && null != R ? (0, E.L0)(R, G) : null;
    i.useEffect(() => {
        B(Y?.tenantMetadata?.collectibles?.reward?.collected?.overrideTitle);
    }, [Y, B]);
    let Q = i.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: l, product: i, promotion: r, unifiedCheckoutFlow: a } = t;
                if (a === u.C.COLLECTIBLES_CHECKOUT && null != i) {
                    let e = (0, E.L0)(i, r),
                        t = e?.tenantMetadata?.collectibles?.reward?.checkout?.offerNotice,
                        n = e?.tenantMetadata?.collectibles?.reward?.flavor,
                        l = t?.text;
                    if (!(0, F.uJ)(l))
                        return { Icon: (0, L.s)(t?.icon), text: (0, k.U)(l), gradientColor: (0, L.l)(n) };
                }
                if (null == e) return null;
                let s = e.orbsReward;
                if (null != s && s > 0) {
                    let e = l ? V.t["ZV+aS9"] : V.t["0StwHe"];
                    return {
                        Icon: v.C,
                        text: V.intl.format(e, { orbCount: s }),
                        gradientColor: n === W.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(r, { productLine: n.productLine, isGift: T, product: R, promotion: G, unifiedCheckoutFlow: H });
            return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
        }, [r, T, R, G, n.productLine, H]),
        J = i.useMemo(() => (null != Q ? { headerBadgeText: V.intl.string(Z.default.Fjpyfj) } : {}), [Q]);
    return (0, l.jsx)(d.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: J,
        purchaseItemContent: (0, l.jsx)(m.f7, { ...w, price: j }),
        invoiceSummaryContent: O,
        paymentMethodContent: c,
        legalContent: _,
        promotionalNoticeContent: Q,
        upperInlineNoticeProps: x,
        footerInlineNoticeProps: N,
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
                { hasPaymentSources: c } = (0, b.jm)(),
                { application: d, isEmbeddedIAP: p } = (0, j.V)(),
                m = (0, g.bG)([x.A], () => x.A.getFetchState()),
                { checkoutPaymentSources: h } = (0, M.t)(),
                f = (0, O.gU)(),
                { isGift: E, giftRecipient: A } = (0, H.Pv)(),
                S = E && (0, G.Ik)(A),
                { fetched: y, hasAlreadyLinked: P } = (0, N.RD)(d);
            T()(null != e, "Expected selectedSkuId");
            let I = f[e],
                _ = I?.eligiblePaymentGateways;
            T()(null != I, "SKU must exist and be fetched."), T()(null != d, "Application must exist.");
            let v = (0, w.uS)(d.id),
                L = t === B.h.PURCHASING || t === B.h.COMPLETED,
                k = h.find((e) => e.id === r) ?? null,
                F = null != k ? k.type : null,
                K = null != _ && _.length > 0 && (null == r || null === F) && c ? U.fU.SELECT_PAYMENT_METHOD : void 0,
                Z = I.productLine === W.EZt.SOCIAL_LAYER_GAME_ITEM,
                q = S && !Z,
                z = i.useMemo(
                    () => ({
                        testModeWarning: v ? V.intl.string(V.t.OvMyMd) : null,
                        devShelfError:
                            (0, R.n)(d, W.gfo.EMBEDDED) && m === x.$.ERROR ? V.intl.string(V.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: Z && y && !P && !E ? (0, D.k3)(d) : null,
                    }),
                    [v, d, m, Z, y, P, E],
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
                disabled: L,
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
