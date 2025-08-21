n.d(e, {
    Vm: () => h,
    ZP: () => Z,
    eF: () => j,
    gM: () => O,
    k5: () => P,
    qY: () => y,
    sz: () => N,
    u1: () => m,
}),
    n(388685);
var l = n(647438),
    r = n(442837),
    i = n(592125),
    o = n(430824),
    u = n(496675),
    c = n(70956),
    a = n(924301),
    s = n(658041),
    d = n(835184),
    g = n(79874),
    f = n(954313),
    b = n(765305),
    v = n(981631);
let E = [],
    p = 15 * c.Z.Millis.MINUTE;
function Z(t, e) {
    return (0, r.Wu)([o.Z, a.ZP, u.Z, i.Z], () => {
        let n = o.Z.getGuild(t);
        return null == n
            ? E
            : a.ZP.getGuildScheduledEventsByIndex(null != e ? e : a.bN.GUILD_EVENT_UPCOMING(n.id)).filter((t) => {
                  let e = t.channel_id;
                  if (null == e) return !0;
                  let n = i.Z.getChannel(e);
                  return u.Z.can(v.Plq.VIEW_CHANNEL, n);
              });
    }, [e, t]);
}
function y(t) {
    return (0, r.e7)([a.ZP, i.Z, u.Z], () => {
        let e = i.Z.getChannel(t);
        if (!u.Z.can(v.Plq.VIEW_CHANNEL, e) || null == (null == e ? void 0 : e.guild_id)) return null;
        let n = a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_ACTIVE(t));
        return n.length > 0 ? n[0] : null;
    }, [t]);
}
function O(t) {
    let e = (0, r.Wu)([a.ZP], () => a.ZP.getGuildScheduledEventsForGuild(t), [t]);
    return l.useMemo(() => {
        let t = new Map();
        return (
            e.forEach((e) => {
                let n = e.channel_id;
                null != n && t.set(n, e);
            }),
            t
        );
    }, [e]);
}
function h(t) {
    var e;
    let n = (0, r.Wu)(
            [a.ZP, i.Z, u.Z],
            () =>
                a.ZP.getGuildScheduledEventsByIndex(a.bN.GUILD_EVENT_UPCOMING(t)).filter((t) => {
                    if (t.entity_type === b.WX.NONE || t.status !== b.p1.SCHEDULED) return !1;
                    if (null == t.channel_id) return !0;
                    let e = i.Z.getChannel(t.channel_id);
                    return u.Z.can(v.Plq.VIEW_CHANNEL, e);
                }),
            [t],
        ),
        l = (0, r.cj)([d.Z], () => d.Z.getAllEventDismissals()),
        c = (0, r.cj)([d.Z], () => d.Z.getAllUpcomingNoticeSeenTimes()),
        g = (0, r.cj)(
            [a.ZP],
            () =>
                null == n
                    ? {}
                    : n.reduce((t, e) => {
                          var n, l;
                          let r = (0, f.DK)(e);
                          return (
                              (n = (function (t) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var n = null != arguments[e] ? arguments[e] : {},
                                          l = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                              }),
                                          )),
                                          l.forEach(function (e) {
                                              var l;
                                              (l = n[e]),
                                                  e in t
                                                      ? Object.defineProperty(t, e, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (t[e] = l);
                                          });
                                  }
                                  return t;
                              })({}, t)),
                              (l = l = { [e.id]: a.ZP.isInterestedInEventRecurrence(e.id, r) }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                  : (function (t, e) {
                                        var n = Object.keys(t);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(t);
                                            n.push.apply(n, l);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (t) {
                                        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(l, t));
                                    }),
                              n
                          );
                      }, {}),
            [n],
        ),
        E = (0, r.e7)([o.Z], () => o.Z.getGuild(t)),
        p = null != E && !E.features.has(v.oNc.COMMUNITY) && E.features.has(v.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != n && null != g && p)
        for (let t = 0; t < n.length; t++) {
            let r = n[t],
                i = l[r.id],
                o = c[r.id],
                u = null != (e = g[r.id]) && e,
                a = (0, s.M)(r, i, o, u);
            if (null != a)
                return {
                    upcomingEvent: r,
                    noticeType: a,
                };
        }
}
function P(t) {
    return (0, r.e7)(
        [a.ZP, i.Z, u.Z],
        () =>
            a.ZP.getGuildScheduledEventsByIndex(a.bN.GUILD_EVENT_ACTIVE(t)).find((t) => {
                if (t.entity_type === b.WX.NONE || !(0, a.xt)(t)) return !1;
                if (null == t.channel_id) return !0;
                let e = i.Z.getChannel(t.channel_id);
                return u.Z.can(v.Plq.VIEW_CHANNEL, e);
            }),
        [t],
    );
}
function m(t) {
    return (0, r.e7)([a.ZP], () => a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_UPCOMING(t)), [t]);
}
function j(t) {
    return (0, r.e7)([i.Z, a.ZP], () => {
        let e = a.ZP.getGuildScheduledEventsByIndex(a.bN.GUILD_EVENT_ACTIVE(t)).find(
            (t) => null != i.Z.getChannel(t.channel_id),
        );
        return i.Z.getChannel(null == e ? void 0 : e.channel_id);
    }, [t]);
}
function N(t) {
    let [e, n] = l.useState(() => Date.now());
    l.useEffect(() => {
        let t = setInterval(() => {
            n(Date.now());
        }, p);
        return () => clearInterval(t);
    }, []);
    let i = (0, r.e7)(
        [a.ZP],
        () => (null == t ? [] : a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_UPCOMING(t))),
        [t, e],
    );
    return l.useMemo(
        () =>
            i.filter((t) => {
                let { startTime: e, endTime: n } = (0, g.Kq)(t),
                    { withinStartWindow: l, diffMinutes: r } = (0, f.ub)(
                        e.toISOString(),
                        null == n ? void 0 : n.toISOString(),
                    );
                return t.status !== b.p1.ACTIVE && l && r < 15;
            }),
        [i],
    );
}
