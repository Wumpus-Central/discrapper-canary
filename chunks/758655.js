n.d(t, { A: () => N }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(311907),
    o = n(397927),
    d = n(304072),
    c = n(608805),
    u = n(271849),
    m = n(369280),
    p = n(163437),
    f = n(71393),
    x = n(156312),
    g = n(166532),
    h = n(566980),
    b = n(69494),
    A = n(312649),
    j = n(534479),
    v = n(482132),
    S = n(921925),
    C = n(367160),
    _ = n(985018),
    y = n(820970);
function N(e) {
    let {
            backButtonEligible: t,
            prevStep: n,
            handleStepChange: r,
            trialFooterMessageOverride: N,
            reviewWarningMessage: E,
            planGroup: T,
            openInvoiceId: P,
            analyticsData: I,
            analyticsLocation: k,
            handleClose: w,
        } = e,
        {
            activeSubscription: R,
            application: D,
            setUpdatedSubscription: B,
            contextMetadata: F,
            currencies: U,
            paymentSources: H,
            priceOptions: L,
            purchaseError: O,
            selectedPlan: G,
            selectedSku: M,
            setCurrency: Y,
            setPaymentSourceId: W,
            setPurchaseState: q,
            purchaseState: Q,
            subscriptionMetadataRequest: V,
            setHasAcceptedTerms: Z,
        } = (0, x.P5)();
    a()(null != G, "Expected plan to be selected");
    let X = l.useRef(null),
        [$, z] = (0, d.A)(!1, 500),
        K = V?.guild_id,
        J = (0, s.bG)([f.A], () => f.A.getGuild(K), [K]),
        [ee, et] = l.useState(null),
        en = (0, p.bg)(M?.flags ?? 0);
    l.useEffect(() => {
        null != O && null != X.current && X.current.scrollIntoView({ behavior: "smooth" });
    }, [O]);
    let ei = l.useCallback(
            (e) => {
                B(e), r(g.pn.CONFIRM);
            },
            [r, B],
        ),
        el = (0, c.D7)({ location: "payment_modal_review_step" }),
        er = l.useRef(null);
    if (Q === h.h.PURCHASING) return (0, i.jsx)(j.A, {});
    let ea = () => {
            r(g.pn.ADD_PAYMENT_STEPS);
        },
        es = el ? C._ : u.A,
        eo = null;
    el ||
        (eo = (0, i.jsxs)(i.Fragment, {
            children: [
                en &&
                    (0, i.jsxs)("div", {
                        className: y.Uq,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: _.intl.string(_.t.nf5LOU),
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-text-default",
                                children: _.intl.format(_.t.y4n0GS, { applicationName: D?.name }),
                            }),
                        ],
                    }),
                !en &&
                    (0, i.jsx)("div", {
                        className: y.Vw,
                        children: (0, i.jsx)(o.D0$, {
                            label: _.intl.string(_.t["5qyruI"]),
                            children: (0, i.jsxs)("div", {
                                className: y.YS,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: _.intl.string(_.t.dBih7e),
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        lineClamp: 1,
                                        children: J?.name ?? _.intl.string(_.t.dtwqPR),
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        }));
    let ed = el ? null : (0, i.jsx)(b.A, { className: y.jD }),
        ec = el ? null : (0, i.jsx)(S.A, {});
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ed,
            (0, i.jsxs)(v.dZ, {
                children: [
                    ec,
                    eo,
                    null == R
                        ? (0, i.jsx)(es, {
                              selectedPlanId: G.id,
                              planGroup: T,
                              paymentSources: H,
                              onPaymentSourceChange: (e) => W(null != e ? e.id : null),
                              priceOptions: L,
                              currencies: U,
                              onCurrencyChange: (e) => Y(e),
                              handlePaymentSourceAdd: () => r(g.pn.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: Z,
                              legalTermsNodeRef: er,
                              hasLegalTermsFlash: $,
                              trialFooterMessageOverride: N,
                              reviewWarningMessage: E,
                              metadata: en ? void 0 : V,
                              purchaseState: Q,
                              hideSubscriptionDetails: !0,
                              handleClose: w,
                          })
                        : (0, i.jsx)(m.A, {
                              premiumSubscription: R,
                              paymentSources: H,
                              priceOptions: L,
                              onPaymentSourceChange: (e) => W(null != e ? e.id : null),
                              onPaymentSourceAdd: ea,
                              planId: G.id,
                              setHasAcceptedTerms: Z,
                              legalTermsNodeRef: er,
                              hasLegalTermsFlash: $,
                              invoiceError: ee,
                              onInvoiceError: (e) => {
                                  et(e);
                              },
                              planGroup: T,
                              currencies: U,
                              onCurrencyChange: (e) => Y(e),
                              hasOpenInvoice: null != P,
                              purchaseState: Q,
                              handleClose: w,
                              shouldUseUnifiedCheckoutUI: el,
                          }),
                ],
            }),
            (0, i.jsx)(v.UX, {
                children: (0, i.jsx)(A.A, {
                    premiumSubscription: R ?? null,
                    setPurchaseState: q,
                    onBack: () => null != n && r(n),
                    onNext: ei,
                    legalTermsNodeRef: er,
                    flashLegalTerms: () => z(!0),
                    analyticsLocation: k,
                    baseAnalyticsData: I,
                    flowStartTime: F.startTime,
                    planGroup: T,
                    openInvoiceId: P,
                    metadata: en ? void 0 : V,
                    backButtonEligible: t,
                    invoiceError: ee,
                    disablePurchase: V?.guild_id == null && !en,
                    onPaymentSourceAdd: ea,
                }),
            }),
        ],
    });
}
