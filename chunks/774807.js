n.d(t, { Z: () => p }), n(47120);
var i,
    l = n(442837),
    a = n(570140),
    r = n(455199),
    s = n(70956),
    o = n(709054),
    c = n(497089);
function d(e, t, n) {
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
let u = 90 * s.Z.Millis.DAY,
    m = {
        tab: null,
        localItemAcks: {},
        hasNewMentions: !1,
        isDataStale: !1,
        isRefreshing: !1
    };
class _ extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(r.Z), null != e)) {
            var t;
            ((m = e).localItemAcks = (function (e) {
                let t = {};
                for (let [n, i] of Object.entries(e)) Date.now() - i < u && (t[n] = i);
                return t;
            })(null !== (t = m.localItemAcks) && void 0 !== t ? t : {})),
                (m.isDataStale = !0);
        }
    }
    getState() {
        return m;
    }
    getTab() {
        var e;
        return null !== (e = m.tab) && void 0 !== e ? e : c.b1.ForYou;
    }
    isLocalItemAcked(e) {
        return null != e.local_id && (null != m.localItemAcks[e.local_id] || o.default.age(e.id) > u);
    }
    hasNewMentions() {
        return m.hasNewMentions;
    }
    isDataStale() {
        return m.isDataStale;
    }
    isRefreshing() {
        return m.isRefreshing;
    }
    shouldReload() {
        return m.hasNewMentions || m.isDataStale || m.isRefreshing;
    }
}
function h() {
    (m.hasNewMentions = !1), (m.isDataStale = !1), (m.isRefreshing = !1);
}
d(_, 'displayName', 'NotificationCenterStore'), d(_, 'persistKey', 'NotificationCenterStore');
let p = new _(a.Z, {
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
    },
    NOTIFICATION_CENTER_SET_TAB: function (e) {
        m = {
            ...m,
            tab: e.tab
        };
    },
    NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function (e) {
        let { localIds: t } = e;
        t.forEach((e) => {
            m = {
                ...m,
                localItemAcks: {
                    ...m.localItemAcks,
                    [e]: Date.now()
                }
            };
        });
    },
    NOTIFICATION_CENTER_REFRESH: function () {
        m.isRefreshing = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: h,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: h
});
