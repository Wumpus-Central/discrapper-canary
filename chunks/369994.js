(n.d(t, {
    C4: () => f,
    Fi: () => g,
    KK: () => p,
    f6: () => m,
    n: () => b
}),
    n(388685));
var r = n(913527),
    i = n.n(r),
    l = n(544891),
    o = n(367907),
    a = n(434404),
    s = n(430824),
    c = n(626135),
    d = n(173530),
    u = n(981631);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (0 !== t.length) {
        var n, r;
        c.default.track(
            u.rMx.GUILD_RAID_REPORTED,
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
            })({}, (0, o.hH)(e))),
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
    (n.has(u.oNc.COMMUNITY) ? (t ? n.delete(u.oNc.RAID_ALERTS_DISABLED) : n.add(u.oNc.RAID_ALERTS_DISABLED)) : t ? n.add(u.oNc.NON_COMMUNITY_RAID_ALERTS) : n.delete(u.oNc.NON_COMMUNITY_RAID_ALERTS), await a.Z.saveGuild(e.id, { features: n }, { throwErr: !0 }));
}
async function b(e, t, n, r) {
    let o = i()().add(r, 'hours').toISOString();
    return await l.tn.put({
        url: u.ANM.GUILD_INCIDENT_ACTIONS(e),
        body: {
            invites_disabled_until: t ? o : null,
            dms_disabled_until: n ? o : null
        },
        rejectWithError: !1
    });
}
async function g(e, t, n) {
    let r = s.Z.getGuild(e);
    return null == (null != r ? (0, d.Z)(r) : null)
        ? null
        : await l.tn.post({
              url: u.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: {
                  alert_message_id: t,
                  reason: n
              },
              rejectWithError: !1
          });
}
async function f(e) {
    let t = s.Z.getGuild(e);
    return null == (null != t ? (0, d.Z)(t) : null)
        ? null
        : await l.tn.post({
              url: u.ANM.GUILD_INCIDENT_REPORT_RAID(e),
              rejectWithError: !1
          });
}
