t.d(r, { Q: () => d });
var n = t(582128),
    a = t(158317),
    o = t(313125),
    i = t(786953),
    l = t(211287),
    u = t(375708);
function d(e) {
    let [r, t] = (0, n.useState)(""),
        [d, s] = (0, n.useState)([]),
        [c, f] = (0, n.useState)(null),
        [p, h] = (0, n.useState)(!1),
        { enabled: m } = l.A.useConfig({ location: "orb_checkout_modal" }),
        g = e?.order ?? null,
        b = e?.onSignFailure,
        {
            error: y,
            signOrder: k,
            reportError: w,
        } = (0, o.f)({ order: g, errorSource: "orb_redeem_orders_api", onSignFailure: b }),
        S = m ? y : c,
        C = (0, n.useCallback)(
            async (e, r, t) => {
                h(!0);
                let n = await k({ loadId: r, errorExtra: { skuId: e, loadId: r } });
                if ("signed" !== n.type) return void h(!1);
                try {
                    let e = await (0, a.Vw)(n.order.id);
                    if (0 === e.length) throw new a.j2();
                    s(e), t?.(e);
                } catch (t) {
                    w(t, { skuId: e, loadId: r, orderId: n.order.id });
                } finally {
                    h(!1);
                }
            },
            [k, w],
        ),
        v = (0, n.useCallback)(
            (e, r, t) =>
                (0, i.J$)({
                    skuId: e,
                    loadId: r,
                    onRedeemStart: function () {
                        h(!0), f(null);
                    },
                    onRedeemSucceed: function (e) {
                        s(e), h(!1), t?.(e);
                    },
                    onRedeemFail: function (e) {
                        f(e), h(!1);
                    },
                }),
            [],
        ),
        E = (0, n.useCallback)(
            (e, r, t) => {
                m ? C(e, r, t) : v(e, r, t);
            },
            [m, C, v],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != S) return void t(u.intl.format(u.t["7gHWrd"], { amount: "1 orb", errorMessage: S.message }));
            if (null != d && d.length > 0) {
                let e = d.map((e) => e.sku?.name);
                t(
                    u.intl.format(u.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === d.length ? "ID" : "IDs"}: ${d.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            t("");
        }, [d, S]),
        { entitlements: d, error: S, isSubmitting: p, responseMessage: r, redeemVirtualCurrency: E }
    );
}
