n.d(t, {
    Sr: () => E,
    WQ: () => m,
    cT: () => h,
    d$: () => _,
    ef: () => b,
    hL: () => p,
    startRegisterWebAuthnCredential: () => g,
    us: () => f,
    vg: () => y,
});
var r = n(525769),
    i = n(544891),
    a = n(570140),
    o = n(573261),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function f() {
    return (
        await i.tn.post({
            url: s.ANM.WEBAUTHN_CONDITIONAL_UI_CHALLENGE,
            headers: { authorization: "" },
            rejectWithError: !1,
        })
    ).body;
}
async function _() {
    let { challenge: e, ticket: t } = (
        await i.tn.post({
            url: s.ANM.WEBAUTHN_PASSWORDLESS_CHALLENGE,
            rejectWithError: !1,
        })
    ).body;
    return {
        challenge: e,
        ticket: t,
    };
}
function p() {
    i.tn
        .get({
            url: s.ANM.MFA_WEBAUTHN_CREDENTIALS,
            rejectWithError: !0,
        })
        .then((e) => {
            if (null != e.body) {
                let t = e.body.map((e) => {
                    let t = null == e.last_used ? null : new Date(e.last_used);
                    return d(c({}, e), { last_used: t });
                });
                a.Z.dispatch({
                    type: "MFA_WEBAUTHN_CREDENTIALS_LOADED",
                    credentials: t,
                });
            }
        });
}
function h(e) {
    i.tn
        .del({
            url: s.ANM.MFA_WEBAUTHN_CREDENTIAL(e.id),
            rejectWithError: !0,
        })
        .then(() => {
            a.Z.dispatch({
                type: "AUTHENTICATOR_DELETE",
                credential: e,
            });
        });
}
async function m(e, t) {
    let n = await i.tn.patch({
        url: s.ANM.MFA_WEBAUTHN_CREDENTIAL(e),
        body: { name: t },
        rejectWithError: !1,
    });
    if (null != n.body) {
        let e = n.body,
            t = null == e.last_used ? null : new Date(e.last_used),
            r = d(c({}, e), { last_used: t });
        a.Z.dispatch({
            type: "AUTHENTICATOR_UPDATE",
            credential: r,
        });
    }
}
async function g() {
    let {
        body: { ticket: e, challenge: t },
    } = await i.tn.post({
        url: s.ANM.MFA_WEBAUTHN_CREDENTIALS,
        body: {},
        rejectWithError: !1,
    });
    return {
        ticket: e,
        challenge: t,
    };
}
async function E(e, t, n) {
    let i = await o.Z.post({
        url: s.ANM.MFA_WEBAUTHN_CREDENTIALS,
        body: {
            name: e,
            ticket: t,
            credential: n,
        },
        trackedActionData: { event: r.a.WEBAUTHN_REGISTER },
        rejectWithError: !1,
    });
    a.Z.dispatch({
        type: "AUTHENTICATOR_CREATE",
        credential: i.body,
    }),
        a.Z.dispatch({
            type: "MFA_ENABLE_SUCCESS",
            codes: i.body.backup_codes,
        });
}
function b() {
    a.Z.dispatch({ type: "WEBAUTHN_TRIGGER_REGISTER" });
}
function y() {
    a.Z.dispatch({ type: "WEBAUTHN_CLEAR_REGISTER_TRIGGER" });
}
