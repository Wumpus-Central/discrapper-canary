"use strict";
n.d(t, { A: () => F, X: () => G });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(997101),
    l = n(417597),
    u = n(397927),
    c = n(821891),
    d = n(102741),
    _ = n(637141),
    f = n(953689),
    p = n(10716),
    h = n(362490),
    m = n(20015),
    E = n(769015),
    g = n(778307),
    A = n(218075),
    I = n(285719),
    T = n(938289),
    S = n(204890),
    y = n(351906),
    v = n(615405),
    N = n(79387),
    C = n(147964),
    b = n(603349),
    R = n(45938),
    O = n(937008),
    D = n(156312),
    L = n(566980),
    w = n(938136),
    x = n(319820),
    M = n(652215),
    P = n(985018),
    k = n(342444);
function U(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: k.qY,
              children: [
                  (0, r.jsx)(E.A, { game: t }),
                  (0, r.jsx)(u.Heading, { variant: "heading-lg/bold", className: k.nI, children: n.name }),
              ],
          });
}
let G = (e) => {
    let {
            hasLegalTermsFlash: t,
            legalTermsNodeRef: n,
            onPaymentSourceChange: s,
            handlePaymentSourceAdd: d,
            shouldUseUnifiedCheckoutUI: _,
        } = e,
        {
            application: E,
            purchaseState: I,
            paymentSourceId: S,
            setPaymentSourceId: b,
            skusById: w,
            skuPricePreviewsById: x,
            selectedSkuId: U,
            setHasAcceptedTerms: G,
            isEmbeddedIAP: F,
            purchaseType: V,
            purchasePreviewError: B,
            devShelfFetchState: H,
            hasPaymentSources: j,
            checkoutPaymentSources: Y,
            hasCheckoutContextLoaded: W,
        } = (0, D.P5)(),
        { isGift: K, giftRecipient: z } = (0, O.Pv)(),
        $ = K && (0, R.Ik)(z),
        { fetched: q, hasAlreadyLinked: Z } = (0, h.RD)(E),
        X = (0, T.n)({ location: "OneTimePurchaseReview" });
    a()(null != U, "Expected selectedSkuId");
    let Q = i.useRef(!1);
    i.useEffect(() => {
        if (W && Y.length > 0 && !Q.current) {
            Q.current = !0;
            let e = Y.find((e) => e.enabled) ?? null;
            null != e ? b(e.id) : b(null);
        }
    }, [W, Y, b]);
    let J = w[U],
        ee = J?.eligiblePaymentGateways,
        et = x[U],
        en = S ?? N.B,
        er = Y.length > 0,
        ei = null != et ? (et[en] ?? (er ? et[N.B] : null)) : null;
    a()(null != J, "SKU must exist and be fetched."), a()(null != E, "Application must exist.");
    let es = (0, l.bG)([p.A, C.A], () => C.A.inTestModeForApplication(E.id) || p.A.inDevModeForApplication(E.id), [
            E.id,
        ]),
        ea = (0, l.bG)([y.A], () => y.A.enabled),
        eo = o.M.EEA_COUNTRIES.has(v.A.ipCountryCodeWithFallback),
        el = I === L.h.PURCHASING || I === L.h.COMPLETED,
        eu = Y.find((e) => e.id === S) ?? null,
        ec = null != eu ? eu.type : null,
        ed = null != ee && ee.length > 0 && (S === N.B || null === ec) && j ? A.f.SELECT_PAYMENT_METHOD : void 0,
        e_ = J.productLine === M.EZt.SOCIAL_LAYER_GAME_ITEM,
        ef = $ && !e_,
        ep = i.useMemo(
            () => ({
                testModeWarning: es ? P.intl.string(P.t.OvMyMd) : null,
                devShelfError: (0, m.n)(E, M.gfo.EMBEDDED) && H === p.$.ERROR ? P.intl.string(P.t.tAmECt) : null,
                socialLayerGameItemDisclaimer:
                    e_ && q && !Z && !K ? P.intl.string(X ? P.t["3pLGHL"] : P.t["6fBC//"]) : null,
            }),
            [es, E, H, e_, q, Z, K, X],
        ),
        eh = i.useMemo(
            () => ({
                label: P.intl.string(P.t["mmDvV+"]),
                paymentSources: Y,
                selectedPaymentSourceId: S,
                onChange: s,
                onPaymentSourceAdd: d,
                hidePersonalInformation: ea,
                paymentGatewayRestrictions: ee,
                defaultPaymentSourceId: Y.find((e) => e.isDefault)?.id,
            }),
            [Y, S, s, d, ea, ee],
        ),
        em = i.useMemo(
            () =>
                (0, r.jsxs)(g.A, {
                    isActive: t,
                    ref: n,
                    children: [
                        (0, r.jsx)(f.A, {
                            onChange: G,
                            forceShow: !0,
                            showWithdrawalWaiver: eo,
                            disabled: el,
                            subscriptionPlan: null,
                            finePrintClassname: k.im,
                            purchaseType: V,
                            isGift: K,
                            finePrint: (0, r.jsx)(c.A, {
                                paymentSourceType: ec,
                                isEmbeddedIAP: F,
                                purchaseType: V,
                                productLine: J.productLine,
                                isGift: K,
                                applicationName: E.name,
                                hasAlreadyLinked: !q || Z,
                            }),
                        }),
                        _ || null == ep.socialLayerGameItemDisclaimer
                            ? null
                            : (0, r.jsx)("div", {
                                  className: k.lm,
                                  children: (0, r.jsx)(u.wx6, {
                                      type: "warning",
                                      children: ep.socialLayerGameItemDisclaimer,
                                  }),
                              }),
                    ],
                }),
            [_, t, n, G, eo, el, V, K, ec, F, J.productLine, E.name, q, Z, ep.socialLayerGameItemDisclaimer],
        );
    return {
        sku: J,
        application: E,
        giftRecipient: z,
        isGift: K,
        skuPricePreview: ei,
        isEmbeddedIAP: F,
        shouldShowPurchaseReviewImage: ef,
        paymentRestrictionBannerType: ed,
        hasCheckoutContextLoaded: W,
        devShelfFetchState: H,
        isStepLoading: !W && null == B,
        purchasePreviewError: B,
        warningAndErrorMessages: ep,
        paymentSourceDropdownProps: eh,
        purchaseTermsAndLegalContent: em,
    };
};
function F(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: i, handlePaymentSourceAdd: s } = e,
        {
            sku: a,
            application: o,
            giftRecipient: l,
            isGift: c,
            skuPricePreview: f,
            isEmbeddedIAP: p,
            shouldShowPurchaseReviewImage: h,
            paymentRestrictionBannerType: m,
            isStepLoading: E,
            warningAndErrorMessages: g,
            paymentSourceDropdownProps: T,
            purchaseTermsAndLegalContent: S,
        } = G({ hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: i, handlePaymentSourceAdd: s }),
        y = f?.orbs_reward;
    return (0, r.jsxs)("div", {
        className: k.Du,
        children: [
            (0, r.jsx)(A.j, { paymentRestrictionBannerType: m }),
            null != g.testModeWarning
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(b.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.WARNING,
                          className: k.QK,
                          children: g.testModeWarning,
                      },
                      "TEST_MODE",
                  )
                : null,
            null != g.devShelfError
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(b.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.ERROR,
                          className: k.QK,
                          children: g.devShelfError,
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(U, { application: o, sku: a, isEmbeddedIAP: p }),
            h && (0, r.jsx)(w.A, { sku: a }),
            null != l ? (0, r.jsx)(I.Z, { giftRecipient: l }) : null,
            E
                ? (0, r.jsx)(u.y$y, { type: u.y$y.Type.WANDERING_CUBES, className: k.fx })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.D0$, {
                              label: c ? P.intl.string(P.t.PEjaCx) : P.intl.string(P.t.sail9P),
                              children:
                                  null != f
                                      ? (0, r.jsx)(x.hl, { sku: a, skuPricePreview: f, application: o })
                                      : (0, r.jsx)(x.Uw, { sku: a, value: "" }),
                          }),
                          (0, r.jsx)(_.A, { ...T }),
                          null != y && y > 0 && (0, r.jsx)(V, { orbsReward: y, isGift: c }),
                      ],
                  }),
            S,
        ],
    });
}
let V = (e) => {
    let { orbsReward: t, isGift: n } = e,
        i = n ? P.t["ZV+aS9"] : P.t["0StwHe"];
    return (0, r.jsx)(u.D0$, {
        children: (0, r.jsx)("div", {
            className: k.o7,
            children: (0, r.jsx)(S.J, { Icon: u.Cp8, text: P.intl.format(i, { orbCount: t }) }),
        }),
    });
};
