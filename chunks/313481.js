n.d(t, {
    $I: () => eQ,
    B4: () => eZ,
    B6: () => eg,
    Fy: () => eC,
    GI: () => ew,
    Gd: () => eF,
    I: () => eM,
    J2: () => K,
    Jf: () => eI,
    KX: () => ex,
    MP: () => ez,
    N8: () => eq,
    OH: () => eL,
    Qy: () => eV,
    Rf: () => eS,
    SU: () => eX,
    Ut: () => e0,
    Wi: () => eh,
    _Q: () => ej,
    _s: () => eD,
    aV: () => eW,
    bA: () => ef,
    e5: () => eu,
    eN: () => ep,
    fN: () => eN,
    iO: () => eA,
    kJ: () => eP,
    m4: () => eJ,
    me: () => eU,
    qI: () => eB,
    qb: () => eG,
    tP: () => em,
    tR: () => ed,
    uA: () => eT,
    wF: () => W,
    z: () => eO,
    z1: () => eK,
    z6: () => eR,
    zB: () => eH,
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
    p = n(15624),
    _ = n(835473);
n(583434);
var m = n(703656),
    h = n(706454),
    g = n(592125),
    E = n(553795),
    b = n(594174),
    y = n(626135),
    O = n(70956),
    v = n(63063),
    S = n(956664),
    I = n(930153),
    T = n(358085),
    A = n(74538),
    C = n(22095),
    N = n(617136),
    P = n(915750),
    R = n(616022),
    w = n(49436),
    D = n(509212),
    x = n(937797),
    L = n(704161),
    j = n(787695),
    M = n(36243),
    k = n(475595),
    U = n(115179),
    G = n(542347),
    Z = n(324805),
    B = n(981631),
    F = n(474936),
    V = n(388032);
let H = -1,
    Y = 1,
    W = "1410358070831480904";
function K() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      fetchPolicy: "cache-only",
                      callerSource: "unknown",
                  },
        [t, n] = r.useState(!1),
        i = (0, c.Wu)([R.Z], () => [...R.Z.quests.values()]),
        a = (0, c.Wu)([R.Z], () => [...R.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: s } = (0, c.cj)([R.Z], () => ({
            isFetchingCurrentQuests: R.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: R.Z.lastFetchedCurrentQuests,
        })),
        l = (0, j.c)({ location: Z.dr.USE_QUESTS }),
        u = x.DL.useConfig({ location: Z.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !o
            ) {
                if ((n(!0), (0, C.xw)(), u.enabled && "focused" !== p.Z.getState())) return;
                let { enableNewRequestBehavior: t } = L.Z.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, C.w)(w.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource));
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
function z(e, t) {
    var n, r, i, a, o, s;
    let l = e.id === W,
        c = t.id === W,
        u = l && (null == (n = e.userStatus) ? void 0 : n.completedAt) == null;
    if (u !== (c && (null == (r = t.userStatus) ? void 0 : r.completedAt) == null)) return u ? H : Y;
    let d = !(0, D.zi)(e),
        f = (null == (i = e.userStatus) ? void 0 : i.claimedAt) != null,
        p = (null == (a = t.userStatus) ? void 0 : a.claimedAt) != null,
        _ = (null == (o = e.userStatus) ? void 0 : o.enrolledAt) != null,
        m = (null == (s = t.userStatus) ? void 0 : s.enrolledAt) != null,
        { enabled: h, minutes: g } = (0, x.eC)(Z.dr.QUEST_HOME_DESKTOP),
        E = O.Z.Millis.MINUTE * g,
        b = e$(e, E),
        y = e$(t, E);
    return d
        ? h && b !== y && (b || y)
            ? b
                ? Y
                : H
            : f !== p
              ? f
                  ? Y
                  : H
              : _ !== m
                ? _
                    ? H
                    : Y
                : es(e.config.expiresAt, t.config.expiresAt, 1)
        : f !== p
          ? f
              ? H
              : Y
          : _ !== m
            ? _
                ? H
                : Y
            : es(e.config.expiresAt, t.config.expiresAt, 0);
}
function q(e, t) {
    return es(e.config.startsAt, t.config.startsAt, 0);
}
function Q(e, t) {
    var n, r;
    let i = null == (n = e.userStatus) ? void 0 : n.enrolledAt,
        a = null == (r = t.userStatus) ? void 0 : r.enrolledAt;
    return null == i && null == a
        ? es(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == a
          ? H
          : null == i && null != a
            ? Y
            : es(i, a, 0);
}
function X(e, t) {
    return es(e.config.expiresAt, t.config.expiresAt, 1);
}
function J(e) {
    return function (t, n) {
        let r = !(0, D.zi)(t);
        return !(0, D.zi)(n) !== r ? (r ? H : Y) : e(t, n);
    };
}
function $(e) {
    switch (e) {
        case Z.yq.MOST_RECENT:
            return q;
        case Z.yq.RECENTLY_ENROLLED:
            return Q;
        case Z.yq.EXPIRING_SOON:
            return X;
        case Z.yq.SUGGESTED:
        default:
            return z;
    }
}
function ee(e, t) {
    switch (t) {
        case Z.oH.VIDEO:
            return (0, D.q8)(e);
        case Z.oH.PLAY:
            return (0, D.Nj)({ quest: e }) || (0, D.Dr)({ quest: e }) || (0, D.pO)(e);
        default:
            return !1;
    }
}
function et(e, t) {
    switch (t) {
        case Z.UP.VIRTUAL_CURRENCY:
            return (0, U.xN)(e.config);
        case Z.UP.COLLECTIBLE:
            return (0, U.Xv)(e.config);
        case Z.UP.IN_GAME:
            return (0, U.vQ)(e.config) || (0, U.wj)(e.config);
        default:
            return !1;
    }
}
function en(e) {
    switch (e) {
        case "task":
            return ee;
        case "reward":
            return et;
    }
}
function er(e, t, n) {
    let r = en(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function ei(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return er(e, n, r);
        }),
    );
}
let ea = {};
function eo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea,
        { sortMethod: n, filters: r } = t,
        i = null == r || 0 === r.length ? e : ei(e, r),
        a = J($(n));
    return i.sort(a);
}
function es(e, t, n) {
    let r = 0 === n ? H : Y;
    return e.localeCompare(t) * r;
}
function el(e, t) {
    let n = r.useRef([]),
        i = r.useRef(t.sortMethod),
        a = r.useRef(t.filters),
        o = r.useRef(0);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (n.current.length > 0 && o.current === e.length && i.current === t.sortMethod && a.current === t.filters)
            return n.current;
        let r = eo(e, t).map((e) => e.id);
        return (n.current = r), (i.current = t.sortMethod), (a.current = t.filters), (o.current = e.length), r;
    }, [e, t]);
}
function ec(e) {
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
                        ? H
                        : Y
                    : es(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var eu = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    ed = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function ef(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: a,
        } = K({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        o = new Map(n.map((e) => [e.id, e])),
        s = el(n, t),
        l = ec(n),
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
function ep() {
    let e = r.useRef(!1),
        t = (0, c.Wu)([R.Z], () => Array.from(R.Z.claimedQuests.values())),
        n = (0, c.e7)([R.Z], () => R.Z.isFetchingClaimedQuests);
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
function e_() {
    return (0, c.e7)([R.Z], () => R.Z.getExpiredQuestsMap());
}
function em(e) {
    return (0, c.e7)([R.Z], () => null != e && R.Z.isQuestExpired(e.id), [e]);
}
function eh(e, t, n) {
    var r;
    let i = (0, c.e7)([g.Z], () => {
            var e;
            return null != (e = g.Z.getChannel(null == t ? void 0 : t.channelId)) ? e : null;
        }),
        a = (0, c.e7)([R.Z], () => null != R.Z.questEnrollmentBlockedUntil, []),
        o =
            (0, c.e7)([b.default], () => {
                var e;
                return null == (e = b.default.getCurrentUser()) ? void 0 : e.id;
            }) === n,
        s = (0, c.e7)([R.Z], () => null != e && R.Z.isQuestExpired(e.id), [e]);
    if (null == e || a || s || o) return !1;
    let l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        u = (0, D.Rc)(t, i);
    return !l || !!u;
}
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, c.e7)([h.default], () => h.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eE(e) {
    return (0, c.e7)([R.Z], () => R.Z.isProgressingOnDesktop(e.id));
}
function eb(e) {
    return r.useMemo(() => (0, D.Bz)(e), [e]);
}
function ey(e) {
    let t = (0, c.e7)([R.Z], () => R.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
    return r.useMemo(() => (0, G.BM)(e), [e, t]);
}
function eO(e) {
    let t = eE(e),
        n = eb(e),
        r = ey(e);
    return t || n || r;
}
let ev = 1,
    eS = (e) => {
        let t = r.useCallback(() => (0, D.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = eO(e);
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
                }, O.Z.Millis.SECOND * ev);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function eI(e) {
    return r.useMemo(() => (0, D.b7)(e), [e]);
}
let eT = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eD({ quest: t }),
        a = (0, P.WD)();
    return () => {
        i
            ? (0, D.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: N.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, D.V$)(
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
function eA() {
    let { quests: e, isFetchingCurrentQuests: t } = K({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = e_();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, D.vR)(t, w.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, D.zE)(t.userStatus, w.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function eC(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, D.Gs)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, _.Z)(t);
}
function eN(e) {
    let t = (0, c.e7)([R.Z], () => R.Z.quests),
        n = eC(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, D.NI)(t, Z.tt);
            return (0, D.Jg)(n, e);
        }, [e, t, n]);
    return em(i) ? null : i;
}
function eP(e) {
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
function eR() {
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
                n = e.filter((e) => e.type === B.ABu.XBOX),
                r = e.filter((e) => e.type === B.ABu.PLAYSTATION),
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
let ew = (e) => {
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
    eD = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eR(),
            r = eO(t),
            i = 0 === n.length;
        return (0, D.$J)(t) && i && !r;
    },
    ex = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eR(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = v.Z.getArticleURL(B.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = v.Z.getArticleURL(B.BhN.QUEST_HOW_TO_XBOX),
            s = V.intl.format(V.t.beN4DG, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o,
            }),
            l = V.intl.format(V.t.HVS7nh, { helpdeskArticle: r ? a : o });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a,
        };
    };
var eL = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function ej(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = eS(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function eM(e) {
    let t = (0, c.e7)([h.default], () => h.default.locale),
        { percentComplete: n } = eS(e),
        r = eI(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        o =
            null != r
                ? "".concat(null == r ? void 0 : r.progress, "/").concat(null == r ? void 0 : r.target)
                : (0, I.T3)(t, i, { roundingMode: "floor" });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: o,
    };
}
function ek(e) {
    return [(0, c.e7)([R.Z], () => R.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, C.OR)(e, t), [e])];
}
function eU(e, t) {
    let [n, i] = ek(e.id),
        s = r.useMemo(() => (0, D.yH)(e), [e]),
        l = s.includes(Z.cd.DESKTOP),
        c = s.includes(Z.cd.CONSOLE),
        u = eE(e),
        d = eb(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP }, () => Z.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP_V2 }, () => Z.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ACTIVITY }, () => Z.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO }, () => Z.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO_ON_MOBILE }, () => Z.cd.DESKTOP)
                    .with({ taskType: o.X.STREAM_ON_DESKTOP }, () => Z.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_XBOX }, () => Z.cd.CONSOLE)
                    .with({ taskType: o.X.PLAY_ON_PLAYSTATION }, () => Z.cd.CONSOLE)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_GAME }, () => Z.cd.DESKTOP)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_ACTIVITY }, () => Z.cd.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        p = u ? Z.cd.DESKTOP : d ? Z.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: p,
                    selectedPlatform: n,
                })
                    .with({ currentProgressingPlatform: Z.cd.CONSOLE }, () => w.LI.CONSOLE)
                    .with({ currentProgressingPlatform: Z.cd.DESKTOP }, () => w.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: Z.cd.CONSOLE,
                        },
                        () => w.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: Z.cd.DESKTOP,
                        },
                        () => w.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: Z.cd.CONSOLE,
                        },
                        () => w.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: Z.cd.DESKTOP,
                        },
                        () => w.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null,
                        },
                        () => (c && l ? w.LI.SELECT : c ? w.LI.CONSOLE : w.LI.DESKTOP),
                    )
                    .exhaustive(),
            [c, l, f, p, n],
        ),
        s,
        i,
    ];
}
function eG(e) {
    var t, n;
    let r = eI(e),
        i = eS(e),
        [a] = eU(e, i),
        s = em(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        p = l && !c && !s && u && (d || (f && a === w.LI.DESKTOP)),
        _ = (0, T.isWeb)() && p && !(0, D.Gd)(e),
        m = (0, T.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && p,
        h = [];
    return m && h.push(V.intl.string(V.t.MFGxFM)), _ && h.push(V.intl.string(V.t.BV6xDm)), h;
}
function eZ(e) {
    var t;
    return null != (t = (0, c.e7)([R.Z], () => R.Z.quests).get(e)) ? t : null;
}
function eB(e) {
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
function eF(e, t) {
    let n = (0, c.e7)([R.Z], () => R.Z.getQuest(e), [e]),
        i = (0, u.ZP)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = null != t ? t : (0, l.wj)(i) ? B.BRd.DARK : B.BRd.LIGHT;
        return (0, k.fh)(n, k.eC.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eV(e) {
    let t = (0, U.w8)(e),
        n = (0, U.Kr)(e),
        r = (0, U.FX)(e),
        i = (0, U._p)(e),
        a = (0, U.f$)(e),
        o = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
        s = (0, A.I5)(o, F.PremiumTypes.TIER_2);
    if (null == n) return V.intl.formatToPlainString(V.t.l9uXL8, { decorationName: t });
    let l = V.intl.formatToPlainString(V.t.o97tNn, { rewardName: t }),
        u = V.intl.formatToPlainString(V.t.PkyRZo, {
            rewardName: t,
            expirationDate: r,
        }),
        d = V.intl.formatToPlainString(V.t.ie4YK0, {
            rewardName: t,
            duration: n,
        }),
        f = V.intl.formatToPlainString(V.t.yCpc0U, {
            duration: n,
            rewardName: t,
        }),
        p = s ? l : d,
        _ = s ? u : f,
        m = i ? p : _;
    return a
        ? m
        : V.intl.formatToPlainString(V.t.tTlItm, {
              duration: n,
              decorationName: t,
          });
}
function eH(e) {
    let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        n = (0, D.nY)(e);
    return {
        launchInGameActivity: r.useCallback(() => {
            null != n &&
                (null != t && t.applicationId === n
                    ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location)
                    : (0, m.uL)(B.Z5c.ACTIVITY_DETAILS(n)));
        }, [t, n]),
    };
}
let eY = () => (0, c.Wu)([R.Z], () => [...R.Z.quests.values()]).some((e) => e.preview),
    eW = () => {
        let e = (0, M.T)({ location: Z.dr.QUEST_PREVIEW_TOOL_2 }),
            t = eY();
        return e && t;
    },
    eK = (e) => {
        var t;
        let n = (null == e ? void 0 : e.userStatus) != null && (0, D.zE)(e.userStatus, w.jn.ACTIVITY_PANEL),
            r = em(null != e ? e : null),
            i = (null == e || null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
            a = (0, c.e7)([R.Z], () => null != R.Z.questEnrollmentBlockedUntil, []);
        return !n && !r && !i && !a;
    },
    ez = () => {
        let e = (0, c.Wu)([R.Z], () => [...R.Z.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eq() {
    return r.useMemo(
        () =>
            Z.Ew.map((e) => {
                let [t, n] = e;
                return {
                    heading: (0, D.T2)(t),
                    options: n,
                };
            }),
        [],
    );
}
function eQ() {
    return r.useMemo(
        () =>
            Object.keys(Z.yq).map((e) => ({
                label: (0, D.NL)(Z.yq[e]),
                value: Z.yq[e],
            })),
        [],
    );
}
function eX(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = r.useRef(null),
        o = r.useRef(null);
    r.useEffect(() => {
        y.default.track(B.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
            sort_method: t,
            previous_sort_method: a.current,
        }),
            (a.current = t);
    }, [t]),
        r.useEffect(() => {
            var e;
            let t = n.map((e) => e.filter);
            y.default.track(B.rMx.QUEST_HOME_FILTERS_CHANGED, {
                filters: t,
                previous_filters: null != (e = o.current) ? e : [],
                num_quests_visible: i,
            }),
                (o.current = t);
        }, [n, i]);
}
let eJ = (e) => {
        let t = !1,
            n = r.useMemo(() => {
                var e;
                return (null == (e = b.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0;
            }, []);
        return t || n || e.preview;
    },
    e$ = (e, t) => {
        var n, r, i;
        let a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null;
        return (
            (null == (r = e.userStatus) ? void 0 : r.enrolledAt) != null &&
            !a &&
            Date.now() - new Date(null == (i = e.userStatus) ? void 0 : i.enrolledAt).getTime() > t
        );
    };
function e0() {
    let { enabled: e } = x.n0.useConfig({ location: Z.dr.QUEST_HOME_DESKTOP }),
        [t, n] = r.useState(e),
        [i, a] = r.useState(e),
        [o, s] = r.useState(!1),
        [l, u] = r.useState(!1),
        { isFetching: d, takeoverConfig: f } = (0, c.cj)([R.Z], () => ({
            isFetching: R.Z.isFetchingQuestHomeTakeover(),
            takeoverConfig: R.Z.getQuestHomeTakeoverConfig(),
        })),
        p = r.useMemo(() => {
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
                    await Promise.all([(0, S.pt)(f.assetHeroImage.url), (0, S.pt)(f.assetSponsorImage.url)]);
                } catch (e) {
                    u(!0);
                } finally {
                    a(!1);
                }
            })();
        }, [f]),
        {
            takeover: o || l ? null : p,
            isLoading: t || d || i,
        }
    );
}
