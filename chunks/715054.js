"use strict";
n.d(t, { Q: () => p });
var r = n(64700),
    i = n(311907),
    a = n(562465),
    s = n(136857),
    o = n(224771),
    l = n(624210),
    u = n(224949),
    c = n(786953),
    d = n(310829),
    _ = n(211287),
    f = n(652215),
    h = n(985018);
function p(e) {
    let [t, n] = (0, r.useState)(""),
        [p, g] = (0, r.useState)([]),
        [E, A] = (0, r.useState)(null),
        [I, T] = (0, r.useState)(!1),
        y = (0, r.useRef)(null),
        { enabled: S } = _.A.useConfig({ location: "orb_checkout_modal" }),
        v = (0, i.bG)([u.A], () => u.A.isCreatingOrder),
        C = (0, i.bG)([u.A], () => u.A.currentOrder);
    (0, r.useEffect)(() => {
        S && null != C && y.current?.id !== C.id && (y.current = C);
    }, [C, S]);
    let b = (0, r.useCallback)(async (e, t) => {
            let n = t ?? (0, d.p)(e);
            try {
                return (
                    (
                        await a.Bo.get({
                            url: f.Rsh.ENTITLEMENTS_FOR_APPLICATION(n),
                            query: { sku_ids: e, exclude_consumed: !0 },
                            rejectWithError: !1,
                        })
                    ).body ?? []
                );
            } catch (e) {
                return [];
            }
        }, []),
        N = (0, r.useCallback)(
            async (e, t, n) => {
                let r = y.current;
                if (null == r) {
                    A(new s.Ay("Order not created yet")), T(!1);
                    return;
                }
                T(!0), A(null);
                try {
                    let i = await (0, l.Ub)({ orderId: r.id, expectedRevision: r.revision, loadId: t });
                    if (((y.current = i), i.status !== o.Re.SIGNED)) {
                        let e = i;
                        if (e.errors && e.errors.length > 0) {
                            let t = e.errors;
                            if (t.includes(2e3)) {
                                let e = new s.Ay("Insufficient balance");
                                throw ((e.code = s.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE), e);
                            }
                            let n = `Order signing failed with errors: ${t.join(", ")}`;
                            throw Error(n);
                        }
                        if (i.status === o.Re.DRAFT) throw Error("Order could not be signed.");
                        throw Error(`Unexpected order status: ${i.status}`);
                    }
                    let a = (0, d.p)(e),
                        u = await b(e, a);
                    if (0 === u.length) {
                        await new Promise((e) => setTimeout(e, 500));
                        let t = await b(e, a);
                        if (0 === t.length) throw Error("No entitlements found after order signing");
                        g(t), T(!1), n?.(t);
                    } else g(u), T(!1), n?.(u);
                } catch (e) {
                    A(e instanceof s.Ay ? e : new s.Ay(e)), T(!1);
                }
            },
            [b],
        ),
        R = (0, r.useCallback)((e, t, n) => {
            let r = () => {
                    T(!0), A(null);
                },
                i = (e) => {
                    g(e), T(!1), n?.(e);
                },
                a = (e) => {
                    A(e), T(!1);
                };
            return (0, c.J$)({ skuId: e, loadId: t, onRedeemStart: r, onRedeemSucceed: i, onRedeemFail: a });
        }, []),
        O = (0, r.useCallback)(
            (e, t, n) => {
                S ? N(e, t, n) : R(e, t, n);
            },
            [S, N, R],
        );
    return (
        (0, r.useEffect)(() => {
            if (null != E) return void n(h.intl.format(h.t["7gHWrd"], { amount: "1 orb", errorMessage: E.message }));
            if (null != p && p.length > 0) {
                let e = p.map((e) => e.sku?.name);
                n(
                    h.intl.format(h.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === p.length ? "ID" : "IDs"}: ${p.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            n("");
        }, [p, E]),
        { entitlements: p, error: E, isSubmitting: I || (S && v), responseMessage: t, redeemVirtualCurrency: O }
    );
}
