n.d(t, { Z: () => p });
var r,
    i = n(442837),
    o = n(570140);
function l(e, t, n) {
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
    a = {
        profileThemesRelevanceExceeded: null,
        savedAt: null
    },
    c = { hasFetchedRelevance: !1 },
    u = a,
    d = c;
class _ extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (d = c), (u = a);
        let t = new Date();
        null != e && null != e.savedAt && t.getTime() - e.savedAt < s && (u = e);
    }
    get hasFetchedRelevance() {
        return d.hasFetchedRelevance;
    }
    get profileThemesRelevanceExceeded() {
        return u.profileThemesRelevanceExceeded;
    }
    getState() {
        return u;
    }
}
l(_, 'displayName', 'PerksRelevanceStore'), l(_, 'persistKey', 'PerksRelevanceStore');
let p = new _(o.Z, {
    BILLING_PERKS_RELEVANCE_FETCH_START: function () {
        d.hasFetchedRelevance = !0;
    },
    BILLING_PERKS_RELEVANCE_FETCH_SUCCESS: function (e) {
        let { res: t } = e;
        null != t && ((u.profileThemesRelevanceExceeded = t.eligible), (u.savedAt = new Date().getTime()));
    },
    BILLING_PERKS_RELEVANCE_FETCH_FAIL: function () {},
    LOGOUT: function () {
        (d = c), (u = a);
    }
});
