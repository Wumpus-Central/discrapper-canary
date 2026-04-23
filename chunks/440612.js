"use strict";
n.d(t, { HG: () => h, My: () => E, e1: () => p });
var r = n(64700),
    i = n(136857),
    s = n(964486),
    a = n(94420),
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
                analyticsLocations: E,
                analyticsSourceLocation: m,
            } = e,
            g = (0, a.t4)((e) => e.selectedSkuId),
            { setPurchaseState: A } = (0, l.P5)(),
            I = (0, c.gN)(),
            T = (0, r.useRef)(I),
            { emitOrbCheckoutPaymentFlowEvent: S } = (0, d.O)({
                skuId: t,
                orbProductContext: h,
                analyticsLocations: E,
                analyticsSourceLocation: m,
            });
        (0, s.Ay)(() => {
            S(_.HAw.PAYMENT_FLOW_LOADED);
        }),
            (0, r.useEffect)(() => {
                null != p && null !== T.current && (S(_.HAw.PAYMENT_FLOW_FAILED, p), (T.current = null));
            }, [p, S]);
        let y = (0, r.useCallback)(() => {
                (T.current = I),
                    S(_.HAw.PAYMENT_FLOW_COMPLETED),
                    n(() => {
                        A(u.h.COMPLETED), S(_.HAw.PAYMENT_FLOW_SUCCEEDED);
                    });
            }, [n, A, I, S]),
            N = T.current ?? I,
            v = null != h ? h.orbPriceAmount : null;
        return {
            isStepLoading: null == h,
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
            orbPriceAmount: v,
            orbBalanceToDisplay: N,
            onClickCheckout: y,
            selectedSkuId: g,
        };
    },
    E = (e) => {
        let { skuId: t, analyticsLocations: n, analyticsSourceLocation: i, orbProductContext: s, onClose: a } = e,
            { emitOrbCheckoutPaymentFlowEvent: o } = (0, d.O)({
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
                        currency: _.Yri.DISCORD_ORB,
                    };
            }, [s]),
            onClose: (0, r.useCallback)(
                async (e) => {
                    e || o(_.HAw.PAYMENT_FLOW_CANCELED), await a();
                },
                [a, o],
            ),
        };
    };
