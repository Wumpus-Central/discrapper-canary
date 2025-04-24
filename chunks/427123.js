n.d(t, { Z: () => S }), n(388685), n(539854);
var r,
    i,
    l,
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    c = n(433517),
    u = n(570140),
    d = n(496929),
    p = n(16084),
    m = n(728345),
    f = n(812206),
    h = n(594190),
    g = n(594174),
    _ = n(580130),
    b = n(55563),
    x = n(981631);
let y = 'DetectedOffPlatformPremiumPerksStore',
    E = {},
    v = {},
    O = [];
function j() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of o().values(v)) {
        if (O.includes(t)) continue;
        let r = f.Z.getApplication(n);
        if (null == r) {
            f.Z.isFetchingApplication(n) || f.Z.didFetchingApplicationFail(n) || m.ZP.fetchApplication(n);
            continue;
        }
        let i = b.Z.get(t);
        if (null == i) {
            b.Z.isFetching(t) || b.Z.didFetchingSkuFail(t) || p.$N(r.id, t);
            continue;
        }
        _.Z.applicationIdsFetching.has(r.id) || _.Z.isEntitledToSku(g.default.getCurrentUser(), t, r.id, r.id) || !i.available
            ? null != E[t] && (delete E[t], (e = !0))
            : ((E[t] = {
                  skuId: t,
                  applicationId: n
              }),
              (e = !0));
    }
    return e;
}
class C extends (r = s.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(h.ZP, b.Z, _.Z), (O = null != (e = c.K.get(y)) ? e : O);
    }
    getDetectedOffPlatformPremiumPerks() {
        return o().values(E);
    }
}
(l = 'DetectedOffPlatformPremiumPerksStore'),
    (i = 'displayName') in C
        ? Object.defineProperty(C, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[i] = l);
let S = new C(u.Z, {
    LOGOUT: function () {
        (E = {}), (v = {});
    },
    SKU_FETCH_SUCCESS: j,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: j,
    ENTITLEMENT_CREATE: j,
    APPLICATION_FETCH_SUCCESS: j,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete E[t], O.includes(t))) return !1;
        O.push(t), c.K.set(y, O);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of h.ZP.getRunningGames())
            if (null != t && n !== x.GQo.DISCORD)
                for (let { skuId: n, applicationId: r } of x.Lg6)
                    r !== t ||
                        O.includes(n) ||
                        (null == v[n] &&
                            (_.Z.applicationIdsFetched.has(r) || _.Z.applicationIdsFetching.has(r) || null != _.Z.getForSku(n) || d.yD(r),
                            (v[n] = {
                                skuId: n,
                                applicationId: r
                            }),
                            (e = !0)));
        return e && j(), e;
    }
});
