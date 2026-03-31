n.d(t, { Ay: () => R, Pq: () => O });
var i = n(64700),
    l = n(512750),
    s = n(417597),
    a = n(554146),
    r = n(367727),
    o = n(45780),
    c = n(71393),
    d = n(403362),
    u = n(473145),
    h = n(488803),
    A = n(522055),
    _ = n(764322),
    m = n(969983),
    g = n(942975),
    p = n(904560),
    f = n(645619),
    x = n(379229),
    E = n(904629),
    I = n(229548),
    C = n(139032),
    N = n(52260),
    T = n(294384),
    S = n(639060),
    b = n(864310),
    y = n(568065),
    v = n(652215),
    j = n(49999);
function R(e) {
    let t = (0, s.bG)([p.A], () => p.A.getNotificationStateForGuild(e), [e]),
        n = (0, s.bG)([f.A], () => f.A.getStateForGuild(e)),
        { indicator: g, showUnread: j } = (function (e, t, n) {
            let l = (0, b.A)(e).available,
                { shouldShow: o } = (0, S.A)(e, "useGuildPowerupsNotificationIndicator"),
                c = (0, r.cN)(a.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                d = o && !c,
                u = (0, s.bG)([A.A], () => A.A.getStateForGuild(e));
            return i.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    i = (0, E.k)([...Object.values(e), ...Object.values(u?.entitlements ?? {})]),
                    s = n?.lastSeenWarningNotification ?? Date.now(),
                    a = new Date(i[i.length - 1]?.ends_at).getTime(),
                    r = n?.lastBoostCount ?? 0,
                    o = i.length > 0 && s < a,
                    c = l - r;
                return o || d
                    ? { indicator: { type: x.cD.WARNING }, showUnread: !0 }
                    : l !== r && c > 0
                      ? { indicator: { type: x.cD.UNREAD, count: c }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [l, n?.lastBoostCount, n?.lastSeenWarningNotification, t, d, u?.entitlements]);
        })(e, n ?? void 0, t),
        R = (function (e, t) {
            let n,
                r,
                [g, p] = (0, I.ty)(null != t),
                f = g === a.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: E } = (0, b.A)(e),
                S = (0, s.bG)([c.A], () => c.A.getGuild(e)?.features.has(v.GuildFeatures.GAME_SERVERS) ?? !1),
                j = (0, s.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                R =
                    ((n = (0, h.C$)(e, "GuildPowerupsChannelRow")),
                    (r = (0, s.bG)([c.A], () => c.A.getGuild(e)?.features.has(v.GuildFeatures.GAME_SERVERS))),
                    i.useMemo(() => {
                        let e = t?.allPowerups?.[l.zY] != null,
                            i = t?.unlockedPowerups?.[l.zY] != null;
                        return e && !i
                            ? y.q.FILE_UPLOAD_250_MB
                            : Array.from(y.r9[y.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                    (e) => t?.unlockedPowerups?.[e] != null,
                                )
                              ? n && !r
                                  ? y.q.GAME_SERVER_HOSTING
                                  : Array.from(y.r9[y.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                          (e) => t?.unlockedPowerups?.[e] != null,
                                      )
                                    ? 0
                                    : y.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE
                              : y.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    }, [t, n, r])),
                [O, L] = (0, I.FC)(null != t && !f, R),
                M = O === a.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                D = (0, C.A)(e),
                [U, G] = (0, I.ww)(null != t && !f && !M && null != D, e),
                P = U === a.M.BOOST_TO_UNLOCK_COACHMARK,
                k = (0, N.A)(e),
                [w, B] = (0, I.W2)(null != t && !f && !M && !P && null != k, e),
                V = w === a.M.EXPIRING_POWERUP_COACHMARK,
                H = (0, h.TS)(e, "useGuildPowerupsChannelListPopout"),
                F = (0, m.J)("useGuildPowerupsChannelListPopout"),
                [K, W] = (0, I.rd)(null != t && H && F),
                Y = K === a.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK,
                z = (0, _.S)(e, "useGuildPowerupsChannelListPopout"),
                [q, X] = (0, I.vn)(null != t && !S && H && z),
                J = q === a.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                Q = i.useMemo(() => {
                    if (null == t || f || M || Y || J || P || V) return;
                    let n = (function (e, t) {
                        let n = u.fi.find((e) => {
                            let n = y.a8[e],
                                i = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != i && i.user_id !== y.mB;
                        });
                        if (null == n) return;
                        let i = y.On[n];
                        if (null == i || (0, o.zs)(i, e)) return;
                        let l = y.a8[n],
                            s = null != l ? t.allPowerups[l] : void 0;
                        if (null != s)
                            return {
                                type: x.o.LEVEL_REACHED,
                                powerup: s,
                                markAsDismissed: (t) => {
                                    (0, o._$)(i, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let i = (function (e, t, n) {
                        let i = c.A.getGuild(e)?.premiumTier ?? v.TVA.NONE,
                            l = Array.from(y.oN.values())
                                .flatMap((l) =>
                                    l.length <= 0 ||
                                    l.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = y.wr[e];
                                        return null != n && !!(i >= n);
                                    })
                                        ? []
                                        : l.map((i) => {
                                              let l = t.allPowerups[i];
                                              return null == l ||
                                                  n < l.cost ||
                                                  !l.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, T.t)(e, l, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : l;
                                          }),
                                )
                                .filter(d.Vq);
                        if (0 !== l.length) {
                            if (1 === l.length && !(0, o.zs)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: x.o.PERKS_PURCHASABLE,
                                    powerups: l,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (l.length > 1 && !(0, o.zs)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: x.o.PERKS_PURCHASABLE,
                                    powerups: l,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, E);
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
                                type: x.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, o._$)(a.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, S, E, j);
                    if (null != l) return l;
                }, [e, t, f, M, Y, J, P, V, E, S, j]),
                [$, Z] = (0, I.ru)(null != Q);
            return i.useMemo(() => {
                if (null != t) {
                    if (f) return { type: x.o.PERKS_AVAILABLE, markAsDismissed: p };
                    if (M) {
                        if (R === y.q.GAME_SERVER_HOSTING)
                            return { type: x.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: L };
                        let e = y.r9[R],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: x.o.NEW_PERK_AVAILABLE, markAsDismissed: L };
                    }
                    if (P && null != D) return { type: x.o.BOOST_TO_UNLOCK, powerup: D, markAsDismissed: G };
                    if (V && null != k)
                        return { type: x.o.EXPIRING_PERK, featuredExpiringPowerup: k, markAsDismissed: B };
                    if (Y) return { type: x.o.GAME_SERVER_NEW_GAMES, markAsDismissed: W };
                    if (J) return { type: x.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: X };
                    if ($ === a.M.GUILD_POWERUP_NOTIFICATION && null != Q)
                        return {
                            ...Q,
                            markAsDismissed: (e) => {
                                Z(e), Q.markAsDismissed(e);
                            },
                        };
                }
            }, [t, f, p, Q, $, Z, M, L, R, P, D, G, V, k, B, Y, W, J, X]);
        })(e, n ?? void 0);
    if (null !== n && (null != g || j || null != R)) return { indicator: g, showUnread: j, popout: R };
}
function O(e) {
    let t = (0, s.bG)([f.A], () => f.A.getStateForGuild(e)),
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
                    let i = y.a8[n];
                    if (null == i || null == t.unlockedPowerups[i]) return;
                    let l = y.On[n];
                    null != l && (0, o._$)(l, e, !1, j.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
