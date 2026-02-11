"use strict";
n.d(t, { A: () => G });
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
function G(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: E } = e,
        {
            application: G,
            purchaseState: F,
            paymentSourceId: V,
            setPaymentSourceId: B,
            setHasAcceptedTerms: j,
            skusById: H,
            skuPricePreviewsById: Y,
            selectedSkuId: W,
            isEmbeddedIAP: K,
            purchaseType: $,
            purchasePreviewError: z,
            devShelfFetchState: q,
            hasPaymentSources: X,
            checkoutPaymentSources: Z,
            hasCheckoutContextLoaded: Q,
        } = (0, D.P5)(),
        { isGift: J, giftRecipient: ee } = (0, O.Pv)(),
        et = J && (0, R.Ik)(ee),
        { fetched: en, hasAlreadyLinked: er } = (0, p.RD)(G),
        ei = (0, y.n)({ location: "OneTimePurchaseReview" });
    s()(null != W, "Expected selectedSkuId");
    let ea = i.useRef(!1);
    i.useEffect(() => {
        if (Q && Z.length > 0 && !ea.current) {
            ea.current = !0;
            let e = Z.find((e) => e.enabled) ?? null;
            null != e ? B(e.id) : B(null);
        }
    }, [Q, Z, B]);
    let es = H[W],
        eo = es?.eligiblePaymentGateways,
        el = Y[W],
        eu = V ?? C.B,
        ec = Z.length > 0,
        ed = null != el ? (el[eu] ?? (ec ? el[C.B] : null)) : null;
    s()(null != es, "SKU must exist and be fetched."), s()(null != G, "Application must exist.");
    let e_ = (0, l.bG)([h.A, b.A], () => b.A.inTestModeForApplication(G.id) || h.A.inDevModeForApplication(G.id), [
            G.id,
        ]),
        ef = (0, l.bG)([S.A], () => S.A.enabled),
        eh = o.M.EEA_COUNTRIES.has(v.A.ipCountryCodeWithFallback),
        ep = F === L.h.PURCHASING || F === L.h.COMPLETED,
        em = Z.find((e) => e.id === V) ?? null,
        eg = null != em ? em.type : null,
        eE = null != eo && eo.length > 0 && (V === C.B || null === eg) && X ? I.f.SELECT_PAYMENT_METHOD : void 0,
        eA = es.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM,
        eI = et && !eA;
    return (0, r.jsxs)("div", {
        className: k.Du,
        children: [
            (0, r.jsx)(I.j, { paymentRestrictionBannerType: eE }),
            e_
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(N.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.WARNING,
                          className: k.QK,
                          children: M.intl.string(M.t.OvMyMd),
                      },
                      "TEST_MODE",
                  )
                : null,
            (0, g.n)(G, P.gfo.EMBEDDED) && q === h.$.ERROR
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(N.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.ERROR,
                          className: k.QK,
                          children: M.intl.string(M.t.tAmECt),
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(U, { application: G, sku: es, isEmbeddedIAP: K }),
            eI && (0, r.jsx)(w.A, { sku: es }),
            null != ee ? (0, r.jsx)(T.Z, { giftRecipient: ee }) : null,
            Q || null != z
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.D0$, {
                              label: J ? M.intl.string(M.t.PEjaCx) : M.intl.string(M.t.sail9P),
                              children:
                                  null != ed
                                      ? (0, r.jsx)(x.h, { sku: es, skuPricePreview: ed, application: G })
                                      : (0, r.jsx)(x.U, { sku: es, value: "" }),
                          }),
                          (0, r.jsx)(_.A, {
                              label: M.intl.string(M.t["mmDvV+"]),
                              paymentSources: Z,
                              selectedPaymentSourceId: V,
                              onChange: a,
                              onPaymentSourceAdd: E,
                              hidePersonalInformation: ef,
                              paymentGatewayRestrictions: eo,
                              defaultPaymentSourceId: Z.find((e) => e.isDefault)?.id,
                          }),
                      ],
                  })
                : (0, r.jsx)(u.y$y, { type: u.y$y.Type.WANDERING_CUBES, className: k.fx }),
            (0, r.jsxs)(A.A, {
                isActive: t,
                ref: n,
                children: [
                    (0, r.jsx)(f.A, {
                        onChange: j,
                        forceShow: !0,
                        showWithdrawalWaiver: eh,
                        disabled: ep,
                        subscriptionPlan: null,
                        finePrintClassname: k.im,
                        purchaseType: $,
                        isGift: J,
                        finePrint: (0, r.jsx)(c.A, {
                            paymentSourceType: eg,
                            isEmbeddedIAP: K,
                            purchaseType: $,
                            productLine: es.productLine,
                            isGift: J,
                            applicationName: G.name,
                            hasAlreadyLinked: !en || er,
                        }),
                    }),
                    eA &&
                        en &&
                        !er &&
                        !J &&
                        (0, r.jsx)("div", {
                            className: k.lm,
                            children: (0, r.jsx)(u.wx6, {
                                type: "warning",
                                children: M.intl.string(ei ? M.t["3pLGHL"] : M.t["6fBC//"]),
                            }),
                        }),
                ],
            }),
        ],
    });
}
