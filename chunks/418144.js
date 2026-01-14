n.d(t, { NB: () => P });
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
    _ = n(231338);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
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
let O = (0, i.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    v = () => (0, i.useContext)(O),
    S = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: i } = v();
        return (0, r.jsx)(
            d.x,
            h(
                {
                    analyticsLocations: t,
                    hideConfetti: n,
                    confettiCanvas: i,
                },
                e,
            ),
        );
    },
    I = {
        renderStep: (e) => (0, r.jsx)(S, h({}, e)),
        options: u.Kf,
    },
    T = (e) => {
        var { skuId: t, analyticsLocations: n, children: o } = e,
            s = b(e, ["skuId", "analyticsLocations", "children"]);
        let {
                environment: c,
                confettiCanvas: d,
                setConfettiCanvas: f,
                customConfettiVisible: p,
                setCustomConfettiVisible: m,
                customConfettiDisplayOptions: g,
                hideConfirmStepConfetti: y,
            } = (0, u.dc)({ skuId: t }),
            { analyticsLocations: v } = (0, u.Jb)({ analyticsLocations: null != n ? n : [] }),
            S = (0, u.Af)({ skuId: t }),
            I = (0, i.useMemo)(
                () => ({
                    analyticsLocations: v,
                    skuIDs: S,
                    setCustomConfettiVisible: m,
                    hideConfirmStepConfetti: y,
                    confettiCanvas: d,
                }),
                [v, S, m, y, d],
            );
        return (0, r.jsxs)(a.Gt, {
            value: v,
            children: [
                (0, r.jsx)(u.sy, {
                    environment: c,
                    setConfettiCanvas: f,
                    customConfettiDisplayOptions: g,
                    customConfettiVisible: p,
                }),
                (0, r.jsx)(
                    l.PaymentContextProvider,
                    E(h({}, s), {
                        skuIDs: S,
                        stepConfigs: s.stepConfigs,
                        activeSubscription: null,
                        purchaseType: _.GZ.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, r.jsx)(O.Provider, {
                            value: I,
                            children: o,
                        }),
                    }),
                ),
            ],
        });
    },
    C = (e) => {
        let { onClose: t, step: n } = e,
            { isGift: i, giftingOrigin: a } = (0, s.wD)();
        return (0, r.jsx)(u.tw, {
            step: n,
            onClose: () => t(!1),
            isGift: i,
            giftingOrigin: a,
        });
    },
    A = (0, o.Dz)(),
    N = (e) => {
        let { renderStep: t, paymentModalStepProps: n } = e,
            { handleStepChange: r, handleClose: i } = n,
            {
                renderLeftColumn: a,
                renderRightColumn: o,
                ctaDisabled: s,
                loading: l,
            } = (0, f.YX)({
                handleStepChange: r,
                handleClose: i,
            });
        return t({
            paymentModalStepProps: n,
            unifiedStepProps: {
                layout: "two-column",
                renderLeftColumn: a,
                renderRightColumn: o,
                primaryCTAButtonProps: {
                    loading: l,
                    disabled: s,
                },
            },
        });
    },
    P = {
        CustomPaymentContextProvider: T,
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
                { skuIDs: m, setCustomConfettiVisible: h, analyticsLocations: g } = v(),
                {
                    paymentModalSkuId: E,
                    paymentModalOnClose: b,
                    paymentModalOnComplete: y,
                } = (0, u.$g)({
                    onClose: _,
                    onComplete: l,
                    skuIDs: m,
                    setCustomConfettiVisible: h,
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
                S = (0, i.useMemo)(
                    () => ({
                        skuId: E,
                        onClose: b,
                        onComplete: y,
                        applicationId: p.XAJ,
                        initialPlanId: null,
                        analyticsLocations: g,
                        onStepChange: c.onStepChange,
                        hideShadow: !0,
                        transitionState: o.transitionState,
                        returnRef: o.returnRef,
                    }),
                    [E, b, y, g, c.onStepChange, o.transitionState, o.returnRef],
                );
            return (0, r.jsx)(A.Provider, {
                value: {
                    sharedCheckoutContext: O,
                    paymentModalProps: S,
                    renderModalProps: o,
                },
                children: d,
            });
        },
        UnifiedCheckoutCustomHeader: C,
        UnifiedCheckoutStepDefinitions: {
            [c.h8.GIFT_CUSTOMIZATION]: { StepController: N },
            [c.h8.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: I,
    };
