r.d(n, {
    B4: function () {
        return eb;
    },
    B6: function () {
        return X;
    },
    Bd: function () {
        return eg;
    },
    DU: function () {
        return eu;
    },
    Fr: function () {
        return el;
    },
    GI: function () {
        return ef;
    },
    GU: function () {
        return eT;
    },
    Gd: function () {
        return eN;
    },
    I: function () {
        return em;
    },
    J2: function () {
        return V;
    },
    Jf: function () {
        return ei;
    },
    KX: function () {
        return eh;
    },
    OH: function () {
        return s;
    },
    Rf: function () {
        return er;
    },
    _Q: function () {
        return ep;
    },
    _s: function () {
        return e_;
    },
    bA: function () {
        return K;
    },
    e5: function () {
        return a;
    },
    eN: function () {
        return z;
    },
    eQ: function () {
        return eS;
    },
    iO: function () {
        return eo;
    },
    kJ: function () {
        return ec;
    },
    me: function () {
        return ev;
    },
    qI: function () {
        return ey;
    },
    qb: function () {
        return eI;
    },
    t5: function () {
        return es;
    },
    tP: function () {
        return Q;
    },
    uA: function () {
        return ea;
    },
    vf: function () {
        return eA;
    },
    z: function () {
        return et;
    },
    z6: function () {
        return ed;
    }
});
var i,
    a,
    s,
    o = r(47120);
var l = r(653041);
var u = r(627341);
var c = r(192379),
    d = r(278074),
    f = r(754700),
    _ = r(959078),
    h = r(846519),
    p = r(780384),
    m = r(442837),
    g = r(410030),
    E = r(583434),
    v = r(706454),
    I = r(553795),
    T = r(78839),
    b = r(70956),
    y = r(63063),
    S = r(930153),
    A = r(358085),
    N = r(617136),
    C = r(272008),
    R = r(569984),
    O = r(497505),
    D = r(918701),
    L = r(977156),
    x = r(665430),
    w = r(569743),
    P = r(585500),
    M = r(475595),
    k = r(566078),
    U = r(46140),
    B = r(981631),
    G = r(388032);
let Z = -1,
    F = 1;
function V() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [n, r] = c.useState(!1),
        i = (0, m.Wu)([R.Z], () => [...R.Z.quests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: s } = (0, m.cj)([R.Z], () => ({
            isFetchingCurrentQuests: R.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: R.Z.lastFetchedCurrentQuests
        })),
        o = (0, L.cB)({ location: U.dr.USE_QUESTS });
    return (
        c.useEffect(() => {
            if ('cache-only' !== e.fetchPolicy) ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === s)) && o && !n && !a && (r(!0), (0, C.xw)(), (0, w.Z)({ location: U.dr.USE_QUESTS }) && (0, C.w)(O.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, o, n, a, s]),
        {
            quests: i,
            isFetchingCurrentQuests: a
        }
    );
}
function j(e) {
    return e.sort((e, n) => {
        var r, i, a, s, o, l;
        let u = !(0, D.zi)(e),
            c = !(0, D.zi)(n),
            d = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
            f = (null === (i = n.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null;
        return u !== c ? (u ? Z : F) : d !== f ? (d ? Z : F) : u && c ? H(null === (o = e.config) || void 0 === o ? void 0 : o.expiresAt, null === (l = n.config) || void 0 === l ? void 0 : l.expiresAt, 1) : H(null === (a = e.config) || void 0 === a ? void 0 : a.expiresAt, null === (s = n.config) || void 0 === s ? void 0 : s.expiresAt, 0);
    });
}
function H(e, n, r) {
    let i = 0 === r ? Z : F;
    return e.localeCompare(n) * i;
}
function Y(e) {
    let n = c.useRef([]);
    return c.useMemo(() => {
        if (0 === e.length) return [];
        if (n.current.length > 0 && n.current.length === e.length) return n.current;
        let r = j(e).map((e) => e.id);
        return (n.current = r), r;
    }, [e]);
}
function W(e) {
    let n = c.useMemo(
            () =>
                e.filter((e) => {
                    var n, r;
                    let i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                        a = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null;
                    return i && a;
                }),
            [e]
        ),
        r = c.useRef([]);
    return c.useMemo(() => {
        if (0 === n.length) return [];
        if (r.current.length > 0 && r.current.length === n.length) return r.current;
        let e = n
            .sort((e, n) => {
                var r, i;
                let a = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null;
                if (a !== ((null === (i = n.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null)) return a ? Z : F;
                let s = k.r.build(e.config).rewardsExpireAt;
                return H(s, k.r.build(n.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (r.current = e), e;
    }, [n]);
}
function K(e) {
    let { quests: n, isFetchingCurrentQuests: r } = V({ fetchPolicy: 'cache-and-network' }),
        i = new Map(n.map((e) => [e.id, e])),
        a = Y(n),
        s = W(n),
        o = [],
        l = [];
    for (let n of (o = 'all' === e ? a : s)) {
        let e = i.get(n);
        null != e && l.push(e);
    }
    return {
        quests: l,
        isFetchingCurrentQuests: r
    };
}
function z() {
    let e = c.useRef(!1),
        n = (0, m.Wu)([R.Z], () => Array.from(R.Z.claimedQuests.values())),
        r = (0, m.e7)([R.Z], () => R.Z.isFetchingClaimedQuests);
    return (
        c.useEffect(() => {
            !r && !e.current && ((e.current = !0), (0, C.Ag)());
        }, [r]),
        {
            claimedQuests: n,
            isFetchingClaimedQuests: r
        }
    );
}
function q() {
    let { quests: e, isFetchingCurrentQuests: n } = V({ fetchPolicy: 'cache-only' }),
        [r, i] = c.useState(() => new Map(e.map((e) => [e.id, (0, D.zi)(e)])));
    return (
        c.useEffect(() => {
            if (n) return;
            let r = [];
            for (let n of e)
                if (null == n || (0, D.zi)(n)) null != n && (0, D.zi)(n) && i((e) => (e.has(n.id) ? e : new Map(e).set(n.id, !0)));
                else {
                    let e = new h.V7(),
                        a = () => {
                            let s = Date.parse(n.config.expiresAt) - Date.now();
                            e.start(s, () => {
                                (0, D.zi)(n) ? i((e) => new Map(e).set(n.id, !0)) : a();
                            }),
                                r.push(e);
                        };
                    a();
                }
            return () => {
                for (let e of r) e.stop();
            };
        }, [e, n]),
        r
    );
}
function Q(e) {
    let n = q();
    return c.useMemo(() => {
        var r;
        return null != e && null !== (r = n.get(e.id)) && void 0 !== r && r;
    }, [e, n]);
}
function X(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        r = (0, m.e7)([v.default], () => v.default.locale);
    return c.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(r, n)), [e, n, r]);
}
function J(e) {
    return (0, m.e7)([R.Z], () => R.Z.isProgressingOnDesktop(e.id));
}
function $(e) {
    return c.useMemo(() => (0, D.Bz)(e), [e]);
}
function ee(e) {
    let n = (0, m.e7)([R.Z], () => R.Z.getOptimisticProgress(e.id, f.X.WATCH_VIDEO));
    return c.useMemo(() => (0, D.BM)(e), [e, n]);
}
function et(e) {
    let n = J(e),
        r = $(e),
        i = ee(e);
    return n || r || i;
}
!(function (e) {
    (e[(e.DESC = 0)] = 'DESC'), (e[(e.ASC = 1)] = 'ASC');
})(i || (i = {})),
    !(function (e) {
        (e.ALL = 'all'), (e.CLAIMED = 'claimed');
    })(a || (a = {}));
let en = 1,
    er = (e) => {
        let n = c.useCallback(() => (0, D.il)(e), [e]),
            [r, i] = c.useState(n()),
            a = c.useCallback(() => i(n()), [n]),
            s = et(e);
        return (
            c.useEffect(() => {
                var n, r, i;
                if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null || (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null || !s) {
                    a();
                    return;
                }
                let o = window.setInterval(() => {
                    a();
                }, b.Z.Millis.SECOND * en);
                return () => {
                    clearInterval(o), a();
                };
            }, [e, s, a]),
            r
        );
    };
function ei(e) {
    return c.useMemo(() => (0, D.b7)(e), [e]);
}
let ea = (e) => {
    let { quest: n, questContent: r } = e,
        i = e_({ quest: n });
    return () => {
        i
            ? (0, D.gI)(
                  { quest: n },
                  {
                      content: r,
                      ctaContent: N.jZ.CONNECT_CONSOLE_LINK
                  }
              )
            : (0, D.V$)(
                  { quest: n },
                  {
                      content: r,
                      ctaContent: N.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                  }
              );
    };
};
function es(e, n, r) {
    let { targetMinutes: i } = er(e),
        a = ei(e),
        s = ea({
            quest: e,
            questContent: r
        });
    if ((0, D.$J)(e) && !(0, D.Nj)({ quest: e }))
        return G.intl.format(G.t['l4S+cX'], {
            minutes: i,
            onClick: s,
            gameTitle: k.r.build(e.config).application.name
        });
    if ((0, D.$J)(e))
        return G.intl.format(G.t.Ajlcd3, {
            minutes: i,
            onClick: s,
            gameTitle: k.r.build(e.config).application.name
        });
    if ((0, D.q8)(e)) {
        var o;
        let n = null === (o = e.config.videoMetadata) || void 0 === o ? void 0 : o.messages.videoTitle;
        return null == n ? G.intl.string(G.t['o+e9ys']) : G.intl.formatToPlainString(G.t['9m9MnZ'], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, D.pO)(e) && (0, D.KM)(e)) return G.intl.format(G.t['1NaRSk'], { minutes: i });
    let l = G.t['6zWtV1'];
    return (
        (0, D.Nj)({ quest: e }) && (l = G.t['wmOh/v']),
        G.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function eo() {
    let { quests: e, isFetchingCurrentQuests: n } = V({ fetchPolicy: 'cache-or-network' }),
        r = q();
    return c.useMemo(() => {
        let i = [];
        if (n || 0 === e.length) return i;
        for (let n of e) {
            var a;
            if (!(0, D.vR)(n, O.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (a = r.get(n.id)) && void 0 !== a && a)) continue;
            if ((null == n ? void 0 : n.userStatus) == null) {
                i.push(n);
                continue;
            }
            let e = null != n.userStatus.claimedAt,
                s = (0, D.zE)(n.userStatus, O.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !s) {
                i.push(n);
                continue;
            }
        }
        return i;
    }, [e, r, n]);
}
function el(e) {
    let n = (0, m.e7)([R.Z], () => R.Z.quests),
        r = c.useMemo(() => (0, D.Jg)(n, e), [e, n]);
    return Q(r) ? null : r;
}
function eu(e) {
    var n;
    let r = (0, D.Xv)(e),
        { product: i, isFetching: a } = (0, E.T)(k.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: r,
        avatarDecoration: null == i ? void 0 : null === (n = i.items) || void 0 === n ? void 0 : n[0],
        isFetching: a
    };
}
function ec(e) {
    return c.useMemo(
        () => ({
            handleComplete: () => (0, C.Wf)(e),
            handleProgress: (n) => (0, C.Wf)(e, n),
            handleResetStatusClick: () => (0, C.eT)(e),
            handleResetDismissibilityClick: () => (0, C.T0)(e),
            handleOverrideDeliveryClick: () => (0, C.EW)(e)
        }),
        [e]
    );
}
function ed() {
    let { fetching: e, accounts: n } = (0, m.cj)([I.Z], () => ({
            fetching: I.Z.isFetching(),
            accounts: I.Z.getAccounts()
        })),
        {
            xboxAccounts: r,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a
        } = c.useMemo(() => {
            let e = n.filter((e) => !1 === e.revoked),
                r = e.filter((e) => e.type === B.ABu.XBOX),
                i = e.filter((e) => e.type === B.ABu.PLAYSTATION),
                a = r.concat(i);
            return {
                xboxAccounts: r,
                playstationAccounts: i,
                xboxAndPlaystationAccounts: a
            };
        }, [n]);
    return {
        fetching: e,
        xboxAccounts: r,
        playstationAccounts: i,
        xboxAndPlaystationAccounts: a
    };
}
let ef = (e) => {
        let { questId: n, preview: r, beforeRequest: i, afterRequest: a } = e,
            [s, o] = c.useState([]),
            [l, u] = c.useState(!1),
            d = (0, m.e7)([I.Z], () => I.Z.getAccounts());
        return (
            c.useEffect(() => {
                o((e) => e.filter((e) => e.type !== _.K.EXPIRED_CREDENTIAL));
            }, [d]),
            {
                startConsoleQuest: c.useCallback(async () => {
                    if (l) return;
                    null == i || i(), u(!0);
                    let e = null;
                    try {
                        (e = await (0, C.CS)(n, r)), o(e.errorHints);
                    } finally {
                        var s;
                        u(!1), null == a || a(null !== (s = null == e ? void 0 : e.errorHints) && void 0 !== s ? s : []);
                    }
                }, [l, i, a, r, n]),
                startingConsoleQuest: l,
                errorHints: s
            }
        );
    },
    e_ = (e) => {
        let { quest: n } = e,
            { xboxAndPlaystationAccounts: r } = ed(),
            i = et(n),
            a = 0 === r.length;
        return (0, D.$J)(n) && a && !i;
    },
    eh = () => {
        let { xboxAccounts: e, playstationAccounts: n } = ed(),
            r = e.length > 0,
            i = n.length > 0,
            a = (r && !i) || (!r && i),
            s = y.Z.getArticleURL(B.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = y.Z.getArticleURL(B.BhN.QUEST_HOW_TO_XBOX),
            l = G.intl.format(G.t.beN4DA, {
                psHelpdeskArticle: s,
                xboxHelpdeskArticle: o
            }),
            u = G.intl.format(G.t.HVS7np, { helpdeskArticle: i ? s : o });
        return {
            message: a ? u : l,
            xboxURL: o,
            playstationURL: s
        };
    };
function ep(e) {
    var n, r, i;
    let a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        o = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null,
        l = er(e).percentComplete > 0;
    if (o) return 4;
    if (s) return 3;
    if (l) return 2;
    else if (a) return 1;
    else return 0;
}
function em(e) {
    let n = (0, m.e7)([v.default], () => v.default.locale),
        { percentComplete: r } = er(e),
        i = ei(e),
        a = null != i ? i.completedRatio : r,
        s = 100 * a,
        o = null != i ? ''.concat(null == i ? void 0 : i.progress, '/').concat(null == i ? void 0 : i.target) : (0, S.T3)(n, a, { roundingMode: 'floor' });
    return {
        completedRatio: a,
        percentComplete: s,
        completedRatioDisplay: o
    };
}
function eg(e) {
    var n, r;
    let i = er(e),
        a = (0, D.b7)(e),
        s = (0, P.D)({
            quest: e,
            taskDetails: i,
            location: U.dr.QUEST_HOME_DESKTOP,
            questContent: O.jn.QUEST_HOME_DESKTOP
        }),
        o = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
        l = X(null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt);
    if (o) return G.intl.formatToPlainString(G.t.lOVr0N, { claimDate: l });
    if (null != a) return a.description;
    if (null != s) return s;
    return null;
}
function eE(e) {
    let n = (0, m.e7)([R.Z], () => R.Z.selectedTaskPlatform(e));
    return [n, c.useCallback((n) => (0, C.OR)(e, n), [e])];
}
function ev(e, n) {
    let [r, i] = eE(e.id),
        a = c.useMemo(() => (0, D.yH)(e), [e]),
        s = a.includes(U.cd.DESKTOP),
        o = a.includes(U.cd.CONSOLE),
        l = J(e),
        u = $(e),
        _ = (0, x.pF)({ location: U.dr.QUESTS_BAR }),
        h = c.useMemo(
            () =>
                (0, d.EQ)(n)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: f.X.PLAY_ON_DESKTOP }, () => U.cd.DESKTOP)
                    .with({ taskType: f.X.PLAY_ON_DESKTOP_V2 }, () => U.cd.DESKTOP)
                    .with({ taskType: f.X.PLAY_ACTIVITY }, () => U.cd.DESKTOP)
                    .with({ taskType: f.X.WATCH_VIDEO }, () => U.cd.DESKTOP)
                    .with({ taskType: f.X.STREAM_ON_DESKTOP }, () => U.cd.DESKTOP)
                    .with({ taskType: f.X.PLAY_ON_XBOX }, () => U.cd.CONSOLE)
                    .with({ taskType: f.X.PLAY_ON_PLAYSTATION }, () => U.cd.CONSOLE)
                    .exhaustive(),
            [n]
        ),
        p = l ? U.cd.DESKTOP : u ? U.cd.CONSOLE : null;
    return [
        c.useMemo(
            () =>
                (0, d.EQ)({
                    lastPlatformProgress: h,
                    currentProgressingPlatform: p,
                    selectedPlatform: r
                })
                    .with({ currentProgressingPlatform: U.cd.CONSOLE }, () => O.LI.CONSOLE)
                    .with({ currentProgressingPlatform: U.cd.DESKTOP }, () => O.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: U.cd.CONSOLE
                        },
                        () => O.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: U.cd.DESKTOP
                        },
                        () => O.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: U.cd.CONSOLE
                        },
                        () => O.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: U.cd.DESKTOP
                        },
                        () => O.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (o && s && _ ? O.LI.SELECT : o ? O.LI.CONSOLE : O.LI.DESKTOP)
                    )
                    .exhaustive(),
            [o, s, _, h, p, r]
        ),
        a,
        i
    ];
}
function eI(e) {
    var n, r;
    let i = ei(e),
        a = er(e),
        [s] = ev(e, a),
        o = Q(e),
        l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        u = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        c = null == i,
        d = f.T.DESKTOP.has(a.taskType) && a.percentComplete > 0,
        _ = 0 === a.percentComplete,
        h = l && !u && !o && c && (d || (_ && s === O.LI.DESKTOP)),
        p = (0, A.isWeb)() && h && !(0, D.Gd)(e),
        m = (0, A.isMac)() && a.taskType === f.X.STREAM_ON_DESKTOP && h,
        g = eT(e),
        E = [];
    for (let e of (m && E.push(G.intl.string(G.t.MFGxFB)), p && E.push(G.intl.string(G.t.BV6xDg)), g)) E.push(e);
    return E;
}
function eT(e) {
    let n = (0, m.e7)([T.ZP], () => T.ZP.getPremiumSubscription()),
        r = (0, D.Bg)(e.config) && (null == n ? void 0 : n.isPurchasedExternally) === !0,
        i = [];
    return r && i.push(G.intl.string(G.t.nnfWPD)), i;
}
function eb(e) {
    var n;
    return null !== (n = (0, m.e7)([R.Z], () => R.Z.quests).get(e)) && void 0 !== n ? n : null;
}
function ey(e) {
    let { mode: n, questContent: r, questId: i } = e,
        a = c.useRef(null);
    c.useEffect(() => {
        null != i &&
            a.current !== n &&
            ((0, N.Ic)({
                mode: n,
                prevMode: a.current,
                questContent: r,
                questId: i
            }),
            (a.current = n));
    }, [i, r, n]),
        c.useEffect(() => {
            if (null != i)
                return () => {
                    (0, N.Ic)({
                        mode: null,
                        prevMode: a.current,
                        questContent: r,
                        questId: i
                    });
                };
        }, [i, r]);
}
function eS(e) {
    var n, r;
    let i = (0, m.e7)([v.default], () => v.default.locale),
        a = er(e),
        [s] = ev(e, a),
        o = (0, x.pF)({ location: U.dr.QUESTS_BAR });
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null) return G.intl.string(G.t['ij5E//']);
    if ((null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null && a.percentComplete > 0) {
        let e = (0, S.T3)(i, a.percentComplete, { roundingMode: 'floor' });
        return G.intl.formatToPlainString(G.t.lVZaXF, { percent: e });
    }
    return o && s === O.LI.SELECT ? G.intl.string(G.t.EMrUHR) : (0, D.$J)(e) ? G.intl.string(G.t.mOrpXF) : G.intl.string(G.t['7e5k7O']);
}
function eA(e, n, r) {
    var i;
    let a = X(c.useMemo(() => k.r.build(e.config).rewardsExpireAt, [e.config])),
        s = er(e),
        o = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.completedAt) != null,
        l = et(e),
        u = (0, P.D)({
            quest: e,
            location: U.dr.QUESTS_BAR,
            questContent: O.jn.QUEST_BAR_V2,
            taskDetails: s
        });
    if (o) return G.intl.formatToPlainString(G.t.APddvL, { expirationDate: a });
    if (n) return r === O.LI.SELECT ? G.intl.string(G.t.sWUpNz) : u;
    if ((0, D.q8)(e)) return G.intl.string(G.t['o+e9ys']);
    if (s.percentComplete > 0)
        return l
            ? (0, D.AV)({
                  quest: e,
                  taskDetails: s
              })
            : G.intl.string(G.t.mOrpXF);
    return G.intl.string(G.t.S6UUc3);
}
function eN(e, n) {
    let r = (0, m.e7)([R.Z], () => R.Z.getQuest(e), [e]),
        i = (0, g.ZP)(),
        a = c.useMemo(() => (null == r ? void 0 : r.config.features.includes(U.S7.QUESTS_CDN)) === !0, [r]);
    return c.useMemo(
        () =>
            (null == r ? void 0 : r.config.cosponsorMetadata) == null
                ? null
                : (0, M.Rt)(e, r.config.cosponsorMetadata.logotype, {
                      theme: null != n ? n : (0, p.wj)(i) ? B.BRd.DARK : B.BRd.LIGHT,
                      newCdn: a
                  }),
        [i, n, e, null == r ? void 0 : r.config.cosponsorMetadata, a]
    );
}
!(function (e) {
    (e[(e.UNACCEPTED = 0)] = 'UNACCEPTED'), (e[(e.ACCEPTED = 1)] = 'ACCEPTED'), (e[(e.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CLAIMED = 4)] = 'CLAIMED');
})(s || (s = {}));
