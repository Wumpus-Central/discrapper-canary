(n.d(t, { Z: () => E }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685));
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
function O(e, t) {
    function n() {
        (0, i.Mr3)(e) &&
            (0, i.h7j)((e) =>
                (0, r.jsx)(
                    s.j,
                    _(b({}, e), {
                        children: (0, r.jsx)(c.Lk, {
                            message: m.intl.string(m.t['4LKmNz']),
                            onClose: e.onClose
                        })
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
}
let E = (0, h.Z)(
    (e) => {
        var t;
        let { clientId: n, authorizations: u, scopes: d, parsedPermissions: h, responseType: E, redirectUri: y, codeChallenge: I, codeChallengeMethod: v, state: C, guildId: S, channelId: N, prompt: T, disableGuildSelect: P, disclosures: j, integrationType: A, pid: Z, signal: x } = e,
            L = 'OAuth2Authorize_'.concat(n, '_').concat(S, '_').concat(N),
            w = null != A ? (null == u ? void 0 : u.get(A)) : void 0,
            R = null != (t = null == w ? void 0 : w.application) ? t : a.Z.getApplication(n);
        return new Promise((e, t) => {
            let a = (0, f.jU)(Z),
                w = i.z1l;
            null != R &&
            null !=
                (0, l.ZP)({
                    application: R,
                    channelId: N
                })
                ? (w = i.u1M)
                : a.context === g.IlC.POPOUT && (w = i.u1M);
            let D = !1,
                k = (l) => {
                    let { clientId: o, location: u } = l;
                    if (null == o || o === n) {
                        if (((D = !0), null == u)) {
                            (t(new p.Z({ errorCode: g.lTL.OAUTH2_ERROR }, 'OAuth2 Error: No location provided')), a.lock());
                            return;
                        }
                        if (null == y || null == R) {
                            (e(u), a.lock());
                            return;
                        }
                        if (null == new URL(u).searchParams.get('error')) {
                            let t = 'OAuth2AuthorizeExternalSuccess_'.concat(n, '_').concat(S, '_').concat(N),
                                { cleanup: l } = O(t, x);
                            (0, i.h7j)(
                                (e) =>
                                    (0, r.jsx)(
                                        s.j,
                                        _(b({}, e), {
                                            footer: (0, r.jsx)(c.qN, {
                                                application: R,
                                                onClose: e.onClose,
                                                message: m.intl.format(m.t.toiFdH, { appName: R.name })
                                            }),
                                            children: (0, r.jsx)(c._0, { application: R })
                                        })
                                    ),
                                {
                                    modalKey: t,
                                    onCloseCallback: () => {
                                        (l(), e(u), a.lock());
                                    }
                                },
                                w
                            );
                        } else {
                            let t = 'OAuth2AuthorizeExternalError_'.concat(n, '_').concat(S, '_').concat(N),
                                { cleanup: l } = O(t, x);
                            (0, i.h7j)(
                                (e) =>
                                    (0, r.jsx)(
                                        s.j,
                                        _(b({}, e), {
                                            footer: (0, r.jsx)(c.qN, {
                                                application: R,
                                                onClose: e.onClose,
                                                message: m.intl.string(m.t.llRef3)
                                            }),
                                            children: (0, r.jsx)(c.Mx, {})
                                        })
                                    ),
                                {
                                    modalKey: t,
                                    onCloseCallback: () => {
                                        (l(), e(u), a.lock());
                                    }
                                },
                                w
                            );
                        }
                    }
                },
                { cleanup: M } = O(L, x);
            (0, i.h7j)(
                (e) =>
                    (0, r.jsx)(
                        o.OAuth2AuthorizeModal,
                        _(b({}, e), {
                            authorizations: u,
                            clientId: n,
                            scopes: null != d ? d : [],
                            disclosures: null != j ? j : [],
                            callback: k,
                            responseType: E,
                            redirectUri: y,
                            codeChallenge: I,
                            codeChallengeMethod: v,
                            state: C,
                            permissions: h,
                            guildId: S,
                            channelId: N,
                            prompt: T,
                            disableGuildSelect: 'boolean' == typeof P ? P : 'true' === P,
                            integrationType: A,
                            cancelCompletesFlow: !0
                        })
                    ),
                {
                    modalKey: L,
                    onCloseCallback: () => {
                        (M(), D || (t(new p.Z({ errorCode: g.lTL.OAUTH2_ERROR }, 'User cancelled authorization')), a.lock()));
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
