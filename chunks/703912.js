n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(789020),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var i = n(664751),
    r = n(373793),
    l = n(243814),
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
    f = n(973616),
    _ = n(594174),
    E = n(630388),
    I = n(700785),
    C = n(996106),
    N = n(186901),
    v = n(981631);
let S = 'CachedTokens';
async function T(e, t, n) {
    var i, l;
    let s;
    let o,
        c,
        d,
        N,
        { client_id: S, response_type: T = 'code', redirect_uri: b, code_challenge: A, code_challenge_method: Z, state: x, nonce: L, scope: P, permissions: O, guild_id: y, channel_id: R, prompt: j, disable_guild_select: D, integration_type: M, pid: w, signal: k } = e;
    if (null == k ? void 0 : k.aborted) throw new C.Z({ errorCode: v.lTL.UNKNOWN_ERROR }, 'Request aborted');
    if (null == S) throw new C.Z({ errorCode: v.lTL.OAUTH2_ERROR }, 'No Client ID provided');
    if (null != b) throw new C.Z({ errorCode: v.lTL.OAUTH2_ERROR }, 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow');
    let U = [];
    if (('string' == typeof P ? (U = P.split(' ').filter((e) => e.length > 0)) : Array.isArray(P) && (U = P), null == _.default.getCurrentUser())) throw new C.Z({ errorCode: v.lTL.OAUTH2_ERROR }, 'Client is not logged in');
    let G = null !== (l = u.Z.getApplication(S)) && void 0 !== l ? l : null;
    (null == G ||
        (function (e) {
            var t;
            let n = null !== (t = u.Z.getApplicationLastUpdated(e)) && void 0 !== t ? t : 0;
            return n < Date.now() - 5000;
        })(G.id)) &&
        (G = f.ZP.createFromServer(await (0, g.UM)(S, k)));
    let B = null != G && (0, E.yE)(G.flags, v.udG.EMBEDDED) && (null === (i = G.integrationTypesConfig) || void 0 === i ? void 0 : i[r.Y.USER_INSTALL]) != null;
    o = null == M ? (B ? r.Y.USER_INSTALL : r.Y.GUILD_INSTALL) : Number(M);
    try {
        c = await (0, m.Ww)({
            clientId: S,
            scopes: U,
            responseType: T,
            redirectUri: b,
            codeChallenge: A,
            codeChallengeMethod: Z,
            state: x,
            integrationType: o,
            signal: k
        });
    } catch (t) {
        let { body: e } = t;
        throw new C.Z({ errorCode: v.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
    }
    try {
        ({ disclosures: d, allAcked: N } = await (0, h.de)(c.application.id));
    } catch (t) {
        let { body: e } = t;
        throw new C.Z({ errorCode: v.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
    }
    if (j === p.s.NONE && null != c && c.authorized && N)
        try {
            return (
                await (0, m.Iq)({
                    authorize: !0,
                    clientId: S,
                    scopes: U,
                    responseType: T,
                    redirectUri: b,
                    codeChallenge: A,
                    codeChallengeMethod: Z,
                    state: x,
                    nonce: L,
                    integrationType: o
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new C.Z({ errorCode: v.lTL.OAUTH2_ERROR }, 'OAuth2 Authorize Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
        }
    null == n || n(c.application, R, w);
    let V = I.Hn;
    try {
        V = a.vB(null != O ? O : 0);
    } catch (e) {}
    return (
        null != c.integration_type && Object.values(r.Y).includes(c.integration_type) && (s = new Map()).set(c.integration_type, c),
        t({
            clientId: S,
            authorizations: s,
            scopes: U,
            parsedPermissions: V,
            responseType: T,
            redirectUri: b,
            codeChallenge: A,
            codeChallengeMethod: Z,
            state: x,
            guildId: y,
            channelId: R,
            prompt: j,
            disableGuildSelect: D,
            disclosures: d,
            integrationType: o,
            pid: w
        })
    );
}
function b(e, t) {
    if (e.authorization.accessToken) throw new C.Z({ errorCode: v.lTL.INVALID_COMMAND }, 'Already authenticated');
    if (e.authorization.authing) throw new C.Z({ errorCode: v.lTL.INVALID_COMMAND }, 'Already authenticating');
    return (
        (e.authorization.authing = !0),
        s.tn
            .get({
                url: v.ANM.OAUTH2_CURRENT_AUTH,
                headers: { Authorization: 'Bearer '.concat(t) },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (n) => {
                    e.authorization.authing = !1;
                    let { application: i, user: r, scopes: l, expires: a } = n.body;
                    if (e.application.id !== i.id) throw new C.Z({ errorCode: v.lTL.INVALID_CLIENTID }, "Application does not match the connection's");
                    let s = _.default.getCurrentUser();
                    if (null == s || !r || s.id !== r.id) throw new C.Z({ errorCode: v.lTL.INVALID_TOKEN }, 'Token does not match current user');
                    return (
                        (e.authorization.scopes = [...e.authorization.scopes, ...l, N.wE]),
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
                    throw new C.Z({ errorCode: v.lTL.INVALID_TOKEN }, 'Invalid access token: '.concat(t));
                }
            )
            .catch((t) => {
                throw ((e.authorization.authing = !1), t);
            })
    );
}
function A(e, t) {
    return {
        [v.Etm.AUTHENTICATE]: (0, o.S)(v.Etm.AUTHENTICATE, {
            handler(n) {
                let {
                    socket: r,
                    signal: a,
                    args: { access_token: s }
                } = n;
                if (null == s && r.transport === N.He.IPC) {
                    let n = r.application.id;
                    if (null == n) throw new C.Z({ errorCode: v.lTL.INVALID_COMMAND }, 'No application.');
                    let o = l.x.IDENTIFY,
                        d = () =>
                            T(
                                {
                                    client_id: n,
                                    scope: o,
                                    response_type: 'token',
                                    signal: a
                                },
                                e,
                                t
                            ).then((e) => {
                                if (null == e) throw new C.Z({ errorCode: v.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
                                let t = e.split(/#|\?/),
                                    l = i.parse(t[t.length - 1]);
                                if (null != l.error) {
                                    var a;
                                    throw new C.Z({ errorCode: v.lTL.OAUTH2_ERROR }, 'OAuth2 Error: '.concat(l.error, ': ').concat(null !== (a = l.error_description) && void 0 !== a ? a : 'unknown error'));
                                }
                                return (
                                    !(function (e, t, n, i) {
                                        var r;
                                        let l = null !== (r = c.K.get(S)) && void 0 !== r ? r : {};
                                        (l[e] = {
                                            accessToken: t,
                                            scope: n,
                                            expires: Date.now() + i
                                        }),
                                            c.K.set(S, l);
                                    })(n, l.access_token, l.scope, l.expires_in),
                                    b(r, l.access_token)
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
                        ? b(r, s).catch(
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
                if (null == s) throw new C.Z({ errorCode: v.lTL.INVALID_TOKEN }, 'No access token provided');
                return b(r, s);
            }
        }),
        [v.Etm.AUTHORIZE]: {
            handler(n) {
                let { socket: i, signal: r, args: l } = n,
                    a = l.client_id;
                if (!a) throw new C.Z({ errorCode: v.lTL.INVALID_CLIENTID }, 'No client id provided');
                if (null != i.authorization.accessToken) throw new C.Z({ errorCode: v.lTL.INVALID_COMMAND }, 'Already authenticated');
                if (i.authorization.authing) throw new C.Z({ errorCode: v.lTL.INVALID_COMMAND }, 'Already authing');
                if (((i.authorization.authing = !0), 'token' === l.response_type)) throw new C.Z({ errorCode: v.lTL.INVALID_COMMAND }, 'Authorization response_type "token" is not supported');
                return s.tn
                    .get({
                        url: v.ANM.APPLICATION_RPC(a),
                        oldFormErrors: !0,
                        signal: r,
                        rejectWithError: !1
                    })
                    .then(
                        (n) => {
                            let a = n.body;
                            if (i.application.id !== a.id) throw new C.Z({ errorCode: v.lTL.INVALID_CLIENTID }, "Application does not match the connection's");
                            let s = l.scopes || l.scope;
                            return (
                                delete l.scopes,
                                T(
                                    {
                                        ...l,
                                        scope: s,
                                        signal: r
                                    },
                                    e,
                                    t
                                )
                            );
                        },
                        () => {
                            throw new C.Z({ errorCode: v.lTL.INVALID_CLIENTID }, 'Invalid client id: '.concat(a));
                        }
                    )
                    .then((e) => {
                        if (((i.authorization.authing = !1), null == e)) throw new C.Z({ errorCode: v.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
                        let t = new URL(e),
                            n = t.searchParams.get('error');
                        if (null != n && '' !== n) {
                            var r;
                            let e = null !== (r = t.searchParams.get('error_description')) && void 0 !== r ? r : 'unknown error';
                            throw new C.Z({ errorCode: v.lTL.OAUTH2_ERROR }, 'OAuth2 Error: '.concat(n, ': ').concat(e));
                        }
                        let l = t.searchParams.get('code');
                        if (null == l) throw new C.Z({ errorCode: v.lTL.OAUTH2_ERROR }, 'OAuth2 Error: Unable to find auth code');
                        return { code: l };
                    })
                    .catch((e) => {
                        throw ((i.authorization.authing = !1), e);
                    });
            }
        }
    };
}
