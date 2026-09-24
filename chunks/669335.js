(t.d(s, { Wr: () => en, Ay: () => er, Kc: () => ei }), t(321073));
var n,
    i = t(477900),
    r = t(582128),
    l = t(503698),
    a = t.n(l),
    c = t(172218),
    o = t(738678),
    u = t(960027),
    d = t(17928),
    m = t(866665),
    A = t(943812),
    x = t(428689),
    h = t(695366),
    E = t(661531),
    N = t(323384),
    g = t(39623),
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
    D = t(20015),
    S = t(863089),
    k = t(85448),
    y = t(556525),
    v = t(402216),
    M = t(268218),
    b = t(609425),
    G = t(73392),
    P = t(769015),
    V = t(430363),
    U = t(823854),
    F = t(602853),
    K = t(475743),
    z = t(775602),
    w = t(21161),
    B =
        (((n = {})[(n.OFFERED = 0)] = "OFFERED"),
        (n[(n.ACCEPTED = 1)] = "ACCEPTED"),
        (n[(n.RUNNING = 2)] = "RUNNING"),
        (n[(n.COMPLETED = 3)] = "COMPLETED"),
        (n[(n.FAILED = 4)] = "FAILED"),
        (n[(n.CANCELLED = 5)] = "CANCELLED"),
        n),
    Z = t(818888);
function H(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        l = (0, d.bG)([U.A], () => U.A.getProgressForUserId(s), [s]),
        a = (0, d.bG)(
            [U.A],
            () => {
                let e = U.A.getTrackingEntryForUserId(s);
                return e?.presence?.phase === B.COMPLETED;
            },
            [s],
        ),
        c = (0, d.bG)([z.Ay], () => z.Ay.useReducedMotion),
        o = (0, K.Ay)(l),
        u = (0, K.Ay)(a),
        { createMultipleConfettiAt: m } = r.useContext(w.x),
        A = (0, F.r)(E.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        x = (0, F.r)(E.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        h = (0, F.r)(E.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        N = r.useRef(0),
        g = r.useRef(null),
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
            let e = g.current?.getBoundingClientRect();
            null != e && m(e.left + e.width / 2, e.top + e.height / 2, I, 250);
        }, [I, m, c]);
    (r.useEffect(() => {
        c || ((o ?? 0) < 1 && C >= 1 && f());
    }, [C, f, o, c]),
        r.useEffect(() => {
            c || !0 !== a || (!0 !== u && f());
        }, [f, a, u, c]));
    let L = r.useCallback(() => {
        if (c || C < 1) return;
        let e = Date.now();
        e - N.current < 4e3 || ((N.current = e), f());
    }, [C, f, c]);
    return (0, i.jsx)("div", {
        className: t,
        onMouseEnter: L,
        children: (0, i.jsxs)("div", {
            ref: g,
            className: Z.R,
            children: [(0, i.jsx)("div", { className: Z.h, style: p }), n],
        }),
    });
}
function J(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        r = (0, V.Uk)("VoiceDareAvatarRing"),
        l = (0, d.bG)([U.A], () => U.A.hasVoiceDareForUserId(s), [s]);
    return r && l
        ? (0, i.jsx)(H, { userId: s, wrapperClassName: t, children: n })
        : (0, i.jsx)("div", { className: t, children: n });
}
var X = t(790381),
    W = t(266080),
    $ = t(427262),
    Q = t(652215),
    Y = t(806931),
    q = t(544105),
    ee = t(375708),
    es = t(254849);
let et = (0, M.Fe)({
    createPromise: () => Promise.all([t.e("910349"), t.e("528966")]).then(t.bind(t, 217356)),
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
        collapsed: j,
        video: p,
        isStreaming: _,
        disabled: S,
        isWatching: k,
        ringing: y,
        iconClassName: M,
        embeddedApplication: b,
        otherClientSessionType: G,
        voicePlatform: P,
        application: V,
        game: U,
        guildId: F,
        channelId: K,
        user: z,
        disconnected: w,
        isHovered: B,
    } = e;
    if (j || S) return null;
    let Z = [],
        H = (function (e) {
            let { iconClassName: s, mute: t, localMute: n, serverMute: r, deaf: l, serverDeaf: c } = e,
                o = [];
            if (t) {
                let e;
                e = r || n ? I.O : f.z;
                let t = (0, i.jsx)(e, { className: a()(es.Kk, s, { [es.DU]: r }), color: "currentColor" });
                o.push(
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
                let e = c ? L.T : O.c,
                    t = (0, i.jsx)(e, { className: a()(es.Kk, s, { [es.DU]: c }), color: "currentColor" });
                o.push(
                    (0, i.jsx)(
                        m.m,
                        { text: c ? ee.intl.string(ee.t.btxSdB) : ee.intl.string(ee.t.NjmiOL), children: t },
                        "deaf",
                    ),
                );
            }
            return o;
        })({ iconClassName: M, mute: t, localMute: n, serverMute: l, deaf: c, serverDeaf: d });
    (p &&
        (r
            ? Z.push(
                  (0, i.jsx)(
                      m.m,
                      {
                          text: ee.intl.string(ee.t["PXMZ/+"]),
                          children: (0, i.jsx)(A.O, {
                              size: "md",
                              color: "currentColor",
                              className: a()(es.Kk, M),
                              colorClass: es.of,
                          }),
                      },
                      "video",
                  ),
              )
            : Z.push(
                  (0, i.jsx)(
                      m.m,
                      {
                          text: ee.intl.string(ee.t.FlNoSV),
                          children: (0, i.jsx)(x.VideoIcon, {
                              size: "md",
                              color: "currentColor",
                              className: a()(es.Kk, M),
                          }),
                      },
                      "video",
                  ),
              )),
        w &&
            Z.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: ee.intl.string(ee.t.HFwRpk),
                        children: (0, i.jsx)(h.E, {
                            className: a()(es.Kk, M),
                            color: E.A.colors.STATUS_WARNING_BACKGROUND,
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
                        children: (0, i.jsx)(N.k, { size: "md", color: "currentColor", className: a()(es.Kk, M) }),
                    },
                    "activity",
                ),
            ),
        G === q.f$.XBOX || P === Y.J7.XBOX
            ? Z.push((0, i.jsx)(W.A, { className: a()(es.Kk, M) }, "xbox"))
            : G === q.f$.PLAYSTATION || P === Y.J7.PLAYSTATION
              ? Z.push((0, i.jsx)(X.A, { className: a()(es.Kk, M) }, "playstation"))
              : P === Y.J7.QUEST &&
                Z.push((0, i.jsx)(o.G, { size: "xs", color: "currentColor", className: a()(es.Kk, M) }, "quest")),
        k &&
            Z.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: ee.intl.string(ee.t["JH1SJ+"]),
                        children: (0, i.jsx)(g.EyeIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: a()(es.Kk, M),
                        }),
                    },
                    "watch",
                ),
            ),
        _ && Z.push((0, i.jsx)(v.Ay, { size: v.Ay.Sizes.SMALL }, "stream")),
        y &&
            null != K &&
            B &&
            Z.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: ee.intl.string(ee.t.ygslb0),
                        children: (0, i.jsx)(C.D, {
                            onClick: (e) => {
                                (e.stopPropagation(), R.A.stopRinging(K, [z.id]));
                            },
                            children: (0, i.jsx)(u.z, {
                                size: "sm",
                                color: E.A.colors.ICON_FEEDBACK_CRITICAL,
                                className: a()(es.Kk, M),
                            }),
                        }),
                    },
                    "ring",
                ),
            ));
    let J = null != V && !(0, D.n)(V, Q.gfo.EMBEDDED);
    return 0 !== Z.length || 0 !== H.length || J || y
        ? (0, i.jsxs)("div", {
              className: a()(es.Pt, s),
              children: [
                  (0, i.jsxs)("div", { className: es.RL, children: [H, Z] }),
                  J && !y
                      ? (0, i.jsx)("div", {
                            className: es.RL,
                            children: (0, i.jsx)(
                                el,
                                { application: V, game: U, iconClassName: M, guildId: F, channelId: K, userId: z.id },
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
            size: u = Q.OSZ.SMALL,
            selected: A = !1,
            disabled: x = !1,
            isOverlay: h = !1,
            ref: E,
            ...N
        } = e,
        {
            onClick: g,
            onKeyDown: C,
            onDoubleClick: I,
            onContextMenu: f,
            onMouseLeave: L,
            onMouseDown: O,
            priority: R,
            speaking: T = !1,
            collapsed: _,
            mute: D,
            localMute: v,
            serverMute: M,
            deaf: P,
            serverDeaf: F,
            guildId: K,
            nick: z,
            isGuest: w,
            flipped: B,
            className: Z,
            overlap: H,
            "aria-label": X,
            ringing: W,
            user: Y,
        } = N,
        q = (0, b.A)({ userId: Y.id, guildId: K }),
        en = (0, G.a)({ displayNameStyles: q }),
        er = (0, S.A)(Y.id),
        el = (0, y.v)({
            isSpeaking: T,
            voiceDb: er,
            ...(H ? { spreadDirection: y.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [ea, ec] = r.useState(!1),
        eo = (() => {
            if (null != X) return X;
            let e = z ?? Y.username,
                s = null;
            return (F
                ? (s = ee.intl.string(ee.t.btxSdB))
                : P
                  ? (s = ee.intl.string(ee.t.NjmiOL))
                  : v
                    ? (s = ee.intl.string(ee.t.Q8Uzof))
                    : M
                      ? (s = ee.intl.string(ee.t.uLddbQ))
                      : D && (s = ee.intl.string(ee.t.tjtv3P)),
            null != s)
                ? ee.intl.formatToPlainString(ee.t["1+MVBP"], { userName: e, status: s })
                : e;
        })(),
        eu = (0, d.bG)([U.A], () => U.A.getProgressForUserId(Y.id), [Y.id]),
        ed = (0, V.Uk)("VoiceUser") && null != eu;
    return (0, i.jsx)(p.s, {
        ref: E,
        className: a()(Z, {
            [es.q7]: !0,
            [es.EF]: H,
            [es.wH]: A,
            [es.vk]: null != g,
            [es.L9]: u === Q.OSZ.SMALL,
            [es.p8]: u === Q.OSZ.LARGE,
            [es.r9]: !A && x,
        }),
        onClick: function (e) {
            g?.(e, Y);
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
            className: a()(es.Qs, { [es.zq]: B }),
            children: [
                R && !_
                    ? (0, i.jsx)(m.m, {
                          text: ee.intl.string(ee.t.BVK71i),
                          children: (0, i.jsx)("div", { className: a()(es.G, { [es.g4]: !D && !M && T }) }),
                      })
                    : null,
                ((s = a()(es.my, { [es.Jb]: u === Q.OSZ.LARGE, [es.dT]: u === Q.OSZ.SMALL, [es.DF]: W })),
                (t = { backgroundImage: `url(${Y.getAvatarURL(K, u === Q.OSZ.LARGE ? 38 : 24)})`, ...el }),
                W
                    ? (0, i.jsx)(k.Ay, {
                          size: u === Q.OSZ.LARGE ? j._3.SIZE_40 : j._3.SIZE_24,
                          ringing: !0,
                          src: Y.getAvatarURL(K, u === Q.OSZ.LARGE ? 40 : 24),
                          className: a()(c, s),
                      })
                    : ed
                      ? (0, i.jsx)(J, {
                            userId: Y.id,
                            wrapperClassName: c,
                            children: (0, i.jsx)("div", { className: s, style: t }),
                        })
                      : (0, i.jsx)("div", { className: a()(c, s), style: t })),
                ((n = (0, i.jsxs)("div", {
                    className: a()(o, es.Xh, en, { [es.Pi]: !D && !M && T, [es.DF]: W }),
                    children: [
                        z ?? $.Ay.getName(Y),
                        w
                            ? (0, i.jsxs)("span", {
                                  className: es.IW,
                                  children: ["\xa0", ee.intl.string(ee.t["pFO/Ph"])],
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
                    className: a()(es.fc, h && es.zW),
                    profileViewedAnalytics: { source: h ? Q.JJy.OVERLAY : Q.ThZ.VOICE_PANEL },
                }),
                !_ || h ? (0, i.jsx)(et, { ...l, children: n }) : null),
                (0, i.jsx)(ei, { disabled: x, ...N, isHovered: ea }),
            ],
        }),
    });
};
function el(e) {
    let { application: s, game: t, iconClassName: n, guildId: l, channelId: o, userId: u } = e,
        [d, A] = r.useState(!1),
        x = (0, c.K)((e) => A(e));
    return (
        r.useEffect(() => {
            d &&
                _.Ay.trackWithMetadata(Q.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: l,
                    user_id: u,
                });
        }, [s.id, o, l, u, d]),
        (0, i.jsx)(m.m, {
            text: ee.intl.formatToPlainString(ee.t.Sq9xJ7, { game: s.name }),
            "aria-label": ee.intl.formatToPlainString(ee.t.Sq9xJ7, { game: s.name }),
            children: (0, i.jsx)(P.A, {
                ref: x,
                className: a()(es.Kk, es.n8, n),
                game: t ?? s,
                size: P.M.XSMALL,
                onMouseEnter: function () {
                    _.Ay.trackWithMetadata(Q.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
