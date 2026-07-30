n.d(t, { dL: () => Q, Ay: () => ee, oO: () => J }), n(321073);
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
    E = n(80151),
    f = n(629042),
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
    G = n(288106),
    F = n(45938),
    H = n(240248),
    B = n(951305),
    Y = n(566980),
    W = n(52635),
    V = n(652215),
    K = n(375708),
    Z = n(319820),
    q = n(327105),
    z = n(594387);
function Q(e) {
    return e.name;
}
let $ = {
    [r.R.BUNDLE]: () => K.intl.string(q.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => K.intl.string(q.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => K.intl.string(q.default.eTYAvF),
    [r.R.NAMEPLATE]: () => K.intl.string(q.default.of9bom),
    [r.R.PROFILE_FRAME]: () => K.intl.string(q.default.HzDn6w),
};
function J(e) {
    let t = K.intl.string(q.default.iZe9Wy);
    if (null == e);
    else if (e.type in $) return (0, $[e.type])();
    return t;
}
function X(e) {
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
        { product: R, isSocialLayerGameItem: b } = (0, Z.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: M, priceText: j } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, Z.yh)({ invoicePreview: n });
                        return (
                            l.push({ id: "sku", label: Q(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: K.intl.string(K.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: K.intl.string(q.default.eoXh7B),
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
                        u = K.intl.string(q.default.iZe9Wy);
                    r
                        ? (u = K.intl.string(q.default.qwSlCO))
                        : null != n
                          ? (u = J(n))
                          : t.productLine === V.EZt.GUILD_PRODUCT && (u = K.intl.string(q.default.hewwdA));
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
                                        return { PriceIcon: a.t, priceTooltip: K.intl.string(q.default.YUNJJa) };
                                    if (l === h.D0.THIRDPARTY)
                                        return { PriceIcon: s.g, priceTooltip: K.intl.string(z.default.DePOcS) };
                                }
                                return {};
                            })(n)),
                        {
                            ...c,
                            ...p,
                            label: Q(t),
                            description: u,
                            graphic: d,
                            target: null != o ? { type: "gift", user: o } : void 0,
                        }
                    );
                })({ sku: n, product: R, application: t, isSocialLayerGameItem: b, giftRecipient: g }),
            [n, R, t, b, g],
        ),
        [U, D] = i.useMemo(
            () => [K.intl.string(q.default.Zxav97), null != r ? (0, P.$g)(r.total, r.currency) : void 0],
            [r],
        ),
        F = (0, E.A)(),
        B = (0, C.t4)((e) => e.unifiedCheckoutFlow),
        { setCollectedModalOverrideTitle: Y } = (0, I.z)(),
        W = B === u.C.COLLECTIBLES_CHECKOUT && null != R ? (0, f.L0)(R, F) : null;
    i.useEffect(() => {
        Y(W?.tenantMetadata?.collectibles?.reward?.collected?.overrideTitle);
    }, [W, Y]);
    let $ = i.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: l, product: i, promotion: r, unifiedCheckoutFlow: a } = t;
                if (a === u.C.COLLECTIBLES_CHECKOUT && null != i) {
                    let e = (0, f.L0)(i, r),
                        t = e?.tenantMetadata?.collectibles?.reward?.checkout?.offerNotice,
                        n = t?.text;
                    if (!(0, H.uJ)(n))
                        return {
                            Icon: (0, L.s)(t?.icon),
                            text: (0, k.U)(n),
                            gradientColor: t?.icon === G.cR.NITRO ? "nitro-pink" : "collectibles",
                        };
                }
                if (null == e) return null;
                let s = e.orbsReward;
                if (null != s && s > 0) {
                    let e = l ? K.t["ZV+aS9"] : K.t["0StwHe"];
                    return {
                        Icon: v.C,
                        text: K.intl.format(e, { orbCount: s }),
                        gradientColor: n === V.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(r, { productLine: n.productLine, isGift: T, product: R, promotion: F, unifiedCheckoutFlow: B });
            return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
        }, [r, T, R, F, n.productLine, B]),
        X = i.useMemo(() => (null != $ ? { headerBadgeText: K.intl.string(q.default.Fjpyfj) } : {}), [$]);
    return (0, l.jsx)(d.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: X,
        purchaseItemContent: (0, l.jsx)(m.f7, { ...w, price: j }),
        invoiceSummaryContent: O,
        paymentMethodContent: c,
        legalContent: _,
        promotionalNoticeContent: $,
        upperInlineNoticeProps: x,
        footerInlineNoticeProps: N,
        invoiceTotalDueLabel: U,
        invoiceTotalDueValue: D,
    });
}
function ee(e) {
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
            warningAndErrorMessages: E,
            disabled: f,
        } = (function () {
            let {
                    selectedSkuId: e,
                    purchaseState: t,
                    checkoutInvoicePreview: n,
                    paymentSourceId: r,
                    purchasePreviewError: a,
                    unifiedCheckoutFlow: s,
                } = (0, C.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                })),
                { hasPaymentSources: o } = (0, b.jm)(),
                { application: c, isEmbeddedIAP: d } = (0, j.V)(),
                p = (0, g.bG)([x.A], () => x.A.getFetchState()),
                { checkoutPaymentSources: m, hasInvoiceOrderContextLoaded: h } = (0, M.t)(),
                E = (0, O.gU)(),
                { isGift: f, giftRecipient: A } = (0, B.Pv)(),
                S = f && (0, F.Ik)(A),
                { fetched: y, hasAlreadyLinked: P } = (0, N.RD)(c);
            T()(null != e, "Expected selectedSkuId");
            let I = E[e],
                _ = I?.eligiblePaymentGateways;
            T()(null != I, "SKU must exist and be fetched."), T()(null != c, "Application must exist.");
            let v = (0, w.uS)(c.id),
                L = t === Y.h.PURCHASING || t === Y.h.COMPLETED,
                k = m.find((e) => e.id === r) ?? null,
                G = null != k ? k.type : null,
                H = null != _ && _.length > 0 && (null == r || null === G) && o ? U.fU.SELECT_PAYMENT_METHOD : void 0,
                Z = I.productLine === V.EZt.SOCIAL_LAYER_GAME_ITEM,
                q = S && !Z,
                z = i.useMemo(
                    () => ({
                        testModeWarning: v ? K.intl.string(K.t.OvMyMd) : null,
                        devShelfError:
                            (0, R.n)(c, V.gfo.EMBEDDED) && p === x.$.ERROR ? K.intl.string(K.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: Z && y && !P && !f ? (0, D.k3)(c) : null,
                    }),
                    [v, c, p, Z, y, P, f],
                ),
                Q = i.useMemo(
                    () =>
                        s === u.C.SLAYER_STOREFRONT_CHECKOUT
                            ? (0, l.jsx)(W.EB, { paymentSourceType: G, skuId: I.id, isGift: f })
                            : (0, l.jsx)(W.T3, { paymentSourceType: G }),
                    [G, s, I.id, f],
                );
            return {
                sku: I,
                application: c,
                giftRecipient: A,
                isGift: f,
                invoicePreview: n,
                isEmbeddedIAP: d,
                shouldShowPurchaseReviewImage: q,
                paymentRestrictionBannerType: H,
                devShelfFetchState: p,
                isStepLoading: !h && null == a,
                purchasePreviewError: a,
                warningAndErrorMessages: z,
                purchaseTermsAndLegalContent: Q,
                eligiblePaymentGateways: _,
                disabled: L,
            };
        })(),
        A = i.useMemo(() => ({ paymentGatewayRestrictions: o, shouldUseUnifiedCheckoutUI: !0 }), [o]),
        S = (0, l.jsx)(c.N, {
            label: K.intl.string(K.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: A,
            disabled: f,
        }),
        y = i.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning &&
                    e.push({ type: "warning", message: E.testModeWarning, key: "test-mode-warning-notice" }),
                null != E.devShelfError &&
                    e.push({ type: "critical", message: E.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError]),
        P = i.useMemo(() => {
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
    return m
        ? (0, l.jsx)(d.Ed, { shouldShowUnifiedHeader: !0 })
        : (0, l.jsx)(X, {
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
