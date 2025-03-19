n.d(t, {
    B4: () => eg,
    B6: () => Y,
    Bd: () => e_,
    DU: () => ei,
    Fr: () => er,
    GI: () => es,
    Gd: () => eO,
    I: () => ef,
    J2: () => k,
    Jf: () => $,
    KX: () => ec,
    OH: () => eu,
    Qy: () => eI,
    Rf: () => J,
    _Q: () => ed,
    _s: () => el,
    bA: () => V,
    e5: () => F,
    eN: () => Z,
    eQ: () => ev,
    iO: () => en,
    kJ: () => eo,
    me: () => eh,
    pe: () => K,
    qI: () => eb,
    qb: () => em,
    sf: () => eE,
    t5: () => et,
    tP: () => W,
    uA: () => ee,
    vf: () => ey,
    z: () => Q,
    z6: () => ea,
    zP: () => eS
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
    m = n(70956),
    g = n(63063),
    E = n(930153),
    b = n(358085),
    v = n(74538),
    y = n(617136),
    O = n(915750),
    I = n(272008),
    S = n(569984),
    T = n(497505),
    N = n(918701),
    A = n(977156),
    C = n(373370),
    R = n(475595),
    P = n(566078),
    w = n(46140),
    D = n(981631),
    L = n(388032);
let x = -1,
    M = 1;
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = r.useState(!1),
        i = (0, d.Wu)([S.Z], () => [...S.Z.quests.values()]),
        o = (0, d.Wu)([S.Z], () => [...S.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: s } = (0, d.cj)([S.Z], () => ({
            isFetchingCurrentQuests: S.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: S.Z.lastFetchedCurrentQuests
        })),
        l = (0, A.cB)({ location: w.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            'cache-only' !== e.fetchPolicy && ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === s)) && l && !t && !a && (n(!0), (0, I.xw)(), (0, I.w)(T.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, l, t, a, s]),
        {
            quests: i,
            excludedQuests: o,
            isFetchingCurrentQuests: a
        }
    );
}
function j(e) {
    return e.sort((e, t) => {
        var n, r, i, o, a, s;
        let l = !(0, N.zi)(e),
            c = !(0, N.zi)(t),
            u = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
            d = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
        return l !== c ? (l ? x : M) : u !== d ? (u ? x : M) : l && c ? U(null === (a = e.config) || void 0 === a ? void 0 : a.expiresAt, null === (s = t.config) || void 0 === s ? void 0 : s.expiresAt, 1) : U(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 0);
    });
}
function U(e, t, n) {
    let r = 0 === n ? x : M;
    return e.localeCompare(t) * r;
}
function G(e) {
    let t = r.useRef([]);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (t.current.length > 0 && t.current.length === e.length) return t.current;
        let n = j(e).map((e) => e.id);
        return (t.current = n), n;
    }, [e]);
}
function B(e) {
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
                return i !== ((null === (r = t.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null) ? (i ? x : M) : U(P.r.build(e.config).rewardsExpireAt, P.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var F = (function (e) {
    return (e.ALL = 'all'), (e.CLAIMED = 'claimed'), e;
})({});
function V(e) {
    let { quests: t, isFetchingCurrentQuests: n } = k({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = G(t),
        o = B(t),
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
function Z() {
    let e = r.useRef(!1),
        t = (0, d.Wu)([S.Z], () => Array.from(S.Z.claimedQuests.values())),
        n = (0, d.e7)([S.Z], () => S.Z.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, I.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n
        }
    );
}
function H() {
    let { quests: e, isFetchingCurrentQuests: t } = k({ fetchPolicy: 'cache-only' }),
        [n, i] = r.useState(() => new Map(e.map((e) => [e.id, (0, N.zi)(e)])));
    return (
        r.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, N.zi)(t)) null != t && (0, N.zi)(t) && i((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new c.V7(),
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
function W(e) {
    let t = H();
    return r.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, d.e7)([p.default], () => p.default.locale);
    return r.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function K(e) {
    return (0, d.e7)([S.Z], () => S.Z.isProgressingOnDesktop(e.id));
}
function z(e) {
    return r.useMemo(() => (0, N.Bz)(e), [e]);
}
function q(e) {
    let t = (0, d.e7)([S.Z], () => S.Z.getOptimisticProgress(e.id, s.X.WATCH_VIDEO));
    return r.useMemo(() => (0, N.BM)(e), [e, t]);
}
function Q(e) {
    let t = K(e),
        n = z(e),
        r = q(e);
    return t || n || r;
}
let X = 1,
    J = (e) => {
        let t = r.useCallback(() => (0, N.il)(e), [e]),
            [n, i] = r.useState(t()),
            o = r.useCallback(() => i(t()), [t]),
            a = Q(e);
        return (
            r.useEffect(() => {
                var t, n, r;
                if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null || !a) {
                    o();
                    return;
                }
                let i = window.setInterval(() => {
                    o();
                }, m.Z.Millis.SECOND * X);
                return () => {
                    clearInterval(i), o();
                };
            }, [e, a, o]),
            n
        );
    };
function $(e) {
    return r.useMemo(() => (0, N.b7)(e), [e]);
}
let ee = (e) => {
    let { quest: t, questContent: n } = e,
        r = el({ quest: t }),
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
function et(e, t, n) {
    let { targetMinutes: r } = J(e),
        i = $(e),
        o = ee({
            quest: e,
            questContent: n
        });
    if ((0, N.$J)(e) && !(0, N.Nj)({ quest: e }))
        return L.NW.format(L.t['l4S+cX'], {
            minutes: r,
            onClick: o,
            gameTitle: P.r.build(e.config).application.name
        });
    if ((0, N.$J)(e))
        return L.NW.format(L.t.Ajlcd3, {
            minutes: r,
            onClick: o,
            gameTitle: P.r.build(e.config).application.name
        });
    if ((0, N.q8)(e)) {
        var a;
        let t = null === (a = e.config.videoMetadata) || void 0 === a ? void 0 : a.messages.videoTitle;
        return null == t ? L.NW.string(L.t['o+e9ys']) : L.NW.formatToPlainString(L.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != i) return i.title;
    if ((0, N.pO)(e) && (0, N.KM)(e)) return L.NW.format(L.t['1NaRSk'], { minutes: r });
    let s = L.t['6zWtV1'];
    return (
        (0, N.Nj)({ quest: e }) && (s = L.t['wmOh/v']),
        L.NW.format(s, {
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function en() {
    let { quests: e, isFetchingCurrentQuests: t } = k({ fetchPolicy: 'cache-or-network' }),
        n = H();
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
function er(e) {
    let t = (0, d.e7)([S.Z], () => S.Z.quests),
        n = r.useMemo(() => (0, N.Jg)(t, e), [e, t]);
    return W(n) ? null : n;
}
function ei(e) {
    var t;
    let n = (0, N.Xv)(e),
        { product: r, isFetching: i } = (0, _.T)(P.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function eo(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, I.Wf)(e),
            handleProgress: (t) => (0, I.Wf)(e, t),
            handleResetStatusClick: () => (0, I.eT)(e),
            handleResetDismissibilityClick: () => (0, I.T0)(e),
            handleOverrideDeliveryClick: () => (0, I.EW)(e)
        }),
        [e]
    );
}
function ea() {
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
                n = e.filter((e) => e.type === D.ABu.XBOX),
                r = e.filter((e) => e.type === D.ABu.PLAYSTATION),
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
let es = (e) => {
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
                        (e = await (0, I.CS)(t, n)), s(e.errorHints);
                    } finally {
                        var r;
                        u(!1), null == o || o(null !== (r = null == e ? void 0 : e.errorHints) && void 0 !== r ? r : []);
                    }
                }, [c, i, o, n, t]),
                startingConsoleQuest: c,
                errorHints: a
            }
        );
    },
    el = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ea(),
            r = Q(t),
            i = 0 === n.length;
        return (0, N.$J)(t) && i && !r;
    },
    ec = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ea(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            o = g.Z.getArticleURL(D.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = g.Z.getArticleURL(D.BhN.QUEST_HOW_TO_XBOX),
            s = L.NW.format(L.t.beN4DA, {
                psHelpdeskArticle: o,
                xboxHelpdeskArticle: a
            }),
            l = L.NW.format(L.t.HVS7np, { helpdeskArticle: r ? o : a });
        return {
            message: i ? l : s,
            xboxURL: a,
            playstationURL: o
        };
    };
var eu = (function (e) {
    return (e[(e.UNACCEPTED = 0)] = 'UNACCEPTED'), (e[(e.ACCEPTED = 1)] = 'ACCEPTED'), (e[(e.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CLAIMED = 4)] = 'CLAIMED'), e;
})({});
function ed(e) {
    var t, n, r;
    let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        o = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        a = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        s = J(e).percentComplete > 0;
    return a ? 4 : o ? 3 : s ? 2 : +!!i;
}
function ef(e) {
    let t = (0, d.e7)([p.default], () => p.default.locale),
        { percentComplete: n } = J(e),
        r = $(e),
        i = null != r ? r.completedRatio : n,
        o = 100 * i,
        a = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, E.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: o,
        completedRatioDisplay: a
    };
}
function e_(e) {
    var t, n;
    let r = J(e),
        i = (0, N.b7)(e),
        o = (0, C.DD)({
            quest: e,
            taskDetails: r,
            location: w.dr.QUEST_HOME_DESKTOP,
            questContent: T.jn.QUEST_HOME_DESKTOP
        }),
        a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        s = Y(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    return a ? L.NW.formatToPlainString(L.t.lOVr0N, { claimDate: s }) : null != i ? i.description : null != o ? o : null;
}
function ep(e) {
    return [(0, d.e7)([S.Z], () => S.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, I.OR)(e, t), [e])];
}
function eh(e, t) {
    let [n, i] = ep(e.id),
        o = r.useMemo(() => (0, N.yH)(e), [e]),
        l = o.includes(w.cd.DESKTOP),
        c = o.includes(w.cd.CONSOLE),
        u = K(e),
        d = z(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: s.X.PLAY_ON_DESKTOP }, () => w.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ON_DESKTOP_V2 }, () => w.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ACTIVITY }, () => w.cd.DESKTOP)
                    .with({ taskType: s.X.WATCH_VIDEO }, () => w.cd.DESKTOP)
                    .with({ taskType: s.X.STREAM_ON_DESKTOP }, () => w.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ON_XBOX }, () => w.cd.CONSOLE)
                    .with({ taskType: s.X.PLAY_ON_PLAYSTATION }, () => w.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        _ = u ? w.cd.DESKTOP : d ? w.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: _,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: w.cd.CONSOLE }, () => T.LI.CONSOLE)
                    .with({ currentProgressingPlatform: w.cd.DESKTOP }, () => T.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: w.cd.CONSOLE
                        },
                        () => T.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: w.cd.DESKTOP
                        },
                        () => T.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: w.cd.CONSOLE
                        },
                        () => T.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: w.cd.DESKTOP
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
            [c, l, f, _, n]
        ),
        o,
        i
    ];
}
function em(e) {
    var t, n;
    let r = $(e),
        i = J(e),
        [o] = eh(e, i),
        a = W(e),
        l = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        c = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        u = null == r,
        d = s.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !a && u && (d || (f && o === T.LI.DESKTOP)),
        p = (0, b.isWeb)() && _ && !(0, N.Gd)(e),
        h = (0, b.isMac)() && i.taskType === s.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(L.NW.string(L.t.MFGxFB)), p && m.push(L.NW.string(L.t.BV6xDg)), m;
}
function eg(e) {
    var t;
    return null !== (t = (0, d.e7)([S.Z], () => S.Z.quests).get(e)) && void 0 !== t ? t : null;
}
function eE(e) {
    let t = (0, d.e7)([S.Z], () => S.Z.getQuest(e), [e]);
    return o()(null != t, 'Unknown quest ID '.concat(e)), t;
}
function eb(e) {
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
function ev(e) {
    var t, n;
    let r = (0, d.e7)([p.default], () => p.default.locale),
        i = J(e),
        [o] = eh(e, i);
    if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return L.NW.string(L.t['ij5E//']);
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && i.percentComplete > 0) {
        let e = (0, E.T3)(r, i.percentComplete, { roundingMode: 'floor' });
        return L.NW.formatToPlainString(L.t.lVZaXF, { percent: e });
    }
    return o === T.LI.SELECT ? L.NW.string(L.t.EMrUHR) : (0, N.$J)(e) ? L.NW.string(L.t.mOrpXF) : L.NW.string(L.t['7e5k7O']);
}
function ey(e, t, n) {
    var i;
    let o = Y(r.useMemo(() => P.r.build(e.config).rewardsExpireAt, [e.config])),
        a = J(e),
        s = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.completedAt) != null,
        l = Q(e),
        c = (0, C.DD)({
            quest: e,
            location: w.dr.QUESTS_BAR,
            questContent: T.jn.QUEST_BAR_V2,
            taskDetails: a
        });
    return s
        ? L.NW.formatToPlainString(L.t.APddvL, { expirationDate: o })
        : t
          ? n === T.LI.SELECT
              ? L.NW.string(L.t.sWUpNz)
              : c
          : (0, N.q8)(e)
            ? L.NW.string(L.t['o+e9ys'])
            : a.percentComplete > 0
              ? l
                  ? (0, N.AV)({
                        quest: e,
                        taskDetails: a
                    })
                  : L.NW.string(L.t.mOrpXF)
              : L.NW.string(L.t.S6UUc3);
}
function eO(e, t) {
    let n = (0, d.e7)([S.Z], () => S.Z.getQuest(e), [e]),
        i = (0, f.ZP)(),
        o = r.useMemo(() => (null == n ? void 0 : n.config.features.includes(w.S7.QUESTS_CDN)) === !0, [n]);
    return r.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, R.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, u.wj)(i) ? D.BRd.DARK : D.BRd.LIGHT,
                      newCdn: o
                  }),
        [i, t, e, null == n ? void 0 : n.config.cosponsorMetadata, o]
    );
}
function eI(e) {
    let t = P.r.build(e).defaultReward.messages.name,
        n = (0, N.Kr)(e),
        r = (0, N.FX)(e),
        i = (0, N._p)(e),
        o = (0, N.f$)(e),
        a = (0, v.eB)();
    if (null == n) return L.NW.formatToPlainString(L.t.l9uXLy, { decorationName: t });
    let s = L.NW.formatToPlainString(L.t.o97tNj, { rewardName: t }),
        l = L.NW.formatToPlainString(L.t.PkyRZm, {
            rewardName: t,
            expirationDate: r
        }),
        c = L.NW.formatToPlainString(L.t.ie4YKy, {
            rewardName: t,
            duration: n
        }),
        u = L.NW.formatToPlainString(L.t.yCpc0d, {
            duration: n,
            rewardName: t
        }),
        d = a ? s : c,
        f = a ? l : u,
        _ = i ? d : f;
    return o
        ? _
        : L.NW.formatToPlainString(L.t.tTlItr, {
              duration: n,
              decorationName: t
          });
}
function eS(e) {
    return (0, d.e7)([S.Z], () => {
        var t;
        return null != e ? (null === (t = S.Z.questToDeliverForPlacement.get(e)) || void 0 === t ? void 0 : t.decisionId) : void 0;
    });
}
