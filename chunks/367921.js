"use strict";
n.d(t, { Ay: () => S, Ke: () => I, Ro: () => g, X1: () => T });
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
    _ = n(970077),
    f = n(927578),
    p = n(615396),
    h = n(652215),
    m = n(818348),
    E = n(985018);
function g(e) {
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
    if (null === u && c) return E.intl.string(E.t.CpOiEO);
    if (t === m.VV.ONE_TIME) return a ? E.intl.string(E.t.ouo4FK) : E.intl.string(E.t.ExD0Ng);
    if ((s()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), i === h.EZt.BOOST))
        return E.intl.string(E.t.eUEeCt);
    if (a) return E.intl.string(E.t.ouo4FK);
    if ((0, f.ys)(n.id))
        return l
            ? E.intl.string(E.t.cRCCJ3)
            : null != r
              ? r.isPausedAllowsResumeButNotUpdates
                  ? E.intl.string(E.t.zpi5pg)
                  : (0, p.Ge)(r, n.id, o)
                    ? E.intl.string(E.t.IJI7yk)
                    : E.intl.string(E.t.VPuTc5)
              : (0, f.ff)(null, n);
    return E.intl.string(E.t.YScQSF);
}
function A(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let I = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: r, isPrepaid: i } = e,
            {
                application: s,
                hasAcceptedTerms: a,
                purchaseType: o,
                paymentSourceId: l,
                activeSubscription: c,
                devShelfFetchState: f,
                hasPaymentSources: p,
            } = (0, d.P5)(),
            h = g({
                purchaseType: o,
                plan: (0, _.A)(),
                premiumSubscription: t,
                isGift: n,
                planGroup: r,
                isPrepaidPaymentSource: i,
                paymentSourceId: l,
                hasPaymentSources: p,
            }),
            { analyticsLocations: m } = (0, u.Ay)();
        return {
            buttonLabel: h,
            analyticsLocations: m,
            application: s,
            hasAcceptedTerms: a,
            paymentSourceId: l,
            activeSubscription: c,
            devShelfFetchState: f,
            hasPaymentSources: p,
        };
    },
    T = (e, t) => {
        let {
                invoiceError: n,
                planError: i,
                disablePurchase: s,
                needsPaymentSource: a,
                onPaymentSourceAdd: u,
                isTrial: d,
                makePurchase: _,
                legalTermsNodeRef: f,
                flashLegalTerms: p,
                isSubmitting: m,
            } = e,
            { buttonLabel: g, application: I, hasAcceptedTerms: T, devShelfFetchState: S, hasPaymentSources: y } = t;
        if (null != n || null != i || s) return { variant: "active", text: g, disabled: !0 };
        if (a && y)
            return {
                text: g,
                tooltipText: E.intl.string(E.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: u,
            };
        if (a && !y)
            return {
                tooltipText: E.intl.string(E.t.L7jbQV),
                variant: "active",
                text: g,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, c.n)(I, h.gfo.EMBEDDED) && S === l.$.LOADING)
            return {
                tooltipText: E.intl.string(E.t.cjA5tj),
                variant: "active",
                text: g,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if (d)
            return {
                variant: "expressive",
                text: g,
                onClick: T ? _ : () => A(f, p),
                loading: m,
                iconPosition: "start",
                icon: () => (0, r.jsx)(o.tvc, { color: "currentColor" }),
                dataTestId: T ? "purchase" : "submitButton",
            };
        else if (!T)
            return {
                tooltipText: E.intl.string(E.t.XdvBLS),
                variant: "active",
                text: g,
                type: "submit",
                onClick: () => A(f, p),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: g, dataTestId: "purchase", onClick: _, loading: m };
    };
function S(e) {
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
        } = I({ premiumSubscription: t, isGift: n, planGroup: i, isPrepaid: s }),
        {
            tooltipText: m,
            dataTestId: E,
            ...g
        } = T(e, {
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
