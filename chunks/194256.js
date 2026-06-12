n.d(t, { dL: () => J, Ay: () => en, oO: () => ee }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(575593),
    a = n(403581),
    s = n(278416),
    o = n(262427),
    u = n(376843),
    c = n(274971),
    d = n(214891),
    p = n(848584),
    m = n(241989),
    h = n(993408),
    A = n(287809),
    E = n(486020),
    C = n(428262),
    y = n(580630),
    _ = n(284009),
    S = n.n(_),
    P = n(997101),
    I = n(17928),
    f = n(318254),
    T = n(821891),
    N = n(953689),
    g = n(10716),
    v = n(46225),
    x = n(20015),
    R = n(364995),
    M = n(31823),
    b = n(426398),
    L = n(427675),
    O = n(211159),
    j = n(977445),
    w = n(778307),
    D = n(218075),
    U = n(578942),
    k = n(615405),
    G = n(45938),
    F = n(937008),
    Y = n(566980),
    B = n(944355),
    W = n(367921),
    H = n(908419),
    V = n(652215);
function K(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, F.Pv)(),
        { immediateDelivery: r } = (0, H.U)(),
        i = (0, W.Ro)({
            purchaseType: V.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, l.jsx)(B._P, {
        variant: n ? { type: B.I0.GiftShop, purchaseButtonText: i } : { type: B.I0.Shop, purchaseButtonText: i },
        paymentSourceType: t,
        immediateDelivery: r,
    });
}
var Z = n(375708),
    q = n(666995),
    z = n(319820),
    $ = n(327105),
    X = n(594387);
let J = (e) => e.name,
    Q = {
        [i.R.BUNDLE]: () => Z.intl.string($.default["jM8/71"]),
        [i.R.AVATAR_DECORATION]: () => Z.intl.string($.default.r29Oel),
        [i.R.PROFILE_EFFECT]: () => Z.intl.string($.default.eTYAvF),
        [i.R.NAMEPLATE]: () => Z.intl.string($.default.of9bom),
        [i.R.PROFILE_FRAME]: () => Z.intl.string($.default.HzDn6w),
    },
    ee = (e) => {
        let t = Z.intl.string($.default.iZe9Wy);
        if (null == e);
        else if (e.type in Q) return (0, Q[e.type])();
        return t;
    },
    et = (e) => {
        let {
                application: t,
                sku: n,
                invoicePreview: i,
                paymentMethodContent: u,
                legalContent: _,
                isGift: S,
                giftRecipient: P,
                upperInlineNoticeProps: I,
                footerInlineNoticeProps: T,
            } = e,
            { product: N, isSocialLayerGameItem: g } = (0, z.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: v, priceText: x } = r.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, invoicePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: r, showTaxes: i } = (0, z.yh)({ invoicePreview: n });
                            return (
                                l.push({ id: "sku", label: J(t), amount: r }),
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
                                        label: Z.intl.string($.default.eoXh7B),
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
            R = r.useMemo(() => (null != v ? (0, l.jsx)(p.Vm, { ...v }) : null), [v]),
            M = r.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, product: n, application: r, isSocialLayerGameItem: i, giftRecipient: o } = e,
                            u = Z.intl.string($.default.iZe9Wy);
                        i
                            ? (u = Z.intl.string($.default.qwSlCO))
                            : null != n
                              ? (u = ee(n))
                              : t.productLine === V.EZt.GUILD_PRODUCT && (u = Z.intl.string($.default.hewwdA));
                        let c = i
                                ? {
                                      header: r.name,
                                      headerIconSrc: E.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 16 }),
                                  }
                                : {},
                            d = (0, l.jsx)(m.WH, { sku: t, product: n }),
                            p = {};
                        return (
                            null != n &&
                                (p = ((e) => {
                                    let t = A.default.getCurrentUser(),
                                        n = C.Ay.canUseShopDiscounts(t),
                                        l = (0, h.xM)(t),
                                        r = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                                    if (null != r && !r.showDefaultPriceOnly && r.showDiscountPrice) {
                                        if (l === h.D0.NITRO)
                                            return { PriceIcon: a.t, priceTooltip: Z.intl.string($.default.YUNJJa) };
                                        if (l === h.D0.THIRDPARTY)
                                            return { PriceIcon: s.g, priceTooltip: Z.intl.string(X.default.DePOcS) };
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
                    })({ sku: n, product: N, application: t, isSocialLayerGameItem: g, giftRecipient: P }),
                [n, N, t, g, P],
            ),
            [b, L] = r.useMemo(
                () => [Z.intl.string($.default.Zxav97), null != i ? (0, y.$g)(i.total, i.currency) : void 0],
                [i],
            ),
            O = r.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbsReward;
                    if (null != l && l > 0) {
                        let e = n ? Z.t["ZV+aS9"] : Z.t["0StwHe"];
                        return { Icon: f.C, text: Z.intl.format(e, { orbCount: l }) };
                    }
                })(i, { isGift: S });
                return null != e ? (0, l.jsx)(o.J, { ...e }) : null;
            }, [i, S]),
            { setHeaderBadgeText: j, unsetHeaderBadgeText: w } = (0, d.v)();
        return (
            r.useEffect(
                () => (
                    null != O && j(Z.intl.string($.default.Fjpyfj)),
                    () => {
                        w();
                    }
                ),
                [O, j, w],
            ),
            (0, l.jsx)(c.T, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(m.f7, { ...M, price: x }),
                invoiceSummaryContent: R,
                paymentMethodContent: u,
                legalContent: _,
                promotionalNoticeContent: O,
                upperInlineNoticeProps: I,
                footerInlineNoticeProps: T,
                invoiceTotalDueLabel: b,
                invoiceTotalDueValue: L,
            })
        );
    };
function en(e) {
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
            warningAndErrorMessages: E,
            disabled: C,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: i,
                    setHasAcceptedTerms: a,
                    purchaseState: s,
                    checkoutInvoicePreview: o,
                    paymentSourceId: u,
                    purchasePreviewError: c,
                    purchaseType: d,
                } = (0, O.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setHasAcceptedTerms: e.setHasAcceptedTerms,
                    purchaseState: e.purchaseState,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    purchaseType: e.purchaseType,
                })),
                { hasPaymentSources: p } = (0, b.jm)(),
                { application: m, isEmbeddedIAP: h } = (0, M.V)(),
                A = (0, I.bG)([g.A], () => g.A.getFetchState()),
                { checkoutPaymentSources: E, hasInvoiceOrderContextLoaded: C } = (0, R.t)(),
                y = (0, L.gU)(),
                { isGift: _, giftRecipient: f } = (0, F.Pv)(),
                B = _ && (0, G.Ik)(f),
                { fetched: W, hasAlreadyLinked: H } = (0, v.RD)(m);
            S()(null != i, "Expected selectedSkuId");
            let z = y[i],
                $ = z?.eligiblePaymentGateways;
            S()(null != z, "SKU must exist and be fetched."), S()(null != m, "Application must exist.");
            let X = (0, j.uS)(m.id),
                J = P.M.EEA_COUNTRIES.has(k.A.ipCountryCodeWithFallback),
                Q = s === Y.h.PURCHASING || s === Y.h.COMPLETED,
                ee = E.find((e) => e.id === u) ?? null,
                et = null != ee ? ee.type : null,
                en = null != $ && $.length > 0 && (null == u || null === et) && p ? D.fU.SELECT_PAYMENT_METHOD : void 0,
                el = z.productLine === V.EZt.SOCIAL_LAYER_GAME_ITEM,
                er = B && !el,
                ei = r.useMemo(
                    () => ({
                        testModeWarning: X ? Z.intl.string(Z.t.OvMyMd) : null,
                        devShelfError:
                            (0, x.n)(m, V.gfo.EMBEDDED) && A === g.$.ERROR ? Z.intl.string(Z.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: el && W && !H && !_ ? (0, U.k3)(m) : null,
                    }),
                    [X, m, A, el, W, H, _],
                ),
                ea = r.useMemo(
                    () =>
                        z.productLine === V.EZt.COLLECTIBLES
                            ? (0, l.jsx)(K, { paymentSourceType: et })
                            : (0, l.jsx)(w.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(N.A, {
                                      onChange: a,
                                      forceShow: !0,
                                      showWithdrawalWaiver: J,
                                      disabled: Q,
                                      subscriptionPlan: null,
                                      finePrintClassname: q.i,
                                      purchaseType: d,
                                      isGift: _,
                                      finePrint: (0, l.jsx)(T.A, {
                                          paymentSourceType: et,
                                          isEmbeddedIAP: h,
                                          purchaseType: d,
                                          productLine: z.productLine,
                                          isGift: _,
                                          applicationName: m.name,
                                          applicationId: m.id,
                                          hasAlreadyLinked: !W || H,
                                      }),
                                  }),
                              }),
                    [t, n, a, J, Q, d, _, et, h, z.productLine, m.name, m.id, W, H],
                );
            return {
                sku: z,
                application: m,
                giftRecipient: f,
                isGift: _,
                invoicePreview: o,
                isEmbeddedIAP: h,
                shouldShowPurchaseReviewImage: er,
                paymentRestrictionBannerType: en,
                devShelfFetchState: A,
                isStepLoading: !C && null == c,
                purchasePreviewError: c,
                warningAndErrorMessages: ei,
                purchaseTermsAndLegalContent: ea,
                eligiblePaymentGateways: $,
                disabled: Q,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        y = r.useMemo(() => ({ paymentGatewayRestrictions: p, shouldUseUnifiedCheckoutUI: !0 }), [p]),
        _ = (0, l.jsx)(u.N, {
            label: Z.intl.string(Z.t["u+Cw58"]),
            location: "OneTimeUnifiedCheckoutPurchaseReview",
            onPaymentSourceAdd: i,
            additionalPaymentSourceDropdownProps: y,
            disabled: C,
        }),
        f = r.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning &&
                    e.push({ type: "warning", message: E.testModeWarning, key: "test-mode-warning-notice" }),
                null != E.devShelfError &&
                    e.push({ type: "critical", message: E.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError]),
        B = r.useMemo(() => {
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
    return h
        ? (0, l.jsx)(c.E, {})
        : (0, l.jsx)(et, {
              application: s,
              giftRecipient: A,
              isGift: d,
              sku: a,
              invoicePreview: o,
              paymentMethodContent: _,
              legalContent: m,
              upperInlineNoticeProps: f,
              footerInlineNoticeProps: B,
          });
}
