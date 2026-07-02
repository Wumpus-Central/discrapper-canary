n.d(t, { Pq: () => B, Ay: () => W });
var u = n(64700),
    l = n(512750),
    r = n(702841),
    i = n(554146),
    o = n(367727),
    s = n(45780),
    A = n(71393),
    _ = n(403362),
    E = n(473145),
    a = n(488803),
    d = n(522055),
    G = n(764322),
    R = n(661881),
    S = n(868652),
    P = n(17928),
    I = n(228366),
    O = n(645619),
    f = n(904629);
let C = {};
class c extends P.Ay.PersistedStore {
    static displayName = "GuildPowerupsNotificationStore";
    static persistKey = "GuildPowerupsNotificationStore";
    static migrations = [
        (e) => (
            Object.entries(e).forEach((t) => {
                let [n, u] = t;
                e[n] = u;
            }),
            e
        ),
    ];
    getState() {
        return C;
    }
    initialize(e) {
        this.waitFor(d.A, O.A, A.A), null != e && (C = e);
    }
    getNotificationStateForGuild(e) {
        return C[e];
    }
}
let p = new c(I.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        let { guildId: t } = e,
            n = A.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            u = O.A.getStateForGuild(t),
            l = d.A.getStateForGuild(t),
            r = (0, f.k)([...Object.values(u?.unlockedPowerups ?? {}), ...Object.values(l?.entitlements ?? {})]);
        C = {
            ...C,
            [t]: {
                lastSeenWarningNotification: new Date(r[r.length - 1]?.ends_at ?? Date.now()).getTime(),
                lastBoostCount: n,
            },
        };
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        C = {};
    },
});
var L = n(379229),
    M = n(383272),
    m = n(414133),
    N = n(229548),
    D = n(139032),
    U = n(52260),
    w = n(786173),
    T = n(294384),
    k = n(639060),
    g = n(864310),
    h = n(482487),
    V = n(568065),
    K = n(652215),
    H = n(49999);
function W(e) {
    var t;
    let n,
        S,
        P,
        I,
        C,
        c = (0, r.bG)([p], () => p.getNotificationStateForGuild(e), [e]),
        h = (0, r.bG)([O.A], () => O.A.getStateForGuild(e)),
        { indicator: H, showUnread: W } =
            ((t = h ?? void 0),
            (n = (0, g.A)(e).available),
            (S = (0, k.A)(e, "useGuildPowerupsNotificationIndicator")),
            (P = (0, o.cN)(null != S ? S.dismissibleContent : null, e)),
            (I = null != S && !P),
            (C = (0, r.bG)([d.A], () => d.A.getStateForGuild(e))),
            u.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    u = (0, f.k)([...Object.values(e), ...Object.values(C?.entitlements ?? {})]),
                    l = c?.lastSeenWarningNotification ?? Date.now(),
                    r = new Date(u[u.length - 1]?.ends_at).getTime(),
                    i = c?.lastBoostCount ?? 0,
                    o = u.length > 0 && l < r,
                    s = n - i;
                return o || I
                    ? { indicator: { type: L.cD.WARNING }, showUnread: !0 }
                    : n !== i && s > 0
                      ? { indicator: { type: L.cD.UNREAD, count: s }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [n, c?.lastBoostCount, c?.lastSeenWarningNotification, t, I, C?.entitlements])),
        B = (function (e, t) {
            let [n, o] = (0, N.ty)(null != t),
                S = n === i.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: P } = (0, g.A)(e),
                I = (0, r.bG)([A.A], () => A.A.getGuild(e)?.features.has(K.GuildFeatures.GAME_SERVERS) ?? !1),
                O = (0, r.bG)([d.A], () => d.A.getLowestGameCostForGuild(e)),
                f = (0, M.DD)(e, "useGuildPowerupsChannelListPopout"),
                C = (0, m.OS)("useGuildPowerupsChannelListPopout"),
                c = f && C,
                p = (0, w.A)(e, t),
                [k, h] = (0, N.FC)(null != t && !S, p),
                H = k === i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                W = (0, D.A)(e),
                [B, b] = (0, N.ww)(null != t && !S && !H && null != W, e),
                v = B === i.M.BOOST_TO_UNLOCK_COACHMARK,
                F = (0, U.A)(e),
                [y, z] = (0, N.W2)(null != t && !S && !H && !v && null != F, e),
                Q = y === i.M.EXPIRING_POWERUP_COACHMARK,
                j = (0, a.TS)(e, "useGuildPowerupsChannelListPopout"),
                x = (0, R.J)("useGuildPowerupsChannelListPopout"),
                [Y, $] = (0, N.vB)(null != t && j && x),
                X = Y === i.M.GAME_SERVER_NEW_GAMES_COACHMARK,
                J = (0, G.S)(e, "useGuildPowerupsChannelListPopout"),
                [q, Z] = (0, N.vn)(null != t && !I && j && J),
                ee = q === i.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                et = u.useMemo(() => {
                    if (null == t || S || H || X || ee || v || Q) return;
                    let n = (function (e, t) {
                        let n = E.fi.find((e) => {
                            let n = V.a8[e],
                                u = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != u && u.user_id !== V.mB;
                        });
                        if (null == n) return;
                        let u = V.On[n];
                        if (null == u || (0, s.zs)(u, e)) return;
                        let l = V.a8[n],
                            r = null != l ? t.allPowerups[l] : void 0;
                        if (null != r)
                            return {
                                type: L.o.LEVEL_REACHED,
                                powerup: r,
                                markAsDismissed: (t) => {
                                    (0, s._$)(u, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let u = (function (e, t, n, u) {
                        let r = A.A.getGuild(e)?.premiumTier ?? K.TVA.NONE,
                            o = Array.from(V.oN.values())
                                .flatMap((i) =>
                                    i.length <= 0 ||
                                    i.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = V.wr[e];
                                        return null != n && !!(r >= n);
                                    })
                                        ? []
                                        : i.map((r) => {
                                              if (r === l.d0 && !u) return null;
                                              let i = t.allPowerups[r];
                                              return null == i ||
                                                  n < i.cost ||
                                                  !i.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, T.t)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : i;
                                          }),
                                )
                                .filter(_.Vq);
                        if (0 !== o.length) {
                            if (1 === o.length && !(0, s.zs)(i.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: L.o.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, s._$)(i.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (o.length > 1 && !(0, s.zs)(i.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: L.o.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, s._$)(i.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, P, c);
                    if (null != u) return u;
                    let r = (function (e, t, n, u) {
                        if (
                            (0, a.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != u &&
                            n >= u &&
                            !(0, s.zs)(i.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: L.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, s._$)(i.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, I, P, O);
                    if (null != r) return r;
                }, [e, t, S, H, X, ee, v, Q, P, I, O, c]),
                [en, eu] = (0, N.ru)(null != et);
            return u.useMemo(() => {
                if (null != t) {
                    if (S) return { type: L.o.PERKS_AVAILABLE, markAsDismissed: o };
                    if (H) {
                        if (p === V.QS.GAME_SERVER_HOSTING)
                            return { type: L.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: h };
                        let e = V.Q0[p],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: L.o.NEW_PERK_AVAILABLE, markAsDismissed: h };
                    }
                    if (v && null != W) return { type: L.o.BOOST_TO_UNLOCK, powerup: W, markAsDismissed: b };
                    if (Q && null != F)
                        return { type: L.o.EXPIRING_PERK, featuredExpiringPowerup: F, markAsDismissed: z };
                    if (X) return { type: L.o.GAME_SERVER_NEW_GAMES, markAsDismissed: $ };
                    if (ee) return { type: L.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: Z };
                    if (en === i.M.GUILD_POWERUP_NOTIFICATION && null != et)
                        return {
                            ...et,
                            markAsDismissed: (e) => {
                                eu(e), et.markAsDismissed(e);
                            },
                        };
                }
            }, [t, S, o, et, en, eu, H, h, p, v, W, b, Q, F, z, X, $, ee, Z]);
        })(e, h ?? void 0);
    if (null !== h && (null != H || W || null != B)) return { indicator: H, showUnread: W, popout: B };
}
function B(e) {
    let t = (0, r.bG)([O.A], () => O.A.getStateForGuild(e)),
        n = W(e);
    (0, h.m)(e),
        u.useEffect(() => {
            (0, S.Zm)(e);
        }, [e]),
        u.useEffect(() => {
            let e = new Set([L.o.BOOST_TO_UNLOCK, L.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(H.i.AUTO_DISMISS);
        }, [n]),
        u.useEffect(() => {
            null != t &&
                E.fi.forEach((n) => {
                    let u = V.a8[n];
                    if (null == u || null == t.unlockedPowerups[u]) return;
                    let l = V.On[n];
                    null != l && (0, s._$)(l, e, !1, H.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
