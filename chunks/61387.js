(n.d(t, {
    F3: () => eF,
    L1: () => em,
    NC: () => eS,
    mn: () => eC,
    FA: () => ez,
    Iq: () => eg,
    Du: () => eq,
    a5: () => eJ,
    Qh: () => eO,
    oH: () => eD,
    Cv: () => e0,
    Hv: () => eL,
    Yl: () => eR,
    LS: () => ev,
    Vn: () => eM,
    zW: () => eZ,
    Wj: () => eH,
    do: () => eb,
    In: () => eB,
    C5: () => ej,
    UH: () => te,
    H6: () => e$,
    O9: () => eV,
    YW: () => eQ,
    S5: () => eP,
    Nb: () => e6,
    t9: () => e4,
    XD: () => e9,
    $P: () => e7,
    UX: () => eW,
    ZP: () => eN,
    j$: () => eG,
    fc: () => eU,
    aC: () => eY,
    mL: () => es,
    pT: () => e5,
    tZ: () => eX,
    SD: () => eh,
    p5: () => e1,
    Ns: () => e8,
    sb: () => e2,
    Qo: () => ex,
    I3: () => ek,
    RR: () => eK,
}),
    n(321073),
    n(801541));
var r,
    u,
    i,
    l = n(582128),
    o = n(435558),
    a = n(181370),
    s = n.n(a),
    c = n(889137),
    d = n(323889),
    f = n(412703),
    A = n(114046);
n(731355);
var E = n(517846),
    T = n(118751),
    _ = n(462887),
    I = n(855986),
    C = n(736653),
    p = n(787389),
    S = n(157695),
    m = n(183636),
    O = n(429913),
    g = n(855531),
    h = n(669700),
    N = n(773669),
    v = n(253932),
    L = n(734057),
    R = n(417869),
    P = n(287809),
    b = n(129230),
    w = n(927813),
    y = n(403362),
    M = n(975571),
    U = n(723702),
    k = n(448645);
(n(845890), n(265704));
var D = n(178540),
    Q = n(153229),
    G = n(122760),
    q = n(506988),
    H = n(914313),
    K = n(945810);
(0, K.mj)({
    name: "2026-09-quest-home-bounties-feature-gate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let W = (0, K.mj)({
        name: "2026-07-renewable-end-date-sort",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    F = 221552 == n.j ? W : null;
var B = n(760914),
    V = n(971276),
    X = n(561844);
n(590202);
var x = n(971649),
    Y = n(651892),
    j = n(710969),
    $ = n(977416),
    J = n(639214),
    z = n(576761),
    Z = n(574112),
    ee = n(417404),
    et = n(792620),
    en = n(814793),
    er = n(753386),
    eu = n(221596),
    ei = n(652215),
    el = n(682901),
    eo = n(792996);
let ea = 221552 == n.j ? -1 : null;
function es() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = l.useState(!1),
        r = (0, I.yK)([G.A], () => [...G.A.quests.values()]),
        u = (0, I.yK)([G.A], () => [...G.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: o } = (0, I.cf)([G.A], () => ({
            isFetchingCurrentQuests: G.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: G.A.lastFetchedCurrentQuests,
        })),
        a = (0, V.s)();
    return (
        l.useEffect(() => {
            let r;
            switch (e.fetchPolicy) {
                case "cache-only":
                    return;
                case "cache-or-network":
                    r = 0 === o;
                    break;
                case "cache-and-network":
                    r = !0;
                    break;
                default:
                    e.fetchPolicy;
                    return;
            }
            if (r && a && !t && !i && (n(!0), (0, Q.N1)(), (0, U.cX)() && "focused" !== m.A.getState())) return;
        }, [e.fetchPolicy, a, t, i, o, e.callerSource]),
        { quests: r, excludedQuests: u, isFetchingCurrentQuests: i, hasFetched: t }
    );
}
function ec(e, t, n, r) {
    let u = e.id === eu.aJ,
        i = t.id === eu.aJ,
        l = u && e.userStatus?.completedAt == null;
    if (l !== (i && t.userStatus?.completedAt == null)) return l ? ea : 1;
    let o = !(0, $.Ic)(e),
        a = e.userStatus?.claimedAt != null,
        s = t.userStatus?.claimedAt != null,
        c = e.userStatus?.enrolledAt != null,
        d = t.userStatus?.enrolledAt != null,
        f = 20 * w.A.Millis.MINUTE,
        A = e3(e, f),
        E = e3(t, f);
    if (o) {
        var T, _, I;
        let u,
            i,
            { questHomeHero: l, isQuestHomeHeroShelfEnabled: o } = n;
        if (null != l && !o) {
            let n = (0, en.I0)(l, e.id),
                r = (0, en.I0)(l, t.id);
            if (n || r) return n ? ea : 1;
        }
        return A !== E && (A || E)
            ? A
                ? 1
                : ea
            : a !== s
              ? a
                  ? 1
                  : ea
              : c !== d
                ? c
                    ? ea
                    : 1
                : ((T = e),
                  (_ = t),
                  (u = (I = r).get(T.id)),
                  (i = I.get(_.id)),
                  null != u && null != i
                      ? u !== i
                          ? u - i
                          : T.id !== _.id
                            ? T.id < _.id
                                ? ea
                                : 1
                            : 0
                      : null != u
                        ? ea
                        : null != i
                          ? 1
                          : ep(T.config.expiresAt, _.config.expiresAt, 1));
    }
    return a !== s ? (a ? ea : 1) : c !== d ? (c ? ea : 1) : ep(e.config.expiresAt, t.config.expiresAt, 0);
}
function ed(e, t, n) {
    return ep(e.config.startsAt, t.config.startsAt, 0);
}
function ef(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        u = t.userStatus?.enrolledAt;
    return null == r && null == u
        ? ep(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == u
          ? ea
          : null == r && null != u
            ? 1
            : ep(r, u, 0);
}
function eA(e, t, n) {
    return ep(e.config.expiresAt, t.config.expiresAt, 1);
}
function eE(e, t) {
    switch (t) {
        case eu.Pc.VIDEO:
            return (0, et.vv)(e);
        case eu.Pc.PLAY:
            return (
                (0, et.t)({ quest: e }) || (0, et.fE)({ quest: e }) || (0, et.vl)(e) || (0, et.g5)(e) || (0, et.Cr)(e)
            );
        default:
            return !1;
    }
}
function eT(e, t) {
    switch (t) {
        case eu.BQ.VIRTUAL_CURRENCY:
            return (0, ee.ks)(e.config);
        case eu.BQ.COLLECTIBLE:
            return (0, ee.tU)(e.config);
        case eu.BQ.IN_GAME:
            return (0, ee.HG)(e.config) || (0, ee.r7)(e.config);
        default:
            return !1;
    }
}
let e_ = 221552 == n.j ? {} : null,
    eI =
        221552 == n.j
            ? {
                  questHomeHero: null,
                  isQuestHomeHeroShelfEnabled: !1,
                  currentUserId: null,
                  isRenewableEndDateSortEnabled: !1,
                  isMobileQuestHomeSortPriorityEnabled: !1,
              }
            : null;
function eC(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eI,
        { sortMethod: u, filters: i } = n,
        l =
            null == i || 0 === i.length
                ? e
                : (function (e, t) {
                      if (0 === t.length) return e;
                      let n = (0, o.groupBy)(t, "group");
                      return e.filter((e) =>
                          Object.entries(n).every((t) => {
                              let n,
                                  [r, u] = t;
                              return (
                                  (n = (function (e) {
                                      switch (e) {
                                          case "task":
                                              return eE;
                                          case "reward":
                                              return eT;
                                      }
                                  })(r)),
                                  0 === u.length || u.some((t) => n(e, t.filter))
                              );
                          }),
                      );
                  })(e, i),
        a = (function (e, t, n) {
            let r = new Map();
            if (!n || null == t) return r;
            for (let n of e) {
                var u;
                (0, en.iM)(n, eu.Li.RENEWABLE_END_DATE) && r.set(n.id, ((u = n.id), s().v3(`${t}:${u}`) >>> 0));
            }
            return r;
        })(l, r.currentUserId, r.isRenewableEndDateSortEnabled),
        c =
            ((t = (function (e) {
                switch (e) {
                    case eu.kL.MOST_RECENT:
                        return ed;
                    case eu.kL.RECENTLY_ENROLLED:
                        return ef;
                    case eu.kL.EXPIRING_SOON:
                        return eA;
                    case eu.kL.SUGGESTED:
                    default:
                        return ec;
                }
            })(u)),
            function (e, n) {
                let u = !(0, $.Ic)(e);
                return u !== !(0, $.Ic)(n) ? (u ? ea : 1) : t(e, n, r, a);
            });
    return l.sort(c);
}
function ep(e, t, n) {
    return e.localeCompare(t) * (0 === n ? ea : 1);
}
var eS = 221552 == n.j ? (((r = {}).ALL = "all"), (r.CLAIMED = "claimed"), (r.PREVIEW_TOOL = "preview_tool"), r) : null,
    em =
        221552 == n.j
            ? (((u = {}).TAB = "tab"),
              (u.QUEST_ID = "quest_id"),
              (u.SORT = "sort"),
              (u.FILTER = "filter"),
              (u.AD_CREATIVE_IDS = "ad_creative_ids"),
              u)
            : null;
function eO(e) {
    let t,
        n,
        r,
        u,
        i,
        o,
        a,
        s,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_,
        {
            quests: d,
            excludedQuests: f,
            isFetchingCurrentQuests: A,
            hasFetched: E,
        } = es({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        T = new Map(d.map((e) => [e.id, e])),
        _ =
            ((t = (function () {
                let e = (0, I.bG)([S.A], () => S.A.getQuestHomeHero()),
                    { isShelfEnabled: t } = e4(e),
                    n = (0, I.bG)([P.default], () => P.default.getCurrentUser()?.id ?? null),
                    { enabled: r } = F.useConfig({ location: eu.rE.QUEST_HOME_MOBILE }),
                    { enabled: u } = H.NN.useConfig({ location: eu.rE.QUEST_HOME_MOBILE });
                return l.useMemo(
                    () => ({
                        questHomeHero: e,
                        isQuestHomeHeroShelfEnabled: t,
                        currentUserId: n,
                        isRenewableEndDateSortEnabled: !1,
                        isMobileQuestHomeSortPriorityEnabled: !1,
                    }),
                    [e, t, n, !1, !1],
                );
            })()),
            (n = l.useRef([])),
            (r = l.useRef(c.sortMethod)),
            (u = l.useRef(c.filters)),
            (i = l.useRef(0)),
            (o = l.useRef(t)),
            l.useMemo(() => {
                if (0 === d.length) return [];
                if (
                    n.current.length > 0 &&
                    i.current === d.length &&
                    r.current === c.sortMethod &&
                    u.current === c.filters &&
                    o.current === t
                )
                    return n.current;
                let e = eC(d, c, t).map((e) => e.id);
                return (
                    (n.current = e),
                    (r.current = c.sortMethod),
                    (u.current = c.filters),
                    (i.current = d.length),
                    (o.current = t),
                    e
                );
            }, [d, c, t])),
        C =
            ((a = l.useMemo(
                () =>
                    d.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [d],
            )),
            (s = l.useRef([])),
            l.useMemo(() => {
                if (0 === a.length) return [];
                if (s.current.length > 0 && s.current.length === a.length) return s.current;
                let e = a
                    .sort((e, t) => {
                        let n = e.userStatus?.claimedAt == null;
                        return n !== (t.userStatus?.claimedAt == null)
                            ? n
                                ? ea
                                : 1
                            : ep(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return ((s.current = e), e);
            }, [a])),
        p = [];
    for (let t of "all" === e ? _ : C) {
        let n = T.get(t),
            r = null != n && "all" === e && c.removeExpiredQuests && (0, $.Ic)(n) && !(0, j.GR)(n.userStatus);
        null == n || r || p.push(n);
    }
    return { quests: p, excludedQuests: f, isFetchingCurrentQuests: A, hasFetched: E };
}
function eg() {
    let e = l.useRef(!1),
        t = (0, I.yK)([G.A], () => Array.from(G.A.claimedQuests.values())),
        n = (0, I.bG)([G.A], () => G.A.isFetchingClaimedQuests);
    return (
        l.useEffect(() => {
            n || e.current || ((e.current = !0), (0, Q.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eh(e, t) {
    let n = ev(e),
        r = (0, ee.ks)(e.config),
        u = (0, ee.KK)(e.config),
        i = t !== z.MA.INELIGIBLE;
    return !n && r && u && i;
}
function eN(e) {
    return (0, I.bG)(
        [G.A],
        () => {
            let t = G.A.getQuest(e);
            return null == t ? null : (0, ee.b)(t.config);
        },
        [e],
    );
}
function ev(e) {
    return (0, I.bG)([G.A], () => null != e && G.A.isQuestExpired(e.id), [e]);
}
function eL() {
    return (0, I.bG)([G.A], () => G.A.isQuestAccessSuspended, []);
}
function eR(e, t, n) {
    let r = (0, I.bG)([L.A], () => L.A.getChannel(t?.channelId) ?? null),
        u = (0, I.bG)([G.A], () => null != G.A.questEnrollmentBlockedUntil, []),
        i = (0, I.bG)([P.default], () => P.default.getCurrentUser()?.id),
        l = (0, I.bG)([G.A], () => null != e && G.A.isQuestExpired(e.id), [e]);
    if (null == e || u || l || i === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        a = (0, en.Ll)(t, r);
    return !o || !!a;
}
function eP(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, I.bG)([N.default], () => N.default.locale);
    return l.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eb(e) {
    let { quest: t, content: n, ctaContent: r, sourceQuestContent: u } = e,
        i = (0, x.wW)();
    return l.useCallback(() => {
        t.id === eu.Fw
            ? window.open(M.A.getArticleURL(ei.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, Z.pu)(t, { content: n, ctaContent: r, impressionId: i(), sourceQuestContent: u });
    }, [t, n, r, i, u]);
}
function ew(e) {
    return (0, I.bG)([G.A], () => G.A.isProgressingOnDesktop(e.id));
}
function ey(e) {
    return l.useMemo(() => (0, et.YL)(e), [e]);
}
function eM(e) {
    let t,
        n = ew(e),
        r = ey(e),
        u =
            ((t = (0, I.bG)([G.A], () => G.A.getOptimisticProgress(e.id, f.n.WATCH_VIDEO))),
            l.useMemo(() => (0, er.J$)(e), [e, t]));
    return n || r || u;
}
let eU = (e) => {
    let t = l.useCallback(() => (0, et.Yh)(e), [e]),
        [n, r] = l.useState(t()),
        u = l.useCallback(() => r(t()), [t]),
        i = eM(e);
    return (
        l.useEffect(() => {
            if (
                e.userStatus?.enrolledAt == null ||
                e.userStatus?.completedAt != null ||
                e.userStatus?.claimedAt != null ||
                !i
            )
                return void u();
            let t = window.setInterval(() => {
                u();
            }, +w.A.Millis.SECOND);
            return () => {
                (clearInterval(t), u());
            };
        }, [e, i, u]),
        n
    );
};
function ek(e) {
    return l.useMemo(() => (0, et.JC)(e), [e]);
}
function eD(e) {
    let t = l.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, et.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, O.A)(t);
}
function eQ(e) {
    let t = (0, I.bG)([G.A], () => G.A.quests),
        n = eD(Array.from(t.values())),
        r = l.useMemo(() => {
            let n = (0, en.$e)(t, eu.zO);
            return (0, J.BM)(n, e);
        }, [e, t, n]);
    return ev(r) ? null : r;
}
function eG(e) {
    return l.useMemo(
        () => ({
            handleComplete: () => (0, Q.Yb)(e),
            handleProgress: (t) => (0, Q.Yb)(e, t),
            handleResetStatusClick: () => (0, Q.UZ)(e),
            handleResetDismissibilityClick: () => (0, Q.Gt)(e),
            handleOverridePreviewClick: (t) => (0, Q.L4)(t, e),
            handleResetHasBeenSeenClick: () => (0, Q.qV)(d.p.QUEST, [e]),
        }),
        [e],
    );
}
function eq() {
    let { fetching: e, accounts: t } = (0, I.cf)([R.A], () => ({
            fetching: R.A.isFetching(),
            accounts: R.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: u,
        } = l.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === ei.fg2.XBOX),
                r = e.filter((e) => e.type === ei.fg2.PLAYSTATION),
                u = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: u };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: u };
}
function eH(e) {
    let { questId: t, preview: n, beforeRequest: r, afterRequest: u } = e,
        [i, o] = l.useState(!1),
        a = (0, I.bG)([R.A], () => R.A.getAccounts()),
        s = (0, D.O)((e) => e.clearErrorHintsByType),
        c = l.useCallback((e) => D.O.getState().setErrorHints(t, e), [t]);
    return (
        l.useEffect(() => {
            s(t, A._.EXPIRED_CREDENTIAL);
        }, [a, s, t]),
        {
            startConsoleQuest: l.useCallback(async () => {
                if (i) return;
                (r?.(), o(!0));
                let e = null;
                try {
                    ((e = await (0, Q.vD)(t, n)), c(e.errorHints));
                } finally {
                    (o(!1), u?.());
                }
            }, [i, r, u, n, t, c]),
            startingConsoleQuest: i,
        }
    );
}
function eK(e) {
    let { quest: t } = e,
        { xboxAndPlaystationAccounts: n } = eq(),
        r = eM(t),
        u = 0 === n.length;
    return (0, et.g5)(t) && u && !r;
}
function eW() {
    let { xboxAccounts: e, playstationAccounts: t } = eq(),
        n = e.length > 0,
        r = t.length > 0,
        u = M.A.getArticleURL(ei.MVz.QUEST_HOW_TO_PLAYSTATION),
        i = M.A.getArticleURL(ei.MVz.QUEST_HOW_TO_XBOX),
        l = eo.intl.format(eo.t.beN4DG, { psHelpdeskArticle: u, xboxHelpdeskArticle: i }),
        o = eo.intl.format(eo.t.HVS7nh, { helpdeskArticle: r ? u : i });
    return { message: (n && !r) || (!n && r) ? o : l, xboxURL: i, playstationURL: u };
}
var eF =
    (((i = {})[(i.UNACCEPTED = 0)] = "UNACCEPTED"),
    (i[(i.ACCEPTED = 1)] = "ACCEPTED"),
    (i[(i.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (i[(i.COMPLETED = 3)] = "COMPLETED"),
    (i[(i.CLAIMED = 4)] = "CLAIMED"),
    i);
function eB(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        u = eU(e).percentComplete > 0;
    return r ? 4 : n ? 3 : u && t ? 2 : 1 * !!t;
}
function eV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, I.bG)([N.default], () => N.default.locale),
        { percentComplete: r } = eU(e),
        u = ek(e),
        i = null != u ? u.percentComplete : r,
        l = 100 * i,
        o = null == u || t ? (0, T.l9)(n, i, { roundingMode: "floor" }) : `${u?.progress}/${u?.target}`;
    return { completedRatio: i, percentComplete: l, completedRatioDisplay: o };
}
function eX(e) {
    return [(0, I.bG)([G.A], () => G.A.selectedTaskPlatform(e)), l.useCallback((t) => (0, Q.lx)(e, t), [e])];
}
function ex(e, t) {
    let [n, r] = eX(e.id),
        u = l.useMemo(() => (0, Z.UR)(e), [e]),
        i = u.includes(eu.fO.DESKTOP),
        o = u.includes(eu.fO.CONSOLE),
        a = ew(e),
        s = ey(e),
        d = l.useMemo(
            () =>
                (0, c.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: f.n.PLAY_ON_DESKTOP }, () => eu.fO.DESKTOP)
                    .with({ taskType: f.n.PLAY_ACTIVITY }, () => eu.fO.DESKTOP)
                    .with({ taskType: f.n.WATCH_VIDEO }, () => eu.fO.DESKTOP)
                    .with({ taskType: f.n.WATCH_VIDEO_ON_MOBILE }, () => eu.fO.DESKTOP)
                    .with({ taskType: f.n.STREAM_ON_DESKTOP }, () => eu.fO.DESKTOP)
                    .with({ taskType: f.n.PLAY_ON_XBOX }, () => eu.fO.CONSOLE)
                    .with({ taskType: f.n.PLAY_ON_PLAYSTATION }, () => eu.fO.CONSOLE)
                    .with({ taskType: f.n.ACHIEVEMENT_IN_GAME }, () => eu.fO.DESKTOP)
                    .with({ taskType: f.n.ACHIEVEMENT_IN_ACTIVITY }, () => eu.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        A = a ? eu.fO.DESKTOP : s ? eu.fO.CONSOLE : null;
    return [
        l.useMemo(
            () =>
                (0, c.YW)({ lastPlatformProgress: d, currentProgressingPlatform: A, selectedPlatform: n })
                    .with({ currentProgressingPlatform: eu.fO.CONSOLE }, () => q.X0.CONSOLE)
                    .with({ currentProgressingPlatform: eu.fO.DESKTOP }, () => q.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: eu.fO.CONSOLE }, () => q.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: eu.fO.DESKTOP }, () => q.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: eu.fO.CONSOLE,
                        },
                        () => q.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: eu.fO.DESKTOP,
                        },
                        () => q.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (o && i ? q.X0.SELECT : o ? q.X0.CONSOLE : q.X0.DESKTOP),
                    )
                    .exhaustive(),
            [o, i, d, A, n],
        ),
        u,
        r,
    ];
}
function eY(e) {
    let t = ek(e),
        n = eU(e),
        [r] = ex(e, n),
        u = ev(e),
        i = e.userStatus?.enrolledAt != null,
        l = e.userStatus?.completedAt != null,
        o = f.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        a = 0 === n.percentComplete,
        s = i && !l && !u && null == t && (o || (a && r === q.X0.DESKTOP)),
        c = (0, U.HZ)() && s && !(0, Z.W1)(e),
        d = (0, U.cX)() && n.taskType === f.n.STREAM_ON_DESKTOP && s,
        A = [];
    return (d && A.push(eo.intl.string(eo.t.MFGxFM)), c && A.push(eo.intl.string(eo.t.BV6xDm)), A);
}
function ej(e) {
    return (0, I.bG)([G.A], () => G.A.quests).get(e) ?? null;
}
function e$(e) {
    let t,
        n,
        r,
        { mode: u, questContent: i, sourceQuestContent: o } = e;
    "questId" in e ? (t = e.questId) : ((n = e.adContentId), (r = e.adCreativeType));
    let a = l.useCallback(
            (e, u) => {
                null != t
                    ? (0, X.Zu)({ mode: e, prevMode: u, questContent: i, questId: t, sourceQuestContent: o })
                    : null != n &&
                      null != r &&
                      (0, X.Wc)({
                          adContentId: n,
                          adCreativeType: r,
                          mode: e,
                          prevMode: u,
                          questContent: i,
                          sourceQuestContent: o,
                      });
            },
            [i, o, t, n, r],
        ),
        s = t ?? n,
        c = l.useRef(null);
    (l.useEffect(() => {
        null != s && c.current !== u && (a(u, c.current), (c.current = u));
    }, [u, s, a]),
        l.useEffect(() => {
            if (null != s)
                return () => {
                    a(null, c.current);
                };
        }, [s, a]));
}
function eJ(e, t) {
    let n = (0, I.bG)([G.A], () => G.A.getQuest(e), [e]),
        r = (0, C.Ay)();
    return l.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, _.M)(r) ? ei.NJ8.DARK : ei.NJ8.LIGHT);
        return (0, B.tW)(n, B.fY.COSPONSOR_LOGO_TYPE, e);
    }, [r, t, n]);
}
function ez(e) {
    let t = (0, I.bG)([P.default], () => P.default.getCurrentUser()),
        n = (0, ee.mq)(e, t),
        r = (0, ee.k5)(e),
        u = (0, ee.$5)(e),
        i = (0, ee.Y7)(e),
        l = (0, ee.JX)(e),
        o = (0, k.TW)(t, el.PremiumTypes.TIER_2);
    if (null == r) return eo.intl.formatToPlainString(eo.t.l9uXL8, { decorationName: n });
    let a = eo.intl.formatToPlainString(eo.t.o97tNn, { rewardName: n }),
        s = eo.intl.formatToPlainString(eo.t.PkyRZo, { rewardName: n, expirationDate: u }),
        c = eo.intl.formatToPlainString(eo.t.ie4YK0, { rewardName: n, duration: r }),
        d = eo.intl.formatToPlainString(eo.t.yCpc0U, { duration: r, rewardName: n });
    return l
        ? i
            ? o
                ? a
                : c
            : o
              ? s
              : d
        : eo.intl.formatToPlainString(eo.t.tTlItm, { duration: r, decorationName: n });
}
function eZ(e) {
    let t = (0, et.TP)(e);
    return { launchInGameActivity: (0, p.A)({ applicationId: t }) };
}
function e0() {
    return (0, I.yK)([G.A], () => [...G.A.quests.values()]).some((e) => e.preview);
}
function e1() {
    return e0();
}
function e2(e) {
    let t = e?.userStatus != null && (0, j.gO)(e.userStatus, q.uF.ACTIVITY_PANEL),
        n = ev(e ?? null),
        r = e?.userStatus?.claimedAt != null,
        u = (0, I.bG)([G.A], () => null != G.A.questEnrollmentBlockedUntil, []);
    return !t && !n && !r && !u;
}
function e5() {
    let e = (0, I.yK)([G.A], () => [...G.A.quests.values()]);
    return l.useMemo(() => e.filter((e) => e.preview), [e]);
}
function e6() {
    let e = eu.pc;
    return l.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, Y.fx)(t), options: n };
            }),
        [e],
    );
}
function e9() {
    return l.useMemo(() => Object.keys(eu.kL).map((e) => ({ label: (0, Y.Js)(eu.kL[e]), value: eu.kL[e] })), []);
}
function e7(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: r } = e,
        u = l.useRef(null),
        i = l.useRef(null);
    (l.useEffect(() => {
        (b.default.track(ei.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: u.current }),
            (u.current = t));
    }, [t]),
        l.useEffect(() => {
            let e = n.map((e) => e.filter);
            (b.default.track(ei.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: i.current ?? [],
                num_quests_visible: r,
            }),
                (i.current = e));
        }, [n, r]));
}
function e8(e) {
    return l.useMemo(() => P.default.getCurrentUser()?.isStaff() === !0, []) || e.preview;
}
function e3(e, t) {
    let n = e.userStatus?.completedAt != null;
    return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
}
function e4(e) {
    let t = (0, I.bG)([G.A], () => G.A.quests),
        n = e?.questIds,
        r = (0, g.kV)(e);
    return l.useMemo(() => {
        if (null == n) return { shelfQuests: [], isShelfEnabled: r };
        let e = n
            .map((e) => t.get(e))
            .filter(y.Vq)
            .filter((e) => !(0, $.Ic)(e));
        return e.length <= 1 && !r ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: e, isShelfEnabled: !0 };
    }, [t, n, r]);
}
function te(e) {
    let t = v.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return l.useCallback(() => {
        if (n) return;
        let r = t ? E.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : E.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, h.hs)(r, { quest_id: e.id });
    }, [t, n, e.id]);
}
(w.A.Millis.HOUR, w.A.Millis.MINUTE);
