n.d(t, { Z: () => m }), n(47120);
var r,
    i = n(442837),
    l = n(570140),
    o = n(430824),
    a = n(823379),
    s = n(905128),
    c = n(19394),
    u = n(535396);
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
function p(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
let f = {};
class g extends (r = i.ZP.PersistedStore) {
    getState() {
        return f;
    }
    initialize(e) {
        null != e && (f = e);
    }
    getNotificationStateForGuild(e) {
        return f[e];
    }
}
d(g, 'displayName', 'GuildPowerupsNotificationStore'),
    d(g, 'persistKey', 'GuildPowerupsNotificationStore'),
    d(g, 'migrations', [
        (e) => (
            Object.entries(e).forEach((t) => {
                let [n, r] = t,
                    i =
                        null == r.seenLevelSkuIds || null == r.seenPerkSkuIds
                            ? h(p({}, r), {
                                  seenLevelSkuIds: [],
                                  seenPerkSkuIds: []
                              })
                            : r;
                e[n] = i;
            }),
            e
        )
    ]);
let m = new g(l.Z, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        var t, n, r, i, l, d, g, m;
        let { guildId: b } = e,
            y = null != (i = null == (t = o.Z.getGuild(b)) ? void 0 : t.premiumSubscriberCount) ? i : 0,
            _ = s.Z.getStateForGuild(b),
            v = (0, c.h)(null != (l = null == _ ? void 0 : _.unlocked) ? l : new Map()),
            O = new Set(
                Array.from(null != (d = null == _ || null == (n = _.unlocked) ? void 0 : n.values()) ? d : [])
                    .map((e) => {
                        var t, n;
                        let r = null == _ || null == (n = _.powerups) || null == (t = n.get) ? void 0 : t.call(n, e.sku_id);
                        return (null == r ? void 0 : r.type) === u.Us.LEVEL ? r.skuId : void 0;
                    })
                    .filter(a.lm)
            ),
            j = new Set((null != (g = null == _ || null == (r = _.catalog) ? void 0 : r.get(u.Us.PERK)) ? g : []).map((e) => e.skuId));
        f = h(p({}, f), {
            [b]: {
                lastSeenWarningNotification: null != (m = v[v.length - 1]) ? m : Date.now(),
                lastBoostCount: y,
                seenLevelSkuIds: O,
                seenPerkSkuIds: j
            }
        });
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        f = {};
    }
});
