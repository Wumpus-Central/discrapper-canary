"use strict";
n.d(t, { Ay: () => v, Ke: () => y, Ro: () => T, X1: () => N });
var r = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(990078),
    o = n(403581),
    l = n(821609),
    u = n(10716),
    c = n(688810),
    d = n(20015),
    _ = n(546605),
    f = n(558620),
    p = n(156312),
    h = n(927578),
    E = n(615396),
    m = n(652215),
    g = n(818348),
    A = n(985018),
    I = n(327105);
function T(e) {
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
    if (null === u && c) return A.intl.string(A.t.CpOiEO);
    if (d) return A.intl.string(I.default["7r4HPu"]);
    if (t === g.VV.ONE_TIME) return a ? A.intl.string(A.t.ouo4FK) : A.intl.string(A.t.ExD0Ng);
    if ((s()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), i === m.EZt.BOOST))
        return A.intl.string(A.t.eUEeCt);
    if (a) return A.intl.string(A.t.ouo4FK);
    if ((0, h.ys)(n.id))
        return l
            ? A.intl.string(A.t.cRCCJ3)
            : null != r
              ? r.isPausedAllowsResumeButNotUpdates
                  ? A.intl.string(A.t.zpi5pg)
                  : (0, E.Ge)(r, n.id, o)
                    ? A.intl.string(A.t.IJI7yk)
                    : A.intl.string(A.t.VPuTc5)
              : (0, h.ff)(null, n);
    return A.intl.string(A.t.YScQSF);
}
function S(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let y = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: r, isPrepaid: i } = e,
            {
                application: s,
                hasAcceptedTerms: a,
                purchaseType: o,
                paymentSourceId: l,
                activeSubscription: u,
                devShelfFetchState: d,
                hasPaymentSources: h,
                checkoutPaymentSources: E,
            } = (0, p.P5)(),
            m = (0, f.A)(),
            g =
                (0, _.vg)("PaymentModalReviewButton") &&
                null != l &&
                E.some((e) => e.id === l && null != e.relocationCountry),
            A = T({
                purchaseType: o,
                plan: m,
                premiumSubscription: t,
                isGift: n,
                planGroup: r,
                isPrepaidPaymentSource: i,
                paymentSourceId: l,
                hasPaymentSources: h,
                willRelocateStoreCountry: g,
            }),
            { analyticsLocations: I } = (0, c.Ay)();
        return {
            buttonLabel: A,
            analyticsLocations: I,
            application: s,
            hasAcceptedTerms: a,
            paymentSourceId: l,
            activeSubscription: u,
            devShelfFetchState: d,
            hasPaymentSources: h,
        };
    },
    N = (e, t) => {
        let {
                invoiceError: n,
                planError: i,
                disablePurchase: s,
                needsPaymentSource: a,
                onPaymentSourceAdd: l,
                isTrial: c,
                makePurchase: _,
                legalTermsNodeRef: f,
                flashLegalTerms: p,
                isSubmitting: h,
            } = e,
            { buttonLabel: E, application: g, hasAcceptedTerms: I, devShelfFetchState: T, hasPaymentSources: y } = t;
        if (null != n || null != i || s) return { variant: "active", text: E, disabled: !0 };
        if (a && y)
            return {
                text: E,
                tooltipText: A.intl.string(A.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: l,
            };
        if (a && !y)
            return {
                tooltipText: A.intl.string(A.t.L7jbQV),
                variant: "active",
                text: E,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, d.n)(g, m.gfo.EMBEDDED) && T === u.$.LOADING)
            return {
                tooltipText: A.intl.string(A.t.cjA5tj),
                variant: "active",
                text: E,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if (c)
            return {
                variant: "expressive",
                text: E,
                onClick: I ? _ : () => S(f, p),
                loading: h,
                iconPosition: "start",
                icon: () => (0, r.jsx)(o.t, { color: "currentColor" }),
                dataTestId: I ? "purchase" : "submitButton",
            };
        else if (!I)
            return {
                tooltipText: A.intl.string(A.t.XdvBLS),
                variant: "active",
                text: E,
                type: "submit",
                onClick: () => S(f, p),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: E, dataTestId: "purchase", onClick: _, loading: h };
    };
function v(e) {
    let { premiumSubscription: t, isGift: n, planGroup: i, isPrepaid: s } = e,
        {
            buttonLabel: o,
            analyticsLocations: u,
            application: c,
            hasAcceptedTerms: d,
            paymentSourceId: _,
            activeSubscription: f,
            devShelfFetchState: p,
            hasPaymentSources: h,
        } = y({ premiumSubscription: t, isGift: n, planGroup: i, isPrepaid: s }),
        {
            tooltipText: E,
            dataTestId: m,
            ...g
        } = N(e, {
            buttonLabel: o,
            analyticsLocations: u,
            application: c,
            hasAcceptedTerms: d,
            paymentSourceId: _,
            activeSubscription: f,
            devShelfFetchState: p,
            hasPaymentSources: h,
        });
    return null != E
        ? (0, r.jsx)(a.m, { text: E, children: (0, r.jsx)(l.$, { "data-testid": m, ...g }) })
        : (0, r.jsx)(l.$, { "data-testid": m, ...g });
}
