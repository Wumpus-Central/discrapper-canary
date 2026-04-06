n.d(t, { A: () => T }), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
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
    _ = n(987616),
    C = n(921925),
    N = n(367160),
    y = n(985018),
    E = n(950637);
function T(e) {
    let {
            backButtonEligible: t,
            prevStep: n,
            handleStepChange: l,
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
            setPurchaseState: W,
            purchaseState: q,
            subscriptionMetadataRequest: Q,
            setHasAcceptedTerms: V,
        } = (0, x.P5)(),
        Z = (0, v.A)(),
        X = (0, _.S3)();
    a()(null != Z, "Expected plan to be selected");
    let $ = r.useRef(null),
        [z, K] = (0, d.A)(!1, 500),
        J = Q?.guild_id,
        ee = (0, s.bG)([f.A], () => f.A.getGuild(J), [J]),
        [et, en] = r.useState(null),
        ei = (0, p.bg)(X?.flags ?? 0);
    r.useEffect(() => {
        null != M && null != $.current && $.current.scrollIntoView({ behavior: "smooth" });
    }, [M]);
    let er = r.useCallback(
            (e) => {
                U(e), l(g.pn.CONFIRM);
            },
            [l, U],
        ),
        el = (0, c.D7)({ location: "payment_modal_review_step" }),
        ea = r.useRef(null);
    if (q === h.h.PURCHASING) return (0, i.jsx)(j.A, {});
    let es = () => {
            l(g.pn.ADD_PAYMENT_STEPS);
        },
        eo = el ? N._ : u.A,
        ed = null;
    el ||
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
    let ec = el ? null : (0, i.jsx)(b.A, { className: E.jD }),
        eu = el ? null : (0, i.jsx)(C.A, {});
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ec,
            (0, i.jsxs)(S.dZ, {
                children: [
                    eu,
                    ed,
                    null == B
                        ? (0, i.jsx)(eo, {
                              selectedPlanId: Z.id,
                              planGroup: I,
                              paymentSources: O,
                              priceOptions: G,
                              currencies: L,
                              onCurrencyChange: (e) => Y(e),
                              handlePaymentSourceAdd: () => l(g.pn.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: V,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: z,
                              trialFooterMessageOverride: T,
                              reviewWarningMessage: P,
                              metadata: ei ? void 0 : Q,
                              purchaseState: q,
                              hideSubscriptionDetails: !0,
                              handleClose: D,
                          })
                        : (0, i.jsx)(m.A, {
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
                              planGroup: I,
                              currencies: L,
                              onCurrencyChange: (e) => Y(e),
                              hasOpenInvoice: null != k,
                              purchaseState: q,
                              handleClose: D,
                              shouldUseUnifiedCheckoutUI: el,
                          }),
                ],
            }),
            (0, i.jsx)(S.UX, {
                children: (0, i.jsx)(A.A, {
                    premiumSubscription: B ?? null,
                    setPurchaseState: W,
                    onBack: () => null != n && l(n),
                    onNext: er,
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => K(!0),
                    analyticsLocation: R,
                    baseAnalyticsData: w,
                    flowStartTime: H.startTime,
                    planGroup: I,
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
