n.d(t, {
    $_: () => W,
    FM: () => U,
    IB: () => L,
    IY: () => B,
    JR: () => M,
    Kb: () => V,
    Vp: () => w,
    bq: () => R,
    rM: () => k,
    yQ: () => P
}),
    n(47120);
var r = n(192379),
    i = n(913527),
    s = n.n(i),
    a = n(442837),
    l = n(704215),
    o = n(496929),
    c = n(607070),
    d = n(335131),
    u = n(1870),
    m = n(228624),
    g = n(605236),
    p = n(706140),
    h = n(243778),
    f = n(594174),
    N = n(314884),
    x = n(580130),
    b = n(626135),
    _ = n(823379),
    E = n(111361),
    j = n(595878),
    C = n(944880),
    O = n(513785),
    v = n(106255),
    S = n(474936),
    T = n(735825),
    I = n(981631);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P() {
    var e, t;
    let n = (function () {
            var e, t;
            let n = (0, a.cj)([O.Z], () => O.Z.getState());
            if (null != n) return null !== (t = null !== (e = n.userTenureRewardStatusByRewardId[T.Ft.FREE_AVATAR_DECO_1_MONTH]) && void 0 !== e ? e : n.userTenureRewardStatusByRewardId[T.Ft.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== t ? t : n.userTenureRewardStatusByRewardId[T.Ft.FREE_GUILD_BOOST_3_MONTHS];
        })(),
        i = w(),
        l = Z([T.Ft.FREE_AVATAR_DECO_1_MONTH]),
        o = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
        c = (0, a.e7)([N.Z], () => N.Z.boostSlots),
        d = r.useMemo(() => Object.values(c).some((e) => null == e.premiumGuildSubscription), [c]),
        u = null != i,
        m = u && !1 === d,
        g = null != l,
        p = (function () {
            let e = (0, a.e7)(
                [x.Z],
                () => {
                    var e;
                    return null !== (e = x.Z.getForApplication(I.XAJ)) && void 0 !== e ? e : D;
                },
                [],
                _.OL
            );
            return (0, v.Cl)(T.qY, e);
        })(),
        h = g && null != p && (0, v.C3)(p.skuId, o),
        b = null !== (t = null !== (e = null == n ? void 0 : n.next_tenure_reward_id) && void 0 !== e ? e : null == l ? void 0 : l.skuId) && void 0 !== t ? t : null == i ? void 0 : i.skuId;
    return r.useMemo(() => {
        let e = {
            redeemableAt: null == n ? void 0 : n.redeemable_at,
            tenureRewardStatusId: null == n ? void 0 : n.id,
            tenureRewardType: (0, v.Xs)(b)
        };
        if (m)
            return A(y({}, e), {
                nitroTenureStatus: T.EB.REDEEMED,
                tenureRewardSkuId: i.skuId,
                showNotification: !0,
                showCard: !0
            });
        if (u)
            return A(y({}, e), {
                nitroTenureStatus: T.EB.REDEEMABLE,
                tenureRewardSkuId: i.skuId,
                showNotification: !0,
                showCard: !0
            });
        if (h)
            return A(y({}, e), {
                nitroTenureStatus: T.EB.REDEEMED,
                tenureRewardSkuId: l.skuId,
                showNotification: !0,
                showCard: !0
            });
        {
            if (g)
                return A(y({}, e), {
                    nitroTenureStatus: T.EB.REDEEMABLE,
                    tenureRewardSkuId: l.skuId,
                    showNotification: !0,
                    showCard: !0
                });
            if (!(null != n && (0, v.u7)(n)) || null == n.redeemable_at || null == n.next_tenure_reward_id) return null;
            let t = s()(n.redeemable_at).diff(s().utc(), 'days'),
                r = null != n.redeemable_in_ms ? Math.ceil(s().duration(n.redeemable_in_ms).asDays()) : t;
            if (t < 0) return null;
            let i = !1,
                a = !1;
            return (
                n.next_tenure_reward_id === T.Ft.FREE_AVATAR_DECO_1_MONTH || n.next_tenure_reward_id === T.Ft.FREE_GUILD_BOOST_1_MONTH ? ((a = t <= T.bm), (i = t <= T.dF)) : n.next_tenure_reward_id === T.Ft.FREE_GUILD_BOOST_3_MONTHS && ((a = t <= T.yj), (i = t <= T.LJ)),
                A(y({}, e), {
                    nitroTenureStatus: T.EB.PENDING,
                    tenureRewardSkuId: n.next_tenure_reward_id,
                    redeemableInDays: 0 === r ? 1 : r,
                    showNotification: a,
                    showCard: i
                })
            );
        }
    }, [u, i, n, m, g, h, l, b]);
}
function R(e) {
    let { showAnimations: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        r = P();
    if (null == r) return;
    let { redeemableInDays: i = 0, tenureRewardSkuId: s } = r,
        l = T.Ft.FREE_GUILD_BOOST_1_MONTH === s || T.Ft.FREE_AVATAR_DECO_1_MONTH === s ? T.jW : T.fY,
        o = Math.min(l, Math.max(l - i, 0)),
        d = (100 * o) / l;
    return {
        initialPercentage: t && !n ? (100 * Math.max(o - 0.25 * l, 0)) / l : d,
        percentage: d
    };
}
let D = new Set();
function Z(e) {
    let t = (0, a.e7)(
            [x.Z],
            () => {
                var e;
                return null !== (e = x.Z.getForApplication(S.CL)) && void 0 !== e ? e : D;
            },
            [],
            _.OL
        ),
        n = (0, a.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return null != e && (0, E.M5)(e, S.p9.TIER_2);
        });
    if (null != (0, v.kG)(t) || n) return (0, v.MR)(e, t);
}
function w() {
    return Z([T.Ft.FREE_GUILD_BOOST_1_MONTH, T.Ft.FREE_GUILD_BOOST_3_MONTHS]);
}
let k = (e) => {
        if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
        switch (e.nitroTenureStatus) {
            case T.EB.PENDING:
                return [l.z.TENURE_REWARD_PENDING];
            case T.EB.REDEEMABLE:
                return [l.z.TENURE_REWARD_REDEEMABLE];
            default:
                return [];
        }
    },
    W = () => {
        let e = P(),
            [t, n] = r.useState(k(e)),
            i = (0, j.cG)({ location: 'Home' });
        r.useEffect(() => {
            !1 !== i && n(k(e));
        }, [e, i]);
        let [s] = (0, h.US)(i ? t : []);
        return i && null != e && !0 === e.showNotification && (s === l.z.TENURE_REWARD_REDEEMABLE || s === l.z.TENURE_REWARD_PENDING) ? (0, v.Wb)(e.nitroTenureStatus) : null;
    },
    L = () => {
        var e;
        let t = null === (e = P()) || void 0 === e ? void 0 : e.nitroTenureStatus,
            n = (0, j.cG)({ location: 'Home' }) && null != t && t === T.EB.REDEEMABLE,
            [r] = (0, h.US)(n ? [l.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
        return !!n && r === l.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    },
    B = () => {
        let e = P(),
            t = r.useMemo(() => k(e), [e]),
            [n] = (0, p.cv)(t),
            i = r.useRef(!1);
        return r.useCallback(() => {
            null != e &&
                !0 === e.showNotification &&
                (n === l.z.TENURE_REWARD_REDEEMABLE || n === l.z.TENURE_REWARD_PENDING) &&
                ((0, g.EW)(n),
                n === l.z.TENURE_REWARD_PENDING &&
                    !1 === i.current &&
                    (b.default.track(I.rMx.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
                        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
                        tenure_reward_id: e.tenureRewardSkuId,
                        reward_type: null == e ? void 0 : e.tenureRewardType,
                        redeemable_at: null == e ? void 0 : e.redeemableAt
                    }),
                    (i.current = !0)));
        }, [e, n]);
    };
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.CL,
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, a.e7)([x.Z], () => x.Z.isFetchingForApplication(e)),
        i = (0, a.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return null != e && (0, E.M5)(e, S.p9.TIER_2);
        }),
        s = r.useRef(!1);
    r.useEffect(() => {
        !1 === n && !0 === i && !1 === s.current && !0 === t && (o.yD(e), (s.current = !0));
    }, [n, i, e, t]);
}
function U() {
    var e;
    let t = (0, j.oY)({ location: 'Home' });
    M(S.CL), M(I.XAJ, t), V(T.qY);
    let n = P(),
        i = null !== (e = null == n ? void 0 : n.showCard) && void 0 !== e && e;
    r.useEffect(() => {
        i && C.Z.forceRefreshIfOutdated();
    }, [i]);
}
function V(e) {
    var t;
    let n = (0, j.oY)({ location: 'Home' }),
        i = (0, m.hv)('useCollectiblePurchaseForTenureReward'),
        [s, l] = (0, a.Wu)([u.Z], () => [u.Z.purchases, u.Z.hasPreviouslyFetched]);
    return (
        r.useEffect(() => {
            n &&
                !l &&
                (0, d.qg)({
                    variantsReturnStyle: i,
                    location: 'useCollectiblePurchaseForTenureReward'
                });
        }, [s, l, n, i]),
        null !== (t = null == s ? void 0 : s.get(e)) && void 0 !== t ? t : null
    );
}
