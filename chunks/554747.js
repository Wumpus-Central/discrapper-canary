n.d(t, {
    Vm: () => b,
    ZP: () => O,
    eF: () => S,
    gM: () => I,
    k5: () => D,
    qY: () => h,
    sz: () => T,
    u1: () => y
}),
    n(47120);
var l = n(192379),
    r = n(442837),
    i = n(241155),
    u = n(592125),
    c = n(984933),
    d = n(430824),
    o = n(496675),
    E = n(70956),
    a = n(823379),
    s = n(924301),
    f = n(658041),
    N = n(835184),
    _ = n(79874),
    g = n(854698),
    Z = n(765305),
    P = n(981631);
let p = [],
    v = 15 * E.Z.Millis.MINUTE;
function O(e, t) {
    return (0, r.Wu)(
        [d.Z, i.Z, s.ZP, o.Z, u.Z, c.ZP],
        () => {
            let n = d.Z.getGuild(e);
            if (null == n) return p;
            if (n.hasFeature(P.oNc.HUB)) {
                var l, r;
                let e = null === (l = c.ZP.getDefaultChannel(n.id)) || void 0 === l ? void 0 : l.id;
                return (null !== (r = i.Z.getEventDirectoryEntries(e)) && void 0 !== r ? r : [])
                    .map((e) => {
                        let t = e.scheduledEventId,
                            n = s.ZP.getGuildScheduledEvent(t);
                        return null != n ? n : i.Z.getCachedGuildScheduledEventById(t);
                    })
                    .filter(a.lm);
            }
            return s.ZP.getGuildScheduledEventsByIndex(null != t ? t : s.bN.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
                let t = e.channel_id;
                if (null == t) return !0;
                let n = u.Z.getChannel(t);
                return o.Z.can(P.Plq.VIEW_CHANNEL, n);
            });
        },
        [t, e]
    );
}
function h(e) {
    return (0, r.e7)(
        [s.ZP, u.Z, o.Z],
        () => {
            let t = u.Z.getChannel(e);
            if (!o.Z.can(P.Plq.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
            let n = s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_ACTIVE(e));
            return n.length > 0 ? n[0] : null;
        },
        [e]
    );
}
function I(e) {
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
            [s.ZP, u.Z, o.Z],
            () =>
                s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === Z.WX.NONE || e.status !== Z.p1.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = u.Z.getChannel(e.channel_id);
                    return o.Z.can(P.Plq.VIEW_CHANNEL, t);
                }),
            [e]
        ),
        l = (0, r.cj)([N.Z], () => N.Z.getAllEventDismissals()),
        i = (0, r.cj)([N.Z], () => N.Z.getAllUpcomingNoticeSeenTimes()),
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
        E = (0, r.e7)([d.Z], () => d.Z.getGuild(e)),
        a = null != E && !E.hasFeature(P.oNc.COMMUNITY) && E.hasFeature(P.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != n && null != c && a)
        for (let e = 0; e < n.length; e++) {
            let r = n[e],
                u = l[r.id],
                d = i[r.id],
                o = null !== (t = c[r.id]) && void 0 !== t && t,
                E = (0, f.M)(r, u, d, o);
            if (null != E)
                return {
                    upcomingEvent: r,
                    noticeType: E
                };
        }
}
function D(e) {
    return (0, r.e7)(
        [s.ZP, u.Z, o.Z],
        () =>
            s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === Z.WX.NONE || !(0, s.xt)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = u.Z.getChannel(e.channel_id);
                return o.Z.can(P.Plq.VIEW_CHANNEL, t);
            }),
        [e]
    );
}
function y(e) {
    return (0, r.e7)([s.ZP], () => s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function S(e) {
    return (0, r.e7)(
        [u.Z, s.ZP],
        () => {
            let t = s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(e)).find((e) => null != u.Z.getChannel(e.channel_id));
            return u.Z.getChannel(null == t ? void 0 : t.channel_id);
        },
        [e]
    );
}
function T(e) {
    let [t, n] = l.useState(() => Date.now());
    l.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, v);
        return () => clearInterval(e);
    }, []);
    let i = (0, r.e7)([s.ZP], () => (null == e ? [] : s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(e))), [e, t]);
    return l.useMemo(
        () =>
            i.filter((e) => {
                let { startTime: t, endTime: n } = (0, _.Kq)(e),
                    { withinStartWindow: l, diffMinutes: r } = (0, g.ub)(t.toISOString(), null == n ? void 0 : n.toISOString());
                return e.status !== Z.p1.ACTIVE && l && r < 15;
            }),
        [i]
    );
}
