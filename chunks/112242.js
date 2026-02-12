"use strict";
n.d(t, { A: () => F, X: () => G });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(997101),
    l = n(417597),
    u = n(397927),
    c = n(821891),
    d = n(102741),
    _ = n(637141),
    f = n(953689),
    h = n(10716),
    p = n(362490),
    g = n(20015),
    E = n(769015),
    A = n(778307),
    I = n(218075),
    T = n(285719),
    y = n(938289),
    S = n(351906),
    v = n(615405),
    C = n(79387),
    b = n(147964),
    N = n(603349),
    R = n(45938),
    O = n(937008),
    D = n(156312),
    L = n(566980),
    w = n(938136),
    x = n(319820),
    P = n(652215),
    M = n(985018),
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
            onPaymentSourceChange: a,
            handlePaymentSourceAdd: d,
            shouldUseUnifiedCheckoutUI: _,
        } = e,
        {
            application: E,
            purchaseState: T,
            paymentSourceId: N,
            setPaymentSourceId: w,
            skusById: x,
            skuPricePreviewsById: U,
            selectedSkuId: G,
            setHasAcceptedTerms: F,
            isEmbeddedIAP: V,
            purchaseType: B,
            purchasePreviewError: j,
            devShelfFetchState: H,
            hasPaymentSources: Y,
            checkoutPaymentSources: W,
            hasCheckoutContextLoaded: K,
        } = (0, D.P5)(),
        { isGift: $, giftRecipient: z } = (0, O.Pv)(),
        q = $ && (0, R.Ik)(z),
        { fetched: X, hasAlreadyLinked: Z } = (0, p.RD)(E),
        Q = (0, y.n)({ location: "OneTimePurchaseReview" });
    s()(null != G, "Expected selectedSkuId");
    let J = i.useRef(!1);
    i.useEffect(() => {
        if (K && W.length > 0 && !J.current) {
            J.current = !0;
            let e = W.find((e) => e.enabled) ?? null;
            null != e ? w(e.id) : w(null);
        }
    }, [K, W, w]);
    let ee = x[G],
        et = ee?.eligiblePaymentGateways,
        en = U[G],
        er = N ?? C.B,
        ei = W.length > 0,
        ea = null != en ? (en[er] ?? (ei ? en[C.B] : null)) : null;
    s()(null != ee, "SKU must exist and be fetched."), s()(null != E, "Application must exist.");
    let es = (0, l.bG)([h.A, b.A], () => b.A.inTestModeForApplication(E.id) || h.A.inDevModeForApplication(E.id), [
            E.id,
        ]),
        eo = (0, l.bG)([S.A], () => S.A.enabled),
        el = o.M.EEA_COUNTRIES.has(v.A.ipCountryCodeWithFallback),
        eu = T === L.h.PURCHASING || T === L.h.COMPLETED,
        ec = W.find((e) => e.id === N) ?? null,
        ed = null != ec ? ec.type : null,
        e_ = null != et && et.length > 0 && (N === C.B || null === ed) && Y ? I.f.SELECT_PAYMENT_METHOD : void 0,
        ef = ee.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM,
        eh = q && !ef,
        ep = i.useMemo(
            () => ({
                testModeWarning: es ? M.intl.string(M.t.OvMyMd) : null,
                devShelfError: (0, g.n)(E, P.gfo.EMBEDDED) && H === h.$.ERROR ? M.intl.string(M.t.tAmECt) : null,
                socialLayerGameItemDisclaimer:
                    ef && X && !Z && !$ ? M.intl.string(Q ? M.t["3pLGHL"] : M.t["6fBC//"]) : null,
            }),
            [es, E, H, ef, X, Z, $, Q],
        ),
        em = i.useMemo(
            () => ({
                label: M.intl.string(M.t["mmDvV+"]),
                paymentSources: W,
                selectedPaymentSourceId: N,
                onChange: a,
                onPaymentSourceAdd: d,
                hidePersonalInformation: eo,
                paymentGatewayRestrictions: et,
                defaultPaymentSourceId: W.find((e) => e.isDefault)?.id,
            }),
            [W, N, a, d, eo, et],
        ),
        eg = i.useMemo(
            () =>
                (0, r.jsxs)(A.A, {
                    isActive: t,
                    ref: n,
                    children: [
                        (0, r.jsx)(f.A, {
                            onChange: F,
                            forceShow: !0,
                            showWithdrawalWaiver: el,
                            disabled: eu,
                            subscriptionPlan: null,
                            finePrintClassname: k.im,
                            purchaseType: B,
                            isGift: $,
                            finePrint: (0, r.jsx)(c.A, {
                                paymentSourceType: ed,
                                isEmbeddedIAP: V,
                                purchaseType: B,
                                productLine: ee.productLine,
                                isGift: $,
                                applicationName: E.name,
                                hasAlreadyLinked: !X || Z,
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
            [_, t, n, F, el, eu, B, $, ed, V, ee.productLine, E.name, X, Z, ep.socialLayerGameItemDisclaimer],
        );
    return {
        sku: ee,
        application: E,
        giftRecipient: z,
        isGift: $,
        skuPricePreview: ea,
        isEmbeddedIAP: V,
        shouldShowPurchaseReviewImage: eh,
        paymentRestrictionBannerType: e_,
        hasCheckoutContextLoaded: K,
        devShelfFetchState: H,
        isStepLoading: !K && null == j,
        purchasePreviewError: j,
        warningAndErrorMessages: ep,
        paymentSourceDropdownProps: em,
        purchaseTermsAndLegalContent: eg,
    };
};
function F(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: i, handlePaymentSourceAdd: a } = e,
        {
            sku: s,
            application: o,
            giftRecipient: l,
            isGift: c,
            skuPricePreview: f,
            isEmbeddedIAP: h,
            shouldShowPurchaseReviewImage: p,
            paymentRestrictionBannerType: g,
            isStepLoading: E,
            warningAndErrorMessages: A,
            paymentSourceDropdownProps: y,
            purchaseTermsAndLegalContent: S,
        } = G({ hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: i, handlePaymentSourceAdd: a });
    return (0, r.jsxs)("div", {
        className: k.Du,
        children: [
            (0, r.jsx)(I.j, { paymentRestrictionBannerType: g }),
            null != A.testModeWarning
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(N.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.WARNING,
                          className: k.QK,
                          children: A.testModeWarning,
                      },
                      "TEST_MODE",
                  )
                : null,
            null != A.devShelfError
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(N.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.ERROR,
                          className: k.QK,
                          children: A.devShelfError,
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(U, { application: o, sku: s, isEmbeddedIAP: h }),
            p && (0, r.jsx)(w.A, { sku: s }),
            null != l ? (0, r.jsx)(T.Z, { giftRecipient: l }) : null,
            E
                ? (0, r.jsx)(u.y$y, { type: u.y$y.Type.WANDERING_CUBES, className: k.fx })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.D0$, {
                              label: c ? M.intl.string(M.t.PEjaCx) : M.intl.string(M.t.sail9P),
                              children:
                                  null != f
                                      ? (0, r.jsx)(x.hl, { sku: s, skuPricePreview: f, application: o })
                                      : (0, r.jsx)(x.Uw, { sku: s, value: "" }),
                          }),
                          (0, r.jsx)(_.A, { ...y }),
                      ],
                  }),
            S,
        ],
    });
}
