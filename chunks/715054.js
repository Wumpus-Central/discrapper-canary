r.d(t, { Q: () => s });
var n = r(582128),
    l = r(158317),
    a = r(497782),
    i = r(786953),
    d = r(211287),
    c = r(105292);
function s(e) {
    let [t, r] = (0, n.useState)(""),
        [s, o] = (0, n.useState)([]),
        [u, h] = (0, n.useState)(null),
        [_, E] = (0, n.useState)(!1),
        { enabled: R } = d.A.useConfig({ location: "orb_checkout_modal" }),
        C = e?.order ?? null,
        m = e?.onSignFailure,
        {
            error: f,
            signOrder: y,
            reportError: g,
        } = (0, a.f)({ order: C, errorSource: "orb_redeem_orders_api", onSignFailure: m }),
        A = R ? f : u,
        p = null != e ? e.onSetIsSubmitting : null,
        T = (0, n.useCallback)(
            (e) => {
                (E(e), null != p && p(e));
            },
            [p],
        ),
        U = (0, n.useCallback)(
            async (e, t, r) => {
                T(!0);
                let n = await y({ loadId: t, errorExtra: { skuId: e, loadId: t } });
                if ("signed" !== n.type) return void T(!1);
                try {
                    let e = await (0, l.Vw)(n.order.id);
                    if (0 === e.length) throw new l.j2();
                    (o(e), r?.(e));
                } catch (r) {
                    g(r, { skuId: e, loadId: t, orderId: n.order.id });
                } finally {
                    T(!1);
                }
            },
            [y, g, T],
        ),
        S = (0, n.useCallback)(
            (e, t, r) =>
                (0, i.J$)({
                    skuId: e,
                    loadId: t,
                    onRedeemStart: function () {
                        (T(!0), h(null));
                    },
                    onRedeemSucceed: function (e) {
                        (o(e), T(!1), r?.(e));
                    },
                    onRedeemFail: function (e) {
                        (h(e), T(!1));
                    },
                }),
            [T],
        ),
        F = (0, n.useCallback)(
            (e, t, r) => {
                R ? U(e, t, r) : S(e, t, r);
            },
            [R, U, S],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != A) return void r(c.intl.format(c.t["7gHWrd"], { amount: "1 orb", errorMessage: A.message }));
            if (null != s && s.length > 0) {
                let e = s.map((e) => e.sku?.name);
                r(
                    c.intl.format(c.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === s.length ? "ID" : "IDs"}: ${s.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            r("");
        }, [s, A]),
        { entitlements: s, error: A, isSubmitting: _, responseMessage: t, redeemVirtualCurrency: F }
    );
}
