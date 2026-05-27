n.d(t, { dL: () => Q, Ay: () => en, oO: () => ee }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(575593),
    r = n(403581),
    s = n(278416),
    o = n(262427),
    u = n(682481),
    c = n(61572),
    d = n(717925),
    p = n(214891),
    m = n(848584),
    h = n(241989),
    C = n(993408),
    A = n(287809),
    y = n(486020),
    E = n(428262),
    P = n(580630),
    S = n(284009),
    _ = n.n(S),
    f = n(997101),
    T = n(318254),
    I = n(821891),
    x = n(953689),
    N = n(10716),
    g = n(46225),
    v = n(20015),
    M = n(364995),
    b = n(426398),
    j = n(427675),
    R = n(671744),
    L = n(977445),
    O = n(778307),
    D = n(218075),
    w = n(578942),
    U = n(615405),
    k = n(45938),
    Y = n(937008),
    G = n(834252),
    F = n(566980),
    B = n(944355),
    W = n(367921),
    V = n(908419),
    H = n(652215);
function K(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, Y.Pv)(),
        { immediateDelivery: a } = (0, V.U)(),
        i = (0, W.Ro)({
            purchaseType: H.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, l.jsx)(B._P, {
        variant: n ? { type: B.I0.GiftShop, purchaseButtonText: i } : { type: B.I0.Shop, purchaseButtonText: i },
        paymentSourceType: t,
        immediateDelivery: a,
    });
}
var Z = n(375708),
    q = n(666995),
    z = n(319820),
    J = n(327105),
    $ = n(594387);
let Q = (e) => e.name,
    X = {
        [i.R.BUNDLE]: () => Z.intl.string(J.default["jM8/71"]),
        [i.R.AVATAR_DECORATION]: () => Z.intl.string(J.default.r29Oel),
        [i.R.PROFILE_EFFECT]: () => Z.intl.string(J.default.eTYAvF),
        [i.R.NAMEPLATE]: () => Z.intl.string(J.default.of9bom),
        [i.R.PROFILE_FRAME]: () => Z.intl.string(J.default.HzDn6w),
    },
    ee = (e) => {
        let t = Z.intl.string(J.default.iZe9Wy);
        if (null == e);
        else if (e.type in X) return (0, X[e.type])();
        return t;
    },
    et = (e) => {
        let {
                application: t,
                sku: n,
                invoicePreview: i,
                paymentMethodContent: u,
                legalContent: c,
                isGift: S,
                giftRecipient: _,
                upperInlineNoticeProps: f,
                footerInlineNoticeProps: I,
            } = e,
            { product: x, isSocialLayerGameItem: N } = (0, z.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: g, priceText: v } = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, invoicePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: a, showTaxes: i } = (0, z.yh)({ invoicePreview: n });
                            return (
                                l.push({ id: "sku", label: Q(t), amount: a }),
                                null != e &&
                                    l.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                i && l.push({ id: "tax", label: Z.intl.string(Z.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: l,
                                        label: Z.intl.string(J.default.eoXh7B),
                                        currency: n.currency,
                                    },
                                    priceText: (0, P.$g)(a, n.currency),
                                    discount: e,
                                }
                            );
                        }
                        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                    })({ sku: n, invoicePreview: i }),
                [n, i],
            ),
            M = a.useMemo(() => (null != g ? (0, l.jsx)(m.Vm, { ...g }) : null), [g]),
            b = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, product: n, application: a, isSocialLayerGameItem: i, giftRecipient: o } = e,
                            u = Z.intl.string(J.default.iZe9Wy);
                        i
                            ? (u = Z.intl.string(J.default.qwSlCO))
                            : null != n
                              ? (u = ee(n))
                              : t.productLine === H.EZt.GUILD_PRODUCT && (u = Z.intl.string(J.default.hewwdA));
                        let c = i
                                ? {
                                      header: a.name,
                                      headerIconSrc: y.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 16 }),
                                  }
                                : {},
                            d = (0, l.jsx)(h.WH, { sku: t, product: n }),
                            p = {};
                        return (
                            null != n &&
                                (p = ((e) => {
                                    let t = A.default.getCurrentUser(),
                                        n = E.Ay.canUseShopDiscounts(t),
                                        l = (0, C.xM)(t),
                                        a = (0, C.WD)(e, { hasShopDiscount: n, discount: (0, C.fT)(e, n) });
                                    if (null != a && !a.showDefaultPriceOnly && a.showDiscountPrice) {
                                        if (l === C.D0.NITRO)
                                            return { PriceIcon: r.t, priceTooltip: Z.intl.string(J.default.YUNJJa) };
                                        if (l === C.D0.THIRDPARTY)
                                            return { PriceIcon: s.g, priceTooltip: Z.intl.string($.default.DePOcS) };
                                    }
                                    return {};
                                })(n)),
                            {
                                ...c,
                                ...p,
                                label: Q(t),
                                description: u,
                                graphic: d,
                                target: null != o ? { type: "gift", user: o } : void 0,
                            }
                        );
                    })({ sku: n, product: x, application: t, isSocialLayerGameItem: N, giftRecipient: _ }),
                [n, x, t, N, _],
            ),
            [j, R] = a.useMemo(
                () => [Z.intl.string(J.default.Zxav97), null != i ? (0, P.$g)(i.total, i.currency) : void 0],
                [i],
            ),
            L = a.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbsReward;
                    if (null != l && l > 0) {
                        let e = n ? Z.t["ZV+aS9"] : Z.t["0StwHe"];
                        return { Icon: T.C, text: Z.intl.format(e, { orbCount: l }) };
                    }
                })(i, { isGift: S });
                return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
            }, [i, S]),
            { setHeaderBadgeText: O, unsetHeaderBadgeText: D } = (0, p.v)();
        return (
            a.useEffect(
                () => (
                    null != L && O(Z.intl.string(J.default.Fjpyfj)),
                    () => {
                        D();
                    }
                ),
                [L, O, D],
            ),
            (0, l.jsx)(d.T, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(h.f7, { ...b, price: v }),
                invoiceSummaryContent: M,
                paymentMethodContent: u,
                legalContent: c,
                promotionalNoticeContent: L,
                upperInlineNoticeProps: f,
                footerInlineNoticeProps: I,
                invoiceTotalDueLabel: j,
                invoiceTotalDueValue: R,
            })
        );
    };
function en(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: i } = e,
        {
            sku: r,
            application: s,
            invoicePreview: o,
            isGift: p,
            eligiblePaymentGateways: m,
            purchaseTermsAndLegalContent: h,
            isStepLoading: C,
            giftRecipient: A,
            warningAndErrorMessages: y,
            disabled: E,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: i,
                    setHasAcceptedTerms: r,
                    purchaseState: s,
                    checkoutInvoicePreview: o,
                    paymentSourceId: u,
                } = (0, R.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setHasAcceptedTerms: e.setHasAcceptedTerms,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                })),
                { hasPaymentSources: c } = (0, b.jm)(),
                {
                    application: d,
                    isEmbeddedIAP: p,
                    purchaseType: m,
                    devShelfFetchState: h,
                    purchasePreviewError: C,
                } = (0, G.P5)(),
                { checkoutPaymentSources: A, hasInvoiceOrderContextLoaded: y } = (0, M.t)(),
                E = (0, j.gU)(),
                { isGift: P, giftRecipient: S } = (0, Y.Pv)(),
                T = P && (0, k.Ik)(S),
                { fetched: B, hasAlreadyLinked: W } = (0, g.RD)(d);
            _()(null != i, "Expected selectedSkuId");
            let V = E[i],
                z = V?.eligiblePaymentGateways;
            _()(null != V, "SKU must exist and be fetched."), _()(null != d, "Application must exist.");
            let J = (0, L.u)(d.id),
                $ = f.M.EEA_COUNTRIES.has(U.A.ipCountryCodeWithFallback),
                Q = s === F.h.PURCHASING || s === F.h.COMPLETED,
                X = A.find((e) => e.id === u) ?? null,
                ee = null != X ? X.type : null,
                et = null != z && z.length > 0 && (null == u || null === ee) && c ? D.fU.SELECT_PAYMENT_METHOD : void 0,
                en = V.productLine === H.EZt.SOCIAL_LAYER_GAME_ITEM,
                el = T && !en,
                ea = a.useMemo(
                    () => ({
                        testModeWarning: J ? Z.intl.string(Z.t.OvMyMd) : null,
                        devShelfError:
                            (0, v.n)(d, H.gfo.EMBEDDED) && h === N.$.ERROR ? Z.intl.string(Z.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: en && B && !W && !P ? (0, w.k3)(d) : null,
                    }),
                    [J, d, h, en, B, W, P],
                ),
                ei = a.useMemo(
                    () =>
                        V.productLine === H.EZt.COLLECTIBLES
                            ? (0, l.jsx)(K, { paymentSourceType: ee })
                            : (0, l.jsx)(O.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(x.A, {
                                      onChange: r,
                                      forceShow: !0,
                                      showWithdrawalWaiver: $,
                                      disabled: Q,
                                      subscriptionPlan: null,
                                      finePrintClassname: q.i,
                                      purchaseType: m,
                                      isGift: P,
                                      finePrint: (0, l.jsx)(I.A, {
                                          paymentSourceType: ee,
                                          isEmbeddedIAP: p,
                                          purchaseType: m,
                                          productLine: V.productLine,
                                          isGift: P,
                                          applicationName: d.name,
                                          applicationId: d.id,
                                          hasAlreadyLinked: !B || W,
                                      }),
                                  }),
                              }),
                    [t, n, r, $, Q, m, P, ee, p, V.productLine, d.name, d.id, B, W],
                );
            return {
                sku: V,
                application: d,
                giftRecipient: S,
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
                disabled: Q,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        P = a.useMemo(() => ({ paymentGatewayRestrictions: m, shouldUseUnifiedCheckoutUI: !0 }), [m]),
        S = (0, l.jsx)(u.y, {
            children: (0, l.jsx)(c.N, {
                label: Z.intl.string(Z.t["u+Cw58"]),
                location: "OneTimeUnifiedCheckoutPurchaseReview",
                onPaymentSourceAdd: i,
                additionalPaymentSourceDropdownProps: P,
                disabled: E,
            }),
        }),
        T = a.useMemo(() => {
            let e = [];
            return (
                null != y.testModeWarning &&
                    e.push({ type: "warning", message: y.testModeWarning, key: "test-mode-warning-notice" }),
                null != y.devShelfError &&
                    e.push({ type: "critical", message: y.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [y.testModeWarning, y.devShelfError]),
        B = a.useMemo(() => {
            let e = [];
            return (
                null != y.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: y.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [y.socialLayerGameItemDisclaimer]);
    return C
        ? (0, l.jsx)(d.E, {})
        : (0, l.jsx)(et, {
              application: s,
              giftRecipient: A,
              isGift: p,
              sku: r,
              invoicePreview: o,
              paymentMethodContent: S,
              legalContent: h,
              upperInlineNoticeProps: T,
              footerInlineNoticeProps: B,
          });
}
