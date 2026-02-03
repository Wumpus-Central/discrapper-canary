n.d(t, {
    A: () => k,
}),
    n(938796);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    o = n.n(a),
    s = n(997101),
    l = n(665260),
    c = n(417597),
    u = n(397927),
    d = n(821891),
    f = n(102741),
    p = n(637141),
    _ = n(953689),
    h = n(10716),
    m = n(362490),
    g = n(769015),
    E = n(778307),
    y = n(218075),
    b = n(285719),
    O = n(938289),
    v = n(351906),
    A = n(615405),
    I = n(79387),
    S = n(147964),
    T = n(603349),
    C = n(45938),
    N = n(937008),
    w = n(156312),
    R = n(566980),
    P = n(938136),
    D = n(319820),
    L = n(652215),
    x = n(985018),
    M = n(342444);

function j(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: M.qY,
              children: [
                  (0, r.jsx)(g.A, {
                      game: t,
                  }),
                  (0, r.jsx)(u.Heading, {
                      variant: "heading-lg/bold",
                      className: M.nI,
                      children: n.name,
                  }),
              ],
          });
}

function k(e) {
    var t, n;
    let { hasLegalTermsFlash: a, legalTermsNodeRef: g, onPaymentSourceChange: k, handlePaymentSourceAdd: U } = e,
        {
            application: G,
            purchaseState: V,
            paymentSourceId: F,
            setPaymentSourceId: B,
            setHasAcceptedTerms: H,
            skusById: Y,
            skuPricePreviewsById: W,
            selectedSkuId: K,
            isEmbeddedIAP: z,
            purchaseType: q,
            purchasePreviewError: Z,
            devShelfFetchState: Q,
            hasPaymentSources: X,
            checkoutPaymentSources: J,
            hasCheckoutContextLoaded: $,
        } = (0, w.P5)(),
        { isGift: ee, giftRecipient: et } = (0, N.Pv)(),
        en = ee && (0, C.Ik)(et),
        { fetched: er, hasAlreadyLinked: ei } = (0, m.RD)(G),
        ea = (0, O.n)({
            location: "OneTimePurchaseReview",
        });
    o()(null != K, "Expected selectedSkuId");
    let eo = i.useRef(!1);
    i.useEffect(() => {
        if ($ && J.length > 0 && !eo.current) {
            var e;
            (eo.current = !0), B((null != (e = J.find((e) => e.enabled)) ? e : J[0]).id);
        }
    }, [$, J, B]);
    let es = Y[K],
        el = null == es ? void 0 : es.eligiblePaymentGateways,
        ec = W[K],
        eu = null != F ? F : I.B,
        ed = J.length > 0,
        ef = null != ec ? (null != (t = ec[eu]) ? t : ed ? ec[I.B] : null) : null;
    o()(null != es, "SKU must exist and be fetched."), o()(null != G, "Application must exist.");
    let ep = (0, c.bG)([h.A, S.A], () => S.A.inTestModeForApplication(G.id) || h.A.inDevModeForApplication(G.id), [
            G.id,
        ]),
        e_ = (0, c.bG)([v.A], () => v.A.enabled),
        eh = s.M.EEA_COUNTRIES.has(A.A.ipCountryCodeWithFallback),
        em = V === R.h.PURCHASING || V === R.h.COMPLETED,
        eg = null != (n = J.find((e) => e.id === F)) ? n : null,
        eE = null != eg ? eg.type : null,
        ey = null != el && el.length > 0 && (F === I.B || null === eE) && X ? y.f.SELECT_PAYMENT_METHOD : void 0,
        eb = es.productLine === L.EZt.SOCIAL_LAYER_GAME_ITEM,
        eO = en && !eb;
    return (0, r.jsxs)("div", {
        className: M.Du,
        children: [
            (0, r.jsx)(y.j, {
                paymentRestrictionBannerType: ey,
            }),
            ep
                ? (0, r.jsx)(
                      f.A,
                      {
                          icon: (0, u.kHD)(T.A),
                          iconSize: f.A.Sizes.SMALL,
                          color: f.A.Colors.WARNING,
                          className: M.QK,
                          children: x.intl.string(x.t.OvMyMd),
                      },
                      "TEST_MODE",
                  )
                : null,
            (0, l.Lt)(G.flags, L.gfo.EMBEDDED) && Q === h.$.ERROR
                ? (0, r.jsx)(
                      f.A,
                      {
                          icon: (0, u.kHD)(T.A),
                          iconSize: f.A.Sizes.SMALL,
                          color: f.A.Colors.ERROR,
                          className: M.QK,
                          children: x.intl.string(x.t.tAmECt),
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(j, {
                application: G,
                sku: es,
                isEmbeddedIAP: z,
            }),
            eO &&
                (0, r.jsx)(P.A, {
                    sku: es,
                }),
            null != et
                ? (0, r.jsx)(b.Z, {
                      giftRecipient: et,
                  })
                : null,
            $ || null != Z
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.D0$, {
                              label: ee ? x.intl.string(x.t.PEjaCx) : x.intl.string(x.t.sail9P),
                              children:
                                  null != ef
                                      ? (0, r.jsx)(D.h, {
                                            sku: es,
                                            skuPricePreview: ef,
                                            application: G,
                                        })
                                      : (0, r.jsx)(D.U, {
                                            sku: es,
                                            value: "",
                                        }),
                          }),
                          (0, r.jsx)(p.A, {
                              label: x.intl.string(x.t["mmDvV+"]),
                              paymentSources: J,
                              selectedPaymentSourceId: F,
                              onChange: k,
                              onPaymentSourceAdd: U,
                              hidePersonalInformation: e_,
                              paymentGatewayRestrictions: el,
                          }),
                      ],
                  })
                : (0, r.jsx)(u.y$y, {
                      type: u.y$y.Type.WANDERING_CUBES,
                      className: M.fx,
                  }),
            (0, r.jsxs)(E.A, {
                isActive: a,
                ref: g,
                children: [
                    (0, r.jsx)(_.A, {
                        onChange: H,
                        forceShow: !0,
                        showWithdrawalWaiver: eh,
                        disabled: em,
                        subscriptionPlan: null,
                        finePrintClassname: M.im,
                        purchaseType: q,
                        isGift: ee,
                        finePrint: (0, r.jsx)(d.A, {
                            paymentSourceType: eE,
                            isEmbeddedIAP: z,
                            purchaseType: q,
                            productLine: es.productLine,
                            isGift: ee,
                            applicationName: G.name,
                            hasAlreadyLinked: !er || ei,
                        }),
                    }),
                    eb &&
                        er &&
                        !ei &&
                        !ee &&
                        (0, r.jsx)("div", {
                            className: M.lm,
                            children: (0, r.jsx)(u.wx6, {
                                type: "warning",
                                children: x.intl.string(ea ? x.t["3pLGHL"] : x.t["6fBC//"]),
                            }),
                        }),
                ],
            }),
        ],
    });
}
