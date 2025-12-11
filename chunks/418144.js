n.d(t, { NB: () => R });
var r = n(54381),
    i = n(473749),
    a = n(906732),
    o = n(467368),
    s = n(987209),
    l = n(563132),
    c = n(409813),
    u = n(608579),
    d = n(49308),
    f = n(117652),
    p = n(981631),
    _ = n(231338),
    m = n(388032);
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
function g(e) {
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
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = (0, i.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skipConfirm: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    S = () => (0, i.useContext)(v),
    I = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: i } = S();
        return (0, r.jsx)(
            d.x,
            g(
                {
                    analyticsLocations: t,
                    hideConfetti: n,
                    confettiCanvas: i,
                },
                e,
            ),
        );
    },
    T = {
        renderStep: (e) => (0, r.jsx)(I, g({}, e)),
        options: u.Kf,
    },
    C = (e) => {
        var { skuId: t, analyticsLocations: n, children: o } = e,
            s = y(e, ["skuId", "analyticsLocations", "children"]);
        let {
                environment: c,
                confettiCanvas: d,
                setConfettiCanvas: f,
                customConfettiVisible: p,
                setCustomConfettiVisible: m,
                customConfettiDisplayOptions: h,
                hideConfirmStepConfetti: E,
            } = (0, u.dc)({ skuId: t }),
            { analyticsLocations: O } = (0, u.Jb)({ analyticsLocations: null != n ? n : [] }),
            { skuIDs: S, skipConfirm: I } = (0, u.Af)({ skuId: t }),
            T = (0, i.useMemo)(
                () => ({
                    analyticsLocations: O,
                    skuIDs: S,
                    skipConfirm: I,
                    setCustomConfettiVisible: m,
                    hideConfirmStepConfetti: E,
                    confettiCanvas: d,
                }),
                [O, S, I, m, E, d],
            );
        return (0, r.jsxs)(a.Gt, {
            value: O,
            children: [
                (0, r.jsx)(u.sy, {
                    environment: c,
                    setConfettiCanvas: f,
                    customConfettiDisplayOptions: h,
                    customConfettiVisible: p,
                }),
                (0, r.jsx)(
                    l.PaymentContextProvider,
                    b(g({}, s), {
                        skuIDs: S,
                        stepConfigs: s.stepConfigs,
                        activeSubscription: null,
                        purchaseType: _.GZ.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, r.jsx)(v.Provider, {
                            value: T,
                            children: o,
                        }),
                    }),
                ),
            ],
        });
    },
    A = (e) => {
        let { onClose: t, step: n } = e,
            { isGift: i, giftingOrigin: a } = (0, s.wD)();
        return (0, r.jsx)(u.tw, {
            step: n,
            onClose: () => t(!1),
            isGift: i,
            giftingOrigin: a,
        });
    },
    N = (0, o.Dz)(),
    P = (e) => {
        let { renderStep: t, paymentModalStepProps: n } = e,
            { handleStepChange: r, handleClose: i } = n,
            {
                leftColumnComponent: a,
                rightColumnComponent: o,
                onStepChange: s,
                ctaDisabled: u,
                loading: d,
            } = (0, f.YX)({
                handleStepChange: r,
                handleClose: i,
            }),
            { hasPaymentSources: p } = (0, l.JL)(),
            _ = p ? c.h8.REVIEW : c.h8.ADD_PAYMENT_STEPS;
        return t({
            unifiedStepProps: {
                leftColumnComponent: a,
                rightColumnComponent: o,
                primaryCTAButtonProps: {
                    onClick: () => s(_),
                    loading: d,
                    text: m.intl.string(m.t.XiOHRX),
                    disabled: u,
                },
            },
        });
    },
    R = {
        CustomPaymentContextProvider: C,
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsSourceLocation: a,
                    renderModalProps: o,
                    onClose: s,
                    onComplete: l,
                    flowSpecificOptions: c,
                    children: d,
                } = e,
                f = o.onClose,
                _ = (e) => {
                    f(), null == s || s(e);
                },
                { skuIDs: m, skipConfirm: h, setCustomConfettiVisible: g, analyticsLocations: E } = S(),
                {
                    paymentModalSkuId: b,
                    paymentModalOnClose: y,
                    paymentModalOnComplete: O,
                } = (0, u.$g)({
                    onClose: _,
                    onComplete: l,
                    skuIDs: m,
                    setCustomConfettiVisible: g,
                }),
                v = (0, i.useMemo)(
                    () => ({
                        loadId: n,
                        skuId: t,
                        analyticsLocations: E,
                        analyticsSourceLocation: a,
                        flowSpecificOptions: c,
                    }),
                    [n, t, E, a, c],
                ),
                I = (0, i.useMemo)(
                    () => ({
                        skuId: b,
                        onClose: y,
                        onComplete: O,
                        applicationId: p.XAJ,
                        initialPlanId: null,
                        analyticsLocations: E,
                        onStepChange: c.onStepChange,
                        skipConfirm: h,
                        hideShadow: !0,
                        transitionState: o.transitionState,
                        returnRef: o.returnRef,
                    }),
                    [b, y, O, E, c.onStepChange, h, o.transitionState, o.returnRef],
                );
            return (0, r.jsx)(N.Provider, {
                value: {
                    sharedCheckoutContext: v,
                    paymentModalProps: I,
                    renderModalProps: o,
                },
                children: d,
            });
        },
        UnifiedCheckoutCustomHeader: A,
        UnifiedCheckoutStepDefinitions: {
            [c.h8.GIFT_CUSTOMIZATION]: { StepController: P },
            [c.h8.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: T,
    };
