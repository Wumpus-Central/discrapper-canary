n.d(t, { Q: () => E });
var l = n(64700),
    r = n(311907),
    i = n(562465),
    s = n(136857),
    a = n(158317),
    o = n(123633),
    u = n(786953),
    d = n(310829),
    c = n(211287),
    C = n(652215),
    p = n(26279),
    m = n(985018);
function E(e) {
    let [t, n] = (0, l.useState)(""),
        [E, A] = (0, l.useState)([]),
        [h, f] = (0, l.useState)(null),
        [_, g] = (0, l.useState)(!1),
        T = (0, l.useRef)(null),
        { enabled: x } = c.A.useConfig({ location: "orb_checkout_modal" }),
        S = (0, r.bG)([o.A], () => o.A.isCreatingOrder),
        I = (0, r.bG)([o.A], () => o.A.currentOrder);
    (0, l.useEffect)(() => {
        x && null != I && T.current?.id !== I.id && (T.current = I);
    }, [I, x]);
    let O = (0, l.useCallback)(async (e, t) => {
            let n = t ?? (0, d.P)(e);
            try {
                return (
                    (
                        await i.Bo.get({
                            url: C.Rsh.ENTITLEMENTS_FOR_APPLICATION(n),
                            query: { sku_ids: e, exclude_consumed: !0 },
                            rejectWithError: !1,
                        })
                    ).body ?? []
                );
            } catch (e) {
                return [];
            }
        }, []),
        y = (0, l.useCallback)(
            async (e, t, n) => {
                let l = T.current;
                if (null == l) {
                    f(new s.Ay("Order not created yet")), g(!1);
                    return;
                }
                g(!0), f(null);
                try {
                    let r = await (0, a.U)({ orderId: l.id, expectedRevision: l.revision, loadId: t });
                    if (((T.current = r), r.status !== p.Re.SIGNED)) {
                        if (r.errors && r.errors.length > 0) {
                            let e = r.errors;
                            if (e.includes(2e3)) {
                                let e = new s.Ay("Insufficient balance");
                                throw ((e.code = s.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE), e);
                            }
                            let t = `Order signing failed with errors: ${e.join(", ")}`;
                            throw Error(t);
                        }
                        if (r.status === p.Re.DRAFT) throw Error("Order could not be signed.");
                        throw Error(`Unexpected order status: ${r.status}`);
                    }
                    let i = (0, d.P)(e),
                        o = await O(e, i);
                    if (0 === o.length) {
                        await new Promise((e) => setTimeout(e, 500));
                        let t = await O(e, i);
                        if (0 === t.length) throw Error("No entitlements found after order signing");
                        A(t), g(!1), n?.(t);
                    } else A(o), g(!1), n?.(o);
                } catch (e) {
                    f(e instanceof s.Ay ? e : new s.Ay(e)), g(!1);
                }
            },
            [O],
        ),
        N = (0, l.useCallback)(
            (e, t, n) =>
                (0, u.J$)({
                    skuId: e,
                    loadId: t,
                    onRedeemStart: () => {
                        g(!0), f(null);
                    },
                    onRedeemSucceed: (e) => {
                        A(e), g(!1), n?.(e);
                    },
                    onRedeemFail: (e) => {
                        f(e), g(!1);
                    },
                }),
            [],
        ),
        R = (0, l.useCallback)(
            (e, t, n) => {
                x ? y(e, t, n) : N(e, t, n);
            },
            [x, y, N],
        );
    return (
        (0, l.useEffect)(() => {
            if (null != h) return void n(m.intl.format(m.t["7gHWrd"], { amount: "1 orb", errorMessage: h.message }));
            if (null != E && E.length > 0) {
                let e = E.map((e) => e.sku?.name);
                n(
                    m.intl.format(m.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === E.length ? "ID" : "IDs"}: ${E.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            n("");
        }, [E, h]),
        { entitlements: E, error: h, isSubmitting: _ || (x && S), responseMessage: t, redeemVirtualCurrency: R }
    );
}
