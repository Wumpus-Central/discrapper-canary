n(47120), n(653041);
var i,
    r,
    l,
    a,
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(433517),
    d = n(570140),
    m = n(496929),
    h = n(16084),
    f = n(728345),
    p = n(812206),
    _ = n(594190),
    g = n(594174),
    E = n(580130),
    C = n(55563),
    I = n(981631);
let x = 'DetectedOffPlatformPremiumPerksStore',
    N = {},
    v = {},
    T = [];
function S() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of s().values(v)) {
        if (T.includes(t)) continue;
        let i = p.Z.getApplication(n);
        if (null == i) {
            !p.Z.isFetchingApplication(n) && !p.Z.didFetchingApplicationFail(n) && f.ZP.fetchApplication(n);
            continue;
        }
        let r = C.Z.get(t);
        if (null == r) {
            !C.Z.isFetching(t) && !C.Z.didFetchingSkuFail(t) && h.$N(i.id, t);
            continue;
        }
        E.Z.applicationIdsFetching.has(i.id) || E.Z.isEntitledToSku(g.default.getCurrentUser(), t, i.id, i.id) || !r.available
            ? null != N[t] && (delete N[t], (e = !0))
            : ((N[t] = {
                  skuId: t,
                  applicationId: n
              }),
              (e = !0));
    }
    return e;
}
class A extends (i = c.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(_.ZP, C.Z, E.Z), (T = null !== (e = u.K.get(x)) && void 0 !== e ? e : T);
    }
    getDetectedOffPlatformPremiumPerks() {
        return s().values(N);
    }
}
(a = 'DetectedOffPlatformPremiumPerksStore'),
    (l = 'displayName') in (r = A)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new A(d.Z, {
        LOGOUT: function () {
            (N = {}), (v = {});
        },
        SKU_FETCH_SUCCESS: S,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: S,
        ENTITLEMENT_CREATE: S,
        APPLICATION_FETCH_SUCCESS: S,
        DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
            let { skuId: t } = e;
            if ((delete N[t], T.includes(t))) return !1;
            T.push(t), u.K.set(x, T);
        },
        RUNNING_GAMES_CHANGE: function () {
            let e = !1;
            for (let { id: t, distributor: n } of _.ZP.getRunningGames())
                if (null != t && n !== I.GQo.DISCORD)
                    for (let { skuId: n, applicationId: i } of I.Lg6) {
                        if (!(i !== t || T.includes(n)))
                            null == v[n] &&
                                (!E.Z.applicationIdsFetched.has(i) && !E.Z.applicationIdsFetching.has(i) && null == E.Z.getForSku(n) && m.yD(i),
                                (v[n] = {
                                    skuId: n,
                                    applicationId: i
                                }),
                                (e = !0));
                    }
            return e && S(), e;
        }
    }));
