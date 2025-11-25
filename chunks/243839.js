n.d(t, { y: () => D }), n(415506), n(388685), n(35282);
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
    _ = n(853872),
    p = n(622999),
    h = n(261538),
    m = n(3383),
    g = n(981631),
    E = n(231338),
    b = n(591627);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = (0, m.F)();
async function S(e) {
    return (
        await o.tn.post({
            url: g.ANM.ORDER_SIGN(e),
            rejectWithError: !0,
        })
    ).body;
}
async function A(e) {
    return (
        await o.tn.get({
            url: g.ANM.ORDER_UPDATE(e),
            rejectWithError: !0,
        })
    ).body;
}
async function C(e, t) {
    let n = { billing_facet: { payment_source_id: t } };
    await o.tn.patch({
        url: g.ANM.ORDER_UPDATE(e),
        body: n,
        rejectWithError: !0,
    });
}
function N(e, t, n, r) {
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
        _ = () => {
            null != d && clearTimeout(d);
        },
        p = (e) => {
            n(
                "Order signing timed out.\nOrder ID: "
                    .concat(t, "\nStatus: ")
                    .concat(null != e ? e : "unknown", "\nPlease check the order status manually."),
            ),
                _();
        },
        h = async () => {
            let e = Date.now() - u;
            if (e >= c) {
                try {
                    let e = await A(t);
                    p(e.status);
                } catch (r) {
                    let e = r instanceof Error ? r.message : String(r);
                    n("Order signing timed out.\nOrder ID: ".concat(t, "\nError: ").concat(e)), _();
                }
                return;
            }
            try {
                let e = (await A(t)).status;
                if (2 === e) {
                    n("Order signed successfully!\nOrder ID: ".concat(t, "\nPayment redirect completed.")),
                        r(null),
                        _();
                    return;
                }
                if (1 === e) {
                    n("Order signed unsuccessfully\nOrder ID: ".concat(t)), _();
                    return;
                }
                f();
            } catch (i) {
                let r = i instanceof Error ? i.message : String(i);
                e < c ? f() : (n("Order signing timed out.\nOrder ID: ".concat(t, "\nError: ").concat(r)), _());
            }
        };
    h().catch((e) => {
        let r = e instanceof Error ? e.message : String(e);
        n("Failed to start polling order status!\nOrder ID: ".concat(t, "\nError: ").concat(r));
    });
}
function R(e, t, n, r) {
    (async () => {
        var i, a, o, s;
        try {
            let o = e.billing_facet;
            if (null == o) throw Error("Order does not have billing facet information");
            let s = o.order_signing_deferral_context;
            if (null == s) throw Error("Order does not have payment redirect context");
            let l = s.stripe_3ds_context;
            if (null == l) throw Error("Order does not have 3DS context information");
            let c = await (0, p.d2)();
            if (null == c) throw Error("Stripe not loaded");
            let u = l.client_secret;
            if (null == u || "" === u) throw Error("No client secret found in 3DS context");
            let { error: d, paymentIntent: f } = await c.confirmCardPayment(u, { payment_method: l.payment_method_id });
            if (null != d) throw Error("3DS authentication failed: ".concat(d.message));
            if (null == f) throw Error("No payment intent returned from 3DS authentication");
            let _ = null != (a = null != (i = e.id) ? i : t) ? a : "Unknown";
            r(null), n("3DS authentication completed successfully!\nOrder ID: ".concat(_));
        } catch (a) {
            let r = a instanceof Error ? a.message : String(a),
                i = null != (s = null != (o = e.id) ? o : t) ? s : "Unknown";
            n("Failed to complete 3DS!\nOrder ID: ".concat(i, "\nError: ").concat(r));
        }
    })();
}
function P() {
    let [e, t] = i.useState(!1),
        [n, o] = i.useState(!1),
        [d, p] = i.useState(null),
        [m, y] = i.useState(null),
        [v, A] = i.useState(T.defaultValue),
        [P, D] = i.useState(null),
        w = (0, a.e7)([_.Z], () => _.Z.paymentSources),
        L = (0, a.e7)([_.Z], () => _.Z.hasFetchedPaymentSources),
        x = (0, a.e7)([_.Z], () => _.Z.defaultPaymentSourceId);
    i.useEffect(() => {
        L || (0, c.tZ)();
    }, [L]),
        i.useEffect(() => {
            null != x && null == P && D(x);
        }, [x, P]);
    let M = i.useRef(null);
    i.useEffect(() => {
        if (null == m || "" === m) {
            M.current = P;
            return;
        }
        if (P !== M.current) {
            if (null == P || "" === P) {
                M.current = P;
                return;
            }
            C(m, P)
                .then(() => {
                    p("Order updated successfully!\nOrder ID: ".concat(m, "\nPayment source changed."));
                })
                .catch((e) => {
                    let t = e instanceof Error ? e.message : String(e);
                    p("Failed to update order: ".concat(t));
                }),
                (M.current = P);
        }
    }, [m, P]);
    let k = i.useMemo(
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
                        value: e.id,
                        label: t,
                    };
                }),
            [w],
        ),
        j = (0, l.nVN)({
            value: P,
            onChange: D,
        }),
        U = (0, l.nVN)({
            value: v,
            onChange: A,
        }),
        G = async () => {
            if (null == P || "" === P) return void p("Please select a payment source first.");
            if (null == v || "" === v || v === g.lds) return void p("Please select a SKU ID.");
            t(!0), p(null), y(null);
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
                    r = await (0, u.t_)(v, P, e, t, n);
                y(r), p("Order created successfully! Order ID: ".concat(r));
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                p("Failed to create order: ".concat(e));
            } finally {
                t(!1);
            }
        },
        B = async () => {
            if (null == m || "" === m) return void p("No order ID available. Please create an order first.");
            o(!0);
            try {
                let e = await S(m);
                if (null == e.errors) {
                    p("Order signed successfully! Order ID: ".concat(m)), y(null);
                    return;
                }
                let t = e.errors[0];
                1000 === t
                    ? (p(
                          "Order signing in progress!\nOrder ID: ".concat(
                              m,
                              "\nThis order requires additional authentication (3DS).",
                          ),
                      ),
                      R(e, m, p, y))
                    : 1001 === t
                      ? (p(
                            "Order signing in progress!\nOrder ID: ".concat(
                                m,
                                "\nThis order requires redirection to complete the payment.\nPolling order status...",
                            ),
                        ),
                        N(e, m, p, y))
                      : p("Order signing failed\nOrder ID: ".concat(m, "\nError: ").concat(t));
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                p("Failed to sign order: ".concat(e));
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
                                children: (0, r.jsx)(
                                    l.PhF,
                                    I(O({}, U), {
                                        options: T.options,
                                        placeholder: "Select a SKU...",
                                        label: "SKU ID",
                                        clearable: !0,
                                    }),
                                ),
                            }),
                            (0, r.jsxs)("div", {
                                style: { marginBottom: "16px" },
                                children: [
                                    (0, r.jsx)(
                                        l.PhF,
                                        I(O({}, j), {
                                            options: k,
                                            placeholder: "Select a payment source...",
                                            isDisabled: !L,
                                            label: "Payment Source",
                                            clearable: !0,
                                        }),
                                    ),
                                    !L &&
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
                                onClick: G,
                                disabled: e || null == P || "" === P || null == v || "" === v || v === g.lds,
                            }),
                            (0, r.jsx)(s.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: n ? "Signing Order..." : "Sign Order",
                                onClick: B,
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
let D = {
    name: "Order SKU",
    component: function () {
        return (0, r.jsx)(d.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, r.jsx)(P, {}),
        });
    },
    id: "order-sku-test",
    controls: {},
};
