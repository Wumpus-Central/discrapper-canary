n.d(t, { Q: () => h }), n(896048), n(65821);
var r = n(64700),
    i = n(311907),
    a = n(562465),
    s = n(136857),
    o = n(224771),
    l = n(624210),
    c = n(224949),
    u = n(786953),
    d = n(310829),
    f = n(211287),
    p = n(652215),
    _ = n(985018);
function h(e) {
    let [t, n] = (0, r.useState)(""),
        [h, m] = (0, r.useState)([]),
        [g, E] = (0, r.useState)(null),
        [b, y] = (0, r.useState)(!1),
        O = (0, r.useRef)(null),
        { enabled: A } = f.A.useConfig({ location: "orb_checkout_modal" }),
        v = (0, i.bG)([c.A], () => c.A.isCreatingOrder),
        S = (0, i.bG)([c.A], () => c.A.currentOrder);
    (0, r.useEffect)(() => {
        var e;
        A && null != S && (null == (e = O.current) ? void 0 : e.id) !== S.id && (O.current = S);
    }, [S, A]);
    let I = (0, r.useCallback)(async (e, t) => {
            let n = null != t ? t : (0, d.p)(e);
            try {
                var r;
                return null !=
                    (r = (
                        await a.Bo.get({
                            url: p.Rsh.ENTITLEMENTS_FOR_APPLICATION(n),
                            query: {
                                sku_ids: e,
                                exclude_consumed: !0,
                            },
                            rejectWithError: !1,
                        })
                    ).body)
                    ? r
                    : [];
            } catch (e) {
                return [];
            }
        }, []),
        T = (0, r.useCallback)(
            async (e, t, n) => {
                let r = O.current;
                if (null == r) {
                    E(new s.Ay("Order not created yet")), y(!1);
                    return;
                }
                y(!0), E(null);
                try {
                    let i = await (0, l.Ub)({
                        orderId: r.id,
                        expectedRevision: r.revision,
                        loadId: t,
                    });
                    if (((O.current = i), i.status !== o.Re.SIGNED)) {
                        let e = i;
                        if (e.errors && e.errors.length > 0) {
                            let t = e.errors;
                            if (t.includes(2000)) {
                                let e = new s.Ay("Insufficient balance");
                                throw ((e.code = s.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE), e);
                            }
                            let n = "Order signing failed with errors: ".concat(t.join(", "));
                            throw Error(n);
                        }
                        if (i.status === o.Re.DRAFT) throw Error("Order could not be signed.");
                        throw Error("Unexpected order status: ".concat(i.status));
                    }
                    let a = (0, d.p)(e),
                        c = await I(e, a);
                    if (0 === c.length) {
                        await new Promise((e) => setTimeout(e, 500));
                        let t = await I(e, a);
                        if (0 === t.length) throw Error("No entitlements found after order signing");
                        m(t), y(!1), null == n || n(t);
                    } else m(c), y(!1), null == n || n(c);
                } catch (e) {
                    E(e instanceof s.Ay ? e : new s.Ay(e)), y(!1);
                }
            },
            [I],
        ),
        C = (0, r.useCallback)(function (e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = () => {
                    y(!0), E(null);
                },
                a = (e) => {
                    m(e), y(!1), null == n || n(e);
                },
                s = (e) => {
                    E(e), y(!1);
                };
            return (0, u.J$)({
                skuId: e,
                loadId: t,
                onRedeemStart: i,
                onRedeemSucceed: a,
                onRedeemFail: s,
                isRental: r,
            });
        }, []),
        N = (0, r.useCallback)(
            function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (A) {
                    if (r) {
                        E(new s.Ay("Rental orders are not supported via Orders API yet")), y(!1);
                        return;
                    }
                    T(e, t, n);
                } else C(e, t, n, r);
            },
            [A, T, C],
        );
    return (
        (0, r.useEffect)(() => {
            if (null != g)
                return void n(
                    _.intl.format(_.t["7gHWrd"], {
                        amount: "1 orb",
                        errorMessage: g.message,
                    }),
                );
            if (null != h && h.length > 0) {
                let e = h.map((e) => {
                    var t;
                    return null == (t = e.sku) ? void 0 : t.name;
                });
                n(
                    _.intl.format(_.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: ""
                            .concat(1 === e.length ? "SKU" : "SKUs", ": ")
                            .concat(e.join(", "), ". Entitlement ")
                            .concat(1 === h.length ? "ID" : "IDs", ": ")
                            .concat(h.map((e) => e.id).join(", ")),
                    }),
                );
                return;
            }
            n("");
        }, [h, g]),
        {
            entitlements: h,
            error: g,
            isSubmitting: b || (A && v),
            responseMessage: t,
            redeemVirtualCurrency: N,
        }
    );
}
