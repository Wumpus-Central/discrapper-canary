n.d(t, {
    B4: () => ey,
    B6: () => X,
    Bd: () => em,
    GI: () => eu,
    Gd: () => eT,
    I: () => eh,
    J2: () => G,
    Jf: () => er,
    KX: () => ef,
    OH: () => e_,
    Qy: () => eS,
    Rf: () => en,
    Yj: () => q,
    _Q: () => ep,
    _s: () => ed,
    bA: () => Y,
    e5: () => H,
    eN: () => W,
    eQ: () => ev,
    fN: () => es,
    iO: () => eo,
    kJ: () => el,
    me: () => eE,
    qI: () => eO,
    qb: () => eb,
    t5: () => ea,
    tP: () => z,
    uA: () => ei,
    vf: () => eI,
    z: () => ee,
    z6: () => ec,
    zB: () => eA,
}),
    n(388685),
    n(642613),
    n(539854),
    n(953529),
    n(314940);
var r = n(647438);
n(512722);
var i = n(278074),
    a = n(754700),
    o = n(959078),
    s = n(780384),
    l = n(442837),
    c = n(410030),
    u = n(317381),
    d = n(197386),
    f = n(15624);
n(583434);
var _ = n(703656),
    p = n(706454),
    h = n(553795),
    m = n(594174),
    g = n(70956),
    E = n(63063),
    b = n(930153),
    y = n(358085),
    O = n(74538),
    v = n(617136),
    I = n(915750),
    T = n(509212),
    S = n(272008),
    A = n(569984),
    C = n(497505),
    N = n(937797),
    R = n(977156),
    P = n(373370),
    w = n(475595),
    D = n(566078),
    x = n(46140),
    L = n(981631),
    j = n(474936),
    M = n(388032);
let k = -1,
    U = 1;
function G() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      fetchPolicy: "cache-only",
                      callerSource: "unknown",
                  },
        [t, n] = r.useState(!1),
        i = (0, l.Wu)([A.Z], () => [...A.Z.quests.values()]),
        a = (0, l.Wu)([A.Z], () => [...A.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: s } = (0, l.cj)([A.Z], () => ({
            isFetchingCurrentQuests: A.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: A.Z.lastFetchedCurrentQuests,
        })),
        c = (0, R.cB)({ location: x.dr.USE_QUESTS }),
        u = N.D.useConfig({ location: x.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                c &&
                !t &&
                !o
            ) {
                if ((n(!0), (0, S.xw)(), !u.enabled || "focused" === f.Z.getState()))
                    (0, S.w)(C.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource));
            }
        }, [e.fetchPolicy, c, t, o, s, e.callerSource, u.enabled]),
        {
            quests: i,
            excludedQuests: a,
            isFetchingCurrentQuests: o,
            hasFetched: t,
        }
    );
}
function B(e) {
    return e.sort((e, t) => {
        var n, r, i, a, o, s, l, c;
        let u = !(0, T.zi)(e);
        if (!(0, T.zi)(t) !== u) return u ? k : U;
        let d = (null == (n = e.userStatus) ? void 0 : n.claimedAt) != null,
            f = (null == (r = t.userStatus) ? void 0 : r.claimedAt) != null,
            _ = (null == (i = e.userStatus) ? void 0 : i.enrolledAt) != null,
            p = (null == (a = t.userStatus) ? void 0 : a.enrolledAt) != null;
        return u
            ? d !== f
                ? d
                    ? U
                    : k
                : _ !== p
                  ? _
                      ? k
                      : U
                  : Z(null == (o = e.config) ? void 0 : o.expiresAt, null == (s = t.config) ? void 0 : s.expiresAt, 1)
            : d !== f
              ? d
                  ? k
                  : U
              : _ !== p
                ? _
                    ? k
                    : U
                : Z(null == (l = e.config) ? void 0 : l.expiresAt, null == (c = t.config) ? void 0 : c.expiresAt, 0);
    });
}
function Z(e, t, n) {
    let r = 0 === n ? k : U;
    return e.localeCompare(t) * r;
}
function V(e) {
    let t = r.useRef([]);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (t.current.length > 0 && t.current.length === e.length) return t.current;
        let n = B(e).map((e) => e.id);
        return (t.current = n), n;
    }, [e]);
}
function F(e) {
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
                        ? k
                        : U
                    : Z(D.r.build(e.config).rewardsExpireAt, D.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var H = (function (e) {
    return (e.ALL = "all"), (e.CLAIMED = "claimed"), e;
})({});
function Y(e) {
    let {
            quests: t,
            isFetchingCurrentQuests: n,
            hasFetched: r,
        } = G({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        i = new Map(t.map((e) => [e.id, e])),
        a = V(t),
        o = F(t),
        s = [],
        l = [];
    for (let t of (s = "all" === e ? a : o)) {
        let e = i.get(t);
        null != e && l.push(e);
    }
    return {
        quests: l,
        isFetchingCurrentQuests: n,
        hasFetched: r,
    };
}
function W() {
    let e = r.useRef(!1),
        t = (0, l.Wu)([A.Z], () => Array.from(A.Z.claimedQuests.values())),
        n = (0, l.e7)([A.Z], () => A.Z.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, S.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n,
        }
    );
}
function K() {
    return (0, l.e7)([A.Z], () => A.Z.getExpiredQuestsMap());
}
function z(e) {
    return (0, l.e7)([A.Z], () => null != e && A.Z.isQuestExpired(e.id), [e]);
}
function q(e) {
    return r.useMemo(
        () => ((0, T.q8)(e) || (0, T.pO)(e) || (0, T.Vl)(e) ? M.intl.string(M.t.hvVgAQ) : M.intl.string(M.t.lwQdjI)),
        [e],
    );
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, l.e7)([p.default], () => p.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function Q(e) {
    return (0, l.e7)([A.Z], () => A.Z.isProgressingOnDesktop(e.id));
}
function J(e) {
    return r.useMemo(() => (0, T.Bz)(e), [e]);
}
function $(e) {
    let t = (0, l.e7)([A.Z], () => A.Z.getOptimisticProgress(e.id, a.X.WATCH_VIDEO));
    return r.useMemo(() => (0, T.BM)(e), [e, t]);
}
function ee(e) {
    let t = Q(e),
        n = J(e),
        r = $(e);
    return t || n || r;
}
let et = 1,
    en = (e) => {
        let t = r.useCallback(() => (0, T.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = ee(e);
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
                }, g.Z.Millis.SECOND * et);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function er(e) {
    return r.useMemo(() => (0, T.b7)(e), [e]);
}
let ei = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = ed({ quest: t }),
        a = (0, I.WD)();
    return () => {
        i
            ? (0, T.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: v.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, T.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: v.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function ea(e, t, n, r) {
    let { targetMinutes: i } = en(e),
        a = er(e),
        o = ei({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        });
    if ((0, T.$J)(e) && !(0, T.Nj)({ quest: e }))
        return M.intl.format(M.t["l4S+cX"], {
            minutes: i,
            onClick: o,
            gameTitle: D.r.build(e.config).application.name,
        });
    if ((0, T.$J)(e))
        return M.intl.format(M.t.Ajlcd3, {
            minutes: i,
            onClick: o,
            gameTitle: D.r.build(e.config).application.name,
        });
    if ((0, T.q8)(e)) {
        let t = D.r.build(e.config).defaultWatchVideoTask,
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n ? M.intl.string(M.t["o+e9ys"]) : M.intl.formatToPlainString(M.t["9m9MnZ"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, T.pO)(e) && (0, T.KM)(e)) return M.intl.format(M.t["1NaRSk"], { minutes: i });
    let s = M.t["6zWtV1"];
    return (
        (0, T.Nj)({ quest: e }) && (s = M.t["wmOh/v"]),
        M.intl.format(s, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}
function eo() {
    let { quests: e, isFetchingCurrentQuests: t } = G({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = K();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, T.vR)(t, C.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, T.zE)(t.userStatus, C.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function es(e) {
    let t = (0, l.e7)([A.Z], () => A.Z.quests),
        n = r.useMemo(() => {
            let n = (0, T.MM)(t, x.tt);
            return (0, T.Jg)(n, e);
        }, [e, t]);
    return z(n) ? null : n;
}
function el(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, S.Wf)(e),
            handleProgress: (t) => (0, S.Wf)(e, t),
            handleResetStatusClick: () => (0, S.eT)(e),
            handleResetDismissibilityClick: () => (0, S.T0)(e),
            handleOverrideDeliveryClick: () => (0, S.EW)(e),
        }),
        [e],
    );
}
function ec() {
    let { fetching: e, accounts: t } = (0, l.cj)([h.Z], () => ({
            fetching: h.Z.isFetching(),
            accounts: h.Z.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === L.ABu.XBOX),
                r = e.filter((e) => e.type === L.ABu.PLAYSTATION),
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
let eu = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [s, c] = r.useState([]),
            [u, d] = r.useState(!1),
            f = (0, l.e7)([h.Z], () => h.Z.getAccounts());
        return (
            r.useEffect(() => {
                c((e) => e.filter((e) => e.type !== o.K.EXPIRED_CREDENTIAL));
            }, [f]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (u) return;
                    null == i || i(), d(!0);
                    let e = null;
                    try {
                        (e = await (0, S.CS)(t, n)), c(e.errorHints);
                    } finally {
                        var r;
                        d(!1), null == a || a(null != (r = null == e ? void 0 : e.errorHints) ? r : []);
                    }
                }, [u, i, a, n, t]),
                startingConsoleQuest: u,
                errorHints: s,
            }
        );
    },
    ed = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ec(),
            r = ee(t),
            i = 0 === n.length;
        return (0, T.$J)(t) && i && !r;
    },
    ef = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ec(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = E.Z.getArticleURL(L.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = E.Z.getArticleURL(L.BhN.QUEST_HOW_TO_XBOX),
            s = M.intl.format(M.t.beN4DA, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o,
            }),
            l = M.intl.format(M.t.HVS7np, { helpdeskArticle: r ? a : o });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a,
        };
    };
var e_ = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function ep(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = en(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function eh(e) {
    let t = (0, l.e7)([p.default], () => p.default.locale),
        { percentComplete: n } = en(e),
        r = er(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        o =
            null != r
                ? "".concat(null == r ? void 0 : r.progress, "/").concat(null == r ? void 0 : r.target)
                : (0, b.T3)(t, i, { roundingMode: "floor" });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: o,
    };
}
function em(e, t) {
    var n, r;
    let i = en(e),
        a = (0, T.b7)(e),
        o = (0, P.DD)({
            quest: e,
            taskDetails: i,
            location: x.dr.QUEST_HOME_DESKTOP,
            questContent: C.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
        }),
        s = (null == (n = e.userStatus) ? void 0 : n.claimedAt) != null,
        l = X(null == (r = e.userStatus) ? void 0 : r.claimedAt);
    return s
        ? M.intl.formatToPlainString(M.t.lOVr0N, { claimDate: l })
        : null != a
          ? a.description
          : null != o
            ? o
            : null;
}
function eg(e) {
    return [(0, l.e7)([A.Z], () => A.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, S.OR)(e, t), [e])];
}
function eE(e, t) {
    let [n, o] = eg(e.id),
        s = r.useMemo(() => (0, T.yH)(e), [e]),
        l = s.includes(x.cd.DESKTOP),
        c = s.includes(x.cd.CONSOLE),
        u = Q(e),
        d = J(e),
        f = r.useMemo(
            () =>
                (0, i.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: a.X.PLAY_ON_DESKTOP }, () => x.cd.DESKTOP)
                    .with({ taskType: a.X.PLAY_ON_DESKTOP_V2 }, () => x.cd.DESKTOP)
                    .with({ taskType: a.X.PLAY_ACTIVITY }, () => x.cd.DESKTOP)
                    .with({ taskType: a.X.WATCH_VIDEO }, () => x.cd.DESKTOP)
                    .with({ taskType: a.X.WATCH_VIDEO_ON_MOBILE }, () => x.cd.DESKTOP)
                    .with({ taskType: a.X.STREAM_ON_DESKTOP }, () => x.cd.DESKTOP)
                    .with({ taskType: a.X.PLAY_ON_XBOX }, () => x.cd.CONSOLE)
                    .with({ taskType: a.X.PLAY_ON_PLAYSTATION }, () => x.cd.CONSOLE)
                    .with({ taskType: a.X.ACHIEVEMENT_IN_GAME }, () => x.cd.DESKTOP)
                    .with({ taskType: a.X.ACHIEVEMENT_IN_ACTIVITY }, () => x.cd.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        _ = u ? x.cd.DESKTOP : d ? x.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, i.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: _,
                    selectedPlatform: n,
                })
                    .with({ currentProgressingPlatform: x.cd.CONSOLE }, () => C.LI.CONSOLE)
                    .with({ currentProgressingPlatform: x.cd.DESKTOP }, () => C.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: x.cd.CONSOLE,
                        },
                        () => C.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: x.cd.DESKTOP,
                        },
                        () => C.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: x.cd.CONSOLE,
                        },
                        () => C.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: x.cd.DESKTOP,
                        },
                        () => C.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null,
                        },
                        () => (c && l ? C.LI.SELECT : c ? C.LI.CONSOLE : C.LI.DESKTOP),
                    )
                    .exhaustive(),
            [c, l, f, _, n],
        ),
        s,
        o,
    ];
}
function eb(e) {
    var t, n;
    let r = er(e),
        i = en(e),
        [o] = eE(e, i),
        s = z(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = a.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !s && u && (d || (f && o === C.LI.DESKTOP)),
        p = (0, y.isWeb)() && _ && !(0, T.Gd)(e),
        h = (0, y.isMac)() && i.taskType === a.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(M.intl.string(M.t.MFGxFB)), p && m.push(M.intl.string(M.t.BV6xDg)), m;
}
function ey(e) {
    var t;
    return null != (t = (0, l.e7)([A.Z], () => A.Z.quests).get(e)) ? t : null;
}
function eO(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != a &&
            o.current !== t &&
            ((0, v.Ic)({
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
                    (0, v.Ic)({
                        mode: null,
                        prevMode: o.current,
                        questContent: n,
                        questId: a,
                        sourceQuestContent: i,
                    });
                };
        }, [a, n, i]);
}
function ev(e) {
    var t, n;
    let r = (0, l.e7)([p.default], () => p.default.locale),
        i = en(e),
        [a] = eE(e, i),
        o = er(e),
        s = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        c = null != o ? o.percentComplete : i.percentComplete;
    if (s) return M.intl.string(M.t["ij5E//"]);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && c > 0) {
        let e = (0, b.T3)(r, c, { roundingMode: "floor" });
        return M.intl.formatToPlainString(M.t.lVZaXF, { percent: e });
    }
    return a === C.LI.SELECT
        ? M.intl.string(M.t.EMrUHR)
        : (0, T.$J)(e)
          ? M.intl.string(M.t.mOrpXF)
          : M.intl.string(M.t["7e5k7O"]);
}
function eI(e) {
    var t;
    let { quest: n, isExpanded: i, sourceQuestContent: a, activeScreen: o } = e,
        s = X(r.useMemo(() => D.r.build(n.config).rewardsExpireAt, [n.config])),
        l = en(n),
        c = er(n),
        u = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        d = ee(n),
        f = (0, P.DD)({
            quest: n,
            location: x.dr.QUESTS_BAR,
            questContent: C.jn.QUEST_BAR_V2,
            taskDetails: l,
            sourceQuestContent: a,
        }),
        _ = null != c ? c.percentComplete : l.percentComplete;
    if (u) return M.intl.formatToPlainString(M.t.APddvL, { expirationDate: s });
    if (i)
        if (o === C.LI.SELECT) return M.intl.string(M.t.sWUpNz);
        else return f;
    if ((0, T.q8)(n)) return M.intl.string(M.t["o+e9ys"]);
    if (_ > 0)
        if (!d) return M.intl.string(M.t.mOrpXF);
        else
            return (0, T.AV)({
                quest: n,
                taskDetails: l,
                thirdPartyTaskDetails: null != c ? c : void 0,
            });
    return M.intl.string(M.t.S6UUc3);
}
function eT(e, t) {
    let n = (0, l.e7)([A.Z], () => A.Z.getQuest(e), [e]),
        i = (0, c.ZP)(),
        a = r.useMemo(() => (null == n ? void 0 : n.config.features.includes(x.S7.QUESTS_CDN)) === !0, [n]);
    return r.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, w.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, s.wj)(i) ? L.BRd.DARK : L.BRd.LIGHT,
                      newCdn: a,
                  }),
        [i, t, e, null == n ? void 0 : n.config.cosponsorMetadata, a],
    );
}
function eS(e) {
    let t = D.r.build(e).defaultRewardName,
        n = (0, T.Kr)(e),
        r = (0, T.FX)(e),
        i = (0, T._p)(e),
        a = (0, T.f$)(e),
        o = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
        s = (0, O.I5)(o, j.p9.TIER_2);
    if (null == n) return M.intl.formatToPlainString(M.t.l9uXLy, { decorationName: t });
    let c = M.intl.formatToPlainString(M.t.o97tNj, { rewardName: t }),
        u = M.intl.formatToPlainString(M.t.PkyRZm, {
            rewardName: t,
            expirationDate: r,
        }),
        d = M.intl.formatToPlainString(M.t.ie4YKy, {
            rewardName: t,
            duration: n,
        }),
        f = M.intl.formatToPlainString(M.t.yCpc0d, {
            duration: n,
            rewardName: t,
        }),
        _ = s ? c : d,
        p = s ? u : f,
        h = i ? _ : p;
    return a
        ? h
        : M.intl.formatToPlainString(M.t.tTlItr, {
              duration: n,
              decorationName: t,
          });
}
function eA(e) {
    let t = (0, l.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity());
    return {
        launchInGameActivity: r.useCallback(() => {
            null != t && t.applicationId === e.config.application.id
                ? (0, d.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location)
                : (0, _.uL)(L.Z5c.ACTIVITY_DETAILS(e.config.application.id));
        }, [t, e.config.application.id]),
    };
}
