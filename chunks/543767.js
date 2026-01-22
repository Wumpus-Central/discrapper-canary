n.d(t, {
    C8: () => I,
    FP: () => v,
    Kq: () => S,
    OQ: () => b,
    sL: () => T,
}),
    n(896048),
    n(457529);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(562465),
    o = n(198982),
    l = n(654044),
    c = n(927578),
    u = n(371794),
    d = n(652215);

function f(e, t, n) {
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

function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
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

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
async function E(e) {
    let {
            items: t,
            paymentSourceId: n,
            trialId: r,
            code: i,
            applyEntitlements: a = !1,
            currency: u,
            renewal: f,
            metadata: _,
        } = e,
        g = {
            items: (t = (0, c.qn)(t)).map((e) => {
                let { planId: t } = e;
                return h(p({}, m(e, ["planId"])), {
                    plan_id: t,
                });
            }),
            payment_source_id: n,
            trial_id: r,
            code: i,
            apply_entitlements: a,
            currency: u,
            renewal: f,
            metadata: _,
        };
    try {
        let e = await s.Bo.post({
            url: d.Rsh.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: g,
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return l.A.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.Ey(e);
    }
}
async function b(e) {
    let {
        subscriptionId: t,
        items: n,
        paymentSourceId: r,
        renewal: i,
        currency: a,
        applyEntitlements: u = !1,
        analyticsLocations: f,
        analyticsLocation: _,
        userDiscountOfferId: g,
    } = e;
    null != n && (n = (0, c.qn)(n));
    let E = {
        items:
            null == n
                ? void 0
                : n.map((e) => {
                      let { planId: t } = e;
                      return h(p({}, m(e, ["planId"])), {
                          plan_id: t,
                      });
                  }),
        payment_source_id: r,
        renewal: i,
        apply_entitlements: u,
        currency: a,
        user_discount_offer_id: g,
    };
    try {
        let e = await s.Bo.patch({
            url: d.Rsh.BILLING_SUBSCRIPTION_PREVIEW(t),
            query: {
                location: _,
                location_stack: f,
            },
            body: E,
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return l.A.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.Ey(e);
    }
}
async function y(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: r, currency: i, loadId: s } = e;
    a()(n, "SKU ID is missing for one time purchase gift invoice preview");
    let c = {
        gift: !0,
        payment_source_id: t,
        sku_subscription_plan_id: r,
        currency: i,
        load_id: s,
    };
    try {
        let e = await (0, u.aP)({
            url: d.Rsh.STORE_SKU_PURCHASE(n),
            query: c,
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return l.A.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.Ey(e);
    }
}
async function O(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let r = await s.Bo.get({
        url: d.Rsh.BILLING_SUBSCRIPTION_INVOICE(t),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    return l.A.createInvoiceFromServer(r.body);
}

function A(e, t) {
    let { preventFetch: n = !1 } = e,
        [i, a] = (0, r.useState)(null),
        [s, o] = (0, r.useState)(null);
    return (
        (0, r.useEffect)(() => {
            let e = !1;
            async function r() {
                try {
                    o(null), a(null);
                    let n = await t();
                    e || a(n);
                } catch (t) {
                    e || o(t);
                }
            }
            return (
                n || r(),
                () => {
                    e = !0;
                }
            );
        }, [n, t]),
        [i, s]
    );
}

function v(e) {
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e);
    return A(
        e,
        (0, r.useCallback)(() => y(t.current), [n]),
    );
}

function S(e) {
    if ("subscriptionId" in e && null == e.subscriptionId) {
        let { subscriptionId: t } = e;
        e = m(e, ["subscriptionId"]);
    }
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e),
        i = (0, r.useCallback)(() => {
            let { current: e } = t;
            return "subscriptionId" in e ? b(e) : "items" in e ? E(e) : null;
        }, [n]);
    return A(e, i);
}

function I(e) {
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e);
    return A(
        e,
        (0, r.useCallback)(() => O(t.current), [n]),
    );
}

function T(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let r = n.amount / e.quantity;
            t -= r;
        }),
        t
    );
}
