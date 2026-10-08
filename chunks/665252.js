n.d(t, { A: () => ef });
var l,
    i = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(202091),
    u = n(17928),
    c = n(778712),
    d = n(922016),
    h = n(97808),
    m = n(866665),
    f = n(939249),
    p = n(834730),
    g = n(866323),
    x = n(565645),
    E = n(114166),
    S = n(793574),
    y = n(688810),
    C = n(209932),
    A = n(813564),
    b = n(73153),
    I = n(734057),
    N = n(927813),
    v = n(714736);
n(980504);
let T = 7.5 * N.A.Millis.SECOND,
    j = new Map(),
    _ = new Map();
class k extends u.Ay.Store {
    initialize() {
        this.waitFor(I.A);
    }
    static displayName = "SoundboardEchoStore";
    getSoundboardEchoes() {
        return j;
    }
    getSoundboardEcho(e) {
        return j.get(e);
    }
}
let R = new k(b.h, {
    VOICE_CHANNEL_EFFECT_SEND: function (e) {
        let {
            soundId: t,
            channelId: n,
            userId: l,
            authorId: i,
            sourceGuildId: r,
            soundName: s,
            emoji: a,
            soundVolume: o,
            isEcho: u,
        } = e;
        if (null == t || null == s) return !1;
        let c = I.A.getChannel(n)?.getGuildId();
        if (null == c) return !1;
        let { enabled: d } = (0, v.j)(c, "handleSoundPlayStart");
        if (!d) return !1;
        let h = {
            soundId: t,
            name: s,
            guildId: r ?? "0",
            emojiId: a?.id ?? void 0,
            emojiName: a?.name,
            emojiAnimated: a?.animated ?? void 0,
            available: !0,
            userId: l,
            volume: o ?? 1,
        };
        !(function (e) {
            let t,
                n,
                { soundId: l, sound: i, authorId: r, playedByUserId: s, isEcho: a } = e,
                o = j.get(l),
                u = Date.now();
            (null == o
                ? j.set(l, {
                      sound: i,
                      count: 1,
                      authorId: r,
                      playedByUserIds: new Set([s]),
                      mostRecentPlayedByUserId: a ? s : null,
                      lastPlayedAt: u,
                      startedAt: u,
                  })
                : j.set(l, {
                      ...o,
                      count: o.count + 1,
                      playedByUserIds: o.playedByUserIds.add(s),
                      mostRecentPlayedByUserId: s === r ? o.mostRecentPlayedByUserId : s,
                      lastPlayedAt: u,
                  }),
                null != (t = _.get(l)) && clearTimeout(t),
                (n = setTimeout(() => {
                    b.h.dispatch({ type: "SOUNDBOARD_ECHO_EXPIRED", soundId: l });
                }, T)),
                _.set(l, n));
        })({ soundId: t, sound: h, authorId: i ?? l, playedByUserId: l, isEcho: u });
    },
    VOICE_CHANNEL_SELECT: function (e) {
        (_.forEach(clearTimeout), _.clear(), j.clear());
    },
    SOUNDBOARD_ECHO_EXPIRED: function (e) {
        let { soundId: t } = e;
        (_.delete(t), j.delete(t));
    },
});
var O = n(994500),
    L = n(287809),
    w = n(562153),
    M = n(427262),
    P = n(435558),
    D = n.n(P),
    U = n(111159),
    V = n(952270),
    W = n(320448),
    F = n(964486),
    B = n(624793),
    K = n(548118),
    G = n(465794),
    H = n(796774),
    z = n(71393),
    q = n(158045),
    $ = n(763827),
    Q = n(174459),
    Z = n(652215),
    X = n(202541),
    J = (((l = {}).HOVER = "hover"), (l.SEE_MORE_DETAILS = "see_more_details"), l);
let Y = new Set();
function ee(e, t) {
    let { sound: n, startedAt: l } = t,
        i = `${e}:${n.soundId}:${l}`;
    return !Y.has(i) && (Y.add(i), !0);
}
function et(e) {
    let { action: t, guildId: n, channelId: l, echo: i, sourceGuildState: r, analyticsLocations: s } = e;
    if (!ee(`${Z.HAw.SOUNDBOARD_ECHO_SOUND_DETAILS_VIEWED}:${t}`, i)) return;
    let { sound: a } = i;
    Q.default.track(Z.HAw.SOUNDBOARD_ECHO_SOUND_DETAILS_VIEWED, {
        action: t,
        voice_guild_id: n,
        channel_id: l,
        sound_id: a.soundId,
        source_guild_id: a.guildId,
        source_guild_state: r,
        location_stack: s,
    });
}
var en = n(660183),
    el = n(858981);
function ei(e) {
    let { icon: t, title: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: el.wt,
        children: [
            t,
            (0, i.jsxs)("div", {
                className: el.FS,
                children: [
                    (0, i.jsx)(p.E, { variant: "text-sm/medium", children: n }),
                    (0, i.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", children: l }),
                ],
            }),
        ],
    });
}
function er(e) {
    let { sourceGuildName: t, isExternal: n } = e,
        { analyticsLocations: l } = (0, y.Ay)(S.A.SOUNDBOARD_ECHO, S.A.PREMIUM_UPSELL);
    return (
        (0, F.Ay)(() => {
            !(function (e) {
                let { isExternal: t, analyticsLocations: n } = e;
                Q.default.track(Z.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: X.e.SOUNDBOARD_ECHO_SOUND_DETAILS_UPSELL,
                    is_external: t,
                    location_stack: n,
                    sku_id: q.Ay.getSkuIdForPremiumType(X.PremiumTypes.TIER_2),
                    voice_guild_id: $.A.getGuildId() ?? null,
                });
            })({ isExternal: n, analyticsLocations: l });
        }),
        (0, i.jsx)(y.f5, {
            value: l,
            children: (0, i.jsxs)("div", {
                className: el.Kt,
                children: [
                    (0, i.jsx)(p.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: en.intl.format(en.t["/ZJIuo"], { guildName: t }),
                    }),
                    (0, i.jsx)(G.A, {
                        size: "sm",
                        fullWidth: !0,
                        subscriptionTier: X.pe.TIER_2,
                        buttonTextOverride: en.intl.string(en.t.pj0XBN),
                    }),
                ],
            }),
        })
    );
}
function es(e) {
    let { guildId: t, channelId: n, sound: l, startedAt: s } = e,
        a = (function (e) {
            let { guildId: t, soundId: n } = e,
                l = "0" === t,
                i = (0, u.bG)([z.A], () => z.A.getGuild(t)),
                [s, a] = r.useState(),
                o = !l && null == i;
            return (
                r.useEffect(() => {
                    o &&
                        (0, H.nh)(n, t)
                            .catch(() => null)
                            .then(a);
                }, [o, n, t]),
                r.useMemo(
                    () =>
                        l
                            ? { state: "DEFAULT_SOUND" }
                            : null != i
                              ? { state: "MEMBER", sourceGuild: B.GO.createFromGuildRecord(i) }
                              : void 0 === s
                                ? { state: "LOADING" }
                                : null == s
                                  ? { state: "UNAVAILABLE" }
                                  : { state: "DISCOVERABLE", sourceGuild: B.GO.createFromDiscoverableGuild(s) },
                    [l, i, s],
                )
            );
        })(l),
        o = (0, u.bG)([L.default], () => q.Ay.canUseSoundboardEverywhere(L.default.getCurrentUser())),
        { analyticsLocations: c } = (0, y.Ay)();
    switch (
        (r.useEffect(() => {
            "LOADING" !== a.state &&
                et({
                    action: J.SEE_MORE_DETAILS,
                    guildId: t,
                    channelId: n,
                    echo: { sound: l, startedAt: s },
                    sourceGuildState: a.state.toLowerCase(),
                    analyticsLocations: c,
                });
        }, [c, n, t, l, a.state, s]),
        a.state)
    ) {
        case "LOADING":
            return (0, i.jsxs)("div", {
                className: el.wt,
                children: [(0, i.jsx)("div", { className: el.EQ }), (0, i.jsx)("div", { className: el.jC })],
            });
        case "DEFAULT_SOUND":
            return (0, i.jsx)(ei, {
                icon: (0, i.jsx)("div", { className: el.EQ, children: (0, i.jsx)(U.p, { size: "refresh_sm" }) }),
                title: en.intl.string(en.t.rWPrJC),
                description: en.intl.string(en.t.ixMwGl),
            });
        case "UNAVAILABLE":
            return (0, i.jsx)(ei, {
                icon: (0, i.jsx)("div", {
                    className: el.EQ,
                    children: (0, i.jsx)(V.EyeSlashIcon, { size: "refresh_sm" }),
                }),
                title: en.intl.string(en.t.T7AWtb),
                description: en.intl.string(en.t.Z4UD3R),
            });
        case "MEMBER":
        case "DISCOVERABLE": {
            let { state: e, sourceGuild: n } = a;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ei, {
                        icon: (0, i.jsx)(K.Ay, { size: K.Ay.Sizes.MEDIUM, guild: n, active: !0 }),
                        title: n.name,
                        description: en.intl.string("MEMBER" === e ? en.t.l3QzyC : en.t.s5No7R),
                    }),
                    !o && (0, i.jsx)(er, { sourceGuildName: n.name, isExternal: n.id !== t }),
                ],
            });
        }
    }
}
function ea(e) {
    let { guildId: t, channelId: n, sound: l, playedByUserIds: s, startedAt: a } = e,
        { emojiId: o, emojiName: c, emojiAnimated: d, name: h } = l,
        m = (function (e) {
            let { playedByUserIds: t, guildId: n, channelId: l } = e,
                i = t.size,
                r = (0, u.yK)([L.default, O.A], () =>
                    D()(Array.from(t))
                        .reject((e) => O.A.isBlockedOrIgnored(e))
                        .take(3)
                        .map((e) => {
                            let t = L.default.getUser(e);
                            return w.Ay.getName(n, l, t);
                        })
                        .value(),
                ),
                s = i - r.length;
            if (1 === r.length)
                if (s > 0) return en.intl.formatToPlainString(en.t.EXaquk, { a: r[0], n: s });
                else return en.intl.formatToPlainString(en.t["DU+Rd+"], { a: r[0] });
            if (2 === r.length)
                if (s > 0) return en.intl.formatToPlainString(en.t.EO8JM8, { a: r[0], b: r[1], n: s });
                else return en.intl.formatToPlainString(en.t.qr8Cg3, { a: r[0], b: r[1] });
            return 3 !== r.length
                ? en.intl.formatToPlainString(en.t.P5JeeM, { n: s })
                : s > 0
                  ? en.intl.formatToPlainString(en.t["+z+JUw"], { a: r[0], b: r[1], c: r[2], n: s })
                  : en.intl.formatToPlainString(en.t["3Zq6FM"], { a: r[0], b: r[1], c: r[2] });
        })({ playedByUserIds: s, guildId: t, channelId: n }),
        [g, E] = r.useState(!1),
        S = r.useCallback((e) => e?.focus(), []),
        { analyticsLocations: C } = (0, y.Ay)();
    return (
        (0, F.Ay)(() => {
            et({ action: J.HOVER, guildId: t, channelId: n, echo: { sound: l, startedAt: a }, analyticsLocations: C });
        }),
        (0, i.jsxs)("div", {
            className: el.kL,
            children: [
                (0, i.jsx)("div", {
                    className: el.r,
                    children: (0, i.jsx)(ei, {
                        icon:
                            null != c || null != o
                                ? (0, i.jsx)(x.A, { className: el.Zg, emojiId: o, emojiName: c, animated: d })
                                : null,
                        title: h,
                        description: m,
                    }),
                }),
                g
                    ? (0, i.jsx)("div", {
                          ref: S,
                          tabIndex: -1,
                          className: el.bT,
                          children: (0, i.jsx)(es, { guildId: t, channelId: n, sound: l, startedAt: a }, l.soundId),
                      })
                    : (0, i.jsx)("div", {
                          className: el.x_,
                          children: (0, i.jsxs)(f.D, {
                              onClick: () => E(!0),
                              className: el._x,
                              children: [
                                  (0, i.jsx)(p.E, {
                                      variant: "text-sm/medium",
                                      children: en.intl.string(en.t["UQT3/h"]),
                                  }),
                                  (0, i.jsx)(W._, { size: "xs", color: "currentColor" }),
                              ],
                          }),
                      }),
            ],
        })
    );
}
var eo = n(559949),
    eu = n(73392),
    ec = n(889053);
function ed(e) {
    let { count: t } = e,
        [n, l] = r.useState(!1),
        [s, u] = r.useState(null),
        [c, d] = r.useState({}),
        h = r.useRef(null),
        m = r.useRef(null),
        f = (0, g.p)(n, {
            from: { translateX: -100, opacity: 0 },
            enter: { translateX: 0, opacity: 1 },
            leave: { translateX: 100, opacity: 0 },
            config: o.config.default,
        });
    (r.useEffect(() => {
        if (t <= 100 && t >= 50 && null != m.current && Math.floor(t / 10) > Math.floor(m.current / 10)) {
            let e, n;
            null != h.current && clearTimeout(h.current);
            let i = 10 * Math.floor(t / 10);
            (u(i),
                l(!0),
                d(
                    ((e = Math.floor(50 * Math.random()) + 20),
                    (n = i - 10),
                    {
                        transform: `rotate(${Math.floor(25 * Math.random()) - 12.5}deg)`,
                        bottom: e,
                        top: -e - (i >= 100 ? 2 * n : n),
                        left: Math.floor(100 * Math.random()) - 200,
                        fontSize: `${n}px`,
                        lineHeight: `${n}px`,
                    }),
                ),
                (m.current = t),
                (h.current = setTimeout(() => {
                    l(!1);
                }, 1500)));
        }
        m.current = t;
    }, [t]),
        r.useEffect(
            () => () => {
                null != h.current && clearTimeout(h.current);
            },
            [],
        ));
    let { className: p } = (0, eu.p)(eo.x.PIXELIFY);
    return f((e, t) =>
        t
            ? (0, i.jsx)(o.animated.div, {
                  className: a()(ec._, p),
                  style: { ...c, ...e },
                  children:
                      100 === s
                          ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { children: `${s} HIT` }),
                                    (0, i.jsx)("div", { children: "SUPER COMBO" }),
                                ],
                            })
                          : `${s} HIT COMBO`,
              })
            : null,
    );
}
var eh = n(998812);
function em(e) {
    let {
            guildId: t,
            channelId: n,
            sound: l,
            authorId: s,
            mostRecentPlayedByUserId: o,
            count: g,
            disabled: b,
            playedByUserIds: I,
            startedAt: N,
            showDetails: v,
            onDetailsMouseEnter: T,
            onDetailsMouseLeave: j,
        } = e,
        { authorUser: _, mostRecentPlayedUser: k } = (0, u.cf)([L.default, O.A], () => {
            let e = O.A.isBlockedOrIgnored(o ?? void 0);
            return {
                authorUser: L.default.getUser(s),
                mostRecentPlayedUser: e || s === o ? null : L.default.getUser(o),
            };
        }),
        R = r.useRef(null),
        { analyticsLocations: P } = (0, y.Ay)(S.A.SOUNDBOARD_ECHO);
    r.useEffect(() => {
        null == t ||
            null == _ ||
            b ||
            (function (e) {
                let { guildId: t, channelId: n, echo: l, analyticsLocations: i } = e;
                if (!ee(Z.HAw.SOUNDBOARD_ECHO_VIEWED, l)) return;
                let { sound: r, authorId: s } = l;
                Q.default.track(Z.HAw.SOUNDBOARD_ECHO_VIEWED, {
                    voice_guild_id: t,
                    channel_id: n,
                    sound_id: r.soundId,
                    source_guild_id: r.guildId,
                    author_id: s,
                    is_author: s === L.default.getCurrentUser()?.id,
                    location_stack: i,
                });
            })({ guildId: t, channelId: n, echo: { sound: l, authorId: s, startedAt: N }, analyticsLocations: P });
    }, [P, s, _, n, b, t, l, N]);
    let D = r.useCallback(() => {
            T(l.soundId);
        }, [T, l.soundId]),
        U = r.useCallback(() => {
            (0, A.CZ)(l, n, P);
        }, [P, n, l]),
        V = (0, u.bG)([C.A], () => C.A.isPlayingSound(l.soundId), [l]),
        W = r.useMemo(() => _?.getAvatarURL(t, (0, c.FT)(c._3.SIZE_32)), [_, t]),
        F = r.useMemo(() => k?.getAvatarURL(t, (0, c.FT)(c._3.SIZE_32)), [k, t]);
    if (null == t || null == _) return null;
    let { emojiId: B, emojiName: K, emojiAnimated: G, name: H } = l;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(eh.Iv, { [eh.E$]: b }),
                style: { height: 36 },
                children: [
                    (0, i.jsx)(d.Y, {
                        targetElementRef: R,
                        shouldShow: v,
                        renderPopout: (e) => {
                            let { setPopoutRef: r } = e;
                            return (0, i.jsx)("div", {
                                ref: r,
                                onMouseEnter: D,
                                onMouseLeave: j,
                                children: (0, i.jsx)(ea, {
                                    guildId: t,
                                    channelId: n,
                                    sound: l,
                                    playedByUserIds: I,
                                    startedAt: N,
                                }),
                            });
                        },
                        position: "top",
                        align: "center",
                        children: () =>
                            (0, i.jsx)("div", {
                                ref: R,
                                onMouseEnter: D,
                                onMouseLeave: j,
                                children: (0, i.jsxs)("div", {
                                    className: eh.yA,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: eh.R3,
                                            children: (0, i.jsx)(h.eu, {
                                                className: eh.Du,
                                                src: W,
                                                size: c._3.SIZE_32,
                                                "aria-label": w.Ay.getNickname(t, n, _) ?? M.Ay.getName(_),
                                            }),
                                        }),
                                        null != k &&
                                            (0, i.jsx)("div", {
                                                className: a()(eh.R3, eh.aR),
                                                children: (0, i.jsx)(h.eu, {
                                                    className: eh.mf,
                                                    src: F,
                                                    size: c._3.SIZE_32,
                                                    "aria-label": w.Ay.getNickname(t, n, k) ?? M.Ay.getName(k),
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                    }),
                    (0, i.jsx)(m.m, {
                        text: b ? en.intl.string(en.t.VqNHoS) : null,
                        children: (0, i.jsxs)(f.D, {
                            className: a()(eh.nG, { [eh.Tz]: V, [eh.Jx]: b }),
                            onClick: b ? () => null : U,
                            "aria-label": en.intl.formatToPlainString(en.t.VOmeSq, { name: H }),
                            children: [
                                (null != K || null != B) &&
                                    (0, i.jsx)(x.A, {
                                        size: "reaction",
                                        className: eh.FA,
                                        emojiId: B,
                                        emojiName: K,
                                        animated: G,
                                    }),
                                (0, i.jsx)(p.E, { variant: "text-md/medium", children: H }),
                                (0, i.jsx)("div", { className: eh.SU }),
                                (0, i.jsxs)(p.E, {
                                    variant: "text-md/medium",
                                    className: eh.Zi,
                                    tabularNumbers: !0,
                                    children: ["x", (0, i.jsx)(E.A, { className: eh.Zi, value: g, digitWidth: 8 })],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(ed, { count: g }),
        ],
    });
}
function ef(e) {
    let { guildId: t, channelId: n } = e,
        l = (0, u.cf)([R], () => Object.fromEntries(R.getSoundboardEchoes())),
        [s, a] = r.useState({}),
        [c, d] = r.useState(!1),
        h = r.useCallback(() => {
            (a(l), d(!0));
        }, [l]),
        m = r.useCallback(() => {
            d(!1);
        }, []),
        f = r.useMemo(
            () =>
                (c
                    ? Object.entries(s).map((e) => {
                          let [t, n] = e;
                          return null != l[t] ? l[t] : { ...n, disabled: !0 };
                      })
                    : Object.values(l)
                )
                    .slice(-3)
                    .reverse(),
            [s, l, c],
        ),
        p = r.useMemo(() => f.map((e, t) => ({ echo: e, y: 42 * t })), [f]),
        x = (0, g.p)(p, {
            keys: (e) => e.echo.sound.soundId,
            from: () => ({ opacity: 0 }),
            enter: (e) => {
                let { y: t } = e;
                return { opacity: 1, translateY: -t };
            },
            update: (e) => {
                let { y: t } = e;
                return { translateY: -t };
            },
            leave: (e) => {
                let { y: t } = e;
                return { opacity: 0, translateY: -t - 36, pointerEvents: "none" };
            },
            config: o.config.gentle,
        }),
        [E, S] = r.useState(null),
        y = r.useRef(null);
    (r.useEffect(() => () => clearTimeout(y.current), []),
        null == E || f.some((e) => e.sound.soundId === E) || S(null));
    let C = r.useCallback((e) => {
            (clearTimeout(y.current), S(e));
        }, []),
        A = r.useCallback(() => {
            (clearTimeout(y.current), (y.current = setTimeout(() => S(null), 200)));
        }, []);
    return (0, i.jsx)("div", {
        className: eh.ei,
        style: { height: 126 },
        onMouseEnter: h,
        onMouseLeave: m,
        children: x((e, l) =>
            (0, i.jsx)(o.animated.div, {
                className: eh.Ob,
                style: e,
                children: (0, i.jsx)(em, {
                    guildId: t,
                    channelId: n,
                    ...l.echo,
                    disabled: l.echo.disabled ?? !1,
                    onDetailsMouseEnter: C,
                    onDetailsMouseLeave: A,
                    showDetails: E === l.echo.sound.soundId,
                }),
            }),
        ),
    });
}
