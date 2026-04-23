"use strict";
n.d(t, { Q: () => m });
var i = n(64700),
    r = n(17928),
    s = n(636537),
    a = n(136857),
    o = n(158317),
    l = n(123633),
    d = n(786953),
    _ = n(310829),
    u = n(211287),
    c = n(652215),
    E = n(26279),
    h = n(985018);
function m(e) {
    let [t, n] = (0, i.useState)(""),
        [m, f] = (0, i.useState)([]),
        [g, p] = (0, i.useState)(null),
        [A, I] = (0, i.useState)(!1),
        T = (0, i.useRef)(null),
        { enabled: S } = u.A.useConfig({ location: "orb_checkout_modal" }),
        N = (0, r.bG)([l.A], () => l.A.isCreatingOrder),
        C = (0, r.bG)([l.A], () => l.A.currentOrder);
    (0, i.useEffect)(() => {
        S && null != C && T.current?.id !== C.id && (T.current = C);
    }, [C, S]);
    let R = (0, i.useCallback)(async (e, t) => {
            let n = t ?? (0, _.P)(e);
            try {
                return (
                    (
                        await s.Bo.get({
                            url: c.Rsh.ENTITLEMENTS_FOR_APPLICATION(n),
                            query: { sku_ids: e, exclude_consumed: !0 },
                            rejectWithError: !1,
                        })
                    ).body ?? []
                );
            } catch (e) {
                return [];
            }
        }, []),
        O = (0, i.useCallback)(
            async (e, t, n) => {
                let i = T.current;
                if (null == i) {
                    p(new a.Ay("Order not created yet")), I(!1);
                    return;
                }
                I(!0), p(null);
                try {
                    let r = await (0, o.U)({ orderId: i.id, expectedRevision: i.revision, loadId: t });
                    if (((T.current = r), r.status !== E.Re.SIGNED)) {
                        if (r.errors && r.errors.length > 0) {
                            let e = r.errors;
                            if (e.includes(2e3)) {
                                let e = new a.Ay("Insufficient balance");
                                throw ((e.code = a.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE), e);
                            }
                            let t = `Order signing failed with errors: ${e.join(", ")}`;
                            throw Error(t);
                        }
                        if (r.status === E.Re.DRAFT) throw Error("Order could not be signed.");
                        throw Error(`Unexpected order status: ${r.status}`);
                    }
                    let s = (0, _.P)(e),
                        l = await R(e, s);
                    if (0 === l.length) {
                        await new Promise((e) => setTimeout(e, 500));
                        let t = await R(e, s);
                        if (0 === t.length) throw Error("No entitlements found after order signing");
                        f(t), I(!1), n?.(t);
                    } else f(l), I(!1), n?.(l);
                } catch (e) {
                    p(e instanceof a.Ay ? e : new a.Ay(e)), I(!1);
                }
            },
            [R],
        ),
        y = (0, i.useCallback)(
            (e, t, n) =>
                (0, d.J$)({
                    skuId: e,
                    loadId: t,
                    onRedeemStart: () => {
                        I(!0), p(null);
                    },
                    onRedeemSucceed: (e) => {
                        f(e), I(!1), n?.(e);
                    },
                    onRedeemFail: (e) => {
                        p(e), I(!1);
                    },
                }),
            [],
        ),
        v = (0, i.useCallback)(
            (e, t, n) => {
                S ? O(e, t, n) : y(e, t, n);
            },
            [S, O, y],
        );
    return (
        (0, i.useEffect)(() => {
            if (null != g) return void n(h.intl.format(h.t["7gHWrd"], { amount: "1 orb", errorMessage: g.message }));
            if (null != m && m.length > 0) {
                let e = m.map((e) => e.sku?.name);
                n(
                    h.intl.format(h.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === m.length ? "ID" : "IDs"}: ${m.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            n("");
        }, [m, g]),
        { entitlements: m, error: g, isSubmitting: A || (S && N), responseMessage: t, redeemVirtualCurrency: v }
    );
}
