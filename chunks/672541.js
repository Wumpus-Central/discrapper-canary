n.d(t, { G4: () => S }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(736843),
    a = n(69882),
    o = n(169797),
    u = n(93159),
    d = n(977445),
    c = n(166532),
    C = n(482132),
    p = n(908419),
    m = n(67480),
    E = n(775420),
    A = n(440612),
    h = n(459750),
    f = n(985018);
let _ = () => f.intl.string(f.t.wmcDyu);
function g() {
    let { immediateDelivery: e } = (0, p.U)(),
        t = _();
    return (0, l.jsx)(u._P, {
        variant: { type: u.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let T = (0, s.Mz)(),
    x = (0, r.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    S = {
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsLocations: r,
                    analyticsSourceLocation: i,
                    renderModalProps: s,
                    flowSpecificOptions: a,
                    children: o,
                } = e,
                { onCheckoutSuccess: u } = a,
                {
                    orbProductContext: d,
                    isRedeeming: c,
                    orbRedemptionError: C,
                    onRedeemVirtualCurrency: p,
                } = (0, E.e6)({ skuId: t, loadId: n, onCheckoutSuccess: u, analyticsLocations: r }),
                m = (0, A.My)({
                    onClose: s.onClose,
                    skuId: t,
                    analyticsLocations: r,
                    analyticsSourceLocation: i,
                    orbProductContext: d,
                });
            return (0, l.jsx)(T.Provider, {
                value: {
                    sharedCheckoutContext: {
                        loadId: n,
                        skuId: t,
                        analyticsLocations: r,
                        analyticsSourceLocation: i,
                        flowSpecificOptions: a,
                    },
                    paymentModalProps: m,
                    renderModalProps: s,
                },
                children: (0, l.jsx)(x.Provider, {
                    value: { orbProductContext: d, isRedeeming: c, orbRedemptionError: C, onRedeemVirtualCurrency: p },
                    children: o,
                }),
            });
        },
        UnifiedCheckoutStepDefinitions: {
            [c.pn.REVIEW]: {
                StepController: (e) => {
                    let {
                            paymentModalStepProps: t,
                            sharedCheckoutContext: { skuId: n, analyticsLocations: s, analyticsSourceLocation: u },
                        } = e,
                        { handleClose: c } = t;
                    (0, A.e1)({ handleClose: c });
                    let {
                            orbProductContext: p,
                            isRedeeming: E,
                            orbRedemptionError: T,
                            onRedeemVirtualCurrency: S,
                        } = (0, r.useContext)(x),
                        { primaryButtonProps: I, ...O } = ((e) => {
                            let {
                                    skuId: t,
                                    analyticsSourceLocation: n,
                                    analyticsLocations: s,
                                    orbProductContext: a,
                                    isRedeeming: o,
                                    orbRedemptionError: u,
                                    onRedeemVirtualCurrency: c,
                                } = e,
                                {
                                    isStepLoading: C,
                                    orbPriceAmount: p,
                                    orbBalanceToDisplay: E,
                                    onClickCheckout: T,
                                    showCollectiblesDiscountWarning: x,
                                    errorMessage: S,
                                } = (0, A.HG)({
                                    skuId: t,
                                    analyticsSourceLocation: n,
                                    analyticsLocations: s,
                                    orbProductContext: a,
                                    orbRedemptionError: u,
                                    onRedeemVirtualCurrency: c,
                                }),
                                I = (0, i.bG)([m.A], () => m.A.get(t), [t]),
                                O = (0, d.u)(I?.applicationId),
                                {
                                    disabled: y,
                                    tooltipText: N,
                                    text: R,
                                } = ((e) => {
                                    let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                        { disabled: i, tooltipText: s } = (0, r.useMemo)(
                                            () =>
                                                null == n
                                                    ? { disabled: !0, tooltipText: f.intl.string(f.t["c/rcUu"]) }
                                                    : !l && (null == t || n > t)
                                                      ? { disabled: !0, tooltipText: f.intl.string(f.t.keFvXM) }
                                                      : { disabled: !1, tooltipText: null },
                                            [n, t, l],
                                        );
                                    return { disabled: i, tooltipText: s, text: _() };
                                })({ orbBalance: E, orbPriceAmount: p, isInTestMode: O }),
                                v = (0, r.useMemo)(
                                    () => ({ onClick: T, loading: o, text: R, disabled: y, tooltipText: N }),
                                    [T, o, R, y, N],
                                ),
                                P = x ? f.intl.format(f.t.fsOXXO, {}) : null,
                                b = O ? f.intl.string(f.t.OvMyMd) : null;
                            return {
                                isStepLoading: C,
                                upperInlineNoticeProps: (0, r.useMemo)(() => {
                                    if (null != b || null != P || null != S) {
                                        let e = [];
                                        return (
                                            null != b &&
                                                e.push({
                                                    type: "warning",
                                                    message: b,
                                                    key: "test-mode-warning-notice",
                                                }),
                                            null != P &&
                                                e.push({
                                                    type: "warning",
                                                    message: P,
                                                    key: "orb-checkout-warning-notice",
                                                }),
                                            null != S &&
                                                e.push({
                                                    type: "critical",
                                                    message: S,
                                                    key: "orb-checkout-error-notice",
                                                }),
                                            e
                                        );
                                    }
                                    return null;
                                }, [b, P, S]),
                                purchaseItemContent: (0, l.jsx)(h.e, { skuId: t, orbPriceAmount: p }),
                                paymentSelectContent: (0, l.jsx)(h.Q, { orbBalance: E }),
                                legalContent: (0, l.jsx)(g, {}),
                                primaryButtonProps: v,
                                invoiceSummaryContent: null,
                                invoiceTotalDueLabel: null,
                                invoiceTotalDueValue: null,
                            };
                        })({
                            skuId: n,
                            analyticsLocations: s,
                            analyticsSourceLocation: u,
                            orbProductContext: p,
                            isRedeeming: E,
                            orbRedemptionError: T,
                            onRedeemVirtualCurrency: S,
                        });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(C.dZ, { children: (0, l.jsx)(a.T_, { ...O }) }),
                            (0, l.jsx)(C.UX, { children: (0, l.jsx)(o.lo, { primaryButtonProps: I }) }),
                        ],
                    });
                },
            },
        },
    };
