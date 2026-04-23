"use strict";
n.d(t, { A: () => R }), n(321073);
var i = n(735438),
    r = n.n(i),
    l = n(311907),
    s = n(506774),
    a = n(73153),
    o = n(339048),
    c = n(830382),
    u = n(627363),
    d = n(587895),
    _ = n(15285),
    E = n(287809),
    A = n(469778),
    m = n(67480),
    I = n(652215);
let T = "DetectedOffPlatformPremiumPerksStore",
    N = {},
    g = {},
    p = [];
function C() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of r().values(g)) {
        if (p.includes(t)) continue;
        let i = d.A.getApplication(n);
        if (null == i) {
            d.A.isFetchingApplication(n) || d.A.didFetchingApplicationFail(n) || u.Ay.fetchApplication(n);
            continue;
        }
        let r = m.A.get(t);
        if (null == r) {
            m.A.isFetching(t) || m.A.didFetchingSkuFail(t) || c.EX(i.id, t);
            continue;
        }
        A.A.applicationIdsFetching.has(i.id) ||
        A.A.isEntitledToSku(E.default.getCurrentUser(), t, i.id, i.id) ||
        !r.available
            ? null != N[t] && (delete N[t], (e = !0))
            : ((N[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class f extends l.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(d.A, A.A, _.Ay, m.A, E.default), (p = s.w.get(T) ?? p);
    }
    getDetectedOffPlatformPremiumPerks() {
        return r().values(N);
    }
}
let R = new f(a.h, {
    LOGOUT: function () {
        (N = {}), (g = {});
    },
    SKU_FETCH_SUCCESS: C,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: C,
    ENTITLEMENT_CREATE: C,
    APPLICATION_FETCH_SUCCESS: C,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete N[t], p.includes(t))) return !1;
        p.push(t), s.w.set(T, p);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of _.Ay.getRunningGames())
            if (null != t && n !== I.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of I.m_i)
                    i !== t ||
                        p.includes(n) ||
                        (null == g[n] &&
                            (A.A.applicationIdsFetched.has(i) ||
                                A.A.applicationIdsFetching.has(i) ||
                                null != A.A.getForSku(n) ||
                                o.LM(i),
                            (g[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && C(), e;
    },
});
