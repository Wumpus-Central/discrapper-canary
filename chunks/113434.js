n.d(t, {
    $I: () => eJ,
    B4: () => eB,
    B6: () => em,
    Bd: () => ej,
    GI: () => eP,
    Gd: () => eH,
    I: () => eM,
    J2: () => Y,
    Jf: () => eI,
    KX: () => eD,
    MP: () => eX,
    N8: () => eQ,
    OH: () => ex,
    Qy: () => eY,
    Rf: () => ev,
    SU: () => e$,
    Wi: () => ep,
    _Q: () => eL,
    _s: () => ew,
    aV: () => ez,
    bA: () => eu,
    e5: () => el,
    eN: () => ed,
    eQ: () => eF,
    fN: () => eC,
    iO: () => eA,
    kJ: () => eN,
    ly: () => eh,
    me: () => eU,
    qI: () => eZ,
    qb: () => eG,
    t5: () => eS,
    tP: () => e_,
    tR: () => ec,
    uA: () => eT,
    vf: () => eV,
    z: () => ey,
    z1: () => eq,
    z6: () => eR,
    zB: () => eW,
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
    b = n(626135),
    y = n(70956),
    O = n(63063),
    v = n(930153),
    I = n(358085),
    T = n(74538),
    S = n(22095),
    A = n(617136),
    C = n(915750),
    N = n(509212),
    R = n(569984),
    P = n(497505),
    w = n(937797),
    D = n(704161),
    x = n(36243),
    L = n(977156),
    M = n(373370),
    j = n(475595),
    k = n(566078),
    U = n(46140),
    G = n(981631),
    B = n(474936),
    Z = n(388032);
let F = -1,
    V = 1,
    H = "1410358070831480904";
function Y() {
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
        l = (0, L.c)({ location: U.dr.USE_QUESTS }),
        u = w.DL.useConfig({ location: U.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !o
            ) {
                if ((n(!0), (0, S.xw)(), !u.enabled || "focused" === _.Z.getState())) {
                    let { enableNewRequestBehavior: t } = D.Z.getConfig({ location: "QuestHookUseQuests" });
                    if (t) return;
                    (0, S.w)(P.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource));
                }
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
function W(e, t) {
    var n, r, i, a, o, s;
    let l = e.id === H,
        c = t.id === H,
        u = l && (null == (n = e.userStatus) ? void 0 : n.completedAt) == null;
    if (u !== (c && (null == (r = t.userStatus) ? void 0 : r.completedAt) == null)) return u ? F : V;
    let d = !(0, N.zi)(e),
        f = (null == (i = e.userStatus) ? void 0 : i.claimedAt) != null,
        _ = (null == (a = t.userStatus) ? void 0 : a.claimedAt) != null,
        p = (null == (o = e.userStatus) ? void 0 : o.enrolledAt) != null,
        h = (null == (s = t.userStatus) ? void 0 : s.enrolledAt) != null;
    return d
        ? f !== _
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
        let r = !(0, N.zi)(t);
        return !(0, N.zi)(n) !== r ? (r ? F : V) : e(t, n);
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
            return W;
    }
}
function J(e, t) {
    switch (t) {
        case U.oH.VIDEO:
            return (0, N.q8)(e);
        case U.oH.PLAY:
            return (0, N.Nj)({ quest: e }) || (0, N.Dr)({ quest: e }) || (0, N.pO)(e);
        default:
            return !1;
    }
}
function $(e, t) {
    switch (t) {
        case U.UP.VIRTUAL_CURRENCY:
            return (0, N.xN)(e.config);
        case U.UP.COLLECTIBLE:
            return (0, N.Xv)(e.config);
        case U.UP.IN_GAME:
            return (0, N.vQ)(e.config) || (0, N.wj)(e.config);
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
                    : ea(k.r.build(e.config).rewardsExpireAt, k.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var el = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    ec = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), e;
    })({});
function eu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er,
        {
            quests: n,
            isFetchingCurrentQuests: r,
            hasFetched: i,
        } = Y({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        a = new Map(n.map((e) => [e.id, e])),
        o = eo(n, t),
        s = es(n),
        l = [],
        c = [];
    for (let t of (l = "all" === e ? o : s)) {
        let e = a.get(t);
        null != e && c.push(e);
    }
    return {
        quests: c,
        isFetchingCurrentQuests: r,
        hasFetched: i,
    };
}
function ed() {
    let e = r.useRef(!1),
        t = (0, c.Wu)([R.Z], () => Array.from(R.Z.claimedQuests.values())),
        n = (0, c.e7)([R.Z], () => R.Z.isFetchingClaimedQuests);
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
function ef() {
    return (0, c.e7)([R.Z], () => R.Z.getExpiredQuestsMap());
}
function e_(e) {
    return (0, c.e7)([R.Z], () => null != e && R.Z.isQuestExpired(e.id), [e]);
}
function ep(e, t, n) {
    var r;
    let i = (0, c.e7)([m.Z], () => {
            var e;
            return null != (e = m.Z.getChannel(null == t ? void 0 : t.channelId)) ? e : null;
        }),
        a = (0, c.e7)([R.Z], () => null != R.Z.questEnrollmentBlockedUntil, []),
        o =
            (0, c.e7)([E.default], () => {
                var e;
                return null == (e = E.default.getCurrentUser()) ? void 0 : e.id;
            }) === n,
        s = (0, c.e7)([R.Z], () => null != e && R.Z.isQuestExpired(e.id), [e]);
    if (null == e || a || s || o) return !1;
    let l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        u = (0, N.Rc)(t, i);
    return !l || !!u;
}
function eh(e) {
    return r.useMemo(() => {
        var t;
        let n = null == (t = e.config.ctaConfig) ? void 0 : t.buttonLabel;
        return null != n
            ? n
            : (0, N.q8)(e) ||
                (0, N.Pb)(e) ||
                (0, N.pO)(e) ||
                (0, N.Vl)(e) ||
                e.config.features.includes(U.S7.NON_GAMING_PLAY_QUEST)
              ? Z.intl.string(Z.t.hvVgAZ)
              : Z.intl.string(Z.t.lwQdjB);
    }, [e]);
}
function em(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, c.e7)([h.default], () => h.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eg(e) {
    return (0, c.e7)([R.Z], () => R.Z.isProgressingOnDesktop(e.id));
}
function eE(e) {
    return r.useMemo(() => (0, N.Bz)(e), [e]);
}
function eb(e) {
    let t = (0, c.e7)([R.Z], () => R.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
    return r.useMemo(() => (0, N.BM)(e), [e, t]);
}
function ey(e) {
    let t = eg(e),
        n = eE(e),
        r = eb(e);
    return t || n || r;
}
let eO = 1,
    ev = (e) => {
        let t = r.useCallback(() => (0, N.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = ey(e);
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
                }, y.Z.Millis.SECOND * eO);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function eI(e) {
    return r.useMemo(() => (0, N.b7)(e), [e]);
}
let eT = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = ew({ quest: t }),
        a = (0, C.WD)();
    return () => {
        i
            ? (0, N.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: A.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, N.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: A.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eS(e, t, n, r) {
    let { targetMinutes: i } = ev(e),
        a = eI(e),
        o = eT({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, N.Pb)(e);
    if ((0, N.$J)(e) && !(0, N.Nj)({ quest: e }))
        return Z.intl.format(Z.t["l4S+cQ"], {
            minutes: i,
            onClick: o,
            gameTitle: k.r.build(e.config).application.name,
        });
    if ((0, N.$J)(e))
        return s
            ? Z.intl.format(Z.t.gbtCpW, {
                  onClick: o,
                  minutes: i,
              })
            : Z.intl.format(Z.t.Ajlcd7, {
                  minutes: i,
                  onClick: o,
                  gameTitle: k.r.build(e.config).application.name,
              });
    if (s) return Z.intl.format(Z.t.Hu8SKW, { targetMinutes: i });
    if ((0, N.q8)(e)) {
        let t = k.r.build(e.config).defaultWatchVideoTask,
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n ? Z.intl.string(Z.t["o+e9yh"]) : Z.intl.formatToPlainString(Z.t["9m9Mna"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, N.pO)(e))
        if ((0, N.KM)(e)) return Z.intl.format(Z.t["1NaRSs"], { minutes: i });
        else
            return Z.intl.format(Z.t.xHXCyf, {
                minutes: i,
                activityName: e.config.messages.gameTitle,
            });
    let l = Z.t["6zWtV8"];
    return (
        (0, N.Nj)({ quest: e }) &&
            (l = e.config.features.includes(U.S7.NON_GAMING_PLAY_QUEST) ? Z.t.fe7Xec : Z.t["wmOh/q"]),
        Z.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}
function eA() {
    let { quests: e, isFetchingCurrentQuests: t } = Y({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = ef();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, N.vR)(t, P.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, N.zE)(t.userStatus, P.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function eC(e) {
    let t = (0, c.e7)([R.Z], () => R.Z.quests),
        n = r.useMemo(() => {
            let n = (0, N.NI)(t, U.tt);
            return (0, N.Jg)(n, e);
        }, [e, t]);
    return e_(n) ? null : n;
}
function eN(e) {
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
function eR() {
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
let eP = (e) => {
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
                        (e = await (0, S.CS)(t, n)), l(e.errorHints);
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
    ew = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eR(),
            r = ey(t),
            i = 0 === n.length;
        return (0, N.$J)(t) && i && !r;
    },
    eD = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eR(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = O.Z.getArticleURL(G.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = O.Z.getArticleURL(G.BhN.QUEST_HOW_TO_XBOX),
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
var ex = (function (e) {
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
        s = ev(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function eM(e) {
    let t = (0, c.e7)([h.default], () => h.default.locale),
        { percentComplete: n } = ev(e),
        r = eI(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        o =
            null != r
                ? "".concat(null == r ? void 0 : r.progress, "/").concat(null == r ? void 0 : r.target)
                : (0, v.T3)(t, i, { roundingMode: "floor" });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: o,
    };
}
function ej(e, t, n) {
    var r, i;
    let a = ev(e),
        o = (0, N.b7)(e),
        s = (0, M.DD)({
            quest: e,
            taskDetails: a,
            location: U.dr.QUEST_HOME_DESKTOP,
            questContent: P.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: n,
        }),
        l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        c = em(null == (i = e.userStatus) ? void 0 : i.claimedAt);
    return l
        ? Z.intl.formatToPlainString(Z.t.lOVr0O, { claimDate: c })
        : null != o
          ? o.description
          : null != s
            ? s
            : null;
}
function ek(e) {
    return [(0, c.e7)([R.Z], () => R.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, S.OR)(e, t), [e])];
}
function eU(e, t) {
    let [n, i] = ek(e.id),
        s = r.useMemo(() => (0, N.yH)(e), [e]),
        l = s.includes(U.cd.DESKTOP),
        c = s.includes(U.cd.CONSOLE),
        u = eg(e),
        d = eE(e),
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
                    .with({ currentProgressingPlatform: U.cd.CONSOLE }, () => P.LI.CONSOLE)
                    .with({ currentProgressingPlatform: U.cd.DESKTOP }, () => P.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: U.cd.CONSOLE,
                        },
                        () => P.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: U.cd.DESKTOP,
                        },
                        () => P.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: U.cd.CONSOLE,
                        },
                        () => P.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: U.cd.DESKTOP,
                        },
                        () => P.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null,
                        },
                        () => (c && l ? P.LI.SELECT : c ? P.LI.CONSOLE : P.LI.DESKTOP),
                    )
                    .exhaustive(),
            [c, l, f, _, n],
        ),
        s,
        i,
    ];
}
function eG(e) {
    var t, n;
    let r = eI(e),
        i = ev(e),
        [a] = eU(e, i),
        s = e_(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !s && u && (d || (f && a === P.LI.DESKTOP)),
        p = (0, I.isWeb)() && _ && !(0, N.Gd)(e),
        h = (0, I.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(Z.intl.string(Z.t.MFGxFM)), p && m.push(Z.intl.string(Z.t.BV6xDm)), m;
}
function eB(e) {
    var t;
    return null != (t = (0, c.e7)([R.Z], () => R.Z.quests).get(e)) ? t : null;
}
function eZ(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != a &&
            o.current !== t &&
            ((0, A.Ic)({
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
                    (0, A.Ic)({
                        mode: null,
                        prevMode: o.current,
                        questContent: n,
                        questId: a,
                        sourceQuestContent: i,
                    });
                };
        }, [a, n, i]);
}
function eF(e) {
    var t, n;
    let r = (0, c.e7)([h.default], () => h.default.locale),
        i = ev(e),
        [a] = eU(e, i),
        o = eI(e),
        s = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        l = null != o ? o.percentComplete : i.percentComplete;
    if (s) return Z.intl.string(Z.t["ij5E/5"]);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && l > 0) {
        let e = (0, v.T3)(r, l, { roundingMode: "floor" });
        return Z.intl.formatToPlainString(Z.t.lVZaXD, { percent: e });
    }
    return a === P.LI.SELECT
        ? Z.intl.string(Z.t.EMrUHQ)
        : (0, N.$J)(e)
          ? Z.intl.string(Z.t.mOrpXG)
          : Z.intl.string(Z.t["7e5k7L"]);
}
function eV(e) {
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
        d = em(r.useMemo(() => k.r.build(i.config).rewardsExpireAt, [i.config])),
        f = ev(i),
        _ = eI(i),
        p = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null,
        h = (null == (n = i.userStatus) ? void 0 : n.enrolledAt) != null,
        m = f.percentComplete > 0,
        g = ey(i),
        E = (0, M.DD)({
            quest: i,
            location: U.dr.QUESTS_BAR,
            questContent: P.jn.QUEST_BAR_V2,
            taskDetails: f,
            sourceQuestContent: o,
            popoutTargetElementRef: l,
            onGameSheetOpened: c,
            onGameSheetClosed: u,
        }),
        b = null != _ ? _.percentComplete : f.percentComplete;
    if (p) return Z.intl.formatToPlainString(Z.t.APddvF, { expirationDate: d });
    if (a)
        if (s === P.LI.SELECT) return Z.intl.string(Z.t.sWUpN8);
        else {
            if (!(0, N.Pb)(i) || !h || m) return E;
            let e = k.r.build(i.config).defaultRewardNameWithArticle;
            return Z.intl.format(Z.t["1votF6"], {
                rewardNameWithArticle: e,
                targetMinutes: f.targetMinutes,
            });
        }
    if ((0, N.q8)(i)) return Z.intl.string(Z.t["o+e9yh"]);
    if (b > 0)
        if (!g) return Z.intl.string(Z.t.mOrpXG);
        else
            return (0, N.AV)({
                quest: i,
                taskDetails: f,
                thirdPartyTaskDetails: null != _ ? _ : void 0,
            });
    return Z.intl.string(Z.t.S6UUc5);
}
function eH(e, t) {
    let n = (0, c.e7)([R.Z], () => R.Z.getQuest(e), [e]),
        i = (0, u.ZP)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = null != t ? t : (0, l.wj)(i) ? G.BRd.DARK : G.BRd.LIGHT;
        return (0, j.fh)(n, j.eC.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eY(e) {
    let t = k.r.build(e).defaultRewardName,
        n = (0, N.Kr)(e),
        r = (0, N.FX)(e),
        i = (0, N._p)(e),
        a = (0, N.f$)(e),
        o = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
        s = (0, T.I5)(o, B.PremiumTypes.TIER_2);
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
function eW(e) {
    let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity());
    return {
        launchInGameActivity: r.useCallback(() => {
            null != t && t.applicationId === e.config.application.id
                ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location)
                : (0, p.uL)(G.Z5c.ACTIVITY_DETAILS(e.config.application.id));
        }, [t, e.config.application.id]),
    };
}
let eK = () => (0, c.Wu)([R.Z], () => [...R.Z.quests.values()]).some((e) => e.preview),
    ez = () => {
        let e = (0, x.T)({ location: U.dr.QUEST_PREVIEW_TOOL_2 }),
            t = eK();
        return e && t;
    },
    eq = (e) => {
        var t;
        let n = (null == e ? void 0 : e.userStatus) != null && (0, N.zE)(e.userStatus, P.jn.ACTIVITY_PANEL),
            r = e_(null != e ? e : null),
            i = (null == e || null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
            a = (0, c.e7)([R.Z], () => null != R.Z.questEnrollmentBlockedUntil, []);
        return !n && !r && !i && !a;
    },
    eX = () => {
        let e = (0, c.Wu)([R.Z], () => [...R.Z.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eQ() {
    return r.useMemo(
        () =>
            U.Ew.map((e) => {
                let [t, n] = e;
                return {
                    heading: (0, N.T2)(t),
                    options: n,
                };
            }),
        [],
    );
}
function eJ() {
    return r.useMemo(
        () =>
            Object.keys(U.yq).map((e) => ({
                label: (0, N.NL)(U.yq[e]),
                value: U.yq[e],
            })),
        [],
    );
}
function e$(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = r.useRef(null),
        o = r.useRef(null);
    r.useEffect(() => {
        b.default.track(G.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
            sort_method: t,
            previous_sort_method: a.current,
        }),
            (a.current = t);
    }, [t]),
        r.useEffect(() => {
            var e;
            let t = n.map((e) => e.filter);
            b.default.track(G.rMx.QUEST_HOME_FILTERS_CHANGED, {
                filters: t,
                previous_filters: null != (e = o.current) ? e : [],
                num_quests_visible: i,
            }),
                (o.current = t);
        }, [n, i]);
}
