n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(780384),
    a = n(481060),
    o = n(410030),
    s = n(74538),
    l = n(104494),
    c = n(639119),
    u = n(197115),
    d = n(474936),
    f = n(388032),
    _ = n(534641);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, trialDurationCopy: r, isPersistentCTA: i, shouldShowReferralTrialCopy: a, subscriptionTrial: o } = e;
        return t && a
            ? f.intl.string(f.t.bXTClZ)
            : t && (n === d.Si.TIER_2 || i)
              ? (0, s.Rt)({
                    intervalType: null == o ? void 0 : o.interval,
                    intervalCount: null == o ? void 0 : o.interval_count
                })
              : t
                ? f.intl.formatToPlainString(f.t.nTmm2t, { freeTrialText: r })
                : void 0;
    },
    b = (e, t, n, r) => (t || n ? f.intl.string(f.t.fkPGam) : e === d.Si.TIER_2 ? f.intl.formatToPlainString(f.t.bkQ4bG, { percent: r }) : void 0),
    y = (e) => {
        var { forceInverted: t, subscriptionTier: n, hasActivePromotion: p = !1, isPersistentCTA: g = !1, useShorterCTA: y = !1, showGradient: O, confirmationFooter: v, paymentModalBanner: I } = e,
            S = m(e, ['forceInverted', 'subscriptionTier', 'hasActivePromotion', 'isPersistentCTA', 'useShorterCTA', 'showGradient', 'confirmationFooter', 'paymentModalBanner']);
        let T = (0, o.ZP)(),
            A = !O && ((0, i.wj)(T) || t),
            N = (0, c.N)(),
            C = null == N ? void 0 : N.subscription_trial,
            R = (0, s.a5)({
                intervalType: null == C ? void 0 : C.interval,
                intervalCount: null == C ? void 0 : C.interval_count
            }),
            P = (0, l.Ng)(),
            w = null != C && n === C.sku_id,
            D = (null == N ? void 0 : N.trial_id) === d.a7,
            L = p
                ? f.intl.string(f.t.J61px8)
                : null != P
                  ? b(n, y, g, P.discount.amount)
                  : E({
                        showTrialCTA: w,
                        subscriptionTier: n,
                        trialDurationCopy: R,
                        isPersistentCTA: g,
                        shouldShowReferralTrialCopy: D,
                        subscriptionTrial: C
                    });
        return (0, r.jsx)(
            u.Z,
            h(
                {
                    color: A ? a.Ttl.BRAND_INVERTED : a.Ttl.BRAND,
                    buttonShineClassName: 'buttonShineClassName' in S ? S.buttonShineClassName : A ? _.brandShine : void 0,
                    buttonText: L,
                    buttonTextClassName: w ? _.freeTrialText : void 0,
                    onlyShineOnHover: !0,
                    subscriptionTier: n,
                    showGradient: O,
                    confirmationFooter: v,
                    paymentModalBanner: I
                },
                S
            )
        );
    };
