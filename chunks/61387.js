(n.d(t, {
    F3: () => eW,
    L1: () => eS,
    NC: () => ep,
    mn: () => eC,
    FA: () => eJ,
    Iq: () => eO,
    Du: () => eG,
    a5: () => e$,
    Qh: () => em,
    oH: () => ek,
    Cv: () => eZ,
    Hv: () => ev,
    Yl: () => eL,
    LS: () => eN,
    Vn: () => ey,
    zW: () => ez,
    Wj: () => eq,
    do: () => eP,
    In: () => eF,
    C5: () => eY,
    UH: () => e4,
    H6: () => ej,
    O9: () => eB,
    YW: () => eD,
    S5: () => eR,
    Nb: () => e5,
    t9: () => e3,
    XD: () => e6,
    $P: () => e9,
    UX: () => eK,
    ZP: () => eh,
    j$: () => eQ,
    fc: () => eM,
    aC: () => ex,
    mL: () => ea,
    pT: () => e2,
    tZ: () => eV,
    SD: () => eg,
    p5: () => e0,
    Ns: () => e7,
    sb: () => e1,
    Qo: () => eX,
    I3: () => eU,
    RR: () => eH,
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
    C = n(855986),
    I = n(736653),
    p = n(787389),
    S = n(157695),
    m = n(183636),
    O = n(429913),
    g = n(669700),
    h = n(773669),
    N = n(253932),
    v = n(734057),
    L = n(417869),
    R = n(287809),
    P = n(129230),
    b = n(927813),
    w = n(403362),
    y = n(975571),
    M = n(723702),
    U = n(448645);
(n(845890), n(265704));
var k = n(178540),
    D = n(343559),
    Q = n(122760),
    G = n(506988),
    q = n(914313),
    H = n(945810);
(0, H.mj)({
    name: "2026-09-quest-home-bounties-feature-gate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let K = (0, H.mj)({
        name: "2026-07-renewable-end-date-sort",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    W = 221552 == n.j ? K : null;
var F = n(760914),
    B = n(971276),
    V = n(561844);
n(590202);
var X = n(971649),
    x = n(651892),
    Y = n(710969),
    j = n(977416),
    $ = n(639214),
    J = n(576761),
    z = n(574112),
    Z = n(417404),
    ee = n(792620),
    et = n(814793),
    en = n(753386),
    er = n(221596),
    eu = n(652215),
    ei = n(682901),
    el = n(792996);
let eo = 221552 == n.j ? -1 : null;
function ea() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = l.useState(!1),
        r = (0, C.yK)([Q.A], () => [...Q.A.quests.values()]),
        u = (0, C.yK)([Q.A], () => [...Q.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: o } = (0, C.cf)([Q.A], () => ({
            isFetchingCurrentQuests: Q.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: Q.A.lastFetchedCurrentQuests,
        })),
        a = (0, B.s)();
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
            if (r && a && !t && !i && (n(!0), (0, D.N1)(), (0, M.cX)() && "focused" !== m.A.getState())) return;
        }, [e.fetchPolicy, a, t, i, o, e.callerSource]),
        { quests: r, excludedQuests: u, isFetchingCurrentQuests: i, hasFetched: t }
    );
}
function es(e, t, n, r) {
    let u = e.id === er.aJ,
        i = t.id === er.aJ,
        l = u && e.userStatus?.completedAt == null;
    if (l !== (i && t.userStatus?.completedAt == null)) return l ? eo : 1;
    let o = !(0, j.Ic)(e),
        a = e.userStatus?.claimedAt != null,
        s = t.userStatus?.claimedAt != null,
        c = e.userStatus?.enrolledAt != null,
        d = t.userStatus?.enrolledAt != null,
        f = 20 * b.A.Millis.MINUTE,
        A = e8(e, f),
        E = e8(t, f);
    if (o) {
        var T, _, C;
        let u,
            i,
            { questHomeHero: l, isQuestHomeHeroShelfEnabled: o } = n;
        if (null != l && !o) {
            let n = (0, et.I0)(l, e.id),
                r = (0, et.I0)(l, t.id);
            if (n || r) return n ? eo : 1;
        }
        return A !== E && (A || E)
            ? A
                ? 1
                : eo
            : a !== s
              ? a
                  ? 1
                  : eo
              : c !== d
                ? c
                    ? eo
                    : 1
                : ((T = e),
                  (_ = t),
                  (u = (C = r).get(T.id)),
                  (i = C.get(_.id)),
                  null != u && null != i
                      ? u !== i
                          ? u - i
                          : T.id !== _.id
                            ? T.id < _.id
                                ? eo
                                : 1
                            : 0
                      : null != u
                        ? eo
                        : null != i
                          ? 1
                          : eI(T.config.expiresAt, _.config.expiresAt, 1));
    }
    return a !== s ? (a ? eo : 1) : c !== d ? (c ? eo : 1) : eI(e.config.expiresAt, t.config.expiresAt, 0);
}
function ec(e, t, n) {
    return eI(e.config.startsAt, t.config.startsAt, 0);
}
function ed(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        u = t.userStatus?.enrolledAt;
    return null == r && null == u
        ? eI(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == u
          ? eo
          : null == r && null != u
            ? 1
            : eI(r, u, 0);
}
function ef(e, t, n) {
    return eI(e.config.expiresAt, t.config.expiresAt, 1);
}
function eA(e, t) {
    switch (t) {
        case er.Pc.VIDEO:
            return (0, ee.vv)(e);
        case er.Pc.PLAY:
            return (
                (0, ee.t)({ quest: e }) || (0, ee.fE)({ quest: e }) || (0, ee.vl)(e) || (0, ee.g5)(e) || (0, ee.Cr)(e)
            );
        default:
            return !1;
    }
}
function eE(e, t) {
    switch (t) {
        case er.BQ.VIRTUAL_CURRENCY:
            return (0, Z.ks)(e.config);
        case er.BQ.COLLECTIBLE:
            return (0, Z.tU)(e.config);
        case er.BQ.IN_GAME:
            return (0, Z.HG)(e.config) || (0, Z.r7)(e.config);
        default:
            return !1;
    }
}
let eT = 221552 == n.j ? {} : null,
    e_ =
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
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e_,
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
                                              return eA;
                                          case "reward":
                                              return eE;
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
                (0, et.iM)(n, er.Li.RENEWABLE_END_DATE) && r.set(n.id, ((u = n.id), s().v3(`${t}:${u}`) >>> 0));
            }
            return r;
        })(l, r.currentUserId, r.isRenewableEndDateSortEnabled),
        c =
            ((t = (function (e) {
                switch (e) {
                    case er.kL.MOST_RECENT:
                        return ec;
                    case er.kL.RECENTLY_ENROLLED:
                        return ed;
                    case er.kL.EXPIRING_SOON:
                        return ef;
                    case er.kL.SUGGESTED:
                    default:
                        return es;
                }
            })(u)),
            function (e, n) {
                let u = !(0, j.Ic)(e);
                return u !== !(0, j.Ic)(n) ? (u ? eo : 1) : t(e, n, r, a);
            });
    return l.sort(c);
}
function eI(e, t, n) {
    return e.localeCompare(t) * (0 === n ? eo : 1);
}
var ep = 221552 == n.j ? (((r = {}).ALL = "all"), (r.CLAIMED = "claimed"), (r.PREVIEW_TOOL = "preview_tool"), r) : null,
    eS =
        221552 == n.j
            ? (((u = {}).TAB = "tab"),
              (u.QUEST_ID = "quest_id"),
              (u.SORT = "sort"),
              (u.FILTER = "filter"),
              (u.AD_CREATIVE_IDS = "ad_creative_ids"),
              u)
            : null;
function em(e) {
    let t,
        n,
        r,
        u,
        i,
        o,
        a,
        s,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT,
        {
            quests: d,
            excludedQuests: f,
            isFetchingCurrentQuests: A,
            hasFetched: E,
        } = ea({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        T = new Map(d.map((e) => [e.id, e])),
        _ =
            ((t = (function () {
                let e = (0, C.bG)([S.A], () => S.A.getQuestHomeHero()),
                    { isShelfEnabled: t } = e3(e),
                    n = (0, C.bG)([R.default], () => R.default.getCurrentUser()?.id ?? null),
                    { enabled: r } = W.useConfig({ location: er.rE.QUEST_HOME_MOBILE }),
                    { enabled: u } = q.NN.useConfig({ location: er.rE.QUEST_HOME_MOBILE });
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
        I =
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
                                ? eo
                                : 1
                            : eI(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return ((s.current = e), e);
            }, [a])),
        p = [];
    for (let t of "all" === e ? _ : I) {
        let n = T.get(t),
            r = null != n && "all" === e && c.removeExpiredQuests && (0, j.Ic)(n) && !(0, Y.GR)(n.userStatus);
        null == n || r || p.push(n);
    }
    return { quests: p, excludedQuests: f, isFetchingCurrentQuests: A, hasFetched: E };
}
function eO() {
    let e = l.useRef(!1),
        t = (0, C.yK)([Q.A], () => Array.from(Q.A.claimedQuests.values())),
        n = (0, C.bG)([Q.A], () => Q.A.isFetchingClaimedQuests);
    return (
        l.useEffect(() => {
            n || e.current || ((e.current = !0), (0, D.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eg(e, t) {
    let n = eN(e),
        r = (0, Z.ks)(e.config),
        u = (0, Z.KK)(e.config),
        i = t !== J.MA.INELIGIBLE;
    return !n && r && u && i;
}
function eh(e) {
    return (0, C.bG)(
        [Q.A],
        () => {
            let t = Q.A.getQuest(e);
            return null == t ? null : (0, Z.b)(t.config);
        },
        [e],
    );
}
function eN(e) {
    return (0, C.bG)([Q.A], () => null != e && Q.A.isQuestExpired(e.id), [e]);
}
function ev() {
    return (0, C.bG)([Q.A], () => Q.A.isQuestAccessSuspended, []);
}
function eL(e, t, n) {
    let r = (0, C.bG)([v.A], () => v.A.getChannel(t?.channelId) ?? null),
        u = (0, C.bG)([Q.A], () => null != Q.A.questEnrollmentBlockedUntil, []),
        i = (0, C.bG)([R.default], () => R.default.getCurrentUser()?.id),
        l = (0, C.bG)([Q.A], () => null != e && Q.A.isQuestExpired(e.id), [e]);
    if (null == e || u || l || i === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        a = (0, et.Ll)(t, r);
    return !o || !!a;
}
function eR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, C.bG)([h.default], () => h.default.locale);
    return l.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eP(e) {
    let { quest: t, content: n, ctaContent: r, sourceQuestContent: u } = e,
        i = (0, X.wW)();
    return l.useCallback(() => {
        t.id === er.Fw
            ? window.open(y.A.getArticleURL(eu.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, z.pu)(t, { content: n, ctaContent: r, impressionId: i(), sourceQuestContent: u });
    }, [t, n, r, i, u]);
}
function eb(e) {
    return (0, C.bG)([Q.A], () => Q.A.isProgressingOnDesktop(e.id));
}
function ew(e) {
    return l.useMemo(() => (0, ee.YL)(e), [e]);
}
function ey(e) {
    let t,
        n = eb(e),
        r = ew(e),
        u =
            ((t = (0, C.bG)([Q.A], () => Q.A.getOptimisticProgress(e.id, f.n.WATCH_VIDEO))),
            l.useMemo(() => (0, en.J$)(e), [e, t]));
    return n || r || u;
}
let eM = (e) => {
    let t = l.useCallback(() => (0, ee.Yh)(e), [e]),
        [n, r] = l.useState(t()),
        u = l.useCallback(() => r(t()), [t]),
        i = ey(e);
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
            }, +b.A.Millis.SECOND);
            return () => {
                (clearInterval(t), u());
            };
        }, [e, i, u]),
        n
    );
};
function eU(e) {
    return l.useMemo(() => (0, ee.JC)(e), [e]);
}
function ek(e) {
    let t = l.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, ee.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, O.A)(t);
}
function eD(e) {
    let t = (0, C.bG)([Q.A], () => Q.A.quests),
        n = ek(Array.from(t.values())),
        r = l.useMemo(() => {
            let n = (0, et.$e)(t, er.zO);
            return (0, $.BM)(n, e);
        }, [e, t, n]);
    return eN(r) ? null : r;
}
function eQ(e) {
    return l.useMemo(
        () => ({
            handleComplete: () => (0, D.Yb)(e),
            handleProgress: (t) => (0, D.Yb)(e, t),
            handleResetStatusClick: () => (0, D.UZ)(e),
            handleResetDismissibilityClick: () => (0, D.Gt)(e),
            handleOverridePreviewClick: (t) => (0, D.L4)(t, e),
            handleResetHasBeenSeenClick: () => (0, D.qV)(d.p.QUEST, [e]),
        }),
        [e],
    );
}
function eG() {
    let { fetching: e, accounts: t } = (0, C.cf)([L.A], () => ({
            fetching: L.A.isFetching(),
            accounts: L.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: u,
        } = l.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === eu.fg2.XBOX),
                r = e.filter((e) => e.type === eu.fg2.PLAYSTATION),
                u = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: u };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: u };
}
function eq(e) {
    let { questId: t, preview: n, beforeRequest: r, afterRequest: u } = e,
        [i, o] = l.useState(!1),
        a = (0, C.bG)([L.A], () => L.A.getAccounts()),
        s = (0, k.O)((e) => e.clearErrorHintsByType),
        c = l.useCallback((e) => k.O.getState().setErrorHints(t, e), [t]);
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
                    ((e = await (0, D.vD)(t, n)), c(e.errorHints));
                } finally {
                    (o(!1), u?.());
                }
            }, [i, r, u, n, t, c]),
            startingConsoleQuest: i,
        }
    );
}
function eH(e) {
    let { quest: t } = e,
        { xboxAndPlaystationAccounts: n } = eG(),
        r = ey(t),
        u = 0 === n.length;
    return (0, ee.g5)(t) && u && !r;
}
function eK() {
    let { xboxAccounts: e, playstationAccounts: t } = eG(),
        n = e.length > 0,
        r = t.length > 0,
        u = y.A.getArticleURL(eu.MVz.QUEST_HOW_TO_PLAYSTATION),
        i = y.A.getArticleURL(eu.MVz.QUEST_HOW_TO_XBOX),
        l = el.intl.format(el.t.beN4DG, { psHelpdeskArticle: u, xboxHelpdeskArticle: i }),
        o = el.intl.format(el.t.HVS7nh, { helpdeskArticle: r ? u : i });
    return { message: (n && !r) || (!n && r) ? o : l, xboxURL: i, playstationURL: u };
}
var eW =
    (((i = {})[(i.UNACCEPTED = 0)] = "UNACCEPTED"),
    (i[(i.ACCEPTED = 1)] = "ACCEPTED"),
    (i[(i.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (i[(i.COMPLETED = 3)] = "COMPLETED"),
    (i[(i.CLAIMED = 4)] = "CLAIMED"),
    i);
function eF(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        u = eM(e).percentComplete > 0;
    return r ? 4 : n ? 3 : u && t ? 2 : 1 * !!t;
}
function eB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, C.bG)([h.default], () => h.default.locale),
        { percentComplete: r } = eM(e),
        u = eU(e),
        i = null != u ? u.percentComplete : r,
        l = 100 * i,
        o = null == u || t ? (0, T.l9)(n, i, { roundingMode: "floor" }) : `${u?.progress}/${u?.target}`;
    return { completedRatio: i, percentComplete: l, completedRatioDisplay: o };
}
function eV(e) {
    return [(0, C.bG)([Q.A], () => Q.A.selectedTaskPlatform(e)), l.useCallback((t) => (0, D.lx)(e, t), [e])];
}
function eX(e, t) {
    let [n, r] = eV(e.id),
        u = l.useMemo(() => (0, z.UR)(e), [e]),
        i = u.includes(er.fO.DESKTOP),
        o = u.includes(er.fO.CONSOLE),
        a = eb(e),
        s = ew(e),
        d = l.useMemo(
            () =>
                (0, c.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: f.n.PLAY_ON_DESKTOP }, () => er.fO.DESKTOP)
                    .with({ taskType: f.n.PLAY_ACTIVITY }, () => er.fO.DESKTOP)
                    .with({ taskType: f.n.WATCH_VIDEO }, () => er.fO.DESKTOP)
                    .with({ taskType: f.n.WATCH_VIDEO_ON_MOBILE }, () => er.fO.DESKTOP)
                    .with({ taskType: f.n.STREAM_ON_DESKTOP }, () => er.fO.DESKTOP)
                    .with({ taskType: f.n.PLAY_ON_XBOX }, () => er.fO.CONSOLE)
                    .with({ taskType: f.n.PLAY_ON_PLAYSTATION }, () => er.fO.CONSOLE)
                    .with({ taskType: f.n.ACHIEVEMENT_IN_GAME }, () => er.fO.DESKTOP)
                    .with({ taskType: f.n.ACHIEVEMENT_IN_ACTIVITY }, () => er.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        A = a ? er.fO.DESKTOP : s ? er.fO.CONSOLE : null;
    return [
        l.useMemo(
            () =>
                (0, c.YW)({ lastPlatformProgress: d, currentProgressingPlatform: A, selectedPlatform: n })
                    .with({ currentProgressingPlatform: er.fO.CONSOLE }, () => G.X0.CONSOLE)
                    .with({ currentProgressingPlatform: er.fO.DESKTOP }, () => G.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: er.fO.CONSOLE }, () => G.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: er.fO.DESKTOP }, () => G.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: er.fO.CONSOLE,
                        },
                        () => G.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: er.fO.DESKTOP,
                        },
                        () => G.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (o && i ? G.X0.SELECT : o ? G.X0.CONSOLE : G.X0.DESKTOP),
                    )
                    .exhaustive(),
            [o, i, d, A, n],
        ),
        u,
        r,
    ];
}
function ex(e) {
    let t = eU(e),
        n = eM(e),
        [r] = eX(e, n),
        u = eN(e),
        i = e.userStatus?.enrolledAt != null,
        l = e.userStatus?.completedAt != null,
        o = f.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        a = 0 === n.percentComplete,
        s = i && !l && !u && null == t && (o || (a && r === G.X0.DESKTOP)),
        c = (0, M.HZ)() && s && !(0, z.W1)(e),
        d = (0, M.cX)() && n.taskType === f.n.STREAM_ON_DESKTOP && s,
        A = [];
    return (d && A.push(el.intl.string(el.t.MFGxFM)), c && A.push(el.intl.string(el.t.BV6xDm)), A);
}
function eY(e) {
    return (0, C.bG)([Q.A], () => Q.A.quests).get(e) ?? null;
}
function ej(e) {
    let t,
        n,
        r,
        { mode: u, questContent: i, sourceQuestContent: o } = e;
    "questId" in e ? (t = e.questId) : ((n = e.adContentId), (r = e.adCreativeType));
    let a = l.useCallback(
            (e, u) => {
                null != t
                    ? (0, V.Zu)({ mode: e, prevMode: u, questContent: i, questId: t, sourceQuestContent: o })
                    : null != n &&
                      null != r &&
                      (0, V.Wc)({
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
function e$(e, t) {
    let n = (0, C.bG)([Q.A], () => Q.A.getQuest(e), [e]),
        r = (0, I.Ay)();
    return l.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, _.M)(r) ? eu.NJ8.DARK : eu.NJ8.LIGHT);
        return (0, F.tW)(n, F.fY.COSPONSOR_LOGO_TYPE, e);
    }, [r, t, n]);
}
function eJ(e) {
    let t = (0, C.bG)([R.default], () => R.default.getCurrentUser()),
        n = (0, Z.mq)(e, t),
        r = (0, Z.k5)(e),
        u = (0, Z.$5)(e),
        i = (0, Z.Y7)(e),
        l = (0, Z.JX)(e),
        o = (0, U.TW)(t, ei.PremiumTypes.TIER_2);
    if (null == r) return el.intl.formatToPlainString(el.t.l9uXL8, { decorationName: n });
    let a = el.intl.formatToPlainString(el.t.o97tNn, { rewardName: n }),
        s = el.intl.formatToPlainString(el.t.PkyRZo, { rewardName: n, expirationDate: u }),
        c = el.intl.formatToPlainString(el.t.ie4YK0, { rewardName: n, duration: r }),
        d = el.intl.formatToPlainString(el.t.yCpc0U, { duration: r, rewardName: n });
    return l
        ? i
            ? o
                ? a
                : c
            : o
              ? s
              : d
        : el.intl.formatToPlainString(el.t.tTlItm, { duration: r, decorationName: n });
}
function ez(e) {
    let t = (0, ee.TP)(e);
    return { launchInGameActivity: (0, p.A)({ applicationId: t }) };
}
function eZ() {
    return (0, C.yK)([Q.A], () => [...Q.A.quests.values()]).some((e) => e.preview);
}
function e0() {
    return eZ();
}
function e1(e) {
    let t = e?.userStatus != null && (0, Y.gO)(e.userStatus, G.uF.ACTIVITY_PANEL),
        n = eN(e ?? null),
        r = e?.userStatus?.claimedAt != null,
        u = (0, C.bG)([Q.A], () => null != Q.A.questEnrollmentBlockedUntil, []);
    return !t && !n && !r && !u;
}
function e2() {
    let e = (0, C.yK)([Q.A], () => [...Q.A.quests.values()]);
    return l.useMemo(() => e.filter((e) => e.preview), [e]);
}
function e5() {
    let e = er.pc;
    return l.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, x.fx)(t), options: n };
            }),
        [e],
    );
}
function e6() {
    return l.useMemo(() => Object.keys(er.kL).map((e) => ({ label: (0, x.Js)(er.kL[e]), value: er.kL[e] })), []);
}
function e9(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: r } = e,
        u = l.useRef(null),
        i = l.useRef(null);
    (l.useEffect(() => {
        (P.default.track(eu.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: u.current }),
            (u.current = t));
    }, [t]),
        l.useEffect(() => {
            let e = n.map((e) => e.filter);
            (P.default.track(eu.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: i.current ?? [],
                num_quests_visible: r,
            }),
                (i.current = e));
        }, [n, r]));
}
function e7(e) {
    return l.useMemo(() => R.default.getCurrentUser()?.isStaff() === !0, []) || e.preview;
}
function e8(e, t) {
    let n = e.userStatus?.completedAt != null;
    return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
}
function e3(e) {
    let t = (0, C.bG)([Q.A], () => Q.A.quests),
        n = e?.questIds;
    return l.useMemo(() => {
        if (null == n) return { shelfQuests: [], isShelfEnabled: !1 };
        let e = n
            .map((e) => t.get(e))
            .filter(w.Vq)
            .filter((e) => !(0, j.Ic)(e));
        return e.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: e, isShelfEnabled: !0 };
    }, [t, n]);
}
function e4(e) {
    let t = N.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return l.useCallback(() => {
        if (n) return;
        let r = t ? E.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : E.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, g.hs)(r, { quest_id: e.id });
    }, [t, n, e.id]);
}
(b.A.Millis.HOUR, b.A.Millis.MINUTE);
