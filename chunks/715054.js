var n = r(582128),
    a = r(158317),
    l = r(313125),
    i = r(786953),
    d = r(792996);
r.d(
    t,
    {},
    {
        Q: function (e) {
            let [t, r] = (0, n.useState)(""),
                [c, s] = (0, n.useState)([]),
                [o, u] = (0, n.useState)(null),
                [h, _] = (0, n.useState)(!1),
                E = e.useOrdersAPI,
                R = e.order ?? null,
                C = e.onSignFailure,
                {
                    error: m,
                    signOrder: y,
                    reportError: f,
                } = (0, l.f)({ order: R, errorSource: "orb_redeem_orders_api", onSignFailure: C }),
                g = E ? m : o,
                A = e.onSetIsSubmitting,
                p = (0, n.useCallback)(
                    (e) => {
                        (_(e), null != A && A(e));
                    },
                    [A],
                ),
                T = (0, n.useCallback)(
                    async (e, t, r) => {
                        p(!0);
                        let n = await y({ loadId: t, errorExtra: { skuId: e, loadId: t } });
                        if ("signed" !== n.type) return void p(!1);
                        try {
                            let t = await (0, a.Vw)(n.order.id);
                            if (0 === t.length) throw new a.j2();
                            (s(t), (0, i.sn)({ skuId: e, entitlements: t }), r?.(t));
                        } catch (r) {
                            f(r, { skuId: e, loadId: t, orderId: n.order.id });
                        } finally {
                            p(!1);
                        }
                    },
                    [y, f, p],
                ),
                U = (0, n.useCallback)(
                    (e, t, r) =>
                        (0, i.J$)({
                            skuId: e,
                            loadId: t,
                            onRedeemStart: function () {
                                (p(!0), u(null));
                            },
                            onRedeemSucceed: function (e) {
                                (s(e), p(!1), r?.(e));
                            },
                            onRedeemFail: function (e) {
                                (u(e), p(!1));
                            },
                        }),
                    [p],
                ),
                S = (0, n.useCallback)(
                    (e, t, r) => {
                        E ? T(e, t, r) : U(e, t, r);
                    },
                    [E, T, U],
                );
            return (
                (0, n.useEffect)(() => {
                    if (null != g)
                        return void r(d.intl.format(d.t["7gHWrd"], { amount: "1 orb", errorMessage: g.message }));
                    if (null != c && c.length > 0) {
                        let e = c.map((e) => e.sku?.name);
                        r(
                            d.intl.format(d.t.JxNFav, {
                                amountDescription: "1 orb",
                                redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === c.length ? "ID" : "IDs"}: ${c.map((e) => e.id).join(", ")}`,
                            }),
                        );
                        return;
                    }
                    r("");
                }, [c, g]),
                { entitlements: c, error: g, isSubmitting: h, responseMessage: t, redeemVirtualCurrency: S }
            );
        },
    },
);
