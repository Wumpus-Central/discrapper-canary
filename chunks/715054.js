r.d(t, { Q: () => s });
var n = r(582128),
    l = r(158317),
    a = r(497782),
    i = r(786953),
    d = r(105292);
function s(e) {
    let [t, r] = (0, n.useState)(""),
        [s, c] = (0, n.useState)([]),
        [o, u] = (0, n.useState)(null),
        [h, _] = (0, n.useState)(!1),
        E = e.useOrdersAPI,
        R = e.order ?? null,
        C = e.onSignFailure,
        {
            error: m,
            signOrder: f,
            reportError: y,
        } = (0, a.f)({ order: R, errorSource: "orb_redeem_orders_api", onSignFailure: C }),
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
                let n = await f({ loadId: t, errorExtra: { skuId: e, loadId: t } });
                if ("signed" !== n.type) return void p(!1);
                try {
                    let t = await (0, l.Vw)(n.order.id);
                    if (0 === t.length) throw new l.j2();
                    (c(t), (0, i.sn)({ skuId: e, entitlements: t }), r?.(t));
                } catch (r) {
                    y(r, { skuId: e, loadId: t, orderId: n.order.id });
                } finally {
                    p(!1);
                }
            },
            [f, y, p],
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
                        (c(e), p(!1), r?.(e));
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
            if (null != g) return void r(d.intl.format(d.t["7gHWrd"], { amount: "1 orb", errorMessage: g.message }));
            if (null != s && s.length > 0) {
                let e = s.map((e) => e.sku?.name);
                r(
                    d.intl.format(d.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === s.length ? "ID" : "IDs"}: ${s.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            r("");
        }, [s, g]),
        { entitlements: s, error: g, isSubmitting: h, responseMessage: t, redeemVirtualCurrency: S }
    );
}
