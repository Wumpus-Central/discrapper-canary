"use strict";
n.d(t, { A: () => ei }), n(938796);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(821418),
    o = n(665260),
    c = n(80703),
    d = n(311907),
    u = n(362474),
    _ = n(821609),
    h = n(331322),
    m = n(123292),
    p = n(73153),
    g = n(846293),
    A = n(198982),
    f = n(964486),
    x = n(475743),
    E = n(17841),
    I = n(829691),
    v = n(854378),
    N = n(359438),
    j = n(383302),
    C = n(10088),
    T = n(921037),
    b = n(21599),
    S = n(942614),
    y = n(976860),
    R = n(210714),
    w = n(961350),
    O = n(650048),
    L = n(71393),
    k = n(299091),
    G = n(954571),
    U = n(975571),
    D = n(4274),
    P = n(877062),
    B = n(890698),
    M = n(129851),
    V = n(229),
    F = n(652215);
n(436317);
var W = n(172799),
    H = n(771016),
    z = n(396574),
    K = n(985018),
    Q = n(818050);
d.Ay.initialize();
let q = "register",
    Y = "login";
function X(e) {
    let { message: t, onClick: n, invite: s } = e,
        r = s?.guild_scheduled_event != null;
    return z.VP
        ? (0, i.jsx)("div", {
              className: r ? Q.QX : Q.eT,
              children: (0, i.jsx)(_.$, { text: t, onClick: n, variant: r ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, i.jsx)(v.KE, { className: Q.eT });
}
function $(e) {
    let { invite: t, handleAccept: n } = e,
        s =
            null != t.guild_scheduled_event
                ? (0, i.jsx)(N.X, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
                : (0, i.jsx)("div", { className: Q.S3, children: (0, i.jsx)(B.A, { invite: t }) }),
        r =
            null != t.guild_scheduled_event && null != t.guild
                ? (0, i.jsx)(v.Ay, {
                      className: Q.QX,
                      children: (0, i.jsx)(j.N, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                  })
                : null;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)(v.Ay, {
                children: [s, (0, i.jsx)(X, { message: K.intl.string(K.t.ohMvm1), onClick: n, invite: t })],
            }),
            r,
        ],
    });
}
function Z(e) {
    let { invite: t, onContinue: n } = e;
    return (0, i.jsxs)(v.Ay, {
        children: [
            (0, i.jsx)(B.A, { invite: t }),
            z.VP
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              className: Q.QX,
                              children: (0, i.jsx)(_.$, {
                                  text: K.intl.string(K.t.UQvCf7),
                                  onClick: () => {
                                      G.default.track(F.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          g.Ay.openNativeAppModal(t.code);
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: Q.Ot,
                              children: (0, i.jsx)(_.$, {
                                  text: K.intl.string(K.t["2ixEBi"]),
                                  onClick: () => {
                                      G.default.track(F.HAw.INVITE_CTA_CLICKED, {
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
                : (0, i.jsx)(v.KE, { className: Q.eT }),
        ],
    });
}
function J(e) {
    let { title: t } = e;
    return (0, i.jsxs)(v.Ay, { children: [(0, i.jsx)(v.hE, { children: t }), (0, i.jsx)(v.CK, {})] });
}
function ee(e) {
    let { invite: t, error: n, handleAccept: s, handleDefaultTransition: r } = e;
    return (0, i.jsx)(v.Ay, {
        children: (0, i.jsxs)(h.B, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, i.jsx)(B.A, { invite: t, error: n?.message }),
                n?.code === F.t02.INVALID_CANNOT_FRIEND_SELF
                    ? (0, i.jsx)(X, { invite: t, message: K.intl.string(K.t.fIv16B), onClick: r })
                    : (0, i.jsx)(X, { invite: t, message: K.intl.string(K.t.ohMvm1), onClick: s }),
            ],
        }),
    });
}
function et(e) {
    let { banned: t, handleDefaultTransition: n } = e;
    return (0, i.jsxs)(v.Ay, {
        children: [
            (0, i.jsx)(v.hE, { className: l()(Q.Ot, Q.QB), children: K.intl.string(K.t.kux01N) }),
            (0, i.jsx)(v.tK, { children: t ? K.intl.string(K.t["5AkWAd"]) : K.intl.string(K.t["+qUJAj"]) }),
            (0, i.jsx)(X, { message: K.intl.string(K.t.fIv16B), onClick: n }),
            (0, i.jsx)("div", {
                className: Q.Ot,
                style: { textAlign: "left" },
                children: (0, i.jsx)(m.Q, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: K.intl.string(K.t.urIwn4),
                    onClick: () => window.open(U.A.getArticleURL(F.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function en(e) {
    let { handleDefaultTransition: t } = e;
    return (0, i.jsxs)(v.Ay, {
        children: [
            (0, i.jsx)(v.hE, { children: K.intl.string(K.t.fOc4gn) }),
            (0, i.jsx)(X, { message: K.intl.string(K.t.fIv16B), onClick: t }),
        ],
    });
}
function ei(e) {
    let { inviteKey: t, location: n, transitionTo: r, login: l } = e,
        _ = (0, d.bG)([k.A], () => k.A.getInvite(t)),
        h = (0, d.bG)([C.A], () => C.A.getState(t)),
        m = (0, d.bG)([w.default], () => w.default.isAuthenticated()),
        v = (0, d.bG)([O.A], () => O.A.defaultRoute),
        N = (0, d.bG)([E.A], () => E.A.isUnderageAnonymous()),
        [j, U] = s.useState(null),
        [B, Q] = s.useState(!1);
    s.useLayoutEffect(() => {
        (h === F.fAW.OPEN || _?.state === F.elq.APP_OPENED) && Q(!0);
    }, [_?.state, h]);
    let X = l ? Y : q,
        ei = s.useCallback((e) => g.Ay.getInviteContext(e, _), [_]),
        es = s.useCallback(
            (e) => {
                null != _ &&
                    (null != _.channel || e?.channel != null) &&
                    (_.guild?.id != null
                        ? r(F.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(_.code))
                        : g.Ay.transitionToInvite(e ?? _, r));
            },
            [_, r],
        ),
        er = s.useCallback(() => {
            U(null),
                g.Ay.acceptInvite({
                    inviteKey: t,
                    context: ei(F.S3d.INVITE),
                    skipOnboarding: !0,
                    callback: (e) => {
                        (0, I.v)(e), null != e.channel && g.Ay.openApp(t, e.channel.id);
                    },
                }).catch((e) => {
                    if (e instanceof A.Wl || e instanceof A.LG) {
                        let t = (0, D.s)(e.code);
                        U({ code: e.code, message: t });
                    } else U({ code: e.code, message: K.intl.string(K.t.dDZRdy) });
                });
        }, [t, ei]),
        el = s.useCallback(() => {
            r(v);
        }, [v, r]);
    if (
        ((0, f.Ay)(() => {
            let e = w.default.getAnalyticsToken();
            if (
                (null != e &&
                    p.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: w.default.getId() }),
                G.default.track(F.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                (0, R.d)("invite"),
                z.VP || P.A.launch("discord://" + F.BVt.INVITE(t), () => void 0),
                !l && N)
            ) {
                let { baseCode: e } = (0, b.y$)(t);
                (0, y.bG)(F.BVt.INVITE_LOGIN(e));
            }
        }),
        s.useEffect(() => {
            _?.state === F.elq.APP_NOT_OPENED && es();
        }, [_?.state, es]),
        (function (e) {
            let {
                    invite: t,
                    inviteKey: n,
                    authenticated: i,
                    nativeAppState: r,
                    mode: l,
                    getAcceptInviteContext: d,
                    handleContinue: u,
                    transitionTo: _,
                } = e,
                h = (0, x.A)(i),
                m = (0, x.A)(r);
            s.useEffect(() => {
                if (l === Y && i && !1 === h) {
                    let e = w.default.getFingerprint();
                    if (null != e) {
                        let i = (0, c.d)(e);
                        G.default.track(F.HAw.INVITE_LOGIN_SUCCESSFUL, {
                            invite_code: (0, b.m0)(n),
                            guild_id: t?.guild?.id,
                            channel_id: t?.channel?.id,
                            inviter_id: t?.inviter?.id,
                            prev_user_id: i,
                        });
                    }
                    g.Ay.acceptInvite({ inviteKey: n, context: d(F.S3d.INVITE), skipOnboarding: !0, callback: u });
                }
            }, [i, h, l, d, u, t, n]),
                s.useEffect(() => {
                    if (null != t && l === q && i && !1 === h) {
                        let { channel: e } = t;
                        if (null != e)
                            if (((0, S.C)(H.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                let e = (0, o.Lt)(t.flags ?? 0, a.Q.IS_APPLICATION_BYPASS),
                                    n =
                                        t.guild.features?.includes(F.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
                                        t.guild.features?.includes(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
                                !e && n
                                    ? _(F.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                    : _(F.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code));
                            } else g.Ay.transitionToInvite(t, _);
                    }
                }, [t, i, h, _, l]),
                s.useEffect(() => {
                    null != t &&
                        r !== m &&
                        r === F.fAW.OPEN &&
                        G.default.track(F.HAw.INVITE_APP_INVOKED, {
                            invite_code: (0, b.m0)(n),
                            guild_id: t.guild?.id,
                            channel_id: t.channel?.id,
                            inviter_id: t.inviter?.id,
                            user_is_member: null != t.guild && null != L.A.getGuild(t.guild.id),
                            size_total: t.approximate_member_count,
                            invite_type: null != t.type ? W.Xd[t.type] : void 0,
                        });
                }, [t, r, m, n]);
        })({
            invite: _,
            inviteKey: t,
            authenticated: m,
            nativeAppState: h,
            mode: X,
            getAcceptInviteContext: ei,
            handleContinue: es,
            transitionTo: r,
        }),
        null == _)
    )
        return null;
    if (B || h === F.fAW.OPEN || _.state === F.elq.APP_OPENED) return (0, i.jsx)(Z, { invite: _, onContinue: es });
    let { state: ea } = _;
    if (ea === F.elq.APP_NOT_OPENED) return (0, i.jsx)(en, { handleDefaultTransition: el });
    if ([F.elq.RESOLVING, F.elq.ACCEPTING, F.elq.APP_OPENING].includes(ea)) {
        let e = ea === F.elq.ACCEPTING ? K.intl.string(K.t["6wsY16"]) : (F.elq.RESOLVING, K.intl.string(K.t["Z+hCVU"]));
        return (0, i.jsx)(J, { title: e });
    }
    return ea === F.elq.EXPIRED
        ? (0, i.jsx)(et, { banned: !1, handleDefaultTransition: el })
        : ea === F.elq.BANNED
          ? (0, i.jsx)(et, { banned: !0, handleDefaultTransition: el })
          : ea === F.elq.ERROR
            ? (0, i.jsx)(ee, { invite: _, error: j, handleAccept: er, handleDefaultTransition: el })
            : ea === F.elq.RESOLVED
              ? m && (0, o.Lt)(_.flags ?? 0, a.Q.IS_GUEST_INVITE)
                  ? (g.Ay.openApp(_.code),
                    u.u.set(T.B, _.code),
                    (0, i.jsx)(Z, { invite: _, onContinue: () => r(F.BVt.APP) }))
                  : m || !z.VP
                    ? (0, i.jsx)($, { invite: _, handleAccept: er })
                    : X === Y
                      ? (0, i.jsx)(M.A, { invite: _, transitionTo: r, location: n })
                      : (0, i.jsx)(V.A, {
                            invite: _,
                            onLoginStart: () => {
                                G.default.track(F.HAw.INVITE_LOGIN, {
                                    invite_code: _?.code,
                                    guild_id: _?.guild?.id,
                                    channel_id: _?.channel?.id,
                                    inviter_id: _?.inviter?.id,
                                });
                            },
                            location: n,
                            transitionTo: r,
                        })
              : null;
}
