n.d(t, { Ay: () => j, c2: () => v });
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
    g = n(942975),
    m = n(904560),
    p = n(645619),
    _ = n(379229),
    x = n(840120),
    f = n(904629),
    E = n(229548),
    C = n(294384),
    I = n(864310),
    S = n(553103),
    b = n(568065),
    N = n(652215),
    T = n(49999);
function j(e) {
    let t = (0, s.bG)([m.A], () => m.A.getNotificationStateForGuild(e), [e]),
        n = (0, s.bG)([p.A], () => p.A.getStateForGuild(e)),
        { indicator: g, showUnread: T } = (function (e, t, n) {
            let l = (0, I.A)(e).available,
                { shouldShow: o } = (0, S.A)(e, "useGuildPowerupsNotificationIndicator"),
                d = (0, r.cN)(a.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                c = o && !d,
                u = (0, s.bG)([A.A], () => A.A.getStateForGuild(e));
            return i.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    i = (0, f.k)([...Object.values(e), ...Object.values(u?.entitlements ?? {})]),
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
        j = (function (e, t) {
            let n,
                r,
                g,
                [m, p] = (0, E.ty)(null != t),
                f = m === a.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: S } = (0, I.A)(e),
                T = (0, s.bG)([d.A], () => d.A.getGuild(e)?.features.has(N.GuildFeatures.GAME_SERVERS) ?? !1),
                j = (0, s.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                v =
                    ((n = (0, x.gz)(e, "GuildPowerupsChannelRow")),
                    (r = (0, h.C$)(e, "GuildPowerupsChannelRow")),
                    (g = (0, s.bG)([d.A], () => d.A.getGuild(e)?.features.has(N.GuildFeatures.GAME_SERVERS))),
                    i.useMemo(() => {
                        if (r && !g) return b.q.GAME_SERVER_HOSTING;
                        if (
                            !Array.from(b.r9[b.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                (e) => t?.unlockedPowerups?.[e] != null,
                            )
                        )
                            return b.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                        if (n) {
                            let n = l.FB,
                                i = b.wr[n],
                                s = t?.unlockedPowerups?.[n] != null;
                            if (null == i && !s) return b.q.VANITY_URL;
                            let a = (0, u.P7)(e);
                            if (null != a && null != i && a < i && !s) return b.q.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t, r, g])),
                [y, R] = (0, E.FC)(null != t && !f, v),
                O = y === a.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                L = i.useMemo(() => {
                    if (null == t || f || O) return;
                    let n = (function (e, t) {
                        let n = u.fi.find((e) => {
                            let n = b.a8[e],
                                i = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != i && i.user_id !== b.mB;
                        });
                        if (null == n) return;
                        let i = b.On[n];
                        if (null == i || (0, o.zs)(i, e)) return;
                        let l = b.a8[n],
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
                        let i = d.A.getGuild(e)?.premiumTier ?? N.TVA.NONE,
                            l = Array.from(b.oN.values())
                                .flatMap((l) =>
                                    l.length <= 0 ||
                                    l.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = b.wr[e];
                                        return null != n && !!(i >= n);
                                    })
                                        ? []
                                        : l.map((i) => {
                                              let l = t.allPowerups[i];
                                              return null == l ||
                                                  n < l.cost ||
                                                  (0, C.t)(e, l, "maybeGetPerkPurchaseablePopoutDCF")
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
                    })(e, t, S);
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
                    })(e, T, S, j);
                    if (null != l) return l;
                }, [e, t, f, O, S, T, j]),
                [D, M] = (0, E.ru)(null != L);
            return i.useMemo(() => {
                if (null != t) {
                    if (f) return { type: _.o.PERKS_AVAILABLE, markAsDismissed: p };
                    if (O) {
                        if (v === b.q.GAME_SERVER_HOSTING)
                            return { type: _.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: R };
                        let e = b.r9[v],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: _.o.NEW_PERK_AVAILABLE, markAsDismissed: R };
                    }
                    if (D === a.M.GUILD_POWERUP_NOTIFICATION && null != L)
                        return {
                            ...L,
                            markAsDismissed: (e) => {
                                M(e), L.markAsDismissed(e);
                            },
                        };
                }
            }, [t, f, p, L, D, M, O, R, v]);
        })(e, n ?? void 0);
    if (null !== n && (null != g || T || null != j)) return { indicator: g, showUnread: T, popout: j };
}
function v(e) {
    let t = (0, s.bG)([p.A], () => p.A.getStateForGuild(e)),
        n = j(e);
    i.useEffect(() => {
        (0, g.Zm)(e);
    }, [e]),
        i.useEffect(() => {
            n?.popout?.markAsDismissed(T.i.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                u.fi.forEach((n) => {
                    let i = b.a8[n];
                    if (null == i || null == t.unlockedPowerups[i]) return;
                    let l = b.On[n];
                    null != l && (0, o._$)(l, e, !1, T.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
