"use strict";
n.d(t, { Ke: () => C, Ro: () => S, X1: () => N });
var i = n(627968);
n(64700);
var r = n(284009),
    s = n.n(r),
    a = n(17928),
    o = n(403581),
    l = n(10716),
    u = n(688810),
    c = n(20015),
    d = n(364995),
    _ = n(31823),
    h = n(426398),
    f = n(558620),
    p = n(211159),
    E = n(428262),
    m = n(615396),
    g = n(652215),
    A = n(818348),
    I = n(375708),
    T = n(327105);
function S(e) {
    let {
        purchaseType: t,
        plan: n,
        premiumSubscription: i,
        productLine: r,
        isGift: a,
        planGroup: o,
        isPrepaidPaymentSource: l,
        paymentSourceId: u,
        hasPaymentSources: c,
        willRelocateStoreCountry: d,
    } = e;
    if (null === u && c) return I.intl.string(I.t.CpOiEO);
    if (d) return I.intl.string(T.default["7r4HPu"]);
    if (t === A.VV.ONE_TIME) return a ? I.intl.string(I.t.ouo4FK) : I.intl.string(I.t.ExD0Ng);
    if ((s()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), r === g.EZt.BOOST))
        return I.intl.string(I.t.eUEeCt);
    if (a) return I.intl.string(I.t.ouo4FK);
    if ((0, E.ys)(n.id))
        return l
            ? I.intl.string(I.t.cRCCJ3)
            : null != i
              ? i.isPausedAllowsResumeButNotUpdates
                  ? I.intl.string(I.t.zpi5pg)
                  : (0, m.Ge)(i, n.id, o)
                    ? I.intl.string(I.t.IJI7yk)
                    : I.intl.string(I.t.VPuTc5)
              : (0, E.ff)(null, n);
    return I.intl.string(I.t.YScQSF);
}
function y(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let C = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: i, isPrepaid: r } = e,
            { checkoutPaymentSources: s } = (0, d.t)(),
            {
                hasAcceptedTerms: o,
                paymentSourceId: c,
                purchaseType: E,
                activeSubscription: m,
            } = (0, p.t4)((e) => ({
                hasAcceptedTerms: e.hasAcceptedTerms,
                paymentSourceId: e.paymentSourceId,
                purchaseType: e.purchaseType,
                activeSubscription: e.activeSubscription,
            })),
            { hasPaymentSources: g } = (0, h.jm)(),
            { application: A } = (0, _.V)(),
            I = (0, a.bG)([l.A], () => l.A.getFetchState()),
            T = (0, f.A)(),
            y = null != c && s.some((e) => e.id === c && null != e.relocationCountry),
            C = S({
                purchaseType: E,
                plan: T,
                premiumSubscription: t,
                isGift: n,
                planGroup: i,
                isPrepaidPaymentSource: r,
                paymentSourceId: c,
                hasPaymentSources: g,
                willRelocateStoreCountry: y,
            }),
            { analyticsLocations: N } = (0, u.Ay)();
        return {
            buttonLabel: C,
            analyticsLocations: N,
            hasAcceptedTerms: o,
            application: A,
            paymentSourceId: c,
            activeSubscription: m,
            devShelfFetchState: I,
            hasPaymentSources: g,
        };
    },
    N = (e, t) => {
        let {
                invoiceError: n,
                planError: r,
                disablePurchase: s,
                needsPaymentSource: a,
                onPaymentSourceAdd: u,
                isTrial: d,
                makePurchase: _,
                legalTermsNodeRef: h,
                flashLegalTerms: f,
                isSubmitting: p,
            } = e,
            { buttonLabel: E, hasAcceptedTerms: m, application: A, devShelfFetchState: T, hasPaymentSources: S } = t;
        if (null != n || null != r || s) return { variant: "active", text: E, disabled: !0 };
        if (a && S)
            return {
                text: E,
                tooltipText: I.intl.string(I.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: u,
            };
        if (a && !S)
            return {
                tooltipText: I.intl.string(I.t.L7jbQV),
                variant: "active",
                text: E,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, c.n)(A, g.gfo.EMBEDDED) && T === l.$.LOADING)
            return {
                tooltipText: I.intl.string(I.t.cjA5tj),
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
                onClick: m ? _ : () => y(h, f),
                loading: p,
                iconPosition: "start",
                icon: () => (0, i.jsx)(o.t, { color: "currentColor" }),
                dataTestId: m ? "purchase" : "submitButton",
            };
        else if (!m)
            return {
                tooltipText: I.intl.string(I.t.XdvBLS),
                variant: "active",
                text: E,
                type: "submit",
                onClick: () => y(h, f),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: E, dataTestId: "purchase", onClick: _, loading: p };
    };
