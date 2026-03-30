"use strict";
n.d(t, { Q: () => h });
var r = n(64700),
    i = n(311907),
    s = n(562465),
    a = n(136857),
    o = n(158317),
    l = n(123633),
    u = n(786953),
    c = n(310829),
    d = n(211287),
    _ = n(652215),
    f = n(26279),
    p = n(985018);
function h(e) {
    let [t, n] = (0, r.useState)(""),
        [h, m] = (0, r.useState)([]),
        [E, g] = (0, r.useState)(null),
        [A, I] = (0, r.useState)(!1),
        T = (0, r.useRef)(null),
        { enabled: S } = d.A.useConfig({ location: "orb_checkout_modal" }),
        y = (0, i.bG)([l.A], () => l.A.isCreatingOrder),
        v = (0, i.bG)([l.A], () => l.A.currentOrder);
    (0, r.useEffect)(() => {
        S && null != v && T.current?.id !== v.id && (T.current = v);
    }, [v, S]);
    let N = (0, r.useCallback)(async (e, t) => {
            let n = t ?? (0, c.p)(e);
            try {
                return (
                    (
                        await s.Bo.get({
                            url: _.Rsh.ENTITLEMENTS_FOR_APPLICATION(n),
                            query: { sku_ids: e, exclude_consumed: !0 },
                            rejectWithError: !1,
                        })
                    ).body ?? []
                );
            } catch (e) {
                return [];
            }
        }, []),
        C = (0, r.useCallback)(
            async (e, t, n) => {
                let r = T.current;
                if (null == r) {
                    g(new a.Ay("Order not created yet")), I(!1);
                    return;
                }
                I(!0), g(null);
                try {
                    let i = await (0, o.U)({ orderId: r.id, expectedRevision: r.revision, loadId: t });
                    if (((T.current = i), i.status !== f.Re.SIGNED)) {
                        let e = i;
                        if (e.errors && e.errors.length > 0) {
                            let t = e.errors;
                            if (t.includes(2e3)) {
                                let e = new a.Ay("Insufficient balance");
                                throw ((e.code = a.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE), e);
                            }
                            let n = `Order signing failed with errors: ${t.join(", ")}`;
                            throw Error(n);
                        }
                        if (i.status === f.Re.DRAFT) throw Error("Order could not be signed.");
                        throw Error(`Unexpected order status: ${i.status}`);
                    }
                    let s = (0, c.p)(e),
                        l = await N(e, s);
                    if (0 === l.length) {
                        await new Promise((e) => setTimeout(e, 500));
                        let t = await N(e, s);
                        if (0 === t.length) throw Error("No entitlements found after order signing");
                        m(t), I(!1), n?.(t);
                    } else m(l), I(!1), n?.(l);
                } catch (e) {
                    g(e instanceof a.Ay ? e : new a.Ay(e)), I(!1);
                }
            },
            [N],
        ),
        R = (0, r.useCallback)((e, t, n) => {
            let r = () => {
                    I(!0), g(null);
                },
                i = (e) => {
                    m(e), I(!1), n?.(e);
                },
                s = (e) => {
                    g(e), I(!1);
                };
            return (0, u.J$)({ skuId: e, loadId: t, onRedeemStart: r, onRedeemSucceed: i, onRedeemFail: s });
        }, []),
        O = (0, r.useCallback)(
            (e, t, n) => {
                S ? C(e, t, n) : R(e, t, n);
            },
            [S, C, R],
        );
    return (
        (0, r.useEffect)(() => {
            if (null != E) return void n(p.intl.format(p.t["7gHWrd"], { amount: "1 orb", errorMessage: E.message }));
            if (null != h && h.length > 0) {
                let e = h.map((e) => e.sku?.name);
                n(
                    p.intl.format(p.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === h.length ? "ID" : "IDs"}: ${h.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            n("");
        }, [h, E]),
        { entitlements: h, error: E, isSubmitting: A || (S && y), responseMessage: t, redeemVirtualCurrency: O }
    );
}
