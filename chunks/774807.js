n.d(t, { Z: () => m }), n(388685);
var r,
    i = n(442837),
    l = n(570140),
    a = n(455199),
    o = n(70956),
    s = n(709054),
    c = n(497089);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = 90 * o.Z.Millis.DAY,
    p = {
        tab: null,
        localItemAcks: {},
        hasNewMentions: !1,
        isDataStale: !1,
        isRefreshing: !1,
    };
class g extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(a.ZP), null != e)) {
            var t;
            ((p = e).localItemAcks = (function (e) {
                let t = {};
                for (let [n, r] of Object.entries(e)) Date.now() - r < h && (t[n] = r);
                return t;
            })(null != (t = p.localItemAcks) ? t : {})),
                (p.isDataStale = !0);
        }
    }
    getState() {
        return p;
    }
    getTab() {
        var e;
        return null != (e = p.tab) ? e : c.b1.ForYou;
    }
    isLocalItemAcked(e) {
        return null != e.local_id && (null != p.localItemAcks[e.local_id] || s.default.age(e.id) > h);
    }
    hasNewMentions() {
        return p.hasNewMentions;
    }
    isDataStale() {
        return p.isDataStale;
    }
    isRefreshing() {
        return p.isRefreshing;
    }
    shouldReload() {
        return p.hasNewMentions || p.isDataStale || p.isRefreshing;
    }
}
function b() {
    (p.hasNewMentions = !1), (p.isDataStale = !1), (p.isRefreshing = !1);
}
u(g, "displayName", "NotificationCenterStore"), u(g, "persistKey", "NotificationCenterStore");
let m = new g(l.Z, {
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
    },
    NOTIFICATION_CENTER_SET_TAB: function (e) {
        p = f(d({}, p), { tab: e.tab });
    },
    NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function (e) {
        let { localIds: t } = e;
        t.forEach((e) => {
            p = f(d({}, p), { localItemAcks: f(d({}, p.localItemAcks), { [e]: Date.now() }) });
        });
    },
    NOTIFICATION_CENTER_REFRESH: function () {
        p.isRefreshing = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: b,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: b,
});
