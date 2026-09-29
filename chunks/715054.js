r.d(t, { Q: () => o });
var n = r(582128),
    a = r(158317),
    l = r(540173),
    i = r(786953),
    d = r(211287),
    s = r(375708);
function o(e) {
    let [t, r] = (0, n.useState)(""),
        [o, c] = (0, n.useState)([]),
        [u, h] = (0, n.useState)(null),
        [_, E] = (0, n.useState)(!1),
        { enabled: R } = d.A.useConfig({ location: "orb_checkout_modal" }),
        C = e?.order ?? null,
        m = e?.onSignFailure,
        {
            error: f,
            signOrder: A,
            reportError: y,
        } = (0, l.f)({ order: C, errorSource: "orb_redeem_orders_api", onSignFailure: m }),
        g = R ? f : u,
        T = (0, n.useCallback)(
            async (e, t, r) => {
                E(!0);
                let n = await A({ loadId: t, errorExtra: { skuId: e, loadId: t } });
                if ("signed" !== n.type) return void E(!1);
                try {
                    let e = await (0, a.Vw)(n.order.id);
                    if (0 === e.length) throw new a.j2();
                    (c(e), r?.(e));
                } catch (r) {
                    y(r, { skuId: e, loadId: t, orderId: n.order.id });
                } finally {
                    E(!1);
                }
            },
            [A, y],
        ),
        p = (0, n.useCallback)(
            (e, t, r) =>
                (0, i.J$)({
                    skuId: e,
                    loadId: t,
                    onRedeemStart: function () {
                        (E(!0), h(null));
                    },
                    onRedeemSucceed: function (e) {
                        (c(e), E(!1), r?.(e));
                    },
                    onRedeemFail: function (e) {
                        (h(e), E(!1));
                    },
                }),
            [],
        ),
        U = (0, n.useCallback)(
            (e, t, r) => {
                R ? T(e, t, r) : p(e, t, r);
            },
            [R, T, p],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != g) return void r(s.intl.format(s.t["7gHWrd"], { amount: "1 orb", errorMessage: g.message }));
            if (null != o && o.length > 0) {
                let e = o.map((e) => e.sku?.name);
                r(
                    s.intl.format(s.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === o.length ? "ID" : "IDs"}: ${o.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            r("");
        }, [o, g]),
        { entitlements: o, error: g, isSubmitting: _, responseMessage: t, redeemVirtualCurrency: U }
    );
}
