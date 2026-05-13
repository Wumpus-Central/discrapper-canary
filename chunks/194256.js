n.d(t, { dL: () => q, Ay: () => X, oO: () => $ }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(575593),
    r = n(403581),
    s = n(262427),
    o = n(61572),
    u = n(725836),
    c = n(717925),
    d = n(848584),
    p = n(241989),
    m = n(993408),
    h = n(287809),
    C = n(486020),
    A = n(927578),
    E = n(580630),
    y = n(284009),
    P = n.n(y),
    S = n(997101),
    _ = n(318254),
    T = n(821891),
    f = n(953689),
    x = n(10716),
    N = n(46225),
    I = n(20015),
    g = n(364995),
    v = n(427675),
    M = n(94420),
    j = n(977445),
    b = n(778307),
    R = n(218075),
    L = n(987723),
    O = n(615405),
    D = n(45938),
    w = n(937008),
    U = n(49960),
    k = n(566980),
    Y = n(944355),
    G = n(367921),
    F = n(908419),
    B = n(652215);
function W(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, w.Pv)(),
        { immediateDelivery: a } = (0, F.U)(),
        i = (0, G.Ro)({
            purchaseType: B.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, l.jsx)(Y._P, {
        variant: n ? { type: Y.I0.GiftShop, purchaseButtonText: i } : { type: Y.I0.Shop, purchaseButtonText: i },
        paymentSourceType: t,
        immediateDelivery: a,
    });
}
var V = n(375708),
    H = n(666995),
    K = n(319820),
    Z = n(327105);
n(594387);
let q = (e) => e.name,
    z = {
        [i.R.BUNDLE]: () => V.intl.string(Z.default["jM8/71"]),
        [i.R.AVATAR_DECORATION]: () => V.intl.string(Z.default.r29Oel),
        [i.R.PROFILE_EFFECT]: () => V.intl.string(Z.default.eTYAvF),
        [i.R.NAMEPLATE]: () => V.intl.string(Z.default.of9bom),
        [i.R.PROFILE_FRAME]: () => V.intl.string(Z.default.HzDn6w),
    },
    $ = (e) => {
        let t = V.intl.string(Z.default.iZe9Wy);
        if (null == e);
        else if (e.type in z) return (0, z[e.type])();
        return t;
    },
    J = (e) => {
        let {
                application: t,
                sku: n,
                invoicePreview: i,
                paymentSelectContent: o,
                legalContent: y,
                isGift: P,
                giftRecipient: S,
                upperInlineNoticeProps: T,
                footerInlineNoticeProps: f,
            } = e,
            { product: x, isSocialLayerGameItem: N } = (0, K.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: I, priceText: g } = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, invoicePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: a, showTaxes: i } = (0, K.yh)({ invoicePreview: n });
                            return (
                                l.push({ id: "sku", label: q(t), amount: a }),
                                null != e &&
                                    l.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                i && l.push({ id: "tax", label: V.intl.string(V.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: l,
                                        label: V.intl.string(Z.default.eoXh7B),
                                        currency: n.currency,
                                    },
                                    priceText: (0, E.$g)(a, n.currency),
                                    discount: e,
                                }
                            );
                        }
                        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                    })({ sku: n, invoicePreview: i }),
                [n, i],
            ),
            v = a.useMemo(() => (null != I ? (0, l.jsx)(d.Vm, { ...I }) : null), [I]),
            M = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, product: n, application: a, isSocialLayerGameItem: i, giftRecipient: s } = e,
                            o = V.intl.string(Z.default.iZe9Wy);
                        i
                            ? (o = V.intl.string(Z.default.qwSlCO))
                            : null != n
                              ? (o = $(n))
                              : t.productLine === B.EZt.GUILD_PRODUCT && (o = V.intl.string(Z.default.hewwdA));
                        let u = i
                                ? {
                                      header: a.name,
                                      headerIconSrc: C.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 16 }),
                                  }
                                : {},
                            c = (0, l.jsx)(p.WH, { sku: t, product: n }),
                            d = {};
                        return (
                            null != n &&
                                (d = ((e) => {
                                    let t = h.default.getCurrentUser(),
                                        n = A.Ay.canUseShopDiscounts(t),
                                        l = (0, m.xM)(t),
                                        a = (0, m.WD)(e, { hasShopDiscount: n, discount: (0, m.fT)(e, n) });
                                    if (null != a && !a.showDefaultPriceOnly && a.showDiscountPrice) {
                                        if (l === m.D0.NITRO)
                                            return { PriceIcon: r.t, priceTooltip: V.intl.string(Z.default.YUNJJa) };
                                        m.D0.THIRDPARTY;
                                    }
                                    return {};
                                })(n)),
                            {
                                ...u,
                                ...d,
                                label: q(t),
                                description: o,
                                graphic: c,
                                target: null != s ? { type: "gift", user: s } : void 0,
                            }
                        );
                    })({ sku: n, product: x, application: t, isSocialLayerGameItem: N, giftRecipient: S }),
                [n, x, t, N, S],
            ),
            [j, b] = a.useMemo(
                () => [V.intl.string(Z.default.Zxav97), null != i ? (0, E.$g)(i.total, i.currency) : void 0],
                [i],
            ),
            R = a.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbsReward;
                    if (null != l && l > 0) {
                        let e = n ? V.t["ZV+aS9"] : V.t["0StwHe"];
                        return { Icon: _.C, text: V.intl.format(e, { orbCount: l }) };
                    }
                })(i, { isGift: P });
                return null != e ? (0, l.jsx)(s.J, { ...e }) : null;
            }, [i, P]),
            { setCheckoutHeaderConfigs: L, checkoutHeaderConfigs: O } = (0, u.ck)();
        return (
            a.useEffect(() => {
                null != R && null == O.headerBadgeText && L({ ...O, headerBadgeText: V.intl.string(Z.default.Fjpyfj) });
            }, [R, L, O]),
            (0, l.jsx)(c.T, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(p.f7, { ...M, price: g }),
                invoiceSummaryContent: v,
                paymentSelectContent: o,
                legalContent: y,
                promotionalNoticeContent: R,
                upperInlineNoticeProps: T,
                footerInlineNoticeProps: f,
                invoiceTotalDueLabel: j,
                invoiceTotalDueValue: b,
            })
        );
    };
function X(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: i } = e,
        {
            sku: r,
            application: s,
            invoicePreview: u,
            isGift: d,
            eligiblePaymentGateways: p,
            purchaseTermsAndLegalContent: m,
            isStepLoading: h,
            giftRecipient: C,
            warningAndErrorMessages: A,
            disabled: E,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: i,
                    setHasAcceptedTerms: r,
                    purchaseState: s,
                    checkoutInvoicePreview: o,
                } = (0, M.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setHasAcceptedTerms: e.setHasAcceptedTerms,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                })),
                {
                    application: u,
                    paymentSourceId: c,
                    isEmbeddedIAP: d,
                    purchaseType: p,
                    devShelfFetchState: m,
                    hasPaymentSources: h,
                    purchasePreviewError: C,
                } = (0, U.P5)(),
                { checkoutPaymentSources: A, hasInvoiceOrderContextLoaded: E } = (0, g.t)(),
                y = (0, v.gU)(),
                { isGift: _, giftRecipient: Y } = (0, w.Pv)(),
                G = _ && (0, D.Ik)(Y),
                { fetched: F, hasAlreadyLinked: K } = (0, N.RD)(u);
            P()(null != i, "Expected selectedSkuId");
            let Z = y[i],
                q = Z?.eligiblePaymentGateways;
            P()(null != Z, "SKU must exist and be fetched."), P()(null != u, "Application must exist.");
            let z = (0, j.u)(u.id),
                $ = S.M.EEA_COUNTRIES.has(O.A.ipCountryCodeWithFallback),
                J = s === k.h.PURCHASING || s === k.h.COMPLETED,
                X = A.find((e) => e.id === c) ?? null,
                Q = null != X ? X.type : null,
                ee = null != q && q.length > 0 && (null == c || null === Q) && h ? R.fU.SELECT_PAYMENT_METHOD : void 0,
                et = Z.productLine === B.EZt.SOCIAL_LAYER_GAME_ITEM,
                en = G && !et,
                el = a.useMemo(
                    () => ({
                        testModeWarning: z ? V.intl.string(V.t.OvMyMd) : null,
                        devShelfError:
                            (0, I.n)(u, B.gfo.EMBEDDED) && m === x.$.ERROR ? V.intl.string(V.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer:
                            et && F && !K && !_ ? (0, L.k3)(u, { location: "OneTimePurchaseReviewState" }) : null,
                    }),
                    [z, u, m, et, F, K, _],
                ),
                ea = a.useMemo(
                    () =>
                        Z.productLine === B.EZt.COLLECTIBLES
                            ? (0, l.jsx)(W, { paymentSourceType: Q })
                            : (0, l.jsx)(b.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(f.A, {
                                      onChange: r,
                                      forceShow: !0,
                                      showWithdrawalWaiver: $,
                                      disabled: J,
                                      subscriptionPlan: null,
                                      finePrintClassname: H.i,
                                      purchaseType: p,
                                      isGift: _,
                                      finePrint: (0, l.jsx)(T.A, {
                                          paymentSourceType: Q,
                                          isEmbeddedIAP: d,
                                          purchaseType: p,
                                          productLine: Z.productLine,
                                          isGift: _,
                                          applicationName: u.name,
                                          applicationId: u.id,
                                          hasAlreadyLinked: !F || K,
                                      }),
                                  }),
                              }),
                    [t, n, r, $, J, p, _, Q, d, Z.productLine, u.name, u.id, F, K],
                );
            return {
                sku: Z,
                application: u,
                giftRecipient: Y,
                isGift: _,
                invoicePreview: o,
                isEmbeddedIAP: d,
                shouldShowPurchaseReviewImage: en,
                paymentRestrictionBannerType: ee,
                devShelfFetchState: m,
                isStepLoading: !E && null == C,
                purchasePreviewError: C,
                warningAndErrorMessages: el,
                purchaseTermsAndLegalContent: ea,
                eligiblePaymentGateways: q,
                disabled: J,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        y = a.useMemo(() => ({ paymentGatewayRestrictions: p, shouldUseUnifiedCheckoutUI: !0 }), [p]),
        _ = (0, l.jsx)(o.N, {
            label: V.intl.string(V.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: i,
            additionalPaymentSourceDropdownProps: y,
            disabled: E,
        }),
        Y = a.useMemo(() => {
            let e = [];
            return (
                null != A.testModeWarning &&
                    e.push({ type: "warning", message: A.testModeWarning, key: "test-mode-warning-notice" }),
                null != A.devShelfError &&
                    e.push({ type: "critical", message: A.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [A.testModeWarning, A.devShelfError]),
        G = a.useMemo(() => {
            let e = [];
            return (
                null != A.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: A.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [A.socialLayerGameItemDisclaimer]);
    return h
        ? (0, l.jsx)(c.E, {})
        : (0, l.jsx)(J, {
              application: s,
              giftRecipient: C,
              isGift: d,
              sku: r,
              invoicePreview: u,
              paymentSelectContent: _,
              legalContent: m,
              upperInlineNoticeProps: Y,
              footerInlineNoticeProps: G,
          });
}
