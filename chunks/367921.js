n.d(t, { Ay: () => v, Ke: () => x, Ro: () => I, X1: () => g });
var l = n(627968);
n(64700);
var a = n(284009),
    i = n.n(a),
    r = n(990078),
    s = n(403581),
    o = n(821609),
    u = n(10716),
    c = n(688810),
    d = n(20015),
    p = n(546605),
    m = n(364995),
    h = n(426398),
    C = n(558620),
    A = n(94420),
    y = n(834252),
    E = n(428262),
    P = n(615396),
    S = n(652215),
    _ = n(818348),
    T = n(375708),
    f = n(327105);
function I(e) {
    let {
        purchaseType: t,
        plan: n,
        premiumSubscription: l,
        productLine: a,
        isGift: r,
        planGroup: s,
        isPrepaidPaymentSource: o,
        paymentSourceId: u,
        hasPaymentSources: c,
        willRelocateStoreCountry: d,
    } = e;
    if (null === u && c) return T.intl.string(T.t.CpOiEO);
    if (d) return T.intl.string(f.default["7r4HPu"]);
    if (t === _.VV.ONE_TIME) return r ? T.intl.string(T.t.ouo4FK) : T.intl.string(T.t.ExD0Ng);
    if ((i()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), a === S.EZt.BOOST))
        return T.intl.string(T.t.eUEeCt);
    if (r) return T.intl.string(T.t.ouo4FK);
    if ((0, E.ys)(n.id))
        return o
            ? T.intl.string(T.t.cRCCJ3)
            : null != l
              ? l.isPausedAllowsResumeButNotUpdates
                  ? T.intl.string(T.t.zpi5pg)
                  : (0, P.Ge)(l, n.id, s)
                    ? T.intl.string(T.t.IJI7yk)
                    : T.intl.string(T.t.VPuTc5)
              : (0, E.ff)(null, n);
    return T.intl.string(T.t.YScQSF);
}
function N(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let x = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: l, isPrepaid: a } = e,
            { checkoutPaymentSources: i } = (0, m.t)(),
            { hasAcceptedTerms: r, paymentSourceId: s } = (0, A.t4)((e) => ({
                hasAcceptedTerms: e.hasAcceptedTerms,
                paymentSourceId: e.paymentSourceId,
            })),
            { hasPaymentSources: o } = (0, h.jm)(),
            { application: u, purchaseType: d, activeSubscription: E, devShelfFetchState: P } = (0, y.P5)(),
            S = (0, C.A)(),
            _ =
                (0, p.vg)("PaymentModalReviewButton") &&
                null != s &&
                i.some((e) => e.id === s && null != e.relocationCountry),
            T = I({
                purchaseType: d,
                plan: S,
                premiumSubscription: t,
                isGift: n,
                planGroup: l,
                isPrepaidPaymentSource: a,
                paymentSourceId: s,
                hasPaymentSources: o,
                willRelocateStoreCountry: _,
            }),
            { analyticsLocations: f } = (0, c.Ay)();
        return {
            buttonLabel: T,
            analyticsLocations: f,
            hasAcceptedTerms: r,
            application: u,
            paymentSourceId: s,
            activeSubscription: E,
            devShelfFetchState: P,
            hasPaymentSources: o,
        };
    },
    g = (e, t) => {
        let {
                invoiceError: n,
                planError: a,
                disablePurchase: i,
                needsPaymentSource: r,
                onPaymentSourceAdd: o,
                isTrial: c,
                makePurchase: p,
                legalTermsNodeRef: m,
                flashLegalTerms: h,
                isSubmitting: C,
            } = e,
            { buttonLabel: A, hasAcceptedTerms: y, application: E, devShelfFetchState: P, hasPaymentSources: _ } = t;
        if (null != n || null != a || i) return { variant: "active", text: A, disabled: !0 };
        if (r && _)
            return {
                text: A,
                tooltipText: T.intl.string(T.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: o,
            };
        if (r && !_)
            return {
                tooltipText: T.intl.string(T.t.L7jbQV),
                variant: "active",
                text: A,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, d.n)(E, S.gfo.EMBEDDED) && P === u.$.LOADING)
            return {
                tooltipText: T.intl.string(T.t.cjA5tj),
                variant: "active",
                text: A,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if (c)
            return {
                variant: "expressive",
                text: A,
                onClick: y ? p : () => N(m, h),
                loading: C,
                iconPosition: "start",
                icon: () => (0, l.jsx)(s.t, { color: "currentColor" }),
                dataTestId: y ? "purchase" : "submitButton",
            };
        else if (!y)
            return {
                tooltipText: T.intl.string(T.t.XdvBLS),
                variant: "active",
                text: A,
                type: "submit",
                onClick: () => N(m, h),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: A, dataTestId: "purchase", onClick: p, loading: C };
    };
function v(e) {
    let { premiumSubscription: t, isGift: n, planGroup: a, isPrepaid: i } = e,
        {
            buttonLabel: s,
            analyticsLocations: u,
            hasAcceptedTerms: c,
            application: d,
            paymentSourceId: p,
            activeSubscription: m,
            devShelfFetchState: h,
            hasPaymentSources: C,
        } = x({ premiumSubscription: t, isGift: n, planGroup: a, isPrepaid: i }),
        {
            tooltipText: A,
            dataTestId: y,
            ...E
        } = g(e, {
            buttonLabel: s,
            analyticsLocations: u,
            hasAcceptedTerms: c,
            application: d,
            paymentSourceId: p,
            activeSubscription: m,
            devShelfFetchState: h,
            hasPaymentSources: C,
        });
    return null != A
        ? (0, l.jsx)(r.m, { text: A, children: (0, l.jsx)(o.$, { "data-testid": y, ...E }) })
        : (0, l.jsx)(o.$, { "data-testid": y, ...E });
}
