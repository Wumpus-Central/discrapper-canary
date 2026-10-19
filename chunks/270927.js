(n.d(t, { RL: () => es, oO: () => et, dL: () => X }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(575593),
    a = n(318254),
    s = n(262427),
    o = n(120700),
    u = n(854354),
    c = n(377058),
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
    y = n(1076),
    A = n(288106),
    P = n(604913),
    x = n(223311),
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
    k = n(158045),
    w = n(649975),
    D = n(182732);
function U(e) {
    let { requiredCheckoutFlow: t, invoicePreview: n, product: l } = e;
    return (
        !(function (e) {
            let { invoicePreview: t, product: n } = e,
                {
                    setCollectedModalOverrideTitle: l,
                    setCollectedModalOverrideDescription: r,
                    setCollectedModalGradientColor: a,
                } = (0, y.z)(),
                s = (0, x.A)(b.FYj),
                o = null != n ? (0, _.L)(n, s) : null,
                u = o?.tenantMetadata?.collectibles;
            (0, i.useEffect)(() => {
                switch (u?.type) {
                    case P.hE.COLLECT_AND_CLAIM: {
                        let e = o?.progress;
                        if (null == n || null == e) break;
                        if (o?.rewardStatus === A.GM.IN_PROGRESS) {
                            let t = Math.min(e.current + (0, v.oO)(n, u.collectionId), e.target);
                            l(j.intl.formatToPlainString(j.t.G9koyR, { current: t, target: e.target }));
                        } else l(void 0);
                        (r(j.intl.formatToPlainString(j.t.LD7HFF, { collectibleTitle: (0, N.VG)(n) })), a(void 0));
                        return;
                    }
                    case P.hE.TARGETED_OFFER: {
                        let e = u.reward,
                            n = null != e ? o?.rewardConfig?.discount?.id : null,
                            i = null != n && t?.getDiscountIdIfExists() === String(n) ? e : null;
                        (l(i?.collected?.overrideTitle), r(void 0), a(null != i ? (0, T.lG)(i.flavor) : void 0));
                        return;
                    }
                }
                (l(void 0), r(void 0), a(void 0));
            }, [u, o, n, t, l, r, a]);
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
    Y = n(206828),
    K = n(31823),
    q = n(427675),
    Z = n(977445),
    z = n(118982),
    $ = n(566980),
    J = n(319820),
    Q = n(52635);
function X(e) {
    return e.name;
}
let ee = {
    [r.R.BUNDLE]: () => j.intl.string(w.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => j.intl.string(w.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => j.intl.string(w.default.eTYAvF),
    [r.R.NAMEPLATE]: () => j.intl.string(w.default.of9bom),
    [r.R.PROFILE_FRAME]: () => j.intl.string(w.default.HzDn6w),
};
function et(e) {
    let t = j.intl.string(w.default.iZe9Wy);
    if (null == e);
    else if (e.type in ee) return (0, ee[e.type])();
    return t;
}
function en(e) {
    let {
            sku: t,
            collectiblesProduct: n,
            priceText: i,
            description: r = j.intl.string(w.default.iZe9Wy),
            giftRecipient: a,
            ...s
        } = e,
        o = (0, l.jsx)(p.WH, { sku: t, product: n }),
        u = X(t);
    return (0, l.jsx)(p.f7, {
        description: r,
        price: i,
        graphic: o,
        label: u,
        target: null != a ? { type: "gift", user: a } : void 0,
        ...s,
    });
}
function el(e) {
    let { application: t, sku: n } = e,
        { isSocialLayerGameItem: i } = (0, J.AO)({ sku: n }),
        r = i ? j.intl.string(w.default.qwSlCO) : j.intl.string(w.default.iZe9Wy),
        a = i
            ? { header: t.name, headerIconSrc: f.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 16 }) }
            : {};
    return (0, l.jsx)(en, { ...e, description: r, ...a });
}
function ei(e) {
    let t = j.intl.string(w.default.hewwdA);
    return (0, l.jsx)(en, { ...e, description: t });
}
function er(e) {
    let { sku: t } = e,
        { product: n } = (0, J.AO)({ sku: t }),
        i = et(n),
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
    return (0, l.jsx)(en, { ...e, description: i, collectiblesProduct: n, ...r });
}
function ea(e) {
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
            application: y,
            eligiblePaymentGateways: x,
            disabled: v,
        } = (function () {
            let { selectedSkuId: e, purchaseState: t } = (0, h.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                { application: n } = (0, K.V)(),
                l = (0, q.gU)();
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
                    disabled: t === $.h.PURCHASING || t === $.h.COMPLETED,
                }
            );
        })(),
        N = i.useMemo(
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
                })(n, { skuId: I.id, paymentSourceType: p, isGift: f }),
            [n, I.id, p, f],
        ),
        { upperInlineNoticeProps: L, footerInlineNoticeProps: k } = (function (e) {
            let { sku: t, application: n, isGift: l } = e,
                r = (0, W.bG)([V.A], () => V.A.getFetchState()),
                { fetched: a, hasAlreadyLinked: s } = (0, Y.RD)(n),
                o = (0, Z.uS)(n.id),
                u = null != t && t.productLine === b.EZt.SOCIAL_LAYER_GAME_ITEM,
                c = n.supportsEmbeddedSurface(H.U.MAIN) && r === V.$.ERROR,
                d = u && a && !s && !l ? (0, z.k3)(n) : null;
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        o &&
                            e.push({
                                type: "warning",
                                message: j.intl.string(j.t.OvMyMd),
                                role: "none",
                                key: "test-mode-warning-notice",
                            }),
                        c &&
                            e.push({
                                type: "critical",
                                message: j.intl.string(j.t.tAmECt),
                                role: "alert",
                                key: "dev-shelf-error-notice",
                            }),
                        e.length > 0 ? e : null
                    );
                }, [o, c]),
                footerInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        null != d &&
                            e.push({
                                type: "info",
                                message: d,
                                role: "status",
                                key: "social-layer-game-item-disclaimer-notice",
                            }),
                        e.length > 0 ? e : null
                    );
                }, [d]),
            };
        })({ sku: I, application: y, isGift: f }),
        D = i.useMemo(() => ({ paymentGatewayRestrictions: x, shouldUseUnifiedCheckoutUI: !0 }), [x]),
        F = (0, l.jsx)(c.N, {
            label: j.intl.string(j.t["u+Cw58"]),
            location: "OneTimePurchaseReviewStepBody",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: D,
            disabled: v,
        }),
        { product: ee } = (0, J.AO)({ sku: I }),
        { unifiedInvoiceSummaryProps: et, priceText: ea } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, J.yh)({ invoicePreview: n });
                        (l.push({ id: "sku", label: X(t), amount: i }),
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
        es = i.useMemo(() => (null != et ? (0, l.jsx)(m.Vm, { ...et }) : null), [et]),
        eo = i.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = { priceText: ea, sku: I, application: y, giftRecipient: S }),
                e === o.C.SLAYER_STOREFRONT_CHECKOUT
                    ? (0, l.jsx)(el, { ...t })
                    : e === o.C.GUILD_PRODUCT_CHECKOUT
                      ? (0, l.jsx)(ei, { ...t })
                      : e === o.C.COLLECTIBLES_CHECKOUT
                        ? (0, l.jsx)(er, { ...t })
                        : (0, l.jsx)(en, { ...t })
            );
        }, [n, I, y, S, ea]),
        eu = i.useMemo(() => (null != r ? (0, E.$g)(r.getAmountDue(), r.currency) : void 0), [r]),
        ec = (0, C.g)(ee ?? null),
        ed = i.useMemo(
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
                                    case P.hE.COLLECT_AND_CLAIM:
                                        return t
                                            ? null
                                            : (function (e) {
                                                  if (e.rewardStatus !== A.GM.IN_PROGRESS) return null;
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
                                    case P.hE.TARGETED_OFFER: {
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
                })(n, { invoicePreview: r, isGift: f, promotion: ec, productLine: I.productLine }),
            [n, r, f, ec, I.productLine],
        ),
        em = i.useMemo(() => (null != ed ? { headerBadgeText: j.intl.string(w.default.Fjpyfj) } : {}), [ed]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n === o.C.COLLECTIBLES_CHECKOUT &&
                (0, l.jsx)(U, { requiredCheckoutFlow: o.C.COLLECTIBLES_CHECKOUT, invoicePreview: r, product: ee }),
            (0, l.jsx)(d.T_, {
                shouldShowGlobalNotices: !0,
                headerBadgeConfig: em,
                purchaseItemContent: eo,
                invoiceSummaryContent: es,
                paymentMethodContent: F,
                legalContent: N,
                promotionalNoticeContent: ed,
                upperInlineNoticeProps: L,
                footerInlineNoticeProps: k,
                invoiceTotalDueLabel: j.intl.string(w.default.Zxav97),
                invoiceTotalDueValue: eu,
            }),
        ],
    });
}
function es(e) {
    let { isCheckoutDataLoading: t } = (0, h.t4)((e) => ({ isCheckoutDataLoading: e.get("isCheckoutDataLoading") }));
    return t ? (0, l.jsx)(d.Ed, { shouldShowUnifiedHeader: !0 }) : (0, l.jsx)(ea, { ...e });
}
