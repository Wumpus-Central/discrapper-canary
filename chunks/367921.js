n.d(t, { Ay: () => g, Ke: () => x, Ro: () => f, X1: () => I });
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
    h = n(558620),
    C = n(94420),
    A = n(278521),
    E = n(927578),
    y = n(615396),
    P = n(652215),
    S = n(818348),
    _ = n(375708),
    T = n(327105);
function f(e) {
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
    if (null === u && c) return _.intl.string(_.t.CpOiEO);
    if (d) return _.intl.string(T.default["7r4HPu"]);
    if (t === S.VV.ONE_TIME) return r ? _.intl.string(_.t.ouo4FK) : _.intl.string(_.t.ExD0Ng);
    if ((i()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), a === P.EZt.BOOST))
        return _.intl.string(_.t.eUEeCt);
    if (r) return _.intl.string(_.t.ouo4FK);
    if ((0, E.ys)(n.id))
        return o
            ? _.intl.string(_.t.cRCCJ3)
            : null != l
              ? l.isPausedAllowsResumeButNotUpdates
                  ? _.intl.string(_.t.zpi5pg)
                  : (0, y.Ge)(l, n.id, s)
                    ? _.intl.string(_.t.IJI7yk)
                    : _.intl.string(_.t.VPuTc5)
              : (0, E.ff)(null, n);
    return _.intl.string(_.t.YScQSF);
}
function N(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let x = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: l, isPrepaid: a } = e,
            { checkoutPaymentSources: i } = (0, m.t)(),
            r = (0, C.t4)((e) => e.hasAcceptedTerms),
            {
                application: s,
                purchaseType: o,
                paymentSourceId: u,
                activeSubscription: d,
                devShelfFetchState: E,
                hasPaymentSources: y,
            } = (0, A.P5)(),
            P = (0, h.A)(),
            S =
                (0, p.vg)("PaymentModalReviewButton") &&
                null != u &&
                i.some((e) => e.id === u && null != e.relocationCountry),
            _ = f({
                purchaseType: o,
                plan: P,
                premiumSubscription: t,
                isGift: n,
                planGroup: l,
                isPrepaidPaymentSource: a,
                paymentSourceId: u,
                hasPaymentSources: y,
                willRelocateStoreCountry: S,
            }),
            { analyticsLocations: T } = (0, c.Ay)();
        return {
            buttonLabel: _,
            analyticsLocations: T,
            hasAcceptedTerms: r,
            application: s,
            paymentSourceId: u,
            activeSubscription: d,
            devShelfFetchState: E,
            hasPaymentSources: y,
        };
    },
    I = (e, t) => {
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
            { buttonLabel: A, hasAcceptedTerms: E, application: y, devShelfFetchState: S, hasPaymentSources: T } = t;
        if (null != n || null != a || i) return { variant: "active", text: A, disabled: !0 };
        if (r && T)
            return {
                text: A,
                tooltipText: _.intl.string(_.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: o,
            };
        if (r && !T)
            return {
                tooltipText: _.intl.string(_.t.L7jbQV),
                variant: "active",
                text: A,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, d.n)(y, P.gfo.EMBEDDED) && S === u.$.LOADING)
            return {
                tooltipText: _.intl.string(_.t.cjA5tj),
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
                onClick: E ? p : () => N(m, h),
                loading: C,
                iconPosition: "start",
                icon: () => (0, l.jsx)(s.t, { color: "currentColor" }),
                dataTestId: E ? "purchase" : "submitButton",
            };
        else if (!E)
            return {
                tooltipText: _.intl.string(_.t.XdvBLS),
                variant: "active",
                text: A,
                type: "submit",
                onClick: () => N(m, h),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: A, dataTestId: "purchase", onClick: p, loading: C };
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
            hasPaymentSources: C,
        } = x({ premiumSubscription: t, isGift: n, planGroup: a, isPrepaid: i }),
        {
            tooltipText: A,
            dataTestId: E,
            ...y
        } = I(e, {
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
        ? (0, l.jsx)(r.m, { text: A, children: (0, l.jsx)(o.$, { "data-testid": E, ...y }) })
        : (0, l.jsx)(o.$, { "data-testid": E, ...y });
}
