n.d(t, {
    $Q: () => c,
    Gq: () => E,
    IN: () => A,
    Kf: () => o,
    RI: () => S,
    Vh: () => u,
    cG: () => I,
    qY: () => d,
    zf: () => T,
});
var i = n(323125),
    r = n(636537),
    a = n(830215),
    s = n(734057),
    _ = n(309010),
    l = n(652215);
function o(e) {
    return r.Bo.post({
        url: l.Rsh.OAUTH2_WHITELIST_ACCEPT,
        query: { token: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
async function E(e) {
    let t,
        n,
        {
            authorize: i,
            clientId: a,
            scopes: o,
            responseType: E,
            redirectUri: d,
            codeChallenge: c,
            codeChallengeMethod: u,
            state: I,
            permissions: A,
            guildId: T,
            channelId: S,
            integrationType: N,
            nonce: O,
        } = e;
    return (
        await r.Bo.post({
            url: l.Rsh.OAUTH2_AUTHORIZE,
            query: {
                client_id: a,
                response_type: E,
                redirect_uri: d,
                code_challenge: c,
                code_challenge_method: u,
                scope: o.join(" "),
                state: I,
                nonce: O,
            },
            body: {
                guild_id: T,
                webhook_channel_id: null != T && null != S ? S : void 0,
                channel_id: null == T && null != S ? S : void 0,
                permissions: A,
                authorize: i,
                integration_type: N,
                location_context:
                    ((t = _.A.getChannelId()),
                    (n = s.A.getBasicChannel(t)),
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
        redirectUri: a,
        codeChallenge: s,
        codeChallengeMethod: _,
        state: o,
        integrationType: E,
        nonce: d,
        signal: c,
    } = e;
    return (
        await r.Bo.get({
            url: l.Rsh.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: i,
                redirect_uri: a,
                code_challenge: s,
                code_challenge_method: _,
                scope: n.join(" "),
                state: o,
                integration_type: E,
                nonce: d,
            },
            signal: c,
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body;
}
async function c(e) {
    let { body: t } = await r.Bo.get({
        url: l.Rsh.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: { guild_id: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    return t;
}
function u(e, t) {
    a.A.logout(t, (0, i.T2)(e.pathname + e.search, !1));
}
async function I(e) {
    return await r.Bo.post({ url: l.Rsh.OAUTH2_DEVICE_VERIFY, body: { user_code: e }, rejectWithError: !1 });
}
async function A(e, t) {
    return await r.Bo.post({ url: l.Rsh.OAUTH2_DEVICE_FINISH, body: { user_code: e, result: t }, rejectWithError: !1 });
}
async function T(e, t, n) {
    return await r.Bo.post({
        url: l.Rsh.OAUTH2_DEVICE_FINISH,
        body: { user_code: e, result: "two_way_link_error", error_code: t, error_source: n },
        rejectWithError: !1,
    });
}
async function S(e) {
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
