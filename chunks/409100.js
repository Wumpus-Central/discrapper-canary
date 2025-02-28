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
    p = n(459411);
let h = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, trialDurationCopy: r, isPersistentCTA: i, shouldShowReferralTrialCopy: s, subscriptionTrial: a } = e;
        return t && s
            ? g.NW.string(g.t.bXTClZ)
            : t && (n === m.Si.TIER_2 || i)
              ? (0, l.Rt)({
                    intervalType: null == a ? void 0 : a.interval,
                    intervalCount: null == a ? void 0 : a.interval_count
                })
              : t
                ? g.NW.formatToPlainString(g.t.nTmm2t, { freeTrialText: r })
                : void 0;
    },
    f = (e, t, n, r) => (t || n ? g.NW.string(g.t.fkPGam) : e === m.Si.TIER_2 ? g.NW.formatToPlainString(g.t.bkQ4bG, { percent: r }) : void 0),
    b = (e) => {
        var { forceInverted: t, subscriptionTier: n, hasActivePromotion: b = !1, isPersistentCTA: N = !1, useShorterCTA: x = !1, confirmationFooter: _, planSelectBanner: E } = e,
            j = (function (e, t) {
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
            })(e, ['forceInverted', 'subscriptionTier', 'hasActivePromotion', 'isPersistentCTA', 'useShorterCTA', 'confirmationFooter', 'planSelectBanner']);
        let C = (0, a.ZP)(),
            O = (0, i.wj)(C) || t,
            v = (0, d.N)(),
            S = null == v ? void 0 : v.subscription_trial,
            T = (0, l.a5)({
                intervalType: null == S ? void 0 : S.interval,
                intervalCount: null == S ? void 0 : S.interval_count
            }),
            I = (0, c.Ng)(),
            y = null != S && n === S.sku_id,
            { enabled: A } = o._.useExperiment({ location: 'SubscribeButton' }, { autoTrackExposure: !1 }),
            P = A && (null == v ? void 0 : v.trial_id) === m.a7,
            R = b
                ? g.NW.string(g.t.J61px8)
                : null != I
                  ? f(n, x, N, I.discount.amount)
                  : h({
                        showTrialCTA: y,
                        subscriptionTier: n,
                        trialDurationCopy: T,
                        isPersistentCTA: N,
                        shouldShowReferralTrialCopy: P,
                        subscriptionTrial: S
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
                    color: O ? s.Ttl.BRAND_INVERTED : s.Ttl.BRAND,
                    buttonShineClassName: 'buttonShineClassName' in j ? j.buttonShineClassName : O ? p.brandShine : void 0,
                    buttonText: R,
                    buttonTextClassName: y ? p.freeTrialText : void 0,
                    onlyShineOnHover: !0,
                    subscriptionTier: n,
                    confirmationFooter: _,
                    planSelectBanner: E
                },
                j
            )
        );
    };
