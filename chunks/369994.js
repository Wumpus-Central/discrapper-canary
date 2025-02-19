n.d(t, {
    C4: () => g,
    Fi: () => b,
    KK: () => u,
    f6: () => p,
    n: () => m
}),
    n(47120);
var r = n(913527),
    i = n.n(r),
    l = n(544891),
    o = n(367907),
    a = n(434404),
    s = n(430824),
    c = n(626135),
    d = n(981631);
function u(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    0 !== r.length &&
        c.default.track(
            d.rMx.GUILD_RAID_REPORTED,
            ((t = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, (0, o.hH)(e))),
            (n = n =
                {
                    guild_id: e,
                    raid_types: r
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
}
async function p(e, t) {
    let n = new Set(e.features);
    n.has(d.oNc.COMMUNITY) ? (t ? n.delete(d.oNc.RAID_ALERTS_DISABLED) : n.add(d.oNc.RAID_ALERTS_DISABLED)) : t ? n.add(d.oNc.NON_COMMUNITY_RAID_ALERTS) : n.delete(d.oNc.NON_COMMUNITY_RAID_ALERTS), await a.Z.saveGuild(e.id, { features: n }, { throwErr: !0 });
}
async function m(e, t, n, r) {
    let o = i()().add(r, 'hours').toISOString();
    return await l.tn.put({
        url: d.ANM.GUILD_INCIDENT_ACTIONS(e),
        body: {
            invites_disabled_until: t ? o : null,
            dms_disabled_until: n ? o : null
        },
        rejectWithError: !1
    });
}
async function b(e, t, n) {
    let r = s.Z.getGuild(e);
    return null == (null == r ? void 0 : r.getSafetyAlertsChannelId())
        ? null
        : await l.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: {
                  alert_message_id: t,
                  reason: n
              },
              rejectWithError: !1
          });
}
async function g(e) {
    let t = s.Z.getGuild(e);
    return null == (null == t ? void 0 : t.getSafetyAlertsChannelId())
        ? null
        : await l.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_RAID(e),
              rejectWithError: !1
          });
}
