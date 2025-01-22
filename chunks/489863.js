r.d(n, {
    Iq: function () {
        return h;
    },
    UR: function () {
        return m;
    },
    Ww: function () {
        return _;
    },
    c$: function () {
        return g;
    },
    g: function () {
        return p;
    },
    i2: function () {
        return y;
    },
    tR: function () {
        return v;
    },
    tV: function () {
        return E;
    }
});
var i = r(860911),
    a = r(544891),
    o = r(893776),
    s = r(592125),
    l = r(944486),
    u = r(981631);
let c = '10000',
    d = '10000';
function f() {
    var e, n, r;
    let i = l.Z.getChannelId(),
        a = s.Z.getBasicChannel(i);
    return {
        guild_id: null !== (e = null == a ? void 0 : a.guild_id) && void 0 !== e ? e : c,
        channel_id: null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : d,
        channel_type: null !== (r = null == a ? void 0 : a.type) && void 0 !== r ? r : u.d4z.UNKNOWN
    };
}
function p(e) {
    return a.tn.post({
        url: u.ANM.OAUTH2_WHITELIST_ACCEPT,
        query: { token: e },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
async function h(e) {
    let { authorize: n, clientId: r, scopes: i, responseType: o, redirectUri: s, codeChallenge: l, codeChallengeMethod: c, state: d, permissions: p, guildId: h, channelId: _, integrationType: m, nonce: g } = e;
    return (
        await a.tn.post({
            url: u.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: r,
                response_type: o,
                redirect_uri: s,
                code_challenge: l,
                code_challenge_method: c,
                scope: i.join(' '),
                state: d,
                nonce: g
            },
            body: {
                guild_id: h,
                webhook_channel_id: null != h && null != _ ? _ : void 0,
                channel_id: null == h && null != _ ? _ : void 0,
                permissions: p,
                authorize: n,
                integration_type: m,
                location_context: f()
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body;
}
async function _(e) {
    let { clientId: n, scopes: r, responseType: i, redirectUri: o, codeChallenge: s, codeChallengeMethod: l, state: c, integrationType: d, nonce: f, signal: p } = e;
    return (
        await a.tn.get({
            url: u.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: n,
                response_type: i,
                redirect_uri: o,
                code_challenge: s,
                code_challenge_method: l,
                scope: r.join(' '),
                state: c,
                integration_type: d,
                nonce: f
            },
            signal: p,
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body;
}
async function m(e) {
    let { body: n } = await a.tn.get({
        url: u.ANM.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: { guild_id: e },
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return n;
}
function g(e) {
    o.Z.logout((0, i.Ui)(e.pathname + e.search, !1));
}
async function E(e) {
    return await a.tn.post({
        url: u.ANM.OAUTH2_DEVICE_VERIFY,
        body: { user_code: e },
        rejectWithError: !1
    });
}
async function v(e, n) {
    return await a.tn.post({
        url: u.ANM.OAUTH2_DEVICE_FINISH,
        body: {
            user_code: e,
            result: n
        },
        rejectWithError: !1
    });
}
async function y(e, n, r) {
    return await a.tn.post({
        url: u.ANM.OAUTH2_DEVICE_FINISH,
        body: {
            user_code: e,
            result: 'two_way_link_error',
            error_code: n,
            error_source: r
        },
        rejectWithError: !1
    });
}
