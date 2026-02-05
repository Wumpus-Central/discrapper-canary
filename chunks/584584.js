n.d(t, { A: () => T }), n(321073);
var i = n(735438),
    l = n.n(i),
    a = n(311907),
    r = n(506774),
    s = n(73153),
    o = n(339048),
    d = n(830382),
    c = n(627363),
    u = n(587895),
    m = n(15285),
    _ = n(287809),
    h = n(469778),
    p = n(67480),
    g = n(652215);
let A = "DetectedOffPlatformPremiumPerksStore",
    f = {},
    x = {},
    E = [];
function C() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of l().values(x)) {
        if (E.includes(t)) continue;
        let i = u.A.getApplication(n);
        if (null == i) {
            u.A.isFetchingApplication(n) || u.A.didFetchingApplicationFail(n) || c.Ay.fetchApplication(n);
            continue;
        }
        let l = p.A.get(t);
        if (null == l) {
            p.A.isFetching(t) || p.A.didFetchingSkuFail(t) || d.EX(i.id, t);
            continue;
        }
        h.A.applicationIdsFetching.has(i.id) ||
        h.A.isEntitledToSku(_.default.getCurrentUser(), t, i.id, i.id) ||
        !l.available
            ? null != f[t] && (delete f[t], (e = !0))
            : ((f[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class I extends a.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(u.A, h.A, m.Ay, p.A, _.default), (E = r.w.get(A) ?? E);
    }
    getDetectedOffPlatformPremiumPerks() {
        return l().values(f);
    }
}
let T = new I(s.h, {
    LOGOUT: function () {
        (f = {}), (x = {});
    },
    SKU_FETCH_SUCCESS: C,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: C,
    ENTITLEMENT_CREATE: C,
    APPLICATION_FETCH_SUCCESS: C,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete f[t], E.includes(t))) return !1;
        E.push(t), r.w.set(A, E);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of m.Ay.getRunningGames())
            if (null != t && n !== g.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of g.m_i)
                    i !== t ||
                        E.includes(n) ||
                        (null == x[n] &&
                            (h.A.applicationIdsFetched.has(i) ||
                                h.A.applicationIdsFetching.has(i) ||
                                null != h.A.getForSku(n) ||
                                o.LM(i),
                            (x[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && C(), e;
    },
});
