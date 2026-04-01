"use strict";
n.d(t, { Ay: () => T, Ke: () => A, Ro: () => E, X1: () => I });
var r = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(435371),
    o = n(397927),
    l = n(10716),
    u = n(688810),
    c = n(20015),
    d = n(156312),
    _ = n(927578),
    f = n(615396),
    p = n(652215),
    h = n(818348),
    m = n(985018);
function E(e) {
    let {
        purchaseType: t,
        plan: n,
        premiumSubscription: r,
        productLine: i,
        isGift: a,
        planGroup: o,
        isPrepaidPaymentSource: l,
        paymentSourceId: u,
        hasPaymentSources: c,
    } = e;
    if (null === u && c) return m.intl.string(m.t.CpOiEO);
    if (t === h.VV.ONE_TIME) return a ? m.intl.string(m.t.ouo4FK) : m.intl.string(m.t.ExD0Ng);
    if ((s()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), i === p.EZt.BOOST))
        return m.intl.string(m.t.eUEeCt);
    if (a) return m.intl.string(m.t.ouo4FK);
    if ((0, _.ys)(n.id))
        return l
            ? m.intl.string(m.t.cRCCJ3)
            : null != r
              ? r.isPausedAllowsResumeButNotUpdates
                  ? m.intl.string(m.t.zpi5pg)
                  : (0, f.Ge)(r, n.id, o)
                    ? m.intl.string(m.t.IJI7yk)
                    : m.intl.string(m.t.VPuTc5)
              : (0, _.ff)(null, n);
    return m.intl.string(m.t.YScQSF);
}
function g(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let A = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: r, isPrepaid: i } = e,
            {
                application: s,
                selectedPlan: a,
                hasAcceptedTerms: o,
                purchaseType: l,
                paymentSourceId: c,
                activeSubscription: _,
                devShelfFetchState: f,
                hasPaymentSources: p,
            } = (0, d.P5)(),
            h = E({
                purchaseType: l,
                plan: a,
                premiumSubscription: t,
                isGift: n,
                planGroup: r,
                isPrepaidPaymentSource: i,
                paymentSourceId: c,
                hasPaymentSources: p,
            }),
            { analyticsLocations: m } = (0, u.Ay)();
        return {
            buttonLabel: h,
            analyticsLocations: m,
            application: s,
            hasAcceptedTerms: o,
            paymentSourceId: c,
            activeSubscription: _,
            devShelfFetchState: f,
            hasPaymentSources: p,
        };
    },
    I = (e, t) => {
        let {
                invoiceError: n,
                planError: i,
                disablePurchase: s,
                needsPaymentSource: a,
                onPaymentSourceAdd: u,
                isTrial: d,
                makePurchase: _,
                legalTermsNodeRef: f,
                flashLegalTerms: h,
                isSubmitting: E,
            } = e,
            { buttonLabel: A, application: I, hasAcceptedTerms: T, devShelfFetchState: S, hasPaymentSources: y } = t;
        if (null != n || null != i || s) return { variant: "active", text: A, disabled: !0 };
        if (a && y)
            return {
                text: A,
                tooltipText: m.intl.string(m.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: u,
            };
        if (a && !y)
            return {
                tooltipText: m.intl.string(m.t.L7jbQV),
                variant: "active",
                text: A,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, c.n)(I, p.gfo.EMBEDDED) && S === l.$.LOADING)
            return {
                tooltipText: m.intl.string(m.t.cjA5tj),
                variant: "active",
                text: A,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if (d)
            return {
                variant: "expressive",
                text: A,
                onClick: T ? _ : () => g(f, h),
                loading: E,
                iconPosition: "start",
                icon: () => (0, r.jsx)(o.tvc, { color: "currentColor" }),
                dataTestId: T ? "purchase" : "submitButton",
            };
        else if (!T)
            return {
                tooltipText: m.intl.string(m.t.XdvBLS),
                variant: "active",
                text: A,
                type: "submit",
                onClick: () => g(f, h),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: A, dataTestId: "purchase", onClick: _, loading: E };
    };
function T(e) {
    let { premiumSubscription: t, isGift: n, planGroup: i, isPrepaid: s } = e,
        {
            buttonLabel: l,
            analyticsLocations: u,
            application: c,
            hasAcceptedTerms: d,
            paymentSourceId: _,
            activeSubscription: f,
            devShelfFetchState: p,
            hasPaymentSources: h,
        } = A({ premiumSubscription: t, isGift: n, planGroup: i, isPrepaid: s }),
        {
            tooltipText: m,
            dataTestId: E,
            ...g
        } = I(e, {
            buttonLabel: l,
            analyticsLocations: u,
            application: c,
            hasAcceptedTerms: d,
            paymentSourceId: _,
            activeSubscription: f,
            devShelfFetchState: p,
            hasPaymentSources: h,
        });
    return null != m
        ? (0, r.jsx)(a.m_, { text: m, children: (0, r.jsx)(o.Button, { "data-testid": E, ...g }) })
        : (0, r.jsx)(o.Button, { "data-testid": E, ...g });
}
