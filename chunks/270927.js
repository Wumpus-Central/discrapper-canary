(n.d(t, { RL: () => ec, oO: () => ee, dL: () => J }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(575593),
    a = n(991690),
    s = n(17928),
    o = n(318254),
    u = n(262427),
    c = n(10716),
    d = n(120700),
    m = n(854354),
    p = n(414051),
    h = n(38785),
    C = n(270537),
    f = n(241989),
    E = n(912195),
    S = n(818296),
    g = n(977445),
    I = n(525877),
    A = n(486020),
    y = n(580630),
    x = n(403581),
    P = n(278416),
    v = n(993408),
    _ = n(1076),
    T = n(288106),
    N = n(604913),
    b = n(223311),
    j = n(306396),
    R = n(151115),
    O = n(518865),
    M = n(536572),
    L = n(652215),
    k = n(105292),
    w = n(812095),
    D = n(240248),
    U = n(808598),
    G = n(287809),
    F = n(24482),
    B = n(758476),
    H = n(833159);
function W(e) {
    let { requiredCheckoutFlow: t, invoicePreview: n, product: l } = e;
    return (
        !(function (e) {
            let { invoicePreview: t, product: n } = e,
                {
                    setCollectedModalOverrideTitle: l,
                    setCollectedModalOverrideDescription: r,
                    setCollectedModalGradientColor: a,
                    setCompletesCollectAndClaimPromotion: s,
                } = (0, _.z)(),
                o = (0, b.A)(L.FYj),
                u = null != n ? (0, R.L)(n, o) : null,
                c = u?.tenantMetadata?.collectibles;
            (0, i.useEffect)(() => {
                switch (c?.type) {
                    case N.hE.COLLECT_AND_CLAIM: {
                        let e = u?.progress;
                        if (null == n || null == e) break;
                        let t = Math.min(e.current + (0, j.oO)(n, c.collectionId), e.target);
                        u?.rewardStatus === T.GM.IN_PROGRESS
                            ? l(k.intl.formatToPlainString(k.t.Jkxtln, { current: t, target: e.target }))
                            : l(void 0);
                        let i = u?.rewardStatus === T.GM.IN_PROGRESS && t >= e.target;
                        (r(
                            k.intl.formatToPlainString(i ? k.t.OUIULI : k.t["8yvdPi"], {
                                collectibleTitle: (0, M.VG)(n),
                            }),
                        ),
                            a(void 0),
                            s(i));
                        return;
                    }
                    case N.hE.TARGETED_OFFER: {
                        let e = c.reward,
                            n = null != e ? u?.rewardConfig?.discount?.id : null,
                            i = null != n && t?.getDiscountIdIfExists() === String(n) ? e : null;
                        (l(i?.collected?.overrideTitle), r(void 0), a(null != i ? (0, O.lG)(i.flavor) : void 0), s(!1));
                        return;
                    }
                }
                (l(void 0), r(void 0), a(void 0), s(!1));
            }, [c, u, n, t, l, r, a, s]);
        })({ invoicePreview: n, product: l }),
        null
    );
}
var V = n(951305),
    Y = n(284009),
    K = n.n(Y),
    q = n(31823),
    Z = n(427675),
    z = n(566980),
    $ = n(319820),
    Q = n(52635);
function J(e) {
    return e.name;
}
let X = {
    [r.R.BUNDLE]: () => k.intl.string(B.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => k.intl.string(B.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => k.intl.string(B.default.eTYAvF),
    [r.R.NAMEPLATE]: () => k.intl.string(B.default.of9bom),
    [r.R.PROFILE_FRAME]: () => k.intl.string(B.default.HzDn6w),
};
function ee(e) {
    let t = k.intl.string(B.default.iZe9Wy);
    if (null == e);
    else if (e.type in X) return (0, X[e.type])();
    return t;
}
function et(e) {
    let {
            sku: t,
            collectiblesProduct: n,
            priceText: i,
            description: r = k.intl.string(B.default.iZe9Wy),
            giftRecipient: a,
            ...s
        } = e,
        o = (0, l.jsx)(f.WH, { sku: t, product: n }),
        u = J(t);
    return (0, l.jsx)(f.f7, {
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
        r = i ? k.intl.string(B.default.qwSlCO) : k.intl.string(B.default.iZe9Wy),
        a = i
            ? { header: t.name, headerIconSrc: A.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 16 }) }
            : {};
    return (0, l.jsx)(et, { ...e, description: r, ...a });
}
function el(e) {
    let t = k.intl.string(B.default.hewwdA);
    return (0, l.jsx)(et, { ...e, description: t });
}
function ei(e) {
    let { sku: t } = e,
        { product: n } = (0, $.AO)({ sku: t }),
        i = ee(n),
        r =
            null != n
                ? (function (e) {
                      let t = G.default.getCurrentUser(),
                          n = F.Ay.canUseShopDiscounts(t),
                          l = (0, v.xM)(t),
                          i = (0, v.WD)(e, { hasShopDiscount: n, discount: (0, v.fT)(e, n) });
                      if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                          if (l === v.D0.NITRO)
                              return { PriceIcon: x.t, priceTooltip: k.intl.string(B.default.YUNJJa) };
                          if (l === v.D0.THIRDPARTY)
                              return { PriceIcon: P.TagIcon, priceTooltip: k.intl.string(H.default.DePOcS) };
                      }
                      return {};
                  })(n)
                : {};
    return (0, l.jsx)(et, { ...e, description: i, collectiblesProduct: n, ...r });
}
function er(e) {
    let { productLine: t, application: n, isGift: r } = e,
        a = (0, I.o)({ application: n, productLine: t, isGift: r }),
        s = i.useMemo(() => {
            let e = [];
            return (null != a && e.push(a), e.length > 0 ? e : null);
        }, [a]);
    return (0, l.jsx)(h.Wl, { footerInlineNoticeProps: s });
}
function ea(e) {
    let { productLine: t, application: n, isGift: i } = e;
    return (0, E.t4)((e) => e.unifiedCheckoutFlow) === d.C.SLAYER_STOREFRONT_CHECKOUT
        ? (0, l.jsx)(er, { productLine: t, application: n, isGift: i })
        : null;
}
function es(e) {
    let { application: t } = e,
        n = (0, s.bG)([c.A], () => c.A.getFetchState()),
        r = (0, g.uS)(t.id),
        o = t.supportsEmbeddedSurface(a.U.MAIN) && n === c.$.ERROR,
        u = i.useMemo(() => {
            let e = [];
            return (
                r &&
                    e.push({
                        type: "warning",
                        message: k.intl.string(k.t.OvMyMd),
                        role: "none",
                        key: "test-mode-warning-notice",
                    }),
                o &&
                    e.push({
                        type: "critical",
                        message: k.intl.string(k.t.tAmECt),
                        role: "alert",
                        key: "dev-shelf-error-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [r, o]);
    return (0, l.jsx)(h.zJ, { upperInlineNoticeProps: u, shouldShowGlobalNotices: !0 });
}
function eo(e) {
    let { application: t } = e,
        n = (0, E.t4)((e) => e.unifiedCheckoutFlow);
    return n === d.C.SLAYER_STOREFRONT_CHECKOUT || n === d.C.PREMIUM_APPS_OTP_CHECKOUT
        ? (0, l.jsx)(es, { application: t })
        : (0, l.jsx)(h.zJ, { upperInlineNoticeProps: null, shouldShowGlobalNotices: !0 });
}
function eu(e) {
    let { handlePaymentSourceAdd: t } = e,
        {
            unifiedCheckoutFlow: n,
            checkoutInvoicePreview: r,
            paymentSourceType: a,
        } = (0, E.t4)((e) => {
            let t = e.get("checkoutSelectedPaymentSource");
            return {
                unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                paymentSourceType: null != t ? t.type : null,
            };
        }),
        { isGift: s, giftRecipient: c } = (0, V.Pv)(),
        {
            sku: f,
            application: g,
            eligiblePaymentGateways: I,
            disabled: A,
        } = (function () {
            let { selectedSkuId: e, purchaseState: t } = (0, E.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                { application: n } = (0, q.V)(),
                l = (0, Z.gU)();
            K()(null != e, "Expected selectedSkuId");
            let i = l[e],
                r = i?.eligiblePaymentGateways;
            return (
                K()(null != i, "SKU must exist and be fetched."),
                K()(null != n, "Application must exist."),
                {
                    sku: i,
                    application: n,
                    eligiblePaymentGateways: r,
                    disabled: t === z.h.PURCHASING || t === z.h.COMPLETED,
                }
            );
        })(),
        x = i.useMemo(
            () =>
                (function (e, t) {
                    let { skuId: n, paymentSourceType: i, isGift: r } = t;
                    return e === d.C.SLAYER_STOREFRONT_CHECKOUT
                        ? (0, l.jsx)(Q.EB, { paymentSourceType: i, skuId: n, isGift: r })
                        : (0, l.jsx)(Q.T3, { paymentSourceType: i });
                })(n, { skuId: f.id, paymentSourceType: a, isGift: s }),
            [n, f.id, a, s],
        ),
        v = i.useMemo(() => ({ paymentGatewayRestrictions: I, shouldUseUnifiedCheckoutUI: !0 }), [I]),
        _ = (0, l.jsx)(p.N, {
            label: k.intl.string(k.t["u+Cw58"]),
            location: "OneTimePurchaseReviewStepBody",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: v,
            disabled: A,
        }),
        { product: b } = (0, $.AO)({ sku: f }),
        { unifiedInvoiceSummaryProps: j, priceText: M } = i.useMemo(
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
                            r && l.push({ id: "tax", label: k.intl.string(k.t["/I8zmP"]), amount: n.tax }));
                        let a = (0, m.Dn)(n);
                        return (
                            null != a && l.push(a),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: k.intl.string(B.default.eoXh7B),
                                    currency: n.currency,
                                    defaultExpanded: null != e || null != a,
                                },
                                priceText: (0, y.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: f, invoicePreview: r }),
            [f, r],
        ),
        G = i.useMemo(() => (null != j ? (0, l.jsx)(C.Vm, { ...j }) : null), [j]),
        F = i.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = { priceText: M, sku: f, application: g, giftRecipient: c }),
                e === d.C.SLAYER_STOREFRONT_CHECKOUT
                    ? (0, l.jsx)(en, { ...t })
                    : e === d.C.GUILD_PRODUCT_CHECKOUT
                      ? (0, l.jsx)(el, { ...t })
                      : e === d.C.COLLECTIBLES_CHECKOUT
                        ? (0, l.jsx)(ei, { ...t })
                        : (0, l.jsx)(et, { ...t })
            );
        }, [n, f, g, c, M]),
        H = i.useMemo(() => (null != r ? (0, y.$g)(r.getAmountDue(), r.currency) : void 0), [r]),
        Y = (0, S.g)(b ?? null),
        X = i.useMemo(
            () =>
                (function (e, t) {
                    let { invoicePreview: n, isGift: i, promotion: r, productLine: a } = t;
                    if (e === d.C.COLLECTIBLES_CHECKOUT) {
                        let e;
                        return null ==
                            (e = (function (e, t) {
                                if (null == e) return null;
                                let n = e.tenantMetadata?.collectibles;
                                switch (n?.type) {
                                    case N.hE.COLLECT_AND_CLAIM:
                                        return t
                                            ? null
                                            : (function (e) {
                                                  if (e.rewardStatus !== T.GM.IN_PROGRESS) return null;
                                                  let t = e.progress;
                                                  if (null == t || null == e.endsAt) return null;
                                                  let n = (0, U.X)(e.endsAt);
                                                  return null == n
                                                      ? null
                                                      : {
                                                            Icon: P.TagIcon,
                                                            text: k.intl.formatToPlainString(k.t["/nFLZv"], {
                                                                current: t.current,
                                                                target: t.target,
                                                                numDays: n,
                                                            }),
                                                            gradientColor: "promotion",
                                                            textVariant: "text-sm/normal",
                                                            textColor: "text-overlay-light",
                                                        };
                                              })(e);
                                    case N.hE.TARGETED_OFFER: {
                                        let e = n.reward,
                                            t = e?.checkout?.offerNotice,
                                            l = t?.text;
                                        if ((0, D.uJ)(l)) return null;
                                        return {
                                            Icon: (0, R.s)(t?.icon),
                                            text: (0, w.U)(l),
                                            gradientColor: (0, O.aJ)(e?.flavor),
                                        };
                                    }
                                    default:
                                        return null;
                                }
                            })(r, i))
                            ? null
                            : (0, l.jsx)(u.J, { ...e });
                    }
                    if (e === d.C.SLAYER_STOREFRONT_CHECKOUT) {
                        let e = n?.orbsReward;
                        if (null == e || e <= 0) return null;
                        let t = i ? k.t["ZV+aS9"] : k.t["0StwHe"];
                        return (0, l.jsx)(u.J, {
                            Icon: o.C,
                            text: k.intl.format(t, { orbCount: e }),
                            gradientColor: a === L.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                        });
                    }
                    return null;
                })(n, { invoicePreview: r, isGift: s, promotion: Y, productLine: f.productLine }),
            [n, r, s, Y, f.productLine],
        ),
        ee = i.useMemo(() => (null != X ? { headerBadgeText: k.intl.string(B.default.Fjpyfj) } : {}), [X]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n === d.C.COLLECTIBLES_CHECKOUT &&
                (0, l.jsx)(W, { requiredCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT, invoicePreview: r, product: b }),
            (0, l.jsx)(h.T_, {
                headerBadgeConfig: ee,
                purchaseItemContent: F,
                invoiceSummaryContent: G,
                paymentMethodContent: _,
                legalContent: x,
                promotionalNoticeContent: X,
                upperInlineNoticeContent: (0, l.jsx)(eo, { application: g }),
                footerInlineNoticeContent: (0, l.jsx)(ea, { productLine: f.productLine, application: g, isGift: s }),
                invoiceTotalDueLabel: k.intl.string(B.default.Zxav97),
                invoiceTotalDueValue: H,
            }),
        ],
    });
}
function ec(e) {
    let { isCheckoutDataLoading: t } = (0, E.t4)((e) => ({ isCheckoutDataLoading: e.get("isCheckoutDataLoading") }));
    return t ? (0, l.jsx)(h.Ed, { shouldShowUnifiedHeader: !0 }) : (0, l.jsx)(eu, { ...e });
}
