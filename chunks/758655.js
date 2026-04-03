n.d(t, { A: () => T }), n(938796);
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
    v = n(970077),
    C = n(987616),
    _ = n(921925),
    y = n(367160),
    N = n(985018),
    E = n(950637);
function T(e) {
    let {
            backButtonEligible: t,
            prevStep: n,
            handleStepChange: r,
            trialFooterMessageOverride: T,
            reviewWarningMessage: P,
            planGroup: I,
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
            setPaymentSourceId: W,
            setPurchaseState: q,
            purchaseState: Q,
            subscriptionMetadataRequest: V,
            setHasAcceptedTerms: Z,
        } = (0, x.P5)(),
        X = (0, v.A)(),
        $ = (0, C.S3)();
    a()(null != X, "Expected plan to be selected");
    let z = l.useRef(null),
        [K, J] = (0, d.A)(!1, 500),
        ee = V?.guild_id,
        et = (0, s.bG)([f.A], () => f.A.getGuild(ee), [ee]),
        [en, ei] = l.useState(null),
        el = (0, p.bg)($?.flags ?? 0);
    l.useEffect(() => {
        null != M && null != z.current && z.current.scrollIntoView({ behavior: "smooth" });
    }, [M]);
    let er = l.useCallback(
            (e) => {
                U(e), r(g.pn.CONFIRM);
            },
            [r, U],
        ),
        ea = (0, c.D7)({ location: "payment_modal_review_step" }),
        es = l.useRef(null);
    if (Q === h.h.PURCHASING) return (0, i.jsx)(j.A, {});
    let eo = () => {
            r(g.pn.ADD_PAYMENT_STEPS);
        },
        ed = ea ? y._ : u.A,
        ec = null;
    ea ||
        (ec = (0, i.jsxs)(i.Fragment, {
            children: [
                el &&
                    (0, i.jsxs)("div", {
                        className: E.Uq,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: N.intl.string(N.t.nf5LOU),
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-text-default",
                                children: N.intl.format(N.t.y4n0GS, { applicationName: F?.name }),
                            }),
                        ],
                    }),
                !el &&
                    (0, i.jsx)("div", {
                        className: E.Vw,
                        children: (0, i.jsx)(o.D0$, {
                            label: N.intl.string(N.t["5qyruI"]),
                            children: (0, i.jsxs)("div", {
                                className: E.YS,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: N.intl.string(N.t.dBih7e),
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        lineClamp: 1,
                                        children: et?.name ?? N.intl.string(N.t.dtwqPR),
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        }));
    let eu = ea ? null : (0, i.jsx)(b.A, { className: E.jD }),
        em = ea ? null : (0, i.jsx)(_.A, {});
    return (0, i.jsxs)(i.Fragment, {
        children: [
            eu,
            (0, i.jsxs)(S.dZ, {
                children: [
                    em,
                    ec,
                    null == B
                        ? (0, i.jsx)(ed, {
                              selectedPlanId: X.id,
                              planGroup: I,
                              paymentSources: O,
                              onPaymentSourceChange: (e) => W(null != e ? e.id : null),
                              priceOptions: G,
                              currencies: L,
                              onCurrencyChange: (e) => Y(e),
                              handlePaymentSourceAdd: () => r(g.pn.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: Z,
                              legalTermsNodeRef: es,
                              hasLegalTermsFlash: K,
                              trialFooterMessageOverride: T,
                              reviewWarningMessage: P,
                              metadata: el ? void 0 : V,
                              purchaseState: Q,
                              hideSubscriptionDetails: !0,
                              handleClose: D,
                          })
                        : (0, i.jsx)(m.A, {
                              premiumSubscription: B,
                              paymentSources: O,
                              priceOptions: G,
                              onPaymentSourceChange: (e) => W(null != e ? e.id : null),
                              onPaymentSourceAdd: eo,
                              planId: X.id,
                              setHasAcceptedTerms: Z,
                              legalTermsNodeRef: es,
                              hasLegalTermsFlash: K,
                              invoiceError: en,
                              onInvoiceError: (e) => {
                                  ei(e);
                              },
                              planGroup: I,
                              currencies: L,
                              onCurrencyChange: (e) => Y(e),
                              hasOpenInvoice: null != k,
                              purchaseState: Q,
                              handleClose: D,
                              shouldUseUnifiedCheckoutUI: ea,
                          }),
                ],
            }),
            (0, i.jsx)(S.UX, {
                children: (0, i.jsx)(A.A, {
                    premiumSubscription: B ?? null,
                    setPurchaseState: q,
                    onBack: () => null != n && r(n),
                    onNext: er,
                    legalTermsNodeRef: es,
                    flashLegalTerms: () => J(!0),
                    analyticsLocation: R,
                    baseAnalyticsData: w,
                    flowStartTime: H.startTime,
                    planGroup: I,
                    openInvoiceId: k,
                    metadata: el ? void 0 : V,
                    backButtonEligible: t,
                    invoiceError: en,
                    disablePurchase: V?.guild_id == null && !el,
                    onPaymentSourceAdd: eo,
                }),
            }),
        ],
    });
}
