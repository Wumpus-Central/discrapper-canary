"use strict";
n.d(t, { A: () => U });
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
    p = n(10716),
    h = n(362490),
    m = n(20015),
    g = n(769015),
    E = n(778307),
    A = n(218075),
    I = n(285719),
    T = n(938289),
    S = n(351906),
    y = n(615405),
    v = n(79387),
    C = n(147964),
    N = n(603349),
    b = n(45938),
    R = n(937008),
    O = n(156312),
    D = n(566980),
    L = n(938136),
    w = n(319820),
    x = n(652215),
    M = n(985018),
    P = n(342444);
function k(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: P.qY,
              children: [
                  (0, r.jsx)(g.A, { game: t }),
                  (0, r.jsx)(u.Heading, { variant: "heading-lg/bold", className: P.nI, children: n.name }),
              ],
          });
}
function U(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: g } = e,
        {
            application: U,
            purchaseState: G,
            paymentSourceId: F,
            setPaymentSourceId: V,
            setHasAcceptedTerms: B,
            skusById: j,
            skuPricePreviewsById: H,
            selectedSkuId: Y,
            isEmbeddedIAP: W,
            purchaseType: K,
            purchasePreviewError: $,
            devShelfFetchState: z,
            hasPaymentSources: q,
            checkoutPaymentSources: Z,
            hasCheckoutContextLoaded: X,
        } = (0, O.P5)(),
        { isGift: Q, giftRecipient: J } = (0, R.Pv)(),
        ee = Q && (0, b.Ik)(J),
        { fetched: et, hasAlreadyLinked: en } = (0, h.RD)(U),
        er = (0, T.n)({ location: "OneTimePurchaseReview" });
    s()(null != Y, "Expected selectedSkuId");
    let ei = i.useRef(!1);
    i.useEffect(() => {
        if (X && Z.length > 0 && !ei.current) {
            ei.current = !0;
            let e = Z.find((e) => e.enabled) ?? null;
            null != e ? V(e.id) : V(null);
        }
    }, [X, Z, V]);
    let ea = j[Y],
        es = ea?.eligiblePaymentGateways,
        eo = H[Y],
        el = F ?? v.B,
        eu = Z.length > 0,
        ec = null != eo ? (eo[el] ?? (eu ? eo[v.B] : null)) : null;
    s()(null != ea, "SKU must exist and be fetched."), s()(null != U, "Application must exist.");
    let ed = (0, l.bG)([p.A, C.A], () => C.A.inTestModeForApplication(U.id) || p.A.inDevModeForApplication(U.id), [
            U.id,
        ]),
        e_ = (0, l.bG)([S.A], () => S.A.enabled),
        ef = o.M.EEA_COUNTRIES.has(y.A.ipCountryCodeWithFallback),
        ep = G === D.h.PURCHASING || G === D.h.COMPLETED,
        eh = Z.find((e) => e.id === F) ?? null,
        em = null != eh ? eh.type : null,
        eg = null != es && es.length > 0 && (F === v.B || null === em) && q ? A.f.SELECT_PAYMENT_METHOD : void 0,
        eE = ea.productLine === x.EZt.SOCIAL_LAYER_GAME_ITEM,
        eA = ee && !eE;
    return (0, r.jsxs)("div", {
        className: P.Du,
        children: [
            (0, r.jsx)(A.j, { paymentRestrictionBannerType: eg }),
            ed
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(N.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.WARNING,
                          className: P.QK,
                          children: M.intl.string(M.t.OvMyMd),
                      },
                      "TEST_MODE",
                  )
                : null,
            (0, m.n)(U, x.gfo.EMBEDDED) && z === p.$.ERROR
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(N.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.ERROR,
                          className: P.QK,
                          children: M.intl.string(M.t.tAmECt),
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(k, { application: U, sku: ea, isEmbeddedIAP: W }),
            eA && (0, r.jsx)(L.A, { sku: ea }),
            null != J ? (0, r.jsx)(I.Z, { giftRecipient: J }) : null,
            X || null != $
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.D0$, {
                              label: Q ? M.intl.string(M.t.PEjaCx) : M.intl.string(M.t.sail9P),
                              children:
                                  null != ec
                                      ? (0, r.jsx)(w.h, { sku: ea, skuPricePreview: ec, application: U })
                                      : (0, r.jsx)(w.U, { sku: ea, value: "" }),
                          }),
                          (0, r.jsx)(_.A, {
                              label: M.intl.string(M.t["mmDvV+"]),
                              paymentSources: Z,
                              selectedPaymentSourceId: F,
                              onChange: a,
                              onPaymentSourceAdd: g,
                              hidePersonalInformation: e_,
                              paymentGatewayRestrictions: es,
                              defaultPaymentSourceId: Z.find((e) => e.isDefault)?.id,
                          }),
                      ],
                  })
                : (0, r.jsx)(u.y$y, { type: u.y$y.Type.WANDERING_CUBES, className: P.fx }),
            (0, r.jsxs)(E.A, {
                isActive: t,
                ref: n,
                children: [
                    (0, r.jsx)(f.A, {
                        onChange: B,
                        forceShow: !0,
                        showWithdrawalWaiver: ef,
                        disabled: ep,
                        subscriptionPlan: null,
                        finePrintClassname: P.im,
                        purchaseType: K,
                        isGift: Q,
                        finePrint: (0, r.jsx)(c.A, {
                            paymentSourceType: em,
                            isEmbeddedIAP: W,
                            purchaseType: K,
                            productLine: ea.productLine,
                            isGift: Q,
                            applicationName: U.name,
                            hasAlreadyLinked: !et || en,
                        }),
                    }),
                    eE &&
                        et &&
                        !en &&
                        !Q &&
                        (0, r.jsx)("div", {
                            className: P.lm,
                            children: (0, r.jsx)(u.wx6, {
                                type: "warning",
                                children: M.intl.string(er ? M.t["3pLGHL"] : M.t["6fBC//"]),
                            }),
                        }),
                ],
            }),
        ],
    });
}
