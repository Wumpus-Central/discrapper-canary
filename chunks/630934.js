n.d(t, { RL: () => X, oO: () => Z, dL: () => V }), n(321073);
var l = n(477900),
    i = n(582128),
    r = n(575593),
    a = n(403581),
    s = n(278416),
    o = n(318254),
    u = n(262427),
    c = n(120700),
    d = n(377058),
    m = n(38785),
    p = n(848584),
    C = n(241989),
    h = n(87725),
    f = n(993408),
    E = n(80151),
    S = n(629042),
    y = n(151115),
    I = n(812095),
    A = n(287809),
    P = n(486020),
    g = n(158045),
    v = n(580630),
    _ = n(240248),
    x = n(951305),
    T = n(1076),
    N = n(284009),
    b = n.n(N),
    j = n(17928),
    R = n(10716),
    M = n(206828),
    O = n(20015),
    L = n(31823),
    k = n(427675),
    w = n(977445),
    U = n(118982),
    D = n(566980),
    G = n(652215),
    F = n(375708),
    B = n(319820),
    H = n(52635),
    W = n(477729),
    Y = n(378803);
function V(e) {
    return e.name;
}
let K = {
    [r.R.BUNDLE]: () => F.intl.string(W.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => F.intl.string(W.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => F.intl.string(W.default.eTYAvF),
    [r.R.NAMEPLATE]: () => F.intl.string(W.default.of9bom),
    [r.R.PROFILE_FRAME]: () => F.intl.string(W.default.HzDn6w),
};
function Z(e) {
    let t = F.intl.string(W.default.iZe9Wy);
    if (null == e);
    else if (e.type in K) return (0, K[e.type])();
    return t;
}
function q(e) {
    let {
            sku: t,
            collectiblesProduct: n,
            priceText: i,
            description: r = F.intl.string(W.default.iZe9Wy),
            giftRecipient: a,
            ...s
        } = e,
        o = (0, l.jsx)(C.WH, { sku: t, product: n }),
        u = V(t);
    return (0, l.jsx)(C.f7, {
        description: r,
        price: i,
        graphic: o,
        label: u,
        target: null != a ? { type: "gift", user: a } : void 0,
        ...s,
    });
}
function z(e) {
    let { application: t, sku: n } = e,
        { isSocialLayerGameItem: i } = (0, B.AO)({ sku: n }),
        r = i ? F.intl.string(W.default.qwSlCO) : F.intl.string(W.default.iZe9Wy),
        a = i
            ? { header: t.name, headerIconSrc: P.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 16 }) }
            : {};
    return (0, l.jsx)(q, { ...e, description: r, ...a });
}
function $(e) {
    let t = F.intl.string(W.default.hewwdA);
    return (0, l.jsx)(q, { ...e, description: t });
}
function Q(e) {
    let { sku: t } = e,
        { product: n } = (0, B.AO)({ sku: t }),
        i = Z(n),
        r =
            null != n
                ? (function (e) {
                      let t = A.default.getCurrentUser(),
                          n = g.Ay.canUseShopDiscounts(t),
                          l = (0, f.xM)(t),
                          i = (0, f.WD)(e, { hasShopDiscount: n, discount: (0, f.fT)(e, n) });
                      if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                          if (l === f.D0.NITRO)
                              return { PriceIcon: a.t, priceTooltip: F.intl.string(W.default.YUNJJa) };
                          if (l === f.D0.THIRDPARTY)
                              return { PriceIcon: s.TagIcon, priceTooltip: F.intl.string(Y.default.DePOcS) };
                      }
                      return {};
                  })(n)
                : {};
    return (0, l.jsx)(q, { ...e, description: i, collectiblesProduct: n, ...r });
}
function J(e) {
    let { handlePaymentSourceAdd: t } = e,
        {
            unifiedCheckoutFlow: n,
            checkoutInvoicePreview: r,
            paymentSourceType: a,
        } = (0, h.t4)((e) => {
            let t = e.get("checkoutSelectedPaymentSource");
            return {
                unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                paymentSourceType: null != t ? t.type : null,
            };
        }),
        { isGift: s, giftRecipient: C } = (0, x.Pv)(),
        {
            sku: f,
            application: A,
            eligiblePaymentGateways: P,
            disabled: g,
        } = (function () {
            let { selectedSkuId: e, purchaseState: t } = (0, h.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                { application: n } = (0, L.V)(),
                l = (0, k.gU)();
            b()(null != e, "Expected selectedSkuId");
            let i = l[e],
                r = i?.eligiblePaymentGateways;
            return (
                b()(null != i, "SKU must exist and be fetched."),
                b()(null != n, "Application must exist."),
                {
                    sku: i,
                    application: n,
                    eligiblePaymentGateways: r,
                    disabled: t === D.h.PURCHASING || t === D.h.COMPLETED,
                }
            );
        })(),
        N = i.useMemo(
            () =>
                (function (e, t) {
                    let { skuId: n, paymentSourceType: i, isGift: r } = t;
                    return e === c.C.SLAYER_STOREFRONT_CHECKOUT
                        ? (0, l.jsx)(H.EB, { paymentSourceType: i, skuId: n, isGift: r })
                        : (0, l.jsx)(H.T3, { paymentSourceType: i });
                })(n, { skuId: f.id, paymentSourceType: a, isGift: s }),
            [n, f.id, a, s],
        ),
        { upperInlineNoticeProps: Y, footerInlineNoticeProps: K } = (function (e) {
            let { sku: t, application: n, isGift: l } = e,
                r = (0, j.bG)([R.A], () => R.A.getFetchState()),
                { fetched: a, hasAlreadyLinked: s } = (0, M.RD)(n),
                o = (0, w.uS)(n.id),
                u = null != t && t.productLine === G.EZt.SOCIAL_LAYER_GAME_ITEM,
                c = (0, O.n)(n, G.gfo.EMBEDDED) && r === R.$.ERROR,
                d = u && a && !s && !l ? (0, U.k3)(n) : null;
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        o &&
                            e.push({
                                type: "warning",
                                message: F.intl.string(F.t.OvMyMd),
                                key: "test-mode-warning-notice",
                            }),
                        c &&
                            e.push({
                                type: "critical",
                                message: F.intl.string(F.t.tAmECt),
                                key: "dev-shelf-error-notice",
                            }),
                        e.length > 0 ? e : null
                    );
                }, [o, c]),
                footerInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        null != d &&
                            e.push({ type: "info", message: d, key: "social-layer-game-item-disclaimer-notice" }),
                        e.length > 0 ? e : null
                    );
                }, [d]),
            };
        })({ sku: f, application: A, isGift: s }),
        Z = i.useMemo(() => ({ paymentGatewayRestrictions: P, shouldUseUnifiedCheckoutUI: !0 }), [P]),
        J = (0, l.jsx)(d.N, {
            label: F.intl.string(F.t["u+Cw58"]),
            location: "OneTimePurchaseReviewStepBody",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: Z,
            disabled: g,
        }),
        { product: X } = (0, B.AO)({ sku: f }),
        { unifiedInvoiceSummaryProps: ee, priceText: et } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, B.yh)({ invoicePreview: n });
                        return (
                            l.push({ id: "sku", label: V(t), amount: i }),
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
                                    label: F.intl.string(W.default.eoXh7B),
                                    currency: n.currency,
                                    defaultExpanded: null != e,
                                },
                                priceText: (0, v.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: f, invoicePreview: r }),
            [f, r],
        ),
        en = i.useMemo(() => (null != ee ? (0, l.jsx)(p.Vm, { ...ee }) : null), [ee]),
        el = i.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = { priceText: et, sku: f, application: A, giftRecipient: C }),
                e === c.C.SLAYER_STOREFRONT_CHECKOUT
                    ? (0, l.jsx)(z, { ...t })
                    : e === c.C.GUILD_PRODUCT_CHECKOUT
                      ? (0, l.jsx)($, { ...t })
                      : e === c.C.COLLECTIBLES_CHECKOUT
                        ? (0, l.jsx)(Q, { ...t })
                        : (0, l.jsx)(q, { ...t })
            );
        }, [n, f, A, C, et]),
        ei = i.useMemo(() => (null != r ? (0, v.$g)(r.total, r.currency) : void 0), [r]),
        er = (0, E.A)(),
        { setCollectedModalOverrideTitle: ea, setCollectedModalGradientColor: es } = (0, T.z)(),
        eo = n === c.C.COLLECTIBLES_CHECKOUT && null != X ? (0, S.L0)(X, er) : null,
        eu = eo?.rewardConfig?.discount?.id,
        ec = null != eu && r?.getDiscountIdIfExists() === String(eu),
        ed = i.useMemo(() => {
            let e;
            return null == (e = eo?.tenantMetadata?.collectibles?.reward)
                ? null
                : { overrideTitle: e.collected?.overrideTitle, gradientColor: (0, y.KD)(e.flavor) };
        }, [eo]);
    i.useEffect(() => {
        let e = ec ? ed : null;
        ea(e?.overrideTitle), es(e?.gradientColor);
    }, [ec, ed, ea, es]);
    let em = i.useMemo(
            () =>
                (function (e, t) {
                    let { invoicePreview: n, isGift: i, product: r, promotion: a, productLine: s } = t;
                    if (e === c.C.COLLECTIBLES_CHECKOUT) {
                        if (null == r) return null;
                        let e = (0, S.L0)(r, a),
                            t = e?.tenantMetadata?.collectibles?.reward?.checkout?.offerNotice,
                            n = e?.tenantMetadata?.collectibles?.reward?.flavor,
                            i = t?.text;
                        return (0, _.uJ)(i)
                            ? null
                            : (0, l.jsx)(u.J, {
                                  Icon: (0, y.sj)(t?.icon),
                                  text: (0, I.U)(i),
                                  gradientColor: (0, y.lx)(n),
                              });
                    }
                    if (e === c.C.SLAYER_STOREFRONT_CHECKOUT) {
                        let e = n?.orbsReward;
                        if (null == e || e <= 0) return null;
                        let t = i ? F.t["ZV+aS9"] : F.t["0StwHe"];
                        return (0, l.jsx)(u.J, {
                            Icon: o.C,
                            text: F.intl.format(t, { orbCount: e }),
                            gradientColor: s === G.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                        });
                    }
                    return null;
                })(n, { invoicePreview: r, isGift: s, product: X, promotion: er, productLine: f.productLine }),
            [n, r, s, X, er, f.productLine],
        ),
        ep = i.useMemo(() => (null != em ? { headerBadgeText: F.intl.string(W.default.Fjpyfj) } : {}), [em]);
    return (0, l.jsx)(m.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: ep,
        purchaseItemContent: el,
        invoiceSummaryContent: en,
        paymentMethodContent: J,
        legalContent: N,
        promotionalNoticeContent: em,
        upperInlineNoticeProps: Y,
        footerInlineNoticeProps: K,
        invoiceTotalDueLabel: F.intl.string(W.default.Zxav97),
        invoiceTotalDueValue: ei,
    });
}
function X(e) {
    let { isCheckoutDataLoading: t } = (0, h.t4)((e) => ({ isCheckoutDataLoading: e.get("isCheckoutDataLoading") }));
    return t ? (0, l.jsx)(m.Ed, { shouldShowUnifiedHeader: !0 }) : (0, l.jsx)(J, { ...e });
}
