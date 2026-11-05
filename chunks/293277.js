(t.d(s, { Kc: () => er, Wr: () => en, Ay: () => ei }), t(321073));
var n,
    r = t(477900),
    i = t(582128),
    l = t(503698),
    a = t.n(l),
    o = t(172218),
    c = t(738678),
    d = t(960027),
    u = t(855986),
    m = t(866665),
    x = t(943812),
    A = t(428689),
    h = t(695366),
    N = t(646514),
    g = t(323384),
    E = t(39623),
    I = t(939249),
    p = t(778712),
    j = t(890856),
    C = t(546861),
    f = t(666654),
    L = t(83107),
    S = t(615675),
    O = t(990836),
    R = t(387755),
    T = t(440594),
    _ = t(149468),
    D = t(863089),
    k = t(85448),
    y = t(556525),
    b = t(402216),
    v = t(268218),
    M = t(609425),
    V = t(73392),
    P = t(769015),
    G = t(430363),
    U = t(823854),
    K = t(602853),
    F = t(475743),
    w = t(775602),
    z = t(21161),
    H =
        (((n = {})[(n.OFFERED = 0)] = "OFFERED"),
        (n[(n.ACCEPTED = 1)] = "ACCEPTED"),
        (n[(n.RUNNING = 2)] = "RUNNING"),
        (n[(n.COMPLETED = 3)] = "COMPLETED"),
        (n[(n.FAILED = 4)] = "FAILED"),
        (n[(n.CANCELLED = 5)] = "CANCELLED"),
        n),
    J = t(818888);
function Z(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        l = (0, u.bG)([U.A], () => U.A.getProgressForUserId(s), [s]),
        a = (0, u.bG)(
            [U.A],
            () => {
                let e = U.A.getTrackingEntryForUserId(s);
                return e?.presence?.phase === H.COMPLETED;
            },
            [s],
        ),
        o = (0, u.bG)([w.Ay], () => w.Ay.useReducedMotion),
        c = (0, F.Ay)(l),
        d = (0, F.Ay)(a),
        { createMultipleConfettiAt: m } = i.useContext(z.x),
        x = (0, K.r)(N.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        A = (0, K.r)(N.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        h = (0, K.r)(N.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        g = i.useRef(0),
        E = i.useRef(null),
        I = Math.max(0, Math.min(1, l ?? 0)),
        p = I >= 1 ? h : A,
        j = i.useMemo(
            () => ({ backgroundImage: `conic-gradient(${p} ${Math.round(360 * I)}deg, ${x} 0deg)` }),
            [I, p, x],
        ),
        C = i.useMemo(
            () => ({
                size: { type: "static-random", minValue: 2, maxValue: 6 },
                velocity: { type: "static-random", minValue: { x: -120, y: -140 }, maxValue: { x: 120, y: -260 } },
            }),
            [],
        ),
        f = i.useCallback(() => {
            if (o) return;
            let e = E.current?.getBoundingClientRect();
            null != e && m(e.left + e.width / 2, e.top + e.height / 2, C, 250);
        }, [C, m, o]);
    (i.useEffect(() => {
        o || ((c ?? 0) < 1 && I >= 1 && f());
    }, [I, f, c, o]),
        i.useEffect(() => {
            o || !0 !== a || (!0 !== d && f());
        }, [f, a, d, o]));
    let L = i.useCallback(() => {
        if (o || I < 1) return;
        let e = Date.now();
        e - g.current < 4e3 || ((g.current = e), f());
    }, [I, f, o]);
    return (0, r.jsx)("div", {
        className: t,
        onMouseEnter: L,
        children: (0, r.jsxs)("div", {
            ref: E,
            className: J.R,
            children: [(0, r.jsx)("div", { className: J.h, style: j }), n],
        }),
    });
}
function B(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        i = (0, G.Uk)("VoiceDareAvatarRing"),
        l = (0, u.bG)([U.A], () => U.A.hasVoiceDareForUserId(s), [s]);
    return i && l
        ? (0, r.jsx)(Z, { userId: s, wrapperClassName: t, children: n })
        : (0, r.jsx)("div", { className: t, children: n });
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
    return (0, r.jsx)("div", { className: a()(n, es.p_, t ? es.GT : es.m3), role: "group", children: s });
}
function er(e) {
    let {
        className: s,
        mute: t,
        localMute: n,
        localVideoDisabled: i,
        serverMute: l,
        deaf: o,
        serverDeaf: u,
        collapsed: p,
        video: j,
        isStreaming: _,
        disabled: D,
        isWatching: k,
        ringing: y,
        iconClassName: v,
        embeddedApplication: M,
        otherClientSessionType: V,
        voicePlatform: P,
        application: G,
        game: U,
        guildId: K,
        channelId: F,
        user: w,
        disconnected: z,
        isHovered: H,
        soundboardMuted: J,
    } = e;
    if (p || D) return null;
    let Z = [],
        B = (function (e) {
            let {
                    iconClassName: s,
                    mute: t,
                    localMute: n,
                    serverMute: i,
                    deaf: l,
                    serverDeaf: o,
                    soundboardMuted: c,
                } = e,
                d = [];
            if (
                (c &&
                    d.push(
                        (0, r.jsx)(
                            m.m,
                            {
                                text: ee.intl.string(ee.t["9bJYWN"]),
                                children: (0, r.jsx)(C.SoundboardDenyIcon, {
                                    className: a()(es.Kk, s),
                                    color: "currentColor",
                                }),
                            },
                            "soundboard-mute",
                        ),
                    ),
                t)
            ) {
                let e;
                e = i || n ? f.MicrophoneDenyIcon : L.MicrophoneSlashIcon;
                let t = (0, r.jsx)(e, { className: a()(es.Kk, s, { [es.DU]: i }), color: "currentColor" });
                d.push(
                    (0, r.jsx)(
                        m.m,
                        {
                            text: n
                                ? ee.intl.string(ee.t.Q8Uzof)
                                : i
                                  ? ee.intl.string(ee.t.uLddbQ)
                                  : ee.intl.string(ee.t.tjtv3P),
                            children: t,
                        },
                        "mute",
                    ),
                );
            }
            if (o || l) {
                let e = o ? S.HeadphonesDenyIcon : O.HeadphonesSlashIcon,
                    t = (0, r.jsx)(e, { className: a()(es.Kk, s, { [es.DU]: o }), color: "currentColor" });
                d.push(
                    (0, r.jsx)(
                        m.m,
                        { text: o ? ee.intl.string(ee.t.btxSdB) : ee.intl.string(ee.t.NjmiOL), children: t },
                        "deaf",
                    ),
                );
            }
            return d;
        })({ iconClassName: v, mute: t, localMute: n, serverMute: l, deaf: o, serverDeaf: u, soundboardMuted: J });
    (j &&
        (i
            ? Z.push(
                  (0, r.jsx)(
                      m.m,
                      {
                          text: ee.intl.string(ee.t["PXMZ/+"]),
                          children: (0, r.jsx)(x.VideoSlashIcon, {
                              size: "md",
                              color: "currentColor",
                              className: a()(es.Kk, v),
                          }),
                      },
                      "video",
                  ),
              )
            : Z.push(
                  (0, r.jsx)(
                      m.m,
                      {
                          text: ee.intl.string(ee.t.FlNoSV),
                          children: (0, r.jsx)(A.VideoIcon, {
                              size: "md",
                              color: "currentColor",
                              className: a()(es.Kk, v),
                          }),
                      },
                      "video",
                  ),
              )),
        z &&
            Z.push(
                (0, r.jsx)(
                    m.m,
                    {
                        text: ee.intl.string(ee.t.HFwRpk),
                        children: (0, r.jsx)(h.CircleErrorIcon, {
                            className: a()(es.Kk, v),
                            color: N.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != M &&
            Z.push(
                (0, r.jsx)(
                    m.m,
                    {
                        text: (0, T.A)(M.name),
                        children: (0, r.jsx)(g.AppsIcon, {
                            size: "md",
                            color: "currentColor",
                            className: a()(es.Kk, v),
                        }),
                    },
                    "activity",
                ),
            ),
        V === Q.f$.XBOX || P === q.J7.XBOX
            ? Z.push((0, r.jsx)(X.A, { className: a()(es.Kk, v) }, "xbox"))
            : V === Q.f$.PLAYSTATION || P === q.J7.PLAYSTATION
              ? Z.push((0, r.jsx)(W.A, { className: a()(es.Kk, v) }, "playstation"))
              : P === q.J7.QUEST &&
                Z.push(
                    (0, r.jsx)(
                        c.VrHeadsetIcon,
                        { size: "xs", color: "currentColor", className: a()(es.Kk, v) },
                        "quest",
                    ),
                ),
        k &&
            Z.push(
                (0, r.jsx)(
                    m.m,
                    {
                        text: ee.intl.string(ee.t["JH1SJ+"]),
                        children: (0, r.jsx)(E.EyeIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: a()(es.Kk, v),
                        }),
                    },
                    "watch",
                ),
            ),
        _ && Z.push((0, r.jsx)(b.Ay, { size: b.Ay.Sizes.SMALL }, "stream")),
        y &&
            null != F &&
            H &&
            Z.push(
                (0, r.jsx)(
                    m.m,
                    {
                        text: ee.intl.string(ee.t.ygslb0),
                        children: (0, r.jsx)(I.D, {
                            onClick: (e) => {
                                (e.stopPropagation(), R.A.stopRinging(F, [w.id]));
                            },
                            children: (0, r.jsx)(d.PhoneHangUpIcon, {
                                size: "sm",
                                color: N.A.colors.ICON_FEEDBACK_CRITICAL,
                                className: a()(es.Kk, v),
                            }),
                        }),
                    },
                    "ring",
                ),
            ));
    let Y = null != G && !G.isEmbedded;
    return 0 !== Z.length || 0 !== B.length || Y || y
        ? (0, r.jsxs)("div", {
              className: a()(es.Pt, s),
              children: [
                  (0, r.jsxs)("div", { className: es.RL, children: [B, Z] }),
                  Y && !y
                      ? (0, r.jsx)("div", {
                            className: es.RL,
                            children: (0, r.jsx)(
                                el,
                                { application: G, game: U, iconClassName: v, guildId: K, channelId: F, userId: w.id },
                                `${w.id}-game`,
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
            avatarContainerClass: o = es.H,
            userNameClassName: c = es.gr,
            size: d = $.OSZ.SMALL,
            selected: x = !1,
            disabled: A = !1,
            isOverlay: h = !1,
            ref: N,
            ...g
        } = e,
        {
            onClick: E,
            onKeyDown: I,
            onDoubleClick: C,
            onContextMenu: f,
            onMouseLeave: L,
            onMouseDown: S,
            priority: O,
            speaking: R = !1,
            playingSoundboard: T = !1,
            collapsed: _,
            mute: b,
            localMute: v,
            serverMute: P,
            deaf: K,
            serverDeaf: F,
            guildId: w,
            nick: z,
            isGuest: H,
            flipped: J,
            className: Z,
            overlap: W,
            "aria-label": X,
            ringing: q,
            connecting: Q = !1,
            user: en,
            soundboardMuted: ei,
        } = g,
        el = (0, M.A)({ userId: en.id, guildId: w }),
        ea = (0, V.a)({ displayNameStyles: el }),
        eo = (0, D.A)(en.id),
        ec = (0, y.v)({
            voiceStatus: (0, p.n$)(R, T),
            voiceDb: eo,
            ...(W ? { spreadDirection: y.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [ed, eu] = i.useState(!1),
        em = (() => {
            if (null != X) return X;
            let e = z ?? en.username,
                s = null;
            return (Q
                ? (s = ee.intl.string(ee.t["7LkwqE"]))
                : F
                  ? (s = ee.intl.string(ee.t.btxSdB))
                  : K
                    ? (s = ee.intl.string(ee.t.NjmiOL))
                    : v
                      ? (s = ee.intl.string(ee.t.Q8Uzof))
                      : P
                        ? (s = ee.intl.string(ee.t.uLddbQ))
                        : b
                          ? (s = ee.intl.string(ee.t.tjtv3P))
                          : ei && (s = ee.intl.string(ee.t["9bJYWN"])),
            null != s)
                ? ee.intl.formatToPlainString(ee.t["1+MVBP"], { userName: e, status: s })
                : e;
        })(),
        ex = (0, u.bG)([U.A], () => U.A.getProgressForUserId(en.id), [en.id]),
        eA = (0, G.Uk)("VoiceUser") && null != ex;
    return (0, r.jsx)(j.s, {
        ref: N,
        className: a()(Z, {
            [es.q7]: !0,
            [es.EF]: W,
            [es.wH]: x,
            [es.vk]: null != E,
            [es.L9]: d === $.OSZ.SMALL,
            [es.p8]: d === $.OSZ.LARGE,
            [es.r9]: !x && A,
            [es.jI]: Q,
        }),
        onClick: function (e) {
            E?.(e, en);
        },
        onDoubleClick: function (e) {
            C?.(e, en);
        },
        onContextMenu: function (e) {
            f?.(e, en);
        },
        onMouseLeave: function (e) {
            (L?.(e, en), eu(!1));
        },
        onMouseDown: function (e) {
            S?.(e, en);
        },
        onMouseEnter: function () {
            eu(!0);
        },
        onKeyDown: I,
        "aria-label": em,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", {
            className: a()(es.Qs, { [es.zq]: J }),
            children: [
                O && !_
                    ? (0, r.jsx)(m.m, {
                          text: ee.intl.string(ee.t.BVK71i),
                          children: (0, r.jsx)("div", { className: a()(es.G, { [es.g4]: !b && !P && R }) }),
                      })
                    : null,
                ((s = a()(es.my, { [es.Jb]: d === $.OSZ.LARGE, [es.dT]: d === $.OSZ.SMALL, [es.DF]: q })),
                (t = { backgroundImage: `url(${en.getAvatarURL(w, d === $.OSZ.LARGE ? 38 : 24)})`, ...ec }),
                q
                    ? (0, r.jsx)(k.Ay, {
                          size: d === $.OSZ.LARGE ? p._3.SIZE_40 : p._3.SIZE_24,
                          ringing: !0,
                          src: en.getAvatarURL(w, d === $.OSZ.LARGE ? 40 : 24),
                          className: a()(o, s),
                      })
                    : eA
                      ? (0, r.jsx)(B, {
                            userId: en.id,
                            wrapperClassName: o,
                            children: (0, r.jsx)("div", { className: s, style: t }),
                        })
                      : (0, r.jsx)("div", { className: a()(o, s), style: t })),
                ((n = (0, r.jsxs)("div", {
                    className: a()(c, es.Xh, ea, { [es.Pi]: !b && !P && R, [es.DF]: q }),
                    children: [
                        z ?? Y.Ay.getName(en),
                        H
                            ? (0, r.jsxs)("span", {
                                  className: es.IW,
                                  children: ["\xa0", ee.intl.string(ee.t["pFO/Ph"])],
                              })
                            : "",
                    ],
                })),
                (l = {
                    primaryGuild: en.primaryGuild,
                    userId: en.id,
                    contextGuildId: w,
                    isOverlay: h,
                    disableTooltip: !0,
                    className: a()(es.fc, h && es.zW),
                    profileViewedAnalytics: { source: h ? $.JJy.OVERLAY : $.ThZ.VOICE_PANEL },
                }),
                !_ || h ? (0, r.jsx)(et, { ...l, children: n }) : null),
                (0, r.jsx)(er, { disabled: A, ...g, isHovered: ed }),
            ],
        }),
    });
};
function el(e) {
    let { application: s, game: t, iconClassName: n, guildId: l, channelId: c, userId: d } = e,
        [u, x] = i.useState(!1),
        A = (0, o.K)((e) => x(e));
    return (
        i.useEffect(() => {
            u &&
                _.Ay.trackWithMetadata($.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: c,
                    guild_id: l,
                    user_id: d,
                });
        }, [s.id, c, l, d, u]),
        (0, r.jsx)(m.m, {
            text: ee.intl.formatToPlainString(ee.t.Sq9xJ7, { game: s.name }),
            "aria-label": ee.intl.formatToPlainString(ee.t.Sq9xJ7, { game: s.name }),
            children: (0, r.jsx)(P.A, {
                ref: A,
                className: a()(es.Kk, es.Gt, n),
                game: t ?? s,
                size: P.M.XSMALL,
                onMouseEnter: function () {
                    _.Ay.trackWithMetadata($.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: c,
                        guild_id: l,
                        game_name: s.name,
                        user_id: d,
                    });
                },
            }),
        })
    );
}
