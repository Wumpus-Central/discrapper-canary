"use strict";
n.d(t, { Ay: () => j, Pq: () => R });
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
    _ = n(942975),
    g = n(904560),
    p = n(645619),
    f = n(379229),
    x = n(904629),
    E = n(229548),
    C = n(139032),
    I = n(52260),
    N = n(294384),
    b = n(639060),
    S = n(864310),
    T = n(568065),
    v = n(652215),
    y = n(49999);
function j(e) {
    let t = (0, l.bG)([g.A], () => g.A.getNotificationStateForGuild(e), [e]),
        n = (0, l.bG)([p.A], () => p.A.getStateForGuild(e)),
        { indicator: _, showUnread: y } = (function (e, t, n) {
            let s = (0, S.A)(e).available,
                { shouldShow: o } = (0, b.A)(e, "useGuildPowerupsNotificationIndicator"),
                c = (0, r.cN)(a.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                d = o && !c,
                u = (0, l.bG)([A.A], () => A.A.getStateForGuild(e));
            return i.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    i = (0, x.k)([...Object.values(e), ...Object.values(u?.entitlements ?? {})]),
                    l = n?.lastSeenWarningNotification ?? Date.now(),
                    a = new Date(i[i.length - 1]?.ends_at).getTime(),
                    r = n?.lastBoostCount ?? 0,
                    o = i.length > 0 && l < a,
                    c = s - r;
                return o || d
                    ? { indicator: { type: f.cD.WARNING }, showUnread: !0 }
                    : s !== r && c > 0
                      ? { indicator: { type: f.cD.UNREAD, count: c }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [s, n?.lastBoostCount, n?.lastSeenWarningNotification, t, d, u?.entitlements]);
        })(e, n ?? void 0, t),
        j = (function (e, t) {
            let n,
                r,
                [_, g] = (0, E.ty)(null != t),
                p = _ === a.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: x } = (0, S.A)(e),
                b = (0, l.bG)([c.A], () => c.A.getGuild(e)?.features.has(v.GuildFeatures.GAME_SERVERS) ?? !1),
                y = (0, l.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                j =
                    ((n = (0, h.C$)(e, "GuildPowerupsChannelRow")),
                    (r = (0, l.bG)([c.A], () => c.A.getGuild(e)?.features.has(v.GuildFeatures.GAME_SERVERS))),
                    i.useMemo(() => {
                        let e = t?.allPowerups?.[s.zY] != null,
                            i = t?.unlockedPowerups?.[s.zY] != null;
                        return e && !i
                            ? T.q.FILE_UPLOAD_250_MB
                            : Array.from(T.r9[T.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                    (e) => t?.unlockedPowerups?.[e] != null,
                                )
                              ? n && !r
                                  ? T.q.GAME_SERVER_HOSTING
                                  : Array.from(T.r9[T.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                          (e) => t?.unlockedPowerups?.[e] != null,
                                      )
                                    ? 0
                                    : T.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE
                              : T.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    }, [t, n, r])),
                [R, O] = (0, E.FC)(null != t && !p, j),
                L = R === a.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                M = (0, C.A)(e),
                [D, G] = (0, E.ww)(null != t && !p && !L && null != M, e),
                U = D === a.M.BOOST_TO_UNLOCK_COACHMARK,
                P = (0, I.A)(e),
                [w, k] = (0, E.W2)(null != t && !p && !L && !U && null != P, e),
                V = w === a.M.EXPIRING_POWERUP_COACHMARK,
                B = (0, h.TS)(e, "useGuildPowerupsChannelListPopout"),
                [H, F] = (0, E.rd)(null != t && !p && !L && !U && !V && B),
                K = H === a.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V2_COACHMARK,
                W = (0, m.S)(e, "useGuildPowerupsChannelListPopout"),
                [Y, z] = (0, E.vn)(null != t && !b && B && W),
                q = Y === a.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                X = i.useMemo(() => {
                    if (null == t || p || L || K || q || U || V) return;
                    let n = (function (e, t) {
                        let n = u.fi.find((e) => {
                            let n = T.a8[e],
                                i = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != i && i.user_id !== T.mB;
                        });
                        if (null == n) return;
                        let i = T.On[n];
                        if (null == i || (0, o.zs)(i, e)) return;
                        let s = T.a8[n],
                            l = null != s ? t.allPowerups[s] : void 0;
                        if (null != l)
                            return {
                                type: f.o.LEVEL_REACHED,
                                powerup: l,
                                markAsDismissed: (t) => {
                                    (0, o._$)(i, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let i = (function (e, t, n) {
                        let i = c.A.getGuild(e)?.premiumTier ?? v.TVA.NONE,
                            s = Array.from(T.oN.values())
                                .flatMap((s) =>
                                    s.length <= 0 ||
                                    s.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = T.wr[e];
                                        return null != n && !!(i >= n);
                                    })
                                        ? []
                                        : s.map((i) => {
                                              let s = t.allPowerups[i];
                                              return null == s ||
                                                  n < s.cost ||
                                                  !s.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, N.t)(e, s, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : s;
                                          }),
                                )
                                .filter(d.Vq);
                        if (0 !== s.length) {
                            if (1 === s.length && !(0, o.zs)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: f.o.PERKS_PURCHASABLE,
                                    powerups: s,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (s.length > 1 && !(0, o.zs)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: f.o.PERKS_PURCHASABLE,
                                    powerups: s,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, x);
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
                                type: f.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, o._$)(a.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, b, x, y);
                    if (null != s) return s;
                }, [e, t, p, L, K, q, U, V, x, b, y]),
                [Q, J] = (0, E.ru)(null != X);
            return i.useMemo(() => {
                if (null != t) {
                    if (p) return { type: f.o.PERKS_AVAILABLE, markAsDismissed: g };
                    if (L) {
                        if (j === T.q.GAME_SERVER_HOSTING)
                            return { type: f.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: O };
                        let e = T.r9[j],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: f.o.NEW_PERK_AVAILABLE, markAsDismissed: O };
                    }
                    if (U && null != M) return { type: f.o.BOOST_TO_UNLOCK, powerup: M, markAsDismissed: G };
                    if (V && null != P)
                        return { type: f.o.EXPIRING_PERK, featuredExpiringPowerup: P, markAsDismissed: k };
                    if (K) return { type: f.o.GAME_SERVER_NEW_GAMES, markAsDismissed: F };
                    if (q) return { type: f.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: z };
                    if (Q === a.M.GUILD_POWERUP_NOTIFICATION && null != X)
                        return {
                            ...X,
                            markAsDismissed: (e) => {
                                J(e), X.markAsDismissed(e);
                            },
                        };
                }
            }, [t, p, g, X, Q, J, L, O, j, U, M, G, V, P, k, K, F, q, z]);
        })(e, n ?? void 0);
    if (null !== n && (null != _ || y || null != j)) return { indicator: _, showUnread: y, popout: j };
}
function R(e) {
    let t = (0, l.bG)([p.A], () => p.A.getStateForGuild(e)),
        n = j(e);
    i.useEffect(() => {
        (0, _.Zm)(e);
    }, [e]),
        i.useEffect(() => {
            let e = new Set([f.o.BOOST_TO_UNLOCK, f.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(y.i.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                u.fi.forEach((n) => {
                    let i = T.a8[n];
                    if (null == i || null == t.unlockedPowerups[i]) return;
                    let s = T.On[n];
                    null != s && (0, o._$)(s, e, !1, y.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
