n.d(t, {
    B4: () => ey,
    B6: () => z,
    Bd: () => eh,
    DU: () => es,
    Fr: () => ea,
    GI: () => eu,
    GU: () => ev,
    Gd: () => eS,
    I: () => ep,
    J2: () => G,
    Jf: () => et,
    KX: () => ed,
    OH: () => ef,
    Qy: () => eA,
    Rf: () => ee,
    _Q: () => e_,
    _s: () => ec,
    bA: () => H,
    e5: () => j,
    eN: () => Y,
    eQ: () => eb,
    iO: () => er,
    kJ: () => eo,
    me: () => eg,
    pe: () => q,
    qI: () => eI,
    qb: () => eE,
    t5: () => ei,
    tP: () => K,
    uA: () => en,
    vf: () => eT,
    z: () => J,
    z6: () => el,
    zP: () => eN
}),
    n(47120),
    n(653041),
    n(627341);
var i = n(192379),
    r = n(278074),
    a = n(754700),
    s = n(959078),
    o = n(846519),
    l = n(780384),
    u = n(442837),
    c = n(410030),
    d = n(583434),
    f = n(706454),
    _ = n(553795),
    p = n(594174),
    h = n(78839),
    m = n(70956),
    g = n(63063),
    E = n(930153),
    v = n(358085),
    y = n(74538),
    I = n(617136),
    b = n(915750),
    T = n(272008),
    S = n(569984),
    A = n(497505),
    N = n(918701),
    C = n(977156),
    R = n(569743),
    O = n(373370),
    D = n(475595),
    x = n(566078),
    L = n(46140),
    P = n(981631),
    w = n(474936),
    M = n(388032);
let k = -1,
    U = 1;
function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = i.useState(!1),
        r = (0, u.Wu)([S.Z], () => [...S.Z.quests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: s } = (0, u.cj)([S.Z], () => ({
            isFetchingCurrentQuests: S.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: S.Z.lastFetchedCurrentQuests
        })),
        o = (0, C.cB)({ location: L.dr.USE_QUESTS });
    return (
        i.useEffect(() => {
            'cache-only' !== e.fetchPolicy && ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === s)) && o && !t && !a && (n(!0), (0, T.xw)(), (0, R.Z)({ location: L.dr.USE_QUESTS }) && (0, T.w)(A.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, o, t, a, s]),
        {
            quests: r,
            isFetchingCurrentQuests: a
        }
    );
}
function B(e) {
    return e.sort((e, t) => {
        var n, i, r, a, s, o;
        let l = !(0, N.zi)(e),
            u = !(0, N.zi)(t),
            c = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
            d = (null === (i = t.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null;
        return l !== u ? (l ? k : U) : c !== d ? (c ? k : U) : l && u ? Z(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : Z(null === (r = e.config) || void 0 === r ? void 0 : r.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
    });
}
function Z(e, t, n) {
    let i = 0 === n ? k : U;
    return e.localeCompare(t) * i;
}
function F(e) {
    let t = i.useRef([]);
    return i.useMemo(() => {
        if (0 === e.length) return [];
        if (t.current.length > 0 && t.current.length === e.length) return t.current;
        let n = B(e).map((e) => e.id);
        return (t.current = n), n;
    }, [e]);
}
function V(e) {
    let t = i.useMemo(
            () =>
                e.filter((e) => {
                    var t, n;
                    let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                        r = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null;
                    return i && r;
                }),
            [e]
        ),
        n = i.useRef([]);
    return i.useMemo(() => {
        if (0 === t.length) return [];
        if (n.current.length > 0 && n.current.length === t.length) return n.current;
        let e = t
            .sort((e, t) => {
                var n, i;
                let r = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null;
                return r !== ((null === (i = t.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null) ? (r ? k : U) : Z(x.r.build(e.config).rewardsExpireAt, x.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var j = (function (e) {
    return (e.ALL = 'all'), (e.CLAIMED = 'claimed'), e;
})({});
function H(e) {
    let { quests: t, isFetchingCurrentQuests: n } = G({ fetchPolicy: 'cache-and-network' }),
        i = new Map(t.map((e) => [e.id, e])),
        r = F(t),
        a = V(t),
        s = [],
        o = [];
    for (let t of (s = 'all' === e ? r : a)) {
        let e = i.get(t);
        null != e && o.push(e);
    }
    return {
        quests: o,
        isFetchingCurrentQuests: n
    };
}
function Y() {
    let e = i.useRef(!1),
        t = (0, u.Wu)([S.Z], () => Array.from(S.Z.claimedQuests.values())),
        n = (0, u.e7)([S.Z], () => S.Z.isFetchingClaimedQuests);
    return (
        i.useEffect(() => {
            n || e.current || ((e.current = !0), (0, T.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n
        }
    );
}
function W() {
    let { quests: e, isFetchingCurrentQuests: t } = G({ fetchPolicy: 'cache-only' }),
        [n, r] = i.useState(() => new Map(e.map((e) => [e.id, (0, N.zi)(e)])));
    return (
        i.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, N.zi)(t)) null != t && (0, N.zi)(t) && r((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new o.V7(),
                        i = () => {
                            let a = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(a, () => {
                                (0, N.zi)(t) ? r((e) => new Map(e).set(t.id, !0)) : i();
                            }),
                                n.push(e);
                        };
                    i();
                }
            return () => {
                for (let e of n) e.stop();
            };
        }, [e, t]),
        n
    );
}
function K(e) {
    let t = W();
    return i.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, u.e7)([f.default], () => f.default.locale);
    return i.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function q(e) {
    return (0, u.e7)([S.Z], () => S.Z.isProgressingOnDesktop(e.id));
}
function Q(e) {
    return i.useMemo(() => (0, N.Bz)(e), [e]);
}
function X(e) {
    let t = (0, u.e7)([S.Z], () => S.Z.getOptimisticProgress(e.id, a.X.WATCH_VIDEO));
    return i.useMemo(() => (0, N.BM)(e), [e, t]);
}
function J(e) {
    let t = q(e),
        n = Q(e),
        i = X(e);
    return t || n || i;
}
let $ = 1,
    ee = (e) => {
        let t = i.useCallback(() => (0, N.il)(e), [e]),
            [n, r] = i.useState(t()),
            a = i.useCallback(() => r(t()), [t]),
            s = J(e);
        return (
            i.useEffect(() => {
                var t, n, i;
                if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null || !s) {
                    a();
                    return;
                }
                let r = window.setInterval(() => {
                    a();
                }, m.Z.Millis.SECOND * $);
                return () => {
                    clearInterval(r), a();
                };
            }, [e, s, a]),
            n
        );
    };
function et(e) {
    return i.useMemo(() => (0, N.b7)(e), [e]);
}
let en = (e) => {
    let { quest: t, questContent: n } = e,
        i = ec({ quest: t }),
        r = (0, b.WD)();
    return () => {
        i
            ? (0, N.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: I.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == r ? void 0 : r.getId()
                  }
              )
            : (0, N.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: I.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == r ? void 0 : r.getId()
                  }
              );
    };
};
function ei(e, t, n) {
    let { targetMinutes: i } = ee(e),
        r = et(e),
        a = en({
            quest: e,
            questContent: n
        });
    if ((0, N.$J)(e) && !(0, N.Nj)({ quest: e }))
        return M.intl.format(M.t['l4S+cX'], {
            minutes: i,
            onClick: a,
            gameTitle: x.r.build(e.config).application.name
        });
    if ((0, N.$J)(e))
        return M.intl.format(M.t.Ajlcd3, {
            minutes: i,
            onClick: a,
            gameTitle: x.r.build(e.config).application.name
        });
    if ((0, N.q8)(e)) {
        var s;
        let t = null === (s = e.config.videoMetadata) || void 0 === s ? void 0 : s.messages.videoTitle;
        return null == t ? M.intl.string(M.t['o+e9ys']) : M.intl.formatToPlainString(M.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != r) return r.title;
    if ((0, N.pO)(e) && (0, N.KM)(e)) return M.intl.format(M.t['1NaRSk'], { minutes: i });
    let o = M.t['6zWtV1'];
    return (
        (0, N.Nj)({ quest: e }) && (o = M.t['wmOh/v']),
        M.intl.format(o, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function er() {
    let { quests: e, isFetchingCurrentQuests: t } = G({ fetchPolicy: 'cache-or-network' }),
        n = W();
    return i.useMemo(() => {
        let i = [];
        if (t || 0 === e.length) return i;
        for (let t of e) {
            var r;
            if (!(0, N.vR)(t, A.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (r = n.get(t.id)) && void 0 !== r && r)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                i.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, N.zE)(t.userStatus, A.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                i.push(t);
                continue;
            }
        }
        return i;
    }, [e, n, t]);
}
function ea(e) {
    let t = (0, u.e7)([S.Z], () => S.Z.quests),
        n = i.useMemo(() => (0, N.Jg)(t, e), [e, t]);
    return K(n) ? null : n;
}
function es(e) {
    var t;
    let n = (0, N.Xv)(e),
        { product: i, isFetching: r } = (0, d.T)(x.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == i ? void 0 : null === (t = i.items) || void 0 === t ? void 0 : t[0],
        isFetching: r
    };
}
function eo(e) {
    return i.useMemo(
        () => ({
            handleComplete: () => (0, T.Wf)(e),
            handleProgress: (t) => (0, T.Wf)(e, t),
            handleResetStatusClick: () => (0, T.eT)(e),
            handleResetDismissibilityClick: () => (0, T.T0)(e),
            handleOverrideDeliveryClick: () => (0, T.EW)(e)
        }),
        [e]
    );
}
function el() {
    let { fetching: e, accounts: t } = (0, u.cj)([_.Z], () => ({
            fetching: _.Z.isFetching(),
            accounts: _.Z.getAccounts()
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: a
        } = i.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === P.ABu.XBOX),
                i = e.filter((e) => e.type === P.ABu.PLAYSTATION),
                r = n.concat(i);
            return {
                xboxAccounts: n,
                playstationAccounts: i,
                xboxAndPlaystationAccounts: r
            };
        }, [t]);
    return {
        fetching: e,
        xboxAccounts: n,
        playstationAccounts: r,
        xboxAndPlaystationAccounts: a
    };
}
let eu = (e) => {
        let { questId: t, preview: n, beforeRequest: r, afterRequest: a } = e,
            [o, l] = i.useState([]),
            [c, d] = i.useState(!1),
            f = (0, u.e7)([_.Z], () => _.Z.getAccounts());
        return (
            i.useEffect(() => {
                l((e) => e.filter((e) => e.type !== s.K.EXPIRED_CREDENTIAL));
            }, [f]),
            {
                startConsoleQuest: i.useCallback(async () => {
                    if (c) return;
                    null == r || r(), d(!0);
                    let e = null;
                    try {
                        (e = await (0, T.CS)(t, n)), l(e.errorHints);
                    } finally {
                        var i;
                        d(!1), null == a || a(null !== (i = null == e ? void 0 : e.errorHints) && void 0 !== i ? i : []);
                    }
                }, [c, r, a, n, t]),
                startingConsoleQuest: c,
                errorHints: o
            }
        );
    },
    ec = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = el(),
            i = J(t),
            r = 0 === n.length;
        return (0, N.$J)(t) && r && !i;
    },
    ed = () => {
        let { xboxAccounts: e, playstationAccounts: t } = el(),
            n = e.length > 0,
            i = t.length > 0,
            r = (n && !i) || (!n && i),
            a = g.Z.getArticleURL(P.BhN.QUEST_HOW_TO_PLAYSTATION),
            s = g.Z.getArticleURL(P.BhN.QUEST_HOW_TO_XBOX),
            o = M.intl.format(M.t.beN4DA, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: s
            }),
            l = M.intl.format(M.t.HVS7np, { helpdeskArticle: i ? a : s });
        return {
            message: r ? l : o,
            xboxURL: s,
            playstationURL: a
        };
    };
var ef = (function (e) {
    return (e[(e.UNACCEPTED = 0)] = 'UNACCEPTED'), (e[(e.ACCEPTED = 1)] = 'ACCEPTED'), (e[(e.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CLAIMED = 4)] = 'CLAIMED'), e;
})({});
function e_(e) {
    var t, n, i;
    let r = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        s = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null,
        o = ee(e).percentComplete > 0;
    return s ? 4 : a ? 3 : o ? 2 : r ? 1 : 0;
}
function ep(e) {
    let t = (0, u.e7)([f.default], () => f.default.locale),
        { percentComplete: n } = ee(e),
        i = et(e),
        r = null != i ? i.completedRatio : n,
        a = 100 * r,
        s = null != i ? ''.concat(null == i ? void 0 : i.progress, '/').concat(null == i ? void 0 : i.target) : (0, E.T3)(t, r, { roundingMode: 'floor' });
    return {
        completedRatio: r,
        percentComplete: a,
        completedRatioDisplay: s
    };
}
function eh(e) {
    var t, n;
    let i = ee(e),
        r = (0, N.b7)(e),
        a = (0, O.DD)({
            quest: e,
            taskDetails: i,
            location: L.dr.QUEST_HOME_DESKTOP,
            questContent: A.jn.QUEST_HOME_DESKTOP
        }),
        s = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = z(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    return s ? M.intl.formatToPlainString(M.t.lOVr0N, { claimDate: o }) : null != r ? r.description : null != a ? a : null;
}
function em(e) {
    return [(0, u.e7)([S.Z], () => S.Z.selectedTaskPlatform(e)), i.useCallback((t) => (0, T.OR)(e, t), [e])];
}
function eg(e, t) {
    let [n, s] = em(e.id),
        o = i.useMemo(() => (0, N.yH)(e), [e]),
        l = o.includes(L.cd.DESKTOP),
        u = o.includes(L.cd.CONSOLE),
        c = q(e),
        d = Q(e),
        f = i.useMemo(
            () =>
                (0, r.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: a.X.PLAY_ON_DESKTOP }, () => L.cd.DESKTOP)
                    .with({ taskType: a.X.PLAY_ON_DESKTOP_V2 }, () => L.cd.DESKTOP)
                    .with({ taskType: a.X.PLAY_ACTIVITY }, () => L.cd.DESKTOP)
                    .with({ taskType: a.X.WATCH_VIDEO }, () => L.cd.DESKTOP)
                    .with({ taskType: a.X.STREAM_ON_DESKTOP }, () => L.cd.DESKTOP)
                    .with({ taskType: a.X.PLAY_ON_XBOX }, () => L.cd.CONSOLE)
                    .with({ taskType: a.X.PLAY_ON_PLAYSTATION }, () => L.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        _ = c ? L.cd.DESKTOP : d ? L.cd.CONSOLE : null;
    return [
        i.useMemo(
            () =>
                (0, r.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: _,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: L.cd.CONSOLE }, () => A.LI.CONSOLE)
                    .with({ currentProgressingPlatform: L.cd.DESKTOP }, () => A.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: L.cd.CONSOLE
                        },
                        () => A.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: L.cd.DESKTOP
                        },
                        () => A.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: L.cd.CONSOLE
                        },
                        () => A.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: L.cd.DESKTOP
                        },
                        () => A.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (u && l ? A.LI.SELECT : u ? A.LI.CONSOLE : A.LI.DESKTOP)
                    )
                    .exhaustive(),
            [u, l, f, _, n]
        ),
        o,
        s
    ];
}
function eE(e) {
    var t, n;
    let i = et(e),
        r = ee(e),
        [s] = eg(e, r),
        o = K(e),
        l = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        u = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        c = null == i,
        d = a.T.DESKTOP.has(r.taskType) && r.percentComplete > 0,
        f = 0 === r.percentComplete,
        _ = l && !u && !o && c && (d || (f && s === A.LI.DESKTOP)),
        p = (0, v.isWeb)() && _ && !(0, N.Gd)(e),
        h = (0, v.isMac)() && r.taskType === a.X.STREAM_ON_DESKTOP && _,
        m = ev(e),
        g = [];
    for (let e of (h && g.push(M.intl.string(M.t.MFGxFB)), p && g.push(M.intl.string(M.t.BV6xDg)), m)) g.push(e);
    return g;
}
function ev(e) {
    let t = (0, u.e7)([h.ZP], () => h.ZP.getPremiumSubscription()),
        n = (0, N.Bg)(e.config) && (null == t ? void 0 : t.isPurchasedExternally) === !0,
        i = [];
    return n && i.push(M.intl.string(M.t.nnfWPD)), i;
}
function ey(e) {
    var t;
    return null !== (t = (0, u.e7)([S.Z], () => S.Z.quests).get(e)) && void 0 !== t ? t : null;
}
function eI(e) {
    let { mode: t, questContent: n, questId: r } = e,
        a = i.useRef(null);
    i.useEffect(() => {
        null != r &&
            a.current !== t &&
            ((0, I.Ic)({
                mode: t,
                prevMode: a.current,
                questContent: n,
                questId: r
            }),
            (a.current = t));
    }, [r, n, t]),
        i.useEffect(() => {
            if (null != r)
                return () => {
                    (0, I.Ic)({
                        mode: null,
                        prevMode: a.current,
                        questContent: n,
                        questId: r
                    });
                };
        }, [r, n]);
}
function eb(e) {
    var t, n;
    let i = (0, u.e7)([f.default], () => f.default.locale),
        r = ee(e),
        [a] = eg(e, r);
    if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return M.intl.string(M.t['ij5E//']);
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && r.percentComplete > 0) {
        let e = (0, E.T3)(i, r.percentComplete, { roundingMode: 'floor' });
        return M.intl.formatToPlainString(M.t.lVZaXF, { percent: e });
    }
    return a === A.LI.SELECT ? M.intl.string(M.t.EMrUHR) : (0, N.$J)(e) ? M.intl.string(M.t.mOrpXF) : M.intl.string(M.t['7e5k7O']);
}
function eT(e, t, n) {
    var r;
    let a = z(i.useMemo(() => x.r.build(e.config).rewardsExpireAt, [e.config])),
        s = ee(e),
        o = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        l = J(e),
        u = (0, O.DD)({
            quest: e,
            location: L.dr.QUESTS_BAR,
            questContent: A.jn.QUEST_BAR_V2,
            taskDetails: s
        });
    return o
        ? M.intl.formatToPlainString(M.t.APddvL, { expirationDate: a })
        : t
          ? n === A.LI.SELECT
              ? M.intl.string(M.t.sWUpNz)
              : u
          : (0, N.q8)(e)
            ? M.intl.string(M.t['o+e9ys'])
            : s.percentComplete > 0
              ? l
                  ? (0, N.AV)({
                        quest: e,
                        taskDetails: s
                    })
                  : M.intl.string(M.t.mOrpXF)
              : M.intl.string(M.t.S6UUc3);
}
function eS(e, t) {
    let n = (0, u.e7)([S.Z], () => S.Z.getQuest(e), [e]),
        r = (0, c.ZP)(),
        a = i.useMemo(() => (null == n ? void 0 : n.config.features.includes(L.S7.QUESTS_CDN)) === !0, [n]);
    return i.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, D.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, l.wj)(r) ? P.BRd.DARK : P.BRd.LIGHT,
                      newCdn: a
                  }),
        [r, t, e, null == n ? void 0 : n.config.cosponsorMetadata, a]
    );
}
function eA(e) {
    let t = x.r.build(e).defaultReward.messages.name,
        n = (0, N.Kr)(e),
        i = (0, N.f$)(e),
        r = (0, u.e7)([p.default], () => p.default.getCurrentUser()),
        a = null != r && y.ZP.isPremium(r, w.p9.TIER_2);
    if (null == n) return M.intl.formatToPlainString(M.t.l9uXLy, { decorationName: t });
    let s = M.intl.formatToPlainString(M.t.gWlmFR, {
            duration: n,
            rewardName: t
        }),
        o = M.intl.formatToPlainString(M.t.NpQ80d, {
            duration: n,
            rewardName: t
        }),
        l = i && a ? s : o;
    return i
        ? l
        : M.intl.formatToPlainString(M.t.tTlItr, {
              duration: n,
              decorationName: t
          });
}
function eN(e) {
    return (0, u.e7)([S.Z], () => {
        var t;
        return null != e ? (null === (t = S.Z.questToDeliverForPlacement.get(e)) || void 0 === t ? void 0 : t.decisionId) : void 0;
    });
}
