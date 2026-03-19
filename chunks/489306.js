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
    m = n(942975),
    g = n(904560),
    p = n(645619),
    _ = n(379229),
    f = n(128069),
    x = n(840120),
    C = n(904629),
    E = n(229548),
    I = n(139032),
    N = n(52260),
    b = n(294384),
    S = n(864310),
    T = n(553103),
    v = n(568065),
    y = n(652215),
    j = n(49999);
function R(e) {
    let t = (0, l.bG)([g.A], () => g.A.getNotificationStateForGuild(e), [e]),
        n = (0, l.bG)([p.A], () => p.A.getStateForGuild(e)),
        { indicator: m, showUnread: j } = (function (e, t, n) {
            let s = (0, S.A)(e).available,
                { shouldShow: o } = (0, T.A)(e, "useGuildPowerupsNotificationIndicator"),
                c = (0, r.cN)(a.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                d = o && !c,
                u = (0, l.bG)([A.A], () => A.A.getStateForGuild(e));
            return i.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    i = (0, C.k)([...Object.values(e), ...Object.values(u?.entitlements ?? {})]),
                    l = n?.lastSeenWarningNotification ?? Date.now(),
                    a = new Date(i[i.length - 1]?.ends_at).getTime(),
                    r = n?.lastBoostCount ?? 0,
                    o = i.length > 0 && l < a,
                    c = s - r;
                return o || d
                    ? { indicator: { type: _.cD.WARNING }, showUnread: !0 }
                    : s !== r && c > 0
                      ? { indicator: { type: _.cD.UNREAD, count: c }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [s, n?.lastBoostCount, n?.lastSeenWarningNotification, t, d, u?.entitlements]);
        })(e, n ?? void 0, t),
        R = (function (e, t) {
            let n,
                r,
                m,
                g,
                [p, C] = (0, E.ty)(null != t),
                T = p === a.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: j } = (0, S.A)(e),
                R = (0, l.bG)([c.A], () => c.A.getGuild(e)?.features.has(y.GuildFeatures.GAME_SERVERS) ?? !1),
                O = (0, l.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                L =
                    ((n = (0, x.gz)(e, "GuildPowerupsChannelRow")),
                    (r = (0, h.C$)(e, "GuildPowerupsChannelRow")),
                    (m = (0, f.RA)(e, "GuildPowerupsChannelRow")),
                    (g = (0, l.bG)([c.A], () => c.A.getGuild(e)?.features.has(y.GuildFeatures.GAME_SERVERS))),
                    i.useMemo(() => {
                        let i = t?.allPowerups?.[s.zY] != null,
                            l = t?.unlockedPowerups?.[s.zY] != null;
                        if (i && !l) return v.q.FILE_UPLOAD_250_MB;
                        if (
                            m &&
                            !Array.from(v.r9[v.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                (e) => t?.unlockedPowerups?.[e] != null,
                            )
                        )
                            return v.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                        if (r && !g) return v.q.GAME_SERVER_HOSTING;
                        if (
                            !Array.from(v.r9[v.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                (e) => t?.unlockedPowerups?.[e] != null,
                            )
                        )
                            return v.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                        if (n) {
                            let n = s.FB,
                                i = v.wr[n],
                                l = t?.unlockedPowerups?.[n] != null;
                            if (null == i && !l) return v.q.VANITY_URL;
                            let a = (0, u.P7)(e);
                            if (null != a && null != i && a < i && !l) return v.q.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t, r, g, m])),
                [M, D] = (0, E.FC)(null != t && !T, L),
                G = M === a.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                U = (0, I.A)(e),
                [P, w] = (0, E.ww)(null != t && !T && !G && null != U, e),
                k = P === a.M.BOOST_TO_UNLOCK_COACHMARK,
                V = (0, N.A)(e),
                [B, H] = (0, E.W2)(null != t && !T && !G && !k && null != V, e),
                F = B === a.M.EXPIRING_POWERUP_COACHMARK,
                K = (0, h.TS)(e, "useGuildPowerupsChannelListPopout"),
                [W, Y] = (0, E.rd)(null != t && !T && !G && !k && !F && K),
                z = W === a.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V2_COACHMARK,
                q = i.useMemo(() => {
                    if (null == t || T || G || z || k || F) return;
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
                                type: _.o.LEVEL_REACHED,
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
                                                  (0, b.t)(e, s, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : s;
                                          }),
                                )
                                .filter(d.Vq);
                        if (0 !== s.length) {
                            if (1 === s.length && !(0, o.zs)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: _.o.PERKS_PURCHASABLE,
                                    powerups: s,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (s.length > 1 && !(0, o.zs)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: _.o.PERKS_PURCHASABLE,
                                    powerups: s,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, j);
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
                                type: _.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, o._$)(a.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, R, j, O);
                    if (null != s) return s;
                }, [e, t, T, G, z, k, F, j, R, O]),
                [X, J] = (0, E.ru)(null != q);
            return i.useMemo(() => {
                if (null != t) {
                    if (T) return { type: _.o.PERKS_AVAILABLE, markAsDismissed: C };
                    if (G) {
                        if (L === v.q.GAME_SERVER_HOSTING)
                            return { type: _.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: D };
                        let e = v.r9[L],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: _.o.NEW_PERK_AVAILABLE, markAsDismissed: D };
                    }
                    if (k && null != U) return { type: _.o.BOOST_TO_UNLOCK, powerup: U, markAsDismissed: w };
                    if (F && null != V)
                        return { type: _.o.EXPIRING_PERK, featuredExpiringPowerup: V, markAsDismissed: H };
                    if (z) return { type: _.o.GAME_SERVER_NEW_GAMES, markAsDismissed: Y };
                    if (X === a.M.GUILD_POWERUP_NOTIFICATION && null != q)
                        return {
                            ...q,
                            markAsDismissed: (e) => {
                                J(e), q.markAsDismissed(e);
                            },
                        };
                }
            }, [t, T, C, q, X, J, G, D, L, k, U, w, F, V, H, z, Y]);
        })(e, n ?? void 0);
    if (null !== n && (null != m || j || null != R)) return { indicator: m, showUnread: j, popout: R };
}
function O(e) {
    let t = (0, l.bG)([p.A], () => p.A.getStateForGuild(e)),
        n = R(e);
    i.useEffect(() => {
        (0, m.Zm)(e);
    }, [e]),
        i.useEffect(() => {
            let e = new Set([_.o.BOOST_TO_UNLOCK, _.o.EXPIRING_PERK]);
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
