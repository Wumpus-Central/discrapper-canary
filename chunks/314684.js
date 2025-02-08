n.d(t, {
    $_: () => k,
    FM: () => w,
    IB: () => L,
    IY: () => B,
    JR: () => M,
    Kb: () => V,
    Vp: () => y,
    bq: () => R,
    rM: () => Z,
    yQ: () => O
}),
    n(47120);
var i = n(192379),
    s = n(913527),
    r = n.n(s),
    l = n(442837),
    a = n(704215),
    o = n(496929),
    c = n(607070),
    d = n(335131),
    u = n(1870),
    m = n(228624),
    g = n(605236),
    h = n(706140),
    x = n(243778),
    _ = n(594174),
    p = n(314884),
    E = n(580130),
    C = n(626135),
    f = n(823379),
    T = n(111361),
    N = n(595878),
    I = n(944880),
    S = n(513785),
    b = n(106255),
    v = n(474936),
    j = n(735825),
    A = n(981631);
function O() {
    var e, t;
    let n = (function () {
            var e, t;
            let n = (0, l.cj)([S.Z], () => S.Z.getState());
            if (null != n) return null !== (t = null !== (e = n.userTenureRewardStatusByRewardId[j.Ft.FREE_AVATAR_DECO_1_MONTH]) && void 0 !== e ? e : n.userTenureRewardStatusByRewardId[j.Ft.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== t ? t : n.userTenureRewardStatusByRewardId[j.Ft.FREE_GUILD_BOOST_3_MONTHS];
        })(),
        s = y(),
        a = D([j.Ft.FREE_AVATAR_DECO_1_MONTH]),
        o = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
        c = (0, l.e7)([p.Z], () => p.Z.boostSlots),
        d = i.useMemo(() => Object.values(c).some((e) => null == e.premiumGuildSubscription), [c]),
        u = null != s,
        m = u && !1 === d,
        g = null != a,
        h = (function () {
            let e = (0, l.e7)(
                [E.Z],
                () => {
                    var e;
                    return null !== (e = E.Z.getForApplication(A.XAJ)) && void 0 !== e ? e : P;
                },
                [],
                f.OL
            );
            return (0, b.Cl)(j.qY, e);
        })(),
        x = g && null != h && (0, b.C3)(h.skuId, o),
        C = null !== (t = null !== (e = null == n ? void 0 : n.next_tenure_reward_id) && void 0 !== e ? e : null == a ? void 0 : a.skuId) && void 0 !== t ? t : null == s ? void 0 : s.skuId;
    return i.useMemo(() => {
        let e = {
            redeemableAt: null == n ? void 0 : n.redeemable_at,
            tenureRewardStatusId: null == n ? void 0 : n.id,
            tenureRewardType: (0, b.Xs)(C)
        };
        if (m)
            return {
                ...e,
                nitroTenureStatus: j.EB.REDEEMED,
                tenureRewardSkuId: s.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (u)
            return {
                ...e,
                nitroTenureStatus: j.EB.REDEEMABLE,
                tenureRewardSkuId: s.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (x)
            return {
                ...e,
                nitroTenureStatus: j.EB.REDEEMED,
                tenureRewardSkuId: a.skuId,
                showNotification: !0,
                showCard: !0
            };
        {
            if (g)
                return {
                    ...e,
                    nitroTenureStatus: j.EB.REDEEMABLE,
                    tenureRewardSkuId: a.skuId,
                    showNotification: !0,
                    showCard: !0
                };
            if (!(null != n && (0, b.u7)(n)) || null == n.redeemable_at || null == n.next_tenure_reward_id) return null;
            let t = r()(n.redeemable_at).diff(r().utc(), 'days'),
                i = null != n.redeemable_in_ms ? Math.ceil(r().duration(n.redeemable_in_ms).asDays()) : t;
            if (t < 0) return null;
            let s = !1,
                l = !1;
            return (
                n.next_tenure_reward_id === j.Ft.FREE_AVATAR_DECO_1_MONTH || n.next_tenure_reward_id === j.Ft.FREE_GUILD_BOOST_1_MONTH ? ((l = t <= j.bm), (s = t <= j.dF)) : n.next_tenure_reward_id === j.Ft.FREE_GUILD_BOOST_3_MONTHS && ((l = t <= j.yj), (s = t <= j.LJ)),
                {
                    ...e,
                    nitroTenureStatus: j.EB.PENDING,
                    tenureRewardSkuId: n.next_tenure_reward_id,
                    redeemableInDays: 0 === i ? 1 : i,
                    showNotification: l,
                    showCard: s
                }
            );
        }
    }, [u, s, n, m, g, x, a, C]);
}
function R(e) {
    let { showAnimations: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        i = O();
    if (null == i) return;
    let { redeemableInDays: s = 0, tenureRewardSkuId: r } = i,
        a = j.Ft.FREE_GUILD_BOOST_1_MONTH === r || j.Ft.FREE_AVATAR_DECO_1_MONTH === r ? j.jW : j.fY,
        o = Math.min(a, Math.max(a - s, 0)),
        d = (100 * o) / a;
    return {
        initialPercentage: t && !n ? (100 * Math.max(o - 0.25 * a, 0)) / a : d,
        percentage: d
    };
}
let P = new Set();
function D(e) {
    let t = (0, l.e7)(
            [E.Z],
            () => {
                var e;
                return null !== (e = E.Z.getForApplication(v.CL)) && void 0 !== e ? e : P;
            },
            [],
            f.OL
        ),
        n = (0, l.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return null != e && (0, T.M5)(e, v.p9.TIER_2);
        });
    if (null != (0, b.kG)(t) || n) return (0, b.MR)(e, t);
}
function y() {
    return D([j.Ft.FREE_GUILD_BOOST_1_MONTH, j.Ft.FREE_GUILD_BOOST_3_MONTHS]);
}
let Z = (e) => {
        if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
        switch (e.nitroTenureStatus) {
            case j.EB.PENDING:
                return [a.z.TENURE_REWARD_PENDING];
            case j.EB.REDEEMABLE:
                return [a.z.TENURE_REWARD_REDEEMABLE];
            default:
                return [];
        }
    },
    k = () => {
        let e = O(),
            [t, n] = i.useState(Z(e)),
            s = (0, N.cG)({ location: 'Home' });
        i.useEffect(() => {
            !1 !== s && n(Z(e));
        }, [e, s]);
        let [r] = (0, x.US)(s ? t : []);
        return s && null != e && !0 === e.showNotification && (r === a.z.TENURE_REWARD_REDEEMABLE || r === a.z.TENURE_REWARD_PENDING) ? (0, b.Wb)(e.nitroTenureStatus) : null;
    },
    L = () => {
        var e;
        let t = null === (e = O()) || void 0 === e ? void 0 : e.nitroTenureStatus,
            n = (0, N.cG)({ location: 'Home' }) && null != t && t === j.EB.REDEEMABLE,
            [i] = (0, x.US)(n ? [a.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
        return !!n && i === a.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    },
    B = () => {
        let e = O(),
            t = i.useMemo(() => Z(e), [e]),
            [n] = (0, h.cv)(t),
            s = i.useRef(!1);
        return i.useCallback(() => {
            null != e &&
                !0 === e.showNotification &&
                (n === a.z.TENURE_REWARD_REDEEMABLE || n === a.z.TENURE_REWARD_PENDING) &&
                ((0, g.EW)(n),
                n === a.z.TENURE_REWARD_PENDING &&
                    !1 === s.current &&
                    (C.default.track(A.rMx.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
                        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
                        tenure_reward_id: e.tenureRewardSkuId,
                        reward_type: null == e ? void 0 : e.tenureRewardType,
                        redeemable_at: null == e ? void 0 : e.redeemableAt
                    }),
                    (s.current = !0)));
        }, [e, n]);
    };
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.CL,
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, l.e7)([E.Z], () => E.Z.isFetchingForApplication(e)),
        s = (0, l.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return null != e && (0, T.M5)(e, v.p9.TIER_2);
        }),
        r = i.useRef(!1);
    i.useEffect(() => {
        !1 === n && !0 === s && !1 === r.current && !0 === t && (o.yD(e), (r.current = !0));
    }, [n, s, e, t]);
}
function w() {
    var e;
    let t = (0, N.oY)({ location: 'Home' });
    M(v.CL), M(A.XAJ, t), V(j.qY);
    let n = O(),
        s = null !== (e = null == n ? void 0 : n.showCard) && void 0 !== e && e;
    i.useEffect(() => {
        s && I.Z.forceRefreshIfOutdated();
    }, [s]);
}
function V(e) {
    var t;
    let n = (0, N.oY)({ location: 'Home' }),
        s = (0, m.hv)('useCollectiblePurchaseForTenureReward'),
        [r, a] = (0, l.Wu)([u.Z], () => [u.Z.purchases, u.Z.hasPreviouslyFetched]);
    return (
        i.useEffect(() => {
            n &&
                !a &&
                (0, d.qg)({
                    variantsReturnStyle: s,
                    location: 'useCollectiblePurchaseForTenureReward'
                });
        }, [r, a, n, s]),
        null !== (t = null == r ? void 0 : r.get(e)) && void 0 !== t ? t : null
    );
}
