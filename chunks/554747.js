t.d(n, {
    Vm: () => v,
    ZP: () => b,
    eF: () => O,
    gM: () => h,
    k5: () => C,
    qY: () => Z,
    sz: () => P,
    u1: () => I,
}),
    t(388685);
var r = t(647438),
    l = t(442837),
    i = t(592125),
    c = t(430824),
    o = t(496675),
    a = t(70956),
    u = t(924301),
    s = t(658041),
    d = t(835184),
    _ = t(79874),
    E = t(954313),
    f = t(765305),
    p = t(981631);
let g = [],
    N = 15 * a.Z.Millis.MINUTE;
function b(e, n) {
    return (0, l.Wu)([c.Z, u.ZP, o.Z, i.Z], () => {
        let t = c.Z.getGuild(e);
        return null == t
            ? g
            : u.ZP.getGuildScheduledEventsByIndex(null != n ? n : u.bN.GUILD_EVENT_UPCOMING(t.id)).filter((e) => {
                  let n = e.channel_id;
                  if (null == n) return !0;
                  let t = i.Z.getChannel(n);
                  return o.Z.can(p.Plq.VIEW_CHANNEL, t);
              });
    }, [n, e]);
}
function Z(e) {
    return (0, l.e7)([u.ZP, i.Z, o.Z], () => {
        let n = i.Z.getChannel(e);
        if (!o.Z.can(p.Plq.VIEW_CHANNEL, n) || null == (null == n ? void 0 : n.guild_id)) return null;
        let t = u.ZP.getGuildScheduledEventsByIndex(u.bN.CHANNEL_EVENT_ACTIVE(e));
        return t.length > 0 ? t[0] : null;
    }, [e]);
}
function h(e) {
    let n = (0, l.Wu)([u.ZP], () => u.ZP.getGuildScheduledEventsForGuild(e), [e]);
    return r.useMemo(() => {
        let e = new Map();
        return (
            n.forEach((n) => {
                let t = n.channel_id;
                null != t && e.set(t, n);
            }),
            e
        );
    }, [n]);
}
function v(e) {
    var n;
    let t = (0, l.Wu)(
            [u.ZP, i.Z, o.Z],
            () =>
                u.ZP.getGuildScheduledEventsByIndex(u.bN.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === f.WX.NONE || e.status !== f.p1.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let n = i.Z.getChannel(e.channel_id);
                    return o.Z.can(p.Plq.VIEW_CHANNEL, n);
                }),
            [e],
        ),
        r = (0, l.cj)([d.Z], () => d.Z.getAllEventDismissals()),
        a = (0, l.cj)([d.Z], () => d.Z.getAllUpcomingNoticeSeenTimes()),
        _ = (0, l.cj)(
            [u.ZP],
            () =>
                null == t
                    ? {}
                    : t.reduce((e, n) => {
                          var t, r;
                          let l = (0, E.DK)(n);
                          return (
                              (t = (function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = null != arguments[n] ? arguments[n] : {},
                                          r = Object.keys(t);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (n) {
                                              var r;
                                              (r = t[n]),
                                                  n in e
                                                      ? Object.defineProperty(e, n, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[n] = r);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (r = r = { [n.id]: u.ZP.isInterestedInEventRecurrence(n.id, l) }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                  : (function (e, n) {
                                        var t = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            t.push.apply(t, r);
                                        }
                                        return t;
                                    })(Object(r)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                    }),
                              t
                          );
                      }, {}),
            [t],
        ),
        g = (0, l.e7)([c.Z], () => c.Z.getGuild(e)),
        N = null != g && !g.features.has(p.oNc.COMMUNITY) && g.features.has(p.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != t && null != _ && N)
        for (let e = 0; e < t.length; e++) {
            let l = t[e],
                i = r[l.id],
                c = a[l.id],
                o = null != (n = _[l.id]) && n,
                u = (0, s.M)(l, i, c, o);
            if (null != u)
                return {
                    upcomingEvent: l,
                    noticeType: u,
                };
        }
}
function C(e) {
    return (0, l.e7)(
        [u.ZP, i.Z, o.Z],
        () =>
            u.ZP.getGuildScheduledEventsByIndex(u.bN.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === f.WX.NONE || !(0, u.xt)(e)) return !1;
                if (null == e.channel_id) return !0;
                let n = i.Z.getChannel(e.channel_id);
                return o.Z.can(p.Plq.VIEW_CHANNEL, n);
            }),
        [e],
    );
}
function I(e) {
    return (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEventsByIndex(u.bN.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function O(e) {
    return (0, l.e7)([i.Z, u.ZP], () => {
        let n = u.ZP.getGuildScheduledEventsByIndex(u.bN.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != i.Z.getChannel(e.channel_id),
        );
        return i.Z.getChannel(null == n ? void 0 : n.channel_id);
    }, [e]);
}
function P(e) {
    let [n, t] = r.useState(() => Date.now());
    r.useEffect(() => {
        let e = setInterval(() => {
            t(Date.now());
        }, N);
        return () => clearInterval(e);
    }, []);
    let i = (0, l.e7)(
        [u.ZP],
        () => (null == e ? [] : u.ZP.getGuildScheduledEventsByIndex(u.bN.CHANNEL_EVENT_UPCOMING(e))),
        [e, n],
    );
    return r.useMemo(
        () =>
            i.filter((e) => {
                let { startTime: n, endTime: t } = (0, _.Kq)(e),
                    { withinStartWindow: r, diffMinutes: l } = (0, E.ub)(
                        n.toISOString(),
                        null == t ? void 0 : t.toISOString(),
                    );
                return e.status !== f.p1.ACTIVE && r && l < 15;
            }),
        [i],
    );
}
