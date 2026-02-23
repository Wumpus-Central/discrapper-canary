"use strict";
n.d(t, { Ay: () => B, PN: () => V, X: () => F });
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
    w = n(907927),
    x = n(938136),
    M = n(319820),
    P = n(652215),
    k = n(985018),
    U = n(342444);
function G(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: U.qY,
              children: [
                  (0, r.jsx)(g.A, { game: t }),
                  (0, r.jsx)(u.Heading, { variant: "heading-lg/bold", className: U.nI, children: n.name }),
              ],
          });
}
let F = (e) => {
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
                skusById: x,
                skuPricePreviewsById: M,
                selectedSkuId: G,
                setHasAcceptedTerms: F,
                isEmbeddedIAP: V,
                purchaseType: B,
                purchasePreviewError: H,
                devShelfFetchState: j,
                hasPaymentSources: Y,
                checkoutPaymentSources: W,
                hasCheckoutContextLoaded: K,
            } = (0, D.P5)(),
            { isGift: z, giftRecipient: $ } = (0, O.Pv)(),
            q = z && (0, R.Ik)($),
            { fetched: X, hasAlreadyLinked: Z } = (0, m.RD)(p),
            Q = (0, S.n)({ location: "OneTimePurchaseReview" });
        a()(null != G, "Expected selectedSkuId");
        let J = i.useRef(!1);
        i.useEffect(() => {
            if (K && W.length > 0 && !J.current) {
                J.current = !0;
                let e = W.find((e) => e.enabled) ?? null;
                null != e ? b(e.id) : b(null);
            }
        }, [K, W, b]);
        let ee = x[G],
            et = ee?.eligiblePaymentGateways,
            en = M[G],
            er = T ?? N.B,
            ei = W.length > 0,
            es = null != en ? (en[er] ?? (ei ? en[N.B] : null)) : null;
        a()(null != ee, "SKU must exist and be fetched."), a()(null != p, "Application must exist.");
        let ea = (0, l.bG)([h.A, C.A], () => C.A.inTestModeForApplication(p.id) || h.A.inDevModeForApplication(p.id), [
                p.id,
            ]),
            eo = (0, l.bG)([y.A], () => y.A.enabled),
            el = o.M.EEA_COUNTRIES.has(v.A.ipCountryCodeWithFallback),
            eu = g === L.h.PURCHASING || g === L.h.COMPLETED,
            ec = W.find((e) => e.id === T) ?? null,
            ed = null != ec ? ec.type : null,
            e_ = null != et && et.length > 0 && (T === N.B || null === ed) && Y ? I.f.SELECT_PAYMENT_METHOD : void 0,
            ef = ee.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM,
            ep = q && !ef,
            eh = i.useMemo(
                () => ({
                    testModeWarning: ea ? k.intl.string(k.t.OvMyMd) : null,
                    devShelfError: (0, E.n)(p, P.gfo.EMBEDDED) && j === h.$.ERROR ? k.intl.string(k.t.tAmECt) : null,
                    socialLayerGameItemDisclaimer:
                        ef && X && !Z && !z ? k.intl.string(Q ? k.t["3pLGHL"] : k.t["6fBC//"]) : null,
                }),
                [ea, p, j, ef, X, Z, z, Q],
            ),
            em = i.useMemo(
                () => ({
                    label: k.intl.string(k.t["mmDvV+"]),
                    paymentSources: W,
                    selectedPaymentSourceId: T,
                    onChange: s,
                    onPaymentSourceAdd: d,
                    hidePersonalInformation: eo,
                    paymentGatewayRestrictions: et,
                    defaultPaymentSourceId: W.find((e) => e.isDefault)?.id,
                }),
                [W, T, s, d, eo, et],
            ),
            eE = i.useMemo(
                () =>
                    _ && ee.productLine === P.EZt.COLLECTIBLES
                        ? (0, r.jsx)(w.f, { paymentSourceType: ed })
                        : (0, r.jsxs)(A.A, {
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
                                      isGift: z,
                                      finePrint: (0, r.jsx)(c.A, {
                                          paymentSourceType: ed,
                                          isEmbeddedIAP: V,
                                          purchaseType: B,
                                          productLine: ee.productLine,
                                          isGift: z,
                                          applicationName: p.name,
                                          hasAlreadyLinked: !X || Z,
                                      }),
                                  }),
                                  _ || null == eh.socialLayerGameItemDisclaimer
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: U.lm,
                                            children: (0, r.jsx)(u.wx6, {
                                                type: "warning",
                                                children: eh.socialLayerGameItemDisclaimer,
                                            }),
                                        }),
                              ],
                          }),
                [_, t, n, F, el, eu, B, z, ed, V, ee.productLine, p.name, X, Z, eh.socialLayerGameItemDisclaimer],
            );
        return {
            sku: ee,
            application: p,
            giftRecipient: $,
            isGift: z,
            skuPricePreview: es,
            isEmbeddedIAP: V,
            shouldShowPurchaseReviewImage: ep,
            paymentRestrictionBannerType: e_,
            hasCheckoutContextLoaded: K,
            devShelfFetchState: j,
            isStepLoading: !K && null == H,
            purchasePreviewError: H,
            warningAndErrorMessages: eh,
            paymentSourceDropdownProps: em,
            purchaseTermsAndLegalContent: eE,
        };
    },
    V = (e, t) => {
        let { isGift: n } = t;
        if (null == e) return null;
        let r = e.orbs_reward;
        if (null != r && r > 0) {
            let e = n ? k.t["ZV+aS9"] : k.t["0StwHe"];
            return { Icon: u.Cp8, text: k.intl.format(e, { orbCount: r }) };
        }
    };
function B(e) {
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
        } = F({ hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: i, handlePaymentSourceAdd: s }),
        y = V(f, { isGift: c });
    return (0, r.jsxs)("div", {
        className: U.Du,
        children: [
            (0, r.jsx)(I.j, { paymentRestrictionBannerType: m }),
            null != g.testModeWarning
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(b.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.WARNING,
                          className: U.QK,
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
                          className: U.QK,
                          children: g.devShelfError,
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(G, { application: o, sku: a, isEmbeddedIAP: p }),
            h && (0, r.jsx)(x.A, { sku: a }),
            null != l ? (0, r.jsx)(T.Z, { giftRecipient: l }) : null,
            E
                ? (0, r.jsx)(u.y$y, { type: u.y$y.Type.WANDERING_CUBES, className: U.fx })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.D0$, {
                              label: c ? k.intl.string(k.t.PEjaCx) : k.intl.string(k.t.sail9P),
                              children:
                                  null != f
                                      ? (0, r.jsx)(M.hl, { sku: a, skuPricePreview: f, application: o })
                                      : (0, r.jsx)(M.Uw, { sku: a, value: "" }),
                          }),
                          (0, r.jsx)(_.A, { ...A }),
                          null != y && (0, r.jsx)(H, { ...y }),
                      ],
                  }),
            S,
        ],
    });
}
let H = (e) => {
    let { text: t, Icon: n } = e;
    return (0, r.jsx)(u.D0$, {
        children: (0, r.jsx)("div", { className: U.sA, children: (0, r.jsx)(p.J, { Icon: n, text: t }) }),
    });
};
