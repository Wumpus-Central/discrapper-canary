"use strict";
n.d(t, { G4: () => y }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(736843),
    o = n(69882),
    l = n(169797),
    u = n(93159),
    c = n(977445),
    d = n(166532),
    _ = n(482132),
    f = n(908419),
    p = n(67480),
    h = n(775420),
    E = n(440612),
    m = n(459750),
    g = n(985018);
let A = () => g.intl.string(g.t.wmcDyu);
function I() {
    let { immediateDelivery: e } = (0, f.U)(),
        t = A();
    return (0, r.jsx)(u._P, {
        variant: { type: u.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let T = (0, a.Mz)(),
    S = (0, i.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    y = {
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsLocations: i,
                    analyticsSourceLocation: s,
                    renderModalProps: a,
                    flowSpecificOptions: o,
                    children: l,
                } = e,
                { onCheckoutSuccess: u } = o,
                {
                    orbProductContext: c,
                    isRedeeming: d,
                    orbRedemptionError: _,
                    onRedeemVirtualCurrency: f,
                } = (0, h.e6)({ skuId: t, loadId: n, onCheckoutSuccess: u, analyticsLocations: i }),
                p = (0, E.My)({
                    onClose: a.onClose,
                    skuId: t,
                    analyticsLocations: i,
                    analyticsSourceLocation: s,
                    orbProductContext: c,
                });
            return (0, r.jsx)(T.Provider, {
                value: {
                    sharedCheckoutContext: {
                        loadId: n,
                        skuId: t,
                        analyticsLocations: i,
                        analyticsSourceLocation: s,
                        flowSpecificOptions: o,
                    },
                    paymentModalProps: p,
                    renderModalProps: a,
                },
                children: (0, r.jsx)(S.Provider, {
                    value: { orbProductContext: c, isRedeeming: d, orbRedemptionError: _, onRedeemVirtualCurrency: f },
                    children: l,
                }),
            });
        },
        UnifiedCheckoutStepDefinitions: {
            [d.pn.REVIEW]: {
                StepController: (e) => {
                    let {
                            paymentModalStepProps: t,
                            sharedCheckoutContext: { skuId: n, analyticsLocations: a, analyticsSourceLocation: u },
                        } = e,
                        { handleClose: d } = t;
                    (0, E.e1)({ handleClose: d });
                    let {
                            orbProductContext: f,
                            isRedeeming: h,
                            orbRedemptionError: T,
                            onRedeemVirtualCurrency: y,
                        } = (0, i.useContext)(S),
                        { primaryButtonProps: N, ...v } = ((e) => {
                            let {
                                    skuId: t,
                                    analyticsSourceLocation: n,
                                    analyticsLocations: a,
                                    orbProductContext: o,
                                    isRedeeming: l,
                                    orbRedemptionError: u,
                                    onRedeemVirtualCurrency: d,
                                } = e,
                                {
                                    isStepLoading: _,
                                    orbPriceAmount: f,
                                    orbBalanceToDisplay: h,
                                    onClickCheckout: T,
                                    showCollectiblesDiscountWarning: S,
                                    errorMessage: y,
                                } = (0, E.HG)({
                                    skuId: t,
                                    analyticsSourceLocation: n,
                                    analyticsLocations: a,
                                    orbProductContext: o,
                                    orbRedemptionError: u,
                                    onRedeemVirtualCurrency: d,
                                }),
                                N = (0, s.bG)([p.A], () => p.A.get(t), [t]),
                                v = (0, c.u)(N?.applicationId),
                                {
                                    disabled: C,
                                    tooltipText: O,
                                    text: R,
                                } = ((e) => {
                                    let { orbBalance: t, orbPriceAmount: n, isInTestMode: r = !1 } = e,
                                        { disabled: s, tooltipText: a } = (0, i.useMemo)(
                                            () =>
                                                null == n
                                                    ? { disabled: !0, tooltipText: g.intl.string(g.t["c/rcUu"]) }
                                                    : !r && (null == t || n > t)
                                                      ? { disabled: !0, tooltipText: g.intl.string(g.t.keFvXM) }
                                                      : { disabled: !1, tooltipText: null },
                                            [n, t, r],
                                        );
                                    return { disabled: s, tooltipText: a, text: A() };
                                })({ orbBalance: h, orbPriceAmount: f, isInTestMode: v }),
                                b = (0, i.useMemo)(
                                    () => ({ onClick: T, loading: l, text: R, disabled: C, tooltipText: O }),
                                    [T, l, R, C, O],
                                ),
                                D = S ? g.intl.format(g.t.fsOXXO, {}) : null,
                                L = v ? g.intl.string(g.t.OvMyMd) : null;
                            return {
                                isStepLoading: _,
                                upperInlineNoticeProps: (0, i.useMemo)(() => {
                                    if (null != L || null != D || null != y) {
                                        let e = [];
                                        return (
                                            null != L &&
                                                e.push({
                                                    type: "warning",
                                                    message: L,
                                                    key: "test-mode-warning-notice",
                                                }),
                                            null != D &&
                                                e.push({
                                                    type: "warning",
                                                    message: D,
                                                    key: "orb-checkout-warning-notice",
                                                }),
                                            null != y &&
                                                e.push({
                                                    type: "critical",
                                                    message: y,
                                                    key: "orb-checkout-error-notice",
                                                }),
                                            e
                                        );
                                    }
                                    return null;
                                }, [L, D, y]),
                                purchaseItemContent: (0, r.jsx)(m.e, { skuId: t, orbPriceAmount: f }),
                                paymentSelectContent: (0, r.jsx)(m.Q, { orbBalance: h }),
                                legalContent: (0, r.jsx)(I, {}),
                                primaryButtonProps: b,
                                invoiceSummaryContent: null,
                                invoiceTotalDueLabel: null,
                                invoiceTotalDueValue: null,
                            };
                        })({
                            skuId: n,
                            analyticsLocations: a,
                            analyticsSourceLocation: u,
                            orbProductContext: f,
                            isRedeeming: h,
                            orbRedemptionError: T,
                            onRedeemVirtualCurrency: y,
                        });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(_.dZ, { children: (0, r.jsx)(o.T_, { ...v }) }),
                            (0, r.jsx)(_.UX, { children: (0, r.jsx)(l.lo, { primaryButtonProps: N }) }),
                        ],
                    });
                },
            },
        },
    };
