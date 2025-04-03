n.d(t, {
    $_: () => Z,
    Er: () => A,
    FM: () => L,
    IB: () => w,
    IY: () => k,
    Kb: () => B,
    bq: () => P,
    rM: () => D
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
    b = n(580130),
    N = n(626135),
    x = n(823379),
    _ = n(111361),
    E = n(595878),
    j = n(944880),
    O = n(513785),
    C = n(106255),
    S = n(474936),
    v = n(735825),
    T = n(981631);
function I(e) {
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
function y(e, t) {
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
function A() {
    var e;
    let t = (function () {
            let e = (0, a.cj)([O.Z], () => O.Z.getState());
            if (null != e) return e.userTenureRewardStatusByRewardId[v.Ft.FREE_AVATAR_DECO_1_MONTH];
        })(),
        n = (function () {
            var e = [v.Ft.FREE_AVATAR_DECO_1_MONTH];
            let t = (0, a.e7)(
                    [b.Z],
                    () => {
                        var e;
                        return null != (e = b.Z.getForApplication(S.CL)) ? e : R;
                    },
                    [],
                    x.OL
                ),
                n = (0, a.e7)([f.default], () => {
                    let e = f.default.getCurrentUser();
                    return null != e && (0, _.M5)(e, S.p9.TIER_2);
                });
            if (null != (0, C.kG)(t) || n) return (0, C.MR)(e, t);
        })(),
        i = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
        l = null != n,
        o = (function () {
            let e = (0, a.e7)(
                [b.Z],
                () => {
                    var e;
                    return null != (e = b.Z.getForApplication(T.XAJ)) ? e : R;
                },
                [],
                x.OL
            );
            return (0, C.Cl)(v.qY, e);
        })(),
        c = l && null != o && (0, C.C3)(o.skuId, i),
        d = null != (e = null == t ? void 0 : t.next_tenure_reward_id) ? e : null == n ? void 0 : n.skuId;
    return r.useMemo(() => {
        let e = {
            redeemableAt: null == t ? void 0 : t.redeemable_at,
            tenureRewardStatusId: null == t ? void 0 : t.id,
            tenureRewardType: (0, C.Xs)(d)
        };
        if (c)
            return y(I({}, e), {
                nitroTenureStatus: v.EB.REDEEMED,
                tenureRewardSkuId: n.skuId,
                showNotification: !0,
                showCard: !0
            });
        if (l)
            return y(I({}, e), {
                nitroTenureStatus: v.EB.REDEEMABLE,
                tenureRewardSkuId: n.skuId,
                showNotification: !0,
                showCard: !0
            });
        if (!(null != t && (0, C.u7)(t))) return null;
        {
            if (null == t.redeemable_at || null == t.next_tenure_reward_id) return null;
            let n = s()(t.redeemable_at).diff(s().utc(), 'days'),
                r = null != t.redeemable_in_ms ? Math.ceil(s().duration(t.redeemable_in_ms).asDays()) : n;
            if (n < 0) return null;
            let i = !1,
                a = !1;
            return (
                t.next_tenure_reward_id === v.Ft.FREE_AVATAR_DECO_1_MONTH && ((a = n <= v.bm), (i = n <= v.dF)),
                y(I({}, e), {
                    nitroTenureStatus: v.EB.PENDING,
                    tenureRewardSkuId: t.next_tenure_reward_id,
                    redeemableInDays: 0 === r ? 1 : r,
                    showNotification: a,
                    showCard: i
                })
            );
        }
    }, [t, l, c, n, d]);
}
function P(e) {
    let { showAnimations: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        r = A();
    if (null == r) return;
    let { redeemableInDays: i = 0, tenureRewardSkuId: s } = r,
        l = v.Ft.FREE_AVATAR_DECO_1_MONTH === s ? v.jW : null;
    if (null == l) return;
    let o = Math.min(l, Math.max(l - i, 0)),
        d = (100 * o) / l;
    return {
        initialPercentage: t && !n ? (100 * Math.max(o - 0.25 * l, 0)) / l : d,
        percentage: d
    };
}
let R = new Set(),
    D = (e) => {
        if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
        switch (e.nitroTenureStatus) {
            case v.EB.PENDING:
                return [l.z.TENURE_REWARD_PENDING];
            case v.EB.REDEEMABLE:
                return [l.z.TENURE_REWARD_REDEEMABLE];
            default:
                return [];
        }
    },
    Z = () => {
        let e = A(),
            [t, n] = r.useState(D(e)),
            i = (0, E.cG)({ location: 'Home' });
        r.useEffect(() => {
            !1 !== i && n(D(e));
        }, [e, i]);
        let [s] = (0, h.US)(i ? t : []);
        return i && null != e && !0 === e.showNotification && (s === l.z.TENURE_REWARD_REDEEMABLE || s === l.z.TENURE_REWARD_PENDING) ? (0, C.Wb)(e.nitroTenureStatus) : null;
    },
    w = () => {
        var e;
        let t = null == (e = A()) ? void 0 : e.nitroTenureStatus,
            n = (0, E.cG)({ location: 'Home' }) && null != t && t === v.EB.REDEEMABLE,
            [r] = (0, h.US)(n ? [l.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
        return !!n && r === l.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    },
    k = () => {
        let e = A(),
            t = r.useMemo(() => D(e), [e]),
            [n] = (0, p.cv)(t),
            i = r.useRef(!1);
        return r.useCallback(() => {
            null != e &&
                !0 === e.showNotification &&
                (n === l.z.TENURE_REWARD_REDEEMABLE || n === l.z.TENURE_REWARD_PENDING) &&
                ((0, g.EW)(n),
                n === l.z.TENURE_REWARD_PENDING &&
                    !1 === i.current &&
                    (N.default.track(T.rMx.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
                        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
                        tenure_reward_id: e.tenureRewardSkuId,
                        reward_type: null == e ? void 0 : e.tenureRewardType,
                        redeemable_at: null == e ? void 0 : e.redeemableAt
                    }),
                    (i.current = !0)));
        }, [e, n]);
    };
function W() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.CL,
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, a.e7)([b.Z], () => b.Z.isFetchingForApplication(e)),
        i = (0, a.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return null != e && (0, _.M5)(e, S.p9.TIER_2);
        }),
        s = r.useRef(!1);
    r.useEffect(() => {
        !1 === n && !0 === i && !1 === s.current && !0 === t && (o.yD(e), (s.current = !0));
    }, [n, i, e, t]);
}
function L() {
    var e;
    let t = (0, E.oY)({ location: 'Home' });
    W(S.CL), W(T.XAJ, t), B(v.qY);
    let n = A(),
        i = null != (e = null == n ? void 0 : n.showCard) && e;
    r.useEffect(() => {
        i && j.Z.forceRefreshIfOutdated();
    }, [i]);
}
function B(e) {
    var t;
    let n = (0, E.oY)({ location: 'Home' }),
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
        null != (t = null == s ? void 0 : s.get(e)) ? t : null
    );
}
