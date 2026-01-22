n.d(t, {
    $M: () => eo,
    $o: () => eu,
    A8: () => es,
    CK: () => ep,
    EB: () => q,
    Gr: () => ed,
    I8: () => em,
    JQ: () => j,
    Ky: () => eg,
    LD: () => eE,
    M2: () => eC,
    MM: () => eb,
    N: () => eM,
    Ps: () => M,
    QP: () => ew,
    TD: () => X,
    TK: () => ef,
    Tv: () => er,
    YB: () => ee,
    YJ: () => K,
    Z9: () => z,
    ZK: () => eN,
    Ze: () => eH,
    _D: () => eY,
    bl: () => eF,
    bw: () => ea,
    ey: () => eL,
    ge: () => eP,
    hP: () => e_,
    i0: () => W,
    im: () => et,
    jV: () => ec,
    jZ: () => eV,
    jf: () => ek,
    nV: () => eR,
    ne: () => Y,
    r6: () => eD,
    re: () => eU,
    tc: () => ej,
    tn: () => eA,
    u1: () => ei,
    u6: () => en,
    uK: () => ex,
    uZ: () => eB,
    xG: () => eh,
    xe: () => eG,
}),
    n(457529),
    n(65821),
    n(896048);
var r = n(342393),
    i = n(284009),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    l = n(562465),
    c = n(73153),
    u = n(198982),
    d = n(136857),
    f = n(219538),
    p = n(626584),
    _ = n(202613),
    h = n(427157),
    m = n(615405),
    g = n(166403),
    E = n(954571),
    b = n(739508),
    y = n(927578),
    O = n(107351),
    A = n(71532),
    v = n(652215),
    S = n(601107),
    I = n(535833),
    T = n(818348),
    C = n(985018);
function N(e, t, n) {
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
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
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
    if (((a = x(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let L = new p.A("BillingActionCreators.tsx");
async function j(e) {
    c.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_START" });
    try {
        await l.Bo.del({
            url: v.Rsh.BILLING_PAYMENT_SOURCE(e),
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
            c.h.dispatch({
                type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS",
                id: e,
            });
    } catch (t) {
        let e = new u.Ey(t);
        throw (
            (c.h.dispatch({
                type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL",
                error: e,
            }),
            e)
        );
    }
}
async function M(e, t) {
    c.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_START" });
    try {
        let { billingAddress: n } = t,
            { line1: r, line2: i, postalCode: a } = n,
            s = D(n, ["line1", "line2", "postalCode"]),
            o = await l.Bo.patch({
                url: v.Rsh.BILLING_PAYMENT_SOURCE(e),
                body: {
                    billing_address: P(R({}, s), {
                        line_1: r,
                        line_2: i,
                        postal_code: a,
                    }),
                    expires_month: t.expiresMonth,
                    expires_year: t.expiresYear,
                    default: t.isDefault,
                },
                rejectWithError: !1,
            }),
            u = _.Ay.createFromServer(o.body);
        c.h.dispatch({
            type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS",
            paymentSource: u,
        });
    } catch (t) {
        let e = (0, d.Wd)(t);
        throw (
            (c.h.dispatch({
                type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL",
                error: e,
            }),
            e)
        );
    }
}
async function k(e) {
    let { stripe_payment_intent_client_secret: t } = (
        await l.Bo.get({
            url: v.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e),
            oldFormErrors: !0,
            rejectWithError: !0,
        })
    ).body;
    return t;
}
async function U(e) {
    let { stripe_payment_intent_client_secret: t, stripe_payment_intent_payment_method_id: n } = (
        await l.Bo.get({
            url: v.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e),
            oldFormErrors: !0,
            rejectWithError: !0,
        })
    ).body;
    return {
        clientSecret: t,
        paymentMethodId: n,
    };
}
async function G(e) {
    try {
        return (
            await l.Bo.post({
                url: v.Rsh.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
                body: {
                    billing_address: {
                        name: e.name,
                        line_1: e.line1,
                        line_2: e.line2,
                        city: e.city,
                        state: e.state,
                        postal_code: e.postalCode,
                        country: e.country,
                        email: e.email,
                    },
                },
                rejectWithError: !1,
            })
        ).body.token;
    } catch (t) {
        let e = (0, d.Wd)(t);
        throw (
            (c.h.dispatch({
                type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                error: e,
            }),
            e)
        );
    }
}
function V(e) {
    var t;
    return v.DYY.has(e.type) ? null : JSON.stringify({ type: null != (t = T.Kc.get(e.type)) ? t : null });
}
async function F(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    c.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    try {
        let a = await l.Bo.post({
                url: v.Rsh.BILLING_PAYMENT_SOURCES,
                query: { location: r.analyticsLocation },
                body: {
                    payment_gateway: e,
                    token: t,
                    billing_address: {
                        name: n.name,
                        line_1: n.line1,
                        line_2: n.line2,
                        city: n.city,
                        state: n.state,
                        postal_code: n.postalCode,
                        country: n.country,
                        email: n.email,
                    },
                    billing_address_token: r.billingAddressToken,
                    bank: r.bank,
                    return_url: r.returnUrl,
                    default: i,
                },
                rejectWithError: !1,
            }),
            s = _.Ay.createFromServer(a.body);
        return (
            c.h.dispatch({
                type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS",
                paymentSource: s,
            }),
            s
        );
    } catch (t) {
        let e = (0, d.Wd)(t);
        throw (
            (B(e, t),
            e.code !== d.tG.CONFIRMATION_REQUIRED &&
                c.h.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                    error: e,
                }),
            e)
        );
    }
}
function B(e, t) {
    var n, r;
    (null == t || null == (n = t.body) ? void 0 : n.adyen_redirect_url) &&
        (e.fields.adyen_redirect_url = null == t || null == (r = t.body) ? void 0 : r.adyen_redirect_url);
}
function H(e) {
    return I.D.includes(e.type);
}
function Y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.intl.string(C.t.khEaRI);
    return W(e, t, n, { tags: { source: "payment_elements" } });
}
function W(e) {
    let t,
        n,
        r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.intl.string(C.t.khEaRI),
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (H(e)) {
        var s;
        let a = null != e.message ? "".concat(i, ": ").concat(e.message) : i,
            o = {
                failure_message: a,
                error_type: e.type,
                failure_code: e.code,
                failure_sub_code: e.decline_code,
                payment_source_type: null == (s = e.payment_method) ? void 0 : s.type,
            };
        (n = o),
            "card_error" === e.type &&
                (E.default.track(v.HAw.PAYMENT_SOURCE_CREATION_FAILED, P(R({}, o), { stacktrace: Error().stack })),
                (r = !1)),
            (t = new u.Ey(a));
    } else
        (n = {
            failure_message: (t = new u.Ey("string" == typeof e ? i : e)).message,
            status_code: t.code,
        }),
            429 === t.code && (r = !1);
    c.h.dispatch({
        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
        error: t,
    });
    let o = Error("string" == typeof e ? e : t.message);
    return r && (0, b.pM)(o, P(R({}, a), { extra: R({}, n, a.extra) })), o;
}
async function K(e, t) {
    if (null == e || null == t) throw W("Stripe or elements not loaded");
    let n = t.getElement(r.CardNumberElement);
    if (null == n) throw W("Unable to load card elements from Stripe");
    let { token: i, error: a } = await e.createToken(n);
    if (null != a) throw W(a);
    if (null == i) throw W("token not available with successful stripe call");
    return i.id;
}
async function z(e, t, n, r) {
    if (null == e) throw W("Stripe not loaded");
    if (null == t) throw W("Bank required for EPS");
    let { email: i, name: a, line1: s, line2: o, city: l, state: u, postalCode: d, country: f } = n;
    if (null == a) throw W("Name required for EPS");
    c.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let p = await G(n),
        { paymentMethod: _, error: h } = await e.createPaymentMethod({
            type: "eps",
            eps: { bank: t },
            billing_details: {
                address: {
                    line1: s,
                    line2: o,
                    city: l,
                    state: u,
                    postal_code: d,
                    country: f,
                },
                name: a,
                email: i,
            },
        });
    if (null != h) throw W(h);
    if (null == _) throw W("paymentMethod not available with successful stripe call");
    return F(v.kM_.STRIPE, _.id, n, {
        billingAddressToken: p,
        analyticsLocation: r,
        bank: t,
    });
}
async function q(e, t, n) {
    if (null == e) throw W("Stripe not loaded");
    let { email: r, name: i, line1: a, line2: s, city: o, state: l, postalCode: u, country: d } = t;
    if (null == i) throw W("Name required for iDEAL");
    c.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let f = await G(t),
        { paymentMethod: p, error: _ } = await e.createPaymentMethod({
            type: "ideal",
            ideal: {},
            billing_details: {
                address: {
                    line1: a,
                    line2: s,
                    city: o,
                    state: l,
                    postal_code: u,
                    country: d,
                },
                name: i,
                email: r,
            },
        });
    if (null != _) throw W(_);
    if (null == p) throw W("paymentMethod not available with successful stripe call");
    return F(v.kM_.STRIPE, p.id, t, {
        billingAddressToken: f,
        analyticsLocation: n,
    });
}
async function X(e, t, n, r) {
    if (null == e) throw W("Stripe not loaded");
    let { email: i, name: a, line1: s, line2: o, city: l, state: u, postalCode: d, country: f } = n;
    if (null == i) throw W("Email required for Przelewy24");
    c.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let p = await G(n),
        _ = t.p24Bank,
        { paymentMethod: h, error: m } = await e.createPaymentMethod({
            type: "p24",
            p24: { bank: _ },
            billing_details: {
                address: {
                    line1: s,
                    line2: o,
                    city: l,
                    state: u,
                    postal_code: d,
                    country: f,
                },
                name: a,
                email: i,
            },
        });
    if (null != m) throw W(m);
    if (null == h) throw W("paymentMethod not available with successful stripe call");
    return F(v.kM_.STRIPE, h.id, n, {
        billingAddressToken: p,
        analyticsLocation: r,
        bank: _,
    });
}
let Z = (e, t, n) => {
        if (null != t) throw n(t);
        if (null == e) throw n("SetupIntent not created");
        if (null == e.payment_method) throw n("setupIntent.payment_method not available with successful stripe call");
        return (
            a()("string" == typeof e.payment_method, "setupIntent.payment_method expanded not supported"),
            {
                setupIntent: e,
                error: t,
            }
        );
    },
    Q = (e) =>
        null != e &&
        "setup_intent_unexpected_state" === e.code &&
        null != e.setup_intent &&
        "succeeded" === e.setup_intent.status,
    $ = async (e) => {
        if (null == e) throw Y("Stripe Elements not loaded", !0);
        let t = await e.submit();
        if ((L.info("Stripe Elements submit response: ", t), null != t.error))
            throw (L.error("Stripe Elements submit error: ", t.error), Y(t.error, !0));
        return t;
    },
    J = async (e, t) => {
        let { paymentMethod: n, error: r } = await e.createPaymentMethod({ elements: t });
        if (null != r) throw (L.error("Stripe createPaymentMethod error: ", r), Y(r, !0));
        if (null == n)
            throw (
                (L.warn("Stripe createPaymentMethod failed to return payment method: ", {
                    paymentMethod: n,
                    error: r,
                }),
                Y("paymentMethod not available with successful stripe call", !0))
            );
        return {
            paymentMethod: n,
            error: r,
        };
    },
    ee = async (e, t) => {
        if (null == e) throw Y("Stripe not loaded", !0);
        if (null == t) throw Y("Stripe Elements not loaded", !0);
        await $(t);
        let { paymentMethod: n, error: r } = await J(e, t);
        return {
            paymentMethod: n,
            error: r,
        };
    };
async function et() {
    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    let [i, a, { billingAddress: s, paymentSourceType: o, lastConfirmedSetupIntentRef: l }, u] = n;
    if (null == i) throw Y("Stripe not loaded", !0);
    if (null == a) throw Y("Stripe Elements not loaded", !0);
    c.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let d = await G(s);
    o !== T.he.PAYMENT_REQUEST && (await $(a));
    let p = null;
    if (o === T.he.CARD || o === T.he.PAYMENT_REQUEST) {
        let t = null != (e = l.current) ? e : void 0,
            n =
                null != t && o === T.he.PAYMENT_REQUEST
                    ? {
                          setupIntent: null != t ? t : void 0,
                          error: void 0,
                      }
                    : await i.confirmSetup({
                          redirect: "if_required",
                          elements: a,
                      });
        if (Q(n.error) && o !== T.he.PAYMENT_REQUEST) {
            let { client_secret: e } = await (0, f.w)();
            await $(a),
                (n = await i.confirmSetup({
                    redirect: "if_required",
                    clientSecret: e,
                    elements: a,
                }));
        }
        let { setupIntent: r } = Z(n.setupIntent, n.error, (e) => Y(e, !0));
        (l.current = r), (p = r.payment_method);
    } else {
        let { paymentMethod: e } = await J(i, a);
        p = e.id;
    }
    return F(v.kM_.STRIPE, p, s, {
        billingAddressToken: d,
        analyticsLocation: u,
    });
}
async function en(e, t, n, r) {
    if (null == e || null == t) throw W("Stripe or token not loaded");
    c.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let i = null;
    try {
        i = (await (0, f.r)()).client_secret;
    } catch (e) {
        throw W(e);
    }
    let a = await G(n),
        s = A._Z(n),
        { setupIntent: o, error: l } = await e.confirmCardSetup(i, {
            payment_method: {
                card: { token: t },
                billing_details: s,
            },
        }),
        { setupIntent: u } = Z(o, l, (e) => W(e));
    return F(v.kM_.STRIPE, u.payment_method, n, {
        billingAddressToken: a,
        analyticsLocation: r,
    });
}
function er(e, t, n) {
    let { token: r, billingAddressInfo: i } = A.uK(e);
    return F(v.kM_.STRIPE, r, null != t ? t : i, { analyticsLocation: n });
}
function ei(e, t, n) {
    return F(v.kM_.BRAINTREE, e, t, { analyticsLocation: n });
}
async function ea(e, t, n, r) {
    if (null == e) throw W("Stripe not loaded");
    let i = await G(t),
        { name: s, line1: o, line2: l, city: c, state: u, postalCode: d, country: f } = t,
        p = T.kv.get(n);
    a()(null != p, "unsupported payment method type");
    let { paymentMethod: _, error: h } = await e.createPaymentMethod({
        type: p,
        billing_details: {
            address: {
                line1: o,
                line2: l,
                city: c,
                state: u,
                postal_code: d,
                country: f,
            },
            name: s,
        },
    });
    if (null != h) throw W(h);
    if (null == _) throw W("stripePaymentMethod not available with successful stripe call");
    return F(v.kM_.STRIPE, _.id, t, {
        billingAddressToken: i,
        analyticsLocation: r,
    });
}
async function es(e, t, n) {
    let r = await G(e),
        i = { type: T.Kc.get(t) };
    return F(v.kM_.ADYEN, JSON.stringify(i), e, {
        billingAddressToken: r,
        analyticsLocation: n,
    });
}
async function eo(e, t, n, r) {
    var i;
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = await G(e),
        o = R({ type: T.Kc.get(t) }, null != (i = null == r ? void 0 : r.paymentMethod) ? i : {}),
        f = await ek(t),
        p = (0, l.TP)() + v.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, null != f ? f : "", "success");
    try {
        return {
            paymentSource: await F(
                v.kM_.ADYEN,
                JSON.stringify(o),
                e,
                {
                    billingAddressToken: s,
                    analyticsLocation: n,
                    returnUrl: p,
                },
                a,
            ),
            redirectConfirmation: !1,
        };
    } catch (t) {
        if (t.code !== d.tG.CONFIRMATION_REQUIRED)
            throw (
                (c.h.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                    error: new u.Ey(
                        "Unable to create payment source token: code: "
                            .concat(null == t ? void 0 : t.code, " message: ")
                            .concat(null == t ? void 0 : t.message),
                        u.Ey.ErrorCodes.UNKNOWN,
                    ),
                }),
                t)
            );
        let e = t.fields.adyen_redirect_url;
        if (null == e) throw W("redirect url cannot be null on a redirect for adyen.");
        return eS(e), { redirectConfirmation: !0 };
    }
}
async function el(e) {
    if (v.DYY.has(e.type)) return null;
    let t = await A.Cv();
    if (null == t) throw new u.Ey("Stripe not loaded", u.Ey.ErrorCodes.UNKNOWN);
    let { email: n, name: r, line1: i, line2: s, city: o, state: l, postalCode: c, country: d } = e.billingAddress,
        f = {
            billing_details: {
                address: {
                    line1: i,
                    line2: s,
                    city: o,
                    state: l,
                    postal_code: c,
                    country: d,
                },
                name: r,
            },
        };
    switch (e.type) {
        case T.he.GIROPAY:
            f.type = "giropay";
            break;
        case T.he.SOFORT:
            (f.type = "sofort"), (f.sofort = { country: null != d ? d : "" }), (f.billing_details.email = n);
            break;
        case T.he.BANCONTACT:
            f.type = "bancontact";
            break;
        case T.he.IDEAL:
            (f.type = "ideal"), (f.ideal = { bank: e.bank });
            break;
        case T.he.PRZELEWY24:
            if (null == e.bank) throw new u.Ey("p24 missing bank information", u.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (f.type = "p24"), (f.p24 = { bank: e.bank }), (f.billing_details.email = e.email);
            break;
        case T.he.EPS:
            if (null == e.bank) throw new u.Ey("EPS missing bank information", u.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (f.type = "eps"), (f.eps = { bank: e.bank });
    }
    a()(null != f.type, "unsupported payment method type");
    let { paymentMethod: p, error: _ } = await t.createPaymentMethod(f);
    if (null != _ || null == p)
        throw new u.Ey(
            "Unable to create payment source token: code: "
                .concat(null == _ ? void 0 : _.code, " message: ")
                .concat(null == _ ? void 0 : _.message),
            u.Ey.ErrorCodes.UNKNOWN,
        );
    return p.id;
}
function ec(e) {
    return v.DYY.has(e.type) ? null : T.Kc.has(e.type) ? V(e) : el(e);
}
async function eu() {
    if (!m.A.isPaymentSourceFetching)
        try {
            let e = l.Bo.get({
                url: v.Rsh.BILLING_PAYMENT_SOURCES,
                oldFormErrors: !0,
                rejectWithError: !1,
            });
            c.h.wait(() =>
                c.h.dispatch({
                    type: "BILLING_PAYMENT_SOURCES_FETCH_START",
                    request: e,
                }),
            );
            let t = await e;
            return (
                c.h.dispatch({
                    type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS",
                    paymentSources: t.body,
                }),
                t
            );
        } catch (e) {
            throw (c.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL" }), e);
        }
}
async function ed(e) {
    try {
        let t = l.Bo.get({
                url: v.Rsh.BILLING_PAYMENT_SOURCE(e),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = await t,
            r = _.Ay.createFromServer(n.body);
        return (
            c.h.dispatch({
                type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS",
                paymentSource: r,
            }),
            n
        );
    } catch (e) {
        throw (c.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_FAIL" }), e);
    }
}
async function ef(e) {
    let t = await l.Bo.get({
        url: v.Rsh.BILLING_PAYMENT(e),
        rejectWithError: !0,
    });
    return (
        c.h.dispatch({
            type: "BILLING_PAYMENT_FETCH_SUCCESS",
            payment: t.body,
        }),
        t
    );
}
async function ep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
        t = arguments.length > 1 ? arguments[1] : void 0;
    c.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_START" });
    try {
        let n = await l.Bo.get({
            url: v.Rsh.BILLING_PAYMENTS,
            query: {
                limit: e,
                before: t,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            c.h.dispatch({
                type: "BILLING_PAYMENTS_FETCH_SUCCESS",
                payments: n.body,
            }),
            n
        );
    } catch (e) {
        throw (c.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_FAIL" }), e);
    }
}
async function e_() {
    c.h.wait(() => {
        c.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_START" });
    });
    try {
        let e = S.En.ADD_PERKS_IF_DETECTED,
            t = g.A.getLastLazyPerkSync();
        (null == t || o()().diff(t, "hours") >= 1) && ((e = S.En.FULL_RESYNC), (t = o()()));
        let n = await l.Bo.get({
            url: v.Rsh.BILLING_SUBSCRIPTIONS,
            oldFormErrors: !0,
            rejectWithError: !1,
            query: { sync_level: e },
        });
        if (null == n.body) throw new u.Ey("response body is null, response: ".concat(JSON.stringify(n)), n.status);
        return (
            c.h.dispatch({
                type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS",
                subscriptions: n.body,
                lastLazyPerkSync: t,
            }),
            n
        );
    } catch (e) {
        throw (c.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_FAIL" }), e);
    }
}
async function eh() {
    try {
        let e = await l.Bo.get({
            url: v.Rsh.BILLING_NITRO_AFFINITY,
            rejectWithError: !0,
        });
        c.h.dispatch({
            type: "BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED",
            res: e.body.map((e) => new h.A(e)),
        });
    } finally {
        c.h.dispatch({ type: "BILLING_NITRO_AFFINITY_FETCHED" });
    }
}
async function em() {
    c.h.wait(() => {
        c.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START" });
    });
    try {
        let e = await l.Bo.get({
            url: v.Rsh.BILLING_SUBSCRIPTIONS,
            query: {
                include_inactive: !0,
                limit: 2,
                exclude_unpaid_statuses: !0,
                subscription_type: T.rz.PREMIUM,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        return (
            e.ok
                ? (c.h.dispatch({
                      type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS",
                      subscription: e.body.length > 0 ? e.body[0] : null,
                  }),
                  c.h.dispatch({
                      type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS",
                      subscription: e.body.length > 1 ? e.body[1] : null,
                  }))
                : c.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" }),
            e
        );
    } catch (e) {
        c.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" });
    }
}
async function eg(e) {
    let {
        items: t,
        paymentSource: n,
        trialId: r,
        code: i,
        currency: a,
        metadata: s,
        referralCode: o,
        loadId: f,
        expectedInvoicePrice: p,
        expectedRenewalPrice: _,
    } = e;
    c.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" }), (t = (0, y.qn)(t));
    let h = null;
    if (null != n && T.Kc.has(n.type)) {
        let e = await ek(n.type);
        h = (0, l.TP)() + v.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success");
    }
    try {
        let e = await l.Bo.post({
            url: v.Rsh.BILLING_SUBSCRIPTIONS,
            body: {
                items: t.map((e) => {
                    let { planId: t, quantity: n } = e;
                    return {
                        plan_id: t,
                        quantity: n,
                    };
                }),
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await ec(n) : null,
                trial_id: r,
                return_url: h,
                code: i,
                currency: null != n ? a : T.Yr.USD,
                metadata: s,
                gateway_checkout_context: await (0, b.ob)(n),
                purchase_token: (0, O.r)(),
                referral_code: o,
                load_id: f,
                expected_invoice_price: p,
                expected_renewal_price: _,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            c.h.dispatch({
                type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                subscription: e.body,
            }),
            {
                subscription: e.body,
                redirectConfirmation: !1,
            }
        );
    } catch (t) {
        let e = t instanceof u.Ey ? t : new u.Ey(t);
        if (
            (c.h.dispatch({
                type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                error: e,
            }),
            e.code !== d.tG.CONFIRMATION_REQUIRED)
        )
            throw e;
        if (!t.body.payment_id) throw W("payment id cannot be null on redirected confirmations.");
        return eb(t.body, n);
    }
}
async function eE(e, t, n, r) {
    let i = null;
    if (null != n && T.AD.has(n.type)) {
        let e = await ek(n.type);
        i = (0, l.TP)() + v.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success");
    }
    try {
        let a = await l.Bo.post({
            url: v.Rsh.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
            body: {
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await ec(n) : null,
                return_url: i,
                currency: r,
                purchase_token: (0, O.r)(),
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            c.h.dispatch({
                type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                subscription: a.body,
            }),
            {
                subscription: a.body,
                redirectConfirmation: v.CmT.has(n.type),
            }
        );
    } catch (t) {
        let e = t instanceof u.Ey ? t : new u.Ey(t);
        if (e.code !== d.tG.CONFIRMATION_REQUIRED)
            throw (
                (c.h.dispatch({
                    type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                    error: e,
                }),
                e)
            );
        if (!t.body.payment_id) throw W("payment id cannot be null on redirected confirmations.");
        return eb(t.body, n);
    }
}
function eb(e, t) {
    return null != t && T.Kc.has(t.type) ? ey(e.adyen_redirect_url, t) : eO(e.payment_id, t);
}
async function ey(e, t) {
    if (null == e) throw W("redirect url cannot be null on a redirect for adyen.");
    if (null == t) throw W("Payment source cannot be null on a redirect.");
    return v.CmT.has(t.type)
        ? (eS(e),
          {
              redirectConfirmation: !0,
              redirectURL: e,
          })
        : {
              redirectConfirmation: !1,
              redirectURL: e,
          };
}
async function eO(e, t) {
    let n = await A.Cv();
    if (null == t) throw W("Payment source cannot be null on a redirect.");
    let { clientSecret: r, paymentMethodId: i } = await U(e);
    if (null == n) throw W("Stripe cannot be null on a redirect.");
    if (v.CmT.has(t.type)) {
        let e = await ek(t.type);
        return (
            eS(
                await eT({
                    stripe: n,
                    paymentSource: t,
                    clientSecret: r,
                    state: e,
                }),
            ),
            { redirectConfirmation: !0 }
        );
    }
    return (
        await eI({
            stripe: n,
            clientSecret: r,
            paymentMethodId: i,
            paymentSource: t,
        }),
        { redirectConfirmation: !1 }
    );
}
async function eA(e) {
    var t;
    let n = await ef(e);
    if ((null == n ? void 0 : n.body) == null) throw W("could not fetch payment");
    let r = _.Ay.createFromServer(n.body.payment_source);
    if (!v.CmT.has(r.type)) throw W("unsupported redirect payment source");
    if ((null == n || null == (t = n.body) ? void 0 : t.status) === T.__.FAILED) throw W("payment failed");
    return r.paymentGateway !== v.kM_.STRIPE || ev(e);
}
async function ev(e) {
    let t = await A.Cv();
    if (null == t) throw W("Stripe has not loaded.");
    if (null == e) throw W("payment intent id cannot be null.");
    let n = await k(e),
        { paymentIntent: r, error: i } = await t.retrievePaymentIntent(n);
    if (null != i) throw W(i);
    if (null == r) throw W("paymentIntent not available with successful stripe call");
    if (null != r.last_payment_error) throw W("unable to retrieve payment intent ".concat(r.last_payment_error));
    return !0;
}
function eS(e) {
    window.open(e);
}
async function eI(e) {
    let t,
        { stripe: n, paymentSource: r, paymentMethodId: i, clientSecret: a } = e,
        s = {};
    if (r.type === T.he.SEPA_DEBIT) {
        if (null == i) throw W("On a sepa payment payment method id cannot be null");
        (s.payment_method = i), (t = n.confirmSepaDebitPayment);
    } else throw W("Unsupported redirected payment source type.");
    let { paymentIntent: o, error: l } = await t(a, s);
    if (null != l) throw W(l);
    if (null == o) throw W("paymentIntent not available with successful stripe call");
}
async function eT(e) {
    var t, n;
    let r,
        { stripe: i, paymentSource: a, clientSecret: s, state: o } = e,
        c = {};
    switch (a.type) {
        case T.he.GIROPAY:
            (c = { billing_details: { name: a.billingAddress.name } }), (r = i.confirmGiropayPayment);
            break;
        case T.he.BANCONTACT:
            (c = {
                billing_details: {
                    name: a.billingAddress.name,
                    email: a.email,
                },
            }),
                (r = i.confirmBancontactPayment);
            break;
        case T.he.SOFORT:
            (c = {
                sofort: { country: a.billingAddress.country },
                billing_details: {
                    name: a.billingAddress.name,
                    email: a.email,
                },
            }),
                (r = i.confirmSofortPayment);
            break;
        case T.he.PRZELEWY24:
            if (null == a.bank) throw W("PaymentSource (".concat(a.id, ") missing bank info for p24."));
            (c = {
                p24: { bank: a.bank },
                billing_details: {
                    name: a.billingAddress.name,
                    email: a.email,
                },
            }),
                (r = i.confirmP24Payment);
            break;
        case T.he.EPS:
            if (null == a.bank) throw W("PaymentSource (".concat(a.id, ") missing bank info for EPS."));
            (c = {
                eps: { bank: a.bank },
                billing_details: { name: a.billingAddress.name },
            }),
                (r = i.confirmEpsPayment);
            break;
        case T.he.IDEAL:
            (c = {
                ideal: {},
                billing_details: { name: a.billingAddress.name },
            }),
                null != a.bank && (c.ideal = { bank: a.bank }),
                (r = i.confirmIdealPayment);
            break;
        default:
            throw W("Unsupported redirected payment source type.");
    }
    let { paymentIntent: u, error: d } = await r(
        s,
        {
            payment_method: c,
            return_url:
                (0, l.TP)() +
                v.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(a.type, null != o ? o : "", "success"),
        },
        { handleActions: !1 },
    );
    if (null != d) throw W(d);
    if (null == u) throw W("paymentIntent not available with successful api call");
    if ((null == (n = u.next_action) || null == (t = n.redirect_to_url) ? void 0 : t.url) == null)
        throw W("confirm payment did not return a redirect url");
    return u.next_action.redirect_to_url.url;
}
async function eC(e, t, n) {
    c.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_START" });
    try {
        let r = await l.Bo.del({
            url: v.Rsh.BILLING_SUBSCRIPTION(e),
            query: {
                location: n,
                location_stack: t,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return c.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS" }), r;
    } catch (t) {
        let e = new u.Ey(t);
        throw (
            (c.h.dispatch({
                type: "BILLING_SUBSCRIPTION_CANCEL_FAIL",
                error: e,
            }),
            e)
        );
    }
}
function eN(e, t) {
    return eR(
        e,
        { items: e.items },
        {
            amount: 0,
            currency: e.currency,
        },
        (0, y.UC)(e.items, e.currency, e.paymentSourceId),
        t,
    );
}
async function eR(e, t, n, r, i, a, s) {
    if (null != t.paymentSource && null == t.currency) throw Error("Currency must be specified with payment source");
    c.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
    try {
        var o;
        let u = {
            status: t.status,
            payment_source_id: null == (o = t.paymentSource) ? void 0 : o.id,
            payment_source_token: null != t.paymentSource ? await ec(t.paymentSource) : null,
            currency: t.currency,
            gateway_checkout_context: await (0, b.ob)(t.paymentSource),
            load_id: s,
            pause_duration: t.pauseDuration,
            purchase_token: (0, O.r)(),
            expected_invoice_price: n,
            expected_renewal_price: r,
        };
        if (null != t.paymentSource && T.Kc.has(t.paymentSource.type)) {
            let e = await ek(t.paymentSource.type);
            u.return_url =
                (0, l.TP)() +
                v.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                    t.paymentSource.type,
                    null != e ? e : "",
                    "success",
                );
        }
        null != t.items &&
            (u.items = (0, y.qn)(t.items).map((e) => {
                let { planId: t } = e,
                    n = D(e, ["planId"]);
                return P(R({}, n), { plan_id: t });
            }));
        let d = await l.Bo.patch({
            url: v.Rsh.BILLING_SUBSCRIPTION(e.id),
            query: {
                location: a,
                location_stack: i,
            },
            body: u,
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            c.h.dispatch({
                type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                subscription: d.body,
            }),
            {
                subscription: d.body,
                redirectConfirmation: !1,
            }
        );
    } catch (n) {
        let e = n instanceof u.Ey ? n : new u.Ey(n);
        if (e.code !== d.tG.CONFIRMATION_REQUIRED)
            throw (
                (c.h.dispatch({
                    type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                    error: e,
                }),
                e)
            );
        if (!n.body.payment_id) throw W("payment id cannot be null on redirected confirmations.");
        return eb(n.body, t.paymentSource);
    }
}
function ew(e, t, n, r, i) {
    return eR(
        e,
        {
            status: v.Dmq.ACTIVE,
            paymentSource: n,
            currency: r,
        },
        {
            amount: 0,
            currency: e.currency,
        },
        (0, y.UC)(e.items, e.currency, null == n ? void 0 : n.id),
        t,
        i,
    );
}
function eP(e, t, n, r, i, a) {
    let s = (0, y.GX)(e, t);
    return eR(
        e,
        {
            status: v.Dmq.ACTIVE,
            items: s,
        },
        n,
        r,
        i,
        a,
    );
}
function eD(e, t, n, r, i) {
    return eR(
        e,
        { currency: t },
        {
            amount: 0,
            currency: t.toLowerCase(),
        },
        n,
        r,
        i,
    );
}
function ex(e, t, n, r, i, a) {
    return eR(
        e,
        {
            paymentSource: t,
            currency: n,
        },
        {
            amount: 0,
            currency: n.toLowerCase(),
        },
        r,
        i,
        a,
    );
}
function eL() {
    c.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
}
function ej() {
    c.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
}
async function eM(e) {
    await l.Bo.post({
        url: v.Rsh.BILLING_PAYMENTS_VOID(e),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
async function ek(e) {
    let {
        body: { state: t },
    } = await l.Bo.post({
        url: v.Rsh.BILLING_POPUP_BRIDGE(e),
        oldFormErrors: !0,
        rejectWithError: !0,
    });
    return (
        c.h.dispatch({
            type: "BILLING_POPUP_BRIDGE_STATE_UPDATE",
            state: t,
            paymentSourceType: e,
        }),
        t
    );
}
function eU(e) {
    let { paymentSourceType: t, state: n, path: r, query: i, insecure: a } = e;
    return (
        c.h.dispatch({
            type: "BILLING_POPUP_BRIDGE_CALLBACK_START",
            paymentSourceType: t,
        }),
        l.Bo.post({
            url: v.Rsh.BILLING_POPUP_BRIDGE_CALLBACK(t),
            body: {
                state: n,
                path: r,
                query: i,
                insecure: a,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => (
                c.h.dispatch({
                    type: "BILLING_POPUP_BRIDGE_CALLBACK_END",
                    paymentSourceType: t,
                }),
                e
            ),
        )
    );
}
async function eG() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != m.A.ipCountryCodeRequest) return m.A.ipCountryCodeRequest;
    try {
        let e = l.Bo.get({
            url: v.Rsh.BILLING_COUNTRY_CODE,
            rejectWithError: !1,
        });
        c.h.wait(() =>
            c.h.dispatch({
                type: "BILLING_IP_COUNTRY_CODE_FETCH_START",
                request: e,
            }),
        );
        let t = await e,
            n = t.body.country_code;
        return (
            c.h.dispatch({
                type: "BILLING_SET_IP_COUNTRY_CODE",
                countryCode: n,
            }),
            t
        );
    } catch (e) {
        return c.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FAILURE" }), e;
    }
}
async function eV() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != m.A.ipLocationRequest) return m.A.ipLocationRequest;
    try {
        let e = l.Bo.get({
            url: v.Rsh.BILLING_LOCATION,
            rejectWithError: !1,
        });
        c.h.wait(() =>
            c.h.dispatch({
                type: "BILLING_IP_LOCATION_FETCH_START",
                request: e,
            }),
        );
        let t = await e,
            n = t.body.country_code,
            r = t.body.subdivision_code,
            i = {
                countryCode: n,
                subdivisionCode: r,
            };
        return (
            c.h.dispatch({
                type: "BILLING_SET_IP_LOCATION",
                location: i,
            }),
            c.h.dispatch({
                type: "BILLING_SET_IP_COUNTRY_CODE",
                countryCode: n,
            }),
            t
        );
    } catch (e) {
        return (
            E.default.track(v.HAw.BILLING_IP_LOCATION_FETCH_ERROR, { error_message: e.message }),
            c.h.dispatch({ type: "BILLING_IP_LOCATION_FAILURE" }),
            e
        );
    }
}
function eF() {
    c.h.dispatch({ type: "RESET_PAYMENT_ID" });
}
function eB() {
    c.h.dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
}
function eH(e) {
    c.h.dispatch({
        type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED",
        loadId: e,
    });
}
async function eY(e, t) {
    try {
        let n = await l.Bo.post({
            url: v.Rsh.REACTIVATION_OFFER_REDEEM(e.id, t.id),
            rejectWithError: !1,
        });
        c.h.dispatch({
            type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
            subscription: n.body,
        });
    } catch (t) {
        let e = t instanceof u.Ey ? t : new u.Ey(t);
        c.h.dispatch({
            type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
            error: e,
        });
    }
}
