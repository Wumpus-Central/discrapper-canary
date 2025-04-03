n.d(t, {
    B4: () => eb,
    B6: () => z,
    Bd: () => eh,
    DU: () => ea,
    Fr: () => eo,
    GI: () => ec,
    Gd: () => eS,
    I: () => ep,
    J2: () => U,
    Jf: () => et,
    KX: () => ed,
    KZ: () => eN,
    OH: () => ef,
    Qy: () => eT,
    Rf: () => ee,
    _Q: () => e_,
    _s: () => eu,
    bA: () => H,
    e5: () => Z,
    eN: () => W,
    eQ: () => eO,
    iO: () => ei,
    kJ: () => es,
    me: () => eg,
    pe: () => q,
    qI: () => ev,
    qb: () => eE,
    sf: () => ey,
    t5: () => er,
    tP: () => K,
    uA: () => en,
    vf: () => eI,
    z: () => J,
    z6: () => el
}),
    n(47120),
    n(230036),
    n(653041),
    n(266796),
    n(627341);
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
    _ = n(583434),
    p = n(706454),
    h = n(553795),
    m = n(594174),
    g = n(70956),
    E = n(63063),
    b = n(930153),
    y = n(358085),
    v = n(74538),
    O = n(617136),
    I = n(915750),
    S = n(272008),
    T = n(569984),
    N = n(497505),
    A = n(918701),
    C = n(977156),
    R = n(373370),
    P = n(475595),
    w = n(566078),
    D = n(46140),
    L = n(981631),
    x = n(474936),
    M = n(388032);
let k = -1,
    j = 1;
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = r.useState(!1),
        i = (0, d.Wu)([T.Z], () => [...T.Z.quests.values()]),
        o = (0, d.Wu)([T.Z], () => [...T.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: s } = (0, d.cj)([T.Z], () => ({
            isFetchingCurrentQuests: T.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: T.Z.lastFetchedCurrentQuests
        })),
        l = (0, C.cB)({ location: D.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            'cache-only' !== e.fetchPolicy && (('cache-and-network' !== e.fetchPolicy && ('cache-or-network' !== e.fetchPolicy || 0 !== s)) || !l || t || a || (n(!0), (0, S.xw)(), (0, S.w)(N.Ok.DESKTOP_ACCOUNT_PANEL_AREA)));
        }, [e.fetchPolicy, l, t, a, s]),
        {
            quests: i,
            excludedQuests: o,
            isFetchingCurrentQuests: a
        }
    );
}
function G(e) {
    return e.sort((e, t) => {
        var n, r, i, o, a, s;
        let l = !(0, A.zi)(e),
            c = !(0, A.zi)(t),
            u = (null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null,
            d = (null == (r = t.userStatus) ? void 0 : r.enrolledAt) != null;
        return l !== c ? (l ? k : j) : u !== d ? (u ? k : j) : l && c ? B(null == (a = e.config) ? void 0 : a.expiresAt, null == (s = t.config) ? void 0 : s.expiresAt, 1) : B(null == (i = e.config) ? void 0 : i.expiresAt, null == (o = t.config) ? void 0 : o.expiresAt, 0);
    });
}
function B(e, t, n) {
    let r = 0 === n ? k : j;
    return e.localeCompare(t) * r;
}
function F(e) {
    let t = r.useRef([]);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (t.current.length > 0 && t.current.length === e.length) return t.current;
        let n = G(e).map((e) => e.id);
        return (t.current = n), n;
    }, [e]);
}
function V(e) {
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
                return i !== ((null == (r = t.userStatus) ? void 0 : r.claimedAt) == null) ? (i ? k : j) : B(w.r.build(e.config).rewardsExpireAt, w.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var Z = (function (e) {
    return (e.ALL = 'all'), (e.CLAIMED = 'claimed'), e;
})({});
function H(e) {
    let { quests: t, isFetchingCurrentQuests: n } = U({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = F(t),
        o = V(t),
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
function W() {
    let e = r.useRef(!1),
        t = (0, d.Wu)([T.Z], () => Array.from(T.Z.claimedQuests.values())),
        n = (0, d.e7)([T.Z], () => T.Z.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, S.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n
        }
    );
}
function Y() {
    let { quests: e, isFetchingCurrentQuests: t } = U({ fetchPolicy: 'cache-only' }),
        [n, i] = r.useState(() => new Map(e.map((e) => [e.id, (0, A.zi)(e)])));
    return (
        r.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, A.zi)(t)) null != t && (0, A.zi)(t) && i((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new c.V7(),
                        r = () => {
                            let o = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(o, () => {
                                (0, A.zi)(t) ? i((e) => new Map(e).set(t.id, !0)) : r();
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
function K(e) {
    let t = Y();
    return r.useMemo(() => {
        var n;
        return null != e && null != (n = t.get(e.id)) && n;
    }, [e, t]);
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, d.e7)([p.default], () => p.default.locale);
    return r.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function q(e) {
    return (0, d.e7)([T.Z], () => T.Z.isProgressingOnDesktop(e.id));
}
function Q(e) {
    return r.useMemo(() => (0, A.Bz)(e), [e]);
}
function X(e) {
    let t = (0, d.e7)([T.Z], () => T.Z.getOptimisticProgress(e.id, s.X.WATCH_VIDEO));
    return r.useMemo(() => (0, A.BM)(e), [e, t]);
}
function J(e) {
    let t = q(e),
        n = Q(e),
        r = X(e);
    return t || n || r;
}
let $ = 1,
    ee = (e) => {
        let t = r.useCallback(() => (0, A.il)(e), [e]),
            [n, i] = r.useState(t()),
            o = r.useCallback(() => i(t()), [t]),
            a = J(e);
        return (
            r.useEffect(() => {
                var t, n, r;
                if ((null == (t = e.userStatus) ? void 0 : t.enrolledAt) == null || (null == (n = e.userStatus) ? void 0 : n.completedAt) != null || (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null || !a) return void o();
                let i = window.setInterval(() => {
                    o();
                }, g.Z.Millis.SECOND * $);
                return () => {
                    clearInterval(i), o();
                };
            }, [e, a, o]),
            n
        );
    };
function et(e) {
    return r.useMemo(() => (0, A.b7)(e), [e]);
}
let en = (e) => {
    let { quest: t, questContent: n } = e,
        r = eu({ quest: t }),
        i = (0, I.WD)();
    return () => {
        r
            ? (0, A.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: O.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == i ? void 0 : i.getId()
                  }
              )
            : (0, A.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: O.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == i ? void 0 : i.getId()
                  }
              );
    };
};
function er(e, t, n) {
    let { targetMinutes: r } = ee(e),
        i = et(e),
        o = en({
            quest: e,
            questContent: n
        });
    if ((0, A.$J)(e) && !(0, A.Nj)({ quest: e }))
        return M.NW.format(M.t['l4S+cX'], {
            minutes: r,
            onClick: o,
            gameTitle: w.r.build(e.config).application.name
        });
    if ((0, A.$J)(e))
        return M.NW.format(M.t.Ajlcd3, {
            minutes: r,
            onClick: o,
            gameTitle: w.r.build(e.config).application.name
        });
    if ((0, A.q8)(e)) {
        var a;
        let t = null == (a = e.config.videoMetadata) ? void 0 : a.messages.videoTitle;
        return null == t ? M.NW.string(M.t['o+e9ys']) : M.NW.formatToPlainString(M.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != i) return i.title;
    if ((0, A.pO)(e) && (0, A.KM)(e)) return M.NW.format(M.t['1NaRSk'], { minutes: r });
    let s = M.t['6zWtV1'];
    return (
        (0, A.Nj)({ quest: e }) && (s = M.t['wmOh/v']),
        M.NW.format(s, {
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function ei() {
    let { quests: e, isFetchingCurrentQuests: t } = U({ fetchPolicy: 'cache-or-network' }),
        n = Y();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, A.vR)(t, N.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                o = (0, A.zE)(t.userStatus, N.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !o) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function eo(e) {
    let t = (0, d.e7)([T.Z], () => T.Z.quests),
        n = r.useMemo(() => (0, A.Jg)(t, e), [e, t]);
    return K(n) ? null : n;
}
function ea(e) {
    var t;
    let n = (0, A.Xv)(e),
        { product: r, isFetching: i } = (0, _.T)(w.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r || null == (t = r.items) ? void 0 : t[0],
        isFetching: i
    };
}
function es(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, S.Wf)(e),
            handleProgress: (t) => (0, S.Wf)(e, t),
            handleResetStatusClick: () => (0, S.eT)(e),
            handleResetDismissibilityClick: () => (0, S.T0)(e),
            handleOverrideDeliveryClick: () => (0, S.EW)(e)
        }),
        [e]
    );
}
function el() {
    let { fetching: e, accounts: t } = (0, d.cj)([h.Z], () => ({
            fetching: h.Z.isFetching(),
            accounts: h.Z.getAccounts()
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: o
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === L.ABu.XBOX),
                r = e.filter((e) => e.type === L.ABu.PLAYSTATION),
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
let ec = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: o } = e,
            [a, s] = r.useState([]),
            [c, u] = r.useState(!1),
            f = (0, d.e7)([h.Z], () => h.Z.getAccounts());
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
                        (e = await (0, S.CS)(t, n)), s(e.errorHints);
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
    eu = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = el(),
            r = J(t),
            i = 0 === n.length;
        return (0, A.$J)(t) && i && !r;
    },
    ed = () => {
        let { xboxAccounts: e, playstationAccounts: t } = el(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            o = E.Z.getArticleURL(L.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = E.Z.getArticleURL(L.BhN.QUEST_HOW_TO_XBOX),
            s = M.NW.format(M.t.beN4DA, {
                psHelpdeskArticle: o,
                xboxHelpdeskArticle: a
            }),
            l = M.NW.format(M.t.HVS7np, { helpdeskArticle: r ? o : a });
        return {
            message: i ? l : s,
            xboxURL: a,
            playstationURL: o
        };
    };
var ef = (function (e) {
    return (e[(e.UNACCEPTED = 0)] = 'UNACCEPTED'), (e[(e.ACCEPTED = 1)] = 'ACCEPTED'), (e[(e.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CLAIMED = 4)] = 'CLAIMED'), e;
})({});
function e_(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        o = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        a = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = ee(e).percentComplete > 0;
    return a ? 4 : o ? 3 : s ? 2 : 1 * !!i;
}
function ep(e) {
    let t = (0, d.e7)([p.default], () => p.default.locale),
        { percentComplete: n } = ee(e),
        r = et(e),
        i = null != r ? r.percentComplete : n,
        o = 100 * i,
        a = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, b.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: o,
        completedRatioDisplay: a
    };
}
function eh(e) {
    var t, n;
    let r = ee(e),
        i = (0, A.b7)(e),
        o = (0, R.DD)({
            quest: e,
            taskDetails: r,
            location: D.dr.QUEST_HOME_DESKTOP,
            questContent: N.jn.QUEST_HOME_DESKTOP
        }),
        a = (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
        s = z(null == (n = e.userStatus) ? void 0 : n.claimedAt);
    return a ? M.NW.formatToPlainString(M.t.lOVr0N, { claimDate: s }) : null != i ? i.description : null != o ? o : null;
}
function em(e) {
    return [(0, d.e7)([T.Z], () => T.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, S.OR)(e, t), [e])];
}
function eg(e, t) {
    let [n, i] = em(e.id),
        o = r.useMemo(() => (0, A.yH)(e), [e]),
        l = o.includes(D.cd.DESKTOP),
        c = o.includes(D.cd.CONSOLE),
        u = q(e),
        d = Q(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: s.X.PLAY_ON_DESKTOP }, () => D.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ON_DESKTOP_V2 }, () => D.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ACTIVITY }, () => D.cd.DESKTOP)
                    .with({ taskType: s.X.WATCH_VIDEO }, () => D.cd.DESKTOP)
                    .with({ taskType: s.X.STREAM_ON_DESKTOP }, () => D.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ON_XBOX }, () => D.cd.CONSOLE)
                    .with({ taskType: s.X.PLAY_ON_PLAYSTATION }, () => D.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        _ = u ? D.cd.DESKTOP : d ? D.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: _,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: D.cd.CONSOLE }, () => N.LI.CONSOLE)
                    .with({ currentProgressingPlatform: D.cd.DESKTOP }, () => N.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: D.cd.CONSOLE
                        },
                        () => N.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: D.cd.DESKTOP
                        },
                        () => N.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: D.cd.CONSOLE
                        },
                        () => N.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: D.cd.DESKTOP
                        },
                        () => N.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (c && l ? N.LI.SELECT : c ? N.LI.CONSOLE : N.LI.DESKTOP)
                    )
                    .exhaustive(),
            [c, l, f, _, n]
        ),
        o,
        i
    ];
}
function eE(e) {
    var t, n;
    let r = et(e),
        i = ee(e),
        [o] = eg(e, i),
        a = K(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = s.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !a && u && (d || (f && o === N.LI.DESKTOP)),
        p = (0, y.isWeb)() && _ && !(0, A.Gd)(e),
        h = (0, y.isMac)() && i.taskType === s.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(M.NW.string(M.t.MFGxFB)), p && m.push(M.NW.string(M.t.BV6xDg)), m;
}
function eb(e) {
    var t;
    return null != (t = (0, d.e7)([T.Z], () => T.Z.quests).get(e)) ? t : null;
}
function ey(e) {
    let t = (0, d.e7)([T.Z], () => T.Z.getQuest(e), [e]);
    return o()(null != t, 'Unknown quest ID '.concat(e)), t;
}
function ev(e) {
    let { mode: t, questContent: n, questId: i } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != i &&
            o.current !== t &&
            ((0, O.Ic)({
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
                    (0, O.Ic)({
                        mode: null,
                        prevMode: o.current,
                        questContent: n,
                        questId: i
                    });
                };
        }, [i, n]);
}
function eO(e) {
    var t, n;
    let r = (0, d.e7)([p.default], () => p.default.locale),
        i = ee(e),
        [o] = eg(e, i),
        a = et(e),
        s = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        l = null != a ? a.percentComplete : i.percentComplete;
    if (s) return M.NW.string(M.t['ij5E//']);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && l > 0) {
        let e = (0, b.T3)(r, l, { roundingMode: 'floor' });
        return M.NW.formatToPlainString(M.t.lVZaXF, { percent: e });
    }
    return o === N.LI.SELECT ? M.NW.string(M.t.EMrUHR) : (0, A.$J)(e) ? M.NW.string(M.t.mOrpXF) : M.NW.string(M.t['7e5k7O']);
}
function eI(e, t, n) {
    var i;
    let o = z(r.useMemo(() => w.r.build(e.config).rewardsExpireAt, [e.config])),
        a = ee(e),
        s = et(e),
        l = (null == (i = e.userStatus) ? void 0 : i.completedAt) != null,
        c = J(e),
        u = (0, R.DD)({
            quest: e,
            location: D.dr.QUESTS_BAR,
            questContent: N.jn.QUEST_BAR_V2,
            taskDetails: a
        }),
        d = null != s ? s.percentComplete : a.percentComplete;
    if (l) return M.NW.formatToPlainString(M.t.APddvL, { expirationDate: o });
    if (t)
        if (n === N.LI.SELECT) return M.NW.string(M.t.sWUpNz);
        else return u;
    if ((0, A.q8)(e)) return M.NW.string(M.t['o+e9ys']);
    if (d > 0)
        if (!c) return M.NW.string(M.t.mOrpXF);
        else
            return (0, A.AV)({
                quest: e,
                taskDetails: a,
                thirdPartyTaskDetails: null != s ? s : void 0
            });
    return M.NW.string(M.t.S6UUc3);
}
function eS(e, t) {
    let n = (0, d.e7)([T.Z], () => T.Z.getQuest(e), [e]),
        i = (0, f.ZP)(),
        o = r.useMemo(() => (null == n ? void 0 : n.config.features.includes(D.S7.QUESTS_CDN)) === !0, [n]);
    return r.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, P.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, u.wj)(i) ? L.BRd.DARK : L.BRd.LIGHT,
                      newCdn: o
                  }),
        [i, t, e, null == n ? void 0 : n.config.cosponsorMetadata, o]
    );
}
function eT(e) {
    let t = w.r.build(e).defaultReward.messages.name,
        n = (0, A.Kr)(e),
        r = (0, A.FX)(e),
        i = (0, A._p)(e),
        o = (0, A.f$)(e),
        a = (0, d.e7)([m.default], () => m.default.getCurrentUser()),
        s = (0, v.I5)(a, x.p9.TIER_2);
    if (null == n) return M.NW.formatToPlainString(M.t.l9uXLy, { decorationName: t });
    let l = M.NW.formatToPlainString(M.t.o97tNj, { rewardName: t }),
        c = M.NW.formatToPlainString(M.t.PkyRZm, {
            rewardName: t,
            expirationDate: r
        }),
        u = M.NW.formatToPlainString(M.t.ie4YKy, {
            rewardName: t,
            duration: n
        }),
        f = M.NW.formatToPlainString(M.t.yCpc0d, {
            duration: n,
            rewardName: t
        }),
        _ = s ? l : u,
        p = s ? c : f,
        h = i ? _ : p;
    return o
        ? h
        : M.NW.formatToPlainString(M.t.tTlItr, {
              duration: n,
              decorationName: t
          });
}
function eN(e) {
    return (0, d.cj)([T.Z], () => (0, A.qe)(e, T.Z));
}
