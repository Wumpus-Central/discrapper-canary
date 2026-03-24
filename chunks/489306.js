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
    _ = n(942975),
    p = n(904560),
    g = n(645619),
    f = n(379229),
    x = n(128069),
    C = n(904629),
    E = n(229548),
    I = n(139032),
    N = n(52260),
    b = n(294384),
    S = n(639060),
    T = n(864310),
    v = n(568065),
    y = n(652215),
    j = n(49999);
function R(e) {
    let t = (0, l.bG)([p.A], () => p.A.getNotificationStateForGuild(e), [e]),
        n = (0, l.bG)([g.A], () => g.A.getStateForGuild(e)),
        { indicator: _, showUnread: j } = (function (e, t, n) {
            let s = (0, T.A)(e).available,
                { shouldShow: o } = (0, S.A)(e, "useGuildPowerupsNotificationIndicator"),
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
                    ? { indicator: { type: f.cD.WARNING }, showUnread: !0 }
                    : s !== r && c > 0
                      ? { indicator: { type: f.cD.UNREAD, count: c }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [s, n?.lastBoostCount, n?.lastSeenWarningNotification, t, d, u?.entitlements]);
        })(e, n ?? void 0, t),
        R = (function (e, t) {
            let n,
                r,
                _,
                [p, g] = (0, E.ty)(null != t),
                C = p === a.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: S } = (0, T.A)(e),
                j = (0, l.bG)([c.A], () => c.A.getGuild(e)?.features.has(y.GuildFeatures.GAME_SERVERS) ?? !1),
                R = (0, l.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                O =
                    ((n = (0, h.C$)(e, "GuildPowerupsChannelRow")),
                    (r = (0, x.RA)(e, "GuildPowerupsChannelRow")),
                    (_ = (0, l.bG)([c.A], () => c.A.getGuild(e)?.features.has(y.GuildFeatures.GAME_SERVERS))),
                    i.useMemo(() => {
                        let e = t?.allPowerups?.[s.zY] != null,
                            i = t?.unlockedPowerups?.[s.zY] != null;
                        return e && !i
                            ? v.q.FILE_UPLOAD_250_MB
                            : r &&
                                !Array.from(v.r9[v.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                    (e) => t?.unlockedPowerups?.[e] != null,
                                )
                              ? v.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO
                              : n && !_
                                ? v.q.GAME_SERVER_HOSTING
                                : Array.from(v.r9[v.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                        (e) => t?.unlockedPowerups?.[e] != null,
                                    )
                                  ? 0
                                  : v.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                    }, [t, n, _, r])),
                [L, M] = (0, E.FC)(null != t && !C, O),
                D = L === a.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                G = (0, I.A)(e),
                [U, P] = (0, E.ww)(null != t && !C && !D && null != G, e),
                w = U === a.M.BOOST_TO_UNLOCK_COACHMARK,
                k = (0, N.A)(e),
                [V, B] = (0, E.W2)(null != t && !C && !D && !w && null != k, e),
                H = V === a.M.EXPIRING_POWERUP_COACHMARK,
                F = (0, h.TS)(e, "useGuildPowerupsChannelListPopout"),
                [K, W] = (0, E.rd)(null != t && !C && !D && !w && !H && F),
                Y = K === a.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V2_COACHMARK,
                z = (0, m.S)(e, "useGuildPowerupsChannelListPopout"),
                [q, X] = (0, E.vn)(null != t && !j && F && z),
                J = q === a.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                Q = i.useMemo(() => {
                    if (null == t || C || D || Y || J || w || H) return;
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
                                type: f.o.LEVEL_REACHED,
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
                    })(e, t, S);
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
                    })(e, j, S, R);
                    if (null != s) return s;
                }, [e, t, C, D, Y, J, w, H, S, j, R]),
                [$, Z] = (0, E.ru)(null != Q);
            return i.useMemo(() => {
                if (null != t) {
                    if (C) return { type: f.o.PERKS_AVAILABLE, markAsDismissed: g };
                    if (D) {
                        if (O === v.q.GAME_SERVER_HOSTING)
                            return { type: f.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: M };
                        let e = v.r9[O],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: f.o.NEW_PERK_AVAILABLE, markAsDismissed: M };
                    }
                    if (w && null != G) return { type: f.o.BOOST_TO_UNLOCK, powerup: G, markAsDismissed: P };
                    if (H && null != k)
                        return { type: f.o.EXPIRING_PERK, featuredExpiringPowerup: k, markAsDismissed: B };
                    if (Y) return { type: f.o.GAME_SERVER_NEW_GAMES, markAsDismissed: W };
                    if (J) return { type: f.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: X };
                    if ($ === a.M.GUILD_POWERUP_NOTIFICATION && null != Q)
                        return {
                            ...Q,
                            markAsDismissed: (e) => {
                                Z(e), Q.markAsDismissed(e);
                            },
                        };
                }
            }, [t, C, g, Q, $, Z, D, M, O, w, G, P, H, k, B, Y, W, J, X]);
        })(e, n ?? void 0);
    if (null !== n && (null != _ || j || null != R)) return { indicator: _, showUnread: j, popout: R };
}
function O(e) {
    let t = (0, l.bG)([g.A], () => g.A.getStateForGuild(e)),
        n = R(e);
    i.useEffect(() => {
        (0, _.Zm)(e);
    }, [e]),
        i.useEffect(() => {
            let e = new Set([f.o.BOOST_TO_UNLOCK, f.o.EXPIRING_PERK]);
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
