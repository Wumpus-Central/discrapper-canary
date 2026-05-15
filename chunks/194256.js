n.d(t, { dL: () => J, Ay: () => et, oO: () => Q }), n(321073);
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
    y = n(428262),
    E = n(580630),
    P = n(284009),
    S = n.n(P),
    _ = n(997101),
    T = n(318254),
    f = n(821891),
    I = n(953689),
    N = n(10716),
    x = n(46225),
    g = n(20015),
    v = n(364995),
    M = n(426398),
    b = n(427675),
    j = n(94420),
    R = n(977445),
    L = n(778307),
    O = n(218075),
    D = n(987723),
    w = n(615405),
    U = n(45938),
    k = n(937008),
    Y = n(834252),
    G = n(566980),
    F = n(944355),
    B = n(367921),
    W = n(908419),
    V = n(652215);
function H(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, k.Pv)(),
        { immediateDelivery: a } = (0, W.U)(),
        i = (0, B.Ro)({
            purchaseType: V.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, l.jsx)(F._P, {
        variant: n ? { type: F.I0.GiftShop, purchaseButtonText: i } : { type: F.I0.Shop, purchaseButtonText: i },
        paymentSourceType: t,
        immediateDelivery: a,
    });
}
var K = n(375708),
    Z = n(666995),
    q = n(319820),
    z = n(327105),
    $ = n(594387);
let J = (e) => e.name,
    X = {
        [i.R.BUNDLE]: () => K.intl.string(z.default["jM8/71"]),
        [i.R.AVATAR_DECORATION]: () => K.intl.string(z.default.r29Oel),
        [i.R.PROFILE_EFFECT]: () => K.intl.string(z.default.eTYAvF),
        [i.R.NAMEPLATE]: () => K.intl.string(z.default.of9bom),
        [i.R.PROFILE_FRAME]: () => K.intl.string(z.default.HzDn6w),
    },
    Q = (e) => {
        let t = K.intl.string(z.default.iZe9Wy);
        if (null == e);
        else if (e.type in X) return (0, X[e.type])();
        return t;
    },
    ee = (e) => {
        let {
                application: t,
                sku: n,
                invoicePreview: i,
                paymentSelectContent: u,
                legalContent: P,
                isGift: S,
                giftRecipient: _,
                upperInlineNoticeProps: f,
                footerInlineNoticeProps: I,
            } = e,
            { product: N, isSocialLayerGameItem: x } = (0, q.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: g, priceText: v } = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, invoicePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: a, showTaxes: i } = (0, q.yh)({ invoicePreview: n });
                            return (
                                l.push({ id: "sku", label: J(t), amount: a }),
                                null != e &&
                                    l.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                i && l.push({ id: "tax", label: K.intl.string(K.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: l,
                                        label: K.intl.string(z.default.eoXh7B),
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
            M = a.useMemo(() => (null != g ? (0, l.jsx)(p.Vm, { ...g }) : null), [g]),
            b = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, product: n, application: a, isSocialLayerGameItem: i, giftRecipient: o } = e,
                            u = K.intl.string(z.default.iZe9Wy);
                        i
                            ? (u = K.intl.string(z.default.qwSlCO))
                            : null != n
                              ? (u = Q(n))
                              : t.productLine === V.EZt.GUILD_PRODUCT && (u = K.intl.string(z.default.hewwdA));
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
                                        n = y.Ay.canUseShopDiscounts(t),
                                        l = (0, h.xM)(t),
                                        a = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                                    if (null != a && !a.showDefaultPriceOnly && a.showDiscountPrice) {
                                        if (l === h.D0.NITRO)
                                            return { PriceIcon: r.t, priceTooltip: K.intl.string(z.default.YUNJJa) };
                                        if (l === h.D0.THIRDPARTY)
                                            return { PriceIcon: s.g, priceTooltip: K.intl.string($.default.DePOcS) };
                                    }
                                    return {};
                                })(n)),
                            {
                                ...c,
                                ...p,
                                label: J(t),
                                description: u,
                                graphic: d,
                                target: null != o ? { type: "gift", user: o } : void 0,
                            }
                        );
                    })({ sku: n, product: N, application: t, isSocialLayerGameItem: x, giftRecipient: _ }),
                [n, N, t, x, _],
            ),
            [j, R] = a.useMemo(
                () => [K.intl.string(z.default.Zxav97), null != i ? (0, E.$g)(i.total, i.currency) : void 0],
                [i],
            ),
            L = a.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbsReward;
                    if (null != l && l > 0) {
                        let e = n ? K.t["ZV+aS9"] : K.t["0StwHe"];
                        return { Icon: T.C, text: K.intl.format(e, { orbCount: l }) };
                    }
                })(i, { isGift: S });
                return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
            }, [i, S]),
            { setCheckoutHeaderConfigs: O, checkoutHeaderConfigs: D } = (0, c.ck)();
        return (
            a.useEffect(() => {
                null != L && null == D.headerBadgeText && O({ ...D, headerBadgeText: K.intl.string(z.default.Fjpyfj) });
            }, [L, O, D]),
            (0, l.jsx)(d.T, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(m.f7, { ...b, price: v }),
                invoiceSummaryContent: M,
                paymentSelectContent: u,
                legalContent: P,
                promotionalNoticeContent: L,
                upperInlineNoticeProps: f,
                footerInlineNoticeProps: I,
                invoiceTotalDueLabel: j,
                invoiceTotalDueValue: R,
            })
        );
    };
function et(e) {
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
            disabled: y,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: i,
                    setHasAcceptedTerms: r,
                    purchaseState: s,
                    checkoutInvoicePreview: o,
                    paymentSourceId: u,
                } = (0, j.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setHasAcceptedTerms: e.setHasAcceptedTerms,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                })),
                { hasPaymentSources: c } = (0, M.jm)(),
                {
                    application: d,
                    isEmbeddedIAP: p,
                    purchaseType: m,
                    devShelfFetchState: h,
                    purchasePreviewError: C,
                } = (0, Y.P5)(),
                { checkoutPaymentSources: A, hasInvoiceOrderContextLoaded: y } = (0, v.t)(),
                E = (0, b.gU)(),
                { isGift: P, giftRecipient: T } = (0, k.Pv)(),
                F = P && (0, U.Ik)(T),
                { fetched: B, hasAlreadyLinked: W } = (0, x.RD)(d);
            S()(null != i, "Expected selectedSkuId");
            let q = E[i],
                z = q?.eligiblePaymentGateways;
            S()(null != q, "SKU must exist and be fetched."), S()(null != d, "Application must exist.");
            let $ = (0, R.u)(d.id),
                J = _.M.EEA_COUNTRIES.has(w.A.ipCountryCodeWithFallback),
                X = s === G.h.PURCHASING || s === G.h.COMPLETED,
                Q = A.find((e) => e.id === u) ?? null,
                ee = null != Q ? Q.type : null,
                et = null != z && z.length > 0 && (null == u || null === ee) && c ? O.fU.SELECT_PAYMENT_METHOD : void 0,
                en = q.productLine === V.EZt.SOCIAL_LAYER_GAME_ITEM,
                el = F && !en,
                ea = a.useMemo(
                    () => ({
                        testModeWarning: $ ? K.intl.string(K.t.OvMyMd) : null,
                        devShelfError:
                            (0, g.n)(d, V.gfo.EMBEDDED) && h === N.$.ERROR ? K.intl.string(K.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer:
                            en && B && !W && !P ? (0, D.k3)(d, { location: "OneTimePurchaseReviewState" }) : null,
                    }),
                    [$, d, h, en, B, W, P],
                ),
                ei = a.useMemo(
                    () =>
                        q.productLine === V.EZt.COLLECTIBLES
                            ? (0, l.jsx)(H, { paymentSourceType: ee })
                            : (0, l.jsx)(L.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(I.A, {
                                      onChange: r,
                                      forceShow: !0,
                                      showWithdrawalWaiver: J,
                                      disabled: X,
                                      subscriptionPlan: null,
                                      finePrintClassname: Z.i,
                                      purchaseType: m,
                                      isGift: P,
                                      finePrint: (0, l.jsx)(f.A, {
                                          paymentSourceType: ee,
                                          isEmbeddedIAP: p,
                                          purchaseType: m,
                                          productLine: q.productLine,
                                          isGift: P,
                                          applicationName: d.name,
                                          applicationId: d.id,
                                          hasAlreadyLinked: !B || W,
                                      }),
                                  }),
                              }),
                    [t, n, r, J, X, m, P, ee, p, q.productLine, d.name, d.id, B, W],
                );
            return {
                sku: q,
                application: d,
                giftRecipient: T,
                isGift: P,
                invoicePreview: o,
                isEmbeddedIAP: p,
                shouldShowPurchaseReviewImage: el,
                paymentRestrictionBannerType: et,
                devShelfFetchState: h,
                isStepLoading: !y && null == C,
                purchasePreviewError: C,
                warningAndErrorMessages: ea,
                purchaseTermsAndLegalContent: ei,
                eligiblePaymentGateways: z,
                disabled: X,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        E = a.useMemo(() => ({ paymentGatewayRestrictions: p, shouldUseUnifiedCheckoutUI: !0 }), [p]),
        P = (0, l.jsx)(u.N, {
            label: K.intl.string(K.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: i,
            additionalPaymentSourceDropdownProps: E,
            disabled: y,
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
        F = a.useMemo(() => {
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
        : (0, l.jsx)(ee, {
              application: s,
              giftRecipient: C,
              isGift: c,
              sku: r,
              invoicePreview: o,
              paymentSelectContent: P,
              legalContent: m,
              upperInlineNoticeProps: T,
              footerInlineNoticeProps: F,
          });
}
