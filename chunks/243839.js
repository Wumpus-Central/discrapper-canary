n.d(t, { y: () => A }), n(415506), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(544891),
    s = n(159691),
    l = n(481060),
    c = n(355467),
    u = n(16084),
    d = n(563132),
    f = n(985754),
    p = n(853872),
    _ = n(622999),
    h = n(261538),
    m = n(3383),
    g = n(981631),
    E = n(231338),
    b = n(611954);
let y = (0, m.F)();
async function O(e) {
    return (
        await o.tn.post({
            url: g.ANM.ORDER_SIGN(e),
            rejectWithError: !0,
        })
    ).body;
}
async function v(e) {
    return (
        await o.tn.get({
            url: g.ANM.ORDER_UPDATE(e),
            rejectWithError: !0,
        })
    ).body;
}
async function S(e, t) {
    let n = { billing_facet: { payment_source_id: t } };
    await o.tn.patch({
        url: g.ANM.ORDER_UPDATE(e),
        body: n,
        rejectWithError: !0,
    });
}
function I(e, t, n, r) {
    var i;
    let a = e.billing_facet,
        o = null == a || null == (i = a.order_signing_deferral_context) ? void 0 : i.payment_redirect_context,
        s = null == o ? void 0 : o.redirect_url;
    null != s && window.open(s);
    let l = 3000,
        c = 30000,
        u = Date.now(),
        d = null,
        f = () => {
            let e = Math.min(l, c - (Date.now() - u));
            e > 0 &&
                (d = setTimeout(() => {
                    h().catch((e) => {
                        let r = e instanceof Error ? e.message : String(e);
                        n("Failed to poll order status!\nOrder ID: ".concat(t, "\nError: ").concat(r));
                    });
                }, e));
        },
        p = () => {
            null != d && clearTimeout(d);
        },
        _ = (e) => {
            n(
                "Order signing timed out.\nOrder ID: "
                    .concat(t, "\nStatus: ")
                    .concat(null != e ? e : "unknown", "\nPlease check the order status manually."),
            ),
                p();
        },
        h = async () => {
            let e = Date.now() - u;
            if (e >= c) {
                try {
                    let e = await v(t);
                    _(e.status);
                } catch (r) {
                    let e = r instanceof Error ? r.message : String(r);
                    n("Order signing timed out.\nOrder ID: ".concat(t, "\nError: ").concat(e)), p();
                }
                return;
            }
            try {
                let e = (await v(t)).status;
                if (2 === e) {
                    n("Order signed successfully!\nOrder ID: ".concat(t, "\nPayment redirect completed.")),
                        r(null),
                        p();
                    return;
                }
                if (1 === e) {
                    n("Order signed unsuccessfully\nOrder ID: ".concat(t)), p();
                    return;
                }
                f();
            } catch (i) {
                let r = i instanceof Error ? i.message : String(i);
                e < c ? f() : (n("Order signing timed out.\nOrder ID: ".concat(t, "\nError: ").concat(r)), p());
            }
        };
    h().catch((e) => {
        let r = e instanceof Error ? e.message : String(e);
        n("Failed to start polling order status!\nOrder ID: ".concat(t, "\nError: ").concat(r));
    });
}
function T(e, t, n, r) {
    (async () => {
        var i, a, o, s;
        try {
            let o = e.billing_facet;
            if (null == o) throw Error("Order does not have billing facet information");
            let s = o.order_signing_deferral_context;
            if (null == s) throw Error("Order does not have payment redirect context");
            let l = s.stripe_3ds_context;
            if (null == l) throw Error("Order does not have 3DS context information");
            let c = await (0, _.d2)();
            if (null == c) throw Error("Stripe not loaded");
            let u = l.client_secret;
            if (null == u || "" === u) throw Error("No client secret found in 3DS context");
            let { error: d, paymentIntent: f } = await c.confirmCardPayment(u, { payment_method: l.payment_method_id });
            if (null != d) throw Error("3DS authentication failed: ".concat(d.message));
            if (null == f) throw Error("No payment intent returned from 3DS authentication");
            let p = null != (a = null != (i = e.id) ? i : t) ? a : "Unknown";
            r(null), n("3DS authentication completed successfully!\nOrder ID: ".concat(p));
        } catch (a) {
            let r = a instanceof Error ? a.message : String(a),
                i = null != (s = null != (o = e.id) ? o : t) ? s : "Unknown";
            n("Failed to complete 3DS!\nOrder ID: ".concat(i, "\nError: ").concat(r));
        }
    })();
}
function C() {
    let [e, t] = i.useState(!1),
        [n, o] = i.useState(!1),
        [d, _] = i.useState(null),
        [m, v] = i.useState(null),
        [C, A] = i.useState(y.defaultValue),
        [N, P] = i.useState(null),
        w = (0, a.e7)([p.Z], () => p.Z.paymentSources),
        R = (0, a.e7)([p.Z], () => p.Z.hasFetchedPaymentSources),
        D = (0, a.e7)([p.Z], () => p.Z.defaultPaymentSourceId);
    i.useEffect(() => {
        R || (0, c.tZ)();
    }, [R]),
        i.useEffect(() => {
            null != D && null == N && P(D);
        }, [D, N]);
    let x = i.useRef(null);
    i.useEffect(() => {
        if (null == m || "" === m) {
            x.current = N;
            return;
        }
        if (N !== x.current) {
            if (null == N || "" === N) {
                x.current = N;
                return;
            }
            S(m, N)
                .then(() => {
                    _("Order updated successfully!\nOrder ID: ".concat(m, "\nPayment source changed."));
                })
                .catch((e) => {
                    let t = e instanceof Error ? e.message : String(e);
                    _("Failed to update order: ".concat(t));
                }),
                (x.current = N);
        }
    }, [m, N]);
    let L = i.useMemo(
            () =>
                Object.values(w).map((e) => {
                    let t = ((e) => {
                        let t = f.W[e];
                        return null != t ? t() : String(e);
                    })(e.type);
                    if (e.type === E.He.CARD && "last4" in e) {
                        var n, r;
                        let i = null != (n = e.last4) ? n : "",
                            a = null != (r = e.brand) ? r : "Unknown";
                        t += " - ****".concat(i, " (").concat(a, ")");
                    } else null != e.brand && "" !== e.brand && (t += " - ".concat(e.brand));
                    return {
                        id: e.id,
                        value: e.id,
                        label: t,
                    };
                }),
            [w],
        ),
        j = async () => {
            if (null == N || "" === N) return void _("Please select a payment source first.");
            if (null == C || "" === C || C === g.lds) return void _("Please select a SKU ID.");
            t(!0), _(null), v(null);
            try {
                let e = "US",
                    t = !1,
                    n = {
                        gift_style: null,
                        recipient_id: void 0,
                        custom_message: void 0,
                        emoji_id: void 0,
                        emoji_name: void 0,
                        sound_id: void 0,
                        reward_sku_ids: void 0,
                    },
                    r = await (0, u.t_)(C, N, e, t, n);
                v(r), _("Order created successfully! Order ID: ".concat(r));
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                _("Failed to create order: ".concat(e));
            } finally {
                t(!1);
            }
        },
        M = async () => {
            if (null == m || "" === m) return void _("No order ID available. Please create an order first.");
            o(!0);
            try {
                let e = await O(m);
                if (null == e.errors) {
                    _("Order signed successfully! Order ID: ".concat(m)), v(null);
                    return;
                }
                let t = e.errors[0];
                1000 === t
                    ? (_(
                          "Order signing in progress!\nOrder ID: ".concat(
                              m,
                              "\nThis order requires additional authentication (3DS).",
                          ),
                      ),
                      T(e, m, _, v))
                    : 1001 === t
                      ? (_(
                            "Order signing in progress!\nOrder ID: ".concat(
                                m,
                                "\nThis order requires redirection to complete the payment.\nPolling order status...",
                            ),
                        ),
                        I(e, m, _, v))
                      : _("Order signing failed\nOrder ID: ".concat(m, "\nError: ").concat(t));
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                _("Failed to sign order: ".concat(e));
            } finally {
                o(!1);
            }
        };
    return (0, r.jsxs)(h.$0, {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                children: "Order SKU Test",
            }),
            (0, r.jsxs)(h.E_, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        className: b.labelSpacing,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs.",
                    }),
                    (0, r.jsxs)(l.C3N, {
                        label: "Configuration",
                        children: [
                            (0, r.jsx)("div", {
                                style: { marginBottom: "16px" },
                                children: (0, r.jsx)(l.PhF, {
                                    selectionMode: "single",
                                    value: C,
                                    onSelectionChange: A,
                                    options: y.options,
                                    formatOption: (e) => {
                                        let { value: t, label: n } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: n,
                                        };
                                    },
                                    placeholder: "Select a SKU...",
                                    label: "SKU ID",
                                    clearable: !0,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                style: { marginBottom: "16px" },
                                children: [
                                    (0, r.jsx)(l.PhF, {
                                        selectionMode: "single",
                                        value: N,
                                        onSelectionChange: P,
                                        options: L,
                                        placeholder: "Select a payment source...",
                                        disabled: !R,
                                        label: "Payment Source",
                                        clearable: !0,
                                    }),
                                    !R &&
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            className: b.labelSpacing,
                                            children: "Loading payment sources...",
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: "8px",
                            marginBottom: "8px",
                            flexWrap: "wrap",
                        },
                        children: [
                            (0, r.jsx)(s.zxk, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: j,
                                disabled: e || null == N || "" === N || null == C || "" === C || C === g.lds,
                            }),
                            (0, r.jsx)(s.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: n ? "Signing Order..." : "Sign Order",
                                onClick: M,
                                disabled: n || null == m || "" === m,
                            }),
                        ],
                    }),
                    null != d &&
                        (0, r.jsx)("div", {
                            className: b.labelSpacing,
                            children: d.split("\n").map((e, t) =>
                                (0, r.jsx)(
                                    l.Text,
                                    {
                                        variant: "text-md/normal",
                                        style: {
                                            display: "block",
                                            marginBottom: t < d.split("\n").length - 1 ? "4px" : "0",
                                        },
                                        children: e,
                                    },
                                    t,
                                ),
                            ),
                        }),
                ],
            }),
        ],
    });
}
let A = {
    name: "Order SKU",
    component: function () {
        return (0, r.jsx)(d.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, r.jsx)(C, {}),
        });
    },
    id: "order-sku-test",
    controls: {},
};
