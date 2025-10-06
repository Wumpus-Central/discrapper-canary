n.d(t, {
    B4: () => ek,
    B6: () => e_,
    Bd: () => eL,
    GI: () => eC,
    Gd: () => eZ,
    I: () => eD,
    J2: () => F,
    Jf: () => ey,
    KX: () => eR,
    MP: () => eK,
    OH: () => eP,
    Qy: () => eF,
    Rf: () => eb,
    Wi: () => ed,
    _Q: () => ew,
    _s: () => eN,
    aV: () => eY,
    bA: () => es,
    e5: () => ea,
    eN: () => el,
    eQ: () => eG,
    fN: () => eT,
    iO: () => eI,
    kJ: () => eS,
    ly: () => ef,
    me: () => eM,
    qI: () => eU,
    qb: () => ej,
    t5: () => ev,
    tP: () => eu,
    tR: () => eo,
    uA: () => eO,
    vf: () => eB,
    z: () => eg,
    z1: () => eW,
    z6: () => eA,
    zB: () => eV,
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
    w = n(36243),
    D = n(977156),
    L = n(373370),
    x = n(475595),
    M = n(566078),
    j = n(46140),
    k = n(981631),
    U = n(474936),
    G = n(388032);
let B = -1,
    Z = 1;
function F() {
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
        l = (0, D.c)({ location: j.dr.USE_QUESTS }),
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
function V(e, t) {
    var n, r, i, a;
    let o = !(0, A.zi)(e),
        s = (null == (n = e.userStatus) ? void 0 : n.claimedAt) != null,
        l = (null == (r = t.userStatus) ? void 0 : r.claimedAt) != null,
        c = (null == (i = e.userStatus) ? void 0 : i.enrolledAt) != null,
        u = (null == (a = t.userStatus) ? void 0 : a.enrolledAt) != null;
    return o
        ? s !== l
            ? s
                ? Z
                : B
            : c !== u
              ? c
                  ? B
                  : Z
              : en(e.config.expiresAt, t.config.expiresAt, 1)
        : s !== l
          ? s
              ? B
              : Z
          : c !== u
            ? c
                ? B
                : Z
            : en(e.config.expiresAt, t.config.expiresAt, 0);
}
function H(e, t) {
    return en(e.config.startsAt, t.config.startsAt, 0);
}
function Y(e, t) {
    var n, r;
    let i = null == (n = e.userStatus) ? void 0 : n.enrolledAt,
        a = null == (r = t.userStatus) ? void 0 : r.enrolledAt;
    return null == i && null == a
        ? en(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == a
          ? B
          : null == i && null != a
            ? Z
            : en(i, a, 0);
}
function W(e, t) {
    return en(e.config.expiresAt, t.config.expiresAt, 1);
}
function K(e) {
    return function (t, n) {
        let r = !(0, A.zi)(t);
        return !(0, A.zi)(n) !== r ? (r ? B : Z) : e(t, n);
    };
}
function z(e) {
    switch (e) {
        case j.yq.MOST_RECENT:
            return H;
        case j.yq.RECENTLY_ENROLLED:
            return Y;
        case j.yq.EXPIRING_SOON:
            return W;
        case j.yq.SUGGESTED:
        default:
            return V;
    }
}
function q(e, t) {
    switch (t) {
        case j.XJ.TASK_VIDEO:
            return (0, A.q8)(e);
        case j.XJ.TASK_PLAY:
            return (0, A.Nj)({ quest: e }) || (0, A.Dr)({ quest: e }) || (0, A.pO)(e);
        default:
            return !1;
    }
}
function X(e, t) {
    switch (t) {
        case j.XJ.REWARD_VIRTUAL_CURRENCY:
            return (0, A.xN)(e.config);
        case j.XJ.REWARD_COLLECTIBLE:
            return (0, A.Xv)(e.config);
        case j.XJ.REWARD_IN_GAME:
            return (0, A.vQ)(e.config) || (0, A.wj)(e.config);
        default:
            return !1;
    }
}
function Q(e) {
    switch (e) {
        case "task":
            return q;
        case "reward":
            return X;
    }
}
function J(e, t, n) {
    let r = Q(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function $(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return J(e, n, r);
        }),
    );
}
let ee = {};
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee,
        { sortMethod: n, filters: r } = t,
        i = null == r || 0 === r.length ? e : $(e, r),
        a = K(z(n));
    return i.sort(a);
}
function en(e, t, n) {
    let r = 0 === n ? B : Z;
    return e.localeCompare(t) * r;
}
function er(e, t, n) {
    let i = r.useRef([]),
        a = r.useRef(t.sortMethod),
        o = r.useRef(t.filters),
        s = r.useRef(n),
        l = r.useRef(0);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (
            i.current.length > 0 &&
            l.current === e.length &&
            a.current === t.sortMethod &&
            o.current === t.filters &&
            s.current === n
        )
            return i.current;
        let r = et(e, t).map((e) => e.id);
        return (
            (i.current = r),
            (a.current = t.sortMethod),
            (o.current = t.filters),
            (s.current = n),
            (l.current = e.length),
            r
        );
    }, [e, t, n]);
}
function ei(e) {
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
                        ? B
                        : Z
                    : en(M.r.build(e.config).rewardsExpireAt, M.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var ea = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    eo = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), e;
    })({});
function es(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        {
            quests: r,
            isFetchingCurrentQuests: i,
            hasFetched: a,
        } = F({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        o = new Map(r.map((e) => [e.id, e])),
        s = er(r, t, n),
        l = ei(r),
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
function el() {
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
function ec() {
    return (0, c.e7)([N.Z], () => N.Z.getExpiredQuestsMap());
}
function eu(e) {
    return (0, c.e7)([N.Z], () => null != e && N.Z.isQuestExpired(e.id), [e]);
}
function ed(e, t, n) {
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
function ef(e) {
    return r.useMemo(
        () =>
            (0, A.q8)(e) ||
            (0, A.Pb)(e) ||
            (0, A.pO)(e) ||
            (0, A.Vl)(e) ||
            e.config.features.includes(j.S7.NON_GAMING_PLAY_QUEST)
                ? G.intl.string(G.t.hvVgAQ)
                : G.intl.string(G.t.lwQdjI),
        [e],
    );
}
function e_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, c.e7)([h.default], () => h.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function ep(e) {
    return (0, c.e7)([N.Z], () => N.Z.isProgressingOnDesktop(e.id));
}
function eh(e) {
    return r.useMemo(() => (0, A.Bz)(e), [e]);
}
function em(e) {
    let t = (0, c.e7)([N.Z], () => N.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
    return r.useMemo(() => (0, A.BM)(e), [e, t]);
}
function eg(e) {
    let t = ep(e),
        n = eh(e),
        r = em(e);
    return t || n || r;
}
let eE = 1,
    eb = (e) => {
        let t = r.useCallback(() => (0, A.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = eg(e);
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
                }, b.Z.Millis.SECOND * eE);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function ey(e) {
    return r.useMemo(() => (0, A.b7)(e), [e]);
}
let eO = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eN({ quest: t }),
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
function ev(e, t, n, r) {
    let { targetMinutes: i } = eb(e),
        a = ey(e),
        o = eO({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, A.Pb)(e);
    if ((0, A.$J)(e) && !(0, A.Nj)({ quest: e }))
        return G.intl.format(G.t["l4S+cX"], {
            minutes: i,
            onClick: o,
            gameTitle: M.r.build(e.config).application.name,
        });
    if ((0, A.$J)(e))
        return s
            ? G.intl.format(G.t.gbtCpa, {
                  onClick: o,
                  minutes: i,
              })
            : G.intl.format(G.t.Ajlcd3, {
                  minutes: i,
                  onClick: o,
                  gameTitle: M.r.build(e.config).application.name,
              });
    if (s) return G.intl.format(G.t.Hu8SKS, { targetMinutes: i });
    if ((0, A.q8)(e)) {
        let t = M.r.build(e.config).defaultWatchVideoTask,
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n ? G.intl.string(G.t["o+e9ys"]) : G.intl.formatToPlainString(G.t["9m9MnZ"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, A.pO)(e))
        if ((0, A.KM)(e)) return G.intl.format(G.t["1NaRSk"], { minutes: i });
        else
            return G.intl.format(G.t.xHXCyc, {
                minutes: i,
                activityName: e.config.application.name,
            });
    let l = G.t["6zWtV1"];
    return (
        (0, A.Nj)({ quest: e }) &&
            (l = e.config.features.includes(j.S7.NON_GAMING_PLAY_QUEST) ? G.t.fe7XeX : G.t["wmOh/v"]),
        G.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}
function eI() {
    let { quests: e, isFetchingCurrentQuests: t } = F({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = ec();
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
function eT(e) {
    let t = (0, c.e7)([N.Z], () => N.Z.quests),
        n = r.useMemo(() => {
            let n = (0, A.NI)(t, j.tt);
            return (0, A.Jg)(n, e);
        }, [e, t]);
    return eu(n) ? null : n;
}
function eS(e) {
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
function eA() {
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
let eC = (e) => {
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
    eN = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eA(),
            r = eg(t),
            i = 0 === n.length;
        return (0, A.$J)(t) && i && !r;
    },
    eR = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eA(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = y.Z.getArticleURL(k.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = y.Z.getArticleURL(k.BhN.QUEST_HOW_TO_XBOX),
            s = G.intl.format(G.t.beN4DA, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o,
            }),
            l = G.intl.format(G.t.HVS7np, { helpdeskArticle: r ? a : o });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a,
        };
    };
var eP = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function ew(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = eb(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function eD(e) {
    let t = (0, c.e7)([h.default], () => h.default.locale),
        { percentComplete: n } = eb(e),
        r = ey(e),
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
function eL(e, t, n) {
    var r, i;
    let a = eb(e),
        o = (0, A.b7)(e),
        s = (0, L.DD)({
            quest: e,
            taskDetails: a,
            location: j.dr.QUEST_HOME_DESKTOP,
            questContent: R.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: n,
        }),
        l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        c = e_(null == (i = e.userStatus) ? void 0 : i.claimedAt);
    return l
        ? G.intl.formatToPlainString(G.t.lOVr0N, { claimDate: c })
        : null != o
          ? o.description
          : null != s
            ? s
            : null;
}
function ex(e) {
    return [(0, c.e7)([N.Z], () => N.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, C.OR)(e, t), [e])];
}
function eM(e, t) {
    let [n, i] = ex(e.id),
        s = r.useMemo(() => (0, A.yH)(e), [e]),
        l = s.includes(j.cd.DESKTOP),
        c = s.includes(j.cd.CONSOLE),
        u = ep(e),
        d = eh(e),
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
function ej(e) {
    var t, n;
    let r = ey(e),
        i = eb(e),
        [a] = eM(e, i),
        s = eu(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !s && u && (d || (f && a === R.LI.DESKTOP)),
        p = (0, v.isWeb)() && _ && !(0, A.Gd)(e),
        h = (0, v.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(G.intl.string(G.t.MFGxFB)), p && m.push(G.intl.string(G.t.BV6xDg)), m;
}
function ek(e) {
    var t;
    return null != (t = (0, c.e7)([N.Z], () => N.Z.quests).get(e)) ? t : null;
}
function eU(e) {
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
function eG(e) {
    var t, n;
    let r = (0, c.e7)([h.default], () => h.default.locale),
        i = eb(e),
        [a] = eM(e, i),
        o = ey(e),
        s = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        l = null != o ? o.percentComplete : i.percentComplete;
    if (s) return G.intl.string(G.t["ij5E//"]);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && l > 0) {
        let e = (0, O.T3)(r, l, { roundingMode: "floor" });
        return G.intl.formatToPlainString(G.t.lVZaXF, { percent: e });
    }
    return a === R.LI.SELECT
        ? G.intl.string(G.t.EMrUHR)
        : (0, A.$J)(e)
          ? G.intl.string(G.t.mOrpXF)
          : G.intl.string(G.t["7e5k7O"]);
}
function eB(e) {
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
        d = e_(r.useMemo(() => M.r.build(i.config).rewardsExpireAt, [i.config])),
        f = eb(i),
        _ = ey(i),
        p = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null,
        h = (null == (n = i.userStatus) ? void 0 : n.enrolledAt) != null,
        m = f.percentComplete > 0,
        g = eg(i),
        E = (0, L.DD)({
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
    if (p) return G.intl.formatToPlainString(G.t.APddvL, { expirationDate: d });
    if (a)
        if (s === R.LI.SELECT) return G.intl.string(G.t.sWUpNz);
        else {
            if (!(0, A.Pb)(i) || !h || m) return E;
            let e = M.r.build(i.config).defaultRewardNameWithArticle;
            return G.intl.format(G.t["1votFx"], {
                rewardNameWithArticle: e,
                targetMinutes: f.targetMinutes,
            });
        }
    if ((0, A.q8)(i)) return G.intl.string(G.t["o+e9ys"]);
    if (b > 0)
        if (!g) return G.intl.string(G.t.mOrpXF);
        else
            return (0, A.AV)({
                quest: i,
                taskDetails: f,
                thirdPartyTaskDetails: null != _ ? _ : void 0,
            });
    return G.intl.string(G.t.S6UUc3);
}
function eZ(e, t) {
    let n = (0, c.e7)([N.Z], () => N.Z.getQuest(e), [e]),
        i = (0, u.ZP)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = null != t ? t : (0, l.wj)(i) ? k.BRd.DARK : k.BRd.LIGHT;
        return (0, x.fh)(n, x.eC.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eF(e) {
    let t = M.r.build(e).defaultRewardName,
        n = (0, A.Kr)(e),
        r = (0, A.FX)(e),
        i = (0, A._p)(e),
        a = (0, A.f$)(e),
        o = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
        s = (0, I.I5)(o, U.p9.TIER_2);
    if (null == n) return G.intl.formatToPlainString(G.t.l9uXLy, { decorationName: t });
    let l = G.intl.formatToPlainString(G.t.o97tNj, { rewardName: t }),
        u = G.intl.formatToPlainString(G.t.PkyRZm, {
            rewardName: t,
            expirationDate: r,
        }),
        d = G.intl.formatToPlainString(G.t.ie4YKy, {
            rewardName: t,
            duration: n,
        }),
        f = G.intl.formatToPlainString(G.t.yCpc0d, {
            duration: n,
            rewardName: t,
        }),
        _ = s ? l : d,
        p = s ? u : f,
        h = i ? _ : p;
    return a
        ? h
        : G.intl.formatToPlainString(G.t.tTlItr, {
              duration: n,
              decorationName: t,
          });
}
function eV(e) {
    let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity());
    return {
        launchInGameActivity: r.useCallback(() => {
            null != t && t.applicationId === e.config.application.id
                ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location)
                : (0, p.uL)(k.Z5c.ACTIVITY_DETAILS(e.config.application.id));
        }, [t, e.config.application.id]),
    };
}
let eH = () => (0, c.Wu)([N.Z], () => [...N.Z.quests.values()]).some((e) => e.preview),
    eY = () => {
        let e = (0, w.T)({ location: j.dr.QUEST_PREVIEW_TOOL_2 }),
            t = eH();
        return e && t;
    },
    eW = (e) => {
        var t;
        let n = (null == e ? void 0 : e.userStatus) != null && (0, A.zE)(e.userStatus, R.jn.ACTIVITY_PANEL),
            r = eu(null != e ? e : null),
            i = (null == e || null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
            a = (0, c.e7)([N.Z], () => null != N.Z.questEnrollmentBlockedUntil, []);
        return !n && !r && !i && !a;
    },
    eK = () => {
        let e = (0, c.Wu)([N.Z], () => [...N.Z.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
