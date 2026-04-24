n.d(t, { A: () => g }), n(321073);
var i = n(735438),
    l = n.n(i),
    r = n(17928),
    a = n(506774),
    o = n(228366),
    s = n(339048),
    u = n(830382),
    d = n(627363),
    c = n(587895),
    E = n(328153),
    _ = n(287809),
    A = n(469778),
    I = n(67480),
    h = n(652215);
let T = "DetectedOffPlatformPremiumPerksStore",
    S = {},
    p = {},
    N = [];
function O() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of l().values(p)) {
        if (N.includes(t)) continue;
        let i = c.A.getApplication(n);
        if (null == i) {
            c.A.isFetchingApplication(n) || c.A.didFetchingApplicationFail(n) || d.Ay.fetchApplication(n);
            continue;
        }
        let l = I.A.get(t);
        if (null == l) {
            I.A.isFetching(t) || I.A.didFetchingSkuFail(t) || u.EX(i.id, t);
            continue;
        }
        A.A.applicationIdsFetching.has(i.id) ||
        A.A.isEntitledToSku(_.default.getCurrentUser(), t, i.id, i.id) ||
        !l.available
            ? null != S[t] && (delete S[t], (e = !0))
            : ((S[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class f extends r.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(c.A, A.A, E.Ay, I.A, _.default), (N = a.w.get(T) ?? N);
    }
    getDetectedOffPlatformPremiumPerks() {
        return l().values(S);
    }
}
let g = new f(o.h, {
    LOGOUT: function () {
        (S = {}), (p = {});
    },
    SKU_FETCH_SUCCESS: O,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: O,
    ENTITLEMENT_CREATE: O,
    APPLICATION_FETCH_SUCCESS: O,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete S[t], N.includes(t))) return !1;
        N.push(t), a.w.set(T, N);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of E.Ay.getRunningGames())
            if (null != t && n !== h.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of h.m_i)
                    i !== t ||
                        N.includes(n) ||
                        (null == p[n] &&
                            (A.A.applicationIdsFetched.has(i) ||
                                A.A.applicationIdsFetching.has(i) ||
                                null != A.A.getForSku(n) ||
                                s.LM(i),
                            (p[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && O(), e;
    },
});
