(n.d(e, {
    C4: () => f,
    Fi: () => p,
    KK: () => _,
    f6: () => b,
    n: () => S
}),
    n(388685));
var r = n(913527),
    i = n.n(r),
    l = n(544891),
    c = n(367907),
    o = n(434404),
    a = n(430824),
    s = n(626135),
    u = n(173530),
    d = n(981631);
function _(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (0 !== e.length) {
        var n, r;
        s.default.track(
            d.rMx.GUILD_RAID_REPORTED,
            ((n = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                            })
                        )),
                        r.forEach(function (e) {
                            var r;
                            ((r = n[e]),
                                e in t
                                    ? Object.defineProperty(t, e, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (t[e] = r));
                        }));
                }
                return t;
            })({}, (0, c.hH)(t))),
            (r = r =
                {
                    guild_id: t,
                    raid_types: e
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                : (function (t, e) {
                      var n = Object.keys(t);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(t);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(r)).forEach(function (t) {
                      Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t));
                  }),
            n)
        );
    }
}
async function b(t, e) {
    let n = new Set(t.features);
    (n.has(d.oNc.COMMUNITY) ? (e ? n.delete(d.oNc.RAID_ALERTS_DISABLED) : n.add(d.oNc.RAID_ALERTS_DISABLED)) : e ? n.add(d.oNc.NON_COMMUNITY_RAID_ALERTS) : n.delete(d.oNc.NON_COMMUNITY_RAID_ALERTS), await o.Z.saveGuild(t.id, { features: n }, { throwErr: !0 }));
}
async function S(t, e, n, r) {
    let c = i()().add(r, 'hours').toISOString();
    return await l.tn.put({
        url: d.ANM.GUILD_INCIDENT_ACTIONS(t),
        body: {
            invites_disabled_until: e ? c : null,
            dms_disabled_until: n ? c : null
        },
        rejectWithError: !1
    });
}
async function p(t, e, n) {
    let r = a.Z.getGuild(t);
    return null == (null != r ? (0, u.Z)(r) : null)
        ? null
        : await l.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(t),
              body: {
                  alert_message_id: e,
                  reason: n
              },
              rejectWithError: !1
          });
}
async function f(t) {
    let e = a.Z.getGuild(t);
    return null == (null != e ? (0, u.Z)(e) : null)
        ? null
        : await l.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_RAID(t),
              rejectWithError: !1
          });
}
