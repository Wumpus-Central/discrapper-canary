n.d(t, { Z: () => d });
var i,
    r = n(442837),
    l = n(570140),
    a = n(765305);
function o(e, t, n) {
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
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
let c = {};
class u extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t;
            c = null != (t = e.dismissedEventIds) ? t : {};
        }
    }
    isEventDismissed(e) {
        return null != c[e];
    }
    getState() {
        return { dismissedEventIds: c };
    }
}
o(u, "displayName", "EventBannerStore"), o(u, "persistKey", "EventBanner");
let d = new u(l.Z, {
    EVENT_BANNER_DISMISS: function (e) {
        var t, n;
        let { eventId: i } = e;
        (t = s({}, c)),
            (n = n = { [i]: !0 }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            (c = t);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        if ((t.status !== a.p1.CANCELED && t.status !== a.p1.COMPLETED) || null == c[t.id]) return !1;
        let n = s({}, c);
        delete n[t.id], (c = n);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        if (null == c[t.id]) return !1;
        let n = s({}, c);
        delete n[t.id], (c = n);
    },
});
