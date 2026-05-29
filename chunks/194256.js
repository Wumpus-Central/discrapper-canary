n.d(t, { dL: () => Q, Ay: () => el, oO: () => et }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(575593),
    a = n(403581),
    s = n(278416),
    o = n(262427),
    u = n(376843),
    c = n(717925),
    d = n(214891),
    p = n(848584),
    m = n(241989),
    h = n(993408),
    A = n(287809),
    C = n(486020),
    E = n(428262),
    y = n(580630),
    P = n(284009),
    S = n.n(P),
    _ = n(997101),
    I = n(17928),
    f = n(318254),
    T = n(821891),
    N = n(953689),
    v = n(10716),
    g = n(46225),
    x = n(20015),
    R = n(364995),
    M = n(31823),
    b = n(426398),
    L = n(427675),
    j = n(722847),
    O = n(977445),
    w = n(778307),
    D = n(218075),
    U = n(578942),
    k = n(615405),
    G = n(45938),
    Y = n(937008),
    F = n(768050),
    B = n(566980),
    W = n(944355),
    H = n(367921),
    V = n(908419),
    K = n(652215);
function Z(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, Y.Pv)(),
        { immediateDelivery: r } = (0, V.U)(),
        i = (0, H.Ro)({
            purchaseType: K.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, l.jsx)(W._P, {
        variant: n ? { type: W.I0.GiftShop, purchaseButtonText: i } : { type: W.I0.Shop, purchaseButtonText: i },
        paymentSourceType: t,
        immediateDelivery: r,
    });
}
var q = n(375708),
    z = n(666995),
    $ = n(319820),
    J = n(327105),
    X = n(594387);
let Q = (e) => e.name,
    ee = {
        [i.R.BUNDLE]: () => q.intl.string(J.default["jM8/71"]),
        [i.R.AVATAR_DECORATION]: () => q.intl.string(J.default.r29Oel),
        [i.R.PROFILE_EFFECT]: () => q.intl.string(J.default.eTYAvF),
        [i.R.NAMEPLATE]: () => q.intl.string(J.default.of9bom),
        [i.R.PROFILE_FRAME]: () => q.intl.string(J.default.HzDn6w),
    },
    et = (e) => {
        let t = q.intl.string(J.default.iZe9Wy);
        if (null == e);
        else if (e.type in ee) return (0, ee[e.type])();
        return t;
    },
    en = (e) => {
        let {
                application: t,
                sku: n,
                invoicePreview: i,
                paymentMethodContent: u,
                legalContent: P,
                isGift: S,
                giftRecipient: _,
                upperInlineNoticeProps: I,
                footerInlineNoticeProps: T,
            } = e,
            { product: N, isSocialLayerGameItem: v } = (0, $.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: g, priceText: x } = r.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, invoicePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: r, showTaxes: i } = (0, $.yh)({ invoicePreview: n });
                            return (
                                l.push({ id: "sku", label: Q(t), amount: r }),
                                null != e &&
                                    l.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                i && l.push({ id: "tax", label: q.intl.string(q.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: l,
                                        label: q.intl.string(J.default.eoXh7B),
                                        currency: n.currency,
                                    },
                                    priceText: (0, y.$g)(r, n.currency),
                                    discount: e,
                                }
                            );
                        }
                        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                    })({ sku: n, invoicePreview: i }),
                [n, i],
            ),
            R = r.useMemo(() => (null != g ? (0, l.jsx)(p.Vm, { ...g }) : null), [g]),
            M = r.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, product: n, application: r, isSocialLayerGameItem: i, giftRecipient: o } = e,
                            u = q.intl.string(J.default.iZe9Wy);
                        i
                            ? (u = q.intl.string(J.default.qwSlCO))
                            : null != n
                              ? (u = et(n))
                              : t.productLine === K.EZt.GUILD_PRODUCT && (u = q.intl.string(J.default.hewwdA));
                        let c = i
                                ? {
                                      header: r.name,
                                      headerIconSrc: C.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 16 }),
                                  }
                                : {},
                            d = (0, l.jsx)(m.WH, { sku: t, product: n }),
                            p = {};
                        return (
                            null != n &&
                                (p = ((e) => {
                                    let t = A.default.getCurrentUser(),
                                        n = E.Ay.canUseShopDiscounts(t),
                                        l = (0, h.xM)(t),
                                        r = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                                    if (null != r && !r.showDefaultPriceOnly && r.showDiscountPrice) {
                                        if (l === h.D0.NITRO)
                                            return { PriceIcon: a.t, priceTooltip: q.intl.string(J.default.YUNJJa) };
                                        if (l === h.D0.THIRDPARTY)
                                            return { PriceIcon: s.g, priceTooltip: q.intl.string(X.default.DePOcS) };
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
                    })({ sku: n, product: N, application: t, isSocialLayerGameItem: v, giftRecipient: _ }),
                [n, N, t, v, _],
            ),
            [b, L] = r.useMemo(
                () => [q.intl.string(J.default.Zxav97), null != i ? (0, y.$g)(i.total, i.currency) : void 0],
                [i],
            ),
            j = r.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbsReward;
                    if (null != l && l > 0) {
                        let e = n ? q.t["ZV+aS9"] : q.t["0StwHe"];
                        return { Icon: f.C, text: q.intl.format(e, { orbCount: l }) };
                    }
                })(i, { isGift: S });
                return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
            }, [i, S]),
            { setHeaderBadgeText: O, unsetHeaderBadgeText: w } = (0, d.v)();
        return (
            r.useEffect(
                () => (
                    null != j && O(q.intl.string(J.default.Fjpyfj)),
                    () => {
                        w();
                    }
                ),
                [j, O, w],
            ),
            (0, l.jsx)(c.T, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(m.f7, { ...M, price: x }),
                invoiceSummaryContent: R,
                paymentMethodContent: u,
                legalContent: P,
                promotionalNoticeContent: j,
                upperInlineNoticeProps: I,
                footerInlineNoticeProps: T,
                invoiceTotalDueLabel: b,
                invoiceTotalDueValue: L,
            })
        );
    };
function el(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: i } = e,
        {
            sku: a,
            application: s,
            invoicePreview: o,
            isGift: d,
            eligiblePaymentGateways: p,
            purchaseTermsAndLegalContent: m,
            isStepLoading: h,
            giftRecipient: A,
            warningAndErrorMessages: C,
            disabled: E,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: i,
                    setHasAcceptedTerms: a,
                    purchaseState: s,
                    checkoutInvoicePreview: o,
                    paymentSourceId: u,
                    purchasePreviewError: c,
                } = (0, j.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setHasAcceptedTerms: e.setHasAcceptedTerms,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                })),
                { hasPaymentSources: d } = (0, b.jm)(),
                { purchaseType: p } = (0, F.P5)(),
                { application: m, isEmbeddedIAP: h } = (0, M.V)(),
                A = (0, I.bG)([v.A], () => v.A.getFetchState()),
                { checkoutPaymentSources: C, hasInvoiceOrderContextLoaded: E } = (0, R.t)(),
                y = (0, L.gU)(),
                { isGift: P, giftRecipient: f } = (0, Y.Pv)(),
                W = P && (0, G.Ik)(f),
                { fetched: H, hasAlreadyLinked: V } = (0, g.RD)(m);
            S()(null != i, "Expected selectedSkuId");
            let $ = y[i],
                J = $?.eligiblePaymentGateways;
            S()(null != $, "SKU must exist and be fetched."), S()(null != m, "Application must exist.");
            let X = (0, O.u)(m.id),
                Q = _.M.EEA_COUNTRIES.has(k.A.ipCountryCodeWithFallback),
                ee = s === B.h.PURCHASING || s === B.h.COMPLETED,
                et = C.find((e) => e.id === u) ?? null,
                en = null != et ? et.type : null,
                el = null != J && J.length > 0 && (null == u || null === en) && d ? D.fU.SELECT_PAYMENT_METHOD : void 0,
                er = $.productLine === K.EZt.SOCIAL_LAYER_GAME_ITEM,
                ei = W && !er,
                ea = r.useMemo(
                    () => ({
                        testModeWarning: X ? q.intl.string(q.t.OvMyMd) : null,
                        devShelfError:
                            (0, x.n)(m, K.gfo.EMBEDDED) && A === v.$.ERROR ? q.intl.string(q.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: er && H && !V && !P ? (0, U.k3)(m) : null,
                    }),
                    [X, m, A, er, H, V, P],
                ),
                es = r.useMemo(
                    () =>
                        $.productLine === K.EZt.COLLECTIBLES
                            ? (0, l.jsx)(Z, { paymentSourceType: en })
                            : (0, l.jsx)(w.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(N.A, {
                                      onChange: a,
                                      forceShow: !0,
                                      showWithdrawalWaiver: Q,
                                      disabled: ee,
                                      subscriptionPlan: null,
                                      finePrintClassname: z.i,
                                      purchaseType: p,
                                      isGift: P,
                                      finePrint: (0, l.jsx)(T.A, {
                                          paymentSourceType: en,
                                          isEmbeddedIAP: h,
                                          purchaseType: p,
                                          productLine: $.productLine,
                                          isGift: P,
                                          applicationName: m.name,
                                          applicationId: m.id,
                                          hasAlreadyLinked: !H || V,
                                      }),
                                  }),
                              }),
                    [t, n, a, Q, ee, p, P, en, h, $.productLine, m.name, m.id, H, V],
                );
            return {
                sku: $,
                application: m,
                giftRecipient: f,
                isGift: P,
                invoicePreview: o,
                isEmbeddedIAP: h,
                shouldShowPurchaseReviewImage: ei,
                paymentRestrictionBannerType: el,
                devShelfFetchState: A,
                isStepLoading: !E && null == c,
                purchasePreviewError: c,
                warningAndErrorMessages: ea,
                purchaseTermsAndLegalContent: es,
                eligiblePaymentGateways: J,
                disabled: ee,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        y = r.useMemo(() => ({ paymentGatewayRestrictions: p, shouldUseUnifiedCheckoutUI: !0 }), [p]),
        P = (0, l.jsx)(u.N, {
            label: q.intl.string(q.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: i,
            additionalPaymentSourceDropdownProps: y,
            disabled: E,
        }),
        f = r.useMemo(() => {
            let e = [];
            return (
                null != C.testModeWarning &&
                    e.push({ type: "warning", message: C.testModeWarning, key: "test-mode-warning-notice" }),
                null != C.devShelfError &&
                    e.push({ type: "critical", message: C.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [C.testModeWarning, C.devShelfError]),
        W = r.useMemo(() => {
            let e = [];
            return (
                null != C.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: C.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [C.socialLayerGameItemDisclaimer]);
    return h
        ? (0, l.jsx)(c.E, {})
        : (0, l.jsx)(en, {
              application: s,
              giftRecipient: A,
              isGift: d,
              sku: a,
              invoicePreview: o,
              paymentMethodContent: P,
              legalContent: m,
              upperInlineNoticeProps: f,
              footerInlineNoticeProps: W,
          });
}
