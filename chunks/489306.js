n.d(t, { Ay: () => y, c2: () => j });
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
    m = n(942975),
    p = n(904560),
    g = n(645619),
    _ = n(379229),
    f = n(128069),
    x = n(840120),
    C = n(904629),
    E = n(229548),
    I = n(294384),
    b = n(864310),
    N = n(553103),
    S = n(568065),
    T = n(652215),
    v = n(49999);
function y(e) {
    let t = (0, s.bG)([p.A], () => p.A.getNotificationStateForGuild(e), [e]),
        n = (0, s.bG)([g.A], () => g.A.getStateForGuild(e)),
        { indicator: m, showUnread: v } = (function (e, t, n) {
            let l = (0, b.A)(e).available,
                { shouldShow: o } = (0, N.A)(e, "useGuildPowerupsNotificationIndicator"),
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
        y = (function (e, t) {
            let n,
                r,
                m,
                p,
                [g, C] = (0, E.ty)(null != t),
                N = g === a.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: v } = (0, b.A)(e),
                y = (0, s.bG)([d.A], () => d.A.getGuild(e)?.features.has(T.GuildFeatures.GAME_SERVERS) ?? !1),
                j = (0, s.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                R =
                    ((n = (0, x.gz)(e, "GuildPowerupsChannelRow")),
                    (r = (0, h.C$)(e, "GuildPowerupsChannelRow")),
                    (m = (0, f.RA)(e, "GuildPowerupsChannelRow")),
                    (p = (0, s.bG)([d.A], () => d.A.getGuild(e)?.features.has(T.GuildFeatures.GAME_SERVERS))),
                    i.useMemo(() => {
                        if (
                            m &&
                            !Array.from(S.r9[S.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                (e) => t?.unlockedPowerups?.[e] != null,
                            )
                        )
                            return S.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                        if (r && !p) return S.q.GAME_SERVER_HOSTING;
                        if (
                            !Array.from(S.r9[S.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                (e) => t?.unlockedPowerups?.[e] != null,
                            )
                        )
                            return S.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                        if (n) {
                            let n = l.FB,
                                i = S.wr[n],
                                s = t?.unlockedPowerups?.[n] != null;
                            if (null == i && !s) return S.q.VANITY_URL;
                            let a = (0, u.P7)(e);
                            if (null != a && null != i && a < i && !s) return S.q.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t, r, p, m])),
                [O, L] = (0, E.FC)(null != t && !N, R),
                M = O === a.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                D = i.useMemo(() => {
                    if (null == t || N || M) return;
                    let n = (function (e, t) {
                        let n = u.fi.find((e) => {
                            let n = S.a8[e],
                                i = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != i && i.user_id !== S.mB;
                        });
                        if (null == n) return;
                        let i = S.On[n];
                        if (null == i || (0, o.zs)(i, e)) return;
                        let l = S.a8[n],
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
                        let i = d.A.getGuild(e)?.premiumTier ?? T.TVA.NONE,
                            l = Array.from(S.oN.values())
                                .flatMap((l) =>
                                    l.length <= 0 ||
                                    l.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = S.wr[e];
                                        return null != n && !!(i >= n);
                                    })
                                        ? []
                                        : l.map((i) => {
                                              let l = t.allPowerups[i];
                                              return null == l ||
                                                  n < l.cost ||
                                                  (0, I.t)(e, l, "maybeGetPerkPurchaseablePopoutDCF")
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
                    })(e, t, v);
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
                    })(e, y, v, j);
                    if (null != l) return l;
                }, [e, t, N, M, v, y, j]),
                [U, G] = (0, E.ru)(null != D);
            return i.useMemo(() => {
                if (null != t) {
                    if (N) return { type: _.o.PERKS_AVAILABLE, markAsDismissed: C };
                    if (M) {
                        if (R === S.q.GAME_SERVER_HOSTING)
                            return { type: _.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: L };
                        let e = S.r9[R],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: _.o.NEW_PERK_AVAILABLE, markAsDismissed: L };
                    }
                    if (U === a.M.GUILD_POWERUP_NOTIFICATION && null != D)
                        return {
                            ...D,
                            markAsDismissed: (e) => {
                                G(e), D.markAsDismissed(e);
                            },
                        };
                }
            }, [t, N, C, D, U, G, M, L, R]);
        })(e, n ?? void 0);
    if (null !== n && (null != m || v || null != y)) return { indicator: m, showUnread: v, popout: y };
}
function j(e) {
    let t = (0, s.bG)([g.A], () => g.A.getStateForGuild(e)),
        n = y(e);
    i.useEffect(() => {
        (0, m.Zm)(e);
    }, [e]),
        i.useEffect(() => {
            n?.popout?.markAsDismissed(v.i.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                u.fi.forEach((n) => {
                    let i = S.a8[n];
                    if (null == i || null == t.unlockedPowerups[i]) return;
                    let l = S.On[n];
                    null != l && (0, o._$)(l, e, !1, v.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
