n.d(t, { RL: () => X, oO: () => q, dL: () => V }), n(321073);
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
    y = n(287809),
    A = n(486020),
    P = n(158045),
    I = n(580630),
    g = n(951305),
    _ = n(1076),
    v = n(284009),
    T = n.n(v),
    x = n(17928),
    N = n(318254),
    b = n(10716),
    R = n(206828),
    j = n(20015),
    M = n(31823),
    O = n(427675),
    L = n(977445),
    k = n(812095),
    w = n(118982),
    U = n(240248),
    D = n(566980),
    G = n(652215),
    F = n(375708),
    B = n(319820),
    H = n(52635),
    Y = n(327105),
    W = n(594387);
function V(e) {
    return e.name;
}
let K = {
    [r.R.BUNDLE]: () => F.intl.string(Y.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => F.intl.string(Y.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => F.intl.string(Y.default.eTYAvF),
    [r.R.NAMEPLATE]: () => F.intl.string(Y.default.of9bom),
    [r.R.PROFILE_FRAME]: () => F.intl.string(Y.default.HzDn6w),
};
function q(e) {
    let t = F.intl.string(Y.default.iZe9Wy);
    if (null == e);
    else if (e.type in K) return (0, K[e.type])();
    return t;
}
function Z(e) {
    let {
            sku: t,
            collectiblesProduct: n,
            priceText: i,
            description: r = F.intl.string(Y.default.iZe9Wy),
            giftRecipient: a,
            ...s
        } = e,
        o = (0, l.jsx)(m.WH, { sku: t, product: n }),
        u = V(t);
    return (0, l.jsx)(m.f7, {
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
        r = i ? F.intl.string(Y.default.qwSlCO) : F.intl.string(Y.default.iZe9Wy),
        a = i
            ? { header: t.name, headerIconSrc: A.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 16 }) }
            : {};
    return (0, l.jsx)(Z, { ...e, description: r, ...a });
}
function Q(e) {
    let t = F.intl.string(Y.default.hewwdA);
    return (0, l.jsx)(Z, { ...e, description: t });
}
function $(e) {
    let { sku: t } = e,
        { product: n } = (0, B.AO)({ sku: t }),
        i = q(n),
        r =
            null != n
                ? (function (e) {
                      let t = y.default.getCurrentUser(),
                          n = P.Ay.canUseShopDiscounts(t),
                          l = (0, h.xM)(t),
                          i = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                      if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                          if (l === h.D0.NITRO)
                              return { PriceIcon: a.t, priceTooltip: F.intl.string(Y.default.YUNJJa) };
                          if (l === h.D0.THIRDPARTY)
                              return { PriceIcon: s.g, priceTooltip: F.intl.string(W.default.DePOcS) };
                      }
                      return {};
                  })(n)
                : {};
    return (0, l.jsx)(Z, { ...e, description: i, collectiblesProduct: n, ...r });
}
function J(e) {
    let { handlePaymentSourceAdd: t } = e,
        {
            unifiedCheckoutFlow: n,
            checkoutInvoicePreview: r,
            paymentSourceType: a,
        } = (0, C.t4)((e) => {
            let t = e.get("checkoutSelectedPaymentSource");
            return {
                unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                paymentSourceType: null != t ? t.type : null,
            };
        }),
        { isGift: s, giftRecipient: m } = (0, g.Pv)(),
        {
            sku: h,
            application: y,
            eligiblePaymentGateways: A,
            disabled: P,
        } = (function () {
            let { selectedSkuId: e, purchaseState: t } = (0, C.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                { application: n } = (0, M.V)(),
                l = (0, O.gU)();
            T()(null != e, "Expected selectedSkuId");
            let i = l[e],
                r = i?.eligiblePaymentGateways;
            return (
                T()(null != i, "SKU must exist and be fetched."),
                T()(null != n, "Application must exist."),
                {
                    sku: i,
                    application: n,
                    eligiblePaymentGateways: r,
                    disabled: t === D.h.PURCHASING || t === D.h.COMPLETED,
                }
            );
        })(),
        v = i.useMemo(
            () =>
                (function (e, t) {
                    let { skuId: n, paymentSourceType: i, isGift: r } = t;
                    return e === u.C.SLAYER_STOREFRONT_CHECKOUT
                        ? (0, l.jsx)(H.EB, { paymentSourceType: i, skuId: n, isGift: r })
                        : (0, l.jsx)(H.T3, { paymentSourceType: i });
                })(n, { skuId: h.id, paymentSourceType: a, isGift: s }),
            [n, h.id, a, s],
        ),
        { upperInlineNoticeProps: W, footerInlineNoticeProps: K } = (function (e) {
            let { sku: t, application: n, isGift: l } = e,
                r = (0, x.bG)([b.A], () => b.A.getFetchState()),
                { fetched: a, hasAlreadyLinked: s } = (0, R.RD)(n),
                o = (0, L.uS)(n.id),
                u = null != t && t.productLine === G.EZt.SOCIAL_LAYER_GAME_ITEM,
                c = (0, j.n)(n, G.gfo.EMBEDDED) && r === b.$.ERROR,
                d = u && a && !s && !l ? (0, w.k3)(n) : null;
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
        })({ sku: h, application: y, isGift: s }),
        q = i.useMemo(() => ({ paymentGatewayRestrictions: A, shouldUseUnifiedCheckoutUI: !0 }), [A]),
        J = (0, l.jsx)(c.N, {
            label: F.intl.string(F.t["u+Cw58"]),
            location: "OneTimePurchaseReviewStepBody",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: q,
            disabled: P,
        }),
        { product: X } = (0, B.AO)({ sku: h }),
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
                                    label: F.intl.string(Y.default.eoXh7B),
                                    currency: n.currency,
                                    defaultExpanded: null != e,
                                },
                                priceText: (0, I.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: h, invoicePreview: r }),
            [h, r],
        ),
        en = i.useMemo(() => (null != ee ? (0, l.jsx)(p.Vm, { ...ee }) : null), [ee]),
        el = i.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = { priceText: et, sku: h, application: y, giftRecipient: m }),
                e === u.C.SLAYER_STOREFRONT_CHECKOUT
                    ? (0, l.jsx)(z, { ...t })
                    : e === u.C.GUILD_PRODUCT_CHECKOUT
                      ? (0, l.jsx)(Q, { ...t })
                      : e === u.C.COLLECTIBLES_CHECKOUT
                        ? (0, l.jsx)($, { ...t })
                        : (0, l.jsx)(Z, { ...t })
            );
        }, [n, h, y, m, et]),
        ei = i.useMemo(() => (null != r ? (0, I.$g)(r.total, r.currency) : void 0), [r]),
        er = (0, f.A)(),
        { setCollectedModalOverrideTitle: ea, setCollectedModalGradientColor: es } = (0, _.z)(),
        eo = n === u.C.COLLECTIBLES_CHECKOUT && null != X ? (0, E.L0)(X, er) : null,
        eu = eo?.rewardConfig?.discount?.id,
        ec = null != eu && r?.getDiscountIdIfExists() === String(eu),
        ed = i.useMemo(() => {
            let e;
            return null == (e = eo?.tenantMetadata?.collectibles?.reward)
                ? null
                : { overrideTitle: e.collected?.overrideTitle, gradientColor: (0, S.KD)(e.flavor) };
        }, [eo]);
    i.useEffect(() => {
        let e = ec ? ed : null;
        ea(e?.overrideTitle), es(e?.gradientColor);
    }, [ec, ed, ea, es]);
    let ep = i.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: l, product: i, promotion: r, unifiedCheckoutFlow: a } = t;
                if (a === u.C.COLLECTIBLES_CHECKOUT && null != i) {
                    let e = (0, E.L0)(i, r),
                        t = e?.tenantMetadata?.collectibles?.reward?.checkout?.offerNotice,
                        n = e?.tenantMetadata?.collectibles?.reward?.flavor,
                        l = t?.text;
                    if (!(0, U.uJ)(l))
                        return { Icon: (0, S.sj)(t?.icon), text: (0, k.U)(l), gradientColor: (0, S.lx)(n) };
                }
                if (null == e) return null;
                let s = e.orbsReward;
                if (null != s && s > 0) {
                    let e = l ? F.t["ZV+aS9"] : F.t["0StwHe"];
                    return {
                        Icon: N.C,
                        text: F.intl.format(e, { orbCount: s }),
                        gradientColor: n === G.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(r, { productLine: h.productLine, isGift: s, product: X, promotion: er, unifiedCheckoutFlow: n });
            return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
        }, [r, s, X, er, h.productLine, n]),
        em = i.useMemo(() => (null != ep ? { headerBadgeText: F.intl.string(Y.default.Fjpyfj) } : {}), [ep]);
    return (0, l.jsx)(d.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: em,
        purchaseItemContent: el,
        invoiceSummaryContent: en,
        paymentMethodContent: J,
        legalContent: v,
        promotionalNoticeContent: ep,
        upperInlineNoticeProps: W,
        footerInlineNoticeProps: K,
        invoiceTotalDueLabel: F.intl.string(Y.default.Zxav97),
        invoiceTotalDueValue: ei,
    });
}
function X(e) {
    let { isCheckoutDataLoading: t } = (0, C.t4)((e) => ({ isCheckoutDataLoading: e.get("isCheckoutDataLoading") }));
    return t ? (0, l.jsx)(d.Ed, { shouldShowUnifiedHeader: !0 }) : (0, l.jsx)(J, { ...e });
}
