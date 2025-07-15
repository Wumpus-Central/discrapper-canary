(n.d(t, { Z: () => I }), n(388685), n(539854));
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
    _ = n(594190),
    h = n(594174),
    g = n(580130),
    b = n(55563),
    E = n(981631);
let y = 'DetectedOffPlatformPremiumPerksStore',
    x = {},
    C = {},
    v = [];
function O() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of o().values(C)) {
        if (v.includes(t)) continue;
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
        g.Z.applicationIdsFetching.has(r.id) || g.Z.isEntitledToSku(h.default.getCurrentUser(), t, r.id, r.id) || !i.available
            ? null != x[t] && (delete x[t], (e = !0))
            : ((x[t] = {
                  skuId: t,
                  applicationId: n
              }),
              (e = !0));
    }
    return e;
}
class j extends (r = s.ZP.Store) {
    initialize() {
        var e;
        (this.waitFor(_.ZP, b.Z, g.Z), (v = null != (e = c.K.get(y)) ? e : v));
    }
    getDetectedOffPlatformPremiumPerks() {
        return o().values(x);
    }
}
((l = 'DetectedOffPlatformPremiumPerksStore'),
    (i = 'displayName') in j
        ? Object.defineProperty(j, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (j[i] = l));
let I = new j(u.Z, {
    LOGOUT: function () {
        ((x = {}), (C = {}));
    },
    SKU_FETCH_SUCCESS: O,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: O,
    ENTITLEMENT_CREATE: O,
    APPLICATION_FETCH_SUCCESS: O,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete x[t], v.includes(t))) return !1;
        (v.push(t), c.K.set(y, v));
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of _.ZP.getRunningGames())
            if (null != t && n !== E.GQo.DISCORD)
                for (let { skuId: n, applicationId: r } of E.Lg6)
                    r !== t ||
                        v.includes(n) ||
                        (null == C[n] &&
                            (g.Z.applicationIdsFetched.has(r) || g.Z.applicationIdsFetching.has(r) || null != g.Z.getForSku(n) || d.yD(r),
                            (C[n] = {
                                skuId: n,
                                applicationId: r
                            }),
                            (e = !0)));
        return (e && O(), e);
    }
});
