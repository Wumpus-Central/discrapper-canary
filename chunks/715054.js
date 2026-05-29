t.d(r, { Q: () => g });
var n = t(64700),
    o = t(636537),
    s = t(136857),
    a = t(158317),
    i = t(739508),
    l = t(786953),
    u = t(310829),
    d = t(211287),
    c = t(652215),
    h = t(26279),
    f = t(375708);
function g(e) {
    let [r, t] = (0, n.useState)(""),
        [g, m] = (0, n.useState)([]),
        [w, b] = (0, n.useState)(null),
        [p, y] = (0, n.useState)(!1),
        { enabled: E } = d.A.useConfig({ location: "orb_checkout_modal" }),
        _ = e?.order ?? null,
        S = e?.onSignFailure,
        k = (0, n.useCallback)(async (e, r) => {
            let t = r ?? (0, u.P)(e);
            try {
                return (
                    (
                        await o.Bo.get({
                            url: c.Rsh.ENTITLEMENTS_FOR_APPLICATION(t),
                            query: { sku_ids: e, exclude_consumed: !0 },
                            rejectWithError: !1,
                        })
                    ).body ?? []
                );
            } catch (e) {
                return [];
            }
        }, []),
        I = (0, n.useCallback)(
            async (e, r, t) => {
                if (null == _) {
                    b(new s.Ay("Order not created yet")), y(!1);
                    return;
                }
                y(!0), b(null);
                try {
                    let n = await (0, a.Ub)({ orderId: _.id, loadId: r });
                    if (n.status !== h.Re.SIGNED) {
                        if (null != n.errors && n.errors.length > 0)
                            throw Error(`Order signing failed with errors: ${n.errors.join(", ")}`);
                        throw Error(`Unexpected order status: ${n.status}`);
                    }
                    let o = (0, u.P)(e),
                        s = await k(e, o);
                    if (0 === s.length) {
                        await new Promise((e) => setTimeout(e, 500));
                        let r = await k(e, o);
                        if (0 === r.length) throw Error("No entitlements found after order signing");
                        m(r), y(!1), t?.(r);
                    } else m(s), y(!1), t?.(s);
                } catch (n) {
                    if (n instanceof a.FY) {
                        S?.(n.order), b(n), y(!1);
                        return;
                    }
                    let t = n instanceof s.Ay ? n : new s.Ay(n);
                    (0, i.gr)(n) ||
                        (0, i.pM)(n instanceof Error ? n : t, {
                            tags: { source: "orb_redeem_orders_api" },
                            extra: { skuId: e, loadId: r, orderId: _.id },
                        }),
                        b(t),
                        y(!1);
                }
            },
            [_, k, S],
        ),
        v = (0, n.useCallback)(
            (e, r, t) =>
                (0, l.J$)({
                    skuId: e,
                    loadId: r,
                    onRedeemStart: () => {
                        y(!0), b(null);
                    },
                    onRedeemSucceed: (e) => {
                        m(e), y(!1), t?.(e);
                    },
                    onRedeemFail: (e) => {
                        b(e), y(!1);
                    },
                }),
            [],
        ),
        A = (0, n.useCallback)(
            (e, r, t) => {
                E ? I(e, r, t) : v(e, r, t);
            },
            [E, I, v],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != w) return void t(f.intl.format(f.t["7gHWrd"], { amount: "1 orb", errorMessage: w.message }));
            if (null != g && g.length > 0) {
                let e = g.map((e) => e.sku?.name);
                t(
                    f.intl.format(f.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === g.length ? "ID" : "IDs"}: ${g.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            t("");
        }, [g, w]),
        { entitlements: g, error: w, isSubmitting: p, responseMessage: r, redeemVirtualCurrency: A }
    );
}
