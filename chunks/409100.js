n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(780384),
    s = n(481060),
    a = n(410030),
    l = n(74538),
    o = n(104494),
    c = n(639119),
    d = n(197115),
    u = n(474936),
    m = n(388032),
    g = n(459411);
let p = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, trialDurationCopy: r, isPersistentCTA: i, shouldShowReferralTrialCopy: s, subscriptionTrial: a } = e;
        return t && s
            ? m.NW.string(m.t.bXTClZ)
            : t && (n === u.Si.TIER_2 || i)
              ? (0, l.Rt)({
                    intervalType: null == a ? void 0 : a.interval,
                    intervalCount: null == a ? void 0 : a.interval_count
                })
              : t
                ? m.NW.formatToPlainString(m.t.nTmm2t, { freeTrialText: r })
                : void 0;
    },
    h = (e, t, n, r) => (t || n ? m.NW.string(m.t.fkPGam) : e === u.Si.TIER_2 ? m.NW.formatToPlainString(m.t.bkQ4bG, { percent: r }) : void 0),
    f = (e) => {
        var { forceInverted: t, subscriptionTier: n, hasActivePromotion: f = !1, isPersistentCTA: b = !1, useShorterCTA: N = !1, confirmationFooter: x, planSelectBanner: _ } = e,
            E = (function (e, t) {
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
        let j = (0, a.ZP)(),
            C = (0, i.wj)(j) || t,
            O = (0, c.N)(),
            v = null == O ? void 0 : O.subscription_trial,
            S = (0, l.a5)({
                intervalType: null == v ? void 0 : v.interval,
                intervalCount: null == v ? void 0 : v.interval_count
            }),
            T = (0, o.Ng)(),
            I = null != v && n === v.sku_id,
            y = (null == O ? void 0 : O.trial_id) === u.a7,
            A = f
                ? m.NW.string(m.t.J61px8)
                : null != T
                  ? h(n, N, b, T.discount.amount)
                  : p({
                        showTrialCTA: I,
                        subscriptionTier: n,
                        trialDurationCopy: S,
                        isPersistentCTA: b,
                        shouldShowReferralTrialCopy: y,
                        subscriptionTrial: v
                    });
        return (0, r.jsx)(
            d.Z,
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
                    color: C ? s.Ttl.BRAND_INVERTED : s.Ttl.BRAND,
                    buttonShineClassName: 'buttonShineClassName' in E ? E.buttonShineClassName : C ? g.brandShine : void 0,
                    buttonText: A,
                    buttonTextClassName: I ? g.freeTrialText : void 0,
                    onlyShineOnHover: !0,
                    subscriptionTier: n,
                    confirmationFooter: x,
                    planSelectBanner: _
                },
                E
            )
        );
    };
