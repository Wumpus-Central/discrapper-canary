t.d(s, { Ay: () => Y, Kc: () => Q, Wr: () => X }), t(321073);
var l = t(627968),
    i = t(64700),
    n = t(503698),
    r = t.n(n),
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
    S = t(890856),
    I = t(666654),
    L = t(83107),
    E = t(615675),
    C = t(990836),
    _ = t(387755),
    k = t(440594),
    O = t(95561),
    f = t(20015),
    T = t(863089),
    v = t(85448),
    b = t(556525),
    R = t(402216),
    D = t(268218),
    K = t(609425),
    M = t(73392),
    P = t(137177),
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
    F = t(80442);
let W = (0, D.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("98488"),
                t.e("92582"),
                t.e("10004"),
                t.e("23353"),
                t.e("87306"),
                t.e("70653"),
                t.e("28966"),
            ]).then(t.bind(t, 217356)),
        webpackId: 217356,
    }),
    X = (e) => {
        let { children: s, collapsed: t = !1, className: i } = e;
        return (0, l.jsx)("div", { className: r()(i, F.p_, t ? F.GT : F.m3), role: "group", children: s });
    };
function Q(e) {
    let {
        className: s,
        mute: t,
        localMute: i,
        localVideoDisabled: n,
        serverMute: a,
        deaf: d,
        serverDeaf: p,
        collapsed: S,
        video: O,
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
    } = e;
    if (S || v) return null;
    let $ = [],
        ee = (function (e) {
            let { iconClassName: s, mute: t, localMute: i, serverMute: n, deaf: a, serverDeaf: c } = e,
                o = [];
            if (t) {
                let e;
                e = n || i ? I.O : L.z;
                let t = (0, l.jsx)(e, { className: r()(F.Kk, s, { [F.DU]: n }), color: "currentColor" });
                o.push(
                    (0, l.jsx)(
                        u.m,
                        {
                            text: i
                                ? B.intl.string(B.t.Q8Uzof)
                                : n
                                  ? B.intl.string(B.t.uLddbQ)
                                  : B.intl.string(B.t.tjtv3P),
                            children: t,
                        },
                        "mute",
                    ),
                );
            }
            if (c || a) {
                let e = c ? E.T : C.c,
                    t = (0, l.jsx)(e, { className: r()(F.Kk, s, { [F.DU]: c }), color: "currentColor" });
                o.push(
                    (0, l.jsx)(
                        u.m,
                        { text: c ? B.intl.string(B.t.btxSdB) : B.intl.string(B.t.NjmiOL), children: t },
                        "deaf",
                    ),
                );
            }
            return o;
        })({ iconClassName: K, mute: t, localMute: i, serverMute: a, deaf: d, serverDeaf: p });
    O &&
        (n
            ? $.push(
                  (0, l.jsx)(
                      u.m,
                      {
                          text: B.intl.string(B.t["PXMZ/+"]),
                          children: (0, l.jsx)(m.O, {
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
                  (0, l.jsx)(
                      u.m,
                      {
                          text: B.intl.string(B.t.FlNoSV),
                          children: (0, l.jsx)(x.n, { size: "md", color: "currentColor", className: r()(F.Kk, K) }),
                      },
                      "video",
                  ),
              )),
        Q &&
            $.push(
                (0, l.jsx)(
                    u.m,
                    {
                        text: B.intl.string(B.t.HFwRpk),
                        children: (0, l.jsx)(A.E, {
                            className: r()(F.Kk, K),
                            color: g.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != M &&
            $.push(
                (0, l.jsx)(
                    u.m,
                    {
                        text: (0, k.A)(M.name),
                        children: (0, l.jsx)(h.k, { size: "md", color: "currentColor", className: r()(F.Kk, K) }),
                    },
                    "activity",
                ),
            ),
        P === J.f$.XBOX || y === H.J7.XBOX
            ? $.push((0, l.jsx)(w.A, { className: r()(F.Kk, K) }, "xbox"))
            : P === J.f$.PLAYSTATION || y === H.J7.PLAYSTATION
              ? $.push((0, l.jsx)(V.A, { className: r()(F.Kk, K) }, "playstation"))
              : y === H.J7.QUEST &&
                $.push((0, l.jsx)(c.G, { size: "xs", color: "currentColor", className: r()(F.Kk, K) }, "quest")),
        b &&
            $.push(
                (0, l.jsx)(
                    u.m,
                    {
                        text: B.intl.string(B.t["JH1SJ+"]),
                        children: (0, l.jsx)(N.b, { size: "xs", color: "currentColor", className: r()(F.Kk, K) }),
                    },
                    "watch",
                ),
            ),
        T && $.push((0, l.jsx)(R.Ay, { size: R.Ay.Sizes.SMALL }, "stream")),
        D &&
            null != W &&
            Y &&
            $.push(
                (0, l.jsx)(
                    u.m,
                    {
                        text: B.intl.string(B.t.ygslb0),
                        children: (0, l.jsx)(j.D, {
                            onClick: (e) => {
                                e.stopPropagation(), _.A.stopRinging(W, [X.id]);
                            },
                            children: (0, l.jsx)(o.z, {
                                size: "sm",
                                color: g.A.colors.ICON_FEEDBACK_CRITICAL,
                                className: r()(F.Kk, K),
                            }),
                        }),
                    },
                    "ring",
                ),
            );
    let es = null != G && !(0, f.n)(G, Z.gfo.EMBEDDED);
    return 0 !== $.length || 0 !== ee.length || es || D
        ? (0, l.jsxs)("div", {
              className: r()(F.Pt, s),
              children: [
                  (0, l.jsxs)("div", { className: F.RL, children: [ee, $] }),
                  es && !D
                      ? (0, l.jsx)("div", {
                            className: F.RL,
                            children: (0, l.jsx)(
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
let Y = function (e) {
    let s,
        t,
        n,
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
        } = e,
        {
            onClick: j,
            onKeyDown: I,
            onDoubleClick: L,
            onContextMenu: E,
            onMouseLeave: C,
            onMouseDown: _,
            priority: k,
            speaking: O = !1,
            collapsed: f,
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
            "aria-label": ee,
            ringing: es,
            user: et,
        } = N,
        el = (0, K.A)({ userId: et.id, guildId: H }),
        ei = (0, M.a)({ displayNameStyles: el }),
        en = (0, T.A)(et.id),
        er = (0, b.v)({
            isSpeaking: O,
            voiceDb: en,
            ...($ ? { spreadDirection: b.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [ea, ec] = i.useState(!1),
        eo = (() => {
            if (null != ee) return ee;
            let e = J ?? et.username,
                s = null;
            return (w
                ? (s = B.intl.string(B.t.btxSdB))
                : V
                  ? (s = B.intl.string(B.t.NjmiOL))
                  : D
                    ? (s = B.intl.string(B.t.Q8Uzof))
                    : P
                      ? (s = B.intl.string(B.t.uLddbQ))
                      : R && (s = B.intl.string(B.t.tjtv3P)),
            null != s)
                ? B.intl.formatToPlainString(B.t["1+MVBP"], { userName: e, status: s })
                : e;
        })(),
        ed = (0, d.bG)([G.A], () => G.A.getProgressForUserId(et.id), [et.id]),
        eu = (0, y.Uk)("VoiceUser") && null != ed;
    return (0, l.jsx)(S.s, {
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
        onClick: (e) => {
            j?.(e, et);
        },
        onDoubleClick: (e) => {
            L?.(e, et);
        },
        onContextMenu: (e) => {
            E?.(e, et);
        },
        onMouseLeave: (e) => {
            C?.(e, et), ec(!1);
        },
        onMouseDown: (e) => {
            _?.(e, et);
        },
        onMouseEnter: () => {
            ec(!0);
        },
        onKeyDown: I,
        "aria-label": eo,
        focusProps: { offset: { right: 4 } },
        children: (0, l.jsxs)("div", {
            className: r()(F.Qs, { [F.zq]: Y }),
            children: [
                k && !f
                    ? (0, l.jsx)(u.m, {
                          text: B.intl.string(B.t.BVK71i),
                          children: (0, l.jsx)("div", { className: r()(F.G, { [F.g4]: !R && !P && O }) }),
                      })
                    : null,
                ((s = r()(F.my, { [F.Jb]: m === Z.OSZ.LARGE, [F.dT]: m === Z.OSZ.SMALL, [F.DF]: es })),
                (t = { backgroundImage: `url(${et.getAvatarURL(H, m === Z.OSZ.LARGE ? 38 : 24)})`, ...er }),
                es
                    ? (0, l.jsx)(v.A, {
                          size: m === Z.OSZ.LARGE ? p._3.SIZE_40 : p._3.SIZE_24,
                          ringing: !0,
                          src: et.getAvatarURL(H, m === Z.OSZ.LARGE ? 40 : 24),
                          className: r()(c, s),
                      })
                    : eu
                      ? (0, l.jsx)(z.A, {
                            userId: et.id,
                            wrapperClassName: c,
                            children: (0, l.jsx)("div", { className: s, style: t }),
                        })
                      : (0, l.jsx)("div", { className: r()(c, s), style: t })),
                ((n = (0, l.jsxs)("div", {
                    className: r()(o, F.Xh, ei, { [F.Pi]: !R && !P && O, [F.DF]: es }),
                    children: [
                        J ?? U.Ay.getName(et),
                        X
                            ? (0, l.jsxs)("span", { className: F.IW, children: ["\xa0", B.intl.string(B.t["pFO/Ph"])] })
                            : "",
                    ],
                })),
                (a = {
                    primaryGuild: et.primaryGuild,
                    userId: et.id,
                    contextGuildId: H,
                    isOverlay: g,
                    disableTooltip: !0,
                    className: r()(F.fc, g && F.zW),
                    profileViewedAnalytics: { source: g ? Z.JJy.OVERLAY : Z.ThZ.VOICE_PANEL },
                }),
                !f || g ? (0, l.jsx)(W, { ...a, children: n }) : null),
                (0, l.jsx)(Q, { disabled: A, ...N, isHovered: ea }),
            ],
        }),
    });
};
function q(e) {
    let { application: s, game: t, iconClassName: n, guildId: c, channelId: o, userId: d } = e,
        [m, x] = i.useState(!1),
        A = (0, a.K)((e) => x(e));
    return (
        i.useEffect(() => {
            m &&
                O.Ay.trackWithMetadata(Z.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: c,
                    user_id: d,
                });
        }, [s.id, o, c, d, m]),
        (0, l.jsx)(u.m, {
            text: B.intl.formatToPlainString(B.t.Sq9xJ7, { game: s.name }),
            "aria-label": B.intl.formatToPlainString(B.t.Sq9xJ7, { game: s.name }),
            children: (0, l.jsx)(P.A, {
                ref: A,
                className: r()(F.Kk, F.Gt, n),
                game: t ?? s,
                size: P.M.XSMALL,
                onMouseEnter: () => {
                    O.Ay.trackWithMetadata(Z.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
