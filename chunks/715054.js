r.d(t, { Q: () => s });
var n = r(582128),
    a = r(158317),
    l = r(423686),
    i = r(786953),
    d = r(211287),
    c = r(660183);
function s(e) {
    let [t, r] = (0, n.useState)(""),
        [s, o] = (0, n.useState)([]),
        [_, u] = (0, n.useState)(null),
        [E, h] = (0, n.useState)(!1),
        { enabled: R } = d.A.useConfig({ location: "orb_checkout_modal" }),
        C = e?.order ?? null,
        m = e?.onSignFailure,
        {
            error: T,
            signOrder: I,
            reportError: A,
        } = (0, l.f)({ order: C, errorSource: "orb_redeem_orders_api", onSignFailure: m }),
        f = R ? T : _,
        S = (0, n.useCallback)(
            async (e, t, r) => {
                h(!0);
                let n = await I({ loadId: t, errorExtra: { skuId: e, loadId: t } });
                if ("signed" !== n.type) return void h(!1);
                try {
                    let e = await (0, a.Vw)(n.order.id);
                    if (0 === e.length) throw new a.j2();
                    (o(e), r?.(e));
                } catch (r) {
                    A(r, { skuId: e, loadId: t, orderId: n.order.id });
                } finally {
                    h(!1);
                }
            },
            [I, A],
        ),
        U = (0, n.useCallback)(
            (e, t, r) =>
                (0, i.J$)({
                    skuId: e,
                    loadId: t,
                    onRedeemStart: function () {
                        (h(!0), u(null));
                    },
                    onRedeemSucceed: function (e) {
                        (o(e), h(!1), r?.(e));
                    },
                    onRedeemFail: function (e) {
                        (u(e), h(!1));
                    },
                }),
            [],
        ),
        y = (0, n.useCallback)(
            (e, t, r) => {
                R ? S(e, t, r) : U(e, t, r);
            },
            [R, S, U],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != f) return void r(c.intl.format(c.t["7gHWrd"], { amount: "1 orb", errorMessage: f.message }));
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
        }, [s, f]),
        { entitlements: s, error: f, isSubmitting: E, responseMessage: t, redeemVirtualCurrency: y }
    );
}
