"use strict";
n.d(t, {
    Du: () => eD,
    O9: () => eU,
    I3: () => ev,
    Vn: () => ey,
    Wj: () => eL,
    mL: () => en,
    Yl: () => eA,
    Nb: () => ez,
    pT: () => eK,
    UH: () => e1,
    $P: () => eq,
    YW: () => eR,
    zW: () => ej,
    NC: () => e_,
    j$: () => eb,
    fc: () => eC,
    p5: () => eY,
    SD: () => eE,
    aC: () => eG,
    FA: () => eH,
    LS: () => eg,
    RR: () => ew,
    Ns: () => eZ,
    Iq: () => ep,
    Qh: () => eh,
    t9: () => eQ,
    XD: () => e$,
    ZP: () => em,
    UX: () => eM,
    mn: () => ec,
    C5: () => eF,
    sb: () => eW,
    lg: () => e0,
    Qo: () => ek,
    In: () => ex,
    H6: () => eV,
    a5: () => eB,
    F3: () => eP,
    L1: () => ef,
    do: () => eT,
    oH: () => eO,
    S5: () => eI,
    T2: () => eJ,
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
var P = n(551875);
n(107195), n(881615), n(234396), n(265704);
var x = n(507107),
    U = n(710969),
    k = n(652215),
    G = n(178540),
    F = n(340124),
    V = n(859703),
    B = n(302654);
(0, n(945810).mj)({
    name: "2026-03-quest-home-bounties",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var H = n(971276),
    j = n(561844);
n(590202);
var Y = n(971649),
    W = n(651892),
    K = n(639214),
    z = n(576761),
    $ = n(901406),
    q = n(801365),
    Z = n(792620),
    X = n(814793),
    Q = n(753386),
    J = n(190107),
    ee = n(788868),
    et = n(375708);
function en() {
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
        l = (0, H.s)();
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
                let { enableNewRequestBehavior: t } = B.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, F.r8)(x.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, s, o, e.callerSource]),
        { quests: i, excludedQuests: r, isFetchingCurrentQuests: s, hasFetched: t }
    );
}
function ei(e, t) {
    let n = e.id === J.aJ,
        i = t.id === J.aJ,
        r = n && e.userStatus?.completedAt == null;
    if (r !== (i && t.userStatus?.completedAt == null)) return r ? -1 : 1;
    let s = !(0, U.Ic)(e),
        a = e.userStatus?.claimedAt != null,
        o = t.userStatus?.claimedAt != null,
        l = e.userStatus?.enrolledAt != null,
        u = t.userStatus?.enrolledAt != null,
        c = 20 * O.A.Millis.MINUTE,
        d = eX(e, c),
        _ = eX(t, c);
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
                : ed(e.config.expiresAt, t.config.expiresAt, 1)
        : a !== o
          ? a
              ? -1
              : 1
          : l !== u
            ? l
                ? -1
                : 1
            : ed(e.config.expiresAt, t.config.expiresAt, 0);
}
function er(e, t) {
    return ed(e.config.startsAt, t.config.startsAt, 0);
}
function es(e, t) {
    let n = e.userStatus?.enrolledAt,
        i = t.userStatus?.enrolledAt;
    return null == n && null == i
        ? ed(e.config.expiresAt, t.config.expiresAt, 0)
        : null != n && null == i
          ? -1
          : null == n && null != i
            ? 1
            : ed(n, i, 0);
}
function ea(e, t) {
    return ed(e.config.expiresAt, t.config.expiresAt, 1);
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
let eu = {};
function ec(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eu,
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
                                              return eo;
                                          case "reward":
                                              return el;
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
            })(i)),
            function (e, n) {
                let i = !(0, U.Ic)(e);
                return !(0, U.Ic)(n) !== i ? (i ? -1 : 1) : t(e, n);
            });
    return s.sort(a);
}
function ed(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
var e_ = (((i = {}).ALL = "all"), (i.CLAIMED = "claimed"), (i.PREVIEW_TOOL = "preview_tool"), i),
    ef =
        (((r = {}).TAB = "tab"),
        (r.QUEST_ID = "quest_id"),
        (r.SORT = "sort"),
        (r.FILTER = "filter"),
        (r.AD_CREATIVE_IDS = "ad_creative_ids"),
        r);
function eh(e) {
    let t,
        n,
        i,
        r,
        s,
        o,
        l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eu,
        {
            quests: u,
            excludedQuests: c,
            isFetchingCurrentQuests: d,
            hasFetched: _,
        } = en({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
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
                let e = ec(u, l).map((e) => e.id);
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
                            : ed(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
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
function ep() {
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
function eE(e, t) {
    let n = eg(e),
        i = (0, q.ks)(e.config),
        r = (0, q.KK)(e.config),
        s = t !== z.MA.INELIGIBLE;
    return !n && i && r && s;
}
function em(e) {
    return (0, p.bG)([V.A], () => {
        let t = V.A.getQuest(e);
        if (null == t) return null;
        let n = t.config.rewardsConfig.rewards.find((e) => e.type === _.l.VIRTUAL_CURRENCY);
        if (n?.type !== _.l.VIRTUAL_CURRENCY) return null;
        let { premiumOrbQuantity: i, orbQuantity: r } = n;
        return null == i || 0 === r ? null : Math.round((i / r) * 100) / 100;
    }, [e]);
}
function eg(e) {
    return (0, p.bG)([V.A], () => null != e && V.A.isQuestExpired(e.id), [e]);
}
function eA(e, t, n) {
    let i = (0, p.bG)([N.A], () => N.A.getChannel(t?.channelId) ?? null),
        r = (0, p.bG)([V.A], () => null != V.A.questEnrollmentBlockedUntil, []),
        s = (0, p.bG)([C.default], () => C.default.getCurrentUser()?.id),
        a = (0, p.bG)([V.A], () => null != e && V.A.isQuestExpired(e.id), [e]);
    if (null == e || r || a || s === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, X.Ll)(t, i);
    return !o || !!l;
}
function eI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, p.bG)([T.default], () => T.default.locale);
    return a.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eT(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: r } = e,
        s = (0, Y.go)();
    return a.useCallback(() => {
        t.id === J.Fw
            ? window.open(b.A.getArticleURL(k.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, $.pu)(t, { content: n, ctaContent: i, impressionId: s, sourceQuestContent: r });
    }, [t, n, i, s, r]);
}
function eS(e) {
    return (0, p.bG)([V.A], () => V.A.isProgressingOnDesktop(e.id));
}
function eN(e) {
    return a.useMemo(() => (0, Z.YL)(e), [e]);
}
function ey(e) {
    let t,
        n = eS(e),
        i = eN(e),
        r =
            ((t = (0, p.bG)([V.A], () => V.A.getOptimisticProgress(e.id, c.n.WATCH_VIDEO))),
            a.useMemo(() => (0, Q.J$)(e), [e, t]));
    return n || i || r;
}
let eC = (e) => {
    let t = a.useCallback(() => (0, Z.Yh)(e), [e]),
        [n, i] = a.useState(t()),
        r = a.useCallback(() => i(t()), [t]),
        s = ey(e);
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
function ev(e) {
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
    return (0, A.A)(t);
}
function eR(e) {
    let t = (0, p.bG)([V.A], () => V.A.quests),
        n = eO(Array.from(t.values())),
        i = a.useMemo(() => {
            let n = (0, X.$e)(t, J.zO);
            return (0, K.BM)(n, e);
        }, [e, t, n]);
    return eg(i) ? null : i;
}
function eb(e) {
    return a.useMemo(
        () => ({
            handleComplete: () => (0, F.Yb)(e),
            handleProgress: (t) => (0, F.Yb)(e, t),
            handleResetStatusClick: () => (0, F.UZ)(e),
            handleResetDismissibilityClick: () => (0, F.Gt)(e),
            handleOverridePreviewClick: (t) => (0, F.L4)(t, e),
            handleResetHasBeenSeenClick: () => (0, F.qV)(u.p.QUEST, [e]),
        }),
        [e],
    );
}
function eD() {
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
let eL = (e) => {
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
    ew = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eD(),
            i = ey(t),
            r = 0 === n.length;
        return (0, Z.g5)(t) && r && !i;
    },
    eM = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eD(),
            n = e.length > 0,
            i = t.length > 0,
            r = b.A.getArticleURL(k.MVz.QUEST_HOW_TO_PLAYSTATION),
            s = b.A.getArticleURL(k.MVz.QUEST_HOW_TO_XBOX),
            a = et.intl.format(et.t.beN4DG, { psHelpdeskArticle: r, xboxHelpdeskArticle: s }),
            o = et.intl.format(et.t.HVS7nh, { helpdeskArticle: i ? r : s });
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
        r = eC(e).percentComplete > 0;
    return i ? 4 : n ? 3 : r && t ? 2 : 1 * !!t;
}
function eU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, p.bG)([T.default], () => T.default.locale),
        { percentComplete: i } = eC(e),
        r = ev(e),
        s = null != r ? r.percentComplete : i,
        a = 100 * s,
        o = null == r || t ? (0, L.l9)(n, s, { roundingMode: "floor" }) : `${r?.progress}/${r?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function ek(e, t) {
    var n;
    let [i, r] =
            ((n = e.id),
            [(0, p.bG)([V.A], () => V.A.selectedTaskPlatform(n)), a.useCallback((e) => (0, F.lx)(n, e), [n])]),
        s = a.useMemo(() => (0, $.UR)(e), [e]),
        o = s.includes(J.fO.DESKTOP),
        u = s.includes(J.fO.CONSOLE),
        d = eS(e),
        _ = eN(e),
        f = a.useMemo(
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
        h = d ? J.fO.DESKTOP : _ ? J.fO.CONSOLE : null;
    return [
        a.useMemo(
            () =>
                (0, l.YW)({ lastPlatformProgress: f, currentProgressingPlatform: h, selectedPlatform: i })
                    .with({ currentProgressingPlatform: J.fO.CONSOLE }, () => x.X0.CONSOLE)
                    .with({ currentProgressingPlatform: J.fO.DESKTOP }, () => x.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: J.fO.CONSOLE }, () => x.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: J.fO.DESKTOP }, () => x.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: J.fO.CONSOLE,
                        },
                        () => x.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: J.fO.DESKTOP,
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
function eG(e) {
    let t = ev(e),
        n = eC(e),
        [i] = ek(e, n),
        r = eg(e),
        s = e.userStatus?.enrolledAt != null,
        a = e.userStatus?.completedAt != null,
        o = c.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        l = 0 === n.percentComplete,
        u = s && !a && !r && null == t && (o || (l && i === x.X0.DESKTOP)),
        d = (0, w.isWeb)() && u && !(0, $.W1)(e),
        _ = (0, w.isMac)() && n.taskType === c.n.STREAM_ON_DESKTOP && u,
        f = [];
    return _ && f.push(et.intl.string(et.t.MFGxFM)), d && f.push(et.intl.string(et.t.BV6xDm)), f;
}
function eF(e) {
    return (0, p.bG)([V.A], () => V.A.quests).get(e) ?? null;
}
function eV(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: r } = e,
        s = a.useRef(null);
    a.useEffect(() => {
        null != r &&
            s.current !== t &&
            ((0, j.Mm)({ mode: t, prevMode: s.current, questContent: n, questId: r, sourceQuestContent: i }),
            (s.current = t));
    }, [r, n, t, i]),
        a.useEffect(() => {
            if (null != r)
                return () => {
                    (0, j.Mm)({ mode: null, prevMode: s.current, questContent: n, questId: r, sourceQuestContent: i });
                };
        }, [r, n, i]);
}
function eB(e, t) {
    let n = (0, p.bG)([V.A], () => V.A.getQuest(e), [e]),
        i = (0, E.Ay)();
    return a.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, h.M)(i) ? k.NJ8.DARK : k.NJ8.LIGHT);
        return (0, P.tW)(n, P.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eH(e) {
    let t = (0, p.bG)([C.default], () => C.default.getCurrentUser()),
        n = (0, q.mq)(e, t),
        i = (0, q.k5)(e),
        r = (0, q.$5)(e),
        s = (0, q.Y7)(e),
        a = (0, q.JX)(e),
        o = (0, M.TW)(t, ee.PremiumTypes.TIER_2);
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
function ej(e) {
    let t = (0, Z.TP)(e);
    return { launchInGameActivity: (0, m.A)({ applicationId: t }) };
}
let eY = () => (0, p.yK)([V.A], () => [...V.A.quests.values()]).some((e) => e.preview),
    eW = (e) => {
        let t = e?.userStatus != null && (0, U.gO)(e.userStatus, x.uF.ACTIVITY_PANEL),
            n = eg(e ?? null),
            i = e?.userStatus?.claimedAt != null,
            r = (0, p.bG)([V.A], () => null != V.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !i && !r;
    },
    eK = () => {
        let e = (0, p.yK)([V.A], () => [...V.A.quests.values()]);
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
function e$() {
    return a.useMemo(() => Object.keys(J.kL).map((e) => ({ label: (0, W.Js)(J.kL[e]), value: J.kL[e] })), []);
}
function eq(e) {
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
let eZ = (e) => a.useMemo(() => C.default.getCurrentUser()?.isStaff() === !0, []) || e.preview,
    eX = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function eQ(e) {
    let t = (0, p.bG)([V.A], () => V.A.quests);
    return a.useMemo(() => {
        let n = (e.questIds ?? [])
            .map((e) => t.get(e))
            .filter(R.Vq)
            .filter((e) => !(0, U.Ic)(e));
        return n.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: n, isShelfEnabled: !0 };
    }, [t, e.questIds]);
}
function eJ() {
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
function e0(e) {
    let [t, n] = a.useState(!0),
        [i, r] = a.useState(!0),
        [s, o] = a.useState(!1),
        [l, u] = a.useState(!1),
        c = (0, p.bG)([V.A], () => V.A.isFetchingQuestHomeHero()),
        d = eJ();
    return (
        a.useEffect(() => {
            !(async function () {
                try {
                    null != e ? await (0, F.IV)(e) : await (0, F.Yf)();
                } catch (e) {
                    r(!1), o(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [e]),
        a.useEffect(() => {
            !(async function () {
                try {
                    if (null == d) return;
                    let e = [d.heroImage, d.sponsorImage].filter((e) => null != e);
                    await Promise.all(e.map(D.NN));
                } catch (e) {
                    u(!0);
                } finally {
                    r(!1);
                }
            })();
        }, [d]),
        { questHomeHero: s || l ? null : d, isLoading: t || c || i }
    );
}
function e1(e) {
    let t = S.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return a.useCallback(() => {
        if (n) return;
        let i = t ? f.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : f.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, I.hs)(i, { quest_id: e.id });
    }, [t, n, e.id]);
}
