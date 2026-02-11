"use strict";
n.d(t, { A: () => F });
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
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: d } = e,
        {
            application: _,
            purchaseState: E,
            paymentSourceId: T,
            setPaymentSourceId: N,
            skusById: w,
            skuPricePreviewsById: x,
            selectedSkuId: U,
            setHasAcceptedTerms: G,
            isEmbeddedIAP: F,
            purchaseType: V,
            purchasePreviewError: B,
            devShelfFetchState: j,
            hasPaymentSources: H,
            checkoutPaymentSources: Y,
            hasCheckoutContextLoaded: W,
        } = (0, D.P5)(),
        { isGift: K, giftRecipient: $ } = (0, O.Pv)(),
        z = K && (0, R.Ik)($),
        { fetched: q, hasAlreadyLinked: X } = (0, p.RD)(_),
        Z = (0, y.n)({ location: "OneTimePurchaseReview" });
    s()(null != U, "Expected selectedSkuId");
    let Q = i.useRef(!1);
    i.useEffect(() => {
        if (W && Y.length > 0 && !Q.current) {
            Q.current = !0;
            let e = Y.find((e) => e.enabled) ?? null;
            null != e ? N(e.id) : N(null);
        }
    }, [W, Y, N]);
    let J = w[U],
        ee = J?.eligiblePaymentGateways,
        et = x[U],
        en = T ?? C.B,
        er = Y.length > 0,
        ei = null != et ? (et[en] ?? (er ? et[C.B] : null)) : null;
    s()(null != J, "SKU must exist and be fetched."), s()(null != _, "Application must exist.");
    let ea = (0, l.bG)([h.A, b.A], () => b.A.inTestModeForApplication(_.id) || h.A.inDevModeForApplication(_.id), [
            _.id,
        ]),
        es = (0, l.bG)([S.A], () => S.A.enabled),
        eo = o.M.EEA_COUNTRIES.has(v.A.ipCountryCodeWithFallback),
        el = E === L.h.PURCHASING || E === L.h.COMPLETED,
        eu = Y.find((e) => e.id === T) ?? null,
        ec = null != eu ? eu.type : null,
        ed = null != ee && ee.length > 0 && (T === C.B || null === ec) && H ? I.f.SELECT_PAYMENT_METHOD : void 0,
        e_ = J.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM,
        ef = z && !e_,
        eh = i.useMemo(
            () => ({
                testModeWarning: ea ? M.intl.string(M.t.OvMyMd) : null,
                devShelfError: (0, g.n)(_, P.gfo.EMBEDDED) && j === h.$.ERROR ? M.intl.string(M.t.tAmECt) : null,
                socialLayerGameItemDisclaimer:
                    e_ && q && !X && !K ? M.intl.string(Z ? M.t["3pLGHL"] : M.t["6fBC//"]) : null,
            }),
            [ea, _, j, e_, q, X, K, Z],
        ),
        ep = i.useMemo(
            () => ({
                label: M.intl.string(M.t["mmDvV+"]),
                paymentSources: Y,
                selectedPaymentSourceId: T,
                onChange: a,
                onPaymentSourceAdd: d,
                hidePersonalInformation: es,
                paymentGatewayRestrictions: ee,
                defaultPaymentSourceId: Y.find((e) => e.isDefault)?.id,
            }),
            [Y, T, a, d, es, ee],
        ),
        em = i.useMemo(
            () =>
                (0, r.jsxs)(A.A, {
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
                                applicationName: _.name,
                                hasAlreadyLinked: !q || X,
                            }),
                        }),
                        null != eh.socialLayerGameItemDisclaimer
                            ? (0, r.jsx)("div", {
                                  className: k.lm,
                                  children: (0, r.jsx)(u.wx6, {
                                      type: "warning",
                                      children: eh.socialLayerGameItemDisclaimer,
                                  }),
                              })
                            : null,
                    ],
                }),
            [t, n, G, eo, el, V, K, ec, F, J.productLine, _.name, q, X, eh.socialLayerGameItemDisclaimer],
        );
    return {
        sku: J,
        application: _,
        giftRecipient: $,
        isGift: K,
        skuPricePreview: ei,
        isEmbeddedIAP: F,
        shouldShowPurchaseReviewImage: ef,
        paymentRestrictionBannerType: ed,
        hasCheckoutContextLoaded: W,
        devShelfFetchState: j,
        isStepLoading: !W && null == B,
        purchasePreviewError: B,
        warningAndErrorMessages: eh,
        paymentSourceDropdownProps: ep,
        purchaseTermsAndLegalContent: em,
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
