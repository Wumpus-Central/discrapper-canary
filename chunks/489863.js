n.d(t, {
    Iq: () => _,
    UR: () => h,
    Ww: () => p,
    c$: () => m,
    g: () => f,
    i2: () => v,
    tR: () => E,
    tV: () => g
});
var i = n(860911),
    r = n(544891),
    a = n(893776),
    s = n(592125),
    o = n(944486),
    l = n(981631);
let u = '10000',
    c = '10000';
function d() {
    var e, t, n;
    let i = o.Z.getChannelId(),
        r = s.Z.getBasicChannel(i);
    return {
        guild_id: null !== (e = null == r ? void 0 : r.guild_id) && void 0 !== e ? e : u,
        channel_id: null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : c,
        channel_type: null !== (n = null == r ? void 0 : r.type) && void 0 !== n ? n : l.d4z.UNKNOWN
    };
}
function f(e) {
    return r.tn.post({
        url: l.ANM.OAUTH2_WHITELIST_ACCEPT,
        query: { token: e },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
async function _(e) {
    let { authorize: t, clientId: n, scopes: i, responseType: a, redirectUri: s, codeChallenge: o, codeChallengeMethod: u, state: c, permissions: f, guildId: _, channelId: p, integrationType: h, nonce: m } = e;
    return (
        await r.tn.post({
            url: l.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: n,
                response_type: a,
                redirect_uri: s,
                code_challenge: o,
                code_challenge_method: u,
                scope: i.join(' '),
                state: c,
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
    let { clientId: t, scopes: n, responseType: i, redirectUri: a, codeChallenge: s, codeChallengeMethod: o, state: u, integrationType: c, nonce: d, signal: f } = e;
    return (
        await r.tn.get({
            url: l.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: i,
                redirect_uri: a,
                code_challenge: s,
                code_challenge_method: o,
                scope: n.join(' '),
                state: u,
                integration_type: c,
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
    let { body: t } = await r.tn.get({
        url: l.ANM.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: { guild_id: e },
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return t;
}
function m(e) {
    a.Z.logout((0, i.Ui)(e.pathname + e.search, !1));
}
async function g(e) {
    return await r.tn.post({
        url: l.ANM.OAUTH2_DEVICE_VERIFY,
        body: { user_code: e },
        rejectWithError: !1
    });
}
async function E(e, t) {
    return await r.tn.post({
        url: l.ANM.OAUTH2_DEVICE_FINISH,
        body: {
            user_code: e,
            result: t
        },
        rejectWithError: !1
    });
}
async function v(e, t, n) {
    return await r.tn.post({
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
