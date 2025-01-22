r.d(n, {
    B4: function () {
        return eC;
    },
    B6: function () {
        return et;
    },
    Bd: function () {
        return eb;
    },
    DU: function () {
        return ep;
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
        return ey;
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
        return o;
    },
    Qy: function () {
        return eL;
    },
    Rf: function () {
        return es;
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
        return eT;
    },
    qI: function () {
        return eN;
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
        return e_;
    },
    zP: function () {
        return ex;
    }
});
var i,
    a,
    o,
    s = r(47120);
var l = r(653041);
var u = r(627341);
var c = r(192379),
    d = r(278074),
    f = r(754700),
    p = r(959078),
    h = r(846519),
    _ = r(780384),
    m = r(442837),
    g = r(410030),
    E = r(583434),
    v = r(706454),
    y = r(553795),
    b = r(594174),
    I = r(78839),
    T = r(70956),
    S = r(63063),
    A = r(930153),
    C = r(358085),
    N = r(74538),
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
    Z = r(46140),
    F = r(981631),
    V = r(474936),
    j = r(388032);
let H = -1,
    Y = 1;
function W() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [n, r] = c.useState(!1),
        i = (0, m.Wu)([L.Z], () => [...L.Z.quests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: o } = (0, m.cj)([L.Z], () => ({
            isFetchingCurrentQuests: L.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: L.Z.lastFetchedCurrentQuests
        })),
        s = (0, P.cB)({ location: Z.dr.USE_QUESTS });
    return (
        c.useEffect(() => {
            if ('cache-only' !== e.fetchPolicy) ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === o)) && s && !n && !a && (r(!0), (0, D.xw)(), (0, k.Z)({ location: Z.dr.USE_QUESTS }) && (0, D.w)(x.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, s, n, a, o]),
        {
            quests: i,
            isFetchingCurrentQuests: a
        }
    );
}
function K(e) {
    return e.sort((e, n) => {
        var r, i, a, o, s, l;
        let u = !(0, w.zi)(e),
            c = !(0, w.zi)(n),
            d = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
            f = (null === (i = n.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null;
        return u !== c ? (u ? H : Y) : d !== f ? (d ? H : Y) : u && c ? z(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (l = n.config) || void 0 === l ? void 0 : l.expiresAt, 1) : z(null === (a = e.config) || void 0 === a ? void 0 : a.expiresAt, null === (o = n.config) || void 0 === o ? void 0 : o.expiresAt, 0);
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
                let o = G.r.build(e.config).rewardsExpireAt;
                return z(o, G.r.build(n.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (r.current = e), e;
    }, [n]);
}
function X(e) {
    let { quests: n, isFetchingCurrentQuests: r } = W({ fetchPolicy: 'cache-and-network' }),
        i = new Map(n.map((e) => [e.id, e])),
        a = q(n),
        o = Q(n),
        s = [],
        l = [];
    for (let n of (s = 'all' === e ? a : o)) {
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
                            let o = Date.parse(n.config.expiresAt) - Date.now();
                            e.start(o, () => {
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
let eo = 1,
    es = (e) => {
        let n = c.useCallback(() => (0, w.il)(e), [e]),
            [r, i] = c.useState(n()),
            a = c.useCallback(() => i(n()), [n]),
            o = ea(e);
        return (
            c.useEffect(() => {
                var n, r, i;
                if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null || (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null || !o) {
                    a();
                    return;
                }
                let s = window.setInterval(() => {
                    a();
                }, T.Z.Millis.SECOND * eo);
                return () => {
                    clearInterval(s), a();
                };
            }, [e, o, a]),
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
    let { targetMinutes: i } = es(e),
        a = el(e),
        o = eu({
            quest: e,
            questContent: r
        });
    if ((0, w.$J)(e) && !(0, w.Nj)({ quest: e }))
        return j.intl.format(j.t['l4S+cX'], {
            minutes: i,
            onClick: o,
            gameTitle: G.r.build(e.config).application.name
        });
    if ((0, w.$J)(e))
        return j.intl.format(j.t.Ajlcd3, {
            minutes: i,
            onClick: o,
            gameTitle: G.r.build(e.config).application.name
        });
    if ((0, w.q8)(e)) {
        var s;
        let n = null === (s = e.config.videoMetadata) || void 0 === s ? void 0 : s.messages.videoTitle;
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
                o = (0, w.zE)(n.userStatus, x.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !o) {
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
function ep(e) {
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
function e_() {
    let { fetching: e, accounts: n } = (0, m.cj)([y.Z], () => ({
            fetching: y.Z.isFetching(),
            accounts: y.Z.getAccounts()
        })),
        {
            xboxAccounts: r,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a
        } = c.useMemo(() => {
            let e = n.filter((e) => !1 === e.revoked),
                r = e.filter((e) => e.type === F.ABu.XBOX),
                i = e.filter((e) => e.type === F.ABu.PLAYSTATION),
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
            [o, s] = c.useState([]),
            [l, u] = c.useState(!1),
            d = (0, m.e7)([y.Z], () => y.Z.getAccounts());
        return (
            c.useEffect(() => {
                s((e) => e.filter((e) => e.type !== p.K.EXPIRED_CREDENTIAL));
            }, [d]),
            {
                startConsoleQuest: c.useCallback(async () => {
                    if (l) return;
                    null == i || i(), u(!0);
                    let e = null;
                    try {
                        (e = await (0, D.CS)(n, r)), s(e.errorHints);
                    } finally {
                        var o;
                        u(!1), null == a || a(null !== (o = null == e ? void 0 : e.errorHints) && void 0 !== o ? o : []);
                    }
                }, [l, i, a, r, n]),
                startingConsoleQuest: l,
                errorHints: o
            }
        );
    },
    eg = (e) => {
        let { quest: n } = e,
            { xboxAndPlaystationAccounts: r } = e_(),
            i = ea(n),
            a = 0 === r.length;
        return (0, w.$J)(n) && a && !i;
    },
    eE = () => {
        let { xboxAccounts: e, playstationAccounts: n } = e_(),
            r = e.length > 0,
            i = n.length > 0,
            a = (r && !i) || (!r && i),
            o = S.Z.getArticleURL(F.BhN.QUEST_HOW_TO_PLAYSTATION),
            s = S.Z.getArticleURL(F.BhN.QUEST_HOW_TO_XBOX),
            l = j.intl.format(j.t.beN4DA, {
                psHelpdeskArticle: o,
                xboxHelpdeskArticle: s
            }),
            u = j.intl.format(j.t.HVS7np, { helpdeskArticle: i ? o : s });
        return {
            message: a ? u : l,
            xboxURL: s,
            playstationURL: o
        };
    };
function ev(e) {
    var n, r, i;
    let a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        o = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        s = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null,
        l = es(e).percentComplete > 0;
    if (s) return 4;
    if (o) return 3;
    if (l) return 2;
    else if (a) return 1;
    else return 0;
}
function ey(e) {
    let n = (0, m.e7)([v.default], () => v.default.locale),
        { percentComplete: r } = es(e),
        i = el(e),
        a = null != i ? i.completedRatio : r,
        o = 100 * a,
        s = null != i ? ''.concat(null == i ? void 0 : i.progress, '/').concat(null == i ? void 0 : i.target) : (0, A.T3)(n, a, { roundingMode: 'floor' });
    return {
        completedRatio: a,
        percentComplete: o,
        completedRatioDisplay: s
    };
}
function eb(e) {
    var n, r;
    let i = es(e),
        a = (0, w.b7)(e),
        o = (0, U.D)({
            quest: e,
            taskDetails: i,
            location: Z.dr.QUEST_HOME_DESKTOP,
            questContent: x.jn.QUEST_HOME_DESKTOP
        }),
        s = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
        l = et(null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt);
    if (s) return j.intl.formatToPlainString(j.t.lOVr0N, { claimDate: l });
    if (null != a) return a.description;
    if (null != o) return o;
    return null;
}
function eI(e) {
    let n = (0, m.e7)([L.Z], () => L.Z.selectedTaskPlatform(e));
    return [n, c.useCallback((n) => (0, D.OR)(e, n), [e])];
}
function eT(e, n) {
    let [r, i] = eI(e.id),
        a = c.useMemo(() => (0, w.yH)(e), [e]),
        o = a.includes(Z.cd.DESKTOP),
        s = a.includes(Z.cd.CONSOLE),
        l = en(e),
        u = er(e),
        p = (0, M.pF)({ location: Z.dr.QUESTS_BAR }),
        h = c.useMemo(
            () =>
                (0, d.EQ)(n)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: f.X.PLAY_ON_DESKTOP }, () => Z.cd.DESKTOP)
                    .with({ taskType: f.X.PLAY_ON_DESKTOP_V2 }, () => Z.cd.DESKTOP)
                    .with({ taskType: f.X.PLAY_ACTIVITY }, () => Z.cd.DESKTOP)
                    .with({ taskType: f.X.WATCH_VIDEO }, () => Z.cd.DESKTOP)
                    .with({ taskType: f.X.STREAM_ON_DESKTOP }, () => Z.cd.DESKTOP)
                    .with({ taskType: f.X.PLAY_ON_XBOX }, () => Z.cd.CONSOLE)
                    .with({ taskType: f.X.PLAY_ON_PLAYSTATION }, () => Z.cd.CONSOLE)
                    .exhaustive(),
            [n]
        ),
        _ = l ? Z.cd.DESKTOP : u ? Z.cd.CONSOLE : null;
    return [
        c.useMemo(
            () =>
                (0, d.EQ)({
                    lastPlatformProgress: h,
                    currentProgressingPlatform: _,
                    selectedPlatform: r
                })
                    .with({ currentProgressingPlatform: Z.cd.CONSOLE }, () => x.LI.CONSOLE)
                    .with({ currentProgressingPlatform: Z.cd.DESKTOP }, () => x.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: Z.cd.CONSOLE
                        },
                        () => x.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: Z.cd.DESKTOP
                        },
                        () => x.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: Z.cd.CONSOLE
                        },
                        () => x.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: Z.cd.DESKTOP
                        },
                        () => x.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (s && o && p ? x.LI.SELECT : s ? x.LI.CONSOLE : x.LI.DESKTOP)
                    )
                    .exhaustive(),
            [s, o, p, h, _, r]
        ),
        a,
        i
    ];
}
function eS(e) {
    var n, r;
    let i = el(e),
        a = es(e),
        [o] = eT(e, a),
        s = ee(e),
        l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        u = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        c = null == i,
        d = f.T.DESKTOP.has(a.taskType) && a.percentComplete > 0,
        p = 0 === a.percentComplete,
        h = l && !u && !s && c && (d || (p && o === x.LI.DESKTOP)),
        _ = (0, C.isWeb)() && h && !(0, w.Gd)(e),
        m = (0, C.isMac)() && a.taskType === f.X.STREAM_ON_DESKTOP && h,
        g = eA(e),
        E = [];
    for (let e of (m && E.push(j.intl.string(j.t.MFGxFB)), _ && E.push(j.intl.string(j.t.BV6xDg)), g)) E.push(e);
    return E;
}
function eA(e) {
    let n = (0, m.e7)([I.ZP], () => I.ZP.getPremiumSubscription()),
        r = (0, w.Bg)(e.config) && (null == n ? void 0 : n.isPurchasedExternally) === !0,
        i = [];
    return r && i.push(j.intl.string(j.t.nnfWPD)), i;
}
function eC(e) {
    var n;
    return null !== (n = (0, m.e7)([L.Z], () => L.Z.quests).get(e)) && void 0 !== n ? n : null;
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
function eR(e) {
    var n, r;
    let i = (0, m.e7)([v.default], () => v.default.locale),
        a = es(e),
        [o] = eT(e, a),
        s = (0, M.pF)({ location: Z.dr.QUESTS_BAR });
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null) return j.intl.string(j.t['ij5E//']);
    if ((null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null && a.percentComplete > 0) {
        let e = (0, A.T3)(i, a.percentComplete, { roundingMode: 'floor' });
        return j.intl.formatToPlainString(j.t.lVZaXF, { percent: e });
    }
    return s && o === x.LI.SELECT ? j.intl.string(j.t.EMrUHR) : (0, w.$J)(e) ? j.intl.string(j.t.mOrpXF) : j.intl.string(j.t['7e5k7O']);
}
function eO(e, n, r) {
    var i;
    let a = et(c.useMemo(() => G.r.build(e.config).rewardsExpireAt, [e.config])),
        o = es(e),
        s = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.completedAt) != null,
        l = ea(e),
        u = (0, U.D)({
            quest: e,
            location: Z.dr.QUESTS_BAR,
            questContent: x.jn.QUEST_BAR_V2,
            taskDetails: o
        });
    if (s) return j.intl.formatToPlainString(j.t.APddvL, { expirationDate: a });
    if (n) return r === x.LI.SELECT ? j.intl.string(j.t.sWUpNz) : u;
    if ((0, w.q8)(e)) return j.intl.string(j.t['o+e9ys']);
    if (o.percentComplete > 0)
        return l
            ? (0, w.AV)({
                  quest: e,
                  taskDetails: o
              })
            : j.intl.string(j.t.mOrpXF);
    return j.intl.string(j.t.S6UUc3);
}
function eD(e, n) {
    let r = (0, m.e7)([L.Z], () => L.Z.getQuest(e), [e]),
        i = (0, g.ZP)(),
        a = c.useMemo(() => (null == r ? void 0 : r.config.features.includes(Z.S7.QUESTS_CDN)) === !0, [r]);
    return c.useMemo(
        () =>
            (null == r ? void 0 : r.config.cosponsorMetadata) == null
                ? null
                : (0, B.Rt)(e, r.config.cosponsorMetadata.logotype, {
                      theme: null != n ? n : (0, _.wj)(i) ? F.BRd.DARK : F.BRd.LIGHT,
                      newCdn: a
                  }),
        [i, n, e, null == r ? void 0 : r.config.cosponsorMetadata, a]
    );
}
function eL(e) {
    let n = G.r.build(e).defaultReward.messages.name,
        r = (0, w.Kr)(e),
        i = (0, w.f$)(e),
        a = (0, m.e7)([b.default], () => b.default.getCurrentUser()),
        o = null != a && N.ZP.isPremium(a, V.p9.TIER_2);
    if (null == r) return j.intl.formatToPlainString(j.t.l9uXLy, { decorationName: n });
    let s = j.intl.formatToPlainString(j.t.gWlmFR, {
            duration: r,
            rewardName: n
        }),
        l = j.intl.formatToPlainString(j.t.NpQ80d, {
            duration: r,
            rewardName: n
        }),
        u = i && o ? s : l;
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
})(o || (o = {}));
