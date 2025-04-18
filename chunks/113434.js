n.d(t, {
    B4: () => ev,
    B6: () => Q,
    Bd: () => eg,
    DU: () => el,
    Fr: () => es,
    GI: () => ed,
    Gd: () => eN,
    I: () => em,
    J2: () => B,
    Jf: () => er,
    KX: () => e_,
    KZ: () => eC,
    OH: () => ep,
    Qy: () => eA,
    Rf: () => en,
    _Q: () => eh,
    _s: () => ef,
    bA: () => Y,
    e5: () => W,
    eN: () => K,
    eQ: () => eS,
    iO: () => eo,
    kJ: () => ec,
    me: () => eb,
    pe: () => X,
    qI: () => eI,
    qb: () => ey,
    sf: () => eO,
    t5: () => ea,
    tP: () => q,
    uA: () => ei,
    vf: () => eT,
    z: () => ee,
    z6: () => eu,
    zB: () => eR
}),
    n(388685),
    n(642613),
    n(539854),
    n(953529),
    n(314940);
var r = n(192379),
    i = n(512722),
    a = n.n(i),
    o = n(278074),
    s = n(754700),
    l = n(959078),
    c = n(780384),
    u = n(442837),
    d = n(410030),
    f = n(317381),
    _ = n(197386),
    p = n(583434),
    h = n(703656),
    m = n(706454),
    g = n(553795),
    E = n(594174),
    b = n(70956),
    y = n(63063),
    v = n(930153),
    O = n(358085),
    I = n(74538),
    S = n(617136),
    T = n(915750),
    N = n(272008),
    A = n(569984),
    C = n(497505),
    R = n(918701),
    P = n(977156),
    w = n(373370),
    D = n(475595),
    L = n(566078),
    x = n(46140),
    M = n(981631),
    k = n(474936),
    j = n(388032);
let U = -1,
    G = 1;
function B() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = r.useState(!1),
        i = (0, u.Wu)([A.Z], () => [...A.Z.quests.values()]),
        a = (0, u.Wu)([A.Z], () => [...A.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: s } = (0, u.cj)([A.Z], () => ({
            isFetchingCurrentQuests: A.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: A.Z.lastFetchedCurrentQuests
        })),
        l = (0, P.cB)({ location: x.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            'cache-only' !== e.fetchPolicy && (('cache-and-network' !== e.fetchPolicy && ('cache-or-network' !== e.fetchPolicy || 0 !== s)) || !l || t || o || (n(!0), (0, N.xw)(), (0, N.w)(C.Ok.DESKTOP_ACCOUNT_PANEL_AREA)));
        }, [e.fetchPolicy, l, t, o, s]),
        {
            quests: i,
            excludedQuests: a,
            isFetchingCurrentQuests: o
        }
    );
}
function F(e) {
    return e.sort((e, t) => {
        var n, r, i, a, o, s;
        let l = !(0, R.zi)(e),
            c = !(0, R.zi)(t),
            u = (null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null,
            d = (null == (r = t.userStatus) ? void 0 : r.enrolledAt) != null;
        return l !== c ? (l ? U : G) : u !== d ? (u ? U : G) : l && c ? V(null == (o = e.config) ? void 0 : o.expiresAt, null == (s = t.config) ? void 0 : s.expiresAt, 1) : V(null == (i = e.config) ? void 0 : i.expiresAt, null == (a = t.config) ? void 0 : a.expiresAt, 0);
    });
}
function V(e, t, n) {
    let r = 0 === n ? U : G;
    return e.localeCompare(t) * r;
}
function Z(e) {
    let t = r.useRef([]);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (t.current.length > 0 && t.current.length === e.length) return t.current;
        let n = F(e).map((e) => e.id);
        return (t.current = n), n;
    }, [e]);
}
function H(e) {
    let t = r.useMemo(
            () =>
                e.filter((e) => {
                    var t, n;
                    let r = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
                        i = (null == (n = e.userStatus) ? void 0 : n.claimedAt) != null;
                    return r && i;
                }),
            [e]
        ),
        n = r.useRef([]);
    return r.useMemo(() => {
        if (0 === t.length) return [];
        if (n.current.length > 0 && n.current.length === t.length) return n.current;
        let e = t
            .sort((e, t) => {
                var n, r;
                let i = (null == (n = e.userStatus) ? void 0 : n.claimedAt) == null;
                return i !== ((null == (r = t.userStatus) ? void 0 : r.claimedAt) == null) ? (i ? U : G) : V(L.r.build(e.config).rewardsExpireAt, L.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var W = (function (e) {
    return (e.ALL = 'all'), (e.CLAIMED = 'claimed'), e;
})({});
function Y(e) {
    let { quests: t, isFetchingCurrentQuests: n } = B({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = Z(t),
        a = H(t),
        o = [],
        s = [];
    for (let t of (o = 'all' === e ? i : a)) {
        let e = r.get(t);
        null != e && s.push(e);
    }
    return {
        quests: s,
        isFetchingCurrentQuests: n
    };
}
function K() {
    let e = r.useRef(!1),
        t = (0, u.Wu)([A.Z], () => Array.from(A.Z.claimedQuests.values())),
        n = (0, u.e7)([A.Z], () => A.Z.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, N.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n
        }
    );
}
function z() {
    return (0, u.e7)([A.Z], () => A.Z.getExpiredQuestsMap());
}
function q(e) {
    return (0, u.e7)([A.Z], () => null != e && A.Z.isQuestExpired(e.id), [e]);
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, u.e7)([m.default], () => m.default.locale);
    return r.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function X(e) {
    return (0, u.e7)([A.Z], () => A.Z.isProgressingOnDesktop(e.id));
}
function J(e) {
    return r.useMemo(() => (0, R.Bz)(e), [e]);
}
function $(e) {
    let t = (0, u.e7)([A.Z], () => A.Z.getOptimisticProgress(e.id, s.X.WATCH_VIDEO));
    return r.useMemo(() => (0, R.BM)(e), [e, t]);
}
function ee(e) {
    let t = X(e),
        n = J(e),
        r = $(e);
    return t || n || r;
}
let et = 1,
    en = (e) => {
        let t = r.useCallback(() => (0, R.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = ee(e);
        return (
            r.useEffect(() => {
                var t, n, r;
                if ((null == (t = e.userStatus) ? void 0 : t.enrolledAt) == null || (null == (n = e.userStatus) ? void 0 : n.completedAt) != null || (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null || !o) return void a();
                let i = window.setInterval(() => {
                    a();
                }, b.Z.Millis.SECOND * et);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function er(e) {
    return r.useMemo(() => (0, R.b7)(e), [e]);
}
let ei = (e) => {
    let { quest: t, questContent: n } = e,
        r = ef({ quest: t }),
        i = (0, T.WD)();
    return () => {
        r
            ? (0, R.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: S.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == i ? void 0 : i.getId()
                  }
              )
            : (0, R.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: S.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == i ? void 0 : i.getId()
                  }
              );
    };
};
function ea(e, t, n) {
    let { targetMinutes: r } = en(e),
        i = er(e),
        a = ei({
            quest: e,
            questContent: n
        });
    if ((0, R.$J)(e) && !(0, R.Nj)({ quest: e }))
        return j.NW.format(j.t['l4S+cX'], {
            minutes: r,
            onClick: a,
            gameTitle: L.r.build(e.config).application.name
        });
    if ((0, R.$J)(e))
        return j.NW.format(j.t.Ajlcd3, {
            minutes: r,
            onClick: a,
            gameTitle: L.r.build(e.config).application.name
        });
    if ((0, R.q8)(e)) {
        var o;
        let t = null == (o = e.config.videoMetadata) ? void 0 : o.messages.videoTitle;
        return null == t ? j.NW.string(j.t['o+e9ys']) : j.NW.formatToPlainString(j.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != i) return i.title;
    if ((0, R.pO)(e) && (0, R.KM)(e)) return j.NW.format(j.t['1NaRSk'], { minutes: r });
    let s = j.t['6zWtV1'];
    return (
        (0, R.Nj)({ quest: e }) && (s = j.t['wmOh/v']),
        j.NW.format(s, {
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function eo() {
    let { quests: e, isFetchingCurrentQuests: t } = B({ fetchPolicy: 'cache-or-network' }),
        n = z();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, R.vR)(t, C.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, R.zE)(t.userStatus, C.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function es(e) {
    let t = (0, u.e7)([A.Z], () => A.Z.quests),
        n = r.useMemo(() => (0, R.Jg)(t, e), [e, t]);
    return q(n) ? null : n;
}
function el(e) {
    var t;
    let n = (0, R.Xv)(e),
        { product: r, isFetching: i } = (0, p.T)(L.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r || null == (t = r.items) ? void 0 : t[0],
        isFetching: i
    };
}
function ec(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, N.Wf)(e),
            handleProgress: (t) => (0, N.Wf)(e, t),
            handleResetStatusClick: () => (0, N.eT)(e),
            handleResetDismissibilityClick: () => (0, N.T0)(e),
            handleOverrideDeliveryClick: () => (0, N.EW)(e)
        }),
        [e]
    );
}
function eu() {
    let { fetching: e, accounts: t } = (0, u.cj)([g.Z], () => ({
            fetching: g.Z.isFetching(),
            accounts: g.Z.getAccounts()
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === M.ABu.XBOX),
                r = e.filter((e) => e.type === M.ABu.PLAYSTATION),
                i = n.concat(r);
            return {
                xboxAccounts: n,
                playstationAccounts: r,
                xboxAndPlaystationAccounts: i
            };
        }, [t]);
    return {
        fetching: e,
        xboxAccounts: n,
        playstationAccounts: i,
        xboxAndPlaystationAccounts: a
    };
}
let ed = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [o, s] = r.useState([]),
            [c, d] = r.useState(!1),
            f = (0, u.e7)([g.Z], () => g.Z.getAccounts());
        return (
            r.useEffect(() => {
                s((e) => e.filter((e) => e.type !== l.K.EXPIRED_CREDENTIAL));
            }, [f]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (c) return;
                    null == i || i(), d(!0);
                    let e = null;
                    try {
                        (e = await (0, N.CS)(t, n)), s(e.errorHints);
                    } finally {
                        var r;
                        d(!1), null == a || a(null != (r = null == e ? void 0 : e.errorHints) ? r : []);
                    }
                }, [c, i, a, n, t]),
                startingConsoleQuest: c,
                errorHints: o
            }
        );
    },
    ef = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eu(),
            r = ee(t),
            i = 0 === n.length;
        return (0, R.$J)(t) && i && !r;
    },
    e_ = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eu(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = y.Z.getArticleURL(M.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = y.Z.getArticleURL(M.BhN.QUEST_HOW_TO_XBOX),
            s = j.NW.format(j.t.beN4DA, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o
            }),
            l = j.NW.format(j.t.HVS7np, { helpdeskArticle: r ? a : o });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a
        };
    };
var ep = (function (e) {
    return (e[(e.UNACCEPTED = 0)] = 'UNACCEPTED'), (e[(e.ACCEPTED = 1)] = 'ACCEPTED'), (e[(e.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CLAIMED = 4)] = 'CLAIMED'), e;
})({});
function eh(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = en(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s ? 2 : 1 * !!i;
}
function em(e) {
    let t = (0, u.e7)([m.default], () => m.default.locale),
        { percentComplete: n } = en(e),
        r = er(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        o = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, v.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: o
    };
}
function eg(e) {
    var t, n;
    let r = en(e),
        i = (0, R.b7)(e),
        a = (0, w.DD)({
            quest: e,
            taskDetails: r,
            location: x.dr.QUEST_HOME_DESKTOP,
            questContent: C.jn.QUEST_HOME_DESKTOP
        }),
        o = (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
        s = Q(null == (n = e.userStatus) ? void 0 : n.claimedAt);
    return o ? j.NW.formatToPlainString(j.t.lOVr0N, { claimDate: s }) : null != i ? i.description : null != a ? a : null;
}
function eE(e) {
    return [(0, u.e7)([A.Z], () => A.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, N.OR)(e, t), [e])];
}
function eb(e, t) {
    let [n, i] = eE(e.id),
        a = r.useMemo(() => (0, R.yH)(e), [e]),
        l = a.includes(x.cd.DESKTOP),
        c = a.includes(x.cd.CONSOLE),
        u = X(e),
        d = J(e),
        f = r.useMemo(
            () =>
                (0, o.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: s.X.PLAY_ON_DESKTOP }, () => x.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ON_DESKTOP_V2 }, () => x.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ACTIVITY }, () => x.cd.DESKTOP)
                    .with({ taskType: s.X.WATCH_VIDEO }, () => x.cd.DESKTOP)
                    .with({ taskType: s.X.WATCH_VIDEO_ON_MOBILE }, () => x.cd.DESKTOP)
                    .with({ taskType: s.X.STREAM_ON_DESKTOP }, () => x.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ON_XBOX }, () => x.cd.CONSOLE)
                    .with({ taskType: s.X.PLAY_ON_PLAYSTATION }, () => x.cd.CONSOLE)
                    .with({ taskType: s.X.ACHIEVEMENT_IN_GAME }, () => x.cd.DESKTOP)
                    .with({ taskType: s.X.ACHIEVEMENT_IN_ACTIVITY }, () => x.cd.DESKTOP)
                    .exhaustive(),
            [t]
        ),
        _ = u ? x.cd.DESKTOP : d ? x.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, o.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: _,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: x.cd.CONSOLE }, () => C.LI.CONSOLE)
                    .with({ currentProgressingPlatform: x.cd.DESKTOP }, () => C.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: x.cd.CONSOLE
                        },
                        () => C.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: x.cd.DESKTOP
                        },
                        () => C.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: x.cd.CONSOLE
                        },
                        () => C.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: x.cd.DESKTOP
                        },
                        () => C.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (c && l ? C.LI.SELECT : c ? C.LI.CONSOLE : C.LI.DESKTOP)
                    )
                    .exhaustive(),
            [c, l, f, _, n]
        ),
        a,
        i
    ];
}
function ey(e) {
    var t, n;
    let r = er(e),
        i = en(e),
        [a] = eb(e, i),
        o = q(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = s.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !o && u && (d || (f && a === C.LI.DESKTOP)),
        p = (0, O.isWeb)() && _ && !(0, R.Gd)(e),
        h = (0, O.isMac)() && i.taskType === s.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(j.NW.string(j.t.MFGxFB)), p && m.push(j.NW.string(j.t.BV6xDg)), m;
}
function ev(e) {
    var t;
    return null != (t = (0, u.e7)([A.Z], () => A.Z.quests).get(e)) ? t : null;
}
function eO(e) {
    let t = (0, u.e7)([A.Z], () => A.Z.getQuest(e), [e]);
    return a()(null != t, 'Unknown quest ID '.concat(e)), t;
}
function eI(e) {
    let { mode: t, questContent: n, questId: i } = e,
        a = r.useRef(null);
    r.useEffect(() => {
        null != i &&
            a.current !== t &&
            ((0, S.Ic)({
                mode: t,
                prevMode: a.current,
                questContent: n,
                questId: i
            }),
            (a.current = t));
    }, [i, n, t]),
        r.useEffect(() => {
            if (null != i)
                return () => {
                    (0, S.Ic)({
                        mode: null,
                        prevMode: a.current,
                        questContent: n,
                        questId: i
                    });
                };
        }, [i, n]);
}
function eS(e) {
    var t, n;
    let r = (0, u.e7)([m.default], () => m.default.locale),
        i = en(e),
        [a] = eb(e, i),
        o = er(e),
        s = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        l = null != o ? o.percentComplete : i.percentComplete;
    if (s) return j.NW.string(j.t['ij5E//']);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && l > 0) {
        let e = (0, v.T3)(r, l, { roundingMode: 'floor' });
        return j.NW.formatToPlainString(j.t.lVZaXF, { percent: e });
    }
    return a === C.LI.SELECT ? j.NW.string(j.t.EMrUHR) : (0, R.$J)(e) ? j.NW.string(j.t.mOrpXF) : j.NW.string(j.t['7e5k7O']);
}
function eT(e, t, n) {
    var i;
    let a = Q(r.useMemo(() => L.r.build(e.config).rewardsExpireAt, [e.config])),
        o = en(e),
        s = er(e),
        l = (null == (i = e.userStatus) ? void 0 : i.completedAt) != null,
        c = ee(e),
        u = (0, w.DD)({
            quest: e,
            location: x.dr.QUESTS_BAR,
            questContent: C.jn.QUEST_BAR_V2,
            taskDetails: o
        }),
        d = null != s ? s.percentComplete : o.percentComplete;
    if (l) return j.NW.formatToPlainString(j.t.APddvL, { expirationDate: a });
    if (t)
        if (n === C.LI.SELECT) return j.NW.string(j.t.sWUpNz);
        else return u;
    if ((0, R.q8)(e)) return j.NW.string(j.t['o+e9ys']);
    if (d > 0)
        if (!c) return j.NW.string(j.t.mOrpXF);
        else
            return (0, R.AV)({
                quest: e,
                taskDetails: o,
                thirdPartyTaskDetails: null != s ? s : void 0
            });
    return j.NW.string(j.t.S6UUc3);
}
function eN(e, t) {
    let n = (0, u.e7)([A.Z], () => A.Z.getQuest(e), [e]),
        i = (0, d.ZP)(),
        a = r.useMemo(() => (null == n ? void 0 : n.config.features.includes(x.S7.QUESTS_CDN)) === !0, [n]);
    return r.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, D.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, c.wj)(i) ? M.BRd.DARK : M.BRd.LIGHT,
                      newCdn: a
                  }),
        [i, t, e, null == n ? void 0 : n.config.cosponsorMetadata, a]
    );
}
function eA(e) {
    let t = L.r.build(e).defaultReward.messages.name,
        n = (0, R.Kr)(e),
        r = (0, R.FX)(e),
        i = (0, R._p)(e),
        a = (0, R.f$)(e),
        o = (0, u.e7)([E.default], () => E.default.getCurrentUser()),
        s = (0, I.I5)(o, k.p9.TIER_2);
    if (null == n) return j.NW.formatToPlainString(j.t.l9uXLy, { decorationName: t });
    let l = j.NW.formatToPlainString(j.t.o97tNj, { rewardName: t }),
        c = j.NW.formatToPlainString(j.t.PkyRZm, {
            rewardName: t,
            expirationDate: r
        }),
        d = j.NW.formatToPlainString(j.t.ie4YKy, {
            rewardName: t,
            duration: n
        }),
        f = j.NW.formatToPlainString(j.t.yCpc0d, {
            duration: n,
            rewardName: t
        }),
        _ = s ? l : d,
        p = s ? c : f,
        h = i ? _ : p;
    return a
        ? h
        : j.NW.formatToPlainString(j.t.tTlItr, {
              duration: n,
              decorationName: t
          });
}
function eC(e) {
    return (0, u.cj)([A.Z], () => (0, R.qe)(e, A.Z));
}
function eR(e) {
    let t = (0, u.e7)([f.ZP], () => f.ZP.getCurrentEmbeddedActivity());
    return {
        launchInGameActivity: r.useCallback(() => {
            null != t && t.applicationId === e.config.application.id ? (0, _.Z)('guild_id' in t.location ? t.location.guild_id : null, t.location) : (0, h.uL)(M.Z5c.ACTIVITY_DETAILS(e.config.application.id));
        }, [t, e.config.application.id])
    };
}
