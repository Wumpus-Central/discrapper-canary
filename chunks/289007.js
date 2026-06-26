n.d(t, { Pq: () => H, Ay: () => g });
var l = n(64700),
    u = n(512750),
    r = n(702841),
    i = n(554146),
    o = n(367727),
    s = n(45780),
    _ = n(71393),
    A = n(403362),
    E = n(473145),
    a = n(488803),
    d = n(522055),
    G = n(764322),
    R = n(661881),
    P = n(868652),
    I = n(17928),
    S = n(228366),
    C = n(645619),
    O = n(904629);
let f = {};
class c extends I.Ay.PersistedStore {
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
        return f;
    }
    initialize(e) {
        this.waitFor(d.A, C.A, _.A), null != e && (f = e);
    }
    getNotificationStateForGuild(e) {
        return f[e];
    }
}
let p = new c(S.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        let { guildId: t } = e,
            n = _.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            l = C.A.getStateForGuild(t),
            u = d.A.getStateForGuild(t),
            r = (0, O.k)([...Object.values(l?.unlockedPowerups ?? {}), ...Object.values(u?.entitlements ?? {})]);
        f = {
            ...f,
            [t]: {
                lastSeenWarningNotification: new Date(r[r.length - 1]?.ends_at ?? Date.now()).getTime(),
                lastBoostCount: n,
            },
        };
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        f = {};
    },
});
var L = n(379229),
    m = n(383272),
    N = n(414133),
    M = n(229548),
    D = n(139032),
    U = n(52260),
    w = n(294384),
    T = n(639060),
    h = n(864310),
    k = n(568065),
    V = n(652215),
    K = n(49999);
function g(e) {
    var t;
    let n,
        P,
        I,
        S,
        f,
        c = (0, r.bG)([p], () => p.getNotificationStateForGuild(e), [e]),
        K = (0, r.bG)([C.A], () => C.A.getStateForGuild(e)),
        { indicator: g, showUnread: H } =
            ((t = K ?? void 0),
            (n = (0, h.A)(e).available),
            (P = (0, T.A)(e, "useGuildPowerupsNotificationIndicator")),
            (I = (0, o.cN)(null != P ? P.dismissibleContent : null, e)),
            (S = null != P && !I),
            (f = (0, r.bG)([d.A], () => d.A.getStateForGuild(e))),
            l.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    l = (0, O.k)([...Object.values(e), ...Object.values(f?.entitlements ?? {})]),
                    u = c?.lastSeenWarningNotification ?? Date.now(),
                    r = new Date(l[l.length - 1]?.ends_at).getTime(),
                    i = c?.lastBoostCount ?? 0,
                    o = l.length > 0 && u < r,
                    s = n - i;
                return o || S
                    ? { indicator: { type: L.cD.WARNING }, showUnread: !0 }
                    : n !== i && s > 0
                      ? { indicator: { type: L.cD.UNREAD, count: s }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [n, c?.lastBoostCount, c?.lastSeenWarningNotification, t, S, f?.entitlements])),
        b = (function (e, t) {
            let n,
                o,
                P,
                I,
                S,
                [C, O] = (0, M.ty)(null != t),
                f = C === i.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: c } = (0, h.A)(e),
                p = (0, r.bG)([_.A], () => _.A.getGuild(e)?.features.has(V.GuildFeatures.GAME_SERVERS) ?? !1),
                T = (0, r.bG)([d.A], () => d.A.getLowestGameCostForGuild(e)),
                K = (0, m.DD)(e, "useGuildPowerupsChannelListPopout"),
                g = (0, N.OS)("useGuildPowerupsChannelListPopout"),
                H = K && g,
                b =
                    ((n = (0, a.C$)(e, "GuildPowerupsChannelRow")),
                    (o = (0, r.bG)([_.A], () => _.A.getGuild(e)?.features.has(V.GuildFeatures.GAME_SERVERS))),
                    (P = (0, m.DD)(e, "useGuildPowerupNewPerkAvailableCoachmarkVersion")),
                    (I = (0, N.OS)("useGuildPowerupNewPerkAvailableCoachmarkVersion")),
                    (S = P && I),
                    l.useMemo(() => {
                        let e = t?.allPowerups?.[u.d0] != null,
                            l = t?.unlockedPowerups?.[u.d0] != null;
                        if (S && e && !l) return k.q.GUILD_THEME;
                        let r = t?.allPowerups?.[u.zY] != null,
                            i = t?.unlockedPowerups?.[u.zY] != null;
                        return r && !i
                            ? k.q.FILE_UPLOAD_250_MB
                            : Array.from(k.r9[k.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                    (e) => t?.unlockedPowerups?.[e] != null,
                                )
                              ? n && !o
                                  ? k.q.GAME_SERVER_HOSTING
                                  : Array.from(k.r9[k.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                          (e) => t?.unlockedPowerups?.[e] != null,
                                      )
                                    ? 0
                                    : k.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE
                              : k.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    }, [t, n, o, S])),
                [W, B] = (0, M.FC)(null != t && !f, b),
                v = W === i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                F = (0, D.A)(e),
                [y, z] = (0, M.ww)(null != t && !f && !v && null != F, e),
                j = y === i.M.BOOST_TO_UNLOCK_COACHMARK,
                q = (0, U.A)(e),
                [x, Y] = (0, M.W2)(null != t && !f && !v && !j && null != q, e),
                X = x === i.M.EXPIRING_POWERUP_COACHMARK,
                $ = (0, a.TS)(e, "useGuildPowerupsChannelListPopout"),
                J = (0, R.J)("useGuildPowerupsChannelListPopout"),
                [Z, Q] = (0, M.vB)(null != t && $ && J),
                ee = Z === i.M.GAME_SERVER_NEW_GAMES_COACHMARK,
                et = (0, G.S)(e, "useGuildPowerupsChannelListPopout"),
                [en, el] = (0, M.vn)(null != t && !p && $ && et),
                eu = en === i.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                er = l.useMemo(() => {
                    if (null == t || f || v || ee || eu || j || X) return;
                    let n = (function (e, t) {
                        let n = E.fi.find((e) => {
                            let n = k.a8[e],
                                l = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != l && l.user_id !== k.mB;
                        });
                        if (null == n) return;
                        let l = k.On[n];
                        if (null == l || (0, s.zs)(l, e)) return;
                        let u = k.a8[n],
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
                        let r = _.A.getGuild(e)?.premiumTier ?? V.TVA.NONE,
                            o = Array.from(k.oN.values())
                                .flatMap((i) =>
                                    i.length <= 0 ||
                                    i.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = k.wr[e];
                                        return null != n && !!(r >= n);
                                    })
                                        ? []
                                        : i.map((r) => {
                                              if (r === u.d0 && !l) return null;
                                              let i = t.allPowerups[r];
                                              return null == i ||
                                                  n < i.cost ||
                                                  !i.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, w.t)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : i;
                                          }),
                                )
                                .filter(A.Vq);
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
                    })(e, t, c, H);
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
                    })(e, p, c, T);
                    if (null != r) return r;
                }, [e, t, f, v, ee, eu, j, X, c, p, T, H]),
                [ei, eo] = (0, M.ru)(null != er);
            return l.useMemo(() => {
                if (null != t) {
                    if (f) return { type: L.o.PERKS_AVAILABLE, markAsDismissed: O };
                    if (v) {
                        if (b === k.q.GAME_SERVER_HOSTING)
                            return { type: L.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: B };
                        let e = k.r9[b],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: L.o.NEW_PERK_AVAILABLE, markAsDismissed: B };
                    }
                    if (j && null != F) return { type: L.o.BOOST_TO_UNLOCK, powerup: F, markAsDismissed: z };
                    if (X && null != q)
                        return { type: L.o.EXPIRING_PERK, featuredExpiringPowerup: q, markAsDismissed: Y };
                    if (ee) return { type: L.o.GAME_SERVER_NEW_GAMES, markAsDismissed: Q };
                    if (eu) return { type: L.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: el };
                    if (ei === i.M.GUILD_POWERUP_NOTIFICATION && null != er)
                        return {
                            ...er,
                            markAsDismissed: (e) => {
                                eo(e), er.markAsDismissed(e);
                            },
                        };
                }
            }, [t, f, O, er, ei, eo, v, B, b, j, F, z, X, q, Y, ee, Q, eu, el]);
        })(e, K ?? void 0);
    if (null !== K && (null != g || H || null != b)) return { indicator: g, showUnread: H, popout: b };
}
function H(e) {
    let t = (0, r.bG)([C.A], () => C.A.getStateForGuild(e)),
        n = g(e);
    l.useEffect(() => {
        (0, P.Zm)(e);
    }, [e]),
        l.useEffect(() => {
            let e = new Set([L.o.BOOST_TO_UNLOCK, L.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(K.i.AUTO_DISMISS);
        }, [n]),
        l.useEffect(() => {
            null != t &&
                E.fi.forEach((n) => {
                    let l = k.a8[n];
                    if (null == l || null == t.unlockedPowerups[l]) return;
                    let u = k.On[n];
                    null != u && (0, s._$)(u, e, !1, K.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
