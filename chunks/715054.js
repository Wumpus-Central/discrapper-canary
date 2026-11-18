var n = r(582128),
    i = r(158317),
    l = r(313125),
    a = r(786953),
    o = r(792996);
r.d(
    t,
    {},
    {
        Q: function (e) {
            let [t, r] = (0, n.useState)(""),
                [u, c] = (0, n.useState)([]),
                [s, d] = (0, n.useState)(null),
                [f, _] = (0, n.useState)(!1),
                h = e.useOrdersAPI,
                m = e.order ?? null,
                p = e.onSignFailure,
                {
                    error: w,
                    signOrder: y,
                    reportError: g,
                } = (0, l.f)({ order: m, errorSource: "orb_redeem_orders_api", onSignFailure: p }),
                x = h ? w : s,
                S = e.onSetIsSubmitting,
                E = (0, n.useCallback)(
                    (e) => {
                        (_(e), null != S && S(e));
                    },
                    [S],
                ),
                b = (0, n.useCallback)(
                    async (e, t, r) => {
                        E(!0);
                        let n = await y({ loadId: t, errorExtra: { skuId: e, loadId: t } });
                        if ("signed" !== n.type) return void E(!1);
                        try {
                            let t = await (0, i.Vw)(n.order.id);
                            if (0 === t.length) throw new i.j2();
                            (c(t), (0, a.sn)({ skuId: e, entitlements: t }), r?.(t));
                        } catch (r) {
                            g(r, { skuId: e, loadId: t, orderId: n.order.id });
                        } finally {
                            E(!1);
                        }
                    },
                    [y, g, E],
                ),
                v = (0, n.useCallback)(
                    (e, t, r) =>
                        (0, a.J$)({
                            skuId: e,
                            loadId: t,
                            onRedeemStart: function () {
                                (E(!0), d(null));
                            },
                            onRedeemSucceed: function (e) {
                                (c(e), E(!1), r?.(e));
                            },
                            onRedeemFail: function (e) {
                                (d(e), E(!1));
                            },
                        }),
                    [E],
                ),
                I = (0, n.useCallback)(
                    (e, t, r) => {
                        h ? b(e, t, r) : v(e, t, r);
                    },
                    [h, b, v],
                );
            return (
                (0, n.useEffect)(() => {
                    if (null != x)
                        return void r(o.intl.format(o.t["7gHWrd"], { amount: "1 orb", errorMessage: x.message }));
                    if (null != u && u.length > 0) {
                        let e = u.map((e) => e.sku?.name);
                        r(
                            o.intl.format(o.t.JxNFav, {
                                amountDescription: "1 orb",
                                redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === u.length ? "ID" : "IDs"}: ${u.map((e) => e.id).join(", ")}`,
                            }),
                        );
                        return;
                    }
                    r("");
                }, [u, x]),
                { entitlements: u, error: x, isSubmitting: f, responseMessage: t, redeemVirtualCurrency: I }
            );
        },
    },
);
