r.d(t, { Q: () => c });
var n = r(582128),
    a = r(158317),
    l = r(423686),
    i = r(786953),
    d = r(211287),
    s = r(375708);
function c(e) {
    let [t, r] = (0, n.useState)(""),
        [c, o] = (0, n.useState)([]),
        [u, h] = (0, n.useState)(null),
        [_, E] = (0, n.useState)(!1),
        { enabled: R } = d.A.useConfig({ location: "orb_checkout_modal" }),
        C = e?.order ?? null,
        m = e?.onSignFailure,
        {
            error: f,
            signOrder: y,
            reportError: g,
        } = (0, l.f)({ order: C, errorSource: "orb_redeem_orders_api", onSignFailure: m }),
        A = R ? f : u,
        p = (0, n.useCallback)(
            async (e, t, r) => {
                E(!0);
                let n = await y({ loadId: t, errorExtra: { skuId: e, loadId: t } });
                if ("signed" !== n.type) return void E(!1);
                try {
                    let e = await (0, a.Vw)(n.order.id);
                    if (0 === e.length) throw new a.j2();
                    (o(e), r?.(e));
                } catch (r) {
                    g(r, { skuId: e, loadId: t, orderId: n.order.id });
                } finally {
                    E(!1);
                }
            },
            [y, g],
        ),
        T = (0, n.useCallback)(
            (e, t, r) =>
                (0, i.J$)({
                    skuId: e,
                    loadId: t,
                    onRedeemStart: function () {
                        (E(!0), h(null));
                    },
                    onRedeemSucceed: function (e) {
                        (o(e), E(!1), r?.(e));
                    },
                    onRedeemFail: function (e) {
                        (h(e), E(!1));
                    },
                }),
            [],
        ),
        U = (0, n.useCallback)(
            (e, t, r) => {
                R ? p(e, t, r) : T(e, t, r);
            },
            [R, p, T],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != A) return void r(s.intl.format(s.t["7gHWrd"], { amount: "1 orb", errorMessage: A.message }));
            if (null != c && c.length > 0) {
                let e = c.map((e) => e.sku?.name);
                r(
                    s.intl.format(s.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === c.length ? "ID" : "IDs"}: ${c.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            r("");
        }, [c, A]),
        { entitlements: c, error: A, isSubmitting: _, responseMessage: t, redeemVirtualCurrency: U }
    );
}
