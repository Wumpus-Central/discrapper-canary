n.d(t, { Ay: () => R, Pq: () => O });
var i = n(64700),
    l = n(512750),
    s = n(417597),
    a = n(554146),
    r = n(367727),
    o = n(45780),
    d = n(71393),
    c = n(403362),
    u = n(473145),
    h = n(488803),
    A = n(522055),
    p = n(942975),
    m = n(904560),
    g = n(645619),
    _ = n(379229),
    f = n(128069),
    x = n(840120),
    C = n(904629),
    E = n(229548),
    I = n(139032),
    b = n(52260),
    N = n(294384),
    S = n(864310),
    T = n(553103),
    v = n(568065),
    y = n(652215),
    j = n(49999);
function R(e) {
    let t = (0, s.bG)([m.A], () => m.A.getNotificationStateForGuild(e), [e]),
        n = (0, s.bG)([g.A], () => g.A.getStateForGuild(e)),
        { indicator: p, showUnread: j } = (function (e, t, n) {
            let l = (0, S.A)(e).available,
                { shouldShow: o } = (0, T.A)(e, "useGuildPowerupsNotificationIndicator"),
                d = (0, r.cN)(a.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                c = o && !d,
                u = (0, s.bG)([A.A], () => A.A.getStateForGuild(e));
            return i.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    i = (0, C.k)([...Object.values(e), ...Object.values(u?.entitlements ?? {})]),
                    s = n?.lastSeenWarningNotification ?? Date.now(),
                    a = new Date(i[i.length - 1]?.ends_at).getTime(),
                    r = n?.lastBoostCount ?? 0,
                    o = i.length > 0 && s < a,
                    d = l - r;
                return o || c
                    ? { indicator: { type: _.cD.WARNING }, showUnread: !0 }
                    : l !== r && d > 0
                      ? { indicator: { type: _.cD.UNREAD, count: d }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [l, n?.lastBoostCount, n?.lastSeenWarningNotification, t, c, u?.entitlements]);
        })(e, n ?? void 0, t),
        R = (function (e, t) {
            let n,
                r,
                p,
                m,
                [g, C] = (0, E.ty)(null != t),
                T = g === a.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: j } = (0, S.A)(e),
                R = (0, s.bG)([d.A], () => d.A.getGuild(e)?.features.has(y.GuildFeatures.GAME_SERVERS) ?? !1),
                O = (0, s.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                L =
                    ((n = (0, x.gz)(e, "GuildPowerupsChannelRow")),
                    (r = (0, h.C$)(e, "GuildPowerupsChannelRow")),
                    (p = (0, f.RA)(e, "GuildPowerupsChannelRow")),
                    (m = (0, s.bG)([d.A], () => d.A.getGuild(e)?.features.has(y.GuildFeatures.GAME_SERVERS))),
                    i.useMemo(() => {
                        if (
                            p &&
                            !Array.from(v.r9[v.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                (e) => t?.unlockedPowerups?.[e] != null,
                            )
                        )
                            return v.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                        if (r && !m) return v.q.GAME_SERVER_HOSTING;
                        if (
                            !Array.from(v.r9[v.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                (e) => t?.unlockedPowerups?.[e] != null,
                            )
                        )
                            return v.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                        if (n) {
                            let n = l.FB,
                                i = v.wr[n],
                                s = t?.unlockedPowerups?.[n] != null;
                            if (null == i && !s) return v.q.VANITY_URL;
                            let a = (0, u.P7)(e);
                            if (null != a && null != i && a < i && !s) return v.q.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t, r, m, p])),
                [M, D] = (0, E.FC)(null != t && !T, L),
                G = M === a.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                U = (0, I.A)(e),
                [P, w] = (0, E.ww)(null != t && !T && !G && null != U, e),
                k = P === a.M.BOOST_TO_UNLOCK_COACHMARK,
                V = (0, b.A)(e),
                [B, H] = (0, E.W2)(null != t && !T && !G && !k && null != V, e),
                F = B === a.M.EXPIRING_POWERUP_COACHMARK,
                K = i.useMemo(() => {
                    if (null == t || T || G || k || F) return;
                    let n = (function (e, t) {
                        let n = u.fi.find((e) => {
                            let n = v.a8[e],
                                i = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != i && i.user_id !== v.mB;
                        });
                        if (null == n) return;
                        let i = v.On[n];
                        if (null == i || (0, o.zs)(i, e)) return;
                        let l = v.a8[n],
                            s = null != l ? t.allPowerups[l] : void 0;
                        if (null != s)
                            return {
                                type: _.o.LEVEL_REACHED,
                                powerup: s,
                                markAsDismissed: (t) => {
                                    (0, o._$)(i, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let i = (function (e, t, n) {
                        let i = d.A.getGuild(e)?.premiumTier ?? y.TVA.NONE,
                            l = Array.from(v.oN.values())
                                .flatMap((l) =>
                                    l.length <= 0 ||
                                    l.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = v.wr[e];
                                        return null != n && !!(i >= n);
                                    })
                                        ? []
                                        : l.map((i) => {
                                              let l = t.allPowerups[i];
                                              return null == l ||
                                                  n < l.cost ||
                                                  !l.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, N.t)(e, l, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : l;
                                          }),
                                )
                                .filter(c.Vq);
                        if (0 !== l.length) {
                            if (1 === l.length && !(0, o.zs)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: _.o.PERKS_PURCHASABLE,
                                    powerups: l,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (l.length > 1 && !(0, o.zs)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: _.o.PERKS_PURCHASABLE,
                                    powerups: l,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, j);
                    if (null != i) return i;
                    let l = (function (e, t, n, i) {
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
                    if (null != l) return l;
                }, [e, t, T, G, k, F, j, R, O]),
                [W, Y] = (0, E.ru)(null != K);
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
                    if (W === a.M.GUILD_POWERUP_NOTIFICATION && null != K)
                        return {
                            ...K,
                            markAsDismissed: (e) => {
                                Y(e), K.markAsDismissed(e);
                            },
                        };
                }
            }, [t, T, C, K, W, Y, G, D, L, k, U, w, F, V, H]);
        })(e, n ?? void 0);
    if (null !== n && (null != p || j || null != R)) return { indicator: p, showUnread: j, popout: R };
}
function O(e) {
    let t = (0, s.bG)([g.A], () => g.A.getStateForGuild(e)),
        n = R(e);
    i.useEffect(() => {
        (0, p.Zm)(e);
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
                    let l = v.On[n];
                    null != l && (0, o._$)(l, e, !1, j.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
