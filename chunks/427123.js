n.d(t, { Z: () => j }), n(388685), n(539854);
var r,
    i,
    l = n(392711),
    o = n.n(l),
    a = n(442837),
    s = n(433517),
    c = n(570140),
    u = n(496929),
    d = n(16084),
    p = n(728345),
    m = n(812206),
    f = n(594190),
    g = n(594174),
    _ = n(580130),
    h = n(55563),
    b = n(981631);
let E = "DetectedOffPlatformPremiumPerksStore",
    C = {},
    v = {},
    O = [];
function y() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of o().values(v)) {
        if (O.includes(t)) continue;
        let r = m.Z.getApplication(n);
        if (null == r) {
            m.Z.isFetchingApplication(n) || m.Z.didFetchingApplicationFail(n) || p.ZP.fetchApplication(n);
            continue;
        }
        let i = h.Z.get(t);
        if (null == i) {
            h.Z.isFetching(t) || h.Z.didFetchingSkuFail(t) || d.$N(r.id, t);
            continue;
        }
        _.Z.applicationIdsFetching.has(r.id) ||
        _.Z.isEntitledToSku(g.default.getCurrentUser(), t, r.id, r.id) ||
        !i.available
            ? null != C[t] && (delete C[t], (e = !0))
            : ((C[t] = {
                  skuId: t,
                  applicationId: n,
              }),
              (e = !0));
    }
    return e;
}
class x extends (r = a.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(f.ZP, h.Z, _.Z), (O = null != (e = s.K.get(E)) ? e : O);
    }
    getDetectedOffPlatformPremiumPerks() {
        return o().values(C);
    }
}
(i = "displayName") in x
    ? Object.defineProperty(x, i, {
          value: "DetectedOffPlatformPremiumPerksStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (x[i] = "DetectedOffPlatformPremiumPerksStore");
let j = new x(c.Z, {
    LOGOUT: function () {
        (C = {}), (v = {});
    },
    SKU_FETCH_SUCCESS: y,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: y,
    ENTITLEMENT_CREATE: y,
    APPLICATION_FETCH_SUCCESS: y,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete C[t], O.includes(t))) return !1;
        O.push(t), s.K.set(E, O);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of f.ZP.getRunningGames())
            if (null != t && n !== b.GQo.DISCORD)
                for (let { skuId: n, applicationId: r } of b.Lg6)
                    r !== t ||
                        O.includes(n) ||
                        (null == v[n] &&
                            (_.Z.applicationIdsFetched.has(r) ||
                                _.Z.applicationIdsFetching.has(r) ||
                                null != _.Z.getForSku(n) ||
                                u.yD(r),
                            (v[n] = {
                                skuId: n,
                                applicationId: r,
                            }),
                            (e = !0)));
        return e && y(), e;
    },
});
