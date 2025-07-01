(n.d(t, {
    C4: () => j,
    Fi: () => h,
    KK: () => u,
    f6: () => m,
    n: () => x
}),
    n(388685));
var r = n(913527),
    l = n.n(r),
    i = n(544891),
    a = n(367907),
    s = n(434404),
    o = n(430824),
    c = n(626135),
    d = n(981631);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (0 !== t.length) {
        var n, r;
        c.default.track(
            d.rMx.GUILD_RAID_REPORTED,
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, (0, a.hH)(e))),
            (r = r =
                {
                    guild_id: e,
                    raid_types: t
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            n)
        );
    }
}
async function m(e, t) {
    let n = new Set(e.features);
    (n.has(d.oNc.COMMUNITY) ? (t ? n.delete(d.oNc.RAID_ALERTS_DISABLED) : n.add(d.oNc.RAID_ALERTS_DISABLED)) : t ? n.add(d.oNc.NON_COMMUNITY_RAID_ALERTS) : n.delete(d.oNc.NON_COMMUNITY_RAID_ALERTS), await s.Z.saveGuild(e.id, { features: n }, { throwErr: !0 }));
}
async function x(e, t, n, r) {
    let a = l()().add(r, 'hours').toISOString();
    return await i.tn.put({
        url: d.ANM.GUILD_INCIDENT_ACTIONS(e),
        body: {
            invites_disabled_until: t ? a : null,
            dms_disabled_until: n ? a : null
        },
        rejectWithError: !1
    });
}
async function h(e, t, n) {
    let r = o.Z.getGuild(e);
    return null == (null == r ? void 0 : r.getSafetyAlertsChannelId())
        ? null
        : await i.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: {
                  alert_message_id: t,
                  reason: n
              },
              rejectWithError: !1
          });
}
async function j(e) {
    let t = o.Z.getGuild(e);
    return null == (null == t ? void 0 : t.getSafetyAlertsChannelId())
        ? null
        : await i.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_RAID(e),
              rejectWithError: !1
          });
}
