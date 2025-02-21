n.d(t, {
    B4: () => eO,
    B6: () => Q,
    Bd: () => eg,
    DU: () => el,
    Fr: () => es,
    GI: () => ed,
    GU: () => ey,
    Gd: () => eA,
    I: () => em,
    J2: () => B,
    Jf: () => er,
    KX: () => ep,
    OH: () => e_,
    Qy: () => eC,
    Rf: () => en,
    _Q: () => eh,
    _s: () => ef,
    bA: () => Y,
    e5: () => W,
    eN: () => K,
    eQ: () => eT,
    iO: () => ea,
    kJ: () => ec,
    me: () => ev,
    pe: () => X,
    qI: () => eI,
    qb: () => eb,
    sf: () => eS,
    t5: () => eo,
    tP: () => q,
    uA: () => ei,
    vf: () => eN,
    z: () => ee,
    z6: () => eu,
    zP: () => eR
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
    p = n(583434),
    _ = n(706454),
    h = n(553795),
    m = n(594174),
    g = n(78839),
    E = n(70956),
    v = n(63063),
    b = n(930153),
    y = n(358085),
    O = n(74538),
    S = n(617136),
    I = n(915750),
    T = n(272008),
    N = n(569984),
    A = n(497505),
    C = n(918701),
    R = n(977156),
    P = n(569743),
    w = n(373370),
    D = n(475595),
    x = n(566078),
    L = n(46140),
    M = n(981631),
    k = n(474936),
    j = n(388032);
let U = -1,
    G = 1;
function B() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = r.useState(!1),
        i = (0, d.Wu)([N.Z], () => [...N.Z.quests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: a } = (0, d.cj)([N.Z], () => ({
            isFetchingCurrentQuests: N.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: N.Z.lastFetchedCurrentQuests
        })),
        s = (0, R.cB)({ location: L.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            'cache-only' !== e.fetchPolicy && ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === a)) && s && !t && !o && (n(!0), (0, T.xw)(), (0, P.Z)({ location: L.dr.USE_QUESTS }) && (0, T.w)(A.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, s, t, o, a]),
        {
            quests: i,
            isFetchingCurrentQuests: o
        }
    );
}
function Z(e) {
    return e.sort((e, t) => {
        var n, r, i, o, a, s;
        let l = !(0, C.zi)(e),
            c = !(0, C.zi)(t),
            u = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
            d = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
        return l !== c ? (l ? U : G) : u !== d ? (u ? U : G) : l && c ? F(null === (a = e.config) || void 0 === a ? void 0 : a.expiresAt, null === (s = t.config) || void 0 === s ? void 0 : s.expiresAt, 1) : F(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 0);
    });
}
function F(e, t, n) {
    let r = 0 === n ? U : G;
    return e.localeCompare(t) * r;
}
function V(e) {
    let t = r.useRef([]);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (t.current.length > 0 && t.current.length === e.length) return t.current;
        let n = Z(e).map((e) => e.id);
        return (t.current = n), n;
    }, [e]);
}
function H(e) {
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
                return i !== ((null === (r = t.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null) ? (i ? U : G) : F(x.r.build(e.config).rewardsExpireAt, x.r.build(t.config).rewardsExpireAt, 0);
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
        i = V(t),
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
        t = (0, d.Wu)([N.Z], () => Array.from(N.Z.claimedQuests.values())),
        n = (0, d.e7)([N.Z], () => N.Z.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, T.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n
        }
    );
}
function z() {
    let { quests: e, isFetchingCurrentQuests: t } = B({ fetchPolicy: 'cache-only' }),
        [n, i] = r.useState(() => new Map(e.map((e) => [e.id, (0, C.zi)(e)])));
    return (
        r.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, C.zi)(t)) null != t && (0, C.zi)(t) && i((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new c.V7(),
                        r = () => {
                            let o = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(o, () => {
                                (0, C.zi)(t) ? i((e) => new Map(e).set(t.id, !0)) : r();
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
function q(e) {
    let t = z();
    return r.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, d.e7)([_.default], () => _.default.locale);
    return r.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function X(e) {
    return (0, d.e7)([N.Z], () => N.Z.isProgressingOnDesktop(e.id));
}
function J(e) {
    return r.useMemo(() => (0, C.Bz)(e), [e]);
}
function $(e) {
    let t = (0, d.e7)([N.Z], () => N.Z.getOptimisticProgress(e.id, s.X.WATCH_VIDEO));
    return r.useMemo(() => (0, C.BM)(e), [e, t]);
}
function ee(e) {
    let t = X(e),
        n = J(e),
        r = $(e);
    return t || n || r;
}
let et = 1,
    en = (e) => {
        let t = r.useCallback(() => (0, C.il)(e), [e]),
            [n, i] = r.useState(t()),
            o = r.useCallback(() => i(t()), [t]),
            a = ee(e);
        return (
            r.useEffect(() => {
                var t, n, r;
                if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null || !a) {
                    o();
                    return;
                }
                let i = window.setInterval(() => {
                    o();
                }, E.Z.Millis.SECOND * et);
                return () => {
                    clearInterval(i), o();
                };
            }, [e, a, o]),
            n
        );
    };
function er(e) {
    return r.useMemo(() => (0, C.b7)(e), [e]);
}
let ei = (e) => {
    let { quest: t, questContent: n } = e,
        r = ef({ quest: t }),
        i = (0, I.WD)();
    return () => {
        r
            ? (0, C.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: S.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == i ? void 0 : i.getId()
                  }
              )
            : (0, C.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: S.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == i ? void 0 : i.getId()
                  }
              );
    };
};
function eo(e, t, n) {
    let { targetMinutes: r } = en(e),
        i = er(e),
        o = ei({
            quest: e,
            questContent: n
        });
    if ((0, C.$J)(e) && !(0, C.Nj)({ quest: e }))
        return j.NW.format(j.t['l4S+cX'], {
            minutes: r,
            onClick: o,
            gameTitle: x.r.build(e.config).application.name
        });
    if ((0, C.$J)(e))
        return j.NW.format(j.t.Ajlcd3, {
            minutes: r,
            onClick: o,
            gameTitle: x.r.build(e.config).application.name
        });
    if ((0, C.q8)(e)) {
        var a;
        let t = null === (a = e.config.videoMetadata) || void 0 === a ? void 0 : a.messages.videoTitle;
        return null == t ? j.NW.string(j.t['o+e9ys']) : j.NW.formatToPlainString(j.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != i) return i.title;
    if ((0, C.pO)(e) && (0, C.KM)(e)) return j.NW.format(j.t['1NaRSk'], { minutes: r });
    let s = j.t['6zWtV1'];
    return (
        (0, C.Nj)({ quest: e }) && (s = j.t['wmOh/v']),
        j.NW.format(s, {
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function ea() {
    let { quests: e, isFetchingCurrentQuests: t } = B({ fetchPolicy: 'cache-or-network' }),
        n = z();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, C.vR)(t, A.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (i = n.get(t.id)) && void 0 !== i && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                o = (0, C.zE)(t.userStatus, A.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !o) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function es(e) {
    let t = (0, d.e7)([N.Z], () => N.Z.quests),
        n = r.useMemo(() => (0, C.Jg)(t, e), [e, t]);
    return q(n) ? null : n;
}
function el(e) {
    var t;
    let n = (0, C.Xv)(e),
        { product: r, isFetching: i } = (0, p.T)(x.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function ec(e) {
    return r.useMemo(
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
function eu() {
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
let ed = (e) => {
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
                        (e = await (0, T.CS)(t, n)), s(e.errorHints);
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
    ef = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eu(),
            r = ee(t),
            i = 0 === n.length;
        return (0, C.$J)(t) && i && !r;
    },
    ep = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eu(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            o = v.Z.getArticleURL(M.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = v.Z.getArticleURL(M.BhN.QUEST_HOW_TO_XBOX),
            s = j.NW.format(j.t.beN4DA, {
                psHelpdeskArticle: o,
                xboxHelpdeskArticle: a
            }),
            l = j.NW.format(j.t.HVS7np, { helpdeskArticle: r ? o : a });
        return {
            message: i ? l : s,
            xboxURL: a,
            playstationURL: o
        };
    };
var e_ = (function (e) {
    return (e[(e.UNACCEPTED = 0)] = 'UNACCEPTED'), (e[(e.ACCEPTED = 1)] = 'ACCEPTED'), (e[(e.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CLAIMED = 4)] = 'CLAIMED'), e;
})({});
function eh(e) {
    var t, n, r;
    let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        o = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        a = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        s = en(e).percentComplete > 0;
    return a ? 4 : o ? 3 : s ? 2 : +!!i;
}
function em(e) {
    let t = (0, d.e7)([_.default], () => _.default.locale),
        { percentComplete: n } = en(e),
        r = er(e),
        i = null != r ? r.completedRatio : n,
        o = 100 * i,
        a = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, b.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: o,
        completedRatioDisplay: a
    };
}
function eg(e) {
    var t, n;
    let r = en(e),
        i = (0, C.b7)(e),
        o = (0, w.DD)({
            quest: e,
            taskDetails: r,
            location: L.dr.QUEST_HOME_DESKTOP,
            questContent: A.jn.QUEST_HOME_DESKTOP
        }),
        a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        s = Q(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    return a ? j.NW.formatToPlainString(j.t.lOVr0N, { claimDate: s }) : null != i ? i.description : null != o ? o : null;
}
function eE(e) {
    return [(0, d.e7)([N.Z], () => N.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, T.OR)(e, t), [e])];
}
function ev(e, t) {
    let [n, i] = eE(e.id),
        o = r.useMemo(() => (0, C.yH)(e), [e]),
        l = o.includes(L.cd.DESKTOP),
        c = o.includes(L.cd.CONSOLE),
        u = X(e),
        d = J(e),
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
        p = u ? L.cd.DESKTOP : d ? L.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: p,
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
                        () => (c && l ? A.LI.SELECT : c ? A.LI.CONSOLE : A.LI.DESKTOP)
                    )
                    .exhaustive(),
            [c, l, f, p, n]
        ),
        o,
        i
    ];
}
function eb(e) {
    var t, n;
    let r = er(e),
        i = en(e),
        [o] = ev(e, i),
        a = q(e),
        l = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        c = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        u = null == r,
        d = s.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        p = l && !c && !a && u && (d || (f && o === A.LI.DESKTOP)),
        _ = (0, y.isWeb)() && p && !(0, C.Gd)(e),
        h = (0, y.isMac)() && i.taskType === s.X.STREAM_ON_DESKTOP && p,
        m = ey(e),
        g = [];
    for (let e of (h && g.push(j.NW.string(j.t.MFGxFB)), _ && g.push(j.NW.string(j.t.BV6xDg)), m)) g.push(e);
    return g;
}
function ey(e) {
    let t = (0, d.e7)([g.ZP], () => g.ZP.getPremiumSubscription()),
        n = (0, C.Bg)(e.config) && (null == t ? void 0 : t.isPurchasedExternally) === !0,
        r = [];
    return n && r.push(j.NW.string(j.t.nnfWPD)), r;
}
function eO(e) {
    var t;
    return null !== (t = (0, d.e7)([N.Z], () => N.Z.quests).get(e)) && void 0 !== t ? t : null;
}
function eS(e) {
    let t = (0, d.e7)([N.Z], () => N.Z.getQuest(e), [e]);
    return o()(null != t, 'Unknown quest ID '.concat(e)), t;
}
function eI(e) {
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
    let r = (0, d.e7)([_.default], () => _.default.locale),
        i = en(e),
        [o] = ev(e, i);
    if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return j.NW.string(j.t['ij5E//']);
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && i.percentComplete > 0) {
        let e = (0, b.T3)(r, i.percentComplete, { roundingMode: 'floor' });
        return j.NW.formatToPlainString(j.t.lVZaXF, { percent: e });
    }
    return o === A.LI.SELECT ? j.NW.string(j.t.EMrUHR) : (0, C.$J)(e) ? j.NW.string(j.t.mOrpXF) : j.NW.string(j.t['7e5k7O']);
}
function eN(e, t, n) {
    var i;
    let o = Q(r.useMemo(() => x.r.build(e.config).rewardsExpireAt, [e.config])),
        a = en(e),
        s = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.completedAt) != null,
        l = ee(e),
        c = (0, w.DD)({
            quest: e,
            location: L.dr.QUESTS_BAR,
            questContent: A.jn.QUEST_BAR_V2,
            taskDetails: a
        });
    return s
        ? j.NW.formatToPlainString(j.t.APddvL, { expirationDate: o })
        : t
          ? n === A.LI.SELECT
              ? j.NW.string(j.t.sWUpNz)
              : c
          : (0, C.q8)(e)
            ? j.NW.string(j.t['o+e9ys'])
            : a.percentComplete > 0
              ? l
                  ? (0, C.AV)({
                        quest: e,
                        taskDetails: a
                    })
                  : j.NW.string(j.t.mOrpXF)
              : j.NW.string(j.t.S6UUc3);
}
function eA(e, t) {
    let n = (0, d.e7)([N.Z], () => N.Z.getQuest(e), [e]),
        i = (0, f.ZP)(),
        o = r.useMemo(() => (null == n ? void 0 : n.config.features.includes(L.S7.QUESTS_CDN)) === !0, [n]);
    return r.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, D.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, u.wj)(i) ? M.BRd.DARK : M.BRd.LIGHT,
                      newCdn: o
                  }),
        [i, t, e, null == n ? void 0 : n.config.cosponsorMetadata, o]
    );
}
function eC(e) {
    let t = x.r.build(e).defaultReward.messages.name,
        n = (0, C.Kr)(e),
        r = (0, C.f$)(e),
        i = (0, d.e7)([m.default], () => m.default.getCurrentUser()),
        o = null != i && O.ZP.isPremium(i, k.p9.TIER_2);
    if (null == n) return j.NW.formatToPlainString(j.t.l9uXLy, { decorationName: t });
    let a = j.NW.formatToPlainString(j.t.gWlmFR, {
            duration: n,
            rewardName: t
        }),
        s = j.NW.formatToPlainString(j.t.NpQ80d, {
            duration: n,
            rewardName: t
        }),
        l = r && o ? a : s;
    return r
        ? l
        : j.NW.formatToPlainString(j.t.tTlItr, {
              duration: n,
              decorationName: t
          });
}
function eR(e) {
    return (0, d.e7)([N.Z], () => {
        var t;
        return null != e ? (null === (t = N.Z.questToDeliverForPlacement.get(e)) || void 0 === t ? void 0 : t.decisionId) : void 0;
    });
}
