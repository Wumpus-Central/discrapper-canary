n.d(t, {
    OU: () => R,
});
var r = n(627968),
    i = n(64700),
    a = n(688810),
    s = n(736843),
    o = n(937008),
    l = n(156312),
    c = n(166532),
    u = n(165823),
    d = n(975189),
    f = n(503516),
    p = n(652215),
    _ = n(818348);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = y(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let O = (0, i.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    A = () => (0, i.useContext)(O),
    v = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: i } = A();
        return (0, r.jsx)(
            d.v,
            m(
                {
                    analyticsLocations: t,
                    hideConfetti: n,
                    confettiCanvas: i,
                },
                e,
            ),
        );
    },
    S = {
        renderStep: (e) => (0, r.jsx)(v, m({}, e)),
        options: u.yC,
    },
    I = (e) => {
        let { skuId: t, analyticsLocations: n, children: s } = e,
            o = b(e, ["skuId", "analyticsLocations", "children"]),
            {
                environment: c,
                confettiCanvas: d,
                setConfettiCanvas: f,
                customConfettiVisible: p,
                setCustomConfettiVisible: h,
                customConfettiDisplayOptions: g,
                hideConfirmStepConfetti: y,
            } = (0, u.Ub)({
                skuId: t,
            }),
            { analyticsLocations: A } = (0, u.NW)({
                analyticsLocations: null != n ? n : [],
            }),
            v = (0, u.v1)({
                skuId: t,
            }),
            S = (0, i.useMemo)(
                () => ({
                    analyticsLocations: A,
                    skuIDs: v,
                    setCustomConfettiVisible: h,
                    hideConfirmStepConfetti: y,
                    confettiCanvas: d,
                }),
                [A, v, h, y, d],
            );
        return (0, r.jsxs)(a.f5, {
            value: A,
            children: [
                (0, r.jsx)(u.Kg, {
                    environment: c,
                    setConfettiCanvas: f,
                    customConfettiDisplayOptions: g,
                    customConfettiVisible: p,
                }),
                (0, r.jsx)(
                    l.PaymentContextProvider,
                    E(m({}, o), {
                        skuIDs: v,
                        stepConfigs: o.stepConfigs,
                        activeSubscription: null,
                        purchaseType: _.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, r.jsx)(O.Provider, {
                            value: S,
                            children: s,
                        }),
                    }),
                ),
            ],
        });
    },
    T = (e) => {
        let { onClose: t, step: n } = e,
            { isGift: i, giftingOrigin: a } = (0, o.Pv)();
        return (0, r.jsx)(u.kj, {
            step: n,
            onClose: () => t(!1),
            isGift: i,
            giftingOrigin: a,
        });
    },
    C = (0, s.Mz)(),
    N = (e) => {
        let { renderStep: t, paymentModalStepProps: n } = e,
            { handleStepChange: r, handleClose: i } = n,
            {
                renderLeftColumn: a,
                renderRightColumn: s,
                ctaDisabled: o,
                loading: l,
            } = (0, f.eI)({
                handleStepChange: r,
                handleClose: i,
            });
        return t({
            paymentModalStepProps: n,
            unifiedStepProps: {
                layout: "two-column",
                renderLeftColumn: a,
                renderRightColumn: s,
                primaryCTAButtonProps: {
                    loading: l,
                    disabled: o,
                },
            },
        });
    },
    R = {
        CustomPaymentContextProvider: I,
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsSourceLocation: a,
                    renderModalProps: s,
                    onClose: o,
                    onComplete: l,
                    flowSpecificOptions: c,
                    children: d,
                } = e,
                f = s.onClose,
                _ = (e) => {
                    f(), null == o || o(e);
                },
                { skuIDs: h, setCustomConfettiVisible: m, analyticsLocations: g } = A(),
                {
                    paymentModalSkuId: E,
                    paymentModalOnClose: b,
                    paymentModalOnComplete: y,
                } = (0, u.ot)({
                    onClose: _,
                    onComplete: l,
                    skuIDs: h,
                    setCustomConfettiVisible: m,
                }),
                O = (0, i.useMemo)(
                    () => ({
                        loadId: n,
                        skuId: t,
                        analyticsLocations: g,
                        analyticsSourceLocation: a,
                        flowSpecificOptions: c,
                    }),
                    [n, t, g, a, c],
                ),
                v = (0, i.useMemo)(
                    () => ({
                        skuId: E,
                        onClose: b,
                        onComplete: y,
                        applicationId: p.FYj,
                        initialPlanId: null,
                        analyticsLocations: g,
                        onStepChange: c.onStepChange,
                        hideShadow: !0,
                        transitionState: s.transitionState,
                        returnRef: s.returnRef,
                    }),
                    [E, b, y, g, c.onStepChange, s.transitionState, s.returnRef],
                );
            return (0, r.jsx)(C.Provider, {
                value: {
                    sharedCheckoutContext: O,
                    paymentModalProps: v,
                    renderModalProps: s,
                },
                children: d,
            });
        },
        UnifiedCheckoutCustomHeader: T,
        UnifiedCheckoutStepDefinitions: {
            [c.pn.GIFT_CUSTOMIZATION]: {
                StepController: N,
            },
            [c.pn.REVIEW]: {
                legacyStepConfig: !0,
            },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: S,
    };
