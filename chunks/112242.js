n.d(t, {
    A: () => V,
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
    d = n(830382),
    f = n(821891),
    p = n(102741),
    _ = n(637141),
    h = n(953689),
    m = n(10716),
    g = n(362490),
    E = n(769015),
    y = n(778307),
    b = n(218075),
    O = n(285719),
    v = n(938289),
    A = n(351906),
    I = n(615405),
    S = n(295405),
    T = n(79387),
    C = n(147964),
    N = n(603349),
    w = n(45938),
    R = n(937008),
    P = n(156312),
    D = n(566980),
    L = n(216641),
    x = n(938136),
    M = n(319820),
    j = n(652215),
    k = n(985018),
    U = n(342444);

function G(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: U.qY,
              children: [
                  (0, r.jsx)(E.A, {
                      game: t,
                  }),
                  (0, r.jsx)(u.Heading, {
                      variant: "heading-lg/bold",
                      className: U.nI,
                      children: n.name,
                  }),
              ],
          });
}

function V(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: E } = e,
        {
            application: V,
            purchaseState: F,
            paymentSources: B,
            paymentSourceId: H,
            setHasAcceptedTerms: Y,
            skusById: W,
            skuPricePreviewsById: K,
            selectedSkuId: z,
            isEmbeddedIAP: q,
            purchaseType: Z,
            purchasePreviewError: Q,
            devShelfFetchState: X,
            setPurchasePreviewError: J,
            hasPaymentSources: $,
        } = (0, P.P5)(),
        { isGift: ee, giftRecipient: et } = (0, R.Pv)(),
        en = ee && (0, w.Ik)(et),
        { fetched: er, hasAlreadyLinked: ei } = (0, g.RD)(V),
        ea = (0, v.n)({
            location: "OneTimePurchaseReview",
        }),
        { defaultPaymentSourceId: eo, hasFetchedPaymentSources: es } = (0, c.cf)([S.A], () => ({
            defaultPaymentSourceId: S.A.defaultPaymentSourceId,
            hasFetchedPaymentSources: S.A.hasFetchedPaymentSources,
        }));
    o()(null != z, "Expected selectedSkuId");
    let el = W[z],
        ec = null == el ? void 0 : el.eligiblePaymentGateways,
        eu = K[z],
        ed = null != H ? H : T.B,
        ef = null != eu ? eu[ed] : null;
    o()(null != el, "SKU must exist and be fetched."), o()(null != V, "Application must exist.");
    let ep = (0, c.bG)([m.A, C.A], () => C.A.inTestModeForApplication(V.id) || m.A.inDevModeForApplication(V.id), [
            V.id,
        ]),
        e_ = (0, c.bG)([A.A], () => A.A.enabled),
        eh = s.M.EEA_COUNTRIES.has(I.A.ipCountryCodeWithFallback),
        em = F === D.h.PURCHASING || F === D.h.COMPLETED,
        eg = (0, L.W)(B, H),
        eE = null != eg ? eg.type : null;
    i.useEffect(() => {
        es &&
            H === eo &&
            eo !== T.B &&
            null == ef &&
            (0, d.QX)(el.applicationId, el.id, eo, {
                isGift: ee,
            })
                .then(() => {
                    J(null);
                })
                .catch((e) => {
                    J(e);
                });
    }, [eo, es, H, el.applicationId, el.id, ef, J, ee]);
    let ey = null != ec && ec.length > 0 && (H === T.B || null === eE) && $ ? b.f.SELECT_PAYMENT_METHOD : void 0,
        eb = el.productLine === j.EZt.SOCIAL_LAYER_GAME_ITEM,
        eO = en && !eb;
    return (0, r.jsxs)("div", {
        className: U.Du,
        children: [
            (0, r.jsx)(b.j, {
                paymentRestrictionBannerType: ey,
            }),
            ep
                ? (0, r.jsx)(
                      p.A,
                      {
                          icon: (0, u.kHD)(N.A),
                          iconSize: p.A.Sizes.SMALL,
                          color: p.A.Colors.WARNING,
                          className: U.QK,
                          children: k.intl.string(k.t.OvMyMd),
                      },
                      "TEST_MODE",
                  )
                : null,
            (0, l.Lt)(V.flags, j.gfo.EMBEDDED) && X === m.$.ERROR
                ? (0, r.jsx)(
                      p.A,
                      {
                          icon: (0, u.kHD)(N.A),
                          iconSize: p.A.Sizes.SMALL,
                          color: p.A.Colors.ERROR,
                          className: U.QK,
                          children: k.intl.string(k.t.tAmECt),
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(G, {
                application: V,
                sku: el,
                isEmbeddedIAP: q,
            }),
            eO &&
                (0, r.jsx)(x.A, {
                    sku: el,
                }),
            null != et
                ? (0, r.jsx)(O.Z, {
                      giftRecipient: et,
                  })
                : null,
            (0, r.jsx)(u.D0$, {
                label: ee ? k.intl.string(k.t.PEjaCx) : k.intl.string(k.t.sail9P),
                children:
                    null != ef
                        ? (0, r.jsx)(M.h, {
                              sku: el,
                              skuPricePreview: ef,
                              application: V,
                          })
                        : null == Q
                          ? (0, r.jsx)(u.y$y, {
                                type: u.y$y.Type.WANDERING_CUBES,
                                className: U.fx,
                            })
                          : (0, r.jsx)(M.U, {
                                sku: el,
                                value: "",
                            }),
            }),
            (0, r.jsx)(_.A, {
                label: k.intl.string(k.t["mmDvV+"]),
                paymentSources: Object.values(B),
                selectedPaymentSourceId: H,
                onChange: a,
                onPaymentSourceAdd: E,
                hidePersonalInformation: e_,
                paymentGatewayRestrictions: ec,
            }),
            (0, r.jsxs)(y.A, {
                isActive: t,
                ref: n,
                children: [
                    (0, r.jsx)(h.A, {
                        onChange: Y,
                        forceShow: !0,
                        showWithdrawalWaiver: eh,
                        disabled: em,
                        subscriptionPlan: null,
                        finePrintClassname: U.im,
                        purchaseType: Z,
                        isGift: ee,
                        finePrint: (0, r.jsx)(f.A, {
                            paymentSourceType: eE,
                            isEmbeddedIAP: q,
                            purchaseType: Z,
                            productLine: el.productLine,
                            isGift: ee,
                            applicationName: V.name,
                            hasAlreadyLinked: !er || ei,
                        }),
                    }),
                    eb &&
                        er &&
                        !ei &&
                        !ee &&
                        (0, r.jsx)("div", {
                            className: U.lm,
                            children: (0, r.jsx)(u.wx6, {
                                type: "warning",
                                children: k.intl.string(ea ? k.t["3pLGHL"] : k.t["6fBC//"]),
                            }),
                        }),
                ],
            }),
        ],
    });
}
