n.d(t, {
    L$: () => _,
    Sr: () => p,
    WQ: () => f,
    cT: () => d,
    d$: () => c,
    hL: () => u,
    us: () => l
});
var r = n(525769),
    i = n(544891),
    o = n(570140),
    a = n(573261),
    s = n(981631);
async function l() {
    return (
        await i.tn.post({
            url: s.ANM.WEBAUTHN_CONDITIONAL_UI_CHALLENGE,
            rejectWithError: !1
        })
    ).body;
}
async function c() {
    let { challenge: e, ticket: t } = (
        await i.tn.post({
            url: s.ANM.WEBAUTHN_PASSWORDLESS_CHALLENGE,
            rejectWithError: !1
        })
    ).body;
    return {
        challenge: e,
        ticket: t
    };
}
function u() {
    i.tn
        .get({
            url: s.ANM.MFA_WEBAUTHN_CREDENTIALS,
            rejectWithError: !0
        })
        .then((e) => {
            o.Z.dispatch({
                type: 'MFA_WEBAUTHN_CREDENTIALS_LOADED',
                credentials: e.body
            });
        });
}
function d(e) {
    i.tn
        .del({
            url: s.ANM.MFA_WEBAUTHN_CREDENTIAL(e.id),
            rejectWithError: !0
        })
        .then(() => {
            o.Z.dispatch({
                type: 'AUTHENTICATOR_DELETE',
                credential: e
            });
        });
}
async function f(e, t) {
    let n = await i.tn.patch({
        url: s.ANM.MFA_WEBAUTHN_CREDENTIAL(e),
        body: { name: t },
        rejectWithError: !1
    });
    o.Z.dispatch({
        type: 'AUTHENTICATOR_UPDATE',
        credential: n.body
    });
}
async function _() {
    let {
        body: { ticket: e, challenge: t }
    } = await i.tn.post({
        url: s.ANM.MFA_WEBAUTHN_CREDENTIALS,
        body: {},
        rejectWithError: !1
    });
    return {
        ticket: e,
        challenge: t
    };
}
async function p(e, t, n) {
    let i = await a.Z.post({
        url: s.ANM.MFA_WEBAUTHN_CREDENTIALS,
        body: {
            name: e,
            ticket: t,
            credential: n
        },
        trackedActionData: { event: r.a.WEBAUTHN_REGISTER },
        rejectWithError: !1
    });
    o.Z.dispatch({
        type: 'AUTHENTICATOR_CREATE',
        credential: i.body
    }),
        o.Z.dispatch({
            type: 'MFA_ENABLE_SUCCESS',
            codes: i.body.backup_codes
        });
}
