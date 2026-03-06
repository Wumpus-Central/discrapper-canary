"use strict";
n.d(t, { $Q: () => h, Gq: () => f, IN: () => g, Kf: () => _, Vh: () => m, cG: () => E, qY: () => p, zf: () => A });
var r = n(323125),
    i = n(562465),
    s = n(830215),
    a = n(734057),
    o = n(309010),
    l = n(652215);
let u = "10000",
    c = "10000";
function d() {
    let e = o.A.getChannelId(),
        t = a.A.getBasicChannel(e);
    return { guild_id: t?.guild_id ?? u, channel_id: t?.id ?? c, channel_type: t?.type ?? l.rbe.UNKNOWN };
}
function _(e) {
    return i.Bo.post({
        url: l.Rsh.OAUTH2_WHITELIST_ACCEPT,
        query: { token: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
async function f(e) {
    let {
        authorize: t,
        clientId: n,
        scopes: r,
        responseType: s,
        redirectUri: a,
        codeChallenge: o,
        codeChallengeMethod: u,
        state: c,
        permissions: _,
        guildId: f,
        channelId: p,
        integrationType: h,
        nonce: m,
    } = e;
    return (
        await i.Bo.post({
            url: l.Rsh.OAUTH2_AUTHORIZE,
            query: {
                client_id: n,
                response_type: s,
                redirect_uri: a,
                code_challenge: o,
                code_challenge_method: u,
                scope: r.join(" "),
                state: c,
                nonce: m,
            },
            body: {
                guild_id: f,
                webhook_channel_id: null != f && null != p ? p : void 0,
                channel_id: null == f && null != p ? p : void 0,
                permissions: _,
                authorize: t,
                integration_type: h,
                location_context: d(),
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body;
}
async function p(e) {
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
async function h(e) {
    let { body: t } = await i.Bo.get({
        url: l.Rsh.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: { guild_id: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    return t;
}
function m(e, t) {
    s.A.logout(t, (0, r.T2)(e.pathname + e.search, !1));
}
async function E(e) {
    return await i.Bo.post({ url: l.Rsh.OAUTH2_DEVICE_VERIFY, body: { user_code: e }, rejectWithError: !1 });
}
async function g(e, t) {
    return await i.Bo.post({ url: l.Rsh.OAUTH2_DEVICE_FINISH, body: { user_code: e, result: t }, rejectWithError: !1 });
}
async function A(e, t, n) {
    return await i.Bo.post({
        url: l.Rsh.OAUTH2_DEVICE_FINISH,
        body: { user_code: e, result: "two_way_link_error", error_code: t, error_source: n },
        rejectWithError: !1,
    });
}
