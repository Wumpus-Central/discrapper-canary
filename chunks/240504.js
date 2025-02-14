n.d(t, { Z: () => m });
var i,
    l = n(442837),
    r = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = 12 * n(70956).Z.Millis.HOUR,
    o = {
        profileThemesRelevanceExceeded: null,
        savedAt: null
    },
    d = { hasFetchedRelevance: !1 },
    c = o,
    u = d;
class h extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        (u = d), (c = o);
        let t = new Date();
        null != e && null != e.savedAt && t.getTime() - e.savedAt < s && (c = e);
    }
    get hasFetchedRelevance() {
        return u.hasFetchedRelevance;
    }
    get profileThemesRelevanceExceeded() {
        return c.profileThemesRelevanceExceeded;
    }
    getState() {
        return c;
    }
}
a(h, 'displayName', 'PerksRelevanceStore'), a(h, 'persistKey', 'PerksRelevanceStore');
let m = new h(r.Z, {
    BILLING_PERKS_RELEVANCE_FETCH_START: function () {
        u.hasFetchedRelevance = !0;
    },
    BILLING_PERKS_RELEVANCE_FETCH_SUCCESS: function (e) {
        let { res: t } = e;
        null != t && ((c.profileThemesRelevanceExceeded = t.eligible), (c.savedAt = new Date().getTime()));
    },
    BILLING_PERKS_RELEVANCE_FETCH_FAIL: function () {},
    LOGOUT: function () {
        (u = d), (c = o);
    }
});
