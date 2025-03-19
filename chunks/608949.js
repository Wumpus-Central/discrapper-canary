n.d(t, { Z: () => m }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    l = n(430824),
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
let m = new g(o.Z, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        var t, n, r, i, o, d, g, m;
        let { guildId: b } = e,
            v = null !== (i = null === (t = l.Z.getGuild(b)) || void 0 === t ? void 0 : t.premiumSubscriberCount) && void 0 !== i ? i : 0,
            y = s.Z.getStateForGuild(b),
            _ = (0, c.h)(null !== (o = null == y ? void 0 : y.unlocked) && void 0 !== o ? o : new Map()),
            O = new Set(
                Array.from(null !== (d = null == y ? void 0 : null === (n = y.unlocked) || void 0 === n ? void 0 : n.values()) && void 0 !== d ? d : [])
                    .map((e) => {
                        var t, n;
                        let r = null == y ? void 0 : null === (n = y.powerups) || void 0 === n ? void 0 : null === (t = n.get) || void 0 === t ? void 0 : t.call(n, e.sku_id);
                        return (null == r ? void 0 : r.type) === u.Us.LEVEL ? r.skuId : void 0;
                    })
                    .filter(a.lm)
            ),
            j = new Set((null !== (g = null == y ? void 0 : null === (r = y.catalog) || void 0 === r ? void 0 : r.get(u.Us.PERK)) && void 0 !== g ? g : []).map((e) => e.skuId));
        f = h(p({}, f), {
            [b]: {
                lastSeenWarningNotification: null !== (m = _[_.length - 1]) && void 0 !== m ? m : Date.now(),
                lastBoostCount: v,
                seenLevelSkuIds: O,
                seenPerkSkuIds: j
            }
        });
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        f = {};
    }
});
