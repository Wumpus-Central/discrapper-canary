n.d(t, { Ke: () => N, Ro: () => f, X1: () => g });
var l = n(627968);
n(64700);
var r = n(284009),
    i = n.n(r),
    a = n(17928),
    s = n(403581),
    o = n(10716),
    u = n(688810),
    c = n(20015),
    d = n(546605),
    p = n(364995),
    m = n(31823),
    h = n(426398),
    A = n(558620),
    E = n(211159),
    C = n(428262),
    y = n(615396),
    _ = n(652215),
    S = n(818348),
    P = n(375708),
    I = n(327105);
function f(e) {
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
    if (null === u && c) return P.intl.string(P.t.CpOiEO);
    if (d) return P.intl.string(I.default["7r4HPu"]);
    if (t === S.VV.ONE_TIME) return a ? P.intl.string(P.t.ouo4FK) : P.intl.string(P.t.ExD0Ng);
    if ((i()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), r === _.EZt.BOOST))
        return P.intl.string(P.t.eUEeCt);
    if (a) return P.intl.string(P.t.ouo4FK);
    if ((0, C.ys)(n.id))
        return o
            ? P.intl.string(P.t.cRCCJ3)
            : null != l
              ? l.isPausedAllowsResumeButNotUpdates
                  ? P.intl.string(P.t.zpi5pg)
                  : (0, y.Ge)(l, n.id, s)
                    ? P.intl.string(P.t.IJI7yk)
                    : P.intl.string(P.t.VPuTc5)
              : (0, C.ff)(null, n);
    return P.intl.string(P.t.YScQSF);
}
function T(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let N = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: l, isPrepaid: r } = e,
            { checkoutPaymentSources: i } = (0, p.t)(),
            {
                hasAcceptedTerms: s,
                paymentSourceId: c,
                purchaseType: C,
                activeSubscription: y,
            } = (0, E.t4)((e) => ({
                hasAcceptedTerms: e.hasAcceptedTerms,
                paymentSourceId: e.paymentSourceId,
                purchaseType: e.purchaseType,
                activeSubscription: e.activeSubscription,
            })),
            { hasPaymentSources: _ } = (0, h.jm)(),
            { application: S } = (0, m.V)(),
            P = (0, a.bG)([o.A], () => o.A.getFetchState()),
            I = (0, A.A)(),
            T =
                (0, d.vg)("PaymentModalReviewButton") &&
                null != c &&
                i.some((e) => e.id === c && null != e.relocationCountry),
            N = f({
                purchaseType: C,
                plan: I,
                premiumSubscription: t,
                isGift: n,
                planGroup: l,
                isPrepaidPaymentSource: r,
                paymentSourceId: c,
                hasPaymentSources: _,
                willRelocateStoreCountry: T,
            }),
            { analyticsLocations: g } = (0, u.Ay)();
        return {
            buttonLabel: N,
            analyticsLocations: g,
            hasAcceptedTerms: s,
            application: S,
            paymentSourceId: c,
            activeSubscription: y,
            devShelfFetchState: P,
            hasPaymentSources: _,
        };
    },
    g = (e, t) => {
        let {
                invoiceError: n,
                planError: r,
                disablePurchase: i,
                needsPaymentSource: a,
                onPaymentSourceAdd: u,
                isTrial: d,
                makePurchase: p,
                legalTermsNodeRef: m,
                flashLegalTerms: h,
                isSubmitting: A,
            } = e,
            { buttonLabel: E, hasAcceptedTerms: C, application: y, devShelfFetchState: S, hasPaymentSources: I } = t;
        if (null != n || null != r || i) return { variant: "active", text: E, disabled: !0 };
        if (a && I)
            return {
                text: E,
                tooltipText: P.intl.string(P.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: u,
            };
        if (a && !I)
            return {
                tooltipText: P.intl.string(P.t.L7jbQV),
                variant: "active",
                text: E,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, c.n)(y, _.gfo.EMBEDDED) && S === o.$.LOADING)
            return {
                tooltipText: P.intl.string(P.t.cjA5tj),
                variant: "active",
                text: E,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if (d)
            return {
                variant: "expressive",
                text: E,
                onClick: C ? p : () => T(m, h),
                loading: A,
                iconPosition: "start",
                icon: () => (0, l.jsx)(s.t, { color: "currentColor" }),
                dataTestId: C ? "purchase" : "submitButton",
            };
        else if (!C)
            return {
                tooltipText: P.intl.string(P.t.XdvBLS),
                variant: "active",
                text: E,
                type: "submit",
                onClick: () => T(m, h),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: E, dataTestId: "purchase", onClick: p, loading: A };
    };
