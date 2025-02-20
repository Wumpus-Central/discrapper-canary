n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(570140),
    o = n(531826),
    a = n(812206),
    s = n(69580),
    c = n(371651),
    u = n(808506),
    d = n(358085),
    p = n(998502),
    h = n(145597),
    f = n(996106),
    g = n(703912),
    m = n(852926),
    b = n(981631);
let _ = (0, g.Z)(
    (e) => {
        var t;
        let { clientId: n, authorizations: u, scopes: d, parsedPermissions: p, responseType: g, redirectUri: _, codeChallenge: E, codeChallengeMethod: O, state: N, guildId: v, channelId: y, prompt: I, disableGuildSelect: C, disclosures: S, integrationType: T, pid: P } = e,
            j = 'OAuth2Authorize_'.concat(n, '_').concat(v, '_').concat(y),
            A = null != T ? (null == u ? void 0 : u.get(T)) : void 0,
            Z = null !== (t = null == A ? void 0 : A.application) && void 0 !== t ? t : a.Z.getApplication(n);
        return new Promise((e, t) => {
            let a = (0, m.jU)(P),
                A = (r) => {
                    let { clientId: i, location: o } = r;
                    (null == i || i === n) && (a.lock(), l.Z.unsubscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', A), null != location ? e(o) : t(new f.Z({ errorCode: b.lTL.OAUTH2_ERROR }, 'User cancelled authorization')));
                },
                x = c.default.isOverlayOOPEnabledForPid(null != P ? P : (0, h.QF)());
            if (a.context === b.IlC.OVERLAY && !x) {
                l.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', A),
                    l.Z.dispatch({
                        type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN',
                        clientId: n,
                        authorizeProps: {
                            authorizations: u,
                            clientId: n,
                            scopes: null != d ? d : [],
                            disclosures: null != S ? S : [],
                            responseType: g,
                            redirectUri: _,
                            codeChallenge: E,
                            codeChallengeMethod: O,
                            state: N,
                            permissions: p.toString(),
                            guildId: v,
                            channelId: y,
                            prompt: I,
                            disableGuildSelect: 'boolean' == typeof C ? C : 'true' === C,
                            integrationType: T
                        }
                    });
                return;
            }
            let L = i.z1l;
            null != Z &&
            null !=
                (0, o.ZP)({
                    application: Z,
                    channelId: y
                })
                ? (L = i.u1M)
                : x && (L = i.u1M),
                (0, i.h7j)(
                    (e) => {
                        var t, i;
                        return (0, r.jsx)(
                            s.OAuth2AuthorizeModal,
                            ((t = (function (e) {
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
                            })({}, e)),
                            (i = i =
                                {
                                    authorizations: u,
                                    clientId: n,
                                    scopes: null != d ? d : [],
                                    disclosures: null != S ? S : [],
                                    callback: A,
                                    responseType: g,
                                    redirectUri: _,
                                    codeChallenge: E,
                                    codeChallengeMethod: O,
                                    state: N,
                                    permissions: p,
                                    guildId: v,
                                    channelId: y,
                                    prompt: I,
                                    disableGuildSelect: 'boolean' == typeof C ? C : 'true' === C,
                                    integrationType: T
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            t)
                        );
                    },
                    {
                        modalKey: j,
                        onCloseRequest: () => {
                            (0, i.Mr3)(j), t(new f.Z({ errorCode: b.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                        }
                    },
                    L
                );
        });
    },
    function (e, t, n) {
        if (u.Z.isReady(null != n ? n : 0) || !d.isPlatformEmbedded) return;
        let r = (0, o.ZP)({
            application: e,
            channelId: t
        });
        (0, d.isWindows)() ? p.ZP.minimize(r) : p.ZP.restore(r), p.ZP.focus(r);
    }
);
