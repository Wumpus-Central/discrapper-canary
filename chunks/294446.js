n.d(t, { A: () => g }), n(323874), n(14289), n(35956);
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(231723),
    l = n(851907),
    s = n(587895),
    o = n(200330),
    d = n(321987),
    u = n(595244),
    c = n(723702),
    A = n(837921),
    h = n(636401),
    _ = n(990007),
    E = n(546983),
    p = n(652215),
    m = n(985018);
let g = (0, _.A)(
    (e) => {
        let {
                clientId: t,
                authorizations: n,
                scopes: c,
                parsedPermissions: A,
                responseType: _,
                redirectUri: g,
                codeChallenge: I,
                codeChallengeMethod: C,
                state: f,
                guildId: T,
                channelId: S,
                prompt: N,
                disableGuildSelect: O,
                disclosures: L,
                integrationType: y,
                pid: v,
                signal: b,
            } = e,
            D = `OAuth2Authorize_${t}_${T}_${S}`,
            R = null != y ? n?.get(y) : void 0,
            P = R?.application ?? s.A.getApplication(t);
        return new Promise((e, s) => {
            let R = (0, E.d5)(v),
                w = a.SY;
            null != P && null != (0, l.Ay)({ application: P, channelId: S })
                ? (w = a.KX)
                : R.context === p.BRT.POPOUT && (w = a.KX);
            let M = !1,
                U = (n) => {
                    let { clientId: a, location: l } = n;
                    if (null == a || a === t) {
                        if (((M = !0), null == l)) {
                            s(new h.A({ errorCode: p.Lw6.OAUTH2_ERROR }, "OAuth2 Error: No location provided")),
                                R.lock();
                            return;
                        }
                        (e(l), null == g || null == P)
                            ? R.lock()
                            : null == new URL(l).searchParams.get("error")
                              ? (0, r.openModal)(
                                    (e) => (0, i.jsx)(u.Sm, { application: P, ...e }),
                                    {
                                        onCloseCallback: () => {
                                            R.lock();
                                        },
                                    },
                                    w,
                                )
                              : (0, r.openModal)(
                                    (e) => (0, i.jsx)(u.xb, { ...e }),
                                    {
                                        onCloseCallback: () => {
                                            R.lock();
                                        },
                                    },
                                    w,
                                );
                    }
                },
                { cleanup: x } = (function (e, t) {
                    function n() {
                        (0, r.closeModal)(e) &&
                            (0, r.openModal)((e) =>
                                (0, i.jsx)(d.f, {
                                    ...e,
                                    title: m.intl.string(m.t.j2d6Km),
                                    subtitle: m.intl.string(m.t["4LKmN5"]),
                                    actions: [{ text: m.intl.string(m.t.cpT0Cq), onClick: e.onClose }],
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
                })(D, b);
            (0, r.openModal)(
                (e) =>
                    (0, i.jsx)(o.OAuth2AuthorizeModal, {
                        ...e,
                        authorizations: n,
                        clientId: t,
                        scopes: c ?? [],
                        disclosures: L ?? [],
                        callback: U,
                        responseType: _,
                        redirectUri: g,
                        codeChallenge: I,
                        codeChallengeMethod: C,
                        state: f,
                        permissions: A,
                        guildId: T,
                        channelId: S,
                        prompt: N,
                        disableGuildSelect: "boolean" == typeof O ? O : "true" === O,
                        integrationType: y,
                        cancelCompletesFlow: !0,
                    }),
                {
                    modalKey: D,
                    onCloseCallback: () => {
                        x(),
                            M ||
                                (s(new h.A({ errorCode: p.Lw6.OAUTH2_ERROR }, "User cancelled authorization")),
                                R.lock());
                    },
                },
                w,
            );
        });
    },
    function (e, t, n) {
        if ((0, E.kS)(n) || !c.isPlatformEmbedded) return;
        let i = (0, l.Ay)({ application: e, channelId: t });
        (0, c.isWindows)() ? A.Ay.minimize(i) : A.Ay.restore(i), A.Ay.focus(i);
    },
);
