n.d(t, {
    Vm: () => h,
    ZP: () => Z,
    eF: () => P,
    gM: () => p,
    k5: () => v,
    qY: () => O,
    sz: () => S,
    u1: () => C,
}),
    n(388685);
var l = n(647438),
    i = n(442837),
    r = n(592125),
    u = n(430824),
    a = n(496675),
    o = n(70956),
    s = n(924301),
    c = n(658041),
    d = n(835184),
    E = n(79874),
    f = n(954313),
    N = n(765305),
    g = n(981631);
let _ = [],
    m = 15 * o.Z.Millis.MINUTE;
function Z(e, t) {
    return (0, i.Wu)([u.Z, s.ZP, a.Z, r.Z], () => {
        let n = u.Z.getGuild(e);
        return null == n
            ? _
            : s.ZP.getGuildScheduledEventsByIndex(null != t ? t : s.bN.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
                  let t = e.channel_id;
                  if (null == t) return !0;
                  let n = r.Z.getChannel(t);
                  return a.Z.can(g.Plq.VIEW_CHANNEL, n);
              });
    }, [t, e]);
}
function O(e) {
    return (0, i.e7)([s.ZP, r.Z, a.Z], () => {
        let t = r.Z.getChannel(e);
        if (!a.Z.can(g.Plq.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
        let n = s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null;
    }, [e]);
}
function p(e) {
    let t = (0, i.Wu)([s.ZP], () => s.ZP.getGuildScheduledEventsForGuild(e), [e]);
    return l.useMemo(() => {
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
function h(e) {
    var t;
    let n = (0, i.Wu)(
            [s.ZP, r.Z, a.Z],
            () =>
                s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === N.WX.NONE || e.status !== N.p1.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = r.Z.getChannel(e.channel_id);
                    return a.Z.can(g.Plq.VIEW_CHANNEL, t);
                }),
            [e],
        ),
        l = (0, i.cj)([d.Z], () => d.Z.getAllEventDismissals()),
        o = (0, i.cj)([d.Z], () => d.Z.getAllUpcomingNoticeSeenTimes()),
        E = (0, i.cj)(
            [s.ZP],
            () =>
                null == n
                    ? {}
                    : n.reduce((e, t) => {
                          var n, l;
                          let i = (0, f.DK)(t);
                          return (
                              (n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          l = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          l.forEach(function (t) {
                                              var l;
                                              (l = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = l);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (l = l = { [t.id]: s.ZP.isInterestedInEventRecurrence(t.id, i) }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, l);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              n
                          );
                      }, {}),
            [n],
        ),
        _ = (0, i.e7)([u.Z], () => u.Z.getGuild(e)),
        m = null != _ && !_.features.has(g.oNc.COMMUNITY) && _.features.has(g.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != n && null != E && m)
        for (let e = 0; e < n.length; e++) {
            let i = n[e],
                r = l[i.id],
                u = o[i.id],
                a = null != (t = E[i.id]) && t,
                s = (0, c.M)(i, r, u, a);
            if (null != s)
                return {
                    upcomingEvent: i,
                    noticeType: s,
                };
        }
}
function v(e) {
    return (0, i.e7)(
        [s.ZP, r.Z, a.Z],
        () =>
            s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === N.WX.NONE || !(0, s.xt)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = r.Z.getChannel(e.channel_id);
                return a.Z.can(g.Plq.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function C(e) {
    return (0, i.e7)([s.ZP], () => s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function P(e) {
    return (0, i.e7)([r.Z, s.ZP], () => {
        let t = s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != r.Z.getChannel(e.channel_id),
        );
        return r.Z.getChannel(null == t ? void 0 : t.channel_id);
    }, [e]);
}
function S(e) {
    let [t, n] = l.useState(() => Date.now());
    l.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, m);
        return () => clearInterval(e);
    }, []);
    let r = (0, i.e7)(
        [s.ZP],
        () => (null == e ? [] : s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(e))),
        [e, t],
    );
    return l.useMemo(
        () =>
            r.filter((e) => {
                let { startTime: t, endTime: n } = (0, E.Kq)(e),
                    { withinStartWindow: l, diffMinutes: i } = (0, f.ub)(
                        t.toISOString(),
                        null == n ? void 0 : n.toISOString(),
                    );
                return e.status !== N.p1.ACTIVE && l && i < 15;
            }),
        [r],
    );
}
