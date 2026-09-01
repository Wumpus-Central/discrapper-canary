"use strict";
n.d(t, { cg: () => N });
var i = n(536637),
    r = n.n(i),
    a = n(607399),
    s = n(702841);
n(277984);
var l = n(86379),
    o = n(287809),
    d = n(166403);
n(354670);
var c = n(469778),
    u = n(723702),
    _ = n(158045),
    E = n(945810);
let A = (0, E.mj)({
        name: "2026-03-bogo-promotion-marketing-materials-v2",
        kind: "user",
        defaultConfig: !1,
        variations: { 1: !0 },
    }),
    h = (0, E.mj)({ name: "2026-03-bogo-promotion-gate-v2", kind: "user", defaultConfig: !1, variations: { 1: !0 } });
var I = n(724651),
    f = n(732280),
    p = n(582128),
    T = n(265431);
n(962644);
var m = n(35587);
n(412260);
var g = n(202541),
    S = n(652215);
function N() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (0, l.dw)(),
        { promotion: n } = (0, m.Eu)(),
        i = h.useConfig({ location: "bogo eligibility hook" }),
        {
            mostRecentSubscription: E,
            premiumSubscription: N,
            previousPremiumSubscription: C,
        } = (0, s.cf)([d.A], () => ({
            mostRecentSubscription: d.A.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: d.A.getPremiumTypeSubscription(),
            previousPremiumSubscription: d.A.getPreviousPremiumTypeSubscription(),
        })),
        O = (0, f.V)(),
        R = (0, I.O)(),
        L = new Date(n?.endDate ?? 0).valueOf(),
        y = Date.now(),
        D = y > L;
    !(function (e) {
        let { delay: t, disable: n = !1 } = e,
            i = (0, T.A)();
        p.useEffect(() => {
            if (t <= 0 || n) return;
            let e = setTimeout(() => {
                i();
            }, t);
            return () => clearTimeout(e);
        }, [t, n, i]);
    })({ delay: D ? -1 : L - y });
    let v = !a.Fr || (0, u.isAndroid)(),
        b = (function (e) {
            let {
                experimentEnabled: t,
                premiumSubscription: n,
                mostRecentSubscription: i,
                previousPremiumSubscription: s,
            } = e;
            if (!t) return !1;
            if (null != i && i.status === S.Dmq.ENDED) {
                let e = i.endedAt,
                    t = i.hasPremiumAtLeast(g.PremiumTypes.TIER_2);
                if (null != e && t && r()().subtract(10, "days").isBefore(e)) return !1;
            }
            if (null != s && s.status === S.Dmq.ENDED) {
                let e = s.endedAt,
                    t = s.hasPremiumAtLeast(g.PremiumTypes.TIER_2);
                if (null != e && t && r()().subtract(10, "days").isBefore(e)) return !1;
            }
            if (null != n) {
                let e = n.hasPremiumAtLeast(g.PremiumTypes.TIER_2),
                    t = o.default.getCurrentUser(),
                    i = !!n?.hasActiveTrial && _.Ay.isPremiumExactly(t, g.PremiumTypes.TIER_0),
                    r = (0, u.isAndroid)() && n.paymentGateway !== S.kM_.GOOGLE;
                if (e || i || r) return !1;
            }
            return !(a.Fr && c.A.isFractionalPremiumActive());
        })({ experimentEnabled: i, premiumSubscription: N, mostRecentSubscription: E, previousPremiumSubscription: C }),
        M = v && b && null == O && null != n && !t && null == R,
        P = A.useConfig({ location: "bogo marketing eligibility hook" });
    return !D && (e ? P : M);
}
