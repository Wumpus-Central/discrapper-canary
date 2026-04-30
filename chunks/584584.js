l.d(t, { A: () => O }), l(321073);
var n = l(735438),
    i = l.n(n),
    r = l(17928),
    s = l(506774),
    a = l(228366),
    u = l(339048),
    o = l(830382),
    c = l(627363),
    d = l(587895),
    E = l(328153),
    h = l(287809),
    _ = l(469778),
    T = l(67480),
    A = l(652215);
let S = "DetectedOffPlatformPremiumPerksStore",
    I = {},
    p = {},
    f = [];
function N() {
    let e = !1;
    for (let { skuId: t, applicationId: l } of i().values(p)) {
        if (f.includes(t)) continue;
        let n = d.A.getApplication(l);
        if (null == n) {
            d.A.isFetchingApplication(l) || d.A.didFetchingApplicationFail(l) || c.Ay.fetchApplication(l);
            continue;
        }
        let i = T.A.get(t);
        if (null == i) {
            T.A.isFetching(t) || T.A.didFetchingSkuFail(t) || o.EX(n.id, t);
            continue;
        }
        _.A.applicationIdsFetching.has(n.id) ||
        _.A.isEntitledToSku(h.default.getCurrentUser(), t, n.id, n.id) ||
        !i.available
            ? null != I[t] && (delete I[t], (e = !0))
            : ((I[t] = { skuId: t, applicationId: l }), (e = !0));
    }
    return e;
}
class g extends r.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(d.A, _.A, E.Ay, T.A, h.default), (f = s.w.get(S) ?? f);
    }
    getDetectedOffPlatformPremiumPerks() {
        return i().values(I);
    }
}
let O = new g(a.h, {
    LOGOUT: function () {
        (I = {}), (p = {});
    },
    SKU_FETCH_SUCCESS: N,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: N,
    ENTITLEMENT_CREATE: N,
    APPLICATION_FETCH_SUCCESS: N,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete I[t], f.includes(t))) return !1;
        f.push(t), s.w.set(S, f);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: l } of E.Ay.getRunningGames())
            if (null != t && l !== A.d3x.DISCORD)
                for (let { skuId: l, applicationId: n } of A.m_i)
                    n !== t ||
                        f.includes(l) ||
                        (null == p[l] &&
                            (_.A.applicationIdsFetched.has(n) ||
                                _.A.applicationIdsFetching.has(n) ||
                                null != _.A.getForSku(l) ||
                                u.LM(n),
                            (p[l] = { skuId: l, applicationId: n }),
                            (e = !0)));
        return e && N(), e;
    },
});
