(n.d(t, { Z: () => O }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685));
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(531826),
    a = n(812206),
    o = n(69580),
    s = n(787025),
    c = n(397394),
    u = n(358085),
    d = n(998502),
    p = n(996106),
    h = n(703912),
    f = n(852926),
    g = n(981631),
    m = n(388032);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function _(e, t) {
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
let O = (0, h.Z)(
    (e) => {
        var t;
        let { clientId: n, authorizations: u, scopes: d, parsedPermissions: h, responseType: O, redirectUri: E, codeChallenge: y, codeChallengeMethod: v, state: I, guildId: C, channelId: S, prompt: N, disableGuildSelect: T, disclosures: P, integrationType: j, pid: A, signal: x } = e,
            Z = 'OAuth2Authorize_'.concat(n, '_').concat(C, '_').concat(S),
            w = null != j ? (null == u ? void 0 : u.get(j)) : void 0,
            L = null != (t = null == w ? void 0 : w.application) ? t : a.Z.getApplication(n);
        return new Promise((e, t) => {
            let a = (0, f.jU)(A),
                w = i.z1l;
            null != L &&
            null !=
                (0, l.ZP)({
                    application: L,
                    channelId: S
                })
                ? (w = i.u1M)
                : a.context === g.IlC.POPOUT && (w = i.u1M);
            let R = !1,
                D = (l) => {
                    let { clientId: o, location: s } = l;
                    if (null == o || o === n) {
                        if (((R = !0), null == s)) {
                            (t(new p.Z({ errorCode: g.lTL.OAUTH2_ERROR }, 'OAuth2 Error: No location provided')), a.lock());
                            return;
                        }
                        if ((e(s), null == E || null == L)) return void a.lock();
                        null == new URL(s).searchParams.get('error')
                            ? (0, i.h7j)(
                                  (e) => (0, r.jsx)(c.$0, b({ application: L }, e)),
                                  {
                                      onCloseCallback: () => {
                                          a.lock();
                                      }
                                  },
                                  w
                              )
                            : (0, i.h7j)(
                                  (e) => (0, r.jsx)(c.ks, b({}, e)),
                                  {
                                      onCloseCallback: () => {
                                          a.lock();
                                      }
                                  },
                                  w
                              );
                    }
                },
                { cleanup: k } = (function (e, t) {
                    function n() {
                        (0, i.Mr3)(e) &&
                            (0, i.h7j)((e) =>
                                (0, r.jsx)(
                                    s.j,
                                    _(b({}, e), {
                                        title: m.intl.string(m.t.j2d6Ki),
                                        subtitle: m.intl.string(m.t['4LKmNz']),
                                        actions: [
                                            {
                                                text: m.intl.string(m.t.cpT0Cg),
                                                onClick: e.onClose
                                            }
                                        ]
                                    })
                                )
                            );
                    }
                    return (
                        null == t || t.addEventListener('abort', n),
                        {
                            cleanup: function () {
                                null == t || t.removeEventListener('abort', n);
                            }
                        }
                    );
                })(Z, x);
            (0, i.h7j)(
                (e) =>
                    (0, r.jsx)(
                        o.OAuth2AuthorizeModal,
                        _(b({}, e), {
                            authorizations: u,
                            clientId: n,
                            scopes: null != d ? d : [],
                            disclosures: null != P ? P : [],
                            callback: D,
                            responseType: O,
                            redirectUri: E,
                            codeChallenge: y,
                            codeChallengeMethod: v,
                            state: I,
                            permissions: h,
                            guildId: C,
                            channelId: S,
                            prompt: N,
                            disableGuildSelect: 'boolean' == typeof T ? T : 'true' === T,
                            integrationType: j,
                            cancelCompletesFlow: !0
                        })
                    ),
                {
                    modalKey: Z,
                    onCloseCallback: () => {
                        (k(), R || (t(new p.Z({ errorCode: g.lTL.OAUTH2_ERROR }, 'User cancelled authorization')), a.lock()));
                    }
                },
                w
            );
        });
    },
    function (e, t, n) {
        if ((0, f.br)(n) || !u.isPlatformEmbedded) return;
        let r = (0, l.ZP)({
            application: e,
            channelId: t
        });
        ((0, u.isWindows)() ? d.ZP.minimize(r) : d.ZP.restore(r), d.ZP.focus(r));
    }
);
