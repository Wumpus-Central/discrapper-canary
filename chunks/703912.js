n.d(t, { Z: () => L }), n(47120), n(789020), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var i = n(664751),
    l = n(373793),
    r = n(243814),
    a = n(149765),
    s = n(544891),
    o = n(45792),
    c = n(433517),
    d = n(570140),
    u = n(812206),
    h = n(979200),
    m = n(489863),
    p = n(166148),
    g = n(307643),
    _ = n(973616),
    f = n(594174),
    E = n(630388),
    I = n(700785),
    C = n(996106),
    N = n(75556),
    v = n(186901),
    T = n(981631);
let S = 'CachedTokens';
function b(e, t, n) {
    return (0, N.S)() ? A(e, t, n) : Z(e, t, n);
}
async function A(e, t, n) {
    let i,
        r,
        s,
        o,
        c,
        { client_id: d, response_type: u = 'code', redirect_uri: g, code_challenge: _, code_challenge_method: N, state: v, nonce: S, scope: b, permissions: A, guild_id: Z, channel_id: x, prompt: L, disable_guild_select: y, integration_type: P, pid: O, signal: R } = e;
    if (null == R ? void 0 : R.aborted) throw new C.Z({ errorCode: T.lTL.UNKNOWN_ERROR }, 'Request aborted');
    if (null == d) throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'No Client ID provided');
    if (null != g) throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow');
    let j = [];
    if (('string' == typeof b ? (j = b.split(' ').filter((e) => e.length > 0)) : Array.isArray(b) && (j = b), null == f.default.getCurrentUser())) throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'Client is not logged in');
    null != P && (r = Number(P));
    try {
        [s, { disclosures: o, allAcked: c }] = await Promise.all([
            (0, m.Ww)({
                clientId: d,
                scopes: j,
                responseType: u,
                redirectUri: g,
                codeChallenge: _,
                codeChallengeMethod: N,
                state: v,
                integrationType: r,
                signal: R
            }),
            (0, h.de)(d)
        ]);
    } catch (t) {
        let { body: e } = t;
        throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
    }
    if (null == r) {
        var D;
        r = null != s.application.flags && (0, E.yE)(s.application.flags, T.udG.EMBEDDED) && (null === (D = s.application.integration_types_config) || void 0 === D ? void 0 : D[l.Y.USER_INSTALL]) != null ? l.Y.USER_INSTALL : l.Y.GUILD_INSTALL;
    }
    if (L === p.s.NONE && null != s && s.authorized && c)
        try {
            return (
                await (0, m.Iq)({
                    authorize: !0,
                    clientId: d,
                    scopes: j,
                    responseType: u,
                    redirectUri: g,
                    codeChallenge: _,
                    codeChallengeMethod: N,
                    state: v,
                    nonce: S,
                    integrationType: r
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'OAuth2 Authorize Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
        }
    null == n || n(s.application, x, O);
    let w = I.Hn;
    try {
        w = a.vB(null != A ? A : 0);
    } catch (e) {}
    return (
        null != s.integration_type && Object.values(l.Y).includes(s.integration_type) && (i = new Map()).set(s.integration_type, s),
        t({
            clientId: d,
            authorizations: i,
            scopes: j,
            parsedPermissions: w,
            responseType: u,
            redirectUri: g,
            codeChallenge: _,
            codeChallengeMethod: N,
            state: v,
            guildId: Z,
            channelId: x,
            prompt: L,
            disableGuildSelect: y,
            disclosures: o,
            integrationType: r,
            pid: O
        })
    );
}
async function Z(e, t, n) {
    var i, r, s, o;
    let c;
    let d,
        N,
        v,
        S,
        { client_id: b, response_type: A = 'code', redirect_uri: Z, code_challenge: x, code_challenge_method: L, state: y, nonce: P, scope: O, permissions: R, guild_id: j, channel_id: D, prompt: w, disable_guild_select: k, integration_type: M, pid: U, signal: G } = e;
    if (null == G ? void 0 : G.aborted) throw new C.Z({ errorCode: T.lTL.UNKNOWN_ERROR }, 'Request aborted');
    if (null == b) throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'No Client ID provided');
    if (null != Z) throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow');
    let B = [];
    if (('string' == typeof O ? (B = O.split(' ').filter((e) => e.length > 0)) : Array.isArray(O) && (B = O), null == f.default.getCurrentUser())) throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'Client is not logged in');
    let V = null !== (r = u.Z.getApplication(b)) && void 0 !== r ? r : null;
    (null == V || ((s = V.id), (null !== (o = u.Z.getApplicationLastUpdated(s)) && void 0 !== o ? o : 0) < Date.now() - 5000)) && (V = _.ZP.createFromServer(await (0, g.UM)(b, G)));
    let H = null != V && (0, E.yE)(V.flags, T.udG.EMBEDDED) && (null === (i = V.integrationTypesConfig) || void 0 === i ? void 0 : i[l.Y.USER_INSTALL]) != null;
    d = null == M ? (H ? l.Y.USER_INSTALL : l.Y.GUILD_INSTALL) : Number(M);
    try {
        N = await (0, m.Ww)({
            clientId: b,
            scopes: B,
            responseType: A,
            redirectUri: Z,
            codeChallenge: x,
            codeChallengeMethod: L,
            state: y,
            integrationType: d,
            signal: G
        });
    } catch (t) {
        let { body: e } = t;
        throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
    }
    try {
        ({ disclosures: v, allAcked: S } = await (0, h.de)(N.application.id));
    } catch (t) {
        let { body: e } = t;
        throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
    }
    if (w === p.s.NONE && null != N && N.authorized && S)
        try {
            return (
                await (0, m.Iq)({
                    authorize: !0,
                    clientId: b,
                    scopes: B,
                    responseType: A,
                    redirectUri: Z,
                    codeChallenge: x,
                    codeChallengeMethod: L,
                    state: y,
                    nonce: P,
                    integrationType: d
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'OAuth2 Authorize Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
        }
    null == n || n(N.application, D, U);
    let F = I.Hn;
    try {
        F = a.vB(null != R ? R : 0);
    } catch (e) {}
    return (
        null != N.integration_type && Object.values(l.Y).includes(N.integration_type) && (c = new Map()).set(N.integration_type, N),
        t({
            clientId: b,
            authorizations: c,
            scopes: B,
            parsedPermissions: F,
            responseType: A,
            redirectUri: Z,
            codeChallenge: x,
            codeChallengeMethod: L,
            state: y,
            guildId: j,
            channelId: D,
            prompt: w,
            disableGuildSelect: k,
            disclosures: v,
            integrationType: d,
            pid: U
        })
    );
}
function x(e, t) {
    if (e.authorization.accessToken) throw new C.Z({ errorCode: T.lTL.INVALID_COMMAND }, 'Already authenticated');
    if (e.authorization.authing) throw new C.Z({ errorCode: T.lTL.INVALID_COMMAND }, 'Already authenticating');
    return (
        (e.authorization.authing = !0),
        s.tn
            .get({
                url: T.ANM.OAUTH2_CURRENT_AUTH,
                headers: { Authorization: 'Bearer '.concat(t) },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (n) => {
                    e.authorization.authing = !1;
                    let { application: i, user: l, scopes: r, expires: a } = n.body;
                    if (e.application.id !== i.id) throw new C.Z({ errorCode: T.lTL.INVALID_CLIENTID }, "Application does not match the connection's");
                    let s = f.default.getCurrentUser();
                    if (null == s || !l || s.id !== l.id) throw new C.Z({ errorCode: T.lTL.INVALID_TOKEN }, 'Token does not match current user');
                    return (
                        (e.authorization.scopes = [...e.authorization.scopes, ...r, v.wE]),
                        (e.authorization.accessToken = t),
                        (e.authorization.expires = new Date(a)),
                        d.Z.dispatch({
                            type: 'RPC_APP_AUTHENTICATED',
                            socketId: e.id,
                            application: e.application
                        }),
                        {
                            ...n.body,
                            access_token: t
                        }
                    );
                },
                () => {
                    throw new C.Z({ errorCode: T.lTL.INVALID_TOKEN }, 'Invalid access token: '.concat(t));
                }
            )
            .catch((t) => {
                throw ((e.authorization.authing = !1), t);
            })
    );
}
function L(e, t) {
    return {
        [T.Etm.AUTHENTICATE]: (0, o.S)(T.Etm.AUTHENTICATE, {
            handler(n) {
                let {
                    socket: l,
                    signal: a,
                    args: { access_token: s }
                } = n;
                if (null == s && l.transport === v.He.IPC) {
                    let n = l.application.id;
                    if (null == n) throw new C.Z({ errorCode: T.lTL.INVALID_COMMAND }, 'No application.');
                    let o = r.x.IDENTIFY,
                        d = () =>
                            b(
                                {
                                    client_id: n,
                                    scope: o,
                                    response_type: 'token',
                                    signal: a
                                },
                                e,
                                t
                            ).then((e) => {
                                if (null == e) throw new C.Z({ errorCode: T.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
                                let t = e.split(/#|\?/),
                                    r = i.parse(t[t.length - 1]);
                                if (null != r.error) {
                                    var a;
                                    throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'OAuth2 Error: '.concat(r.error, ': ').concat(null !== (a = r.error_description) && void 0 !== a ? a : 'unknown error'));
                                }
                                return (
                                    !(function (e, t, n, i) {
                                        var l;
                                        let r = null !== (l = c.K.get(S)) && void 0 !== l ? l : {};
                                        (r[e] = {
                                            accessToken: t,
                                            scope: n,
                                            expires: Date.now() + i
                                        }),
                                            c.K.set(S, r);
                                    })(n, r.access_token, r.scope, r.expires_in),
                                    x(l, r.access_token)
                                );
                            });
                    return null !=
                        (s = (function (e, t) {
                            let n = c.K.get(S);
                            if (null != n && null != n[e]) {
                                let i = n[e];
                                if (!(i.scope !== t || i.expires <= Date.now())) return i.accessToken;
                                delete n[e], c.K.set(S, n);
                            }
                        })(n, o))
                        ? x(l, s).catch(
                              () => (
                                  !(function (e) {
                                      var t;
                                      let n = null !== (t = c.K.get(S)) && void 0 !== t ? t : {};
                                      delete n[e], c.K.set(S, n);
                                  })(n),
                                  d()
                              )
                          )
                        : d();
                }
                if (null == s) throw new C.Z({ errorCode: T.lTL.INVALID_TOKEN }, 'No access token provided');
                return x(l, s);
            }
        }),
        [T.Etm.AUTHORIZE]: {
            handler(n) {
                let { socket: i, signal: l, args: r } = n,
                    a = r.client_id;
                if (!a) throw new C.Z({ errorCode: T.lTL.INVALID_CLIENTID }, 'No client id provided');
                if (null != i.authorization.accessToken) throw new C.Z({ errorCode: T.lTL.INVALID_COMMAND }, 'Already authenticated');
                if (i.authorization.authing) throw new C.Z({ errorCode: T.lTL.INVALID_COMMAND }, 'Already authing');
                if (((i.authorization.authing = !0), 'token' === r.response_type)) throw new C.Z({ errorCode: T.lTL.INVALID_COMMAND }, 'Authorization response_type "token" is not supported');
                return (
                    (0, N.S)()
                        ? Promise.resolve({ body: { id: a } })
                        : s.tn.get({
                              url: T.ANM.APPLICATION_RPC(a),
                              oldFormErrors: !0,
                              signal: l,
                              rejectWithError: !1
                          })
                )
                    .then(
                        (n) => {
                            let a = n.body;
                            if (i.application.id !== a.id) throw new C.Z({ errorCode: T.lTL.INVALID_CLIENTID }, "Application does not match the connection's");
                            let s = r.scopes || r.scope;
                            return (
                                delete r.scopes,
                                b(
                                    {
                                        ...r,
                                        scope: s,
                                        signal: l
                                    },
                                    e,
                                    t
                                )
                            );
                        },
                        () => {
                            throw new C.Z({ errorCode: T.lTL.INVALID_CLIENTID }, 'Invalid client id: '.concat(a));
                        }
                    )
                    .then((e) => {
                        if (((i.authorization.authing = !1), null == e)) throw new C.Z({ errorCode: T.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
                        let t = new URL(e),
                            n = t.searchParams.get('error');
                        if (null != n && '' !== n) {
                            var l;
                            let e = null !== (l = t.searchParams.get('error_description')) && void 0 !== l ? l : 'unknown error';
                            throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'OAuth2 Error: '.concat(n, ': ').concat(e));
                        }
                        let r = t.searchParams.get('code');
                        if (null == r) throw new C.Z({ errorCode: T.lTL.OAUTH2_ERROR }, 'OAuth2 Error: Unable to find auth code');
                        return { code: r };
                    })
                    .catch((e) => {
                        throw ((i.authorization.authing = !1), e);
                    });
            }
        }
    };
}
