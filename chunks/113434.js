n.d(t, {
    B4: () => eO,
    B6: () => X,
    Bd: () => eE,
    DU: () => ec,
    Fr: () => el,
    GI: () => ef,
    Gd: () => eA,
    I: () => eg,
    J2: () => V,
    Jf: () => ei,
    KX: () => ep,
    KZ: () => eR,
    OH: () => eh,
    Qy: () => eC,
    Rf: () => er,
    _Q: () => em,
    _s: () => e_,
    bA: () => K,
    e5: () => Y,
    eN: () => z,
    eQ: () => eT,
    iO: () => es,
    kJ: () => eu,
    me: () => ey,
    pe: () => J,
    qI: () => eS,
    qb: () => ev,
    sf: () => eI,
    t5: () => ea,
    tP: () => Q,
    uA: () => eo,
    vf: () => eN,
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
    c = n(846519),
    u = n(780384),
    d = n(442837),
    f = n(410030),
    _ = n(317381),
    p = n(197386),
    h = n(583434),
    m = n(703656),
    g = n(706454),
    E = n(553795),
    b = n(594174),
    y = n(70956),
    v = n(63063),
    O = n(930153),
    I = n(358085),
    S = n(74538),
    T = n(617136),
    N = n(915750),
    A = n(272008),
    C = n(569984),
    R = n(497505),
    P = n(918701),
    w = n(977156),
    D = n(373370),
    L = n(475595),
    x = n(566078),
    M = n(46140),
    k = n(981631),
    j = n(474936),
    U = n(388032);
let G = -1,
    B = 1;
function V() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = r.useState(!1),
        i = (0, d.Wu)([C.Z], () => [...C.Z.quests.values()]),
        o = (0, d.Wu)([C.Z], () => [...C.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: s } = (0, d.cj)([C.Z], () => ({
            isFetchingCurrentQuests: C.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: C.Z.lastFetchedCurrentQuests
        })),
        l = (0, w.cB)({ location: M.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            'cache-only' !== e.fetchPolicy && (('cache-and-network' !== e.fetchPolicy && ('cache-or-network' !== e.fetchPolicy || 0 !== s)) || !l || t || a || (n(!0), (0, A.xw)(), (0, A.w)(R.Ok.DESKTOP_ACCOUNT_PANEL_AREA)));
        }, [e.fetchPolicy, l, t, a, s]),
        {
            quests: i,
            excludedQuests: o,
            isFetchingCurrentQuests: a
        }
    );
}
function F(e) {
    return e.sort((e, t) => {
        var n, r, i, o, a, s;
        let l = !(0, P.zi)(e),
            c = !(0, P.zi)(t),
            u = (null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null,
            d = (null == (r = t.userStatus) ? void 0 : r.enrolledAt) != null;
        return l !== c ? (l ? G : B) : u !== d ? (u ? G : B) : l && c ? Z(null == (a = e.config) ? void 0 : a.expiresAt, null == (s = t.config) ? void 0 : s.expiresAt, 1) : Z(null == (i = e.config) ? void 0 : i.expiresAt, null == (o = t.config) ? void 0 : o.expiresAt, 0);
    });
}
function Z(e, t, n) {
    let r = 0 === n ? G : B;
    return e.localeCompare(t) * r;
}
function H(e) {
    let t = r.useRef([]);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (t.current.length > 0 && t.current.length === e.length) return t.current;
        let n = F(e).map((e) => e.id);
        return (t.current = n), n;
    }, [e]);
}
function W(e) {
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
                return i !== ((null == (r = t.userStatus) ? void 0 : r.claimedAt) == null) ? (i ? G : B) : Z(x.r.build(e.config).rewardsExpireAt, x.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var Y = (function (e) {
    return (e.ALL = 'all'), (e.CLAIMED = 'claimed'), e;
})({});
function K(e) {
    let { quests: t, isFetchingCurrentQuests: n } = V({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = H(t),
        o = W(t),
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
function z() {
    let e = r.useRef(!1),
        t = (0, d.Wu)([C.Z], () => Array.from(C.Z.claimedQuests.values())),
        n = (0, d.e7)([C.Z], () => C.Z.isFetchingClaimedQuests);
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
function q() {
    let { quests: e, isFetchingCurrentQuests: t } = V({ fetchPolicy: 'cache-only' }),
        [n, i] = r.useState(() => new Map(e.map((e) => [e.id, (0, P.zi)(e)])));
    return (
        r.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, P.zi)(t)) null != t && (0, P.zi)(t) && i((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new c.V7(),
                        r = () => {
                            let o = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(o, () => {
                                (0, P.zi)(t) ? i((e) => new Map(e).set(t.id, !0)) : r();
                            }),
                                n.push(e);
                        };
                    r();
                }
            return () => {
                for (let e of n) e.stop();
            };
        }, [e, t]),
        n
    );
}
function Q(e) {
    let t = q();
    return r.useMemo(() => {
        var n;
        return null != e && null != (n = t.get(e.id)) && n;
    }, [e, t]);
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, d.e7)([g.default], () => g.default.locale);
    return r.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function J(e) {
    return (0, d.e7)([C.Z], () => C.Z.isProgressingOnDesktop(e.id));
}
function $(e) {
    return r.useMemo(() => (0, P.Bz)(e), [e]);
}
function ee(e) {
    let t = (0, d.e7)([C.Z], () => C.Z.getOptimisticProgress(e.id, s.X.WATCH_VIDEO));
    return r.useMemo(() => (0, P.BM)(e), [e, t]);
}
function et(e) {
    let t = J(e),
        n = $(e),
        r = ee(e);
    return t || n || r;
}
let en = 1,
    er = (e) => {
        let t = r.useCallback(() => (0, P.il)(e), [e]),
            [n, i] = r.useState(t()),
            o = r.useCallback(() => i(t()), [t]),
            a = et(e);
        return (
            r.useEffect(() => {
                var t, n, r;
                if ((null == (t = e.userStatus) ? void 0 : t.enrolledAt) == null || (null == (n = e.userStatus) ? void 0 : n.completedAt) != null || (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null || !a) return void o();
                let i = window.setInterval(() => {
                    o();
                }, y.Z.Millis.SECOND * en);
                return () => {
                    clearInterval(i), o();
                };
            }, [e, a, o]),
            n
        );
    };
function ei(e) {
    return r.useMemo(() => (0, P.b7)(e), [e]);
}
let eo = (e) => {
    let { quest: t, questContent: n } = e,
        r = e_({ quest: t }),
        i = (0, N.WD)();
    return () => {
        r
            ? (0, P.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: T.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == i ? void 0 : i.getId()
                  }
              )
            : (0, P.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: T.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
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
    if ((0, P.$J)(e) && !(0, P.Nj)({ quest: e }))
        return U.NW.format(U.t['l4S+cX'], {
            minutes: r,
            onClick: o,
            gameTitle: x.r.build(e.config).application.name
        });
    if ((0, P.$J)(e))
        return U.NW.format(U.t.Ajlcd3, {
            minutes: r,
            onClick: o,
            gameTitle: x.r.build(e.config).application.name
        });
    if ((0, P.q8)(e)) {
        var a;
        let t = null == (a = e.config.videoMetadata) ? void 0 : a.messages.videoTitle;
        return null == t ? U.NW.string(U.t['o+e9ys']) : U.NW.formatToPlainString(U.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != i) return i.title;
    if ((0, P.pO)(e) && (0, P.KM)(e)) return U.NW.format(U.t['1NaRSk'], { minutes: r });
    let s = U.t['6zWtV1'];
    return (
        (0, P.Nj)({ quest: e }) && (s = U.t['wmOh/v']),
        U.NW.format(s, {
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function es() {
    let { quests: e, isFetchingCurrentQuests: t } = V({ fetchPolicy: 'cache-or-network' }),
        n = q();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, P.vR)(t, R.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                o = (0, P.zE)(t.userStatus, R.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !o) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function el(e) {
    let t = (0, d.e7)([C.Z], () => C.Z.quests),
        n = r.useMemo(() => (0, P.Jg)(t, e), [e, t]);
    return Q(n) ? null : n;
}
function ec(e) {
    var t;
    let n = (0, P.Xv)(e),
        { product: r, isFetching: i } = (0, h.T)(x.r.build(e).defaultReward.skuId);
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
    let { fetching: e, accounts: t } = (0, d.cj)([E.Z], () => ({
            fetching: E.Z.isFetching(),
            accounts: E.Z.getAccounts()
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: o
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === k.ABu.XBOX),
                r = e.filter((e) => e.type === k.ABu.PLAYSTATION),
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
            [c, u] = r.useState(!1),
            f = (0, d.e7)([E.Z], () => E.Z.getAccounts());
        return (
            r.useEffect(() => {
                s((e) => e.filter((e) => e.type !== l.K.EXPIRED_CREDENTIAL));
            }, [f]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (c) return;
                    null == i || i(), u(!0);
                    let e = null;
                    try {
                        (e = await (0, A.CS)(t, n)), s(e.errorHints);
                    } finally {
                        var r;
                        u(!1), null == o || o(null != (r = null == e ? void 0 : e.errorHints) ? r : []);
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
        return (0, P.$J)(t) && i && !r;
    },
    ep = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ed(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            o = v.Z.getArticleURL(k.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = v.Z.getArticleURL(k.BhN.QUEST_HOW_TO_XBOX),
            s = U.NW.format(U.t.beN4DA, {
                psHelpdeskArticle: o,
                xboxHelpdeskArticle: a
            }),
            l = U.NW.format(U.t.HVS7np, { helpdeskArticle: r ? o : a });
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
    let t = (0, d.e7)([g.default], () => g.default.locale),
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
        i = (0, P.b7)(e),
        o = (0, D.DD)({
            quest: e,
            taskDetails: r,
            location: M.dr.QUEST_HOME_DESKTOP,
            questContent: R.jn.QUEST_HOME_DESKTOP
        }),
        a = (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
        s = X(null == (n = e.userStatus) ? void 0 : n.claimedAt);
    return a ? U.NW.formatToPlainString(U.t.lOVr0N, { claimDate: s }) : null != i ? i.description : null != o ? o : null;
}
function eb(e) {
    return [(0, d.e7)([C.Z], () => C.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, A.OR)(e, t), [e])];
}
function ey(e, t) {
    let [n, i] = eb(e.id),
        o = r.useMemo(() => (0, P.yH)(e), [e]),
        l = o.includes(M.cd.DESKTOP),
        c = o.includes(M.cd.CONSOLE),
        u = J(e),
        d = $(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: s.X.PLAY_ON_DESKTOP }, () => M.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ON_DESKTOP_V2 }, () => M.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ACTIVITY }, () => M.cd.DESKTOP)
                    .with({ taskType: s.X.WATCH_VIDEO }, () => M.cd.DESKTOP)
                    .with({ taskType: s.X.STREAM_ON_DESKTOP }, () => M.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ON_XBOX }, () => M.cd.CONSOLE)
                    .with({ taskType: s.X.PLAY_ON_PLAYSTATION }, () => M.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        _ = u ? M.cd.DESKTOP : d ? M.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: _,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: M.cd.CONSOLE }, () => R.LI.CONSOLE)
                    .with({ currentProgressingPlatform: M.cd.DESKTOP }, () => R.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: M.cd.CONSOLE
                        },
                        () => R.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: M.cd.DESKTOP
                        },
                        () => R.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: M.cd.CONSOLE
                        },
                        () => R.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: M.cd.DESKTOP
                        },
                        () => R.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (c && l ? R.LI.SELECT : c ? R.LI.CONSOLE : R.LI.DESKTOP)
                    )
                    .exhaustive(),
            [c, l, f, _, n]
        ),
        o,
        i
    ];
}
function ev(e) {
    var t, n;
    let r = ei(e),
        i = er(e),
        [o] = ey(e, i),
        a = Q(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = s.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !a && u && (d || (f && o === R.LI.DESKTOP)),
        p = (0, I.isWeb)() && _ && !(0, P.Gd)(e),
        h = (0, I.isMac)() && i.taskType === s.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(U.NW.string(U.t.MFGxFB)), p && m.push(U.NW.string(U.t.BV6xDg)), m;
}
function eO(e) {
    var t;
    return null != (t = (0, d.e7)([C.Z], () => C.Z.quests).get(e)) ? t : null;
}
function eI(e) {
    let t = (0, d.e7)([C.Z], () => C.Z.getQuest(e), [e]);
    return o()(null != t, 'Unknown quest ID '.concat(e)), t;
}
function eS(e) {
    let { mode: t, questContent: n, questId: i } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != i &&
            o.current !== t &&
            ((0, T.Ic)({
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
                    (0, T.Ic)({
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
    let r = (0, d.e7)([g.default], () => g.default.locale),
        i = er(e),
        [o] = ey(e, i),
        a = ei(e),
        s = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        l = null != a ? a.percentComplete : i.percentComplete;
    if (s) return U.NW.string(U.t['ij5E//']);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && l > 0) {
        let e = (0, O.T3)(r, l, { roundingMode: 'floor' });
        return U.NW.formatToPlainString(U.t.lVZaXF, { percent: e });
    }
    return o === R.LI.SELECT ? U.NW.string(U.t.EMrUHR) : (0, P.$J)(e) ? U.NW.string(U.t.mOrpXF) : U.NW.string(U.t['7e5k7O']);
}
function eN(e, t, n) {
    var i;
    let o = X(r.useMemo(() => x.r.build(e.config).rewardsExpireAt, [e.config])),
        a = er(e),
        s = ei(e),
        l = (null == (i = e.userStatus) ? void 0 : i.completedAt) != null,
        c = et(e),
        u = (0, D.DD)({
            quest: e,
            location: M.dr.QUESTS_BAR,
            questContent: R.jn.QUEST_BAR_V2,
            taskDetails: a
        }),
        d = null != s ? s.percentComplete : a.percentComplete;
    if (l) return U.NW.formatToPlainString(U.t.APddvL, { expirationDate: o });
    if (t)
        if (n === R.LI.SELECT) return U.NW.string(U.t.sWUpNz);
        else return u;
    if ((0, P.q8)(e)) return U.NW.string(U.t['o+e9ys']);
    if (d > 0)
        if (!c) return U.NW.string(U.t.mOrpXF);
        else
            return (0, P.AV)({
                quest: e,
                taskDetails: a,
                thirdPartyTaskDetails: null != s ? s : void 0
            });
    return U.NW.string(U.t.S6UUc3);
}
function eA(e, t) {
    let n = (0, d.e7)([C.Z], () => C.Z.getQuest(e), [e]),
        i = (0, f.ZP)(),
        o = r.useMemo(() => (null == n ? void 0 : n.config.features.includes(M.S7.QUESTS_CDN)) === !0, [n]);
    return r.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, L.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, u.wj)(i) ? k.BRd.DARK : k.BRd.LIGHT,
                      newCdn: o
                  }),
        [i, t, e, null == n ? void 0 : n.config.cosponsorMetadata, o]
    );
}
function eC(e) {
    let t = x.r.build(e).defaultReward.messages.name,
        n = (0, P.Kr)(e),
        r = (0, P.FX)(e),
        i = (0, P._p)(e),
        o = (0, P.f$)(e),
        a = (0, d.e7)([b.default], () => b.default.getCurrentUser()),
        s = (0, S.I5)(a, j.p9.TIER_2);
    if (null == n) return U.NW.formatToPlainString(U.t.l9uXLy, { decorationName: t });
    let l = U.NW.formatToPlainString(U.t.o97tNj, { rewardName: t }),
        c = U.NW.formatToPlainString(U.t.PkyRZm, {
            rewardName: t,
            expirationDate: r
        }),
        u = U.NW.formatToPlainString(U.t.ie4YKy, {
            rewardName: t,
            duration: n
        }),
        f = U.NW.formatToPlainString(U.t.yCpc0d, {
            duration: n,
            rewardName: t
        }),
        _ = s ? l : u,
        p = s ? c : f,
        h = i ? _ : p;
    return o
        ? h
        : U.NW.formatToPlainString(U.t.tTlItr, {
              duration: n,
              decorationName: t
          });
}
function eR(e) {
    return (0, d.cj)([C.Z], () => (0, P.qe)(e, C.Z));
}
function eP(e) {
    let t = (0, d.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity());
    return {
        launchInGameActivity: r.useCallback(() => {
            null != t && t.applicationId === e.config.application.id ? (0, p.Z)('guild_id' in t.location ? t.location.guild_id : null, t.location) : (0, m.uL)(k.Z5c.ACTIVITY_DETAILS(e.config.application.id));
        }, [t, e.config.application.id])
    };
}
