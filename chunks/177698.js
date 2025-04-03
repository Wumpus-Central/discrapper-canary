n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(531826),
    a = n(812206),
    o = n(69580),
    s = n(358085),
    c = n(998502),
    u = n(996106),
    d = n(703912),
    p = n(852926),
    h = n(981631);
let f = (0, d.Z)(
    (e) => {
        var t;
        let { clientId: n, authorizations: s, scopes: c, parsedPermissions: d, responseType: f, redirectUri: g, codeChallenge: m, codeChallengeMethod: b, state: _, guildId: E, channelId: O, prompt: N, disableGuildSelect: y, disclosures: I, integrationType: v, pid: C } = e,
            S = 'OAuth2Authorize_'.concat(n, '_').concat(E, '_').concat(O),
            T = null != v ? (null == s ? void 0 : s.get(v)) : void 0,
            P = null != (t = null == T ? void 0 : T.application) ? t : a.Z.getApplication(n);
        return new Promise((e, t) => {
            let a = (0, p.jU)(C),
                T = !1,
                j = (r) => {
                    let { clientId: i, location: l } = r;
                    (null == i || i === n) && ((T = !0), null != location ? e(l) : t(new u.Z({ errorCode: h.lTL.OAUTH2_ERROR }, 'User cancelled authorization')), a.lock());
                },
                A = i.z1l;
            null != P &&
            null !=
                (0, l.ZP)({
                    application: P,
                    channelId: O
                })
                ? (A = i.u1M)
                : a.context === h.IlC.POPOUT && (A = i.u1M),
                (0, i.h7j)(
                    (e) => {
                        var t, i;
                        return (0, r.jsx)(
                            o.OAuth2AuthorizeModal,
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
                                    authorizations: s,
                                    clientId: n,
                                    scopes: null != c ? c : [],
                                    disclosures: null != I ? I : [],
                                    callback: j,
                                    responseType: f,
                                    redirectUri: g,
                                    codeChallenge: m,
                                    codeChallengeMethod: b,
                                    state: _,
                                    permissions: d,
                                    guildId: E,
                                    channelId: O,
                                    prompt: N,
                                    disableGuildSelect: 'boolean' == typeof y ? y : 'true' === y,
                                    integrationType: v
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
                        modalKey: S,
                        onCloseRequest: () => {
                            (0, i.Mr3)(S);
                        },
                        onCloseCallback: () => {
                            T || (t(new u.Z({ errorCode: h.lTL.OAUTH2_ERROR }, 'User cancelled authorization')), a.lock());
                        }
                    },
                    A
                );
        });
    },
    function (e, t, n) {
        if ((0, p.br)(n) || !s.isPlatformEmbedded) return;
        let r = (0, l.ZP)({
            application: e,
            channelId: t
        });
        (0, s.isWindows)() ? c.ZP.minimize(r) : c.ZP.restore(r), c.ZP.focus(r);
    }
);
