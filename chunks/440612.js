"use strict";
n.d(t, { HG: () => h, My: () => m, e1: () => p });
var r = n(64700),
    i = n(136857),
    a = n(964486),
    s = n(674658),
    o = n(525723),
    l = n(156312),
    u = n(566980),
    c = n(855104),
    d = n(373856),
    _ = n(652215),
    f = n(985018);
let p = (e) => {
        let { handleClose: t } = e,
            { purchaseState: n } = (0, l.P5)();
        (0, r.useEffect)(() => {
            n === u.h.COMPLETED && t();
        }, [n, t]);
    },
    h = (e) => {
        let {
                skuId: t,
                onRedeemVirtualCurrency: n,
                orbRedemptionError: p,
                orbProductContext: h,
                analyticsLocations: m,
                analyticsSourceLocation: g,
            } = e,
            { selectedSkuId: E, setPurchaseState: A } = (0, l.P5)(),
            { product: I } = (0, s.q)(E),
            T = (0, c.gN)(),
            y = (0, r.useRef)(T),
            { emitOrbCheckoutPaymentFlowEvent: S } = (0, d.O)({
                skuId: t,
                orbProductContext: h,
                analyticsLocations: m,
                analyticsSourceLocation: g,
            });
        (0, a.Ay)(() => {
            S(_.HAw.PAYMENT_FLOW_LOADED);
        }),
            (0, r.useEffect)(() => {
                null != p && null !== y.current && (S(_.HAw.PAYMENT_FLOW_FAILED, p), (y.current = null));
            }, [p, S]);
        let v = (0, r.useCallback)(() => {
                (y.current = T),
                    S(_.HAw.PAYMENT_FLOW_COMPLETED),
                    n(() => {
                        A(u.h.COMPLETED), S(_.HAw.PAYMENT_FLOW_SUCCEEDED);
                    });
            }, [n, A, T, S]),
            C = y.current ?? T,
            b = null != h ? h.orbPriceAmount : null;
        return {
            isStepLoading: null == E || null == I,
            showCollectiblesDiscountWarning: (0, o.vw)({ skuId: t, isOrbsPurchase: !0 }),
            errorMessage: (0, r.useMemo)(
                () =>
                    null == p
                        ? null
                        : p.code === i.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                          ? f.intl.string(f.t.keFvXM)
                          : p.code === i.tG.ALREADY_PURCHASED
                            ? f.intl.string(f.t.m371Mx)
                            : f.intl.string(f.t.fqJZ11),
                [p],
            ),
            orbPriceAmount: b,
            orbBalanceToDisplay: C,
            onClickCheckout: v,
            selectedSkuId: E,
            product: I,
        };
    },
    m = (e) => {
        let { skuId: t, analyticsLocations: n, analyticsSourceLocation: i, orbProductContext: a, onClose: s } = e,
            { emitOrbCheckoutPaymentFlowEvent: o } = (0, d.O)({
                skuId: t,
                orbProductContext: a,
                analyticsLocations: n,
                analyticsSourceLocation: i,
            });
        return {
            analyticsDataOverride: (0, r.useMemo)(() => {
                if (null != a)
                    return {
                        price: a.orbPriceAmount ?? void 0,
                        regular_price: a.orbPriceAmount ?? void 0,
                        currency: _.Yri.DISCORD_ORB,
                    };
            }, [a]),
            onClose: (0, r.useCallback)(
                async (e) => {
                    e || o(_.HAw.PAYMENT_FLOW_CANCELED), await s();
                },
                [s, o],
            ),
        };
    };
