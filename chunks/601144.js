"use strict";
n.d(t, { dL: () => eu, Ay: () => eh, oO: () => ed }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(575593),
    a = n(403581),
    o = n(278416),
    l = n(262427),
    u = n(376843),
    c = n(38785),
    d = n(214891),
    _ = n(848584),
    h = n(241989),
    f = n(993408),
    p = n(287809),
    E = n(486020),
    m = n(428262),
    g = n(580630),
    A = n(284009),
    I = n.n(A),
    T = n(997101),
    S = n(17928),
    y = n(318254),
    C = n(881489),
    N = n(367921),
    v = n(331329),
    R = n(739508),
    O = n(975571),
    b = n(615396),
    D = n(652215),
    L = n(758836),
    w = n(788868),
    M = n(375708),
    P = n(494298);
function x(e) {
    let t,
        n,
        r,
        s,
        {
            subscriptionPlan: a,
            isGift: o,
            isTrial: l,
            isOrbCheckout: u,
            isEmbeddedIAP: c,
            renewalInvoice: d,
            paymentSourceType: _,
            hide: h,
            purchaseType: f,
            productLine: p,
            proratedAmount: E,
            basePrice: A,
            currentSubscription: I,
            skuId: T,
            applicationName: S,
            applicationId: y,
            hasAlreadyLinked: P,
        } = e,
        x = (0, C.ds)();
    if (h) return null;
    let k = null == e.planGroup ? [] : e.planGroup;
    if (null != d) {
        let e = m.Ay.getIntervalForInvoice(d);
        (t = e.intervalType),
            (n = e.intervalCount),
            (r = (0, g.CE)((0, g.$g)(d.total, d.currency), t, n)),
            (s = (0, g.CE)((0, g.$g)(d.subtotal, d.currency), t, n));
    } else null != a && ((t = a.interval), (n = a.intervalCount));
    let U = (0, N.Ro)({
            purchaseType: f ?? D.VVm.SUBSCRIPTION,
            plan: a,
            premiumSubscription: null == I ? null : I,
            productLine: p,
            isGift: !!o,
            planGroup: k,
            isPrepaidPaymentSource: !1,
            willRelocateStoreCountry: e.willRelocateStoreCountry,
        }),
        G = M.intl.format(M.t.Y2Rkqc, { primaryText: U, paidURL: D.X7G.PAID_TERMS }),
        F = M.intl.format(M.t.H2uH5b, { primaryText: U, paidURL: D.X7G.PAID_TERMS }),
        V = "",
        B = "";
    if (u) {
        V = M.intl.format(M.t.xlJyOM, { virtualGoodsURL: D.X7G.PAID_TERMS_VIRTUAL_GOODS, paidURL: D.X7G.PAID_TERMS });
        let e = "";
        (e =
            T === L.Dp.ORB_PROFILE_BADGE
                ? M.intl.string(M.t.APcKRo)
                : T === L.Dp.FRACTIONAL_PREMIUM
                  ? M.intl.string(M.t.FhJ74j)
                  : M.intl.string(M.t["Sxed/G"])),
            Array.isArray(V) ? (V = [...V, ` ${e}`]) : (V += ` ${e}`);
    } else if (c)
        if (null != r && d?.subscriptionPeriodEnd != null) V = M.intl.format(M.t["2VPTay"], { subtotalRate: s });
        else
            switch (t) {
                case w.WT.MONTH:
                    V = 1 === n ? M.intl.format(M.t["+ywPmZ"], {}) : M.intl.format(M.t.oBwZfh, { intervalCount: n });
                    break;
                case w.WT.YEAR:
                    V = M.intl.format(M.t.y9gsX5, {});
                    break;
                case void 0:
                    V = M.intl.format(M.t.UxGFH4, {});
                    break;
                default:
                    throw Error(`Unexpected interval: ${t}`);
            }
    else if (f === D.VVm.ONE_TIME)
        switch (p) {
            case D.EZt.COLLECTIBLES:
                (B = G),
                    (V = o
                        ? M.intl.format(M.t.Amdf8X, { paidURL: D.X7G.PAID_TERMS })
                        : M.intl.format(M.t["40vM4o"], { paidURL: D.X7G.PAID_TERMS }));
                break;
            case D.EZt.GUILD_PRODUCT:
                (B = G), (V = M.intl.format(M.t["GEAQ+u"], { paidURL: D.X7G.PAID_TERMS }));
                break;
            case D.EZt.SOCIAL_LAYER_GAME_ITEM:
                (B = G),
                    (V = (0, v._z)(null != y ? { id: y, name: S ?? "game's" } : void 0, {
                        shouldAppendDisclaimer: !0 === o || !1 === P,
                    }));
                break;
            default:
                (B = F), (V = "");
        }
    else if (null == a || o)
        switch ((o && (B = G), t)) {
            case w.WT.MONTH:
                (V = o ? M.intl.string(M.t.IjNapk) : M.intl.string(M.t["/sGXPr"])),
                    (V = o
                        ? M.intl.string(M.t.IjNapk)
                        : 1 === n
                          ? M.intl.string(M.t["/sGXPr"])
                          : M.intl.formatToPlainString(M.t.Fqjihk, { intervalCount: n }));
                break;
            case w.WT.YEAR:
                V = o ? M.intl.string(M.t.vAfbG8) : M.intl.string(M.t.IGzFc5);
                break;
            case void 0:
                V = "";
                break;
            default:
                throw Error(`Unexpected interval: ${t}`);
        }
    else {
        let i,
            r = (0, N.Ro)({
                productLine: p,
                purchaseType: D.VVm.SUBSCRIPTION,
                plan: a,
                premiumSubscription: null == I ? null : I,
                isGift: !1,
                planGroup: k,
                isPrepaidPaymentSource: !1,
                willRelocateStoreCountry: e.willRelocateStoreCountry,
            });
        l ||
            (i = (function (e, t, n, i) {
                if (null == e || null == t || null == n) {
                    let e = Error("Missing base rate for legal fine print");
                    return (0, R.pM)(e, { tags: { planId: i ?? "none" } }), null;
                }
                return (0, g.CE)((0, g.$g)(e.amount, e.currency), t, n);
            })(A, t, n, a.id)),
            (V = I?.isPausedAllowsResumeButNotUpdates
                ? M.intl.format(M.t.B6oNwB, {
                      primaryText: r,
                      rate: i,
                      paidURL: D.X7G.PAID_TERMS,
                      contactLink: D.X7G.CONTACT,
                      helpdeskArticle: O.A.getArticleURL(D.MVz.BILLING),
                  })
                : null != I && (0, b.vT)(I, a.id, k)
                  ? M.intl.format(M.t.LyBQUW, {
                        primaryText: r,
                        rate: i,
                        paidURL: D.X7G.PAID_TERMS,
                        contactLink: D.X7G.CONTACT,
                        helpdeskArticle: O.A.getArticleURL(D.MVz.BILLING),
                    })
                  : x && p === D.EZt.BOOST && null != A
                    ? M.intl.format(M.t["2nKy/0"], {
                          price: (0, g.$g)(A.amount, A.currency),
                          paidServiceTermsArticle: D.X7G.PAID_TERMS,
                          contactUsArticle: D.X7G.CONTACT,
                          subscriptionFAQArticle: O.A.getArticleURL(D.MVz.BILLING),
                      })
                    : x
                      ? M.intl.format(M.t.Oo2FeS, {
                            buttonText: r,
                            interval: m.Ay.formatInterval(a?.interval),
                            cancelSubscriptionArticle: O.A.getArticleURL(D.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                            paidServiceTermsArticle: O.A.getArticleURL(D.MVz.PAID_TERMS),
                        })
                      : l
                        ? M.intl.format(M.t["Hvo/Z5"], {
                              buttonText: r,
                              interval: m.Ay.formatInterval(a?.interval),
                              cancelSubscriptionArticle: O.A.getArticleURL(D.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                              paidServiceTermsArticle: O.A.getArticleURL(D.MVz.PAID_TERMS),
                          })
                        : null != E && null != A
                          ? M.intl.format(M.t.Kcieh4, {
                                primaryText: r,
                                proratedAmount: (0, g.$g)(E, A.currency),
                                renewalAmount: (0, g.$g)(A.amount, A.currency),
                                rateInterval: m.Ay.formatInterval(a?.interval),
                                paidURL: D.X7G.PAID_TERMS,
                                contactLink: D.X7G.CONTACT,
                                helpdeskArticle: O.A.getArticleURL(D.MVz.BILLING),
                            })
                          : M.intl.format(M.t.anJ7OX, {
                                primaryText: r,
                                rate: i,
                                paidURL: D.X7G.PAID_TERMS,
                                contactLink: D.X7G.CONTACT,
                                helpdeskArticle: O.A.getArticleURL(D.MVz.BILLING),
                            }));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            "" !== B && (0, i.jsx)("div", { children: B }),
            "" !== V && (0, i.jsx)("div", { children: V }),
            _ === D.hes.PAYSAFE_CARD && (0, i.jsx)("div", { children: M.intl.string(M.t.kj9VLI) }),
            _ === D.hes.SOFORT && (0, i.jsx)("div", { children: M.intl.string(M.t["UYy1/h"]) }),
        ],
    });
}
let k = function (e) {
    return (0, i.jsx)("div", { className: P.F, children: (0, i.jsx)(x, { ...e }) });
};
var U = n(953689),
    G = n(10716),
    F = n(46225),
    V = n(20015),
    B = n(364995),
    j = n(31823),
    H = n(426398),
    Y = n(427675),
    W = n(46332),
    K = n(977445),
    $ = n(503698),
    z = n.n($),
    q = n(760196);
let Z = r.forwardRef(function (e, t) {
    let { isActive: n, children: r } = e;
    return (0, i.jsx)("div", { className: z()(q.i, { [q.a]: n }), ref: t, children: r });
});
var X = n(218075),
    Q = n(615405),
    J = n(45938),
    ee = n(937008),
    et = n(566980),
    en = n(818824),
    ei = n(872452);
function er(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, ee.Pv)(),
        { immediateDelivery: r } = (0, en.U)(),
        s = (0, N.Ro)({
            purchaseType: D.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, i.jsx)(ei._P, {
        variant: n ? { type: ei.I0.GiftShop, purchaseButtonText: s } : { type: ei.I0.Shop, purchaseButtonText: s },
        paymentSourceType: t,
        immediateDelivery: r,
    });
}
var es = n(292979),
    ea = n(319820),
    eo = n(982772),
    el = n(865096);
function eu(e) {
    return e.name;
}
let ec = {
    [s.R.BUNDLE]: () => M.intl.string(eo.default["jM8/71"]),
    [s.R.AVATAR_DECORATION]: () => M.intl.string(eo.default.r29Oel),
    [s.R.PROFILE_EFFECT]: () => M.intl.string(eo.default.eTYAvF),
    [s.R.NAMEPLATE]: () => M.intl.string(eo.default.of9bom),
    [s.R.PROFILE_FRAME]: () => M.intl.string(eo.default.HzDn6w),
};
function ed(e) {
    let t = M.intl.string(eo.default.iZe9Wy);
    if (null == e);
    else if (e.type in ec) return (0, ec[e.type])();
    return t;
}
function e_(e) {
    let {
            application: t,
            sku: n,
            invoicePreview: s,
            paymentMethodContent: u,
            legalContent: A,
            isGift: I,
            giftRecipient: T,
            upperInlineNoticeProps: S,
            footerInlineNoticeProps: C,
        } = e,
        { product: N, isSocialLayerGameItem: v } = (0, ea.AO)({ sku: n }),
        { unifiedInvoiceSummaryProps: R, priceText: O } = r.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        i = [];
                    if (null != n) {
                        let { discount: e, basePrice: r, showTaxes: s } = (0, ea.yh)({ invoicePreview: n });
                        return (
                            i.push({ id: "sku", label: eu(t), amount: r }),
                            null != e &&
                                i.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            s && i.push({ id: "tax", label: M.intl.string(M.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: i,
                                    label: M.intl.string(eo.default.eoXh7B),
                                    currency: n.currency,
                                },
                                priceText: (0, g.$g)(r, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: n, invoicePreview: s }),
            [n, s],
        ),
        b = r.useMemo(() => (null != R ? (0, i.jsx)(_.Vm, { ...R }) : null), [R]),
        L = r.useMemo(
            () =>
                (function (e) {
                    let { sku: t, product: n, application: r, isSocialLayerGameItem: s, giftRecipient: l } = e,
                        u = M.intl.string(eo.default.iZe9Wy);
                    s
                        ? (u = M.intl.string(eo.default.qwSlCO))
                        : null != n
                          ? (u = ed(n))
                          : t.productLine === D.EZt.GUILD_PRODUCT && (u = M.intl.string(eo.default.hewwdA));
                    let c = s
                            ? {
                                  header: r.name,
                                  headerIconSrc: E.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 16 }),
                              }
                            : {},
                        d = (0, i.jsx)(h.WH, { sku: t, product: n }),
                        _ = {};
                    return (
                        null != n &&
                            (_ = (function (e) {
                                let t = p.default.getCurrentUser(),
                                    n = m.Ay.canUseShopDiscounts(t),
                                    i = (0, f.xM)(t),
                                    r = (0, f.WD)(e, { hasShopDiscount: n, discount: (0, f.fT)(e, n) });
                                if (null != r && !r.showDefaultPriceOnly && r.showDiscountPrice) {
                                    if (i === f.D0.NITRO)
                                        return { PriceIcon: a.t, priceTooltip: M.intl.string(eo.default.YUNJJa) };
                                    if (i === f.D0.THIRDPARTY)
                                        return { PriceIcon: o.g, priceTooltip: M.intl.string(el.default.DePOcS) };
                                }
                                return {};
                            })(n)),
                        {
                            ...c,
                            ..._,
                            label: eu(t),
                            description: u,
                            graphic: d,
                            target: null != l ? { type: "gift", user: l } : void 0,
                        }
                    );
                })({ sku: n, product: N, application: t, isSocialLayerGameItem: v, giftRecipient: T }),
            [n, N, t, v, T],
        ),
        [w, P] = r.useMemo(
            () => [M.intl.string(eo.default.Zxav97), null != s ? (0, g.$g)(s.total, s.currency) : void 0],
            [s],
        ),
        x = r.useMemo(() => {
            let e = (function (e, t) {
                let { productLine: n, isGift: i } = t;
                if (null == e) return null;
                let r = e.orbsReward;
                if (null != r && r > 0) {
                    let e = i ? M.t["ZV+aS9"] : M.t["0StwHe"];
                    return {
                        Icon: y.C,
                        text: M.intl.format(e, { orbCount: r }),
                        gradientColor: n === D.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                    };
                }
            })(s, { productLine: n.productLine, isGift: I });
            return null != e ? (0, i.jsx)(l.J, { ...e }) : null;
        }, [s, I, n.productLine]),
        { setHeaderBadgeText: k, unsetHeaderBadgeText: U } = (0, d.v)();
    return (
        r.useEffect(
            () => (
                null != x && k(M.intl.string(eo.default.Fjpyfj)),
                () => {
                    U();
                }
            ),
            [x, k, U],
        ),
        (0, i.jsx)(c.T, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: (0, i.jsx)(h.f7, { ...L, price: O }),
            invoiceSummaryContent: b,
            paymentMethodContent: u,
            legalContent: A,
            promotionalNoticeContent: x,
            upperInlineNoticeProps: S,
            footerInlineNoticeProps: C,
            invoiceTotalDueLabel: w,
            invoiceTotalDueValue: P,
        })
    );
}
function eh(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s } = e,
        {
            sku: a,
            application: o,
            invoicePreview: l,
            isGift: d,
            eligiblePaymentGateways: _,
            purchaseTermsAndLegalContent: h,
            isStepLoading: f,
            giftRecipient: p,
            warningAndErrorMessages: E,
            disabled: m,
        } = (function (e) {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: s,
                    setHasAcceptedTerms: a,
                    purchaseState: o,
                    checkoutInvoicePreview: l,
                    paymentSourceId: u,
                    purchasePreviewError: c,
                    purchaseType: d,
                } = (0, W.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setHasAcceptedTerms: e.setHasAcceptedTerms,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    purchaseType: e.purchaseType,
                })),
                { hasPaymentSources: _ } = (0, H.jm)(),
                { application: h, isEmbeddedIAP: f } = (0, j.V)(),
                p = (0, S.bG)([G.A], () => G.A.getFetchState()),
                { checkoutPaymentSources: E, hasInvoiceOrderContextLoaded: m } = (0, B.t)(),
                g = (0, Y.gU)(),
                { isGift: A, giftRecipient: y } = (0, ee.Pv)(),
                C = A && (0, J.Ik)(y),
                { fetched: N, hasAlreadyLinked: R } = (0, F.RD)(h);
            I()(null != s, "Expected selectedSkuId");
            let O = g[s],
                b = O?.eligiblePaymentGateways;
            I()(null != O, "SKU must exist and be fetched."), I()(null != h, "Application must exist.");
            let L = (0, K.uS)(h.id),
                w = T.M.EEA_COUNTRIES.has(Q.A.ipCountryCodeWithFallback),
                P = o === et.h.PURCHASING || o === et.h.COMPLETED,
                x = E.find((e) => e.id === u) ?? null,
                $ = null != x ? x.type : null,
                z = null != b && b.length > 0 && (null == u || null === $) && _ ? X.fU.SELECT_PAYMENT_METHOD : void 0,
                q = O.productLine === D.EZt.SOCIAL_LAYER_GAME_ITEM,
                en = C && !q,
                ei = r.useMemo(
                    () => ({
                        testModeWarning: L ? M.intl.string(M.t.OvMyMd) : null,
                        devShelfError:
                            (0, V.n)(h, D.gfo.EMBEDDED) && p === G.$.ERROR ? M.intl.string(M.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: q && N && !R && !A ? (0, v.k3)(h) : null,
                    }),
                    [L, h, p, q, N, R, A],
                ),
                ea = r.useMemo(
                    () =>
                        O.productLine === D.EZt.COLLECTIBLES
                            ? (0, i.jsx)(er, { paymentSourceType: $ })
                            : (0, i.jsx)(Z, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, i.jsx)(U.A, {
                                      onChange: a,
                                      forceShow: !0,
                                      showWithdrawalWaiver: w,
                                      disabled: P,
                                      subscriptionPlan: null,
                                      finePrintClassname: es.i,
                                      purchaseType: d,
                                      isGift: A,
                                      finePrint: (0, i.jsx)(k, {
                                          paymentSourceType: $,
                                          isEmbeddedIAP: f,
                                          purchaseType: d,
                                          productLine: O.productLine,
                                          isGift: A,
                                          applicationName: h.name,
                                          applicationId: h.id,
                                          hasAlreadyLinked: !N || R,
                                      }),
                                  }),
                              }),
                    [t, n, a, w, P, d, A, $, f, O.productLine, h.name, h.id, N, R],
                );
            return {
                sku: O,
                application: h,
                giftRecipient: y,
                isGift: A,
                invoicePreview: l,
                isEmbeddedIAP: f,
                shouldShowPurchaseReviewImage: en,
                paymentRestrictionBannerType: z,
                devShelfFetchState: p,
                isStepLoading: !m && null == c,
                purchasePreviewError: c,
                warningAndErrorMessages: ei,
                purchaseTermsAndLegalContent: ea,
                eligiblePaymentGateways: b,
                disabled: P,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        g = r.useMemo(() => ({ paymentGatewayRestrictions: _, shouldUseUnifiedCheckoutUI: !0 }), [_]),
        A = (0, i.jsx)(u.N, {
            label: M.intl.string(M.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: s,
            additionalPaymentSourceDropdownProps: g,
            disabled: m,
        }),
        y = r.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning &&
                    e.push({ type: "warning", message: E.testModeWarning, key: "test-mode-warning-notice" }),
                null != E.devShelfError &&
                    e.push({ type: "critical", message: E.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError]),
        C = r.useMemo(() => {
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
    return f
        ? (0, i.jsx)(c.E, {})
        : (0, i.jsx)(e_, {
              application: o,
              giftRecipient: p,
              isGift: d,
              sku: a,
              invoicePreview: l,
              paymentMethodContent: A,
              legalContent: h,
              upperInlineNoticeProps: y,
              footerInlineNoticeProps: C,
          });
}
