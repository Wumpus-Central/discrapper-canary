n.d(t, {
    $_: function () {
        return Z;
    },
    FM: function () {
        return w;
    },
    IB: function () {
        return L;
    },
    IY: function () {
        return M;
    },
    JR: function () {
        return k;
    },
    Kb: function () {
        return F;
    },
    Vp: function () {
        return B;
    },
    bq: function () {
        return R;
    },
    rM: function () {
        return D;
    },
    yQ: function () {
        return O;
    }
}),
    n(47120);
var i = n(192379),
    r = n(913527),
    s = n.n(r),
    a = n(442837),
    l = n(704215),
    o = n(496929),
    c = n(607070),
    d = n(335131),
    u = n(1870),
    m = n(228624),
    g = n(605236),
    h = n(706140),
    p = n(243778),
    x = n(594174),
    f = n(314884),
    _ = n(580130),
    E = n(626135),
    C = n(823379),
    T = n(111361),
    S = n(595878),
    b = n(944880),
    I = n(513785),
    N = n(106255),
    v = n(474936),
    A = n(735825),
    j = n(981631);
function O() {
    var e, t;
    let n = (function () {
            var e, t;
            let n = (0, a.cj)([I.Z], () => I.Z.getState());
            if (null != n) return null !== (t = null !== (e = n.userTenureRewardStatusByRewardId[A.Ft.FREE_AVATAR_DECO_1_MONTH]) && void 0 !== e ? e : n.userTenureRewardStatusByRewardId[A.Ft.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== t ? t : n.userTenureRewardStatusByRewardId[A.Ft.FREE_GUILD_BOOST_3_MONTHS];
        })(),
        r = B(),
        l = (function () {
            return y([A.Ft.FREE_AVATAR_DECO_1_MONTH]);
        })(),
        o = (0, a.e7)([x.default], () => x.default.getCurrentUser()),
        c = (0, a.e7)([f.Z], () => f.Z.boostSlots),
        d = i.useMemo(() => Object.values(c).some((e) => null == e.premiumGuildSubscription), [c]),
        u = null != r,
        m = u && !1 === d,
        g = null != l,
        h = (function () {
            let e = (0, a.e7)(
                [_.Z],
                () => {
                    var e;
                    return null !== (e = _.Z.getForApplication(j.XAJ)) && void 0 !== e ? e : P;
                },
                [],
                C.OL
            );
            return (0, N.Cl)(A.qY, e);
        })(),
        p = g && null != h && (0, N.C3)(h.skuId, o),
        E = null !== (t = null !== (e = null == n ? void 0 : n.next_tenure_reward_id) && void 0 !== e ? e : null == l ? void 0 : l.skuId) && void 0 !== t ? t : null == r ? void 0 : r.skuId;
    return i.useMemo(() => {
        let e = {
            redeemableAt: null == n ? void 0 : n.redeemable_at,
            tenureRewardStatusId: null == n ? void 0 : n.id,
            tenureRewardType: (0, N.Xs)(E)
        };
        if (m)
            return {
                ...e,
                nitroTenureStatus: A.EB.REDEEMED,
                tenureRewardSkuId: r.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (u)
            return {
                ...e,
                nitroTenureStatus: A.EB.REDEEMABLE,
                tenureRewardSkuId: r.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (p)
            return {
                ...e,
                nitroTenureStatus: A.EB.REDEEMED,
                tenureRewardSkuId: l.skuId,
                showNotification: !0,
                showCard: !0
            };
        else {
            if (g)
                return {
                    ...e,
                    nitroTenureStatus: A.EB.REDEEMABLE,
                    tenureRewardSkuId: l.skuId,
                    showNotification: !0,
                    showCard: !0
                };
            if (!(null != n && (0, N.u7)(n))) return null;
            if (null == n.redeemable_at || null == n.next_tenure_reward_id) return null;
            let t = s()(n.redeemable_at).diff(s().utc(), 'days'),
                i = null != n.redeemable_in_ms ? Math.ceil(s().duration(n.redeemable_in_ms).asDays()) : t;
            if (t < 0) return null;
            let r = !1,
                a = !1;
            return (
                n.next_tenure_reward_id === A.Ft.FREE_AVATAR_DECO_1_MONTH || n.next_tenure_reward_id === A.Ft.FREE_GUILD_BOOST_1_MONTH ? ((a = t <= A.bm), (r = t <= A.dF)) : n.next_tenure_reward_id === A.Ft.FREE_GUILD_BOOST_3_MONTHS && ((a = t <= A.yj), (r = t <= A.LJ)),
                {
                    ...e,
                    nitroTenureStatus: A.EB.PENDING,
                    tenureRewardSkuId: n.next_tenure_reward_id,
                    redeemableInDays: 0 === i ? 1 : i,
                    showNotification: a,
                    showCard: r
                }
            );
        }
    }, [u, r, n, m, g, p, l, E]);
}
function R(e) {
    let { showAnimations: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        i = O();
    if (null == i) return;
    let { redeemableInDays: r = 0, tenureRewardSkuId: s } = i,
        l = A.Ft.FREE_GUILD_BOOST_1_MONTH === s || A.Ft.FREE_AVATAR_DECO_1_MONTH === s ? A.jW : A.fY,
        o = Math.min(l, Math.max(l - r, 0)),
        d = (100 * o) / l;
    return {
        initialPercentage: t && !n ? (100 * Math.max(o - 0.25 * l, 0)) / l : d,
        percentage: d
    };
}
let P = new Set();
function y(e) {
    let t = (0, a.e7)(
            [_.Z],
            () => {
                var e;
                return null !== (e = _.Z.getForApplication(v.CL)) && void 0 !== e ? e : P;
            },
            [],
            C.OL
        ),
        n = (0, a.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return null != e && (0, T.M5)(e, v.p9.TIER_2);
        });
    if (null != (0, N.kG)(t) || !!n) return (0, N.MR)(e, t);
}
function B() {
    return y([A.Ft.FREE_GUILD_BOOST_1_MONTH, A.Ft.FREE_GUILD_BOOST_3_MONTHS]);
}
let D = (e) => {
        if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
        switch (e.nitroTenureStatus) {
            case A.EB.PENDING:
                return [l.z.TENURE_REWARD_PENDING];
            case A.EB.REDEEMABLE:
                return [l.z.TENURE_REWARD_REDEEMABLE];
            default:
                return [];
        }
    },
    Z = () => {
        let e = O(),
            [t, n] = i.useState(D(e)),
            r = (0, S.cG)({ location: 'Home' });
        i.useEffect(() => {
            if (!1 !== r) n(D(e));
        }, [e, r]);
        let [s] = (0, p.US)(r ? t : []);
        return r ? (null != e && !0 === e.showNotification && (s === l.z.TENURE_REWARD_REDEEMABLE || s === l.z.TENURE_REWARD_PENDING) ? (0, N.Wb)(e.nitroTenureStatus) : null) : null;
    },
    L = () => {
        var e;
        let t = null === (e = O()) || void 0 === e ? void 0 : e.nitroTenureStatus,
            n = (0, S.cG)({ location: 'Home' }) && null != t && t === A.EB.REDEEMABLE,
            [i] = (0, p.US)(n ? [l.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
        return !!n && i === l.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    },
    M = () => {
        let e = O(),
            t = i.useMemo(() => D(e), [e]),
            [n] = (0, h.cv)(t),
            r = i.useRef(!1);
        return i.useCallback(() => {
            null != e &&
                !0 === e.showNotification &&
                (n === l.z.TENURE_REWARD_REDEEMABLE || n === l.z.TENURE_REWARD_PENDING) &&
                ((0, g.EW)(n),
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
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.CL,
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, a.e7)([_.Z], () => _.Z.isFetchingForApplication(e)),
        r = (0, a.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return null != e && (0, T.M5)(e, v.p9.TIER_2);
        }),
        s = i.useRef(!1);
    i.useEffect(() => {
        !1 === n && !0 === r && !1 === s.current && !0 === t && (o.yD(e), (s.current = !0));
    }, [n, r, e, t]);
}
function w() {
    var e;
    let t = (0, S.oY)({ location: 'Home' });
    k(v.CL), k(j.XAJ, t), F(A.qY);
    let n = O(),
        r = null !== (e = null == n ? void 0 : n.showCard) && void 0 !== e && e;
    i.useEffect(() => {
        r && b.Z.forceRefreshIfOutdated();
    }, [r]);
}
function F(e) {
    var t;
    let n = (0, S.oY)({ location: 'Home' }),
        r = (0, m.hv)('useCollectiblePurchaseForTenureReward'),
        [s, l] = (0, a.Wu)([u.Z], () => [u.Z.purchases, u.Z.hasPreviouslyFetched]);
    return (
        i.useEffect(() => {
            n &&
                !l &&
                (0, d.qg)({
                    variantsReturnStyle: r,
                    location: 'useCollectiblePurchaseForTenureReward'
                });
        }, [s, l, n, r]),
        null !== (t = null == s ? void 0 : s.get(e)) && void 0 !== t ? t : null
    );
}
