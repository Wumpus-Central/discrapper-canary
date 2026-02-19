"use strict";
n.d(t, { Ay: () => V, PN: () => F, X: () => G });
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
    p = n(262427),
    h = n(10716),
    m = n(362490),
    E = n(20015),
    g = n(769015),
    A = n(778307),
    I = n(218075),
    T = n(285719),
    S = n(938289),
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
                  (0, r.jsx)(g.A, { game: t }),
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
                application: p,
                purchaseState: g,
                paymentSourceId: T,
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
            { fetched: q, hasAlreadyLinked: Z } = (0, m.RD)(p),
            X = (0, S.n)({ location: "OneTimePurchaseReview" });
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
            en = T ?? N.B,
            er = Y.length > 0,
            ei = null != et ? (et[en] ?? (er ? et[N.B] : null)) : null;
        a()(null != J, "SKU must exist and be fetched."), a()(null != p, "Application must exist.");
        let es = (0, l.bG)([h.A, C.A], () => C.A.inTestModeForApplication(p.id) || h.A.inDevModeForApplication(p.id), [
                p.id,
            ]),
            ea = (0, l.bG)([y.A], () => y.A.enabled),
            eo = o.M.EEA_COUNTRIES.has(v.A.ipCountryCodeWithFallback),
            el = g === L.h.PURCHASING || g === L.h.COMPLETED,
            eu = Y.find((e) => e.id === T) ?? null,
            ec = null != eu ? eu.type : null,
            ed = null != ee && ee.length > 0 && (T === N.B || null === ec) && j ? I.f.SELECT_PAYMENT_METHOD : void 0,
            e_ = J.productLine === M.EZt.SOCIAL_LAYER_GAME_ITEM,
            ef = $ && !e_,
            ep = i.useMemo(
                () => ({
                    testModeWarning: es ? P.intl.string(P.t.OvMyMd) : null,
                    devShelfError: (0, E.n)(p, M.gfo.EMBEDDED) && H === h.$.ERROR ? P.intl.string(P.t.tAmECt) : null,
                    socialLayerGameItemDisclaimer:
                        e_ && q && !Z && !K ? P.intl.string(X ? P.t["3pLGHL"] : P.t["6fBC//"]) : null,
                }),
                [es, p, H, e_, q, Z, K, X],
            ),
            eh = i.useMemo(
                () => ({
                    label: P.intl.string(P.t["mmDvV+"]),
                    paymentSources: Y,
                    selectedPaymentSourceId: T,
                    onChange: s,
                    onPaymentSourceAdd: d,
                    hidePersonalInformation: ea,
                    paymentGatewayRestrictions: ee,
                    defaultPaymentSourceId: Y.find((e) => e.isDefault)?.id,
                }),
                [Y, T, s, d, ea, ee],
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
                                    applicationName: p.name,
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
                [_, t, n, G, eo, el, V, K, ec, F, J.productLine, p.name, q, Z, ep.socialLayerGameItemDisclaimer],
            );
        return {
            sku: J,
            application: p,
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
    },
    F = (e, t) => {
        let { isGift: n } = t;
        if (null == e) return null;
        let r = e.orbs_reward;
        if (null != r && r > 0) {
            let e = n ? P.t["ZV+aS9"] : P.t["0StwHe"];
            return { Icon: u.Cp8, text: P.intl.format(e, { orbCount: r }) };
        }
    };
function V(e) {
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
            paymentSourceDropdownProps: A,
            purchaseTermsAndLegalContent: S,
        } = G({ hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: i, handlePaymentSourceAdd: s }),
        y = F(f, { isGift: c });
    return (0, r.jsxs)("div", {
        className: k.Du,
        children: [
            (0, r.jsx)(I.j, { paymentRestrictionBannerType: m }),
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
            null != l ? (0, r.jsx)(T.Z, { giftRecipient: l }) : null,
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
                          (0, r.jsx)(_.A, { ...A }),
                          null != y && (0, r.jsx)(B, { ...y }),
                      ],
                  }),
            S,
        ],
    });
}
let B = (e) => {
    let { text: t, Icon: n } = e;
    return (0, r.jsx)(u.D0$, {
        children: (0, r.jsx)("div", { className: k.sA, children: (0, r.jsx)(p.J, { Icon: n, text: t }) }),
    });
};
