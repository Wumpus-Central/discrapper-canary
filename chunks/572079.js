n.d(t, { A: () => f });
var i = n(855986),
    r = n(400845);
function a(e, t, n, i) {
    return i <= 0 ? e : (t.elements[n]?.[i - 1] ?? e);
}
var s = n(792996);
let { useCopyExperimentMessage: l, getCopyExperimentMessage: o } = (function (e) {
    let t = new Map();
    for (let [n, i] of Object.entries(e)) {
        let e = (function (e, t) {
            let n = new Set(Object.values(t.elements).map((e) => e.length));
            if (0 === n.size) throw Error(`Copy experiment "${e}": must define at least one element.`);
            let [i] = n;
            if (1 !== n.size || 0 === i)
                throw Error(
                    `Copy experiment "${e}": every element must list the same, non-zero number of treatments (one per variation; use null for "unchanged in this variation").`,
                );
            return i;
        })(n, i);
        t.set(n, {
            definition: i,
            apex: (function (e, t) {
                let n = {};
                for (let e = 1; e <= t; e++) n[e] = { variation: e };
                return (0, r.Ay)({ name: e, kind: "user", defaultConfig: { variation: 0 }, variations: n });
            })(n, e),
        });
    }
    function n(e) {
        let n = t.get(e);
        if (null == n) throw Error(`Copy experiment "${e}" is not registered.`);
        return n;
    }
    function i(e, t) {
        return `copy:${e}:${t}`;
    }
    return {
        useCopyExperimentMessage: function (e, t, r) {
            let s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                { definition: l, apex: o } = n(t),
                { variation: d } = o.useConfig({ location: i(t, r) });
            return s ? a(e, l, r, d) : e;
        },
        getCopyExperimentMessage: function (e, t, r) {
            let s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                { definition: l, apex: o } = n(t);
            if (!s) return e;
            let { variation: d } = o.getConfig({ location: i(t, r) });
            return a(e, l, r, d);
        },
    };
})({ "2026-11-nitro-mking-page-main-cta": { elements: { element1: [s.t.JST6jl, s.t.sEAnVH, s.t.JPI1pf] } } });
var d = n(832946),
    c = n(287809),
    u = n(166403),
    _ = n(722178),
    E = n(683760),
    A = n(682901),
    h = n(652215);
function f(e) {
    let {
            subscriptionTier: t,
            subscriptionPlanId: n,
            buttonTextOverride: r,
            defaultTextOverride: a,
            enableMarketingSubscribeCopyTest: o = !1,
        } = e,
        f = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        I = (0, i.bG)([u.A], () => u.A.getPremiumTypeSubscription()),
        p = (0, i.bG)([E.A], () => E.A.getPremiumTypeOverride()),
        m = l(s.t["2pG5Ga"], "2026-11-nitro-mking-page-main-cta", "element1", o),
        g = a ?? s.intl.string(m),
        T = null != I ? (0, _.EL)(I) : null,
        S = void 0 !== p ? p : null != T ? (0, _.m6)(T.planId) : f?.premiumType,
        N = t === A.pe.TIER_2 && null != S && [A.PremiumTypes.TIER_0, A.PremiumTypes.TIER_1].includes(S),
        C = null != n && null != T && T?.planId !== n;
    (N || C) && (g = s.intl.string(s.t.IJI7yk));
    let O = null != I && (0, _.Nc)(I);
    if (!((null != I && I.status !== h.Dmq.ACCOUNT_HOLD && !(0, d.m1)(I.planId) && !N && !C && void 0 === p) || O))
        return { buttonText: r ?? g };
    {
        let e = (function (e) {
            let t,
                n,
                { ctaSubscriptionSkuId: i, currentPremiumType: r, isSwitchingDisabled: a, subscription: l } = e;
            if (null != i && i !== A.pe.LEGACY && i !== A.pe.TIER_0 && i !== A.pe.TIER_1 && i !== A.pe.TIER_2)
                return { disabledButtonText: t, disabledButtonTooltipText: n };
            let o = null != i ? A.WN[(0, _.mH)(i)] : null,
                d = null != o ? A.ci[o] : null,
                c = null != r ? A.ci[r] : null;
            return (
                a
                    ? (n = (0, _.Q8)(l) ?? void 0)
                    : null != c && null != d && d < c
                      ? ((t = s.intl.string(s.t["2pG5Ga"])), (n = s.intl.string(s.t.jXaaRk)))
                      : null != o && null != r && o === r
                        ? ((t = s.intl.string(s.t.ymSxhy)), (n = s.intl.string(s.t.jXaaRk)))
                        : null == o && null != r && r === A.PremiumTypes.TIER_2 && (n = s.intl.string(s.t.jXaaRk)),
                { disabledButtonText: t, disabledButtonTooltipText: n }
            );
        })({ ctaSubscriptionSkuId: t, currentPremiumType: S, isSwitchingDisabled: O, subscription: I });
        return {
            buttonText: e.disabledButtonText ?? r ?? g,
            buttonTooltipText: e.disabledButtonTooltipText,
            disabled: !0,
        };
    }
}
