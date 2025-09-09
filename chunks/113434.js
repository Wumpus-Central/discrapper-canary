n.d(t, {
    B4: () => ex,
    B6: () => ec,
    Bd: () => eR,
    GI: () => eI,
    Gd: () => ek,
    I: () => eN,
    J2: () => B,
    Jf: () => em,
    KX: () => eS,
    OH: () => eA,
    Qy: () => eU,
    Rf: () => eh,
    Yj: () => el,
    _Q: () => eC,
    _s: () => eT,
    bA: () => ei,
    e5: () => er,
    eN: () => ea,
    eQ: () => ej,
    fN: () => ey,
    iO: () => eb,
    kJ: () => eO,
    me: () => ew,
    qI: () => eL,
    qb: () => eD,
    t5: () => eE,
    tP: () => es,
    uA: () => eg,
    vf: () => eM,
    z: () => e_,
    z6: () => ev,
    zB: () => eG,
}),
    n(388685),
    n(642613),
    n(290780),
    n(539854),
    n(953529),
    n(314940);
var r = n(647438);
n(512722);
var i = n(392711),
    a = n(278074),
    o = n(754700),
    s = n(959078),
    l = n(780384),
    c = n(442837),
    u = n(410030),
    d = n(317381),
    f = n(197386),
    _ = n(15624);
n(583434);
var p = n(703656),
    h = n(706454),
    m = n(553795),
    g = n(594174),
    E = n(70956),
    b = n(63063),
    y = n(930153),
    O = n(358085),
    v = n(74538),
    I = n(617136),
    T = n(915750),
    S = n(509212),
    A = n(272008),
    C = n(569984),
    N = n(497505),
    R = n(937797),
    P = n(977156),
    w = n(373370),
    D = n(475595),
    x = n(566078),
    L = n(46140),
    j = n(981631),
    M = n(474936),
    k = n(388032);
let U = -1,
    G = 1;
function B() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      fetchPolicy: "cache-only",
                      callerSource: "unknown",
                  },
        [t, n] = r.useState(!1),
        i = (0, c.Wu)([C.Z], () => [...C.Z.quests.values()]),
        a = (0, c.Wu)([C.Z], () => [...C.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: s } = (0, c.cj)([C.Z], () => ({
            isFetchingCurrentQuests: C.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: C.Z.lastFetchedCurrentQuests,
        })),
        l = (0, P.c)({ location: L.dr.USE_QUESTS }),
        u = R.DL.useConfig({ location: L.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !o
            ) {
                if ((n(!0), (0, A.xw)(), !u.enabled || "focused" === _.Z.getState()))
                    (0, A.w)(N.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource));
            }
        }, [e.fetchPolicy, l, t, o, s, e.callerSource, u.enabled]),
        {
            quests: i,
            excludedQuests: a,
            isFetchingCurrentQuests: o,
            hasFetched: t,
        }
    );
}
function Z(e, t) {
    var n, r, i, a;
    let o = !(0, S.zi)(e),
        s = (null == (n = e.userStatus) ? void 0 : n.claimedAt) != null,
        l = (null == (r = t.userStatus) ? void 0 : r.claimedAt) != null,
        c = (null == (i = e.userStatus) ? void 0 : i.enrolledAt) != null,
        u = (null == (a = t.userStatus) ? void 0 : a.enrolledAt) != null;
    return o
        ? s !== l
            ? s
                ? G
                : U
            : c !== u
              ? c
                  ? U
                  : G
              : ee(e.config.expiresAt, t.config.expiresAt, 1)
        : s !== l
          ? s
              ? U
              : G
          : c !== u
            ? c
                ? U
                : G
            : ee(e.config.expiresAt, t.config.expiresAt, 0);
}
function F(e, t) {
    return ee(e.config.startsAt, t.config.startsAt, 0);
}
function V(e, t) {
    var n, r;
    let i = null == (n = e.userStatus) ? void 0 : n.enrolledAt,
        a = null == (r = t.userStatus) ? void 0 : r.enrolledAt;
    return null == i && null == a
        ? ee(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == a
          ? U
          : null == i && null != a
            ? G
            : ee(i, a, 0);
}
function H(e, t) {
    return ee(e.config.expiresAt, t.config.expiresAt, 1);
}
function Y(e) {
    return function (t, n) {
        let r = !(0, S.zi)(t);
        return !(0, S.zi)(n) !== r ? (r ? U : G) : e(t, n);
    };
}
function W(e) {
    switch (e) {
        case L.yq.MOST_RECENT:
            return F;
        case L.yq.RECENTLY_ENROLLED:
            return V;
        case L.yq.EXPIRING_SOON:
            return H;
        case L.yq.SUGGESTED:
        default:
            return Z;
    }
}
function K(e, t) {
    switch (t) {
        case L.XJ.TASK_VIDEO:
            return (0, S.q8)(e);
        case L.XJ.TASK_PLAY:
            return (0, S.Nj)({ quest: e }) || (0, S.Dr)({ quest: e }) || (0, S.pO)(e);
        default:
            return !1;
    }
}
function z(e, t) {
    switch (t) {
        case L.XJ.REWARD_VIRTUAL_CURRENCY:
            return (0, S.xN)(e.config);
        case L.XJ.REWARD_COLLECTIBLE:
            return (0, S.Xv)(e.config);
        case L.XJ.REWARD_IN_GAME:
            return (0, S.vQ)(e.config);
        default:
            return !1;
    }
}
function q(e) {
    switch (e) {
        case "task":
            return K;
        case "reward":
            return z;
    }
}
function X(e, t, n) {
    let r = q(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function Q(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return X(e, n, r);
        }),
    );
}
let J = {};
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J,
        { sortMethod: n, filters: r } = t,
        i = null == r || 0 === r.length ? e : Q(e, r),
        a = Y(W(n));
    return i.sort(a);
}
function ee(e, t, n) {
    let r = 0 === n ? U : G;
    return e.localeCompare(t) * r;
}
function et(e, t, n) {
    let i = r.useRef([]),
        a = r.useRef(t.sortMethod),
        o = r.useRef(t.filters),
        s = r.useRef(n);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (
            i.current.length > 0 &&
            i.current.length === e.length &&
            a.current === t.sortMethod &&
            o.current === t.filters &&
            s.current === n
        )
            return i.current;
        let r = $(e, t).map((e) => e.id);
        return (i.current = r), (a.current = t.sortMethod), (o.current = t.filters), (s.current = n), r;
    }, [e, t, n]);
}
function en(e) {
    let t = r.useMemo(
            () =>
                e.filter((e) => {
                    var t, n;
                    let r = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
                        i = (null == (n = e.userStatus) ? void 0 : n.claimedAt) != null;
                    return r && i;
                }),
            [e],
        ),
        n = r.useRef([]);
    return r.useMemo(() => {
        if (0 === t.length) return [];
        if (n.current.length > 0 && n.current.length === t.length) return n.current;
        let e = t
            .sort((e, t) => {
                var n, r;
                let i = (null == (n = e.userStatus) ? void 0 : n.claimedAt) == null;
                return i !== ((null == (r = t.userStatus) ? void 0 : r.claimedAt) == null)
                    ? i
                        ? U
                        : G
                    : ee(x.r.build(e.config).rewardsExpireAt, x.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var er = (function (e) {
    return (e.ALL = "all"), (e.CLAIMED = "claimed"), e;
})({});
function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        {
            quests: r,
            isFetchingCurrentQuests: i,
            hasFetched: a,
        } = B({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        o = new Map(r.map((e) => [e.id, e])),
        s = et(r, t, n),
        l = en(r),
        c = [],
        u = [];
    for (let t of (c = "all" === e ? s : l)) {
        let e = o.get(t);
        null != e && u.push(e);
    }
    return {
        quests: u,
        isFetchingCurrentQuests: i,
        hasFetched: a,
    };
}
function ea() {
    let e = r.useRef(!1),
        t = (0, c.Wu)([C.Z], () => Array.from(C.Z.claimedQuests.values())),
        n = (0, c.e7)([C.Z], () => C.Z.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, A.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n,
        }
    );
}
function eo() {
    return (0, c.e7)([C.Z], () => C.Z.getExpiredQuestsMap());
}
function es(e) {
    return (0, c.e7)([C.Z], () => null != e && C.Z.isQuestExpired(e.id), [e]);
}
function el(e) {
    return r.useMemo(
        () =>
            (0, S.q8)(e) || (0, S.Pb)(e) || (0, S.pO)(e) || (0, S.Vl)(e)
                ? k.intl.string(k.t.hvVgAQ)
                : k.intl.string(k.t.lwQdjI),
        [e],
    );
}
function ec(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, c.e7)([h.default], () => h.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eu(e) {
    return (0, c.e7)([C.Z], () => C.Z.isProgressingOnDesktop(e.id));
}
function ed(e) {
    return r.useMemo(() => (0, S.Bz)(e), [e]);
}
function ef(e) {
    let t = (0, c.e7)([C.Z], () => C.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
    return r.useMemo(() => (0, S.BM)(e), [e, t]);
}
function e_(e) {
    let t = eu(e),
        n = ed(e),
        r = ef(e);
    return t || n || r;
}
let ep = 1,
    eh = (e) => {
        let t = r.useCallback(() => (0, S.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = e_(e);
        return (
            r.useEffect(() => {
                var t, n, r;
                if (
                    (null == (t = e.userStatus) ? void 0 : t.enrolledAt) == null ||
                    (null == (n = e.userStatus) ? void 0 : n.completedAt) != null ||
                    (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null ||
                    !o
                )
                    return void a();
                let i = window.setInterval(() => {
                    a();
                }, E.Z.Millis.SECOND * ep);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function em(e) {
    return r.useMemo(() => (0, S.b7)(e), [e]);
}
let eg = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eT({ quest: t }),
        a = (0, T.WD)();
    return () => {
        i
            ? (0, S.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: I.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, S.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: I.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eE(e, t, n, r) {
    let { targetMinutes: i } = eh(e),
        a = em(e),
        o = eg({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, S.Pb)(e);
    if ((0, S.$J)(e) && !(0, S.Nj)({ quest: e }))
        return k.intl.format(k.t["l4S+cX"], {
            minutes: i,
            onClick: o,
            gameTitle: x.r.build(e.config).application.name,
        });
    if ((0, S.$J)(e))
        return s
            ? k.intl.format(k.t.gbtCpa, {
                  onClick: o,
                  minutes: i,
              })
            : k.intl.format(k.t.Ajlcd3, {
                  minutes: i,
                  onClick: o,
                  gameTitle: x.r.build(e.config).application.name,
              });
    if (s) return k.intl.format(k.t.Hu8SKS, { targetMinutes: i });
    if ((0, S.q8)(e)) {
        let t = x.r.build(e.config).defaultWatchVideoTask,
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n ? k.intl.string(k.t["o+e9ys"]) : k.intl.formatToPlainString(k.t["9m9MnZ"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, S.pO)(e) && (0, S.KM)(e)) return k.intl.format(k.t["1NaRSk"], { minutes: i });
    let l = k.t["6zWtV1"];
    return (
        (0, S.Nj)({ quest: e }) && (l = k.t["wmOh/v"]),
        k.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}
function eb() {
    let { quests: e, isFetchingCurrentQuests: t } = B({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = eo();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, S.vR)(t, N.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, S.zE)(t.userStatus, N.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function ey(e) {
    let t = (0, c.e7)([C.Z], () => C.Z.quests),
        n = r.useMemo(() => {
            let n = (0, S.NI)(t, L.tt);
            return (0, S.Jg)(n, e);
        }, [e, t]);
    return es(n) ? null : n;
}
function eO(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, A.Wf)(e),
            handleProgress: (t) => (0, A.Wf)(e, t),
            handleResetStatusClick: () => (0, A.eT)(e),
            handleResetDismissibilityClick: () => (0, A.T0)(e),
            handleOverrideDeliveryClick: () => (0, A.EW)(e),
        }),
        [e],
    );
}
function ev() {
    let { fetching: e, accounts: t } = (0, c.cj)([m.Z], () => ({
            fetching: m.Z.isFetching(),
            accounts: m.Z.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === j.ABu.XBOX),
                r = e.filter((e) => e.type === j.ABu.PLAYSTATION),
                i = n.concat(r);
            return {
                xboxAccounts: n,
                playstationAccounts: r,
                xboxAndPlaystationAccounts: i,
            };
        }, [t]);
    return {
        fetching: e,
        xboxAccounts: n,
        playstationAccounts: i,
        xboxAndPlaystationAccounts: a,
    };
}
let eI = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [o, l] = r.useState([]),
            [u, d] = r.useState(!1),
            f = (0, c.e7)([m.Z], () => m.Z.getAccounts());
        return (
            r.useEffect(() => {
                l((e) => e.filter((e) => e.type !== s.K.EXPIRED_CREDENTIAL));
            }, [f]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (u) return;
                    null == i || i(), d(!0);
                    let e = null;
                    try {
                        (e = await (0, A.CS)(t, n)), l(e.errorHints);
                    } finally {
                        var r;
                        d(!1), null == a || a(null != (r = null == e ? void 0 : e.errorHints) ? r : []);
                    }
                }, [u, i, a, n, t]),
                startingConsoleQuest: u,
                errorHints: o,
            }
        );
    },
    eT = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ev(),
            r = e_(t),
            i = 0 === n.length;
        return (0, S.$J)(t) && i && !r;
    },
    eS = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ev(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = b.Z.getArticleURL(j.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = b.Z.getArticleURL(j.BhN.QUEST_HOW_TO_XBOX),
            s = k.intl.format(k.t.beN4DA, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o,
            }),
            l = k.intl.format(k.t.HVS7np, { helpdeskArticle: r ? a : o });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a,
        };
    };
var eA = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function eC(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = eh(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function eN(e) {
    let t = (0, c.e7)([h.default], () => h.default.locale),
        { percentComplete: n } = eh(e),
        r = em(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        o =
            null != r
                ? "".concat(null == r ? void 0 : r.progress, "/").concat(null == r ? void 0 : r.target)
                : (0, y.T3)(t, i, { roundingMode: "floor" });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: o,
    };
}
function eR(e, t) {
    var n, r;
    let i = eh(e),
        a = (0, S.b7)(e),
        o = (0, w.DD)({
            quest: e,
            taskDetails: i,
            location: L.dr.QUEST_HOME_DESKTOP,
            questContent: N.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
        }),
        s = (null == (n = e.userStatus) ? void 0 : n.claimedAt) != null,
        l = ec(null == (r = e.userStatus) ? void 0 : r.claimedAt);
    return s
        ? k.intl.formatToPlainString(k.t.lOVr0N, { claimDate: l })
        : null != a
          ? a.description
          : null != o
            ? o
            : null;
}
function eP(e) {
    return [(0, c.e7)([C.Z], () => C.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, A.OR)(e, t), [e])];
}
function ew(e, t) {
    let [n, i] = eP(e.id),
        s = r.useMemo(() => (0, S.yH)(e), [e]),
        l = s.includes(L.cd.DESKTOP),
        c = s.includes(L.cd.CONSOLE),
        u = eu(e),
        d = ed(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP }, () => L.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP_V2 }, () => L.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ACTIVITY }, () => L.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO }, () => L.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO_ON_MOBILE }, () => L.cd.DESKTOP)
                    .with({ taskType: o.X.STREAM_ON_DESKTOP }, () => L.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_XBOX }, () => L.cd.CONSOLE)
                    .with({ taskType: o.X.PLAY_ON_PLAYSTATION }, () => L.cd.CONSOLE)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_GAME }, () => L.cd.DESKTOP)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_ACTIVITY }, () => L.cd.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        _ = u ? L.cd.DESKTOP : d ? L.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: _,
                    selectedPlatform: n,
                })
                    .with({ currentProgressingPlatform: L.cd.CONSOLE }, () => N.LI.CONSOLE)
                    .with({ currentProgressingPlatform: L.cd.DESKTOP }, () => N.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: L.cd.CONSOLE,
                        },
                        () => N.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: L.cd.DESKTOP,
                        },
                        () => N.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: L.cd.CONSOLE,
                        },
                        () => N.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: L.cd.DESKTOP,
                        },
                        () => N.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null,
                        },
                        () => (c && l ? N.LI.SELECT : c ? N.LI.CONSOLE : N.LI.DESKTOP),
                    )
                    .exhaustive(),
            [c, l, f, _, n],
        ),
        s,
        i,
    ];
}
function eD(e) {
    var t, n;
    let r = em(e),
        i = eh(e),
        [a] = ew(e, i),
        s = es(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !s && u && (d || (f && a === N.LI.DESKTOP)),
        p = (0, O.isWeb)() && _ && !(0, S.Gd)(e),
        h = (0, O.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(k.intl.string(k.t.MFGxFB)), p && m.push(k.intl.string(k.t.BV6xDg)), m;
}
function ex(e) {
    var t;
    return null != (t = (0, c.e7)([C.Z], () => C.Z.quests).get(e)) ? t : null;
}
function eL(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != a &&
            o.current !== t &&
            ((0, I.Ic)({
                mode: t,
                prevMode: o.current,
                questContent: n,
                questId: a,
                sourceQuestContent: i,
            }),
            (o.current = t));
    }, [a, n, t, i]),
        r.useEffect(() => {
            if (null != a)
                return () => {
                    (0, I.Ic)({
                        mode: null,
                        prevMode: o.current,
                        questContent: n,
                        questId: a,
                        sourceQuestContent: i,
                    });
                };
        }, [a, n, i]);
}
function ej(e) {
    var t, n;
    let r = (0, c.e7)([h.default], () => h.default.locale),
        i = eh(e),
        [a] = ew(e, i),
        o = em(e),
        s = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        l = null != o ? o.percentComplete : i.percentComplete;
    if (s) return k.intl.string(k.t["ij5E//"]);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && l > 0) {
        let e = (0, y.T3)(r, l, { roundingMode: "floor" });
        return k.intl.formatToPlainString(k.t.lVZaXF, { percent: e });
    }
    return a === N.LI.SELECT
        ? k.intl.string(k.t.EMrUHR)
        : (0, S.$J)(e)
          ? k.intl.string(k.t.mOrpXF)
          : k.intl.string(k.t["7e5k7O"]);
}
function eM(e) {
    var t;
    let { quest: n, isExpanded: i, sourceQuestContent: a, activeScreen: o } = e,
        s = ec(r.useMemo(() => x.r.build(n.config).rewardsExpireAt, [n.config])),
        l = eh(n),
        c = em(n),
        u = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        d = e_(n),
        f = (0, w.DD)({
            quest: n,
            location: L.dr.QUESTS_BAR,
            questContent: N.jn.QUEST_BAR_V2,
            taskDetails: l,
            sourceQuestContent: a,
        }),
        _ = null != c ? c.percentComplete : l.percentComplete;
    if (u) return k.intl.formatToPlainString(k.t.APddvL, { expirationDate: s });
    if (i)
        if (o === N.LI.SELECT) return k.intl.string(k.t.sWUpNz);
        else return f;
    if ((0, S.q8)(n)) return k.intl.string(k.t["o+e9ys"]);
    if (_ > 0)
        if (!d) return k.intl.string(k.t.mOrpXF);
        else
            return (0, S.AV)({
                quest: n,
                taskDetails: l,
                thirdPartyTaskDetails: null != c ? c : void 0,
            });
    return k.intl.string(k.t.S6UUc3);
}
function ek(e, t) {
    let n = (0, c.e7)([C.Z], () => C.Z.getQuest(e), [e]),
        i = (0, u.ZP)(),
        a = r.useMemo(() => (null == n ? void 0 : n.config.features.includes(L.S7.QUESTS_CDN)) === !0, [n]);
    return r.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, D.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, l.wj)(i) ? j.BRd.DARK : j.BRd.LIGHT,
                      newCdn: a,
                  }),
        [i, t, e, null == n ? void 0 : n.config.cosponsorMetadata, a],
    );
}
function eU(e) {
    let t = x.r.build(e).defaultRewardName,
        n = (0, S.Kr)(e),
        r = (0, S.FX)(e),
        i = (0, S._p)(e),
        a = (0, S.f$)(e),
        o = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
        s = (0, v.I5)(o, M.p9.TIER_2);
    if (null == n) return k.intl.formatToPlainString(k.t.l9uXLy, { decorationName: t });
    let l = k.intl.formatToPlainString(k.t.o97tNj, { rewardName: t }),
        u = k.intl.formatToPlainString(k.t.PkyRZm, {
            rewardName: t,
            expirationDate: r,
        }),
        d = k.intl.formatToPlainString(k.t.ie4YKy, {
            rewardName: t,
            duration: n,
        }),
        f = k.intl.formatToPlainString(k.t.yCpc0d, {
            duration: n,
            rewardName: t,
        }),
        _ = s ? l : d,
        p = s ? u : f,
        h = i ? _ : p;
    return a
        ? h
        : k.intl.formatToPlainString(k.t.tTlItr, {
              duration: n,
              decorationName: t,
          });
}
function eG(e) {
    let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity());
    return {
        launchInGameActivity: r.useCallback(() => {
            null != t && t.applicationId === e.config.application.id
                ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location)
                : (0, p.uL)(j.Z5c.ACTIVITY_DETAILS(e.config.application.id));
        }, [t, e.config.application.id]),
    };
}
