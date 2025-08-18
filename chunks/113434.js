n.d(t, {
    B4: () => ev,
    B6: () => J,
    Bd: () => eE,
    GI: () => ef,
    Gd: () => eN,
    I: () => eg,
    J2: () => V,
    Jf: () => ea,
    KX: () => ep,
    OH: () => eh,
    Qy: () => eC,
    Rf: () => ei,
    Yj: () => Q,
    _Q: () => em,
    _s: () => e_,
    bA: () => K,
    e5: () => W,
    eN: () => z,
    eQ: () => eS,
    fN: () => ec,
    iO: () => el,
    kJ: () => eu,
    me: () => ey,
    qI: () => eT,
    qb: () => eO,
    sf: () => eI,
    t5: () => es,
    tP: () => X,
    uA: () => eo,
    vf: () => eA,
    z: () => en,
    z6: () => ed,
    zB: () => eR,
}),
    n(388685),
    n(642613),
    n(539854),
    n(953529),
    n(314940);
var r = n(647438),
    i = n(512722),
    a = n.n(i),
    o = n(278074),
    s = n(754700),
    l = n(959078),
    c = n(780384),
    u = n(442837),
    d = n(410030),
    f = n(317381),
    _ = n(197386),
    p = n(15624);
n(583434);
var h = n(703656),
    m = n(706454),
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
    N = n(272008),
    C = n(569984),
    R = n(497505),
    P = n(937797),
    w = n(977156),
    D = n(373370),
    L = n(475595),
    x = n(566078),
    M = n(46140),
    k = n(981631),
    j = n(474936),
    U = n(388032);
let G = -1,
    B = 1;
function V() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      fetchPolicy: "cache-only",
                      callerSource: "unknown",
                  },
        [t, n] = r.useState(!1),
        i = (0, u.Wu)([C.Z], () => [...C.Z.quests.values()]),
        a = (0, u.Wu)([C.Z], () => [...C.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: s } = (0, u.cj)([C.Z], () => ({
            isFetchingCurrentQuests: C.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: C.Z.lastFetchedCurrentQuests,
        })),
        l = (0, w.cB)({ location: M.dr.USE_QUESTS }),
        c = P.D.useConfig({ location: M.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !o
            ) {
                if ((n(!0), (0, N.xw)(), !c.enabled || "focused" === p.Z.getState()))
                    (0, N.w)(R.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource));
            }
        }, [e.fetchPolicy, l, t, o, s, e.callerSource, c.enabled]),
        {
            quests: i,
            excludedQuests: a,
            isFetchingCurrentQuests: o,
        }
    );
}
function F(e) {
    return e.sort((e, t) => {
        var n, r, i, a, o, s, l, c;
        let u = !(0, A.zi)(e);
        if (!(0, A.zi)(t) !== u) return u ? G : B;
        let d = (null == (n = e.userStatus) ? void 0 : n.claimedAt) != null,
            f = (null == (r = t.userStatus) ? void 0 : r.claimedAt) != null,
            _ = (null == (i = e.userStatus) ? void 0 : i.enrolledAt) != null,
            p = (null == (a = t.userStatus) ? void 0 : a.enrolledAt) != null;
        return u
            ? d !== f
                ? d
                    ? B
                    : G
                : _ !== p
                  ? _
                      ? G
                      : B
                  : Z(null == (o = e.config) ? void 0 : o.expiresAt, null == (s = t.config) ? void 0 : s.expiresAt, 1)
            : d !== f
              ? d
                  ? G
                  : B
              : _ !== p
                ? _
                    ? G
                    : B
                : Z(null == (l = e.config) ? void 0 : l.expiresAt, null == (c = t.config) ? void 0 : c.expiresAt, 0);
    });
}
function Z(e, t, n) {
    let r = 0 === n ? G : B;
    return e.localeCompare(t) * r;
}
function H(e) {
    let t = r.useRef([]);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (t.current.length > 0 && t.current.length === e.length) return t.current;
        let n = F(e).map((e) => e.id);
        return (t.current = n), n;
    }, [e]);
}
function Y(e) {
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
                    : Z(x.r.build(e.config).rewardsExpireAt, x.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var W = (function (e) {
    return (e.ALL = "all"), (e.CLAIMED = "claimed"), e;
})({});
function K(e) {
    let { quests: t, isFetchingCurrentQuests: n } = V({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        r = new Map(t.map((e) => [e.id, e])),
        i = H(t),
        a = Y(t),
        o = [],
        s = [];
    for (let t of (o = "all" === e ? i : a)) {
        let e = r.get(t);
        null != e && s.push(e);
    }
    return {
        quests: s,
        isFetchingCurrentQuests: n,
    };
}
function z() {
    let e = r.useRef(!1),
        t = (0, u.Wu)([C.Z], () => Array.from(C.Z.claimedQuests.values())),
        n = (0, u.e7)([C.Z], () => C.Z.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, N.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n,
        }
    );
}
function q() {
    return (0, u.e7)([C.Z], () => C.Z.getExpiredQuestsMap());
}
function X(e) {
    return (0, u.e7)([C.Z], () => null != e && C.Z.isQuestExpired(e.id), [e]);
}
function Q(e) {
    return r.useMemo(
        () => ((0, A.q8)(e) || (0, A.pO)(e) || (0, A.Vl)(e) ? U.intl.string(U.t.hvVgAQ) : U.intl.string(U.t.lwQdjI)),
        [e],
    );
}
function J(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, u.e7)([m.default], () => m.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function $(e) {
    return (0, u.e7)([C.Z], () => C.Z.isProgressingOnDesktop(e.id));
}
function ee(e) {
    return r.useMemo(() => (0, A.Bz)(e), [e]);
}
function et(e) {
    let t = (0, u.e7)([C.Z], () => C.Z.getOptimisticProgress(e.id, s.X.WATCH_VIDEO));
    return r.useMemo(() => (0, A.BM)(e), [e, t]);
}
function en(e) {
    let t = $(e),
        n = ee(e),
        r = et(e);
    return t || n || r;
}
let er = 1,
    ei = (e) => {
        let t = r.useCallback(() => (0, A.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = en(e);
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
                }, b.Z.Millis.SECOND * er);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function ea(e) {
    return r.useMemo(() => (0, A.b7)(e), [e]);
}
let eo = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = e_({ quest: t }),
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
function es(e, t, n, r) {
    let { targetMinutes: i } = ei(e),
        a = ea(e),
        o = eo({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        });
    if ((0, A.$J)(e) && !(0, A.Nj)({ quest: e }))
        return U.intl.format(U.t["l4S+cX"], {
            minutes: i,
            onClick: o,
            gameTitle: x.r.build(e.config).application.name,
        });
    if ((0, A.$J)(e))
        return U.intl.format(U.t.Ajlcd3, {
            minutes: i,
            onClick: o,
            gameTitle: x.r.build(e.config).application.name,
        });
    if ((0, A.q8)(e)) {
        let t = x.r.build(e.config).defaultWatchVideoTask,
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n ? U.intl.string(U.t["o+e9ys"]) : U.intl.formatToPlainString(U.t["9m9MnZ"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, A.pO)(e) && (0, A.KM)(e)) return U.intl.format(U.t["1NaRSk"], { minutes: i });
    let s = U.t["6zWtV1"];
    return (
        (0, A.Nj)({ quest: e }) && (s = U.t["wmOh/v"]),
        U.intl.format(s, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}
function el() {
    let { quests: e, isFetchingCurrentQuests: t } = V({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = q();
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
function ec(e) {
    let t = (0, u.e7)([C.Z], () => C.Z.quests),
        n = r.useMemo(() => {
            let n = (0, A.MM)(t, M.tt);
            return (0, A.Jg)(n, e);
        }, [e, t]);
    return X(n) ? null : n;
}
function eu(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, N.Wf)(e),
            handleProgress: (t) => (0, N.Wf)(e, t),
            handleResetStatusClick: () => (0, N.eT)(e),
            handleResetDismissibilityClick: () => (0, N.T0)(e),
            handleOverrideDeliveryClick: () => (0, N.EW)(e),
        }),
        [e],
    );
}
function ed() {
    let { fetching: e, accounts: t } = (0, u.cj)([g.Z], () => ({
            fetching: g.Z.isFetching(),
            accounts: g.Z.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === k.ABu.XBOX),
                r = e.filter((e) => e.type === k.ABu.PLAYSTATION),
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
let ef = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [o, s] = r.useState([]),
            [c, d] = r.useState(!1),
            f = (0, u.e7)([g.Z], () => g.Z.getAccounts());
        return (
            r.useEffect(() => {
                s((e) => e.filter((e) => e.type !== l.K.EXPIRED_CREDENTIAL));
            }, [f]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (c) return;
                    null == i || i(), d(!0);
                    let e = null;
                    try {
                        (e = await (0, N.CS)(t, n)), s(e.errorHints);
                    } finally {
                        var r;
                        d(!1), null == a || a(null != (r = null == e ? void 0 : e.errorHints) ? r : []);
                    }
                }, [c, i, a, n, t]),
                startingConsoleQuest: c,
                errorHints: o,
            }
        );
    },
    e_ = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ed(),
            r = en(t),
            i = 0 === n.length;
        return (0, A.$J)(t) && i && !r;
    },
    ep = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ed(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = y.Z.getArticleURL(k.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = y.Z.getArticleURL(k.BhN.QUEST_HOW_TO_XBOX),
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
var eh = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function em(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = ei(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function eg(e) {
    let t = (0, u.e7)([m.default], () => m.default.locale),
        { percentComplete: n } = ei(e),
        r = ea(e),
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
function eE(e, t) {
    var n, r;
    let i = ei(e),
        a = (0, A.b7)(e),
        o = (0, D.DD)({
            quest: e,
            taskDetails: i,
            location: M.dr.QUEST_HOME_DESKTOP,
            questContent: R.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
        }),
        s = (null == (n = e.userStatus) ? void 0 : n.claimedAt) != null,
        l = J(null == (r = e.userStatus) ? void 0 : r.claimedAt);
    return s
        ? U.intl.formatToPlainString(U.t.lOVr0N, { claimDate: l })
        : null != a
          ? a.description
          : null != o
            ? o
            : null;
}
function eb(e) {
    return [(0, u.e7)([C.Z], () => C.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, N.OR)(e, t), [e])];
}
function ey(e, t) {
    let [n, i] = eb(e.id),
        a = r.useMemo(() => (0, A.yH)(e), [e]),
        l = a.includes(M.cd.DESKTOP),
        c = a.includes(M.cd.CONSOLE),
        u = $(e),
        d = ee(e),
        f = r.useMemo(
            () =>
                (0, o.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: s.X.PLAY_ON_DESKTOP }, () => M.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ON_DESKTOP_V2 }, () => M.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ACTIVITY }, () => M.cd.DESKTOP)
                    .with({ taskType: s.X.WATCH_VIDEO }, () => M.cd.DESKTOP)
                    .with({ taskType: s.X.WATCH_VIDEO_ON_MOBILE }, () => M.cd.DESKTOP)
                    .with({ taskType: s.X.STREAM_ON_DESKTOP }, () => M.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ON_XBOX }, () => M.cd.CONSOLE)
                    .with({ taskType: s.X.PLAY_ON_PLAYSTATION }, () => M.cd.CONSOLE)
                    .with({ taskType: s.X.ACHIEVEMENT_IN_GAME }, () => M.cd.DESKTOP)
                    .with({ taskType: s.X.ACHIEVEMENT_IN_ACTIVITY }, () => M.cd.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        _ = u ? M.cd.DESKTOP : d ? M.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, o.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: _,
                    selectedPlatform: n,
                })
                    .with({ currentProgressingPlatform: M.cd.CONSOLE }, () => R.LI.CONSOLE)
                    .with({ currentProgressingPlatform: M.cd.DESKTOP }, () => R.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: M.cd.CONSOLE,
                        },
                        () => R.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: M.cd.DESKTOP,
                        },
                        () => R.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: M.cd.CONSOLE,
                        },
                        () => R.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: M.cd.DESKTOP,
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
        a,
        i,
    ];
}
function eO(e) {
    var t, n;
    let r = ea(e),
        i = ei(e),
        [a] = ey(e, i),
        o = X(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = s.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !o && u && (d || (f && a === R.LI.DESKTOP)),
        p = (0, v.isWeb)() && _ && !(0, A.Gd)(e),
        h = (0, v.isMac)() && i.taskType === s.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(U.intl.string(U.t.MFGxFB)), p && m.push(U.intl.string(U.t.BV6xDg)), m;
}
function ev(e) {
    var t;
    return null != (t = (0, u.e7)([C.Z], () => C.Z.quests).get(e)) ? t : null;
}
function eI(e) {
    let t = (0, u.e7)([C.Z], () => C.Z.getQuest(e), [e]);
    return a()(null != t, "Unknown quest ID ".concat(e)), t;
}
function eT(e) {
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
function eS(e) {
    var t, n;
    let r = (0, u.e7)([m.default], () => m.default.locale),
        i = ei(e),
        [a] = ey(e, i),
        o = ea(e),
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
function eA(e) {
    var t;
    let { quest: n, isExpanded: i, sourceQuestContent: a, activeScreen: o } = e,
        s = J(r.useMemo(() => x.r.build(n.config).rewardsExpireAt, [n.config])),
        l = ei(n),
        c = ea(n),
        u = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        d = en(n),
        f = (0, D.DD)({
            quest: n,
            location: M.dr.QUESTS_BAR,
            questContent: R.jn.QUEST_BAR_V2,
            taskDetails: l,
            sourceQuestContent: a,
        }),
        _ = null != c ? c.percentComplete : l.percentComplete;
    if (u) return U.intl.formatToPlainString(U.t.APddvL, { expirationDate: s });
    if (i)
        if (o === R.LI.SELECT) return U.intl.string(U.t.sWUpNz);
        else return f;
    if ((0, A.q8)(n)) return U.intl.string(U.t["o+e9ys"]);
    if (_ > 0)
        if (!d) return U.intl.string(U.t.mOrpXF);
        else
            return (0, A.AV)({
                quest: n,
                taskDetails: l,
                thirdPartyTaskDetails: null != c ? c : void 0,
            });
    return U.intl.string(U.t.S6UUc3);
}
function eN(e, t) {
    let n = (0, u.e7)([C.Z], () => C.Z.getQuest(e), [e]),
        i = (0, d.ZP)(),
        a = r.useMemo(() => (null == n ? void 0 : n.config.features.includes(M.S7.QUESTS_CDN)) === !0, [n]);
    return r.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, L.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, c.wj)(i) ? k.BRd.DARK : k.BRd.LIGHT,
                      newCdn: a,
                  }),
        [i, t, e, null == n ? void 0 : n.config.cosponsorMetadata, a],
    );
}
function eC(e) {
    let t = x.r.build(e).defaultRewardName,
        n = (0, A.Kr)(e),
        r = (0, A.FX)(e),
        i = (0, A._p)(e),
        a = (0, A.f$)(e),
        o = (0, u.e7)([E.default], () => E.default.getCurrentUser()),
        s = (0, I.I5)(o, j.p9.TIER_2);
    if (null == n) return U.intl.formatToPlainString(U.t.l9uXLy, { decorationName: t });
    let l = U.intl.formatToPlainString(U.t.o97tNj, { rewardName: t }),
        c = U.intl.formatToPlainString(U.t.PkyRZm, {
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
        p = s ? c : f,
        h = i ? _ : p;
    return a
        ? h
        : U.intl.formatToPlainString(U.t.tTlItr, {
              duration: n,
              decorationName: t,
          });
}
function eR(e) {
    let t = (0, u.e7)([f.ZP], () => f.ZP.getCurrentEmbeddedActivity());
    return {
        launchInGameActivity: r.useCallback(() => {
            null != t && t.applicationId === e.config.application.id
                ? (0, _.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location)
                : (0, h.uL)(k.Z5c.ACTIVITY_DETAILS(e.config.application.id));
        }, [t, e.config.application.id]),
    };
}
