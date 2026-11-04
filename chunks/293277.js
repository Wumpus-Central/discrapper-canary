(t.d(s, { Kc: () => ei, Wr: () => en, Ay: () => er }), t(321073));
var n,
    i = t(477900),
    r = t(582128),
    l = t(503698),
    a = t.n(l),
    c = t(172218),
    o = t(738678),
    u = t(960027),
    d = t(855986),
    m = t(866665),
    x = t(943812),
    A = t(428689),
    h = t(695366),
    N = t(646514),
    g = t(323384),
    E = t(39623),
    j = t(939249),
    C = t(778712),
    I = t(890856),
    p = t(546861),
    f = t(666654),
    L = t(83107),
    O = t(615675),
    R = t(990836),
    T = t(387755),
    _ = t(440594),
    S = t(149468),
    k = t(863089),
    D = t(85448),
    b = t(556525),
    y = t(402216),
    v = t(268218),
    M = t(609425),
    G = t(73392),
    P = t(769015),
    V = t(430363),
    K = t(823854),
    U = t(602853),
    F = t(475743),
    z = t(775602),
    w = t(21161),
    J =
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
        l = (0, d.bG)([K.A], () => K.A.getProgressForUserId(s), [s]),
        a = (0, d.bG)(
            [K.A],
            () => {
                let e = K.A.getTrackingEntryForUserId(s);
                return e?.presence?.phase === J.COMPLETED;
            },
            [s],
        ),
        c = (0, d.bG)([z.Ay], () => z.Ay.useReducedMotion),
        o = (0, F.Ay)(l),
        u = (0, F.Ay)(a),
        { createMultipleConfettiAt: m } = r.useContext(w.x),
        x = (0, U.r)(N.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        A = (0, U.r)(N.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        h = (0, U.r)(N.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        g = r.useRef(0),
        E = r.useRef(null),
        j = Math.max(0, Math.min(1, l ?? 0)),
        C = j >= 1 ? h : A,
        I = r.useMemo(
            () => ({ backgroundImage: `conic-gradient(${C} ${Math.round(360 * j)}deg, ${x} 0deg)` }),
            [j, C, x],
        ),
        p = r.useMemo(
            () => ({
                size: { type: "static-random", minValue: 2, maxValue: 6 },
                velocity: { type: "static-random", minValue: { x: -120, y: -140 }, maxValue: { x: 120, y: -260 } },
            }),
            [],
        ),
        f = r.useCallback(() => {
            if (c) return;
            let e = E.current?.getBoundingClientRect();
            null != e && m(e.left + e.width / 2, e.top + e.height / 2, p, 250);
        }, [p, m, c]);
    (r.useEffect(() => {
        c || ((o ?? 0) < 1 && j >= 1 && f());
    }, [j, f, o, c]),
        r.useEffect(() => {
            c || !0 !== a || (!0 !== u && f());
        }, [f, a, u, c]));
    let L = r.useCallback(() => {
        if (c || j < 1) return;
        let e = Date.now();
        e - g.current < 4e3 || ((g.current = e), f());
    }, [j, f, c]);
    return (0, i.jsx)("div", {
        className: t,
        onMouseEnter: L,
        children: (0, i.jsxs)("div", {
            ref: E,
            className: Z.R,
            children: [(0, i.jsx)("div", { className: Z.h, style: I }), n],
        }),
    });
}
function H(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        r = (0, V.Uk)("VoiceDareAvatarRing"),
        l = (0, d.bG)([K.A], () => K.A.hasVoiceDareForUserId(s), [s]);
    return r && l
        ? (0, i.jsx)(B, { userId: s, wrapperClassName: t, children: n })
        : (0, i.jsx)("div", { className: t, children: n });
}
var W = t(790381),
    X = t(266080),
    Y = t(427262),
    $ = t(652215),
    q = t(806931),
    Q = t(544105),
    ee = t(792996),
    es = t(254849);
let et = (0, v.Fe)({
    createPromise: () => Promise.all([t.e(910349), t.e(528966)]).then(t.bind(t, 217356)),
    webpackId: 217356,
});
function en(e) {
    let { children: s, collapsed: t = !1, className: n } = e;
    return (0, i.jsx)("div", { className: a()(n, es.p_, t ? es.GT : es.m3), role: "group", children: s });
}
function ei(e) {
    let {
        className: s,
        mute: t,
        localMute: n,
        localVideoDisabled: r,
        serverMute: l,
        deaf: c,
        serverDeaf: d,
        collapsed: C,
        video: I,
        isStreaming: S,
        disabled: k,
        isWatching: D,
        ringing: b,
        iconClassName: v,
        embeddedApplication: M,
        otherClientSessionType: G,
        voicePlatform: P,
        application: V,
        game: K,
        guildId: U,
        channelId: F,
        user: z,
        disconnected: w,
        isHovered: J,
        soundboardMuted: Z,
    } = e;
    if (C || k) return null;
    let B = [],
        H = (function (e) {
            let {
                    iconClassName: s,
                    mute: t,
                    localMute: n,
                    serverMute: r,
                    deaf: l,
                    serverDeaf: c,
                    soundboardMuted: o,
                } = e,
                u = [];
            if (
                (o &&
                    u.push(
                        (0, i.jsx)(
                            m.m,
                            {
                                text: ee.intl.string(ee.t["9bJYWN"]),
                                children: (0, i.jsx)(p.N, { className: a()(es.Kk, s), color: "currentColor" }),
                            },
                            "soundboard-mute",
                        ),
                    ),
                t)
            ) {
                let e;
                e = r || n ? f.O : L.z;
                let t = (0, i.jsx)(e, { className: a()(es.Kk, s, { [es.DU]: r }), color: "currentColor" });
                u.push(
                    (0, i.jsx)(
                        m.m,
                        {
                            text: n
                                ? ee.intl.string(ee.t.Q8Uzof)
                                : r
                                  ? ee.intl.string(ee.t.uLddbQ)
                                  : ee.intl.string(ee.t.tjtv3P),
                            children: t,
                        },
                        "mute",
                    ),
                );
            }
            if (c || l) {
                let e = c ? O.T : R.c,
                    t = (0, i.jsx)(e, { className: a()(es.Kk, s, { [es.DU]: c }), color: "currentColor" });
                u.push(
                    (0, i.jsx)(
                        m.m,
                        { text: c ? ee.intl.string(ee.t.btxSdB) : ee.intl.string(ee.t.NjmiOL), children: t },
                        "deaf",
                    ),
                );
            }
            return u;
        })({ iconClassName: v, mute: t, localMute: n, serverMute: l, deaf: c, serverDeaf: d, soundboardMuted: Z });
    (I &&
        (r
            ? B.push(
                  (0, i.jsx)(
                      m.m,
                      {
                          text: ee.intl.string(ee.t["PXMZ/+"]),
                          children: (0, i.jsx)(x.O, { size: "md", color: "currentColor", className: a()(es.Kk, v) }),
                      },
                      "video",
                  ),
              )
            : B.push(
                  (0, i.jsx)(
                      m.m,
                      {
                          text: ee.intl.string(ee.t.FlNoSV),
                          children: (0, i.jsx)(A.VideoIcon, {
                              size: "md",
                              color: "currentColor",
                              className: a()(es.Kk, v),
                          }),
                      },
                      "video",
                  ),
              )),
        w &&
            B.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: ee.intl.string(ee.t.HFwRpk),
                        children: (0, i.jsx)(h.E, {
                            className: a()(es.Kk, v),
                            color: N.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != M &&
            B.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: (0, _.A)(M.name),
                        children: (0, i.jsx)(g.k, { size: "md", color: "currentColor", className: a()(es.Kk, v) }),
                    },
                    "activity",
                ),
            ),
        G === Q.f$.XBOX || P === q.J7.XBOX
            ? B.push((0, i.jsx)(X.A, { className: a()(es.Kk, v) }, "xbox"))
            : G === Q.f$.PLAYSTATION || P === q.J7.PLAYSTATION
              ? B.push((0, i.jsx)(W.A, { className: a()(es.Kk, v) }, "playstation"))
              : P === q.J7.QUEST &&
                B.push((0, i.jsx)(o.G, { size: "xs", color: "currentColor", className: a()(es.Kk, v) }, "quest")),
        D &&
            B.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: ee.intl.string(ee.t["JH1SJ+"]),
                        children: (0, i.jsx)(E.EyeIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: a()(es.Kk, v),
                        }),
                    },
                    "watch",
                ),
            ),
        S && B.push((0, i.jsx)(y.Ay, { size: y.Ay.Sizes.SMALL }, "stream")),
        b &&
            null != F &&
            J &&
            B.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: ee.intl.string(ee.t.ygslb0),
                        children: (0, i.jsx)(j.D, {
                            onClick: (e) => {
                                (e.stopPropagation(), T.A.stopRinging(F, [z.id]));
                            },
                            children: (0, i.jsx)(u.z, {
                                size: "sm",
                                color: N.A.colors.ICON_FEEDBACK_CRITICAL,
                                className: a()(es.Kk, v),
                            }),
                        }),
                    },
                    "ring",
                ),
            ));
    let Y = null != V && !V.isEmbedded;
    return 0 !== B.length || 0 !== H.length || Y || b
        ? (0, i.jsxs)("div", {
              className: a()(es.Pt, s),
              children: [
                  (0, i.jsxs)("div", { className: es.RL, children: [H, B] }),
                  Y && !b
                      ? (0, i.jsx)("div", {
                            className: es.RL,
                            children: (0, i.jsx)(
                                el,
                                { application: V, game: K, iconClassName: v, guildId: U, channelId: F, userId: z.id },
                                `${z.id}-game`,
                            ),
                        })
                      : null,
              ],
          })
        : null;
}
let er = function (e) {
    let s,
        t,
        n,
        l,
        {
            avatarContainerClass: c = es.H,
            userNameClassName: o = es.gr,
            size: u = $.OSZ.SMALL,
            selected: x = !1,
            disabled: A = !1,
            isOverlay: h = !1,
            ref: N,
            ...g
        } = e,
        {
            onClick: E,
            onKeyDown: j,
            onDoubleClick: p,
            onContextMenu: f,
            onMouseLeave: L,
            onMouseDown: O,
            priority: R,
            speaking: T = !1,
            playingSoundboard: _ = !1,
            collapsed: S,
            mute: y,
            localMute: v,
            serverMute: P,
            deaf: U,
            serverDeaf: F,
            guildId: z,
            nick: w,
            isGuest: J,
            flipped: Z,
            className: B,
            overlap: W,
            "aria-label": X,
            ringing: q,
            connecting: Q = !1,
            user: en,
            soundboardMuted: er,
        } = g,
        el = (0, M.A)({ userId: en.id, guildId: z }),
        ea = (0, G.a)({ displayNameStyles: el }),
        ec = (0, k.A)(en.id),
        eo = (0, b.v)({
            voiceStatus: (0, C.n$)(T, _),
            voiceDb: ec,
            ...(W ? { spreadDirection: b.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [eu, ed] = r.useState(!1),
        em = (() => {
            if (null != X) return X;
            let e = w ?? en.username,
                s = null;
            return (Q
                ? (s = ee.intl.string(ee.t["7LkwqE"]))
                : F
                  ? (s = ee.intl.string(ee.t.btxSdB))
                  : U
                    ? (s = ee.intl.string(ee.t.NjmiOL))
                    : v
                      ? (s = ee.intl.string(ee.t.Q8Uzof))
                      : P
                        ? (s = ee.intl.string(ee.t.uLddbQ))
                        : y
                          ? (s = ee.intl.string(ee.t.tjtv3P))
                          : er && (s = ee.intl.string(ee.t["9bJYWN"])),
            null != s)
                ? ee.intl.formatToPlainString(ee.t["1+MVBP"], { userName: e, status: s })
                : e;
        })(),
        ex = (0, d.bG)([K.A], () => K.A.getProgressForUserId(en.id), [en.id]),
        eA = (0, V.Uk)("VoiceUser") && null != ex;
    return (0, i.jsx)(I.s, {
        ref: N,
        className: a()(B, {
            [es.q7]: !0,
            [es.EF]: W,
            [es.wH]: x,
            [es.vk]: null != E,
            [es.L9]: u === $.OSZ.SMALL,
            [es.p8]: u === $.OSZ.LARGE,
            [es.r9]: !x && A,
            [es.jI]: Q,
        }),
        onClick: function (e) {
            E?.(e, en);
        },
        onDoubleClick: function (e) {
            p?.(e, en);
        },
        onContextMenu: function (e) {
            f?.(e, en);
        },
        onMouseLeave: function (e) {
            (L?.(e, en), ed(!1));
        },
        onMouseDown: function (e) {
            O?.(e, en);
        },
        onMouseEnter: function () {
            ed(!0);
        },
        onKeyDown: j,
        "aria-label": em,
        focusProps: { offset: { right: 4 } },
        children: (0, i.jsxs)("div", {
            className: a()(es.Qs, { [es.zq]: Z }),
            children: [
                R && !S
                    ? (0, i.jsx)(m.m, {
                          text: ee.intl.string(ee.t.BVK71i),
                          children: (0, i.jsx)("div", { className: a()(es.G, { [es.g4]: !y && !P && T }) }),
                      })
                    : null,
                ((s = a()(es.my, { [es.Jb]: u === $.OSZ.LARGE, [es.dT]: u === $.OSZ.SMALL, [es.DF]: q })),
                (t = { backgroundImage: `url(${en.getAvatarURL(z, u === $.OSZ.LARGE ? 38 : 24)})`, ...eo }),
                q
                    ? (0, i.jsx)(D.Ay, {
                          size: u === $.OSZ.LARGE ? C._3.SIZE_40 : C._3.SIZE_24,
                          ringing: !0,
                          src: en.getAvatarURL(z, u === $.OSZ.LARGE ? 40 : 24),
                          className: a()(c, s),
                      })
                    : eA
                      ? (0, i.jsx)(H, {
                            userId: en.id,
                            wrapperClassName: c,
                            children: (0, i.jsx)("div", { className: s, style: t }),
                        })
                      : (0, i.jsx)("div", { className: a()(c, s), style: t })),
                ((n = (0, i.jsxs)("div", {
                    className: a()(o, es.Xh, ea, { [es.Pi]: !y && !P && T, [es.DF]: q }),
                    children: [
                        w ?? Y.Ay.getName(en),
                        J
                            ? (0, i.jsxs)("span", {
                                  className: es.IW,
                                  children: ["\xa0", ee.intl.string(ee.t["pFO/Ph"])],
                              })
                            : "",
                    ],
                })),
                (l = {
                    primaryGuild: en.primaryGuild,
                    userId: en.id,
                    contextGuildId: z,
                    isOverlay: h,
                    disableTooltip: !0,
                    className: a()(es.fc, h && es.zW),
                    profileViewedAnalytics: { source: h ? $.JJy.OVERLAY : $.ThZ.VOICE_PANEL },
                }),
                !S || h ? (0, i.jsx)(et, { ...l, children: n }) : null),
                (0, i.jsx)(ei, { disabled: A, ...g, isHovered: eu }),
            ],
        }),
    });
};
function el(e) {
    let { application: s, game: t, iconClassName: n, guildId: l, channelId: o, userId: u } = e,
        [d, x] = r.useState(!1),
        A = (0, c.K)((e) => x(e));
    return (
        r.useEffect(() => {
            d &&
                S.Ay.trackWithMetadata($.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: l,
                    user_id: u,
                });
        }, [s.id, o, l, u, d]),
        (0, i.jsx)(m.m, {
            text: ee.intl.formatToPlainString(ee.t.Sq9xJ7, { game: s.name }),
            "aria-label": ee.intl.formatToPlainString(ee.t.Sq9xJ7, { game: s.name }),
            children: (0, i.jsx)(P.A, {
                ref: A,
                className: a()(es.Kk, es.Gt, n),
                game: t ?? s,
                size: P.M.XSMALL,
                onMouseEnter: function () {
                    S.Ay.trackWithMetadata($.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: o,
                        guild_id: l,
                        game_name: s.name,
                        user_id: u,
                    });
                },
            }),
        })
    );
}
