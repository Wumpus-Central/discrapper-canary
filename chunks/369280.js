n.d(t, {
    A: () => X,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
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
    b = n(937008),
    y = n(156312),
    O = n(566980),
    A = n(800471),
    v = n(104745),
    S = n(216641),
    I = n(351906),
    T = n(615405),
    C = n(97352),
    N = n(79387),
    R = n(927578),
    w = n(615396),
    P = n(543767),
    D = n(735164),
    x = n(787455),
    L = n(778307),
    j = n(218075),
    M = n(446929),
    k = n(692440),
    U = n(788868),
    G = n(88001),
    V = n(652215),
    F = n(519412),
    B = n(985018),
    H = n(314654),
    Y = n(982571);

function W(e, t, n) {
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

function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}

function z(e, t) {
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

function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function X(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: a,
            priceOptions: o,
            onPaymentSourceChange: m,
            onPaymentSourceAdd: g,
            planId: P,
            setHasAcceptedTerms: x,
            legalTermsNodeRef: k,
            hasLegalTermsFlash: U,
            onInvoiceError: H,
            planGroup: W,
            currencies: K,
            onCurrencyChange: z,
            hasOpenInvoice: q,
            purchaseState: X,
            handleClose: et,
        } = e,
        {
            selectedSkuId: en,
            defaultPlanId: er,
            isPremium: ei,
            startedPaymentFlowWithPaymentSourcesRef: ea,
            hasPaymentSources: es,
            enablePremiumBrandRefresh: eo,
            isPremiumGroupPurchase: el,
        } = (0, y.P5)(),
        { isGift: ec } = (0, b.Pv)(),
        eu = o.paymentSourceId,
        ed = (0, S.g)(a, eu),
        ef = (0, u.bG)([C.A], () => C.A.get(P));
    l()(null != ef, "Missing newPlan");
    let ep = (0, u.bG)([I.A], () => I.A.hidePersonalInformation),
        e_ = (0, E.A)(),
        eh = c.M.EEA_COUNTRIES.has(T.A.ipCountryCodeWithFallback),
        em = X === O.h.PURCHASING || X === O.h.COMPLETED,
        eg = (0, A.vT)({
            isTrial: !1,
            isGift: ec,
            selectedSkuId: en,
            startedPaymentFlowWithPaymentSources: ea.current,
        }),
        eE = null == n ? void 0 : n.isPausedAllowsResumeButNotUpdates,
        eb = i.useMemo(
            () =>
                (0, R.Tm)({
                    skuId: en,
                    isPremium: ei,
                    multiMonthPlans: [],
                    currentSubscription: n,
                    defaultPlanId: er,
                }),
            [en, n, er, ei],
        );
    t =
        q || eE
            ? B.intl.string(B.t.nyzoFb)
            : el
              ? B.intl.formatToPlainString(F.default["3m9DJK"], {
                    premiumGroupProductName: (0, G.DP)(),
                })
              : (0, R.ys)(P)
                ? (0, R.ff)(n, ef)
                : B.intl.formatToPlainString(B.t["sBpy9/"], {
                      planName: ef.name,
                  });
    let ey = null;
    null != n &&
        (ey = q
            ? (0, r.jsx)(Z, {
                  premiumSubscription: n,
                  onInvoiceError: H,
                  priceOptions: o,
                  preventFetch: !1,
              })
            : eE
              ? (0, r.jsx)(J, {
                    premiumSubscription: n,
                    onInvoiceError: H,
                    priceOptions: o,
                    preventFetch: em,
                })
              : (0, w.Ge)(n, P, W)
                ? (0, r.jsx)(Q, {
                      premiumSubscription: n,
                      newPlan: ef,
                      onInvoiceError: H,
                      planGroup: W,
                      priceOptions: o,
                      fractionalPremiumInfo: e_,
                      preventFetch: em,
                  })
                : (0, r.jsx)(ee, {
                      premiumSubscription: n,
                      newPlan: ef,
                      planGroup: W,
                      fractionalPremiumInfo: e_,
                      priceOptions: o,
                      preventFetch: em,
                  }));
    let eO = null == n ? void 0 : n.eligiblePaymentGateways,
        eA = null != eO && eO.length > 0 && (eu === N.B || null === ed) && es ? j.f.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        className: Y.Du,
        children: [
            (0, r.jsx)(j.j, {
                paymentRestrictionBannerType: eA,
            }),
            !eE &&
                eg &&
                !el &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(D.pK, {
                            negativeMarginBottom: !0,
                            negativeMarginTop: !0,
                        }),
                        (0, r.jsx)(v.P, {
                            planSkuId: ef.skuId,
                        }),
                        (0, r.jsx)(M.$p, {
                            planOptions: eb,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: P,
                            planGroup: W,
                            showTotal: !1,
                            handleClose: et,
                        }),
                        (0, r.jsx)(D.pK, {}),
                    ],
                }),
            el &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/medium",
                            children: B.intl.formatToPlainString(F.default["h1i+H8"], {
                                premiumGroupProductName: (0, G.DP)(),
                                cooldownMonths: G.wl,
                            }),
                        }),
                        (0, r.jsx)(D.pK, {}),
                    ],
                }),
            (0, r.jsx)(d.D0$, {
                label: t,
                children: ey,
            }),
            (0, r.jsx)("div", {
                className: Y.LC,
                children: (0, r.jsx)(_.Ay, {
                    label: B.intl.string(B.t["mmDvV+"]),
                    paymentSources: Object.values(a),
                    selectedPaymentSourceId: eu,
                    onChange: m,
                    onPaymentSourceAdd: g,
                    hidePersonalInformation: ep,
                    disabled: em,
                    paymentGatewayRestrictions: null == n ? void 0 : n.eligiblePaymentGateways,
                    className: s()({
                        [Y.E4]: eo,
                    }),
                }),
            }),
            (0, r.jsx)(f.f, {
                currencies: K,
                className: Y.p2,
                children: (0, r.jsx)(f.A, {
                    label: B.intl.string(B.t["/AAR02"]),
                    selectedCurrency: o.currency,
                    currencies: K,
                    onChange: z,
                    disabled: em,
                }),
            }),
            (0, r.jsx)(L.A, {
                isActive: U,
                ref: k,
                children:
                    null != n && (0, w.Ge)(n, P, W)
                        ? (0, r.jsx)($, {
                              premiumSubscription: n,
                              newPlan: ef,
                              onInvoiceError: H,
                              planGroup: W,
                              priceOptions: o,
                              preventFetch: em,
                              disabled: em,
                              isEEA: eh,
                              paymentSources: a,
                              setHasAcceptedTerms: x,
                          })
                        : (0, r.jsx)(h.A, {
                              onChange: x,
                              finePrint: (0, r.jsx)(p.A, {
                                  subscriptionPlan: ef,
                                  paymentSourceType: ed,
                                  basePrice: (0, R.y8)(ef.id, !1, ec, o),
                                  currentSubscription: n,
                                  planGroup: W,
                              }),
                              forceShow: !0,
                              showPricingLink: ef.currency !== V.Yri.USD,
                              showWithdrawalWaiver: eh,
                              disabled: em,
                              subscriptionPlan: ef,
                              currentSubscription: n,
                              planGroup: W,
                          }),
            }),
        ],
    });
}

function Z(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: a, preventFetch: s } = e,
        { setInvoicePreview: o } = (0, y.P5)(),
        [l, c] = (0, P.C8)({
            subscriptionId: t.id,
            preventFetch: s,
        });
    i.useEffect(() => {
        o(l);
    }, [o, l]),
        i.useEffect(() => {
            n(c);
        }, [n, c]);
    let u = (0, R.J$)(a.paymentSourceId);
    return null != l
        ? (0, r.jsxs)(D.Yx, {
              className: H.__invalid_invoice,
              children: [
                  (0, r.jsx)(k._J, {
                      invoice: l,
                      isPrepaidPaymentSource: u,
                  }),
                  (0, r.jsx)(k.m0, {
                      premiumSubscription: t,
                      renewalInvoice: l,
                      isUpdate: !0,
                      isPrepaidPaymentSource: u,
                  }),
              ],
          })
        : (0, r.jsx)(d.y$y, {});
}

function Q(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            onInvoiceError: o,
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
        } = (0, y.P5)(),
        { isGift: E } = (0, b.Pv)(),
        { analyticsLocations: O } = (0, g.Ay)(),
        v = (0, R.Pg)(n, a.id, 1, new Set(l)),
        {
            proratedInvoicePreview: S,
            proratedInvoiceError: I,
            renewalInvoicePreview: T,
            renewalInvoiceError: C,
        } = et({
            premiumSubscription: n,
            newItems: v,
            priceOptions: c,
            preventFetch: f,
            analyticsLocations: O,
        });
    i.useEffect(() => {
        h(S);
    }, [h, S]);
    let N = null != I ? I : C;
    if (
        (i.useEffect(() => {
            o(N);
        }, [o, N]),
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
        P = (0, A.UB)(w, S, a);
    if (
        (null !== u && null !== S && (t = (0, R._e)(S.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)),
        null == S || null == T || P)
    )
        return (0, r.jsx)(d.y$y, {
            className: Y.__invalid_spinner,
        });
    let x = (0, R.J$)(c.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(k.wP, {
                proratedInvoice: S,
                renewalInvoice: T,
                overrideRenewalDate: t,
            }),
            (0, r.jsxs)(D.Yx, {
                className: s()(Y.SU, m),
                children: [
                    (0, r.jsx)(D.Xd, {
                        children: B.intl.string(B.t["2eh+Co"]),
                    }),
                    (0, r.jsx)(k.mT, {
                        invoice: S,
                        newPlan: a,
                        isPrepaidPaymentSource: x,
                    }),
                    (0, r.jsx)(k.m0, {
                        premiumSubscription: n,
                        proratedInvoice: S,
                        renewalInvoice: T,
                        overrideRenewalDate: t,
                        isUpdate: !0,
                        isPrepaidPaymentSource: x,
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
            onInvoiceError: s,
            planGroup: o,
            priceOptions: l,
            preventFetch: c,
            disabled: u,
            isEEA: f,
            paymentSources: _,
            setHasAcceptedTerms: m,
        } = e,
        { analyticsLocations: E } = (0, g.Ay)(),
        b = (0, R.Pg)(n, a.id, 1, new Set(o)),
        {
            proratedInvoicePreview: y,
            proratedInvoiceError: O,
            renewalInvoicePreview: A,
            renewalInvoiceError: v,
        } = et({
            premiumSubscription: n,
            newItems: b,
            priceOptions: l,
            preventFetch: c,
            analyticsLocations: E,
        }),
        I = (0, S.g)(_, l.paymentSourceId),
        T = null != v ? v : O;
    return (i.useEffect(() => {
        s(T);
    }, [s, T]),
    null != T)
        ? (0, r.jsx)(d.wx6, {
              type: "critical",
              children: T.message,
          })
        : (null != A &&
                (t = {
                    amount: A.subtotal,
                    currency: A.currency,
                    tax: A.tax,
                    taxInclusive: A.taxInclusive,
                }),
            null == t)
          ? null
          : (0, r.jsx)(h.A, {
                onChange: m,
                finePrint: (0, r.jsx)(p.A, {
                    subscriptionPlan: a,
                    paymentSourceType: I,
                    basePrice: t,
                    proratedAmount: null != y ? y.total : void 0,
                    currentSubscription: n,
                    planGroup: o,
                }),
                forceShow: !0,
                showPricingLink: a.currency !== V.Yri.USD,
                showWithdrawalWaiver: f,
                disabled: u,
                subscriptionPlan: a,
                currentSubscription: n,
                planGroup: o,
            });
}

function J(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: a, onInvoiceError: o } = e,
        { setInvoicePreview: l, premiumBrandRefreshBackgroundClassName: c } = (0, y.P5)(),
        { analyticsLocations: u } = (0, g.Ay)(),
        [f, p] = (0, P.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: u,
            analyticsLocation: m.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [_, h] = (0, P.Kq)({
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
            o(E);
        }, [o, E]),
        null != E)
    )
        return (0, r.jsx)(d.wx6, {
            type: "critical",
            children: E.message,
        });
    if (null == f || null == _)
        return (0, r.jsx)(d.y$y, {
            className: Y.__invalid_spinner,
        });
    let b = (0, R.J$)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: H.o,
                children: B.intl.string(B.t.spIYou),
            }),
            (0, r.jsxs)(D.Yx, {
                className: s()(Y.SU, c),
                children: [
                    (0, r.jsx)(D.Xd, {
                        children: B.intl.string(B.t["2eh+Co"]),
                    }),
                    (0, r.jsx)(k._J, {
                        invoice: f,
                        isPrepaidPaymentSource: b,
                    }),
                    (0, r.jsx)(k.m0, {
                        premiumSubscription: t,
                        renewalInvoice: _,
                        isUpdate: !0,
                        isPrepaidPaymentSource: b,
                    }),
                ],
            }),
        ],
    });
}

function ee(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            planGroup: o,
            fractionalPremiumInfo: l,
            priceOptions: c,
            preventFetch: u,
        } = e,
        { setInvoicePreview: f, premiumBrandRefreshBackgroundClassName: p } = (0, y.P5)(),
        { analyticsLocations: _ } = (0, g.Ay)(),
        [h, m] = (0, P.Kq)({
            subscriptionId: n.id,
            items: (0, R.Pg)(n, a.id, 1, new Set(o)),
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
        b = h.subscriptionPeriodStart;
    return (
        l.fractionalState === U.xc.FP_SUB_PAUSED && (b = l.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: Y.G3,
            children: [
                (0, r.jsx)("div", {
                    className: H.o,
                    children: B.intl.format(B.t["+y0Tjy"], {
                        renewalDate: b,
                    }),
                }),
                (0, r.jsxs)(D.Yx, {
                    className: s()(Y.SU, p),
                    children: [
                        (0, r.jsx)(D.Xd, {
                            children: B.intl.string(B.t.iqhIp4),
                        }),
                        (0, r.jsx)(D.oR, {
                            label: t,
                            value: (0, R.jh)(a, c, !0),
                        }),
                        (0, r.jsx)(x.A, {
                            invoice: h,
                        }),
                        (0, r.jsx)(D.pK, {}),
                        (0, r.jsx)(k.m0, {
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
let et = (e) => {
    let { premiumSubscription: t, newItems: n, priceOptions: r, preventFetch: i, analyticsLocations: a } = e,
        s = {
            subscriptionId: t.id,
            items: n,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation: m.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
        },
        [o, l] = (0, P.Kq)(
            q(K({}, s), {
                renewal: !1,
                applyEntitlements: !0,
            }),
        ),
        [c, u] = (0, P.Kq)(
            q(K({}, s), {
                renewal: !0,
            }),
        );
    return {
        proratedInvoicePreview: o,
        proratedInvoiceError: l,
        renewalInvoicePreview: c,
        renewalInvoiceError: u,
    };
};
