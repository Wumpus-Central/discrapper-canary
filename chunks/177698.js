n.d(t, { Z: () => E }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(531826),
    a = n(812206),
    s = n(69580),
    o = n(787025),
    c = n(397394),
    u = n(358085),
    d = n(998502),
    p = n(996106),
    f = n(703912),
    g = n(852926),
    h = n(981631),
    m = n(388032);
function _(e) {
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
function b(e, t) {
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
let E = (0, f.Z)(
    (e) => {
        var t;
        let {
                clientId: n,
                authorizations: u,
                scopes: d,
                parsedPermissions: f,
                responseType: E,
                redirectUri: O,
                codeChallenge: v,
                codeChallengeMethod: y,
                state: I,
                guildId: C,
                channelId: S,
                prompt: T,
                disableGuildSelect: N,
                disclosures: j,
                integrationType: P,
                pid: x,
                signal: A,
            } = e,
            Z = "OAuth2Authorize_".concat(n, "_").concat(C, "_").concat(S),
            w = null != P ? (null == u ? void 0 : u.get(P)) : void 0,
            L = null != (t = null == w ? void 0 : w.application) ? t : a.Z.getApplication(n);
        return new Promise((e, t) => {
            let a = (0, g.jU)(x),
                w = i.z1l;
            null != L &&
            null !=
                (0, l.ZP)({
                    application: L,
                    channelId: S,
                })
                ? (w = i.u1M)
                : a.context === h.IlC.POPOUT && (w = i.u1M);
            let R = !1,
                D = (l) => {
                    let { clientId: s, location: o } = l;
                    if (null == s || s === n) {
                        if (((R = !0), null == o)) {
                            t(new p.Z({ errorCode: h.lTL.OAUTH2_ERROR }, "OAuth2 Error: No location provided")),
                                a.lock();
                            return;
                        }
                        if ((e(o), null == O || null == L)) return void a.lock();
                        null == new URL(o).searchParams.get("error")
                            ? (0, i.h7j)(
                                  (e) => (0, r.jsx)(c.$0, _({ application: L }, e)),
                                  {
                                      onCloseCallback: () => {
                                          a.lock();
                                      },
                                  },
                                  w,
                              )
                            : (0, i.h7j)(
                                  (e) => (0, r.jsx)(c.ks, _({}, e)),
                                  {
                                      onCloseCallback: () => {
                                          a.lock();
                                      },
                                  },
                                  w,
                              );
                    }
                },
                { cleanup: M } = (function (e, t) {
                    function n() {
                        (0, i.Mr3)(e) &&
                            (0, i.h7j)((e) =>
                                (0, r.jsx)(
                                    o.j,
                                    b(_({}, e), {
                                        title: m.intl.string(m.t.j2d6Km),
                                        subtitle: m.intl.string(m.t["4LKmN5"]),
                                        actions: [
                                            {
                                                text: m.intl.string(m.t.cpT0Cq),
                                                onClick: e.onClose,
                                            },
                                        ],
                                    }),
                                ),
                            );
                    }
                    return (
                        null == t || t.addEventListener("abort", n),
                        {
                            cleanup: function () {
                                null == t || t.removeEventListener("abort", n);
                            },
                        }
                    );
                })(Z, A);
            (0, i.h7j)(
                (e) =>
                    (0, r.jsx)(
                        s.OAuth2AuthorizeModal,
                        b(_({}, e), {
                            authorizations: u,
                            clientId: n,
                            scopes: null != d ? d : [],
                            disclosures: null != j ? j : [],
                            callback: D,
                            responseType: E,
                            redirectUri: O,
                            codeChallenge: v,
                            codeChallengeMethod: y,
                            state: I,
                            permissions: f,
                            guildId: C,
                            channelId: S,
                            prompt: T,
                            disableGuildSelect: "boolean" == typeof N ? N : "true" === N,
                            integrationType: P,
                            cancelCompletesFlow: !0,
                        }),
                    ),
                {
                    modalKey: Z,
                    onCloseCallback: () => {
                        M(),
                            R ||
                                (t(new p.Z({ errorCode: h.lTL.OAUTH2_ERROR }, "User cancelled authorization")),
                                a.lock());
                    },
                },
                w,
            );
        });
    },
    function (e, t, n) {
        if ((0, g.br)(n) || !u.isPlatformEmbedded) return;
        let r = (0, l.ZP)({
            application: e,
            channelId: t,
        });
        (0, u.isWindows)() ? d.ZP.minimize(r) : d.ZP.restore(r), d.ZP.focus(r);
    },
);
