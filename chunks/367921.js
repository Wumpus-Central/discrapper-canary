n.d(t, { Ay: () => g, Ke: () => x, Ro: () => S, X1: () => N });
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
    m = n(558620),
    h = n(94420),
    A = n(156312),
    C = n(927578),
    _ = n(615396),
    y = n(652215),
    E = n(818348),
    P = n(985018),
    f = n(327105);
function S(e) {
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
    if (null === u && c) return P.intl.string(P.t.CpOiEO);
    if (d) return P.intl.string(f.default["7r4HPu"]);
    if (t === E.VV.ONE_TIME) return r ? P.intl.string(P.t.ouo4FK) : P.intl.string(P.t.ExD0Ng);
    if ((i()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), a === y.EZt.BOOST))
        return P.intl.string(P.t.eUEeCt);
    if (r) return P.intl.string(P.t.ouo4FK);
    if ((0, C.ys)(n.id))
        return o
            ? P.intl.string(P.t.cRCCJ3)
            : null != l
              ? l.isPausedAllowsResumeButNotUpdates
                  ? P.intl.string(P.t.zpi5pg)
                  : (0, _.Ge)(l, n.id, s)
                    ? P.intl.string(P.t.IJI7yk)
                    : P.intl.string(P.t.VPuTc5)
              : (0, C.ff)(null, n);
    return P.intl.string(P.t.YScQSF);
}
function T(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let x = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: l, isPrepaid: a } = e,
            i = (0, h.t4)((e) => e.hasAcceptedTerms),
            {
                application: r,
                purchaseType: s,
                paymentSourceId: o,
                activeSubscription: u,
                devShelfFetchState: d,
                hasPaymentSources: C,
                checkoutPaymentSources: _,
            } = (0, A.P5)(),
            y = (0, m.A)(),
            E =
                (0, p.vg)("PaymentModalReviewButton") &&
                null != o &&
                _.some((e) => e.id === o && null != e.relocationCountry),
            P = S({
                purchaseType: s,
                plan: y,
                premiumSubscription: t,
                isGift: n,
                planGroup: l,
                isPrepaidPaymentSource: a,
                paymentSourceId: o,
                hasPaymentSources: C,
                willRelocateStoreCountry: E,
            }),
            { analyticsLocations: f } = (0, c.Ay)();
        return {
            buttonLabel: P,
            analyticsLocations: f,
            hasAcceptedTerms: i,
            application: r,
            paymentSourceId: o,
            activeSubscription: u,
            devShelfFetchState: d,
            hasPaymentSources: C,
        };
    },
    N = (e, t) => {
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
                isSubmitting: A,
            } = e,
            { buttonLabel: C, hasAcceptedTerms: _, application: E, devShelfFetchState: f, hasPaymentSources: S } = t;
        if (null != n || null != a || i) return { variant: "active", text: C, disabled: !0 };
        if (r && S)
            return {
                text: C,
                tooltipText: P.intl.string(P.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: o,
            };
        if (r && !S)
            return {
                tooltipText: P.intl.string(P.t.L7jbQV),
                variant: "active",
                text: C,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, d.n)(E, y.gfo.EMBEDDED) && f === u.$.LOADING)
            return {
                tooltipText: P.intl.string(P.t.cjA5tj),
                variant: "active",
                text: C,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if (c)
            return {
                variant: "expressive",
                text: C,
                onClick: _ ? p : () => T(m, h),
                loading: A,
                iconPosition: "start",
                icon: () => (0, l.jsx)(s.t, { color: "currentColor" }),
                dataTestId: _ ? "purchase" : "submitButton",
            };
        else if (!_)
            return {
                tooltipText: P.intl.string(P.t.XdvBLS),
                variant: "active",
                text: C,
                type: "submit",
                onClick: () => T(m, h),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: C, dataTestId: "purchase", onClick: p, loading: A };
    };
function g(e) {
    let { premiumSubscription: t, isGift: n, planGroup: a, isPrepaid: i } = e,
        {
            buttonLabel: s,
            analyticsLocations: u,
            hasAcceptedTerms: c,
            application: d,
            paymentSourceId: p,
            activeSubscription: m,
            devShelfFetchState: h,
            hasPaymentSources: A,
        } = x({ premiumSubscription: t, isGift: n, planGroup: a, isPrepaid: i }),
        {
            tooltipText: C,
            dataTestId: _,
            ...y
        } = N(e, {
            buttonLabel: s,
            analyticsLocations: u,
            hasAcceptedTerms: c,
            application: d,
            paymentSourceId: p,
            activeSubscription: m,
            devShelfFetchState: h,
            hasPaymentSources: A,
        });
    return null != C
        ? (0, l.jsx)(r.m, { text: C, children: (0, l.jsx)(o.$, { "data-testid": _, ...y }) })
        : (0, l.jsx)(o.$, { "data-testid": _, ...y });
}
