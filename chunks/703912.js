n.d(t, { Z: () => Z }), n(301563), n(789020), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(664751),
    i = n(373793),
    l = n(243814),
    a = n(149765),
    o = n(544891),
    s = n(45792),
    c = n(433517),
    u = n(570140),
    d = n(812206),
    p = n(979200),
    h = n(489863),
    f = n(166148),
    g = n(307643),
    m = n(973616),
    b = n(594174),
    _ = n(630388),
    E = n(700785),
    O = n(996106),
    N = n(75556),
    y = n(186901),
    I = n(981631);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = 'CachedTokens';
function T(e, t, n) {
    return (0, N.S)() ? P(e, t, n) : j(e, t, n);
}
async function P(e, t, n) {
    let r,
        l,
        o,
        s,
        c,
        { client_id: u, response_type: N = 'code', redirect_uri: y, code_challenge: v, code_challenge_method: C, state: S, nonce: T, scope: P, permissions: j, guild_id: A, channel_id: Z, prompt: x, disable_guild_select: L, integration_type: w, pid: R, signal: D } = e;
    if (null == D ? void 0 : D.aborted) throw new O.Z({ errorCode: I.lTL.UNKNOWN_ERROR }, 'Request aborted');
    if (null == u) throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'No Client ID provided');
    if (null != y) throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow');
    let k = [];
    if (('string' == typeof P ? (k = P.split(' ').filter((e) => e.length > 0)) : Array.isArray(P) && (k = P), null == b.default.getCurrentUser())) throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'Client is not logged in');
    if (null != w) l = Number(w);
    else {
        let e = (e) => {
                var t;
                return null != e && (0, _.yE)(e.flags, I.udG.EMBEDDED) && (null == (t = e.integrationTypesConfig) ? void 0 : t[i.Y.USER_INSTALL]) != null;
            },
            t = d.Z.getApplication(u);
        l = e(t) || e((t = m.ZP.createFromServer(await (0, g.UM)(u, D)))) ? i.Y.USER_INSTALL : i.Y.GUILD_INSTALL;
    }
    try {
        [o, { disclosures: s, allAcked: c }] = await Promise.all([
            (0, h.Ww)({
                clientId: u,
                scopes: k,
                responseType: N,
                redirectUri: y,
                codeChallenge: v,
                codeChallengeMethod: C,
                state: S,
                integrationType: l,
                signal: D
            }),
            (0, p.de)(u)
        ]);
    } catch (t) {
        let { body: e } = t;
        throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
    }
    if (x === f.s.NONE && null != o && o.authorized && c)
        try {
            return (
                await (0, h.Iq)({
                    authorize: !0,
                    clientId: u,
                    scopes: k,
                    responseType: N,
                    redirectUri: y,
                    codeChallenge: v,
                    codeChallengeMethod: C,
                    state: S,
                    nonce: T,
                    integrationType: l
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'OAuth2 Authorize Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
        }
    null == n || n(o.application, Z, R);
    let M = E.Hn;
    try {
        M = a.vB(null != j ? j : 0);
    } catch (e) {}
    return (
        null != o.integration_type && Object.values(i.Y).includes(o.integration_type) && (r = new Map()).set(o.integration_type, o),
        t({
            clientId: u,
            authorizations: r,
            scopes: k,
            parsedPermissions: M,
            responseType: N,
            redirectUri: y,
            codeChallenge: v,
            codeChallengeMethod: C,
            state: S,
            guildId: A,
            channelId: Z,
            prompt: x,
            disableGuildSelect: L,
            disclosures: s,
            integrationType: l,
            pid: R
        })
    );
}
async function j(e, t, n) {
    var r, l, o, s;
    let c,
        u,
        N,
        y,
        v,
        { client_id: C, response_type: S = 'code', redirect_uri: T, code_challenge: P, code_challenge_method: j, state: A, nonce: Z, scope: x, permissions: L, guild_id: w, channel_id: R, prompt: D, disable_guild_select: k, integration_type: M, pid: U, signal: G } = e;
    if (null == G ? void 0 : G.aborted) throw new O.Z({ errorCode: I.lTL.UNKNOWN_ERROR }, 'Request aborted');
    if (null == C) throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'No Client ID provided');
    if (null != T) throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow');
    let W = [];
    if (('string' == typeof x ? (W = x.split(' ').filter((e) => e.length > 0)) : Array.isArray(x) && (W = x), null == b.default.getCurrentUser())) throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'Client is not logged in');
    let V = null != (l = d.Z.getApplication(C)) ? l : null;
    (null == V || ((o = V.id), (null != (s = d.Z.getApplicationLastUpdated(o)) ? s : 0) < Date.now() - 5000)) && (V = m.ZP.createFromServer(await (0, g.UM)(C, G)));
    let B = null != V && (0, _.yE)(V.flags, I.udG.EMBEDDED) && (null == (r = V.integrationTypesConfig) ? void 0 : r[i.Y.USER_INSTALL]) != null;
    u = null == M ? (B ? i.Y.USER_INSTALL : i.Y.GUILD_INSTALL) : Number(M);
    try {
        N = await (0, h.Ww)({
            clientId: C,
            scopes: W,
            responseType: S,
            redirectUri: T,
            codeChallenge: P,
            codeChallengeMethod: j,
            state: A,
            integrationType: u,
            signal: G
        });
    } catch (t) {
        let { body: e } = t;
        throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
    }
    try {
        ({ disclosures: y, allAcked: v } = await (0, p.de)(N.application.id));
    } catch (t) {
        let { body: e } = t;
        throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
    }
    if (D === f.s.NONE && null != N && N.authorized && v)
        try {
            return (
                await (0, h.Iq)({
                    authorize: !0,
                    clientId: C,
                    scopes: W,
                    responseType: S,
                    redirectUri: T,
                    codeChallenge: P,
                    codeChallengeMethod: j,
                    state: A,
                    nonce: Z,
                    integrationType: u
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'OAuth2 Authorize Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
        }
    null == n || n(N.application, R, U);
    let H = E.Hn;
    try {
        H = a.vB(null != L ? L : 0);
    } catch (e) {}
    return (
        null != N.integration_type && Object.values(i.Y).includes(N.integration_type) && (c = new Map()).set(N.integration_type, N),
        t({
            clientId: C,
            authorizations: c,
            scopes: W,
            parsedPermissions: H,
            responseType: S,
            redirectUri: T,
            codeChallenge: P,
            codeChallengeMethod: j,
            state: A,
            guildId: w,
            channelId: R,
            prompt: D,
            disableGuildSelect: k,
            disclosures: y,
            integrationType: u,
            pid: U
        })
    );
}
function A(e, t) {
    if (e.authorization.accessToken) throw new O.Z({ errorCode: I.lTL.INVALID_COMMAND }, 'Already authenticated');
    if (e.authorization.authing) throw new O.Z({ errorCode: I.lTL.INVALID_COMMAND }, 'Already authenticating');
    return (
        (e.authorization.authing = !0),
        o.tn
            .get({
                url: I.ANM.OAUTH2_CURRENT_AUTH,
                headers: { Authorization: 'Bearer '.concat(t) },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (n) => {
                    e.authorization.authing = !1;
                    let { application: r, user: i, scopes: l, expires: a } = n.body;
                    if (e.application.id !== r.id) throw new O.Z({ errorCode: I.lTL.INVALID_CLIENTID }, "Application does not match the connection's");
                    let o = b.default.getCurrentUser();
                    if (null == o || !i || o.id !== i.id) throw new O.Z({ errorCode: I.lTL.INVALID_TOKEN }, 'Token does not match current user');
                    return (
                        (e.authorization.scopes = [...e.authorization.scopes, ...l, y.wE]),
                        (e.authorization.accessToken = t),
                        (e.authorization.expires = new Date(a)),
                        u.Z.dispatch({
                            type: 'RPC_APP_AUTHENTICATED',
                            socketId: e.id,
                            application: e.application
                        }),
                        C(v({}, n.body), { access_token: t })
                    );
                },
                () => {
                    throw new O.Z({ errorCode: I.lTL.INVALID_TOKEN }, 'Invalid access token: '.concat(t));
                }
            )
            .catch((t) => {
                throw ((e.authorization.authing = !1), t);
            })
    );
}
function Z(e, t) {
    return {
        [I.Etm.AUTHENTICATE]: (0, s.S)(I.Etm.AUTHENTICATE, {
            handler(n) {
                let {
                    socket: i,
                    signal: a,
                    args: { access_token: o }
                } = n;
                if (null == o && i.transport === y.He.IPC) {
                    let n = i.application.id;
                    if (null == n) throw new O.Z({ errorCode: I.lTL.INVALID_COMMAND }, 'No application.');
                    let s = l.x.IDENTIFY,
                        u = () =>
                            T(
                                {
                                    client_id: n,
                                    scope: s,
                                    response_type: 'token',
                                    signal: a
                                },
                                e,
                                t
                            ).then((e) => {
                                if (null == e) throw new O.Z({ errorCode: I.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
                                let t = e.split(/#|\?/),
                                    l = r.parse(t[t.length - 1]);
                                if (null != l.error) {
                                    var a;
                                    throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'OAuth2 Error: '.concat(l.error, ': ').concat(null != (a = l.error_description) ? a : 'unknown error'));
                                }
                                return (
                                    !(function (e, t, n, r) {
                                        var i;
                                        let l = null != (i = c.K.get(S)) ? i : {};
                                        (l[e] = {
                                            accessToken: t,
                                            scope: n,
                                            expires: Date.now() + r
                                        }),
                                            c.K.set(S, l);
                                    })(n, l.access_token, l.scope, l.expires_in),
                                    A(i, l.access_token)
                                );
                            });
                    return null !=
                        (o = (function (e, t) {
                            let n = c.K.get(S);
                            if (null != n && null != n[e]) {
                                let r = n[e];
                                if (!(r.scope !== t || r.expires <= Date.now())) return r.accessToken;
                                delete n[e], c.K.set(S, n);
                            }
                        })(n, s))
                        ? A(i, o).catch(() => {
                              var e;
                              let t = null != (e = c.K.get(S)) ? e : {};
                              return delete t[n], c.K.set(S, t), u();
                          })
                        : u();
                }
                if (null == o) throw new O.Z({ errorCode: I.lTL.INVALID_TOKEN }, 'No access token provided');
                return A(i, o);
            }
        }),
        [I.Etm.AUTHORIZE]: {
            handler(n) {
                let { socket: r, signal: i, args: l } = n,
                    a = l.client_id;
                if (!a) throw new O.Z({ errorCode: I.lTL.INVALID_CLIENTID }, 'No client id provided');
                if (null != r.authorization.accessToken) throw new O.Z({ errorCode: I.lTL.INVALID_COMMAND }, 'Already authenticated');
                if (r.authorization.authing) throw new O.Z({ errorCode: I.lTL.INVALID_COMMAND }, 'Already authing');
                if (((r.authorization.authing = !0), 'token' === l.response_type)) throw new O.Z({ errorCode: I.lTL.INVALID_COMMAND }, 'Authorization response_type "token" is not supported');
                return (
                    (0, N.S)()
                        ? Promise.resolve({ body: { id: a } })
                        : o.tn.get({
                              url: I.ANM.APPLICATION_RPC(a),
                              oldFormErrors: !0,
                              signal: i,
                              rejectWithError: !1
                          })
                )
                    .then(
                        (n) => {
                            let a = n.body;
                            if (r.application.id !== a.id) throw new O.Z({ errorCode: I.lTL.INVALID_CLIENTID }, "Application does not match the connection's");
                            let o = l.scopes || l.scope;
                            return (
                                delete l.scopes,
                                T(
                                    C(v({}, l), {
                                        scope: o,
                                        signal: i
                                    }),
                                    e,
                                    t
                                )
                            );
                        },
                        () => {
                            throw new O.Z({ errorCode: I.lTL.INVALID_CLIENTID }, 'Invalid client id: '.concat(a));
                        }
                    )
                    .then((e) => {
                        if (((r.authorization.authing = !1), null == e)) throw new O.Z({ errorCode: I.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
                        let t = new URL(e),
                            n = t.searchParams.get('error');
                        if (null != n && '' !== n) {
                            var i;
                            let e = null != (i = t.searchParams.get('error_description')) ? i : 'unknown error';
                            throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'OAuth2 Error: '.concat(n, ': ').concat(e));
                        }
                        let l = t.searchParams.get('code');
                        if (null == l) throw new O.Z({ errorCode: I.lTL.OAUTH2_ERROR }, 'OAuth2 Error: Unable to find auth code');
                        return { code: l };
                    })
                    .catch((e) => {
                        throw ((r.authorization.authing = !1), e);
                    });
            }
        }
    };
}
