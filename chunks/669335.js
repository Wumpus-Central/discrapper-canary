(t.d(s, { Wr: () => et, Ay: () => ei, Kc: () => en }), t(321073));
var n,
    i = t(477900),
    r = t(582128),
    l = t(503698),
    a = t.n(l),
    c = t(172218),
    o = t(738678),
    d = t(960027),
    u = t(17928),
    m = t(866665),
    A = t(943812),
    x = t(428689),
    h = t(695366),
    N = t(661531),
    g = t(323384),
    E = t(39623),
    C = t(939249),
    j = t(778712),
    p = t(890856),
    I = t(666654),
    f = t(83107),
    L = t(615675),
    O = t(990836),
    R = t(387755),
    T = t(440594),
    _ = t(95561),
    S = t(863089),
    k = t(85448),
    D = t(556525),
    y = t(402216),
    v = t(268218),
    b = t(609425),
    M = t(73392),
    G = t(769015),
    P = t(430363),
    V = t(823854),
    U = t(602853),
    F = t(475743),
    K = t(775602),
    z = t(21161),
    w =
        (((n = {})[(n.OFFERED = 0)] = "OFFERED"),
        (n[(n.ACCEPTED = 1)] = "ACCEPTED"),
        (n[(n.RUNNING = 2)] = "RUNNING"),
        (n[(n.COMPLETED = 3)] = "COMPLETED"),
        (n[(n.FAILED = 4)] = "FAILED"),
        (n[(n.CANCELLED = 5)] = "CANCELLED"),
        n),
    Z = t(818888);
function B(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        l = (0, u.bG)([V.A], () => V.A.getProgressForUserId(s), [s]),
        a = (0, u.bG)(
            [V.A],
            () => {
                let e = V.A.getTrackingEntryForUserId(s);
                return e?.presence?.phase === w.COMPLETED;
            },
            [s],
        ),
        c = (0, u.bG)([K.Ay], () => K.Ay.useReducedMotion),
        o = (0, F.Ay)(l),
        d = (0, F.Ay)(a),
        { createMultipleConfettiAt: m } = r.useContext(z.x),
        A = (0, U.r)(N.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        x = (0, U.r)(N.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        h = (0, U.r)(N.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        g = r.useRef(0),
        E = r.useRef(null),
        C = Math.max(0, Math.min(1, l ?? 0)),
        j = C >= 1 ? h : x,
        p = r.useMemo(
            () => ({ backgroundImage: `conic-gradient(${j} ${Math.round(360 * C)}deg, ${A} 0deg)` }),
            [C, j, A],
        ),
        I = r.useMemo(
            () => ({
                size: { type: "static-random", minValue: 2, maxValue: 6 },
                velocity: { type: "static-random", minValue: { x: -120, y: -140 }, maxValue: { x: 120, y: -260 } },
            }),
            [],
        ),
        f = r.useCallback(() => {
            if (c) return;
            let e = E.current?.getBoundingClientRect();
            null != e && m(e.left + e.width / 2, e.top + e.height / 2, I, 250);
        }, [I, m, c]);
    (r.useEffect(() => {
        c || ((o ?? 0) < 1 && C >= 1 && f());
    }, [C, f, o, c]),
        r.useEffect(() => {
            c || !0 !== a || (!0 !== d && f());
        }, [f, a, d, c]));
    let L = r.useCallback(() => {
        if (c || C < 1) return;
        let e = Date.now();
        e - g.current < 4e3 || ((g.current = e), f());
    }, [C, f, c]);
    return (0, i.jsx)("div", {
        className: t,
        onMouseEnter: L,
        children: (0, i.jsxs)("div", {
            ref: E,
            className: Z.R,
            children: [(0, i.jsx)("div", { className: Z.h, style: p }), n],
        }),
    });
}
function H(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        r = (0, P.Uk)("VoiceDareAvatarRing"),
        l = (0, u.bG)([V.A], () => V.A.hasVoiceDareForUserId(s), [s]);
    return r && l
        ? (0, i.jsx)(B, { userId: s, wrapperClassName: t, children: n })
        : (0, i.jsx)("div", { className: t, children: n });
}
var J = t(790381),
    X = t(266080),
    W = t(427262),
    $ = t(652215),
    Q = t(806931),
    Y = t(544105),
    q = t(375708),
    ee = t(254849);
let es = (0, v.Fe)({
    createPromise: () => Promise.all([t.e("910349"), t.e("528966")]).then(t.bind(t, 217356)),
    webpackId: 217356,
});
function et(e) {
    let { children: s, collapsed: t = !1, className: n } = e;
    return (0, i.jsx)("div", { className: a()(n, ee.p_, t ? ee.GT : ee.m3), role: "group", children: s });
}
function en(e) {
    let {
        className: s,
        mute: t,
        localMute: n,
        localVideoDisabled: r,
        serverMute: l,
        deaf: c,
        serverDeaf: u,
        collapsed: j,
        video: p,
        isStreaming: _,
        disabled: S,
        isWatching: k,
        ringing: D,
        iconClassName: v,
        embeddedApplication: b,
        otherClientSessionType: M,
        voicePlatform: G,
        application: P,
        game: V,
        guildId: U,
        channelId: F,
        user: K,
        disconnected: z,
        isHovered: w,
    } = e;
    if (j || S) return null;
    let Z = [],
        B = (function (e) {
            let { iconClassName: s, mute: t, localMute: n, serverMute: r, deaf: l, serverDeaf: c } = e,
                o = [];
            if (t) {
                let e;
                e = r || n ? I.O : f.z;
                let t = (0, i.jsx)(e, { className: a()(ee.Kk, s, { [ee.DU]: r }), color: "currentColor" });
                o.push(
                    (0, i.jsx)(
                        m.m,
                        {
                            text: n
                                ? q.intl.string(q.t.Q8Uzof)
                                : r
                                  ? q.intl.string(q.t.uLddbQ)
                                  : q.intl.string(q.t.tjtv3P),
                            children: t,
                        },
                        "mute",
                    ),
                );
            }
            if (c || l) {
                let e = c ? L.T : O.c,
                    t = (0, i.jsx)(e, { className: a()(ee.Kk, s, { [ee.DU]: c }), color: "currentColor" });
                o.push(
                    (0, i.jsx)(
                        m.m,
                        { text: c ? q.intl.string(q.t.btxSdB) : q.intl.string(q.t.NjmiOL), children: t },
                        "deaf",
                    ),
                );
            }
            return o;
        })({ iconClassName: v, mute: t, localMute: n, serverMute: l, deaf: c, serverDeaf: u });
    (p &&
        (r
            ? Z.push(
                  (0, i.jsx)(
                      m.m,
                      {
                          text: q.intl.string(q.t["PXMZ/+"]),
                          children: (0, i.jsx)(A.O, {
                              size: "md",
                              color: "currentColor",
                              className: a()(ee.Kk, v),
                              colorClass: ee.of,
                          }),
                      },
                      "video",
                  ),
              )
            : Z.push(
                  (0, i.jsx)(
                      m.m,
                      {
                          text: q.intl.string(q.t.FlNoSV),
                          children: (0, i.jsx)(x.VideoIcon, {
                              size: "md",
                              color: "currentColor",
                              className: a()(ee.Kk, v),
                          }),
                      },
                      "video",
                  ),
              )),
        z &&
            Z.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: q.intl.string(q.t.HFwRpk),
                        children: (0, i.jsx)(h.E, {
                            className: a()(ee.Kk, v),
                            color: N.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != b &&
            Z.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: (0, T.A)(b.name),
                        children: (0, i.jsx)(g.k, { size: "md", color: "currentColor", className: a()(ee.Kk, v) }),
                    },
                    "activity",
                ),
            ),
        M === Y.f$.XBOX || G === Q.J7.XBOX
            ? Z.push((0, i.jsx)(X.A, { className: a()(ee.Kk, v) }, "xbox"))
            : M === Y.f$.PLAYSTATION || G === Q.J7.PLAYSTATION
              ? Z.push((0, i.jsx)(J.A, { className: a()(ee.Kk, v) }, "playstation"))
              : G === Q.J7.QUEST &&
                Z.push((0, i.jsx)(o.G, { size: "xs", color: "currentColor", className: a()(ee.Kk, v) }, "quest")),
        k &&
            Z.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: q.intl.string(q.t["JH1SJ+"]),
                        children: (0, i.jsx)(E.EyeIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: a()(ee.Kk, v),
                        }),
                    },
                    "watch",
                ),
            ),
        _ && Z.push((0, i.jsx)(y.Ay, { size: y.Ay.Sizes.SMALL }, "stream")),
        D &&
            null != F &&
            w &&
            Z.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: q.intl.string(q.t.ygslb0),
                        children: (0, i.jsx)(C.D, {
                            onClick: (e) => {
                                (e.stopPropagation(), R.A.stopRinging(F, [K.id]));
                            },
                            children: (0, i.jsx)(d.z, {
                                size: "sm",
                                color: N.A.colors.ICON_FEEDBACK_CRITICAL,
                                className: a()(ee.Kk, v),
                            }),
                        }),
                    },
                    "ring",
                ),
            ));
    let H = null != P && !P.isEmbedded;
    return 0 !== Z.length || 0 !== B.length || H || D
        ? (0, i.jsxs)("div", {
              className: a()(ee.Pt, s),
              children: [
                  (0, i.jsxs)("div", { className: ee.RL, children: [B, Z] }),
                  H && !D
                      ? (0, i.jsx)("div", {
                            className: ee.RL,
                            children: (0, i.jsx)(
                                er,
                                { application: P, game: V, iconClassName: v, guildId: U, channelId: F, userId: K.id },
                                `${K.id}-game`,
                            ),
                        })
                      : null,
              ],
          })
        : null;
}
let ei = function (e) {
    let s,
        t,
        n,
        l,
        {
            avatarContainerClass: c = ee.H,
            userNameClassName: o = ee.gr,
            size: d = $.OSZ.SMALL,
            selected: A = !1,
            disabled: x = !1,
            isOverlay: h = !1,
            ref: N,
            ...g
        } = e,
        {
            onClick: E,
            onKeyDown: C,
            onDoubleClick: I,
            onContextMenu: f,
            onMouseLeave: L,
            onMouseDown: O,
            priority: R,
            speaking: T = !1,
            collapsed: _,
            mute: y,
            localMute: v,
            serverMute: G,
            deaf: U,
            serverDeaf: F,
            guildId: K,
            nick: z,
            isGuest: w,
            flipped: Z,
            className: B,
            overlap: J,
            "aria-label": X,
            ringing: Q,
            user: Y,
        } = g,
        et = (0, b.A)({ userId: Y.id, guildId: K }),
        ei = (0, M.a)({ displayNameStyles: et }),
        er = (0, S.A)(Y.id),
        el = (0, D.v)({
            isSpeaking: T,
            voiceDb: er,
            ...(J ? { spreadDirection: D.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [ea, ec] = r.useState(!1),
        eo = (() => {
            if (null != X) return X;
            let e = z ?? Y.username,
                s = null;
            return (F
                ? (s = q.intl.string(q.t.btxSdB))
                : U
                  ? (s = q.intl.string(q.t.NjmiOL))
                  : v
                    ? (s = q.intl.string(q.t.Q8Uzof))
                    : G
                      ? (s = q.intl.string(q.t.uLddbQ))
                      : y && (s = q.intl.string(q.t.tjtv3P)),
            null != s)
                ? q.intl.formatToPlainString(q.t["1+MVBP"], { userName: e, status: s })
                : e;
        })(),
        ed = (0, u.bG)([V.A], () => V.A.getProgressForUserId(Y.id), [Y.id]),
        eu = (0, P.Uk)("VoiceUser") && null != ed;
    return (0, i.jsx)(p.s, {
        ref: N,
        className: a()(B, {
            [ee.q7]: !0,
            [ee.EF]: J,
            [ee.wH]: A,
            [ee.vk]: null != E,
            [ee.L9]: d === $.OSZ.SMALL,
            [ee.p8]: d === $.OSZ.LARGE,
            [ee.r9]: !A && x,
        }),
        onClick: function (e) {
            E?.(e, Y);
        },
        onDoubleClick: function (e) {
            I?.(e, Y);
        },
        onContextMenu: function (e) {
            f?.(e, Y);
        },
        onMouseLeave: function (e) {
            (L?.(e, Y), ec(!1));
        },
        onMouseDown: function (e) {
            O?.(e, Y);
        },
        onMouseEnter: function () {
            ec(!0);
        },
        onKeyDown: C,
        "aria-label": eo,
        focusProps: { offset: { right: 4 } },
        children: (0, i.jsxs)("div", {
            className: a()(ee.Qs, { [ee.zq]: Z }),
            children: [
                R && !_
                    ? (0, i.jsx)(m.m, {
                          text: q.intl.string(q.t.BVK71i),
                          children: (0, i.jsx)("div", { className: a()(ee.G, { [ee.g4]: !y && !G && T }) }),
                      })
                    : null,
                ((s = a()(ee.my, { [ee.Jb]: d === $.OSZ.LARGE, [ee.dT]: d === $.OSZ.SMALL, [ee.DF]: Q })),
                (t = { backgroundImage: `url(${Y.getAvatarURL(K, d === $.OSZ.LARGE ? 38 : 24)})`, ...el }),
                Q
                    ? (0, i.jsx)(k.Ay, {
                          size: d === $.OSZ.LARGE ? j._3.SIZE_40 : j._3.SIZE_24,
                          ringing: !0,
                          src: Y.getAvatarURL(K, d === $.OSZ.LARGE ? 40 : 24),
                          className: a()(c, s),
                      })
                    : eu
                      ? (0, i.jsx)(H, {
                            userId: Y.id,
                            wrapperClassName: c,
                            children: (0, i.jsx)("div", { className: s, style: t }),
                        })
                      : (0, i.jsx)("div", { className: a()(c, s), style: t })),
                ((n = (0, i.jsxs)("div", {
                    className: a()(o, ee.Xh, ei, { [ee.Pi]: !y && !G && T, [ee.DF]: Q }),
                    children: [
                        z ?? W.Ay.getName(Y),
                        w
                            ? (0, i.jsxs)("span", {
                                  className: ee.IW,
                                  children: ["\xa0", q.intl.string(q.t["pFO/Ph"])],
                              })
                            : "",
                    ],
                })),
                (l = {
                    primaryGuild: Y.primaryGuild,
                    userId: Y.id,
                    contextGuildId: K,
                    isOverlay: h,
                    disableTooltip: !0,
                    className: a()(ee.fc, h && ee.zW),
                    profileViewedAnalytics: { source: h ? $.JJy.OVERLAY : $.ThZ.VOICE_PANEL },
                }),
                !_ || h ? (0, i.jsx)(es, { ...l, children: n }) : null),
                (0, i.jsx)(en, { disabled: x, ...g, isHovered: ea }),
            ],
        }),
    });
};
function er(e) {
    let { application: s, game: t, iconClassName: n, guildId: l, channelId: o, userId: d } = e,
        [u, A] = r.useState(!1),
        x = (0, c.K)((e) => A(e));
    return (
        r.useEffect(() => {
            u &&
                _.Ay.trackWithMetadata($.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: l,
                    user_id: d,
                });
        }, [s.id, o, l, d, u]),
        (0, i.jsx)(m.m, {
            text: q.intl.formatToPlainString(q.t.Sq9xJ7, { game: s.name }),
            "aria-label": q.intl.formatToPlainString(q.t.Sq9xJ7, { game: s.name }),
            children: (0, i.jsx)(G.A, {
                ref: x,
                className: a()(ee.Kk, ee.n8, n),
                game: t ?? s,
                size: G.M.XSMALL,
                onMouseEnter: function () {
                    _.Ay.trackWithMetadata($.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: o,
                        guild_id: l,
                        game_name: s.name,
                        user_id: d,
                    });
                },
            }),
        })
    );
}
