"use strict";
n.d(t, { Ay: () => v, Ke: () => S, Ro: () => I, X1: () => y });
var r = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(435371),
    o = n(397927),
    l = n(10716),
    u = n(688810),
    c = n(20015),
    d = n(546605),
    _ = n(558620),
    f = n(156312),
    p = n(927578),
    h = n(615396),
    m = n(652215),
    E = n(818348),
    g = n(985018),
    A = n(327105);
function I(e) {
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
        willRelocateStoreCountry: d,
    } = e;
    if (null === u && c) return g.intl.string(g.t.CpOiEO);
    if (d) return g.intl.string(A.default["7r4HPu"]);
    if (t === E.VV.ONE_TIME) return a ? g.intl.string(g.t.ouo4FK) : g.intl.string(g.t.ExD0Ng);
    if ((s()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), i === m.EZt.BOOST))
        return g.intl.string(g.t.eUEeCt);
    if (a) return g.intl.string(g.t.ouo4FK);
    if ((0, p.ys)(n.id))
        return l
            ? g.intl.string(g.t.cRCCJ3)
            : null != r
              ? r.isPausedAllowsResumeButNotUpdates
                  ? g.intl.string(g.t.zpi5pg)
                  : (0, h.Ge)(r, n.id, o)
                    ? g.intl.string(g.t.IJI7yk)
                    : g.intl.string(g.t.VPuTc5)
              : (0, p.ff)(null, n);
    return g.intl.string(g.t.YScQSF);
}
function T(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let S = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: r, isPrepaid: i } = e,
            {
                application: s,
                hasAcceptedTerms: a,
                purchaseType: o,
                paymentSourceId: l,
                activeSubscription: c,
                devShelfFetchState: p,
                hasPaymentSources: h,
                checkoutPaymentSources: m,
            } = (0, f.P5)(),
            E = (0, _.A)(),
            g =
                (0, d.vg)("PaymentModalReviewButton") &&
                null != l &&
                m.some((e) => e.id === l && null != e.relocationCountry),
            A = I({
                purchaseType: o,
                plan: E,
                premiumSubscription: t,
                isGift: n,
                planGroup: r,
                isPrepaidPaymentSource: i,
                paymentSourceId: l,
                hasPaymentSources: h,
                willRelocateStoreCountry: g,
            }),
            { analyticsLocations: T } = (0, u.Ay)();
        return {
            buttonLabel: A,
            analyticsLocations: T,
            application: s,
            hasAcceptedTerms: a,
            paymentSourceId: l,
            activeSubscription: c,
            devShelfFetchState: p,
            hasPaymentSources: h,
        };
    },
    y = (e, t) => {
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
                isSubmitting: h,
            } = e,
            { buttonLabel: E, application: A, hasAcceptedTerms: I, devShelfFetchState: S, hasPaymentSources: y } = t;
        if (null != n || null != i || s) return { variant: "active", text: E, disabled: !0 };
        if (a && y)
            return {
                text: E,
                tooltipText: g.intl.string(g.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: u,
            };
        if (a && !y)
            return {
                tooltipText: g.intl.string(g.t.L7jbQV),
                variant: "active",
                text: E,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, c.n)(A, m.gfo.EMBEDDED) && S === l.$.LOADING)
            return {
                tooltipText: g.intl.string(g.t.cjA5tj),
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
                onClick: I ? _ : () => T(f, p),
                loading: h,
                iconPosition: "start",
                icon: () => (0, r.jsx)(o.tvc, { color: "currentColor" }),
                dataTestId: I ? "purchase" : "submitButton",
            };
        else if (!I)
            return {
                tooltipText: g.intl.string(g.t.XdvBLS),
                variant: "active",
                text: E,
                type: "submit",
                onClick: () => T(f, p),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: E, dataTestId: "purchase", onClick: _, loading: h };
    };
function v(e) {
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
        } = S({ premiumSubscription: t, isGift: n, planGroup: i, isPrepaid: s }),
        {
            tooltipText: m,
            dataTestId: E,
            ...g
        } = y(e, {
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
