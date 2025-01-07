n.d(t, {
    $_: function () {
        return y;
    },
    FM: function () {
        return U;
    },
    IB: function () {
        return w;
    },
    IY: function () {
        return k;
    },
    JR: function () {
        return L;
    },
    Kb: function () {
        return D;
    },
    Vp: function () {
        return M;
    },
    bq: function () {
        return P;
    },
    rM: function () {
        return B;
    },
    yQ: function () {
        return A;
    }
}),
    n(47120);
var i = n(192379),
    r = n(913527),
    a = n.n(r),
    s = n(442837),
    l = n(704215),
    o = n(496929),
    c = n(607070),
    d = n(335131),
    u = n(1870),
    g = n(228624),
    m = n(605236),
    f = n(706140),
    p = n(243778),
    _ = n(594174),
    h = n(314884),
    x = n(580130),
    E = n(626135),
    b = n(823379),
    C = n(111361),
    v = n(595878),
    T = n(944880),
    N = n(513785),
    I = n(106255),
    S = n(474936),
    R = n(735825),
    j = n(981631);
function A() {
    var e, t;
    let n = (function () {
            var e, t;
            let n = (0, s.cj)([N.Z], () => N.Z.getState());
            if (null != n) return null !== (t = null !== (e = n.userTenureRewardStatusByRewardId[R.Ft.FREE_AVATAR_DECO_1_MONTH]) && void 0 !== e ? e : n.userTenureRewardStatusByRewardId[R.Ft.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== t ? t : n.userTenureRewardStatusByRewardId[R.Ft.FREE_GUILD_BOOST_3_MONTHS];
        })(),
        r = M(),
        l = (function () {
            return Z([R.Ft.FREE_AVATAR_DECO_1_MONTH]);
        })(),
        o = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        c = (0, s.e7)([h.Z], () => h.Z.boostSlots),
        d = i.useMemo(() => Object.values(c).some((e) => null == e.premiumGuildSubscription), [c]),
        u = null != r,
        g = u && !1 === d,
        m = null != l,
        f = (function () {
            let e = (0, s.e7)(
                [x.Z],
                () => {
                    var e;
                    return null !== (e = x.Z.getForApplication(j.XAJ)) && void 0 !== e ? e : O;
                },
                [],
                b.OL
            );
            return (0, I.Cl)(R.qY, e);
        })(),
        p = m && null != f && (0, I.C3)(f.skuId, o),
        E = null !== (t = null !== (e = null == n ? void 0 : n.next_tenure_reward_id) && void 0 !== e ? e : null == l ? void 0 : l.skuId) && void 0 !== t ? t : null == r ? void 0 : r.skuId;
    return i.useMemo(() => {
        let e = {
            redeemableAt: null == n ? void 0 : n.redeemable_at,
            tenureRewardStatusId: null == n ? void 0 : n.id,
            tenureRewardType: (0, I.Xs)(E)
        };
        if (g)
            return {
                ...e,
                nitroTenureStatus: R.EB.REDEEMED,
                tenureRewardSkuId: r.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (u)
            return {
                ...e,
                nitroTenureStatus: R.EB.REDEEMABLE,
                tenureRewardSkuId: r.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (p)
            return {
                ...e,
                nitroTenureStatus: R.EB.REDEEMED,
                tenureRewardSkuId: l.skuId,
                showNotification: !0,
                showCard: !0
            };
        else {
            if (m)
                return {
                    ...e,
                    nitroTenureStatus: R.EB.REDEEMABLE,
                    tenureRewardSkuId: l.skuId,
                    showNotification: !0,
                    showCard: !0
                };
            if (!(null != n && (0, I.u7)(n))) return null;
            if (null == n.redeemable_at || null == n.next_tenure_reward_id) return null;
            let t = a()(n.redeemable_at).diff(a().utc(), 'days'),
                i = null != n.redeemable_in_ms ? Math.ceil(a().duration(n.redeemable_in_ms).asDays()) : t;
            if (t < 0) return null;
            let r = !1,
                s = !1;
            return (
                n.next_tenure_reward_id === R.Ft.FREE_AVATAR_DECO_1_MONTH || n.next_tenure_reward_id === R.Ft.FREE_GUILD_BOOST_1_MONTH ? ((s = t <= R.bm), (r = t <= R.dF)) : n.next_tenure_reward_id === R.Ft.FREE_GUILD_BOOST_3_MONTHS && ((s = t <= R.yj), (r = t <= R.LJ)),
                {
                    ...e,
                    nitroTenureStatus: R.EB.PENDING,
                    tenureRewardSkuId: n.next_tenure_reward_id,
                    redeemableInDays: 0 === i ? 1 : i,
                    showNotification: s,
                    showCard: r
                }
            );
        }
    }, [u, r, n, g, m, p, l, E]);
}
function P(e) {
    let { showAnimations: t } = e,
        n = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        i = A();
    if (null == i) return;
    let { redeemableInDays: r = 0, tenureRewardSkuId: a } = i,
        l = R.Ft.FREE_GUILD_BOOST_1_MONTH === a || R.Ft.FREE_AVATAR_DECO_1_MONTH === a ? R.jW : R.fY,
        o = Math.min(l, Math.max(l - r, 0)),
        d = (100 * o) / l;
    return {
        initialPercentage: t && !n ? (100 * Math.max(o - 0.25 * l, 0)) / l : d,
        percentage: d
    };
}
let O = new Set();
function Z(e) {
    let t = (0, s.e7)(
            [x.Z],
            () => {
                var e;
                return null !== (e = x.Z.getForApplication(S.CL)) && void 0 !== e ? e : O;
            },
            [],
            b.OL
        ),
        n = (0, s.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return null != e && (0, C.M5)(e, S.p9.TIER_2);
        });
    if (null != (0, I.kG)(t) || !!n) return (0, I.MR)(e, t);
}
function M() {
    return Z([R.Ft.FREE_GUILD_BOOST_1_MONTH, R.Ft.FREE_GUILD_BOOST_3_MONTHS]);
}
let B = (e) => {
        if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
        switch (e.nitroTenureStatus) {
            case R.EB.PENDING:
                return [l.z.TENURE_REWARD_PENDING];
            case R.EB.REDEEMABLE:
                return [l.z.TENURE_REWARD_REDEEMABLE];
            default:
                return [];
        }
    },
    y = () => {
        let e = A(),
            [t, n] = i.useState(B(e)),
            r = (0, v.cG)({ location: 'Home' });
        i.useEffect(() => {
            if (!1 !== r) n(B(e));
        }, [e, r]);
        let [a] = (0, p.US)(r ? t : []);
        return r ? (null != e && !0 === e.showNotification && (a === l.z.TENURE_REWARD_REDEEMABLE || a === l.z.TENURE_REWARD_PENDING) ? (0, I.Wb)(e.nitroTenureStatus) : null) : null;
    },
    w = () => {
        var e;
        let t = null === (e = A()) || void 0 === e ? void 0 : e.nitroTenureStatus,
            n = (0, v.cG)({ location: 'Home' }) && null != t && t === R.EB.REDEEMABLE,
            [i] = (0, p.US)(n ? [l.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
        return !!n && i === l.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    },
    k = () => {
        let e = A(),
            t = i.useMemo(() => B(e), [e]),
            [n] = (0, f.cv)(t),
            r = i.useRef(!1);
        return i.useCallback(() => {
            null != e &&
                !0 === e.showNotification &&
                (n === l.z.TENURE_REWARD_REDEEMABLE || n === l.z.TENURE_REWARD_PENDING) &&
                ((0, m.EW)(n),
                n === l.z.TENURE_REWARD_PENDING &&
                    !1 === r.current &&
                    (E.default.track(j.rMx.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
                        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
                        tenure_reward_id: e.tenureRewardSkuId,
                        reward_type: null == e ? void 0 : e.tenureRewardType,
                        redeemable_at: null == e ? void 0 : e.redeemableAt
                    }),
                    (r.current = !0)));
        }, [e, n]);
    };
function L() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.CL,
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, s.e7)([x.Z], () => x.Z.isFetchingForApplication(e)),
        r = (0, s.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return null != e && (0, C.M5)(e, S.p9.TIER_2);
        }),
        a = i.useRef(!1);
    i.useEffect(() => {
        !1 === n && !0 === r && !1 === a.current && !0 === t && (o.yD(e), (a.current = !0));
    }, [n, r, e, t]);
}
function U() {
    var e;
    let t = (0, v.oY)({ location: 'Home' });
    L(S.CL), L(j.XAJ, t), D(R.qY);
    let n = A(),
        r = null !== (e = null == n ? void 0 : n.showCard) && void 0 !== e && e;
    i.useEffect(() => {
        r && T.Z.forceRefreshIfOutdated();
    }, [r]);
}
function D(e) {
    var t;
    let n = (0, v.oY)({ location: 'Home' }),
        r = (0, g.hv)('useCollectiblePurchaseForTenureReward'),
        [a, l] = (0, s.Wu)([u.Z], () => [u.Z.purchases, u.Z.hasPreviouslyFetched]);
    return (
        i.useEffect(() => {
            n &&
                !l &&
                (0, d.qg)({
                    variantsReturnStyle: r,
                    location: 'useCollectiblePurchaseForTenureReward'
                });
        }, [a, l, n, r]),
        null !== (t = null == a ? void 0 : a.get(e)) && void 0 !== t ? t : null
    );
}
