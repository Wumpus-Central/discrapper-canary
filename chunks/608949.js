n.d(t, { Z: () => p }), n(388685);
var r,
    i = n(442837),
    l = n(570140),
    o = n(430824),
    a = n(905128),
    s = n(19394);
function c(e, t, n) {
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
let u = {};
class d extends (r = i.ZP.PersistedStore) {
    getState() {
        return u;
    }
    initialize(e) {
        null != e && (u = e);
    }
    getNotificationStateForGuild(e) {
        return u[e];
    }
}
c(d, 'displayName', 'GuildPowerupsNotificationStore'),
    c(d, 'persistKey', 'GuildPowerupsNotificationStore'),
    c(d, 'migrations', [
        (e) => (
            Object.entries(e).forEach((t) => {
                let [n, r] = t;
                e[n] = r;
            }),
            e
        )
    ]);
let p = new d(l.Z, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        var t, n, r, i, l, d;
        let { guildId: p } = e,
            h = null != (n = null == (t = o.Z.getGuild(p)) ? void 0 : t.premiumSubscriberCount) ? n : 0,
            f = a.Z.getStateForGuild(p),
            g = (0, s.h)(null != (r = null == f ? void 0 : f.unlocked) ? r : new Map());
        (l = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        c(e, t, n[t]);
                    });
            }
            return e;
        })({}, u)),
            (d = d =
                {
                    [p]: {
                        lastSeenWarningNotification: null != (i = g[g.length - 1]) ? i : Date.now(),
                        lastBoostCount: h
                    }
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(d))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(d)).forEach(function (e) {
                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(d, e));
                  }),
            (u = l);
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        u = {};
    }
});
