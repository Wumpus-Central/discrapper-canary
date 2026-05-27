n.d(t, { dL: () => $, Ay: () => et, oO: () => Q }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(575593),
    a = n(403581),
    s = n(278416),
    o = n(262427),
    u = n(376843),
    c = n(717925),
    d = n(214891),
    p = n(848584),
    m = n(241989),
    h = n(993408),
    C = n(287809),
    A = n(486020),
    y = n(428262),
    E = n(580630),
    P = n(284009),
    S = n.n(P),
    f = n(997101),
    _ = n(318254),
    T = n(821891),
    I = n(953689),
    x = n(10716),
    N = n(46225),
    g = n(20015),
    v = n(364995),
    M = n(426398),
    b = n(427675),
    j = n(722847),
    R = n(977445),
    L = n(778307),
    O = n(218075),
    D = n(578942),
    w = n(615405),
    U = n(45938),
    k = n(937008),
    G = n(834252),
    Y = n(566980),
    F = n(944355),
    B = n(367921),
    W = n(908419),
    V = n(652215);
function H(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, k.Pv)(),
        { immediateDelivery: i } = (0, W.U)(),
        r = (0, B.Ro)({
            purchaseType: V.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, l.jsx)(F._P, {
        variant: n ? { type: F.I0.GiftShop, purchaseButtonText: r } : { type: F.I0.Shop, purchaseButtonText: r },
        paymentSourceType: t,
        immediateDelivery: i,
    });
}
var K = n(375708),
    Z = n(666995),
    q = n(319820),
    z = n(327105),
    J = n(594387);
let $ = (e) => e.name,
    X = {
        [r.R.BUNDLE]: () => K.intl.string(z.default["jM8/71"]),
        [r.R.AVATAR_DECORATION]: () => K.intl.string(z.default.r29Oel),
        [r.R.PROFILE_EFFECT]: () => K.intl.string(z.default.eTYAvF),
        [r.R.NAMEPLATE]: () => K.intl.string(z.default.of9bom),
        [r.R.PROFILE_FRAME]: () => K.intl.string(z.default.HzDn6w),
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
                invoicePreview: r,
                paymentMethodContent: u,
                legalContent: P,
                isGift: S,
                giftRecipient: f,
                upperInlineNoticeProps: T,
                footerInlineNoticeProps: I,
            } = e,
            { product: x, isSocialLayerGameItem: N } = (0, q.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: g, priceText: v } = i.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, invoicePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: i, showTaxes: r } = (0, q.yh)({ invoicePreview: n });
                            return (
                                l.push({ id: "sku", label: $(t), amount: i }),
                                null != e &&
                                    l.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                r && l.push({ id: "tax", label: K.intl.string(K.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: l,
                                        label: K.intl.string(z.default.eoXh7B),
                                        currency: n.currency,
                                    },
                                    priceText: (0, E.$g)(i, n.currency),
                                    discount: e,
                                }
                            );
                        }
                        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                    })({ sku: n, invoicePreview: r }),
                [n, r],
            ),
            M = i.useMemo(() => (null != g ? (0, l.jsx)(p.Vm, { ...g }) : null), [g]),
            b = i.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, product: n, application: i, isSocialLayerGameItem: r, giftRecipient: o } = e,
                            u = K.intl.string(z.default.iZe9Wy);
                        r
                            ? (u = K.intl.string(z.default.qwSlCO))
                            : null != n
                              ? (u = Q(n))
                              : t.productLine === V.EZt.GUILD_PRODUCT && (u = K.intl.string(z.default.hewwdA));
                        let c = r
                                ? {
                                      header: i.name,
                                      headerIconSrc: A.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }),
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
                                        i = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                                    if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                                        if (l === h.D0.NITRO)
                                            return { PriceIcon: a.t, priceTooltip: K.intl.string(z.default.YUNJJa) };
                                        if (l === h.D0.THIRDPARTY)
                                            return { PriceIcon: s.g, priceTooltip: K.intl.string(J.default.DePOcS) };
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
                    })({ sku: n, product: x, application: t, isSocialLayerGameItem: N, giftRecipient: f }),
                [n, x, t, N, f],
            ),
            [j, R] = i.useMemo(
                () => [K.intl.string(z.default.Zxav97), null != r ? (0, E.$g)(r.total, r.currency) : void 0],
                [r],
            ),
            L = i.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbsReward;
                    if (null != l && l > 0) {
                        let e = n ? K.t["ZV+aS9"] : K.t["0StwHe"];
                        return { Icon: _.C, text: K.intl.format(e, { orbCount: l }) };
                    }
                })(r, { isGift: S });
                return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
            }, [r, S]),
            { setHeaderBadgeText: O, unsetHeaderBadgeText: D } = (0, d.v)();
        return (
            i.useEffect(
                () => (
                    null != L && O(K.intl.string(z.default.Fjpyfj)),
                    () => {
                        D();
                    }
                ),
                [L, O, D],
            ),
            (0, l.jsx)(c.T, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(m.f7, { ...b, price: v }),
                invoiceSummaryContent: M,
                paymentMethodContent: u,
                legalContent: P,
                promotionalNoticeContent: L,
                upperInlineNoticeProps: T,
                footerInlineNoticeProps: I,
                invoiceTotalDueLabel: j,
                invoiceTotalDueValue: R,
            })
        );
    };
function et(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: r } = e,
        {
            sku: a,
            application: s,
            invoicePreview: o,
            isGift: d,
            eligiblePaymentGateways: p,
            purchaseTermsAndLegalContent: m,
            isStepLoading: h,
            giftRecipient: C,
            warningAndErrorMessages: A,
            disabled: y,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: r,
                    setHasAcceptedTerms: a,
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
                } = (0, G.P5)(),
                { checkoutPaymentSources: A, hasInvoiceOrderContextLoaded: y } = (0, v.t)(),
                E = (0, b.gU)(),
                { isGift: P, giftRecipient: _ } = (0, k.Pv)(),
                F = P && (0, U.Ik)(_),
                { fetched: B, hasAlreadyLinked: W } = (0, N.RD)(d);
            S()(null != r, "Expected selectedSkuId");
            let q = E[r],
                z = q?.eligiblePaymentGateways;
            S()(null != q, "SKU must exist and be fetched."), S()(null != d, "Application must exist.");
            let J = (0, R.u)(d.id),
                $ = f.M.EEA_COUNTRIES.has(w.A.ipCountryCodeWithFallback),
                X = s === Y.h.PURCHASING || s === Y.h.COMPLETED,
                Q = A.find((e) => e.id === u) ?? null,
                ee = null != Q ? Q.type : null,
                et = null != z && z.length > 0 && (null == u || null === ee) && c ? O.fU.SELECT_PAYMENT_METHOD : void 0,
                en = q.productLine === V.EZt.SOCIAL_LAYER_GAME_ITEM,
                el = F && !en,
                ei = i.useMemo(
                    () => ({
                        testModeWarning: J ? K.intl.string(K.t.OvMyMd) : null,
                        devShelfError:
                            (0, g.n)(d, V.gfo.EMBEDDED) && h === x.$.ERROR ? K.intl.string(K.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: en && B && !W && !P ? (0, D.k3)(d) : null,
                    }),
                    [J, d, h, en, B, W, P],
                ),
                er = i.useMemo(
                    () =>
                        q.productLine === V.EZt.COLLECTIBLES
                            ? (0, l.jsx)(H, { paymentSourceType: ee })
                            : (0, l.jsx)(L.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(I.A, {
                                      onChange: a,
                                      forceShow: !0,
                                      showWithdrawalWaiver: $,
                                      disabled: X,
                                      subscriptionPlan: null,
                                      finePrintClassname: Z.i,
                                      purchaseType: m,
                                      isGift: P,
                                      finePrint: (0, l.jsx)(T.A, {
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
                    [t, n, a, $, X, m, P, ee, p, q.productLine, d.name, d.id, B, W],
                );
            return {
                sku: q,
                application: d,
                giftRecipient: _,
                isGift: P,
                invoicePreview: o,
                isEmbeddedIAP: p,
                shouldShowPurchaseReviewImage: el,
                paymentRestrictionBannerType: et,
                devShelfFetchState: h,
                isStepLoading: !y && null == C,
                purchasePreviewError: C,
                warningAndErrorMessages: ei,
                purchaseTermsAndLegalContent: er,
                eligiblePaymentGateways: z,
                disabled: X,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        E = i.useMemo(() => ({ paymentGatewayRestrictions: p, shouldUseUnifiedCheckoutUI: !0 }), [p]),
        P = (0, l.jsx)(u.N, {
            label: K.intl.string(K.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: r,
            additionalPaymentSourceDropdownProps: E,
            disabled: y,
        }),
        _ = i.useMemo(() => {
            let e = [];
            return (
                null != A.testModeWarning &&
                    e.push({ type: "warning", message: A.testModeWarning, key: "test-mode-warning-notice" }),
                null != A.devShelfError &&
                    e.push({ type: "critical", message: A.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [A.testModeWarning, A.devShelfError]),
        F = i.useMemo(() => {
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
        : (0, l.jsx)(ee, {
              application: s,
              giftRecipient: C,
              isGift: d,
              sku: a,
              invoicePreview: o,
              paymentMethodContent: P,
              legalContent: m,
              upperInlineNoticeProps: _,
              footerInlineNoticeProps: F,
          });
}
