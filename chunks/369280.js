n.d(t, {
    A: () => Q,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(284009),
    l = n.n(s),
    c = n(997101),
    u = n(311907),
    d = n(397927),
    f = n(821189),
    p = n(821891),
    _ = n(637141),
    h = n(953689),
    m = n(793574),
    g = n(688810),
    E = n(531260),
    y = n(937008),
    b = n(156312),
    O = n(566980),
    v = n(210507),
    A = n(800471),
    I = n(104745),
    S = n(216641),
    T = n(351906),
    C = n(615405),
    N = n(97352),
    w = n(79387),
    R = n(927578),
    P = n(615396),
    D = n(543767),
    L = n(735164),
    x = n(787455),
    M = n(778307),
    j = n(218075),
    k = n(446929),
    U = n(692440),
    G = n(788868),
    F = n(88001),
    V = n(652215),
    B = n(519412),
    H = n(985018),
    Y = n(314654),
    W = n(982571);

function K(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                K(e, t, n[t]);
            });
    }
    return e;
}

function q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function Q(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: a,
            priceOptions: s,
            onPaymentSourceChange: m,
            onPaymentSourceAdd: g,
            planId: D,
            setHasAcceptedTerms: x,
            legalTermsNodeRef: U,
            hasLegalTermsFlash: G,
            onInvoiceError: Y,
            planGroup: K,
            currencies: z,
            onCurrencyChange: q,
            hasOpenInvoice: Z,
            purchaseState: Q,
            handleClose: en,
        } = e,
        {
            selectedSkuId: er,
            defaultPlanId: ei,
            isPremium: ea,
            startedPaymentFlowWithPaymentSourcesRef: eo,
            hasPaymentSources: es,
            enablePremiumBrandRefresh: el,
            isPremiumGroupPurchase: ec,
        } = (0, b.P5)(),
        { isGift: eu } = (0, y.Pv)(),
        ed = s.paymentSourceId,
        ef = (0, S.g)(a, ed),
        ep = (0, u.bG)([N.A], () => N.A.get(D));
    l()(null != ep, "Missing newPlan");
    let e_ = (0, u.bG)([T.A], () => T.A.hidePersonalInformation),
        eh = (0, E.A)(),
        em = c.M.EEA_COUNTRIES.has(C.A.ipCountryCodeWithFallback),
        eg = Q === O.h.PURCHASING || Q === O.h.COMPLETED,
        eE = (0, A.vT)({
            isTrial: !1,
            isGift: eu,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: eo.current,
        }),
        ey = null == n ? void 0 : n.isPausedAllowsResumeButNotUpdates,
        eb = i.useMemo(
            () =>
                (0, R.Tm)({
                    skuId: er,
                    isPremium: ea,
                    multiMonthPlans: [],
                    currentSubscription: n,
                    defaultPlanId: ei,
                }),
            [er, n, ei, ea],
        );
    t =
        Z || ey
            ? H.intl.string(H.t.nyzoFb)
            : ec
              ? H.intl.formatToPlainString(B.default["3m9DJK"], {
                    premiumGroupProductName: (0, F.DP)(),
                })
              : (0, R.ys)(D)
                ? (0, R.ff)(n, ep)
                : H.intl.formatToPlainString(H.t["sBpy9/"], {
                      planName: ep.name,
                  });
    let eO = null;
    null != n &&
        (eO = Z
            ? (0, r.jsx)(X, {
                  premiumSubscription: n,
                  onInvoiceError: Y,
                  priceOptions: s,
                  preventFetch: !1,
              })
            : ey
              ? (0, r.jsx)(ee, {
                    premiumSubscription: n,
                    onInvoiceError: Y,
                    priceOptions: s,
                    preventFetch: eg,
                })
              : (0, P.Ge)(n, D, K)
                ? (0, r.jsx)(J, {
                      premiumSubscription: n,
                      newPlan: ep,
                      onInvoiceError: Y,
                      planGroup: K,
                      priceOptions: s,
                      fractionalPremiumInfo: eh,
                      preventFetch: eg,
                  })
                : (0, r.jsx)(et, {
                      premiumSubscription: n,
                      newPlan: ep,
                      planGroup: K,
                      fractionalPremiumInfo: eh,
                      priceOptions: s,
                      preventFetch: eg,
                  }));
    let ev = null == n ? void 0 : n.eligiblePaymentGateways,
        eA = null != ev && ev.length > 0 && (ed === w.B || null === ef) && es ? j.f.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        className: W.Du,
        children: [
            (0, r.jsx)(j.j, {
                paymentRestrictionBannerType: eA,
            }),
            !ey &&
                eE &&
                !ec &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(L.pK, {
                            negativeMarginBottom: !0,
                            negativeMarginTop: !0,
                        }),
                        (0, r.jsx)(I.P, {
                            planSkuId: ep.skuId,
                        }),
                        (0, r.jsx)(k.$p, {
                            planOptions: eb,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: D,
                            planGroup: K,
                            showTotal: !1,
                            handleClose: en,
                        }),
                        (0, r.jsx)(L.pK, {}),
                    ],
                }),
            ec &&
                (0, r.jsx)("div", {
                    className: W.Ni,
                    children: (0, r.jsx)(d.wx6, {
                        type: "info",
                        children: (0, r.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            children: (0, v.Nn)(),
                        }),
                    }),
                }),
            (0, r.jsx)(d.D0$, {
                label: t,
                children: eO,
            }),
            (0, r.jsx)("div", {
                className: W.LC,
                children: (0, r.jsx)(_.A, {
                    label: H.intl.string(H.t["mmDvV+"]),
                    paymentSources: Object.values(a),
                    selectedPaymentSourceId: ed,
                    onChange: m,
                    onPaymentSourceAdd: g,
                    hidePersonalInformation: e_,
                    disabled: eg,
                    paymentGatewayRestrictions: null == n ? void 0 : n.eligiblePaymentGateways,
                    className: o()({
                        [W.E4]: el,
                    }),
                }),
            }),
            (0, r.jsx)(f.f, {
                currencies: z,
                className: W.p2,
                children: (0, r.jsx)(f.A, {
                    label: H.intl.string(H.t["/AAR02"]),
                    selectedCurrency: s.currency,
                    currencies: z,
                    onChange: q,
                    disabled: eg,
                }),
            }),
            (0, r.jsx)(M.A, {
                isActive: G,
                ref: U,
                children:
                    null != n && (0, P.Ge)(n, D, K)
                        ? (0, r.jsx)($, {
                              premiumSubscription: n,
                              newPlan: ep,
                              onInvoiceError: Y,
                              planGroup: K,
                              priceOptions: s,
                              preventFetch: eg,
                              disabled: eg,
                              isEEA: em,
                              paymentSources: a,
                              setHasAcceptedTerms: x,
                          })
                        : (0, r.jsx)(h.A, {
                              onChange: x,
                              finePrint: (0, r.jsx)(p.A, {
                                  subscriptionPlan: ep,
                                  paymentSourceType: ef,
                                  basePrice: (0, R.y8)(ep.id, !1, eu, s),
                                  currentSubscription: n,
                                  planGroup: K,
                              }),
                              forceShow: !0,
                              showPricingLink: ep.currency !== V.Yri.USD,
                              showWithdrawalWaiver: em,
                              disabled: eg,
                              subscriptionPlan: ep,
                              currentSubscription: n,
                              planGroup: K,
                          }),
            }),
        ],
    });
}

function X(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: a, preventFetch: o } = e,
        { setInvoicePreview: s } = (0, b.P5)(),
        [l, c] = (0, D.C8)({
            subscriptionId: t.id,
            preventFetch: o,
        });
    i.useEffect(() => {
        s(l);
    }, [s, l]),
        i.useEffect(() => {
            n(c);
        }, [n, c]);
    let u = (0, R.J$)(a.paymentSourceId);
    return null != l
        ? (0, r.jsxs)(L.Yx, {
              className: Y.__invalid_invoice,
              children: [
                  (0, r.jsx)(U._J, {
                      invoice: l,
                      isPrepaidPaymentSource: u,
                  }),
                  (0, r.jsx)(U.m0, {
                      premiumSubscription: t,
                      renewalInvoice: l,
                      isUpdate: !0,
                      isPrepaidPaymentSource: u,
                  }),
              ],
          })
        : (0, r.jsx)(d.y$y, {});
}

function J(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            onInvoiceError: s,
            planGroup: l,
            priceOptions: c,
            fractionalPremiumInfo: u,
            preventFetch: f,
        } = e,
        {
            selectedSkuId: p,
            startedPaymentFlowWithPaymentSourcesRef: _,
            setInvoicePreview: h,
            premiumBrandRefreshBackgroundClassName: m,
        } = (0, b.P5)(),
        { isGift: E } = (0, y.Pv)(),
        { analyticsLocations: O } = (0, g.Ay)(),
        v = (0, R.Pg)(n, a.id, 1, new Set(l)),
        {
            proratedInvoicePreview: I,
            proratedInvoiceError: S,
            renewalInvoicePreview: T,
            renewalInvoiceError: C,
        } = en({
            premiumSubscription: n,
            newItems: v,
            priceOptions: c,
            preventFetch: f,
            analyticsLocations: O,
        });
    i.useEffect(() => {
        h(I);
    }, [h, I]);
    let N = null != S ? S : C;
    if (
        (i.useEffect(() => {
            s(N);
        }, [s, N]),
        null != N)
    )
        return (0, r.jsx)(d.wx6, {
            type: "critical",
            children: N.message,
        });
    let w = (0, A.vT)({
            isTrial: !1,
            isGift: E,
            selectedSkuId: p,
            startedPaymentFlowWithPaymentSources: _.current,
        }),
        P = (0, A.UB)(w, I, a);
    if (
        (null !== u && null !== I && (t = (0, R._e)(I.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)),
        null == I || null == T || P)
    )
        return (0, r.jsx)(d.y$y, {
            className: W.__invalid_spinner,
        });
    let D = (0, R.J$)(c.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(U.wP, {
                proratedInvoice: I,
                renewalInvoice: T,
                overrideRenewalDate: t,
            }),
            (0, r.jsxs)(L.Yx, {
                className: o()(W.SU, m),
                children: [
                    (0, r.jsx)(L.Xd, {
                        children: H.intl.string(H.t["2eh+Co"]),
                    }),
                    (0, r.jsx)(U.mT, {
                        invoice: I,
                        newPlan: a,
                        isPrepaidPaymentSource: D,
                    }),
                    (0, r.jsx)(U.m0, {
                        premiumSubscription: n,
                        proratedInvoice: I,
                        renewalInvoice: T,
                        overrideRenewalDate: t,
                        isUpdate: !0,
                        isPrepaidPaymentSource: D,
                    }),
                ],
            }),
        ],
    });
}

function $(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            onInvoiceError: o,
            planGroup: s,
            priceOptions: l,
            preventFetch: c,
            disabled: u,
            isEEA: f,
            paymentSources: _,
            setHasAcceptedTerms: m,
        } = e,
        { analyticsLocations: E } = (0, g.Ay)(),
        y = (0, R.Pg)(n, a.id, 1, new Set(s)),
        {
            proratedInvoicePreview: b,
            proratedInvoiceError: O,
            renewalInvoicePreview: v,
            renewalInvoiceError: A,
        } = en({
            premiumSubscription: n,
            newItems: y,
            priceOptions: l,
            preventFetch: c,
            analyticsLocations: E,
        }),
        I = (0, S.g)(_, l.paymentSourceId),
        T = null != A ? A : O;
    return (i.useEffect(() => {
        o(T);
    }, [o, T]),
    null != T)
        ? (0, r.jsx)(d.wx6, {
              type: "critical",
              children: T.message,
          })
        : (null != v &&
                (t = {
                    amount: v.subtotal,
                    currency: v.currency,
                    tax: v.tax,
                    taxInclusive: v.taxInclusive,
                }),
            null == t)
          ? null
          : (0, r.jsx)(h.A, {
                onChange: m,
                finePrint: (0, r.jsx)(p.A, {
                    subscriptionPlan: a,
                    paymentSourceType: I,
                    basePrice: t,
                    proratedAmount: null != b ? b.total : void 0,
                    currentSubscription: n,
                    planGroup: s,
                }),
                forceShow: !0,
                showPricingLink: a.currency !== V.Yri.USD,
                showWithdrawalWaiver: f,
                disabled: u,
                subscriptionPlan: a,
                currentSubscription: n,
                planGroup: s,
            });
}

function ee(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: a, onInvoiceError: s } = e,
        { setInvoicePreview: l, premiumBrandRefreshBackgroundClassName: c } = (0, b.P5)(),
        { analyticsLocations: u } = (0, g.Ay)(),
        [f, p] = (0, D.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: u,
            analyticsLocation: m.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [_, h] = (0, D.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: u,
            analyticsLocation: m.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    i.useEffect(() => {
        l(f);
    }, [l, f]);
    let E = null != p ? p : h;
    if (
        (i.useEffect(() => {
            s(E);
        }, [s, E]),
        null != E)
    )
        return (0, r.jsx)(d.wx6, {
            type: "critical",
            children: E.message,
        });
    if (null == f || null == _)
        return (0, r.jsx)(d.y$y, {
            className: W.__invalid_spinner,
        });
    let y = (0, R.J$)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: Y.o,
                children: H.intl.string(H.t.spIYou),
            }),
            (0, r.jsxs)(L.Yx, {
                className: o()(W.SU, c),
                children: [
                    (0, r.jsx)(L.Xd, {
                        children: H.intl.string(H.t["2eh+Co"]),
                    }),
                    (0, r.jsx)(U._J, {
                        invoice: f,
                        isPrepaidPaymentSource: y,
                    }),
                    (0, r.jsx)(U.m0, {
                        premiumSubscription: t,
                        renewalInvoice: _,
                        isUpdate: !0,
                        isPrepaidPaymentSource: y,
                    }),
                ],
            }),
        ],
    });
}

function et(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            planGroup: s,
            fractionalPremiumInfo: l,
            priceOptions: c,
            preventFetch: u,
        } = e,
        { setInvoicePreview: f, premiumBrandRefreshBackgroundClassName: p } = (0, b.P5)(),
        { analyticsLocations: _ } = (0, g.Ay)(),
        [h, m] = (0, D.Kq)({
            subscriptionId: n.id,
            items: (0, R.Pg)(n, a.id, 1, new Set(s)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: c.paymentSourceId,
            currency: c.currency,
            preventFetch: u,
            analyticsLocations: _,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    if (
        (i.useEffect(() => {
            f(h);
        }, [f, h]),
        null != m)
    )
        return (0, r.jsx)(d.wx6, {
            type: "critical",
            children: m.message,
        });
    if (null == h)
        return (0, r.jsx)("div", {
            children: (0, r.jsx)(d.y$y, {}),
        });
    t = n.type === V.rzx.PREMIUM ? (0, R.Mn)(a.id) : a.name;
    let E = (0, R.J$)(c.paymentSourceId),
        y = h.subscriptionPeriodStart;
    return (
        l.fractionalState === G.xc.FP_SUB_PAUSED && (y = l.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: W.G3,
            children: [
                (0, r.jsx)("div", {
                    className: Y.o,
                    children: H.intl.format(H.t["+y0Tjy"], {
                        renewalDate: y,
                    }),
                }),
                (0, r.jsxs)(L.Yx, {
                    className: o()(W.SU, p),
                    children: [
                        (0, r.jsx)(L.Xd, {
                            children: H.intl.string(H.t.iqhIp4),
                        }),
                        (0, r.jsx)(L.oR, {
                            label: t,
                            value: (0, R.jh)(a, c, !0),
                        }),
                        (0, r.jsx)(x.A, {
                            invoice: h,
                        }),
                        (0, r.jsx)(L.pK, {}),
                        (0, r.jsx)(U.m0, {
                            premiumSubscription: n,
                            renewalInvoice: h,
                            isUpdate: !0,
                            isPrepaidPaymentSource: E,
                        }),
                    ],
                }),
            ],
        })
    );
}
let en = (e) => {
    let { premiumSubscription: t, newItems: n, priceOptions: r, preventFetch: i, analyticsLocations: a } = e,
        o = {
            subscriptionId: t.id,
            items: n,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation: m.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
        },
        [s, l] = (0, D.Kq)(
            Z(z({}, o), {
                renewal: !1,
                applyEntitlements: !0,
            }),
        ),
        [c, u] = (0, D.Kq)(
            Z(z({}, o), {
                renewal: !0,
            }),
        );
    return {
        proratedInvoicePreview: s,
        proratedInvoiceError: l,
        renewalInvoicePreview: c,
        renewalInvoiceError: u,
    };
};
