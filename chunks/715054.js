t.d(r, { Q: () => f });
var n = t(64700),
    o = t(636537),
    s = t(136857),
    i = t(158317),
    a = t(786953),
    l = t(310829),
    u = t(211287),
    d = t(652215),
    c = t(26279),
    h = t(375708);
function f(e) {
    let [r, t] = (0, n.useState)(""),
        [f, w] = (0, n.useState)([]),
        [g, m] = (0, n.useState)(null),
        [b, y] = (0, n.useState)(!1),
        { enabled: p } = u.A.useConfig({ location: "orb_checkout_modal" }),
        E = e?.order ?? null,
        S = e?.onSignFailure,
        k = (0, n.useCallback)(async (e, r) => {
            let t = r ?? (0, l.P)(e);
            try {
                return (
                    (
                        await o.Bo.get({
                            url: d.Rsh.ENTITLEMENTS_FOR_APPLICATION(t),
                            query: { sku_ids: e, exclude_consumed: !0 },
                            rejectWithError: !1,
                        })
                    ).body ?? []
                );
            } catch (e) {
                return [];
            }
        }, []),
        _ = (0, n.useCallback)(
            async (e, r, t) => {
                if (null == E) {
                    m(new s.Ay("Order not created yet")), y(!1);
                    return;
                }
                y(!0), m(null);
                try {
                    let n = await (0, i.Ub)({ orderId: E.id, loadId: r });
                    if (n.status !== c.Re.SIGNED) {
                        if (null != n.errors && n.errors.length > 0)
                            throw Error(`Order signing failed with errors: ${n.errors.join(", ")}`);
                        throw Error(`Unexpected order status: ${n.status}`);
                    }
                    let o = (0, l.P)(e),
                        s = await k(e, o);
                    if (0 === s.length) {
                        await new Promise((e) => setTimeout(e, 500));
                        let r = await k(e, o);
                        if (0 === r.length) throw Error("No entitlements found after order signing");
                        w(r), y(!1), t?.(r);
                    } else w(s), y(!1), t?.(s);
                } catch (e) {
                    if (e instanceof i.FY) {
                        S?.(e.order), m(e), y(!1);
                        return;
                    }
                    m(e instanceof s.Ay ? e : new s.Ay(e)), y(!1);
                }
            },
            [E, k, S],
        ),
        I = (0, n.useCallback)(
            (e, r, t) =>
                (0, a.J$)({
                    skuId: e,
                    loadId: r,
                    onRedeemStart: () => {
                        y(!0), m(null);
                    },
                    onRedeemSucceed: (e) => {
                        w(e), y(!1), t?.(e);
                    },
                    onRedeemFail: (e) => {
                        m(e), y(!1);
                    },
                }),
            [],
        ),
        v = (0, n.useCallback)(
            (e, r, t) => {
                p ? _(e, r, t) : I(e, r, t);
            },
            [p, _, I],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != g) return void t(h.intl.format(h.t["7gHWrd"], { amount: "1 orb", errorMessage: g.message }));
            if (null != f && f.length > 0) {
                let e = f.map((e) => e.sku?.name);
                t(
                    h.intl.format(h.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === f.length ? "ID" : "IDs"}: ${f.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            t("");
        }, [f, g]),
        { entitlements: f, error: g, isSubmitting: b, responseMessage: r, redeemVirtualCurrency: v }
    );
}
