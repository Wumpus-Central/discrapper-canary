l.d(s, { Ay: () => q, Kc: () => Y, Wr: () => X }), l(321073);
var t = l(627968),
    i = l(64700),
    r = l(503698),
    n = l.n(r),
    a = l(172218),
    c = l(738678),
    o = l(960027),
    d = l(17928),
    u = l(990078),
    m = l(943812),
    x = l(428689),
    A = l(695366),
    h = l(661531),
    g = l(323384),
    N = l(39623),
    j = l(939249),
    p = l(778712),
    I = l(890856),
    S = l(666654),
    E = l(83107),
    L = l(615675),
    C = l(990836),
    _ = l(387755),
    k = l(440594),
    O = l(95561),
    f = l(20015),
    T = l(863089),
    v = l(85448),
    R = l(556525),
    b = l(402216),
    D = l(268218),
    K = l(609425),
    y = l(252545),
    G = l(137177),
    M = l(430363),
    z = l(823854),
    P = l(445913),
    w = l(790381),
    V = l(266080),
    Z = l(427262),
    U = l(652215),
    H = l(806931),
    J = l(544105),
    F = l(375708),
    B = l(80442);
let W = (0, D.Fe)({
        createPromise: () =>
            Promise.all([
                l.e("80203"),
                l.e("92582"),
                l.e("87306"),
                l.e("10004"),
                l.e("23353"),
                l.e("70653"),
                l.e("28966"),
            ]).then(l.bind(l, 217356)),
        webpackId: 217356,
    }),
    X = (e) => {
        let { children: s, collapsed: l = !1, className: i } = e;
        return (0, t.jsx)("div", { className: n()(i, B.p_, l ? B.GT : B.m3), role: "group", children: s });
    };
function Y(e) {
    let {
        className: s,
        mute: l,
        localMute: i,
        localVideoDisabled: r,
        serverMute: a,
        deaf: d,
        serverDeaf: p,
        collapsed: I,
        video: O,
        isStreaming: T,
        disabled: v,
        isWatching: R,
        ringing: D,
        iconClassName: K,
        embeddedApplication: y,
        otherClientSessionType: G,
        voicePlatform: M,
        application: z,
        game: P,
        guildId: Z,
        channelId: W,
        user: X,
        disconnected: Y,
        isHovered: q,
    } = e;
    if (I || v) return null;
    let $ = [],
        ee = (function (e) {
            let { iconClassName: s, mute: l, localMute: i, serverMute: r, deaf: a, serverDeaf: c } = e,
                o = [];
            if (l) {
                let e;
                e = r || i ? S.O : E.z;
                let l = (0, t.jsx)(e, { className: n()(B.Kk, s, { [B.DU]: r }), color: "currentColor" });
                o.push(
                    (0, t.jsx)(
                        u.m,
                        {
                            text: i
                                ? F.intl.string(F.t.Q8Uzof)
                                : r
                                  ? F.intl.string(F.t.uLddbQ)
                                  : F.intl.string(F.t.tjtv3P),
                            children: l,
                        },
                        "mute",
                    ),
                );
            }
            if (c || a) {
                let e = c ? L.T : C.c,
                    l = (0, t.jsx)(e, { className: n()(B.Kk, s, { [B.DU]: c }), color: "currentColor" });
                o.push(
                    (0, t.jsx)(
                        u.m,
                        { text: c ? F.intl.string(F.t.btxSdB) : F.intl.string(F.t.NjmiOL), children: l },
                        "deaf",
                    ),
                );
            }
            return o;
        })({ iconClassName: K, mute: l, localMute: i, serverMute: a, deaf: d, serverDeaf: p });
    O &&
        (r
            ? $.push(
                  (0, t.jsx)(
                      u.m,
                      {
                          text: F.intl.string(F.t["PXMZ/+"]),
                          children: (0, t.jsx)(m.O, {
                              size: "md",
                              color: "currentColor",
                              className: n()(B.Kk, K),
                              colorClass: B.of,
                          }),
                      },
                      "video",
                  ),
              )
            : $.push(
                  (0, t.jsx)(
                      u.m,
                      {
                          text: F.intl.string(F.t.FlNoSV),
                          children: (0, t.jsx)(x.n, { size: "md", color: "currentColor", className: n()(B.Kk, K) }),
                      },
                      "video",
                  ),
              )),
        Y &&
            $.push(
                (0, t.jsx)(
                    u.m,
                    {
                        text: F.intl.string(F.t.HFwRpk),
                        children: (0, t.jsx)(A.E, {
                            className: n()(B.Kk, K),
                            color: h.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != y &&
            $.push(
                (0, t.jsx)(
                    u.m,
                    {
                        text: (0, k.A)(y.name),
                        children: (0, t.jsx)(g.k, { size: "md", color: "currentColor", className: n()(B.Kk, K) }),
                    },
                    "activity",
                ),
            ),
        G === J.f$.XBOX || M === H.J7.XBOX
            ? $.push((0, t.jsx)(V.A, { className: n()(B.Kk, K) }, "xbox"))
            : G === J.f$.PLAYSTATION || M === H.J7.PLAYSTATION
              ? $.push((0, t.jsx)(w.A, { className: n()(B.Kk, K) }, "playstation"))
              : M === H.J7.QUEST &&
                $.push((0, t.jsx)(c.G, { size: "xs", color: "currentColor", className: n()(B.Kk, K) }, "quest")),
        R &&
            $.push(
                (0, t.jsx)(
                    u.m,
                    {
                        text: F.intl.string(F.t["JH1SJ+"]),
                        children: (0, t.jsx)(N.b, { size: "xs", color: "currentColor", className: n()(B.Kk, K) }),
                    },
                    "watch",
                ),
            ),
        T && $.push((0, t.jsx)(b.Ay, { size: b.Ay.Sizes.SMALL }, "stream")),
        D &&
            null != W &&
            q &&
            $.push(
                (0, t.jsx)(
                    u.m,
                    {
                        text: F.intl.string(F.t.ygslb0),
                        children: (0, t.jsx)(j.D, {
                            onClick: (e) => {
                                e.stopPropagation(), _.A.stopRinging(W, [X.id]);
                            },
                            children: (0, t.jsx)(o.z, {
                                size: "sm",
                                color: h.A.colors.ICON_FEEDBACK_CRITICAL,
                                className: n()(B.Kk, K),
                            }),
                        }),
                    },
                    "ring",
                ),
            );
    let es = null != z && !(0, f.n)(z, U.gfo.EMBEDDED);
    return 0 !== $.length || 0 !== ee.length || es || D
        ? (0, t.jsxs)("div", {
              className: n()(B.Pt, s),
              children: [
                  (0, t.jsxs)("div", { className: B.RL, children: [ee, $] }),
                  es && !D
                      ? (0, t.jsx)("div", {
                            className: B.RL,
                            children: (0, t.jsx)(
                                Q,
                                { application: z, game: P, iconClassName: K, guildId: Z, channelId: W, userId: X.id },
                                `${X.id}-game`,
                            ),
                        })
                      : null,
              ],
          })
        : null;
}
let q = function (e) {
    let s,
        l,
        r,
        a,
        {
            avatarContainerClass: c = B.H,
            userNameClassName: o = B.gr,
            size: m = U.OSZ.SMALL,
            selected: x = !1,
            disabled: A = !1,
            isOverlay: h = !1,
            ref: g,
            ...N
        } = e,
        {
            onClick: j,
            onKeyDown: S,
            onDoubleClick: E,
            onContextMenu: L,
            onMouseLeave: C,
            onMouseDown: _,
            priority: k,
            speaking: O = !1,
            collapsed: f,
            mute: b,
            serverMute: D,
            guildId: G,
            nick: w,
            isGuest: V,
            flipped: H,
            className: J,
            overlap: X,
            "aria-label": q,
            ringing: Q,
            user: $,
        } = N,
        ee = (0, K.A)({ userId: $.id, guildId: G }),
        es = (0, y.a)({ displayNameStyles: ee }),
        el = (0, T.A)($.id),
        et = (0, R.v)({
            isSpeaking: O,
            voiceDb: el,
            ...(X ? { spreadDirection: R.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [ei, er] = i.useState(!1),
        en = (0, d.bG)([z.A], () => z.A.getProgressForUserId($.id), [$.id]),
        ea = (0, M.Uk)("VoiceUser") && null != en;
    return (0, t.jsx)(I.s, {
        ref: g,
        className: n()(J, {
            [B.q7]: !0,
            [B.EF]: X,
            [B.wH]: x,
            [B.vk]: null != j,
            [B.L9]: m === U.OSZ.SMALL,
            [B.p8]: m === U.OSZ.LARGE,
            [B.r9]: !x && A,
        }),
        onClick: (e) => {
            j?.(e, $);
        },
        onDoubleClick: (e) => {
            E?.(e, $);
        },
        onContextMenu: (e) => {
            L?.(e, $);
        },
        onMouseLeave: (e) => {
            C?.(e, $), er(!1);
        },
        onMouseDown: (e) => {
            _?.(e, $);
        },
        onMouseEnter: () => {
            er(!0);
        },
        onKeyDown: S,
        "aria-label": q ?? w ?? $.username,
        focusProps: { offset: { right: 4 } },
        children: (0, t.jsxs)("div", {
            className: n()(B.Qs, { [B.zq]: H }),
            children: [
                k && !f
                    ? (0, t.jsx)(u.m, {
                          text: F.intl.string(F.t.BVK71i),
                          children: (0, t.jsx)("div", { className: n()(B.G, { [B.g4]: !b && !D && O }) }),
                      })
                    : null,
                ((s = n()(B.my, { [B.Jb]: m === U.OSZ.LARGE, [B.dT]: m === U.OSZ.SMALL, [B.DF]: Q })),
                (l = { backgroundImage: `url(${$.getAvatarURL(G, m === U.OSZ.LARGE ? 38 : 24)})`, ...et }),
                Q
                    ? (0, t.jsx)(v.A, {
                          size: m === U.OSZ.LARGE ? p._3.SIZE_40 : p._3.SIZE_24,
                          ringing: !0,
                          src: $.getAvatarURL(G, m === U.OSZ.LARGE ? 40 : 24),
                          className: n()(c, s),
                      })
                    : ea
                      ? (0, t.jsx)(P.A, {
                            userId: $.id,
                            wrapperClassName: c,
                            children: (0, t.jsx)("div", { className: s, style: l }),
                        })
                      : (0, t.jsx)("div", { className: n()(c, s), style: l })),
                ((r = (0, t.jsxs)("div", {
                    className: n()(o, B.Xh, es, { [B.Pi]: !b && !D && O, [B.DF]: Q }),
                    children: [
                        w ?? Z.Ay.getName($),
                        V
                            ? (0, t.jsxs)("span", { className: B.IW, children: ["\xa0", F.intl.string(F.t["pFO/Ph"])] })
                            : "",
                    ],
                })),
                (a = {
                    primaryGuild: $.primaryGuild,
                    userId: $.id,
                    contextGuildId: G,
                    isOverlay: h,
                    disableTooltip: !0,
                    className: n()(B.fc, h && B.zW),
                    profileViewedAnalytics: { source: h ? U.JJy.OVERLAY : U.ThZ.VOICE_PANEL },
                }),
                !f || h ? (0, t.jsx)(W, { ...a, children: r }) : null),
                (0, t.jsx)(Y, { disabled: A, ...N, isHovered: ei }),
            ],
        }),
    });
};
function Q(e) {
    let { application: s, game: l, iconClassName: r, guildId: c, channelId: o, userId: d } = e,
        [m, x] = i.useState(!1),
        A = (0, a.K)((e) => x(e));
    return (
        i.useEffect(() => {
            m &&
                O.Ay.trackWithMetadata(U.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: c,
                    user_id: d,
                });
        }, [s.id, o, c, d, m]),
        (0, t.jsx)(u.m, {
            text: F.intl.formatToPlainString(F.t.Sq9xJ7, { game: s.name }),
            "aria-label": F.intl.formatToPlainString(F.t.Sq9xJ7, { game: s.name }),
            children: (0, t.jsx)(G.A, {
                ref: A,
                className: n()(B.Kk, B.Gt, r),
                game: l ?? s,
                size: G.M.XSMALL,
                onMouseEnter: () => {
                    O.Ay.trackWithMetadata(U.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: o,
                        guild_id: c,
                        game_name: s.name,
                        user_id: d,
                    });
                },
            }),
        })
    );
}
