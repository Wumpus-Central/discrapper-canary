"use strict";
n.d(t, { G4: () => C }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(608805),
    a = n(736843),
    o = n(69882),
    l = n(169797),
    u = n(93159),
    c = n(166532),
    d = n(685944),
    _ = n(482132),
    f = n(908419),
    p = n(775420),
    h = n(440612),
    m = n(324384),
    E = n(459750),
    g = n(985018);
function A() {
    let { immediateDelivery: e } = (0, f.U)(),
        t = (0, m.z)();
    return (0, r.jsx)(u._P, {
        variant: { type: u.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let I = (e) => {
        let {
                skuId: t,
                analyticsSourceLocation: n,
                analyticsLocations: a,
                orbProductContext: o,
                isRedeeming: l,
                orbRedemptionError: u,
                onRedeemVirtualCurrency: c,
            } = e,
            {
                isStepLoading: d,
                orbPriceAmount: _,
                orbBalanceToDisplay: f,
                onClickCheckout: p,
                showCollectiblesDiscountWarning: I,
                errorMessage: T,
            } = (0, h.HG)({
                skuId: t,
                analyticsSourceLocation: n,
                analyticsLocations: a,
                orbProductContext: o,
                orbRedemptionError: u,
                onRedeemVirtualCurrency: c,
            }),
            { disabled: S, tooltipText: y, text: v } = (0, m.J6)({ orbBalance: f, orbPriceAmount: _ }),
            { enabled: N } = (0, s.T0)({ location: "orb_checkout_review_step" }),
            C = (0, i.useMemo)(
                () => ({ onClick: p, loading: l, text: v, disabled: S, tooltipText: y }),
                [p, l, v, S, y],
            ),
            b = I ? g.intl.format(g.t.fsOXXO, {}) : null,
            R = (0, i.useMemo)(() => {
                if (null != b || null != T) {
                    let e = [];
                    return (
                        null != b && e.push({ type: "warning", message: b }),
                        null != T && e.push({ type: "critical", message: T }),
                        e
                    );
                }
                return null;
            }, [b, T]);
        return N
            ? {
                  shouldUseUnifiedCheckoutUI: !0,
                  isStepLoading: d,
                  upperInlineNoticeProps: R,
                  purchaseItemContent: (0, r.jsx)(E.e, { skuId: t, orbPriceAmount: _ }),
                  paymentSelectContent: (0, r.jsx)(E.Q, { orbBalance: f }),
                  legalContent: (0, r.jsx)(A, {}),
                  primaryButtonProps: C,
                  invoiceSummaryContent: null,
                  invoiceTotalDueLabel: null,
                  invoiceTotalDueValue: null,
              }
            : {
                  shouldUseUnifiedCheckoutUI: !1,
                  isStepLoading: d,
                  skuId: t,
                  reviewBodyContent: (0, r.jsx)(m.cL, {
                      skuId: t,
                      orbPriceAmount: _,
                      orbBalance: f,
                      renderWithoutContainer: !0,
                  }),
                  reviewBodyLegalContent: null,
                  primaryCTAButtonProps: C,
                  warningMessage: b,
                  errorMessage: T,
              };
    },
    T = (e) => {
        let {
                renderStep: t,
                paymentModalStepProps: n,
                sharedCheckoutContext: { skuId: i, analyticsLocations: s, analyticsSourceLocation: a },
            } = e,
            { handleClose: u } = n;
        (0, h.e1)({ handleClose: u });
        let { orbProductContext: c, isRedeeming: d, orbRedemptionError: f, onRedeemVirtualCurrency: p } = N(),
            m = I({
                skuId: i,
                analyticsLocations: s,
                analyticsSourceLocation: a,
                orbProductContext: c,
                isRedeeming: d,
                orbRedemptionError: f,
                onRedeemVirtualCurrency: p,
            });
        if (m.shouldUseUnifiedCheckoutUI) {
            let { primaryButtonProps: e, ...t } = m;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(_.dZ, { children: (0, r.jsx)(o.rg, { ...t }) }),
                    (0, r.jsx)(_.UX, { children: (0, r.jsx)(l.lo, { primaryButtonProps: e }) }),
                ],
            });
        }
        return t({ paymentModalStepProps: n, unifiedStepProps: m });
    },
    S = (e) => {
        let { onClose: t, step: n } = e;
        return (0, r.jsx)(d.A, { isOrbCheckout: !0, step: n, onClose: () => t(!1) });
    },
    y = (0, a.Mz)(),
    v = (0, i.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    N = () => (0, i.useContext)(v),
    C = {
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
                } = (0, p.e6)({ skuId: t, loadId: n, onCheckoutSuccess: u, analyticsLocations: i }),
                m = (0, h.My)({
                    onClose: a.onClose,
                    skuId: t,
                    analyticsLocations: i,
                    analyticsSourceLocation: s,
                    orbProductContext: c,
                });
            return (0, r.jsx)(y.Provider, {
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
                children: (0, r.jsx)(v.Provider, {
                    value: { orbProductContext: c, isRedeeming: d, orbRedemptionError: _, onRedeemVirtualCurrency: f },
                    children: l,
                }),
            });
        },
        UnifiedCheckoutCustomHeader: S,
        UnifiedCheckoutStepDefinitions: { [c.pn.REVIEW]: { StepController: T } },
    };
