n.d(t, { Ke: () => N, Ro: () => T, X1: () => v });
var l = n(627968);
n(64700);
var r = n(284009),
    a = n.n(r),
    i = n(17928),
    s = n(403581),
    o = n(10716),
    u = n(688810),
    c = n(20015),
    d = n(546605),
    p = n(364995),
    m = n(31823),
    A = n(426398),
    h = n(558620),
    E = n(211159),
    C = n(428262),
    y = n(615396),
    _ = n(652215),
    P = n(818348),
    S = n(375708),
    I = n(327105);
function T(e) {
    let {
        purchaseType: t,
        plan: n,
        premiumSubscription: l,
        productLine: r,
        isGift: i,
        planGroup: s,
        isPrepaidPaymentSource: o,
        paymentSourceId: u,
        hasPaymentSources: c,
        willRelocateStoreCountry: d,
    } = e;
    if (null === u && c) return S.intl.string(S.t.CpOiEO);
    if (d) return S.intl.string(I.default["7r4HPu"]);
    if (t === P.VV.ONE_TIME) return i ? S.intl.string(S.t.ouo4FK) : S.intl.string(S.t.ExD0Ng);
    if ((a()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), r === _.EZt.BOOST))
        return S.intl.string(S.t.eUEeCt);
    if (i) return S.intl.string(S.t.ouo4FK);
    if ((0, C.ys)(n.id))
        return o
            ? S.intl.string(S.t.cRCCJ3)
            : null != l
              ? l.isPausedAllowsResumeButNotUpdates
                  ? S.intl.string(S.t.zpi5pg)
                  : (0, y.Ge)(l, n.id, s)
                    ? S.intl.string(S.t.IJI7yk)
                    : S.intl.string(S.t.VPuTc5)
              : (0, C.ff)(null, n);
    return S.intl.string(S.t.YScQSF);
}
function f(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let N = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: l, isPrepaid: r } = e,
            { checkoutPaymentSources: a } = (0, p.t)(),
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
            { hasPaymentSources: _ } = (0, A.jm)(),
            { application: P } = (0, m.V)(),
            S = (0, i.bG)([o.A], () => o.A.getFetchState()),
            I = (0, h.A)(),
            f =
                (0, d.vg)("PaymentModalReviewButton") &&
                null != c &&
                a.some((e) => e.id === c && null != e.relocationCountry),
            N = T({
                purchaseType: C,
                plan: I,
                premiumSubscription: t,
                isGift: n,
                planGroup: l,
                isPrepaidPaymentSource: r,
                paymentSourceId: c,
                hasPaymentSources: _,
                willRelocateStoreCountry: f,
            }),
            { analyticsLocations: v } = (0, u.Ay)();
        return {
            buttonLabel: N,
            analyticsLocations: v,
            hasAcceptedTerms: s,
            application: P,
            paymentSourceId: c,
            activeSubscription: y,
            devShelfFetchState: S,
            hasPaymentSources: _,
        };
    },
    v = (e, t) => {
        let {
                invoiceError: n,
                planError: r,
                disablePurchase: a,
                needsPaymentSource: i,
                onPaymentSourceAdd: u,
                isTrial: d,
                makePurchase: p,
                legalTermsNodeRef: m,
                flashLegalTerms: A,
                isSubmitting: h,
            } = e,
            { buttonLabel: E, hasAcceptedTerms: C, application: y, devShelfFetchState: P, hasPaymentSources: I } = t;
        if (null != n || null != r || a) return { variant: "active", text: E, disabled: !0 };
        if (i && I)
            return {
                text: E,
                tooltipText: S.intl.string(S.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: u,
            };
        if (i && !I)
            return {
                tooltipText: S.intl.string(S.t.L7jbQV),
                variant: "active",
                text: E,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, c.n)(y, _.gfo.EMBEDDED) && P === o.$.LOADING)
            return {
                tooltipText: S.intl.string(S.t.cjA5tj),
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
                onClick: C ? p : () => f(m, A),
                loading: h,
                iconPosition: "start",
                icon: () => (0, l.jsx)(s.t, { color: "currentColor" }),
                dataTestId: C ? "purchase" : "submitButton",
            };
        else if (!C)
            return {
                tooltipText: S.intl.string(S.t.XdvBLS),
                variant: "active",
                text: E,
                type: "submit",
                onClick: () => f(m, A),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: E, dataTestId: "purchase", onClick: p, loading: h };
    };
