r.d(n, {
    $N: function () {
        return I;
    },
    ZZ: function () {
        return S;
    },
    pB: function () {
        return N;
    },
    uE: function () {
        return T;
    },
    x2: function () {
        return b;
    },
    xA: function () {
        return A;
    }
});
var i = r(411104);
var a = r(311570),
    s = r(544891),
    o = r(570140),
    l = r(881052),
    u = r(128069),
    c = r(34756),
    d = r(115130),
    f = r(55563),
    _ = r(695103),
    h = r(122289),
    p = r(823379),
    m = r(936101),
    g = r(73346),
    E = r(355467),
    v = r(981631);
async function I(e, n, r) {
    if (null == f.Z.get(n)) {
        o.Z.dispatch({
            type: 'SKU_FETCH_START',
            skuId: n
        });
        try {
            let i = _.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e),
                s = {
                    url: i ? v.ANM.STORE_SKU(n) : v.ANM.STORE_PUBLISHED_LISTINGS_SKU(n),
                    rejectWithError: !1
                };
            r === a.v.VARIANTS_GROUP && (s.query = { variants_return_style: r });
            let l = await (0, g.Kb)(s);
            o.Z.dispatch({
                type: 'SKU_FETCH_SUCCESS',
                sku: i ? l.body : l.body.sku
            }),
                !i &&
                    o.Z.dispatch({
                        type: 'STORE_LISTING_FETCH_SUCCESS',
                        storeListing: l.body
                    });
        } catch (e) {
            throw (
                (o.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: n
                }),
                new c.Z('Failed to fetch SKU '.concat(n)))
            );
        }
    }
}
async function T(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(_.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e)) && n) throw Error('this should only be used in test mode');
    let r = (
        await (0, g.Kb)({
            url: v.ANM.APPLICATION_SKUS(e),
            rejectWithError: !1
        })
    ).body;
    return (
        o.Z.dispatch({
            type: 'SKUS_FETCH_SUCCESS',
            skus: r
        }),
        r
    );
}
async function b(e, n, r, i) {
    let a;
    let s = {
        payment_source_id: r,
        gift: null == i ? void 0 : i.isGift
    };
    (_.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e)) && (s.test_mode = !0),
        o.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH',
            skuId: n
        });
    try {
        (a = await (0, g.Kb)({
            url: v.ANM.STORE_SKU_PURCHASE(n),
            query: s,
            oldFormErrors: !0,
            rejectWithError: !1
        })),
            o.Z.dispatch({
                type: 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS',
                skuId: n,
                paymentSourceId: r,
                price: a.body
            });
    } catch (r) {
        o.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH_FAILURE',
            skuId: n
        });
        let e = r instanceof l.HF ? r : new l.HF(r);
        if (e.code === u.SM.BILLING_BUNDLE_ALREADY_PURCHASED || e.code === u.SM.BILLING_BUNDLE_PARTIALLY_OWNED) throw e;
    }
    return a;
}
let y = { isGift: !1 };
async function S(e, n, r) {
    let {
        paymentSource: i,
        expectedAmount: a,
        expectedCurrency: c,
        analyticsLoadId: f,
        isGift: g,
        giftInfoOptions: I,
        subscriptionPlanId: T,
        loadId: b,
        countryCode: S
    } = {
        ...y,
        ...r
    };
    o.Z.wait(() => {
        o.Z.dispatch({
            type: 'SKU_PURCHASE_START',
            applicationId: e,
            skuId: n
        });
    });
    let A = _.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e);
    try {
        let e = {
            gift: g,
            sku_subscription_plan_id: T,
            gateway_checkout_context: await (0, h.cn)(i),
            load_id: b
        };
        if (A) e.test_mode = !0;
        else {
            if (null != i && ((e.payment_source_id = i.id), (e.payment_source_token = await (0, E.Zv)(i)), v.QL.has(i.type))) {
                let n = await (0, E.EH)(i.type);
                e.return_url = (0, s.K0)() + v.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(i.type, null != n ? n : '', 'success');
            }
            null != a && (e.expected_amount = a), null != c && (e.expected_currency = c), (e.gift_info_options = I), null != S && (e.country_code = S), (e.purchase_token = (0, m.d)());
        }
        let r = await s.tn.post({
            url: v.ANM.STORE_SKU_PURCHASE(n),
            body: e,
            context: { load_id: f },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            o.Z.dispatch({
                type: 'SKU_PURCHASE_SUCCESS',
                skuId: n,
                libraryApplications: null != r.body.library_applications ? r.body.library_applications.filter(p.lm) : [],
                entitlements: r.body.entitlements,
                giftCode: r.body.gift_code
            }),
            {
                ...r.body,
                redirectConfirmation: !1
            }
        );
    } catch (a) {
        let r = a instanceof l.HF ? a : new l.HF(a);
        if (
            ((r.code === u.SM.CONFIRMATION_REQUIRED || r.code === u.SM.AUTHENTICATION_REQUIRED) &&
                o.Z.dispatch({
                    type: 'SKU_PURCHASE_AWAIT_CONFIRMATION',
                    skuId: n,
                    isGift: g
                }),
            o.Z.dispatch({
                type: 'SKU_PURCHASE_FAIL',
                applicationId: e,
                skuId: n,
                error: r
            }),
            r.code !== u.SM.CONFIRMATION_REQUIRED)
        )
            throw r;
        if (!a.body.payment_id) throw (0, E.SQ)('payment id cannot be null on redirected confirmations.');
        return (0, E.sk)(a.body, i);
    }
}
async function A() {
    try {
        let e = { purchase_token: (0, m.d)() };
        return {
            ...(
                await s.tn.post({
                    url: v.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: e,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
            ).body
        };
    } catch (e) {
        throw e instanceof l.HF ? e : new l.HF(e);
    }
}
function N() {
    o.Z.dispatch({ type: 'SKU_PURCHASE_CLEAR_ERROR' });
}
