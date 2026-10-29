(n.d(t, { RL: () => ea, oO: () => ee, dL: () => J }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(575593),
    a = n(318254),
    s = n(262427),
    o = n(120700),
    u = n(854354),
    c = n(414051),
    d = n(38785),
    m = n(270537),
    p = n(241989),
    h = n(123816),
    C = n(818296),
    f = n(486020),
    E = n(580630),
    S = n(403581),
    g = n(278416),
    I = n(993408),
    A = n(1076),
    y = n(288106),
    x = n(604913),
    P = n(223311),
    v = n(306396),
    _ = n(151115),
    T = n(518865),
    N = n(536572),
    b = n(652215),
    j = n(105292),
    R = n(812095),
    O = n(240248),
    M = n(808598),
    L = n(287809),
    k = n(24482),
    w = n(583741),
    D = n(181666);
function U(e) {
    let { requiredCheckoutFlow: t, invoicePreview: n, product: l } = e;
    return (
        !(function (e) {
            let { invoicePreview: t, product: n } = e,
                {
                    setCollectedModalOverrideTitle: l,
                    setCollectedModalOverrideDescription: r,
                    setCollectedModalGradientColor: a,
                    setCompletesCollectAndClaimPromotion: s,
                } = (0, A.z)(),
                o = (0, P.A)(b.FYj),
                u = null != n ? (0, _.L)(n, o) : null,
                c = u?.tenantMetadata?.collectibles;
            (0, i.useEffect)(() => {
                switch (c?.type) {
                    case x.hE.COLLECT_AND_CLAIM: {
                        let e = u?.progress;
                        if (null == n || null == e) break;
                        let t = Math.min(e.current + (0, v.oO)(n, c.collectionId), e.target);
                        u?.rewardStatus === y.GM.IN_PROGRESS
                            ? l(j.intl.formatToPlainString(j.t.Jkxtln, { current: t, target: e.target }))
                            : l(void 0);
                        let i = u?.rewardStatus === y.GM.IN_PROGRESS && t >= e.target;
                        (r(
                            j.intl.formatToPlainString(i ? j.t.OUIULI : j.t["8yvdPi"], {
                                collectibleTitle: (0, N.VG)(n),
                            }),
                        ),
                            a(void 0),
                            s(i));
                        return;
                    }
                    case x.hE.TARGETED_OFFER: {
                        let e = c.reward,
                            n = null != e ? u?.rewardConfig?.discount?.id : null,
                            i = null != n && t?.getDiscountIdIfExists() === String(n) ? e : null;
                        (l(i?.collected?.overrideTitle), r(void 0), a(null != i ? (0, T.lG)(i.flavor) : void 0), s(!1));
                        return;
                    }
                }
                (l(void 0), r(void 0), a(void 0), s(!1));
            }, [c, u, n, t, l, r, a, s]);
        })({ invoicePreview: n, product: l }),
        null
    );
}
var G = n(951305),
    F = n(284009),
    B = n.n(F),
    H = n(991690),
    W = n(17928),
    V = n(10716),
    Y = n(31823),
    K = n(427675),
    q = n(977445),
    Z = n(525877),
    z = n(566980),
    $ = n(319820),
    Q = n(52635);
function J(e) {
    return e.name;
}
let X = {
    [r.R.BUNDLE]: () => j.intl.string(w.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => j.intl.string(w.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => j.intl.string(w.default.eTYAvF),
    [r.R.NAMEPLATE]: () => j.intl.string(w.default.of9bom),
    [r.R.PROFILE_FRAME]: () => j.intl.string(w.default.HzDn6w),
};
function ee(e) {
    let t = j.intl.string(w.default.iZe9Wy);
    if (null == e);
    else if (e.type in X) return (0, X[e.type])();
    return t;
}
function et(e) {
    let {
            sku: t,
            collectiblesProduct: n,
            priceText: i,
            description: r = j.intl.string(w.default.iZe9Wy),
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
        r = i ? j.intl.string(w.default.qwSlCO) : j.intl.string(w.default.iZe9Wy),
        a = i
            ? { header: t.name, headerIconSrc: f.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 16 }) }
            : {};
    return (0, l.jsx)(et, { ...e, description: r, ...a });
}
function el(e) {
    let t = j.intl.string(w.default.hewwdA);
    return (0, l.jsx)(et, { ...e, description: t });
}
function ei(e) {
    let { sku: t } = e,
        { product: n } = (0, $.AO)({ sku: t }),
        i = ee(n),
        r =
            null != n
                ? (function (e) {
                      let t = L.default.getCurrentUser(),
                          n = k.Ay.canUseShopDiscounts(t),
                          l = (0, I.xM)(t),
                          i = (0, I.WD)(e, { hasShopDiscount: n, discount: (0, I.fT)(e, n) });
                      if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                          if (l === I.D0.NITRO)
                              return { PriceIcon: S.t, priceTooltip: j.intl.string(w.default.YUNJJa) };
                          if (l === I.D0.THIRDPARTY)
                              return { PriceIcon: g.TagIcon, priceTooltip: j.intl.string(D.default.DePOcS) };
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
        } = (0, h.t4)((e) => {
            let t = e.get("checkoutSelectedPaymentSource");
            return {
                unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                paymentSourceType: null != t ? t.type : null,
            };
        }),
        { isGift: f, giftRecipient: S } = (0, G.Pv)(),
        {
            sku: I,
            application: A,
            eligiblePaymentGateways: P,
            disabled: v,
        } = (function () {
            let { selectedSkuId: e, purchaseState: t } = (0, h.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                { application: n } = (0, Y.V)(),
                l = (0, K.gU)();
            B()(null != e, "Expected selectedSkuId");
            let i = l[e],
                r = i?.eligiblePaymentGateways;
            return (
                B()(null != i, "SKU must exist and be fetched."),
                B()(null != n, "Application must exist."),
                {
                    sku: i,
                    application: n,
                    eligiblePaymentGateways: r,
                    disabled: t === z.h.PURCHASING || t === z.h.COMPLETED,
                }
            );
        })(),
        N = i.useMemo(
            () =>
                (function (e, t) {
                    let { skuId: n, paymentSourceType: i, isGift: r } = t;
                    return e === o.C.SLAYER_STOREFRONT_CHECKOUT
                        ? (0, l.jsx)(Q.EB, { paymentSourceType: i, skuId: n, isGift: r })
                        : (0, l.jsx)(Q.T3, { paymentSourceType: i });
                })(n, { skuId: I.id, paymentSourceType: p, isGift: f }),
            [n, I.id, p, f],
        ),
        { upperInlineNoticeProps: L, footerInlineNoticeProps: k } = (function (e) {
            let { sku: t, application: n, isGift: l } = e,
                r = (0, W.bG)([V.A], () => V.A.getFetchState()),
                a = (0, q.uS)(n.id),
                s = n.supportsEmbeddedSurface(H.U.MAIN) && r === V.$.ERROR,
                o = (0, Z.o)({ application: n, productLine: t?.productLine, isGift: l });
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        a &&
                            e.push({
                                type: "warning",
                                message: j.intl.string(j.t.OvMyMd),
                                role: "none",
                                key: "test-mode-warning-notice",
                            }),
                        s &&
                            e.push({
                                type: "critical",
                                message: j.intl.string(j.t.tAmECt),
                                role: "alert",
                                key: "dev-shelf-error-notice",
                            }),
                        e.length > 0 ? e : null
                    );
                }, [a, s]),
                footerInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (null != o && e.push(o), e.length > 0 ? e : null);
                }, [o]),
            };
        })({ sku: I, application: A, isGift: f }),
        D = i.useMemo(() => ({ paymentGatewayRestrictions: P, shouldUseUnifiedCheckoutUI: !0 }), [P]),
        F = (0, l.jsx)(c.N, {
            label: j.intl.string(j.t["u+Cw58"]),
            location: "OneTimePurchaseReviewStepBody",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: D,
            disabled: v,
        }),
        { product: X } = (0, $.AO)({ sku: I }),
        { unifiedInvoiceSummaryProps: ee, priceText: er } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, $.yh)({ invoicePreview: n });
                        (l.push({ id: "sku", label: J(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: j.intl.string(j.t["/I8zmP"]), amount: n.tax }));
                        let a = (0, u.Dn)(n);
                        return (
                            null != a && l.push(a),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: j.intl.string(w.default.eoXh7B),
                                    currency: n.currency,
                                    defaultExpanded: null != e || null != a,
                                },
                                priceText: (0, E.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: I, invoicePreview: r }),
            [I, r],
        ),
        ea = i.useMemo(() => (null != ee ? (0, l.jsx)(m.Vm, { ...ee }) : null), [ee]),
        es = i.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = { priceText: er, sku: I, application: A, giftRecipient: S }),
                e === o.C.SLAYER_STOREFRONT_CHECKOUT
                    ? (0, l.jsx)(en, { ...t })
                    : e === o.C.GUILD_PRODUCT_CHECKOUT
                      ? (0, l.jsx)(el, { ...t })
                      : e === o.C.COLLECTIBLES_CHECKOUT
                        ? (0, l.jsx)(ei, { ...t })
                        : (0, l.jsx)(et, { ...t })
            );
        }, [n, I, A, S, er]),
        eo = i.useMemo(() => (null != r ? (0, E.$g)(r.getAmountDue(), r.currency) : void 0), [r]),
        eu = (0, C.g)(X ?? null),
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
                                    case x.hE.COLLECT_AND_CLAIM:
                                        return t
                                            ? null
                                            : (function (e) {
                                                  if (e.rewardStatus !== y.GM.IN_PROGRESS) return null;
                                                  let t = e.progress;
                                                  if (null == t || null == e.endsAt) return null;
                                                  let n = (0, M.X)(e.endsAt);
                                                  return null == n
                                                      ? null
                                                      : {
                                                            Icon: g.TagIcon,
                                                            text: j.intl.formatToPlainString(j.t["/nFLZv"], {
                                                                current: t.current,
                                                                target: t.target,
                                                                numDays: n,
                                                            }),
                                                            gradientColor: "promotion",
                                                            textVariant: "text-sm/normal",
                                                            textColor: "text-overlay-light",
                                                        };
                                              })(e);
                                    case x.hE.TARGETED_OFFER: {
                                        let e = n.reward,
                                            t = e?.checkout?.offerNotice,
                                            l = t?.text;
                                        if ((0, O.uJ)(l)) return null;
                                        return {
                                            Icon: (0, _.s)(t?.icon),
                                            text: (0, R.U)(l),
                                            gradientColor: (0, T.aJ)(e?.flavor),
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
                        let t = i ? j.t["ZV+aS9"] : j.t["0StwHe"];
                        return (0, l.jsx)(s.J, {
                            Icon: a.C,
                            text: j.intl.format(t, { orbCount: e }),
                            gradientColor: u === b.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                        });
                    }
                    return null;
                })(n, { invoicePreview: r, isGift: f, promotion: eu, productLine: I.productLine }),
            [n, r, f, eu, I.productLine],
        ),
        ed = i.useMemo(() => (null != ec ? { headerBadgeText: j.intl.string(w.default.Fjpyfj) } : {}), [ec]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n === o.C.COLLECTIBLES_CHECKOUT &&
                (0, l.jsx)(U, { requiredCheckoutFlow: o.C.COLLECTIBLES_CHECKOUT, invoicePreview: r, product: X }),
            (0, l.jsx)(d.T_, {
                shouldShowGlobalNotices: !0,
                headerBadgeConfig: ed,
                purchaseItemContent: es,
                invoiceSummaryContent: ea,
                paymentMethodContent: F,
                legalContent: N,
                promotionalNoticeContent: ec,
                upperInlineNoticeProps: L,
                footerInlineNoticeProps: k,
                invoiceTotalDueLabel: j.intl.string(w.default.Zxav97),
                invoiceTotalDueValue: eo,
            }),
        ],
    });
}
function ea(e) {
    let { isCheckoutDataLoading: t } = (0, h.t4)((e) => ({ isCheckoutDataLoading: e.get("isCheckoutDataLoading") }));
    return t ? (0, l.jsx)(d.Ed, { shouldShowUnifiedHeader: !0 }) : (0, l.jsx)(er, { ...e });
}
