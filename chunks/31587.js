"use strict";
n.d(t, {
    O9: () => ek,
    Vn: () => eN,
    Wj: () => eL,
    mL: () => et,
    Yl: () => eA,
    Nb: () => e$,
    pT: () => eK,
    UH: () => eJ,
    $P: () => eq,
    YW: () => eO,
    zW: () => ej,
    NC: () => e_,
    j$: () => eb,
    fc: () => ev,
    p5: () => eY,
    SD: () => eE,
    aC: () => eG,
    FA: () => eH,
    LS: () => eg,
    RR: () => ew,
    Ns: () => eX,
    Iq: () => ep,
    Qh: () => ef,
    t9: () => eQ,
    XD: () => ez,
    ZP: () => em,
    UX: () => eM,
    mn: () => ec,
    C5: () => eF,
    sb: () => eW,
    I3: () => eC,
    Qo: () => eU,
    In: () => ex,
    H6: () => eV,
    a5: () => eB,
    F3: () => eP,
    L1: () => eh,
    oH: () => eR,
    do: () => eT,
    S5: () => eI,
    Du: () => eD,
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
    d = n(114046);
n(731355);
var _ = n(517846),
    h = n(462887),
    f = n(17928),
    p = n(736653),
    E = n(787389),
    m = n(183636),
    g = n(429913);
n(674658);
var A = n(27620),
    I = n(773669),
    T = n(885386),
    S = n(734057),
    y = n(30370),
    N = n(287809),
    v = n(174459),
    C = n(927813),
    R = n(403362),
    O = n(975571),
    b = n(252424),
    D = n(723702),
    L = n(428262);
n(323874), n(14289), n(35956), n(636537), n(228366), n(181658);
var w = n(551875);
n(107195), n(881615), n(404851), n(265704);
var M = n(507107),
    P = n(710969),
    x = n(652215),
    k = n(178540),
    U = n(340124),
    G = n(859703),
    F = n(192444),
    V = n(302654);
(0, n(945810).mj)({
    name: "2026-03-quest-home-bounties",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var B = n(971276),
    H = n(561844);
n(590202);
var j = n(971649),
    Y = n(651892),
    W = n(639214),
    K = n(576761),
    $ = n(901406),
    z = n(801365),
    q = n(792620),
    X = n(814793),
    Z = n(753386),
    Q = n(190107),
    J = n(788868),
    ee = n(375708);
function et() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = a.useState(!1),
        i = (0, f.yK)([G.A], () => [...G.A.quests.values()]),
        r = (0, f.yK)([G.A], () => [...G.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: s, lastFetchedCurrentQuests: o } = (0, f.cf)([G.A], () => ({
            isFetchingCurrentQuests: G.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: G.A.lastFetchedCurrentQuests,
        })),
        l = (0, B.s)();
    return (
        a.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !s
            ) {
                if ((n(!0), (0, U.N1)(), (0, D.isMac)() && "focused" !== m.A.getState())) return;
                let { enableNewRequestBehavior: t } = V.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, U.r8)(M.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, s, o, e.callerSource]),
        { quests: i, excludedQuests: r, isFetchingCurrentQuests: s, hasFetched: t }
    );
}
function en(e, t, n) {
    let i = e.id === Q.aJ,
        r = t.id === Q.aJ,
        s = i && e.userStatus?.completedAt == null;
    if (s !== (r && t.userStatus?.completedAt == null)) return s ? -1 : 1;
    let a = !(0, P.Ic)(e),
        o = e.userStatus?.claimedAt != null,
        l = t.userStatus?.claimedAt != null,
        u = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        d = 20 * C.A.Millis.MINUTE,
        _ = eZ(e, d),
        h = eZ(t, d);
    if (a) {
        let { questHomeHero: i, isQuestHomeHeroShelfEnabled: r } = n;
        if (null != i && !r) {
            let n = (0, X.I0)(i, e.id),
                r = (0, X.I0)(i, t.id);
            if (n || r) return n ? -1 : 1;
        }
        return _ !== h && (_ || h)
            ? _
                ? 1
                : -1
            : o !== l
              ? o
                  ? 1
                  : -1
              : u !== c
                ? u
                    ? -1
                    : 1
                : ed(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return o !== l ? (o ? -1 : 1) : u !== c ? (u ? -1 : 1) : ed(e.config.expiresAt, t.config.expiresAt, 0);
}
function ei(e, t, n) {
    return ed(e.config.startsAt, t.config.startsAt, 0);
}
function er(e, t, n) {
    let i = e.userStatus?.enrolledAt,
        r = t.userStatus?.enrolledAt;
    return null == i && null == r
        ? ed(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == r
          ? -1
          : null == i && null != r
            ? 1
            : ed(i, r, 0);
}
function es(e, t, n) {
    return ed(e.config.expiresAt, t.config.expiresAt, 1);
}
function ea(e, t) {
    switch (t) {
        case Q.Pc.VIDEO:
            return (0, q.vv)(e);
        case Q.Pc.PLAY:
            return (0, q.t)({ quest: e }) || (0, q.fE)({ quest: e }) || (0, q.vl)(e) || (0, q.g5)(e) || (0, q.Cr)(e);
        default:
            return !1;
    }
}
function eo(e, t) {
    switch (t) {
        case Q.BQ.VIRTUAL_CURRENCY:
            return (0, z.ks)(e.config);
        case Q.BQ.COLLECTIBLE:
            return (0, z.tU)(e.config);
        case Q.BQ.IN_GAME:
            return (0, z.HG)(e.config) || (0, z.r7)(e.config);
        default:
            return !1;
    }
}
let el = {},
    eu = { questHomeHero: null, isQuestHomeHeroShelfEnabled: !1 };
function ec(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eu,
        { sortMethod: r, filters: s } = n,
        a =
            null == s || 0 === s.length
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
                                              return ea;
                                          case "reward":
                                              return eo;
                                      }
                                  })(i)),
                                  0 === r.length || r.some((t) => n(e, t.filter))
                              );
                          }),
                      );
                  })(e, s),
        l =
            ((t = (function (e) {
                switch (e) {
                    case Q.kL.MOST_RECENT:
                        return ei;
                    case Q.kL.RECENTLY_ENROLLED:
                        return er;
                    case Q.kL.EXPIRING_SOON:
                        return es;
                    case Q.kL.SUGGESTED:
                    default:
                        return en;
                }
            })(r)),
            function (e, n) {
                let r = !(0, P.Ic)(e);
                return !(0, P.Ic)(n) !== r ? (r ? -1 : 1) : t(e, n, i);
            });
    return a.sort(l);
}
function ed(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
var e_ = (((i = {}).ALL = "all"), (i.CLAIMED = "claimed"), (i.PREVIEW_TOOL = "preview_tool"), i),
    eh =
        (((r = {}).TAB = "tab"),
        (r.QUEST_ID = "quest_id"),
        (r.SORT = "sort"),
        (r.FILTER = "filter"),
        (r.AD_CREATIVE_IDS = "ad_creative_ids"),
        r);
function ef(e) {
    let t,
        n,
        i,
        r,
        s,
        o,
        l,
        u,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el,
        {
            quests: d,
            excludedQuests: _,
            isFetchingCurrentQuests: h,
            hasFetched: p,
        } = et({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        E = new Map(d.map((e) => [e.id, e])),
        m =
            ((t = (function () {
                let e = (0, F.Qj)(),
                    t = (0, f.bG)([G.A], () => (e ? null : G.A.getQuestHomeHero()), [e]),
                    { isShelfEnabled: n } = eQ(t);
                return a.useMemo(() => ({ questHomeHero: t, isQuestHomeHeroShelfEnabled: n }), [t, n]);
            })()),
            (n = a.useRef([])),
            (i = a.useRef(c.sortMethod)),
            (r = a.useRef(c.filters)),
            (s = a.useRef(0)),
            (o = a.useRef(t)),
            a.useMemo(() => {
                if (0 === d.length) return [];
                if (
                    n.current.length > 0 &&
                    s.current === d.length &&
                    i.current === c.sortMethod &&
                    r.current === c.filters &&
                    o.current === t
                )
                    return n.current;
                let e = ec(d, c, t).map((e) => e.id);
                return (
                    (n.current = e),
                    (i.current = c.sortMethod),
                    (r.current = c.filters),
                    (s.current = d.length),
                    (o.current = t),
                    e
                );
            }, [d, c, t])),
        g =
            ((l = a.useMemo(
                () =>
                    d.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [d],
            )),
            (u = a.useRef([])),
            a.useMemo(() => {
                if (0 === l.length) return [];
                if (u.current.length > 0 && u.current.length === l.length) return u.current;
                let e = l
                    .sort((e, t) => {
                        let n = e.userStatus?.claimedAt == null;
                        return n !== (t.userStatus?.claimedAt == null)
                            ? n
                                ? -1
                                : 1
                            : ed(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return (u.current = e), e;
            }, [l])),
        A = [];
    for (let t of "all" === e ? m : g) {
        let n = E.get(t),
            i = null != n && "all" === e && c.removeExpiredQuests && (0, P.Ic)(n) && !(0, P.GR)(n.userStatus);
        null == n || i || A.push(n);
    }
    return { quests: A, excludedQuests: _, isFetchingCurrentQuests: h, hasFetched: p };
}
function ep() {
    let e = a.useRef(!1),
        t = (0, f.yK)([G.A], () => Array.from(G.A.claimedQuests.values())),
        n = (0, f.bG)([G.A], () => G.A.isFetchingClaimedQuests);
    return (
        a.useEffect(() => {
            n || e.current || ((e.current = !0), (0, U.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eE(e, t) {
    let n = eg(e),
        i = (0, z.ks)(e.config),
        r = (0, z.KK)(e.config),
        s = t !== K.MA.INELIGIBLE;
    return !n && i && r && s;
}
function em(e) {
    return (0, f.bG)([G.A], () => {
        let t = G.A.getQuest(e);
        return null == t ? null : (0, z.b)(t.config);
    }, [e]);
}
function eg(e) {
    return (0, f.bG)([G.A], () => null != e && G.A.isQuestExpired(e.id), [e]);
}
function eA(e, t, n) {
    let i = (0, f.bG)([S.A], () => S.A.getChannel(t?.channelId) ?? null),
        r = (0, f.bG)([G.A], () => null != G.A.questEnrollmentBlockedUntil, []),
        s = (0, f.bG)([N.default], () => N.default.getCurrentUser()?.id),
        a = (0, f.bG)([G.A], () => null != e && G.A.isQuestExpired(e.id), [e]);
    if (null == e || r || a || s === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, X.Ll)(t, i);
    return !o || !!l;
}
function eI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, f.bG)([I.default], () => I.default.locale);
    return a.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eT(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: r } = e,
        s = (0, j.go)();
    return a.useCallback(() => {
        t.id === Q.Fw
            ? window.open(O.A.getArticleURL(x.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, $.pu)(t, { content: n, ctaContent: i, impressionId: s, sourceQuestContent: r });
    }, [t, n, i, s, r]);
}
function eS(e) {
    return (0, f.bG)([G.A], () => G.A.isProgressingOnDesktop(e.id));
}
function ey(e) {
    return a.useMemo(() => (0, q.YL)(e), [e]);
}
function eN(e) {
    let t,
        n = eS(e),
        i = ey(e),
        r =
            ((t = (0, f.bG)([G.A], () => G.A.getOptimisticProgress(e.id, c.n.WATCH_VIDEO))),
            a.useMemo(() => (0, Z.J$)(e), [e, t]));
    return n || i || r;
}
let ev = (e) => {
    let t = a.useCallback(() => (0, q.Yh)(e), [e]),
        [n, i] = a.useState(t()),
        r = a.useCallback(() => i(t()), [t]),
        s = eN(e);
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
            }, +C.A.Millis.SECOND);
            return () => {
                clearInterval(t), r();
            };
        }, [e, s, r]),
        n
    );
};
function eC(e) {
    return a.useMemo(() => (0, q.JC)(e), [e]);
}
function eR(e) {
    let t = a.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, q.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, g.A)(t);
}
function eO(e) {
    let t = (0, f.bG)([G.A], () => G.A.quests),
        n = eR(Array.from(t.values())),
        i = a.useMemo(() => {
            let n = (0, X.$e)(t, Q.zO);
            return (0, W.BM)(n, e);
        }, [e, t, n]);
    return eg(i) ? null : i;
}
function eb(e) {
    return a.useMemo(
        () => ({
            handleComplete: () => (0, U.Yb)(e),
            handleProgress: (t) => (0, U.Yb)(e, t),
            handleResetStatusClick: () => (0, U.UZ)(e),
            handleResetDismissibilityClick: () => (0, U.Gt)(e),
            handleOverridePreviewClick: (t) => (0, U.L4)(t, e),
            handleResetHasBeenSeenClick: () => (0, U.qV)(u.p.QUEST, [e]),
        }),
        [e],
    );
}
function eD() {
    let { fetching: e, accounts: t } = (0, f.cf)([y.A], () => ({
            fetching: y.A.isFetching(),
            accounts: y.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: r,
        } = a.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === x.fg2.XBOX),
                i = e.filter((e) => e.type === x.fg2.PLAYSTATION),
                r = n.concat(i);
            return { xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: r };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: r };
}
let eL = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: r } = e,
            [s, o] = a.useState([]),
            [l, u] = a.useState(!1),
            c = (0, f.bG)([y.A], () => y.A.getAccounts()),
            _ = (0, k.O)((e) => e.clearErrorHintsByType);
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
                        (e = await (0, U.vD)(t, n)), o(e.errorHints);
                    } finally {
                        u(!1), r?.(e?.errorHints ?? []);
                    }
                }, [l, i, r, n, t]),
                startingConsoleQuest: l,
                errorHints: s,
            }
        );
    },
    ew = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eD(),
            i = eN(t),
            r = 0 === n.length;
        return (0, q.g5)(t) && r && !i;
    },
    eM = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eD(),
            n = e.length > 0,
            i = t.length > 0,
            r = O.A.getArticleURL(x.MVz.QUEST_HOW_TO_PLAYSTATION),
            s = O.A.getArticleURL(x.MVz.QUEST_HOW_TO_XBOX),
            a = ee.intl.format(ee.t.beN4DG, { psHelpdeskArticle: r, xboxHelpdeskArticle: s }),
            o = ee.intl.format(ee.t.HVS7nh, { helpdeskArticle: i ? r : s });
        return { message: (n && !i) || (!n && i) ? o : a, xboxURL: s, playstationURL: r };
    };
var eP =
    (((s = {})[(s.UNACCEPTED = 0)] = "UNACCEPTED"),
    (s[(s.ACCEPTED = 1)] = "ACCEPTED"),
    (s[(s.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (s[(s.COMPLETED = 3)] = "COMPLETED"),
    (s[(s.CLAIMED = 4)] = "CLAIMED"),
    s);
function ex(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        r = ev(e).percentComplete > 0;
    return i ? 4 : n ? 3 : r && t ? 2 : 1 * !!t;
}
function ek(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, f.bG)([I.default], () => I.default.locale),
        { percentComplete: i } = ev(e),
        r = eC(e),
        s = null != r ? r.percentComplete : i,
        a = 100 * s,
        o = null == r || t ? (0, b.l9)(n, s, { roundingMode: "floor" }) : `${r?.progress}/${r?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eU(e, t) {
    var n;
    let [i, r] =
            ((n = e.id),
            [(0, f.bG)([G.A], () => G.A.selectedTaskPlatform(n)), a.useCallback((e) => (0, U.lx)(n, e), [n])]),
        s = a.useMemo(() => (0, $.UR)(e), [e]),
        o = s.includes(Q.fO.DESKTOP),
        u = s.includes(Q.fO.CONSOLE),
        d = eS(e),
        _ = ey(e),
        h = a.useMemo(
            () =>
                (0, l.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: c.n.PLAY_ON_DESKTOP }, () => Q.fO.DESKTOP)
                    .with({ taskType: c.n.PLAY_ACTIVITY }, () => Q.fO.DESKTOP)
                    .with({ taskType: c.n.WATCH_VIDEO }, () => Q.fO.DESKTOP)
                    .with({ taskType: c.n.WATCH_VIDEO_ON_MOBILE }, () => Q.fO.DESKTOP)
                    .with({ taskType: c.n.STREAM_ON_DESKTOP }, () => Q.fO.DESKTOP)
                    .with({ taskType: c.n.PLAY_ON_XBOX }, () => Q.fO.CONSOLE)
                    .with({ taskType: c.n.PLAY_ON_PLAYSTATION }, () => Q.fO.CONSOLE)
                    .with({ taskType: c.n.ACHIEVEMENT_IN_GAME }, () => Q.fO.DESKTOP)
                    .with({ taskType: c.n.ACHIEVEMENT_IN_ACTIVITY }, () => Q.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        p = d ? Q.fO.DESKTOP : _ ? Q.fO.CONSOLE : null;
    return [
        a.useMemo(
            () =>
                (0, l.YW)({ lastPlatformProgress: h, currentProgressingPlatform: p, selectedPlatform: i })
                    .with({ currentProgressingPlatform: Q.fO.CONSOLE }, () => M.X0.CONSOLE)
                    .with({ currentProgressingPlatform: Q.fO.DESKTOP }, () => M.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: Q.fO.CONSOLE }, () => M.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: Q.fO.DESKTOP }, () => M.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: Q.fO.CONSOLE,
                        },
                        () => M.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: Q.fO.DESKTOP,
                        },
                        () => M.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && o ? M.X0.SELECT : u ? M.X0.CONSOLE : M.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, o, h, p, i],
        ),
        s,
        r,
    ];
}
function eG(e) {
    let t = eC(e),
        n = ev(e),
        [i] = eU(e, n),
        r = eg(e),
        s = e.userStatus?.enrolledAt != null,
        a = e.userStatus?.completedAt != null,
        o = c.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        l = 0 === n.percentComplete,
        u = s && !a && !r && null == t && (o || (l && i === M.X0.DESKTOP)),
        d = (0, D.isWeb)() && u && !(0, $.W1)(e),
        _ = (0, D.isMac)() && n.taskType === c.n.STREAM_ON_DESKTOP && u,
        h = [];
    return _ && h.push(ee.intl.string(ee.t.MFGxFM)), d && h.push(ee.intl.string(ee.t.BV6xDm)), h;
}
function eF(e) {
    return (0, f.bG)([G.A], () => G.A.quests).get(e) ?? null;
}
function eV(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: r } = e,
        s = a.useRef(null);
    a.useEffect(() => {
        null != r &&
            s.current !== t &&
            ((0, H.Mm)({ mode: t, prevMode: s.current, questContent: n, questId: r, sourceQuestContent: i }),
            (s.current = t));
    }, [r, n, t, i]),
        a.useEffect(() => {
            if (null != r)
                return () => {
                    (0, H.Mm)({ mode: null, prevMode: s.current, questContent: n, questId: r, sourceQuestContent: i });
                };
        }, [r, n, i]);
}
function eB(e, t) {
    let n = (0, f.bG)([G.A], () => G.A.getQuest(e), [e]),
        i = (0, p.Ay)();
    return a.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, h.M)(i) ? x.NJ8.DARK : x.NJ8.LIGHT);
        return (0, w.tW)(n, w.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eH(e) {
    let t = (0, f.bG)([N.default], () => N.default.getCurrentUser()),
        n = (0, z.mq)(e, t),
        i = (0, z.k5)(e),
        r = (0, z.$5)(e),
        s = (0, z.Y7)(e),
        a = (0, z.JX)(e),
        o = (0, L.TW)(t, J.PremiumTypes.TIER_2);
    if (null == i) return ee.intl.formatToPlainString(ee.t.l9uXL8, { decorationName: n });
    let l = ee.intl.formatToPlainString(ee.t.o97tNn, { rewardName: n }),
        u = ee.intl.formatToPlainString(ee.t.PkyRZo, { rewardName: n, expirationDate: r }),
        c = ee.intl.formatToPlainString(ee.t.ie4YK0, { rewardName: n, duration: i }),
        d = ee.intl.formatToPlainString(ee.t.yCpc0U, { duration: i, rewardName: n });
    return a
        ? s
            ? o
                ? l
                : c
            : o
              ? u
              : d
        : ee.intl.formatToPlainString(ee.t.tTlItm, { duration: i, decorationName: n });
}
function ej(e) {
    let t = (0, q.TP)(e);
    return { launchInGameActivity: (0, E.A)({ applicationId: t }) };
}
let eY = () => (0, f.yK)([G.A], () => [...G.A.quests.values()]).some((e) => e.preview),
    eW = (e) => {
        let t = e?.userStatus != null && (0, P.gO)(e.userStatus, M.uF.ACTIVITY_PANEL),
            n = eg(e ?? null),
            i = e?.userStatus?.claimedAt != null,
            r = (0, f.bG)([G.A], () => null != G.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !i && !r;
    },
    eK = () => {
        let e = (0, f.yK)([G.A], () => [...G.A.quests.values()]);
        return a.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function e$() {
    let e = Q.pc;
    return a.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, Y.fx)(t), options: n };
            }),
        [e],
    );
}
function ez() {
    return a.useMemo(() => Object.keys(Q.kL).map((e) => ({ label: (0, Y.Js)(Q.kL[e]), value: Q.kL[e] })), []);
}
function eq(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        r = a.useRef(null),
        s = a.useRef(null);
    a.useEffect(() => {
        v.default.track(x.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: r.current }),
            (r.current = t);
    }, [t]),
        a.useEffect(() => {
            let e = n.map((e) => e.filter);
            v.default.track(x.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: s.current ?? [],
                num_quests_visible: i,
            }),
                (s.current = e);
        }, [n, i]);
}
let eX = (e) => a.useMemo(() => N.default.getCurrentUser()?.isStaff() === !0, []) || e.preview,
    eZ = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function eQ(e) {
    let t = (0, f.bG)([G.A], () => G.A.quests),
        n = e?.questIds;
    return a.useMemo(() => {
        if (null == n) return { shelfQuests: [], isShelfEnabled: !1 };
        let e = n
            .map((e) => t.get(e))
            .filter(R.Vq)
            .filter((e) => !(0, P.Ic)(e));
        return e.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: e, isShelfEnabled: !0 };
    }, [t, n]);
}
function eJ(e) {
    let t = T.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return a.useCallback(() => {
        if (n) return;
        let i = t ? _.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : _.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, A.hs)(i, { quest_id: e.id });
    }, [t, n, e.id]);
}
C.A.Millis.HOUR, C.A.Millis.MINUTE;
