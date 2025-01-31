n.d(t, {
    L$: () => _,
    Sr: () => p,
    WQ: () => f,
    cT: () => d,
    d$: () => u,
    hL: () => c,
    us: () => l
});
var i = n(525769),
    r = n(544891),
    a = n(570140),
    s = n(573261),
    o = n(981631);
async function l() {
    return (
        await r.tn.post({
            url: o.ANM.WEBAUTHN_CONDITIONAL_UI_CHALLENGE,
            rejectWithError: !1
        })
    ).body;
}
async function u() {
    let { challenge: e, ticket: t } = (
        await r.tn.post({
            url: o.ANM.WEBAUTHN_PASSWORDLESS_CHALLENGE,
            rejectWithError: !1
        })
    ).body;
    return {
        challenge: e,
        ticket: t
    };
}
function c() {
    r.tn
        .get({
            url: o.ANM.MFA_WEBAUTHN_CREDENTIALS,
            rejectWithError: !0
        })
        .then((e) => {
            a.Z.dispatch({
                type: 'MFA_WEBAUTHN_CREDENTIALS_LOADED',
                credentials: e.body
            });
        });
}
function d(e) {
    r.tn
        .del({
            url: o.ANM.MFA_WEBAUTHN_CREDENTIAL(e.id),
            rejectWithError: !0
        })
        .then(() => {
            a.Z.dispatch({
                type: 'AUTHENTICATOR_DELETE',
                credential: e
            });
        });
}
async function f(e, t) {
    let n = await r.tn.patch({
        url: o.ANM.MFA_WEBAUTHN_CREDENTIAL(e),
        body: { name: t },
        rejectWithError: !1
    });
    a.Z.dispatch({
        type: 'AUTHENTICATOR_UPDATE',
        credential: n.body
    });
}
async function _() {
    let {
        body: { ticket: e, challenge: t }
    } = await r.tn.post({
        url: o.ANM.MFA_WEBAUTHN_CREDENTIALS,
        body: {},
        rejectWithError: !1
    });
    return {
        ticket: e,
        challenge: t
    };
}
async function p(e, t, n) {
    let r = await s.Z.post({
        url: o.ANM.MFA_WEBAUTHN_CREDENTIALS,
        body: {
            name: e,
            ticket: t,
            credential: n
        },
        trackedActionData: { event: i.a.WEBAUTHN_REGISTER },
        rejectWithError: !1
    });
    a.Z.dispatch({
        type: 'AUTHENTICATOR_CREATE',
        credential: r.body
    }),
        a.Z.dispatch({
            type: 'MFA_ENABLE_SUCCESS',
            codes: r.body.backup_codes
        });
}
