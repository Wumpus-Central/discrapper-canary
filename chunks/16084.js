n.d(t, {
    $N: () => O,
    ZZ: () => N,
    pB: () => C,
    uE: () => I,
    x2: () => S,
    xA: () => A
}),
    n(411104);
var r = n(311570),
    i = n(544891),
    o = n(570140),
    a = n(881052),
    s = n(128069),
    l = n(34756),
    c = n(115130),
    u = n(55563),
    d = n(695103),
    f = n(122289),
    _ = n(823379),
    p = n(936101),
    h = n(73346),
    m = n(355467),
    g = n(981631);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function O(e, t, n) {
    if (null == u.Z.get(t)) {
        o.Z.dispatch({
            type: 'SKU_FETCH_START',
            skuId: t
        });
        try {
            let i = d.Z.inTestModeForApplication(e) || c.Z.inDevModeForApplication(e),
                a = {
                    url: i ? g.ANM.STORE_SKU(t) : g.ANM.STORE_PUBLISHED_LISTINGS_SKU(t),
                    rejectWithError: !1
                };
            n === r.v.VARIANTS_GROUP && (a.query = { variants_return_style: n });
            let s = await (0, h.Kb)(a);
            o.Z.dispatch({
                type: 'SKU_FETCH_SUCCESS',
                sku: i ? s.body : s.body.sku
            }),
                i ||
                    o.Z.dispatch({
                        type: 'STORE_LISTING_FETCH_SUCCESS',
                        storeListing: s.body
                    });
        } catch (e) {
            throw (
                (o.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: t
                }),
                new l.Z('Failed to fetch SKU '.concat(t)))
            );
        }
    }
}
async function I(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(d.Z.inTestModeForApplication(e) || c.Z.inDevModeForApplication(e)) && t) throw Error('this should only be used in test mode');
    let n = (
        await (0, h.Kb)({
            url: g.ANM.APPLICATION_SKUS(e),
            rejectWithError: !1
        })
    ).body;
    return (
        o.Z.dispatch({
            type: 'SKUS_FETCH_SUCCESS',
            skus: n
        }),
        n
    );
}
async function S(e, t, n, r) {
    let i,
        l = {
            payment_source_id: n,
            gift: null == r ? void 0 : r.isGift
        };
    (d.Z.inTestModeForApplication(e) || c.Z.inDevModeForApplication(e)) && (l.test_mode = !0),
        o.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH',
            skuId: t
        });
    try {
        (i = await (0, h.Kb)({
            url: g.ANM.STORE_SKU_PURCHASE(t),
            query: l,
            oldFormErrors: !0,
            rejectWithError: !1
        })),
            o.Z.dispatch({
                type: 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS',
                skuId: t,
                paymentSourceId: n,
                price: i.body
            });
    } catch (n) {
        o.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH_FAILURE',
            skuId: t
        });
        let e = n instanceof a.HF ? n : new a.HF(n);
        if (e.code === s.SM.BILLING_BUNDLE_ALREADY_PURCHASED || e.code === s.SM.BILLING_BUNDLE_PARTIALLY_OWNED || e.code === s.SM.INVALID_BILLING_ADDRESS) throw e;
    }
    return i;
}
let T = { isGift: !1 };
async function N(e, t, n) {
    let { paymentSource: r, expectedAmount: l, expectedCurrency: u, analyticsLoadId: h, isGift: E, giftInfoOptions: y, subscriptionPlanId: O, loadId: I, countryCode: S } = b({}, T, n);
    o.Z.wait(() => {
        o.Z.dispatch({
            type: 'SKU_PURCHASE_START',
            applicationId: e,
            skuId: t
        });
    });
    let N = d.Z.inTestModeForApplication(e) || c.Z.inDevModeForApplication(e);
    try {
        let e = {
            gift: E,
            sku_subscription_plan_id: O,
            gateway_checkout_context: await (0, f.cn)(r),
            load_id: I
        };
        if (N) e.test_mode = !0;
        else {
            if (null != r && ((e.payment_source_id = r.id), (e.payment_source_token = await (0, m.Zv)(r)), g.QL.has(r.type))) {
                let t = await (0, m.EH)(r.type);
                e.return_url = (0, i.K0)() + g.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, null != t ? t : '', 'success');
            }
            (e.gift_info_options = y), null != S && (e.country_code = S);
        }
        null != l && (e.expected_amount = l), null != u && (e.expected_currency = u), (e.purchase_token = (0, p.d)());
        let n = await i.tn.post({
            url: g.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: h },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            o.Z.dispatch({
                type: 'SKU_PURCHASE_SUCCESS',
                skuId: t,
                libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(_.lm) : [],
                entitlements: n.body.entitlements,
                giftCode: n.body.gift_code
            }),
            v(b({}, n.body), { redirectConfirmation: !1 })
        );
    } catch (i) {
        let n = i instanceof a.HF ? i : new a.HF(i);
        if (
            ((n.code === s.SM.CONFIRMATION_REQUIRED || n.code === s.SM.AUTHENTICATION_REQUIRED) &&
                o.Z.dispatch({
                    type: 'SKU_PURCHASE_AWAIT_CONFIRMATION',
                    skuId: t,
                    isGift: E
                }),
            o.Z.dispatch({
                type: 'SKU_PURCHASE_FAIL',
                applicationId: e,
                skuId: t,
                error: n
            }),
            n.code !== s.SM.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!i.body.payment_id) throw (0, m.SQ)('payment id cannot be null on redirected confirmations.');
        return (0, m.sk)(i.body, r);
    }
}
async function A() {
    try {
        let e = { purchase_token: (0, p.d)() },
            t = await i.tn.post({
                url: g.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: e,
                oldFormErrors: !0,
                rejectWithError: !1
            });
        return b({}, t.body);
    } catch (e) {
        throw e instanceof a.HF ? e : new a.HF(e);
    }
}
function C() {
    o.Z.dispatch({ type: 'SKU_PURCHASE_CLEAR_ERROR' });
}
