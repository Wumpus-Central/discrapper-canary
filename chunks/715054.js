t.d(r, { Q: () => b });
var n = t(64700),
    o = t(636537),
    s = t(136857),
    a = t(158317),
    i = t(739508),
    l = t(786953),
    u = t(310829),
    d = t(211287),
    c = t(652215),
    f = t(26279),
    h = t(375708);
function b(e) {
    let [r, t] = (0, n.useState)(""),
        [b, g] = (0, n.useState)([]),
        [p, w] = (0, n.useState)(null),
        [m, y] = (0, n.useState)(!1),
        { enabled: _ } = d.A.useConfig({ location: "orb_checkout_modal" }),
        E = e?.order ?? null,
        k = e?.onSignFailure,
        S = (0, n.useCallback)(async (e, r) => {
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
                if (null == E) {
                    w(new s.Ay("Order not created yet")), y(!1);
                    return;
                }
                y(!0), w(null);
                try {
                    let n = await (0, a.Ub)({ orderId: E.id, loadId: r });
                    if (n.status !== f.Re.SIGNED) {
                        if (null != n.errors && n.errors.length > 0)
                            throw Error(`Order signing failed with errors: ${n.errors.join(", ")}`);
                        throw Error(`Unexpected order status: ${n.status}`);
                    }
                    let o = (0, u.P)(e),
                        s = await S(e, o);
                    for (let r of [250, 500, 1e3, 1500, 2500, 4250]) {
                        if (s.length > 0) break;
                        await new Promise((e) => setTimeout(e, r)), (s = await S(e, o));
                    }
                    if (0 === s.length) throw new a.j2();
                    g(s), y(!1), t?.(s);
                } catch (n) {
                    if (n instanceof a.FY) {
                        k?.(n.order), w(n), y(!1);
                        return;
                    }
                    let t = n instanceof s.Ay ? n : new s.Ay(n);
                    (0, i.gr)(n) ||
                        (0, i.pM)(n instanceof Error ? n : t, {
                            tags: { source: "orb_redeem_orders_api" },
                            extra: { skuId: e, loadId: r, orderId: E.id },
                        }),
                        w(t),
                        y(!1);
                }
            },
            [E, S, k],
        ),
        v = (0, n.useCallback)(
            (e, r, t) =>
                (0, l.J$)({
                    skuId: e,
                    loadId: r,
                    onRedeemStart: () => {
                        y(!0), w(null);
                    },
                    onRedeemSucceed: (e) => {
                        g(e), y(!1), t?.(e);
                    },
                    onRedeemFail: (e) => {
                        w(e), y(!1);
                    },
                }),
            [],
        ),
        A = (0, n.useCallback)(
            (e, r, t) => {
                _ ? I(e, r, t) : v(e, r, t);
            },
            [_, I, v],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != p) return void t(h.intl.format(h.t["7gHWrd"], { amount: "1 orb", errorMessage: p.message }));
            if (null != b && b.length > 0) {
                let e = b.map((e) => e.sku?.name);
                t(
                    h.intl.format(h.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === b.length ? "ID" : "IDs"}: ${b.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            t("");
        }, [b, p]),
        { entitlements: b, error: p, isSubmitting: m, responseMessage: r, redeemVirtualCurrency: A }
    );
}
