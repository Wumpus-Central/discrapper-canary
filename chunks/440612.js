n.d(t, { HG: () => E, My: () => A, e1: () => m });
var l = n(64700),
    r = n(136857),
    i = n(964486),
    s = n(94420),
    a = n(525723),
    o = n(156312),
    u = n(566980),
    d = n(855104),
    c = n(373856),
    C = n(652215),
    p = n(985018);
let m = (e) => {
        let { handleClose: t } = e,
            { purchaseState: n } = (0, o.P5)();
        (0, l.useEffect)(() => {
            n === u.h.COMPLETED && t();
        }, [n, t]);
    },
    E = (e) => {
        let {
                skuId: t,
                onRedeemVirtualCurrency: n,
                orbRedemptionError: m,
                orbProductContext: E,
                analyticsLocations: A,
                analyticsSourceLocation: h,
            } = e,
            f = (0, s.t4)((e) => e.selectedSkuId),
            { setPurchaseState: _ } = (0, o.P5)(),
            g = (0, d.gN)(),
            T = (0, l.useRef)(g),
            { emitOrbCheckoutPaymentFlowEvent: x } = (0, c.O)({
                skuId: t,
                orbProductContext: E,
                analyticsLocations: A,
                analyticsSourceLocation: h,
            });
        (0, i.Ay)(() => {
            x(C.HAw.PAYMENT_FLOW_LOADED);
        }),
            (0, l.useEffect)(() => {
                null != m && null !== T.current && (x(C.HAw.PAYMENT_FLOW_FAILED, m), (T.current = null));
            }, [m, x]);
        let S = (0, l.useCallback)(() => {
                (T.current = g),
                    x(C.HAw.PAYMENT_FLOW_COMPLETED),
                    n(() => {
                        _(u.h.COMPLETED), x(C.HAw.PAYMENT_FLOW_SUCCEEDED);
                    });
            }, [n, _, g, x]),
            I = T.current ?? g,
            O = null != E ? E.orbPriceAmount : null;
        return {
            isStepLoading: null == E,
            showCollectiblesDiscountWarning: (0, a.vw)({ skuId: t, isOrbsPurchase: !0 }),
            errorMessage: (0, l.useMemo)(
                () =>
                    null == m
                        ? null
                        : m.code === r.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                          ? p.intl.string(p.t.keFvXM)
                          : m.code === r.tG.ALREADY_PURCHASED
                            ? p.intl.string(p.t.m371Mx)
                            : p.intl.string(p.t.fqJZ11),
                [m],
            ),
            orbPriceAmount: O,
            orbBalanceToDisplay: I,
            onClickCheckout: S,
            selectedSkuId: f,
        };
    },
    A = (e) => {
        let { skuId: t, analyticsLocations: n, analyticsSourceLocation: r, orbProductContext: i, onClose: s } = e,
            { emitOrbCheckoutPaymentFlowEvent: a } = (0, c.O)({
                skuId: t,
                orbProductContext: i,
                analyticsLocations: n,
                analyticsSourceLocation: r,
            });
        return {
            analyticsDataOverride: (0, l.useMemo)(() => {
                if (null != i)
                    return {
                        price: i.orbPriceAmount ?? void 0,
                        regular_price: i.orbPriceAmount ?? void 0,
                        currency: C.Yri.DISCORD_ORB,
                    };
            }, [i]),
            onClose: (0, l.useCallback)(
                async (e) => {
                    e || a(C.HAw.PAYMENT_FLOW_CANCELED), await s();
                },
                [s, a],
            ),
        };
    };
