"use strict";
n.d(t, { HG: () => p, My: () => h, e1: () => f });
var r = n(64700),
    i = n(136857),
    s = n(964486),
    a = n(525723),
    o = n(156312),
    l = n(566980),
    u = n(855104),
    c = n(373856),
    d = n(652215),
    _ = n(985018);
let f = (e) => {
        let { handleClose: t } = e,
            { purchaseState: n } = (0, o.P5)();
        (0, r.useEffect)(() => {
            n === l.h.COMPLETED && t();
        }, [n, t]);
    },
    p = (e) => {
        let {
                skuId: t,
                onRedeemVirtualCurrency: n,
                orbRedemptionError: f,
                orbProductContext: p,
                analyticsLocations: h,
                analyticsSourceLocation: m,
            } = e,
            { selectedSkuId: E, setPurchaseState: g } = (0, o.P5)(),
            A = (0, u.gN)(),
            I = (0, r.useRef)(A),
            { emitOrbCheckoutPaymentFlowEvent: T } = (0, c.O)({
                skuId: t,
                orbProductContext: p,
                analyticsLocations: h,
                analyticsSourceLocation: m,
            });
        (0, s.Ay)(() => {
            T(d.HAw.PAYMENT_FLOW_LOADED);
        }),
            (0, r.useEffect)(() => {
                null != f && null !== I.current && (T(d.HAw.PAYMENT_FLOW_FAILED, f), (I.current = null));
            }, [f, T]);
        let S = (0, r.useCallback)(() => {
                (I.current = A),
                    T(d.HAw.PAYMENT_FLOW_COMPLETED),
                    n(() => {
                        g(l.h.COMPLETED), T(d.HAw.PAYMENT_FLOW_SUCCEEDED);
                    });
            }, [n, g, A, T]),
            y = I.current ?? A,
            v = null != p ? p.orbPriceAmount : null;
        return {
            isStepLoading: null == p,
            showCollectiblesDiscountWarning: (0, a.vw)({ skuId: t, isOrbsPurchase: !0 }),
            errorMessage: (0, r.useMemo)(
                () =>
                    null == f
                        ? null
                        : f.code === i.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                          ? _.intl.string(_.t.keFvXM)
                          : f.code === i.tG.ALREADY_PURCHASED
                            ? _.intl.string(_.t.m371Mx)
                            : _.intl.string(_.t.fqJZ11),
                [f],
            ),
            orbPriceAmount: v,
            orbBalanceToDisplay: y,
            onClickCheckout: S,
            selectedSkuId: E,
        };
    },
    h = (e) => {
        let { skuId: t, analyticsLocations: n, analyticsSourceLocation: i, orbProductContext: s, onClose: a } = e,
            { emitOrbCheckoutPaymentFlowEvent: o } = (0, c.O)({
                skuId: t,
                orbProductContext: s,
                analyticsLocations: n,
                analyticsSourceLocation: i,
            });
        return {
            analyticsDataOverride: (0, r.useMemo)(() => {
                if (null != s)
                    return {
                        price: s.orbPriceAmount ?? void 0,
                        regular_price: s.orbPriceAmount ?? void 0,
                        currency: d.Yri.DISCORD_ORB,
                    };
            }, [s]),
            onClose: (0, r.useCallback)(
                async (e) => {
                    e || o(d.HAw.PAYMENT_FLOW_CANCELED), await a();
                },
                [a, o],
            ),
        };
    };
