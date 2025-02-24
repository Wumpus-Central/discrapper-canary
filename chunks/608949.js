n.d(t, { Z: () => u });
var r,
    i = n(442837),
    l = n(570140),
    o = n(430824);
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
let s = {};
class c extends (r = i.ZP.PersistedStore) {
    getState() {
        return s;
    }
    initialize(e) {
        null != e && (s = e);
    }
    getNotificationStateForGuild(e) {
        return s[e];
    }
}
a(c, 'displayName', 'GuildPowerupsNotificationStore'), a(c, 'persistKey', 'GuildPowerupsNotificationStore');
let u = new c(l.Z, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        var t, n, r, i;
        let { guildId: l } = e,
            c = null !== (n = null === (t = o.Z.getGuild(l)) || void 0 === t ? void 0 : t.premiumSubscriberCount) && void 0 !== n ? n : 0;
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
                        a(e, t, n[t]);
                    });
            }
            return e;
        })({}, s)),
            (i = i =
                {
                    [l]: {
                        lastSeenNotification: Date.now(),
                        lastBoostCount: c
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
            (s = r);
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        s = {};
    }
});
