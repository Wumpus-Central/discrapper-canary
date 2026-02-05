"use strict";
n.d(t, { Q: () => h });
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
    p = n(985018);
function h(e) {
    let [t, n] = (0, r.useState)(""),
        [h, m] = (0, r.useState)([]),
        [g, E] = (0, r.useState)(null),
        [A, I] = (0, r.useState)(!1),
        T = (0, r.useRef)(null),
        { enabled: y } = _.A.useConfig({ location: "orb_checkout_modal" }),
        S = (0, i.bG)([u.A], () => u.A.isCreatingOrder),
        v = (0, i.bG)([u.A], () => u.A.currentOrder);
    (0, r.useEffect)(() => {
        y && null != v && T.current?.id !== v.id && (T.current = v);
    }, [v, y]);
    let C = (0, r.useCallback)(async (e, t) => {
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
        b = (0, r.useCallback)(
            async (e, t, n) => {
                let r = T.current;
                if (null == r) {
                    E(new s.Ay("Order not created yet")), I(!1);
                    return;
                }
                I(!0), E(null);
                try {
                    let i = await (0, l.Ub)({ orderId: r.id, expectedRevision: r.revision, loadId: t });
                    if (((T.current = i), i.status !== o.Re.SIGNED)) {
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
                        u = await C(e, a);
                    if (0 === u.length) {
                        await new Promise((e) => setTimeout(e, 500));
                        let t = await C(e, a);
                        if (0 === t.length) throw Error("No entitlements found after order signing");
                        m(t), I(!1), n?.(t);
                    } else m(u), I(!1), n?.(u);
                } catch (e) {
                    E(e instanceof s.Ay ? e : new s.Ay(e)), I(!1);
                }
            },
            [C],
        ),
        N = (0, r.useCallback)(function (e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = () => {
                    I(!0), E(null);
                },
                a = (e) => {
                    m(e), I(!1), n?.(e);
                },
                s = (e) => {
                    E(e), I(!1);
                };
            return (0, c.J$)({
                skuId: e,
                loadId: t,
                onRedeemStart: i,
                onRedeemSucceed: a,
                onRedeemFail: s,
                isRental: r,
            });
        }, []),
        R = (0, r.useCallback)(
            function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (y) {
                    if (r) {
                        E(new s.Ay("Rental orders are not supported via Orders API yet")), I(!1);
                        return;
                    }
                    b(e, t, n);
                } else N(e, t, n, r);
            },
            [y, b, N],
        );
    return (
        (0, r.useEffect)(() => {
            if (null != g) return void n(p.intl.format(p.t["7gHWrd"], { amount: "1 orb", errorMessage: g.message }));
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
        }, [h, g]),
        { entitlements: h, error: g, isSubmitting: A || (y && S), responseMessage: t, redeemVirtualCurrency: R }
    );
}
