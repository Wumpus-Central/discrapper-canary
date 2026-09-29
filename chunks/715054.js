r.d(t, { Q: () => o });
var n = r(582128),
    a = r(158317),
    i = r(540173),
    l = r(786953),
    s = r(211287),
    c = r(375708);
function o(e) {
    let [t, r] = (0, n.useState)(""),
        [o, u] = (0, n.useState)([]),
        [d, h] = (0, n.useState)(null),
        [_, E] = (0, n.useState)(!1),
        { enabled: C } = s.A.useConfig({ location: "orb_checkout_modal" }),
        R = e?.order ?? null,
        y = e?.onSignFailure,
        {
            error: f,
            signOrder: g,
            reportError: m,
        } = (0, i.f)({ order: R, errorSource: "orb_redeem_orders_api", onSignFailure: y }),
        p = C ? f : d,
        A = (0, n.useCallback)(
            async (e, t, r) => {
                E(!0);
                let n = await g({ loadId: t, errorExtra: { skuId: e, loadId: t } });
                if ("signed" !== n.type) return void E(!1);
                try {
                    let e = await (0, a.Vw)(n.order.id);
                    if (0 === e.length) throw new a.j2();
                    (u(e), r?.(e));
                } catch (r) {
                    m(r, { skuId: e, loadId: t, orderId: n.order.id });
                } finally {
                    E(!1);
                }
            },
            [g, m],
        ),
        S = (0, n.useCallback)(
            (e, t, r) =>
                (0, l.J$)({
                    skuId: e,
                    loadId: t,
                    onRedeemStart: function () {
                        (E(!0), h(null));
                    },
                    onRedeemSucceed: function (e) {
                        (u(e), E(!1), r?.(e));
                    },
                    onRedeemFail: function (e) {
                        (h(e), E(!1));
                    },
                }),
            [],
        ),
        U = (0, n.useCallback)(
            (e, t, r) => {
                C ? A(e, t, r) : S(e, t, r);
            },
            [C, A, S],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != p) return void r(c.intl.format(c.t["7gHWrd"], { amount: "1 orb", errorMessage: p.message }));
            if (null != o && o.length > 0) {
                let e = o.map((e) => e.sku?.name);
                r(
                    c.intl.format(c.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === o.length ? "ID" : "IDs"}: ${o.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            r("");
        }, [o, p]),
        { entitlements: o, error: p, isSubmitting: _, responseMessage: t, redeemVirtualCurrency: U }
    );
}
