"use strict";
n.d(t, {
    $Q: () => _,
    Gq: () => c,
    IN: () => p,
    Kf: () => u,
    RI: () => m,
    Vh: () => f,
    cG: () => h,
    qY: () => d,
    zf: () => E,
});
var i = n(323125),
    r = n(636537),
    s = n(830215),
    a = n(734057),
    o = n(309010),
    l = n(652215);
function u(e) {
    return r.Bo.post({
        url: l.Rsh.OAUTH2_WHITELIST_ACCEPT,
        query: { token: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
async function c(e) {
    let t,
        n,
        {
            authorize: i,
            clientId: s,
            scopes: u,
            responseType: c,
            redirectUri: d,
            codeChallenge: _,
            codeChallengeMethod: f,
            state: h,
            permissions: p,
            guildId: E,
            channelId: m,
            integrationType: g,
            connectedAccountProvider: A,
            nonce: I,
        } = e;
    return (
        await r.Bo.post({
            url: l.Rsh.OAUTH2_AUTHORIZE,
            query: {
                client_id: s,
                response_type: c,
                redirect_uri: d,
                code_challenge: _,
                code_challenge_method: f,
                scope: u.join(" "),
                state: h,
                nonce: I,
            },
            body: {
                guild_id: E,
                webhook_channel_id: null != E && null != m ? m : void 0,
                channel_id: null == E && null != m ? m : void 0,
                permissions: p,
                authorize: i,
                integration_type: g,
                connected_account_provider: A,
                location_context:
                    ((t = o.A.getChannelId()),
                    (n = a.A.getBasicChannel(t)),
                    {
                        guild_id: n?.guild_id ?? "10000",
                        channel_id: n?.id ?? "10000",
                        channel_type: n?.type ?? l.rbe.UNKNOWN,
                    }),
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body;
}
async function d(e) {
    let {
        clientId: t,
        scopes: n,
        responseType: i,
        redirectUri: s,
        codeChallenge: a,
        codeChallengeMethod: o,
        state: u,
        integrationType: c,
        connectedAccountProvider: d,
        nonce: _,
        signal: f,
    } = e;
    return (
        await r.Bo.get({
            url: l.Rsh.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: i,
                redirect_uri: s,
                code_challenge: a,
                code_challenge_method: o,
                scope: n.join(" "),
                state: u,
                integration_type: c,
                connected_account_provider: d,
                nonce: _,
            },
            signal: f,
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body;
}
async function _(e) {
    let { body: t } = await r.Bo.get({
        url: l.Rsh.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: { guild_id: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    return t;
}
function f(e, t) {
    s.A.logout(t, (0, i.T2)(e.pathname + e.search, !1));
}
async function h(e) {
    return await r.Bo.post({ url: l.Rsh.OAUTH2_DEVICE_VERIFY, body: { user_code: e }, rejectWithError: !1 });
}
async function p(e, t) {
    return await r.Bo.post({ url: l.Rsh.OAUTH2_DEVICE_FINISH, body: { user_code: e, result: t }, rejectWithError: !1 });
}
async function E(e, t, n) {
    return await r.Bo.post({
        url: l.Rsh.OAUTH2_DEVICE_FINISH,
        body: { user_code: e, result: "two_way_link_error", error_code: t, error_source: n },
        rejectWithError: !1,
    });
}
async function m(e) {
    let { applicationId: t, onSuccess: n, onError: i } = e;
    try {
        await r.Bo.post({
            url: l.Rsh.OAUTH2_ACCOUNT_LINKING_ACHIEVEMENT,
            body: { application_id: t },
            rejectWithError: !0,
        }),
            n?.();
    } catch (e) {
        i?.(e);
    }
}
