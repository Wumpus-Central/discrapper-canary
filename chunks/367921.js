"use strict";
n.d(t, { Ay: () => C, Ke: () => y, Ro: () => I, X1: () => v }), n(938796);
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(665260),
    o = n(435371),
    l = n(397927),
    u = n(158032),
    c = n(10716),
    d = n(688810),
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
let y = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: r, isPrepaid: i, inReverseTrial: a } = e,
            {
                application: s,
                selectedPlan: o,
                hasAcceptedTerms: l,
                purchaseType: u,
                paymentSourceId: c,
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
                paymentSourceId: c,
                hasPaymentSources: h,
            }),
            { analyticsLocations: g } = (0, d.Ay)();
        return {
            buttonLabel: m,
            analyticsLocations: g,
            application: s,
            hasAcceptedTerms: l,
            paymentSourceId: c,
            activeSubscription: f,
            devShelfFetchState: p,
            hasPaymentSources: h,
        };
    },
    S = async (e) => {
        let { paymentSourceId: t, activeSubscription: n, analyticsLocations: r, onNext: i } = e,
            a = f.A.getPaymentSource(t);
        null != a &&
            (await (0, h.c_)(t, (0, m.MP)(n)),
            await u.uK(n, a, n.currency, (0, p.UC)(n.items, n.currency, n.paymentSourceId), r),
            i());
    },
    v = (e, t) => {
        let {
                invoiceError: n,
                planError: i,
                disablePurchase: a,
                needsPaymentSource: o,
                onPaymentSourceAdd: u,
                onNext: d,
                isTrial: _,
                inReverseTrial: f,
                makePurchase: p,
                legalTermsNodeRef: h,
                flashLegalTerms: m,
                isSubmitting: E,
            } = e,
            {
                buttonLabel: I,
                analyticsLocations: y,
                application: v,
                hasAcceptedTerms: C,
                paymentSourceId: b,
                activeSubscription: N,
                devShelfFetchState: R,
                hasPaymentSources: O,
            } = t;
        if (null != n || null != i || a) return { variant: "active", text: I, disabled: !0 };
        if (o && O)
            return {
                text: I,
                tooltipText: A.intl.string(A.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: u,
            };
        if (o && !O)
            return {
                tooltipText: A.intl.string(A.t.L7jbQV),
                variant: "active",
                text: I,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, s.Lt)(v?.flags ?? 0, g.gfo.EMBEDDED) && R === c.$.LOADING)
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
                icon: () => (0, r.jsx)(l.tvc, { color: "currentColor" }),
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
        else if (f && null != N && null != b)
            return {
                variant: "active",
                text: I,
                dataTestId: "purchase",
                onClick: () => S({ paymentSourceId: b, activeSubscription: N, analyticsLocations: y, onNext: d }),
                loading: E,
            };
        else return { variant: "active", text: I, dataTestId: "purchase", onClick: p, loading: E };
    };
function C(e) {
    let { premiumSubscription: t, isGift: n, planGroup: i, isPrepaid: a, inReverseTrial: s } = e,
        {
            buttonLabel: u,
            analyticsLocations: c,
            application: d,
            hasAcceptedTerms: _,
            paymentSourceId: f,
            activeSubscription: p,
            devShelfFetchState: h,
            hasPaymentSources: m,
        } = y({ premiumSubscription: t, isGift: n, planGroup: i, isPrepaid: a, inReverseTrial: s }),
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
        ? (0, r.jsx)(o.m_, { text: g, children: (0, r.jsx)(l.Button, { "data-testid": E, ...A }) })
        : (0, r.jsx)(l.Button, { "data-testid": E, ...A });
}
