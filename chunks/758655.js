n.d(t, { A: () => N }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(311907),
    o = n(397927),
    c = n(304072),
    d = n(494230),
    u = n(369280),
    m = n(163437),
    p = n(71393),
    x = n(156312),
    f = n(166532),
    g = n(566980),
    h = n(69494),
    b = n(312649),
    j = n(534479),
    A = n(482132),
    S = n(921925),
    v = n(985018),
    C = n(820970);
function N(e) {
    let {
            backButtonEligible: t,
            prevStep: n,
            handleStepChange: r,
            trialFooterMessageOverride: N,
            reviewWarningMessage: T,
            planGroup: _,
            openInvoiceId: E,
            analyticsData: P,
            analyticsLocation: y,
            handleClose: k,
        } = e,
        {
            activeSubscription: I,
            application: R,
            setUpdatedSubscription: w,
            contextMetadata: D,
            currencies: B,
            paymentSources: F,
            priceOptions: U,
            purchaseError: M,
            selectedPlan: O,
            selectedSku: G,
            setCurrency: H,
            setPaymentSourceId: L,
            setPurchaseState: Y,
            purchaseState: W,
            subscriptionMetadataRequest: q,
            setHasAcceptedTerms: V,
        } = (0, x.P5)();
    a()(null != O, "Expected plan to be selected");
    let Z = l.useRef(null),
        [Q, X] = (0, c.A)(!1, 500),
        $ = q?.guild_id,
        z = (0, s.bG)([p.A], () => p.A.getGuild($), [$]),
        [K, J] = l.useState(null),
        ee = (0, m.bg)(G?.flags ?? 0);
    l.useEffect(() => {
        null != M && null != Z.current && Z.current.scrollIntoView({ behavior: "smooth" });
    }, [M]);
    let et = l.useCallback(
            (e) => {
                w(e), r(f.pn.CONFIRM);
            },
            [r, w],
        ),
        en = l.useRef(null);
    if (W === g.h.PURCHASING) return (0, i.jsx)(j.A, {});
    let ei = () => {
        r(f.pn.ADD_PAYMENT_STEPS);
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.A, { className: C.jD }),
            (0, i.jsxs)(A.dZ, {
                children: [
                    (0, i.jsx)(S.A, {}),
                    ee &&
                        (0, i.jsxs)("div", {
                            className: C.Uq,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: "eyebrow",
                                    color: "text-default",
                                    children: v.intl.string(v.t.nf5LOU),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    color: "interactive-text-default",
                                    children: v.intl.format(v.t.y4n0GS, { applicationName: R?.name }),
                                }),
                            ],
                        }),
                    !ee &&
                        (0, i.jsx)("div", {
                            className: C.Vw,
                            children: (0, i.jsx)(o.D0$, {
                                label: v.intl.string(v.t["5qyruI"]),
                                children: (0, i.jsxs)("div", {
                                    className: C.YS,
                                    children: [
                                        (0, i.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            children: v.intl.string(v.t.dBih7e),
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            lineClamp: 1,
                                            children: z?.name ?? v.intl.string(v.t.dtwqPR),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    null == I
                        ? (0, i.jsx)(d.A, {
                              selectedPlanId: O.id,
                              planGroup: _,
                              paymentSources: F,
                              onPaymentSourceChange: (e) => L(null != e ? e.id : null),
                              priceOptions: U,
                              currencies: B,
                              onCurrencyChange: (e) => H(e),
                              handlePaymentSourceAdd: () => r(f.pn.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: V,
                              legalTermsNodeRef: en,
                              hasLegalTermsFlash: Q,
                              trialFooterMessageOverride: N,
                              reviewWarningMessage: T,
                              metadata: ee ? void 0 : q,
                              purchaseState: W,
                              hideSubscriptionDetails: !0,
                              handleClose: k,
                          })
                        : (0, i.jsx)(u.A, {
                              premiumSubscription: I,
                              paymentSources: F,
                              priceOptions: U,
                              onPaymentSourceChange: (e) => L(null != e ? e.id : null),
                              onPaymentSourceAdd: ei,
                              planId: O.id,
                              setHasAcceptedTerms: V,
                              legalTermsNodeRef: en,
                              hasLegalTermsFlash: Q,
                              onInvoiceError: (e) => {
                                  J(e);
                              },
                              planGroup: _,
                              currencies: B,
                              onCurrencyChange: (e) => H(e),
                              hasOpenInvoice: null != E,
                              purchaseState: W,
                              handleClose: k,
                          }),
                ],
            }),
            (0, i.jsx)(A.UX, {
                children: (0, i.jsx)(b.A, {
                    premiumSubscription: I ?? null,
                    setPurchaseState: Y,
                    onBack: () => null != n && r(n),
                    onNext: et,
                    legalTermsNodeRef: en,
                    flashLegalTerms: () => X(!0),
                    analyticsLocation: y,
                    baseAnalyticsData: P,
                    flowStartTime: D.startTime,
                    planGroup: _,
                    openInvoiceId: E,
                    metadata: ee ? void 0 : q,
                    backButtonEligible: t,
                    invoiceError: K,
                    disablePurchase: q?.guild_id == null && !ee,
                    onPaymentSourceAdd: ei,
                }),
            }),
        ],
    });
}
