n.d(t, { dL: () => q, Ay: () => X, oO: () => $ }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(575593),
    r = n(403581),
    s = n(262427),
    o = n(61572),
    u = n(725836),
    c = n(164928),
    d = n(474367),
    p = n(848584),
    m = n(241989),
    h = n(993408),
    C = n(287809),
    A = n(486020),
    E = n(927578),
    y = n(580630),
    P = n(49960),
    S = n(284009),
    _ = n.n(S),
    T = n(997101),
    f = n(318254),
    x = n(821891),
    N = n(953689),
    I = n(10716),
    g = n(46225),
    v = n(20015),
    M = n(364995),
    j = n(427675),
    b = n(94420),
    R = n(977445),
    L = n(778307),
    O = n(218075),
    D = n(987723),
    w = n(615405),
    U = n(45938),
    k = n(937008),
    Y = n(566980),
    G = n(367921),
    F = n(908419),
    B = n(652215);
function W(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, k.Pv)(),
        { immediateDelivery: a } = (0, F.U)(),
        i = (0, G.Ro)({
            purchaseType: B.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, l.jsx)(d._P, {
        variant: n ? { type: d.I0.GiftShop, purchaseButtonText: i } : { type: d.I0.Shop, purchaseButtonText: i },
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
                legalContent: d,
                isGift: P,
                giftRecipient: S,
                upperInlineNoticeProps: _,
                footerInlineNoticeProps: T,
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
                                    priceText: (0, y.$g)(a, n.currency),
                                    discount: e,
                                }
                            );
                        }
                        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                    })({ sku: n, invoicePreview: i }),
                [n, i],
            ),
            v = a.useMemo(() => (null != I ? (0, l.jsx)(p.Vm, { ...I }) : null), [I]),
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
                                      headerIconSrc: A.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 16 }),
                                  }
                                : {},
                            c = (0, l.jsx)(m.WH, { sku: t, product: n }),
                            d = {};
                        return (
                            null != n &&
                                (d = ((e) => {
                                    let t = C.default.getCurrentUser(),
                                        n = E.Ay.canUseShopDiscounts(t),
                                        l = (0, h.xM)(t),
                                        a = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                                    if (null != a && !a.showDefaultPriceOnly && a.showDiscountPrice) {
                                        if (l === h.D0.NITRO)
                                            return { PriceIcon: r.t, priceTooltip: V.intl.string(Z.default.YUNJJa) };
                                        h.D0.THIRDPARTY;
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
                () => [V.intl.string(Z.default.Zxav97), null != i ? (0, y.$g)(i.total, i.currency) : void 0],
                [i],
            ),
            R = a.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbsReward;
                    if (null != l && l > 0) {
                        let e = n ? V.t["ZV+aS9"] : V.t["0StwHe"];
                        return { Icon: f.C, text: V.intl.format(e, { orbCount: l }) };
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
                purchaseItemContent: (0, l.jsx)(m.f7, { ...M, price: g }),
                invoiceSummaryContent: v,
                paymentSelectContent: o,
                legalContent: d,
                promotionalNoticeContent: R,
                upperInlineNoticeProps: _,
                footerInlineNoticeProps: T,
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
            isGift: p,
            eligiblePaymentGateways: m,
            purchaseTermsAndLegalContent: h,
            isStepLoading: C,
            giftRecipient: A,
            warningAndErrorMessages: E,
            disabled: y,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: i,
                    setHasAcceptedTerms: r,
                    purchaseState: s,
                    checkoutInvoicePreview: o,
                } = (0, b.t4)((e) => ({
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
                } = (0, P.P5)(),
                { checkoutPaymentSources: A, hasInvoiceOrderContextLoaded: E } = (0, M.t)(),
                y = (0, j.gU)(),
                { isGift: S, giftRecipient: f } = (0, k.Pv)(),
                G = S && (0, U.Ik)(f),
                { fetched: F, hasAlreadyLinked: K } = (0, g.RD)(u);
            _()(null != i, "Expected selectedSkuId");
            let Z = y[i],
                q = Z?.eligiblePaymentGateways;
            _()(null != Z, "SKU must exist and be fetched."), _()(null != u, "Application must exist.");
            let z = (0, R.u)(u.id),
                $ = T.M.EEA_COUNTRIES.has(w.A.ipCountryCodeWithFallback),
                J = s === Y.h.PURCHASING || s === Y.h.COMPLETED,
                X = A.find((e) => e.id === c) ?? null,
                Q = null != X ? X.type : null,
                ee = null != q && q.length > 0 && (null == c || null === Q) && h ? O.fU.SELECT_PAYMENT_METHOD : void 0,
                et = Z.productLine === B.EZt.SOCIAL_LAYER_GAME_ITEM,
                en = G && !et,
                el = a.useMemo(
                    () => ({
                        testModeWarning: z ? V.intl.string(V.t.OvMyMd) : null,
                        devShelfError:
                            (0, v.n)(u, B.gfo.EMBEDDED) && m === I.$.ERROR ? V.intl.string(V.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer:
                            et && F && !K && !S ? (0, D.k3)(u, { location: "OneTimePurchaseReviewState" }) : null,
                    }),
                    [z, u, m, et, F, K, S],
                ),
                ea = a.useMemo(
                    () =>
                        Z.productLine === B.EZt.COLLECTIBLES
                            ? (0, l.jsx)(W, { paymentSourceType: Q })
                            : (0, l.jsx)(L.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(N.A, {
                                      onChange: r,
                                      forceShow: !0,
                                      showWithdrawalWaiver: $,
                                      disabled: J,
                                      subscriptionPlan: null,
                                      finePrintClassname: H.i,
                                      purchaseType: p,
                                      isGift: S,
                                      finePrint: (0, l.jsx)(x.A, {
                                          paymentSourceType: Q,
                                          isEmbeddedIAP: d,
                                          purchaseType: p,
                                          productLine: Z.productLine,
                                          isGift: S,
                                          applicationName: u.name,
                                          applicationId: u.id,
                                          hasAlreadyLinked: !F || K,
                                      }),
                                  }),
                              }),
                    [t, n, r, $, J, p, S, Q, d, Z.productLine, u.name, u.id, F, K],
                );
            return {
                sku: Z,
                application: u,
                giftRecipient: f,
                isGift: S,
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
        { currencies: S, displayCurrency: f, setCurrency: G, priceOptions: F } = (0, P.P5)(),
        K = a.useMemo(
            () =>
                (0, l.jsx)(d.qX, {
                    label: V.intl.string(V.t["/AAR02"]),
                    selectedCurrency: F.currency ?? f,
                    currencies: S,
                    onChange: G,
                }),
            [F.currency, f, S, G],
        ),
        Z = a.useMemo(() => ({ paymentGatewayRestrictions: m, shouldUseUnifiedCheckoutUI: !0 }), [m]),
        q = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.N, {
                    label: V.intl.string(V.t["u+Cw58"]),
                    location: "OneTimeUnifiedCheckoutPurchaseReview",
                    onPaymentSourceAdd: i,
                    additionalPaymentSourceDropdownProps: Z,
                    disabled: y,
                }),
                K,
            ],
        }),
        z = a.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning &&
                    e.push({ type: "warning", message: E.testModeWarning, key: "test-mode-warning-notice" }),
                null != E.devShelfError &&
                    e.push({ type: "critical", message: E.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError]),
        $ = a.useMemo(() => {
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
    return C
        ? (0, l.jsx)(c.E, {})
        : (0, l.jsx)(J, {
              application: s,
              giftRecipient: A,
              isGift: p,
              sku: r,
              invoicePreview: u,
              paymentSelectContent: q,
              legalContent: h,
              upperInlineNoticeProps: z,
              footerInlineNoticeProps: $,
          });
}
