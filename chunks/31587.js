"use strict";
n.d(t, {
    I3: () => eR,
    O9: () => eG,
    Vn: () => ev,
    Wj: () => eM,
    mL: () => ei,
    Yl: () => eT,
    Nb: () => eq,
    pT: () => e$,
    UH: () => e2,
    $P: () => eX,
    YW: () => eD,
    zW: () => eW,
    NC: () => eh,
    j$: () => eL,
    fc: () => eO,
    p5: () => eK,
    SD: () => eg,
    aC: () => eV,
    FA: () => eY,
    LS: () => eI,
    RR: () => eP,
    Iq: () => em,
    Qh: () => eE,
    t9: () => e0,
    nv: () => eQ,
    XD: () => eZ,
    ZP: () => eA,
    UX: () => ex,
    mn: () => e_,
    C5: () => eB,
    sb: () => ez,
    lg: () => e1,
    Qo: () => eF,
    In: () => ek,
    H6: () => eH,
    a5: () => ej,
    F3: () => eU,
    L1: () => ep,
    oH: () => eb,
    do: () => eN,
    S5: () => eS,
    Du: () => ew,
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
    $ = n(901406),
    q = n(801365),
    Z = n(792620),
    X = n(814793),
    Q = n(753386),
    J = n(646917),
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
function er(e, t, n) {
    let i = e.id === ee.aJ,
        r = t.id === ee.aJ,
        s = i && e.userStatus?.completedAt == null;
    if (s !== (r && t.userStatus?.completedAt == null)) return s ? -1 : 1;
    let a = !(0, U.Ic)(e),
        o = e.userStatus?.claimedAt != null,
        l = t.userStatus?.claimedAt != null,
        u = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        d = 20 * O.A.Millis.MINUTE,
        _ = eJ(e, d),
        f = eJ(t, d);
    if (a) {
        let { questHomeHero: i } = n,
            r = null != i && (0, X.I0)(i, e.id),
            s = null != i && (0, X.I0)(i, t.id);
        if (r || s) {
            if (r && s) {
                let n = i?.questIds;
                if (null != n) return n.indexOf(e.id) - n.indexOf(t.id);
            }
            return r ? -1 : 1;
        }
        return _ !== f && (_ || f)
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
                : ef(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return o !== l ? (o ? -1 : 1) : u !== c ? (u ? -1 : 1) : ef(e.config.expiresAt, t.config.expiresAt, 0);
}
function es(e, t, n) {
    return ef(e.config.startsAt, t.config.startsAt, 0);
}
function ea(e, t, n) {
    let i = e.userStatus?.enrolledAt,
        r = t.userStatus?.enrolledAt;
    return null == i && null == r
        ? ef(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == r
          ? -1
          : null == i && null != r
            ? 1
            : ef(i, r, 0);
}
function eo(e, t, n) {
    return ef(e.config.expiresAt, t.config.expiresAt, 1);
}
function el(e, t) {
    switch (t) {
        case ee.Pc.VIDEO:
            return (0, Z.vv)(e);
        case ee.Pc.PLAY:
            return (0, Z.t)({ quest: e }) || (0, Z.fE)({ quest: e }) || (0, Z.vl)(e) || (0, Z.g5)(e) || (0, Z.Cr)(e);
        default:
            return !1;
    }
}
function eu(e, t) {
    switch (t) {
        case ee.BQ.VIRTUAL_CURRENCY:
            return (0, q.ks)(e.config);
        case ee.BQ.COLLECTIBLE:
            return (0, q.tU)(e.config);
        case ee.BQ.IN_GAME:
            return (0, q.HG)(e.config) || (0, q.r7)(e.config);
        default:
            return !1;
    }
}
let ec = {},
    ed = { questHomeHero: null };
function e_(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ed,
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
                                              return el;
                                          case "reward":
                                              return eu;
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
            })(r)),
            function (e, n) {
                let r = !(0, U.Ic)(e);
                return !(0, U.Ic)(n) !== r ? (r ? -1 : 1) : t(e, n, i);
            });
    return a.sort(l);
}
function ef(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
var eh = (((i = {}).ALL = "all"), (i.CLAIMED = "claimed"), (i.PREVIEW_TOOL = "preview_tool"), i),
    ep =
        (((r = {}).TAB = "tab"),
        (r.QUEST_ID = "quest_id"),
        (r.SORT = "sort"),
        (r.FILTER = "filter"),
        (r.AD_CREATIVE_IDS = "ad_creative_ids"),
        r);
function eE(e) {
    let t,
        n,
        i,
        r,
        s,
        o,
        l,
        u,
        c,
        d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        {
            quests: _,
            excludedQuests: f,
            isFetchingCurrentQuests: h,
            hasFetched: E,
        } = ei({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        m = new Map(_.map((e) => [e.id, e])),
        g =
            ((t = (0, p.bG)([V.A], () => V.A.getQuestHomeHero())),
            (n = a.useMemo(() => ({ questHomeHero: t }), [t])),
            (i = a.useRef([])),
            (r = a.useRef(d.sortMethod)),
            (s = a.useRef(d.filters)),
            (o = a.useRef(0)),
            (l = a.useRef(n)),
            a.useMemo(() => {
                if (0 === _.length) return [];
                if (
                    i.current.length > 0 &&
                    o.current === _.length &&
                    r.current === d.sortMethod &&
                    s.current === d.filters &&
                    l.current === n
                )
                    return i.current;
                let e = e_(_, d, n).map((e) => e.id);
                return (
                    (i.current = e),
                    (r.current = d.sortMethod),
                    (s.current = d.filters),
                    (o.current = _.length),
                    (l.current = n),
                    e
                );
            }, [_, d, n])),
        A =
            ((u = a.useMemo(
                () =>
                    _.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [_],
            )),
            (c = a.useRef([])),
            a.useMemo(() => {
                if (0 === u.length) return [];
                if (c.current.length > 0 && c.current.length === u.length) return c.current;
                let e = u
                    .sort((e, t) => {
                        let n = e.userStatus?.claimedAt == null;
                        return n !== (t.userStatus?.claimedAt == null)
                            ? n
                                ? -1
                                : 1
                            : ef(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return (c.current = e), e;
            }, [u])),
        I = [];
    for (let t of "all" === e ? g : A) {
        let e = m.get(t);
        null != e && I.push(e);
    }
    return { quests: I, excludedQuests: f, isFetchingCurrentQuests: h, hasFetched: E };
}
function em() {
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
function eg(e, t) {
    let n = eI(e),
        i = (0, q.ks)(e.config),
        r = (0, q.KK)(e.config),
        s = t !== J.M.INELIGIBLE;
    return !n && i && r && s;
}
function eA(e) {
    return (0, p.bG)([V.A], () => {
        let t = V.A.getQuest(e);
        if (null == t) return null;
        let n = t.config.rewardsConfig.rewards.find((e) => e.type === _.l.VIRTUAL_CURRENCY);
        if (n?.type !== _.l.VIRTUAL_CURRENCY) return null;
        let { premiumOrbQuantity: i, orbQuantity: r } = n;
        return null == i || 0 === r ? null : Math.round((i / r) * 100) / 100;
    }, [e]);
}
function eI(e) {
    return (0, p.bG)([V.A], () => null != e && V.A.isQuestExpired(e.id), [e]);
}
function eT(e, t, n) {
    let i = (0, p.bG)([N.A], () => N.A.getChannel(t?.channelId) ?? null),
        r = (0, p.bG)([V.A], () => null != V.A.questEnrollmentBlockedUntil, []),
        s = (0, p.bG)([C.default], () => C.default.getCurrentUser()?.id),
        a = (0, p.bG)([V.A], () => null != e && V.A.isQuestExpired(e.id), [e]);
    if (null == e || r || a || s === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, X.Ll)(t, i);
    return !o || !!l;
}
function eS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, p.bG)([T.default], () => T.default.locale);
    return a.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eN(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: r } = e,
        s = (0, W.go)();
    return a.useCallback(() => {
        t.id === ee.Fw
            ? window.open(b.A.getArticleURL(k.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, $.pu)(t, { content: n, ctaContent: i, impressionId: s, sourceQuestContent: r });
    }, [t, n, i, s, r]);
}
function ey(e) {
    return (0, p.bG)([V.A], () => V.A.isProgressingOnDesktop(e.id));
}
function eC(e) {
    return a.useMemo(() => (0, Z.YL)(e), [e]);
}
function ev(e) {
    let t,
        n = ey(e),
        i = eC(e),
        r =
            ((t = (0, p.bG)([V.A], () => V.A.getOptimisticProgress(e.id, c.n.WATCH_VIDEO))),
            a.useMemo(() => (0, Q.J$)(e), [e, t]));
    return n || i || r;
}
let eO = (e) => {
    let t = a.useCallback(() => (0, Z.Yh)(e), [e]),
        [n, i] = a.useState(t()),
        r = a.useCallback(() => i(t()), [t]),
        s = ev(e);
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
function eR(e) {
    return a.useMemo(() => (0, Z.JC)(e), [e]);
}
function eb(e) {
    let t = a.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, Z.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, A.A)(t);
}
function eD(e) {
    let t = (0, p.bG)([V.A], () => V.A.quests),
        n = eb(Array.from(t.values())),
        i = a.useMemo(() => {
            let n = (0, X.$e)(t, ee.zO);
            return (0, z.BM)(n, e);
        }, [e, t, n]);
    return eI(i) ? null : i;
}
function eL(e) {
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
function ew() {
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
let eM = (e) => {
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
    eP = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ew(),
            i = ev(t),
            r = 0 === n.length;
        return (0, Z.g5)(t) && r && !i;
    },
    ex = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ew(),
            n = e.length > 0,
            i = t.length > 0,
            r = b.A.getArticleURL(k.MVz.QUEST_HOW_TO_PLAYSTATION),
            s = b.A.getArticleURL(k.MVz.QUEST_HOW_TO_XBOX),
            a = en.intl.format(en.t.beN4DG, { psHelpdeskArticle: r, xboxHelpdeskArticle: s }),
            o = en.intl.format(en.t.HVS7nh, { helpdeskArticle: i ? r : s });
        return { message: (n && !i) || (!n && i) ? o : a, xboxURL: s, playstationURL: r };
    };
var eU =
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
        r = eO(e).percentComplete > 0;
    return i ? 4 : n ? 3 : r && t ? 2 : 1 * !!t;
}
function eG(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, p.bG)([T.default], () => T.default.locale),
        { percentComplete: i } = eO(e),
        r = eR(e),
        s = null != r ? r.percentComplete : i,
        a = 100 * s,
        o = null == r || t ? (0, L.l9)(n, s, { roundingMode: "floor" }) : `${r?.progress}/${r?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eF(e, t) {
    var n;
    let [i, r] =
            ((n = e.id),
            [(0, p.bG)([V.A], () => V.A.selectedTaskPlatform(n)), a.useCallback((e) => (0, F.lx)(n, e), [n])]),
        s = a.useMemo(() => (0, $.UR)(e), [e]),
        o = s.includes(ee.fO.DESKTOP),
        u = s.includes(ee.fO.CONSOLE),
        d = ey(e),
        _ = eC(e),
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
function eV(e) {
    let t = eR(e),
        n = eO(e),
        [i] = eF(e, n),
        r = eI(e),
        s = e.userStatus?.enrolledAt != null,
        a = e.userStatus?.completedAt != null,
        o = c.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        l = 0 === n.percentComplete,
        u = s && !a && !r && null == t && (o || (l && i === x.X0.DESKTOP)),
        d = (0, w.isWeb)() && u && !(0, $.W1)(e),
        _ = (0, w.isMac)() && n.taskType === c.n.STREAM_ON_DESKTOP && u,
        f = [];
    return _ && f.push(en.intl.string(en.t.MFGxFM)), d && f.push(en.intl.string(en.t.BV6xDm)), f;
}
function eB(e) {
    return (0, p.bG)([V.A], () => V.A.quests).get(e) ?? null;
}
function eH(e) {
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
function ej(e, t) {
    let n = (0, p.bG)([V.A], () => V.A.getQuest(e), [e]),
        i = (0, E.Ay)();
    return a.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, h.M)(i) ? k.NJ8.DARK : k.NJ8.LIGHT);
        return (0, P.tW)(n, P.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eY(e) {
    let t = (0, q.mq)(e),
        n = (0, q.k5)(e),
        i = (0, q.$5)(e),
        r = (0, q.Y7)(e),
        s = (0, q.JX)(e),
        a = (0, p.bG)([C.default], () => C.default.getCurrentUser()),
        o = (0, M.TW)(a, et.PremiumTypes.TIER_2);
    if (null == n) return en.intl.formatToPlainString(en.t.l9uXL8, { decorationName: t });
    let l = en.intl.formatToPlainString(en.t.o97tNn, { rewardName: t }),
        u = en.intl.formatToPlainString(en.t.PkyRZo, { rewardName: t, expirationDate: i }),
        c = en.intl.formatToPlainString(en.t.ie4YK0, { rewardName: t, duration: n }),
        d = en.intl.formatToPlainString(en.t.yCpc0U, { duration: n, rewardName: t });
    return s
        ? r
            ? o
                ? l
                : c
            : o
              ? u
              : d
        : en.intl.formatToPlainString(en.t.tTlItm, { duration: n, decorationName: t });
}
function eW(e) {
    let t = (0, Z.TP)(e);
    return { launchInGameActivity: (0, m.A)({ applicationId: t }) };
}
let eK = () => (0, p.yK)([V.A], () => [...V.A.quests.values()]).some((e) => e.preview),
    ez = (e) => {
        let t = e?.userStatus != null && (0, U.gO)(e.userStatus, x.uF.ACTIVITY_PANEL),
            n = eI(e ?? null),
            i = e?.userStatus?.claimedAt != null,
            r = (0, p.bG)([V.A], () => null != V.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !i && !r;
    },
    e$ = () => {
        let e = (0, p.yK)([V.A], () => [...V.A.quests.values()]);
        return a.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eq() {
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
function eZ() {
    return a.useMemo(() => Object.keys(ee.kL).map((e) => ({ label: (0, K.Js)(ee.kL[e]), value: ee.kL[e] })), []);
}
function eX(e) {
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
let eQ = (e) => a.useMemo(() => C.default.getCurrentUser()?.isStaff() === !0, []) || e.preview,
    eJ = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e0(e) {
    let t = (0, p.bG)([V.A], () => V.A.quests);
    return a.useMemo(() => {
        let n = (e.questIds ?? [])
            .map((e) => t.get(e))
            .filter(R.Vq)
            .filter((e) => !(0, U.Ic)(e));
        return n.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: n, isShelfEnabled: !0 };
    }, [t, e.questIds]);
}
function e1(e) {
    let { enabled: t } = B.rI.useConfig({ location: "useFetchQuestHomeHero" }),
        [n, i] = a.useState(!0),
        [r, s] = a.useState(!0),
        [o, l] = a.useState(!1),
        [u, c] = a.useState(!1),
        { isFetching: d, questHomeHero: _ } = (0, p.cf)([V.A], () => ({
            isFetching: V.A.isFetchingQuestHomeHero(),
            questHomeHero: V.A.getQuestHomeHero(),
        }));
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
