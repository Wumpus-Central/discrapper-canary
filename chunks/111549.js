"use strict";
n.d(t, { A: () => et }), n(938796);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(821418),
    o = n(665260),
    c = n(80703),
    d = n(311907),
    u = n(362474),
    h = n(397927),
    _ = n(73153),
    p = n(846293),
    g = n(198982),
    m = n(964486),
    A = n(475743),
    f = n(17841),
    E = n(829691),
    x = n(854378),
    I = n(359438),
    N = n(383302),
    v = n(10088),
    T = n(921037),
    j = n(21599),
    C = n(942614),
    S = n(976860),
    y = n(210714),
    b = n(961350),
    R = n(650048),
    O = n(71393),
    L = n(299091),
    w = n(954571),
    k = n(975571),
    D = n(4274),
    B = n(877062),
    P = n(890698),
    U = n(129851),
    G = n(229),
    F = n(652215);
n(436317);
var M = n(172799),
    V = n(771016),
    W = n(396574),
    H = n(985018),
    K = n(153335);
d.Ay.initialize();
let z = "register",
    Q = "login";
function q(e) {
    let { message: t, onClick: n, invite: s } = e,
        r = s?.guild_scheduled_event != null;
    return W.VP
        ? (0, i.jsx)("div", {
              className: r ? K.QX : K.eT,
              children: (0, i.jsx)(h.Button, { text: t, onClick: n, variant: r ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, i.jsx)(x.KE, { className: K.eT });
}
function Y(e) {
    let { invite: t, handleAccept: n } = e,
        s =
            null != t.guild_scheduled_event
                ? (0, i.jsx)(I.X, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
                : (0, i.jsx)("div", { className: K.S3, children: (0, i.jsx)(P.A, { invite: t }) }),
        r =
            null != t.guild_scheduled_event && null != t.guild
                ? (0, i.jsx)(x.Ay, {
                      className: K.QX,
                      children: (0, i.jsx)(N.N, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                  })
                : null;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)(x.Ay, {
                children: [s, (0, i.jsx)(q, { message: H.intl.string(H.t.ohMvm1), onClick: n, invite: t })],
            }),
            r,
        ],
    });
}
function X(e) {
    let { invite: t, onContinue: n } = e;
    return (0, i.jsxs)(x.Ay, {
        children: [
            (0, i.jsx)(P.A, { invite: t }),
            W.VP
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              className: K.QX,
                              children: (0, i.jsx)(h.Button, {
                                  text: H.intl.string(H.t.UQvCf7),
                                  onClick: () => {
                                      w.default.track(F.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          p.Ay.openNativeAppModal(t.code);
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: K.Ot,
                              children: (0, i.jsx)(h.Button, {
                                  text: H.intl.string(H.t["2ixEBi"]),
                                  onClick: () => {
                                      w.default.track(F.HAw.INVITE_CTA_CLICKED, {
                                          action: "continue_in_browser",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          n?.();
                                  },
                                  variant: "secondary",
                                  fullWidth: !0,
                              }),
                          }),
                      ],
                  })
                : (0, i.jsx)(x.KE, { className: K.eT }),
        ],
    });
}
function J(e) {
    let { title: t } = e;
    return (0, i.jsxs)(x.Ay, { children: [(0, i.jsx)(x.hE, { children: t }), (0, i.jsx)(x.CK, {})] });
}
function $(e) {
    let { invite: t, error: n, handleAccept: s, handleDefaultTransition: r } = e;
    return (0, i.jsx)(x.Ay, {
        children: (0, i.jsxs)(h.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, i.jsx)(P.A, { invite: t, error: n?.message }),
                n?.code === F.t02.INVALID_CANNOT_FRIEND_SELF
                    ? (0, i.jsx)(q, { invite: t, message: H.intl.string(H.t.fIv16B), onClick: r })
                    : (0, i.jsx)(q, { invite: t, message: H.intl.string(H.t.ohMvm1), onClick: s }),
            ],
        }),
    });
}
function Z(e) {
    let { banned: t, handleDefaultTransition: n } = e;
    return (0, i.jsxs)(x.Ay, {
        children: [
            (0, i.jsx)(x.hE, { className: l()(K.Ot, K.QB), children: H.intl.string(H.t.kux01N) }),
            (0, i.jsx)(x.tK, { children: t ? H.intl.string(H.t["5AkWAd"]) : H.intl.string(H.t["+qUJAj"]) }),
            (0, i.jsx)(q, { message: H.intl.string(H.t.fIv16B), onClick: n }),
            (0, i.jsx)("div", {
                className: K.Ot,
                style: { textAlign: "left" },
                children: (0, i.jsx)(h.QWc, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: H.intl.string(H.t.urIwn4),
                    onClick: () => window.open(k.A.getArticleURL(F.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function ee(e) {
    let { handleDefaultTransition: t } = e;
    return (0, i.jsxs)(x.Ay, {
        children: [
            (0, i.jsx)(x.hE, { children: H.intl.string(H.t.fOc4gn) }),
            (0, i.jsx)(q, { message: H.intl.string(H.t.fIv16B), onClick: t }),
        ],
    });
}
function et(e) {
    let { inviteKey: t, location: n, transitionTo: r, login: l } = e,
        h = (0, d.bG)([L.A], () => L.A.getInvite(t)),
        x = (0, d.bG)([v.A], () => v.A.getState(t)),
        I = (0, d.bG)([b.default], () => b.default.isAuthenticated()),
        N = (0, d.bG)([R.A], () => R.A.defaultRoute),
        k = (0, d.bG)([f.A], () => f.A.isUnderageAnonymous()),
        [P, K] = s.useState(null),
        [q, et] = s.useState(!1);
    s.useLayoutEffect(() => {
        (x === F.fAW.OPEN || h?.state === F.elq.APP_OPENED) && et(!0);
    }, [h?.state, x]);
    let en = l ? Q : z,
        ei = s.useCallback((e) => p.Ay.getInviteContext(e, h), [h]),
        es = s.useCallback(
            (e) => {
                null != h &&
                    (null != h.channel || e?.channel != null) &&
                    (h.guild?.id != null
                        ? r(F.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(h.code))
                        : p.Ay.transitionToInvite(e ?? h, r));
            },
            [h, r],
        ),
        er = s.useCallback(() => {
            K(null),
                p.Ay.acceptInvite({
                    inviteKey: t,
                    context: ei(F.S3d.INVITE),
                    skipOnboarding: !0,
                    callback: (e) => {
                        (0, E.v)(e), null != e.channel && p.Ay.openApp(t, e.channel.id);
                    },
                }).catch((e) => {
                    if (e instanceof g.Wl || e instanceof g.LG) {
                        let t = (0, D.s)(e.code);
                        K({ code: e.code, message: t });
                    } else K({ code: e.code, message: H.intl.string(H.t.dDZRdy) });
                });
        }, [t, ei]),
        el = s.useCallback(() => {
            r(N);
        }, [N, r]);
    if (
        ((0, m.Ay)(() => {
            let e = b.default.getAnalyticsToken();
            if (
                (null != e &&
                    _.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: b.default.getId() }),
                w.default.track(F.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                (0, y.d)("invite"),
                W.VP || B.A.launch("discord://" + F.BVt.INVITE(t), () => void 0),
                !l && k)
            ) {
                let { baseCode: e } = (0, j.y$)(t);
                (0, S.bG)(F.BVt.INVITE_LOGIN(e));
            }
        }),
        s.useEffect(() => {
            h?.state === F.elq.APP_NOT_OPENED && es();
        }, [h?.state, es]),
        (function (e) {
            let {
                    invite: t,
                    inviteKey: n,
                    authenticated: i,
                    nativeAppState: r,
                    mode: l,
                    getAcceptInviteContext: d,
                    handleContinue: u,
                    transitionTo: h,
                } = e,
                _ = (0, A.A)(i),
                g = (0, A.A)(r);
            s.useEffect(() => {
                if (l === Q && i && !1 === _) {
                    let e = b.default.getFingerprint();
                    if (null != e) {
                        let i = (0, c.d)(e);
                        w.default.track(F.HAw.INVITE_LOGIN_SUCCESSFUL, {
                            invite_code: (0, j.m0)(n),
                            guild_id: t?.guild?.id,
                            channel_id: t?.channel?.id,
                            inviter_id: t?.inviter?.id,
                            prev_user_id: i,
                        });
                    }
                    p.Ay.acceptInvite({ inviteKey: n, context: d(F.S3d.INVITE), skipOnboarding: !0, callback: u });
                }
            }, [i, _, l, d, u, t, n]),
                s.useEffect(() => {
                    if (null != t && l === z && i && !1 === _) {
                        let { channel: e } = t;
                        if (null != e)
                            if (((0, C.C)(V.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                let e = (0, o.Lt)(t.flags ?? 0, a.Q.IS_APPLICATION_BYPASS),
                                    n =
                                        t.guild.features?.includes(F.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
                                        t.guild.features?.includes(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
                                !e && n
                                    ? h(F.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                    : h(F.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code));
                            } else p.Ay.transitionToInvite(t, h);
                    }
                }, [t, i, _, h, l]),
                s.useEffect(() => {
                    null != t &&
                        r !== g &&
                        r === F.fAW.OPEN &&
                        w.default.track(F.HAw.INVITE_APP_INVOKED, {
                            invite_code: (0, j.m0)(n),
                            guild_id: t.guild?.id,
                            channel_id: t.channel?.id,
                            inviter_id: t.inviter?.id,
                            user_is_member: null != t.guild && null != O.A.getGuild(t.guild.id),
                            size_total: t.approximate_member_count,
                            invite_type: null != t.type ? M.Xd[t.type] : void 0,
                        });
                }, [t, r, g, n]);
        })({
            invite: h,
            inviteKey: t,
            authenticated: I,
            nativeAppState: x,
            mode: en,
            getAcceptInviteContext: ei,
            handleContinue: es,
            transitionTo: r,
        }),
        null == h)
    )
        return null;
    if (q || x === F.fAW.OPEN || h.state === F.elq.APP_OPENED) return (0, i.jsx)(X, { invite: h, onContinue: es });
    let { state: ea } = h;
    if (ea === F.elq.APP_NOT_OPENED) return (0, i.jsx)(ee, { handleDefaultTransition: el });
    if ([F.elq.RESOLVING, F.elq.ACCEPTING, F.elq.APP_OPENING].includes(ea)) {
        let e = ea === F.elq.ACCEPTING ? H.intl.string(H.t["6wsY16"]) : (F.elq.RESOLVING, H.intl.string(H.t["Z+hCVU"]));
        return (0, i.jsx)(J, { title: e });
    }
    return ea === F.elq.EXPIRED
        ? (0, i.jsx)(Z, { banned: !1, handleDefaultTransition: el })
        : ea === F.elq.BANNED
          ? (0, i.jsx)(Z, { banned: !0, handleDefaultTransition: el })
          : ea === F.elq.ERROR
            ? (0, i.jsx)($, { invite: h, error: P, handleAccept: er, handleDefaultTransition: el })
            : ea === F.elq.RESOLVED
              ? I && (0, o.Lt)(h.flags ?? 0, a.Q.IS_GUEST_INVITE)
                  ? (p.Ay.openApp(h.code),
                    u.u.set(T.B, h.code),
                    (0, i.jsx)(X, { invite: h, onContinue: () => r(F.BVt.APP) }))
                  : I || !W.VP
                    ? (0, i.jsx)(Y, { invite: h, handleAccept: er })
                    : en === Q
                      ? (0, i.jsx)(U.A, { invite: h, transitionTo: r, location: n })
                      : (0, i.jsx)(G.A, {
                            invite: h,
                            onLoginStart: () => {
                                w.default.track(F.HAw.INVITE_LOGIN, {
                                    invite_code: h?.code,
                                    guild_id: h?.guild?.id,
                                    channel_id: h?.channel?.id,
                                    inviter_id: h?.inviter?.id,
                                });
                            },
                            location: n,
                            transitionTo: r,
                        })
              : null;
}
