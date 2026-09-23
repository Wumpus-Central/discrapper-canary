(n.d(t, { RL: () => ea, oO: () => X, dL: () => $ }), n(321073));
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
    p = n(270537),
    C = n(241989),
    h = n(263532),
    f = n(993408),
    E = n(818296),
    S = n(1076),
    y = n(288106),
    I = n(604913),
    g = n(223311),
    A = n(306396),
    P = n(151115),
    v = n(518865),
    _ = n(536572),
    x = n(652215),
    T = n(375708),
    N = n(812095),
    b = n(240248),
    j = n(58703),
    R = n(287809),
    M = n(486020),
    O = n(158045),
    L = n(580630),
    k = n(951305),
    w = n(284009),
    U = n.n(w),
    D = n(17928),
    G = n(10716),
    F = n(206828),
    B = n(20015),
    H = n(31823),
    W = n(427675),
    Y = n(977445),
    V = n(331329),
    K = n(566980),
    Z = n(319820),
    q = n(52635),
    z = n(583741),
    Q = n(181666);
function $(e) {
    return e.name;
}
let J = {
    [r.R.BUNDLE]: () => T.intl.string(z.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => T.intl.string(z.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => T.intl.string(z.default.eTYAvF),
    [r.R.NAMEPLATE]: () => T.intl.string(z.default.of9bom),
    [r.R.PROFILE_FRAME]: () => T.intl.string(z.default.HzDn6w),
};
function X(e) {
    let t = T.intl.string(z.default.iZe9Wy);
    if (null == e);
    else if (e.type in J) return (0, J[e.type])();
    return t;
}
function ee(e) {
    let {
            sku: t,
            collectiblesProduct: n,
            priceText: i,
            description: r = T.intl.string(z.default.iZe9Wy),
            giftRecipient: a,
            ...s
        } = e,
        o = (0, l.jsx)(C.WH, { sku: t, product: n }),
        u = $(t);
    return (0, l.jsx)(C.f7, {
        description: r,
        price: i,
        graphic: o,
        label: u,
        target: null != a ? { type: "gift", user: a } : void 0,
        ...s,
    });
}
function et(e) {
    let { application: t, sku: n } = e,
        { isSocialLayerGameItem: i } = (0, Z.AO)({ sku: n }),
        r = i ? T.intl.string(z.default.qwSlCO) : T.intl.string(z.default.iZe9Wy),
        a = i
            ? { header: t.name, headerIconSrc: M.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 16 }) }
            : {};
    return (0, l.jsx)(ee, { ...e, description: r, ...a });
}
function en(e) {
    let t = T.intl.string(z.default.hewwdA);
    return (0, l.jsx)(ee, { ...e, description: t });
}
function el(e) {
    let { sku: t } = e,
        { product: n } = (0, Z.AO)({ sku: t }),
        i = X(n),
        r =
            null != n
                ? (function (e) {
                      let t = R.default.getCurrentUser(),
                          n = O.Ay.canUseShopDiscounts(t),
                          l = (0, f.xM)(t),
                          i = (0, f.WD)(e, { hasShopDiscount: n, discount: (0, f.fT)(e, n) });
                      if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                          if (l === f.D0.NITRO)
                              return { PriceIcon: a.t, priceTooltip: T.intl.string(z.default.YUNJJa) };
                          if (l === f.D0.THIRDPARTY)
                              return { PriceIcon: s.TagIcon, priceTooltip: T.intl.string(Q.default.DePOcS) };
                      }
                      return {};
                  })(n)
                : {};
    return (0, l.jsx)(ee, { ...e, description: i, collectiblesProduct: n, ...r });
}
function ei(e) {
    let { requiredCheckoutFlow: t, invoicePreview: n, product: l } = e;
    return (
        !(function (e) {
            let { invoicePreview: t, product: n } = e,
                {
                    setCollectedModalOverrideTitle: l,
                    setCollectedModalOverrideDescription: r,
                    setCollectedModalGradientColor: a,
                } = (0, S.z)(),
                s = (0, g.A)(x.FYj),
                o = null != n ? (0, P.L)(n, s) : null,
                u = o?.tenantMetadata?.collectibles;
            (0, i.useEffect)(() => {
                switch (u?.type) {
                    case I.hE.COLLECT_AND_CLAIM: {
                        let e = o?.progress;
                        if (null == n || null == e) break;
                        if (o?.rewardStatus === y.GM.IN_PROGRESS) {
                            let t = Math.min(e.current + (0, A.oO)(n, u.collectionId), e.target);
                            l(T.intl.formatToPlainString(T.t.G9koyR, { current: t, target: e.target }));
                        } else l(void 0);
                        (r(T.intl.formatToPlainString(T.t.LD7HFF, { collectibleTitle: (0, _.VG)(n) })), a(void 0));
                        return;
                    }
                    case I.hE.TARGETED_OFFER: {
                        let e = u.reward,
                            n = null != e ? o?.rewardConfig?.discount?.id : null,
                            i = null != n && t?.getDiscountIdIfExists() === String(n) ? e : null;
                        (l(i?.collected?.overrideTitle), r(void 0), a(null != i ? (0, v.lG)(i.flavor) : void 0));
                        return;
                    }
                }
                (l(void 0), r(void 0), a(void 0));
            }, [u, o, n, t, l, r, a]);
        })({ invoicePreview: n, product: l }),
        null
    );
}
function er(e) {
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
        { isGift: C, giftRecipient: f } = (0, k.Pv)(),
        {
            sku: S,
            application: g,
            eligiblePaymentGateways: A,
            disabled: _,
        } = (function () {
            let { selectedSkuId: e, purchaseState: t } = (0, h.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                { application: n } = (0, H.V)(),
                l = (0, W.gU)();
            U()(null != e, "Expected selectedSkuId");
            let i = l[e],
                r = i?.eligiblePaymentGateways;
            return (
                U()(null != i, "SKU must exist and be fetched."),
                U()(null != n, "Application must exist."),
                {
                    sku: i,
                    application: n,
                    eligiblePaymentGateways: r,
                    disabled: t === K.h.PURCHASING || t === K.h.COMPLETED,
                }
            );
        })(),
        R = i.useMemo(
            () =>
                (function (e, t) {
                    let { skuId: n, paymentSourceType: i, isGift: r } = t;
                    return e === c.C.SLAYER_STOREFRONT_CHECKOUT
                        ? (0, l.jsx)(q.EB, {
                              paymentSourceType: i,
                              skuId: n,
                              isGift: r,
                              hasSeparateAccountLinkNotice: !0,
                          })
                        : (0, l.jsx)(q.T3, { paymentSourceType: i });
                })(n, { skuId: S.id, paymentSourceType: a, isGift: C }),
            [n, S.id, a, C],
        ),
        { upperInlineNoticeProps: M, footerInlineNoticeProps: O } = (function (e) {
            let { sku: t, application: n, isGift: l } = e,
                r = (0, D.bG)([G.A], () => G.A.getFetchState()),
                { fetched: a, hasAlreadyLinked: s } = (0, F.RD)(n),
                o = (0, Y.uS)(n.id),
                u = null != t && t.productLine === x.EZt.SOCIAL_LAYER_GAME_ITEM,
                c = (0, B.n)(n, x.gfo.EMBEDDED) && r === G.$.ERROR,
                d = u && a && !s && !l ? (0, V.k3)(n) : null;
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        o &&
                            e.push({
                                type: "warning",
                                message: T.intl.string(T.t.OvMyMd),
                                key: "test-mode-warning-notice",
                            }),
                        c &&
                            e.push({
                                type: "critical",
                                message: T.intl.string(T.t.tAmECt),
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
        })({ sku: S, application: g, isGift: C }),
        w = i.useMemo(() => ({ paymentGatewayRestrictions: A, shouldUseUnifiedCheckoutUI: !0 }), [A]),
        Q = (0, l.jsx)(d.N, {
            label: T.intl.string(T.t["u+Cw58"]),
            location: "OneTimePurchaseReviewStepBody",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: w,
            disabled: _,
        }),
        { product: J } = (0, Z.AO)({ sku: S }),
        { unifiedInvoiceSummaryProps: X, priceText: er } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, Z.yh)({ invoicePreview: n });
                        return (
                            l.push({ id: "sku", label: $(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: T.intl.string(T.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: T.intl.string(z.default.eoXh7B),
                                    currency: n.currency,
                                    defaultExpanded: null != e,
                                },
                                priceText: (0, L.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: S, invoicePreview: r }),
            [S, r],
        ),
        ea = i.useMemo(() => (null != X ? (0, l.jsx)(p.Vm, { ...X }) : null), [X]),
        es = i.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = { priceText: er, sku: S, application: g, giftRecipient: f }),
                e === c.C.SLAYER_STOREFRONT_CHECKOUT
                    ? (0, l.jsx)(et, { ...t })
                    : e === c.C.GUILD_PRODUCT_CHECKOUT
                      ? (0, l.jsx)(en, { ...t })
                      : e === c.C.COLLECTIBLES_CHECKOUT
                        ? (0, l.jsx)(el, { ...t })
                        : (0, l.jsx)(ee, { ...t })
            );
        }, [n, S, g, f, er]),
        eo = i.useMemo(() => (null != r ? (0, L.$g)(r.total, r.currency) : void 0), [r]),
        eu = (0, E.g)(J ?? null),
        ec = i.useMemo(
            () =>
                (function (e, t) {
                    let { invoicePreview: n, isGift: i, promotion: r, productLine: a } = t;
                    if (e === c.C.COLLECTIBLES_CHECKOUT) {
                        let e = (function (e, t) {
                            if (null == e) return null;
                            let n = e.tenantMetadata?.collectibles;
                            switch (n?.type) {
                                case I.hE.COLLECT_AND_CLAIM:
                                    return t
                                        ? null
                                        : (function (e) {
                                              if (e.rewardStatus !== y.GM.IN_PROGRESS) return null;
                                              let t = e.progress;
                                              if (null == t || null == e.endsAt) return null;
                                              let n = Math.ceil((0, j.c_)(e.endsAt, new Date()));
                                              return {
                                                  Icon: s.TagIcon,
                                                  text: T.intl.formatToPlainString(T.t.jidBDk, {
                                                      current: t.current,
                                                      target: t.target,
                                                      numDays: n,
                                                  }),
                                                  gradientColor: "promotion",
                                                  textVariant: "text-sm/normal",
                                                  textColor: "text-overlay-light",
                                              };
                                          })(e);
                                case I.hE.TARGETED_OFFER: {
                                    let e = n.reward,
                                        t = e?.checkout?.offerNotice,
                                        l = t?.text;
                                    if ((0, b.uJ)(l)) return null;
                                    return {
                                        Icon: (0, P.s)(t?.icon),
                                        text: (0, N.U)(l),
                                        gradientColor: (0, v.aJ)(e?.flavor),
                                    };
                                }
                                default:
                                    return null;
                            }
                        })(r, i);
                        return null == e ? null : (0, l.jsx)(u.J, { ...e });
                    }
                    if (e === c.C.SLAYER_STOREFRONT_CHECKOUT) {
                        let e = n?.orbsReward;
                        if (null == e || e <= 0) return null;
                        let t = i ? T.t["ZV+aS9"] : T.t["0StwHe"];
                        return (0, l.jsx)(u.J, {
                            Icon: o.C,
                            text: T.intl.format(t, { orbCount: e }),
                            gradientColor: a === x.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                        });
                    }
                    return null;
                })(n, { invoicePreview: r, isGift: C, promotion: eu, productLine: S.productLine }),
            [n, r, C, eu, S.productLine],
        ),
        ed = i.useMemo(() => (null != ec ? { headerBadgeText: T.intl.string(z.default.Fjpyfj) } : {}), [ec]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n === c.C.COLLECTIBLES_CHECKOUT &&
                (0, l.jsx)(ei, { requiredCheckoutFlow: c.C.COLLECTIBLES_CHECKOUT, invoicePreview: r, product: J }),
            (0, l.jsx)(m.T_, {
                shouldShowGlobalNotices: !0,
                headerBadgeConfig: ed,
                purchaseItemContent: es,
                invoiceSummaryContent: ea,
                paymentMethodContent: Q,
                legalContent: R,
                promotionalNoticeContent: ec,
                upperInlineNoticeProps: M,
                footerInlineNoticeProps: O,
                invoiceTotalDueLabel: T.intl.string(z.default.Zxav97),
                invoiceTotalDueValue: eo,
            }),
        ],
    });
}
function ea(e) {
    let { isCheckoutDataLoading: t } = (0, h.t4)((e) => ({ isCheckoutDataLoading: e.get("isCheckoutDataLoading") }));
    return t ? (0, l.jsx)(m.Ed, { shouldShowUnifiedHeader: !0 }) : (0, l.jsx)(er, { ...e });
}
