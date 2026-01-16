n.d(t, { Ql: () => I });
var r = n(54381),
    i = n(473749),
    a = n(906732),
    o = n(467368),
    s = n(987209),
    l = n(563132),
    c = n(409813),
    u = n(556266),
    d = n(444448),
    f = n(439293),
    p = n(152242),
    _ = n(231338);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = (0, o.Dz)(),
    v = { renderStep: (e) => (0, r.jsx)(d.d, m({}, e)) },
    S = (e) => {
        let { renderStep: t, paymentModalStepProps: n } = e,
            { handleStepChange: r, handleClose: a } = n,
            { renderStepBody: o, disabled: s } = (0, p.n3)({
                handleStepChange: r,
                handleClose: a,
            });
        return t({
            paymentModalStepProps: n,
            unifiedStepProps: i.useMemo(
                () => ({
                    layout: "custom-step-body",
                    renderStepBody: o,
                    primaryCTAButtonProps: { disabled: s },
                }),
                [o, s],
            ),
        });
    },
    I = {
        CustomPaymentContextProvider: (e) => {
            var { children: t, loadId: n, applicationId: i, isGift: o, skuId: s, analyticsLocations: c = [] } = e,
                d = b(e, ["children", "loadId", "applicationId", "isGift", "skuId", "analyticsLocations"]);
            let { analyticsLocations: f } = (0, u.V)(
                m(
                    {
                        applicationId: i,
                        skuId: s,
                        analyticsLocations: c,
                    },
                    d,
                ),
            );
            return (0, r.jsx)(a.Gt, {
                value: f,
                children: (0, r.jsx)(
                    l.PaymentContextProvider,
                    E(
                        m(
                            {
                                loadId: n,
                                applicationId: i,
                                skuIDs: null != s ? [s] : [],
                                purchaseType: _.GZ.ONE_TIME,
                                isGift: o,
                            },
                            d,
                        ),
                        {
                            activeSubscription: null,
                            children: t,
                        },
                    ),
                ),
            });
        },
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    applicationId: o,
                    analyticsSourceLocation: s,
                    analyticsLocations: l,
                    renderModalProps: c,
                    onClose: u,
                    onComplete: d,
                    flowSpecificOptions: f,
                    children: p,
                } = e,
                { analyticsLocations: _ } = (0, a.ZP)(l),
                h = c.onClose,
                m = i.useCallback(
                    (e) => {
                        h(), null != u && u(e);
                    },
                    [h, u],
                ),
                g = i.useMemo(
                    () => ({
                        onClose: m,
                        onComplete: d,
                        applicationId: o,
                        skuId: t,
                        initialPlanId: null,
                        analyticsObject: s,
                        analyticsLocations: _,
                    }),
                    [m, d, o, t, s, _],
                ),
                E = i.useMemo(
                    () => ({
                        skuId: t,
                        loadId: n,
                        flowSpecificOptions: f,
                        analyticsLocations: _,
                    }),
                    [t, n, f, _],
                ),
                b = i.useMemo(
                    () => ({
                        sharedCheckoutContext: E,
                        paymentModalProps: g,
                        renderModalProps: c,
                    }),
                    [E, g, c],
                );
            return (0, r.jsx)(O.Provider, {
                value: b,
                children: p,
            });
        },
        UnifiedCheckoutCustomHeader: (e) => {
            let { onClose: t, step: n } = e,
                { isGift: i } = (0, s.wD)();
            return (0, r.jsx)(f.Z, {
                step: n,
                onClose: () => t(!1),
                isGift: i,
            });
        },
        UnifiedCheckoutStepDefinitions: {
            [c.h8.GIFT_CUSTOMIZATION]: { StepController: S },
            [c.h8.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: v,
    };
