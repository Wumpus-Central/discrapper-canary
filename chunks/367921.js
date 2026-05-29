n.d(t, { Ay: () => M, Ke: () => x, Ro: () => v, X1: () => R });
var l = n(627968);
n(64700);
var r = n(284009),
    i = n.n(r),
    a = n(17928),
    s = n(990078),
    o = n(403581),
    u = n(821609),
    c = n(10716),
    d = n(688810),
    p = n(20015),
    m = n(546605),
    h = n(364995),
    A = n(31823),
    C = n(426398),
    E = n(558620),
    y = n(722847),
    P = n(768050),
    S = n(428262),
    _ = n(615396),
    I = n(652215),
    f = n(818348),
    T = n(375708),
    N = n(327105);
function v(e) {
    let {
        purchaseType: t,
        plan: n,
        premiumSubscription: l,
        productLine: r,
        isGift: a,
        planGroup: s,
        isPrepaidPaymentSource: o,
        paymentSourceId: u,
        hasPaymentSources: c,
        willRelocateStoreCountry: d,
    } = e;
    if (null === u && c) return T.intl.string(T.t.CpOiEO);
    if (d) return T.intl.string(N.default["7r4HPu"]);
    if (t === f.VV.ONE_TIME) return a ? T.intl.string(T.t.ouo4FK) : T.intl.string(T.t.ExD0Ng);
    if ((i()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), r === I.EZt.BOOST))
        return T.intl.string(T.t.eUEeCt);
    if (a) return T.intl.string(T.t.ouo4FK);
    if ((0, S.ys)(n.id))
        return o
            ? T.intl.string(T.t.cRCCJ3)
            : null != l
              ? l.isPausedAllowsResumeButNotUpdates
                  ? T.intl.string(T.t.zpi5pg)
                  : (0, _.Ge)(l, n.id, s)
                    ? T.intl.string(T.t.IJI7yk)
                    : T.intl.string(T.t.VPuTc5)
              : (0, S.ff)(null, n);
    return T.intl.string(T.t.YScQSF);
}
function g(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let x = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: l, isPrepaid: r } = e,
            { checkoutPaymentSources: i } = (0, h.t)(),
            { hasAcceptedTerms: s, paymentSourceId: o } = (0, y.t4)((e) => ({
                hasAcceptedTerms: e.hasAcceptedTerms,
                paymentSourceId: e.paymentSourceId,
            })),
            { hasPaymentSources: u } = (0, C.jm)(),
            { purchaseType: p, activeSubscription: S } = (0, P.P5)(),
            { application: _ } = (0, A.V)(),
            I = (0, a.bG)([c.A], () => c.A.getFetchState()),
            f = (0, E.A)(),
            T =
                (0, m.vg)("PaymentModalReviewButton") &&
                null != o &&
                i.some((e) => e.id === o && null != e.relocationCountry),
            N = v({
                purchaseType: p,
                plan: f,
                premiumSubscription: t,
                isGift: n,
                planGroup: l,
                isPrepaidPaymentSource: r,
                paymentSourceId: o,
                hasPaymentSources: u,
                willRelocateStoreCountry: T,
            }),
            { analyticsLocations: g } = (0, d.Ay)();
        return {
            buttonLabel: N,
            analyticsLocations: g,
            hasAcceptedTerms: s,
            application: _,
            paymentSourceId: o,
            activeSubscription: S,
            devShelfFetchState: I,
            hasPaymentSources: u,
        };
    },
    R = (e, t) => {
        let {
                invoiceError: n,
                planError: r,
                disablePurchase: i,
                needsPaymentSource: a,
                onPaymentSourceAdd: s,
                isTrial: u,
                makePurchase: d,
                legalTermsNodeRef: m,
                flashLegalTerms: h,
                isSubmitting: A,
            } = e,
            { buttonLabel: C, hasAcceptedTerms: E, application: y, devShelfFetchState: P, hasPaymentSources: S } = t;
        if (null != n || null != r || i) return { variant: "active", text: C, disabled: !0 };
        if (a && S)
            return {
                text: C,
                tooltipText: T.intl.string(T.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: s,
            };
        if (a && !S)
            return {
                tooltipText: T.intl.string(T.t.L7jbQV),
                variant: "active",
                text: C,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, p.n)(y, I.gfo.EMBEDDED) && P === c.$.LOADING)
            return {
                tooltipText: T.intl.string(T.t.cjA5tj),
                variant: "active",
                text: C,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if (u)
            return {
                variant: "expressive",
                text: C,
                onClick: E ? d : () => g(m, h),
                loading: A,
                iconPosition: "start",
                icon: () => (0, l.jsx)(o.t, { color: "currentColor" }),
                dataTestId: E ? "purchase" : "submitButton",
            };
        else if (!E)
            return {
                tooltipText: T.intl.string(T.t.XdvBLS),
                variant: "active",
                text: C,
                type: "submit",
                onClick: () => g(m, h),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: C, dataTestId: "purchase", onClick: d, loading: A };
    };
function M(e) {
    let { premiumSubscription: t, isGift: n, planGroup: r, isPrepaid: i } = e,
        {
            buttonLabel: a,
            analyticsLocations: o,
            hasAcceptedTerms: c,
            application: d,
            paymentSourceId: p,
            activeSubscription: m,
            devShelfFetchState: h,
            hasPaymentSources: A,
        } = x({ premiumSubscription: t, isGift: n, planGroup: r, isPrepaid: i }),
        {
            tooltipText: C,
            dataTestId: E,
            ...y
        } = R(e, {
            buttonLabel: a,
            analyticsLocations: o,
            hasAcceptedTerms: c,
            application: d,
            paymentSourceId: p,
            activeSubscription: m,
            devShelfFetchState: h,
            hasPaymentSources: A,
        });
    return null != C
        ? (0, l.jsx)(s.m, { text: C, children: (0, l.jsx)(u.$, { "data-testid": E, ...y }) })
        : (0, l.jsx)(u.$, { "data-testid": E, ...y });
}
