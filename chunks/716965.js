n.d(t, {
    $Q: () => h,
    Gq: () => p,
    IN: () => E,
    Kf: () => f,
    Vh: () => m,
    cG: () => g,
    qY: () => _,
    zf: () => b,
}),
    n(747238);
var r = n(323125),
    i = n(562465),
    a = n(830215),
    s = n(734057),
    o = n(309010),
    l = n(652215);
let c = "10000",
    u = "10000";

function d() {
    var e, t, n;
    let r = o.A.getChannelId(),
        i = s.A.getBasicChannel(r);
    return {
        guild_id: null != (e = null == i ? void 0 : i.guild_id) ? e : c,
        channel_id: null != (t = null == i ? void 0 : i.id) ? t : u,
        channel_type: null != (n = null == i ? void 0 : i.type) ? n : l.rbe.UNKNOWN,
    };
}

function f(e) {
    return i.Bo.post({
        url: l.Rsh.OAUTH2_WHITELIST_ACCEPT,
        query: {
            token: e,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
async function p(e) {
    let {
        authorize: t,
        clientId: n,
        scopes: r,
        responseType: a,
        redirectUri: s,
        codeChallenge: o,
        codeChallengeMethod: c,
        state: u,
        permissions: f,
        guildId: p,
        channelId: _,
        integrationType: h,
        nonce: m,
        dmSettings: g,
    } = e;
    return (
        await i.Bo.post({
            url: l.Rsh.OAUTH2_AUTHORIZE,
            query: {
                client_id: n,
                response_type: a,
                redirect_uri: s,
                code_challenge: o,
                code_challenge_method: c,
                scope: r.join(" "),
                state: u,
                nonce: m,
            },
            body: {
                guild_id: p,
                webhook_channel_id: null != p && null != _ ? _ : void 0,
                channel_id: null == p && null != _ ? _ : void 0,
                permissions: f,
                authorize: t,
                integration_type: h,
                location_context: d(),
                dm_settings: {
                    allow_mobile_push: null == g ? void 0 : g.allowMobilePush,
                },
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
        responseType: r,
        redirectUri: a,
        codeChallenge: s,
        codeChallengeMethod: o,
        state: c,
        integrationType: u,
        nonce: d,
        signal: f,
    } = e;
    return (
        await i.Bo.get({
            url: l.Rsh.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: r,
                redirect_uri: a,
                code_challenge: s,
                code_challenge_method: o,
                scope: n.join(" "),
                state: c,
                integration_type: u,
                nonce: d,
            },
            signal: f,
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body;
}
async function h(e) {
    let { body: t } = await i.Bo.get({
        url: l.Rsh.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: {
            guild_id: e,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    return t;
}

function m(e, t) {
    a.A.logout(t, (0, r.T2)(e.pathname + e.search, !1));
}
async function g(e) {
    return await i.Bo.post({
        url: l.Rsh.OAUTH2_DEVICE_VERIFY,
        body: {
            user_code: e,
        },
        rejectWithError: !1,
    });
}
async function E(e, t) {
    return await i.Bo.post({
        url: l.Rsh.OAUTH2_DEVICE_FINISH,
        body: {
            user_code: e,
            result: t,
        },
        rejectWithError: !1,
    });
}
async function b(e, t, n) {
    return await i.Bo.post({
        url: l.Rsh.OAUTH2_DEVICE_FINISH,
        body: {
            user_code: e,
            result: "two_way_link_error",
            error_code: t,
            error_source: n,
        },
        rejectWithError: !1,
    });
}
