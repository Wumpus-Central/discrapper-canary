var i,
    r = n(442837),
    l = n(570140);
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
    c = { hasFetchedRelevance: !1 },
    d = o,
    u = c;
class h extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        (u = c), (d = o);
        let t = new Date();
        null != e && null != e.savedAt && t.getTime() - e.savedAt < s && (d = e);
    }
    get hasFetchedRelevance() {
        return u.hasFetchedRelevance;
    }
    get profileThemesRelevanceExceeded() {
        return d.profileThemesRelevanceExceeded;
    }
    getState() {
        return d;
    }
}
a(h, 'displayName', 'PerksRelevanceStore'),
    a(h, 'persistKey', 'PerksRelevanceStore'),
    (t.Z = new h(l.Z, {
        BILLING_PERKS_RELEVANCE_FETCH_START: function () {
            u.hasFetchedRelevance = !0;
        },
        BILLING_PERKS_RELEVANCE_FETCH_SUCCESS: function (e) {
            let { res: t } = e;
            null != t && ((d.profileThemesRelevanceExceeded = t.eligible), (d.savedAt = new Date().getTime()));
        },
        BILLING_PERKS_RELEVANCE_FETCH_FAIL: function () {},
        LOGOUT: function () {
            (u = c), (d = o);
        }
    }));
