n.d(t, {
    A: () => G,
}),
    n(938796);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(997101),
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
    b = n(778307),
    y = n(218075),
    O = n(285719),
    A = n(351906),
    v = n(615405),
    S = n(295405),
    I = n(79387),
    T = n(147964),
    C = n(603349),
    N = n(45938),
    R = n(937008),
    w = n(156312),
    P = n(566980),
    D = n(216641),
    x = n(938136),
    L = n(319820),
    j = n(652215),
    M = n(985018),
    k = n(342444);

function U(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: k.qY,
              children: [
                  (0, r.jsx)(E.A, {
                      game: t,
                  }),
                  (0, r.jsx)(u.Heading, {
                      variant: "heading-lg/bold",
                      className: k.nI,
                      children: n.name,
                  }),
              ],
          });
}

function G(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: E } = e,
        {
            application: G,
            purchaseState: V,
            paymentSources: F,
            paymentSourceId: B,
            setHasAcceptedTerms: H,
            skusById: Y,
            skuPricePreviewsById: W,
            selectedSkuId: K,
            isEmbeddedIAP: z,
            purchaseType: q,
            purchasePreviewError: X,
            devShelfFetchState: Z,
            setPurchasePreviewError: Q,
            hasPaymentSources: $,
        } = (0, w.P5)(),
        { isGift: J, giftRecipient: ee } = (0, R.Pv)(),
        et = J && (0, N.Ik)(ee),
        { fetched: en, hasAlreadyLinked: er } = (0, g.RD)(G),
        { defaultPaymentSourceId: ei, hasFetchedPaymentSources: ea } = (0, c.cf)([S.A], () => ({
            defaultPaymentSourceId: S.A.defaultPaymentSourceId,
            hasFetchedPaymentSources: S.A.hasFetchedPaymentSources,
        }));
    s()(null != K, "Expected selectedSkuId");
    let es = Y[K],
        eo = null == es ? void 0 : es.eligiblePaymentGateways,
        el = W[K],
        ec = null != B ? B : I.B,
        eu = null != el ? el[ec] : null;
    s()(null != es, "SKU must exist and be fetched."), s()(null != G, "Application must exist.");
    let ed = (0, c.bG)([m.A, T.A], () => T.A.inTestModeForApplication(G.id) || m.A.inDevModeForApplication(G.id), [
            G.id,
        ]),
        ef = (0, c.bG)([A.A], () => A.A.enabled),
        ep = o.M.EEA_COUNTRIES.has(v.A.ipCountryCodeWithFallback),
        e_ = V === P.h.PURCHASING || V === P.h.COMPLETED,
        eh = (0, D.W)(F, B),
        em = null != eh ? eh.type : null;
    i.useEffect(() => {
        ea &&
            B === ei &&
            ei !== I.B &&
            null == eu &&
            (0, d.QX)(es.applicationId, es.id, ei, {
                isGift: J,
            })
                .then(() => {
                    Q(null);
                })
                .catch((e) => {
                    Q(e);
                });
    }, [ei, ea, B, es.applicationId, es.id, eu, Q, J]);
    let eg = null != eo && eo.length > 0 && (B === I.B || null === em) && $ ? y.f.SELECT_PAYMENT_METHOD : void 0,
        eE = es.productLine === j.EZt.SOCIAL_LAYER_GAME_ITEM,
        eb = et && !eE;
    return (0, r.jsxs)("div", {
        className: k.Du,
        children: [
            (0, r.jsx)(y.j, {
                paymentRestrictionBannerType: eg,
            }),
            ed
                ? (0, r.jsx)(
                      p.A,
                      {
                          icon: (0, u.kHD)(C.A),
                          iconSize: p.A.Sizes.SMALL,
                          color: p.A.Colors.WARNING,
                          className: k.QK,
                          children: M.intl.string(M.t.OvMyMd),
                      },
                      "TEST_MODE",
                  )
                : null,
            (0, l.Lt)(G.flags, j.gfo.EMBEDDED) && Z === m.$.ERROR
                ? (0, r.jsx)(
                      p.A,
                      {
                          icon: (0, u.kHD)(C.A),
                          iconSize: p.A.Sizes.SMALL,
                          color: p.A.Colors.ERROR,
                          className: k.QK,
                          children: M.intl.string(M.t.tAmECt),
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(U, {
                application: G,
                sku: es,
                isEmbeddedIAP: z,
            }),
            eb &&
                (0, r.jsx)(x.A, {
                    sku: es,
                }),
            null != ee
                ? (0, r.jsx)(O.Z, {
                      giftRecipient: ee,
                  })
                : null,
            (0, r.jsx)(u.D0$, {
                label: J ? M.intl.string(M.t.PEjaCx) : M.intl.string(M.t.sail9P),
                children:
                    null != eu
                        ? (0, r.jsx)(L.h, {
                              sku: es,
                              skuPricePreview: eu,
                              application: G,
                          })
                        : null == X
                          ? (0, r.jsx)(u.y$y, {
                                type: u.y$y.Type.WANDERING_CUBES,
                                className: k.fx,
                            })
                          : (0, r.jsx)(L.U, {
                                sku: es,
                                value: "",
                            }),
            }),
            (0, r.jsx)(_.Ay, {
                label: M.intl.string(M.t["mmDvV+"]),
                paymentSources: Object.values(F),
                selectedPaymentSourceId: B,
                onChange: a,
                onPaymentSourceAdd: E,
                hidePersonalInformation: ef,
                paymentGatewayRestrictions: eo,
            }),
            (0, r.jsxs)(b.A, {
                isActive: t,
                ref: n,
                children: [
                    (0, r.jsx)(h.A, {
                        onChange: H,
                        forceShow: !0,
                        showWithdrawalWaiver: ep,
                        disabled: e_,
                        subscriptionPlan: null,
                        finePrintClassname: k.im,
                        purchaseType: q,
                        isGift: J,
                        finePrint: (0, r.jsx)(f.A, {
                            paymentSourceType: em,
                            isEmbeddedIAP: z,
                            purchaseType: q,
                            productLine: es.productLine,
                            isGift: J,
                            applicationName: G.name,
                            hasAlreadyLinked: !en || er,
                        }),
                    }),
                    eE &&
                        en &&
                        !er &&
                        !J &&
                        (0, r.jsx)("div", {
                            className: k.lm,
                            children: (0, r.jsx)(u.wx6, {
                                type: "warning",
                                children: M.intl.string(M.t["6fBC//"]),
                            }),
                        }),
                ],
            }),
        ],
    });
}
