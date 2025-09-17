n.d(t, {
    B4: () => ej,
    B6: () => ed,
    Bd: () => ew,
    GI: () => eS,
    Gd: () => eG,
    I: () => eP,
    J2: () => Z,
    Jf: () => eE,
    KX: () => eC,
    OH: () => eN,
    Qy: () => eB,
    Rf: () => eg,
    Wi: () => ec,
    Yj: () => eu,
    _Q: () => eR,
    _s: () => eA,
    bA: () => ea,
    e5: () => ei,
    eN: () => eo,
    eQ: () => ek,
    fN: () => ev,
    iO: () => eO,
    kJ: () => eI,
    me: () => ex,
    qI: () => eM,
    qb: () => eL,
    t5: () => ey,
    tP: () => el,
    uA: () => eb,
    vf: () => eU,
    z: () => eh,
    z6: () => eT,
    zB: () => eZ,
}),
    n(388685),
    n(642613),
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
    m = n(592125),
    g = n(553795),
    E = n(594174),
    b = n(70956),
    y = n(63063),
    O = n(930153),
    v = n(358085),
    I = n(74538),
    T = n(617136),
    S = n(915750),
    A = n(509212),
    C = n(272008),
    N = n(569984),
    R = n(497505),
    P = n(937797),
    w = n(977156),
    D = n(373370),
    x = n(475595),
    L = n(566078),
    j = n(46140),
    M = n(981631),
    k = n(474936),
    U = n(388032);
let G = -1,
    B = 1;
function Z() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      fetchPolicy: "cache-only",
                      callerSource: "unknown",
                  },
        [t, n] = r.useState(!1),
        i = (0, c.Wu)([N.Z], () => [...N.Z.quests.values()]),
        a = (0, c.Wu)([N.Z], () => [...N.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: s } = (0, c.cj)([N.Z], () => ({
            isFetchingCurrentQuests: N.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: N.Z.lastFetchedCurrentQuests,
        })),
        l = (0, w.c)({ location: j.dr.USE_QUESTS }),
        u = P.DL.useConfig({ location: j.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !o
            ) {
                if ((n(!0), (0, C.xw)(), !u.enabled || "focused" === _.Z.getState()))
                    (0, C.w)(R.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource));
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
function F(e, t) {
    var n, r, i, a;
    let o = !(0, A.zi)(e),
        s = (null == (n = e.userStatus) ? void 0 : n.claimedAt) != null,
        l = (null == (r = t.userStatus) ? void 0 : r.claimedAt) != null,
        c = (null == (i = e.userStatus) ? void 0 : i.enrolledAt) != null,
        u = (null == (a = t.userStatus) ? void 0 : a.enrolledAt) != null;
    return o
        ? s !== l
            ? s
                ? B
                : G
            : c !== u
              ? c
                  ? G
                  : B
              : et(e.config.expiresAt, t.config.expiresAt, 1)
        : s !== l
          ? s
              ? G
              : B
          : c !== u
            ? c
                ? G
                : B
            : et(e.config.expiresAt, t.config.expiresAt, 0);
}
function V(e, t) {
    return et(e.config.startsAt, t.config.startsAt, 0);
}
function H(e, t) {
    var n, r;
    let i = null == (n = e.userStatus) ? void 0 : n.enrolledAt,
        a = null == (r = t.userStatus) ? void 0 : r.enrolledAt;
    return null == i && null == a
        ? et(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == a
          ? G
          : null == i && null != a
            ? B
            : et(i, a, 0);
}
function Y(e, t) {
    return et(e.config.expiresAt, t.config.expiresAt, 1);
}
function W(e) {
    return function (t, n) {
        let r = !(0, A.zi)(t);
        return !(0, A.zi)(n) !== r ? (r ? G : B) : e(t, n);
    };
}
function K(e) {
    switch (e) {
        case j.yq.MOST_RECENT:
            return V;
        case j.yq.RECENTLY_ENROLLED:
            return H;
        case j.yq.EXPIRING_SOON:
            return Y;
        case j.yq.SUGGESTED:
        default:
            return F;
    }
}
function z(e, t) {
    switch (t) {
        case j.XJ.TASK_VIDEO:
            return (0, A.q8)(e);
        case j.XJ.TASK_PLAY:
            return (0, A.Nj)({ quest: e }) || (0, A.Dr)({ quest: e }) || (0, A.pO)(e);
        default:
            return !1;
    }
}
function q(e, t) {
    switch (t) {
        case j.XJ.REWARD_VIRTUAL_CURRENCY:
            return (0, A.xN)(e.config);
        case j.XJ.REWARD_COLLECTIBLE:
            return (0, A.Xv)(e.config);
        case j.XJ.REWARD_IN_GAME:
            return (0, A.vQ)(e.config);
        default:
            return !1;
    }
}
function X(e) {
    switch (e) {
        case "task":
            return z;
        case "reward":
            return q;
    }
}
function Q(e, t, n) {
    let r = X(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function J(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return Q(e, n, r);
        }),
    );
}
let $ = {};
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $,
        { sortMethod: n, filters: r } = t,
        i = null == r || 0 === r.length ? e : J(e, r),
        a = W(K(n));
    return i.sort(a);
}
function et(e, t, n) {
    let r = 0 === n ? G : B;
    return e.localeCompare(t) * r;
}
function en(e, t, n) {
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
        let r = ee(e, t).map((e) => e.id);
        return (i.current = r), (a.current = t.sortMethod), (o.current = t.filters), (s.current = n), r;
    }, [e, t, n]);
}
function er(e) {
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
                        ? G
                        : B
                    : et(L.r.build(e.config).rewardsExpireAt, L.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var ei = (function (e) {
    return (e.ALL = "all"), (e.CLAIMED = "claimed"), e;
})({});
function ea(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        {
            quests: r,
            isFetchingCurrentQuests: i,
            hasFetched: a,
        } = Z({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        o = new Map(r.map((e) => [e.id, e])),
        s = en(r, t, n),
        l = er(r),
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
function eo() {
    let e = r.useRef(!1),
        t = (0, c.Wu)([N.Z], () => Array.from(N.Z.claimedQuests.values())),
        n = (0, c.e7)([N.Z], () => N.Z.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, C.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n,
        }
    );
}
function es() {
    return (0, c.e7)([N.Z], () => N.Z.getExpiredQuestsMap());
}
function el(e) {
    return (0, c.e7)([N.Z], () => null != e && N.Z.isQuestExpired(e.id), [e]);
}
function ec(e, t, n) {
    var r;
    let i = (0, c.e7)([m.Z], () => {
            var e;
            return null != (e = m.Z.getChannel(null == t ? void 0 : t.channelId)) ? e : null;
        }),
        a = (0, c.e7)([N.Z], () => null != N.Z.questEnrollmentBlockedUntil, []),
        o =
            (0, c.e7)([E.default], () => {
                var e;
                return null == (e = E.default.getCurrentUser()) ? void 0 : e.id;
            }) === n,
        s = (0, c.e7)([N.Z], () => null != e && N.Z.isQuestExpired(e.id), [e]);
    if (null == e || a || s || o) return !1;
    let l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        u = (0, A.Rc)(t, i);
    return !l || !!u;
}
function eu(e) {
    return r.useMemo(
        () =>
            (0, A.q8)(e) || (0, A.Pb)(e) || (0, A.pO)(e) || (0, A.Vl)(e)
                ? U.intl.string(U.t.hvVgAQ)
                : U.intl.string(U.t.lwQdjI),
        [e],
    );
}
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, c.e7)([h.default], () => h.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function ef(e) {
    return (0, c.e7)([N.Z], () => N.Z.isProgressingOnDesktop(e.id));
}
function e_(e) {
    return r.useMemo(() => (0, A.Bz)(e), [e]);
}
function ep(e) {
    let t = (0, c.e7)([N.Z], () => N.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
    return r.useMemo(() => (0, A.BM)(e), [e, t]);
}
function eh(e) {
    let t = ef(e),
        n = e_(e),
        r = ep(e);
    return t || n || r;
}
let em = 1,
    eg = (e) => {
        let t = r.useCallback(() => (0, A.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = eh(e);
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
                }, b.Z.Millis.SECOND * em);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function eE(e) {
    return r.useMemo(() => (0, A.b7)(e), [e]);
}
let eb = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eA({ quest: t }),
        a = (0, S.WD)();
    return () => {
        i
            ? (0, A.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: T.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, A.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: T.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function ey(e, t, n, r) {
    let { targetMinutes: i } = eg(e),
        a = eE(e),
        o = eb({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, A.Pb)(e);
    if ((0, A.$J)(e) && !(0, A.Nj)({ quest: e }))
        return U.intl.format(U.t["l4S+cX"], {
            minutes: i,
            onClick: o,
            gameTitle: L.r.build(e.config).application.name,
        });
    if ((0, A.$J)(e))
        return s
            ? U.intl.format(U.t.gbtCpa, {
                  onClick: o,
                  minutes: i,
              })
            : U.intl.format(U.t.Ajlcd3, {
                  minutes: i,
                  onClick: o,
                  gameTitle: L.r.build(e.config).application.name,
              });
    if (s) return U.intl.format(U.t.Hu8SKS, { targetMinutes: i });
    if ((0, A.q8)(e)) {
        let t = L.r.build(e.config).defaultWatchVideoTask,
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n ? U.intl.string(U.t["o+e9ys"]) : U.intl.formatToPlainString(U.t["9m9MnZ"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, A.pO)(e))
        if ((0, A.KM)(e)) return U.intl.format(U.t["1NaRSk"], { minutes: i });
        else
            return U.intl.format(U.t.xHXCyc, {
                minutes: i,
                activityName: e.config.application.name,
            });
    let l = U.t["6zWtV1"];
    return (
        (0, A.Nj)({ quest: e }) && (l = U.t["wmOh/v"]),
        U.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}
function eO() {
    let { quests: e, isFetchingCurrentQuests: t } = Z({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = es();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, A.vR)(t, R.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, A.zE)(t.userStatus, R.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function ev(e) {
    let t = (0, c.e7)([N.Z], () => N.Z.quests),
        n = r.useMemo(() => {
            let n = (0, A.NI)(t, j.tt);
            return (0, A.Jg)(n, e);
        }, [e, t]);
    return el(n) ? null : n;
}
function eI(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, C.Wf)(e),
            handleProgress: (t) => (0, C.Wf)(e, t),
            handleResetStatusClick: () => (0, C.eT)(e),
            handleResetDismissibilityClick: () => (0, C.T0)(e),
            handleOverrideDeliveryClick: () => (0, C.EW)(e),
        }),
        [e],
    );
}
function eT() {
    let { fetching: e, accounts: t } = (0, c.cj)([g.Z], () => ({
            fetching: g.Z.isFetching(),
            accounts: g.Z.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === M.ABu.XBOX),
                r = e.filter((e) => e.type === M.ABu.PLAYSTATION),
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
let eS = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [o, l] = r.useState([]),
            [u, d] = r.useState(!1),
            f = (0, c.e7)([g.Z], () => g.Z.getAccounts());
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
                        (e = await (0, C.CS)(t, n)), l(e.errorHints);
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
    eA = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eT(),
            r = eh(t),
            i = 0 === n.length;
        return (0, A.$J)(t) && i && !r;
    },
    eC = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eT(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = y.Z.getArticleURL(M.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = y.Z.getArticleURL(M.BhN.QUEST_HOW_TO_XBOX),
            s = U.intl.format(U.t.beN4DA, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o,
            }),
            l = U.intl.format(U.t.HVS7np, { helpdeskArticle: r ? a : o });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a,
        };
    };
var eN = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function eR(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = eg(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function eP(e) {
    let t = (0, c.e7)([h.default], () => h.default.locale),
        { percentComplete: n } = eg(e),
        r = eE(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        o =
            null != r
                ? "".concat(null == r ? void 0 : r.progress, "/").concat(null == r ? void 0 : r.target)
                : (0, O.T3)(t, i, { roundingMode: "floor" });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: o,
    };
}
function ew(e, t, n) {
    var r, i;
    let a = eg(e),
        o = (0, A.b7)(e),
        s = (0, D.DD)({
            quest: e,
            taskDetails: a,
            location: j.dr.QUEST_HOME_DESKTOP,
            questContent: R.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: n,
        }),
        l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        c = ed(null == (i = e.userStatus) ? void 0 : i.claimedAt);
    return l
        ? U.intl.formatToPlainString(U.t.lOVr0N, { claimDate: c })
        : null != o
          ? o.description
          : null != s
            ? s
            : null;
}
function eD(e) {
    return [(0, c.e7)([N.Z], () => N.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, C.OR)(e, t), [e])];
}
function ex(e, t) {
    let [n, i] = eD(e.id),
        s = r.useMemo(() => (0, A.yH)(e), [e]),
        l = s.includes(j.cd.DESKTOP),
        c = s.includes(j.cd.CONSOLE),
        u = ef(e),
        d = e_(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP }, () => j.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP_V2 }, () => j.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ACTIVITY }, () => j.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO }, () => j.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO_ON_MOBILE }, () => j.cd.DESKTOP)
                    .with({ taskType: o.X.STREAM_ON_DESKTOP }, () => j.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_XBOX }, () => j.cd.CONSOLE)
                    .with({ taskType: o.X.PLAY_ON_PLAYSTATION }, () => j.cd.CONSOLE)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_GAME }, () => j.cd.DESKTOP)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_ACTIVITY }, () => j.cd.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        _ = u ? j.cd.DESKTOP : d ? j.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: _,
                    selectedPlatform: n,
                })
                    .with({ currentProgressingPlatform: j.cd.CONSOLE }, () => R.LI.CONSOLE)
                    .with({ currentProgressingPlatform: j.cd.DESKTOP }, () => R.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: j.cd.CONSOLE,
                        },
                        () => R.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: j.cd.DESKTOP,
                        },
                        () => R.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: j.cd.CONSOLE,
                        },
                        () => R.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: j.cd.DESKTOP,
                        },
                        () => R.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null,
                        },
                        () => (c && l ? R.LI.SELECT : c ? R.LI.CONSOLE : R.LI.DESKTOP),
                    )
                    .exhaustive(),
            [c, l, f, _, n],
        ),
        s,
        i,
    ];
}
function eL(e) {
    var t, n;
    let r = eE(e),
        i = eg(e),
        [a] = ex(e, i),
        s = el(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !s && u && (d || (f && a === R.LI.DESKTOP)),
        p = (0, v.isWeb)() && _ && !(0, A.Gd)(e),
        h = (0, v.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(U.intl.string(U.t.MFGxFB)), p && m.push(U.intl.string(U.t.BV6xDg)), m;
}
function ej(e) {
    var t;
    return null != (t = (0, c.e7)([N.Z], () => N.Z.quests).get(e)) ? t : null;
}
function eM(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != a &&
            o.current !== t &&
            ((0, T.Ic)({
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
                    (0, T.Ic)({
                        mode: null,
                        prevMode: o.current,
                        questContent: n,
                        questId: a,
                        sourceQuestContent: i,
                    });
                };
        }, [a, n, i]);
}
function ek(e) {
    var t, n;
    let r = (0, c.e7)([h.default], () => h.default.locale),
        i = eg(e),
        [a] = ex(e, i),
        o = eE(e),
        s = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        l = null != o ? o.percentComplete : i.percentComplete;
    if (s) return U.intl.string(U.t["ij5E//"]);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && l > 0) {
        let e = (0, O.T3)(r, l, { roundingMode: "floor" });
        return U.intl.formatToPlainString(U.t.lVZaXF, { percent: e });
    }
    return a === R.LI.SELECT
        ? U.intl.string(U.t.EMrUHR)
        : (0, A.$J)(e)
          ? U.intl.string(U.t.mOrpXF)
          : U.intl.string(U.t["7e5k7O"]);
}
function eU(e) {
    var t, n;
    let {
            quest: i,
            isExpanded: a,
            sourceQuestContent: o,
            activeScreen: s,
            popoutTargetElementRef: l,
            onGameSheetOpened: c,
            onGameSheetClosed: u,
        } = e,
        d = ed(r.useMemo(() => L.r.build(i.config).rewardsExpireAt, [i.config])),
        f = eg(i),
        _ = eE(i),
        p = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null,
        h = (null == (n = i.userStatus) ? void 0 : n.enrolledAt) != null,
        m = f.percentComplete > 0,
        g = eh(i),
        E = (0, D.DD)({
            quest: i,
            location: j.dr.QUESTS_BAR,
            questContent: R.jn.QUEST_BAR_V2,
            taskDetails: f,
            sourceQuestContent: o,
            popoutTargetElementRef: l,
            onGameSheetOpened: c,
            onGameSheetClosed: u,
        }),
        b = null != _ ? _.percentComplete : f.percentComplete;
    if (p) return U.intl.formatToPlainString(U.t.APddvL, { expirationDate: d });
    if (a)
        if (s === R.LI.SELECT) return U.intl.string(U.t.sWUpNz);
        else {
            if (!(0, A.Pb)(i) || !h || m) return E;
            let e = L.r.build(i.config).defaultRewardNameWithArticle;
            return U.intl.format(U.t["1votFx"], {
                rewardNameWithArticle: e,
                targetMinutes: f.targetMinutes,
            });
        }
    if ((0, A.q8)(i)) return U.intl.string(U.t["o+e9ys"]);
    if (b > 0)
        if (!g) return U.intl.string(U.t.mOrpXF);
        else
            return (0, A.AV)({
                quest: i,
                taskDetails: f,
                thirdPartyTaskDetails: null != _ ? _ : void 0,
            });
    return U.intl.string(U.t.S6UUc3);
}
function eG(e, t) {
    let n = (0, c.e7)([N.Z], () => N.Z.getQuest(e), [e]),
        i = (0, u.ZP)(),
        a = r.useMemo(() => (null == n ? void 0 : n.config.features.includes(j.S7.QUESTS_CDN)) === !0, [n]);
    return r.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, x.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, l.wj)(i) ? M.BRd.DARK : M.BRd.LIGHT,
                      newCdn: a,
                  }),
        [i, t, e, null == n ? void 0 : n.config.cosponsorMetadata, a],
    );
}
function eB(e) {
    let t = L.r.build(e).defaultRewardName,
        n = (0, A.Kr)(e),
        r = (0, A.FX)(e),
        i = (0, A._p)(e),
        a = (0, A.f$)(e),
        o = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
        s = (0, I.I5)(o, k.p9.TIER_2);
    if (null == n) return U.intl.formatToPlainString(U.t.l9uXLy, { decorationName: t });
    let l = U.intl.formatToPlainString(U.t.o97tNj, { rewardName: t }),
        u = U.intl.formatToPlainString(U.t.PkyRZm, {
            rewardName: t,
            expirationDate: r,
        }),
        d = U.intl.formatToPlainString(U.t.ie4YKy, {
            rewardName: t,
            duration: n,
        }),
        f = U.intl.formatToPlainString(U.t.yCpc0d, {
            duration: n,
            rewardName: t,
        }),
        _ = s ? l : d,
        p = s ? u : f,
        h = i ? _ : p;
    return a
        ? h
        : U.intl.formatToPlainString(U.t.tTlItr, {
              duration: n,
              decorationName: t,
          });
}
function eZ(e) {
    let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity());
    return {
        launchInGameActivity: r.useCallback(() => {
            null != t && t.applicationId === e.config.application.id
                ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location)
                : (0, p.uL)(M.Z5c.ACTIVITY_DETAILS(e.config.application.id));
        }, [t, e.config.application.id]),
    };
}
