n.d(t, {
    A: () => y,
    R: () => E,
}),
    n(938796);
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(665260),
    o = n(435371),
    l = n(397927),
    c = n(10716),
    u = n(688810),
    d = n(156312),
    f = n(927578),
    p = n(615396),
    _ = n(766998),
    h = n(652215),
    m = n(818348),
    g = n(985018);
function E(e) {
    let {
        purchaseType: t,
        plan: n,
        premiumSubscription: r,
        productLine: i,
        isGift: s,
        planGroup: o,
        isPrepaidPaymentSource: l,
        inReverseTrial: c,
        paymentSourceId: u,
        hasPaymentSources: d,
    } = e;
    if (null === u && d) return g.intl.string(g.t.CpOiEO);
    if (t === m.VV.ONE_TIME) return s ? g.intl.string(g.t.ouo4FK) : g.intl.string(g.t.ExD0Ng);
    if ((a()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), i === h.EZt.BOOST))
        return g.intl.string(g.t.eUEeCt);
    if (s) return g.intl.string(g.t.ouo4FK);
    if (c) return g.intl.string(g.t.LQVQIq);
    if ((0, f.ys)(n.id))
        return l
            ? g.intl.string(g.t.cRCCJ3)
            : null != r
              ? r.isPausedAllowsResumeButNotUpdates
                  ? g.intl.string(g.t.zpi5pg)
                  : (0, p.Ge)(r, n.id, o)
                    ? g.intl.string(g.t.IJI7yk)
                    : g.intl.string(g.t.VPuTc5)
              : (0, f.ff)(null, n);
    return g.intl.string(g.t.YScQSF);
}
function b(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
function y(e) {
    var t;
    let {
            legalTermsNodeRef: n,
            invoiceError: i,
            planError: a,
            disablePurchase: f,
            flashLegalTerms: p,
            isSubmitting: m,
            premiumSubscription: y,
            isGift: O,
            planGroup: A,
            isPrepaid: v,
            isTrial: S,
            makePurchase: I,
            needsPaymentSource: T,
            inReverseTrial: C,
            onNext: N,
            onPaymentSourceAdd: R,
        } = e,
        {
            application: w,
            selectedPlan: P,
            hasAcceptedTerms: D,
            purchaseType: x,
            paymentSourceId: L,
            activeSubscription: j,
            devShelfFetchState: M,
            hasPaymentSources: k,
        } = (0, d.P5)(),
        U = E({
            purchaseType: x,
            plan: P,
            premiumSubscription: y,
            isGift: O,
            planGroup: A,
            isPrepaidPaymentSource: v,
            inReverseTrial: C,
            paymentSourceId: L,
            hasPaymentSources: k,
        }),
        { analyticsLocations: G } = (0, u.Ay)();
    if (null != i || null != a || f)
        return (0, r.jsx)(l.Button, {
            variant: "active",
            text: U,
            disabled: !0,
        });
    if (T && k)
        return (0, r.jsx)(o.m_, {
            text: g.intl.string(g.t.L7jbQV),
            children: (0, r.jsx)(l.Button, {
                variant: "primary",
                text: U,
                type: "submit",
                "data-testid": "submitButton",
                onClick: R,
            }),
        });
    if (T && !k)
        return (0, r.jsx)(o.m_, {
            text: g.intl.string(g.t.L7jbQV),
            children: (0, r.jsx)(l.Button, {
                variant: "active",
                text: U,
                type: "submit",
                "data-testid": "submitButton",
                disabled: !0,
            }),
        });
    if ((0, s.Lt)(null != (t = null == w ? void 0 : w.flags) ? t : 0, h.gfo.EMBEDDED) && M === c.$.LOADING)
        return (0, r.jsx)(o.m_, {
            text: g.intl.string(g.t.cjA5tj),
            children: (0, r.jsx)(l.Button, {
                variant: "active",
                text: U,
                type: "submit",
                "data-testid": "submitButton",
                disabled: !0,
            }),
        });
    if (S)
        return (0, r.jsx)(l.Button, {
            variant: "expressive",
            "data-testid": D ? "purchase" : "submitButton",
            text: U,
            onClick: D ? I : () => b(n, p),
            loading: m,
            iconPosition: "start",
            icon: () => (0, r.jsx)(l.tvc, { color: "currentColor" }),
        });
    else if (!D)
        return (0, r.jsx)(o.m_, {
            text: g.intl.string(g.t.XdvBLS),
            children: (0, r.jsx)(l.Button, {
                variant: "active",
                text: U,
                type: "submit",
                onClick: () => b(n, p),
                "data-testid": "submitButton",
            }),
        });
    else if (C && null != j && null != L)
        return (0, r.jsx)(_.A, {
            activeSubscription: j,
            onNext: N,
            isSubmitting: m,
            paymentSourceId: L,
            buttonLabel: U,
            analyticsLocations: G,
        });
    else
        return (0, r.jsx)(l.Button, {
            variant: "active",
            text: U,
            "data-testid": "purchase",
            onClick: I,
            loading: m,
        });
}
