"use strict";
n.d(t, { Ay: () => O, Pq: () => L });
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
    C = n(840120),
    E = n(904629),
    I = n(229548),
    N = n(139032),
    b = n(52260),
    S = n(294384),
    T = n(864310),
    v = n(553103),
    y = n(568065),
    j = n(652215),
    R = n(49999);
function O(e) {
    let t = (0, l.bG)([p.A], () => p.A.getNotificationStateForGuild(e), [e]),
        n = (0, l.bG)([g.A], () => g.A.getStateForGuild(e)),
        { indicator: _, showUnread: R } = (function (e, t, n) {
            let s = (0, T.A)(e).available,
                { shouldShow: o } = (0, v.A)(e, "useGuildPowerupsNotificationIndicator"),
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
                    ? { indicator: { type: f.cD.WARNING }, showUnread: !0 }
                    : s !== r && c > 0
                      ? { indicator: { type: f.cD.UNREAD, count: c }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [s, n?.lastBoostCount, n?.lastSeenWarningNotification, t, d, u?.entitlements]);
        })(e, n ?? void 0, t),
        O = (function (e, t) {
            let n,
                r,
                _,
                p,
                [g, E] = (0, I.ty)(null != t),
                v = g === a.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: R } = (0, T.A)(e),
                O = (0, l.bG)([c.A], () => c.A.getGuild(e)?.features.has(j.GuildFeatures.GAME_SERVERS) ?? !1),
                L = (0, l.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                M =
                    ((n = (0, C.gz)(e, "GuildPowerupsChannelRow")),
                    (r = (0, h.C$)(e, "GuildPowerupsChannelRow")),
                    (_ = (0, x.RA)(e, "GuildPowerupsChannelRow")),
                    (p = (0, l.bG)([c.A], () => c.A.getGuild(e)?.features.has(j.GuildFeatures.GAME_SERVERS))),
                    i.useMemo(() => {
                        let i = t?.allPowerups?.[s.zY] != null,
                            l = t?.unlockedPowerups?.[s.zY] != null;
                        if (i && !l) return y.q.FILE_UPLOAD_250_MB;
                        if (
                            _ &&
                            !Array.from(y.r9[y.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                (e) => t?.unlockedPowerups?.[e] != null,
                            )
                        )
                            return y.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                        if (r && !p) return y.q.GAME_SERVER_HOSTING;
                        if (
                            !Array.from(y.r9[y.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                (e) => t?.unlockedPowerups?.[e] != null,
                            )
                        )
                            return y.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                        if (n) {
                            let n = s.FB,
                                i = y.wr[n],
                                l = t?.unlockedPowerups?.[n] != null;
                            if (null == i && !l) return y.q.VANITY_URL;
                            let a = (0, u.P7)(e);
                            if (null != a && null != i && a < i && !l) return y.q.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t, r, p, _])),
                [D, G] = (0, I.FC)(null != t && !v, M),
                U = D === a.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                P = (0, N.A)(e),
                [w, k] = (0, I.ww)(null != t && !v && !U && null != P, e),
                V = w === a.M.BOOST_TO_UNLOCK_COACHMARK,
                B = (0, b.A)(e),
                [H, F] = (0, I.W2)(null != t && !v && !U && !V && null != B, e),
                K = H === a.M.EXPIRING_POWERUP_COACHMARK,
                W = (0, h.TS)(e, "useGuildPowerupsChannelListPopout"),
                [Y, z] = (0, I.rd)(null != t && !v && !U && !V && !K && W),
                q = Y === a.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V2_COACHMARK,
                X = (0, m.S)(e, "useGuildPowerupsChannelListPopout"),
                [J, Q] = (0, I.vn)(null != t && !O && W && X),
                $ = J === a.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                Z = i.useMemo(() => {
                    if (null == t || v || U || q || $ || V || K) return;
                    let n = (function (e, t) {
                        let n = u.fi.find((e) => {
                            let n = y.a8[e],
                                i = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != i && i.user_id !== y.mB;
                        });
                        if (null == n) return;
                        let i = y.On[n];
                        if (null == i || (0, o.zs)(i, e)) return;
                        let s = y.a8[n],
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
                        let i = c.A.getGuild(e)?.premiumTier ?? j.TVA.NONE,
                            s = Array.from(y.oN.values())
                                .flatMap((s) =>
                                    s.length <= 0 ||
                                    s.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = y.wr[e];
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
                    })(e, t, R);
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
                    })(e, O, R, L);
                    if (null != s) return s;
                }, [e, t, v, U, q, $, V, K, R, O, L]),
                [ee, et] = (0, I.ru)(null != Z);
            return i.useMemo(() => {
                if (null != t) {
                    if (v) return { type: f.o.PERKS_AVAILABLE, markAsDismissed: E };
                    if (U) {
                        if (M === y.q.GAME_SERVER_HOSTING)
                            return { type: f.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: G };
                        let e = y.r9[M],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: f.o.NEW_PERK_AVAILABLE, markAsDismissed: G };
                    }
                    if (V && null != P) return { type: f.o.BOOST_TO_UNLOCK, powerup: P, markAsDismissed: k };
                    if (K && null != B)
                        return { type: f.o.EXPIRING_PERK, featuredExpiringPowerup: B, markAsDismissed: F };
                    if (q) return { type: f.o.GAME_SERVER_NEW_GAMES, markAsDismissed: z };
                    if ($) return { type: f.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: Q };
                    if (ee === a.M.GUILD_POWERUP_NOTIFICATION && null != Z)
                        return {
                            ...Z,
                            markAsDismissed: (e) => {
                                et(e), Z.markAsDismissed(e);
                            },
                        };
                }
            }, [t, v, E, Z, ee, et, U, G, M, V, P, k, K, B, F, q, z, $, Q]);
        })(e, n ?? void 0);
    if (null !== n && (null != _ || R || null != O)) return { indicator: _, showUnread: R, popout: O };
}
function L(e) {
    let t = (0, l.bG)([g.A], () => g.A.getStateForGuild(e)),
        n = O(e);
    i.useEffect(() => {
        (0, _.Zm)(e);
    }, [e]),
        i.useEffect(() => {
            let e = new Set([f.o.BOOST_TO_UNLOCK, f.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(R.i.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                u.fi.forEach((n) => {
                    let i = y.a8[n];
                    if (null == i || null == t.unlockedPowerups[i]) return;
                    let s = y.On[n];
                    null != s && (0, o._$)(s, e, !1, R.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
