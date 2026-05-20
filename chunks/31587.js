"use strict";
n.d(t, {
    Du: () => eL,
    O9: () => ek,
    I3: () => eO,
    Vn: () => eC,
    Wj: () => ew,
    mL: () => ei,
    Yl: () => eI,
    Nb: () => e$,
    pT: () => ez,
    UH: () => e2,
    $P: () => eZ,
    YW: () => eb,
    zW: () => eY,
    NC: () => ef,
    j$: () => eD,
    fc: () => ev,
    p5: () => eW,
    SD: () => em,
    aC: () => eF,
    FA: () => ej,
    LS: () => eA,
    RR: () => eM,
    Iq: () => eE,
    Qh: () => ep,
    t9: () => eJ,
    nv: () => eX,
    XD: () => eq,
    ZP: () => eg,
    UX: () => eP,
    mn: () => ed,
    C5: () => eV,
    sb: () => eK,
    lg: () => e1,
    Qo: () => eG,
    In: () => eU,
    H6: () => eB,
    a5: () => eH,
    F3: () => ex,
    L1: () => eh,
    do: () => eS,
    oH: () => eR,
    S5: () => eT,
    T2: () => e0,
}),
    n(321073),
    n(801541);
var i,
    r,
    s,
    a = n(64700),
    o = n(735438),
    l = n(889137),
    u = n(323889),
    c = n(412703),
    d = n(114046),
    _ = n(440703);
n(731355);
var f = n(517846),
    h = n(462887),
    p = n(17928),
    E = n(736653),
    m = n(787389),
    g = n(183636),
    A = n(429913);
n(674658);
var I = n(27620),
    T = n(773669),
    S = n(885386),
    N = n(734057),
    y = n(30370),
    C = n(287809),
    v = n(174459),
    O = n(927813),
    R = n(403362),
    b = n(975571),
    D = n(515718),
    L = n(252424),
    w = n(723702),
    M = n(428262);
n(323874), n(14289), n(35956), n(636537), n(228366), n(181658);
var P = n(859387);
n(107195), n(881615), n(234396), n(265704);
var x = n(507107),
    U = n(710969),
    k = n(652215),
    G = n(178540),
    F = n(340124),
    V = n(859703),
    B = n(192444),
    H = n(302654);
(0, n(945810).mj)({
    name: "2026-03-quest-home-bounties",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var j = n(971276),
    Y = n(561844);
n(590202);
var W = n(971649),
    K = n(651892),
    z = n(639214),
    $ = n(576761),
    q = n(901406),
    Z = n(801365),
    X = n(792620),
    Q = n(814793),
    J = n(753386),
    ee = n(190107),
    et = n(788868),
    en = n(375708);
function ei() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = a.useState(!1),
        i = (0, p.yK)([V.A], () => [...V.A.quests.values()]),
        r = (0, p.yK)([V.A], () => [...V.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: s, lastFetchedCurrentQuests: o } = (0, p.cf)([V.A], () => ({
            isFetchingCurrentQuests: V.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: V.A.lastFetchedCurrentQuests,
        })),
        l = (0, j.s)();
    return (
        a.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !s
            ) {
                if ((n(!0), (0, F.N1)(), (0, w.isMac)() && "focused" !== g.A.getState())) return;
                let { enableNewRequestBehavior: t } = H.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, F.r8)(x.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, s, o, e.callerSource]),
        { quests: i, excludedQuests: r, isFetchingCurrentQuests: s, hasFetched: t }
    );
}
function er(e, t) {
    let n = e.id === ee.aJ,
        i = t.id === ee.aJ,
        r = n && e.userStatus?.completedAt == null;
    if (r !== (i && t.userStatus?.completedAt == null)) return r ? -1 : 1;
    let s = !(0, U.Ic)(e),
        a = e.userStatus?.claimedAt != null,
        o = t.userStatus?.claimedAt != null,
        l = e.userStatus?.enrolledAt != null,
        u = t.userStatus?.enrolledAt != null,
        c = 20 * O.A.Millis.MINUTE,
        d = eQ(e, c),
        _ = eQ(t, c);
    return s
        ? d !== _ && (d || _)
            ? d
                ? 1
                : -1
            : a !== o
              ? a
                  ? 1
                  : -1
              : l !== u
                ? l
                    ? -1
                    : 1
                : e_(e.config.expiresAt, t.config.expiresAt, 1)
        : a !== o
          ? a
              ? -1
              : 1
          : l !== u
            ? l
                ? -1
                : 1
            : e_(e.config.expiresAt, t.config.expiresAt, 0);
}
function es(e, t) {
    return e_(e.config.startsAt, t.config.startsAt, 0);
}
function ea(e, t) {
    let n = e.userStatus?.enrolledAt,
        i = t.userStatus?.enrolledAt;
    return null == n && null == i
        ? e_(e.config.expiresAt, t.config.expiresAt, 0)
        : null != n && null == i
          ? -1
          : null == n && null != i
            ? 1
            : e_(n, i, 0);
}
function eo(e, t) {
    return e_(e.config.expiresAt, t.config.expiresAt, 1);
}
function el(e, t) {
    switch (t) {
        case ee.Pc.VIDEO:
            return (0, X.vv)(e);
        case ee.Pc.PLAY:
            return (0, X.t)({ quest: e }) || (0, X.fE)({ quest: e }) || (0, X.vl)(e) || (0, X.g5)(e) || (0, X.Cr)(e);
        default:
            return !1;
    }
}
function eu(e, t) {
    switch (t) {
        case ee.BQ.VIRTUAL_CURRENCY:
            return (0, Z.ks)(e.config);
        case ee.BQ.COLLECTIBLE:
            return (0, Z.tU)(e.config);
        case ee.BQ.IN_GAME:
            return (0, Z.HG)(e.config) || (0, Z.r7)(e.config);
        default:
            return !1;
    }
}
let ec = {};
function ed(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        { sortMethod: i, filters: r } = n,
        s =
            null == r || 0 === r.length
                ? e
                : (function (e, t) {
                      if (0 === t.length) return e;
                      let n = (0, o.groupBy)(t, "group");
                      return e.filter((e) =>
                          Object.entries(n).every((t) => {
                              let n,
                                  [i, r] = t;
                              return (
                                  (n = (function (e) {
                                      switch (e) {
                                          case "task":
                                              return el;
                                          case "reward":
                                              return eu;
                                      }
                                  })(i)),
                                  0 === r.length || r.some((t) => n(e, t.filter))
                              );
                          }),
                      );
                  })(e, r),
        a =
            ((t = (function (e) {
                switch (e) {
                    case ee.kL.MOST_RECENT:
                        return es;
                    case ee.kL.RECENTLY_ENROLLED:
                        return ea;
                    case ee.kL.EXPIRING_SOON:
                        return eo;
                    case ee.kL.SUGGESTED:
                    default:
                        return er;
                }
            })(i)),
            function (e, n) {
                let i = !(0, U.Ic)(e);
                return !(0, U.Ic)(n) !== i ? (i ? -1 : 1) : t(e, n);
            });
    return s.sort(a);
}
function e_(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
var ef = (((i = {}).ALL = "all"), (i.CLAIMED = "claimed"), (i.PREVIEW_TOOL = "preview_tool"), i),
    eh =
        (((r = {}).TAB = "tab"),
        (r.QUEST_ID = "quest_id"),
        (r.SORT = "sort"),
        (r.FILTER = "filter"),
        (r.AD_CREATIVE_IDS = "ad_creative_ids"),
        r);
function ep(e) {
    let t,
        n,
        i,
        r,
        s,
        o,
        l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        {
            quests: u,
            excludedQuests: c,
            isFetchingCurrentQuests: d,
            hasFetched: _,
        } = ei({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        f = new Map(u.map((e) => [e.id, e])),
        h =
            ((t = a.useRef([])),
            (n = a.useRef(l.sortMethod)),
            (i = a.useRef(l.filters)),
            (r = a.useRef(0)),
            a.useMemo(() => {
                if (0 === u.length) return [];
                if (
                    t.current.length > 0 &&
                    r.current === u.length &&
                    n.current === l.sortMethod &&
                    i.current === l.filters
                )
                    return t.current;
                let e = ed(u, l).map((e) => e.id);
                return (t.current = e), (n.current = l.sortMethod), (i.current = l.filters), (r.current = u.length), e;
            }, [u, l])),
        p =
            ((s = a.useMemo(
                () =>
                    u.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [u],
            )),
            (o = a.useRef([])),
            a.useMemo(() => {
                if (0 === s.length) return [];
                if (o.current.length > 0 && o.current.length === s.length) return o.current;
                let e = s
                    .sort((e, t) => {
                        let n = e.userStatus?.claimedAt == null;
                        return n !== (t.userStatus?.claimedAt == null)
                            ? n
                                ? -1
                                : 1
                            : e_(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return (o.current = e), e;
            }, [s])),
        E = [];
    for (let t of "all" === e ? h : p) {
        let e = f.get(t);
        null != e && E.push(e);
    }
    return { quests: E, excludedQuests: c, isFetchingCurrentQuests: d, hasFetched: _ };
}
function eE() {
    let e = a.useRef(!1),
        t = (0, p.yK)([V.A], () => Array.from(V.A.claimedQuests.values())),
        n = (0, p.bG)([V.A], () => V.A.isFetchingClaimedQuests);
    return (
        a.useEffect(() => {
            n || e.current || ((e.current = !0), (0, F.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function em(e, t) {
    let n = eA(e),
        i = (0, Z.ks)(e.config),
        r = (0, Z.KK)(e.config),
        s = t !== $.MA.INELIGIBLE;
    return !n && i && r && s;
}
function eg(e) {
    return (0, p.bG)([V.A], () => {
        let t = V.A.getQuest(e);
        if (null == t) return null;
        let n = t.config.rewardsConfig.rewards.find((e) => e.type === _.l.VIRTUAL_CURRENCY);
        if (n?.type !== _.l.VIRTUAL_CURRENCY) return null;
        let { premiumOrbQuantity: i, orbQuantity: r } = n;
        return null == i || 0 === r ? null : Math.round((i / r) * 100) / 100;
    }, [e]);
}
function eA(e) {
    return (0, p.bG)([V.A], () => null != e && V.A.isQuestExpired(e.id), [e]);
}
function eI(e, t, n) {
    let i = (0, p.bG)([N.A], () => N.A.getChannel(t?.channelId) ?? null),
        r = (0, p.bG)([V.A], () => null != V.A.questEnrollmentBlockedUntil, []),
        s = (0, p.bG)([C.default], () => C.default.getCurrentUser()?.id),
        a = (0, p.bG)([V.A], () => null != e && V.A.isQuestExpired(e.id), [e]);
    if (null == e || r || a || s === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, Q.Ll)(t, i);
    return !o || !!l;
}
function eT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, p.bG)([T.default], () => T.default.locale);
    return a.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eS(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: r } = e,
        s = (0, W.go)();
    return a.useCallback(() => {
        t.id === ee.Fw
            ? window.open(b.A.getArticleURL(k.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, q.pu)(t, { content: n, ctaContent: i, impressionId: s, sourceQuestContent: r });
    }, [t, n, i, s, r]);
}
function eN(e) {
    return (0, p.bG)([V.A], () => V.A.isProgressingOnDesktop(e.id));
}
function ey(e) {
    return a.useMemo(() => (0, X.YL)(e), [e]);
}
function eC(e) {
    let t,
        n = eN(e),
        i = ey(e),
        r =
            ((t = (0, p.bG)([V.A], () => V.A.getOptimisticProgress(e.id, c.n.WATCH_VIDEO))),
            a.useMemo(() => (0, J.J$)(e), [e, t]));
    return n || i || r;
}
let ev = (e) => {
    let t = a.useCallback(() => (0, X.Yh)(e), [e]),
        [n, i] = a.useState(t()),
        r = a.useCallback(() => i(t()), [t]),
        s = eC(e);
    return (
        a.useEffect(() => {
            if (
                e.userStatus?.enrolledAt == null ||
                e.userStatus?.completedAt != null ||
                e.userStatus?.claimedAt != null ||
                !s
            )
                return void r();
            let t = window.setInterval(() => {
                r();
            }, +O.A.Millis.SECOND);
            return () => {
                clearInterval(t), r();
            };
        }, [e, s, r]),
        n
    );
};
function eO(e) {
    return a.useMemo(() => (0, X.JC)(e), [e]);
}
function eR(e) {
    let t = a.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, X.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, A.A)(t);
}
function eb(e) {
    let t = (0, p.bG)([V.A], () => V.A.quests),
        n = eR(Array.from(t.values())),
        i = a.useMemo(() => {
            let n = (0, Q.$e)(t, ee.zO);
            return (0, z.BM)(n, e);
        }, [e, t, n]);
    return eA(i) ? null : i;
}
function eD(e) {
    return a.useMemo(
        () => ({
            handleComplete: () => (0, F.Yb)(e),
            handleProgress: (t) => (0, F.Yb)(e, t),
            handleResetStatusClick: () => (0, F.UZ)(e),
            handleResetDismissibilityClick: () => (0, F.Gt)(e),
            handleOverrideDeliveryClick: () => (0, F.d6)(e),
            handleResetHasBeenSeenClick: () => (0, F.qV)(u.p.QUEST, [e]),
        }),
        [e],
    );
}
function eL() {
    let { fetching: e, accounts: t } = (0, p.cf)([y.A], () => ({
            fetching: y.A.isFetching(),
            accounts: y.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: r,
        } = a.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === k.fg2.XBOX),
                i = e.filter((e) => e.type === k.fg2.PLAYSTATION),
                r = n.concat(i);
            return { xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: r };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: r };
}
let ew = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: r } = e,
            [s, o] = a.useState([]),
            [l, u] = a.useState(!1),
            c = (0, p.bG)([y.A], () => y.A.getAccounts()),
            _ = (0, G.O)((e) => e.clearErrorHintsByType);
        return (
            a.useEffect(() => {
                o((e) => e.filter((e) => e.type !== d._.EXPIRED_CREDENTIAL)), _(t, d._.EXPIRED_CREDENTIAL);
            }, [c, _, t]),
            {
                startConsoleQuest: a.useCallback(async () => {
                    if (l) return;
                    i?.(), u(!0);
                    let e = null;
                    try {
                        (e = await (0, F.vD)(t, n)), o(e.errorHints);
                    } finally {
                        u(!1), r?.(e?.errorHints ?? []);
                    }
                }, [l, i, r, n, t]),
                startingConsoleQuest: l,
                errorHints: s,
            }
        );
    },
    eM = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eL(),
            i = eC(t),
            r = 0 === n.length;
        return (0, X.g5)(t) && r && !i;
    },
    eP = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eL(),
            n = e.length > 0,
            i = t.length > 0,
            r = b.A.getArticleURL(k.MVz.QUEST_HOW_TO_PLAYSTATION),
            s = b.A.getArticleURL(k.MVz.QUEST_HOW_TO_XBOX),
            a = en.intl.format(en.t.beN4DG, { psHelpdeskArticle: r, xboxHelpdeskArticle: s }),
            o = en.intl.format(en.t.HVS7nh, { helpdeskArticle: i ? r : s });
        return { message: (n && !i) || (!n && i) ? o : a, xboxURL: s, playstationURL: r };
    };
var ex =
    (((s = {})[(s.UNACCEPTED = 0)] = "UNACCEPTED"),
    (s[(s.ACCEPTED = 1)] = "ACCEPTED"),
    (s[(s.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (s[(s.COMPLETED = 3)] = "COMPLETED"),
    (s[(s.CLAIMED = 4)] = "CLAIMED"),
    s);
function eU(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        r = ev(e).percentComplete > 0;
    return i ? 4 : n ? 3 : r && t ? 2 : 1 * !!t;
}
function ek(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, p.bG)([T.default], () => T.default.locale),
        { percentComplete: i } = ev(e),
        r = eO(e),
        s = null != r ? r.percentComplete : i,
        a = 100 * s,
        o = null == r || t ? (0, L.l9)(n, s, { roundingMode: "floor" }) : `${r?.progress}/${r?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eG(e, t) {
    var n;
    let [i, r] =
            ((n = e.id),
            [(0, p.bG)([V.A], () => V.A.selectedTaskPlatform(n)), a.useCallback((e) => (0, F.lx)(n, e), [n])]),
        s = a.useMemo(() => (0, q.UR)(e), [e]),
        o = s.includes(ee.fO.DESKTOP),
        u = s.includes(ee.fO.CONSOLE),
        d = eN(e),
        _ = ey(e),
        f = a.useMemo(
            () =>
                (0, l.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: c.n.PLAY_ON_DESKTOP }, () => ee.fO.DESKTOP)
                    .with({ taskType: c.n.PLAY_ACTIVITY }, () => ee.fO.DESKTOP)
                    .with({ taskType: c.n.WATCH_VIDEO }, () => ee.fO.DESKTOP)
                    .with({ taskType: c.n.WATCH_VIDEO_ON_MOBILE }, () => ee.fO.DESKTOP)
                    .with({ taskType: c.n.STREAM_ON_DESKTOP }, () => ee.fO.DESKTOP)
                    .with({ taskType: c.n.PLAY_ON_XBOX }, () => ee.fO.CONSOLE)
                    .with({ taskType: c.n.PLAY_ON_PLAYSTATION }, () => ee.fO.CONSOLE)
                    .with({ taskType: c.n.ACHIEVEMENT_IN_GAME }, () => ee.fO.DESKTOP)
                    .with({ taskType: c.n.ACHIEVEMENT_IN_ACTIVITY }, () => ee.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        h = d ? ee.fO.DESKTOP : _ ? ee.fO.CONSOLE : null;
    return [
        a.useMemo(
            () =>
                (0, l.YW)({ lastPlatformProgress: f, currentProgressingPlatform: h, selectedPlatform: i })
                    .with({ currentProgressingPlatform: ee.fO.CONSOLE }, () => x.X0.CONSOLE)
                    .with({ currentProgressingPlatform: ee.fO.DESKTOP }, () => x.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: ee.fO.CONSOLE }, () => x.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: ee.fO.DESKTOP }, () => x.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: ee.fO.CONSOLE,
                        },
                        () => x.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: ee.fO.DESKTOP,
                        },
                        () => x.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && o ? x.X0.SELECT : u ? x.X0.CONSOLE : x.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, o, f, h, i],
        ),
        s,
        r,
    ];
}
function eF(e) {
    let t = eO(e),
        n = ev(e),
        [i] = eG(e, n),
        r = eA(e),
        s = e.userStatus?.enrolledAt != null,
        a = e.userStatus?.completedAt != null,
        o = c.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        l = 0 === n.percentComplete,
        u = s && !a && !r && null == t && (o || (l && i === x.X0.DESKTOP)),
        d = (0, w.isWeb)() && u && !(0, q.W1)(e),
        _ = (0, w.isMac)() && n.taskType === c.n.STREAM_ON_DESKTOP && u,
        f = [];
    return _ && f.push(en.intl.string(en.t.MFGxFM)), d && f.push(en.intl.string(en.t.BV6xDm)), f;
}
function eV(e) {
    return (0, p.bG)([V.A], () => V.A.quests).get(e) ?? null;
}
function eB(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: r } = e,
        s = a.useRef(null);
    a.useEffect(() => {
        null != r &&
            s.current !== t &&
            ((0, Y.Mm)({ mode: t, prevMode: s.current, questContent: n, questId: r, sourceQuestContent: i }),
            (s.current = t));
    }, [r, n, t, i]),
        a.useEffect(() => {
            if (null != r)
                return () => {
                    (0, Y.Mm)({ mode: null, prevMode: s.current, questContent: n, questId: r, sourceQuestContent: i });
                };
        }, [r, n, i]);
}
function eH(e, t) {
    let n = (0, p.bG)([V.A], () => V.A.getQuest(e), [e]),
        i = (0, E.Ay)();
    return a.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, h.M)(i) ? k.NJ8.DARK : k.NJ8.LIGHT);
        return (0, P.tW)(n, P.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function ej(e) {
    let t = (0, p.bG)([C.default], () => C.default.getCurrentUser()),
        n = (0, Z.mq)(e, t),
        i = (0, Z.k5)(e),
        r = (0, Z.$5)(e),
        s = (0, Z.Y7)(e),
        a = (0, Z.JX)(e),
        o = (0, M.TW)(t, et.PremiumTypes.TIER_2);
    if (null == i) return en.intl.formatToPlainString(en.t.l9uXL8, { decorationName: n });
    let l = en.intl.formatToPlainString(en.t.o97tNn, { rewardName: n }),
        u = en.intl.formatToPlainString(en.t.PkyRZo, { rewardName: n, expirationDate: r }),
        c = en.intl.formatToPlainString(en.t.ie4YK0, { rewardName: n, duration: i }),
        d = en.intl.formatToPlainString(en.t.yCpc0U, { duration: i, rewardName: n });
    return a
        ? s
            ? o
                ? l
                : c
            : o
              ? u
              : d
        : en.intl.formatToPlainString(en.t.tTlItm, { duration: i, decorationName: n });
}
function eY(e) {
    let t = (0, X.TP)(e);
    return { launchInGameActivity: (0, m.A)({ applicationId: t }) };
}
let eW = () => (0, p.yK)([V.A], () => [...V.A.quests.values()]).some((e) => e.preview),
    eK = (e) => {
        let t = e?.userStatus != null && (0, U.gO)(e.userStatus, x.uF.ACTIVITY_PANEL),
            n = eA(e ?? null),
            i = e?.userStatus?.claimedAt != null,
            r = (0, p.bG)([V.A], () => null != V.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !i && !r;
    },
    ez = () => {
        let e = (0, p.yK)([V.A], () => [...V.A.quests.values()]);
        return a.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function e$() {
    let e = ee.pc;
    return a.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, K.fx)(t), options: n };
            }),
        [e],
    );
}
function eq() {
    return a.useMemo(() => Object.keys(ee.kL).map((e) => ({ label: (0, K.Js)(ee.kL[e]), value: ee.kL[e] })), []);
}
function eZ(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        r = a.useRef(null),
        s = a.useRef(null);
    a.useEffect(() => {
        v.default.track(k.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: r.current }),
            (r.current = t);
    }, [t]),
        a.useEffect(() => {
            let e = n.map((e) => e.filter);
            v.default.track(k.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: s.current ?? [],
                num_quests_visible: i,
            }),
                (s.current = e);
        }, [n, i]);
}
let eX = (e) => a.useMemo(() => C.default.getCurrentUser()?.isStaff() === !0, []) || e.preview,
    eQ = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function eJ(e) {
    let t = (0, p.bG)([V.A], () => V.A.quests);
    return a.useMemo(() => {
        let n = (e.questIds ?? [])
            .map((e) => t.get(e))
            .filter(R.Vq)
            .filter((e) => !(0, U.Ic)(e));
        return n.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: n, isShelfEnabled: !0 };
    }, [t, e.questIds]);
}
function e0() {
    let e = (0, p.bG)([V.A], () => V.A.getQuestHomeHero()),
        [t, n] = a.useState(() => Date.now()),
        i = null != e ? Date.parse(e.endsAt) : null,
        r = null != e;
    return (a.useEffect(() => {
        if (!r) return;
        let e = setInterval(() => n(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [r]),
    null == e || null == i || Number.isNaN(i) || t >= i)
        ? null
        : e;
}
function e1(e) {
    let { enabled: t } = B.rI.useConfig({ location: "useFetchQuestHomeHero" }),
        [n, i] = a.useState(!0),
        [r, s] = a.useState(!0),
        [o, l] = a.useState(!1),
        [u, c] = a.useState(!1),
        d = (0, p.bG)([V.A], () => V.A.isFetchingQuestHomeHero()),
        _ = e0();
    return (
        a.useEffect(() => {
            !(async function () {
                try {
                    null != e ? await (0, F.IV)(e) : t ? await (0, F.Am)() : await (0, F.Yf)();
                } catch (e) {
                    s(!1), l(!0);
                } finally {
                    i(!1);
                }
            })();
        }, [e, t]),
        a.useEffect(() => {
            !(async function () {
                try {
                    if (null == _) return;
                    let e = [_.heroImage, _.sponsorImage].filter((e) => null != e);
                    await Promise.all(e.map(D.NN));
                } catch (e) {
                    c(!0);
                } finally {
                    s(!1);
                }
            })();
        }, [_]),
        { questHomeHero: o || u ? null : _, isLoading: n || d || r }
    );
}
function e2(e) {
    let t = S.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return a.useCallback(() => {
        if (n) return;
        let i = t ? f.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : f.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, I.hs)(i, { quest_id: e.id });
    }, [t, n, e.id]);
}
