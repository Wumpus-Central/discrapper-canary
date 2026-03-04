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
    S = n(351906),
    y = n(615405),
    v = n(79387),
    N = n(147964),
    C = n(603349),
    R = n(45938),
    O = n(937008),
    b = n(156312),
    D = n(566980),
    L = n(907927),
    w = n(938136),
    M = n(319820),
    x = n(652215),
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
                setPaymentSourceId: C,
                skusById: w,
                skuPricePreviewsById: M,
                selectedSkuId: U,
                setHasAcceptedTerms: G,
                isEmbeddedIAP: F,
                purchaseType: V,
                purchasePreviewError: B,
                devShelfFetchState: H,
                hasPaymentSources: j,
                checkoutPaymentSources: Y,
                hasCheckoutContextLoaded: W,
            } = (0, b.P5)(),
            { isGift: K, giftRecipient: $ } = (0, O.Pv)(),
            z = K && (0, R.Ik)($),
            { fetched: q, hasAlreadyLinked: Z } = (0, m.RD)(p);
        a()(null != U, "Expected selectedSkuId");
        let X = i.useRef(!1);
        i.useEffect(() => {
            if (W && Y.length > 0 && !X.current) {
                X.current = !0;
                let e = Y.find((e) => e.enabled) ?? null;
                null != e ? C(e.id) : C(null);
            }
        }, [W, Y, C]);
        let Q = w[U],
            J = Q?.eligiblePaymentGateways,
            ee = M[U],
            et = T ?? v.B,
            en = Y.length > 0,
            er = null != ee ? (ee[et] ?? (en ? ee[v.B] : null)) : null;
        a()(null != Q, "SKU must exist and be fetched."), a()(null != p, "Application must exist.");
        let ei = (0, l.bG)([h.A, N.A], () => N.A.inTestModeForApplication(p.id) || h.A.inDevModeForApplication(p.id), [
                p.id,
            ]),
            es = (0, l.bG)([S.A], () => S.A.enabled),
            ea = o.M.EEA_COUNTRIES.has(y.A.ipCountryCodeWithFallback),
            eo = g === D.h.PURCHASING || g === D.h.COMPLETED,
            el = Y.find((e) => e.id === T) ?? null,
            eu = null != el ? el.type : null,
            ec = null != J && J.length > 0 && (T === v.B || null === eu) && j ? I.fU.SELECT_PAYMENT_METHOD : void 0,
            ed = Q.productLine === x.EZt.SOCIAL_LAYER_GAME_ITEM,
            e_ = z && !ed,
            ef = i.useMemo(
                () => ({
                    testModeWarning: ei ? P.intl.string(P.t.OvMyMd) : null,
                    devShelfError: (0, E.n)(p, x.gfo.EMBEDDED) && H === h.$.ERROR ? P.intl.string(P.t.tAmECt) : null,
                    socialLayerGameItemDisclaimer: ed && q && !Z && !K ? P.intl.string(P.t["3pLGHL"]) : null,
                }),
                [ei, p, H, ed, q, Z, K],
            ),
            ep = i.useMemo(
                () => ({
                    label: P.intl.string(P.t["mmDvV+"]),
                    paymentSources: Y,
                    selectedPaymentSourceId: T,
                    onChange: s,
                    onPaymentSourceAdd: d,
                    hidePersonalInformation: es,
                    paymentGatewayRestrictions: J,
                    defaultPaymentSourceId: Y.find((e) => e.isDefault)?.id,
                }),
                [Y, T, s, d, es, J],
            ),
            eh = i.useMemo(
                () =>
                    _ && Q.productLine === x.EZt.COLLECTIBLES
                        ? (0, r.jsx)(L.f, { paymentSourceType: eu })
                        : (0, r.jsxs)(A.A, {
                              isActive: t,
                              ref: n,
                              children: [
                                  (0, r.jsx)(f.A, {
                                      onChange: G,
                                      forceShow: !0,
                                      showWithdrawalWaiver: ea,
                                      disabled: eo,
                                      subscriptionPlan: null,
                                      finePrintClassname: k.im,
                                      purchaseType: V,
                                      isGift: K,
                                      finePrint: (0, r.jsx)(c.A, {
                                          paymentSourceType: eu,
                                          isEmbeddedIAP: F,
                                          purchaseType: V,
                                          productLine: Q.productLine,
                                          isGift: K,
                                          applicationName: p.name,
                                          hasAlreadyLinked: !q || Z,
                                      }),
                                  }),
                                  _ || null == ef.socialLayerGameItemDisclaimer
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: k.lm,
                                            children: (0, r.jsx)(u.wx6, {
                                                type: "warning",
                                                children: ef.socialLayerGameItemDisclaimer,
                                            }),
                                        }),
                              ],
                          }),
                [_, t, n, G, ea, eo, V, K, eu, F, Q.productLine, p.name, q, Z, ef.socialLayerGameItemDisclaimer],
            );
        return {
            sku: Q,
            application: p,
            giftRecipient: $,
            isGift: K,
            skuPricePreview: er,
            isEmbeddedIAP: F,
            shouldShowPurchaseReviewImage: e_,
            paymentRestrictionBannerType: ec,
            hasCheckoutContextLoaded: W,
            devShelfFetchState: H,
            isStepLoading: !W && null == B,
            purchasePreviewError: B,
            warningAndErrorMessages: ef,
            paymentSourceDropdownProps: ep,
            purchaseTermsAndLegalContent: eh,
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
            (0, r.jsx)(I.je, { paymentRestrictionBannerType: m }),
            null != g.testModeWarning
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(C.A),
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
                          icon: (0, u.kHD)(C.A),
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
                                      ? (0, r.jsx)(M.hl, { sku: a, skuPricePreview: f, application: o })
                                      : (0, r.jsx)(M.Uw, { sku: a, value: "" }),
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
