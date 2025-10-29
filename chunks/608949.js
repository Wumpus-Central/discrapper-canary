n.d(t, { Z: () => f }), n(388685);
var r,
    i = n(442837),
    l = n(570140),
    o = n(430824),
    a = n(60482),
    s = n(905128),
    c = n(19394);
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
let d = {};
class p extends (r = i.ZP.PersistedStore) {
    getState() {
        return d;
    }
    initialize(e) {
        this.waitFor(a.Z, s.Z, o.Z), null != e && (d = e);
    }
    getNotificationStateForGuild(e) {
        return d[e];
    }
}
u(p, "displayName", "GuildPowerupsNotificationStore"),
    u(p, "persistKey", "GuildPowerupsNotificationStore"),
    u(p, "migrations", [
        (e) => (
            Object.entries(e).forEach((t) => {
                let [n, r] = t;
                e[n] = r;
            }),
            e
        ),
    ]);
let f = new p(l.Z, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        var t, n, r, i, l, p, f, h;
        let { guildId: g } = e,
            m = null != (r = null == (t = o.Z.getGuild(g)) ? void 0 : t.premiumSubscriberCount) ? r : 0,
            b = s.Z.getStateForGuild(g),
            _ = a.Z.getStateForGuild(g),
            O = (0, c.h)([
                ...Object.values(null != (i = null == b ? void 0 : b.unlockedPowerups) ? i : {}),
                ...Object.values(null != (l = null == _ ? void 0 : _.entitlements) ? l : {}),
            ]);
        (f = (function (e) {
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
        })({}, d)),
            (h = h =
                {
                    [g]: {
                        lastSeenWarningNotification: new Date(
                            null != (p = null == (n = O[O.length - 1]) ? void 0 : n.ends_at) ? p : Date.now(),
                        ).getTime(),
                        lastBoostCount: m,
                    },
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(h)).forEach(function (e) {
                      Object.defineProperty(f, e, Object.getOwnPropertyDescriptor(h, e));
                  }),
            (d = f);
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        d = {};
    },
});
