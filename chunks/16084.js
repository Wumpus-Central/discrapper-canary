n.d(t, {
    $N: () => E,
    ZZ: () => T,
    pB: () => S,
    uE: () => v,
    x2: () => y,
    xA: () => b
}),
    n(411104);
var i = n(311570),
    r = n(544891),
    a = n(570140),
    s = n(881052),
    o = n(128069),
    l = n(34756),
    u = n(115130),
    c = n(55563),
    d = n(695103),
    f = n(122289),
    _ = n(823379),
    p = n(936101),
    h = n(73346),
    m = n(355467),
    g = n(981631);
async function E(e, t, n) {
    if (null == c.Z.get(t)) {
        a.Z.dispatch({
            type: 'SKU_FETCH_START',
            skuId: t
        });
        try {
            let r = d.Z.inTestModeForApplication(e) || u.Z.inDevModeForApplication(e),
                s = {
                    url: r ? g.ANM.STORE_SKU(t) : g.ANM.STORE_PUBLISHED_LISTINGS_SKU(t),
                    rejectWithError: !1
                };
            n === i.v.VARIANTS_GROUP && (s.query = { variants_return_style: n });
            let o = await (0, h.Kb)(s);
            a.Z.dispatch({
                type: 'SKU_FETCH_SUCCESS',
                sku: r ? o.body : o.body.sku
            }),
                r ||
                    a.Z.dispatch({
                        type: 'STORE_LISTING_FETCH_SUCCESS',
                        storeListing: o.body
                    });
        } catch (e) {
            throw (
                (a.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: t
                }),
                new l.Z('Failed to fetch SKU '.concat(t)))
            );
        }
    }
}
async function v(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(d.Z.inTestModeForApplication(e) || u.Z.inDevModeForApplication(e)) && t) throw Error('this should only be used in test mode');
    let n = (
        await (0, h.Kb)({
            url: g.ANM.APPLICATION_SKUS(e),
            rejectWithError: !1
        })
    ).body;
    return (
        a.Z.dispatch({
            type: 'SKUS_FETCH_SUCCESS',
            skus: n
        }),
        n
    );
}
async function y(e, t, n, i) {
    let r;
    let l = {
        payment_source_id: n,
        gift: null == i ? void 0 : i.isGift
    };
    (d.Z.inTestModeForApplication(e) || u.Z.inDevModeForApplication(e)) && (l.test_mode = !0),
        a.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH',
            skuId: t
        });
    try {
        (r = await (0, h.Kb)({
            url: g.ANM.STORE_SKU_PURCHASE(t),
            query: l,
            oldFormErrors: !0,
            rejectWithError: !1
        })),
            a.Z.dispatch({
                type: 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS',
                skuId: t,
                paymentSourceId: n,
                price: r.body
            });
    } catch (n) {
        a.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH_FAILURE',
            skuId: t
        });
        let e = n instanceof s.HF ? n : new s.HF(n);
        if (e.code === o.SM.BILLING_BUNDLE_ALREADY_PURCHASED || e.code === o.SM.BILLING_BUNDLE_PARTIALLY_OWNED || e.code === o.SM.INVALID_BILLING_ADDRESS) throw e;
    }
    return r;
}
let I = { isGift: !1 };
async function T(e, t, n) {
    let {
        paymentSource: i,
        expectedAmount: l,
        expectedCurrency: c,
        analyticsLoadId: h,
        isGift: E,
        giftInfoOptions: v,
        subscriptionPlanId: y,
        loadId: T,
        countryCode: b
    } = {
        ...I,
        ...n
    };
    a.Z.wait(() => {
        a.Z.dispatch({
            type: 'SKU_PURCHASE_START',
            applicationId: e,
            skuId: t
        });
    });
    let S = d.Z.inTestModeForApplication(e) || u.Z.inDevModeForApplication(e);
    try {
        let e = {
            gift: E,
            sku_subscription_plan_id: y,
            gateway_checkout_context: await (0, f.cn)(i),
            load_id: T
        };
        if (S) e.test_mode = !0;
        else {
            if (null != i && ((e.payment_source_id = i.id), (e.payment_source_token = await (0, m.Zv)(i)), g.QL.has(i.type))) {
                let t = await (0, m.EH)(i.type);
                e.return_url = (0, r.K0)() + g.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(i.type, null != t ? t : '', 'success');
            }
            null != l && (e.expected_amount = l), null != c && (e.expected_currency = c), (e.gift_info_options = v), null != b && (e.country_code = b), (e.purchase_token = (0, p.d)());
        }
        let n = await r.tn.post({
            url: g.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: h },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'SKU_PURCHASE_SUCCESS',
                skuId: t,
                libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(_.lm) : [],
                entitlements: n.body.entitlements,
                giftCode: n.body.gift_code
            }),
            {
                ...n.body,
                redirectConfirmation: !1
            }
        );
    } catch (r) {
        let n = r instanceof s.HF ? r : new s.HF(r);
        if (
            ((n.code === o.SM.CONFIRMATION_REQUIRED || n.code === o.SM.AUTHENTICATION_REQUIRED) &&
                a.Z.dispatch({
                    type: 'SKU_PURCHASE_AWAIT_CONFIRMATION',
                    skuId: t,
                    isGift: E
                }),
            a.Z.dispatch({
                type: 'SKU_PURCHASE_FAIL',
                applicationId: e,
                skuId: t,
                error: n
            }),
            n.code !== o.SM.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!r.body.payment_id) throw (0, m.SQ)('payment id cannot be null on redirected confirmations.');
        return (0, m.sk)(r.body, i);
    }
}
async function b() {
    try {
        let e = { purchase_token: (0, p.d)() };
        return {
            ...(
                await r.tn.post({
                    url: g.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: e,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
            ).body
        };
    } catch (e) {
        throw e instanceof s.HF ? e : new s.HF(e);
    }
}
function S() {
    a.Z.dispatch({ type: 'SKU_PURCHASE_CLEAR_ERROR' });
}
