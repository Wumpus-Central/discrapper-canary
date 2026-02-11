"use strict";
n.d(t, { Ay: () => C, Ke: () => S, Ro: () => I, X1: () => v });
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(435371),
    o = n(397927),
    l = n(158032),
    u = n(10716),
    c = n(688810),
    d = n(20015),
    _ = n(156312),
    f = n(295405),
    p = n(927578),
    h = n(83617),
    m = n(615396),
    g = n(652215),
    E = n(818348),
    A = n(985018);
function I(e) {
    let {
        purchaseType: t,
        plan: n,
        premiumSubscription: r,
        productLine: i,
        isGift: s,
        planGroup: o,
        isPrepaidPaymentSource: l,
        inReverseTrial: u,
        paymentSourceId: c,
        hasPaymentSources: d,
    } = e;
    if (null === c && d) return A.intl.string(A.t.CpOiEO);
    if (t === E.VV.ONE_TIME) return s ? A.intl.string(A.t.ouo4FK) : A.intl.string(A.t.ExD0Ng);
    if ((a()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), i === g.EZt.BOOST))
        return A.intl.string(A.t.eUEeCt);
    if (s) return A.intl.string(A.t.ouo4FK);
    if (u) return A.intl.string(A.t.LQVQIq);
    if ((0, p.ys)(n.id))
        return l
            ? A.intl.string(A.t.cRCCJ3)
            : null != r
              ? r.isPausedAllowsResumeButNotUpdates
                  ? A.intl.string(A.t.zpi5pg)
                  : (0, m.Ge)(r, n.id, o)
                    ? A.intl.string(A.t.IJI7yk)
                    : A.intl.string(A.t.VPuTc5)
              : (0, p.ff)(null, n);
    return A.intl.string(A.t.YScQSF);
}
function T(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let S = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: r, isPrepaid: i, inReverseTrial: a } = e,
            {
                application: s,
                selectedPlan: o,
                hasAcceptedTerms: l,
                purchaseType: u,
                paymentSourceId: d,
                activeSubscription: f,
                devShelfFetchState: p,
                hasPaymentSources: h,
            } = (0, _.P5)(),
            m = I({
                purchaseType: u,
                plan: o,
                premiumSubscription: t,
                isGift: n,
                planGroup: r,
                isPrepaidPaymentSource: i,
                inReverseTrial: a,
                paymentSourceId: d,
                hasPaymentSources: h,
            }),
            { analyticsLocations: g } = (0, c.Ay)();
        return {
            buttonLabel: m,
            analyticsLocations: g,
            application: s,
            hasAcceptedTerms: l,
            paymentSourceId: d,
            activeSubscription: f,
            devShelfFetchState: p,
            hasPaymentSources: h,
        };
    },
    y = async (e) => {
        let { paymentSourceId: t, activeSubscription: n, analyticsLocations: r, onNext: i } = e,
            a = f.A.getPaymentSource(t);
        null != a &&
            (await (0, h.c_)(t, (0, m.MP)(n)),
            await l.uK(n, a, n.currency, (0, p.UC)(n.items, n.currency, n.paymentSourceId), r),
            i());
    },
    v = (e, t) => {
        let {
                invoiceError: n,
                planError: i,
                disablePurchase: a,
                needsPaymentSource: s,
                onPaymentSourceAdd: l,
                onNext: c,
                isTrial: _,
                inReverseTrial: f,
                makePurchase: p,
                legalTermsNodeRef: h,
                flashLegalTerms: m,
                isSubmitting: E,
            } = e,
            {
                buttonLabel: I,
                analyticsLocations: S,
                application: v,
                hasAcceptedTerms: C,
                paymentSourceId: N,
                activeSubscription: b,
                devShelfFetchState: R,
                hasPaymentSources: O,
            } = t;
        if (null != n || null != i || a) return { variant: "active", text: I, disabled: !0 };
        if (s && O)
            return {
                text: I,
                tooltipText: A.intl.string(A.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: l,
            };
        if (s && !O)
            return {
                tooltipText: A.intl.string(A.t.L7jbQV),
                variant: "active",
                text: I,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, d.n)(v, g.gfo.EMBEDDED) && R === u.$.LOADING)
            return {
                tooltipText: A.intl.string(A.t.cjA5tj),
                variant: "active",
                text: I,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if (_)
            return {
                variant: "expressive",
                text: I,
                onClick: C ? p : () => T(h, m),
                loading: E,
                iconPosition: "start",
                icon: () => (0, r.jsx)(o.tvc, { color: "currentColor" }),
                dataTestId: C ? "purchase" : "submitButton",
            };
        else if (!C)
            return {
                tooltipText: A.intl.string(A.t.XdvBLS),
                variant: "active",
                text: I,
                type: "submit",
                onClick: () => T(h, m),
                dataTestId: "submitButton",
            };
        else if (f && null != b && null != N)
            return {
                variant: "active",
                text: I,
                dataTestId: "purchase",
                onClick: () => y({ paymentSourceId: N, activeSubscription: b, analyticsLocations: S, onNext: c }),
                loading: E,
            };
        else return { variant: "active", text: I, dataTestId: "purchase", onClick: p, loading: E };
    };
function C(e) {
    let { premiumSubscription: t, isGift: n, planGroup: i, isPrepaid: a, inReverseTrial: l } = e,
        {
            buttonLabel: u,
            analyticsLocations: c,
            application: d,
            hasAcceptedTerms: _,
            paymentSourceId: f,
            activeSubscription: p,
            devShelfFetchState: h,
            hasPaymentSources: m,
        } = S({ premiumSubscription: t, isGift: n, planGroup: i, isPrepaid: a, inReverseTrial: l }),
        {
            tooltipText: g,
            dataTestId: E,
            ...A
        } = v(e, {
            buttonLabel: u,
            analyticsLocations: c,
            application: d,
            hasAcceptedTerms: _,
            paymentSourceId: f,
            activeSubscription: p,
            devShelfFetchState: h,
            hasPaymentSources: m,
        });
    return null != g
        ? (0, r.jsx)(s.m_, { text: g, children: (0, r.jsx)(o.Button, { "data-testid": E, ...A }) })
        : (0, r.jsx)(o.Button, { "data-testid": E, ...A });
}
