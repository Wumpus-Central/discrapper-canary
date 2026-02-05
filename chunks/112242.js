"use strict";
n.d(t, { A: () => U }), n(938796);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(997101),
    l = n(665260),
    u = n(417597),
    c = n(397927),
    d = n(821891),
    _ = n(102741),
    f = n(637141),
    p = n(953689),
    h = n(10716),
    m = n(362490),
    g = n(769015),
    E = n(778307),
    A = n(218075),
    I = n(285719),
    T = n(938289),
    y = n(351906),
    S = n(615405),
    v = n(79387),
    C = n(147964),
    b = n(603349),
    N = n(45938),
    R = n(937008),
    O = n(156312),
    D = n(566980),
    L = n(938136),
    w = n(319820),
    x = n(652215),
    P = n(985018),
    M = n(342444);
function k(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: M.qY,
              children: [
                  (0, r.jsx)(g.A, { game: t }),
                  (0, r.jsx)(c.Heading, { variant: "heading-lg/bold", className: M.nI, children: n.name }),
              ],
          });
}
function U(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: g } = e,
        {
            application: U,
            purchaseState: G,
            paymentSourceId: V,
            setPaymentSourceId: F,
            setHasAcceptedTerms: B,
            skusById: j,
            skuPricePreviewsById: H,
            selectedSkuId: Y,
            isEmbeddedIAP: W,
            purchaseType: K,
            purchasePreviewError: z,
            devShelfFetchState: $,
            hasPaymentSources: q,
            checkoutPaymentSources: Z,
            hasCheckoutContextLoaded: Q,
        } = (0, O.P5)(),
        { isGift: X, giftRecipient: J } = (0, R.Pv)(),
        ee = X && (0, N.Ik)(J),
        { fetched: et, hasAlreadyLinked: en } = (0, m.RD)(U),
        er = (0, T.n)({ location: "OneTimePurchaseReview" });
    s()(null != Y, "Expected selectedSkuId");
    let ei = i.useRef(!1);
    i.useEffect(() => {
        if (Q && Z.length > 0 && !ei.current) {
            ei.current = !0;
            let e = Z.find((e) => e.enabled) ?? null;
            null != e ? F(e.id) : F(null);
        }
    }, [Q, Z, F]);
    let ea = j[Y],
        es = ea?.eligiblePaymentGateways,
        eo = H[Y],
        el = V ?? v.B,
        eu = Z.length > 0,
        ec = null != eo ? (eo[el] ?? (eu ? eo[v.B] : null)) : null;
    s()(null != ea, "SKU must exist and be fetched."), s()(null != U, "Application must exist.");
    let ed = (0, u.bG)([h.A, C.A], () => C.A.inTestModeForApplication(U.id) || h.A.inDevModeForApplication(U.id), [
            U.id,
        ]),
        e_ = (0, u.bG)([y.A], () => y.A.enabled),
        ef = o.M.EEA_COUNTRIES.has(S.A.ipCountryCodeWithFallback),
        ep = G === D.h.PURCHASING || G === D.h.COMPLETED,
        eh = Z.find((e) => e.id === V) ?? null,
        em = null != eh ? eh.type : null,
        eg = null != es && es.length > 0 && (V === v.B || null === em) && q ? A.f.SELECT_PAYMENT_METHOD : void 0,
        eE = ea.productLine === x.EZt.SOCIAL_LAYER_GAME_ITEM,
        eA = ee && !eE;
    return (0, r.jsxs)("div", {
        className: M.Du,
        children: [
            (0, r.jsx)(A.j, { paymentRestrictionBannerType: eg }),
            ed
                ? (0, r.jsx)(
                      _.A,
                      {
                          icon: (0, c.kHD)(b.A),
                          iconSize: _.A.Sizes.SMALL,
                          color: _.A.Colors.WARNING,
                          className: M.QK,
                          children: P.intl.string(P.t.OvMyMd),
                      },
                      "TEST_MODE",
                  )
                : null,
            (0, l.Lt)(U.flags, x.gfo.EMBEDDED) && $ === h.$.ERROR
                ? (0, r.jsx)(
                      _.A,
                      {
                          icon: (0, c.kHD)(b.A),
                          iconSize: _.A.Sizes.SMALL,
                          color: _.A.Colors.ERROR,
                          className: M.QK,
                          children: P.intl.string(P.t.tAmECt),
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(k, { application: U, sku: ea, isEmbeddedIAP: W }),
            eA && (0, r.jsx)(L.A, { sku: ea }),
            null != J ? (0, r.jsx)(I.Z, { giftRecipient: J }) : null,
            Q || null != z
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.D0$, {
                              label: X ? P.intl.string(P.t.PEjaCx) : P.intl.string(P.t.sail9P),
                              children:
                                  null != ec
                                      ? (0, r.jsx)(w.h, { sku: ea, skuPricePreview: ec, application: U })
                                      : (0, r.jsx)(w.U, { sku: ea, value: "" }),
                          }),
                          (0, r.jsx)(f.A, {
                              label: P.intl.string(P.t["mmDvV+"]),
                              paymentSources: Z,
                              selectedPaymentSourceId: V,
                              onChange: a,
                              onPaymentSourceAdd: g,
                              hidePersonalInformation: e_,
                              paymentGatewayRestrictions: es,
                              defaultPaymentSourceId: Z.find((e) => e.isDefault)?.id,
                          }),
                      ],
                  })
                : (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES, className: M.fx }),
            (0, r.jsxs)(E.A, {
                isActive: t,
                ref: n,
                children: [
                    (0, r.jsx)(p.A, {
                        onChange: B,
                        forceShow: !0,
                        showWithdrawalWaiver: ef,
                        disabled: ep,
                        subscriptionPlan: null,
                        finePrintClassname: M.im,
                        purchaseType: K,
                        isGift: X,
                        finePrint: (0, r.jsx)(d.A, {
                            paymentSourceType: em,
                            isEmbeddedIAP: W,
                            purchaseType: K,
                            productLine: ea.productLine,
                            isGift: X,
                            applicationName: U.name,
                            hasAlreadyLinked: !et || en,
                        }),
                    }),
                    eE &&
                        et &&
                        !en &&
                        !X &&
                        (0, r.jsx)("div", {
                            className: M.lm,
                            children: (0, r.jsx)(c.wx6, {
                                type: "warning",
                                children: P.intl.string(er ? P.t["3pLGHL"] : P.t["6fBC//"]),
                            }),
                        }),
                ],
            }),
        ],
    });
}
