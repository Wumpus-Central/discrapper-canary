n.d(t, {
    Vm: () => v,
    ZP: () => _,
    eF: () => E,
    gM: () => C,
    k5: () => O,
    qY: () => y,
    sz: () => j,
    u1: () => x,
}),
    n(388685);
var r = n(647438),
    i = n(442837),
    l = n(592125),
    a = n(430824),
    o = n(496675),
    s = n(70956),
    c = n(924301),
    u = n(658041),
    d = n(835184),
    p = n(79874),
    f = n(954313),
    h = n(765305),
    m = n(981631);
let g = [],
    b = 15 * s.Z.Millis.MINUTE;
function _(e, t) {
    return (0, i.Wu)([a.Z, c.ZP, o.Z, l.Z], () => {
        let n = a.Z.getGuild(e);
        return null == n
            ? g
            : c.ZP.getGuildScheduledEventsByIndex(null != t ? t : c.bN.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
                  let t = e.channel_id;
                  if (null == t) return !0;
                  let n = l.Z.getChannel(t);
                  return o.Z.can(m.Plq.VIEW_CHANNEL, n);
              });
    }, [t, e]);
}
function y(e) {
    return (0, i.e7)([c.ZP, l.Z, o.Z], () => {
        let t = l.Z.getChannel(e);
        if (!o.Z.can(m.Plq.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
        let n = c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null;
    }, [e]);
}
function C(e) {
    let t = (0, i.Wu)([c.ZP], () => c.ZP.getGuildScheduledEventsForGuild(e), [e]);
    return r.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                let n = t.channel_id;
                null != n && e.set(n, t);
            }),
            e
        );
    }, [t]);
}
function v(e) {
    var t;
    let n = (0, i.Wu)(
            [c.ZP, l.Z, o.Z],
            () =>
                c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === h.WX.NONE || e.status !== h.p1.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = l.Z.getChannel(e.channel_id);
                    return o.Z.can(m.Plq.VIEW_CHANNEL, t);
                }),
            [e],
        ),
        r = (0, i.cj)([d.Z], () => d.Z.getAllEventDismissals()),
        s = (0, i.cj)([d.Z], () => d.Z.getAllUpcomingNoticeSeenTimes()),
        p = (0, i.cj)(
            [c.ZP],
            () =>
                null == n
                    ? {}
                    : n.reduce((e, t) => {
                          var n, r;
                          let i = (0, f.DK)(t);
                          return (
                              (n = (function (e) {
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
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (r = r = { [t.id]: c.ZP.isInterestedInEventRecurrence(t.id, i) }),
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
                              n
                          );
                      }, {}),
            [n],
        ),
        g = (0, i.e7)([a.Z], () => a.Z.getGuild(e)),
        b =
            null != g &&
            !g.features.has(m.GuildFeatures.COMMUNITY) &&
            g.features.has(m.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != n && null != p && b)
        for (let e = 0; e < n.length; e++) {
            let i = n[e],
                l = r[i.id],
                a = s[i.id],
                o = null != (t = p[i.id]) && t,
                c = (0, u.M)(i, l, a, o);
            if (null != c)
                return {
                    upcomingEvent: i,
                    noticeType: c,
                };
        }
}
function O(e) {
    return (0, i.e7)(
        [c.ZP, l.Z, o.Z],
        () =>
            c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === h.WX.NONE || !(0, c.xt)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = l.Z.getChannel(e.channel_id);
                return o.Z.can(m.Plq.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function x(e) {
    return (0, i.e7)([c.ZP], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function E(e) {
    return (0, i.e7)([l.Z, c.ZP], () => {
        let t = c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != l.Z.getChannel(e.channel_id),
        );
        return l.Z.getChannel(null == t ? void 0 : t.channel_id);
    }, [e]);
}
function j(e) {
    let [t, n] = r.useState(() => Date.now());
    r.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, b);
        return () => clearInterval(e);
    }, []);
    let l = (0, i.e7)(
        [c.ZP],
        () => (null == e ? [] : c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e))),
        [e, t],
    );
    return r.useMemo(
        () =>
            l.filter((e) => {
                let { startTime: t, endTime: n } = (0, p.Kq)(e),
                    { withinStartWindow: r, diffMinutes: i } = (0, f.ub)(
                        t.toISOString(),
                        null == n ? void 0 : n.toISOString(),
                    );
                return e.status !== h.p1.ACTIVE && r && i < 15;
            }),
        [l],
    );
}
