n.d(t, {
    ED: () => S,
    Ox: () => T,
    hz: () => b,
    o5: () => I,
    pV: () => A
}),
    n(388685),
    n(49124);
var r = n(192379),
    i = n(512722),
    a = n.n(i),
    o = n(544891),
    s = n(881052),
    l = n(146528),
    c = n(74538),
    u = n(73346),
    d = n(981631);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
async function E(e) {
    let { items: t, paymentSourceId: n, trialId: r, code: i, applyEntitlements: a = !1, currency: u, renewal: f, metadata: p } = e,
        g = {
            items: (t = (0, c.gB)(t)).map((e) => {
                var { planId: t } = e;
                return h(_({}, m(e, ['planId'])), { plan_id: t });
            }),
            payment_source_id: n,
            trial_id: r,
            code: i,
            apply_entitlements: a,
            currency: u,
            renewal: f,
            metadata: p
        };
    try {
        let e = await o.tn.post({
            url: d.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: g,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new s.HF(e);
    }
}
async function b(e) {
    let { subscriptionId: t, items: n, paymentSourceId: r, renewal: i, currency: a, applyEntitlements: u = !1, analyticsLocations: f, analyticsLocation: p, userDiscountOfferId: g } = e;
    null != n && (n = (0, c.gB)(n));
    let E = {
        items:
            null == n
                ? void 0
                : n.map((e) => {
                      var { planId: t } = e;
                      return h(_({}, m(e, ['planId'])), { plan_id: t });
                  }),
        payment_source_id: r,
        renewal: i,
        apply_entitlements: u,
        currency: a,
        user_discount_offer_id: g
    };
    try {
        let e = await o.tn.patch({
            url: d.ANM.BILLING_SUBSCRIPTION_PREVIEW(t),
            query: {
                location: p,
                location_stack: f
            },
            body: E,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new s.HF(e);
    }
}
async function y(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: r, currency: i, loadId: o } = e;
    a()(n, 'SKU ID is missing for one time purchase gift invoice preview');
    let c = {
        gift: !0,
        payment_source_id: t,
        sku_subscription_plan_id: r,
        currency: i,
        load_id: o
    };
    try {
        let e = await (0, u.Kb)({
            url: d.ANM.STORE_SKU_PURCHASE(n),
            query: c,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new s.HF(e);
    }
}
async function v(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let r = await o.tn.get({
        url: d.ANM.BILLING_SUBSCRIPTION_INVOICE(t),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return l.Z.createInvoiceFromServer(r.body);
}
function O(e, t) {
    let { preventFetch: n = !1 } = e,
        [i, a] = (0, r.useState)(null),
        [o, s] = (0, r.useState)(null);
    return (
        (0, r.useEffect)(() => {
            let e = !1;
            async function r() {
                try {
                    s(null), a(null);
                    let n = await t();
                    e || a(n);
                } catch (t) {
                    e || s(t);
                }
            }
            return (
                n || r(),
                () => {
                    e = !0;
                }
            );
        }, [n, t]),
        [i, o]
    );
}
function I(e) {
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e);
    return O(
        e,
        (0, r.useCallback)(() => y(t.current), [n])
    );
}
function S(e) {
    if ('subscriptionId' in e && null == e.subscriptionId) {
        let { subscriptionId: t } = e;
        e = m(e, ['subscriptionId']);
    }
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e),
        i = (0, r.useCallback)(() => {
            let { current: e } = t;
            return 'subscriptionId' in e ? b(e) : 'items' in e ? E(e) : null;
        }, [n]);
    return O(e, i);
}
function T(e) {
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e);
    return O(
        e,
        (0, r.useCallback)(() => v(t.current), [n])
    );
}
function A(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let r = n.amount / e.quantity;
            t -= r;
        }),
        t
    );
}
