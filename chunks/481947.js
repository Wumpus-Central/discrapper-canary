t.d(s, { Ay: () => Y, Kc: () => Q, Wr: () => X }), t(321073);
var i = t(477900),
    n = t(582128),
    l = t(503698),
    r = t.n(l),
    a = t(172218),
    c = t(738678),
    o = t(960027),
    d = t(17928),
    u = t(866665),
    m = t(943812),
    x = t(428689),
    A = t(695366),
    g = t(661531),
    h = t(323384),
    N = t(39623),
    j = t(939249),
    p = t(778712),
    f = t(890856),
    I = t(666654),
    S = t(83107),
    E = t(615675),
    L = t(990836),
    C = t(387755),
    _ = t(440594),
    k = t(95561),
    O = t(20015),
    T = t(863089),
    v = t(85448),
    b = t(556525),
    y = t(402216),
    R = t(268218),
    D = t(609425),
    K = t(73392),
    M = t(769015),
    P = t(430363),
    z = t(823854),
    G = t(445913),
    V = t(790381),
    w = t(266080),
    U = t(427262),
    Z = t(652215),
    H = t(806931),
    J = t(544105),
    B = t(375708),
    F = t(79362);
let W = (0, R.Fe)({
    createPromise: () =>
        Promise.all([t.e("730366"), t.e("482815"), t.e("170653"), t.e("528966")]).then(t.bind(t, 217356)),
    webpackId: 217356,
});
function X(e) {
    let { children: s, collapsed: t = !1, className: n } = e;
    return (0, i.jsx)("div", { className: r()(n, F.p_, t ? F.GT : F.m3), role: "group", children: s });
}
function Q(e) {
    let {
        className: s,
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
        ringing: R,
        iconClassName: D,
        embeddedApplication: K,
        otherClientSessionType: M,
        voicePlatform: P,
        application: z,
        game: G,
        guildId: U,
        channelId: W,
        user: X,
        disconnected: Q,
        isHovered: Y,
    } = e;
    if (f || v) return null;
    let $ = [],
        ee = (function (e) {
            let { iconClassName: s, mute: t, localMute: n, serverMute: l, deaf: a, serverDeaf: c } = e,
                o = [];
            if (t) {
                let e;
                e = l || n ? I.O : S.z;
                let t = (0, i.jsx)(e, { className: r()(F.Kk, s, { [F.DU]: l }), color: "currentColor" });
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
                let e = c ? E.T : L.c,
                    t = (0, i.jsx)(e, { className: r()(F.Kk, s, { [F.DU]: c }), color: "currentColor" });
                o.push(
                    (0, i.jsx)(
                        u.m,
                        { text: c ? B.intl.string(B.t.btxSdB) : B.intl.string(B.t.NjmiOL), children: t },
                        "deaf",
                    ),
                );
            }
            return o;
        })({ iconClassName: D, mute: t, localMute: n, serverMute: a, deaf: d, serverDeaf: p });
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
                              className: r()(F.Kk, D),
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
                          children: (0, i.jsx)(x.VideoIcon, {
                              size: "md",
                              color: "currentColor",
                              className: r()(F.Kk, D),
                          }),
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
                            className: r()(F.Kk, D),
                            color: g.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != K &&
            $.push(
                (0, i.jsx)(
                    u.m,
                    {
                        text: (0, _.A)(K.name),
                        children: (0, i.jsx)(h.k, { size: "md", color: "currentColor", className: r()(F.Kk, D) }),
                    },
                    "activity",
                ),
            ),
        M === J.f$.XBOX || P === H.J7.XBOX
            ? $.push((0, i.jsx)(w.A, { className: r()(F.Kk, D) }, "xbox"))
            : M === J.f$.PLAYSTATION || P === H.J7.PLAYSTATION
              ? $.push((0, i.jsx)(V.A, { className: r()(F.Kk, D) }, "playstation"))
              : P === H.J7.QUEST &&
                $.push((0, i.jsx)(c.G, { size: "xs", color: "currentColor", className: r()(F.Kk, D) }, "quest")),
        b &&
            $.push(
                (0, i.jsx)(
                    u.m,
                    {
                        text: B.intl.string(B.t["JH1SJ+"]),
                        children: (0, i.jsx)(N.EyeIcon, { size: "xs", color: "currentColor", className: r()(F.Kk, D) }),
                    },
                    "watch",
                ),
            ),
        T && $.push((0, i.jsx)(y.Ay, { size: y.Ay.Sizes.SMALL }, "stream")),
        R &&
            null != W &&
            Y &&
            $.push(
                (0, i.jsx)(
                    u.m,
                    {
                        text: B.intl.string(B.t.ygslb0),
                        children: (0, i.jsx)(j.D, {
                            onClick: (e) => {
                                e.stopPropagation(), C.A.stopRinging(W, [X.id]);
                            },
                            children: (0, i.jsx)(o.z, {
                                size: "sm",
                                color: g.A.colors.ICON_FEEDBACK_CRITICAL,
                                className: r()(F.Kk, D),
                            }),
                        }),
                    },
                    "ring",
                ),
            );
    let es = null != z && !(0, O.n)(z, Z.gfo.EMBEDDED);
    return 0 !== $.length || 0 !== ee.length || es || R
        ? (0, i.jsxs)("div", {
              className: r()(F.Pt, s),
              children: [
                  (0, i.jsxs)("div", { className: F.RL, children: [ee, $] }),
                  es && !R
                      ? (0, i.jsx)("div", {
                            className: F.RL,
                            children: (0, i.jsx)(
                                q,
                                { application: z, game: G, iconClassName: D, guildId: U, channelId: W, userId: X.id },
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
        } = e,
        {
            onClick: j,
            onKeyDown: I,
            onDoubleClick: S,
            onContextMenu: E,
            onMouseLeave: L,
            onMouseDown: C,
            priority: _,
            speaking: k = !1,
            collapsed: O,
            mute: y,
            localMute: R,
            serverMute: M,
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
        ei = (0, D.A)({ userId: et.id, guildId: H }),
        en = (0, K.a)({ displayNameStyles: ei }),
        el = (0, T.A)(et.id),
        er = (0, b.v)({
            isSpeaking: k,
            voiceDb: el,
            ...($ ? { spreadDirection: b.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [ea, ec] = n.useState(!1),
        eo = (() => {
            if (null != ee) return ee;
            let e = J ?? et.username,
                s = null;
            return (w
                ? (s = B.intl.string(B.t.btxSdB))
                : V
                  ? (s = B.intl.string(B.t.NjmiOL))
                  : R
                    ? (s = B.intl.string(B.t.Q8Uzof))
                    : M
                      ? (s = B.intl.string(B.t.uLddbQ))
                      : y && (s = B.intl.string(B.t.tjtv3P)),
            null != s)
                ? B.intl.formatToPlainString(B.t["1+MVBP"], { userName: e, status: s })
                : e;
        })(),
        ed = (0, d.bG)([z.A], () => z.A.getProgressForUserId(et.id), [et.id]),
        eu = (0, P.Uk)("VoiceUser") && null != ed;
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
        onClick: function (e) {
            j?.(e, et);
        },
        onDoubleClick: function (e) {
            S?.(e, et);
        },
        onContextMenu: function (e) {
            E?.(e, et);
        },
        onMouseLeave: function (e) {
            L?.(e, et), ec(!1);
        },
        onMouseDown: function (e) {
            C?.(e, et);
        },
        onMouseEnter: function () {
            ec(!0);
        },
        onKeyDown: I,
        "aria-label": eo,
        focusProps: { offset: { right: 4 } },
        children: (0, i.jsxs)("div", {
            className: r()(F.Qs, { [F.zq]: Y }),
            children: [
                _ && !O
                    ? (0, i.jsx)(u.m, {
                          text: B.intl.string(B.t.BVK71i),
                          children: (0, i.jsx)("div", { className: r()(F.G, { [F.g4]: !y && !M && k }) }),
                      })
                    : null,
                ((s = r()(F.my, { [F.Jb]: m === Z.OSZ.LARGE, [F.dT]: m === Z.OSZ.SMALL, [F.DF]: es })),
                (t = { backgroundImage: `url(${et.getAvatarURL(H, m === Z.OSZ.LARGE ? 38 : 24)})`, ...er }),
                es
                    ? (0, i.jsx)(v.Ay, {
                          size: m === Z.OSZ.LARGE ? p._3.SIZE_40 : p._3.SIZE_24,
                          ringing: !0,
                          src: et.getAvatarURL(H, m === Z.OSZ.LARGE ? 40 : 24),
                          className: r()(c, s),
                      })
                    : eu
                      ? (0, i.jsx)(G.A, {
                            userId: et.id,
                            wrapperClassName: c,
                            children: (0, i.jsx)("div", { className: s, style: t }),
                        })
                      : (0, i.jsx)("div", { className: r()(c, s), style: t })),
                ((l = (0, i.jsxs)("div", {
                    className: r()(o, F.Xh, en, { [F.Pi]: !y && !M && k, [F.DF]: es }),
                    children: [
                        J ?? U.Ay.getName(et),
                        X
                            ? (0, i.jsxs)("span", { className: F.IW, children: ["\xa0", B.intl.string(B.t["pFO/Ph"])] })
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
                !O || g ? (0, i.jsx)(W, { ...a, children: l }) : null),
                (0, i.jsx)(Q, { disabled: A, ...N, isHovered: ea }),
            ],
        }),
    });
};
function q(e) {
    let { application: s, game: t, iconClassName: l, guildId: c, channelId: o, userId: d } = e,
        [m, x] = n.useState(!1),
        A = (0, a.K)((e) => x(e));
    return (
        n.useEffect(() => {
            m &&
                k.Ay.trackWithMetadata(Z.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: c,
                    user_id: d,
                });
        }, [s.id, o, c, d, m]),
        (0, i.jsx)(u.m, {
            text: B.intl.formatToPlainString(B.t.Sq9xJ7, { game: s.name }),
            "aria-label": B.intl.formatToPlainString(B.t.Sq9xJ7, { game: s.name }),
            children: (0, i.jsx)(M.A, {
                ref: A,
                className: r()(F.Kk, F.n8, l),
                game: t ?? s,
                size: M.M.XSMALL,
                onMouseEnter: function () {
                    k.Ay.trackWithMetadata(Z.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
