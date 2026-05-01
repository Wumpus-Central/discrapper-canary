n.d(t, {
    $Q: () => E,
    Gq: () => c,
    IN: () => I,
    Kf: () => d,
    RI: () => h,
    Vh: () => u,
    cG: () => A,
    qY: () => _,
    zf: () => T,
});
var i = n(323125),
    a = n(636537),
    r = n(830215),
    s = n(734057),
    l = n(309010),
    o = n(652215);
function d(e) {
    return a.Bo.post({
        url: o.Rsh.OAUTH2_WHITELIST_ACCEPT,
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
            clientId: r,
            scopes: d,
            responseType: c,
            redirectUri: _,
            codeChallenge: E,
            codeChallengeMethod: u,
            state: A,
            permissions: I,
            guildId: T,
            channelId: h,
            integrationType: S,
            nonce: N,
        } = e;
    return (
        await a.Bo.post({
            url: o.Rsh.OAUTH2_AUTHORIZE,
            query: {
                client_id: r,
                response_type: c,
                redirect_uri: _,
                code_challenge: E,
                code_challenge_method: u,
                scope: d.join(" "),
                state: A,
                nonce: N,
            },
            body: {
                guild_id: T,
                webhook_channel_id: null != T && null != h ? h : void 0,
                channel_id: null == T && null != h ? h : void 0,
                permissions: I,
                authorize: i,
                integration_type: S,
                location_context:
                    ((t = l.A.getChannelId()),
                    (n = s.A.getBasicChannel(t)),
                    {
                        guild_id: n?.guild_id ?? "10000",
                        channel_id: n?.id ?? "10000",
                        channel_type: n?.type ?? o.rbe.UNKNOWN,
                    }),
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body;
}
async function _(e) {
    let {
        clientId: t,
        scopes: n,
        responseType: i,
        redirectUri: r,
        codeChallenge: s,
        codeChallengeMethod: l,
        state: d,
        integrationType: c,
        nonce: _,
        signal: E,
    } = e;
    return (
        await a.Bo.get({
            url: o.Rsh.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: i,
                redirect_uri: r,
                code_challenge: s,
                code_challenge_method: l,
                scope: n.join(" "),
                state: d,
                integration_type: c,
                nonce: _,
            },
            signal: E,
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body;
}
async function E(e) {
    let { body: t } = await a.Bo.get({
        url: o.Rsh.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: { guild_id: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    return t;
}
function u(e, t) {
    r.A.logout(t, (0, i.T2)(e.pathname + e.search, !1));
}
async function A(e) {
    return await a.Bo.post({ url: o.Rsh.OAUTH2_DEVICE_VERIFY, body: { user_code: e }, rejectWithError: !1 });
}
async function I(e, t) {
    return await a.Bo.post({ url: o.Rsh.OAUTH2_DEVICE_FINISH, body: { user_code: e, result: t }, rejectWithError: !1 });
}
async function T(e, t, n) {
    return await a.Bo.post({
        url: o.Rsh.OAUTH2_DEVICE_FINISH,
        body: { user_code: e, result: "two_way_link_error", error_code: t, error_source: n },
        rejectWithError: !1,
    });
}
async function h(e) {
    let { applicationId: t, onSuccess: n, onError: i } = e;
    try {
        await a.Bo.post({
            url: o.Rsh.OAUTH2_ACCOUNT_LINKING_ACHIEVEMENT,
            body: { application_id: t },
            rejectWithError: !0,
        }),
            n?.();
    } catch (e) {
        i?.(e);
    }
}
