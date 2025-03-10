n.d(t, { Z: () => d });
var r,
    i = n(442837),
    o = n(570140),
    l = n(430824),
    a = n(326660);
function s(e, t, n) {
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
let c = {};
class u extends (r = i.ZP.PersistedStore) {
    getState() {
        return c;
    }
    initialize(e) {
        null != e && (c = e);
    }
    getNotificationStateForGuild(e) {
        return c[e];
    }
}
s(u, 'displayName', 'GuildPowerupsNotificationStore'), s(u, 'persistKey', 'GuildPowerupsNotificationStore');
let d = new u(o.Z, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        var t, n, r, i;
        let { guildId: o, notification: u } = e,
            d = null !== (n = null === (t = l.Z.getGuild(o)) || void 0 === t ? void 0 : t.premiumSubscriberCount) && void 0 !== n ? n : 0;
        (r = (function (e) {
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
                        s(e, t, n[t]);
                    });
            }
            return e;
        })({}, c)),
            (i = i =
                {
                    [o]: {
                        lastSeenWarningNotification: u.type === a.o.WARNING ? u.endsAt : Date.now(),
                        lastBoostCount: d
                    }
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            (c = r);
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        c = {};
    }
});
