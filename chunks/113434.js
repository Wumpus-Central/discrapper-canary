n.d(t, {
    B4: () => ev,
    B6: () => X,
    Bd: () => eE,
    DU: () => ec,
    GI: () => ef,
    Gd: () => eN,
    I: () => eg,
    J2: () => B,
    Jf: () => ei,
    KX: () => ep,
    KZ: () => eR,
    OH: () => eh,
    Qy: () => eC,
    Rf: () => er,
    Yj: () => Q,
    _Q: () => em,
    _s: () => e_,
    bA: () => W,
    e5: () => Y,
    eN: () => K,
    eQ: () => eT,
    fN: () => el,
    iO: () => es,
    kJ: () => eu,
    me: () => ey,
    pe: () => J,
    qI: () => eS,
    qb: () => eO,
    sf: () => eI,
    t5: () => ea,
    tP: () => q,
    uA: () => eo,
    vf: () => eA,
    z: () => et,
    z6: () => ed,
    zB: () => eP
}),
    n(388685),
    n(642613),
    n(539854),
    n(953529),
    n(314940);
var r = n(192379),
    i = n(512722),
    o = n.n(i),
    a = n(278074),
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
    O = n(930153),
    v = n(358085),
    I = n(74538),
    S = n(617136),
    T = n(915750),
    A = n(272008),
    N = n(569984),
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
        i = (0, u.Wu)([N.Z], () => [...N.Z.quests.values()]),
        o = (0, u.Wu)([N.Z], () => [...N.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: s } = (0, u.cj)([N.Z], () => ({
            isFetchingCurrentQuests: N.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: N.Z.lastFetchedCurrentQuests
        })),
        l = (0, P.cB)({ location: x.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            'cache-only' !== e.fetchPolicy && (('cache-and-network' !== e.fetchPolicy && ('cache-or-network' !== e.fetchPolicy || 0 !== s)) || !l || t || a || (n(!0), (0, A.xw)(), (0, A.w)(C.Ok.DESKTOP_ACCOUNT_PANEL_AREA)));
        }, [e.fetchPolicy, l, t, a, s]),
        {
            quests: i,
            excludedQuests: o,
            isFetchingCurrentQuests: a
        }
    );
}
function V(e) {
    return e.sort((e, t) => {
        var n, r, i, o, a, s;
        let l = !(0, R.zi)(e),
            c = !(0, R.zi)(t),
            u = (null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null,
            d = (null == (r = t.userStatus) ? void 0 : r.enrolledAt) != null;
        return l !== c ? (l ? U : G) : u !== d ? (u ? U : G) : l && c ? F(null == (a = e.config) ? void 0 : a.expiresAt, null == (s = t.config) ? void 0 : s.expiresAt, 1) : F(null == (i = e.config) ? void 0 : i.expiresAt, null == (o = t.config) ? void 0 : o.expiresAt, 0);
    });
}
function F(e, t, n) {
    let r = 0 === n ? U : G;
    return e.localeCompare(t) * r;
}
function Z(e) {
    let t = r.useRef([]);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (t.current.length > 0 && t.current.length === e.length) return t.current;
        let n = V(e).map((e) => e.id);
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
                return i !== ((null == (r = t.userStatus) ? void 0 : r.claimedAt) == null) ? (i ? U : G) : F(L.r.build(e.config).rewardsExpireAt, L.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var Y = (function (e) {
    return (e.ALL = 'all'), (e.CLAIMED = 'claimed'), e;
})({});
function W(e) {
    let { quests: t, isFetchingCurrentQuests: n } = B({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = Z(t),
        o = H(t),
        a = [],
        s = [];
    for (let t of (a = 'all' === e ? i : o)) {
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
        t = (0, u.Wu)([N.Z], () => Array.from(N.Z.claimedQuests.values())),
        n = (0, u.e7)([N.Z], () => N.Z.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, A.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n
        }
    );
}
function z() {
    return (0, u.e7)([N.Z], () => N.Z.getExpiredQuestsMap());
}
function q(e) {
    return (0, u.e7)([N.Z], () => null != e && N.Z.isQuestExpired(e.id), [e]);
}
function Q(e) {
    return r.useMemo(() => ((0, R.q8)(e) || (0, R.pO)(e) || (0, R.Vl)(e) ? j.intl.string(j.t.hvVgAQ) : j.intl.string(j.t.lwQdjI)), [e]);
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, u.e7)([m.default], () => m.default.locale);
    return r.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function J(e) {
    return (0, u.e7)([N.Z], () => N.Z.isProgressingOnDesktop(e.id));
}
function $(e) {
    return r.useMemo(() => (0, R.Bz)(e), [e]);
}
function ee(e) {
    let t = (0, u.e7)([N.Z], () => N.Z.getOptimisticProgress(e.id, s.X.WATCH_VIDEO));
    return r.useMemo(() => (0, R.BM)(e), [e, t]);
}
function et(e) {
    let t = J(e),
        n = $(e),
        r = ee(e);
    return t || n || r;
}
let en = 1,
    er = (e) => {
        let t = r.useCallback(() => (0, R.il)(e), [e]),
            [n, i] = r.useState(t()),
            o = r.useCallback(() => i(t()), [t]),
            a = et(e);
        return (
            r.useEffect(() => {
                var t, n, r;
                if ((null == (t = e.userStatus) ? void 0 : t.enrolledAt) == null || (null == (n = e.userStatus) ? void 0 : n.completedAt) != null || (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null || !a) return void o();
                let i = window.setInterval(() => {
                    o();
                }, b.Z.Millis.SECOND * en);
                return () => {
                    clearInterval(i), o();
                };
            }, [e, a, o]),
            n
        );
    };
function ei(e) {
    return r.useMemo(() => (0, R.b7)(e), [e]);
}
let eo = (e) => {
    let { quest: t, questContent: n } = e,
        r = e_({ quest: t }),
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
    let { targetMinutes: r } = er(e),
        i = ei(e),
        o = eo({
            quest: e,
            questContent: n
        });
    if ((0, R.$J)(e) && !(0, R.Nj)({ quest: e }))
        return j.intl.format(j.t['l4S+cX'], {
            minutes: r,
            onClick: o,
            gameTitle: L.r.build(e.config).application.name
        });
    if ((0, R.$J)(e))
        return j.intl.format(j.t.Ajlcd3, {
            minutes: r,
            onClick: o,
            gameTitle: L.r.build(e.config).application.name
        });
    if ((0, R.q8)(e)) {
        var a;
        let t = null == (a = e.config.videoMetadata) ? void 0 : a.messages.videoTitle;
        return null == t ? j.intl.string(j.t['o+e9ys']) : j.intl.formatToPlainString(j.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != i) return i.title;
    if ((0, R.pO)(e) && (0, R.KM)(e)) return j.intl.format(j.t['1NaRSk'], { minutes: r });
    let s = j.t['6zWtV1'];
    return (
        (0, R.Nj)({ quest: e }) && (s = j.t['wmOh/v']),
        j.intl.format(s, {
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function es() {
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
                o = (0, R.zE)(t.userStatus, C.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !o) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function el(e) {
    let t = (0, u.e7)([N.Z], () => N.Z.quests),
        n = r.useMemo(() => {
            let n = (0, R.MM)(t, x.tt);
            return (0, R.Jg)(n, e);
        }, [e, t]);
    return q(n) ? null : n;
}
function ec(e) {
    var t;
    let n = (0, R.Xv)(e),
        { product: r, isFetching: i } = (0, p.T)(L.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r || null == (t = r.items) ? void 0 : t[0],
        isFetching: i
    };
}
function eu(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, A.Wf)(e),
            handleProgress: (t) => (0, A.Wf)(e, t),
            handleResetStatusClick: () => (0, A.eT)(e),
            handleResetDismissibilityClick: () => (0, A.T0)(e),
            handleOverrideDeliveryClick: () => (0, A.EW)(e)
        }),
        [e]
    );
}
function ed() {
    let { fetching: e, accounts: t } = (0, u.cj)([g.Z], () => ({
            fetching: g.Z.isFetching(),
            accounts: g.Z.getAccounts()
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: o
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
        xboxAndPlaystationAccounts: o
    };
}
let ef = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: o } = e,
            [a, s] = r.useState([]),
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
                        (e = await (0, A.CS)(t, n)), s(e.errorHints);
                    } finally {
                        var r;
                        d(!1), null == o || o(null != (r = null == e ? void 0 : e.errorHints) ? r : []);
                    }
                }, [c, i, o, n, t]),
                startingConsoleQuest: c,
                errorHints: a
            }
        );
    },
    e_ = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ed(),
            r = et(t),
            i = 0 === n.length;
        return (0, R.$J)(t) && i && !r;
    },
    ep = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ed(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            o = y.Z.getArticleURL(M.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = y.Z.getArticleURL(M.BhN.QUEST_HOW_TO_XBOX),
            s = j.intl.format(j.t.beN4DA, {
                psHelpdeskArticle: o,
                xboxHelpdeskArticle: a
            }),
            l = j.intl.format(j.t.HVS7np, { helpdeskArticle: r ? o : a });
        return {
            message: i ? l : s,
            xboxURL: a,
            playstationURL: o
        };
    };
var eh = (function (e) {
    return (e[(e.UNACCEPTED = 0)] = 'UNACCEPTED'), (e[(e.ACCEPTED = 1)] = 'ACCEPTED'), (e[(e.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CLAIMED = 4)] = 'CLAIMED'), e;
})({});
function em(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        o = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        a = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = er(e).percentComplete > 0;
    return a ? 4 : o ? 3 : s ? 2 : 1 * !!i;
}
function eg(e) {
    let t = (0, u.e7)([m.default], () => m.default.locale),
        { percentComplete: n } = er(e),
        r = ei(e),
        i = null != r ? r.percentComplete : n,
        o = 100 * i,
        a = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, O.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: o,
        completedRatioDisplay: a
    };
}
function eE(e) {
    var t, n;
    let r = er(e),
        i = (0, R.b7)(e),
        o = (0, w.DD)({
            quest: e,
            taskDetails: r,
            location: x.dr.QUEST_HOME_DESKTOP,
            questContent: C.jn.QUEST_HOME_DESKTOP
        }),
        a = (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
        s = X(null == (n = e.userStatus) ? void 0 : n.claimedAt);
    return a ? j.intl.formatToPlainString(j.t.lOVr0N, { claimDate: s }) : null != i ? i.description : null != o ? o : null;
}
function eb(e) {
    return [(0, u.e7)([N.Z], () => N.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, A.OR)(e, t), [e])];
}
function ey(e, t) {
    let [n, i] = eb(e.id),
        o = r.useMemo(() => (0, R.yH)(e), [e]),
        l = o.includes(x.cd.DESKTOP),
        c = o.includes(x.cd.CONSOLE),
        u = J(e),
        d = $(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
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
                (0, a.EQ)({
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
        o,
        i
    ];
}
function eO(e) {
    var t, n;
    let r = ei(e),
        i = er(e),
        [o] = ey(e, i),
        a = q(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = s.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !a && u && (d || (f && o === C.LI.DESKTOP)),
        p = (0, v.isWeb)() && _ && !(0, R.Gd)(e),
        h = (0, v.isMac)() && i.taskType === s.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(j.intl.string(j.t.MFGxFB)), p && m.push(j.intl.string(j.t.BV6xDg)), m;
}
function ev(e) {
    var t;
    return null != (t = (0, u.e7)([N.Z], () => N.Z.quests).get(e)) ? t : null;
}
function eI(e) {
    let t = (0, u.e7)([N.Z], () => N.Z.getQuest(e), [e]);
    return o()(null != t, 'Unknown quest ID '.concat(e)), t;
}
function eS(e) {
    let { mode: t, questContent: n, questId: i } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != i &&
            o.current !== t &&
            ((0, S.Ic)({
                mode: t,
                prevMode: o.current,
                questContent: n,
                questId: i
            }),
            (o.current = t));
    }, [i, n, t]),
        r.useEffect(() => {
            if (null != i)
                return () => {
                    (0, S.Ic)({
                        mode: null,
                        prevMode: o.current,
                        questContent: n,
                        questId: i
                    });
                };
        }, [i, n]);
}
function eT(e) {
    var t, n;
    let r = (0, u.e7)([m.default], () => m.default.locale),
        i = er(e),
        [o] = ey(e, i),
        a = ei(e),
        s = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        l = null != a ? a.percentComplete : i.percentComplete;
    if (s) return j.intl.string(j.t['ij5E//']);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && l > 0) {
        let e = (0, O.T3)(r, l, { roundingMode: 'floor' });
        return j.intl.formatToPlainString(j.t.lVZaXF, { percent: e });
    }
    return o === C.LI.SELECT ? j.intl.string(j.t.EMrUHR) : (0, R.$J)(e) ? j.intl.string(j.t.mOrpXF) : j.intl.string(j.t['7e5k7O']);
}
function eA(e, t, n) {
    var i;
    let o = X(r.useMemo(() => L.r.build(e.config).rewardsExpireAt, [e.config])),
        a = er(e),
        s = ei(e),
        l = (null == (i = e.userStatus) ? void 0 : i.completedAt) != null,
        c = et(e),
        u = (0, w.DD)({
            quest: e,
            location: x.dr.QUESTS_BAR,
            questContent: C.jn.QUEST_BAR_V2,
            taskDetails: a
        }),
        d = null != s ? s.percentComplete : a.percentComplete;
    if (l) return j.intl.formatToPlainString(j.t.APddvL, { expirationDate: o });
    if (t)
        if (n === C.LI.SELECT) return j.intl.string(j.t.sWUpNz);
        else return u;
    if ((0, R.q8)(e)) return j.intl.string(j.t['o+e9ys']);
    if (d > 0)
        if (!c) return j.intl.string(j.t.mOrpXF);
        else
            return (0, R.AV)({
                quest: e,
                taskDetails: a,
                thirdPartyTaskDetails: null != s ? s : void 0
            });
    return j.intl.string(j.t.S6UUc3);
}
function eN(e, t) {
    let n = (0, u.e7)([N.Z], () => N.Z.getQuest(e), [e]),
        i = (0, d.ZP)(),
        o = r.useMemo(() => (null == n ? void 0 : n.config.features.includes(x.S7.QUESTS_CDN)) === !0, [n]);
    return r.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, D.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, c.wj)(i) ? M.BRd.DARK : M.BRd.LIGHT,
                      newCdn: o
                  }),
        [i, t, e, null == n ? void 0 : n.config.cosponsorMetadata, o]
    );
}
function eC(e) {
    let t = L.r.build(e).defaultReward.messages.name,
        n = (0, R.Kr)(e),
        r = (0, R.FX)(e),
        i = (0, R._p)(e),
        o = (0, R.f$)(e),
        a = (0, u.e7)([E.default], () => E.default.getCurrentUser()),
        s = (0, I.I5)(a, k.p9.TIER_2);
    if (null == n) return j.intl.formatToPlainString(j.t.l9uXLy, { decorationName: t });
    let l = j.intl.formatToPlainString(j.t.o97tNj, { rewardName: t }),
        c = j.intl.formatToPlainString(j.t.PkyRZm, {
            rewardName: t,
            expirationDate: r
        }),
        d = j.intl.formatToPlainString(j.t.ie4YKy, {
            rewardName: t,
            duration: n
        }),
        f = j.intl.formatToPlainString(j.t.yCpc0d, {
            duration: n,
            rewardName: t
        }),
        _ = s ? l : d,
        p = s ? c : f,
        h = i ? _ : p;
    return o
        ? h
        : j.intl.formatToPlainString(j.t.tTlItr, {
              duration: n,
              decorationName: t
          });
}
function eR(e) {
    return (0, u.cj)([N.Z], () => (0, R.qe)(e, N.Z));
}
function eP(e) {
    let t = (0, u.e7)([f.ZP], () => f.ZP.getCurrentEmbeddedActivity());
    return {
        launchInGameActivity: r.useCallback(() => {
            null != t && t.applicationId === e.config.application.id ? (0, _.Z)('guild_id' in t.location ? t.location.guild_id : null, t.location) : (0, h.uL)(M.Z5c.ACTIVITY_DETAILS(e.config.application.id));
        }, [t, e.config.application.id])
    };
}
