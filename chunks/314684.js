n.d(t, {
    $_: () => P,
    Er: () => N,
    FM: () => w,
    IB: () => R,
    IY: () => D,
    Kb: () => k,
    bq: () => I,
    rM: () => A
}),
    n(388685);
var i = n(73800),
    r = n(442837),
    s = n(704215),
    l = n(496929),
    a = n(607070),
    o = n(335131),
    c = n(1870),
    d = n(228624),
    u = n(605236),
    m = n(706140),
    g = n(243778),
    p = n(594174),
    h = n(580130),
    f = n(626135),
    b = n(823379),
    _ = n(111361),
    x = n(595878),
    E = n(513785),
    C = n(106255),
    j = n(474936),
    O = n(735825),
    S = n(981631);
function v(e) {
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
function T(e, t) {
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
function N() {
    var e;
    let t = (function () {
            let e = (0, r.cj)([E.Z], () => E.Z.getState());
            if (null != e) return e.userTenureRewardStatusByRewardId[O.Ft.FREE_AVATAR_DECO_1_MONTH];
        })(),
        n = (function () {
            var e = [O.Ft.FREE_AVATAR_DECO_1_MONTH];
            let t = (0, r.e7)(
                    [h.Z],
                    () => {
                        var e;
                        return null != (e = h.Z.getForApplication(j.CL)) ? e : y;
                    },
                    [],
                    b.OL
                ),
                n = (0, r.e7)([p.default], () => {
                    let e = p.default.getCurrentUser();
                    return null != e && (0, _.M5)(e, j.p9.TIER_2);
                });
            if (null != (0, C.kG)(t) || n) return (0, C.MR)(e, t);
        })(),
        s = (0, r.e7)([p.default], () => p.default.getCurrentUser()),
        l = null != n,
        a = (function () {
            let e = (0, r.e7)(
                [h.Z],
                () => {
                    var e;
                    return null != (e = h.Z.getForApplication(S.XAJ)) ? e : y;
                },
                [],
                b.OL
            );
            return (0, C.Cl)(O.qY, e);
        })(),
        o = l && null != a && (0, C.C3)(a.skuId, s),
        c = null != (e = null == t ? void 0 : t.next_tenure_reward_id) ? e : null == n ? void 0 : n.skuId;
    return i.useMemo(() => {
        let e = {
            redeemableAt: null == t ? void 0 : t.redeemable_at,
            tenureRewardStatusId: null == t ? void 0 : t.id,
            tenureRewardType: (0, C.Xs)(c)
        };
        return o
            ? T(v({}, e), {
                  nitroTenureStatus: O.EB.REDEEMED,
                  tenureRewardSkuId: n.skuId,
                  showNotification: !0,
                  showCard: !0
              })
            : l
              ? T(v({}, e), {
                    nitroTenureStatus: O.EB.REDEEMABLE,
                    tenureRewardSkuId: n.skuId,
                    showNotification: !0,
                    showCard: !0
                })
              : null;
    }, [t, l, o, n, c]);
}
function I(e) {
    let { showAnimations: t } = e,
        n = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        i = N();
    if (null == i) return;
    let { redeemableInDays: s = 0, tenureRewardSkuId: l } = i,
        o = O.Ft.FREE_AVATAR_DECO_1_MONTH === l ? O.jW : null;
    if (null == o) return;
    let c = Math.min(o, Math.max(o - s, 0)),
        d = (100 * c) / o;
    return {
        initialPercentage: t && !n ? (100 * Math.max(c - 0.25 * o, 0)) / o : d,
        percentage: d
    };
}
let y = new Set(),
    A = (e) => {
        if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
        switch (e.nitroTenureStatus) {
            case O.EB.PENDING:
                return [s.z.TENURE_REWARD_PENDING];
            case O.EB.REDEEMABLE:
                return [s.z.TENURE_REWARD_REDEEMABLE];
            default:
                return [];
        }
    },
    P = () => {
        let e = N(),
            [t, n] = i.useState(A(e)),
            r = (0, x.cG)({ location: 'Home' });
        i.useEffect(() => {
            !1 !== r && n(A(e));
        }, [e, r]);
        let [l] = (0, g.US)(r ? t : []);
        return r && null != e && !0 === e.showNotification && (l === s.z.TENURE_REWARD_REDEEMABLE || l === s.z.TENURE_REWARD_PENDING) ? (0, C.Wb)(e.nitroTenureStatus) : null;
    },
    R = () => {
        var e;
        let t = null == (e = N()) ? void 0 : e.nitroTenureStatus,
            n = (0, x.cG)({ location: 'Home' }) && null != t && t === O.EB.REDEEMABLE,
            [i] = (0, g.US)(n ? [s.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
        return !!n && i === s.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    },
    D = () => {
        let e = N(),
            t = i.useMemo(() => A(e), [e]),
            [n] = (0, m.cv)(t),
            r = i.useRef(!1);
        return i.useCallback(() => {
            null != e &&
                !0 === e.showNotification &&
                (n === s.z.TENURE_REWARD_REDEEMABLE || n === s.z.TENURE_REWARD_PENDING) &&
                ((0, u.EW)(n),
                n === s.z.TENURE_REWARD_PENDING &&
                    !1 === r.current &&
                    (f.default.track(S.rMx.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
                        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
                        tenure_reward_id: e.tenureRewardSkuId,
                        reward_type: null == e ? void 0 : e.tenureRewardType,
                        redeemable_at: null == e ? void 0 : e.redeemableAt
                    }),
                    (r.current = !0)));
        }, [e, n]);
    };
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j.CL,
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, r.e7)([h.Z], () => h.Z.isFetchingForApplication(e)),
        s = (0, r.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return null != e && (0, _.M5)(e, j.p9.TIER_2);
        }),
        a = i.useRef(!1);
    i.useEffect(() => {
        !1 === n && !0 === s && !1 === a.current && !0 === t && (l.yD(e), (a.current = !0));
    }, [n, s, e, t]);
}
function w() {
    let e = (0, x.oY)({ location: 'Home' });
    Z(j.CL), Z(S.XAJ, e), k(O.qY);
}
function k(e) {
    var t;
    let n = (0, x.oY)({ location: 'Home' }),
        s = (0, d.hv)('useCollectiblePurchaseForTenureReward'),
        [l, a] = (0, r.Wu)([c.Z], () => [c.Z.purchases, c.Z.hasPreviouslyFetched]);
    return (
        i.useEffect(() => {
            n &&
                !a &&
                (0, o.qg)({
                    variantsReturnStyle: s,
                    location: 'useCollectiblePurchaseForTenureReward'
                });
        }, [l, a, n, s]),
        null != (t = null == l ? void 0 : l.get(e)) ? t : null
    );
}
