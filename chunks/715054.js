t.d(r, { Q: () => c });
var n = t(582128),
    o = t(136857),
    a = t(158317),
    i = t(739508),
    s = t(786953),
    l = t(211287),
    u = t(26279),
    d = t(375708);
function c(e) {
    let [r, t] = (0, n.useState)(""),
        [c, f] = (0, n.useState)([]),
        [m, h] = (0, n.useState)(null),
        [p, g] = (0, n.useState)(!1),
        { enabled: b } = l.A.useConfig({ location: "orb_checkout_modal" }),
        w = e?.order ?? null,
        k = e?.onSignFailure,
        S = (0, n.useCallback)(
            async (e, r, t) => {
                if (null == w) {
                    h(new o.Ay("Order not created yet")), g(!1);
                    return;
                }
                g(!0), h(null);
                try {
                    let e = await (0, a.Ub)({ orderId: w.id, loadId: r });
                    if (e.status !== u.Re.SIGNED) {
                        if (null != e.errors && e.errors.length > 0)
                            throw Error(`Order signing failed with errors: ${e.errors.join(", ")}`);
                        throw Error(`Unexpected order status: ${e.status}`);
                    }
                    let n = await (0, a.pI)(w.id);
                    for (let e of [250, 500, 1e3, 1500, 2500, 4250]) {
                        if (n.length > 0) break;
                        await new Promise((r) => setTimeout(r, e)), (n = await (0, a.pI)(w.id));
                    }
                    if (0 === n.length) throw new a.j2();
                    f(n), g(!1), t?.(n);
                } catch (n) {
                    if (n instanceof a.FY) {
                        k?.(n.order), h(n), g(!1);
                        return;
                    }
                    let t = n instanceof o.Ay ? n : new o.Ay(n);
                    (0, i.gr)(n) ||
                        (0, i.pM)(n instanceof Error ? n : t, {
                            tags: { source: "orb_redeem_orders_api" },
                            extra: { skuId: e, loadId: r, orderId: w.id },
                        }),
                        h(t),
                        g(!1);
                }
            },
            [w, k],
        ),
        I = (0, n.useCallback)(
            (e, r, t) =>
                (0, s.J$)({
                    skuId: e,
                    loadId: r,
                    onRedeemStart: function () {
                        g(!0), h(null);
                    },
                    onRedeemSucceed: function (e) {
                        f(e), g(!1), t?.(e);
                    },
                    onRedeemFail: function (e) {
                        h(e), g(!1);
                    },
                }),
            [],
        ),
        C = (0, n.useCallback)(
            (e, r, t) => {
                b ? S(e, r, t) : I(e, r, t);
            },
            [b, S, I],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != m) return void t(d.intl.format(d.t["7gHWrd"], { amount: "1 orb", errorMessage: m.message }));
            if (null != c && c.length > 0) {
                let e = c.map((e) => e.sku?.name);
                t(
                    d.intl.format(d.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === c.length ? "ID" : "IDs"}: ${c.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            t("");
        }, [c, m]),
        { entitlements: c, error: m, isSubmitting: p, responseMessage: r, redeemVirtualCurrency: C }
    );
}
