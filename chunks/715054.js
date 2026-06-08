t.d(r, { Q: () => c });
var n = t(64700),
    o = t(136857),
    i = t(158317),
    s = t(739508),
    a = t(786953),
    l = t(211287),
    d = t(26279),
    u = t(375708);
function c(e) {
    let [r, t] = (0, n.useState)(""),
        [c, f] = (0, n.useState)([]),
        [h, p] = (0, n.useState)(null),
        [b, g] = (0, n.useState)(!1),
        { enabled: w } = l.A.useConfig({ location: "orb_checkout_modal" }),
        y = e?.order ?? null,
        m = e?.onSignFailure,
        E = (0, n.useCallback)(
            async (e, r, t) => {
                if (null == y) {
                    p(new o.Ay("Order not created yet")), g(!1);
                    return;
                }
                g(!0), p(null);
                try {
                    let e = await (0, i.Ub)({ orderId: y.id, loadId: r });
                    if (e.status !== d.Re.SIGNED) {
                        if (null != e.errors && e.errors.length > 0)
                            throw Error(`Order signing failed with errors: ${e.errors.join(", ")}`);
                        throw Error(`Unexpected order status: ${e.status}`);
                    }
                    let n = await (0, i.pI)(y.id);
                    for (let e of [250, 500, 1e3, 1500, 2500, 4250]) {
                        if (n.length > 0) break;
                        await new Promise((r) => setTimeout(r, e)), (n = await (0, i.pI)(y.id));
                    }
                    if (0 === n.length) throw new i.j2();
                    f(n), g(!1), t?.(n);
                } catch (n) {
                    if (n instanceof i.FY) {
                        m?.(n.order), p(n), g(!1);
                        return;
                    }
                    let t = n instanceof o.Ay ? n : new o.Ay(n);
                    (0, s.gr)(n) ||
                        (0, s.pM)(n instanceof Error ? n : t, {
                            tags: { source: "orb_redeem_orders_api" },
                            extra: { skuId: e, loadId: r, orderId: y.id },
                        }),
                        p(t),
                        g(!1);
                }
            },
            [y, m],
        ),
        I = (0, n.useCallback)(
            (e, r, t) =>
                (0, a.J$)({
                    skuId: e,
                    loadId: r,
                    onRedeemStart: () => {
                        g(!0), p(null);
                    },
                    onRedeemSucceed: (e) => {
                        f(e), g(!1), t?.(e);
                    },
                    onRedeemFail: (e) => {
                        p(e), g(!1);
                    },
                }),
            [],
        ),
        S = (0, n.useCallback)(
            (e, r, t) => {
                w ? E(e, r, t) : I(e, r, t);
            },
            [w, E, I],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != h) return void t(u.intl.format(u.t["7gHWrd"], { amount: "1 orb", errorMessage: h.message }));
            if (null != c && c.length > 0) {
                let e = c.map((e) => e.sku?.name);
                t(
                    u.intl.format(u.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === c.length ? "ID" : "IDs"}: ${c.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            t("");
        }, [c, h]),
        { entitlements: c, error: h, isSubmitting: b, responseMessage: r, redeemVirtualCurrency: S }
    );
}
