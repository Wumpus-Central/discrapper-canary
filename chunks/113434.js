n.d(t, {
    B4: () => eb,
    B6: () => q,
    Bd: () => em,
    DU: () => es,
    Fr: () => ea,
    GI: () => eu,
    Gd: () => eT,
    I: () => eh,
    J2: () => G,
    Jf: () => en,
    KX: () => ef,
    OH: () => e_,
    Qy: () => eN,
    Rf: () => et,
    _Q: () => ep,
    _s: () => ed,
    bA: () => W,
    e5: () => H,
    eN: () => Y,
    eQ: () => eI,
    iO: () => eo,
    kJ: () => el,
    me: () => eE,
    pe: () => Q,
    qI: () => eO,
    qb: () => ev,
    sf: () => ey,
    t5: () => ei,
    tP: () => z,
    uA: () => er,
    vf: () => eS,
    z: () => $,
    z6: () => ec,
    zP: () => eA
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
    v = n(930153),
    b = n(358085),
    y = n(74538),
    O = n(617136),
    I = n(915750),
    S = n(272008),
    T = n(569984),
    N = n(497505),
    A = n(918701),
    C = n(977156),
    R = n(569743),
    P = n(373370),
    w = n(475595),
    D = n(566078),
    L = n(46140),
    x = n(981631),
    M = n(474936),
    k = n(388032);
let j = -1,
    U = 1;
function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = r.useState(!1),
        i = (0, d.Wu)([T.Z], () => [...T.Z.quests.values()]),
        o = (0, d.Wu)([T.Z], () => [...T.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: s } = (0, d.cj)([T.Z], () => ({
            isFetchingCurrentQuests: T.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: T.Z.lastFetchedCurrentQuests
        })),
        l = (0, C.cB)({ location: L.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            'cache-only' !== e.fetchPolicy && ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === s)) && l && !t && !a && (n(!0), (0, S.xw)(), (0, R.Z)({ location: L.dr.USE_QUESTS }) && (0, S.w)(N.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, l, t, a, s]),
        {
            quests: i,
            excludedQuests: o,
            isFetchingCurrentQuests: a
        }
    );
}
function B(e) {
    return e.sort((e, t) => {
        var n, r, i, o, a, s;
        let l = !(0, A.zi)(e),
            c = !(0, A.zi)(t),
            u = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
            d = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
        return l !== c ? (l ? j : U) : u !== d ? (u ? j : U) : l && c ? V(null === (a = e.config) || void 0 === a ? void 0 : a.expiresAt, null === (s = t.config) || void 0 === s ? void 0 : s.expiresAt, 1) : V(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 0);
    });
}
function V(e, t, n) {
    let r = 0 === n ? j : U;
    return e.localeCompare(t) * r;
}
function F(e) {
    let t = r.useRef([]);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (t.current.length > 0 && t.current.length === e.length) return t.current;
        let n = B(e).map((e) => e.id);
        return (t.current = n), n;
    }, [e]);
}
function Z(e) {
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
                return i !== ((null === (r = t.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null) ? (i ? j : U) : V(D.r.build(e.config).rewardsExpireAt, D.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var H = (function (e) {
    return (e.ALL = 'all'), (e.CLAIMED = 'claimed'), e;
})({});
function W(e) {
    let { quests: t, isFetchingCurrentQuests: n } = G({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = F(t),
        o = Z(t),
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
function Y() {
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
function K() {
    let { quests: e, isFetchingCurrentQuests: t } = G({ fetchPolicy: 'cache-only' }),
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
function z(e) {
    let t = K();
    return r.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, d.e7)([p.default], () => p.default.locale);
    return r.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function Q(e) {
    return (0, d.e7)([T.Z], () => T.Z.isProgressingOnDesktop(e.id));
}
function X(e) {
    return r.useMemo(() => (0, A.Bz)(e), [e]);
}
function J(e) {
    let t = (0, d.e7)([T.Z], () => T.Z.getOptimisticProgress(e.id, s.X.WATCH_VIDEO));
    return r.useMemo(() => (0, A.BM)(e), [e, t]);
}
function $(e) {
    let t = Q(e),
        n = X(e),
        r = J(e);
    return t || n || r;
}
let ee = 1,
    et = (e) => {
        let t = r.useCallback(() => (0, A.il)(e), [e]),
            [n, i] = r.useState(t()),
            o = r.useCallback(() => i(t()), [t]),
            a = $(e);
        return (
            r.useEffect(() => {
                var t, n, r;
                if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null || !a) {
                    o();
                    return;
                }
                let i = window.setInterval(() => {
                    o();
                }, g.Z.Millis.SECOND * ee);
                return () => {
                    clearInterval(i), o();
                };
            }, [e, a, o]),
            n
        );
    };
function en(e) {
    return r.useMemo(() => (0, A.b7)(e), [e]);
}
let er = (e) => {
    let { quest: t, questContent: n } = e,
        r = ed({ quest: t }),
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
function ei(e, t, n) {
    let { targetMinutes: r } = et(e),
        i = en(e),
        o = er({
            quest: e,
            questContent: n
        });
    if ((0, A.$J)(e) && !(0, A.Nj)({ quest: e }))
        return k.NW.format(k.t['l4S+cX'], {
            minutes: r,
            onClick: o,
            gameTitle: D.r.build(e.config).application.name
        });
    if ((0, A.$J)(e))
        return k.NW.format(k.t.Ajlcd3, {
            minutes: r,
            onClick: o,
            gameTitle: D.r.build(e.config).application.name
        });
    if ((0, A.q8)(e)) {
        var a;
        let t = null === (a = e.config.videoMetadata) || void 0 === a ? void 0 : a.messages.videoTitle;
        return null == t ? k.NW.string(k.t['o+e9ys']) : k.NW.formatToPlainString(k.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != i) return i.title;
    if ((0, A.pO)(e) && (0, A.KM)(e)) return k.NW.format(k.t['1NaRSk'], { minutes: r });
    let s = k.t['6zWtV1'];
    return (
        (0, A.Nj)({ quest: e }) && (s = k.t['wmOh/v']),
        k.NW.format(s, {
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function eo() {
    let { quests: e, isFetchingCurrentQuests: t } = G({ fetchPolicy: 'cache-or-network' }),
        n = K();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, A.vR)(t, N.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (i = n.get(t.id)) && void 0 !== i && i)) continue;
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
function ea(e) {
    let t = (0, d.e7)([T.Z], () => T.Z.quests),
        n = r.useMemo(() => (0, A.Jg)(t, e), [e, t]);
    return z(n) ? null : n;
}
function es(e) {
    var t;
    let n = (0, A.Xv)(e),
        { product: r, isFetching: i } = (0, _.T)(D.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function el(e) {
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
function ec() {
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
let eu = (e) => {
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
                        u(!1), null == o || o(null !== (r = null == e ? void 0 : e.errorHints) && void 0 !== r ? r : []);
                    }
                }, [c, i, o, n, t]),
                startingConsoleQuest: c,
                errorHints: a
            }
        );
    },
    ed = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ec(),
            r = $(t),
            i = 0 === n.length;
        return (0, A.$J)(t) && i && !r;
    },
    ef = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ec(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            o = E.Z.getArticleURL(x.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = E.Z.getArticleURL(x.BhN.QUEST_HOW_TO_XBOX),
            s = k.NW.format(k.t.beN4DA, {
                psHelpdeskArticle: o,
                xboxHelpdeskArticle: a
            }),
            l = k.NW.format(k.t.HVS7np, { helpdeskArticle: r ? o : a });
        return {
            message: i ? l : s,
            xboxURL: a,
            playstationURL: o
        };
    };
var e_ = (function (e) {
    return (e[(e.UNACCEPTED = 0)] = 'UNACCEPTED'), (e[(e.ACCEPTED = 1)] = 'ACCEPTED'), (e[(e.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CLAIMED = 4)] = 'CLAIMED'), e;
})({});
function ep(e) {
    var t, n, r;
    let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        o = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        a = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        s = et(e).percentComplete > 0;
    return a ? 4 : o ? 3 : s ? 2 : +!!i;
}
function eh(e) {
    let t = (0, d.e7)([p.default], () => p.default.locale),
        { percentComplete: n } = et(e),
        r = en(e),
        i = null != r ? r.completedRatio : n,
        o = 100 * i,
        a = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, v.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: o,
        completedRatioDisplay: a
    };
}
function em(e) {
    var t, n;
    let r = et(e),
        i = (0, A.b7)(e),
        o = (0, P.DD)({
            quest: e,
            taskDetails: r,
            location: L.dr.QUEST_HOME_DESKTOP,
            questContent: N.jn.QUEST_HOME_DESKTOP
        }),
        a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        s = q(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    return a ? k.NW.formatToPlainString(k.t.lOVr0N, { claimDate: s }) : null != i ? i.description : null != o ? o : null;
}
function eg(e) {
    return [(0, d.e7)([T.Z], () => T.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, S.OR)(e, t), [e])];
}
function eE(e, t) {
    let [n, i] = eg(e.id),
        o = r.useMemo(() => (0, A.yH)(e), [e]),
        l = o.includes(L.cd.DESKTOP),
        c = o.includes(L.cd.CONSOLE),
        u = Q(e),
        d = X(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: s.X.PLAY_ON_DESKTOP }, () => L.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ON_DESKTOP_V2 }, () => L.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ACTIVITY }, () => L.cd.DESKTOP)
                    .with({ taskType: s.X.WATCH_VIDEO }, () => L.cd.DESKTOP)
                    .with({ taskType: s.X.STREAM_ON_DESKTOP }, () => L.cd.DESKTOP)
                    .with({ taskType: s.X.PLAY_ON_XBOX }, () => L.cd.CONSOLE)
                    .with({ taskType: s.X.PLAY_ON_PLAYSTATION }, () => L.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        _ = u ? L.cd.DESKTOP : d ? L.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: _,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: L.cd.CONSOLE }, () => N.LI.CONSOLE)
                    .with({ currentProgressingPlatform: L.cd.DESKTOP }, () => N.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: L.cd.CONSOLE
                        },
                        () => N.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: L.cd.DESKTOP
                        },
                        () => N.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: L.cd.CONSOLE
                        },
                        () => N.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: L.cd.DESKTOP
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
function ev(e) {
    var t, n;
    let r = en(e),
        i = et(e),
        [o] = eE(e, i),
        a = z(e),
        l = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        c = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        u = null == r,
        d = s.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        _ = l && !c && !a && u && (d || (f && o === N.LI.DESKTOP)),
        p = (0, b.isWeb)() && _ && !(0, A.Gd)(e),
        h = (0, b.isMac)() && i.taskType === s.X.STREAM_ON_DESKTOP && _,
        m = [];
    return h && m.push(k.NW.string(k.t.MFGxFB)), p && m.push(k.NW.string(k.t.BV6xDg)), m;
}
function eb(e) {
    var t;
    return null !== (t = (0, d.e7)([T.Z], () => T.Z.quests).get(e)) && void 0 !== t ? t : null;
}
function ey(e) {
    let t = (0, d.e7)([T.Z], () => T.Z.getQuest(e), [e]);
    return o()(null != t, 'Unknown quest ID '.concat(e)), t;
}
function eO(e) {
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
function eI(e) {
    var t, n;
    let r = (0, d.e7)([p.default], () => p.default.locale),
        i = et(e),
        [o] = eE(e, i);
    if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return k.NW.string(k.t['ij5E//']);
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && i.percentComplete > 0) {
        let e = (0, v.T3)(r, i.percentComplete, { roundingMode: 'floor' });
        return k.NW.formatToPlainString(k.t.lVZaXF, { percent: e });
    }
    return o === N.LI.SELECT ? k.NW.string(k.t.EMrUHR) : (0, A.$J)(e) ? k.NW.string(k.t.mOrpXF) : k.NW.string(k.t['7e5k7O']);
}
function eS(e, t, n) {
    var i;
    let o = q(r.useMemo(() => D.r.build(e.config).rewardsExpireAt, [e.config])),
        a = et(e),
        s = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.completedAt) != null,
        l = $(e),
        c = (0, P.DD)({
            quest: e,
            location: L.dr.QUESTS_BAR,
            questContent: N.jn.QUEST_BAR_V2,
            taskDetails: a
        });
    return s
        ? k.NW.formatToPlainString(k.t.APddvL, { expirationDate: o })
        : t
          ? n === N.LI.SELECT
              ? k.NW.string(k.t.sWUpNz)
              : c
          : (0, A.q8)(e)
            ? k.NW.string(k.t['o+e9ys'])
            : a.percentComplete > 0
              ? l
                  ? (0, A.AV)({
                        quest: e,
                        taskDetails: a
                    })
                  : k.NW.string(k.t.mOrpXF)
              : k.NW.string(k.t.S6UUc3);
}
function eT(e, t) {
    let n = (0, d.e7)([T.Z], () => T.Z.getQuest(e), [e]),
        i = (0, f.ZP)(),
        o = r.useMemo(() => (null == n ? void 0 : n.config.features.includes(L.S7.QUESTS_CDN)) === !0, [n]);
    return r.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, w.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, u.wj)(i) ? x.BRd.DARK : x.BRd.LIGHT,
                      newCdn: o
                  }),
        [i, t, e, null == n ? void 0 : n.config.cosponsorMetadata, o]
    );
}
function eN(e) {
    let t = D.r.build(e).defaultReward.messages.name,
        n = (0, A.Kr)(e),
        r = (0, A.f$)(e),
        i = (0, d.e7)([m.default], () => m.default.getCurrentUser()),
        o = null != i && y.ZP.isPremium(i, M.p9.TIER_2);
    if (null == n) return k.NW.formatToPlainString(k.t.l9uXLy, { decorationName: t });
    let a = k.NW.formatToPlainString(k.t.gWlmFR, {
            duration: n,
            rewardName: t
        }),
        s = k.NW.formatToPlainString(k.t.NpQ80d, {
            duration: n,
            rewardName: t
        }),
        l = r && o ? a : s;
    return r
        ? l
        : k.NW.formatToPlainString(k.t.tTlItr, {
              duration: n,
              decorationName: t
          });
}
function eA(e) {
    return (0, d.e7)([T.Z], () => {
        var t;
        return null != e ? (null === (t = T.Z.questToDeliverForPlacement.get(e)) || void 0 === t ? void 0 : t.decisionId) : void 0;
    });
}
