n.d(t, { A: () => g }), n(323874), n(14289), n(35956);
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(851907),
    l = n(587895),
    s = n(200330),
    o = n(321987),
    d = n(595244),
    c = n(723702),
    u = n(837921),
    A = n(636401),
    h = n(990007),
    _ = n(546983),
    m = n(652215),
    p = n(985018);
let g = (0, h.A)(
    (e) => {
        let {
                clientId: t,
                authorizations: n,
                scopes: c,
                parsedPermissions: u,
                responseType: h,
                redirectUri: g,
                codeChallenge: E,
                codeChallengeMethod: f,
                state: I,
                guildId: C,
                channelId: N,
                prompt: T,
                disableGuildSelect: S,
                disclosures: x,
                integrationType: v,
                pid: b,
                signal: y,
            } = e,
            L = `OAuth2Authorize_${t}_${C}_${N}`,
            O = null != v ? n?.get(v) : void 0,
            R = O?.application ?? l.A.getApplication(t);
        return new Promise((e, l) => {
            let O = (0, _.d5)(b),
                P = r.SYi;
            null != R && null != (0, a.Ay)({ application: R, channelId: N })
                ? (P = r.KX8)
                : O.context === m.BRT.POPOUT && (P = r.KX8);
            let j = !1,
                D = (n) => {
                    let { clientId: a, location: s } = n;
                    if (null == a || a === t) {
                        if (((j = !0), null == s)) {
                            l(new A.A({ errorCode: m.Lw6.OAUTH2_ERROR }, "OAuth2 Error: No location provided")),
                                O.lock();
                            return;
                        }
                        (e(s), null == g || null == R)
                            ? O.lock()
                            : null == new URL(s).searchParams.get("error")
                              ? (0, r.qfG)(
                                    (e) => (0, i.jsx)(d.Sm, { application: R, ...e }),
                                    {
                                        onCloseCallback: () => {
                                            O.lock();
                                        },
                                    },
                                    P,
                                )
                              : (0, r.qfG)(
                                    (e) => (0, i.jsx)(d.xb, { ...e }),
                                    {
                                        onCloseCallback: () => {
                                            O.lock();
                                        },
                                    },
                                    P,
                                );
                    }
                },
                { cleanup: w } = (function (e, t) {
                    function n() {
                        (0, r.OoC)(e) &&
                            (0, r.qfG)((e) =>
                                (0, i.jsx)(o.f, {
                                    ...e,
                                    title: p.intl.string(p.t.j2d6Km),
                                    subtitle: p.intl.string(p.t["4LKmN5"]),
                                    actions: [{ text: p.intl.string(p.t.cpT0Cq), onClick: e.onClose }],
                                }),
                            );
                    }
                    return (
                        t?.addEventListener("abort", n),
                        {
                            cleanup: function () {
                                t?.removeEventListener("abort", n);
                            },
                        }
                    );
                })(L, y);
            (0, r.qfG)(
                (e) =>
                    (0, i.jsx)(s.OAuth2AuthorizeModal, {
                        ...e,
                        authorizations: n,
                        clientId: t,
                        scopes: c ?? [],
                        disclosures: x ?? [],
                        callback: D,
                        responseType: h,
                        redirectUri: g,
                        codeChallenge: E,
                        codeChallengeMethod: f,
                        state: I,
                        permissions: u,
                        guildId: C,
                        channelId: N,
                        prompt: T,
                        disableGuildSelect: "boolean" == typeof S ? S : "true" === S,
                        integrationType: v,
                        cancelCompletesFlow: !0,
                    }),
                {
                    modalKey: L,
                    onCloseCallback: () => {
                        w(),
                            j ||
                                (l(new A.A({ errorCode: m.Lw6.OAUTH2_ERROR }, "User cancelled authorization")),
                                O.lock());
                    },
                },
                P,
            );
        });
    },
    function (e, t, n) {
        if ((0, _.kS)(n) || !c.isPlatformEmbedded) return;
        let i = (0, a.Ay)({ application: e, channelId: t });
        (0, c.isWindows)() ? u.Ay.minimize(i) : u.Ay.restore(i), u.Ay.focus(i);
    },
);
