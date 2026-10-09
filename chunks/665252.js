n.d(t, { A: () => eE });
var l,
    i = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(202091),
    u = n(17928),
    c = n(778712),
    d = n(97808),
    h = n(922016),
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
    q = n(449054),
    $ = n(158045),
    Q = n(763827),
    Z = n(174459),
    X = n(652215),
    J = n(202541),
    Y = (((l = {}).HOVER = "hover"), (l.SEE_MORE_DETAILS = "see_more_details"), l);
let ee = new Set();
function et(e, t) {
    let { sound: n, startedAt: l } = t,
        i = `${e}:${n.soundId}:${l}`;
    return !ee.has(i) && (ee.add(i), !0);
}
function en(e) {
    let { action: t, guildId: n, channelId: l, echo: i, sourceGuildState: r, analyticsLocations: s } = e;
    if (!et(`${X.HAw.SOUNDBOARD_ECHO_SOUND_DETAILS_VIEWED}:${t}`, i)) return;
    let { sound: a } = i;
    Z.default.track(X.HAw.SOUNDBOARD_ECHO_SOUND_DETAILS_VIEWED, {
        action: t,
        voice_guild_id: n,
        channel_id: l,
        sound_id: a.soundId,
        source_guild_id: a.guildId,
        source_guild_state: r,
        location_stack: s,
    });
}
var el = n(660183),
    ei = n(858981);
function er(e) {
    let { icon: t, title: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: ei.wt,
        children: [
            t,
            (0, i.jsxs)("div", {
                className: ei.FS,
                children: [
                    (0, i.jsx)(p.E, { variant: "text-sm/medium", children: n }),
                    (0, i.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", children: l }),
                ],
            }),
        ],
    });
}
function es(e) {
    let { sourceGuildName: t, isExternal: n } = e,
        { analyticsLocations: l } = (0, y.Ay)(S.A.SOUNDBOARD_ECHO, S.A.PREMIUM_UPSELL);
    return (
        (0, F.Ay)(() => {
            !(function (e) {
                let { isExternal: t, analyticsLocations: n } = e;
                Z.default.track(X.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: J.e.SOUNDBOARD_ECHO_SOUND_DETAILS_UPSELL,
                    is_external: t,
                    location_stack: n,
                    sku_id: $.Ay.getSkuIdForPremiumType(J.PremiumTypes.TIER_2),
                    voice_guild_id: Q.A.getGuildId() ?? null,
                });
            })({ isExternal: n, analyticsLocations: l });
        }),
        (0, i.jsx)(y.f5, {
            value: l,
            children: (0, i.jsxs)("div", {
                className: ei.Kt,
                children: [
                    (0, i.jsx)(p.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: el.intl.format(el.t["/ZJIuo"], { guildName: t }),
                    }),
                    (0, i.jsx)(G.A, {
                        size: "sm",
                        fullWidth: !0,
                        subscriptionTier: J.pe.TIER_2,
                        buttonTextOverride: el.intl.string(el.t.pj0XBN),
                    }),
                ],
            }),
        })
    );
}
function ea(e) {
    let { sourceGuild: t } = e,
        n = r.useCallback(() => {
            (0, q.Z2)(t.id, {});
        }, [t.id]);
    return (0, i.jsxs)("div", {
        className: ei.Ae,
        children: [
            (0, i.jsx)(f.D, {
                onClick: n,
                className: ei.vk,
                children: (0, i.jsx)(p.E, { variant: "text-sm/medium", children: el.intl.string(el.t.BETi5Z) }),
            }),
            (0, i.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: el.intl.string(el.t.QzKwEQ) }),
        ],
    });
}
function eo(e) {
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
        o = (0, u.bG)([L.default], () => $.Ay.canUseSoundboardEverywhere(L.default.getCurrentUser())),
        { analyticsLocations: c } = (0, y.Ay)();
    switch (
        (r.useEffect(() => {
            "LOADING" !== a.state &&
                en({
                    action: Y.SEE_MORE_DETAILS,
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
                className: ei.wt,
                children: [(0, i.jsx)("div", { className: ei.EQ }), (0, i.jsx)("div", { className: ei.jC })],
            });
        case "DEFAULT_SOUND":
            return (0, i.jsx)(er, {
                icon: (0, i.jsx)("div", { className: ei.EQ, children: (0, i.jsx)(U.p, { size: "refresh_sm" }) }),
                title: el.intl.string(el.t.rWPrJC),
                description: el.intl.string(el.t.ixMwGl),
            });
        case "UNAVAILABLE":
            return (0, i.jsx)(er, {
                icon: (0, i.jsx)("div", {
                    className: ei.EQ,
                    children: (0, i.jsx)(V.EyeSlashIcon, { size: "refresh_sm" }),
                }),
                title: el.intl.string(el.t.T7AWtb),
                description: el.intl.string(el.t.Z4UD3R),
            });
        case "MEMBER":
            let { sourceGuild: d } = a;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(er, {
                        icon: (0, i.jsx)(K.Ay, { size: K.Ay.Sizes.MEDIUM, guild: d, active: !0 }),
                        title: d.name,
                        description: el.intl.string(el.t.l3QzyC),
                    }),
                    !o && (0, i.jsx)(es, { sourceGuildName: d.name, isExternal: d.id !== t }),
                ],
            });
        case "DISCOVERABLE": {
            let { sourceGuild: e } = a;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(er, {
                        icon: (0, i.jsx)(K.Ay, { size: K.Ay.Sizes.MEDIUM, guild: e, active: !0 }),
                        title: e.name,
                        description: el.intl.string(el.t.s5No7R),
                    }),
                    (0, i.jsx)(ea, { sourceGuild: e }),
                ],
            });
        }
    }
}
function eu(e) {
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
                if (s > 0) return el.intl.formatToPlainString(el.t.EXaquk, { a: r[0], n: s });
                else return el.intl.formatToPlainString(el.t["DU+Rd+"], { a: r[0] });
            if (2 === r.length)
                if (s > 0) return el.intl.formatToPlainString(el.t.EO8JM8, { a: r[0], b: r[1], n: s });
                else return el.intl.formatToPlainString(el.t.qr8Cg3, { a: r[0], b: r[1] });
            return 3 !== r.length
                ? el.intl.formatToPlainString(el.t.P5JeeM, { n: s })
                : s > 0
                  ? el.intl.formatToPlainString(el.t["+z+JUw"], { a: r[0], b: r[1], c: r[2], n: s })
                  : el.intl.formatToPlainString(el.t["3Zq6FM"], { a: r[0], b: r[1], c: r[2] });
        })({ playedByUserIds: s, guildId: t, channelId: n }),
        [g, E] = r.useState(!1),
        S = r.useCallback((e) => e?.focus(), []),
        { analyticsLocations: C } = (0, y.Ay)();
    return (
        (0, F.Ay)(() => {
            en({ action: Y.HOVER, guildId: t, channelId: n, echo: { sound: l, startedAt: a }, analyticsLocations: C });
        }),
        (0, i.jsxs)("div", {
            className: ei.kL,
            children: [
                (0, i.jsx)("div", {
                    className: ei.r,
                    children: (0, i.jsx)(er, {
                        icon:
                            null != c || null != o
                                ? (0, i.jsx)(x.A, { className: ei.Zg, emojiId: o, emojiName: c, animated: d })
                                : null,
                        title: h,
                        description: m,
                    }),
                }),
                g
                    ? (0, i.jsx)("div", {
                          ref: S,
                          tabIndex: -1,
                          className: ei.bT,
                          children: (0, i.jsx)(eo, { guildId: t, channelId: n, sound: l, startedAt: a }, l.soundId),
                      })
                    : (0, i.jsx)("div", {
                          className: ei.x_,
                          children: (0, i.jsxs)(f.D, {
                              onClick: () => E(!0),
                              className: ei.vk,
                              children: [
                                  (0, i.jsx)(p.E, {
                                      variant: "text-sm/medium",
                                      children: el.intl.string(el.t["UQT3/h"]),
                                  }),
                                  (0, i.jsx)(W._, { size: "xs", color: "currentColor" }),
                              ],
                          }),
                      }),
            ],
        })
    );
}
var ec = n(559949),
    ed = n(73392),
    eh = n(889053);
let em = [100, 200, 366, 513, 789, 1e3, 5e3, 1e4, 1e5, 1 / 0];
function ef(e) {
    let { count: t } = e,
        [n, l] = r.useState(!1),
        [s, u] = r.useState(null),
        [c, d] = r.useState({}),
        h = r.useRef(null),
        m = r.useRef(null),
        f = (0, g.p)(n, {
            from: { scale: 0, opacity: 0 },
            enter: { scale: 1, opacity: 1 },
            leave: { scale: 1, opacity: 0 },
            config: o.config.stiff,
        });
    (r.useEffect(() => {
        let e = em.findIndex((e) => t < e) - 1;
        if (null != m.current && null != e && e > m.current) {
            let t, n;
            (null != h.current && clearTimeout(h.current),
                u(em[e]),
                l(!0),
                d(
                    ((t = Math.floor(200 * Math.random()) + -100),
                    (n = 5 * e + 40),
                    {
                        transform: `rotate(${Math.floor(25 * Math.random()) - 12.5}deg)`,
                        top: -(Math.floor(80 * Math.random()) + 20),
                        left: `calc(50% - 300px + ${t}px)`,
                        fontSize: `${n}px`,
                        lineHeight: `${n}px`,
                    }),
                ),
                (m.current = e),
                (h.current = setTimeout(() => {
                    l(!1);
                }, 1500)));
        }
        m.current = e;
    }, [t]),
        r.useEffect(
            () => () => {
                null != h.current && clearTimeout(h.current);
            },
            [],
        ));
    let { className: p } = (0, ed.p)(ec.x.PIXELIFY);
    return f((e, t) =>
        t
            ? (0, i.jsx)(o.animated.div, {
                  className: eh.G,
                  style: { "--custom-echo-text-width": "600px", ...c, ...e },
                  children: (0, i.jsx)("div", {
                      className: a()(eh._, p),
                      children: (function (e) {
                          switch (e) {
                              case 100:
                                  return el.intl.string(el.t["ZctfZ/"]);
                              case 200:
                                  return el.intl.string(el.t.LKiPeX);
                              case 366:
                                  return el.intl.string(el.t.KiYrRC);
                              case 513:
                                  return el.intl.string(el.t.Ec5lqb);
                              case 789:
                                  return el.intl.string(el.t["24Kzud"]);
                              case 1e3:
                                  return el.intl.string(el.t["5/WCf/"]);
                              case 5e3:
                                  return el.intl.string(el.t["5ifydJ"]);
                              case 1e4:
                                  return el.intl.string(el.t.N8tPFd);
                              case 1e5:
                                  return el.intl.string(el.t["6hvboB"]);
                              default:
                                  return "";
                          }
                      })(s),
                  }),
              })
            : null,
    );
}
var ep = n(998812);
function eg(e) {
    let { guildId: t, channelId: n, authorUser: l, mostRecentPlayedUser: s } = e,
        o = r.useMemo(() => l?.getAvatarURL(t, (0, c.FT)(c._3.SIZE_32)), [l, t]),
        u = r.useMemo(() => w.Ay.getNickname(t, n, l) ?? M.Ay.getName(l), [l, t, n]),
        h = r.useMemo(() => s?.getAvatarURL(t, (0, c.FT)(c._3.SIZE_32)), [s, t]),
        m = r.useMemo(() => (null != s ? (w.Ay.getNickname(t, n, s) ?? M.Ay.getName(s)) : null), [s, t, n]);
    return (0, i.jsxs)("div", {
        className: ep.yA,
        children: [
            (0, i.jsx)("div", {
                className: ep.R3,
                children: (0, i.jsx)(d.eu, { className: ep.Du, src: o, size: c._3.SIZE_32, "aria-label": u }),
            }),
            null != s &&
                (0, i.jsx)("div", {
                    className: a()(ep.R3, ep.aR),
                    children: (0, i.jsx)("div", {
                        className: ep.HY,
                        children: (0, i.jsx)(d.eu, { className: ep.mf, src: h, size: c._3.SIZE_32, "aria-label": m }),
                    }),
                }),
        ],
    });
}
function ex(e) {
    let {
            guildId: t,
            channelId: n,
            sound: l,
            authorId: s,
            mostRecentPlayedByUserId: o,
            count: c,
            disabled: d,
            playedByUserIds: g,
            startedAt: b,
            showDetails: I,
            onDetailsMouseEnter: N,
            onDetailsMouseLeave: v,
        } = e,
        { authorUser: T, mostRecentPlayedUser: j } = (0, u.cf)([L.default, O.A], () => {
            let e = O.A.isBlockedOrIgnored(o ?? void 0);
            return {
                authorUser: L.default.getUser(s),
                mostRecentPlayedUser: e || s === o ? null : L.default.getUser(o),
            };
        }),
        _ = r.useRef(null),
        { analyticsLocations: k } = (0, y.Ay)(S.A.SOUNDBOARD_ECHO);
    r.useEffect(() => {
        null == t ||
            null == T ||
            d ||
            (function (e) {
                let { guildId: t, channelId: n, echo: l, analyticsLocations: i } = e;
                if (!et(X.HAw.SOUNDBOARD_ECHO_VIEWED, l)) return;
                let { sound: r, authorId: s } = l;
                Z.default.track(X.HAw.SOUNDBOARD_ECHO_VIEWED, {
                    voice_guild_id: t,
                    channel_id: n,
                    sound_id: r.soundId,
                    source_guild_id: r.guildId,
                    author_id: s,
                    is_author: s === L.default.getCurrentUser()?.id,
                    location_stack: i,
                });
            })({ guildId: t, channelId: n, echo: { sound: l, authorId: s, startedAt: b }, analyticsLocations: k });
    }, [k, s, T, n, d, t, l, b]);
    let R = r.useCallback(() => {
            N(l.soundId);
        }, [N, l.soundId]),
        w = r.useCallback(() => {
            (0, A.CZ)(l, n, k);
        }, [k, n, l]),
        M = (0, u.bG)([C.A], () => C.A.isPlayingSound(l.soundId), [l]),
        P = r.useRef(null),
        D = r.useRef(null),
        [U, V] = r.useState(0);
    if (
        (r.useLayoutEffect(() => {
            let e = P.current;
            if (null == e) return;
            let t = e.offsetWidth;
            (null == D.current && (D.current = t), V(D.current - t));
        }, [c, T]),
        null == t || null == T)
    )
        return null;
    let { emojiId: W, emojiName: F, emojiAnimated: B, name: K } = l;
    return (0, i.jsxs)("div", {
        className: a()(ep.Iv, { [ep.E$]: d }),
        style: { height: 36 },
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: _,
                shouldShow: I,
                renderPopout: (e) => {
                    let { setPopoutRef: r } = e;
                    return (0, i.jsx)("div", {
                        ref: r,
                        onMouseEnter: R,
                        onMouseLeave: v,
                        children: (0, i.jsx)(eu, {
                            guildId: t,
                            channelId: n,
                            sound: l,
                            playedByUserIds: g,
                            startedAt: b,
                        }),
                    });
                },
                position: "top",
                align: "center",
                children: () =>
                    (0, i.jsx)("div", {
                        ref: _,
                        onMouseEnter: R,
                        onMouseLeave: v,
                        children: (0, i.jsx)(eg, { authorUser: T, mostRecentPlayedUser: j, guildId: t, channelId: n }),
                    }),
            }),
            (0, i.jsx)(m.m, {
                text: d ? el.intl.string(el.t.VqNHoS) : null,
                children: (0, i.jsxs)(f.D, {
                    innerRef: P,
                    style: { marginInlineEnd: U },
                    className: a()(ep.nG, { [ep.Tz]: M, [ep.Jx]: d }),
                    onClick: d ? () => null : w,
                    "aria-label": el.intl.formatToPlainString(el.t.VOmeSq, { name: K }),
                    children: [
                        (null != F || null != W) &&
                            (0, i.jsx)(x.A, {
                                size: "reaction",
                                className: ep.FA,
                                emojiId: W,
                                emojiName: F,
                                animated: B,
                            }),
                        (0, i.jsx)(p.E, { variant: "text-md/medium", children: K }),
                        (0, i.jsx)("div", { className: ep.SU }),
                        (0, i.jsxs)(p.E, {
                            variant: "text-md/medium",
                            className: ep.Zi,
                            tabularNumbers: !0,
                            children: ["x", (0, i.jsx)(E.A, { className: ep.Zi, value: c, digitWidth: 8 })],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function eE(e) {
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
        className: ep.ei,
        style: { height: 42 * f.length },
        onMouseEnter: h,
        onMouseLeave: m,
        children: x((e, l) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(o.animated.div, {
                        className: ep.Ob,
                        style: e,
                        children: (0, i.jsx)(ex, {
                            guildId: t,
                            channelId: n,
                            ...l.echo,
                            disabled: l.echo.disabled ?? !1,
                            onDetailsMouseEnter: C,
                            onDetailsMouseLeave: A,
                            showDetails: E === l.echo.sound.soundId,
                        }),
                    }),
                    (0, i.jsx)(ef, { count: l.echo.count }),
                ],
            }),
        ),
    });
}
