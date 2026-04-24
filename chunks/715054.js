n.d(t, { Q: () => R });
var r = n(64700),
    a = n(17928),
    l = n(636537),
    s = n(136857),
    i = n(158317),
    c = n(123633),
    o = n(786953),
    d = n(310829),
    u = n(211287),
    _ = n(652215),
    h = n(26279),
    C = n(985018);
function R(e) {
    let [t, n] = (0, r.useState)(""),
        [R, E] = (0, r.useState)([]),
        [A, f] = (0, r.useState)(null),
        [m, b] = (0, r.useState)(!1),
        p = (0, r.useRef)(null),
        { enabled: g } = u.A.useConfig({ location: "orb_checkout_modal" }),
        y = (0, a.bG)([c.A], () => c.A.isCreatingOrder),
        S = (0, a.bG)([c.A], () => c.A.currentOrder);
    (0, r.useEffect)(() => {
        g && null != S && p.current?.id !== S.id && (p.current = S);
    }, [S, g]);
    let B = (0, r.useCallback)(async (e, t) => {
            let n = t ?? (0, d.P)(e);
            try {
                return (
                    (
                        await l.Bo.get({
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
        I = (0, r.useCallback)(
            async (e, t, n) => {
                let r = p.current;
                if (null == r) {
                    f(new s.Ay("Order not created yet")), b(!1);
                    return;
                }
                b(!0), f(null);
                try {
                    let a = await (0, i.U)({ orderId: r.id, expectedRevision: r.revision, loadId: t });
                    if (((p.current = a), a.status !== h.Re.SIGNED)) {
                        if (a.errors && a.errors.length > 0) {
                            let e = a.errors;
                            if (e.includes(2e3)) {
                                let e = new s.Ay("Insufficient balance");
                                throw ((e.code = s.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE), e);
                            }
                            let t = `Order signing failed with errors: ${e.join(", ")}`;
                            throw Error(t);
                        }
                        if (a.status === h.Re.DRAFT) throw Error("Order could not be signed.");
                        throw Error(`Unexpected order status: ${a.status}`);
                    }
                    let l = (0, d.P)(e),
                        c = await B(e, l);
                    if (0 === c.length) {
                        await new Promise((e) => setTimeout(e, 500));
                        let t = await B(e, l);
                        if (0 === t.length) throw Error("No entitlements found after order signing");
                        E(t), b(!1), n?.(t);
                    } else E(c), b(!1), n?.(c);
                } catch (e) {
                    f(e instanceof s.Ay ? e : new s.Ay(e)), b(!1);
                }
            },
            [B],
        ),
        L = (0, r.useCallback)(
            (e, t, n) =>
                (0, o.J$)({
                    skuId: e,
                    loadId: t,
                    onRedeemStart: () => {
                        b(!0), f(null);
                    },
                    onRedeemSucceed: (e) => {
                        E(e), b(!1), n?.(e);
                    },
                    onRedeemFail: (e) => {
                        f(e), b(!1);
                    },
                }),
            [],
        ),
        N = (0, r.useCallback)(
            (e, t, n) => {
                g ? I(e, t, n) : L(e, t, n);
            },
            [g, I, L],
        );
    return (
        (0, r.useEffect)(() => {
            if (null != A) return void n(C.intl.format(C.t["7gHWrd"], { amount: "1 orb", errorMessage: A.message }));
            if (null != R && R.length > 0) {
                let e = R.map((e) => e.sku?.name);
                n(
                    C.intl.format(C.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === R.length ? "ID" : "IDs"}: ${R.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            n("");
        }, [R, A]),
        { entitlements: R, error: A, isSubmitting: m || (g && y), responseMessage: t, redeemVirtualCurrency: N }
    );
}
