"use strict";
n.d(t, { G4: () => y }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(608805),
    a = n(736843),
    o = n(69882),
    l = n(169797),
    u = n(166532),
    c = n(685944),
    d = n(482132),
    _ = n(775420),
    f = n(440612),
    p = n(324384),
    h = n(459750),
    m = n(985018);
let E = (e) => {
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
                orbBalanceToDisplay: E,
                onClickCheckout: g,
                showCollectiblesDiscountWarning: A,
                errorMessage: I,
            } = (0, f.HG)({
                skuId: t,
                analyticsSourceLocation: n,
                analyticsLocations: a,
                orbProductContext: o,
                orbRedemptionError: u,
                onRedeemVirtualCurrency: c,
            }),
            { disabled: T, tooltipText: S, text: y } = (0, p.J6)({ orbBalance: E, orbPriceAmount: _ }),
            { enabled: v } = (0, s.T0)({ location: "orb_checkout_review_step" }),
            N = (0, i.useMemo)(
                () => ({ onClick: g, loading: l, text: y, disabled: T, tooltipText: S }),
                [g, l, y, T, S],
            ),
            C = A ? m.intl.format(m.t.fsOXXO, {}) : null,
            b = (0, i.useMemo)(() => {
                if (null != C || null != I) {
                    let e = [];
                    return (
                        null != C && e.push({ type: "warning", message: C }),
                        null != I && e.push({ type: "critical", message: I }),
                        e
                    );
                }
                return null;
            }, [C, I]);
        return v
            ? {
                  shouldUseUnifiedCheckoutUI: !0,
                  isStepLoading: d,
                  upperInlineNoticeProps: b,
                  purchaseItemContent: (0, r.jsx)(h.e, { skuId: t, orbPriceAmount: _ }),
                  paymentSelectContent: (0, r.jsx)(h.Q, { orbBalance: E }),
                  legalContent: (0, r.jsx)(p.GS, { skuId: t }),
                  primaryButtonProps: N,
                  invoiceSummaryContent: null,
                  invoiceTotalDueLabel: null,
                  invoiceTotalDueValue: null,
              }
            : {
                  shouldUseUnifiedCheckoutUI: !1,
                  isStepLoading: d,
                  skuId: t,
                  reviewBodyContent: (0, r.jsx)(p.cL, {
                      skuId: t,
                      orbPriceAmount: _,
                      orbBalance: E,
                      renderWithoutContainer: !0,
                  }),
                  reviewBodyLegalContent: null,
                  primaryCTAButtonProps: N,
                  warningMessage: C,
                  errorMessage: I,
              };
    },
    g = (e) => {
        let {
                renderStep: t,
                paymentModalStepProps: n,
                sharedCheckoutContext: { skuId: i, analyticsLocations: s, analyticsSourceLocation: a },
            } = e,
            { handleClose: u } = n;
        (0, f.e1)({ handleClose: u });
        let { orbProductContext: c, isRedeeming: _, orbRedemptionError: p, onRedeemVirtualCurrency: h } = S(),
            m = E({
                skuId: i,
                analyticsLocations: s,
                analyticsSourceLocation: a,
                orbProductContext: c,
                isRedeeming: _,
                orbRedemptionError: p,
                onRedeemVirtualCurrency: h,
            });
        if (m.shouldUseUnifiedCheckoutUI) {
            let { primaryButtonProps: e, ...t } = m;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.dZ, { children: (0, r.jsx)(o.rg, { ...t }) }),
                    (0, r.jsx)(d.UX, { children: (0, r.jsx)(l.lo, { primaryButtonProps: e }) }),
                ],
            });
        }
        return t({ paymentModalStepProps: n, unifiedStepProps: m });
    },
    A = (e) => {
        let { onClose: t, step: n } = e;
        return (0, r.jsx)(c.A, { isOrbCheckout: !0, step: n, onClose: () => t(!1) });
    },
    I = (0, a.Mz)(),
    T = (0, i.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    S = () => (0, i.useContext)(T),
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
            return (0, r.jsx)(I.Provider, {
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
                children: (0, r.jsx)(T.Provider, {
                    value: { orbProductContext: c, isRedeeming: d, orbRedemptionError: p, onRedeemVirtualCurrency: h },
                    children: l,
                }),
            });
        },
        UnifiedCheckoutCustomHeader: A,
        UnifiedCheckoutStepDefinitions: { [u.pn.REVIEW]: { StepController: g } },
    };
