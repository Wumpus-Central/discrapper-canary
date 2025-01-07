r.d(n, {
    B4: function () {
        return eA;
    },
    B6: function () {
        return ee;
    },
    Bd: function () {
        return eI;
    },
    DU: function () {
        return ef;
    },
    Fr: function () {
        return ed;
    },
    GI: function () {
        return ep;
    },
    GU: function () {
        return eS;
    },
    Gd: function () {
        return eO;
    },
    I: function () {
        return ev;
    },
    J2: function () {
        return Y;
    },
    Jf: function () {
        return eo;
    },
    KX: function () {
        return eg;
    },
    OH: function () {
        return s;
    },
    Qy: function () {
        return eD;
    },
    Rf: function () {
        return es;
    },
    _Q: function () {
        return eE;
    },
    _s: function () {
        return em;
    },
    bA: function () {
        return Q;
    },
    e5: function () {
        return a;
    },
    eN: function () {
        return X;
    },
    eQ: function () {
        return eC;
    },
    iO: function () {
        return ec;
    },
    kJ: function () {
        return e_;
    },
    me: function () {
        return eb;
    },
    qI: function () {
        return eN;
    },
    qb: function () {
        return ey;
    },
    t5: function () {
        return eu;
    },
    tP: function () {
        return $;
    },
    uA: function () {
        return el;
    },
    vf: function () {
        return eR;
    },
    z: function () {
        return ei;
    },
    z6: function () {
        return eh;
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
    T = r(594174),
    b = r(78839),
    y = r(70956),
    S = r(63063),
    A = r(930153),
    N = r(358085),
    C = r(74538),
    R = r(617136),
    O = r(272008),
    D = r(569984),
    L = r(497505),
    x = r(918701),
    w = r(977156),
    P = r(665430),
    M = r(569743),
    k = r(585500),
    U = r(475595),
    B = r(566078),
    G = r(46140),
    Z = r(981631),
    F = r(474936),
    V = r(388032);
let j = -1,
    H = 1;
function Y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [n, r] = c.useState(!1),
        i = (0, m.Wu)([D.Z], () => [...D.Z.quests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: s } = (0, m.cj)([D.Z], () => ({
            isFetchingCurrentQuests: D.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: D.Z.lastFetchedCurrentQuests
        })),
        o = (0, w.cB)({ location: G.dr.USE_QUESTS });
    return (
        c.useEffect(() => {
            if ('cache-only' !== e.fetchPolicy) ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === s)) && o && !n && !a && (r(!0), (0, O.xw)(), (0, M.Z)({ location: G.dr.USE_QUESTS }) && (0, O.w)(L.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, o, n, a, s]),
        {
            quests: i,
            isFetchingCurrentQuests: a
        }
    );
}
function W(e) {
    return e.sort((e, n) => {
        var r, i, a, s, o, l;
        let u = !(0, x.zi)(e),
            c = !(0, x.zi)(n),
            d = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
            f = (null === (i = n.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null;
        return u !== c ? (u ? j : H) : d !== f ? (d ? j : H) : u && c ? K(null === (o = e.config) || void 0 === o ? void 0 : o.expiresAt, null === (l = n.config) || void 0 === l ? void 0 : l.expiresAt, 1) : K(null === (a = e.config) || void 0 === a ? void 0 : a.expiresAt, null === (s = n.config) || void 0 === s ? void 0 : s.expiresAt, 0);
    });
}
function K(e, n, r) {
    let i = 0 === r ? j : H;
    return e.localeCompare(n) * i;
}
function z(e) {
    let n = c.useRef([]);
    return c.useMemo(() => {
        if (0 === e.length) return [];
        if (n.current.length > 0 && n.current.length === e.length) return n.current;
        let r = W(e).map((e) => e.id);
        return (n.current = r), r;
    }, [e]);
}
function q(e) {
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
                if (a !== ((null === (i = n.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null)) return a ? j : H;
                let s = B.r.build(e.config).rewardsExpireAt;
                return K(s, B.r.build(n.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (r.current = e), e;
    }, [n]);
}
function Q(e) {
    let { quests: n, isFetchingCurrentQuests: r } = Y({ fetchPolicy: 'cache-and-network' }),
        i = new Map(n.map((e) => [e.id, e])),
        a = z(n),
        s = q(n),
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
function X() {
    let e = c.useRef(!1),
        n = (0, m.Wu)([D.Z], () => Array.from(D.Z.claimedQuests.values())),
        r = (0, m.e7)([D.Z], () => D.Z.isFetchingClaimedQuests);
    return (
        c.useEffect(() => {
            !r && !e.current && ((e.current = !0), (0, O.Ag)());
        }, [r]),
        {
            claimedQuests: n,
            isFetchingClaimedQuests: r
        }
    );
}
function J() {
    let { quests: e, isFetchingCurrentQuests: n } = Y({ fetchPolicy: 'cache-only' }),
        [r, i] = c.useState(() => new Map(e.map((e) => [e.id, (0, x.zi)(e)])));
    return (
        c.useEffect(() => {
            if (n) return;
            let r = [];
            for (let n of e)
                if (null == n || (0, x.zi)(n)) null != n && (0, x.zi)(n) && i((e) => (e.has(n.id) ? e : new Map(e).set(n.id, !0)));
                else {
                    let e = new h.V7(),
                        a = () => {
                            let s = Date.parse(n.config.expiresAt) - Date.now();
                            e.start(s, () => {
                                (0, x.zi)(n) ? i((e) => new Map(e).set(n.id, !0)) : a();
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
function $(e) {
    let n = J();
    return c.useMemo(() => {
        var r;
        return null != e && null !== (r = n.get(e.id)) && void 0 !== r && r;
    }, [e, n]);
}
function ee(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        r = (0, m.e7)([v.default], () => v.default.locale);
    return c.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(r, n)), [e, n, r]);
}
function et(e) {
    return (0, m.e7)([D.Z], () => D.Z.isProgressingOnDesktop(e.id));
}
function en(e) {
    return c.useMemo(() => (0, x.Bz)(e), [e]);
}
function er(e) {
    let n = (0, m.e7)([D.Z], () => D.Z.getOptimisticProgress(e.id, f.X.WATCH_VIDEO));
    return c.useMemo(() => (0, x.BM)(e), [e, n]);
}
function ei(e) {
    let n = et(e),
        r = en(e),
        i = er(e);
    return n || r || i;
}
!(function (e) {
    (e[(e.DESC = 0)] = 'DESC'), (e[(e.ASC = 1)] = 'ASC');
})(i || (i = {})),
    !(function (e) {
        (e.ALL = 'all'), (e.CLAIMED = 'claimed');
    })(a || (a = {}));
let ea = 1,
    es = (e) => {
        let n = c.useCallback(() => (0, x.il)(e), [e]),
            [r, i] = c.useState(n()),
            a = c.useCallback(() => i(n()), [n]),
            s = ei(e);
        return (
            c.useEffect(() => {
                var n, r, i;
                if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null || (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null || !s) {
                    a();
                    return;
                }
                let o = window.setInterval(() => {
                    a();
                }, y.Z.Millis.SECOND * ea);
                return () => {
                    clearInterval(o), a();
                };
            }, [e, s, a]),
            r
        );
    };
function eo(e) {
    return c.useMemo(() => (0, x.b7)(e), [e]);
}
let el = (e) => {
    let { quest: n, questContent: r } = e,
        i = em({ quest: n });
    return () => {
        i
            ? (0, x.gI)(
                  { quest: n },
                  {
                      content: r,
                      ctaContent: R.jZ.CONNECT_CONSOLE_LINK
                  }
              )
            : (0, x.V$)(
                  { quest: n },
                  {
                      content: r,
                      ctaContent: R.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                  }
              );
    };
};
function eu(e, n, r) {
    let { targetMinutes: i } = es(e),
        a = eo(e),
        s = el({
            quest: e,
            questContent: r
        });
    if ((0, x.$J)(e) && !(0, x.Nj)({ quest: e }))
        return V.intl.format(V.t['l4S+cX'], {
            minutes: i,
            onClick: s,
            gameTitle: B.r.build(e.config).application.name
        });
    if ((0, x.$J)(e))
        return V.intl.format(V.t.Ajlcd3, {
            minutes: i,
            onClick: s,
            gameTitle: B.r.build(e.config).application.name
        });
    if ((0, x.q8)(e)) {
        var o;
        let n = null === (o = e.config.videoMetadata) || void 0 === o ? void 0 : o.messages.videoTitle;
        return null == n ? V.intl.string(V.t['o+e9ys']) : V.intl.formatToPlainString(V.t['9m9MnZ'], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, x.pO)(e) && (0, x.KM)(e)) return V.intl.format(V.t['1NaRSk'], { minutes: i });
    let l = V.t['6zWtV1'];
    return (
        (0, x.Nj)({ quest: e }) && (l = V.t['wmOh/v']),
        V.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function ec() {
    let { quests: e, isFetchingCurrentQuests: n } = Y({ fetchPolicy: 'cache-or-network' }),
        r = J();
    return c.useMemo(() => {
        let i = [];
        if (n || 0 === e.length) return i;
        for (let n of e) {
            var a;
            if (!(0, x.vR)(n, L.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (a = r.get(n.id)) && void 0 !== a && a)) continue;
            if ((null == n ? void 0 : n.userStatus) == null) {
                i.push(n);
                continue;
            }
            let e = null != n.userStatus.claimedAt,
                s = (0, x.zE)(n.userStatus, L.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !s) {
                i.push(n);
                continue;
            }
        }
        return i;
    }, [e, r, n]);
}
function ed(e) {
    let n = (0, m.e7)([D.Z], () => D.Z.quests),
        r = c.useMemo(() => (0, x.Jg)(n, e), [e, n]);
    return $(r) ? null : r;
}
function ef(e) {
    var n;
    let r = (0, x.Xv)(e),
        { product: i, isFetching: a } = (0, E.T)(B.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: r,
        avatarDecoration: null == i ? void 0 : null === (n = i.items) || void 0 === n ? void 0 : n[0],
        isFetching: a
    };
}
function e_(e) {
    return c.useMemo(
        () => ({
            handleComplete: () => (0, O.Wf)(e),
            handleProgress: (n) => (0, O.Wf)(e, n),
            handleResetStatusClick: () => (0, O.eT)(e),
            handleResetDismissibilityClick: () => (0, O.T0)(e),
            handleOverrideDeliveryClick: () => (0, O.EW)(e)
        }),
        [e]
    );
}
function eh() {
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
                r = e.filter((e) => e.type === Z.ABu.XBOX),
                i = e.filter((e) => e.type === Z.ABu.PLAYSTATION),
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
let ep = (e) => {
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
                        (e = await (0, O.CS)(n, r)), o(e.errorHints);
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
    em = (e) => {
        let { quest: n } = e,
            { xboxAndPlaystationAccounts: r } = eh(),
            i = ei(n),
            a = 0 === r.length;
        return (0, x.$J)(n) && a && !i;
    },
    eg = () => {
        let { xboxAccounts: e, playstationAccounts: n } = eh(),
            r = e.length > 0,
            i = n.length > 0,
            a = (r && !i) || (!r && i),
            s = S.Z.getArticleURL(Z.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = S.Z.getArticleURL(Z.BhN.QUEST_HOW_TO_XBOX),
            l = V.intl.format(V.t.beN4DA, {
                psHelpdeskArticle: s,
                xboxHelpdeskArticle: o
            }),
            u = V.intl.format(V.t.HVS7np, { helpdeskArticle: i ? s : o });
        return {
            message: a ? u : l,
            xboxURL: o,
            playstationURL: s
        };
    };
function eE(e) {
    var n, r, i;
    let a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        o = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null,
        l = es(e).percentComplete > 0;
    if (o) return 4;
    if (s) return 3;
    if (l) return 2;
    else if (a) return 1;
    else return 0;
}
function ev(e) {
    let n = (0, m.e7)([v.default], () => v.default.locale),
        { percentComplete: r } = es(e),
        i = eo(e),
        a = null != i ? i.completedRatio : r,
        s = 100 * a,
        o = null != i ? ''.concat(null == i ? void 0 : i.progress, '/').concat(null == i ? void 0 : i.target) : (0, A.T3)(n, a, { roundingMode: 'floor' });
    return {
        completedRatio: a,
        percentComplete: s,
        completedRatioDisplay: o
    };
}
function eI(e) {
    var n, r;
    let i = es(e),
        a = (0, x.b7)(e),
        s = (0, k.D)({
            quest: e,
            taskDetails: i,
            location: G.dr.QUEST_HOME_DESKTOP,
            questContent: L.jn.QUEST_HOME_DESKTOP
        }),
        o = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
        l = ee(null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt);
    if (o) return V.intl.formatToPlainString(V.t.lOVr0N, { claimDate: l });
    if (null != a) return a.description;
    if (null != s) return s;
    return null;
}
function eT(e) {
    let n = (0, m.e7)([D.Z], () => D.Z.selectedTaskPlatform(e));
    return [n, c.useCallback((n) => (0, O.OR)(e, n), [e])];
}
function eb(e, n) {
    let [r, i] = eT(e.id),
        a = c.useMemo(() => (0, x.yH)(e), [e]),
        s = a.includes(G.cd.DESKTOP),
        o = a.includes(G.cd.CONSOLE),
        l = et(e),
        u = en(e),
        _ = (0, P.pF)({ location: G.dr.QUESTS_BAR }),
        h = c.useMemo(
            () =>
                (0, d.EQ)(n)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: f.X.PLAY_ON_DESKTOP }, () => G.cd.DESKTOP)
                    .with({ taskType: f.X.PLAY_ON_DESKTOP_V2 }, () => G.cd.DESKTOP)
                    .with({ taskType: f.X.PLAY_ACTIVITY }, () => G.cd.DESKTOP)
                    .with({ taskType: f.X.WATCH_VIDEO }, () => G.cd.DESKTOP)
                    .with({ taskType: f.X.STREAM_ON_DESKTOP }, () => G.cd.DESKTOP)
                    .with({ taskType: f.X.PLAY_ON_XBOX }, () => G.cd.CONSOLE)
                    .with({ taskType: f.X.PLAY_ON_PLAYSTATION }, () => G.cd.CONSOLE)
                    .exhaustive(),
            [n]
        ),
        p = l ? G.cd.DESKTOP : u ? G.cd.CONSOLE : null;
    return [
        c.useMemo(
            () =>
                (0, d.EQ)({
                    lastPlatformProgress: h,
                    currentProgressingPlatform: p,
                    selectedPlatform: r
                })
                    .with({ currentProgressingPlatform: G.cd.CONSOLE }, () => L.LI.CONSOLE)
                    .with({ currentProgressingPlatform: G.cd.DESKTOP }, () => L.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: G.cd.CONSOLE
                        },
                        () => L.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: G.cd.DESKTOP
                        },
                        () => L.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: G.cd.CONSOLE
                        },
                        () => L.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: G.cd.DESKTOP
                        },
                        () => L.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (o && s && _ ? L.LI.SELECT : o ? L.LI.CONSOLE : L.LI.DESKTOP)
                    )
                    .exhaustive(),
            [o, s, _, h, p, r]
        ),
        a,
        i
    ];
}
function ey(e) {
    var n, r;
    let i = eo(e),
        a = es(e),
        [s] = eb(e, a),
        o = $(e),
        l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        u = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        c = null == i,
        d = f.T.DESKTOP.has(a.taskType) && a.percentComplete > 0,
        _ = 0 === a.percentComplete,
        h = l && !u && !o && c && (d || (_ && s === L.LI.DESKTOP)),
        p = (0, N.isWeb)() && h && !(0, x.Gd)(e),
        m = (0, N.isMac)() && a.taskType === f.X.STREAM_ON_DESKTOP && h,
        g = eS(e),
        E = [];
    for (let e of (m && E.push(V.intl.string(V.t.MFGxFB)), p && E.push(V.intl.string(V.t.BV6xDg)), g)) E.push(e);
    return E;
}
function eS(e) {
    let n = (0, m.e7)([b.ZP], () => b.ZP.getPremiumSubscription()),
        r = (0, x.Bg)(e.config) && (null == n ? void 0 : n.isPurchasedExternally) === !0,
        i = [];
    return r && i.push(V.intl.string(V.t.nnfWPD)), i;
}
function eA(e) {
    var n;
    return null !== (n = (0, m.e7)([D.Z], () => D.Z.quests).get(e)) && void 0 !== n ? n : null;
}
function eN(e) {
    let { mode: n, questContent: r, questId: i } = e,
        a = c.useRef(null);
    c.useEffect(() => {
        null != i &&
            a.current !== n &&
            ((0, R.Ic)({
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
                    (0, R.Ic)({
                        mode: null,
                        prevMode: a.current,
                        questContent: r,
                        questId: i
                    });
                };
        }, [i, r]);
}
function eC(e) {
    var n, r;
    let i = (0, m.e7)([v.default], () => v.default.locale),
        a = es(e),
        [s] = eb(e, a),
        o = (0, P.pF)({ location: G.dr.QUESTS_BAR });
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null) return V.intl.string(V.t['ij5E//']);
    if ((null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null && a.percentComplete > 0) {
        let e = (0, A.T3)(i, a.percentComplete, { roundingMode: 'floor' });
        return V.intl.formatToPlainString(V.t.lVZaXF, { percent: e });
    }
    return o && s === L.LI.SELECT ? V.intl.string(V.t.EMrUHR) : (0, x.$J)(e) ? V.intl.string(V.t.mOrpXF) : V.intl.string(V.t['7e5k7O']);
}
function eR(e, n, r) {
    var i;
    let a = ee(c.useMemo(() => B.r.build(e.config).rewardsExpireAt, [e.config])),
        s = es(e),
        o = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.completedAt) != null,
        l = ei(e),
        u = (0, k.D)({
            quest: e,
            location: G.dr.QUESTS_BAR,
            questContent: L.jn.QUEST_BAR_V2,
            taskDetails: s
        });
    if (o) return V.intl.formatToPlainString(V.t.APddvL, { expirationDate: a });
    if (n) return r === L.LI.SELECT ? V.intl.string(V.t.sWUpNz) : u;
    if ((0, x.q8)(e)) return V.intl.string(V.t['o+e9ys']);
    if (s.percentComplete > 0)
        return l
            ? (0, x.AV)({
                  quest: e,
                  taskDetails: s
              })
            : V.intl.string(V.t.mOrpXF);
    return V.intl.string(V.t.S6UUc3);
}
function eO(e, n) {
    let r = (0, m.e7)([D.Z], () => D.Z.getQuest(e), [e]),
        i = (0, g.ZP)(),
        a = c.useMemo(() => (null == r ? void 0 : r.config.features.includes(G.S7.QUESTS_CDN)) === !0, [r]);
    return c.useMemo(
        () =>
            (null == r ? void 0 : r.config.cosponsorMetadata) == null
                ? null
                : (0, U.Rt)(e, r.config.cosponsorMetadata.logotype, {
                      theme: null != n ? n : (0, p.wj)(i) ? Z.BRd.DARK : Z.BRd.LIGHT,
                      newCdn: a
                  }),
        [i, n, e, null == r ? void 0 : r.config.cosponsorMetadata, a]
    );
}
function eD(e) {
    let n = B.r.build(e).defaultReward.messages.name,
        r = (0, x.Kr)(e),
        i = (0, x.f$)(e),
        a = (0, m.e7)([T.default], () => T.default.getCurrentUser()),
        s = null != a && C.ZP.isPremium(a, F.p9.TIER_2);
    if (null == r) return V.intl.formatToPlainString(V.t.l9uXLy, { decorationName: n });
    let o = V.intl.formatToPlainString(V.t.gWlmFR, {
            duration: r,
            rewardName: n
        }),
        l = V.intl.formatToPlainString(V.t.NpQ80d, {
            duration: r,
            rewardName: n
        }),
        u = i && s ? o : l;
    return i
        ? u
        : V.intl.formatToPlainString(V.t.tTlItr, {
              duration: r,
              decorationName: n
          });
}
!(function (e) {
    (e[(e.UNACCEPTED = 0)] = 'UNACCEPTED'), (e[(e.ACCEPTED = 1)] = 'ACCEPTED'), (e[(e.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CLAIMED = 4)] = 'CLAIMED');
})(s || (s = {}));
