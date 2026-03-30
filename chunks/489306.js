"use strict";
n.d(t, { Ay: () => R, Pq: () => O });
var i = n(64700),
    s = n(512750),
    l = n(417597),
    a = n(554146),
    r = n(367727),
    o = n(45780),
    c = n(71393),
    d = n(403362),
    u = n(473145),
    h = n(488803),
    A = n(522055),
    m = n(764322),
    _ = n(969983),
    g = n(942975),
    p = n(904560),
    f = n(645619),
    x = n(379229),
    E = n(904629),
    C = n(229548),
    I = n(139032),
    N = n(52260),
    S = n(294384),
    b = n(639060),
    T = n(864310),
    v = n(568065),
    y = n(652215),
    j = n(49999);
function R(e) {
    let t = (0, l.bG)([p.A], () => p.A.getNotificationStateForGuild(e), [e]),
        n = (0, l.bG)([f.A], () => f.A.getStateForGuild(e)),
        { indicator: g, showUnread: j } = (function (e, t, n) {
            let s = (0, T.A)(e).available,
                { shouldShow: o } = (0, b.A)(e, "useGuildPowerupsNotificationIndicator"),
                c = (0, r.cN)(a.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                d = o && !c,
                u = (0, l.bG)([A.A], () => A.A.getStateForGuild(e));
            return i.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    i = (0, E.k)([...Object.values(e), ...Object.values(u?.entitlements ?? {})]),
                    l = n?.lastSeenWarningNotification ?? Date.now(),
                    a = new Date(i[i.length - 1]?.ends_at).getTime(),
                    r = n?.lastBoostCount ?? 0,
                    o = i.length > 0 && l < a,
                    c = s - r;
                return o || d
                    ? { indicator: { type: x.cD.WARNING }, showUnread: !0 }
                    : s !== r && c > 0
                      ? { indicator: { type: x.cD.UNREAD, count: c }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [s, n?.lastBoostCount, n?.lastSeenWarningNotification, t, d, u?.entitlements]);
        })(e, n ?? void 0, t),
        R = (function (e, t) {
            let n,
                r,
                [g, p] = (0, C.ty)(null != t),
                f = g === a.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: E } = (0, T.A)(e),
                b = (0, l.bG)([c.A], () => c.A.getGuild(e)?.features.has(y.GuildFeatures.GAME_SERVERS) ?? !1),
                j = (0, l.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                R =
                    ((n = (0, h.C$)(e, "GuildPowerupsChannelRow")),
                    (r = (0, l.bG)([c.A], () => c.A.getGuild(e)?.features.has(y.GuildFeatures.GAME_SERVERS))),
                    i.useMemo(() => {
                        let e = t?.allPowerups?.[s.zY] != null,
                            i = t?.unlockedPowerups?.[s.zY] != null;
                        return e && !i
                            ? v.q.FILE_UPLOAD_250_MB
                            : Array.from(v.r9[v.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                    (e) => t?.unlockedPowerups?.[e] != null,
                                )
                              ? n && !r
                                  ? v.q.GAME_SERVER_HOSTING
                                  : Array.from(v.r9[v.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                          (e) => t?.unlockedPowerups?.[e] != null,
                                      )
                                    ? 0
                                    : v.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE
                              : v.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    }, [t, n, r])),
                [O, L] = (0, C.FC)(null != t && !f, R),
                M = O === a.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                D = (0, I.A)(e),
                [G, U] = (0, C.ww)(null != t && !f && !M && null != D, e),
                P = G === a.M.BOOST_TO_UNLOCK_COACHMARK,
                w = (0, N.A)(e),
                [k, V] = (0, C.W2)(null != t && !f && !M && !P && null != w, e),
                B = k === a.M.EXPIRING_POWERUP_COACHMARK,
                H = (0, h.TS)(e, "useGuildPowerupsChannelListPopout"),
                F = (0, _.J)("useGuildPowerupsChannelListPopout"),
                [K, W] = (0, C.rd)(null != t && H && F),
                Y = K === a.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK,
                z = (0, m.S)(e, "useGuildPowerupsChannelListPopout"),
                [q, X] = (0, C.vn)(null != t && !b && H && z),
                Q = q === a.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                J = i.useMemo(() => {
                    if (null == t || f || M || Y || Q || P || B) return;
                    let n = (function (e, t) {
                        let n = u.fi.find((e) => {
                            let n = v.a8[e],
                                i = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != i && i.user_id !== v.mB;
                        });
                        if (null == n) return;
                        let i = v.On[n];
                        if (null == i || (0, o.zs)(i, e)) return;
                        let s = v.a8[n],
                            l = null != s ? t.allPowerups[s] : void 0;
                        if (null != l)
                            return {
                                type: x.o.LEVEL_REACHED,
                                powerup: l,
                                markAsDismissed: (t) => {
                                    (0, o._$)(i, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let i = (function (e, t, n) {
                        let i = c.A.getGuild(e)?.premiumTier ?? y.TVA.NONE,
                            s = Array.from(v.oN.values())
                                .flatMap((s) =>
                                    s.length <= 0 ||
                                    s.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = v.wr[e];
                                        return null != n && !!(i >= n);
                                    })
                                        ? []
                                        : s.map((i) => {
                                              let s = t.allPowerups[i];
                                              return null == s ||
                                                  n < s.cost ||
                                                  !s.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, S.t)(e, s, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : s;
                                          }),
                                )
                                .filter(d.Vq);
                        if (0 !== s.length) {
                            if (1 === s.length && !(0, o.zs)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: x.o.PERKS_PURCHASABLE,
                                    powerups: s,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (s.length > 1 && !(0, o.zs)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: x.o.PERKS_PURCHASABLE,
                                    powerups: s,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, E);
                    if (null != i) return i;
                    let s = (function (e, t, n, i) {
                        if (
                            (0, h.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != i &&
                            n >= i &&
                            !(0, o.zs)(a.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: x.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, o._$)(a.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, b, E, j);
                    if (null != s) return s;
                }, [e, t, f, M, Y, Q, P, B, E, b, j]),
                [$, Z] = (0, C.ru)(null != J);
            return i.useMemo(() => {
                if (null != t) {
                    if (f) return { type: x.o.PERKS_AVAILABLE, markAsDismissed: p };
                    if (M) {
                        if (R === v.q.GAME_SERVER_HOSTING)
                            return { type: x.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: L };
                        let e = v.r9[R],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: x.o.NEW_PERK_AVAILABLE, markAsDismissed: L };
                    }
                    if (P && null != D) return { type: x.o.BOOST_TO_UNLOCK, powerup: D, markAsDismissed: U };
                    if (B && null != w)
                        return { type: x.o.EXPIRING_PERK, featuredExpiringPowerup: w, markAsDismissed: V };
                    if (Y) return { type: x.o.GAME_SERVER_NEW_GAMES, markAsDismissed: W };
                    if (Q) return { type: x.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: X };
                    if ($ === a.M.GUILD_POWERUP_NOTIFICATION && null != J)
                        return {
                            ...J,
                            markAsDismissed: (e) => {
                                Z(e), J.markAsDismissed(e);
                            },
                        };
                }
            }, [t, f, p, J, $, Z, M, L, R, P, D, U, B, w, V, Y, W, Q, X]);
        })(e, n ?? void 0);
    if (null !== n && (null != g || j || null != R)) return { indicator: g, showUnread: j, popout: R };
}
function O(e) {
    let t = (0, l.bG)([f.A], () => f.A.getStateForGuild(e)),
        n = R(e);
    i.useEffect(() => {
        (0, g.Zm)(e);
    }, [e]),
        i.useEffect(() => {
            let e = new Set([x.o.BOOST_TO_UNLOCK, x.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(j.i.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                u.fi.forEach((n) => {
                    let i = v.a8[n];
                    if (null == i || null == t.unlockedPowerups[i]) return;
                    let s = v.On[n];
                    null != s && (0, o._$)(s, e, !1, j.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
