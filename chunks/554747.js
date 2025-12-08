n.d(t, {
    Vm: () => _,
    ZP: () => C,
    eF: () => E,
    gM: () => v,
    k5: () => O,
    qY: () => y,
    sz: () => j,
    u1: () => x,
}),
    n(388685);
var i = n(473749),
    r = n(442837),
    l = n(592125),
    a = n(430824),
    o = n(496675),
    s = n(70956),
    c = n(924301),
    u = n(658041),
    d = n(835184),
    p = n(79874),
    h = n(854698),
    f = n(765305),
    m = n(981631);
let g = [],
    b = 15 * s.Z.Millis.MINUTE;
function C(e, t) {
    return (0, r.Wu)([a.Z, c.ZP, o.Z, l.Z], () => {
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
    return (0, r.e7)([c.ZP, l.Z, o.Z], () => {
        let t = l.Z.getChannel(e);
        if (!o.Z.can(m.Plq.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
        let n = c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null;
    }, [e]);
}
function v(e) {
    let t = (0, r.Wu)([c.ZP], () => c.ZP.getGuildScheduledEventsForGuild(e), [e]);
    return i.useMemo(() => {
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
function _(e) {
    var t;
    let n = (0, r.Wu)(
            [c.ZP, l.Z, o.Z],
            () =>
                c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === f.WX.NONE || e.status !== f.p1.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = l.Z.getChannel(e.channel_id);
                    return o.Z.can(m.Plq.VIEW_CHANNEL, t);
                }),
            [e],
        ),
        i = (0, r.cj)([d.Z], () => d.Z.getAllEventDismissals()),
        s = (0, r.cj)([d.Z], () => d.Z.getAllUpcomingNoticeSeenTimes()),
        p = (0, r.cj)(
            [c.ZP],
            () =>
                null == n
                    ? {}
                    : n.reduce((e, t) => {
                          var n, i;
                          let r = (0, h.DK)(t);
                          return (
                              (n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = i);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (i = i = { [t.id]: c.ZP.isInterestedInEventRecurrence(t.id, r) }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, i);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              n
                          );
                      }, {}),
            [n],
        ),
        g = (0, r.e7)([a.Z], () => a.Z.getGuild(e)),
        b =
            null != g &&
            !g.features.has(m.GuildFeatures.COMMUNITY) &&
            g.features.has(m.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != n && null != p && b)
        for (let e = 0; e < n.length; e++) {
            let r = n[e],
                l = i[r.id],
                a = s[r.id],
                o = null != (t = p[r.id]) && t,
                c = (0, u.M)(r, l, a, o);
            if (null != c)
                return {
                    upcomingEvent: r,
                    noticeType: c,
                };
        }
}
function O(e) {
    return (0, r.e7)(
        [c.ZP, l.Z, o.Z],
        () =>
            c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === f.WX.NONE || !(0, c.xt)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = l.Z.getChannel(e.channel_id);
                return o.Z.can(m.Plq.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function x(e) {
    return (0, r.e7)([c.ZP], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function E(e) {
    return (0, r.e7)([l.Z, c.ZP], () => {
        let t = c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != l.Z.getChannel(e.channel_id),
        );
        return l.Z.getChannel(null == t ? void 0 : t.channel_id);
    }, [e]);
}
function j(e) {
    let [t, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, b);
        return () => clearInterval(e);
    }, []);
    let l = (0, r.e7)(
        [c.ZP],
        () => (null == e ? [] : c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e))),
        [e, t],
    );
    return i.useMemo(
        () =>
            l.filter((e) => {
                let { startTime: t, endTime: n } = (0, p.Kq)(e),
                    { withinStartWindow: i, diffMinutes: r } = (0, h.ub)(
                        t.toISOString(),
                        null == n ? void 0 : n.toISOString(),
                    );
                return e.status !== f.p1.ACTIVE && i && r < 15;
            }),
        [l],
    );
}
