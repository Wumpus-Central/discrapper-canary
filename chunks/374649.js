r.d(n, {
    ED: function () {
        return I;
    },
    Ox: function () {
        return T;
    },
    hz: function () {
        return p;
    },
    o5: function () {
        return v;
    },
    pV: function () {
        return b;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(512722),
    o = r.n(s),
    l = r(544891),
    u = r(881052),
    c = r(146528),
    d = r(74538),
    f = r(73346),
    _ = r(981631);
async function h(e) {
    let { items: n, paymentSourceId: r, trialId: i, code: a, applyEntitlements: s = !1, currency: o, renewal: f, metadata: h } = e,
        p = {
            items: (n = (0, d.gB)(n)).map((e) => {
                let { planId: n, ...r } = e;
                return {
                    ...r,
                    plan_id: n
                };
            }),
            payment_source_id: r,
            trial_id: i,
            code: a,
            apply_entitlements: s,
            currency: o,
            renewal: f,
            metadata: h
        };
    try {
        let e = await l.tn.post({
            url: _.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: p,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return c.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new u.HF(e);
    }
}
async function p(e) {
    let { subscriptionId: n, items: r, paymentSourceId: i, renewal: a, currency: s, applyEntitlements: o = !1, analyticsLocations: f, analyticsLocation: h, userDiscountOfferId: p } = e;
    null != r && (r = (0, d.gB)(r));
    let m = {
        items:
            null == r
                ? void 0
                : r.map((e) => {
                      let { planId: n, ...r } = e;
                      return {
                          ...r,
                          plan_id: n
                      };
                  }),
        payment_source_id: i,
        renewal: a,
        apply_entitlements: o,
        currency: s,
        user_discount_offer_id: p
    };
    try {
        let e = await l.tn.patch({
            url: _.ANM.BILLING_SUBSCRIPTION_PREVIEW(n),
            query: {
                location: h,
                location_stack: f
            },
            body: m,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return c.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new u.HF(e);
    }
}
async function m(e) {
    let { paymentSourceId: n, skuId: r, subscriptionPlanId: i, currency: a, loadId: s } = e;
    o()(r, 'SKU ID is missing for one time purchase gift invoice preview');
    let l = {
        gift: !0,
        payment_source_id: n,
        sku_subscription_plan_id: i,
        currency: a,
        load_id: s
    };
    try {
        let e = await (0, f.Kb)({
            url: _.ANM.STORE_SKU_PURCHASE(r),
            query: l,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return c.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new u.HF(e);
    }
}
async function g(e) {
    let { subscriptionId: n, preventFetch: r } = e;
    if (r) return null;
    let i = await l.tn.get({
        url: _.ANM.BILLING_SUBSCRIPTION_INVOICE(n),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return c.Z.createInvoiceFromServer(i.body);
}
function E(e, n) {
    let { preventFetch: r = !1 } = e,
        [i, s] = (0, a.useState)(null),
        [o, l] = (0, a.useState)(null);
    return (
        (0, a.useEffect)(() => {
            let e = !1;
            async function i() {
                try {
                    l(null), s(null);
                    let r = await n();
                    !e && s(r);
                } catch (n) {
                    !e && l(n);
                }
            }
            return (
                !r && i(),
                () => {
                    e = !0;
                }
            );
        }, [r, n]),
        [i, o]
    );
}
function v(e) {
    let n = (0, a.useRef)(e);
    (0, a.useEffect)(() => {
        n.current = e;
    });
    let r = JSON.stringify(e);
    return E(
        e,
        (0, a.useCallback)(() => m(n.current), [r])
    );
}
function I(e) {
    if ('subscriptionId' in e && null == e.subscriptionId) {
        let { subscriptionId: n, ...r } = e;
        e = r;
    }
    let n = (0, a.useRef)(e);
    (0, a.useEffect)(() => {
        n.current = e;
    });
    let r = JSON.stringify(e),
        i = (0, a.useCallback)(() => {
            let { current: e } = n;
            return 'subscriptionId' in e ? p(e) : 'items' in e ? h(e) : null;
        }, [r]);
    return E(e, i);
}
function T(e) {
    let n = (0, a.useRef)(e);
    (0, a.useEffect)(() => {
        n.current = e;
    });
    let r = JSON.stringify(e);
    return E(
        e,
        (0, a.useCallback)(() => g(n.current), [r])
    );
}
function b(e) {
    let n = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((r) => {
            let i = r.amount / e.quantity;
            n -= i;
        }),
        n
    );
}
