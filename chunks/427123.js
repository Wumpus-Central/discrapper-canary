(n.d(t, { Z: () => j }), n(388685), n(539854));
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
    g = n(594190),
    _ = n(594174),
    h = n(580130),
    b = n(55563),
    E = n(981631);
let C = 'DetectedOffPlatformPremiumPerksStore',
    v = {},
    O = {},
    x = [];
function y() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of o().values(O)) {
        if (x.includes(t)) continue;
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
        h.Z.applicationIdsFetching.has(r.id) || h.Z.isEntitledToSku(_.default.getCurrentUser(), t, r.id, r.id) || !i.available
            ? null != v[t] && (delete v[t], (e = !0))
            : ((v[t] = {
                  skuId: t,
                  applicationId: n
              }),
              (e = !0));
    }
    return e;
}
class I extends (r = s.ZP.Store) {
    initialize() {
        var e;
        (this.waitFor(g.ZP, b.Z, h.Z), (x = null != (e = c.K.get(C)) ? e : x));
    }
    getDetectedOffPlatformPremiumPerks() {
        return o().values(v);
    }
}
((l = 'DetectedOffPlatformPremiumPerksStore'),
    (i = 'displayName') in I
        ? Object.defineProperty(I, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[i] = l));
let j = new I(u.Z, {
    LOGOUT: function () {
        ((v = {}), (O = {}));
    },
    SKU_FETCH_SUCCESS: y,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: y,
    ENTITLEMENT_CREATE: y,
    APPLICATION_FETCH_SUCCESS: y,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete v[t], x.includes(t))) return !1;
        (x.push(t), c.K.set(C, x));
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of g.ZP.getRunningGames())
            if (null != t && n !== E.GQo.DISCORD)
                for (let { skuId: n, applicationId: r } of E.Lg6)
                    r !== t ||
                        x.includes(n) ||
                        (null == O[n] &&
                            (h.Z.applicationIdsFetched.has(r) || h.Z.applicationIdsFetching.has(r) || null != h.Z.getForSku(n) || d.yD(r),
                            (O[n] = {
                                skuId: n,
                                applicationId: r
                            }),
                            (e = !0)));
        return (e && y(), e);
    }
});
