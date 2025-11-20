n.d(t, {
    $I: () => e0,
    B4: () => eF,
    B6: () => eg,
    Bd: () => eU,
    Fy: () => eN,
    GI: () => ew,
    Gd: () => eW,
    I: () => ej,
    J2: () => W,
    Jf: () => eT,
    KX: () => ex,
    MP: () => eJ,
    N8: () => e$,
    OH: () => eM,
    Qy: () => eK,
    Rf: () => eI,
    SU: () => e1,
    Ut: () => e4,
    Wi: () => eh,
    _Q: () => ek,
    _s: () => eL,
    aV: () => eX,
    bA: () => ed,
    e5: () => ec,
    eN: () => ef,
    eQ: () => eH,
    fN: () => eR,
    iO: () => eC,
    kJ: () => eP,
    ly: () => em,
    m4: () => e3,
    me: () => eB,
    qI: () => eV,
    qb: () => eZ,
    t5: () => eA,
    tP: () => ep,
    tR: () => eu,
    uA: () => eS,
    vf: () => eY,
    wF: () => Y,
    z: () => eO,
    z1: () => eQ,
    z6: () => eD,
    zB: () => ez,
}),
    n(388685),
    n(642613),
    n(539854),
    n(953529),
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
    P = n(509212),
    D = n(569984),
    w = n(497505),
    L = n(937797),
    x = n(704161),
    M = n(36243),
    k = n(977156),
    j = n(373370),
    U = n(475595),
    G = n(46140),
    B = n(981631),
    Z = n(474936),
    F = n(388032);
let V = -1,
    H = 1,
    Y = "1410358070831480904";
function W() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      fetchPolicy: "cache-only",
                      callerSource: "unknown",
                  },
        [t, n] = r.useState(!1),
        i = (0, c.Wu)([D.Z], () => [...D.Z.quests.values()]),
        a = (0, c.Wu)([D.Z], () => [...D.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: s } = (0, c.cj)([D.Z], () => ({
            isFetchingCurrentQuests: D.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: D.Z.lastFetchedCurrentQuests,
        })),
        l = (0, k.c)({ location: G.dr.USE_QUESTS }),
        u = L.DL.useConfig({ location: G.dr.USE_QUESTS });
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
function K(e, t) {
    var n, r, i, a, o, s;
    let l = e.id === Y,
        c = t.id === Y,
        u = l && (null == (n = e.userStatus) ? void 0 : n.completedAt) == null;
    if (u !== (c && (null == (r = t.userStatus) ? void 0 : r.completedAt) == null)) return u ? V : H;
    let d = !(0, P.zi)(e),
        f = (null == (i = e.userStatus) ? void 0 : i.claimedAt) != null,
        _ = (null == (a = t.userStatus) ? void 0 : a.claimedAt) != null,
        p = (null == (o = e.userStatus) ? void 0 : o.enrolledAt) != null,
        h = (null == (s = t.userStatus) ? void 0 : s.enrolledAt) != null,
        { enabled: m, minutes: g } = (0, L.eC)(G.dr.QUEST_HOME_DESKTOP),
        E = O.Z.Millis.MINUTE * g,
        b = e2(e, E),
        y = e2(t, E);
    return d
        ? m && b !== y && (b || y)
            ? b
                ? H
                : V
            : f !== _
              ? f
                  ? H
                  : V
              : p !== h
                ? p
                    ? V
                    : H
                : eo(e.config.expiresAt, t.config.expiresAt, 1)
        : f !== _
          ? f
              ? V
              : H
          : p !== h
            ? p
                ? V
                : H
            : eo(e.config.expiresAt, t.config.expiresAt, 0);
}
function z(e, t) {
    return eo(e.config.startsAt, t.config.startsAt, 0);
}
function q(e, t) {
    var n, r;
    let i = null == (n = e.userStatus) ? void 0 : n.enrolledAt,
        a = null == (r = t.userStatus) ? void 0 : r.enrolledAt;
    return null == i && null == a
        ? eo(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == a
          ? V
          : null == i && null != a
            ? H
            : eo(i, a, 0);
}
function X(e, t) {
    return eo(e.config.expiresAt, t.config.expiresAt, 1);
}
function Q(e) {
    return function (t, n) {
        let r = !(0, P.zi)(t);
        return !(0, P.zi)(n) !== r ? (r ? V : H) : e(t, n);
    };
}
function J(e) {
    switch (e) {
        case G.yq.MOST_RECENT:
            return z;
        case G.yq.RECENTLY_ENROLLED:
            return q;
        case G.yq.EXPIRING_SOON:
            return X;
        case G.yq.SUGGESTED:
        default:
            return K;
    }
}
function $(e, t) {
    switch (t) {
        case G.oH.VIDEO:
            return (0, P.q8)(e);
        case G.oH.PLAY:
            return (0, P.Nj)({ quest: e }) || (0, P.Dr)({ quest: e }) || (0, P.pO)(e);
        default:
            return !1;
    }
}
function ee(e, t) {
    switch (t) {
        case G.UP.VIRTUAL_CURRENCY:
            return (0, P.xN)(e.config);
        case G.UP.COLLECTIBLE:
            return (0, P.Xv)(e.config);
        case G.UP.IN_GAME:
            return (0, P.vQ)(e.config) || (0, P.wj)(e.config);
        default:
            return !1;
    }
}
function et(e) {
    switch (e) {
        case "task":
            return $;
        case "reward":
            return ee;
    }
}
function en(e, t, n) {
    let r = et(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function er(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return en(e, n, r);
        }),
    );
}
let ei = {};
function ea(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei,
        { sortMethod: n, filters: r } = t,
        i = null == r || 0 === r.length ? e : er(e, r),
        a = Q(J(n));
    return i.sort(a);
}
function eo(e, t, n) {
    let r = 0 === n ? V : H;
    return e.localeCompare(t) * r;
}
function es(e, t) {
    let n = r.useRef([]),
        i = r.useRef(t.sortMethod),
        a = r.useRef(t.filters),
        o = r.useRef(0);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (n.current.length > 0 && o.current === e.length && i.current === t.sortMethod && a.current === t.filters)
            return n.current;
        let r = ea(e, t).map((e) => e.id);
        return (n.current = r), (i.current = t.sortMethod), (a.current = t.filters), (o.current = e.length), r;
    }, [e, t]);
}
function el(e) {
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
                        ? V
                        : H
                    : eo(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var ec = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    eu = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei,
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
        s = es(n, t),
        l = el(n),
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
function ef() {
    let e = r.useRef(!1),
        t = (0, c.Wu)([D.Z], () => Array.from(D.Z.claimedQuests.values())),
        n = (0, c.e7)([D.Z], () => D.Z.isFetchingClaimedQuests);
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
    return (0, c.e7)([D.Z], () => D.Z.getExpiredQuestsMap());
}
function ep(e) {
    return (0, c.e7)([D.Z], () => null != e && D.Z.isQuestExpired(e.id), [e]);
}
function eh(e, t, n) {
    var r;
    let i = (0, c.e7)([g.Z], () => {
            var e;
            return null != (e = g.Z.getChannel(null == t ? void 0 : t.channelId)) ? e : null;
        }),
        a = (0, c.e7)([D.Z], () => null != D.Z.questEnrollmentBlockedUntil, []),
        o =
            (0, c.e7)([b.default], () => {
                var e;
                return null == (e = b.default.getCurrentUser()) ? void 0 : e.id;
            }) === n,
        s = (0, c.e7)([D.Z], () => null != e && D.Z.isQuestExpired(e.id), [e]);
    if (null == e || a || s || o) return !1;
    let l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        u = (0, P.Rc)(t, i);
    return !l || !!u;
}
function em(e) {
    return r.useMemo(() => {
        var t;
        let n = null == (t = e.config.ctaConfig) ? void 0 : t.buttonLabel;
        return null != n
            ? n
            : (0, P.q8)(e) ||
                (0, P.Pb)(e) ||
                (0, P.pO)(e) ||
                (0, P.Vl)(e) ||
                e.config.features.includes(G.S7.NON_GAMING_PLAY_QUEST)
              ? F.intl.string(F.t.hvVgAZ)
              : F.intl.string(F.t.lwQdjB);
    }, [e]);
}
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, c.e7)([m.default], () => m.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eE(e) {
    return (0, c.e7)([D.Z], () => D.Z.isProgressingOnDesktop(e.id));
}
function eb(e) {
    return r.useMemo(() => (0, P.Bz)(e), [e]);
}
function ey(e) {
    let t = (0, c.e7)([D.Z], () => D.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
    return r.useMemo(() => (0, P.BM)(e), [e, t]);
}
function eO(e) {
    let t = eE(e),
        n = eb(e),
        r = ey(e);
    return t || n || r;
}
let ev = 1,
    eI = (e) => {
        let t = r.useCallback(() => (0, P.il)(e), [e]),
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
function eT(e) {
    return r.useMemo(() => (0, P.b7)(e), [e]);
}
let eS = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eL({ quest: t }),
        a = (0, R.WD)();
    return () => {
        i
            ? (0, P.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: N.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, P.V$)(
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
function eA(e, t, n, r) {
    let { targetMinutes: i } = eI(e),
        a = eT(e),
        o = eS({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, P.Pb)(e);
    if ((0, P.$J)(e) && !(0, P.Nj)({ quest: e }))
        return F.intl.format(F.t["l4S+cQ"], {
            minutes: i,
            onClick: o,
            gameTitle: e.config.messages.gameTitle,
        });
    if ((0, P.$J)(e))
        return s
            ? F.intl.format(F.t.gbtCpW, {
                  onClick: o,
                  minutes: i,
              })
            : F.intl.format(F.t.Ajlcd7, {
                  minutes: i,
                  onClick: o,
                  gameTitle: e.config.messages.gameTitle,
              });
    if (s) return F.intl.format(F.t.Hu8SKW, { targetMinutes: i });
    if ((0, P.q8)(e)) {
        let t = (0, P.z1)(e.config),
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n ? F.intl.string(F.t["o+e9yh"]) : F.intl.formatToPlainString(F.t["9m9Mna"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, P.pO)(e))
        if ((0, P.KM)(e)) return F.intl.format(F.t["1NaRSs"], { minutes: i });
        else
            return F.intl.format(F.t.xHXCyf, {
                minutes: i,
                activityName: e.config.messages.gameTitle,
            });
    let l = F.t["6zWtV8"];
    return (
        (0, P.Nj)({ quest: e }) &&
            (l = e.config.features.includes(G.S7.NON_GAMING_PLAY_QUEST) ? F.t.fe7Xec : F.t["wmOh/q"]),
        F.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}
function eC() {
    let { quests: e, isFetchingCurrentQuests: t } = W({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = e_();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, P.vR)(t, w.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, P.zE)(t.userStatus, w.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function eN(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, P.Gs)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, p.Z)(t);
}
function eR(e) {
    let t = (0, c.e7)([D.Z], () => D.Z.quests),
        n = eN(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, P.NI)(t, G.tt);
            return (0, P.Jg)(n, e);
        }, [e, t, n]);
    return ep(i) ? null : i;
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
function eD() {
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
    eL = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eD(),
            r = eO(t),
            i = 0 === n.length;
        return (0, P.$J)(t) && i && !r;
    },
    ex = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eD(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = v.Z.getArticleURL(B.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = v.Z.getArticleURL(B.BhN.QUEST_HOW_TO_XBOX),
            s = F.intl.format(F.t.beN4DG, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o,
            }),
            l = F.intl.format(F.t.HVS7nh, { helpdeskArticle: r ? a : o });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a,
        };
    };
var eM = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function ek(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = eI(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function ej(e) {
    let t = (0, c.e7)([m.default], () => m.default.locale),
        { percentComplete: n } = eI(e),
        r = eT(e),
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
function eU(e, t, n) {
    var r, i;
    let a = eI(e),
        o = (0, P.b7)(e),
        s = (0, j.DD)({
            quest: e,
            taskDetails: a,
            location: G.dr.QUEST_HOME_DESKTOP,
            questContent: w.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: n,
        }),
        l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        c = eg(null == (i = e.userStatus) ? void 0 : i.claimedAt);
    return l
        ? F.intl.formatToPlainString(F.t.lOVr0O, { claimDate: c })
        : null != o
          ? o.description
          : null != s
            ? s
            : null;
}
function eG(e) {
    return [(0, c.e7)([D.Z], () => D.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, C.OR)(e, t), [e])];
}
function eB(e, t) {
    let [n, i] = eG(e.id),
        s = r.useMemo(() => (0, P.yH)(e), [e]),
        l = s.includes(G.cd.DESKTOP),
        c = s.includes(G.cd.CONSOLE),
        u = eE(e),
        d = eb(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP }, () => G.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP_V2 }, () => G.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ACTIVITY }, () => G.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO }, () => G.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO_ON_MOBILE }, () => G.cd.DESKTOP)
                    .with({ taskType: o.X.STREAM_ON_DESKTOP }, () => G.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_XBOX }, () => G.cd.CONSOLE)
                    .with({ taskType: o.X.PLAY_ON_PLAYSTATION }, () => G.cd.CONSOLE)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_GAME }, () => G.cd.DESKTOP)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_ACTIVITY }, () => G.cd.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        _ = u ? G.cd.DESKTOP : d ? G.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: _,
                    selectedPlatform: n,
                })
                    .with({ currentProgressingPlatform: G.cd.CONSOLE }, () => w.LI.CONSOLE)
                    .with({ currentProgressingPlatform: G.cd.DESKTOP }, () => w.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: G.cd.CONSOLE,
                        },
                        () => w.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: G.cd.DESKTOP,
                        },
                        () => w.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: G.cd.CONSOLE,
                        },
                        () => w.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: G.cd.DESKTOP,
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
            [c, l, f, _, n],
        ),
        s,
        i,
    ];
}
function eZ(e) {
    var t, n;
    let r = eT(e),
        i = eI(e),
        [a] = eB(e, i),
        s = ep(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !s && u && (d || (f && a === w.LI.DESKTOP)),
        p = (0, S.isWeb)() && _ && !(0, P.Gd)(e),
        h = (0, S.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(F.intl.string(F.t.MFGxFM)), p && m.push(F.intl.string(F.t.BV6xDm)), m;
}
function eF(e) {
    var t;
    return null != (t = (0, c.e7)([D.Z], () => D.Z.quests).get(e)) ? t : null;
}
function eV(e) {
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
function eH(e) {
    var t, n;
    let r = (0, c.e7)([m.default], () => m.default.locale),
        i = eI(e),
        [a] = eB(e, i),
        o = eT(e),
        s = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        l = null != o ? o.percentComplete : i.percentComplete;
    if (s) return F.intl.string(F.t["ij5E/5"]);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && l > 0) {
        let e = (0, T.T3)(r, l, { roundingMode: "floor" });
        return F.intl.formatToPlainString(F.t.lVZaXD, { percent: e });
    }
    return a === w.LI.SELECT
        ? F.intl.string(F.t.EMrUHQ)
        : (0, P.$J)(e)
          ? F.intl.string(F.t.mOrpXG)
          : F.intl.string(F.t["7e5k7L"]);
}
function eY(e) {
    var t, n;
    let {
            quest: r,
            isExpanded: i,
            sourceQuestContent: a,
            activeScreen: o,
            popoutTargetElementRef: s,
            onGameSheetOpened: l,
            onGameSheetClosed: c,
        } = e,
        u = eg(r.config.rewardsConfig.rewardsExpireAt),
        d = eI(r),
        f = eT(r),
        _ = (null == (t = r.userStatus) ? void 0 : t.completedAt) != null,
        p = (null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null,
        h = d.percentComplete > 0,
        m = eO(r),
        g = (0, j.DD)({
            quest: r,
            location: G.dr.QUESTS_BAR,
            questContent: w.jn.QUEST_BAR_V2,
            taskDetails: d,
            sourceQuestContent: a,
            popoutTargetElementRef: s,
            onGameSheetOpened: l,
            onGameSheetClosed: c,
        }),
        E = null != f ? f.percentComplete : d.percentComplete;
    if (_) return F.intl.formatToPlainString(F.t.APddvF, { expirationDate: u });
    if (i)
        if (o === w.LI.SELECT) return F.intl.string(F.t.sWUpN8);
        else {
            if (!(0, P.Pb)(r) || !p || h) return g;
            let e = (0, P.B3)(r.config);
            return F.intl.format(F.t["1votF6"], {
                rewardNameWithArticle: e,
                targetMinutes: d.targetMinutes,
            });
        }
    if ((0, P.q8)(r)) return F.intl.string(F.t["o+e9yh"]);
    if (E > 0)
        if (!m) return F.intl.string(F.t.mOrpXG);
        else
            return (0, P.AV)({
                quest: r,
                taskDetails: d,
                thirdPartyTaskDetails: null != f ? f : void 0,
            });
    return F.intl.string(F.t.S6UUc5);
}
function eW(e, t) {
    let n = (0, c.e7)([D.Z], () => D.Z.getQuest(e), [e]),
        i = (0, u.ZP)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = null != t ? t : (0, l.wj)(i) ? B.BRd.DARK : B.BRd.LIGHT;
        return (0, U.fh)(n, U.eC.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eK(e) {
    let t = (0, P.w8)(e),
        n = (0, P.Kr)(e),
        r = (0, P.FX)(e),
        i = (0, P._p)(e),
        a = (0, P.f$)(e),
        o = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
        s = (0, A.I5)(o, Z.PremiumTypes.TIER_2);
    if (null == n) return F.intl.formatToPlainString(F.t.l9uXL8, { decorationName: t });
    let l = F.intl.formatToPlainString(F.t.o97tNn, { rewardName: t }),
        u = F.intl.formatToPlainString(F.t.PkyRZo, {
            rewardName: t,
            expirationDate: r,
        }),
        d = F.intl.formatToPlainString(F.t.ie4YK0, {
            rewardName: t,
            duration: n,
        }),
        f = F.intl.formatToPlainString(F.t.yCpc0U, {
            duration: n,
            rewardName: t,
        }),
        _ = s ? l : d,
        p = s ? u : f,
        h = i ? _ : p;
    return a
        ? h
        : F.intl.formatToPlainString(F.t.tTlItm, {
              duration: n,
              decorationName: t,
          });
}
function ez(e) {
    let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        n = (0, P.Mo)(e);
    return {
        launchInGameActivity: r.useCallback(() => {
            null != n &&
                (null != t && t.applicationId === n
                    ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location)
                    : (0, h.uL)(B.Z5c.ACTIVITY_DETAILS(n)));
        }, [t, n]),
    };
}
let eq = () => (0, c.Wu)([D.Z], () => [...D.Z.quests.values()]).some((e) => e.preview),
    eX = () => {
        let e = (0, M.T)({ location: G.dr.QUEST_PREVIEW_TOOL_2 }),
            t = eq();
        return e && t;
    },
    eQ = (e) => {
        var t;
        let n = (null == e ? void 0 : e.userStatus) != null && (0, P.zE)(e.userStatus, w.jn.ACTIVITY_PANEL),
            r = ep(null != e ? e : null),
            i = (null == e || null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
            a = (0, c.e7)([D.Z], () => null != D.Z.questEnrollmentBlockedUntil, []);
        return !n && !r && !i && !a;
    },
    eJ = () => {
        let e = (0, c.Wu)([D.Z], () => [...D.Z.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function e$() {
    return r.useMemo(
        () =>
            G.Ew.map((e) => {
                let [t, n] = e;
                return {
                    heading: (0, P.T2)(t),
                    options: n,
                };
            }),
        [],
    );
}
function e0() {
    return r.useMemo(
        () =>
            Object.keys(G.yq).map((e) => ({
                label: (0, P.NL)(G.yq[e]),
                value: G.yq[e],
            })),
        [],
    );
}
function e1(e) {
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
let e3 = (e) => {
        let t = !1,
            n = r.useMemo(() => {
                var e;
                return (null == (e = b.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0;
            }, []);
        return t || n || e.preview;
    },
    e2 = (e, t) => {
        var n, r, i;
        let a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null;
        return (
            (null == (r = e.userStatus) ? void 0 : r.enrolledAt) != null &&
            !a &&
            Date.now() - new Date(null == (i = e.userStatus) ? void 0 : i.enrolledAt).getTime() > t
        );
    };
function e4() {
    let { enabled: e } = L.n0.useConfig({ location: G.dr.QUEST_HOME_DESKTOP }),
        [t, n] = r.useState(e),
        [i, a] = r.useState(e),
        [o, s] = r.useState(!1),
        [l, u] = r.useState(!1),
        { isFetching: d, takeoverConfig: f } = (0, c.cj)([D.Z], () => ({
            isFetching: D.Z.isFetchingQuestHomeTakeover(),
            takeoverConfig: D.Z.getQuestHomeTakeoverConfig(),
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
                if (null != f)
                    try {
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
