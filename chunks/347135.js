"use strict";
n.d(t, {
    O9: () => eU,
    Vn: () => eN,
    Wj: () => ew,
    mL: () => en,
    Yl: () => eI,
    Nb: () => ez,
    pT: () => e$,
    UH: () => e0,
    $P: () => eZ,
    YW: () => eb,
    zW: () => eY,
    NC: () => eh,
    j$: () => eD,
    fc: () => ev,
    p5: () => eW,
    SD: () => em,
    aC: () => eF,
    FA: () => eH,
    LS: () => eA,
    RR: () => eM,
    Ns: () => eX,
    Iq: () => eE,
    Qh: () => ep,
    t9: () => eJ,
    XD: () => eq,
    ZP: () => eg,
    UX: () => eP,
    mn: () => ed,
    C5: () => eV,
    sb: () => eK,
    I3: () => eR,
    Qo: () => eG,
    In: () => ek,
    H6: () => eB,
    a5: () => ej,
    F3: () => ex,
    L1: () => ef,
    oH: () => eO,
    do: () => eS,
    S5: () => eT,
    Du: () => eL,
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
    C = n(287809),
    N = n(174459),
    v = n(927813),
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
    V = n(302654),
    B = n(945810);
(0, B.mj)({
    name: "2026-03-quest-home-bounties",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var j = n(971276),
    H = n(561844);
n(590202);
var Y = n(971649),
    W = n(651892),
    K = n(639214),
    $ = n(576761),
    z = n(901406),
    q = n(801365),
    Z = n(792620),
    X = n(814793),
    Q = n(753386);
(0, B.mj)({
    name: "2026-05-bounties-stage-1",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        verticalScrollEnabled: !1,
        loopingEnabled: !1,
        ctaTimerMilliSeconds: 3e3,
        rewardTimerSeconds: 15,
        orbAmount: 50,
    },
    variations: {
        1: {
            enabled: !0,
            verticalScrollEnabled: !1,
            loopingEnabled: !1,
            ctaTimerMilliSeconds: 3e3,
            rewardTimerSeconds: 15,
            orbAmount: 50,
        },
        2: {
            enabled: !0,
            verticalScrollEnabled: !1,
            loopingEnabled: !0,
            ctaTimerMilliSeconds: 3e3,
            rewardTimerSeconds: 15,
            orbAmount: 50,
        },
        3: {
            enabled: !0,
            verticalScrollEnabled: !1,
            loopingEnabled: !1,
            ctaTimerMilliSeconds: 3e3,
            rewardTimerSeconds: 15,
            orbAmount: 30,
        },
        4: {
            enabled: !0,
            verticalScrollEnabled: !1,
            loopingEnabled: !1,
            ctaTimerMilliSeconds: 0,
            rewardTimerSeconds: 15,
            orbAmount: 50,
        },
        5: {
            enabled: !0,
            verticalScrollEnabled: !1,
            loopingEnabled: !1,
            ctaTimerMilliSeconds: 3e3,
            rewardTimerSeconds: 25,
            orbAmount: 50,
        },
        6: {
            enabled: !0,
            verticalScrollEnabled: !0,
            loopingEnabled: !1,
            ctaTimerMilliSeconds: 3e3,
            rewardTimerSeconds: 15,
            orbAmount: 50,
        },
        7: {
            enabled: !0,
            verticalScrollEnabled: !0,
            loopingEnabled: !0,
            ctaTimerMilliSeconds: 3e3,
            rewardTimerSeconds: 15,
            orbAmount: 50,
        },
        8: {
            enabled: !0,
            verticalScrollEnabled: !0,
            loopingEnabled: !1,
            ctaTimerMilliSeconds: 3e3,
            rewardTimerSeconds: 15,
            orbAmount: 30,
        },
        9: {
            enabled: !0,
            verticalScrollEnabled: !0,
            loopingEnabled: !1,
            ctaTimerMilliSeconds: 0,
            rewardTimerSeconds: 15,
            orbAmount: 50,
        },
        10: {
            enabled: !0,
            verticalScrollEnabled: !0,
            loopingEnabled: !1,
            ctaTimerMilliSeconds: 3e3,
            rewardTimerSeconds: 25,
            orbAmount: 50,
        },
    },
}),
    (0, B.mj)({
        name: "2026-06-bounty-use-video-modal-mobile-placement-experiment",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !1 }, 2: { enabled: !0 } },
    });
var J = n(190107),
    ee = n(788868),
    et = n(375708);
function en() {
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
                if ((n(!0), (0, U.N1)(), (0, D.isMac)() && "focused" !== m.A.getState())) return;
                let { enableNewRequestBehavior: t } = V.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, U.r8)(M.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, s, o, e.callerSource]),
        { quests: i, excludedQuests: r, isFetchingCurrentQuests: s, hasFetched: t }
    );
}
function ei(e, t, n) {
    let i = e.id === J.aJ,
        r = t.id === J.aJ,
        s = i && e.userStatus?.completedAt == null;
    if (s !== (r && t.userStatus?.completedAt == null)) return s ? -1 : 1;
    let a = !(0, P.Ic)(e),
        o = e.userStatus?.claimedAt != null,
        l = t.userStatus?.claimedAt != null,
        u = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        d = 20 * v.A.Millis.MINUTE,
        _ = eQ(e, d),
        h = eQ(t, d);
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
                : e_(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return o !== l ? (o ? -1 : 1) : u !== c ? (u ? -1 : 1) : e_(e.config.expiresAt, t.config.expiresAt, 0);
}
function er(e, t, n) {
    return e_(e.config.startsAt, t.config.startsAt, 0);
}
function es(e, t, n) {
    let i = e.userStatus?.enrolledAt,
        r = t.userStatus?.enrolledAt;
    return null == i && null == r
        ? e_(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == r
          ? -1
          : null == i && null != r
            ? 1
            : e_(i, r, 0);
}
function ea(e, t, n) {
    return e_(e.config.expiresAt, t.config.expiresAt, 1);
}
function eo(e, t) {
    switch (t) {
        case J.Pc.VIDEO:
            return (0, Z.vv)(e);
        case J.Pc.PLAY:
            return (0, Z.t)({ quest: e }) || (0, Z.fE)({ quest: e }) || (0, Z.vl)(e) || (0, Z.g5)(e) || (0, Z.Cr)(e);
        default:
            return !1;
    }
}
function el(e, t) {
    switch (t) {
        case J.BQ.VIRTUAL_CURRENCY:
            return (0, q.ks)(e.config);
        case J.BQ.COLLECTIBLE:
            return (0, q.tU)(e.config);
        case J.BQ.IN_GAME:
            return (0, q.HG)(e.config) || (0, q.r7)(e.config);
        default:
            return !1;
    }
}
let eu = {},
    ec = { questHomeHero: null, isQuestHomeHeroShelfEnabled: !1 };
function ed(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eu,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ec,
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
                                              return eo;
                                          case "reward":
                                              return el;
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
                    case J.kL.MOST_RECENT:
                        return er;
                    case J.kL.RECENTLY_ENROLLED:
                        return es;
                    case J.kL.EXPIRING_SOON:
                        return ea;
                    case J.kL.SUGGESTED:
                    default:
                        return ei;
                }
            })(r)),
            function (e, n) {
                let r = !(0, P.Ic)(e);
                return !(0, P.Ic)(n) !== r ? (r ? -1 : 1) : t(e, n, i);
            });
    return a.sort(l);
}
function e_(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
var eh = (((i = {}).ALL = "all"), (i.CLAIMED = "claimed"), (i.PREVIEW_TOOL = "preview_tool"), i),
    ef =
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
        l,
        u,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eu,
        {
            quests: d,
            excludedQuests: _,
            isFetchingCurrentQuests: h,
            hasFetched: p,
        } = en({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        E = new Map(d.map((e) => [e.id, e])),
        m =
            ((t = (function () {
                let e = (0, F.Qj)(),
                    t = (0, f.bG)([G.A], () => (e ? null : G.A.getQuestHomeHero()), [e]),
                    { isShelfEnabled: n } = eJ(t);
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
                let e = ed(d, c, t).map((e) => e.id);
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
                            : e_(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
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
function eE() {
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
function em(e, t) {
    let n = eA(e),
        i = (0, q.ks)(e.config),
        r = (0, q.KK)(e.config),
        s = t !== $.MA.INELIGIBLE;
    return !n && i && r && s;
}
function eg(e) {
    return (0, f.bG)([G.A], () => {
        let t = G.A.getQuest(e);
        return null == t ? null : (0, q.b)(t.config);
    }, [e]);
}
function eA(e) {
    return (0, f.bG)([G.A], () => null != e && G.A.isQuestExpired(e.id), [e]);
}
function eI(e, t, n) {
    let i = (0, f.bG)([S.A], () => S.A.getChannel(t?.channelId) ?? null),
        r = (0, f.bG)([G.A], () => null != G.A.questEnrollmentBlockedUntil, []),
        s = (0, f.bG)([C.default], () => C.default.getCurrentUser()?.id),
        a = (0, f.bG)([G.A], () => null != e && G.A.isQuestExpired(e.id), [e]);
    if (null == e || r || a || s === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, X.Ll)(t, i);
    return !o || !!l;
}
function eT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, f.bG)([I.default], () => I.default.locale);
    return a.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eS(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: r } = e,
        s = (0, Y.go)();
    return a.useCallback(() => {
        t.id === J.Fw
            ? window.open(O.A.getArticleURL(x.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, z.pu)(t, { content: n, ctaContent: i, impressionId: s, sourceQuestContent: r });
    }, [t, n, i, s, r]);
}
function ey(e) {
    return (0, f.bG)([G.A], () => G.A.isProgressingOnDesktop(e.id));
}
function eC(e) {
    return a.useMemo(() => (0, Z.YL)(e), [e]);
}
function eN(e) {
    let t,
        n = ey(e),
        i = eC(e),
        r =
            ((t = (0, f.bG)([G.A], () => G.A.getOptimisticProgress(e.id, c.n.WATCH_VIDEO))),
            a.useMemo(() => (0, Q.J$)(e), [e, t]));
    return n || i || r;
}
let ev = (e) => {
    let t = a.useCallback(() => (0, Z.Yh)(e), [e]),
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
            }, +v.A.Millis.SECOND);
            return () => {
                clearInterval(t), r();
            };
        }, [e, s, r]),
        n
    );
};
function eR(e) {
    return a.useMemo(() => (0, Z.JC)(e), [e]);
}
function eO(e) {
    let t = a.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, Z.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, g.A)(t);
}
function eb(e) {
    let t = (0, f.bG)([G.A], () => G.A.quests),
        n = eO(Array.from(t.values())),
        i = a.useMemo(() => {
            let n = (0, X.$e)(t, J.zO);
            return (0, K.BM)(n, e);
        }, [e, t, n]);
    return eA(i) ? null : i;
}
function eD(e) {
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
function eL() {
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
let ew = (e) => {
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
    eM = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eL(),
            i = eN(t),
            r = 0 === n.length;
        return (0, Z.g5)(t) && r && !i;
    },
    eP = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eL(),
            n = e.length > 0,
            i = t.length > 0,
            r = O.A.getArticleURL(x.MVz.QUEST_HOW_TO_PLAYSTATION),
            s = O.A.getArticleURL(x.MVz.QUEST_HOW_TO_XBOX),
            a = et.intl.format(et.t.beN4DG, { psHelpdeskArticle: r, xboxHelpdeskArticle: s }),
            o = et.intl.format(et.t.HVS7nh, { helpdeskArticle: i ? r : s });
        return { message: (n && !i) || (!n && i) ? o : a, xboxURL: s, playstationURL: r };
    };
var ex =
    (((s = {})[(s.UNACCEPTED = 0)] = "UNACCEPTED"),
    (s[(s.ACCEPTED = 1)] = "ACCEPTED"),
    (s[(s.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (s[(s.COMPLETED = 3)] = "COMPLETED"),
    (s[(s.CLAIMED = 4)] = "CLAIMED"),
    s);
function ek(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        r = ev(e).percentComplete > 0;
    return i ? 4 : n ? 3 : r && t ? 2 : 1 * !!t;
}
function eU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, f.bG)([I.default], () => I.default.locale),
        { percentComplete: i } = ev(e),
        r = eR(e),
        s = null != r ? r.percentComplete : i,
        a = 100 * s,
        o = null == r || t ? (0, b.l9)(n, s, { roundingMode: "floor" }) : `${r?.progress}/${r?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eG(e, t) {
    var n;
    let [i, r] =
            ((n = e.id),
            [(0, f.bG)([G.A], () => G.A.selectedTaskPlatform(n)), a.useCallback((e) => (0, U.lx)(n, e), [n])]),
        s = a.useMemo(() => (0, z.UR)(e), [e]),
        o = s.includes(J.fO.DESKTOP),
        u = s.includes(J.fO.CONSOLE),
        d = ey(e),
        _ = eC(e),
        h = a.useMemo(
            () =>
                (0, l.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: c.n.PLAY_ON_DESKTOP }, () => J.fO.DESKTOP)
                    .with({ taskType: c.n.PLAY_ACTIVITY }, () => J.fO.DESKTOP)
                    .with({ taskType: c.n.WATCH_VIDEO }, () => J.fO.DESKTOP)
                    .with({ taskType: c.n.WATCH_VIDEO_ON_MOBILE }, () => J.fO.DESKTOP)
                    .with({ taskType: c.n.STREAM_ON_DESKTOP }, () => J.fO.DESKTOP)
                    .with({ taskType: c.n.PLAY_ON_XBOX }, () => J.fO.CONSOLE)
                    .with({ taskType: c.n.PLAY_ON_PLAYSTATION }, () => J.fO.CONSOLE)
                    .with({ taskType: c.n.ACHIEVEMENT_IN_GAME }, () => J.fO.DESKTOP)
                    .with({ taskType: c.n.ACHIEVEMENT_IN_ACTIVITY }, () => J.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        p = d ? J.fO.DESKTOP : _ ? J.fO.CONSOLE : null;
    return [
        a.useMemo(
            () =>
                (0, l.YW)({ lastPlatformProgress: h, currentProgressingPlatform: p, selectedPlatform: i })
                    .with({ currentProgressingPlatform: J.fO.CONSOLE }, () => M.X0.CONSOLE)
                    .with({ currentProgressingPlatform: J.fO.DESKTOP }, () => M.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: J.fO.CONSOLE }, () => M.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: J.fO.DESKTOP }, () => M.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: J.fO.CONSOLE,
                        },
                        () => M.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: J.fO.DESKTOP,
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
function eF(e) {
    let t = eR(e),
        n = ev(e),
        [i] = eG(e, n),
        r = eA(e),
        s = e.userStatus?.enrolledAt != null,
        a = e.userStatus?.completedAt != null,
        o = c.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        l = 0 === n.percentComplete,
        u = s && !a && !r && null == t && (o || (l && i === M.X0.DESKTOP)),
        d = (0, D.isWeb)() && u && !(0, z.W1)(e),
        _ = (0, D.isMac)() && n.taskType === c.n.STREAM_ON_DESKTOP && u,
        h = [];
    return _ && h.push(et.intl.string(et.t.MFGxFM)), d && h.push(et.intl.string(et.t.BV6xDm)), h;
}
function eV(e) {
    return (0, f.bG)([G.A], () => G.A.quests).get(e) ?? null;
}
function eB(e) {
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
function ej(e, t) {
    let n = (0, f.bG)([G.A], () => G.A.getQuest(e), [e]),
        i = (0, p.Ay)();
    return a.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, h.M)(i) ? x.NJ8.DARK : x.NJ8.LIGHT);
        return (0, w.tW)(n, w.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eH(e) {
    let t = (0, f.bG)([C.default], () => C.default.getCurrentUser()),
        n = (0, q.mq)(e, t),
        i = (0, q.k5)(e),
        r = (0, q.$5)(e),
        s = (0, q.Y7)(e),
        a = (0, q.JX)(e),
        o = (0, L.TW)(t, ee.PremiumTypes.TIER_2);
    if (null == i) return et.intl.formatToPlainString(et.t.l9uXL8, { decorationName: n });
    let l = et.intl.formatToPlainString(et.t.o97tNn, { rewardName: n }),
        u = et.intl.formatToPlainString(et.t.PkyRZo, { rewardName: n, expirationDate: r }),
        c = et.intl.formatToPlainString(et.t.ie4YK0, { rewardName: n, duration: i }),
        d = et.intl.formatToPlainString(et.t.yCpc0U, { duration: i, rewardName: n });
    return a
        ? s
            ? o
                ? l
                : c
            : o
              ? u
              : d
        : et.intl.formatToPlainString(et.t.tTlItm, { duration: i, decorationName: n });
}
function eY(e) {
    let t = (0, Z.TP)(e);
    return { launchInGameActivity: (0, E.A)({ applicationId: t }) };
}
let eW = () => (0, f.yK)([G.A], () => [...G.A.quests.values()]).some((e) => e.preview),
    eK = (e) => {
        let t = e?.userStatus != null && (0, P.gO)(e.userStatus, M.uF.ACTIVITY_PANEL),
            n = eA(e ?? null),
            i = e?.userStatus?.claimedAt != null,
            r = (0, f.bG)([G.A], () => null != G.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !i && !r;
    },
    e$ = () => {
        let e = (0, f.yK)([G.A], () => [...G.A.quests.values()]);
        return a.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function ez() {
    let e = J.pc;
    return a.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, W.fx)(t), options: n };
            }),
        [e],
    );
}
function eq() {
    return a.useMemo(() => Object.keys(J.kL).map((e) => ({ label: (0, W.Js)(J.kL[e]), value: J.kL[e] })), []);
}
function eZ(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        r = a.useRef(null),
        s = a.useRef(null);
    a.useEffect(() => {
        N.default.track(x.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: r.current }),
            (r.current = t);
    }, [t]),
        a.useEffect(() => {
            let e = n.map((e) => e.filter);
            N.default.track(x.HAw.QUEST_HOME_FILTERS_CHANGED, {
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
function e0(e) {
    let t = T.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return a.useCallback(() => {
        if (n) return;
        let i = t ? _.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : _.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, A.hs)(i, { quest_id: e.id });
    }, [t, n, e.id]);
}
v.A.Millis.HOUR, v.A.Millis.MINUTE;
