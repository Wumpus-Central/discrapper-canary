(n.d(t, { RL: () => ea, oO: () => ee, dL: () => J }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(575593),
    a = n(318254),
    s = n(262427),
    o = n(120700),
    u = n(377058),
    c = n(38785),
    d = n(270537),
    p = n(241989),
    m = n(263532),
    h = n(818296),
    C = n(486020),
    f = n(580630),
    S = n(403581),
    E = n(278416),
    y = n(993408),
    A = n(1076),
    I = n(288106),
    g = n(604913),
    P = n(223311),
    v = n(306396),
    x = n(151115),
    _ = n(518865),
    T = n(536572),
    N = n(652215),
    b = n(375708),
    j = n(812095),
    R = n(240248),
    O = n(808598),
    M = n(287809),
    L = n(158045),
    k = n(583741),
    w = n(181666);
function D(e) {
    let { requiredCheckoutFlow: t, invoicePreview: n, product: l } = e;
    return (
        !(function (e) {
            let { invoicePreview: t, product: n } = e,
                {
                    setCollectedModalOverrideTitle: l,
                    setCollectedModalOverrideDescription: r,
                    setCollectedModalGradientColor: a,
                } = (0, A.z)(),
                s = (0, P.A)(N.FYj),
                o = null != n ? (0, x.L)(n, s) : null,
                u = o?.tenantMetadata?.collectibles;
            (0, i.useEffect)(() => {
                switch (u?.type) {
                    case g.hE.COLLECT_AND_CLAIM: {
                        let e = o?.progress;
                        if (null == n || null == e) break;
                        if (o?.rewardStatus === I.GM.IN_PROGRESS) {
                            let t = Math.min(e.current + (0, v.oO)(n, u.collectionId), e.target);
                            l(b.intl.formatToPlainString(b.t.G9koyR, { current: t, target: e.target }));
                        } else l(void 0);
                        (r(b.intl.formatToPlainString(b.t.LD7HFF, { collectibleTitle: (0, T.VG)(n) })), a(void 0));
                        return;
                    }
                    case g.hE.TARGETED_OFFER: {
                        let e = u.reward,
                            n = null != e ? o?.rewardConfig?.discount?.id : null,
                            i = null != n && t?.getDiscountIdIfExists() === String(n) ? e : null;
                        (l(i?.collected?.overrideTitle), r(void 0), a(null != i ? (0, _.lG)(i.flavor) : void 0));
                        return;
                    }
                }
                (l(void 0), r(void 0), a(void 0));
            }, [u, o, n, t, l, r, a]);
        })({ invoicePreview: n, product: l }),
        null
    );
}
var U = n(951305),
    G = n(284009),
    F = n.n(G),
    B = n(17928),
    H = n(10716),
    W = n(206828),
    Y = n(20015),
    V = n(31823),
    K = n(427675),
    q = n(977445),
    Z = n(118982),
    z = n(566980),
    $ = n(319820),
    Q = n(52635);
function J(e) {
    return e.name;
}
let X = {
    [r.R.BUNDLE]: () => b.intl.string(k.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => b.intl.string(k.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => b.intl.string(k.default.eTYAvF),
    [r.R.NAMEPLATE]: () => b.intl.string(k.default.of9bom),
    [r.R.PROFILE_FRAME]: () => b.intl.string(k.default.HzDn6w),
};
function ee(e) {
    let t = b.intl.string(k.default.iZe9Wy);
    if (null == e);
    else if (e.type in X) return (0, X[e.type])();
    return t;
}
function et(e) {
    let {
            sku: t,
            collectiblesProduct: n,
            priceText: i,
            description: r = b.intl.string(k.default.iZe9Wy),
            giftRecipient: a,
            ...s
        } = e,
        o = (0, l.jsx)(p.WH, { sku: t, product: n }),
        u = J(t);
    return (0, l.jsx)(p.f7, {
        description: r,
        price: i,
        graphic: o,
        label: u,
        target: null != a ? { type: "gift", user: a } : void 0,
        ...s,
    });
}
function en(e) {
    let { application: t, sku: n } = e,
        { isSocialLayerGameItem: i } = (0, $.AO)({ sku: n }),
        r = i ? b.intl.string(k.default.qwSlCO) : b.intl.string(k.default.iZe9Wy),
        a = i
            ? { header: t.name, headerIconSrc: C.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 16 }) }
            : {};
    return (0, l.jsx)(et, { ...e, description: r, ...a });
}
function el(e) {
    let t = b.intl.string(k.default.hewwdA);
    return (0, l.jsx)(et, { ...e, description: t });
}
function ei(e) {
    let { sku: t } = e,
        { product: n } = (0, $.AO)({ sku: t }),
        i = ee(n),
        r =
            null != n
                ? (function (e) {
                      let t = M.default.getCurrentUser(),
                          n = L.Ay.canUseShopDiscounts(t),
                          l = (0, y.xM)(t),
                          i = (0, y.WD)(e, { hasShopDiscount: n, discount: (0, y.fT)(e, n) });
                      if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                          if (l === y.D0.NITRO)
                              return { PriceIcon: S.t, priceTooltip: b.intl.string(k.default.YUNJJa) };
                          if (l === y.D0.THIRDPARTY)
                              return { PriceIcon: E.TagIcon, priceTooltip: b.intl.string(w.default.DePOcS) };
                      }
                      return {};
                  })(n)
                : {};
    return (0, l.jsx)(et, { ...e, description: i, collectiblesProduct: n, ...r });
}
function er(e) {
    let { handlePaymentSourceAdd: t } = e,
        {
            unifiedCheckoutFlow: n,
            checkoutInvoicePreview: r,
            paymentSourceType: p,
        } = (0, m.t4)((e) => {
            let t = e.get("checkoutSelectedPaymentSource");
            return {
                unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                paymentSourceType: null != t ? t.type : null,
            };
        }),
        { isGift: C, giftRecipient: S } = (0, U.Pv)(),
        {
            sku: y,
            application: A,
            eligiblePaymentGateways: P,
            disabled: v,
        } = (function () {
            let { selectedSkuId: e, purchaseState: t } = (0, m.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                { application: n } = (0, V.V)(),
                l = (0, K.gU)();
            F()(null != e, "Expected selectedSkuId");
            let i = l[e],
                r = i?.eligiblePaymentGateways;
            return (
                F()(null != i, "SKU must exist and be fetched."),
                F()(null != n, "Application must exist."),
                {
                    sku: i,
                    application: n,
                    eligiblePaymentGateways: r,
                    disabled: t === z.h.PURCHASING || t === z.h.COMPLETED,
                }
            );
        })(),
        T = i.useMemo(
            () =>
                (function (e, t) {
                    let { skuId: n, paymentSourceType: i, isGift: r } = t;
                    return e === o.C.SLAYER_STOREFRONT_CHECKOUT
                        ? (0, l.jsx)(Q.EB, {
                              paymentSourceType: i,
                              skuId: n,
                              isGift: r,
                              hasSeparateAccountLinkNotice: !0,
                          })
                        : (0, l.jsx)(Q.T3, { paymentSourceType: i });
                })(n, { skuId: y.id, paymentSourceType: p, isGift: C }),
            [n, y.id, p, C],
        ),
        { upperInlineNoticeProps: M, footerInlineNoticeProps: L } = (function (e) {
            let { sku: t, application: n, isGift: l } = e,
                r = (0, B.bG)([H.A], () => H.A.getFetchState()),
                { fetched: a, hasAlreadyLinked: s } = (0, W.RD)(n),
                o = (0, q.uS)(n.id),
                u = null != t && t.productLine === N.EZt.SOCIAL_LAYER_GAME_ITEM,
                c = (0, Y.n)(n, N.gfo.EMBEDDED) && r === H.$.ERROR,
                d = u && a && !s && !l ? (0, Z.k3)(n) : null;
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        o &&
                            e.push({
                                type: "warning",
                                message: b.intl.string(b.t.OvMyMd),
                                key: "test-mode-warning-notice",
                            }),
                        c &&
                            e.push({
                                type: "critical",
                                message: b.intl.string(b.t.tAmECt),
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
        })({ sku: y, application: A, isGift: C }),
        w = i.useMemo(() => ({ paymentGatewayRestrictions: P, shouldUseUnifiedCheckoutUI: !0 }), [P]),
        G = (0, l.jsx)(u.N, {
            label: b.intl.string(b.t["u+Cw58"]),
            location: "OneTimePurchaseReviewStepBody",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: w,
            disabled: v,
        }),
        { product: X } = (0, $.AO)({ sku: y }),
        { unifiedInvoiceSummaryProps: ee, priceText: er } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, $.yh)({ invoicePreview: n });
                        return (
                            l.push({ id: "sku", label: J(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: b.intl.string(b.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: b.intl.string(k.default.eoXh7B),
                                    currency: n.currency,
                                    defaultExpanded: null != e,
                                },
                                priceText: (0, f.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: y, invoicePreview: r }),
            [y, r],
        ),
        ea = i.useMemo(() => (null != ee ? (0, l.jsx)(d.Vm, { ...ee }) : null), [ee]),
        es = i.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = { priceText: er, sku: y, application: A, giftRecipient: S }),
                e === o.C.SLAYER_STOREFRONT_CHECKOUT
                    ? (0, l.jsx)(en, { ...t })
                    : e === o.C.GUILD_PRODUCT_CHECKOUT
                      ? (0, l.jsx)(el, { ...t })
                      : e === o.C.COLLECTIBLES_CHECKOUT
                        ? (0, l.jsx)(ei, { ...t })
                        : (0, l.jsx)(et, { ...t })
            );
        }, [n, y, A, S, er]),
        eo = i.useMemo(() => (null != r ? (0, f.$g)(r.total, r.currency) : void 0), [r]),
        eu = (0, h.g)(X ?? null),
        ec = i.useMemo(
            () =>
                (function (e, t) {
                    let { invoicePreview: n, isGift: i, promotion: r, productLine: u } = t;
                    if (e === o.C.COLLECTIBLES_CHECKOUT) {
                        let e;
                        return null ==
                            (e = (function (e, t) {
                                if (null == e) return null;
                                let n = e.tenantMetadata?.collectibles;
                                switch (n?.type) {
                                    case g.hE.COLLECT_AND_CLAIM:
                                        return t
                                            ? null
                                            : (function (e) {
                                                  if (e.rewardStatus !== I.GM.IN_PROGRESS) return null;
                                                  let t = e.progress;
                                                  if (null == t || null == e.endsAt) return null;
                                                  let n = (0, O.X)(e.endsAt);
                                                  return null == n
                                                      ? null
                                                      : {
                                                            Icon: E.TagIcon,
                                                            text: b.intl.formatToPlainString(b.t.jidBDk, {
                                                                current: t.current,
                                                                target: t.target,
                                                                numDays: n,
                                                            }),
                                                            gradientColor: "promotion",
                                                            textVariant: "text-sm/normal",
                                                            textColor: "text-overlay-light",
                                                        };
                                              })(e);
                                    case g.hE.TARGETED_OFFER: {
                                        let e = n.reward,
                                            t = e?.checkout?.offerNotice,
                                            l = t?.text;
                                        if ((0, R.uJ)(l)) return null;
                                        return {
                                            Icon: (0, x.s)(t?.icon),
                                            text: (0, j.U)(l),
                                            gradientColor: (0, _.aJ)(e?.flavor),
                                        };
                                    }
                                    default:
                                        return null;
                                }
                            })(r, i))
                            ? null
                            : (0, l.jsx)(s.J, { ...e });
                    }
                    if (e === o.C.SLAYER_STOREFRONT_CHECKOUT) {
                        let e = n?.orbsReward;
                        if (null == e || e <= 0) return null;
                        let t = i ? b.t["ZV+aS9"] : b.t["0StwHe"];
                        return (0, l.jsx)(s.J, {
                            Icon: a.C,
                            text: b.intl.format(t, { orbCount: e }),
                            gradientColor: u === N.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                        });
                    }
                    return null;
                })(n, { invoicePreview: r, isGift: C, promotion: eu, productLine: y.productLine }),
            [n, r, C, eu, y.productLine],
        ),
        ed = i.useMemo(() => (null != ec ? { headerBadgeText: b.intl.string(k.default.Fjpyfj) } : {}), [ec]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n === o.C.COLLECTIBLES_CHECKOUT &&
                (0, l.jsx)(D, { requiredCheckoutFlow: o.C.COLLECTIBLES_CHECKOUT, invoicePreview: r, product: X }),
            (0, l.jsx)(c.T_, {
                shouldShowGlobalNotices: !0,
                headerBadgeConfig: ed,
                purchaseItemContent: es,
                invoiceSummaryContent: ea,
                paymentMethodContent: G,
                legalContent: T,
                promotionalNoticeContent: ec,
                upperInlineNoticeProps: M,
                footerInlineNoticeProps: L,
                invoiceTotalDueLabel: b.intl.string(k.default.Zxav97),
                invoiceTotalDueValue: eo,
            }),
        ],
    });
}
function ea(e) {
    let { isCheckoutDataLoading: t } = (0, m.t4)((e) => ({ isCheckoutDataLoading: e.get("isCheckoutDataLoading") }));
    return t ? (0, l.jsx)(c.Ed, { shouldShowUnifiedHeader: !0 }) : (0, l.jsx)(er, { ...e });
}
