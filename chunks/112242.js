"use strict";
n.d(t, { A: () => V, X: () => F });
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
    S = n(204890),
    v = n(351906),
    C = n(615405),
    b = n(79387),
    N = n(147964),
    R = n(603349),
    O = n(45938),
    D = n(937008),
    L = n(156312),
    w = n(566980),
    x = n(938136),
    P = n(319820),
    M = n(652215),
    k = n(985018),
    U = n(342444);
function G(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: U.qY,
              children: [
                  (0, r.jsx)(E.A, { game: t }),
                  (0, r.jsx)(u.Heading, { variant: "heading-lg/bold", className: U.nI, children: n.name }),
              ],
          });
}
let F = (e) => {
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
            paymentSourceId: S,
            setPaymentSourceId: R,
            skusById: x,
            skuPricePreviewsById: P,
            selectedSkuId: G,
            setHasAcceptedTerms: F,
            isEmbeddedIAP: V,
            purchaseType: B,
            purchasePreviewError: j,
            devShelfFetchState: H,
            hasPaymentSources: Y,
            checkoutPaymentSources: W,
            hasCheckoutContextLoaded: K,
        } = (0, L.P5)(),
        { isGift: $, giftRecipient: z } = (0, D.Pv)(),
        q = $ && (0, O.Ik)(z),
        { fetched: X, hasAlreadyLinked: Z } = (0, p.RD)(E),
        Q = (0, y.n)({ location: "OneTimePurchaseReview" });
    s()(null != G, "Expected selectedSkuId");
    let J = i.useRef(!1);
    i.useEffect(() => {
        if (K && W.length > 0 && !J.current) {
            J.current = !0;
            let e = W.find((e) => e.enabled) ?? null;
            null != e ? R(e.id) : R(null);
        }
    }, [K, W, R]);
    let ee = x[G],
        et = ee?.eligiblePaymentGateways,
        en = P[G],
        er = S ?? b.B,
        ei = W.length > 0,
        ea = null != en ? (en[er] ?? (ei ? en[b.B] : null)) : null;
    s()(null != ee, "SKU must exist and be fetched."), s()(null != E, "Application must exist.");
    let es = (0, l.bG)([h.A, N.A], () => N.A.inTestModeForApplication(E.id) || h.A.inDevModeForApplication(E.id), [
            E.id,
        ]),
        eo = (0, l.bG)([v.A], () => v.A.enabled),
        el = o.M.EEA_COUNTRIES.has(C.A.ipCountryCodeWithFallback),
        eu = T === w.h.PURCHASING || T === w.h.COMPLETED,
        ec = W.find((e) => e.id === S) ?? null,
        ed = null != ec ? ec.type : null,
        e_ = null != et && et.length > 0 && (S === b.B || null === ed) && Y ? I.f.SELECT_PAYMENT_METHOD : void 0,
        ef = ee.productLine === M.EZt.SOCIAL_LAYER_GAME_ITEM,
        eh = q && !ef,
        ep = i.useMemo(
            () => ({
                testModeWarning: es ? k.intl.string(k.t.OvMyMd) : null,
                devShelfError: (0, g.n)(E, M.gfo.EMBEDDED) && H === h.$.ERROR ? k.intl.string(k.t.tAmECt) : null,
                socialLayerGameItemDisclaimer:
                    ef && X && !Z && !$ ? k.intl.string(Q ? k.t["3pLGHL"] : k.t["6fBC//"]) : null,
            }),
            [es, E, H, ef, X, Z, $, Q],
        ),
        em = i.useMemo(
            () => ({
                label: k.intl.string(k.t["mmDvV+"]),
                paymentSources: W,
                selectedPaymentSourceId: S,
                onChange: a,
                onPaymentSourceAdd: d,
                hidePersonalInformation: eo,
                paymentGatewayRestrictions: et,
                defaultPaymentSourceId: W.find((e) => e.isDefault)?.id,
            }),
            [W, S, a, d, eo, et],
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
                            finePrintClassname: U.im,
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
                                  className: U.lm,
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
function V(e) {
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
        } = F({ hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: i, handlePaymentSourceAdd: a }),
        v = f?.orbs_reward;
    return (0, r.jsxs)("div", {
        className: U.Du,
        children: [
            (0, r.jsx)(I.j, { paymentRestrictionBannerType: g }),
            null != A.testModeWarning
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(R.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.WARNING,
                          className: U.QK,
                          children: A.testModeWarning,
                      },
                      "TEST_MODE",
                  )
                : null,
            null != A.devShelfError
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(R.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.ERROR,
                          className: U.QK,
                          children: A.devShelfError,
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(G, { application: o, sku: s, isEmbeddedIAP: h }),
            p && (0, r.jsx)(x.A, { sku: s }),
            null != l ? (0, r.jsx)(T.Z, { giftRecipient: l }) : null,
            E
                ? (0, r.jsx)(u.y$y, { type: u.y$y.Type.WANDERING_CUBES, className: U.fx })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.D0$, {
                              label: c ? k.intl.string(k.t.PEjaCx) : k.intl.string(k.t.sail9P),
                              children:
                                  null != f
                                      ? (0, r.jsx)(P.hl, { sku: s, skuPricePreview: f, application: o })
                                      : (0, r.jsx)(P.Uw, { sku: s, value: "" }),
                          }),
                          (0, r.jsx)(_.A, { ...y }),
                          null != v && v > 0 && (0, r.jsx)(B, { orbsReward: v, isGift: c }),
                      ],
                  }),
            S,
        ],
    });
}
let B = (e) => {
    let { orbsReward: t, isGift: n } = e,
        i = n ? k.t["ZV+aS9"] : k.t["0StwHe"];
    return (0, r.jsx)(u.D0$, {
        children: (0, r.jsx)("div", {
            className: U.o7,
            children: (0, r.jsx)(S.J, { Icon: u.Cp8, text: k.intl.format(i, { orbCount: t }) }),
        }),
    });
};
