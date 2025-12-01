n.d(t, {
    $I: () => ez,
    B4: () => eU,
    B6: () => eh,
    Fy: () => eS,
    GI: () => eR,
    Gd: () => eB,
    I: () => ex,
    J2: () => W,
    Jf: () => ev,
    KX: () => eD,
    MP: () => eY,
    N8: () => eK,
    OH: () => ew,
    Qy: () => eZ,
    Rf: () => eO,
    SU: () => eq,
    Ut: () => eJ,
    Wi: () => ep,
    _Q: () => eL,
    _s: () => eP,
    aV: () => eH,
    bA: () => eu,
    e5: () => el,
    eN: () => ed,
    fN: () => eA,
    iO: () => eT,
    kJ: () => eC,
    m4: () => eX,
    me: () => ek,
    qI: () => eG,
    qb: () => ej,
    tP: () => e_,
    tR: () => ec,
    uA: () => eI,
    wF: () => H,
    z: () => eb,
    z1: () => eW,
    z6: () => eN,
    zB: () => eF,
}),
    n(388685),
    n(642613),
    n(539854),
    n(314940);
var r = n(473749);
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
    _ = n(15624),
    p = n(835473);
n(583434);
var h = n(703656),
    m = n(706454),
    g = n(592125),
    E = n(553795),
    b = n(594174),
    y = n(626135),
    O = n(70956),
    v = n(63063),
    I = n(956664),
    T = n(930153),
    S = n(358085),
    A = n(74538),
    C = n(22095),
    N = n(617136),
    R = n(915750),
    P = n(616022),
    D = n(49436),
    w = n(509212),
    L = n(937797),
    x = n(704161),
    M = n(787695),
    k = n(36243),
    j = n(475595),
    U = n(324805),
    G = n(981631),
    B = n(474936),
    Z = n(388032);
let F = -1,
    V = 1,
    H = "1410358070831480904";
function W() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      fetchPolicy: "cache-only",
                      callerSource: "unknown",
                  },
        [t, n] = r.useState(!1),
        i = (0, c.Wu)([P.Z], () => [...P.Z.quests.values()]),
        a = (0, c.Wu)([P.Z], () => [...P.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: s } = (0, c.cj)([P.Z], () => ({
            isFetchingCurrentQuests: P.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: P.Z.lastFetchedCurrentQuests,
        })),
        l = (0, M.c)({ location: U.dr.USE_QUESTS }),
        u = L.DL.useConfig({ location: U.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !o
            ) {
                if ((n(!0), (0, C.xw)(), u.enabled && "focused" !== _.Z.getState())) return;
                let { enableNewRequestBehavior: t } = x.Z.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, C.w)(D.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource));
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
function Y(e, t) {
    var n, r, i, a, o, s;
    let l = e.id === H,
        c = t.id === H,
        u = l && (null == (n = e.userStatus) ? void 0 : n.completedAt) == null;
    if (u !== (c && (null == (r = t.userStatus) ? void 0 : r.completedAt) == null)) return u ? F : V;
    let d = !(0, w.zi)(e),
        f = (null == (i = e.userStatus) ? void 0 : i.claimedAt) != null,
        _ = (null == (a = t.userStatus) ? void 0 : a.claimedAt) != null,
        p = (null == (o = e.userStatus) ? void 0 : o.enrolledAt) != null,
        h = (null == (s = t.userStatus) ? void 0 : s.enrolledAt) != null,
        { enabled: m, minutes: g } = (0, L.eC)(U.dr.QUEST_HOME_DESKTOP),
        E = O.Z.Millis.MINUTE * g,
        b = eQ(e, E),
        y = eQ(t, E);
    return d
        ? m && b !== y && (b || y)
            ? b
                ? V
                : F
            : f !== _
              ? f
                  ? V
                  : F
              : p !== h
                ? p
                    ? F
                    : V
                : ea(e.config.expiresAt, t.config.expiresAt, 1)
        : f !== _
          ? f
              ? F
              : V
          : p !== h
            ? p
                ? F
                : V
            : ea(e.config.expiresAt, t.config.expiresAt, 0);
}
function K(e, t) {
    return ea(e.config.startsAt, t.config.startsAt, 0);
}
function z(e, t) {
    var n, r;
    let i = null == (n = e.userStatus) ? void 0 : n.enrolledAt,
        a = null == (r = t.userStatus) ? void 0 : r.enrolledAt;
    return null == i && null == a
        ? ea(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == a
          ? F
          : null == i && null != a
            ? V
            : ea(i, a, 0);
}
function q(e, t) {
    return ea(e.config.expiresAt, t.config.expiresAt, 1);
}
function X(e) {
    return function (t, n) {
        let r = !(0, w.zi)(t);
        return !(0, w.zi)(n) !== r ? (r ? F : V) : e(t, n);
    };
}
function Q(e) {
    switch (e) {
        case U.yq.MOST_RECENT:
            return K;
        case U.yq.RECENTLY_ENROLLED:
            return z;
        case U.yq.EXPIRING_SOON:
            return q;
        case U.yq.SUGGESTED:
        default:
            return Y;
    }
}
function J(e, t) {
    switch (t) {
        case U.oH.VIDEO:
            return (0, w.q8)(e);
        case U.oH.PLAY:
            return (0, w.Nj)({ quest: e }) || (0, w.Dr)({ quest: e }) || (0, w.pO)(e);
        default:
            return !1;
    }
}
function $(e, t) {
    switch (t) {
        case U.UP.VIRTUAL_CURRENCY:
            return (0, w.xN)(e.config);
        case U.UP.COLLECTIBLE:
            return (0, w.Xv)(e.config);
        case U.UP.IN_GAME:
            return (0, w.vQ)(e.config) || (0, w.wj)(e.config);
        default:
            return !1;
    }
}
function ee(e) {
    switch (e) {
        case "task":
            return J;
        case "reward":
            return $;
    }
}
function et(e, t, n) {
    let r = ee(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function en(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return et(e, n, r);
        }),
    );
}
let er = {};
function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er,
        { sortMethod: n, filters: r } = t,
        i = null == r || 0 === r.length ? e : en(e, r),
        a = X(Q(n));
    return i.sort(a);
}
function ea(e, t, n) {
    let r = 0 === n ? F : V;
    return e.localeCompare(t) * r;
}
function eo(e, t) {
    let n = r.useRef([]),
        i = r.useRef(t.sortMethod),
        a = r.useRef(t.filters),
        o = r.useRef(0);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (n.current.length > 0 && o.current === e.length && i.current === t.sortMethod && a.current === t.filters)
            return n.current;
        let r = ei(e, t).map((e) => e.id);
        return (n.current = r), (i.current = t.sortMethod), (a.current = t.filters), (o.current = e.length), r;
    }, [e, t]);
}
function es(e) {
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
                        ? F
                        : V
                    : ea(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var el = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    ec = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function eu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: a,
        } = W({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        o = new Map(n.map((e) => [e.id, e])),
        s = eo(n, t),
        l = es(n),
        c = [],
        u = [];
    for (let t of (c = "all" === e ? s : l)) {
        let e = o.get(t);
        null != e && u.push(e);
    }
    return {
        quests: u,
        excludedQuests: r,
        isFetchingCurrentQuests: i,
        hasFetched: a,
    };
}
function ed() {
    let e = r.useRef(!1),
        t = (0, c.Wu)([P.Z], () => Array.from(P.Z.claimedQuests.values())),
        n = (0, c.e7)([P.Z], () => P.Z.isFetchingClaimedQuests);
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
function ef() {
    return (0, c.e7)([P.Z], () => P.Z.getExpiredQuestsMap());
}
function e_(e) {
    return (0, c.e7)([P.Z], () => null != e && P.Z.isQuestExpired(e.id), [e]);
}
function ep(e, t, n) {
    var r;
    let i = (0, c.e7)([g.Z], () => {
            var e;
            return null != (e = g.Z.getChannel(null == t ? void 0 : t.channelId)) ? e : null;
        }),
        a = (0, c.e7)([P.Z], () => null != P.Z.questEnrollmentBlockedUntil, []),
        o =
            (0, c.e7)([b.default], () => {
                var e;
                return null == (e = b.default.getCurrentUser()) ? void 0 : e.id;
            }) === n,
        s = (0, c.e7)([P.Z], () => null != e && P.Z.isQuestExpired(e.id), [e]);
    if (null == e || a || s || o) return !1;
    let l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        u = (0, w.Rc)(t, i);
    return !l || !!u;
}
function eh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, c.e7)([m.default], () => m.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function em(e) {
    return (0, c.e7)([P.Z], () => P.Z.isProgressingOnDesktop(e.id));
}
function eg(e) {
    return r.useMemo(() => (0, w.Bz)(e), [e]);
}
function eE(e) {
    let t = (0, c.e7)([P.Z], () => P.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
    return r.useMemo(() => (0, w.BM)(e), [e, t]);
}
function eb(e) {
    let t = em(e),
        n = eg(e),
        r = eE(e);
    return t || n || r;
}
let ey = 1,
    eO = (e) => {
        let t = r.useCallback(() => (0, w.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = eb(e);
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
                }, O.Z.Millis.SECOND * ey);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function ev(e) {
    return r.useMemo(() => (0, w.b7)(e), [e]);
}
let eI = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eP({ quest: t }),
        a = (0, R.WD)();
    return () => {
        i
            ? (0, w.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: N.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, w.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: N.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eT() {
    let { quests: e, isFetchingCurrentQuests: t } = W({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = ef();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, w.vR)(t, D.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, w.zE)(t.userStatus, D.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function eS(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, w.Gs)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, p.Z)(t);
}
function eA(e) {
    let t = (0, c.e7)([P.Z], () => P.Z.quests),
        n = eS(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, w.NI)(t, U.tt);
            return (0, w.Jg)(n, e);
        }, [e, t, n]);
    return e_(i) ? null : i;
}
function eC(e) {
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
function eN() {
    let { fetching: e, accounts: t } = (0, c.cj)([E.Z], () => ({
            fetching: E.Z.isFetching(),
            accounts: E.Z.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === G.ABu.XBOX),
                r = e.filter((e) => e.type === G.ABu.PLAYSTATION),
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
let eR = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [o, l] = r.useState([]),
            [u, d] = r.useState(!1),
            f = (0, c.e7)([E.Z], () => E.Z.getAccounts());
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
    eP = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eN(),
            r = eb(t),
            i = 0 === n.length;
        return (0, w.$J)(t) && i && !r;
    },
    eD = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eN(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = v.Z.getArticleURL(G.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = v.Z.getArticleURL(G.BhN.QUEST_HOW_TO_XBOX),
            s = Z.intl.format(Z.t.beN4DG, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o,
            }),
            l = Z.intl.format(Z.t.HVS7nh, { helpdeskArticle: r ? a : o });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a,
        };
    };
var ew = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function eL(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = eO(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function ex(e) {
    let t = (0, c.e7)([m.default], () => m.default.locale),
        { percentComplete: n } = eO(e),
        r = ev(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        o =
            null != r
                ? "".concat(null == r ? void 0 : r.progress, "/").concat(null == r ? void 0 : r.target)
                : (0, T.T3)(t, i, { roundingMode: "floor" });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: o,
    };
}
function eM(e) {
    return [(0, c.e7)([P.Z], () => P.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, C.OR)(e, t), [e])];
}
function ek(e, t) {
    let [n, i] = eM(e.id),
        s = r.useMemo(() => (0, w.yH)(e), [e]),
        l = s.includes(U.cd.DESKTOP),
        c = s.includes(U.cd.CONSOLE),
        u = em(e),
        d = eg(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP }, () => U.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP_V2 }, () => U.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ACTIVITY }, () => U.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO }, () => U.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO_ON_MOBILE }, () => U.cd.DESKTOP)
                    .with({ taskType: o.X.STREAM_ON_DESKTOP }, () => U.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_XBOX }, () => U.cd.CONSOLE)
                    .with({ taskType: o.X.PLAY_ON_PLAYSTATION }, () => U.cd.CONSOLE)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_GAME }, () => U.cd.DESKTOP)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_ACTIVITY }, () => U.cd.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        _ = u ? U.cd.DESKTOP : d ? U.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: _,
                    selectedPlatform: n,
                })
                    .with({ currentProgressingPlatform: U.cd.CONSOLE }, () => D.LI.CONSOLE)
                    .with({ currentProgressingPlatform: U.cd.DESKTOP }, () => D.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: U.cd.CONSOLE,
                        },
                        () => D.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: U.cd.DESKTOP,
                        },
                        () => D.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: U.cd.CONSOLE,
                        },
                        () => D.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: U.cd.DESKTOP,
                        },
                        () => D.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null,
                        },
                        () => (c && l ? D.LI.SELECT : c ? D.LI.CONSOLE : D.LI.DESKTOP),
                    )
                    .exhaustive(),
            [c, l, f, _, n],
        ),
        s,
        i,
    ];
}
function ej(e) {
    var t, n;
    let r = ev(e),
        i = eO(e),
        [a] = ek(e, i),
        s = e_(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !s && u && (d || (f && a === D.LI.DESKTOP)),
        p = (0, S.isWeb)() && _ && !(0, w.Gd)(e),
        h = (0, S.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(Z.intl.string(Z.t.MFGxFM)), p && m.push(Z.intl.string(Z.t.BV6xDm)), m;
}
function eU(e) {
    var t;
    return null != (t = (0, c.e7)([P.Z], () => P.Z.quests).get(e)) ? t : null;
}
function eG(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != a &&
            o.current !== t &&
            ((0, N.Ic)({
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
                    (0, N.Ic)({
                        mode: null,
                        prevMode: o.current,
                        questContent: n,
                        questId: a,
                        sourceQuestContent: i,
                    });
                };
        }, [a, n, i]);
}
function eB(e, t) {
    let n = (0, c.e7)([P.Z], () => P.Z.getQuest(e), [e]),
        i = (0, u.ZP)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = null != t ? t : (0, l.wj)(i) ? G.BRd.DARK : G.BRd.LIGHT;
        return (0, j.fh)(n, j.eC.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eZ(e) {
    let t = (0, w.w8)(e),
        n = (0, w.Kr)(e),
        r = (0, w.FX)(e),
        i = (0, w._p)(e),
        a = (0, w.f$)(e),
        o = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
        s = (0, A.I5)(o, B.PremiumTypes.TIER_2);
    if (null == n) return Z.intl.formatToPlainString(Z.t.l9uXL8, { decorationName: t });
    let l = Z.intl.formatToPlainString(Z.t.o97tNn, { rewardName: t }),
        u = Z.intl.formatToPlainString(Z.t.PkyRZo, {
            rewardName: t,
            expirationDate: r,
        }),
        d = Z.intl.formatToPlainString(Z.t.ie4YK0, {
            rewardName: t,
            duration: n,
        }),
        f = Z.intl.formatToPlainString(Z.t.yCpc0U, {
            duration: n,
            rewardName: t,
        }),
        _ = s ? l : d,
        p = s ? u : f,
        h = i ? _ : p;
    return a
        ? h
        : Z.intl.formatToPlainString(Z.t.tTlItm, {
              duration: n,
              decorationName: t,
          });
}
function eF(e) {
    let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        n = (0, w.nY)(e);
    return {
        launchInGameActivity: r.useCallback(() => {
            null != n &&
                (null != t && t.applicationId === n
                    ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location)
                    : (0, h.uL)(G.Z5c.ACTIVITY_DETAILS(n)));
        }, [t, n]),
    };
}
let eV = () => (0, c.Wu)([P.Z], () => [...P.Z.quests.values()]).some((e) => e.preview),
    eH = () => {
        let e = (0, k.T)({ location: U.dr.QUEST_PREVIEW_TOOL_2 }),
            t = eV();
        return e && t;
    },
    eW = (e) => {
        var t;
        let n = (null == e ? void 0 : e.userStatus) != null && (0, w.zE)(e.userStatus, D.jn.ACTIVITY_PANEL),
            r = e_(null != e ? e : null),
            i = (null == e || null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
            a = (0, c.e7)([P.Z], () => null != P.Z.questEnrollmentBlockedUntil, []);
        return !n && !r && !i && !a;
    },
    eY = () => {
        let e = (0, c.Wu)([P.Z], () => [...P.Z.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eK() {
    return r.useMemo(
        () =>
            U.Ew.map((e) => {
                let [t, n] = e;
                return {
                    heading: (0, w.T2)(t),
                    options: n,
                };
            }),
        [],
    );
}
function ez() {
    return r.useMemo(
        () =>
            Object.keys(U.yq).map((e) => ({
                label: (0, w.NL)(U.yq[e]),
                value: U.yq[e],
            })),
        [],
    );
}
function eq(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = r.useRef(null),
        o = r.useRef(null);
    r.useEffect(() => {
        y.default.track(G.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
            sort_method: t,
            previous_sort_method: a.current,
        }),
            (a.current = t);
    }, [t]),
        r.useEffect(() => {
            var e;
            let t = n.map((e) => e.filter);
            y.default.track(G.rMx.QUEST_HOME_FILTERS_CHANGED, {
                filters: t,
                previous_filters: null != (e = o.current) ? e : [],
                num_quests_visible: i,
            }),
                (o.current = t);
        }, [n, i]);
}
let eX = (e) => {
        let t = !1,
            n = r.useMemo(() => {
                var e;
                return (null == (e = b.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0;
            }, []);
        return t || n || e.preview;
    },
    eQ = (e, t) => {
        var n, r, i;
        let a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null;
        return (
            (null == (r = e.userStatus) ? void 0 : r.enrolledAt) != null &&
            !a &&
            Date.now() - new Date(null == (i = e.userStatus) ? void 0 : i.enrolledAt).getTime() > t
        );
    };
function eJ() {
    let { enabled: e } = L.n0.useConfig({ location: U.dr.QUEST_HOME_DESKTOP }),
        [t, n] = r.useState(e),
        [i, a] = r.useState(e),
        [o, s] = r.useState(!1),
        [l, u] = r.useState(!1),
        { isFetching: d, takeoverConfig: f } = (0, c.cj)([P.Z], () => ({
            isFetching: P.Z.isFetchingQuestHomeTakeover(),
            takeoverConfig: P.Z.getQuestHomeTakeoverConfig(),
        })),
        _ = r.useMemo(() => {
            if (!e || null == f) return null;
            let t = new Date(),
                n = new Date(f.startsAt),
                r = new Date(f.expiresAt);
            return t < n || t > r ? null : f;
        }, [e, f]);
    return (
        r.useEffect(() => {
            e && t();
            async function t() {
                try {
                    await (0, C.Kh)();
                } catch (e) {
                    a(!1), s(!0);
                } finally {
                    n(!1);
                }
            }
        }, [e]),
        r.useEffect(() => {
            !(async function () {
                try {
                    if (null == f) return;
                    await Promise.all([(0, I.pt)(f.assetHeroImage.url), (0, I.pt)(f.assetSponsorImage.url)]);
                } catch (e) {
                    u(!0);
                } finally {
                    a(!1);
                }
            })();
        }, [f]),
        {
            takeover: o || l ? null : _,
            isLoading: t || d || i,
        }
    );
}
