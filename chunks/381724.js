n.d(t, { Pq: () => y, Ay: () => F });
var l = n(64700),
    u = n(512750),
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
    f = n(645619),
    c = n(904629);
let O = {};
class C extends P.Ay.PersistedStore {
    static displayName = "GuildPowerupsNotificationStore";
    static persistKey = "GuildPowerupsNotificationStore";
    static migrations = [
        (e) => (
            Object.entries(e).forEach((t) => {
                let [n, l] = t;
                e[n] = l;
            }),
            e
        ),
    ];
    getState() {
        return O;
    }
    initialize(e) {
        this.waitFor(d.A, f.A, A.A), null != e && (O = e);
    }
    getNotificationStateForGuild(e) {
        return O[e];
    }
}
let p = new C(I.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        let { guildId: t } = e,
            n = A.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            l = f.A.getStateForGuild(t),
            u = d.A.getStateForGuild(t),
            r = (0, c.k)([...Object.values(l?.unlockedPowerups ?? {}), ...Object.values(u?.entitlements ?? {})]);
        O = {
            ...O,
            [t]: {
                lastSeenWarningNotification: new Date(r[r.length - 1]?.ends_at ?? Date.now()).getTime(),
                lastBoostCount: n,
            },
        };
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        O = {};
    },
});
var L = n(379229),
    m = n(383272),
    M = n(414133),
    N = n(229548),
    D = n(139032),
    U = n(531260),
    w = n(287809),
    k = n(178368),
    g = n(202541),
    T = n(128313),
    h = n(786173),
    V = n(294384),
    K = n(639060),
    b = n(864310),
    H = n(482487),
    v = n(568065),
    W = n(652215),
    B = n(49999);
function F(e) {
    var t;
    let n,
        S,
        I,
        O,
        C,
        H = (0, r.bG)([p], () => p.getNotificationStateForGuild(e), [e]),
        B = (0, r.bG)([f.A], () => f.A.getStateForGuild(e)),
        { indicator: F, showUnread: y } =
            ((t = B ?? void 0),
            (n = (0, b.A)(e).available),
            (S = (0, K.A)(e, "useGuildPowerupsNotificationIndicator")),
            (I = (0, o.cN)(null != S ? S.dismissibleContent : null, e)),
            (O = null != S && !I),
            (C = (0, r.bG)([d.A], () => d.A.getStateForGuild(e))),
            l.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    l = (0, c.k)([...Object.values(e), ...Object.values(C?.entitlements ?? {})]),
                    u = H?.lastSeenWarningNotification ?? Date.now(),
                    r = new Date(l[l.length - 1]?.ends_at).getTime(),
                    i = H?.lastBoostCount ?? 0,
                    o = l.length > 0 && u < r,
                    s = n - i;
                return o || O
                    ? { indicator: { type: L.cD.WARNING }, showUnread: !0 }
                    : n !== i && s > 0
                      ? { indicator: { type: L.cD.UNREAD, count: s }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [n, H?.lastBoostCount, H?.lastSeenWarningNotification, t, O, C?.entitlements])),
        j = (function (e, t) {
            let [n, o] = (0, N.ty)(null != t),
                S = n === i.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: I } = (0, b.A)(e),
                f = (0, r.bG)([A.A], () => A.A.getGuild(e)?.features.has(W.GuildFeatures.GAME_SERVERS) ?? !1),
                c = (0, r.bG)([d.A], () => d.A.getLowestGameCostForGuild(e)),
                O = (0, m.DD)(e, "useGuildPowerupsChannelListPopout"),
                C = (0, M.OS)("useGuildPowerupsChannelListPopout"),
                p = O && C,
                K = (0, h.A)(e, t),
                [H, B] = (0, N.FC)(null != t && !S, K),
                F = H === i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                y = (0, D.A)(e),
                j = (function () {
                    let { fractionalState: e } = (0, U.A)(),
                        t = (0, P.bG)([w.default], () => w.default.getCurrentUser()?.isPremiumGroupMember() === !0);
                    return (
                        (0, P.bG)([k.A], () => Object.values(k.A.boostSlots).some((e) => e.isAvailable())) ||
                        (e === g.xc.NONE && !t)
                    );
                })(),
                [z, Q] = (0, N.ww)(null != t && !S && !F && null != y && j, e),
                x = z === i.M.BOOST_TO_UNLOCK_COACHMARK,
                Y = (0, T.A)(e),
                [$, X] = (0, N.W2)(null != t && !S && !F && !x && null != Y, e),
                J = $ === i.M.EXPIRING_POWERUP_COACHMARK,
                q = (0, a.TS)(e, "useGuildPowerupsChannelListPopout"),
                Z = (0, R.J)("useGuildPowerupsChannelListPopout"),
                [ee, et] = (0, N.vB)(null != t && q && Z),
                en = ee === i.M.GAME_SERVER_NEW_GAMES_COACHMARK,
                el = (0, G.S)(e, "useGuildPowerupsChannelListPopout"),
                [eu, er] = (0, N.vn)(null != t && !f && q && el),
                ei = eu === i.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                eo = l.useMemo(() => {
                    if (null == t || S || F || en || ei || x || J) return;
                    let n = (function (e, t) {
                        let n = E.fi.find((e) => {
                            let n = v.a8[e],
                                l = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != l && l.user_id !== v.mB;
                        });
                        if (null == n) return;
                        let l = v.On[n];
                        if (null == l || (0, s.zs)(l, e)) return;
                        let u = v.a8[n],
                            r = null != u ? t.allPowerups[u] : void 0;
                        if (null != r)
                            return {
                                type: L.o.LEVEL_REACHED,
                                powerup: r,
                                markAsDismissed: (t) => {
                                    (0, s._$)(l, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let l = (function (e, t, n, l) {
                        let r = A.A.getGuild(e)?.premiumTier ?? W.TVA.NONE,
                            o = Array.from(v.oN.values())
                                .flatMap((i) =>
                                    i.length <= 0 ||
                                    i.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = v.wr[e];
                                        return null != n && !!(r >= n);
                                    })
                                        ? []
                                        : i.map((r) => {
                                              if (r === u.d0 && !l) return null;
                                              let i = t.allPowerups[r];
                                              return null == i ||
                                                  n < i.cost ||
                                                  !i.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, V.t)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
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
                    })(e, t, I, p);
                    if (null != l) return l;
                    let r = (function (e, t, n, l) {
                        if (
                            (0, a.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != l &&
                            n >= l &&
                            !(0, s.zs)(i.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: L.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, s._$)(i.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, f, I, c);
                    if (null != r) return r;
                }, [e, t, S, F, en, ei, x, J, I, f, c, p]),
                [es, eA] = (0, N.ru)(null != eo);
            return l.useMemo(() => {
                if (null != t) {
                    if (S) return { type: L.o.PERKS_AVAILABLE, markAsDismissed: o };
                    if (F) {
                        if (K === v.QS.GAME_SERVER_HOSTING)
                            return { type: L.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: B };
                        let e = v.Q0[K],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: L.o.NEW_PERK_AVAILABLE, markAsDismissed: B };
                    }
                    if (x && null != y) return { type: L.o.BOOST_TO_UNLOCK, powerup: y, markAsDismissed: Q };
                    if (J && null != Y)
                        return { type: L.o.EXPIRING_PERK, featuredExpiringPowerup: Y, markAsDismissed: X };
                    if (en) return { type: L.o.GAME_SERVER_NEW_GAMES, markAsDismissed: et };
                    if (ei) return { type: L.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: er };
                    if (es === i.M.GUILD_POWERUP_NOTIFICATION && null != eo)
                        return {
                            ...eo,
                            markAsDismissed: (e) => {
                                eA(e), eo.markAsDismissed(e);
                            },
                        };
                }
            }, [t, S, o, eo, es, eA, F, B, K, x, y, Q, J, Y, X, en, et, ei, er]);
        })(e, B ?? void 0);
    if (null !== B && (null != F || y || null != j)) return { indicator: F, showUnread: y, popout: j };
}
function y(e) {
    let t = (0, r.bG)([f.A], () => f.A.getStateForGuild(e)),
        n = F(e);
    (0, H.m)(e),
        l.useEffect(() => {
            (0, S.Zm)(e);
        }, [e]),
        l.useEffect(() => {
            let e = new Set([L.o.BOOST_TO_UNLOCK, L.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(B.i.AUTO_DISMISS);
        }, [n]),
        l.useEffect(() => {
            null != t &&
                E.fi.forEach((n) => {
                    let l = v.a8[n];
                    if (null == l || null == t.unlockedPowerups[l]) return;
                    let u = v.On[n];
                    null != u && (0, s._$)(u, e, !1, B.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
