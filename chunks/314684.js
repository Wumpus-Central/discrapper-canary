n.d(t, {
    $_: () => y,
    FM: () => D,
    IB: () => k,
    IY: () => O,
    JR: () => L,
    Kb: () => U,
    Vp: () => M,
    bq: () => P,
    rM: () => B,
    yQ: () => A
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
    m = n(228624),
    g = n(605236),
    _ = n(706140),
    p = n(243778),
    f = n(594174),
    h = n(314884),
    x = n(580130),
    E = n(626135),
    C = n(823379),
    b = n(111361),
    v = n(595878),
    T = n(944880),
    N = n(513785),
    I = n(106255),
    R = n(474936),
    j = n(735825),
    S = n(981631);
function A() {
    var e, t;
    let n = (function () {
            var e, t;
            let n = (0, s.cj)([N.Z], () => N.Z.getState());
            if (null != n) return null !== (t = null !== (e = n.userTenureRewardStatusByRewardId[j.Ft.FREE_AVATAR_DECO_1_MONTH]) && void 0 !== e ? e : n.userTenureRewardStatusByRewardId[j.Ft.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== t ? t : n.userTenureRewardStatusByRewardId[j.Ft.FREE_GUILD_BOOST_3_MONTHS];
        })(),
        r = M(),
        l = w([j.Ft.FREE_AVATAR_DECO_1_MONTH]),
        o = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        c = (0, s.e7)([h.Z], () => h.Z.boostSlots),
        d = i.useMemo(() => Object.values(c).some((e) => null == e.premiumGuildSubscription), [c]),
        u = null != r,
        m = u && !1 === d,
        g = null != l,
        _ = (function () {
            let e = (0, s.e7)(
                [x.Z],
                () => {
                    var e;
                    return null !== (e = x.Z.getForApplication(S.XAJ)) && void 0 !== e ? e : Z;
                },
                [],
                C.OL
            );
            return (0, I.Cl)(j.qY, e);
        })(),
        p = g && null != _ && (0, I.C3)(_.skuId, o),
        E = null !== (t = null !== (e = null == n ? void 0 : n.next_tenure_reward_id) && void 0 !== e ? e : null == l ? void 0 : l.skuId) && void 0 !== t ? t : null == r ? void 0 : r.skuId;
    return i.useMemo(() => {
        let e = {
            redeemableAt: null == n ? void 0 : n.redeemable_at,
            tenureRewardStatusId: null == n ? void 0 : n.id,
            tenureRewardType: (0, I.Xs)(E)
        };
        if (m)
            return {
                ...e,
                nitroTenureStatus: j.EB.REDEEMED,
                tenureRewardSkuId: r.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (u)
            return {
                ...e,
                nitroTenureStatus: j.EB.REDEEMABLE,
                tenureRewardSkuId: r.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (p)
            return {
                ...e,
                nitroTenureStatus: j.EB.REDEEMED,
                tenureRewardSkuId: l.skuId,
                showNotification: !0,
                showCard: !0
            };
        {
            if (g)
                return {
                    ...e,
                    nitroTenureStatus: j.EB.REDEEMABLE,
                    tenureRewardSkuId: l.skuId,
                    showNotification: !0,
                    showCard: !0
                };
            if (!(null != n && (0, I.u7)(n)) || null == n.redeemable_at || null == n.next_tenure_reward_id) return null;
            let t = a()(n.redeemable_at).diff(a().utc(), 'days'),
                i = null != n.redeemable_in_ms ? Math.ceil(a().duration(n.redeemable_in_ms).asDays()) : t;
            if (t < 0) return null;
            let r = !1,
                s = !1;
            return (
                n.next_tenure_reward_id === j.Ft.FREE_AVATAR_DECO_1_MONTH || n.next_tenure_reward_id === j.Ft.FREE_GUILD_BOOST_1_MONTH ? ((s = t <= j.bm), (r = t <= j.dF)) : n.next_tenure_reward_id === j.Ft.FREE_GUILD_BOOST_3_MONTHS && ((s = t <= j.yj), (r = t <= j.LJ)),
                {
                    ...e,
                    nitroTenureStatus: j.EB.PENDING,
                    tenureRewardSkuId: n.next_tenure_reward_id,
                    redeemableInDays: 0 === i ? 1 : i,
                    showNotification: s,
                    showCard: r
                }
            );
        }
    }, [u, r, n, m, g, p, l, E]);
}
function P(e) {
    let { showAnimations: t } = e,
        n = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        i = A();
    if (null == i) return;
    let { redeemableInDays: r = 0, tenureRewardSkuId: a } = i,
        l = j.Ft.FREE_GUILD_BOOST_1_MONTH === a || j.Ft.FREE_AVATAR_DECO_1_MONTH === a ? j.jW : j.fY,
        o = Math.min(l, Math.max(l - r, 0)),
        d = (100 * o) / l;
    return {
        initialPercentage: t && !n ? (100 * Math.max(o - 0.25 * l, 0)) / l : d,
        percentage: d
    };
}
let Z = new Set();
function w(e) {
    let t = (0, s.e7)(
            [x.Z],
            () => {
                var e;
                return null !== (e = x.Z.getForApplication(R.CL)) && void 0 !== e ? e : Z;
            },
            [],
            C.OL
        ),
        n = (0, s.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return null != e && (0, b.M5)(e, R.p9.TIER_2);
        });
    if (null != (0, I.kG)(t) || n) return (0, I.MR)(e, t);
}
function M() {
    return w([j.Ft.FREE_GUILD_BOOST_1_MONTH, j.Ft.FREE_GUILD_BOOST_3_MONTHS]);
}
let B = (e) => {
        if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
        switch (e.nitroTenureStatus) {
            case j.EB.PENDING:
                return [l.z.TENURE_REWARD_PENDING];
            case j.EB.REDEEMABLE:
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
            !1 !== r && n(B(e));
        }, [e, r]);
        let [a] = (0, p.US)(r ? t : []);
        return r && null != e && !0 === e.showNotification && (a === l.z.TENURE_REWARD_REDEEMABLE || a === l.z.TENURE_REWARD_PENDING) ? (0, I.Wb)(e.nitroTenureStatus) : null;
    },
    k = () => {
        var e;
        let t = null === (e = A()) || void 0 === e ? void 0 : e.nitroTenureStatus,
            n = (0, v.cG)({ location: 'Home' }) && null != t && t === j.EB.REDEEMABLE,
            [i] = (0, p.US)(n ? [l.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
        return !!n && i === l.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    },
    O = () => {
        let e = A(),
            t = i.useMemo(() => B(e), [e]),
            [n] = (0, _.cv)(t),
            r = i.useRef(!1);
        return i.useCallback(() => {
            null != e &&
                !0 === e.showNotification &&
                (n === l.z.TENURE_REWARD_REDEEMABLE || n === l.z.TENURE_REWARD_PENDING) &&
                ((0, g.EW)(n),
                n === l.z.TENURE_REWARD_PENDING &&
                    !1 === r.current &&
                    (E.default.track(S.rMx.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
                        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
                        tenure_reward_id: e.tenureRewardSkuId,
                        reward_type: null == e ? void 0 : e.tenureRewardType,
                        redeemable_at: null == e ? void 0 : e.redeemableAt
                    }),
                    (r.current = !0)));
        }, [e, n]);
    };
function L() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R.CL,
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, s.e7)([x.Z], () => x.Z.isFetchingForApplication(e)),
        r = (0, s.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return null != e && (0, b.M5)(e, R.p9.TIER_2);
        }),
        a = i.useRef(!1);
    i.useEffect(() => {
        !1 === n && !0 === r && !1 === a.current && !0 === t && (o.yD(e), (a.current = !0));
    }, [n, r, e, t]);
}
function D() {
    var e;
    let t = (0, v.oY)({ location: 'Home' });
    L(R.CL), L(S.XAJ, t), U(j.qY);
    let n = A(),
        r = null !== (e = null == n ? void 0 : n.showCard) && void 0 !== e && e;
    i.useEffect(() => {
        r && T.Z.forceRefreshIfOutdated();
    }, [r]);
}
function U(e) {
    var t;
    let n = (0, v.oY)({ location: 'Home' }),
        r = (0, m.hv)('useCollectiblePurchaseForTenureReward'),
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
