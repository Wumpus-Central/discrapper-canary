"use strict";
n.d(t, { A: () => h }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(311907),
    l = n(506774),
    a = n(73153),
    c = n(339048),
    o = n(830382),
    u = n(627363),
    d = n(587895),
    _ = n(15285),
    E = n(287809),
    A = n(469778),
    m = n(67480),
    I = n(652215);
let T = "DetectedOffPlatformPremiumPerksStore",
    g = {},
    N = {},
    f = [];
function p() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of r().values(N)) {
        if (f.includes(t)) continue;
        let i = d.A.getApplication(n);
        if (null == i) {
            d.A.isFetchingApplication(n) || d.A.didFetchingApplicationFail(n) || u.Ay.fetchApplication(n);
            continue;
        }
        let r = m.A.get(t);
        if (null == r) {
            m.A.isFetching(t) || m.A.didFetchingSkuFail(t) || o.EX(i.id, t);
            continue;
        }
        A.A.applicationIdsFetching.has(i.id) ||
        A.A.isEntitledToSku(E.default.getCurrentUser(), t, i.id, i.id) ||
        !r.available
            ? null != g[t] && (delete g[t], (e = !0))
            : ((g[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class C extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(d.A, A.A, _.Ay, m.A, E.default), (f = l.w.get(T) ?? f);
    }
    getDetectedOffPlatformPremiumPerks() {
        return r().values(g);
    }
}
let h = new C(a.h, {
    LOGOUT: function () {
        (g = {}), (N = {});
    },
    SKU_FETCH_SUCCESS: p,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: p,
    ENTITLEMENT_CREATE: p,
    APPLICATION_FETCH_SUCCESS: p,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete g[t], f.includes(t))) return !1;
        f.push(t), l.w.set(T, f);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of _.Ay.getRunningGames())
            if (null != t && n !== I.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of I.m_i)
                    i !== t ||
                        f.includes(n) ||
                        (null == N[n] &&
                            (A.A.applicationIdsFetched.has(i) ||
                                A.A.applicationIdsFetching.has(i) ||
                                null != A.A.getForSku(n) ||
                                c.LM(i),
                            (N[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && p(), e;
    },
});
