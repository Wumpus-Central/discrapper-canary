n.d(t, {
    A: () => w,
    R: () => I,
}),
    n(938796);
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    o = n(665260),
    s = n(435371),
    l = n(397927),
    c = n(158032),
    u = n(10716),
    d = n(688810),
    f = n(156312),
    p = n(295405),
    _ = n(927578),
    h = n(83617),
    m = n(615396),
    g = n(652215),
    E = n(818348),
    y = n(985018);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}

function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = A(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function I(e) {
    let {
        purchaseType: t,
        plan: n,
        premiumSubscription: r,
        productLine: i,
        isGift: o,
        planGroup: s,
        isPrepaidPaymentSource: l,
        inReverseTrial: c,
        paymentSourceId: u,
        hasPaymentSources: d,
    } = e;
    if (null === u && d) return y.intl.string(y.t.CpOiEO);
    if (t === E.VV.ONE_TIME) return o ? y.intl.string(y.t.ouo4FK) : y.intl.string(y.t.ExD0Ng);
    if ((a()(null != n, "Subscription plan must be selected to render PaymentModalReviewButton"), i === g.EZt.BOOST))
        return y.intl.string(y.t.eUEeCt);
    if (o) return y.intl.string(y.t.ouo4FK);
    if (c) return y.intl.string(y.t.LQVQIq);
    if ((0, _.ys)(n.id))
        return l
            ? y.intl.string(y.t.cRCCJ3)
            : null != r
              ? r.isPausedAllowsResumeButNotUpdates
                  ? y.intl.string(y.t.zpi5pg)
                  : (0, m.Ge)(r, n.id, s)
                    ? y.intl.string(y.t.IJI7yk)
                    : y.intl.string(y.t.VPuTc5)
              : (0, _.ff)(null, n);
    return y.intl.string(y.t.YScQSF);
}

function S(e, t) {
    null != e.current &&
        (e.current.scrollIntoView({
            behavior: "smooth",
        }),
        t());
}
let T = (e) => {
        let { premiumSubscription: t, isGift: n, planGroup: r, isPrepaid: i, inReverseTrial: a } = e,
            {
                application: o,
                selectedPlan: s,
                hasAcceptedTerms: l,
                purchaseType: c,
                paymentSourceId: u,
                activeSubscription: p,
                devShelfFetchState: _,
                hasPaymentSources: h,
            } = (0, f.P5)(),
            m = I({
                purchaseType: c,
                plan: s,
                premiumSubscription: t,
                isGift: n,
                planGroup: r,
                isPrepaidPaymentSource: i,
                inReverseTrial: a,
                paymentSourceId: u,
                hasPaymentSources: h,
            }),
            { analyticsLocations: g } = (0, d.Ay)();
        return {
            buttonLabel: m,
            analyticsLocations: g,
            application: o,
            hasAcceptedTerms: l,
            paymentSourceId: u,
            activeSubscription: p,
            devShelfFetchState: _,
            hasPaymentSources: h,
        };
    },
    C = async (e) => {
        let { paymentSourceId: t, activeSubscription: n, analyticsLocations: r, onNext: i } = e,
            a = p.A.getPaymentSource(t);
        null != a &&
            (await (0, h.c_)(t, (0, m.MP)(n)),
            await c.uK(n, a, n.currency, (0, _.UC)(n.items, n.currency, n.paymentSourceId), r),
            i());
    },
    N = (e, t) => {
        var n;
        let {
                invoiceError: i,
                planError: a,
                disablePurchase: s,
                needsPaymentSource: c,
                onPaymentSourceAdd: d,
                onNext: f,
                isTrial: p,
                inReverseTrial: _,
                makePurchase: h,
                legalTermsNodeRef: m,
                flashLegalTerms: E,
                isSubmitting: b,
            } = e,
            {
                buttonLabel: O,
                analyticsLocations: v,
                application: A,
                hasAcceptedTerms: I,
                paymentSourceId: T,
                activeSubscription: N,
                devShelfFetchState: w,
                hasPaymentSources: R,
            } = t;
        if (null != i || null != a || s)
            return {
                variant: "active",
                text: O,
                disabled: !0,
            };
        if (c && R)
            return {
                text: O,
                tooltipText: y.intl.string(y.t.L7jbQV),
                variant: "primary",
                type: "submit",
                dataTestId: "submitButton",
                onClick: d,
            };
        if (c && !R)
            return {
                tooltipText: y.intl.string(y.t.L7jbQV),
                variant: "active",
                text: O,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if ((0, o.Lt)(null != (n = null == A ? void 0 : A.flags) ? n : 0, g.gfo.EMBEDDED) && w === u.$.LOADING)
            return {
                tooltipText: y.intl.string(y.t.cjA5tj),
                variant: "active",
                text: O,
                type: "submit",
                dataTestId: "submitButton",
                disabled: !0,
            };
        if (p)
            return {
                variant: "expressive",
                text: O,
                onClick: I ? h : () => S(m, E),
                loading: b,
                iconPosition: "start",
                icon: () =>
                    (0, r.jsx)(l.tvc, {
                        color: "currentColor",
                    }),
                dataTestId: I ? "purchase" : "submitButton",
            };
        else if (!I)
            return {
                tooltipText: y.intl.string(y.t.XdvBLS),
                variant: "active",
                text: O,
                type: "submit",
                onClick: () => S(m, E),
                dataTestId: "submitButton",
            };
        else if (_ && null != N && null != T)
            return {
                variant: "active",
                text: O,
                dataTestId: "purchase",
                onClick: () =>
                    C({
                        paymentSourceId: T,
                        activeSubscription: N,
                        analyticsLocations: v,
                        onNext: f,
                    }),
                loading: b,
            };
        else
            return {
                variant: "active",
                text: O,
                dataTestId: "purchase",
                onClick: h,
                loading: b,
            };
    };

function w(e) {
    let { premiumSubscription: t, isGift: n, planGroup: i, isPrepaid: a, inReverseTrial: o } = e,
        {
            buttonLabel: c,
            analyticsLocations: u,
            application: d,
            hasAcceptedTerms: f,
            paymentSourceId: p,
            activeSubscription: _,
            devShelfFetchState: h,
            hasPaymentSources: m,
        } = T({
            premiumSubscription: t,
            isGift: n,
            planGroup: i,
            isPrepaid: a,
            inReverseTrial: o,
        }),
        g = N(e, {
            buttonLabel: c,
            analyticsLocations: u,
            application: d,
            hasAcceptedTerms: f,
            paymentSourceId: p,
            activeSubscription: _,
            devShelfFetchState: h,
            hasPaymentSources: m,
        }),
        { tooltipText: E, dataTestId: y } = g,
        b = v(g, ["tooltipText", "dataTestId"]);
    return null != E
        ? (0, r.jsx)(s.m_, {
              text: E,
              children: (0, r.jsx)(
                  l.Button,
                  O(
                      {
                          "data-testid": y,
                      },
                      b,
                  ),
              ),
          })
        : (0, r.jsx)(
              l.Button,
              O(
                  {
                      "data-testid": y,
                  },
                  b,
              ),
          );
}
