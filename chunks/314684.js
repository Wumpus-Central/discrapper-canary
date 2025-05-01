n.d(t, {
    $_: () => Z,
    Er: () => A,
    FM: () => M,
    IB: () => w,
    IY: () => k,
    Kb: () => B,
    bq: () => P,
    rM: () => D
}),
    n(388685);
var i = n(192379),
    r = n(913527),
    s = n.n(r),
    l = n(442837),
    a = n(704215),
    o = n(496929),
    c = n(607070),
    d = n(335131),
    u = n(1870),
    m = n(228624),
    p = n(605236),
    g = n(706140),
    h = n(243778),
    f = n(594174),
    b = n(580130),
    _ = n(626135),
    x = n(823379),
    E = n(111361),
    j = n(595878),
    C = n(944880),
    O = n(513785),
    S = n(106255),
    v = n(474936),
    T = n(735825),
    I = n(981631);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
            let e = (0, l.cj)([O.Z], () => O.Z.getState());
            if (null != e) return e.userTenureRewardStatusByRewardId[T.Ft.FREE_AVATAR_DECO_1_MONTH];
        })(),
        n = (function () {
            var e = [T.Ft.FREE_AVATAR_DECO_1_MONTH];
            let t = (0, l.e7)(
                    [b.Z],
                    () => {
                        var e;
                        return null != (e = b.Z.getForApplication(v.CL)) ? e : R;
                    },
                    [],
                    x.OL
                ),
                n = (0, l.e7)([f.default], () => {
                    let e = f.default.getCurrentUser();
                    return null != e && (0, E.M5)(e, v.p9.TIER_2);
                });
            if (null != (0, S.kG)(t) || n) return (0, S.MR)(e, t);
        })(),
        r = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        a = null != n,
        o = (function () {
            let e = (0, l.e7)(
                [b.Z],
                () => {
                    var e;
                    return null != (e = b.Z.getForApplication(I.XAJ)) ? e : R;
                },
                [],
                x.OL
            );
            return (0, S.Cl)(T.qY, e);
        })(),
        c = a && null != o && (0, S.C3)(o.skuId, r),
        d = null != (e = null == t ? void 0 : t.next_tenure_reward_id) ? e : null == n ? void 0 : n.skuId;
    return i.useMemo(() => {
        let e = {
            redeemableAt: null == t ? void 0 : t.redeemable_at,
            tenureRewardStatusId: null == t ? void 0 : t.id,
            tenureRewardType: (0, S.Xs)(d)
        };
        if (c)
            return y(N({}, e), {
                nitroTenureStatus: T.EB.REDEEMED,
                tenureRewardSkuId: n.skuId,
                showNotification: !0,
                showCard: !0
            });
        if (a)
            return y(N({}, e), {
                nitroTenureStatus: T.EB.REDEEMABLE,
                tenureRewardSkuId: n.skuId,
                showNotification: !0,
                showCard: !0
            });
        if (!(null != t && (0, S.u7)(t))) return null;
        {
            if (null == t.redeemable_at || null == t.next_tenure_reward_id) return null;
            let n = s()(t.redeemable_at).diff(s().utc(), 'days'),
                i = null != t.redeemable_in_ms ? Math.ceil(s().duration(t.redeemable_in_ms).asDays()) : n;
            if (n < 0) return null;
            let r = !1,
                l = !1;
            return (
                t.next_tenure_reward_id === T.Ft.FREE_AVATAR_DECO_1_MONTH && ((l = n <= T.bm), (r = n <= T.dF)),
                y(N({}, e), {
                    nitroTenureStatus: T.EB.PENDING,
                    tenureRewardSkuId: t.next_tenure_reward_id,
                    redeemableInDays: 0 === i ? 1 : i,
                    showNotification: l,
                    showCard: r
                })
            );
        }
    }, [t, a, c, n, d]);
}
function P(e) {
    let { showAnimations: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        i = A();
    if (null == i) return;
    let { redeemableInDays: r = 0, tenureRewardSkuId: s } = i,
        a = T.Ft.FREE_AVATAR_DECO_1_MONTH === s ? T.jW : null;
    if (null == a) return;
    let o = Math.min(a, Math.max(a - r, 0)),
        d = (100 * o) / a;
    return {
        initialPercentage: t && !n ? (100 * Math.max(o - 0.25 * a, 0)) / a : d,
        percentage: d
    };
}
let R = new Set(),
    D = (e) => {
        if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
        switch (e.nitroTenureStatus) {
            case T.EB.PENDING:
                return [a.z.TENURE_REWARD_PENDING];
            case T.EB.REDEEMABLE:
                return [a.z.TENURE_REWARD_REDEEMABLE];
            default:
                return [];
        }
    },
    Z = () => {
        let e = A(),
            [t, n] = i.useState(D(e)),
            r = (0, j.cG)({ location: 'Home' });
        i.useEffect(() => {
            !1 !== r && n(D(e));
        }, [e, r]);
        let [s] = (0, h.US)(r ? t : []);
        return r && null != e && !0 === e.showNotification && (s === a.z.TENURE_REWARD_REDEEMABLE || s === a.z.TENURE_REWARD_PENDING) ? (0, S.Wb)(e.nitroTenureStatus) : null;
    },
    w = () => {
        var e;
        let t = null == (e = A()) ? void 0 : e.nitroTenureStatus,
            n = (0, j.cG)({ location: 'Home' }) && null != t && t === T.EB.REDEEMABLE,
            [i] = (0, h.US)(n ? [a.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
        return !!n && i === a.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    },
    k = () => {
        let e = A(),
            t = i.useMemo(() => D(e), [e]),
            [n] = (0, g.cv)(t),
            r = i.useRef(!1);
        return i.useCallback(() => {
            null != e &&
                !0 === e.showNotification &&
                (n === a.z.TENURE_REWARD_REDEEMABLE || n === a.z.TENURE_REWARD_PENDING) &&
                ((0, p.EW)(n),
                n === a.z.TENURE_REWARD_PENDING &&
                    !1 === r.current &&
                    (_.default.track(I.rMx.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
                        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
                        tenure_reward_id: e.tenureRewardSkuId,
                        reward_type: null == e ? void 0 : e.tenureRewardType,
                        redeemable_at: null == e ? void 0 : e.redeemableAt
                    }),
                    (r.current = !0)));
        }, [e, n]);
    };
function L() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.CL,
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, l.e7)([b.Z], () => b.Z.isFetchingForApplication(e)),
        r = (0, l.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return null != e && (0, E.M5)(e, v.p9.TIER_2);
        }),
        s = i.useRef(!1);
    i.useEffect(() => {
        !1 === n && !0 === r && !1 === s.current && !0 === t && (o.yD(e), (s.current = !0));
    }, [n, r, e, t]);
}
function M() {
    var e;
    let t = (0, j.oY)({ location: 'Home' });
    L(v.CL), L(I.XAJ, t), B(T.qY);
    let n = A(),
        r = null != (e = null == n ? void 0 : n.showCard) && e;
    i.useEffect(() => {
        r && C.Z.forceRefreshIfOutdated();
    }, [r]);
}
function B(e) {
    var t;
    let n = (0, j.oY)({ location: 'Home' }),
        r = (0, m.hv)('useCollectiblePurchaseForTenureReward'),
        [s, a] = (0, l.Wu)([u.Z], () => [u.Z.purchases, u.Z.hasPreviouslyFetched]);
    return (
        i.useEffect(() => {
            n &&
                !a &&
                (0, d.qg)({
                    variantsReturnStyle: r,
                    location: 'useCollectiblePurchaseForTenureReward'
                });
        }, [s, a, n, r]),
        null != (t = null == s ? void 0 : s.get(e)) ? t : null
    );
}
