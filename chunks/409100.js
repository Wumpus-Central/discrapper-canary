n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(780384),
    s = n(481060),
    a = n(410030),
    l = n(74538),
    o = n(650032),
    c = n(104494),
    d = n(639119),
    u = n(197115),
    m = n(474936),
    g = n(388032),
    p = n(947357);
let h = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, shouldShowUpsells: r, trialDurationCopy: i, isPersistentCTA: s, shouldShowReferralTrialCopy: a, subscriptionTrial: o } = e;
        return t && a
            ? g.NW.string(g.t.bXTClZ)
            : t && (n === m.Si.TIER_2 || s)
              ? (0, l.Rt)({
                    intervalType: null == o ? void 0 : o.interval,
                    intervalCount: null == o ? void 0 : o.interval_count
                })
              : t
                ? g.NW.formatToPlainString(g.t.nTmm2t, { freeTrialText: i })
                : r && n === m.Si.TIER_2
                  ? g.NW.string(g.t.MtTjnZ)
                  : void 0;
    },
    f = (e, t, n, r) => (t || n ? g.NW.string(g.t.fkPGam) : e === m.Si.TIER_2 ? g.NW.formatToPlainString(g.t.bkQ4bG, { percent: r }) : void 0),
    b = (e) => {
        var { forceInverted: t, subscriptionTier: n, isEligibleForBogoPromotion: b = !1, isPersistentCTA: N = !1, useShorterCTA: x = !1 } = e,
            _ = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['forceInverted', 'subscriptionTier', 'isEligibleForBogoPromotion', 'isPersistentCTA', 'useShorterCTA']);
        let E = (0, a.ZP)(),
            j = (0, i.wj)(E) || t,
            C = (0, d.N)(),
            O = null == C ? void 0 : C.subscription_trial,
            v = (0, l.a5)({
                intervalType: null == O ? void 0 : O.interval,
                intervalCount: null == O ? void 0 : O.interval_count
            }),
            S = (0, c.Ng)(),
            T = null != O && n === O.sku_id,
            { enabled: I } = o._.useExperiment({ location: 'SubscribeButton' }, { autoTrackExposure: !1 }),
            y = I && (null == C ? void 0 : C.trial_id) === m.a7,
            A = b
                ? g.NW.string(g.t.J61px8)
                : null != S
                  ? f(n, x, N, S.discount.amount)
                  : h({
                        showTrialCTA: T,
                        subscriptionTier: n,
                        shouldShowUpsells: !1,
                        trialDurationCopy: v,
                        isPersistentCTA: N,
                        shouldShowReferralTrialCopy: y,
                        subscriptionTrial: O
                    });
        return (0, r.jsx)(
            u.Z,
            (function (e) {
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
            })(
                {
                    color: j ? s.Ttl.BRAND_INVERTED : s.Ttl.BRAND,
                    buttonShineClassName: 'buttonShineClassName' in _ ? _.buttonShineClassName : j ? p.brandShine : void 0,
                    buttonText: A,
                    buttonTextClassName: T ? p.freeTrialText : void 0,
                    onlyShineOnHover: !0,
                    subscriptionTier: n
                },
                _
            )
        );
    };
