n.d(t, {
    Vm: () => b,
    ZP: () => h,
    eF: () => S,
    gM: () => v,
    k5: () => D,
    qY: () => I,
    sz: () => T,
    u1: () => y
}),
    n(47120);
var l = n(192379),
    r = n(442837),
    u = n(241155),
    i = n(592125),
    c = n(984933),
    E = n(430824),
    d = n(496675),
    o = n(70956),
    a = n(823379),
    s = n(924301),
    f = n(658041),
    N = n(835184),
    _ = n(79874),
    g = n(854698),
    Z = n(765305),
    P = n(981631);
let p = [],
    O = 15 * o.Z.Millis.MINUTE;
function h(e, t) {
    return (0, r.Wu)(
        [E.Z, u.Z, s.ZP, d.Z, i.Z, c.ZP],
        () => {
            let n = E.Z.getGuild(e);
            if (null == n) return p;
            if (n.hasFeature(P.oNc.HUB)) {
                var l, r;
                let e = null == (l = c.ZP.getDefaultChannel(n.id)) ? void 0 : l.id;
                return (null != (r = u.Z.getEventDirectoryEntries(e)) ? r : [])
                    .map((e) => {
                        let t = e.scheduledEventId,
                            n = s.ZP.getGuildScheduledEvent(t);
                        return null != n ? n : u.Z.getCachedGuildScheduledEventById(t);
                    })
                    .filter(a.lm);
            }
            return s.ZP.getGuildScheduledEventsByIndex(null != t ? t : s.bN.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
                let t = e.channel_id;
                if (null == t) return !0;
                let n = i.Z.getChannel(t);
                return d.Z.can(P.Plq.VIEW_CHANNEL, n);
            });
        },
        [t, e]
    );
}
function I(e) {
    return (0, r.e7)(
        [s.ZP, i.Z, d.Z],
        () => {
            let t = i.Z.getChannel(e);
            if (!d.Z.can(P.Plq.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
            let n = s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_ACTIVE(e));
            return n.length > 0 ? n[0] : null;
        },
        [e]
    );
}
function v(e) {
    let t = (0, r.Wu)([s.ZP], () => s.ZP.getGuildScheduledEventsForGuild(e), [e]);
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
function b(e) {
    var t;
    let n = (0, r.Wu)(
            [s.ZP, i.Z, d.Z],
            () =>
                s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === Z.WX.NONE || e.status !== Z.p1.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = i.Z.getChannel(e.channel_id);
                    return d.Z.can(P.Plq.VIEW_CHANNEL, t);
                }),
            [e]
        ),
        l = (0, r.cj)([N.Z], () => N.Z.getAllEventDismissals()),
        u = (0, r.cj)([N.Z], () => N.Z.getAllUpcomingNoticeSeenTimes()),
        c = (0, r.cj)(
            [s.ZP],
            () =>
                null == n
                    ? {}
                    : n.reduce((e, t) => {
                          var n, l;
                          let r = (0, g.DK)(t);
                          return (
                              (n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          l = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          l.forEach(function (t) {
                                              var l;
                                              (l = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = l);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (l = l = { [t.id]: s.ZP.isInterestedInEventRecurrence(t.id, r) }),
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
            [n]
        ),
        o = (0, r.e7)([E.Z], () => E.Z.getGuild(e)),
        a = null != o && !o.hasFeature(P.oNc.COMMUNITY) && o.hasFeature(P.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != n && null != c && a)
        for (let e = 0; e < n.length; e++) {
            let r = n[e],
                i = l[r.id],
                E = u[r.id],
                d = null != (t = c[r.id]) && t,
                o = (0, f.M)(r, i, E, d);
            if (null != o)
                return {
                    upcomingEvent: r,
                    noticeType: o
                };
        }
}
function D(e) {
    return (0, r.e7)(
        [s.ZP, i.Z, d.Z],
        () =>
            s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === Z.WX.NONE || !(0, s.xt)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = i.Z.getChannel(e.channel_id);
                return d.Z.can(P.Plq.VIEW_CHANNEL, t);
            }),
        [e]
    );
}
function y(e) {
    return (0, r.e7)([s.ZP], () => s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function S(e) {
    return (0, r.e7)(
        [i.Z, s.ZP],
        () => {
            let t = s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(e)).find((e) => null != i.Z.getChannel(e.channel_id));
            return i.Z.getChannel(null == t ? void 0 : t.channel_id);
        },
        [e]
    );
}
function T(e) {
    let [t, n] = l.useState(() => Date.now());
    l.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, O);
        return () => clearInterval(e);
    }, []);
    let u = (0, r.e7)([s.ZP], () => (null == e ? [] : s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(e))), [e, t]);
    return l.useMemo(
        () =>
            u.filter((e) => {
                let { startTime: t, endTime: n } = (0, _.Kq)(e),
                    { withinStartWindow: l, diffMinutes: r } = (0, g.ub)(t.toISOString(), null == n ? void 0 : n.toISOString());
                return e.status !== Z.p1.ACTIVE && l && r < 15;
            }),
        [u]
    );
}
