n.d(t, {
    $N: () => v,
    ZZ: () => C,
    pB: () => P,
    t_: () => A,
    uE: () => S,
    x2: () => I,
    xA: () => N,
}),
    n(415506);
var r = n(311570),
    i = n(544891),
    a = n(570140),
    o = n(881052),
    s = n(128069),
    l = n(34756),
    c = n(115130),
    u = n(55563),
    d = n(695103),
    f = n(122289),
    p = n(823379),
    _ = n(936101),
    m = n(73346),
    h = n(355467),
    g = n(981631);
function E(e, t, n) {
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
function b(e) {
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
function O(e, t) {
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
async function v(e, t, n) {
    if (null == u.Z.get(t)) {
        a.Z.dispatch({
            type: "SKU_FETCH_START",
            skuId: t,
        });
        try {
            let i = d.Z.inTestModeForApplication(e) || c.Z.inDevModeForApplication(e),
                o = {
                    url: i ? g.ANM.STORE_SKU(t) : g.ANM.STORE_PUBLISHED_LISTINGS_SKU(t),
                    rejectWithError: !1,
                };
            n === r.v.VARIANTS_GROUP && (o.query = { variants_return_style: n });
            let s = await (0, m.Kb)(o);
            a.Z.dispatch({
                type: "SKU_FETCH_SUCCESS",
                sku: i ? s.body : s.body.sku,
            }),
                i ||
                    a.Z.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: s.body,
                    });
        } catch (e) {
            throw (
                (a.Z.dispatch({
                    type: "SKU_FETCH_FAIL",
                    skuId: t,
                }),
                new l.Z("Failed to fetch SKU ".concat(t)))
            );
        }
    }
}
async function S(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(d.Z.inTestModeForApplication(e) || c.Z.inDevModeForApplication(e)) && t)
        throw Error("this should only be used in test mode");
    let n = (
        await (0, m.Kb)({
            url: g.ANM.APPLICATION_SKUS(e),
            rejectWithError: !1,
        })
    ).body;
    return (
        a.Z.dispatch({
            type: "SKUS_FETCH_SUCCESS",
            skus: n,
        }),
        n
    );
}
async function I(e, t, n, r) {
    let i,
        l = {
            payment_source_id: n,
            gift: null == r ? void 0 : r.isGift,
        };
    (d.Z.inTestModeForApplication(e) || c.Z.inDevModeForApplication(e)) && (l.test_mode = !0),
        a.Z.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH",
            skuId: t,
        });
    try {
        (i = await (0, m.Kb)({
            url: g.ANM.STORE_SKU_PURCHASE(t),
            query: l,
            oldFormErrors: !0,
            rejectWithError: !1,
        })),
            a.Z.dispatch({
                type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                skuId: t,
                paymentSourceId: n,
                price: i.body,
            });
    } catch (n) {
        a.Z.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
            skuId: t,
        });
        let e = n instanceof o.HF ? n : new o.HF(n);
        if (
            e.code === s.SM.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === s.SM.BILLING_BUNDLE_PARTIALLY_OWNED ||
            e.code === s.SM.INVALID_BILLING_ADDRESS
        )
            throw e;
    }
    return i;
}
let T = { isGift: !1 };
async function A(e, t, n, r, s) {
    a.Z.dispatch({ type: "ORDER_CREATE_START" });
    try {
        let o = {
            order_line_items: [
                {
                    sku_id: e,
                    quantity: 1,
                    purchase_type: 1,
                },
            ],
            billing_facet: { payment_source_id: t },
            location_facet: { request_gateway_country_code: n },
        };
        r &&
            (o.gifting_facet = {
                is_gift: !0,
                gift_customization: {
                    recipient_id: s.recipient_id,
                    gift_style: s.gift_style,
                    emoji_id: s.emoji_id,
                    emoji_name: s.emoji_name,
                    sound_id: s.sound_id,
                    reward_sku_ids: s.reward_sku_ids,
                    custom_message_contents: s.custom_message,
                },
            });
        let l = (
                await i.tn.post({
                    url: g.ANM.ORDER_CREATE,
                    body: o,
                    rejectWithError: !1,
                })
            ).body,
            c = l.id;
        return (
            a.Z.dispatch({
                type: "ORDER_CREATE_SUCCESS",
                orderId: c,
                order: l,
            }),
            c
        );
    } catch (e) {
        throw (a.Z.dispatch({ type: "ORDER_CREATE_FAIL" }), new o.HF("Failed to create order: ".concat(e)));
    }
}
async function C(e, t, n) {
    let {
        paymentSource: r,
        expectedAmount: l,
        expectedCurrency: u,
        analyticsLoadId: m,
        isGift: E,
        giftInfoOptions: y,
        subscriptionPlanId: v,
        loadId: S,
        countryCode: I,
        orderId: A,
    } = b({}, T, n);
    a.Z.wait(() => {
        a.Z.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: e,
            skuId: t,
        });
    });
    let C = d.Z.inTestModeForApplication(e) || c.Z.inDevModeForApplication(e);
    try {
        let e = {
            gift: E,
            sku_subscription_plan_id: v,
            gateway_checkout_context: await (0, f.cn)(r),
            load_id: S,
            gift_info_options: y,
        };
        if (C) e.test_mode = !0;
        else {
            if (
                null != r &&
                ((e.payment_source_id = r.id), (e.payment_source_token = await (0, h.Zv)(r)), g.QL.has(r.type))
            ) {
                let t = await (0, h.EH)(r.type);
                e.return_url =
                    (0, i.K0)() +
                    g.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, null != t ? t : "", "success");
            }
            null != I && (e.country_code = I);
        }
        null != l && (e.expected_amount = l),
            null != u && (e.expected_currency = u),
            (e.purchase_token = (0, _.d)()),
            null != A && (e.order_id = A);
        let n = await i.tn.post({
            url: g.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: m },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            a.Z.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: t,
                libraryApplications:
                    null != n.body.library_applications ? n.body.library_applications.filter(p.lm) : [],
                entitlements: n.body.entitlements,
                appliedUserDiscounts: n.body.applied_user_discounts,
                giftCode: n.body.gift_code,
            }),
            O(b({}, n.body), {
                appliedUserDiscounts: n.body.applied_user_discounts,
                redirectConfirmation: !1,
            })
        );
    } catch (i) {
        let n = i instanceof o.HF ? i : new o.HF(i);
        if (
            ((n.code === s.SM.CONFIRMATION_REQUIRED || n.code === s.SM.AUTHENTICATION_REQUIRED) &&
                a.Z.dispatch({
                    type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                    skuId: t,
                    isGift: E,
                }),
            a.Z.dispatch({
                type: "SKU_PURCHASE_FAIL",
                applicationId: e,
                skuId: t,
                error: n,
            }),
            n.code !== s.SM.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!i.body.payment_id) throw (0, h.SQ)("payment id cannot be null on redirected confirmations.");
        return (0, h.sk)(i.body, r);
    }
}
async function N() {
    try {
        let e = { purchase_token: (0, _.d)() },
            t = await i.tn.post({
                url: g.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: e,
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        return b({}, t.body);
    } catch (e) {
        throw e instanceof o.HF ? e : new o.HF(e);
    }
}
function P() {
    a.Z.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
}
