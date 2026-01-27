n.d(t, {
    A: () => G,
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
    v = n(351906),
    A = n(615405),
    I = n(295405),
    S = n(79387),
    T = n(147964),
    C = n(603349),
    N = n(45938),
    w = n(937008),
    R = n(156312),
    P = n(566980),
    D = n(216641),
    L = n(938136),
    x = n(319820),
    M = n(652215),
    j = n(985018),
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
            purchaseState: F,
            paymentSources: V,
            paymentSourceId: B,
            setHasAcceptedTerms: H,
            skusById: Y,
            skuPricePreviewsById: W,
            selectedSkuId: K,
            isEmbeddedIAP: z,
            purchaseType: q,
            purchasePreviewError: Z,
            devShelfFetchState: Q,
            setPurchasePreviewError: X,
            hasPaymentSources: J,
        } = (0, R.P5)(),
        { isGift: $, giftRecipient: ee } = (0, w.Pv)(),
        et = $ && (0, N.Ik)(ee),
        { fetched: en, hasAlreadyLinked: er } = (0, g.RD)(G),
        { defaultPaymentSourceId: ei, hasFetchedPaymentSources: ea } = (0, c.cf)([I.A], () => ({
            defaultPaymentSourceId: I.A.defaultPaymentSourceId,
            hasFetchedPaymentSources: I.A.hasFetchedPaymentSources,
        }));
    o()(null != K, "Expected selectedSkuId");
    let eo = Y[K],
        es = null == eo ? void 0 : eo.eligiblePaymentGateways,
        el = W[K],
        ec = null != B ? B : S.B,
        eu = null != el ? el[ec] : null;
    o()(null != eo, "SKU must exist and be fetched."), o()(null != G, "Application must exist.");
    let ed = (0, c.bG)([m.A, T.A], () => T.A.inTestModeForApplication(G.id) || m.A.inDevModeForApplication(G.id), [
            G.id,
        ]),
        ef = (0, c.bG)([v.A], () => v.A.enabled),
        ep = s.M.EEA_COUNTRIES.has(A.A.ipCountryCodeWithFallback),
        e_ = F === P.h.PURCHASING || F === P.h.COMPLETED,
        eh = (0, D.W)(V, B),
        em = null != eh ? eh.type : null;
    i.useEffect(() => {
        ea &&
            B === ei &&
            ei !== S.B &&
            null == eu &&
            (0, d.QX)(eo.applicationId, eo.id, ei, {
                isGift: $,
            })
                .then(() => {
                    X(null);
                })
                .catch((e) => {
                    X(e);
                });
    }, [ei, ea, B, eo.applicationId, eo.id, eu, X, $]);
    let eg = null != es && es.length > 0 && (B === S.B || null === em) && J ? b.f.SELECT_PAYMENT_METHOD : void 0,
        eE = eo.productLine === M.EZt.SOCIAL_LAYER_GAME_ITEM,
        ey = et && !eE;
    return (0, r.jsxs)("div", {
        className: k.Du,
        children: [
            (0, r.jsx)(b.j, {
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
                          children: j.intl.string(j.t.OvMyMd),
                      },
                      "TEST_MODE",
                  )
                : null,
            (0, l.Lt)(G.flags, M.gfo.EMBEDDED) && Q === m.$.ERROR
                ? (0, r.jsx)(
                      p.A,
                      {
                          icon: (0, u.kHD)(C.A),
                          iconSize: p.A.Sizes.SMALL,
                          color: p.A.Colors.ERROR,
                          className: k.QK,
                          children: j.intl.string(j.t.tAmECt),
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(U, {
                application: G,
                sku: eo,
                isEmbeddedIAP: z,
            }),
            ey &&
                (0, r.jsx)(L.A, {
                    sku: eo,
                }),
            null != ee
                ? (0, r.jsx)(O.Z, {
                      giftRecipient: ee,
                  })
                : null,
            (0, r.jsx)(u.D0$, {
                label: $ ? j.intl.string(j.t.PEjaCx) : j.intl.string(j.t.sail9P),
                children:
                    null != eu
                        ? (0, r.jsx)(x.h, {
                              sku: eo,
                              skuPricePreview: eu,
                              application: G,
                          })
                        : null == Z
                          ? (0, r.jsx)(u.y$y, {
                                type: u.y$y.Type.WANDERING_CUBES,
                                className: k.fx,
                            })
                          : (0, r.jsx)(x.U, {
                                sku: eo,
                                value: "",
                            }),
            }),
            (0, r.jsx)(_.A, {
                label: j.intl.string(j.t["mmDvV+"]),
                paymentSources: Object.values(V),
                selectedPaymentSourceId: B,
                onChange: a,
                onPaymentSourceAdd: E,
                hidePersonalInformation: ef,
                paymentGatewayRestrictions: es,
            }),
            (0, r.jsxs)(y.A, {
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
                        isGift: $,
                        finePrint: (0, r.jsx)(f.A, {
                            paymentSourceType: em,
                            isEmbeddedIAP: z,
                            purchaseType: q,
                            productLine: eo.productLine,
                            isGift: $,
                            applicationName: G.name,
                            hasAlreadyLinked: !en || er,
                        }),
                    }),
                    eE &&
                        en &&
                        !er &&
                        !$ &&
                        (0, r.jsx)("div", {
                            className: k.lm,
                            children: (0, r.jsx)(u.wx6, {
                                type: "warning",
                                children: j.intl.string(j.t["6fBC//"]),
                            }),
                        }),
                ],
            }),
        ],
    });
}
