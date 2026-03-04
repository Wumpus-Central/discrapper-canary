n.d(t, { A: () => N }), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(304072),
    d = n(494230),
    u = n(369280),
    m = n(163437),
    p = n(71393),
    f = n(156312),
    x = n(166532),
    g = n(566980),
    h = n(69494),
    b = n(312649),
    A = n(534479),
    j = n(482132),
    v = n(921925),
    S = n(985018),
    C = n(820970);
function N(e) {
    let {
            backButtonEligible: t,
            prevStep: n,
            handleStepChange: l,
            trialFooterMessageOverride: N,
            reviewWarningMessage: _,
            planGroup: y,
            openInvoiceId: E,
            analyticsData: T,
            analyticsLocation: P,
            handleClose: I,
        } = e,
        {
            activeSubscription: k,
            application: w,
            setUpdatedSubscription: R,
            contextMetadata: D,
            currencies: B,
            paymentSources: F,
            priceOptions: H,
            purchaseError: L,
            selectedPlan: O,
            selectedSku: U,
            setCurrency: G,
            setPaymentSourceId: M,
            setPurchaseState: Y,
            purchaseState: W,
            subscriptionMetadataRequest: q,
            setHasAcceptedTerms: Q,
        } = (0, f.P5)();
    a()(null != O, "Expected plan to be selected");
    let V = r.useRef(null),
        [Z, X] = (0, c.A)(!1, 500),
        $ = q?.guild_id,
        z = (0, s.bG)([p.A], () => p.A.getGuild($), [$]),
        [K, J] = r.useState(null),
        ee = (0, m.bg)(U?.flags ?? 0);
    r.useEffect(() => {
        null != L && null != V.current && V.current.scrollIntoView({ behavior: "smooth" });
    }, [L]);
    let et = r.useCallback(
            (e) => {
                R(e), l(x.pn.CONFIRM);
            },
            [l, R],
        ),
        en = r.useRef(null);
    if (W === g.h.PURCHASING) return (0, i.jsx)(A.A, {});
    let ei = () => {
        l(x.pn.ADD_PAYMENT_STEPS);
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.A, { className: C.jD }),
            (0, i.jsxs)(j.dZ, {
                children: [
                    (0, i.jsx)(v.A, {}),
                    ee &&
                        (0, i.jsxs)("div", {
                            className: C.Uq,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: "eyebrow",
                                    color: "text-default",
                                    children: S.intl.string(S.t.nf5LOU),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    color: "interactive-text-default",
                                    children: S.intl.format(S.t.y4n0GS, { applicationName: w?.name }),
                                }),
                            ],
                        }),
                    !ee &&
                        (0, i.jsx)("div", {
                            className: C.Vw,
                            children: (0, i.jsx)(o.D0$, {
                                label: S.intl.string(S.t["5qyruI"]),
                                children: (0, i.jsxs)("div", {
                                    className: C.YS,
                                    children: [
                                        (0, i.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            children: S.intl.string(S.t.dBih7e),
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            lineClamp: 1,
                                            children: z?.name ?? S.intl.string(S.t.dtwqPR),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    null == k
                        ? (0, i.jsx)(d.A, {
                              selectedPlanId: O.id,
                              planGroup: y,
                              paymentSources: F,
                              onPaymentSourceChange: (e) => M(null != e ? e.id : null),
                              priceOptions: H,
                              currencies: B,
                              onCurrencyChange: (e) => G(e),
                              handlePaymentSourceAdd: () => l(x.pn.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: Q,
                              legalTermsNodeRef: en,
                              hasLegalTermsFlash: Z,
                              trialFooterMessageOverride: N,
                              reviewWarningMessage: _,
                              metadata: ee ? void 0 : q,
                              purchaseState: W,
                              hideSubscriptionDetails: !0,
                              handleClose: I,
                          })
                        : (0, i.jsx)(u.A, {
                              premiumSubscription: k,
                              paymentSources: F,
                              priceOptions: H,
                              onPaymentSourceChange: (e) => M(null != e ? e.id : null),
                              onPaymentSourceAdd: ei,
                              planId: O.id,
                              setHasAcceptedTerms: Q,
                              legalTermsNodeRef: en,
                              hasLegalTermsFlash: Z,
                              invoiceError: K,
                              onInvoiceError: (e) => {
                                  J(e);
                              },
                              planGroup: y,
                              currencies: B,
                              onCurrencyChange: (e) => G(e),
                              hasOpenInvoice: null != E,
                              purchaseState: W,
                              handleClose: I,
                          }),
                ],
            }),
            (0, i.jsx)(j.UX, {
                children: (0, i.jsx)(b.A, {
                    premiumSubscription: k ?? null,
                    setPurchaseState: Y,
                    onBack: () => null != n && l(n),
                    onNext: et,
                    legalTermsNodeRef: en,
                    flashLegalTerms: () => X(!0),
                    analyticsLocation: P,
                    baseAnalyticsData: T,
                    flowStartTime: D.startTime,
                    planGroup: y,
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
