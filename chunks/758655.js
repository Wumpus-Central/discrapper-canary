n.d(t, { A: () => T }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(311907),
    o = n(397927),
    d = n(304072),
    c = n(742810),
    u = n(558620),
    m = n(427675),
    p = n(271849),
    f = n(369280),
    x = n(163437),
    g = n(71393),
    h = n(156312),
    S = n(166532),
    b = n(566980),
    A = n(69494),
    j = n(312649),
    v = n(534479),
    _ = n(482132),
    C = n(921925),
    N = n(367160),
    y = n(985018),
    E = n(975197);
function T(e) {
    let {
            backButtonEligible: t,
            prevStep: n,
            handleStepChange: r,
            trialFooterMessageOverride: T,
            reviewWarningMessage: I,
            planGroup: P,
            openInvoiceId: k,
            analyticsData: w,
            analyticsLocation: R,
            handleClose: D,
        } = e,
        {
            activeSubscription: B,
            application: F,
            setUpdatedSubscription: U,
            contextMetadata: H,
            currencies: L,
            paymentSources: O,
            priceOptions: G,
            purchaseError: M,
            setCurrency: Y,
            setPurchaseState: W,
            purchaseState: q,
            subscriptionMetadataRequest: Q,
            setHasAcceptedTerms: V,
        } = (0, h.P5)(),
        Z = (0, u.A)(),
        X = (0, m.S3)();
    a()(null != Z, "Expected plan to be selected");
    let $ = l.useRef(null),
        [z, K] = (0, d.A)(!1, 500),
        J = Q?.guild_id,
        ee = (0, s.bG)([g.A], () => g.A.getGuild(J), [J]),
        [et, en] = l.useState(null),
        ei = (0, x.bg)(X?.flags ?? 0);
    l.useEffect(() => {
        null != M && null != $.current && $.current.scrollIntoView({ behavior: "smooth" });
    }, [M]);
    let el = l.useCallback(
            (e) => {
                U(e), r(S.pn.CONFIRM);
            },
            [r, U],
        ),
        er = (0, c.D7)({ location: "payment_modal_review_step" }),
        ea = l.useRef(null);
    if (q === b.h.PURCHASING) return (0, i.jsx)(v.A, {});
    let es = () => {
            r(S.pn.ADD_PAYMENT_STEPS);
        },
        eo = er ? N._ : p.A,
        ed = null;
    er ||
        (ed = (0, i.jsxs)(i.Fragment, {
            children: [
                ei &&
                    (0, i.jsxs)("div", {
                        className: E.Uq,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: y.intl.string(y.t.nf5LOU),
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-text-default",
                                children: y.intl.format(y.t.y4n0GS, { applicationName: F?.name }),
                            }),
                        ],
                    }),
                !ei &&
                    (0, i.jsx)("div", {
                        className: E.Vw,
                        children: (0, i.jsx)(o.D0$, {
                            label: y.intl.string(y.t["5qyruI"]),
                            children: (0, i.jsxs)("div", {
                                className: E.YS,
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
    let ec = er ? null : (0, i.jsx)(A.A, { className: E.jD }),
        eu = er ? null : (0, i.jsx)(C.A, {});
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ec,
            (0, i.jsxs)(_.dZ, {
                children: [
                    eu,
                    ed,
                    null == B
                        ? (0, i.jsx)(eo, {
                              selectedPlanId: Z.id,
                              planGroup: P,
                              paymentSources: O,
                              priceOptions: G,
                              currencies: L,
                              onCurrencyChange: (e) => Y(e),
                              handlePaymentSourceAdd: () => r(S.pn.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: V,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: z,
                              trialFooterMessageOverride: T,
                              reviewWarningMessage: I,
                              metadata: ei ? void 0 : Q,
                              purchaseState: q,
                              hideSubscriptionDetails: !0,
                              handleClose: D,
                          })
                        : (0, i.jsx)(f.A, {
                              premiumSubscription: B,
                              paymentSources: O,
                              priceOptions: G,
                              onPaymentSourceAdd: es,
                              planId: Z.id,
                              setHasAcceptedTerms: V,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: z,
                              invoiceError: et,
                              onInvoiceError: (e) => {
                                  en(e);
                              },
                              planGroup: P,
                              currencies: L,
                              onCurrencyChange: (e) => Y(e),
                              hasOpenInvoice: null != k,
                              purchaseState: q,
                              handleClose: D,
                              shouldUseUnifiedCheckoutUI: er,
                          }),
                ],
            }),
            (0, i.jsx)(_.UX, {
                children: (0, i.jsx)(j.A, {
                    premiumSubscription: B ?? null,
                    setPurchaseState: W,
                    onBack: () => null != n && r(n),
                    onNext: el,
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => K(!0),
                    analyticsLocation: R,
                    baseAnalyticsData: w,
                    flowStartTime: H.startTime,
                    planGroup: P,
                    openInvoiceId: k,
                    metadata: ei ? void 0 : Q,
                    backButtonEligible: t,
                    invoiceError: et,
                    disablePurchase: Q?.guild_id == null && !ei,
                    onPaymentSourceAdd: es,
                }),
            }),
        ],
    });
}
