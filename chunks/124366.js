"use strict";
n.d(t, {
    I3: () => eL,
    O9: () => eB,
    Vn: () => eb,
    Wj: () => eU,
    mL: () => es,
    Yl: () => ey,
    Nb: () => eQ,
    pT: () => eX,
    UH: () => e4,
    $P: () => e0,
    YW: () => eM,
    zW: () => e$,
    NC: () => eE,
    Oq: () => eI,
    j$: () => eP,
    fc: () => eD,
    SD: () => eT,
    aC: () => ej,
    FA: () => ez,
    LS: () => eN,
    p5: () => eq,
    RR: () => ek,
    Iq: () => eA,
    Qh: () => eg,
    t9: () => e3,
    nv: () => e1,
    XD: () => eJ,
    ZP: () => eS,
    UX: () => eG,
    mn: () => eh,
    C5: () => eY,
    sb: () => eZ,
    lg: () => e6,
    Qo: () => eH,
    In: () => eV,
    H6: () => eW,
    a5: () => eK,
    F3: () => eF,
    L1: () => em,
    do: () => ev,
    oH: () => ew,
    S5: () => eC,
    Du: () => ex,
}),
    n(321073),
    n(801541);
var i,
    r,
    s,
    a,
    o = n(64700),
    l = n(735438),
    u = n(889137),
    c = n(323889),
    d = n(412703),
    _ = n(114046),
    f = n(440703);
n(731355);
var h = n(517846),
    p = n(462887),
    E = n(17928),
    m = n(736653),
    g = n(787389),
    A = n(183636),
    I = n(429913);
n(674658);
var T = n(541690),
    S = n(27620),
    N = n(773669),
    y = n(885386),
    C = n(734057),
    v = n(30370),
    O = n(287809),
    R = n(174459),
    b = n(927813),
    D = n(403362),
    L = n(975571),
    w = n(515718),
    M = n(252424),
    P = n(723702),
    x = n(927578);
n(323874), n(14289), n(35956), n(636537), n(228366), n(181658);
var U = n(859387);
n(107195), n(881615), n(234396), n(265704);
var k = n(507107),
    G = n(710969),
    F = n(652215),
    V = n(178540),
    B = n(340124),
    H = n(859703),
    j = n(192444),
    Y = n(302654);
(0, n(945810).mj)({
    name: "2026-03-quest-home-bounties",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var W = n(971276),
    K = n(561844);
n(590202);
var z = n(971649),
    $ = n(651892),
    q = n(639214),
    Z = n(901406),
    X = n(801365),
    Q = n(792620),
    J = n(814793),
    ee = n(753386);
n(441574), n(349871);
var et = (((i = {}).UPSELL = "UPSELL"), (i.NITRO = "NITRO"), (i.CREPE = "CREPE"), (i.INELIGIBLE = "INELIGIBLE"), i),
    en = n(190107),
    ei = n(788868),
    er = n(375708);
function es() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = o.useState(!1),
        i = (0, E.yK)([H.A], () => [...H.A.quests.values()]),
        r = (0, E.yK)([H.A], () => [...H.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: s, lastFetchedCurrentQuests: a } = (0, E.cf)([H.A], () => ({
            isFetchingCurrentQuests: H.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: H.A.lastFetchedCurrentQuests,
        })),
        l = (0, W.s)();
    return (
        o.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === a)) &&
                l &&
                !t &&
                !s
            ) {
                if ((n(!0), (0, B.N1)(), (0, P.isMac)() && "focused" !== A.A.getState())) return;
                let { enableNewRequestBehavior: t } = Y.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, B.r8)(k.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, s, a, e.callerSource]),
        { quests: i, excludedQuests: r, isFetchingCurrentQuests: s, hasFetched: t }
    );
}
function ea(e, t, n) {
    let i = e.id === en.aJ,
        r = t.id === en.aJ,
        s = i && e.userStatus?.completedAt == null;
    if (s !== (r && t.userStatus?.completedAt == null)) return s ? -1 : 1;
    let a = !(0, G.Ic)(e),
        o = e.userStatus?.claimedAt != null,
        l = t.userStatus?.claimedAt != null,
        u = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        d = 20 * b.A.Millis.MINUTE,
        _ = e2(e, d),
        f = e2(t, d);
    if (a) {
        let { questHomeHero: i } = n,
            r = null != i && (0, J.I0)(i, e.id),
            s = null != i && (0, J.I0)(i, t.id);
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
                : ep(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return o !== l ? (o ? -1 : 1) : u !== c ? (u ? -1 : 1) : ep(e.config.expiresAt, t.config.expiresAt, 0);
}
function eo(e, t, n) {
    return ep(e.config.startsAt, t.config.startsAt, 0);
}
function el(e, t, n) {
    let i = e.userStatus?.enrolledAt,
        r = t.userStatus?.enrolledAt;
    return null == i && null == r
        ? ep(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == r
          ? -1
          : null == i && null != r
            ? 1
            : ep(i, r, 0);
}
function eu(e, t, n) {
    return ep(e.config.expiresAt, t.config.expiresAt, 1);
}
function ec(e, t) {
    switch (t) {
        case en.Pc.VIDEO:
            return (0, Q.vv)(e);
        case en.Pc.PLAY:
            return (0, Q.t)({ quest: e }) || (0, Q.fE)({ quest: e }) || (0, Q.vl)(e) || (0, Q.g5)(e) || (0, Q.Cr)(e);
        default:
            return !1;
    }
}
function ed(e, t) {
    switch (t) {
        case en.BQ.VIRTUAL_CURRENCY:
            return (0, X.ks)(e.config);
        case en.BQ.COLLECTIBLE:
            return (0, X.tU)(e.config);
        case en.BQ.IN_GAME:
            return (0, X.HG)(e.config) || (0, X.r7)(e.config);
        default:
            return !1;
    }
}
let e_ = {},
    ef = { questHomeHero: null };
function eh(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ef,
        { sortMethod: r, filters: s } = n,
        a =
            null == s || 0 === s.length
                ? e
                : (function (e, t) {
                      if (0 === t.length) return e;
                      let n = (0, l.groupBy)(t, "group");
                      return e.filter((e) =>
                          Object.entries(n).every((t) => {
                              let n,
                                  [i, r] = t;
                              return (
                                  (n = (function (e) {
                                      switch (e) {
                                          case "task":
                                              return ec;
                                          case "reward":
                                              return ed;
                                      }
                                  })(i)),
                                  0 === r.length || r.some((t) => n(e, t.filter))
                              );
                          }),
                      );
                  })(e, s),
        o =
            ((t = (function (e) {
                switch (e) {
                    case en.kL.MOST_RECENT:
                        return eo;
                    case en.kL.RECENTLY_ENROLLED:
                        return el;
                    case en.kL.EXPIRING_SOON:
                        return eu;
                    case en.kL.SUGGESTED:
                    default:
                        return ea;
                }
            })(r)),
            function (e, n) {
                let r = !(0, G.Ic)(e);
                return !(0, G.Ic)(n) !== r ? (r ? -1 : 1) : t(e, n, i);
            });
    return a.sort(o);
}
function ep(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
var eE = (((r = {}).ALL = "all"), (r.CLAIMED = "claimed"), (r.PREVIEW_TOOL = "preview_tool"), r),
    em =
        (((s = {}).TAB = "tab"),
        (s.QUEST_ID = "quest_id"),
        (s.SORT = "sort"),
        (s.FILTER = "filter"),
        (s.AD_CREATIVE_IDS = "ad_creative_ids"),
        s);
function eg(e) {
    let t,
        n,
        i,
        r,
        s,
        a,
        l,
        u,
        c,
        d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_,
        {
            quests: _,
            excludedQuests: f,
            isFetchingCurrentQuests: h,
            hasFetched: p,
        } = es({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        m = new Map(_.map((e) => [e.id, e])),
        g =
            ((t = (0, E.bG)([H.A], () => H.A.getQuestHomeHero())),
            (n = o.useMemo(() => ({ questHomeHero: t }), [t])),
            (i = o.useRef([])),
            (r = o.useRef(d.sortMethod)),
            (s = o.useRef(d.filters)),
            (a = o.useRef(0)),
            (l = o.useRef(n)),
            o.useMemo(() => {
                if (0 === _.length) return [];
                if (
                    i.current.length > 0 &&
                    a.current === _.length &&
                    r.current === d.sortMethod &&
                    s.current === d.filters &&
                    l.current === n
                )
                    return i.current;
                let e = eh(_, d, n).map((e) => e.id);
                return (
                    (i.current = e),
                    (r.current = d.sortMethod),
                    (s.current = d.filters),
                    (a.current = _.length),
                    (l.current = n),
                    e
                );
            }, [_, d, n])),
        A =
            ((u = o.useMemo(
                () =>
                    _.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [_],
            )),
            (c = o.useRef([])),
            o.useMemo(() => {
                if (0 === u.length) return [];
                if (c.current.length > 0 && c.current.length === u.length) return c.current;
                let e = u
                    .sort((e, t) => {
                        let n = e.userStatus?.claimedAt == null;
                        return n !== (t.userStatus?.claimedAt == null)
                            ? n
                                ? -1
                                : 1
                            : ep(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return (c.current = e), e;
            }, [u])),
        I = [];
    for (let t of "all" === e ? g : A) {
        let e = m.get(t);
        null != e && I.push(e);
    }
    return { quests: I, excludedQuests: f, isFetchingCurrentQuests: h, hasFetched: p };
}
function eA() {
    let e = o.useRef(!1),
        t = (0, E.yK)([H.A], () => Array.from(H.A.claimedQuests.values())),
        n = (0, E.bG)([H.A], () => H.A.isFetchingClaimedQuests);
    return (
        o.useEffect(() => {
            n || e.current || ((e.current = !0), (0, B.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eI() {
    return (0, E.bG)([O.default], () => x.Ay.canUseQuestOrbMultiplier(O.default.getCurrentUser()));
}
function eT(e, t) {
    let n = eN(e);
    return (0, E.bG)([O.default], () => {
        let i = (0, X.ks)(e.config),
            r = (0, X.KK)(e.config),
            s = O.default.getCurrentUser(),
            a =
                !s?.isFractionalPremiumWithNoStandardSub() &&
                (!(0, x.YE)(s, ei.PremiumTypes.TIER_2) || (0, T.RM)(T.G5, s));
        return null != t && (a = t !== et.INELIGIBLE), !n && i && r && a;
    }, [n, e.config, t]);
}
function eS(e) {
    return (0, E.bG)([H.A], () => {
        let t = H.A.getQuest(e);
        if (null == t) return null;
        let n = t.config.rewardsConfig.rewards.find((e) => e.type === f.l.VIRTUAL_CURRENCY);
        if (n?.type !== f.l.VIRTUAL_CURRENCY) return null;
        let { premiumOrbQuantity: i, orbQuantity: r } = n;
        return null == i || 0 === r ? null : Math.round((i / r) * 100) / 100;
    }, [e]);
}
function eN(e) {
    return (0, E.bG)([H.A], () => null != e && H.A.isQuestExpired(e.id), [e]);
}
function ey(e, t, n) {
    let i = (0, E.bG)([C.A], () => C.A.getChannel(t?.channelId) ?? null),
        r = (0, E.bG)([H.A], () => null != H.A.questEnrollmentBlockedUntil, []),
        s = (0, E.bG)([O.default], () => O.default.getCurrentUser()?.id),
        a = (0, E.bG)([H.A], () => null != e && H.A.isQuestExpired(e.id), [e]);
    if (null == e || r || a || s === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, J.Ll)(t, i);
    return !o || !!l;
}
function eC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, E.bG)([N.default], () => N.default.locale);
    return o.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function ev(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: r } = e,
        s = (0, z.go)();
    return o.useCallback(() => {
        t.id === en.Fw
            ? window.open(L.A.getArticleURL(F.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, Z.pu)(t, { content: n, ctaContent: i, impressionId: s, sourceQuestContent: r });
    }, [t, n, i, s, r]);
}
function eO(e) {
    return (0, E.bG)([H.A], () => H.A.isProgressingOnDesktop(e.id));
}
function eR(e) {
    return o.useMemo(() => (0, Q.YL)(e), [e]);
}
function eb(e) {
    let t,
        n = eO(e),
        i = eR(e),
        r =
            ((t = (0, E.bG)([H.A], () => H.A.getOptimisticProgress(e.id, d.n.WATCH_VIDEO))),
            o.useMemo(() => (0, ee.J$)(e), [e, t]));
    return n || i || r;
}
let eD = (e) => {
    let t = o.useCallback(() => (0, Q.Yh)(e), [e]),
        [n, i] = o.useState(t()),
        r = o.useCallback(() => i(t()), [t]),
        s = eb(e);
    return (
        o.useEffect(() => {
            if (
                e.userStatus?.enrolledAt == null ||
                e.userStatus?.completedAt != null ||
                e.userStatus?.claimedAt != null ||
                !s
            )
                return void r();
            let t = window.setInterval(() => {
                r();
            }, +b.A.Millis.SECOND);
            return () => {
                clearInterval(t), r();
            };
        }, [e, s, r]),
        n
    );
};
function eL(e) {
    return o.useMemo(() => (0, Q.JC)(e), [e]);
}
function ew(e) {
    let t = o.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, Q.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, I.A)(t);
}
function eM(e) {
    let t = (0, E.bG)([H.A], () => H.A.quests),
        n = ew(Array.from(t.values())),
        i = o.useMemo(() => {
            let n = (0, J.$e)(t, en.zO);
            return (0, q.BM)(n, e);
        }, [e, t, n]);
    return eN(i) ? null : i;
}
function eP(e) {
    return o.useMemo(
        () => ({
            handleComplete: () => (0, B.Yb)(e),
            handleProgress: (t) => (0, B.Yb)(e, t),
            handleResetStatusClick: () => (0, B.UZ)(e),
            handleResetDismissibilityClick: () => (0, B.Gt)(e),
            handleOverrideDeliveryClick: () => (0, B.d6)(e),
            handleResetHasBeenSeenClick: () => (0, B.qV)(c.p.QUEST, [e]),
        }),
        [e],
    );
}
function ex() {
    let { fetching: e, accounts: t } = (0, E.cf)([v.A], () => ({
            fetching: v.A.isFetching(),
            accounts: v.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: r,
        } = o.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === F.fg2.XBOX),
                i = e.filter((e) => e.type === F.fg2.PLAYSTATION),
                r = n.concat(i);
            return { xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: r };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: r };
}
let eU = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: r } = e,
            [s, a] = o.useState([]),
            [l, u] = o.useState(!1),
            c = (0, E.bG)([v.A], () => v.A.getAccounts()),
            d = (0, V.O)((e) => e.clearErrorHintsByType);
        return (
            o.useEffect(() => {
                a((e) => e.filter((e) => e.type !== _._.EXPIRED_CREDENTIAL)), d(t, _._.EXPIRED_CREDENTIAL);
            }, [c, d, t]),
            {
                startConsoleQuest: o.useCallback(async () => {
                    if (l) return;
                    i?.(), u(!0);
                    let e = null;
                    try {
                        (e = await (0, B.vD)(t, n)), a(e.errorHints);
                    } finally {
                        u(!1), r?.(e?.errorHints ?? []);
                    }
                }, [l, i, r, n, t]),
                startingConsoleQuest: l,
                errorHints: s,
            }
        );
    },
    ek = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ex(),
            i = eb(t),
            r = 0 === n.length;
        return (0, Q.g5)(t) && r && !i;
    },
    eG = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ex(),
            n = e.length > 0,
            i = t.length > 0,
            r = L.A.getArticleURL(F.MVz.QUEST_HOW_TO_PLAYSTATION),
            s = L.A.getArticleURL(F.MVz.QUEST_HOW_TO_XBOX),
            a = er.intl.format(er.t.beN4DG, { psHelpdeskArticle: r, xboxHelpdeskArticle: s }),
            o = er.intl.format(er.t.HVS7nh, { helpdeskArticle: i ? r : s });
        return { message: (n && !i) || (!n && i) ? o : a, xboxURL: s, playstationURL: r };
    };
var eF =
    (((a = {})[(a.UNACCEPTED = 0)] = "UNACCEPTED"),
    (a[(a.ACCEPTED = 1)] = "ACCEPTED"),
    (a[(a.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (a[(a.COMPLETED = 3)] = "COMPLETED"),
    (a[(a.CLAIMED = 4)] = "CLAIMED"),
    a);
function eV(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        r = eD(e).percentComplete > 0;
    return i ? 4 : n ? 3 : r && t ? 2 : 1 * !!t;
}
function eB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, E.bG)([N.default], () => N.default.locale),
        { percentComplete: i } = eD(e),
        r = eL(e),
        s = null != r ? r.percentComplete : i,
        a = 100 * s,
        o = null == r || t ? (0, M.l9)(n, s, { roundingMode: "floor" }) : `${r?.progress}/${r?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eH(e, t) {
    var n;
    let [i, r] =
            ((n = e.id),
            [(0, E.bG)([H.A], () => H.A.selectedTaskPlatform(n)), o.useCallback((e) => (0, B.lx)(n, e), [n])]),
        s = o.useMemo(() => (0, Z.UR)(e), [e]),
        a = s.includes(en.fO.DESKTOP),
        l = s.includes(en.fO.CONSOLE),
        c = eO(e),
        _ = eR(e),
        f = o.useMemo(
            () =>
                (0, u.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: d.n.PLAY_ON_DESKTOP }, () => en.fO.DESKTOP)
                    .with({ taskType: d.n.PLAY_ACTIVITY }, () => en.fO.DESKTOP)
                    .with({ taskType: d.n.WATCH_VIDEO }, () => en.fO.DESKTOP)
                    .with({ taskType: d.n.WATCH_VIDEO_ON_MOBILE }, () => en.fO.DESKTOP)
                    .with({ taskType: d.n.STREAM_ON_DESKTOP }, () => en.fO.DESKTOP)
                    .with({ taskType: d.n.PLAY_ON_XBOX }, () => en.fO.CONSOLE)
                    .with({ taskType: d.n.PLAY_ON_PLAYSTATION }, () => en.fO.CONSOLE)
                    .with({ taskType: d.n.ACHIEVEMENT_IN_GAME }, () => en.fO.DESKTOP)
                    .with({ taskType: d.n.ACHIEVEMENT_IN_ACTIVITY }, () => en.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        h = c ? en.fO.DESKTOP : _ ? en.fO.CONSOLE : null;
    return [
        o.useMemo(
            () =>
                (0, u.YW)({ lastPlatformProgress: f, currentProgressingPlatform: h, selectedPlatform: i })
                    .with({ currentProgressingPlatform: en.fO.CONSOLE }, () => k.X0.CONSOLE)
                    .with({ currentProgressingPlatform: en.fO.DESKTOP }, () => k.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: en.fO.CONSOLE }, () => k.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: en.fO.DESKTOP }, () => k.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: en.fO.CONSOLE,
                        },
                        () => k.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: en.fO.DESKTOP,
                        },
                        () => k.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (l && a ? k.X0.SELECT : l ? k.X0.CONSOLE : k.X0.DESKTOP),
                    )
                    .exhaustive(),
            [l, a, f, h, i],
        ),
        s,
        r,
    ];
}
function ej(e) {
    let t = eL(e),
        n = eD(e),
        [i] = eH(e, n),
        r = eN(e),
        s = e.userStatus?.enrolledAt != null,
        a = e.userStatus?.completedAt != null,
        o = d.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        l = 0 === n.percentComplete,
        u = s && !a && !r && null == t && (o || (l && i === k.X0.DESKTOP)),
        c = (0, P.isWeb)() && u && !(0, Z.W1)(e),
        _ = (0, P.isMac)() && n.taskType === d.n.STREAM_ON_DESKTOP && u,
        f = [];
    return _ && f.push(er.intl.string(er.t.MFGxFM)), c && f.push(er.intl.string(er.t.BV6xDm)), f;
}
function eY(e) {
    return (0, E.bG)([H.A], () => H.A.quests).get(e) ?? null;
}
function eW(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: r } = e,
        s = o.useRef(null);
    o.useEffect(() => {
        null != r &&
            s.current !== t &&
            ((0, K.Mm)({ mode: t, prevMode: s.current, questContent: n, questId: r, sourceQuestContent: i }),
            (s.current = t));
    }, [r, n, t, i]),
        o.useEffect(() => {
            if (null != r)
                return () => {
                    (0, K.Mm)({ mode: null, prevMode: s.current, questContent: n, questId: r, sourceQuestContent: i });
                };
        }, [r, n, i]);
}
function eK(e, t) {
    let n = (0, E.bG)([H.A], () => H.A.getQuest(e), [e]),
        i = (0, m.Ay)();
    return o.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, p.M)(i) ? F.NJ8.DARK : F.NJ8.LIGHT);
        return (0, U.tW)(n, U.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function ez(e) {
    let t = (0, X.mq)(e),
        n = (0, X.k5)(e),
        i = (0, X.$5)(e),
        r = (0, X.Y7)(e),
        s = (0, X.JX)(e),
        a = (0, E.bG)([O.default], () => O.default.getCurrentUser()),
        o = (0, x.TW)(a, ei.PremiumTypes.TIER_2);
    if (null == n) return er.intl.formatToPlainString(er.t.l9uXL8, { decorationName: t });
    let l = er.intl.formatToPlainString(er.t.o97tNn, { rewardName: t }),
        u = er.intl.formatToPlainString(er.t.PkyRZo, { rewardName: t, expirationDate: i }),
        c = er.intl.formatToPlainString(er.t.ie4YK0, { rewardName: t, duration: n }),
        d = er.intl.formatToPlainString(er.t.yCpc0U, { duration: n, rewardName: t });
    return s
        ? r
            ? o
                ? l
                : c
            : o
              ? u
              : d
        : er.intl.formatToPlainString(er.t.tTlItm, { duration: n, decorationName: t });
}
function e$(e) {
    let t = (0, Q.TP)(e);
    return { launchInGameActivity: (0, g.A)({ applicationId: t }) };
}
let eq = () => (0, E.yK)([H.A], () => [...H.A.quests.values()]).some((e) => e.preview),
    eZ = (e) => {
        let t = e?.userStatus != null && (0, G.gO)(e.userStatus, k.uF.ACTIVITY_PANEL),
            n = eN(e ?? null),
            i = e?.userStatus?.claimedAt != null,
            r = (0, E.bG)([H.A], () => null != H.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !i && !r;
    },
    eX = () => {
        let e = (0, E.yK)([H.A], () => [...H.A.quests.values()]);
        return o.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eQ() {
    let e = en.pc;
    return o.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, $.fx)(t), options: n };
            }),
        [e],
    );
}
function eJ() {
    return o.useMemo(() => Object.keys(en.kL).map((e) => ({ label: (0, $.Js)(en.kL[e]), value: en.kL[e] })), []);
}
function e0(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        r = o.useRef(null),
        s = o.useRef(null);
    o.useEffect(() => {
        R.default.track(F.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: r.current }),
            (r.current = t);
    }, [t]),
        o.useEffect(() => {
            let e = n.map((e) => e.filter);
            R.default.track(F.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: s.current ?? [],
                num_quests_visible: i,
            }),
                (s.current = e);
        }, [n, i]);
}
let e1 = (e) => o.useMemo(() => O.default.getCurrentUser()?.isStaff() === !0, []) || e.preview,
    e2 = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e3(e) {
    let t = (0, E.bG)([H.A], () => H.A.quests);
    return o.useMemo(() => {
        let n = (e.questIds ?? [])
            .map((e) => t.get(e))
            .filter(D.Vq)
            .filter((e) => !(0, G.Ic)(e));
        return n.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: n, isShelfEnabled: !0 };
    }, [t, e.questIds]);
}
function e6(e) {
    let { enabled: t } = j.rI.useConfig({ location: "useFetchQuestHomeHero" }),
        [n, i] = o.useState(!0),
        [r, s] = o.useState(!0),
        [a, l] = o.useState(!1),
        [u, c] = o.useState(!1),
        { isFetching: d, questHomeHero: _ } = (0, E.cf)([H.A], () => ({
            isFetching: H.A.isFetchingQuestHomeHero(),
            questHomeHero: H.A.getQuestHomeHero(),
        }));
    return (
        o.useEffect(() => {
            !(async function () {
                try {
                    null != e ? await (0, B.IV)(e) : t ? await (0, B.Am)() : await (0, B.Yf)();
                } catch (e) {
                    s(!1), l(!0);
                } finally {
                    i(!1);
                }
            })();
        }, [e, t]),
        o.useEffect(() => {
            !(async function () {
                try {
                    if (null == _) return;
                    let e = [_.heroImage, _.sponsorImage].filter((e) => null != e);
                    await Promise.all(e.map(w.NN));
                } catch (e) {
                    c(!0);
                } finally {
                    s(!1);
                }
            })();
        }, [_]),
        { questHomeHero: a || u ? null : _, isLoading: n || d || r }
    );
}
function e4(e) {
    let t = y.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return o.useCallback(() => {
        if (n) return;
        let i = t ? h.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : h.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, S.hs)(i, { quest_id: e.id });
    }, [t, n, e.id]);
}
