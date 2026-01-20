n.d(t, { f: () => h }), n(388685), n(415506);
var r = n(473749),
    i = n(442837),
    a = n(544891),
    o = n(128069),
    s = n(197550),
    l = n(711959),
    c = n(877820),
    u = n(751648),
    d = n(152521),
    f = n(85721),
    p = n(981631),
    _ = n(388032);
function h(e) {
    let [t, n] = (0, r.useState)(""),
        [h, m] = (0, r.useState)([]),
        [g, E] = (0, r.useState)(null),
        [b, y] = (0, r.useState)(!1),
        O = (0, r.useRef)(null),
        { enabled: v } = f.Z.useConfig({ location: "orb_checkout_modal" }),
        S = (0, i.e7)([c.Z], () => c.Z.isCreatingOrder),
        I = (0, i.e7)([c.Z], () => c.Z.currentOrder);
    (0, r.useEffect)(() => {
        var e;
        v && null != I && (null == (e = O.current) ? void 0 : e.id) !== I.id && (O.current = I);
    }, [I, v]);
    let T = (0, r.useCallback)(async (e, t) => {
            let n = null != t ? t : (0, d.N)(e);
            try {
                var r;
                return null !=
                    (r = (
                        await a.tn.get({
                            url: p.ANM.ENTITLEMENTS_FOR_APPLICATION(n),
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
        C = (0, r.useCallback)(
            async (e, t, n) => {
                let r = O.current;
                if (null == r) {
                    E(new o.ZP("Order not created yet")), y(!1);
                    return;
                }
                y(!0), E(null);
                try {
                    let i = await (0, l.GP)({
                        orderId: r.id,
                        expectedRevision: r.revision,
                        loadId: t,
                    });
                    if (((O.current = i), i.status !== s.iF.SIGNED)) {
                        let e = i;
                        if (e.errors && e.errors.length > 0) {
                            let t = e.errors;
                            if (t.includes(2000)) {
                                let e = new o.ZP("Insufficient balance");
                                throw ((e.code = o.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE), e);
                            }
                            let n = "Order signing failed with errors: ".concat(t.join(", "));
                            throw Error(n);
                        }
                        if (i.status === s.iF.DRAFT) throw Error("Order could not be signed.");
                        throw Error("Unexpected order status: ".concat(i.status));
                    }
                    let a = (0, d.N)(e),
                        c = await T(e, a);
                    if (0 === c.length) {
                        await new Promise((e) => setTimeout(e, 500));
                        let t = await T(e, a);
                        if (0 === t.length) throw Error("No entitlements found after order signing");
                        m(t), y(!1), null == n || n(t);
                    } else m(c), y(!1), null == n || n(c);
                } catch (e) {
                    E(e instanceof o.ZP ? e : new o.ZP(e)), y(!1);
                }
            },
            [T],
        ),
        A = (0, r.useCallback)(function (e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = () => {
                    y(!0), E(null);
                },
                a = (e) => {
                    m(e), y(!1), null == n || n(e);
                },
                o = (e) => {
                    E(e), y(!1);
                };
            return (0, u.df)({
                skuId: e,
                loadId: t,
                onRedeemStart: i,
                onRedeemSucceed: a,
                onRedeemFail: o,
                isRental: r,
            });
        }, []),
        N = (0, r.useCallback)(
            function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (v) {
                    if (r) {
                        E(new o.ZP("Rental orders are not supported via Orders API yet")), y(!1);
                        return;
                    }
                    C(e, t, n);
                } else A(e, t, n, r);
            },
            [v, C, A],
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
            isSubmitting: b || (v && S),
            responseMessage: t,
            redeemVirtualCurrency: N,
        }
    );
}
