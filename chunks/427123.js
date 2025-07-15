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
    g = n(594174),
    h = n(580130),
    b = n(55563),
    E = n(981631);
let y = 'DetectedOffPlatformPremiumPerksStore',
    C = {},
    v = {},
    x = [];
function O() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of o().values(v)) {
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
        h.Z.applicationIdsFetching.has(r.id) || h.Z.isEntitledToSku(g.default.getCurrentUser(), t, r.id, r.id) || !i.available
            ? null != C[t] && (delete C[t], (e = !0))
            : ((C[t] = {
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
        (this.waitFor(_.ZP, b.Z, h.Z), (x = null != (e = c.K.get(y)) ? e : x));
    }
    getDetectedOffPlatformPremiumPerks() {
        return o().values(C);
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
        ((C = {}), (v = {}));
    },
    SKU_FETCH_SUCCESS: O,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: O,
    ENTITLEMENT_CREATE: O,
    APPLICATION_FETCH_SUCCESS: O,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete C[t], x.includes(t))) return !1;
        (x.push(t), c.K.set(y, x));
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of _.ZP.getRunningGames())
            if (null != t && n !== E.GQo.DISCORD)
                for (let { skuId: n, applicationId: r } of E.Lg6)
                    r !== t ||
                        x.includes(n) ||
                        (null == v[n] &&
                            (h.Z.applicationIdsFetched.has(r) || h.Z.applicationIdsFetching.has(r) || null != h.Z.getForSku(n) || d.yD(r),
                            (v[n] = {
                                skuId: n,
                                applicationId: r
                            }),
                            (e = !0)));
        return (e && O(), e);
    }
});
