n.d(t, { Z: () => A }), n(35282), n(997841), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(664751),
    i = n(373793),
    l = n(243814),
    a = n(149765),
    o = n(544891),
    s = n(63023),
    c = n(45792),
    u = n(433517),
    d = n(570140),
    p = n(812206),
    f = n(979200),
    h = n(489863),
    g = n(166148),
    m = n(307643),
    b = n(973616),
    _ = n(594174),
    E = n(70956),
    O = n(630388),
    v = n(700785),
    y = n(996106),
    I = n(186901),
    C = n(981631);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e, t) {
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
let T = "CachedTokens",
    P = { "1273616940451102832": new s.Z(2, +E.Z.Millis.MINUTE) };
async function j(e, t, n) {
    let r,
        l,
        o,
        s,
        c,
        {
            client_id: u,
            response_type: d = "code",
            redirect_uri: E,
            code_challenge: I,
            code_challenge_method: S,
            state: N,
            nonce: T,
            scope: j,
            permissions: x,
            guild_id: A,
            channel_id: Z,
            prompt: w,
            disable_guild_select: L,
            integration_type: R,
            pid: D,
            signal: M,
            isSocketRpcPrivateScope: k,
        } = e;
    if (null == M ? void 0 : M.aborted) throw new y.Z({ errorCode: C.lTL.UNKNOWN_ERROR }, "Request aborted");
    if (null == u) throw new y.Z({ errorCode: C.lTL.OAUTH2_ERROR }, "No Client ID provided");
    if (!k && null != E)
        throw new y.Z(
            { errorCode: C.lTL.OAUTH2_ERROR },
            "Redirect URI cannot be used in the RPC OAuth2 Authorization flow",
        );
    let U = [];
    if (
        ("string" == typeof j ? (U = j.split(" ").filter((e) => e.length > 0)) : Array.isArray(j) && (U = j),
        null == _.default.getCurrentUser())
    )
        throw new y.Z({ errorCode: C.lTL.OAUTH2_ERROR }, "Client is not logged in");
    if (null != R) l = Number(R);
    else {
        let e = (e) => {
                var t;
                return (
                    null != e &&
                    (0, O.yE)(e.flags, C.udG.EMBEDDED) &&
                    (null == (t = e.integrationTypesConfig) ? void 0 : t[i.Y.USER_INSTALL]) != null
                );
            },
            t = p.Z.getApplication(u);
        l = e(t) || e((t = b.ZP.createFromServer(await (0, m.UM)(u, M)))) ? i.Y.USER_INSTALL : i.Y.GUILD_INSTALL;
    }
    try {
        [o, { disclosures: s, allAcked: c }] = await Promise.all([
            (0, h.Ww)({
                clientId: u,
                scopes: U,
                responseType: d,
                redirectUri: E,
                codeChallenge: I,
                codeChallengeMethod: S,
                state: N,
                integrationType: l,
                signal: M,
            }),
            (0, f.de)(u),
        ]);
    } catch (t) {
        let { body: e } = t;
        throw new y.Z(
            { errorCode: C.lTL.OAUTH2_ERROR },
            "OAuth2 Authorization Error: ".concat((null == e ? void 0 : e.message) || "Unknown Error"),
        );
    }
    if (w === g.s.NONE && null != o && o.authorized && c)
        try {
            return (
                await (0, h.Iq)({
                    authorize: !0,
                    clientId: u,
                    scopes: U,
                    responseType: d,
                    redirectUri: E,
                    codeChallenge: I,
                    codeChallengeMethod: S,
                    state: N,
                    nonce: T,
                    integrationType: l,
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new y.Z(
                { errorCode: C.lTL.OAUTH2_ERROR },
                "OAuth2 Authorize Error: ".concat((null == e ? void 0 : e.message) || "Unknown Error"),
            );
        }
    null == n || n(o.application, Z, D);
    let G = v.Hn;
    try {
        G = a.vB(null != x ? x : 0);
    } catch (e) {}
    if (
        (null != o.integration_type &&
            Object.values(i.Y).includes(o.integration_type) &&
            (r = new Map()).set(o.integration_type, o),
        null != P[o.application.id] && (await P[o.application.id].process(), null == M ? void 0 : M.aborted))
    )
        throw new y.Z({ errorCode: C.lTL.UNKNOWN_ERROR }, "Request aborted");
    return t({
        clientId: u,
        authorizations: r,
        scopes: U,
        parsedPermissions: G,
        responseType: d,
        redirectUri: E,
        codeChallenge: I,
        codeChallengeMethod: S,
        state: N,
        guildId: A,
        channelId: Z,
        prompt: w,
        disableGuildSelect: L,
        disclosures: s,
        integrationType: l,
        pid: D,
        signal: M,
    });
}
function x(e, t) {
    if (e.authorization.accessToken) throw new y.Z({ errorCode: C.lTL.INVALID_COMMAND }, "Already authenticated");
    if (e.authorization.authing) throw new y.Z({ errorCode: C.lTL.INVALID_COMMAND }, "Already authenticating");
    return (
        (e.authorization.authing = !0),
        o.tn
            .get({
                url: C.ANM.OAUTH2_CURRENT_AUTH,
                headers: { Authorization: "Bearer ".concat(t) },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
            .then(
                (n) => {
                    e.authorization.authing = !1;
                    let { application: r, user: i, scopes: l, expires: a } = n.body;
                    if (e.application.id !== r.id)
                        throw new y.Z(
                            { errorCode: C.lTL.INVALID_CLIENTID },
                            "Application does not match the connection's",
                        );
                    let o = _.default.getCurrentUser();
                    if (null == o || !i || o.id !== i.id)
                        throw new y.Z({ errorCode: C.lTL.INVALID_TOKEN }, "Token does not match current user");
                    return (
                        (e.authorization.scopes = [...e.authorization.scopes, ...l, I.wE]),
                        (e.authorization.accessToken = t),
                        (e.authorization.expires = new Date(a)),
                        d.Z.dispatch({
                            type: "RPC_APP_AUTHENTICATED",
                            socketId: e.id,
                            application: e.application,
                        }),
                        N(S({}, n.body), { access_token: t })
                    );
                },
                () => {
                    throw new y.Z({ errorCode: C.lTL.INVALID_TOKEN }, "Invalid access token: ".concat(t));
                },
            )
            .catch((t) => {
                throw ((e.authorization.authing = !1), t);
            })
    );
}
function A(e, t) {
    return {
        [C.Etm.AUTHENTICATE]: (0, c.S)(C.Etm.AUTHENTICATE, {
            handler(n) {
                let {
                    socket: i,
                    signal: a,
                    args: { access_token: o },
                } = n;
                if (null == o && i.transport === I.He.IPC) {
                    let n = i.application.id;
                    if (null == n) throw new y.Z({ errorCode: C.lTL.INVALID_COMMAND }, "No application.");
                    let s = l.x.IDENTIFY,
                        c = () =>
                            j(
                                {
                                    client_id: n,
                                    scope: s,
                                    response_type: "token",
                                    signal: a,
                                    isSocketRpcPrivateScope: !1,
                                },
                                e,
                                t,
                            ).then((e) => {
                                if (null == e)
                                    throw new y.Z({ errorCode: C.lTL.UNKNOWN_ERROR }, "Unknown error occurred");
                                let t = e.split(/#|\?/),
                                    l = r.parse(t[t.length - 1]);
                                if (null != l.error) {
                                    var a;
                                    throw new y.Z(
                                        { errorCode: C.lTL.OAUTH2_ERROR },
                                        "OAuth2 Error: "
                                            .concat(l.error, ": ")
                                            .concat(null != (a = l.error_description) ? a : "unknown error"),
                                    );
                                }
                                return (
                                    !(function (e, t, n, r) {
                                        var i;
                                        let l = null != (i = u.K.get(T)) ? i : {};
                                        (l[e] = {
                                            accessToken: t,
                                            scope: n,
                                            expires: Date.now() + r,
                                        }),
                                            u.K.set(T, l);
                                    })(n, l.access_token, l.scope, l.expires_in),
                                    x(i, l.access_token)
                                );
                            });
                    return null !=
                        (o = (function (e, t) {
                            let n = u.K.get(T);
                            if (null != n && null != n[e]) {
                                let r = n[e];
                                if (!(r.scope !== t || r.expires <= Date.now())) return r.accessToken;
                                delete n[e], u.K.set(T, n);
                            }
                        })(n, s))
                        ? x(i, o).catch(() => {
                              var e;
                              let t = null != (e = u.K.get(T)) ? e : {};
                              return delete t[n], u.K.set(T, t), c();
                          })
                        : c();
                }
                if (null == o) throw new y.Z({ errorCode: C.lTL.INVALID_TOKEN }, "No access token provided");
                return x(i, o);
            },
        }),
        [C.Etm.AUTHORIZE]: {
            handler(n) {
                let { socket: r, signal: i, args: l } = n,
                    a = l.client_id;
                if (!a) throw new y.Z({ errorCode: C.lTL.INVALID_CLIENTID }, "No client id provided");
                if (null != r.authorization.accessToken)
                    throw new y.Z({ errorCode: C.lTL.INVALID_COMMAND }, "Already authenticated");
                if (r.authorization.authing) throw new y.Z({ errorCode: C.lTL.INVALID_COMMAND }, "Already authing");
                if (((r.authorization.authing = !0), "token" === l.response_type))
                    throw (
                        ((r.authorization.authing = !1),
                        new y.Z(
                            { errorCode: C.lTL.INVALID_COMMAND },
                            'Authorization response_type "token" is not supported',
                        ))
                    );
                let o = r.authorization.scopes.includes(I.cE);
                if (!o && r.application.id !== a)
                    throw (
                        ((r.authorization.authing = !1),
                        new y.Z({ errorCode: C.lTL.INVALID_CLIENTID }, "Application does not match the connection's"))
                    );
                let s = l.scopes || l.scope;
                return (
                    delete l.scopes,
                    j(
                        N(S({}, l), {
                            scope: s,
                            signal: i,
                            isSocketRpcPrivateScope: o,
                        }),
                        e,
                        t,
                    )
                        .then((e) => {
                            if (((r.authorization.authing = !1), null == e))
                                throw new y.Z({ errorCode: C.lTL.UNKNOWN_ERROR }, "Unknown error occurred");
                            let t = new URL(e),
                                n = t.searchParams.get("code");
                            if (o)
                                return {
                                    code: n,
                                    location: e,
                                };
                            let i = t.searchParams.get("error");
                            if (null != i && "" !== i) {
                                var l;
                                let e = null != (l = t.searchParams.get("error_description")) ? l : "unknown error";
                                throw new y.Z(
                                    { errorCode: C.lTL.OAUTH2_ERROR },
                                    "OAuth2 Error: ".concat(i, ": ").concat(e),
                                );
                            }
                            if (null == n)
                                throw new y.Z(
                                    { errorCode: C.lTL.OAUTH2_ERROR },
                                    "OAuth2 Error: Unable to find auth code",
                                );
                            return { code: n };
                        })
                        .catch((e) => {
                            throw ((r.authorization.authing = !1), e);
                        })
                );
            },
        },
    };
}
