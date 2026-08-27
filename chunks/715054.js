r.d(t, { Q: () => d });
var n = r(582128),
    a = r(158317),
    l = r(313125),
    i = r(786953),
    s = r(211287),
    c = r(375708);
function d(e) {
    let [t, r] = (0, n.useState)(""),
        [d, o] = (0, n.useState)([]),
        [u, h] = (0, n.useState)(null),
        [_, C] = (0, n.useState)(!1),
        { enabled: E } = s.A.useConfig({ location: "orb_checkout_modal" }),
        R = e?.order ?? null,
        y = e?.onSignFailure,
        {
            error: A,
            signOrder: g,
            reportError: p,
        } = (0, l.f)({ order: R, errorSource: "orb_redeem_orders_api", onSignFailure: y }),
        m = E ? A : u,
        U = (0, n.useCallback)(
            async (e, t, r) => {
                C(!0);
                let n = await g({ loadId: t, errorExtra: { skuId: e, loadId: t } });
                if ("signed" !== n.type) return void C(!1);
                try {
                    let e = await (0, a.Vw)(n.order.id);
                    if (0 === e.length) throw new a.j2();
                    o(e), r?.(e);
                } catch (r) {
                    p(r, { skuId: e, loadId: t, orderId: n.order.id });
                } finally {
                    C(!1);
                }
            },
            [g, p],
        ),
        S = (0, n.useCallback)(
            (e, t, r) =>
                (0, i.J$)({
                    skuId: e,
                    loadId: t,
                    onRedeemStart: function () {
                        C(!0), h(null);
                    },
                    onRedeemSucceed: function (e) {
                        o(e), C(!1), r?.(e);
                    },
                    onRedeemFail: function (e) {
                        h(e), C(!1);
                    },
                }),
            [],
        ),
        f = (0, n.useCallback)(
            (e, t, r) => {
                E ? U(e, t, r) : S(e, t, r);
            },
            [E, U, S],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != m) return void r(c.intl.format(c.t["7gHWrd"], { amount: "1 orb", errorMessage: m.message }));
            if (null != d && d.length > 0) {
                let e = d.map((e) => e.sku?.name);
                r(
                    c.intl.format(c.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === d.length ? "ID" : "IDs"}: ${d.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            r("");
        }, [d, m]),
        { entitlements: d, error: m, isSubmitting: _, responseMessage: t, redeemVirtualCurrency: f }
    );
}
