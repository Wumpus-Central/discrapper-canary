n.d(t, { A: () => E }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(311907),
    o = n(397927),
    d = n(304072),
    c = n(742810),
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
    S = n(482132),
    v = n(987616),
    C = n(921925),
    _ = n(367160),
    y = n(985018),
    N = n(950637);
function E(e) {
    let {
            backButtonEligible: t,
            prevStep: n,
            handleStepChange: r,
            trialFooterMessageOverride: E,
            reviewWarningMessage: T,
            planGroup: P,
            openInvoiceId: I,
            analyticsData: k,
            analyticsLocation: w,
            handleClose: R,
        } = e,
        {
            activeSubscription: D,
            application: B,
            setUpdatedSubscription: F,
            contextMetadata: U,
            currencies: H,
            paymentSources: L,
            priceOptions: O,
            purchaseError: G,
            selectedPlan: M,
            setCurrency: Y,
            setPaymentSourceId: W,
            setPurchaseState: q,
            purchaseState: Q,
            subscriptionMetadataRequest: V,
            setHasAcceptedTerms: Z,
        } = (0, x.P5)(),
        X = (0, v.S3)();
    a()(null != M, "Expected plan to be selected");
    let $ = l.useRef(null),
        [z, K] = (0, d.A)(!1, 500),
        J = V?.guild_id,
        ee = (0, s.bG)([f.A], () => f.A.getGuild(J), [J]),
        [et, en] = l.useState(null),
        ei = (0, p.bg)(X?.flags ?? 0);
    l.useEffect(() => {
        null != G && null != $.current && $.current.scrollIntoView({ behavior: "smooth" });
    }, [G]);
    let el = l.useCallback(
            (e) => {
                F(e), r(g.pn.CONFIRM);
            },
            [r, F],
        ),
        er = (0, c.D7)({ location: "payment_modal_review_step" }),
        ea = l.useRef(null);
    if (Q === h.h.PURCHASING) return (0, i.jsx)(j.A, {});
    let es = () => {
            r(g.pn.ADD_PAYMENT_STEPS);
        },
        eo = er ? _._ : u.A,
        ed = null;
    er ||
        (ed = (0, i.jsxs)(i.Fragment, {
            children: [
                ei &&
                    (0, i.jsxs)("div", {
                        className: N.Uq,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: y.intl.string(y.t.nf5LOU),
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-text-default",
                                children: y.intl.format(y.t.y4n0GS, { applicationName: B?.name }),
                            }),
                        ],
                    }),
                !ei &&
                    (0, i.jsx)("div", {
                        className: N.Vw,
                        children: (0, i.jsx)(o.D0$, {
                            label: y.intl.string(y.t["5qyruI"]),
                            children: (0, i.jsxs)("div", {
                                className: N.YS,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: y.intl.string(y.t.dBih7e),
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        lineClamp: 1,
                                        children: ee?.name ?? y.intl.string(y.t.dtwqPR),
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        }));
    let ec = er ? null : (0, i.jsx)(b.A, { className: N.jD }),
        eu = er ? null : (0, i.jsx)(C.A, {});
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ec,
            (0, i.jsxs)(S.dZ, {
                children: [
                    eu,
                    ed,
                    null == D
                        ? (0, i.jsx)(eo, {
                              selectedPlanId: M.id,
                              planGroup: P,
                              paymentSources: L,
                              onPaymentSourceChange: (e) => W(null != e ? e.id : null),
                              priceOptions: O,
                              currencies: H,
                              onCurrencyChange: (e) => Y(e),
                              handlePaymentSourceAdd: () => r(g.pn.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: Z,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: z,
                              trialFooterMessageOverride: E,
                              reviewWarningMessage: T,
                              metadata: ei ? void 0 : V,
                              purchaseState: Q,
                              hideSubscriptionDetails: !0,
                              handleClose: R,
                          })
                        : (0, i.jsx)(m.A, {
                              premiumSubscription: D,
                              paymentSources: L,
                              priceOptions: O,
                              onPaymentSourceChange: (e) => W(null != e ? e.id : null),
                              onPaymentSourceAdd: es,
                              planId: M.id,
                              setHasAcceptedTerms: Z,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: z,
                              invoiceError: et,
                              onInvoiceError: (e) => {
                                  en(e);
                              },
                              planGroup: P,
                              currencies: H,
                              onCurrencyChange: (e) => Y(e),
                              hasOpenInvoice: null != I,
                              purchaseState: Q,
                              handleClose: R,
                              shouldUseUnifiedCheckoutUI: er,
                          }),
                ],
            }),
            (0, i.jsx)(S.UX, {
                children: (0, i.jsx)(A.A, {
                    premiumSubscription: D ?? null,
                    setPurchaseState: q,
                    onBack: () => null != n && r(n),
                    onNext: el,
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => K(!0),
                    analyticsLocation: w,
                    baseAnalyticsData: k,
                    flowStartTime: U.startTime,
                    planGroup: P,
                    openInvoiceId: I,
                    metadata: ei ? void 0 : V,
                    backButtonEligible: t,
                    invoiceError: et,
                    disablePurchase: V?.guild_id == null && !ei,
                    onPaymentSourceAdd: es,
                }),
            }),
        ],
    });
}
