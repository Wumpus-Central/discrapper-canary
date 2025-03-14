a.d(t, { Z: () => b });
var n = a(200651);
a(192379);
var r = a(780384),
    i = a(481060),
    s = a(410030),
    l = a(74538),
    d = a(104494),
    o = a(639119),
    c = a(197115),
    u = a(474936),
    N = a(388032),
    _ = a(459411);
let m = (e) => {
        let { showTrialCTA: t, subscriptionTier: a, trialDurationCopy: n, isPersistentCTA: r, shouldShowReferralTrialCopy: i, subscriptionTrial: s } = e;
        return t && i
            ? N.NW.string(N.t.bXTClZ)
            : t && (a === u.Si.TIER_2 || r)
              ? (0, l.Rt)({
                    intervalType: null == s ? void 0 : s.interval,
                    intervalCount: null == s ? void 0 : s.interval_count
                })
              : t
                ? N.NW.formatToPlainString(N.t.nTmm2t, { freeTrialText: n })
                : void 0;
    },
    T = (e, t, a, n) => (t || a ? N.NW.string(N.t.fkPGam) : e === u.Si.TIER_2 ? N.NW.formatToPlainString(N.t.bkQ4bG, { percent: n }) : void 0),
    b = (e) => {
        var { forceInverted: t, subscriptionTier: a, hasActivePromotion: b = !1, isPersistentCTA: E = !1, useShorterCTA: v = !1, showGradient: g, confirmationFooter: x, planSelectBanner: M } = e,
            h = (function (e, t) {
                if (null == e) return {};
                var a,
                    n,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            n,
                            r = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) (a = i[n]), !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
                }
                return r;
            })(e, ['forceInverted', 'subscriptionTier', 'hasActivePromotion', 'isPersistentCTA', 'useShorterCTA', 'showGradient', 'confirmationFooter', 'planSelectBanner']);
        let R = (0, s.ZP)(),
            f = !g && ((0, r.wj)(R) || t),
            I = (0, o.N)(),
            O = null == I ? void 0 : I.subscription_trial,
            S = (0, l.a5)({
                intervalType: null == O ? void 0 : O.interval,
                intervalCount: null == O ? void 0 : O.interval_count
            }),
            p = (0, d.Ng)(),
            P = null != O && a === O.sku_id,
            j = (null == I ? void 0 : I.trial_id) === u.a7,
            U = b
                ? N.NW.string(N.t.J61px8)
                : null != p
                  ? T(a, v, E, p.discount.amount)
                  : m({
                        showTrialCTA: P,
                        subscriptionTier: a,
                        trialDurationCopy: S,
                        isPersistentCTA: E,
                        shouldShowReferralTrialCopy: j,
                        subscriptionTrial: O
                    });
        return (0, n.jsx)(
            c.Z,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(a);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(a).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(a, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = a[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })(
                {
                    color: f ? i.Ttl.BRAND_INVERTED : i.Ttl.BRAND,
                    buttonShineClassName: 'buttonShineClassName' in h ? h.buttonShineClassName : f ? _.brandShine : void 0,
                    buttonText: U,
                    buttonTextClassName: P ? _.freeTrialText : void 0,
                    onlyShineOnHover: !0,
                    subscriptionTier: a,
                    showGradient: g,
                    confirmationFooter: x,
                    planSelectBanner: M
                },
                h
            )
        );
    };
