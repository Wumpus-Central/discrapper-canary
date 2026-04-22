l.d(e, { Ay: () => q, Kc: () => Y, Wr: () => X }), l(321073);
var t = l(627968),
    a = l(64700),
    i = l(503698),
    r = l.n(i),
    n = l(172218),
    c = l(738678),
    o = l(960027),
    d = l(311907),
    h = l(990078),
    m = l(943812),
    x = l(428689),
    A = l(695366),
    u = l(827734),
    g = l(323384),
    p = l(39623),
    N = l(939249),
    v = l(778712),
    j = l(890856),
    w = l(666654),
    f = l(83107),
    I = l(615675),
    E = l(990836),
    C = l(387755),
    _ = l(440594),
    T = l(58149),
    L = l(20015),
    O = l(863089),
    Z = l(85448),
    S = l(556525),
    M = l(402216),
    R = l(268218),
    k = l(609425),
    y = l(73392),
    D = l(769015),
    V = l(430363),
    b = l(823854),
    G = l(261056),
    K = l(790381),
    z = l(266080),
    U = l(427262),
    J = l(652215),
    F = l(806931),
    H = l(544105),
    P = l(985018),
    B = l(80442);
let W = (0, R.Fe)({
        createPromise: () => Promise.all([l.e("23353"), l.e("28966")]).then(l.bind(l, 217356)),
        webpackId: 217356,
    }),
    X = (s) => {
        let { children: e, collapsed: l = !1, className: a } = s;
        return (0, t.jsx)("div", { className: r()(a, B.p_, l ? B.GT : B.m3), role: "group", children: e });
    };
function Y(s) {
    let {
        className: e,
        mute: l,
        localMute: a,
        localVideoDisabled: i,
        serverMute: n,
        deaf: d,
        serverDeaf: v,
        collapsed: j,
        video: T,
        isStreaming: O,
        disabled: Z,
        isWatching: S,
        ringing: R,
        iconClassName: k,
        embeddedApplication: y,
        otherClientSessionType: D,
        voicePlatform: V,
        application: b,
        guildId: G,
        channelId: U,
        user: W,
        disconnected: X,
        isHovered: Y,
    } = s;
    if (j || Z) return null;
    let q = [],
        $ = (function (s) {
            let { iconClassName: e, mute: l, localMute: a, serverMute: i, deaf: n, serverDeaf: c } = s,
                o = [];
            if (l) {
                let s;
                s = i || a ? w.O : f.z;
                let l = (0, t.jsx)(s, { className: r()(B.Kk, e, { [B.DU]: i }), color: "currentColor" });
                o.push(
                    (0, t.jsx)(
                        h.m,
                        {
                            text: a
                                ? P.intl.string(P.t.Q8Uzof)
                                : i
                                  ? P.intl.string(P.t.uLddbQ)
                                  : P.intl.string(P.t.tjtv3P),
                            children: l,
                        },
                        "mute",
                    ),
                );
            }
            if (c || n) {
                let s = c ? I.T : E.c,
                    l = (0, t.jsx)(s, { className: r()(B.Kk, e, { [B.DU]: c }), color: "currentColor" });
                o.push(
                    (0, t.jsx)(
                        h.m,
                        { text: c ? P.intl.string(P.t.btxSdB) : P.intl.string(P.t.NjmiOL), children: l },
                        "deaf",
                    ),
                );
            }
            return o;
        })({ iconClassName: k, mute: l, localMute: a, serverMute: n, deaf: d, serverDeaf: v });
    T &&
        (i
            ? q.push(
                  (0, t.jsx)(
                      h.m,
                      {
                          text: P.intl.string(P.t["PXMZ/+"]),
                          children: (0, t.jsx)(m.O, {
                              size: "md",
                              color: "currentColor",
                              className: r()(B.Kk, k),
                              colorClass: B.of,
                          }),
                      },
                      "video",
                  ),
              )
            : q.push(
                  (0, t.jsx)(
                      h.m,
                      {
                          text: P.intl.string(P.t.FlNoSV),
                          children: (0, t.jsx)(x.n, { size: "md", color: "currentColor", className: r()(B.Kk, k) }),
                      },
                      "video",
                  ),
              )),
        X &&
            q.push(
                (0, t.jsx)(
                    h.m,
                    {
                        text: P.intl.string(P.t.HFwRpk),
                        children: (0, t.jsx)(A.E, {
                            className: r()(B.Kk, k),
                            color: u.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != y &&
            q.push(
                (0, t.jsx)(
                    h.m,
                    {
                        text: (0, _.A)(y.name),
                        children: (0, t.jsx)(g.k, { size: "md", color: "currentColor", className: r()(B.Kk, k) }),
                    },
                    "activity",
                ),
            ),
        D === H.f$.XBOX || V === F.J7.XBOX
            ? q.push((0, t.jsx)(z.A, { className: r()(B.Kk, k) }, "xbox"))
            : D === H.f$.PLAYSTATION || V === F.J7.PLAYSTATION
              ? q.push((0, t.jsx)(K.A, { className: r()(B.Kk, k) }, "playstation"))
              : V === F.J7.QUEST &&
                q.push((0, t.jsx)(c.G, { size: "xs", color: "currentColor", className: r()(B.Kk, k) }, "quest")),
        S &&
            q.push(
                (0, t.jsx)(
                    h.m,
                    {
                        text: P.intl.string(P.t["JH1SJ+"]),
                        children: (0, t.jsx)(p.b, { size: "xs", color: "currentColor", className: r()(B.Kk, k) }),
                    },
                    "watch",
                ),
            ),
        O && q.push((0, t.jsx)(M.Ay, { size: M.Ay.Sizes.SMALL }, "stream")),
        R &&
            null != U &&
            Y &&
            q.push(
                (0, t.jsx)(
                    h.m,
                    {
                        text: P.intl.string(P.t.ygslb0),
                        children: (0, t.jsx)(N.D, {
                            onClick: (s) => {
                                s.stopPropagation(), C.A.stopRinging(U, [W.id]);
                            },
                            children: (0, t.jsx)(o.z, {
                                size: "sm",
                                color: u.A.colors.ICON_FEEDBACK_CRITICAL,
                                className: r()(B.Kk, k),
                            }),
                        }),
                    },
                    "ring",
                ),
            );
    let ss = null != b && !(0, L.n)(b, J.gfo.EMBEDDED);
    return 0 !== q.length || 0 !== $.length || ss || R
        ? (0, t.jsxs)("div", {
              className: r()(B.Pt, e),
              children: [
                  (0, t.jsxs)("div", { className: B.RL, children: [$, q] }),
                  ss && !R
                      ? (0, t.jsx)("div", {
                            className: B.RL,
                            children: (0, t.jsx)(
                                Q,
                                { application: b, iconClassName: k, guildId: G, channelId: U, userId: W.id },
                                `${W.id}-game`,
                            ),
                        })
                      : null,
              ],
          })
        : null;
}
let q = function (s) {
    let e,
        l,
        i,
        n,
        {
            avatarContainerClass: c = B.H,
            userNameClassName: o = B.gr,
            size: m = J.OSZ.SMALL,
            selected: x = !1,
            disabled: A = !1,
            isOverlay: u = !1,
            ref: g,
            ...p
        } = s,
        {
            onClick: N,
            onKeyDown: w,
            onDoubleClick: f,
            onContextMenu: I,
            onMouseLeave: E,
            onMouseDown: C,
            priority: _,
            speaking: T = !1,
            collapsed: L,
            mute: M,
            serverMute: R,
            guildId: D,
            nick: K,
            isGuest: z,
            flipped: F,
            className: H,
            overlap: X,
            "aria-label": q,
            ringing: Q,
            user: $,
        } = p,
        ss = (0, k.A)({ userId: $.id, guildId: D }),
        se = (0, y.a)({ displayNameStyles: ss }),
        sl = (0, O.A)($.id),
        st = (0, S.v)({
            isSpeaking: T,
            voiceDb: sl,
            ...(X ? { spreadDirection: S.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [sa, si] = a.useState(!1),
        sr = (0, d.bG)([b.A], () => b.A.getProgressForUserId($.id), [$.id]),
        sn = (0, V.Uk)("VoiceUser") && null != sr;
    return (0, t.jsx)(j.s, {
        ref: g,
        className: r()(H, {
            [B.q7]: !0,
            [B.EF]: X,
            [B.wH]: x,
            [B.vk]: null != N,
            [B.L9]: m === J.OSZ.SMALL,
            [B.p8]: m === J.OSZ.LARGE,
            [B.r9]: !x && A,
        }),
        onClick: (s) => {
            N?.(s, $);
        },
        onDoubleClick: (s) => {
            f?.(s, $);
        },
        onContextMenu: (s) => {
            I?.(s, $);
        },
        onMouseLeave: (s) => {
            E?.(s, $), si(!1);
        },
        onMouseDown: (s) => {
            C?.(s, $);
        },
        onMouseEnter: () => {
            si(!0);
        },
        onKeyDown: w,
        "aria-label": q ?? K ?? $.username,
        focusProps: { offset: { right: 4 } },
        children: (0, t.jsxs)("div", {
            className: r()(B.Qs, { [B.zq]: F }),
            children: [
                _ && !L
                    ? (0, t.jsx)(h.m, {
                          text: P.intl.string(P.t.BVK71i),
                          children: (0, t.jsx)("div", { className: r()(B.G, { [B.g4]: !M && !R && T }) }),
                      })
                    : null,
                ((e = r()(B.my, { [B.Jb]: m === J.OSZ.LARGE, [B.dT]: m === J.OSZ.SMALL, [B.DF]: Q })),
                (l = { backgroundImage: `url(${$.getAvatarURL(D, m === J.OSZ.LARGE ? 38 : 24)})`, ...st }),
                Q
                    ? (0, t.jsx)(Z.A, {
                          size: m === J.OSZ.LARGE ? v._3.SIZE_40 : v._3.SIZE_24,
                          ringing: !0,
                          src: $.getAvatarURL(D, m === J.OSZ.LARGE ? 40 : 24),
                          className: r()(c, e),
                      })
                    : sn
                      ? (0, t.jsx)(G.A, {
                            userId: $.id,
                            wrapperClassName: c,
                            children: (0, t.jsx)("div", { className: e, style: l }),
                        })
                      : (0, t.jsx)("div", { className: r()(c, e), style: l })),
                ((i = (0, t.jsxs)("div", {
                    className: r()(o, B.Xh, se, { [B.Pi]: !M && !R && T, [B.DF]: Q }),
                    children: [
                        K ?? U.Ay.getName($),
                        z
                            ? (0, t.jsxs)("span", { className: B.IW, children: ["\xa0", P.intl.string(P.t["pFO/Ph"])] })
                            : "",
                    ],
                })),
                (n = {
                    primaryGuild: $.primaryGuild,
                    userId: $.id,
                    contextGuildId: D,
                    isOverlay: u,
                    disableTooltip: !0,
                    className: r()(B.fc, u && B.zW),
                    profileViewedAnalytics: { source: u ? J.JJy.OVERLAY : J.ThZ.VOICE_PANEL },
                }),
                !L || u ? (0, t.jsx)(W, { ...n, children: i }) : null),
                (0, t.jsx)(Y, { disabled: A, ...p, isHovered: sa }),
            ],
        }),
    });
};
function Q(s) {
    let { application: e, iconClassName: l, guildId: i, channelId: c, userId: o } = s,
        [d, m] = a.useState(!1),
        x = (0, n.K)((s) => m(s));
    return (
        a.useEffect(() => {
            d &&
                T.Ay.trackWithMetadata(J.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: c,
                    guild_id: i,
                    user_id: o,
                });
        }, [e.id, c, i, o, d]),
        (0, t.jsx)(h.m, {
            text: P.intl.formatToPlainString(P.t.Sq9xJ7, { game: e.name }),
            "aria-label": P.intl.formatToPlainString(P.t.Sq9xJ7, { game: e.name }),
            children: (0, t.jsx)(D.A, {
                ref: x,
                className: r()(B.Kk, B.Gt, l),
                game: e,
                size: D.M.XSMALL,
                onMouseEnter: () => {
                    T.Ay.trackWithMetadata(J.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: c,
                        guild_id: i,
                        game_name: e.name,
                        user_id: o,
                    });
                },
            }),
        })
    );
}
