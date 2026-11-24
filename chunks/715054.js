var r = n(582128),
    i = n(158317),
    a = n(313125),
    l = n(786953),
    o = n(792996);
n.d(
    t,
    {},
    {
        Q: function (e) {
            let [t, n] = (0, r.useState)(""),
                [u, s] = (0, r.useState)([]),
                [c, d] = (0, r.useState)(null),
                [f, _] = (0, r.useState)(!1),
                p = e.useOrdersAPI,
                m = e.order ?? null,
                w = e.onSignFailure,
                {
                    error: h,
                    signOrder: g,
                    reportError: y,
                } = (0, a.f)({ order: m, errorSource: "orb_redeem_orders_api", onSignFailure: w }),
                x = p ? h : c,
                S = e.onSetIsSubmitting,
                E = (0, r.useCallback)(
                    (e) => {
                        (_(e), null != S && S(e));
                    },
                    [S],
                ),
                I = (0, r.useCallback)(
                    async (e, t, n) => {
                        E(!0);
                        let r = await g({ loadId: t, errorExtra: { skuId: e, loadId: t } });
                        if ("signed" !== r.type) return void E(!1);
                        try {
                            let t = await (0, i.Vw)(r.order.id);
                            if (0 === t.length) throw new i.j2();
                            (s(t), (0, l.sn)({ skuId: e, entitlements: t }), n?.(t));
                        } catch (n) {
                            y(n, { skuId: e, loadId: t, orderId: r.order.id });
                        } finally {
                            E(!1);
                        }
                    },
                    [g, y, E],
                ),
                b = (0, r.useCallback)(
                    (e, t, n) =>
                        (0, l.J$)({
                            skuId: e,
                            loadId: t,
                            onRedeemStart: function () {
                                (E(!0), d(null));
                            },
                            onRedeemSucceed: function (e) {
                                (s(e), E(!1), n?.(e));
                            },
                            onRedeemFail: function (e) {
                                (d(e), E(!1));
                            },
                        }),
                    [E],
                ),
                v = (0, r.useCallback)(
                    (e, t, n) => {
                        p ? I(e, t, n) : b(e, t, n);
                    },
                    [p, I, b],
                );
            return (
                (0, r.useEffect)(() => {
                    if (null != x)
                        return void n(o.intl.format(o.t["7gHWrd"], { amount: "1 orb", errorMessage: x.message }));
                    if (null != u && u.length > 0) {
                        let e = u.map((e) => e.sku?.name);
                        n(
                            o.intl.format(o.t.JxNFav, {
                                amountDescription: "1 orb",
                                redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === u.length ? "ID" : "IDs"}: ${u.map((e) => e.id).join(", ")}`,
                            }),
                        );
                        return;
                    }
                    n("");
                }, [u, x]),
                { entitlements: u, error: x, isSubmitting: f, responseMessage: t, redeemVirtualCurrency: v }
            );
        },
    },
);
