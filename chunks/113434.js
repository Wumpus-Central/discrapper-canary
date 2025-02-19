n.d(t, {
    B4: () => eb,
    B6: () => z,
    Bd: () => eh,
    DU: () => ea,
    Fr: () => eo,
    GI: () => ec,
    GU: () => ev,
    Gd: () => eI,
    I: () => e_,
    J2: () => U,
    Jf: () => et,
    KX: () => ed,
    OH: () => ef,
    Qy: () => eT,
    Rf: () => ee,
    _Q: () => ep,
    _s: () => eu,
    bA: () => H,
    e5: () => V,
    eN: () => W,
    eQ: () => eO,
    iO: () => ei,
    kJ: () => es,
    me: () => eg,
    pe: () => q,
    qI: () => ey,
    qb: () => eE,
    t5: () => er,
    tP: () => K,
    uA: () => en,
    vf: () => eS,
    z: () => J,
    z6: () => el,
    zP: () => eN
}),
    n(47120),
    n(230036),
    n(653041),
    n(266796),
    n(627341);
var r = n(192379),
    i = n(278074),
    o = n(754700),
    a = n(959078),
    s = n(846519),
    l = n(780384),
    c = n(442837),
    u = n(410030),
    d = n(583434),
    f = n(706454),
    p = n(553795),
    _ = n(594174),
    h = n(78839),
    m = n(70956),
    g = n(63063),
    E = n(930153),
    v = n(358085),
    b = n(74538),
    y = n(617136),
    O = n(915750),
    S = n(272008),
    I = n(569984),
    T = n(497505),
    N = n(918701),
    A = n(977156),
    C = n(569743),
    R = n(373370),
    P = n(475595),
    w = n(566078),
    D = n(46140),
    x = n(981631),
    L = n(474936),
    M = n(388032);
let k = -1,
    j = 1;
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = r.useState(!1),
        i = (0, c.Wu)([I.Z], () => [...I.Z.quests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: a } = (0, c.cj)([I.Z], () => ({
            isFetchingCurrentQuests: I.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: I.Z.lastFetchedCurrentQuests
        })),
        s = (0, A.cB)({ location: D.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            'cache-only' !== e.fetchPolicy && ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === a)) && s && !t && !o && (n(!0), (0, S.xw)(), (0, C.Z)({ location: D.dr.USE_QUESTS }) && (0, S.w)(T.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, s, t, o, a]),
        {
            quests: i,
            isFetchingCurrentQuests: o
        }
    );
}
function G(e) {
    return e.sort((e, t) => {
        var n, r, i, o, a, s;
        let l = !(0, N.zi)(e),
            c = !(0, N.zi)(t),
            u = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
            d = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
        return l !== c ? (l ? k : j) : u !== d ? (u ? k : j) : l && c ? B(null === (a = e.config) || void 0 === a ? void 0 : a.expiresAt, null === (s = t.config) || void 0 === s ? void 0 : s.expiresAt, 1) : B(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 0);
    });
}
function B(e, t, n) {
    let r = 0 === n ? k : j;
    return e.localeCompare(t) * r;
}
function Z(e) {
    let t = r.useRef([]);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (t.current.length > 0 && t.current.length === e.length) return t.current;
        let n = G(e).map((e) => e.id);
        return (t.current = n), n;
    }, [e]);
}
function F(e) {
    let t = r.useMemo(
            () =>
                e.filter((e) => {
                    var t, n;
                    let r = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                        i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null;
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
                let i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null;
                return i !== ((null === (r = t.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null) ? (i ? k : j) : B(w.r.build(e.config).rewardsExpireAt, w.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var V = (function (e) {
    return (e.ALL = 'all'), (e.CLAIMED = 'claimed'), e;
})({});
function H(e) {
    let { quests: t, isFetchingCurrentQuests: n } = U({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = Z(t),
        o = F(t),
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
        t = (0, c.Wu)([I.Z], () => Array.from(I.Z.claimedQuests.values())),
        n = (0, c.e7)([I.Z], () => I.Z.isFetchingClaimedQuests);
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
        [n, i] = r.useState(() => new Map(e.map((e) => [e.id, (0, N.zi)(e)])));
    return (
        r.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, N.zi)(t)) null != t && (0, N.zi)(t) && i((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new s.V7(),
                        r = () => {
                            let o = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(o, () => {
                                (0, N.zi)(t) ? i((e) => new Map(e).set(t.id, !0)) : r();
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
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, c.e7)([f.default], () => f.default.locale);
    return r.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function q(e) {
    return (0, c.e7)([I.Z], () => I.Z.isProgressingOnDesktop(e.id));
}
function Q(e) {
    return r.useMemo(() => (0, N.Bz)(e), [e]);
}
function X(e) {
    let t = (0, c.e7)([I.Z], () => I.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
    return r.useMemo(() => (0, N.BM)(e), [e, t]);
}
function J(e) {
    let t = q(e),
        n = Q(e),
        r = X(e);
    return t || n || r;
}
let $ = 1,
    ee = (e) => {
        let t = r.useCallback(() => (0, N.il)(e), [e]),
            [n, i] = r.useState(t()),
            o = r.useCallback(() => i(t()), [t]),
            a = J(e);
        return (
            r.useEffect(() => {
                var t, n, r;
                if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null || !a) {
                    o();
                    return;
                }
                let i = window.setInterval(() => {
                    o();
                }, m.Z.Millis.SECOND * $);
                return () => {
                    clearInterval(i), o();
                };
            }, [e, a, o]),
            n
        );
    };
function et(e) {
    return r.useMemo(() => (0, N.b7)(e), [e]);
}
let en = (e) => {
    let { quest: t, questContent: n } = e,
        r = eu({ quest: t }),
        i = (0, O.WD)();
    return () => {
        r
            ? (0, N.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: y.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == i ? void 0 : i.getId()
                  }
              )
            : (0, N.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: y.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
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
    if ((0, N.$J)(e) && !(0, N.Nj)({ quest: e }))
        return M.NW.format(M.t['l4S+cX'], {
            minutes: r,
            onClick: o,
            gameTitle: w.r.build(e.config).application.name
        });
    if ((0, N.$J)(e))
        return M.NW.format(M.t.Ajlcd3, {
            minutes: r,
            onClick: o,
            gameTitle: w.r.build(e.config).application.name
        });
    if ((0, N.q8)(e)) {
        var a;
        let t = null === (a = e.config.videoMetadata) || void 0 === a ? void 0 : a.messages.videoTitle;
        return null == t ? M.NW.string(M.t['o+e9ys']) : M.NW.formatToPlainString(M.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != i) return i.title;
    if ((0, N.pO)(e) && (0, N.KM)(e)) return M.NW.format(M.t['1NaRSk'], { minutes: r });
    let s = M.t['6zWtV1'];
    return (
        (0, N.Nj)({ quest: e }) && (s = M.t['wmOh/v']),
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
            if (!(0, N.vR)(t, T.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (i = n.get(t.id)) && void 0 !== i && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                o = (0, N.zE)(t.userStatus, T.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !o) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function eo(e) {
    let t = (0, c.e7)([I.Z], () => I.Z.quests),
        n = r.useMemo(() => (0, N.Jg)(t, e), [e, t]);
    return K(n) ? null : n;
}
function ea(e) {
    var t;
    let n = (0, N.Xv)(e),
        { product: r, isFetching: i } = (0, d.T)(w.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
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
    let { fetching: e, accounts: t } = (0, c.cj)([p.Z], () => ({
            fetching: p.Z.isFetching(),
            accounts: p.Z.getAccounts()
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: o
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === x.ABu.XBOX),
                r = e.filter((e) => e.type === x.ABu.PLAYSTATION),
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
            [s, l] = r.useState([]),
            [u, d] = r.useState(!1),
            f = (0, c.e7)([p.Z], () => p.Z.getAccounts());
        return (
            r.useEffect(() => {
                l((e) => e.filter((e) => e.type !== a.K.EXPIRED_CREDENTIAL));
            }, [f]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (u) return;
                    null == i || i(), d(!0);
                    let e = null;
                    try {
                        (e = await (0, S.CS)(t, n)), l(e.errorHints);
                    } finally {
                        var r;
                        d(!1), null == o || o(null !== (r = null == e ? void 0 : e.errorHints) && void 0 !== r ? r : []);
                    }
                }, [u, i, o, n, t]),
                startingConsoleQuest: u,
                errorHints: s
            }
        );
    },
    eu = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = el(),
            r = J(t),
            i = 0 === n.length;
        return (0, N.$J)(t) && i && !r;
    },
    ed = () => {
        let { xboxAccounts: e, playstationAccounts: t } = el(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            o = g.Z.getArticleURL(x.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = g.Z.getArticleURL(x.BhN.QUEST_HOW_TO_XBOX),
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
function ep(e) {
    var t, n, r;
    let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        o = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        a = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        s = ee(e).percentComplete > 0;
    return a ? 4 : o ? 3 : s ? 2 : +!!i;
}
function e_(e) {
    let t = (0, c.e7)([f.default], () => f.default.locale),
        { percentComplete: n } = ee(e),
        r = et(e),
        i = null != r ? r.completedRatio : n,
        o = 100 * i,
        a = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, E.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: o,
        completedRatioDisplay: a
    };
}
function eh(e) {
    var t, n;
    let r = ee(e),
        i = (0, N.b7)(e),
        o = (0, R.DD)({
            quest: e,
            taskDetails: r,
            location: D.dr.QUEST_HOME_DESKTOP,
            questContent: T.jn.QUEST_HOME_DESKTOP
        }),
        a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        s = z(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    return a ? M.NW.formatToPlainString(M.t.lOVr0N, { claimDate: s }) : null != i ? i.description : null != o ? o : null;
}
function em(e) {
    return [(0, c.e7)([I.Z], () => I.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, S.OR)(e, t), [e])];
}
function eg(e, t) {
    let [n, a] = em(e.id),
        s = r.useMemo(() => (0, N.yH)(e), [e]),
        l = s.includes(D.cd.DESKTOP),
        c = s.includes(D.cd.CONSOLE),
        u = q(e),
        d = Q(e),
        f = r.useMemo(
            () =>
                (0, i.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP }, () => D.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP_V2 }, () => D.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ACTIVITY }, () => D.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO }, () => D.cd.DESKTOP)
                    .with({ taskType: o.X.STREAM_ON_DESKTOP }, () => D.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_XBOX }, () => D.cd.CONSOLE)
                    .with({ taskType: o.X.PLAY_ON_PLAYSTATION }, () => D.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        p = u ? D.cd.DESKTOP : d ? D.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, i.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: p,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: D.cd.CONSOLE }, () => T.LI.CONSOLE)
                    .with({ currentProgressingPlatform: D.cd.DESKTOP }, () => T.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: D.cd.CONSOLE
                        },
                        () => T.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: D.cd.DESKTOP
                        },
                        () => T.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: D.cd.CONSOLE
                        },
                        () => T.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: D.cd.DESKTOP
                        },
                        () => T.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (c && l ? T.LI.SELECT : c ? T.LI.CONSOLE : T.LI.DESKTOP)
                    )
                    .exhaustive(),
            [c, l, f, p, n]
        ),
        s,
        a
    ];
}
function eE(e) {
    var t, n;
    let r = et(e),
        i = ee(e),
        [a] = eg(e, i),
        s = K(e),
        l = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        c = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        p = l && !c && !s && u && (d || (f && a === T.LI.DESKTOP)),
        _ = (0, v.isWeb)() && p && !(0, N.Gd)(e),
        h = (0, v.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && p,
        m = ev(e),
        g = [];
    for (let e of (h && g.push(M.NW.string(M.t.MFGxFB)), _ && g.push(M.NW.string(M.t.BV6xDg)), m)) g.push(e);
    return g;
}
function ev(e) {
    let t = (0, c.e7)([h.ZP], () => h.ZP.getPremiumSubscription()),
        n = (0, N.Bg)(e.config) && (null == t ? void 0 : t.isPurchasedExternally) === !0,
        r = [];
    return n && r.push(M.NW.string(M.t.nnfWPD)), r;
}
function eb(e) {
    var t;
    return null !== (t = (0, c.e7)([I.Z], () => I.Z.quests).get(e)) && void 0 !== t ? t : null;
}
function ey(e) {
    let { mode: t, questContent: n, questId: i } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != i &&
            o.current !== t &&
            ((0, y.Ic)({
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
                    (0, y.Ic)({
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
    let r = (0, c.e7)([f.default], () => f.default.locale),
        i = ee(e),
        [o] = eg(e, i);
    if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return M.NW.string(M.t['ij5E//']);
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && i.percentComplete > 0) {
        let e = (0, E.T3)(r, i.percentComplete, { roundingMode: 'floor' });
        return M.NW.formatToPlainString(M.t.lVZaXF, { percent: e });
    }
    return o === T.LI.SELECT ? M.NW.string(M.t.EMrUHR) : (0, N.$J)(e) ? M.NW.string(M.t.mOrpXF) : M.NW.string(M.t['7e5k7O']);
}
function eS(e, t, n) {
    var i;
    let o = z(r.useMemo(() => w.r.build(e.config).rewardsExpireAt, [e.config])),
        a = ee(e),
        s = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.completedAt) != null,
        l = J(e),
        c = (0, R.DD)({
            quest: e,
            location: D.dr.QUESTS_BAR,
            questContent: T.jn.QUEST_BAR_V2,
            taskDetails: a
        });
    return s
        ? M.NW.formatToPlainString(M.t.APddvL, { expirationDate: o })
        : t
          ? n === T.LI.SELECT
              ? M.NW.string(M.t.sWUpNz)
              : c
          : (0, N.q8)(e)
            ? M.NW.string(M.t['o+e9ys'])
            : a.percentComplete > 0
              ? l
                  ? (0, N.AV)({
                        quest: e,
                        taskDetails: a
                    })
                  : M.NW.string(M.t.mOrpXF)
              : M.NW.string(M.t.S6UUc3);
}
function eI(e, t) {
    let n = (0, c.e7)([I.Z], () => I.Z.getQuest(e), [e]),
        i = (0, u.ZP)(),
        o = r.useMemo(() => (null == n ? void 0 : n.config.features.includes(D.S7.QUESTS_CDN)) === !0, [n]);
    return r.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, P.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, l.wj)(i) ? x.BRd.DARK : x.BRd.LIGHT,
                      newCdn: o
                  }),
        [i, t, e, null == n ? void 0 : n.config.cosponsorMetadata, o]
    );
}
function eT(e) {
    let t = w.r.build(e).defaultReward.messages.name,
        n = (0, N.Kr)(e),
        r = (0, N.f$)(e),
        i = (0, c.e7)([_.default], () => _.default.getCurrentUser()),
        o = null != i && b.ZP.isPremium(i, L.p9.TIER_2);
    if (null == n) return M.NW.formatToPlainString(M.t.l9uXLy, { decorationName: t });
    let a = M.NW.formatToPlainString(M.t.gWlmFR, {
            duration: n,
            rewardName: t
        }),
        s = M.NW.formatToPlainString(M.t.NpQ80d, {
            duration: n,
            rewardName: t
        }),
        l = r && o ? a : s;
    return r
        ? l
        : M.NW.formatToPlainString(M.t.tTlItr, {
              duration: n,
              decorationName: t
          });
}
function eN(e) {
    return (0, c.e7)([I.Z], () => {
        var t;
        return null != e ? (null === (t = I.Z.questToDeliverForPlacement.get(e)) || void 0 === t ? void 0 : t.decisionId) : void 0;
    });
}
