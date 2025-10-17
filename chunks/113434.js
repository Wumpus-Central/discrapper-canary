n.d(t, {
    $I: () => eX,
    B4: () => eU,
    B6: () => ep,
    Bd: () => ex,
    GI: () => eN,
    Gd: () => eF,
    I: () => eL,
    J2: () => V,
    Jf: () => eO,
    KX: () => eP,
    MP: () => ez,
    N8: () => eq,
    OH: () => ew,
    Qy: () => eV,
    Rf: () => ey,
    SU: () => eQ,
    Wi: () => ef,
    _Q: () => eD,
    _s: () => eR,
    aV: () => eW,
    bA: () => el,
    e5: () => eo,
    eN: () => ec,
    eQ: () => eB,
    fN: () => eS,
    iO: () => eT,
    kJ: () => eA,
    ly: () => e_,
    me: () => ek,
    qI: () => eG,
    qb: () => ej,
    t5: () => eI,
    tP: () => ed,
    tR: () => es,
    uA: () => ev,
    vf: () => eZ,
    z: () => eE,
    z1: () => eK,
    z6: () => eC,
    zB: () => eH,
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
    S = n(617136),
    A = n(915750),
    C = n(509212),
    N = n(272008),
    R = n(569984),
    P = n(497505),
    w = n(937797),
    D = n(36243),
    L = n(977156),
    x = n(373370),
    M = n(475595),
    k = n(566078),
    j = n(46140),
    U = n(981631),
    G = n(474936),
    B = n(388032);
let Z = -1,
    F = 1;
function V() {
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
        l = (0, L.c)({ location: j.dr.USE_QUESTS }),
        u = w.DL.useConfig({ location: j.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !o
            ) {
                if ((n(!0), (0, N.xw)(), !u.enabled || "focused" === _.Z.getState()))
                    (0, N.w)(P.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource));
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
function H(e, t) {
    var n, r, i, a;
    let o = !(0, C.zi)(e),
        s = (null == (n = e.userStatus) ? void 0 : n.claimedAt) != null,
        l = (null == (r = t.userStatus) ? void 0 : r.claimedAt) != null,
        c = (null == (i = e.userStatus) ? void 0 : i.enrolledAt) != null,
        u = (null == (a = t.userStatus) ? void 0 : a.enrolledAt) != null;
    return o
        ? s !== l
            ? s
                ? F
                : Z
            : c !== u
              ? c
                  ? Z
                  : F
              : er(e.config.expiresAt, t.config.expiresAt, 1)
        : s !== l
          ? s
              ? Z
              : F
          : c !== u
            ? c
                ? Z
                : F
            : er(e.config.expiresAt, t.config.expiresAt, 0);
}
function Y(e, t) {
    return er(e.config.startsAt, t.config.startsAt, 0);
}
function W(e, t) {
    var n, r;
    let i = null == (n = e.userStatus) ? void 0 : n.enrolledAt,
        a = null == (r = t.userStatus) ? void 0 : r.enrolledAt;
    return null == i && null == a
        ? er(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == a
          ? Z
          : null == i && null != a
            ? F
            : er(i, a, 0);
}
function K(e, t) {
    return er(e.config.expiresAt, t.config.expiresAt, 1);
}
function z(e) {
    return function (t, n) {
        let r = !(0, C.zi)(t);
        return !(0, C.zi)(n) !== r ? (r ? Z : F) : e(t, n);
    };
}
function q(e) {
    switch (e) {
        case j.yq.MOST_RECENT:
            return Y;
        case j.yq.RECENTLY_ENROLLED:
            return W;
        case j.yq.EXPIRING_SOON:
            return K;
        case j.yq.SUGGESTED:
        default:
            return H;
    }
}
function X(e, t) {
    switch (t) {
        case j.oH.VIDEO:
            return (0, C.q8)(e);
        case j.oH.PLAY:
            return (0, C.Nj)({ quest: e }) || (0, C.Dr)({ quest: e }) || (0, C.pO)(e);
        default:
            return !1;
    }
}
function Q(e, t) {
    switch (t) {
        case j.UP.VIRTUAL_CURRENCY:
            return (0, C.xN)(e.config);
        case j.UP.COLLECTIBLE:
            return (0, C.Xv)(e.config);
        case j.UP.IN_GAME:
            return (0, C.vQ)(e.config) || (0, C.wj)(e.config);
        default:
            return !1;
    }
}
function J(e) {
    switch (e) {
        case "task":
            return X;
        case "reward":
            return Q;
    }
}
function $(e, t, n) {
    let r = J(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function ee(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return $(e, n, r);
        }),
    );
}
let et = {};
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : et,
        { sortMethod: n, filters: r } = t,
        i = null == r || 0 === r.length ? e : ee(e, r),
        a = z(q(n));
    return i.sort(a);
}
function er(e, t, n) {
    let r = 0 === n ? Z : F;
    return e.localeCompare(t) * r;
}
function ei(e, t) {
    let n = r.useRef([]),
        i = r.useRef(t.sortMethod),
        a = r.useRef(t.filters),
        o = r.useRef(0);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (n.current.length > 0 && o.current === e.length && i.current === t.sortMethod && a.current === t.filters)
            return n.current;
        let r = en(e, t).map((e) => e.id);
        return (n.current = r), (i.current = t.sortMethod), (a.current = t.filters), (o.current = e.length), r;
    }, [e, t]);
}
function ea(e) {
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
                        ? Z
                        : F
                    : er(k.r.build(e.config).rewardsExpireAt, k.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var eo = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    es = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), e;
    })({});
function el(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : et,
        {
            quests: n,
            isFetchingCurrentQuests: r,
            hasFetched: i,
        } = V({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        a = new Map(n.map((e) => [e.id, e])),
        o = ei(n, t),
        s = ea(n),
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
function ec() {
    let e = r.useRef(!1),
        t = (0, c.Wu)([R.Z], () => Array.from(R.Z.claimedQuests.values())),
        n = (0, c.e7)([R.Z], () => R.Z.isFetchingClaimedQuests);
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
function eu() {
    return (0, c.e7)([R.Z], () => R.Z.getExpiredQuestsMap());
}
function ed(e) {
    return (0, c.e7)([R.Z], () => null != e && R.Z.isQuestExpired(e.id), [e]);
}
function ef(e, t, n) {
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
        u = (0, C.Rc)(t, i);
    return !l || !!u;
}
function e_(e) {
    return r.useMemo(() => {
        var t;
        let n = null == (t = e.config.ctaConfig) ? void 0 : t.buttonLabel;
        return null != n
            ? n
            : (0, C.q8)(e) ||
                (0, C.Pb)(e) ||
                (0, C.pO)(e) ||
                (0, C.Vl)(e) ||
                e.config.features.includes(j.S7.NON_GAMING_PLAY_QUEST)
              ? B.intl.string(B.t.hvVgAQ)
              : B.intl.string(B.t.lwQdjI);
    }, [e]);
}
function ep(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, c.e7)([h.default], () => h.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eh(e) {
    return (0, c.e7)([R.Z], () => R.Z.isProgressingOnDesktop(e.id));
}
function em(e) {
    return r.useMemo(() => (0, C.Bz)(e), [e]);
}
function eg(e) {
    let t = (0, c.e7)([R.Z], () => R.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
    return r.useMemo(() => (0, C.BM)(e), [e, t]);
}
function eE(e) {
    let t = eh(e),
        n = em(e),
        r = eg(e);
    return t || n || r;
}
let eb = 1,
    ey = (e) => {
        let t = r.useCallback(() => (0, C.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = eE(e);
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
                }, y.Z.Millis.SECOND * eb);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function eO(e) {
    return r.useMemo(() => (0, C.b7)(e), [e]);
}
let ev = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eR({ quest: t }),
        a = (0, A.WD)();
    return () => {
        i
            ? (0, C.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: S.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, C.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: S.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eI(e, t, n, r) {
    let { targetMinutes: i } = ey(e),
        a = eO(e),
        o = ev({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, C.Pb)(e);
    if ((0, C.$J)(e) && !(0, C.Nj)({ quest: e }))
        return B.intl.format(B.t["l4S+cX"], {
            minutes: i,
            onClick: o,
            gameTitle: k.r.build(e.config).application.name,
        });
    if ((0, C.$J)(e))
        return s
            ? B.intl.format(B.t.gbtCpa, {
                  onClick: o,
                  minutes: i,
              })
            : B.intl.format(B.t.Ajlcd3, {
                  minutes: i,
                  onClick: o,
                  gameTitle: k.r.build(e.config).application.name,
              });
    if (s) return B.intl.format(B.t.Hu8SKS, { targetMinutes: i });
    if ((0, C.q8)(e)) {
        let t = k.r.build(e.config).defaultWatchVideoTask,
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n ? B.intl.string(B.t["o+e9ys"]) : B.intl.formatToPlainString(B.t["9m9MnZ"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, C.pO)(e))
        if ((0, C.KM)(e)) return B.intl.format(B.t["1NaRSk"], { minutes: i });
        else
            return B.intl.format(B.t.xHXCyc, {
                minutes: i,
                activityName: e.config.application.name,
            });
    let l = B.t["6zWtV1"];
    return (
        (0, C.Nj)({ quest: e }) &&
            (l = e.config.features.includes(j.S7.NON_GAMING_PLAY_QUEST) ? B.t.fe7XeX : B.t["wmOh/v"]),
        B.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}
function eT() {
    let { quests: e, isFetchingCurrentQuests: t } = V({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = eu();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, C.vR)(t, P.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, C.zE)(t.userStatus, P.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function eS(e) {
    let t = (0, c.e7)([R.Z], () => R.Z.quests),
        n = r.useMemo(() => {
            let n = (0, C.NI)(t, j.tt);
            return (0, C.Jg)(n, e);
        }, [e, t]);
    return ed(n) ? null : n;
}
function eA(e) {
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
function eC() {
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
                n = e.filter((e) => e.type === U.ABu.XBOX),
                r = e.filter((e) => e.type === U.ABu.PLAYSTATION),
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
let eN = (e) => {
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
                        (e = await (0, N.CS)(t, n)), l(e.errorHints);
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
    eR = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eC(),
            r = eE(t),
            i = 0 === n.length;
        return (0, C.$J)(t) && i && !r;
    },
    eP = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eC(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = O.Z.getArticleURL(U.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = O.Z.getArticleURL(U.BhN.QUEST_HOW_TO_XBOX),
            s = B.intl.format(B.t.beN4DA, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o,
            }),
            l = B.intl.format(B.t.HVS7np, { helpdeskArticle: r ? a : o });
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
function eD(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = ey(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function eL(e) {
    let t = (0, c.e7)([h.default], () => h.default.locale),
        { percentComplete: n } = ey(e),
        r = eO(e),
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
function ex(e, t, n) {
    var r, i;
    let a = ey(e),
        o = (0, C.b7)(e),
        s = (0, x.DD)({
            quest: e,
            taskDetails: a,
            location: j.dr.QUEST_HOME_DESKTOP,
            questContent: P.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: n,
        }),
        l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        c = ep(null == (i = e.userStatus) ? void 0 : i.claimedAt);
    return l
        ? B.intl.formatToPlainString(B.t.lOVr0N, { claimDate: c })
        : null != o
          ? o.description
          : null != s
            ? s
            : null;
}
function eM(e) {
    return [(0, c.e7)([R.Z], () => R.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, N.OR)(e, t), [e])];
}
function ek(e, t) {
    let [n, i] = eM(e.id),
        s = r.useMemo(() => (0, C.yH)(e), [e]),
        l = s.includes(j.cd.DESKTOP),
        c = s.includes(j.cd.CONSOLE),
        u = eh(e),
        d = em(e),
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
                    .with({ currentProgressingPlatform: j.cd.CONSOLE }, () => P.LI.CONSOLE)
                    .with({ currentProgressingPlatform: j.cd.DESKTOP }, () => P.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: j.cd.CONSOLE,
                        },
                        () => P.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: j.cd.DESKTOP,
                        },
                        () => P.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: j.cd.CONSOLE,
                        },
                        () => P.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: j.cd.DESKTOP,
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
function ej(e) {
    var t, n;
    let r = eO(e),
        i = ey(e),
        [a] = ek(e, i),
        s = ed(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !s && u && (d || (f && a === P.LI.DESKTOP)),
        p = (0, I.isWeb)() && _ && !(0, C.Gd)(e),
        h = (0, I.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(B.intl.string(B.t.MFGxFB)), p && m.push(B.intl.string(B.t.BV6xDg)), m;
}
function eU(e) {
    var t;
    return null != (t = (0, c.e7)([R.Z], () => R.Z.quests).get(e)) ? t : null;
}
function eG(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != a &&
            o.current !== t &&
            ((0, S.Ic)({
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
                    (0, S.Ic)({
                        mode: null,
                        prevMode: o.current,
                        questContent: n,
                        questId: a,
                        sourceQuestContent: i,
                    });
                };
        }, [a, n, i]);
}
function eB(e) {
    var t, n;
    let r = (0, c.e7)([h.default], () => h.default.locale),
        i = ey(e),
        [a] = ek(e, i),
        o = eO(e),
        s = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        l = null != o ? o.percentComplete : i.percentComplete;
    if (s) return B.intl.string(B.t["ij5E//"]);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && l > 0) {
        let e = (0, v.T3)(r, l, { roundingMode: "floor" });
        return B.intl.formatToPlainString(B.t.lVZaXF, { percent: e });
    }
    return a === P.LI.SELECT
        ? B.intl.string(B.t.EMrUHR)
        : (0, C.$J)(e)
          ? B.intl.string(B.t.mOrpXF)
          : B.intl.string(B.t["7e5k7O"]);
}
function eZ(e) {
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
        d = ep(r.useMemo(() => k.r.build(i.config).rewardsExpireAt, [i.config])),
        f = ey(i),
        _ = eO(i),
        p = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null,
        h = (null == (n = i.userStatus) ? void 0 : n.enrolledAt) != null,
        m = f.percentComplete > 0,
        g = eE(i),
        E = (0, x.DD)({
            quest: i,
            location: j.dr.QUESTS_BAR,
            questContent: P.jn.QUEST_BAR_V2,
            taskDetails: f,
            sourceQuestContent: o,
            popoutTargetElementRef: l,
            onGameSheetOpened: c,
            onGameSheetClosed: u,
        }),
        b = null != _ ? _.percentComplete : f.percentComplete;
    if (p) return B.intl.formatToPlainString(B.t.APddvL, { expirationDate: d });
    if (a)
        if (s === P.LI.SELECT) return B.intl.string(B.t.sWUpNz);
        else {
            if (!(0, C.Pb)(i) || !h || m) return E;
            let e = k.r.build(i.config).defaultRewardNameWithArticle;
            return B.intl.format(B.t["1votFx"], {
                rewardNameWithArticle: e,
                targetMinutes: f.targetMinutes,
            });
        }
    if ((0, C.q8)(i)) return B.intl.string(B.t["o+e9ys"]);
    if (b > 0)
        if (!g) return B.intl.string(B.t.mOrpXF);
        else
            return (0, C.AV)({
                quest: i,
                taskDetails: f,
                thirdPartyTaskDetails: null != _ ? _ : void 0,
            });
    return B.intl.string(B.t.S6UUc3);
}
function eF(e, t) {
    let n = (0, c.e7)([R.Z], () => R.Z.getQuest(e), [e]),
        i = (0, u.ZP)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = null != t ? t : (0, l.wj)(i) ? U.BRd.DARK : U.BRd.LIGHT;
        return (0, M.fh)(n, M.eC.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eV(e) {
    let t = k.r.build(e).defaultRewardName,
        n = (0, C.Kr)(e),
        r = (0, C.FX)(e),
        i = (0, C._p)(e),
        a = (0, C.f$)(e),
        o = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
        s = (0, T.I5)(o, G.PremiumTypes.TIER_2);
    if (null == n) return B.intl.formatToPlainString(B.t.l9uXLy, { decorationName: t });
    let l = B.intl.formatToPlainString(B.t.o97tNj, { rewardName: t }),
        u = B.intl.formatToPlainString(B.t.PkyRZm, {
            rewardName: t,
            expirationDate: r,
        }),
        d = B.intl.formatToPlainString(B.t.ie4YKy, {
            rewardName: t,
            duration: n,
        }),
        f = B.intl.formatToPlainString(B.t.yCpc0d, {
            duration: n,
            rewardName: t,
        }),
        _ = s ? l : d,
        p = s ? u : f,
        h = i ? _ : p;
    return a
        ? h
        : B.intl.formatToPlainString(B.t.tTlItr, {
              duration: n,
              decorationName: t,
          });
}
function eH(e) {
    let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity());
    return {
        launchInGameActivity: r.useCallback(() => {
            null != t && t.applicationId === e.config.application.id
                ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location)
                : (0, p.uL)(U.Z5c.ACTIVITY_DETAILS(e.config.application.id));
        }, [t, e.config.application.id]),
    };
}
let eY = () => (0, c.Wu)([R.Z], () => [...R.Z.quests.values()]).some((e) => e.preview),
    eW = () => {
        let e = (0, D.T)({ location: j.dr.QUEST_PREVIEW_TOOL_2 }),
            t = eY();
        return e && t;
    },
    eK = (e) => {
        var t;
        let n = (null == e ? void 0 : e.userStatus) != null && (0, C.zE)(e.userStatus, P.jn.ACTIVITY_PANEL),
            r = ed(null != e ? e : null),
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
            j.Ew.map((e) => {
                let [t, n] = e;
                return {
                    heading: (0, C.T2)(t),
                    options: n,
                };
            }),
        [],
    );
}
function eX() {
    return r.useMemo(
        () =>
            Object.keys(j.yq).map((e) => ({
                label: (0, C.NL)(j.yq[e]),
                value: j.yq[e],
            })),
        [],
    );
}
function eQ(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = r.useRef(null),
        o = r.useRef(null);
    r.useEffect(() => {
        b.default.track(U.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
            sort_method: t,
            previous_sort_method: a.current,
        }),
            (a.current = t);
    }, [t]),
        r.useEffect(() => {
            var e;
            let t = n.map((e) => e.filter);
            b.default.track(U.rMx.QUEST_HOME_FILTERS_CHANGED, {
                filters: t,
                previous_filters: null != (e = o.current) ? e : [],
                num_quests_visible: i,
            }),
                (o.current = t);
        }, [n, i]);
}
