var n = r(582128),
    i = r(158317),
    a = r(313125),
    l = r(786953),
    o = r(792996);
r.d(
    t,
    {},
    {
        Q: function (e) {
            let [t, r] = (0, n.useState)(""),
                [u, d] = (0, n.useState)([]),
                [s, c] = (0, n.useState)(null),
                [f, h] = (0, n.useState)(!1),
                m = e.useOrdersAPI,
                y = e.order ?? null,
                p = e.onSignFailure,
                {
                    error: w,
                    signOrder: _,
                    reportError: g,
                } = (0, a.f)({ order: y, errorSource: "orb_redeem_orders_api", onSignFailure: p }),
                E = m ? w : s,
                S = e.onSetIsSubmitting,
                b = (0, n.useCallback)(
                    (e) => {
                        (h(e), null != S && S(e));
                    },
                    [S],
                ),
                v = (0, n.useCallback)(
                    async (e, t, r) => {
                        b(!0);
                        let n = await _({ loadId: t, errorExtra: { skuId: e, loadId: t } });
                        if ("signed" !== n.type) return void b(!1);
                        try {
                            let t = await (0, i.Vw)(n.order.id);
                            if (0 === t.length) throw new i.j2();
                            (d(t), (0, l.sn)({ skuId: e, entitlements: t }), r?.(t));
                        } catch (r) {
                            g(r, { skuId: e, loadId: t, orderId: n.order.id });
                        } finally {
                            b(!1);
                        }
                    },
                    [_, g, b],
                ),
                x = (0, n.useCallback)(
                    (e, t, r) =>
                        (0, l.J$)({
                            skuId: e,
                            loadId: t,
                            onRedeemStart: function () {
                                (b(!0), c(null));
                            },
                            onRedeemSucceed: function (e) {
                                (d(e), b(!1), r?.(e));
                            },
                            onRedeemFail: function (e) {
                                (c(e), b(!1));
                            },
                        }),
                    [b],
                ),
                I = (0, n.useCallback)(
                    (e, t, r) => {
                        m ? v(e, t, r) : x(e, t, r);
                    },
                    [m, v, x],
                );
            return (
                (0, n.useEffect)(() => {
                    if (null != E)
                        return void r(o.intl.format(o.t["7gHWrd"], { amount: "1 orb", errorMessage: E.message }));
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
                }, [u, E]),
                { entitlements: u, error: E, isSubmitting: f, responseMessage: t, redeemVirtualCurrency: I }
            );
        },
    },
);
