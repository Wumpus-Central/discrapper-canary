n.d(t, {
    Iq: () => _,
    UR: () => h,
    Ww: () => p,
    c$: () => m,
    g: () => f,
    i2: () => b,
    tR: () => E,
    tV: () => g
}),
    n(301563);
var r = n(860911),
    i = n(544891),
    o = n(893776),
    a = n(592125),
    s = n(944486),
    l = n(981631);
let c = '10000',
    u = '10000';
function d() {
    var e, t, n;
    let r = s.Z.getChannelId(),
        i = a.Z.getBasicChannel(r);
    return {
        guild_id: null != (e = null == i ? void 0 : i.guild_id) ? e : c,
        channel_id: null != (t = null == i ? void 0 : i.id) ? t : u,
        channel_type: null != (n = null == i ? void 0 : i.type) ? n : l.d4z.UNKNOWN
    };
}
function f(e) {
    return i.tn.post({
        url: l.ANM.OAUTH2_WHITELIST_ACCEPT,
        query: { token: e },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
async function _(e) {
    let { authorize: t, clientId: n, scopes: r, responseType: o, redirectUri: a, codeChallenge: s, codeChallengeMethod: c, state: u, permissions: f, guildId: _, channelId: p, integrationType: h, nonce: m } = e;
    return (
        await i.tn.post({
            url: l.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: n,
                response_type: o,
                redirect_uri: a,
                code_challenge: s,
                code_challenge_method: c,
                scope: r.join(' '),
                state: u,
                nonce: m
            },
            body: {
                guild_id: _,
                webhook_channel_id: null != _ && null != p ? p : void 0,
                channel_id: null == _ && null != p ? p : void 0,
                permissions: f,
                authorize: t,
                integration_type: h,
                location_context: d()
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body;
}
async function p(e) {
    let { clientId: t, scopes: n, responseType: r, redirectUri: o, codeChallenge: a, codeChallengeMethod: s, state: c, integrationType: u, nonce: d, signal: f } = e;
    return (
        await i.tn.get({
            url: l.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: r,
                redirect_uri: o,
                code_challenge: a,
                code_challenge_method: s,
                scope: n.join(' '),
                state: c,
                integration_type: u,
                nonce: d
            },
            signal: f,
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body;
}
async function h(e) {
    let { body: t } = await i.tn.get({
        url: l.ANM.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: { guild_id: e },
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return t;
}
function m(e) {
    o.Z.logout((0, r.Ui)(e.pathname + e.search, !1));
}
async function g(e) {
    return await i.tn.post({
        url: l.ANM.OAUTH2_DEVICE_VERIFY,
        body: { user_code: e },
        rejectWithError: !1
    });
}
async function E(e, t) {
    return await i.tn.post({
        url: l.ANM.OAUTH2_DEVICE_FINISH,
        body: {
            user_code: e,
            result: t
        },
        rejectWithError: !1
    });
}
async function b(e, t, n) {
    return await i.tn.post({
        url: l.ANM.OAUTH2_DEVICE_FINISH,
        body: {
            user_code: e,
            result: 'two_way_link_error',
            error_code: t,
            error_source: n
        },
        rejectWithError: !1
    });
}
