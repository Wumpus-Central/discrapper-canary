"use strict";
n.d(t, {
    $Q: () => _,
    Gq: () => c,
    IN: () => h,
    Kf: () => u,
    RI: () => m,
    Vh: () => f,
    cG: () => p,
    qY: () => d,
    zf: () => E,
});
var r = n(323125),
    i = n(562465),
    s = n(830215),
    a = n(734057),
    o = n(309010),
    l = n(652215);
function u(e) {
    return i.Bo.post({
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
            authorize: r,
            clientId: s,
            scopes: u,
            responseType: c,
            redirectUri: d,
            codeChallenge: _,
            codeChallengeMethod: f,
            state: p,
            permissions: h,
            guildId: E,
            channelId: m,
            integrationType: g,
            nonce: A,
        } = e;
    return (
        await i.Bo.post({
            url: l.Rsh.OAUTH2_AUTHORIZE,
            query: {
                client_id: s,
                response_type: c,
                redirect_uri: d,
                code_challenge: _,
                code_challenge_method: f,
                scope: u.join(" "),
                state: p,
                nonce: A,
            },
            body: {
                guild_id: E,
                webhook_channel_id: null != E && null != m ? m : void 0,
                channel_id: null == E && null != m ? m : void 0,
                permissions: h,
                authorize: r,
                integration_type: g,
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
        responseType: r,
        redirectUri: s,
        codeChallenge: a,
        codeChallengeMethod: o,
        state: u,
        integrationType: c,
        nonce: d,
        signal: _,
    } = e;
    return (
        await i.Bo.get({
            url: l.Rsh.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: r,
                redirect_uri: s,
                code_challenge: a,
                code_challenge_method: o,
                scope: n.join(" "),
                state: u,
                integration_type: c,
                nonce: d,
            },
            signal: _,
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body;
}
async function _(e) {
    let { body: t } = await i.Bo.get({
        url: l.Rsh.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: { guild_id: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    return t;
}
function f(e, t) {
    s.A.logout(t, (0, r.T2)(e.pathname + e.search, !1));
}
async function p(e) {
    return await i.Bo.post({ url: l.Rsh.OAUTH2_DEVICE_VERIFY, body: { user_code: e }, rejectWithError: !1 });
}
async function h(e, t) {
    return await i.Bo.post({ url: l.Rsh.OAUTH2_DEVICE_FINISH, body: { user_code: e, result: t }, rejectWithError: !1 });
}
async function E(e, t, n) {
    return await i.Bo.post({
        url: l.Rsh.OAUTH2_DEVICE_FINISH,
        body: { user_code: e, result: "two_way_link_error", error_code: t, error_source: n },
        rejectWithError: !1,
    });
}
async function m(e) {
    let { applicationId: t, onSuccess: n, onError: r } = e;
    try {
        await i.Bo.post({
            url: l.Rsh.OAUTH2_ACCOUNT_LINKING_ACHIEVEMENT,
            body: { application_id: t },
            rejectWithError: !0,
        }),
            n?.();
    } catch (e) {
        r?.(e);
    }
}
