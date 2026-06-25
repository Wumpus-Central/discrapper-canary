t.d(e, { Ay: () => Y, Kc: () => Q, Wr: () => X }), t(321073);
var i = t(627968),
    n = t(64700),
    l = t(503698),
    r = t.n(l),
    a = t(172218),
    c = t(738678),
    o = t(960027),
    d = t(17928),
    u = t(990078),
    m = t(943812),
    x = t(428689),
    A = t(695366),
    g = t(661531),
    h = t(323384),
    N = t(39623),
    j = t(939249),
    p = t(778712),
    f = t(890856),
    S = t(666654),
    I = t(83107),
    L = t(615675),
    E = t(990836),
    C = t(387755),
    _ = t(440594),
    k = t(95561),
    O = t(20015),
    T = t(863089),
    v = t(85448),
    b = t(556525),
    R = t(402216),
    D = t(268218),
    K = t(609425),
    M = t(73392),
    P = t(769015),
    y = t(430363),
    G = t(823854),
    z = t(445913),
    V = t(790381),
    w = t(266080),
    U = t(427262),
    Z = t(652215),
    H = t(806931),
    J = t(544105),
    B = t(375708),
    F = t(58298);
let W = (0, D.Fe)({
    createPromise: () => Promise.all([t.e("89862"), t.e("28966")]).then(t.bind(t, 217356)),
    webpackId: 217356,
});
function X(s) {
    let { children: e, collapsed: t = !1, className: n } = s;
    return (0, i.jsx)("div", { className: r()(n, F.p_, t ? F.GT : F.m3), role: "group", children: e });
}
function Q(s) {
    let {
        className: e,
        mute: t,
        localMute: n,
        localVideoDisabled: l,
        serverMute: a,
        deaf: d,
        serverDeaf: p,
        collapsed: f,
        video: k,
        isStreaming: T,
        disabled: v,
        isWatching: b,
        ringing: D,
        iconClassName: K,
        embeddedApplication: M,
        otherClientSessionType: P,
        voicePlatform: y,
        application: G,
        game: z,
        guildId: U,
        channelId: W,
        user: X,
        disconnected: Q,
        isHovered: Y,
    } = s;
    if (f || v) return null;
    let $ = [],
        ss = (function (s) {
            let { iconClassName: e, mute: t, localMute: n, serverMute: l, deaf: a, serverDeaf: c } = s,
                o = [];
            if (t) {
                let s;
                s = l || n ? S.O : I.z;
                let t = (0, i.jsx)(s, { className: r()(F.Kk, e, { [F.DU]: l }), color: "currentColor" });
                o.push(
                    (0, i.jsx)(
                        u.m,
                        {
                            text: n
                                ? B.intl.string(B.t.Q8Uzof)
                                : l
                                  ? B.intl.string(B.t.uLddbQ)
                                  : B.intl.string(B.t.tjtv3P),
                            children: t,
                        },
                        "mute",
                    ),
                );
            }
            if (c || a) {
                let s = c ? L.T : E.c,
                    t = (0, i.jsx)(s, { className: r()(F.Kk, e, { [F.DU]: c }), color: "currentColor" });
                o.push(
                    (0, i.jsx)(
                        u.m,
                        { text: c ? B.intl.string(B.t.btxSdB) : B.intl.string(B.t.NjmiOL), children: t },
                        "deaf",
                    ),
                );
            }
            return o;
        })({ iconClassName: K, mute: t, localMute: n, serverMute: a, deaf: d, serverDeaf: p });
    k &&
        (l
            ? $.push(
                  (0, i.jsx)(
                      u.m,
                      {
                          text: B.intl.string(B.t["PXMZ/+"]),
                          children: (0, i.jsx)(m.O, {
                              size: "md",
                              color: "currentColor",
                              className: r()(F.Kk, K),
                              colorClass: F.of,
                          }),
                      },
                      "video",
                  ),
              )
            : $.push(
                  (0, i.jsx)(
                      u.m,
                      {
                          text: B.intl.string(B.t.FlNoSV),
                          children: (0, i.jsx)(x.n, { size: "md", color: "currentColor", className: r()(F.Kk, K) }),
                      },
                      "video",
                  ),
              )),
        Q &&
            $.push(
                (0, i.jsx)(
                    u.m,
                    {
                        text: B.intl.string(B.t.HFwRpk),
                        children: (0, i.jsx)(A.E, {
                            className: r()(F.Kk, K),
                            color: g.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != M &&
            $.push(
                (0, i.jsx)(
                    u.m,
                    {
                        text: (0, _.A)(M.name),
                        children: (0, i.jsx)(h.k, { size: "md", color: "currentColor", className: r()(F.Kk, K) }),
                    },
                    "activity",
                ),
            ),
        P === J.f$.XBOX || y === H.J7.XBOX
            ? $.push((0, i.jsx)(w.A, { className: r()(F.Kk, K) }, "xbox"))
            : P === J.f$.PLAYSTATION || y === H.J7.PLAYSTATION
              ? $.push((0, i.jsx)(V.A, { className: r()(F.Kk, K) }, "playstation"))
              : y === H.J7.QUEST &&
                $.push((0, i.jsx)(c.G, { size: "xs", color: "currentColor", className: r()(F.Kk, K) }, "quest")),
        b &&
            $.push(
                (0, i.jsx)(
                    u.m,
                    {
                        text: B.intl.string(B.t["JH1SJ+"]),
                        children: (0, i.jsx)(N.b, { size: "xs", color: "currentColor", className: r()(F.Kk, K) }),
                    },
                    "watch",
                ),
            ),
        T && $.push((0, i.jsx)(R.Ay, { size: R.Ay.Sizes.SMALL }, "stream")),
        D &&
            null != W &&
            Y &&
            $.push(
                (0, i.jsx)(
                    u.m,
                    {
                        text: B.intl.string(B.t.ygslb0),
                        children: (0, i.jsx)(j.D, {
                            onClick: (s) => {
                                s.stopPropagation(), C.A.stopRinging(W, [X.id]);
                            },
                            children: (0, i.jsx)(o.z, {
                                size: "sm",
                                color: g.A.colors.ICON_FEEDBACK_CRITICAL,
                                className: r()(F.Kk, K),
                            }),
                        }),
                    },
                    "ring",
                ),
            );
    let se = null != G && !(0, O.n)(G, Z.gfo.EMBEDDED);
    return 0 !== $.length || 0 !== ss.length || se || D
        ? (0, i.jsxs)("div", {
              className: r()(F.Pt, e),
              children: [
                  (0, i.jsxs)("div", { className: F.RL, children: [ss, $] }),
                  se && !D
                      ? (0, i.jsx)("div", {
                            className: F.RL,
                            children: (0, i.jsx)(
                                q,
                                { application: G, game: z, iconClassName: K, guildId: U, channelId: W, userId: X.id },
                                `${X.id}-game`,
                            ),
                        })
                      : null,
              ],
          })
        : null;
}
let Y = function (s) {
    let e,
        t,
        l,
        a,
        {
            avatarContainerClass: c = F.H,
            userNameClassName: o = F.gr,
            size: m = Z.OSZ.SMALL,
            selected: x = !1,
            disabled: A = !1,
            isOverlay: g = !1,
            ref: h,
            ...N
        } = s,
        {
            onClick: j,
            onKeyDown: S,
            onDoubleClick: I,
            onContextMenu: L,
            onMouseLeave: E,
            onMouseDown: C,
            priority: _,
            speaking: k = !1,
            collapsed: O,
            mute: R,
            localMute: D,
            serverMute: P,
            deaf: V,
            serverDeaf: w,
            guildId: H,
            nick: J,
            isGuest: X,
            flipped: Y,
            className: q,
            overlap: $,
            "aria-label": ss,
            ringing: se,
            user: st,
        } = N,
        si = (0, K.A)({ userId: st.id, guildId: H }),
        sn = (0, M.a)({ displayNameStyles: si }),
        sl = (0, T.A)(st.id),
        sr = (0, b.v)({
            isSpeaking: k,
            voiceDb: sl,
            ...($ ? { spreadDirection: b.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [sa, sc] = n.useState(!1),
        so = (() => {
            if (null != ss) return ss;
            let s = J ?? st.username,
                e = null;
            return (w
                ? (e = B.intl.string(B.t.btxSdB))
                : V
                  ? (e = B.intl.string(B.t.NjmiOL))
                  : D
                    ? (e = B.intl.string(B.t.Q8Uzof))
                    : P
                      ? (e = B.intl.string(B.t.uLddbQ))
                      : R && (e = B.intl.string(B.t.tjtv3P)),
            null != e)
                ? B.intl.formatToPlainString(B.t["1+MVBP"], { userName: s, status: e })
                : s;
        })(),
        sd = (0, d.bG)([G.A], () => G.A.getProgressForUserId(st.id), [st.id]),
        su = (0, y.Uk)("VoiceUser") && null != sd;
    return (0, i.jsx)(f.s, {
        ref: h,
        className: r()(q, {
            [F.q7]: !0,
            [F.EF]: $,
            [F.wH]: x,
            [F.vk]: null != j,
            [F.L9]: m === Z.OSZ.SMALL,
            [F.p8]: m === Z.OSZ.LARGE,
            [F.r9]: !x && A,
        }),
        onClick: function (s) {
            j?.(s, st);
        },
        onDoubleClick: function (s) {
            I?.(s, st);
        },
        onContextMenu: function (s) {
            L?.(s, st);
        },
        onMouseLeave: function (s) {
            E?.(s, st), sc(!1);
        },
        onMouseDown: function (s) {
            C?.(s, st);
        },
        onMouseEnter: function () {
            sc(!0);
        },
        onKeyDown: S,
        "aria-label": so,
        focusProps: { offset: { right: 4 } },
        children: (0, i.jsxs)("div", {
            className: r()(F.Qs, { [F.zq]: Y }),
            children: [
                _ && !O
                    ? (0, i.jsx)(u.m, {
                          text: B.intl.string(B.t.BVK71i),
                          children: (0, i.jsx)("div", { className: r()(F.G, { [F.g4]: !R && !P && k }) }),
                      })
                    : null,
                ((e = r()(F.my, { [F.Jb]: m === Z.OSZ.LARGE, [F.dT]: m === Z.OSZ.SMALL, [F.DF]: se })),
                (t = { backgroundImage: `url(${st.getAvatarURL(H, m === Z.OSZ.LARGE ? 38 : 24)})`, ...sr }),
                se
                    ? (0, i.jsx)(v.A, {
                          size: m === Z.OSZ.LARGE ? p._3.SIZE_40 : p._3.SIZE_24,
                          ringing: !0,
                          src: st.getAvatarURL(H, m === Z.OSZ.LARGE ? 40 : 24),
                          className: r()(c, e),
                      })
                    : su
                      ? (0, i.jsx)(z.A, {
                            userId: st.id,
                            wrapperClassName: c,
                            children: (0, i.jsx)("div", { className: e, style: t }),
                        })
                      : (0, i.jsx)("div", { className: r()(c, e), style: t })),
                ((l = (0, i.jsxs)("div", {
                    className: r()(o, F.Xh, sn, { [F.Pi]: !R && !P && k, [F.DF]: se }),
                    children: [
                        J ?? U.Ay.getName(st),
                        X
                            ? (0, i.jsxs)("span", { className: F.IW, children: ["\xa0", B.intl.string(B.t["pFO/Ph"])] })
                            : "",
                    ],
                })),
                (a = {
                    primaryGuild: st.primaryGuild,
                    userId: st.id,
                    contextGuildId: H,
                    isOverlay: g,
                    disableTooltip: !0,
                    className: r()(F.fc, g && F.zW),
                    profileViewedAnalytics: { source: g ? Z.JJy.OVERLAY : Z.ThZ.VOICE_PANEL },
                }),
                !O || g ? (0, i.jsx)(W, { ...a, children: l }) : null),
                (0, i.jsx)(Q, { disabled: A, ...N, isHovered: sa }),
            ],
        }),
    });
};
function q(s) {
    let { application: e, game: t, iconClassName: l, guildId: c, channelId: o, userId: d } = s,
        [m, x] = n.useState(!1),
        A = (0, a.K)((s) => x(s));
    return (
        n.useEffect(() => {
            m &&
                k.Ay.trackWithMetadata(Z.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: c,
                    user_id: d,
                });
        }, [e.id, o, c, d, m]),
        (0, i.jsx)(u.m, {
            text: B.intl.formatToPlainString(B.t.Sq9xJ7, { game: e.name }),
            "aria-label": B.intl.formatToPlainString(B.t.Sq9xJ7, { game: e.name }),
            children: (0, i.jsx)(P.A, {
                ref: A,
                className: r()(F.Kk, F.Gt, l),
                game: t ?? e,
                size: P.M.XSMALL,
                onMouseEnter: function () {
                    k.Ay.trackWithMetadata(Z.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: o,
                        guild_id: c,
                        game_name: e.name,
                        user_id: d,
                    });
                },
            }),
        })
    );
}
