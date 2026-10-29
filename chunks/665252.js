(n.d(t, { A: () => eS }), n(321073));
var l,
    i = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(399513),
    u = n(17928),
    c = n(778712),
    d = n(97808),
    h = n(265872),
    m = n(866665),
    f = n(939249),
    p = n(834730),
    g = n(866323),
    x = n(788026),
    E = n(114166),
    S = n(793574),
    y = n(688810),
    A = n(209932),
    C = n(813564),
    b = n(73153),
    I = n(734057),
    v = n(927813),
    N = n(714736);
n(980504);
let T = 7.5 * v.A.Millis.SECOND,
    j = new Map(),
    k = new Map(),
    _ = new Map();
class R extends u.Ay.Store {
    initialize() {
        this.waitFor(I.A);
    }
    static displayName = "SoundboardEchoStore";
    getActiveSoundboardEchoes() {
        return j;
    }
    getExpiredSoundboardEchoes() {
        return k;
    }
    getSoundboardEcho(e) {
        return j.get(e);
    }
}
let O = new R(b.h, {
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
        let { enabled: d } = (0, N.j)(c, "handleSoundPlayStart");
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
                u = Date.now(),
                c = new Map(j);
            if (null == o) {
                if (
                    (c.set(l, {
                        sound: i,
                        count: 1,
                        authorId: r,
                        playedByUserIds: new Set([s]),
                        mostRecentPlayedByUserId: a ? s : null,
                        lastPlayedAt: u,
                        startedAt: u,
                    }),
                    k.has(l))
                ) {
                    let e = new Map(k);
                    (e.delete(l), (k = e));
                }
            } else
                c.set(l, {
                    ...o,
                    count: o.count + 1,
                    playedByUserIds: o.playedByUserIds.add(s),
                    mostRecentPlayedByUserId: s === r ? o.mostRecentPlayedByUserId : s,
                    lastPlayedAt: u,
                });
            ((j = c),
                null != (t = _.get(l)) && clearTimeout(t),
                (n = setTimeout(() => {
                    b.h.dispatch({ type: "SOUNDBOARD_ECHO_EXPIRED", soundId: l });
                }, T)),
                _.set(l, n));
        })({ soundId: t, sound: h, authorId: i ?? l, playedByUserId: l, isEcho: u });
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { currentVoiceChannelId: t, channelId: n } = e;
        if (t === n) return !1;
        (_.forEach(clearTimeout), _.clear(), (k = new Map()), (j = new Map()));
    },
    SOUNDBOARD_ECHO_EXPIRED: function (e) {
        let { soundId: t } = e,
            n = j.get(t);
        if (null == n) return !1;
        (_.delete(t), (k = new Map(k).set(t, n)));
        let l = new Map(j);
        (l.delete(t), (j = l));
    },
});
var w = n(994500),
    M = n(287809),
    L = n(562153),
    P = n(427262),
    D = n(435558),
    U = n.n(D),
    V = n(111159),
    W = n(952270),
    F = n(320448),
    B = n(964486),
    G = n(624793),
    K = n(548118),
    H = n(465794),
    z = n(796774),
    q = n(71393),
    $ = n(449054),
    Q = n(24482),
    Z = n(763827),
    X = n(174459),
    J = n(652215),
    Y = n(202541),
    ee = (((l = {}).HOVER = "hover"), (l.SEE_MORE_DETAILS = "see_more_details"), l);
let et = new Set();
function en(e, t) {
    let { sound: n, startedAt: l } = t,
        i = `${e}:${n.soundId}:${l}`;
    return !et.has(i) && (et.add(i), !0);
}
function el(e) {
    let { action: t, guildId: n, channelId: l, echo: i, sourceGuildState: r, analyticsLocations: s } = e;
    if (!en(`${J.HAw.SOUNDBOARD_ECHO_SOUND_DETAILS_VIEWED}:${t}`, i)) return;
    let { sound: a } = i;
    X.default.track(J.HAw.SOUNDBOARD_ECHO_SOUND_DETAILS_VIEWED, {
        action: t,
        voice_guild_id: n,
        channel_id: l,
        sound_id: a.soundId,
        source_guild_id: a.guildId,
        source_guild_state: r,
        location_stack: s,
    });
}
var ei = n(105292),
    er = n(858981);
function es(e) {
    let { icon: t, title: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: er.wt,
        children: [
            t,
            (0, i.jsxs)("div", {
                className: er.FS,
                children: [
                    (0, i.jsx)(p.E, { variant: "text-sm/medium", children: n }),
                    (0, i.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", children: l }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let { sourceGuildName: t, isExternal: n } = e,
        { analyticsLocations: l } = (0, y.Ay)(S.A.SOUNDBOARD_ECHO, S.A.PREMIUM_UPSELL);
    return (
        (0, B.Ay)(() => {
            !(function (e) {
                let { isExternal: t, analyticsLocations: n } = e;
                X.default.track(J.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: Y.e.SOUNDBOARD_ECHO_SOUND_DETAILS_UPSELL,
                    is_external: t,
                    location_stack: n,
                    sku_id: Q.Ay.getSkuIdForPremiumType(Y.PremiumTypes.TIER_2),
                    voice_guild_id: Z.A.getGuildId() ?? null,
                });
            })({ isExternal: n, analyticsLocations: l });
        }),
        (0, i.jsx)(y.f5, {
            value: l,
            children: (0, i.jsxs)("div", {
                className: er.Kt,
                children: [
                    (0, i.jsx)(p.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: ei.intl.format(ei.t["/ZJIuo"], { guildName: t }),
                    }),
                    (0, i.jsx)(H.A, {
                        size: "sm",
                        fullWidth: !0,
                        subscriptionTier: Y.pe.TIER_2,
                        buttonTextOverride: ei.intl.string(ei.t.pj0XBN),
                    }),
                ],
            }),
        })
    );
}
function eo(e) {
    let { sourceGuild: t } = e,
        n = r.useCallback(() => {
            (0, $.Z2)(t.id, {});
        }, [t.id]);
    return (0, i.jsxs)("div", {
        className: er.Ae,
        children: [
            (0, i.jsx)(f.D, {
                onClick: n,
                className: er.vk,
                children: (0, i.jsx)(p.E, { variant: "text-sm/medium", children: ei.intl.string(ei.t.BETi5Z) }),
            }),
            (0, i.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: ei.intl.string(ei.t.QzKwEQ) }),
        ],
    });
}
function eu(e) {
    let { guildId: t, channelId: n, sound: l, startedAt: s } = e,
        a = (function (e) {
            let { guildId: t, soundId: n } = e,
                l = "0" === t,
                i = (0, u.bG)([q.A], () => q.A.getGuild(t)),
                [s, a] = r.useState(),
                o = !l && null == i;
            return (
                r.useEffect(() => {
                    o &&
                        (0, z.nh)(n, t)
                            .catch(() => null)
                            .then(a);
                }, [o, n, t]),
                r.useMemo(
                    () =>
                        l
                            ? { state: "DEFAULT_SOUND" }
                            : null != i
                              ? { state: "MEMBER", sourceGuild: G.GO.createFromGuildRecord(i) }
                              : void 0 === s
                                ? { state: "LOADING" }
                                : null == s
                                  ? { state: "UNAVAILABLE" }
                                  : { state: "DISCOVERABLE", sourceGuild: G.GO.createFromDiscoverableGuild(s) },
                    [l, i, s],
                )
            );
        })(l),
        o = (0, u.bG)([M.default], () => Q.Ay.canUseSoundboardEverywhere(M.default.getCurrentUser())),
        { analyticsLocations: c } = (0, y.Ay)();
    switch (
        (r.useEffect(() => {
            "LOADING" !== a.state &&
                el({
                    action: ee.SEE_MORE_DETAILS,
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
                className: er.wt,
                children: [(0, i.jsx)("div", { className: er.EQ }), (0, i.jsx)("div", { className: er.jC })],
            });
        case "DEFAULT_SOUND":
            return (0, i.jsx)(es, {
                icon: (0, i.jsx)("div", { className: er.EQ, children: (0, i.jsx)(V.p, { size: "refresh_sm" }) }),
                title: ei.intl.string(ei.t.rWPrJC),
                description: ei.intl.string(ei.t.ixMwGl),
            });
        case "UNAVAILABLE":
            return (0, i.jsx)(es, {
                icon: (0, i.jsx)("div", {
                    className: er.EQ,
                    children: (0, i.jsx)(W.EyeSlashIcon, { size: "refresh_sm" }),
                }),
                title: ei.intl.string(ei.t.T7AWtb),
                description: ei.intl.string(ei.t.Z4UD3R),
            });
        case "MEMBER":
            let { sourceGuild: d } = a;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(es, {
                        icon: (0, i.jsx)(K.Ay, { size: K.Ay.Sizes.MEDIUM, guild: d, active: !0 }),
                        title: d.name,
                        description: ei.intl.string(ei.t.l3QzyC),
                    }),
                    !o && (0, i.jsx)(ea, { sourceGuildName: d.name, isExternal: d.id !== t }),
                ],
            });
        case "DISCOVERABLE": {
            let { sourceGuild: e } = a;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(es, {
                        icon: (0, i.jsx)(K.Ay, { size: K.Ay.Sizes.MEDIUM, guild: e, active: !0 }),
                        title: e.name,
                        description: ei.intl.string(ei.t.s5No7R),
                    }),
                    (0, i.jsx)(eo, { sourceGuild: e }),
                ],
            });
        }
    }
}
function ec(e) {
    let { guildId: t, channelId: n, sound: l, playedByUserIds: s, startedAt: a } = e,
        { emojiId: o, emojiName: c, emojiAnimated: d, name: h } = l,
        m = (function (e) {
            let { playedByUserIds: t, guildId: n, channelId: l } = e,
                i = t.size,
                r = (0, u.yK)([M.default, w.A], () =>
                    U()(Array.from(t))
                        .reject((e) => w.A.isBlockedOrIgnored(e))
                        .take(3)
                        .map((e) => {
                            let t = M.default.getUser(e);
                            return L.Ay.getName(n, l, t);
                        })
                        .value(),
                ),
                s = i - r.length;
            if (1 === r.length)
                if (s > 0) return ei.intl.formatToPlainString(ei.t.EXaquk, { a: r[0], n: s });
                else return ei.intl.formatToPlainString(ei.t["DU+Rd+"], { a: r[0] });
            if (2 === r.length)
                if (s > 0) return ei.intl.formatToPlainString(ei.t.EO8JM8, { a: r[0], b: r[1], n: s });
                else return ei.intl.formatToPlainString(ei.t.qr8Cg3, { a: r[0], b: r[1] });
            return 3 !== r.length
                ? ei.intl.formatToPlainString(ei.t.P5JeeM, { n: s })
                : s > 0
                  ? ei.intl.formatToPlainString(ei.t["+z+JUw"], { a: r[0], b: r[1], c: r[2], n: s })
                  : ei.intl.formatToPlainString(ei.t["3Zq6FM"], { a: r[0], b: r[1], c: r[2] });
        })({ playedByUserIds: s, guildId: t, channelId: n }),
        [g, E] = r.useState(!1),
        S = r.useCallback((e) => e?.focus(), []),
        { analyticsLocations: A } = (0, y.Ay)();
    return (
        (0, B.Ay)(() => {
            el({ action: ee.HOVER, guildId: t, channelId: n, echo: { sound: l, startedAt: a }, analyticsLocations: A });
        }),
        (0, i.jsxs)("div", {
            className: er.kL,
            children: [
                (0, i.jsx)("div", {
                    className: er.r,
                    children: (0, i.jsx)(es, {
                        icon:
                            null != c || null != o
                                ? (0, i.jsx)(x.A, { className: er.Zg, emojiId: o, emojiName: c, animated: d })
                                : null,
                        title: h,
                        description: m,
                    }),
                }),
                g
                    ? (0, i.jsx)("div", {
                          ref: S,
                          tabIndex: -1,
                          className: er.bT,
                          children: (0, i.jsx)(eu, { guildId: t, channelId: n, sound: l, startedAt: a }, l.soundId),
                      })
                    : (0, i.jsx)("div", {
                          className: er.x_,
                          children: (0, i.jsxs)(f.D, {
                              onClick: () => E(!0),
                              className: er.vk,
                              children: [
                                  (0, i.jsx)(p.E, {
                                      variant: "text-sm/medium",
                                      children: ei.intl.string(ei.t["UQT3/h"]),
                                  }),
                                  (0, i.jsx)(F._, { size: "xs", color: "currentColor" }),
                              ],
                          }),
                      }),
            ],
        })
    );
}
var ed = n(559949),
    eh = n(73392),
    em = n(889053);
let ef = [100, 200, 366, 513, 789, 1e3, 5e3, 1e4, 1e5, 1 / 0];
function ep(e) {
    let { guildId: t, channelId: n, echo: l } = e,
        { count: s, sound: u, startedAt: c } = l,
        [d, h] = r.useState(!1),
        [m, f] = r.useState(null),
        [p, x] = r.useState({}),
        E = r.useRef(null),
        A = r.useRef(null),
        { analyticsLocations: C } = (0, y.Ay)(S.A.SOUNDBOARD_ECHO),
        b = (0, g.p)(d, {
            from: { scale: 0, opacity: 0 },
            enter: { scale: 1, opacity: 1 },
            leave: { scale: 1, opacity: 0 },
            config: o.config.stiff,
        });
    (r.useEffect(() => {
        let e = ef.findIndex((e) => s < e) - 1;
        if (null != A.current && null != e && e > A.current) {
            let l, i;
            (null != E.current && clearTimeout(E.current),
                f(ef[e]),
                h(!0),
                x(
                    ((l = Math.floor(200 * Math.random()) + -100),
                    (i = 5 * e + 40),
                    {
                        transform: `rotate(${Math.floor(25 * Math.random()) - 12.5}deg)`,
                        top: -(Math.floor(80 * Math.random()) + 20),
                        left: `calc(50% - 300px + ${l}px)`,
                        fontSize: `${i}px`,
                        lineHeight: `${i}px`,
                    }),
                ),
                (A.current = e),
                (function (e) {
                    let { guildId: t, channelId: n, echo: l, combo: i, analyticsLocations: r } = e;
                    if (!en(`${J.HAw.SOUNDBOARD_ECHO_COMBO_VIEWED}:${i}`, l)) return;
                    let { sound: s } = l;
                    X.default.track(J.HAw.SOUNDBOARD_ECHO_COMBO_VIEWED, {
                        voice_guild_id: t,
                        channel_id: n,
                        sound_id: s.soundId,
                        source_guild_id: s.guildId,
                        combo: i,
                        location_stack: r,
                    });
                })({ guildId: t, channelId: n, echo: { sound: u, startedAt: c }, combo: ef[e], analyticsLocations: C }),
                (E.current = setTimeout(() => {
                    h(!1);
                }, 1500)));
        }
        A.current = e;
    }, [C, n, s, t, u, c]),
        r.useEffect(
            () => () => {
                null != E.current && clearTimeout(E.current);
            },
            [],
        ));
    let { className: I } = (0, eh.p)(ed.x.PIXELIFY);
    return b((e, t) =>
        t
            ? (0, i.jsx)(o.animated.div, {
                  className: em.G,
                  style: { "--custom-echo-text-width": "600px", ...p, ...e },
                  children: (0, i.jsx)("div", {
                      className: a()(em._, I),
                      children: (function (e) {
                          switch (e) {
                              case 100:
                                  return ei.intl.string(ei.t["ZctfZ/"]);
                              case 200:
                                  return ei.intl.string(ei.t.LKiPeX);
                              case 366:
                                  return ei.intl.string(ei.t.KiYrRC);
                              case 513:
                                  return ei.intl.string(ei.t.Ec5lqb);
                              case 789:
                                  return ei.intl.string(ei.t["24Kzud"]);
                              case 1e3:
                                  return ei.intl.string(ei.t["5/WCf/"]);
                              case 5e3:
                                  return ei.intl.string(ei.t["5ifydJ"]);
                              case 1e4:
                                  return ei.intl.string(ei.t.N8tPFd);
                              case 1e5:
                                  return ei.intl.string(ei.t["6hvboB"]);
                              default:
                                  return "";
                          }
                      })(m),
                  }),
              })
            : null,
    );
}
var eg = n(998812);
function ex(e) {
    let { guildId: t, channelId: n, authorUser: l, mostRecentPlayedUser: s } = e,
        o = r.useMemo(() => l?.getAvatarURL(t, (0, c.FT)(c._3.SIZE_32)), [l, t]),
        u = r.useMemo(() => L.Ay.getNickname(t, n, l) ?? P.Ay.getName(l), [l, t, n]),
        h = r.useMemo(() => s?.getAvatarURL(t, (0, c.FT)(c._3.SIZE_32)), [s, t]),
        m = r.useMemo(() => (null != s ? (L.Ay.getNickname(t, n, s) ?? P.Ay.getName(s)) : null), [s, t, n]);
    return (0, i.jsxs)("div", {
        className: eg.yA,
        children: [
            (0, i.jsx)("div", {
                className: eg.R3,
                children: (0, i.jsx)(d.eu, { className: eg.Du, src: o, size: c._3.SIZE_32, "aria-label": u }),
            }),
            null != s &&
                (0, i.jsx)("div", {
                    className: a()(eg.R3, eg.aR),
                    children: (0, i.jsx)("div", {
                        className: eg.HY,
                        children: (0, i.jsx)(d.eu, { className: eg.mf, src: h, size: c._3.SIZE_32, "aria-label": m }),
                    }),
                }),
        ],
    });
}
function eE(e) {
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
            onDetailsMouseEnter: v,
            onDetailsMouseLeave: N,
        } = e,
        { authorUser: T, mostRecentPlayedUser: j } = (0, u.cf)([M.default, w.A], () => {
            let e = w.A.isBlockedOrIgnored(o ?? void 0);
            return {
                authorUser: M.default.getUser(s),
                mostRecentPlayedUser: e || s === o ? null : M.default.getUser(o),
            };
        }),
        k = r.useRef(null),
        { analyticsLocations: _ } = (0, y.Ay)(S.A.SOUNDBOARD_ECHO);
    r.useEffect(() => {
        null == t ||
            null == T ||
            d ||
            (function (e) {
                let { guildId: t, channelId: n, echo: l, analyticsLocations: i } = e;
                if (!en(J.HAw.SOUNDBOARD_ECHO_VIEWED, l)) return;
                let { sound: r, authorId: s } = l;
                X.default.track(J.HAw.SOUNDBOARD_ECHO_VIEWED, {
                    voice_guild_id: t,
                    channel_id: n,
                    sound_id: r.soundId,
                    source_guild_id: r.guildId,
                    author_id: s,
                    is_author: s === M.default.getCurrentUser()?.id,
                    location_stack: i,
                });
            })({ guildId: t, channelId: n, echo: { sound: l, authorId: s, startedAt: b }, analyticsLocations: _ });
    }, [_, s, T, n, d, t, l, b]);
    let R = r.useCallback(() => {
            v(l.soundId);
        }, [v, l.soundId]),
        O = r.useCallback(() => {
            (0, C.CZ)(l, n, _);
        }, [_, n, l]),
        L = (0, u.bG)([A.A], () => A.A.isPlayingSound(l.soundId), [l]),
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
    let { emojiId: W, emojiName: F, emojiAnimated: B, name: G } = l;
    return (0, i.jsxs)("div", {
        className: a()(eg.Iv, { [eg.E$]: d }),
        style: { height: 36 },
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: k,
                shouldShow: I,
                renderPopout: (e) => {
                    let { setPopoutRef: r } = e;
                    return (0, i.jsx)("div", {
                        ref: r,
                        onMouseEnter: R,
                        onMouseLeave: N,
                        children: (0, i.jsx)(ec, {
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
                        ref: k,
                        onMouseEnter: R,
                        onMouseLeave: N,
                        children: (0, i.jsx)(ex, { authorUser: T, mostRecentPlayedUser: j, guildId: t, channelId: n }),
                    }),
            }),
            (0, i.jsx)(m.m, {
                text: d ? ei.intl.string(ei.t.VqNHoS) : null,
                children: (0, i.jsxs)(f.D, {
                    innerRef: P,
                    style: { marginInlineEnd: U },
                    className: a()(eg.nG, { [eg.Tz]: L, [eg.Jx]: d }),
                    onClick: d ? () => null : O,
                    "aria-label": ei.intl.formatToPlainString(ei.t.VOmeSq, { name: G }),
                    children: [
                        (null != F || null != W) &&
                            (0, i.jsx)(x.A, {
                                size: "reaction",
                                className: eg.FA,
                                emojiId: W,
                                emojiName: F,
                                animated: B,
                            }),
                        (0, i.jsx)(p.E, { variant: "text-md/medium", children: G }),
                        (0, i.jsx)("div", { className: eg.SU }),
                        (0, i.jsxs)(p.E, {
                            variant: "text-md/medium",
                            className: eg.Zi,
                            tabularNumbers: !0,
                            children: ["x", (0, i.jsx)(E.A, { className: eg.Zi, value: c, digitWidth: 8 })],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function eS(e) {
    let { guildId: t, channelId: n } = e,
        { activeEchoes: l, expiredEchoes: s } = (0, u.cf)([O], () => ({
            activeEchoes: O.getActiveSoundboardEchoes(),
            expiredEchoes: O.getExpiredSoundboardEchoes(),
        })),
        [a, c] = r.useState(new Map()),
        [d, h] = r.useState(!1),
        m = r.useCallback(() => {
            (c(l), h(!0));
        }, [l]),
        f = r.useCallback(() => {
            h(!1);
        }, []),
        p = r.useMemo(() => {
            if (!d) return Array.from(l.values()).slice(-3).reverse();
            let e = [];
            for (let t of a.keys()) {
                let n = l.get(t),
                    i = s.get(t);
                null != n ? e.push(n) : null != i && e.push({ ...i, disabled: !0 });
            }
            return e.slice(-3).reverse();
        }, [a, l, s, d]),
        x = r.useMemo(() => p.map((e, t) => ({ echo: e, y: 42 * t })), [p]),
        E = (0, g.p)(x, {
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
        [S, y] = r.useState(null),
        A = r.useRef(null);
    (r.useEffect(() => () => clearTimeout(A.current), []),
        null == S || p.some((e) => e.sound.soundId === S) || y(null));
    let C = r.useCallback((e) => {
            (clearTimeout(A.current), y(e));
        }, []),
        b = r.useCallback(() => {
            (clearTimeout(A.current), (A.current = setTimeout(() => y(null), 200)));
        }, []);
    return (0, i.jsx)("div", {
        className: eg.ei,
        style: { height: 42 * p.length },
        onMouseEnter: m,
        onMouseLeave: f,
        children: E((e, l) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(o.animated.div, {
                        className: eg.Ob,
                        style: e,
                        children: (0, i.jsx)(eE, {
                            guildId: t,
                            channelId: n,
                            ...l.echo,
                            disabled: l.echo.disabled ?? !1,
                            onDetailsMouseEnter: C,
                            onDetailsMouseLeave: b,
                            showDetails: S === l.echo.sound.soundId,
                        }),
                    }),
                    (0, i.jsx)(ep, { guildId: t, channelId: n, echo: l.echo }),
                ],
            }),
        ),
    });
}
