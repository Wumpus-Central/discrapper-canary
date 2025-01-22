r.d(n, {
    ED: function () {
        return y;
    },
    Ox: function () {
        return b;
    },
    hz: function () {
        return _;
    },
    o5: function () {
        return v;
    },
    pV: function () {
        return I;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(512722),
    s = r.n(o),
    l = r(544891),
    u = r(881052),
    c = r(146528),
    d = r(74538),
    f = r(73346),
    p = r(981631);
async function h(e) {
    let { items: n, paymentSourceId: r, trialId: i, code: a, applyEntitlements: o = !1, currency: s, renewal: f, metadata: h } = e,
        _ = {
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
            apply_entitlements: o,
            currency: s,
            renewal: f,
            metadata: h
        };
    try {
        let e = await l.tn.post({
            url: p.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: _,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return c.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new u.HF(e);
    }
}
async function _(e) {
    let { subscriptionId: n, items: r, paymentSourceId: i, renewal: a, currency: o, applyEntitlements: s = !1, analyticsLocations: f, analyticsLocation: h, userDiscountOfferId: _ } = e;
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
        apply_entitlements: s,
        currency: o,
        user_discount_offer_id: _
    };
    try {
        let e = await l.tn.patch({
            url: p.ANM.BILLING_SUBSCRIPTION_PREVIEW(n),
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
    let { paymentSourceId: n, skuId: r, subscriptionPlanId: i, currency: a, loadId: o } = e;
    s()(r, 'SKU ID is missing for one time purchase gift invoice preview');
    let l = {
        gift: !0,
        payment_source_id: n,
        sku_subscription_plan_id: i,
        currency: a,
        load_id: o
    };
    try {
        let e = await (0, f.Kb)({
            url: p.ANM.STORE_SKU_PURCHASE(r),
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
        url: p.ANM.BILLING_SUBSCRIPTION_INVOICE(n),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return c.Z.createInvoiceFromServer(i.body);
}
function E(e, n) {
    let { preventFetch: r = !1 } = e,
        [i, o] = (0, a.useState)(null),
        [s, l] = (0, a.useState)(null);
    return (
        (0, a.useEffect)(() => {
            let e = !1;
            async function i() {
                try {
                    l(null), o(null);
                    let r = await n();
                    !e && o(r);
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
        [i, s]
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
function y(e) {
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
            return 'subscriptionId' in e ? _(e) : 'items' in e ? h(e) : null;
        }, [r]);
    return E(e, i);
}
function b(e) {
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
function I(e) {
    let n = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((r) => {
            let i = r.amount / e.quantity;
            n -= i;
        }),
        n
    );
}
