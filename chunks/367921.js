n.d(t, { Ay: () => N, Ke: () => T, Ro: () => P, X1: () => x });
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
    h = n(156312),
    A = n(927578),
    C = n(615396),
    _ = n(652215),
    E = n(818348),
    y = n(985018),
    f = n(327105);
function P(e) {
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
    if (null === u && c) return y.intl.string(y.t.CpOiEO);
    if (d) return y.intl.string(f.default["7r4HPu"]);
    if (t === E.VV.ONE_TIME) return r ? y.intl.string(y.t.ouo4FK) : y.intl.string(y.t.ExD0Ng);
    if ((i()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), a === _.EZt.BOOST))
        return y.intl.string(y.t.eUEeCt);
    if (r) return y.intl.string(y.t.ouo4FK);
    if ((0, A.ys)(n.id))
        return o
            ? y.intl.string(y.t.cRCCJ3)
            : null != l
              ? l.isPausedAllowsResumeButNotUpdates
                  ? y.intl.string(y.t.zpi5pg)
                  : (0, C.Ge)(l, n.id, s)
                    ? y.intl.string(y.t.IJI7yk)
                    : y.intl.string(y.t.VPuTc5)
              : (0, A.ff)(null, n);
    return y.intl.string(y.t.YScQSF);
}
function S(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
let T = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: l, isPrepaid: a } = e,
            {
                application: i,
                hasAcceptedTerms: r,
                purchaseType: s,
                paymentSourceId: o,
                activeSubscription: u,
                devShelfFetchState: d,
                hasPaymentSources: A,
                checkoutPaymentSources: C,
            } = (0, h.P5)(),
            _ = (0, m.A)(),
            E =
                (0, p.vg)("PaymentModalReviewButton") &&
                null != o &&
                C.some((e) => e.id === o && null != e.relocationCountry),
            y = P({
                purchaseType: s,
                plan: _,
                premiumSubscription: t,
                isGift: n,
                planGroup: l,
                isPrepaidPaymentSource: a,
                paymentSourceId: o,
                hasPaymentSources: A,
                willRelocateStoreCountry: E,
            }),
            { analyticsLocations: f } = (0, c.Ay)();
        return {
            buttonLabel: y,
            analyticsLocations: f,
            application: i,
            hasAcceptedTerms: r,
            paymentSourceId: o,
            activeSubscription: u,
            devShelfFetchState: d,
            hasPaymentSources: A,
        };
    },
    x = (e, t) => {
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
            { buttonLabel: C, application: E, hasAcceptedTerms: f, devShelfFetchState: P, hasPaymentSources: T } = t;
        if (null != n || null != a || i) return { variant: "active", text: C, disabled: !0 };
        if (r && T)
            return {
                text: C,
                tooltipText: y.intl.string(y.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: o,
            };
        if (r && !T)
            return {
                tooltipText: y.intl.string(y.t.L7jbQV),
                variant: "active",
                text: C,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, d.n)(E, _.gfo.EMBEDDED) && P === u.$.LOADING)
            return {
                tooltipText: y.intl.string(y.t.cjA5tj),
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
                onClick: f ? p : () => S(m, h),
                loading: A,
                iconPosition: "start",
                icon: () => (0, l.jsx)(s.t, { color: "currentColor" }),
                dataTestId: f ? "purchase" : "submitButton",
            };
        else if (!f)
            return {
                tooltipText: y.intl.string(y.t.XdvBLS),
                variant: "active",
                text: C,
                type: "submit",
                onClick: () => S(m, h),
                dataTestId: "submitButton",
            };
        else return { variant: "active", text: C, dataTestId: "purchase", onClick: p, loading: A };
    };
function N(e) {
    let { premiumSubscription: t, isGift: n, planGroup: a, isPrepaid: i } = e,
        {
            buttonLabel: s,
            analyticsLocations: u,
            application: c,
            hasAcceptedTerms: d,
            paymentSourceId: p,
            activeSubscription: m,
            devShelfFetchState: h,
            hasPaymentSources: A,
        } = T({ premiumSubscription: t, isGift: n, planGroup: a, isPrepaid: i }),
        {
            tooltipText: C,
            dataTestId: _,
            ...E
        } = x(e, {
            buttonLabel: s,
            analyticsLocations: u,
            application: c,
            hasAcceptedTerms: d,
            paymentSourceId: p,
            activeSubscription: m,
            devShelfFetchState: h,
            hasPaymentSources: A,
        });
    return null != C
        ? (0, l.jsx)(r.m, { text: C, children: (0, l.jsx)(o.$, { "data-testid": _, ...E }) })
        : (0, l.jsx)(o.$, { "data-testid": _, ...E });
}
