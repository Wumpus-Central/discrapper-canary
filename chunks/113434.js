r.d(n, {
    B4: function () {
        return eN;
    },
    B6: function () {
        return et;
    },
    Bd: function () {
        return eT;
    },
    DU: function () {
        return e_;
    },
    Fr: function () {
        return ef;
    },
    GI: function () {
        return em;
    },
    GU: function () {
        return eA;
    },
    Gd: function () {
        return eD;
    },
    I: function () {
        return eI;
    },
    J2: function () {
        return W;
    },
    Jf: function () {
        return el;
    },
    KX: function () {
        return eE;
    },
    OH: function () {
        return s;
    },
    Qy: function () {
        return eL;
    },
    Rf: function () {
        return eo;
    },
    _Q: function () {
        return ev;
    },
    _s: function () {
        return eg;
    },
    bA: function () {
        return X;
    },
    e5: function () {
        return a;
    },
    eN: function () {
        return J;
    },
    eQ: function () {
        return eR;
    },
    iO: function () {
        return ed;
    },
    kJ: function () {
        return eh;
    },
    me: function () {
        return ey;
    },
    qI: function () {
        return eC;
    },
    qb: function () {
        return eS;
    },
    t5: function () {
        return ec;
    },
    tP: function () {
        return ee;
    },
    uA: function () {
        return eu;
    },
    vf: function () {
        return eO;
    },
    z: function () {
        return ea;
    },
    z6: function () {
        return ep;
    },
    zP: function () {
        return ex;
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
    O = r(915750),
    D = r(272008),
    L = r(569984),
    x = r(497505),
    w = r(918701),
    P = r(977156),
    M = r(665430),
    k = r(569743),
    U = r(585500),
    B = r(475595),
    G = r(566078),
    F = r(46140),
    Z = r(981631),
    V = r(474936),
    j = r(388032);
let H = -1,
    Y = 1;
function W() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [n, r] = c.useState(!1),
        i = (0, m.Wu)([L.Z], () => [...L.Z.quests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: s } = (0, m.cj)([L.Z], () => ({
            isFetchingCurrentQuests: L.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: L.Z.lastFetchedCurrentQuests
        })),
        o = (0, P.cB)({ location: F.dr.USE_QUESTS });
    return (
        c.useEffect(() => {
            if ('cache-only' !== e.fetchPolicy) ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === s)) && o && !n && !a && (r(!0), (0, D.xw)(), (0, k.Z)({ location: F.dr.USE_QUESTS }) && (0, D.w)(x.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, o, n, a, s]),
        {
            quests: i,
            isFetchingCurrentQuests: a
        }
    );
}
function K(e) {
    return e.sort((e, n) => {
        var r, i, a, s, o, l;
        let u = !(0, w.zi)(e),
            c = !(0, w.zi)(n),
            d = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
            f = (null === (i = n.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null;
        return u !== c ? (u ? H : Y) : d !== f ? (d ? H : Y) : u && c ? z(null === (o = e.config) || void 0 === o ? void 0 : o.expiresAt, null === (l = n.config) || void 0 === l ? void 0 : l.expiresAt, 1) : z(null === (a = e.config) || void 0 === a ? void 0 : a.expiresAt, null === (s = n.config) || void 0 === s ? void 0 : s.expiresAt, 0);
    });
}
function z(e, n, r) {
    let i = 0 === r ? H : Y;
    return e.localeCompare(n) * i;
}
function q(e) {
    let n = c.useRef([]);
    return c.useMemo(() => {
        if (0 === e.length) return [];
        if (n.current.length > 0 && n.current.length === e.length) return n.current;
        let r = K(e).map((e) => e.id);
        return (n.current = r), r;
    }, [e]);
}
function Q(e) {
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
                if (a !== ((null === (i = n.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null)) return a ? H : Y;
                let s = G.r.build(e.config).rewardsExpireAt;
                return z(s, G.r.build(n.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (r.current = e), e;
    }, [n]);
}
function X(e) {
    let { quests: n, isFetchingCurrentQuests: r } = W({ fetchPolicy: 'cache-and-network' }),
        i = new Map(n.map((e) => [e.id, e])),
        a = q(n),
        s = Q(n),
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
function J() {
    let e = c.useRef(!1),
        n = (0, m.Wu)([L.Z], () => Array.from(L.Z.claimedQuests.values())),
        r = (0, m.e7)([L.Z], () => L.Z.isFetchingClaimedQuests);
    return (
        c.useEffect(() => {
            !r && !e.current && ((e.current = !0), (0, D.Ag)());
        }, [r]),
        {
            claimedQuests: n,
            isFetchingClaimedQuests: r
        }
    );
}
function $() {
    let { quests: e, isFetchingCurrentQuests: n } = W({ fetchPolicy: 'cache-only' }),
        [r, i] = c.useState(() => new Map(e.map((e) => [e.id, (0, w.zi)(e)])));
    return (
        c.useEffect(() => {
            if (n) return;
            let r = [];
            for (let n of e)
                if (null == n || (0, w.zi)(n)) null != n && (0, w.zi)(n) && i((e) => (e.has(n.id) ? e : new Map(e).set(n.id, !0)));
                else {
                    let e = new h.V7(),
                        a = () => {
                            let s = Date.parse(n.config.expiresAt) - Date.now();
                            e.start(s, () => {
                                (0, w.zi)(n) ? i((e) => new Map(e).set(n.id, !0)) : a();
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
function ee(e) {
    let n = $();
    return c.useMemo(() => {
        var r;
        return null != e && null !== (r = n.get(e.id)) && void 0 !== r && r;
    }, [e, n]);
}
function et(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        r = (0, m.e7)([v.default], () => v.default.locale);
    return c.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(r, n)), [e, n, r]);
}
function en(e) {
    return (0, m.e7)([L.Z], () => L.Z.isProgressingOnDesktop(e.id));
}
function er(e) {
    return c.useMemo(() => (0, w.Bz)(e), [e]);
}
function ei(e) {
    let n = (0, m.e7)([L.Z], () => L.Z.getOptimisticProgress(e.id, f.X.WATCH_VIDEO));
    return c.useMemo(() => (0, w.BM)(e), [e, n]);
}
function ea(e) {
    let n = en(e),
        r = er(e),
        i = ei(e);
    return n || r || i;
}
!(function (e) {
    (e[(e.DESC = 0)] = 'DESC'), (e[(e.ASC = 1)] = 'ASC');
})(i || (i = {})),
    !(function (e) {
        (e.ALL = 'all'), (e.CLAIMED = 'claimed');
    })(a || (a = {}));
let es = 1,
    eo = (e) => {
        let n = c.useCallback(() => (0, w.il)(e), [e]),
            [r, i] = c.useState(n()),
            a = c.useCallback(() => i(n()), [n]),
            s = ea(e);
        return (
            c.useEffect(() => {
                var n, r, i;
                if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null || (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null || !s) {
                    a();
                    return;
                }
                let o = window.setInterval(() => {
                    a();
                }, y.Z.Millis.SECOND * es);
                return () => {
                    clearInterval(o), a();
                };
            }, [e, s, a]),
            r
        );
    };
function el(e) {
    return c.useMemo(() => (0, w.b7)(e), [e]);
}
let eu = (e) => {
    let { quest: n, questContent: r } = e,
        i = eg({ quest: n }),
        a = (0, O.WD)();
    return () => {
        i
            ? (0, w.gI)(
                  { quest: n },
                  {
                      content: r,
                      ctaContent: R.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId()
                  }
              )
            : (0, w.V$)(
                  { quest: n },
                  {
                      content: r,
                      ctaContent: R.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == a ? void 0 : a.getId()
                  }
              );
    };
};
function ec(e, n, r) {
    let { targetMinutes: i } = eo(e),
        a = el(e),
        s = eu({
            quest: e,
            questContent: r
        });
    if ((0, w.$J)(e) && !(0, w.Nj)({ quest: e }))
        return j.intl.format(j.t['l4S+cX'], {
            minutes: i,
            onClick: s,
            gameTitle: G.r.build(e.config).application.name
        });
    if ((0, w.$J)(e))
        return j.intl.format(j.t.Ajlcd3, {
            minutes: i,
            onClick: s,
            gameTitle: G.r.build(e.config).application.name
        });
    if ((0, w.q8)(e)) {
        var o;
        let n = null === (o = e.config.videoMetadata) || void 0 === o ? void 0 : o.messages.videoTitle;
        return null == n ? j.intl.string(j.t['o+e9ys']) : j.intl.formatToPlainString(j.t['9m9MnZ'], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, w.pO)(e) && (0, w.KM)(e)) return j.intl.format(j.t['1NaRSk'], { minutes: i });
    let l = j.t['6zWtV1'];
    return (
        (0, w.Nj)({ quest: e }) && (l = j.t['wmOh/v']),
        j.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function ed() {
    let { quests: e, isFetchingCurrentQuests: n } = W({ fetchPolicy: 'cache-or-network' }),
        r = $();
    return c.useMemo(() => {
        let i = [];
        if (n || 0 === e.length) return i;
        for (let n of e) {
            var a;
            if (!(0, w.vR)(n, x.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (a = r.get(n.id)) && void 0 !== a && a)) continue;
            if ((null == n ? void 0 : n.userStatus) == null) {
                i.push(n);
                continue;
            }
            let e = null != n.userStatus.claimedAt,
                s = (0, w.zE)(n.userStatus, x.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !s) {
                i.push(n);
                continue;
            }
        }
        return i;
    }, [e, r, n]);
}
function ef(e) {
    let n = (0, m.e7)([L.Z], () => L.Z.quests),
        r = c.useMemo(() => (0, w.Jg)(n, e), [e, n]);
    return ee(r) ? null : r;
}
function e_(e) {
    var n;
    let r = (0, w.Xv)(e),
        { product: i, isFetching: a } = (0, E.T)(G.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: r,
        avatarDecoration: null == i ? void 0 : null === (n = i.items) || void 0 === n ? void 0 : n[0],
        isFetching: a
    };
}
function eh(e) {
    return c.useMemo(
        () => ({
            handleComplete: () => (0, D.Wf)(e),
            handleProgress: (n) => (0, D.Wf)(e, n),
            handleResetStatusClick: () => (0, D.eT)(e),
            handleResetDismissibilityClick: () => (0, D.T0)(e),
            handleOverrideDeliveryClick: () => (0, D.EW)(e)
        }),
        [e]
    );
}
function ep() {
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
let em = (e) => {
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
                        (e = await (0, D.CS)(n, r)), o(e.errorHints);
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
    eg = (e) => {
        let { quest: n } = e,
            { xboxAndPlaystationAccounts: r } = ep(),
            i = ea(n),
            a = 0 === r.length;
        return (0, w.$J)(n) && a && !i;
    },
    eE = () => {
        let { xboxAccounts: e, playstationAccounts: n } = ep(),
            r = e.length > 0,
            i = n.length > 0,
            a = (r && !i) || (!r && i),
            s = S.Z.getArticleURL(Z.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = S.Z.getArticleURL(Z.BhN.QUEST_HOW_TO_XBOX),
            l = j.intl.format(j.t.beN4DA, {
                psHelpdeskArticle: s,
                xboxHelpdeskArticle: o
            }),
            u = j.intl.format(j.t.HVS7np, { helpdeskArticle: i ? s : o });
        return {
            message: a ? u : l,
            xboxURL: o,
            playstationURL: s
        };
    };
function ev(e) {
    var n, r, i;
    let a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        o = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null,
        l = eo(e).percentComplete > 0;
    if (o) return 4;
    if (s) return 3;
    if (l) return 2;
    else if (a) return 1;
    else return 0;
}
function eI(e) {
    let n = (0, m.e7)([v.default], () => v.default.locale),
        { percentComplete: r } = eo(e),
        i = el(e),
        a = null != i ? i.completedRatio : r,
        s = 100 * a,
        o = null != i ? ''.concat(null == i ? void 0 : i.progress, '/').concat(null == i ? void 0 : i.target) : (0, A.T3)(n, a, { roundingMode: 'floor' });
    return {
        completedRatio: a,
        percentComplete: s,
        completedRatioDisplay: o
    };
}
function eT(e) {
    var n, r;
    let i = eo(e),
        a = (0, w.b7)(e),
        s = (0, U.D)({
            quest: e,
            taskDetails: i,
            location: F.dr.QUEST_HOME_DESKTOP,
            questContent: x.jn.QUEST_HOME_DESKTOP
        }),
        o = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
        l = et(null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt);
    if (o) return j.intl.formatToPlainString(j.t.lOVr0N, { claimDate: l });
    if (null != a) return a.description;
    if (null != s) return s;
    return null;
}
function eb(e) {
    let n = (0, m.e7)([L.Z], () => L.Z.selectedTaskPlatform(e));
    return [n, c.useCallback((n) => (0, D.OR)(e, n), [e])];
}
function ey(e, n) {
    let [r, i] = eb(e.id),
        a = c.useMemo(() => (0, w.yH)(e), [e]),
        s = a.includes(F.cd.DESKTOP),
        o = a.includes(F.cd.CONSOLE),
        l = en(e),
        u = er(e),
        _ = (0, M.pF)({ location: F.dr.QUESTS_BAR }),
        h = c.useMemo(
            () =>
                (0, d.EQ)(n)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: f.X.PLAY_ON_DESKTOP }, () => F.cd.DESKTOP)
                    .with({ taskType: f.X.PLAY_ON_DESKTOP_V2 }, () => F.cd.DESKTOP)
                    .with({ taskType: f.X.PLAY_ACTIVITY }, () => F.cd.DESKTOP)
                    .with({ taskType: f.X.WATCH_VIDEO }, () => F.cd.DESKTOP)
                    .with({ taskType: f.X.STREAM_ON_DESKTOP }, () => F.cd.DESKTOP)
                    .with({ taskType: f.X.PLAY_ON_XBOX }, () => F.cd.CONSOLE)
                    .with({ taskType: f.X.PLAY_ON_PLAYSTATION }, () => F.cd.CONSOLE)
                    .exhaustive(),
            [n]
        ),
        p = l ? F.cd.DESKTOP : u ? F.cd.CONSOLE : null;
    return [
        c.useMemo(
            () =>
                (0, d.EQ)({
                    lastPlatformProgress: h,
                    currentProgressingPlatform: p,
                    selectedPlatform: r
                })
                    .with({ currentProgressingPlatform: F.cd.CONSOLE }, () => x.LI.CONSOLE)
                    .with({ currentProgressingPlatform: F.cd.DESKTOP }, () => x.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: F.cd.CONSOLE
                        },
                        () => x.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: F.cd.DESKTOP
                        },
                        () => x.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: F.cd.CONSOLE
                        },
                        () => x.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: F.cd.DESKTOP
                        },
                        () => x.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (o && s && _ ? x.LI.SELECT : o ? x.LI.CONSOLE : x.LI.DESKTOP)
                    )
                    .exhaustive(),
            [o, s, _, h, p, r]
        ),
        a,
        i
    ];
}
function eS(e) {
    var n, r;
    let i = el(e),
        a = eo(e),
        [s] = ey(e, a),
        o = ee(e),
        l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        u = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        c = null == i,
        d = f.T.DESKTOP.has(a.taskType) && a.percentComplete > 0,
        _ = 0 === a.percentComplete,
        h = l && !u && !o && c && (d || (_ && s === x.LI.DESKTOP)),
        p = (0, N.isWeb)() && h && !(0, w.Gd)(e),
        m = (0, N.isMac)() && a.taskType === f.X.STREAM_ON_DESKTOP && h,
        g = eA(e),
        E = [];
    for (let e of (m && E.push(j.intl.string(j.t.MFGxFB)), p && E.push(j.intl.string(j.t.BV6xDg)), g)) E.push(e);
    return E;
}
function eA(e) {
    let n = (0, m.e7)([b.ZP], () => b.ZP.getPremiumSubscription()),
        r = (0, w.Bg)(e.config) && (null == n ? void 0 : n.isPurchasedExternally) === !0,
        i = [];
    return r && i.push(j.intl.string(j.t.nnfWPD)), i;
}
function eN(e) {
    var n;
    return null !== (n = (0, m.e7)([L.Z], () => L.Z.quests).get(e)) && void 0 !== n ? n : null;
}
function eC(e) {
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
function eR(e) {
    var n, r;
    let i = (0, m.e7)([v.default], () => v.default.locale),
        a = eo(e),
        [s] = ey(e, a),
        o = (0, M.pF)({ location: F.dr.QUESTS_BAR });
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null) return j.intl.string(j.t['ij5E//']);
    if ((null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null && a.percentComplete > 0) {
        let e = (0, A.T3)(i, a.percentComplete, { roundingMode: 'floor' });
        return j.intl.formatToPlainString(j.t.lVZaXF, { percent: e });
    }
    return o && s === x.LI.SELECT ? j.intl.string(j.t.EMrUHR) : (0, w.$J)(e) ? j.intl.string(j.t.mOrpXF) : j.intl.string(j.t['7e5k7O']);
}
function eO(e, n, r) {
    var i;
    let a = et(c.useMemo(() => G.r.build(e.config).rewardsExpireAt, [e.config])),
        s = eo(e),
        o = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.completedAt) != null,
        l = ea(e),
        u = (0, U.D)({
            quest: e,
            location: F.dr.QUESTS_BAR,
            questContent: x.jn.QUEST_BAR_V2,
            taskDetails: s
        });
    if (o) return j.intl.formatToPlainString(j.t.APddvL, { expirationDate: a });
    if (n) return r === x.LI.SELECT ? j.intl.string(j.t.sWUpNz) : u;
    if ((0, w.q8)(e)) return j.intl.string(j.t['o+e9ys']);
    if (s.percentComplete > 0)
        return l
            ? (0, w.AV)({
                  quest: e,
                  taskDetails: s
              })
            : j.intl.string(j.t.mOrpXF);
    return j.intl.string(j.t.S6UUc3);
}
function eD(e, n) {
    let r = (0, m.e7)([L.Z], () => L.Z.getQuest(e), [e]),
        i = (0, g.ZP)(),
        a = c.useMemo(() => (null == r ? void 0 : r.config.features.includes(F.S7.QUESTS_CDN)) === !0, [r]);
    return c.useMemo(
        () =>
            (null == r ? void 0 : r.config.cosponsorMetadata) == null
                ? null
                : (0, B.Rt)(e, r.config.cosponsorMetadata.logotype, {
                      theme: null != n ? n : (0, p.wj)(i) ? Z.BRd.DARK : Z.BRd.LIGHT,
                      newCdn: a
                  }),
        [i, n, e, null == r ? void 0 : r.config.cosponsorMetadata, a]
    );
}
function eL(e) {
    let n = G.r.build(e).defaultReward.messages.name,
        r = (0, w.Kr)(e),
        i = (0, w.f$)(e),
        a = (0, m.e7)([T.default], () => T.default.getCurrentUser()),
        s = null != a && C.ZP.isPremium(a, V.p9.TIER_2);
    if (null == r) return j.intl.formatToPlainString(j.t.l9uXLy, { decorationName: n });
    let o = j.intl.formatToPlainString(j.t.gWlmFR, {
            duration: r,
            rewardName: n
        }),
        l = j.intl.formatToPlainString(j.t.NpQ80d, {
            duration: r,
            rewardName: n
        }),
        u = i && s ? o : l;
    return i
        ? u
        : j.intl.formatToPlainString(j.t.tTlItr, {
              duration: r,
              decorationName: n
          });
}
function ex(e) {
    return (0, m.e7)([L.Z], () => {
        var n;
        return null != e ? (null === (n = L.Z.questToDeliverForPlacement.get(e)) || void 0 === n ? void 0 : n.decisionId) : void 0;
    });
}
!(function (e) {
    (e[(e.UNACCEPTED = 0)] = 'UNACCEPTED'), (e[(e.ACCEPTED = 1)] = 'ACCEPTED'), (e[(e.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CLAIMED = 4)] = 'CLAIMED');
})(s || (s = {}));
