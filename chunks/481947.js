l.d(e, { Ay: () => q, Kc: () => Y, Wr: () => X }), l(321073);
var t = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    n = l(172218),
    c = l(738678),
    o = l(960027),
    d = l(17928),
    u = l(990078),
    h = l(943812),
    m = l(428689),
    x = l(695366),
    A = l(661531),
    g = l(323384),
    N = l(39623),
    p = l(939249),
    j = l(778712),
    I = l(890856),
    E = l(666654),
    v = l(83107),
    C = l(615675),
    _ = l(990836),
    f = l(387755),
    L = l(440594),
    S = l(58149),
    O = l(20015),
    k = l(863089),
    T = l(85448),
    w = l(556525),
    R = l(402216),
    y = l(268218),
    D = l(609425),
    M = l(73392),
    b = l(137177),
    G = l(430363),
    K = l(823854),
    z = l(445913),
    Z = l(790381),
    P = l(266080),
    V = l(427262),
    U = l(652215),
    H = l(806931),
    J = l(544105),
    F = l(985018),
    B = l(80442);
let W = (0, y.Fe)({
        createPromise: () => Promise.all([l.e("23353"), l.e("28966")]).then(l.bind(l, 217356)),
        webpackId: 217356,
    }),
    X = (s) => {
        let { children: e, collapsed: l = !1, className: i } = s;
        return (0, t.jsx)("div", { className: r()(i, B.p_, l ? B.GT : B.m3), role: "group", children: e });
    };
function Y(s) {
    let {
        className: e,
        mute: l,
        localMute: i,
        localVideoDisabled: a,
        serverMute: n,
        deaf: d,
        serverDeaf: j,
        collapsed: I,
        video: S,
        isStreaming: k,
        disabled: T,
        isWatching: w,
        ringing: y,
        iconClassName: D,
        embeddedApplication: M,
        otherClientSessionType: b,
        voicePlatform: G,
        application: K,
        guildId: z,
        channelId: V,
        user: W,
        disconnected: X,
        isHovered: Y,
    } = s;
    if (I || T) return null;
    let q = [],
        $ = (function (s) {
            let { iconClassName: e, mute: l, localMute: i, serverMute: a, deaf: n, serverDeaf: c } = s,
                o = [];
            if (l) {
                let s;
                s = a || i ? E.O : v.z;
                let l = (0, t.jsx)(s, { className: r()(B.Kk, e, { [B.DU]: a }), color: "currentColor" });
                o.push(
                    (0, t.jsx)(
                        u.m,
                        {
                            text: i
                                ? F.intl.string(F.t.Q8Uzof)
                                : a
                                  ? F.intl.string(F.t.uLddbQ)
                                  : F.intl.string(F.t.tjtv3P),
                            children: l,
                        },
                        "mute",
                    ),
                );
            }
            if (c || n) {
                let s = c ? C.T : _.c,
                    l = (0, t.jsx)(s, { className: r()(B.Kk, e, { [B.DU]: c }), color: "currentColor" });
                o.push(
                    (0, t.jsx)(
                        u.m,
                        { text: c ? F.intl.string(F.t.btxSdB) : F.intl.string(F.t.NjmiOL), children: l },
                        "deaf",
                    ),
                );
            }
            return o;
        })({ iconClassName: D, mute: l, localMute: i, serverMute: n, deaf: d, serverDeaf: j });
    S &&
        (a
            ? q.push(
                  (0, t.jsx)(
                      u.m,
                      {
                          text: F.intl.string(F.t["PXMZ/+"]),
                          children: (0, t.jsx)(h.O, {
                              size: "md",
                              color: "currentColor",
                              className: r()(B.Kk, D),
                              colorClass: B.of,
                          }),
                      },
                      "video",
                  ),
              )
            : q.push(
                  (0, t.jsx)(
                      u.m,
                      {
                          text: F.intl.string(F.t.FlNoSV),
                          children: (0, t.jsx)(m.n, { size: "md", color: "currentColor", className: r()(B.Kk, D) }),
                      },
                      "video",
                  ),
              )),
        X &&
            q.push(
                (0, t.jsx)(
                    u.m,
                    {
                        text: F.intl.string(F.t.HFwRpk),
                        children: (0, t.jsx)(x.E, {
                            className: r()(B.Kk, D),
                            color: A.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != M &&
            q.push(
                (0, t.jsx)(
                    u.m,
                    {
                        text: (0, L.A)(M.name),
                        children: (0, t.jsx)(g.k, { size: "md", color: "currentColor", className: r()(B.Kk, D) }),
                    },
                    "activity",
                ),
            ),
        b === J.f$.XBOX || G === H.J7.XBOX
            ? q.push((0, t.jsx)(P.A, { className: r()(B.Kk, D) }, "xbox"))
            : b === J.f$.PLAYSTATION || G === H.J7.PLAYSTATION
              ? q.push((0, t.jsx)(Z.A, { className: r()(B.Kk, D) }, "playstation"))
              : G === H.J7.QUEST &&
                q.push((0, t.jsx)(c.G, { size: "xs", color: "currentColor", className: r()(B.Kk, D) }, "quest")),
        w &&
            q.push(
                (0, t.jsx)(
                    u.m,
                    {
                        text: F.intl.string(F.t["JH1SJ+"]),
                        children: (0, t.jsx)(N.b, { size: "xs", color: "currentColor", className: r()(B.Kk, D) }),
                    },
                    "watch",
                ),
            ),
        k && q.push((0, t.jsx)(R.Ay, { size: R.Ay.Sizes.SMALL }, "stream")),
        y &&
            null != V &&
            Y &&
            q.push(
                (0, t.jsx)(
                    u.m,
                    {
                        text: F.intl.string(F.t.ygslb0),
                        children: (0, t.jsx)(p.D, {
                            onClick: (s) => {
                                s.stopPropagation(), f.A.stopRinging(V, [W.id]);
                            },
                            children: (0, t.jsx)(o.z, {
                                size: "sm",
                                color: A.A.colors.ICON_FEEDBACK_CRITICAL,
                                className: r()(B.Kk, D),
                            }),
                        }),
                    },
                    "ring",
                ),
            );
    let ss = null != K && !(0, O.n)(K, U.gfo.EMBEDDED);
    return 0 !== q.length || 0 !== $.length || ss || y
        ? (0, t.jsxs)("div", {
              className: r()(B.Pt, e),
              children: [
                  (0, t.jsxs)("div", { className: B.RL, children: [$, q] }),
                  ss && !y
                      ? (0, t.jsx)("div", {
                            className: B.RL,
                            children: (0, t.jsx)(
                                Q,
                                { application: K, iconClassName: D, guildId: z, channelId: V, userId: W.id },
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
        a,
        n,
        {
            avatarContainerClass: c = B.H,
            userNameClassName: o = B.gr,
            size: h = U.OSZ.SMALL,
            selected: m = !1,
            disabled: x = !1,
            isOverlay: A = !1,
            ref: g,
            ...N
        } = s,
        {
            onClick: p,
            onKeyDown: E,
            onDoubleClick: v,
            onContextMenu: C,
            onMouseLeave: _,
            onMouseDown: f,
            priority: L,
            speaking: S = !1,
            collapsed: O,
            mute: R,
            serverMute: y,
            guildId: b,
            nick: Z,
            isGuest: P,
            flipped: H,
            className: J,
            overlap: X,
            "aria-label": q,
            ringing: Q,
            user: $,
        } = N,
        ss = (0, D.A)({ userId: $.id, guildId: b }),
        se = (0, M.a)({ displayNameStyles: ss }),
        sl = (0, k.A)($.id),
        st = (0, w.v)({
            isSpeaking: S,
            voiceDb: sl,
            ...(X ? { spreadDirection: w.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [si, sa] = i.useState(!1),
        sr = (0, d.bG)([K.A], () => K.A.getProgressForUserId($.id), [$.id]),
        sn = (0, G.Uk)("VoiceUser") && null != sr;
    return (0, t.jsx)(I.s, {
        ref: g,
        className: r()(J, {
            [B.q7]: !0,
            [B.EF]: X,
            [B.wH]: m,
            [B.vk]: null != p,
            [B.L9]: h === U.OSZ.SMALL,
            [B.p8]: h === U.OSZ.LARGE,
            [B.r9]: !m && x,
        }),
        onClick: (s) => {
            p?.(s, $);
        },
        onDoubleClick: (s) => {
            v?.(s, $);
        },
        onContextMenu: (s) => {
            C?.(s, $);
        },
        onMouseLeave: (s) => {
            _?.(s, $), sa(!1);
        },
        onMouseDown: (s) => {
            f?.(s, $);
        },
        onMouseEnter: () => {
            sa(!0);
        },
        onKeyDown: E,
        "aria-label": q ?? Z ?? $.username,
        focusProps: { offset: { right: 4 } },
        children: (0, t.jsxs)("div", {
            className: r()(B.Qs, { [B.zq]: H }),
            children: [
                L && !O
                    ? (0, t.jsx)(u.m, {
                          text: F.intl.string(F.t.BVK71i),
                          children: (0, t.jsx)("div", { className: r()(B.G, { [B.g4]: !R && !y && S }) }),
                      })
                    : null,
                ((e = r()(B.my, { [B.Jb]: h === U.OSZ.LARGE, [B.dT]: h === U.OSZ.SMALL, [B.DF]: Q })),
                (l = { backgroundImage: `url(${$.getAvatarURL(b, h === U.OSZ.LARGE ? 38 : 24)})`, ...st }),
                Q
                    ? (0, t.jsx)(T.A, {
                          size: h === U.OSZ.LARGE ? j._3.SIZE_40 : j._3.SIZE_24,
                          ringing: !0,
                          src: $.getAvatarURL(b, h === U.OSZ.LARGE ? 40 : 24),
                          className: r()(c, e),
                      })
                    : sn
                      ? (0, t.jsx)(z.A, {
                            userId: $.id,
                            wrapperClassName: c,
                            children: (0, t.jsx)("div", { className: e, style: l }),
                        })
                      : (0, t.jsx)("div", { className: r()(c, e), style: l })),
                ((a = (0, t.jsxs)("div", {
                    className: r()(o, B.Xh, se, { [B.Pi]: !R && !y && S, [B.DF]: Q }),
                    children: [
                        Z ?? V.Ay.getName($),
                        P
                            ? (0, t.jsxs)("span", { className: B.IW, children: ["\xa0", F.intl.string(F.t["pFO/Ph"])] })
                            : "",
                    ],
                })),
                (n = {
                    primaryGuild: $.primaryGuild,
                    userId: $.id,
                    contextGuildId: b,
                    isOverlay: A,
                    disableTooltip: !0,
                    className: r()(B.fc, A && B.zW),
                    profileViewedAnalytics: { source: A ? U.JJy.OVERLAY : U.ThZ.VOICE_PANEL },
                }),
                !O || A ? (0, t.jsx)(W, { ...n, children: a }) : null),
                (0, t.jsx)(Y, { disabled: x, ...N, isHovered: si }),
            ],
        }),
    });
};
function Q(s) {
    let { application: e, iconClassName: l, guildId: a, channelId: c, userId: o } = s,
        [d, h] = i.useState(!1),
        m = (0, n.K)((s) => h(s));
    return (
        i.useEffect(() => {
            d &&
                S.Ay.trackWithMetadata(U.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: c,
                    guild_id: a,
                    user_id: o,
                });
        }, [e.id, c, a, o, d]),
        (0, t.jsx)(u.m, {
            text: F.intl.formatToPlainString(F.t.Sq9xJ7, { game: e.name }),
            "aria-label": F.intl.formatToPlainString(F.t.Sq9xJ7, { game: e.name }),
            children: (0, t.jsx)(b.A, {
                ref: m,
                className: r()(B.Kk, B.Gt, l),
                game: e,
                size: b.M.XSMALL,
                onMouseEnter: () => {
                    S.Ay.trackWithMetadata(U.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: c,
                        guild_id: a,
                        game_name: e.name,
                        user_id: o,
                    });
                },
            }),
        })
    );
}
