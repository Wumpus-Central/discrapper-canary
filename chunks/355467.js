n.d(t, {
    Dk: () => J,
    EH: () => eC,
    EO: () => eE,
    G: () => ec,
    GE: () => eP,
    GM: () => eD,
    GV: () => X,
    K2: () => ew,
    LI: () => L,
    MH: () => eo,
    Mg: () => ey,
    O1: () => er,
    OP: () => e_,
    SQ: () => V,
    UY: () => eN,
    XW: () => el,
    YQ: () => H,
    Zv: () => ee,
    _H: () => eS,
    aN: () => Y,
    cQ: () => ei,
    dP: () => ev,
    f0: () => K,
    fG: () => eI,
    i6: () => z,
    jg: () => ea,
    lO: () => en,
    lP: () => q,
    ou: () => es,
    pF: () => W,
    pl: () => eO,
    qu: () => eb,
    qv: () => Z,
    r5: () => eL,
    rt: () => eR,
    sF: () => Q,
    sk: () => eu,
    tZ: () => et,
    tq: () => eT,
    w7: () => eA,
    xt: () => D
}),
    n(49124),
    n(415506);
var r = n(957957),
    i = n(512722),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    l = n(544891),
    c = n(570140),
    u = n(881052),
    d = n(128069),
    f = n(46141),
    _ = n(598077),
    p = n(351402),
    h = n(78839),
    m = n(626135),
    g = n(122289),
    E = n(74538),
    b = n(936101),
    y = n(622999),
    O = n(981631),
    v = n(362786),
    I = n(763596),
    T = n(231338),
    S = n(388032);
function A(e, t, n) {
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
function N(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
async function D(e) {
    c.Z.dispatch({ type: 'BILLING_PAYMENT_SOURCE_REMOVE_START' });
    try {
        await l.tn.del({
            url: O.ANM.BILLING_PAYMENT_SOURCE(e),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            c.Z.dispatch({
                type: 'BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS',
                id: e
            });
    } catch (t) {
        let e = new u.HF(t);
        throw (
            (c.Z.dispatch({
                type: 'BILLING_PAYMENT_SOURCE_REMOVE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function L(e, t) {
    c.Z.dispatch({ type: 'BILLING_PAYMENT_SOURCE_UPDATE_START' });
    try {
        let {
                billingAddress: { line1: n, line2: r, postalCode: i }
            } = t,
            a = P(t.billingAddress, ['line1', 'line2', 'postalCode']),
            o = await l.tn.patch({
                url: O.ANM.BILLING_PAYMENT_SOURCE(e),
                body: {
                    billing_address: R(N({}, a), {
                        line_1: n,
                        line_2: r,
                        postal_code: i
                    }),
                    expires_month: t.expiresMonth,
                    expires_year: t.expiresYear,
                    default: t.isDefault
                },
                rejectWithError: !1
            }),
            s = f.ZP.createFromServer(o.body);
        c.Z.dispatch({
            type: 'BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS',
            paymentSource: s
        });
    } catch (t) {
        let e = (0, d.yD)(t);
        throw (
            (c.Z.dispatch({
                type: 'BILLING_PAYMENT_SOURCE_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function x(e) {
    let { stripe_payment_intent_client_secret: t } = (
        await l.tn.get({
            url: O.ANM.BILLING_STRIPE_PAYMENT_INTENTS(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
    ).body;
    return t;
}
async function M(e) {
    let { stripe_payment_intent_client_secret: t, stripe_payment_intent_payment_method_id: n } = (
        await l.tn.get({
            url: O.ANM.BILLING_STRIPE_PAYMENT_INTENTS(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
    ).body;
    return {
        clientSecret: t,
        paymentMethodId: n
    };
}
async function k() {
    return (
        await l.tn.post({
            url: O.ANM.BILLING_STRIPE_SETUP_INTENT_SECRET,
            oldFormErrors: !0,
            rejectWithError: !0
        })
    ).body.client_secret;
}
async function j(e) {
    try {
        return (
            await l.tn.post({
                url: O.ANM.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
                body: {
                    billing_address: {
                        name: e.name,
                        line_1: e.line1,
                        line_2: e.line2,
                        city: e.city,
                        state: e.state,
                        postal_code: e.postalCode,
                        country: e.country,
                        email: e.email
                    }
                },
                rejectWithError: !1
            })
        ).body.token;
    } catch (t) {
        let e = (0, d.yD)(t);
        throw (
            (c.Z.dispatch({
                type: 'BILLING_PAYMENT_SOURCE_CREATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
function U(e) {
    var t;
    return O.ldS.has(e.type) ? null : JSON.stringify({ type: null != (t = T.QL.get(e.type)) ? t : null });
}
async function G(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    c.Z.dispatch({ type: 'BILLING_PAYMENT_SOURCE_CREATE_START' });
    try {
        let a = await l.tn.post({
                url: O.ANM.BILLING_PAYMENT_SOURCES,
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
                        email: n.email
                    },
                    billing_address_token: r.billingAddressToken,
                    bank: r.bank,
                    return_url: r.returnUrl,
                    default: i
                },
                rejectWithError: !1
            }),
            o = f.ZP.createFromServer(a.body);
        return (
            c.Z.dispatch({
                type: 'BILLING_PAYMENT_SOURCE_CREATE_SUCCESS',
                paymentSource: o
            }),
            o
        );
    } catch (t) {
        let e = (0, d.yD)(t);
        throw (
            (B(e, t),
            e.code !== d.SM.CONFIRMATION_REQUIRED &&
                c.Z.dispatch({
                    type: 'BILLING_PAYMENT_SOURCE_CREATE_FAIL',
                    error: e
                }),
            e)
        );
    }
}
function B(e, t) {
    var n, r;
    (null == t || null == (n = t.body) ? void 0 : n.adyen_redirect_url) && (e.fields.adyen_redirect_url = null == t || null == (r = t.body) ? void 0 : r.adyen_redirect_url);
}
function F(e) {
    return I.i.includes(e.type);
}
function V(e) {
    let t,
        n,
        r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S.intl.string(S.t.khEaRE);
    if (F(e)) {
        var a;
        let o = null != e.message ? ''.concat(i, ': ').concat(e.message) : i,
            s = {
                failure_message: o,
                error_type: e.type,
                failure_code: e.code,
                failure_sub_code: e.decline_code,
                payment_source_type: null == (a = e.payment_method) ? void 0 : a.type
            };
        (n = s), 'card_error' === e.type && (m.default.track(O.rMx.PAYMENT_SOURCE_CREATION_FAILED, R(N({}, s), { stacktrace: Error().stack })), (r = !1)), (t = new u.HF(o));
    } else
        (n = {
            failure_message: (t = new u.HF('string' == typeof e ? i : e)).message,
            status_code: t.code
        }),
            429 === t.code && (r = !1);
    c.Z.dispatch({
        type: 'BILLING_PAYMENT_SOURCE_CREATE_FAIL',
        error: t
    });
    let o = Error('string' == typeof e ? e : t.message);
    return r && (0, g.q2)(o, { extra: n }), o;
}
async function Z(e, t) {
    if (null == e || null == t) throw V('Stripe or elements not loaded');
    let n = t.getElement(r.CardNumberElement);
    if (null == n) throw V('Unable to load card elements from Stripe');
    let { token: i, error: a } = await e.createToken(n);
    if (null != a) throw V(a);
    if (null == i) throw V('token not available with successful stripe call');
    return i.id;
}
async function H(e, t, n, r) {
    if (null == e) throw V('Stripe not loaded');
    if (null == t) throw V('Bank required for EPS');
    let { email: i, name: a, line1: o, line2: s, city: l, state: u, postalCode: d, country: f } = n;
    if (null == a) throw V('Name required for EPS');
    c.Z.dispatch({ type: 'BILLING_PAYMENT_SOURCE_CREATE_START' });
    let _ = await j(n),
        { paymentMethod: p, error: h } = await e.createPaymentMethod({
            type: 'eps',
            eps: { bank: t },
            billing_details: {
                address: {
                    line1: o,
                    line2: s,
                    city: l,
                    state: u,
                    postal_code: d,
                    country: f
                },
                name: a,
                email: i
            }
        });
    if (null != h) throw V(h);
    if (null == p) throw V('paymentMethod not available with successful stripe call');
    return G(O.gg$.STRIPE, p.id, n, {
        billingAddressToken: _,
        analyticsLocation: r,
        bank: t
    });
}
async function Y(e, t, n) {
    if (null == e) throw V('Stripe not loaded');
    let { email: r, name: i, line1: a, line2: o, city: s, state: l, postalCode: u, country: d } = t;
    if (null == i) throw V('Name required for iDEAL');
    c.Z.dispatch({ type: 'BILLING_PAYMENT_SOURCE_CREATE_START' });
    let f = await j(t),
        { paymentMethod: _, error: p } = await e.createPaymentMethod({
            type: 'ideal',
            ideal: {},
            billing_details: {
                address: {
                    line1: a,
                    line2: o,
                    city: s,
                    state: l,
                    postal_code: u,
                    country: d
                },
                name: i,
                email: r
            }
        });
    if (null != p) throw V(p);
    if (null == _) throw V('paymentMethod not available with successful stripe call');
    return G(O.gg$.STRIPE, _.id, t, {
        billingAddressToken: f,
        analyticsLocation: n
    });
}
async function W(e, t, n, r) {
    if (null == e) throw V('Stripe not loaded');
    let { email: i, name: a, line1: o, line2: s, city: l, state: u, postalCode: d, country: f } = n;
    if (null == i) throw V('Email required for Przelewy24');
    c.Z.dispatch({ type: 'BILLING_PAYMENT_SOURCE_CREATE_START' });
    let _ = await j(n),
        p = t.p24Bank,
        { paymentMethod: h, error: m } = await e.createPaymentMethod({
            type: 'p24',
            p24: { bank: p },
            billing_details: {
                address: {
                    line1: o,
                    line2: s,
                    city: l,
                    state: u,
                    postal_code: d,
                    country: f
                },
                name: a,
                email: i
            }
        });
    if (null != m) throw V(m);
    if (null == h) throw V('paymentMethod not available with successful stripe call');
    return G(O.gg$.STRIPE, h.id, n, {
        billingAddressToken: _,
        analyticsLocation: r,
        bank: p
    });
}
async function K(e, t, n, r) {
    if (null == e || null == t) throw V('Stripe or token not loaded');
    c.Z.dispatch({ type: 'BILLING_PAYMENT_SOURCE_CREATE_START' });
    let i = null;
    try {
        i = await k();
    } catch (e) {
        throw V(e);
    }
    let { name: o, line1: s, line2: l, city: u, state: d, postalCode: f, country: _ } = n,
        p = await j(n),
        { setupIntent: h, error: m } = await e.confirmCardSetup(i, {
            payment_method: {
                card: { token: t },
                billing_details: {
                    address: {
                        line1: s,
                        line2: l,
                        city: u,
                        state: d,
                        postal_code: f,
                        country: _
                    },
                    name: o
                }
            }
        });
    if (null != m) throw V(m);
    if ((null == h ? void 0 : h.payment_method) == null) throw V('setupIntent.payment_method not available with successful stripe call');
    return (
        a()('string' == typeof h.payment_method, 'setupIntent.payment_method expanded not supported'),
        G(O.gg$.STRIPE, h.payment_method, n, {
            billingAddressToken: p,
            analyticsLocation: r
        })
    );
}
function z(e, t, n) {
    let { token: r, billingAddressInfo: i } = y.az(e);
    return G(O.gg$.STRIPE, r, null != t ? t : i, { analyticsLocation: n });
}
function q(e, t, n) {
    return G(O.gg$.BRAINTREE, e, t, { analyticsLocation: n });
}
async function X(e, t, n, r) {
    if (null == e) throw V('Stripe not loaded');
    let i = await j(t),
        { name: o, line1: s, line2: l, city: c, state: u, postalCode: d, country: f } = t,
        _ = T.aV.get(n);
    a()(null != _, 'unsupported payment method type');
    let { paymentMethod: p, error: h } = await e.createPaymentMethod({
        type: _,
        billing_details: {
            address: {
                line1: s,
                line2: l,
                city: c,
                state: u,
                postal_code: d,
                country: f
            },
            name: o
        }
    });
    if (null != h) throw V(h);
    if (null == p) throw V('stripePaymentMethod not available with successful stripe call');
    return G(O.gg$.STRIPE, p.id, t, {
        billingAddressToken: i,
        analyticsLocation: r
    });
}
async function Q(e, t, n) {
    let r = await j(e),
        i = { type: T.QL.get(t) };
    return G(O.gg$.ADYEN, JSON.stringify(i), e, {
        billingAddressToken: r,
        analyticsLocation: n
    });
}
async function J(e, t, n, r) {
    var i;
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = await j(e),
        s = N({ type: T.QL.get(t) }, null != (i = null == r ? void 0 : r.paymentMethod) ? i : {}),
        f = await eC(t),
        _ = (0, l.K0)() + O.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, null != f ? f : '', 'success');
    try {
        return {
            paymentSource: await G(
                O.gg$.ADYEN,
                JSON.stringify(s),
                e,
                {
                    billingAddressToken: o,
                    analyticsLocation: n,
                    returnUrl: _
                },
                a
            ),
            redirectConfirmation: !1
        };
    } catch (t) {
        if (t.code !== d.SM.CONFIRMATION_REQUIRED)
            throw (
                (c.Z.dispatch({
                    type: 'BILLING_PAYMENT_SOURCE_CREATE_FAIL',
                    error: new u.HF('Unable to create payment source token: code: '.concat(null == t ? void 0 : t.code, ' message: ').concat(null == t ? void 0 : t.message), u.HF.ErrorCodes.UNKNOWN)
                }),
                t)
            );
        let e = t.fields.adyen_redirect_url;
        if (null == e) throw V('redirect url cannot be null on a redirect for adyen.');
        return eh(e), { redirectConfirmation: !0 };
    }
}
async function $(e) {
    if (O.ldS.has(e.type)) return null;
    let t = await y.d2();
    if (null == t) throw new u.HF('Stripe not loaded', u.HF.ErrorCodes.UNKNOWN);
    let { email: n, name: r, line1: i, line2: o, city: s, state: l, postalCode: c, country: d } = e.billingAddress,
        f = {
            billing_details: {
                address: {
                    line1: i,
                    line2: o,
                    city: s,
                    state: l,
                    postal_code: c,
                    country: d
                },
                name: r
            }
        };
    switch (e.type) {
        case T.He.GIROPAY:
            f.type = 'giropay';
            break;
        case T.He.SOFORT:
            (f.type = 'sofort'), (f.sofort = { country: null != d ? d : '' }), (f.billing_details.email = n);
            break;
        case T.He.BANCONTACT:
            f.type = 'bancontact';
            break;
        case T.He.IDEAL:
            (f.type = 'ideal'), (f.ideal = { bank: e.bank });
            break;
        case T.He.PRZELEWY24:
            if (null == e.bank) throw new u.HF('p24 missing bank information', u.HF.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (f.type = 'p24'), (f.p24 = { bank: e.bank }), (f.billing_details.email = e.email);
            break;
        case T.He.EPS:
            if (null == e.bank) throw new u.HF('EPS missing bank information', u.HF.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (f.type = 'eps'), (f.eps = { bank: e.bank });
    }
    a()(null != f.type, 'unsupported payment method type');
    let { paymentMethod: _, error: p } = await t.createPaymentMethod(f);
    if (null != p || null == _) throw new u.HF('Unable to create payment source token: code: '.concat(null == p ? void 0 : p.code, ' message: ').concat(null == p ? void 0 : p.message), u.HF.ErrorCodes.UNKNOWN);
    return _.id;
}
function ee(e) {
    return O.ldS.has(e.type) ? null : T.QL.has(e.type) ? U(e) : $(e);
}
async function et() {
    if (!p.Z.isPaymentSourceFetching)
        try {
            let e = l.tn.get({
                url: O.ANM.BILLING_PAYMENT_SOURCES,
                oldFormErrors: !0,
                rejectWithError: !1
            });
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'BILLING_PAYMENT_SOURCES_FETCH_START',
                    request: e
                })
            );
            let t = await e;
            return (
                c.Z.dispatch({
                    type: 'BILLING_PAYMENT_SOURCES_FETCH_SUCCESS',
                    paymentSources: t.body
                }),
                t
            );
        } catch (e) {
            throw (c.Z.dispatch({ type: 'BILLING_PAYMENT_SOURCES_FETCH_FAIL' }), e);
        }
}
async function en(e) {
    try {
        let t = l.tn.get({
                url: O.ANM.BILLING_PAYMENT_SOURCE(e),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            n = await t,
            r = f.ZP.createFromServer(n.body);
        return (
            c.Z.dispatch({
                type: 'BILLING_PAYMENT_SOURCE_FETCH_SUCCESS',
                paymentSource: r
            }),
            n
        );
    } catch (e) {
        throw (c.Z.dispatch({ type: 'BILLING_PAYMENT_SOURCE_FETCH_FAIL' }), e);
    }
}
async function er(e) {
    let t = await l.tn.get({
        url: O.ANM.BILLING_PAYMENT(e),
        rejectWithError: !0
    });
    return (
        c.Z.dispatch({
            type: 'BILLING_PAYMENT_FETCH_SUCCESS',
            payment: t.body
        }),
        t
    );
}
async function ei() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
        t = arguments.length > 1 ? arguments[1] : void 0;
    c.Z.dispatch({ type: 'BILLING_PAYMENTS_FETCH_START' });
    try {
        let n = await l.tn.get({
            url: O.ANM.BILLING_PAYMENTS,
            query: {
                limit: e,
                before: t
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            c.Z.dispatch({
                type: 'BILLING_PAYMENTS_FETCH_SUCCESS',
                payments: n.body
            }),
            n
        );
    } catch (e) {
        throw (c.Z.dispatch({ type: 'BILLING_PAYMENTS_FETCH_FAIL' }), e);
    }
}
async function ea() {
    c.Z.wait(() => {
        c.Z.dispatch({ type: 'BILLING_SUBSCRIPTION_FETCH_START' });
    });
    try {
        let e = v.Zx.ADD_PERKS_IF_DETECTED,
            t = h.ZP.getLastLazyPerkSync();
        (null == t || s()().diff(t, 'hours') >= 1) && ((e = v.Zx.FULL_RESYNC), (t = s()()));
        let n = await l.tn.get({
            url: O.ANM.BILLING_SUBSCRIPTIONS,
            oldFormErrors: !0,
            rejectWithError: !1,
            query: { sync_level: e }
        });
        if (null == n.body) throw new u.HF('response body is null, response: '.concat(JSON.stringify(n)), n.status);
        return (
            c.Z.dispatch({
                type: 'BILLING_SUBSCRIPTION_FETCH_SUCCESS',
                subscriptions: n.body,
                lastLazyPerkSync: t
            }),
            n
        );
    } catch (e) {
        throw (c.Z.dispatch({ type: 'BILLING_SUBSCRIPTION_FETCH_FAIL' }), e);
    }
}
async function eo() {
    try {
        let e = await l.tn.get({
            url: O.ANM.BILLING_NITRO_AFFINITY,
            rejectWithError: !0
        });
        c.Z.dispatch({
            type: 'BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED',
            res: e.body.map((e) => new _.Z(e))
        });
    } finally {
        c.Z.dispatch({ type: 'BILLING_NITRO_AFFINITY_FETCHED' });
    }
}
async function es() {
    c.Z.wait(() => {
        c.Z.dispatch({ type: 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START' });
    });
    try {
        let e = await l.tn.get({
            url: O.ANM.BILLING_SUBSCRIPTIONS,
            query: {
                include_inactive: !0,
                limit: 2,
                exclude_unpaid_statuses: !0,
                subscription_type: T.NY.PREMIUM
            },
            oldFormErrors: !0,
            rejectWithError: !0
        });
        return (
            e.ok
                ? (c.Z.dispatch({
                      type: 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS',
                      subscription: e.body.length > 0 ? e.body[0] : null
                  }),
                  c.Z.dispatch({
                      type: 'BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS',
                      subscription: e.body.length > 1 ? e.body[1] : null
                  }))
                : c.Z.dispatch({ type: 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL' }),
            e
        );
    } catch (e) {
        c.Z.dispatch({ type: 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL' });
    }
}
async function el(e) {
    let { items: t, paymentSource: n, trialId: r, code: i, currency: a, metadata: o, referralCode: s, loadId: f, expectedInvoicePrice: _, expectedRenewalPrice: p } = e;
    c.Z.dispatch({ type: 'BILLING_SUBSCRIPTION_UPDATE_START' }), (t = (0, E.gB)(t));
    let h = null;
    if (null != n && T.QL.has(n.type)) {
        let e = await eC(n.type);
        h = (0, l.K0)() + O.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : '', 'success');
    }
    try {
        let e = await l.tn.post({
            url: O.ANM.BILLING_SUBSCRIPTIONS,
            body: {
                items: t.map((e) => {
                    let { planId: t, quantity: n } = e;
                    return {
                        plan_id: t,
                        quantity: n
                    };
                }),
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await ee(n) : null,
                trial_id: r,
                return_url: h,
                code: i,
                currency: null != n ? a : T.pK.USD,
                metadata: o,
                gateway_checkout_context: await (0, g.cn)(n),
                purchase_token: (0, b.d)(),
                referral_code: s,
                load_id: f,
                expected_invoice_price: _,
                expected_renewal_price: p
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            c.Z.dispatch({
                type: 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS',
                subscription: e.body
            }),
            {
                subscription: e.body,
                redirectConfirmation: !1
            }
        );
    } catch (t) {
        let e = t instanceof u.HF ? t : new u.HF(t);
        if (
            (c.Z.dispatch({
                type: 'BILLING_SUBSCRIPTION_UPDATE_FAIL',
                error: e
            }),
            e.code !== d.SM.CONFIRMATION_REQUIRED)
        )
            throw e;
        if (!t.body.payment_id) throw V('payment id cannot be null on redirected confirmations.');
        return eu(t.body, n);
    }
}
async function ec(e, t, n, r) {
    let i = null;
    if (null != n && T.Uk.has(n.type)) {
        let e = await eC(n.type);
        i = (0, l.K0)() + O.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : '', 'success');
    }
    try {
        let a = await l.tn.post({
            url: O.ANM.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
            body: {
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await ee(n) : null,
                return_url: i,
                currency: r,
                purchase_token: (0, b.d)()
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            c.Z.dispatch({
                type: 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS',
                subscription: a.body
            }),
            {
                subscription: a.body,
                redirectConfirmation: O.j8d.has(n.type)
            }
        );
    } catch (t) {
        let e = t instanceof u.HF ? t : new u.HF(t);
        if (e.code !== d.SM.CONFIRMATION_REQUIRED)
            throw (
                (c.Z.dispatch({
                    type: 'BILLING_SUBSCRIPTION_UPDATE_FAIL',
                    error: e
                }),
                e)
            );
        if (!t.body.payment_id) throw V('payment id cannot be null on redirected confirmations.');
        return eu(t.body, n);
    }
}
function eu(e, t) {
    return null != t && T.QL.has(t.type) ? ed(e.adyen_redirect_url, t) : ef(e.payment_id, t);
}
async function ed(e, t) {
    if (null == e) throw V('redirect url cannot be null on a redirect for adyen.');
    if (null == t) throw V('Payment source cannot be null on a redirect.');
    return O.j8d.has(t.type)
        ? (eh(e),
          {
              redirectConfirmation: !0,
              redirectURL: e
          })
        : {
              redirectConfirmation: !1,
              redirectURL: e
          };
}
async function ef(e, t) {
    let n = await y.d2();
    if (null == t) throw V('Payment source cannot be null on a redirect.');
    let { clientSecret: r, paymentMethodId: i } = await M(e);
    if (null == n) throw V('Stripe cannot be null on a redirect.');
    if (O.j8d.has(t.type)) {
        let e = await eC(t.type);
        return (
            eh(
                await eg({
                    stripe: n,
                    paymentSource: t,
                    clientSecret: r,
                    state: e
                })
            ),
            { redirectConfirmation: !0 }
        );
    }
    return (
        await em({
            stripe: n,
            clientSecret: r,
            paymentMethodId: i,
            paymentSource: t
        }),
        { redirectConfirmation: !1 }
    );
}
async function e_(e) {
    var t;
    let n = await er(e);
    if ((null == n ? void 0 : n.body) == null) throw V('could not fetch payment');
    let r = f.ZP.createFromServer(n.body.payment_source);
    if (!O.j8d.has(r.type)) throw V('unsupported redirect payment source');
    if ((null == n || null == (t = n.body) ? void 0 : t.status) === T.Py.FAILED) throw V('payment failed');
    return r.paymentGateway !== O.gg$.STRIPE || ep(e);
}
async function ep(e) {
    let t = await y.d2();
    if (null == t) throw V('Stripe has not loaded.');
    if (null == e) throw V('payment intent id cannot be null.');
    let n = await x(e),
        { paymentIntent: r, error: i } = await t.retrievePaymentIntent(n);
    if (null != i) throw V(i);
    if (null == r) throw V('paymentIntent not available with successful stripe call');
    if (null != r.last_payment_error) throw V('unable to retrieve payment intent '.concat(r.last_payment_error));
    return !0;
}
function eh(e) {
    window.open(e);
}
async function em(e) {
    let t,
        { stripe: n, paymentSource: r, paymentMethodId: i, clientSecret: a } = e,
        o = {};
    if (r.type === T.He.SEPA_DEBIT) {
        if (null == i) throw V('On a sepa payment payment method id cannot be null');
        (o.payment_method = i), (t = n.confirmSepaDebitPayment);
    } else throw V('Unsupported redirected payment source type.');
    let { paymentIntent: s, error: l } = await t(a, o);
    if (null != l) throw V(l);
    if (null == s) throw V('paymentIntent not available with successful stripe call');
}
async function eg(e) {
    var t, n;
    let r,
        { stripe: i, paymentSource: a, clientSecret: o, state: s } = e,
        c = {};
    switch (a.type) {
        case T.He.GIROPAY:
            (c = { billing_details: { name: a.billingAddress.name } }), (r = i.confirmGiropayPayment);
            break;
        case T.He.BANCONTACT:
            (c = {
                billing_details: {
                    name: a.billingAddress.name,
                    email: a.email
                }
            }),
                (r = i.confirmBancontactPayment);
            break;
        case T.He.SOFORT:
            (c = {
                sofort: { country: a.billingAddress.country },
                billing_details: {
                    name: a.billingAddress.name,
                    email: a.email
                }
            }),
                (r = i.confirmSofortPayment);
            break;
        case T.He.PRZELEWY24:
            if (null == a.bank) throw V('PaymentSource ('.concat(a.id, ') missing bank info for p24.'));
            (c = {
                p24: { bank: a.bank },
                billing_details: {
                    name: a.billingAddress.name,
                    email: a.email
                }
            }),
                (r = i.confirmP24Payment);
            break;
        case T.He.EPS:
            if (null == a.bank) throw V('PaymentSource ('.concat(a.id, ') missing bank info for EPS.'));
            (c = {
                eps: { bank: a.bank },
                billing_details: { name: a.billingAddress.name }
            }),
                (r = i.confirmEpsPayment);
            break;
        case T.He.IDEAL:
            (c = {
                ideal: {},
                billing_details: { name: a.billingAddress.name }
            }),
                null != a.bank && (c.ideal = { bank: a.bank }),
                (r = i.confirmIdealPayment);
            break;
        default:
            throw V('Unsupported redirected payment source type.');
    }
    let { paymentIntent: u, error: d } = await r(
        o,
        {
            payment_method: c,
            return_url: (0, l.K0)() + O.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(a.type, null != s ? s : '', 'success')
        },
        { handleActions: !1 }
    );
    if (null != d) throw V(d);
    if (null == u) throw V('paymentIntent not available with successful api call');
    if ((null == (n = u.next_action) || null == (t = n.redirect_to_url) ? void 0 : t.url) == null) throw V('confirm payment did not return a redirect url');
    return u.next_action.redirect_to_url.url;
}
async function eE(e, t, n) {
    c.Z.dispatch({ type: 'BILLING_SUBSCRIPTION_CANCEL_START' });
    try {
        let r = await l.tn.del({
            url: O.ANM.BILLING_SUBSCRIPTION(e),
            query: {
                location: n,
                location_stack: t
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return c.Z.dispatch({ type: 'BILLING_SUBSCRIPTION_CANCEL_SUCCESS' }), r;
    } catch (t) {
        let e = new u.HF(t);
        throw (
            (c.Z.dispatch({
                type: 'BILLING_SUBSCRIPTION_CANCEL_FAIL',
                error: e
            }),
            e)
        );
    }
}
function eb(e, t) {
    return ey(
        e,
        { items: e.items },
        {
            amount: 0,
            currency: e.currency
        },
        (0, E.UX)(e.items, e.currency, e.paymentSourceId),
        t
    );
}
async function ey(e, t, n, r, i, a, o) {
    if (null != t.paymentSource && null == t.currency) throw Error('Currency must be specified with payment source');
    c.Z.dispatch({ type: 'BILLING_SUBSCRIPTION_UPDATE_START' });
    try {
        var s;
        let u = {
            status: t.status,
            payment_source_id: null == (s = t.paymentSource) ? void 0 : s.id,
            payment_source_token: null != t.paymentSource ? await ee(t.paymentSource) : null,
            currency: t.currency,
            gateway_checkout_context: await (0, g.cn)(t.paymentSource),
            load_id: o,
            pause_duration: t.pauseDuration,
            purchase_token: (0, b.d)(),
            expected_invoice_price: n,
            expected_renewal_price: r
        };
        if (null != t.paymentSource && T.QL.has(t.paymentSource.type)) {
            let e = await eC(t.paymentSource.type);
            u.return_url = (0, l.K0)() + O.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, null != e ? e : '', 'success');
        }
        null != t.items &&
            (u.items = (0, E.gB)(t.items).map((e) => {
                var { planId: t } = e,
                    n = P(e, ['planId']);
                return R(N({}, n), { plan_id: t });
            }));
        let d = await l.tn.patch({
            url: O.ANM.BILLING_SUBSCRIPTION(e.id),
            query: {
                location: a,
                location_stack: i
            },
            body: u,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            c.Z.dispatch({
                type: 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS',
                subscription: d.body
            }),
            {
                subscription: d.body,
                redirectConfirmation: !1
            }
        );
    } catch (n) {
        let e = n instanceof u.HF ? n : new u.HF(n);
        if (e.code !== d.SM.CONFIRMATION_REQUIRED)
            throw (
                (c.Z.dispatch({
                    type: 'BILLING_SUBSCRIPTION_UPDATE_FAIL',
                    error: e
                }),
                e)
            );
        if (!n.body.payment_id) throw V('payment id cannot be null on redirected confirmations.');
        return eu(n.body, t.paymentSource);
    }
}
function eO(e, t, n, r, i) {
    return ey(
        e,
        {
            status: O.O0b.ACTIVE,
            paymentSource: n,
            currency: r
        },
        {
            amount: 0,
            currency: e.currency
        },
        (0, E.UX)(e.items, e.currency, null == n ? void 0 : n.id),
        t,
        i
    );
}
function ev(e, t, n, r, i, a) {
    let o = (0, E.XK)(e, t);
    return ey(
        e,
        {
            status: O.O0b.ACTIVE,
            items: o
        },
        n,
        r,
        i,
        a
    );
}
function eI(e, t, n, r, i) {
    return ey(
        e,
        { currency: t },
        {
            amount: 0,
            currency: t.toLowerCase()
        },
        n,
        r,
        i
    );
}
function eT(e, t, n, r, i, a) {
    return ey(
        e,
        {
            paymentSource: t,
            currency: n
        },
        {
            amount: 0,
            currency: n.toLowerCase()
        },
        r,
        i,
        a
    );
}
function eS() {
    c.Z.dispatch({ type: 'BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR' });
}
function eA() {
    c.Z.dispatch({ type: 'BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR' });
}
async function eN(e) {
    await l.tn.post({
        url: O.ANM.BILLING_PAYMENTS_VOID(e),
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
async function eC(e) {
    let {
        body: { state: t }
    } = await l.tn.post({
        url: O.ANM.BILLING_POPUP_BRIDGE(e),
        oldFormErrors: !0,
        rejectWithError: !0
    });
    return (
        c.Z.dispatch({
            type: 'BILLING_POPUP_BRIDGE_STATE_UPDATE',
            state: t,
            paymentSourceType: e
        }),
        t
    );
}
function eR(e) {
    let { paymentSourceType: t, state: n, path: r, query: i, insecure: a } = e;
    return (
        c.Z.dispatch({
            type: 'BILLING_POPUP_BRIDGE_CALLBACK_START',
            paymentSourceType: t
        }),
        l.tn
            .post({
                url: O.ANM.BILLING_POPUP_BRIDGE_CALLBACK(t),
                body: {
                    state: n,
                    path: r,
                    query: i,
                    insecure: a
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => (
                    c.Z.dispatch({
                        type: 'BILLING_POPUP_BRIDGE_CALLBACK_END',
                        paymentSourceType: t
                    }),
                    e
                )
            )
    );
}
async function eP() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != p.Z.ipCountryCodeRequest) return p.Z.ipCountryCodeRequest;
    try {
        let e = l.tn.get({
            url: O.ANM.BILLING_COUNTRY_CODE,
            rejectWithError: !1
        });
        c.Z.wait(() =>
            c.Z.dispatch({
                type: 'BILLING_IP_COUNTRY_CODE_FETCH_START',
                request: e
            })
        );
        let t = await e,
            n = t.body.country_code;
        return (
            c.Z.dispatch({
                type: 'BILLING_SET_IP_COUNTRY_CODE',
                countryCode: n
            }),
            t
        );
    } catch (e) {
        return c.Z.dispatch({ type: 'BILLING_IP_COUNTRY_CODE_FAILURE' }), e;
    }
}
function ew() {
    c.Z.dispatch({ type: 'RESET_PAYMENT_ID' });
}
function eD() {
    c.Z.dispatch({ type: 'BILLING_SUBSCRIPTION_RESET' });
}
function eL(e) {
    c.Z.dispatch({
        type: 'USER_PAYMENT_BROWSER_CHECKOUT_STARTED',
        loadId: e
    });
}
