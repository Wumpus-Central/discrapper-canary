n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(780384),
    o = n(481060),
    a = n(410030),
    s = n(74538),
    l = n(104494),
    c = n(639119),
    u = n(767714),
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, trialDurationCopy: r, isPersistentCTA: i, shouldShowReferralTrialCopy: o, subscriptionTrial: a } = e;
        return t && o
            ? f.intl.string(f.t.bXTClZ)
            : t && (n === d.Si.TIER_2 || i)
              ? (0, s.Rt)({
                    intervalType: null == a ? void 0 : a.interval,
                    intervalCount: null == a ? void 0 : a.interval_count
                })
              : t
                ? f.intl.formatToPlainString(f.t.nTmm2t, { freeTrialText: r })
                : void 0;
    },
    b = (e, t, n, r) => (t || n ? f.intl.string(f.t.fkPGam) : e === d.Si.TIER_2 ? f.intl.formatToPlainString(f.t.bkQ4bG, { percent: r }) : void 0),
    y = (e) => {
        var { textOptions: t, forceInverted: n, subscriptionTier: p, hasActivePromotion: g = !1, isPersistentCTA: y = !1, useShorterCTA: O = !1, showGradient: v, confirmationFooter: I, paymentModalBanner: S } = e,
            T = m(e, ['textOptions', 'forceInverted', 'subscriptionTier', 'hasActivePromotion', 'isPersistentCTA', 'useShorterCTA', 'showGradient', 'confirmationFooter', 'paymentModalBanner']);
        let A = (0, a.ZP)(),
            N = !v && ((0, i.wj)(A) || n),
            C = (0, c.N)(),
            P = null == C ? void 0 : C.subscription_trial,
            R = (0, s.a5)({
                intervalType: null == P ? void 0 : P.interval,
                intervalCount: null == P ? void 0 : P.interval_count
            }),
            w = (0, l.Ng)(),
            D = null != P && p === P.sku_id,
            L = (null == C ? void 0 : C.trial_id) === d.a7,
            x = g
                ? f.intl.string(f.t.J61px8)
                : null != w
                  ? b(p, O, y, w.discount.amount)
                  : E({
                        showTrialCTA: D,
                        subscriptionTier: p,
                        trialDurationCopy: R,
                        isPersistentCTA: y,
                        shouldShowReferralTrialCopy: L,
                        subscriptionTrial: P
                    });
        return (0, r.jsx)(
            u.Z,
            h(
                {
                    color: N ? o.Ttl.BRAND_INVERTED : o.Ttl.BRAND,
                    buttonShineClassName: 'buttonShineClassName' in T ? T.buttonShineClassName : N ? _.brandShine : void 0,
                    textOptions: h(
                        {
                            textOverride: x,
                            textClassName: D ? _.freeTrialText : void 0
                        },
                        t
                    ),
                    onlyShineOnHover: !0,
                    subscriptionTier: p,
                    showGradient: v,
                    confirmationFooter: I,
                    paymentModalBanner: S
                },
                T
            )
        );
    };
