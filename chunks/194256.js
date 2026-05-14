n.d(t, { dL: () => $, Ay: () => ee, oO: () => X }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(575593),
    r = n(403581),
    s = n(278416),
    o = n(262427),
    u = n(61572),
    c = n(725836),
    d = n(717925),
    p = n(848584),
    m = n(241989),
    h = n(993408),
    C = n(287809),
    A = n(486020),
    E = n(428262),
    y = n(580630),
    P = n(284009),
    S = n.n(P),
    _ = n(997101),
    T = n(318254),
    f = n(821891),
    N = n(953689),
    I = n(10716),
    x = n(46225),
    g = n(20015),
    v = n(364995),
    M = n(427675),
    b = n(94420),
    R = n(977445),
    j = n(778307),
    L = n(218075),
    O = n(987723),
    D = n(615405),
    w = n(45938),
    U = n(937008),
    k = n(834252),
    Y = n(566980),
    G = n(944355),
    F = n(367921),
    B = n(908419),
    W = n(652215);
function V(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, U.Pv)(),
        { immediateDelivery: a } = (0, B.U)(),
        i = (0, F.Ro)({
            purchaseType: W.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, l.jsx)(G._P, {
        variant: n ? { type: G.I0.GiftShop, purchaseButtonText: i } : { type: G.I0.Shop, purchaseButtonText: i },
        paymentSourceType: t,
        immediateDelivery: a,
    });
}
var H = n(375708),
    K = n(666995),
    Z = n(319820),
    q = n(327105),
    z = n(594387);
let $ = (e) => e.name,
    J = {
        [i.R.BUNDLE]: () => H.intl.string(q.default["jM8/71"]),
        [i.R.AVATAR_DECORATION]: () => H.intl.string(q.default.r29Oel),
        [i.R.PROFILE_EFFECT]: () => H.intl.string(q.default.eTYAvF),
        [i.R.NAMEPLATE]: () => H.intl.string(q.default.of9bom),
        [i.R.PROFILE_FRAME]: () => H.intl.string(q.default.HzDn6w),
    },
    X = (e) => {
        let t = H.intl.string(q.default.iZe9Wy);
        if (null == e);
        else if (e.type in J) return (0, J[e.type])();
        return t;
    },
    Q = (e) => {
        let {
                application: t,
                sku: n,
                invoicePreview: i,
                paymentSelectContent: u,
                legalContent: P,
                isGift: S,
                giftRecipient: _,
                upperInlineNoticeProps: f,
                footerInlineNoticeProps: N,
            } = e,
            { product: I, isSocialLayerGameItem: x } = (0, Z.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: g, priceText: v } = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, invoicePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: a, showTaxes: i } = (0, Z.yh)({ invoicePreview: n });
                            return (
                                l.push({ id: "sku", label: $(t), amount: a }),
                                null != e &&
                                    l.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                i && l.push({ id: "tax", label: H.intl.string(H.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: l,
                                        label: H.intl.string(q.default.eoXh7B),
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
            M = a.useMemo(() => (null != g ? (0, l.jsx)(p.Vm, { ...g }) : null), [g]),
            b = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, product: n, application: a, isSocialLayerGameItem: i, giftRecipient: o } = e,
                            u = H.intl.string(q.default.iZe9Wy);
                        i
                            ? (u = H.intl.string(q.default.qwSlCO))
                            : null != n
                              ? (u = X(n))
                              : t.productLine === W.EZt.GUILD_PRODUCT && (u = H.intl.string(q.default.hewwdA));
                        let c = i
                                ? {
                                      header: a.name,
                                      headerIconSrc: A.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 16 }),
                                  }
                                : {},
                            d = (0, l.jsx)(m.WH, { sku: t, product: n }),
                            p = {};
                        return (
                            null != n &&
                                (p = ((e) => {
                                    let t = C.default.getCurrentUser(),
                                        n = E.Ay.canUseShopDiscounts(t),
                                        l = (0, h.xM)(t),
                                        a = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                                    if (null != a && !a.showDefaultPriceOnly && a.showDiscountPrice) {
                                        if (l === h.D0.NITRO)
                                            return { PriceIcon: r.t, priceTooltip: H.intl.string(q.default.YUNJJa) };
                                        if (l === h.D0.THIRDPARTY)
                                            return { PriceIcon: s.g, priceTooltip: H.intl.string(z.default.DePOcS) };
                                    }
                                    return {};
                                })(n)),
                            {
                                ...c,
                                ...p,
                                label: $(t),
                                description: u,
                                graphic: d,
                                target: null != o ? { type: "gift", user: o } : void 0,
                            }
                        );
                    })({ sku: n, product: I, application: t, isSocialLayerGameItem: x, giftRecipient: _ }),
                [n, I, t, x, _],
            ),
            [R, j] = a.useMemo(
                () => [H.intl.string(q.default.Zxav97), null != i ? (0, y.$g)(i.total, i.currency) : void 0],
                [i],
            ),
            L = a.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbsReward;
                    if (null != l && l > 0) {
                        let e = n ? H.t["ZV+aS9"] : H.t["0StwHe"];
                        return { Icon: T.C, text: H.intl.format(e, { orbCount: l }) };
                    }
                })(i, { isGift: S });
                return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
            }, [i, S]),
            { setCheckoutHeaderConfigs: O, checkoutHeaderConfigs: D } = (0, c.ck)();
        return (
            a.useEffect(() => {
                null != L && null == D.headerBadgeText && O({ ...D, headerBadgeText: H.intl.string(q.default.Fjpyfj) });
            }, [L, O, D]),
            (0, l.jsx)(d.T, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(m.f7, { ...b, price: v }),
                invoiceSummaryContent: M,
                paymentSelectContent: u,
                legalContent: P,
                promotionalNoticeContent: L,
                upperInlineNoticeProps: f,
                footerInlineNoticeProps: N,
                invoiceTotalDueLabel: R,
                invoiceTotalDueValue: j,
            })
        );
    };
function ee(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: i } = e,
        {
            sku: r,
            application: s,
            invoicePreview: o,
            isGift: c,
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
                } = (0, k.P5)(),
                { checkoutPaymentSources: A, hasInvoiceOrderContextLoaded: E } = (0, v.t)(),
                y = (0, M.gU)(),
                { isGift: P, giftRecipient: T } = (0, U.Pv)(),
                G = P && (0, w.Ik)(T),
                { fetched: F, hasAlreadyLinked: B } = (0, x.RD)(u);
            S()(null != i, "Expected selectedSkuId");
            let Z = y[i],
                q = Z?.eligiblePaymentGateways;
            S()(null != Z, "SKU must exist and be fetched."), S()(null != u, "Application must exist.");
            let z = (0, R.u)(u.id),
                $ = _.M.EEA_COUNTRIES.has(D.A.ipCountryCodeWithFallback),
                J = s === Y.h.PURCHASING || s === Y.h.COMPLETED,
                X = A.find((e) => e.id === c) ?? null,
                Q = null != X ? X.type : null,
                ee = null != q && q.length > 0 && (null == c || null === Q) && h ? L.fU.SELECT_PAYMENT_METHOD : void 0,
                et = Z.productLine === W.EZt.SOCIAL_LAYER_GAME_ITEM,
                en = G && !et,
                el = a.useMemo(
                    () => ({
                        testModeWarning: z ? H.intl.string(H.t.OvMyMd) : null,
                        devShelfError:
                            (0, g.n)(u, W.gfo.EMBEDDED) && m === I.$.ERROR ? H.intl.string(H.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer:
                            et && F && !B && !P ? (0, O.k3)(u, { location: "OneTimePurchaseReviewState" }) : null,
                    }),
                    [z, u, m, et, F, B, P],
                ),
                ea = a.useMemo(
                    () =>
                        Z.productLine === W.EZt.COLLECTIBLES
                            ? (0, l.jsx)(V, { paymentSourceType: Q })
                            : (0, l.jsx)(j.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(N.A, {
                                      onChange: r,
                                      forceShow: !0,
                                      showWithdrawalWaiver: $,
                                      disabled: J,
                                      subscriptionPlan: null,
                                      finePrintClassname: K.i,
                                      purchaseType: p,
                                      isGift: P,
                                      finePrint: (0, l.jsx)(f.A, {
                                          paymentSourceType: Q,
                                          isEmbeddedIAP: d,
                                          purchaseType: p,
                                          productLine: Z.productLine,
                                          isGift: P,
                                          applicationName: u.name,
                                          applicationId: u.id,
                                          hasAlreadyLinked: !F || B,
                                      }),
                                  }),
                              }),
                    [t, n, r, $, J, p, P, Q, d, Z.productLine, u.name, u.id, F, B],
                );
            return {
                sku: Z,
                application: u,
                giftRecipient: T,
                isGift: P,
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
        P = (0, l.jsx)(u.N, {
            label: H.intl.string(H.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: i,
            additionalPaymentSourceDropdownProps: y,
            disabled: E,
        }),
        T = a.useMemo(() => {
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
        ? (0, l.jsx)(d.E, {})
        : (0, l.jsx)(Q, {
              application: s,
              giftRecipient: C,
              isGift: c,
              sku: r,
              invoicePreview: o,
              paymentSelectContent: P,
              legalContent: m,
              upperInlineNoticeProps: T,
              footerInlineNoticeProps: G,
          });
}
