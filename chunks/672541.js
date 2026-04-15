"use strict";
n.d(t, { G4: () => v }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(736843),
    a = n(69882),
    o = n(169797),
    l = n(93159),
    u = n(166532),
    c = n(482132),
    d = n(908419),
    _ = n(775420),
    f = n(440612),
    p = n(459750),
    h = n(985018);
let m = () => h.intl.string(h.t.wmcDyu),
    E = (e) => {
        let { orbBalance: t, orbPriceAmount: n } = e,
            { disabled: r, tooltipText: s } = (0, i.useMemo)(
                () =>
                    null == n
                        ? { disabled: !0, tooltipText: h.intl.string(h.t["c/rcUu"]) }
                        : null == t || n > t
                          ? { disabled: !0, tooltipText: h.intl.string(h.t.keFvXM) }
                          : { disabled: !1, tooltipText: null },
                [n, t],
            );
        return { disabled: r, tooltipText: s, text: m() };
    };
function g() {
    let { immediateDelivery: e } = (0, d.U)(),
        t = m();
    return (0, r.jsx)(l._P, {
        variant: { type: l.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let A = (e) => {
        let {
                skuId: t,
                analyticsSourceLocation: n,
                analyticsLocations: s,
                orbProductContext: a,
                isRedeeming: o,
                orbRedemptionError: l,
                onRedeemVirtualCurrency: u,
            } = e,
            {
                isStepLoading: c,
                orbPriceAmount: d,
                orbBalanceToDisplay: _,
                onClickCheckout: m,
                showCollectiblesDiscountWarning: A,
                errorMessage: I,
            } = (0, f.HG)({
                skuId: t,
                analyticsSourceLocation: n,
                analyticsLocations: s,
                orbProductContext: a,
                orbRedemptionError: l,
                onRedeemVirtualCurrency: u,
            }),
            { disabled: T, tooltipText: S, text: y } = E({ orbBalance: _, orbPriceAmount: d }),
            v = (0, i.useMemo)(
                () => ({ onClick: m, loading: o, text: y, disabled: T, tooltipText: S }),
                [m, o, y, T, S],
            ),
            N = A ? h.intl.format(h.t.fsOXXO, {}) : null;
        return {
            isStepLoading: c,
            upperInlineNoticeProps: (0, i.useMemo)(() => {
                if (null != N || null != I) {
                    let e = [];
                    return (
                        null != N && e.push({ type: "warning", message: N, key: "orb-checkout-warning-notice" }),
                        null != I && e.push({ type: "critical", message: I, key: "orb-checkout-error-notice" }),
                        e
                    );
                }
                return null;
            }, [N, I]),
            purchaseItemContent: (0, r.jsx)(p.e, { skuId: t, orbPriceAmount: d }),
            paymentSelectContent: (0, r.jsx)(p.Q, { orbBalance: _ }),
            legalContent: (0, r.jsx)(g, {}),
            primaryButtonProps: v,
            invoiceSummaryContent: null,
            invoiceTotalDueLabel: null,
            invoiceTotalDueValue: null,
        };
    },
    I = (e) => {
        let {
                paymentModalStepProps: t,
                sharedCheckoutContext: { skuId: n, analyticsLocations: i, analyticsSourceLocation: s },
            } = e,
            { handleClose: l } = t;
        (0, f.e1)({ handleClose: l });
        let { orbProductContext: u, isRedeeming: d, orbRedemptionError: _, onRedeemVirtualCurrency: p } = y(),
            { primaryButtonProps: h, ...m } = A({
                skuId: n,
                analyticsLocations: i,
                analyticsSourceLocation: s,
                orbProductContext: u,
                isRedeeming: d,
                orbRedemptionError: _,
                onRedeemVirtualCurrency: p,
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.dZ, { children: (0, r.jsx)(a.rg, { ...m }) }),
                (0, r.jsx)(c.UX, { children: (0, r.jsx)(o.lo, { primaryButtonProps: h }) }),
            ],
        });
    },
    T = (0, s.Mz)(),
    S = (0, i.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    y = () => (0, i.useContext)(S),
    v = {
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
                    orbRedemptionError: p,
                    onRedeemVirtualCurrency: h,
                } = (0, _.e6)({ skuId: t, loadId: n, onCheckoutSuccess: u, analyticsLocations: i }),
                m = (0, f.My)({
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
                    paymentModalProps: m,
                    renderModalProps: a,
                },
                children: (0, r.jsx)(S.Provider, {
                    value: { orbProductContext: c, isRedeeming: d, orbRedemptionError: p, onRedeemVirtualCurrency: h },
                    children: l,
                }),
            });
        },
        UnifiedCheckoutStepDefinitions: { [u.pn.REVIEW]: { StepController: I } },
    };
