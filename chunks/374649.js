n.d(t, {
    ED: () => E,
    Ox: () => v,
    hz: () => _,
    o5: () => g,
    pV: () => y
}),
    n(47120);
var i = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(544891),
    o = n(881052),
    l = n(146528),
    u = n(74538),
    c = n(73346),
    d = n(981631);
async function f(e) {
    let { items: t, paymentSourceId: n, trialId: i, code: r, applyEntitlements: a = !1, currency: c, renewal: f, metadata: _ } = e,
        p = {
            items: (t = (0, u.gB)(t)).map((e) => {
                let { planId: t, ...n } = e;
                return {
                    ...n,
                    plan_id: t
                };
            }),
            payment_source_id: n,
            trial_id: i,
            code: r,
            apply_entitlements: a,
            currency: c,
            renewal: f,
            metadata: _
        };
    try {
        let e = await s.tn.post({
            url: d.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: p,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.HF(e);
    }
}
async function _(e) {
    let { subscriptionId: t, items: n, paymentSourceId: i, renewal: r, currency: a, applyEntitlements: c = !1, analyticsLocations: f, analyticsLocation: _, userDiscountOfferId: p } = e;
    null != n && (n = (0, u.gB)(n));
    let h = {
        items:
            null == n
                ? void 0
                : n.map((e) => {
                      let { planId: t, ...n } = e;
                      return {
                          ...n,
                          plan_id: t
                      };
                  }),
        payment_source_id: i,
        renewal: r,
        apply_entitlements: c,
        currency: a,
        user_discount_offer_id: p
    };
    try {
        let e = await s.tn.patch({
            url: d.ANM.BILLING_SUBSCRIPTION_PREVIEW(t),
            query: {
                location: _,
                location_stack: f
            },
            body: h,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.HF(e);
    }
}
async function p(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: i, currency: r, loadId: s } = e;
    a()(n, 'SKU ID is missing for one time purchase gift invoice preview');
    let u = {
        gift: !0,
        payment_source_id: t,
        sku_subscription_plan_id: i,
        currency: r,
        load_id: s
    };
    try {
        let e = await (0, c.Kb)({
            url: d.ANM.STORE_SKU_PURCHASE(n),
            query: u,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.HF(e);
    }
}
async function h(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let i = await s.tn.get({
        url: d.ANM.BILLING_SUBSCRIPTION_INVOICE(t),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return l.Z.createInvoiceFromServer(i.body);
}
function m(e, t) {
    let { preventFetch: n = !1 } = e,
        [r, a] = (0, i.useState)(null),
        [s, o] = (0, i.useState)(null);
    return (
        (0, i.useEffect)(() => {
            let e = !1;
            async function i() {
                try {
                    o(null), a(null);
                    let n = await t();
                    e || a(n);
                } catch (t) {
                    e || o(t);
                }
            }
            return (
                n || i(),
                () => {
                    e = !0;
                }
            );
        }, [n, t]),
        [r, s]
    );
}
function g(e) {
    let t = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e);
    return m(
        e,
        (0, i.useCallback)(() => p(t.current), [n])
    );
}
function E(e) {
    if ('subscriptionId' in e && null == e.subscriptionId) {
        let { subscriptionId: t, ...n } = e;
        e = n;
    }
    let t = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e),
        r = (0, i.useCallback)(() => {
            let { current: e } = t;
            return 'subscriptionId' in e ? _(e) : 'items' in e ? f(e) : null;
        }, [n]);
    return m(e, r);
}
function v(e) {
    let t = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e);
    return m(
        e,
        (0, i.useCallback)(() => h(t.current), [n])
    );
}
function y(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let i = n.amount / e.quantity;
            t -= i;
        }),
        t
    );
}
