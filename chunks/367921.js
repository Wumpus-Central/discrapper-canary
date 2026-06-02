n.d(t, { Ay: () => R, Ke: () => g, Ro: () => N, X1: () => x });
var l = n(627968);
n(64700);
var r = n(284009),
    i = n.n(r),
    a = n(17928),
    s = n(990078),
    o = n(403581),
    u = n(821609),
    c = n(10716),
    d = n(688810),
    p = n(20015),
    m = n(546605),
    h = n(364995),
    A = n(31823),
    C = n(426398),
    E = n(558620),
    y = n(722847),
    P = n(428262),
    S = n(615396),
    _ = n(652215),
    f = n(818348),
    I = n(375708),
    T = n(327105);
function N(e) {
    let {
        purchaseType: t,
        plan: n,
        premiumSubscription: l,
        productLine: r,
        isGift: a,
        planGroup: s,
        isPrepaidPaymentSource: o,
        paymentSourceId: u,
        hasPaymentSources: c,
        willRelocateStoreCountry: d,
    } = e;
    if (null === u && c) return I.intl.string(I.t.CpOiEO);
    if (d) return I.intl.string(T.default["7r4HPu"]);
    if (t === f.VV.ONE_TIME) return a ? I.intl.string(I.t.ouo4FK) : I.intl.string(I.t.ExD0Ng);
    if ((i()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), r === _.EZt.BOOST))
        return I.intl.string(I.t.eUEeCt);
    if (a) return I.intl.string(I.t.ouo4FK);
    if ((0, P.ys)(n.id))
        return o
            ? I.intl.string(I.t.cRCCJ3)
            : null != l
              ? l.isPausedAllowsResumeButNotUpdates
                  ? I.intl.string(I.t.zpi5pg)
                  : (0, S.Ge)(l, n.id, s)
                    ? I.intl.string(I.t.IJI7yk)
                    : I.intl.string(I.t.VPuTc5)
              : (0, P.ff)(null, n);
    return I.intl.string(I.t.YScQSF);
}
function v(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let g = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: l, isPrepaid: r } = e,
            { checkoutPaymentSources: i } = (0, h.t)(),
            {
                hasAcceptedTerms: s,
                paymentSourceId: o,
                purchaseType: u,
                activeSubscription: p,
            } = (0, y.t4)((e) => ({
                hasAcceptedTerms: e.hasAcceptedTerms,
                paymentSourceId: e.paymentSourceId,
                purchaseType: e.purchaseType,
                activeSubscription: e.activeSubscription,
            })),
            { hasPaymentSources: P } = (0, C.jm)(),
            { application: S } = (0, A.V)(),
            _ = (0, a.bG)([c.A], () => c.A.getFetchState()),
            f = (0, E.A)(),
            I =
                (0, m.vg)("PaymentModalReviewButton") &&
                null != o &&
                i.some((e) => e.id === o && null != e.relocationCountry),
            T = N({
                purchaseType: u,
                plan: f,
                premiumSubscription: t,
                isGift: n,
                planGroup: l,
                isPrepaidPaymentSource: r,
                paymentSourceId: o,
                hasPaymentSources: P,
                willRelocateStoreCountry: I,
            }),
            { analyticsLocations: v } = (0, d.Ay)();
        return {
            buttonLabel: T,
            analyticsLocations: v,
            hasAcceptedTerms: s,
            application: S,
            paymentSourceId: o,
            activeSubscription: p,
            devShelfFetchState: _,
            hasPaymentSources: P,
        };
    },
    x = (e, t) => {
        let {
                invoiceError: n,
                planError: r,
                disablePurchase: i,
                needsPaymentSource: a,
                onPaymentSourceAdd: s,
                isTrial: u,
                makePurchase: d,
                legalTermsNodeRef: m,
                flashLegalTerms: h,
                isSubmitting: A,
            } = e,
            { buttonLabel: C, hasAcceptedTerms: E, application: y, devShelfFetchState: P, hasPaymentSources: S } = t;
        if (null != n || null != r || i) return { variant: "active", text: C, disabled: !0 };
        if (a && S)
            return {
                text: C,
                tooltipText: I.intl.string(I.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: s,
            };
        if (a && !S)
            return {
                tooltipText: I.intl.string(I.t.L7jbQV),
                variant: "active",
                text: C,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, p.n)(y, _.gfo.EMBEDDED) && P === c.$.LOADING)
            return {
                tooltipText: I.intl.string(I.t.cjA5tj),
                variant: "active",
                text: C,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if (u)
            return {
                variant: "expressive",
                text: C,
                onClick: E ? d : () => v(m, h),
                loading: A,
                iconPosition: "start",
                icon: () => (0, l.jsx)(o.t, { color: "currentColor" }),
                dataTestId: E ? "purchase" : "submitButton",
            };
        else if (!E)
            return {
                tooltipText: I.intl.string(I.t.XdvBLS),
                variant: "active",
                text: C,
                type: "submit",
                onClick: () => v(m, h),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: C, dataTestId: "purchase", onClick: d, loading: A };
    };
function R(e) {
    let { premiumSubscription: t, isGift: n, planGroup: r, isPrepaid: i } = e,
        {
            buttonLabel: a,
            analyticsLocations: o,
            hasAcceptedTerms: c,
            application: d,
            paymentSourceId: p,
            activeSubscription: m,
            devShelfFetchState: h,
            hasPaymentSources: A,
        } = g({ premiumSubscription: t, isGift: n, planGroup: r, isPrepaid: i }),
        {
            tooltipText: C,
            dataTestId: E,
            ...y
        } = x(e, {
            buttonLabel: a,
            analyticsLocations: o,
            hasAcceptedTerms: c,
            application: d,
            paymentSourceId: p,
            activeSubscription: m,
            devShelfFetchState: h,
            hasPaymentSources: A,
        });
    return null != C
        ? (0, l.jsx)(s.m, { text: C, children: (0, l.jsx)(u.$, { "data-testid": E, ...y }) })
        : (0, l.jsx)(u.$, { "data-testid": E, ...y });
}
