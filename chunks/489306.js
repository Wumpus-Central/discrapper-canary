n.d(t, { Ay: () => R, Pq: () => L });
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
    _ = n(764322),
    m = n(969983),
    g = n(942975),
    p = n(904560),
    f = n(645619),
    E = n(379229),
    x = n(904629),
    I = n(229548),
    C = n(139032),
    b = n(52260),
    N = n(294384),
    S = n(639060),
    v = n(864310),
    T = n(568065),
    y = n(652215),
    j = n(49999);
function R(e) {
    let t = (0, s.bG)([p.A], () => p.A.getNotificationStateForGuild(e), [e]),
        n = (0, s.bG)([f.A], () => f.A.getStateForGuild(e)),
        { indicator: g, showUnread: j } = (function (e, t, n) {
            let l = (0, v.A)(e).available,
                { shouldShow: o } = (0, S.A)(e, "useGuildPowerupsNotificationIndicator"),
                d = (0, r.cN)(a.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                c = o && !d,
                u = (0, s.bG)([A.A], () => A.A.getStateForGuild(e));
            return i.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    i = (0, x.k)([...Object.values(e), ...Object.values(u?.entitlements ?? {})]),
                    s = n?.lastSeenWarningNotification ?? Date.now(),
                    a = new Date(i[i.length - 1]?.ends_at).getTime(),
                    r = n?.lastBoostCount ?? 0,
                    o = i.length > 0 && s < a,
                    d = l - r;
                return o || c
                    ? { indicator: { type: E.cD.WARNING }, showUnread: !0 }
                    : l !== r && d > 0
                      ? { indicator: { type: E.cD.UNREAD, count: d }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [l, n?.lastBoostCount, n?.lastSeenWarningNotification, t, c, u?.entitlements]);
        })(e, n ?? void 0, t),
        R = (function (e, t) {
            let n,
                r,
                [g, p] = (0, I.ty)(null != t),
                f = g === a.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: x } = (0, v.A)(e),
                S = (0, s.bG)([d.A], () => d.A.getGuild(e)?.features.has(y.GuildFeatures.GAME_SERVERS) ?? !1),
                j = (0, s.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                R =
                    ((n = (0, h.C$)(e, "GuildPowerupsChannelRow")),
                    (r = (0, s.bG)([d.A], () => d.A.getGuild(e)?.features.has(y.GuildFeatures.GAME_SERVERS))),
                    i.useMemo(() => {
                        let e = t?.allPowerups?.[l.zY] != null,
                            i = t?.unlockedPowerups?.[l.zY] != null;
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
                [L, O] = (0, I.FC)(null != t && !f, R),
                G = L === a.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                M = (0, C.A)(e),
                [D, U] = (0, I.ww)(null != t && !f && !G && null != M, e),
                P = D === a.M.BOOST_TO_UNLOCK_COACHMARK,
                w = (0, b.A)(e),
                [k, V] = (0, I.W2)(null != t && !f && !G && !P && null != w, e),
                B = k === a.M.EXPIRING_POWERUP_COACHMARK,
                H = (0, h.TS)(e, "useGuildPowerupsChannelListPopout"),
                F = (0, m.J)("useGuildPowerupsChannelListPopout"),
                [W, Y] = (0, I.rd)(null != t && H && F),
                K = W === a.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK,
                z = (0, _.S)(e, "useGuildPowerupsChannelListPopout"),
                [q, X] = (0, I.vn)(null != t && !S && H && z),
                Q = q === a.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                Z = i.useMemo(() => {
                    if (null == t || f || G || K || Q || P || B) return;
                    let n = (function (e, t) {
                        let n = u.fi.find((e) => {
                            let n = T.a8[e],
                                i = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != i && i.user_id !== T.mB;
                        });
                        if (null == n) return;
                        let i = T.On[n];
                        if (null == i || (0, o.zs)(i, e)) return;
                        let l = T.a8[n],
                            s = null != l ? t.allPowerups[l] : void 0;
                        if (null != s)
                            return {
                                type: E.o.LEVEL_REACHED,
                                powerup: s,
                                markAsDismissed: (t) => {
                                    (0, o._$)(i, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let i = (function (e, t, n) {
                        let i = d.A.getGuild(e)?.premiumTier ?? y.TVA.NONE,
                            l = Array.from(T.oN.values())
                                .flatMap((l) =>
                                    l.length <= 0 ||
                                    l.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = T.wr[e];
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
                                    type: E.o.PERKS_PURCHASABLE,
                                    powerups: l,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (l.length > 1 && !(0, o.zs)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: E.o.PERKS_PURCHASABLE,
                                    powerups: l,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, x);
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
                                type: E.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, o._$)(a.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, S, x, j);
                    if (null != l) return l;
                }, [e, t, f, G, K, Q, P, B, x, S, j]),
                [J, $] = (0, I.ru)(null != Z);
            return i.useMemo(() => {
                if (null != t) {
                    if (f) return { type: E.o.PERKS_AVAILABLE, markAsDismissed: p };
                    if (G) {
                        if (R === T.q.GAME_SERVER_HOSTING)
                            return { type: E.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: O };
                        let e = T.r9[R],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: E.o.NEW_PERK_AVAILABLE, markAsDismissed: O };
                    }
                    if (P && null != M) return { type: E.o.BOOST_TO_UNLOCK, powerup: M, markAsDismissed: U };
                    if (B && null != w)
                        return { type: E.o.EXPIRING_PERK, featuredExpiringPowerup: w, markAsDismissed: V };
                    if (K) return { type: E.o.GAME_SERVER_NEW_GAMES, markAsDismissed: Y };
                    if (Q) return { type: E.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: X };
                    if (J === a.M.GUILD_POWERUP_NOTIFICATION && null != Z)
                        return {
                            ...Z,
                            markAsDismissed: (e) => {
                                $(e), Z.markAsDismissed(e);
                            },
                        };
                }
            }, [t, f, p, Z, J, $, G, O, R, P, M, U, B, w, V, K, Y, Q, X]);
        })(e, n ?? void 0);
    if (null !== n && (null != g || j || null != R)) return { indicator: g, showUnread: j, popout: R };
}
function L(e) {
    let t = (0, s.bG)([f.A], () => f.A.getStateForGuild(e)),
        n = R(e);
    i.useEffect(() => {
        (0, g.Zm)(e);
    }, [e]),
        i.useEffect(() => {
            let e = new Set([E.o.BOOST_TO_UNLOCK, E.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(j.i.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                u.fi.forEach((n) => {
                    let i = T.a8[n];
                    if (null == i || null == t.unlockedPowerups[i]) return;
                    let l = T.On[n];
                    null != l && (0, o._$)(l, e, !1, j.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
