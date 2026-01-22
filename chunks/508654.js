n.d(t, {
    Ay: () => A,
    BP: () => v,
    Qs: () => y,
    RO: () => _,
    WG: () => j,
    ob: () => x,
    r2: () => E,
    vj: () => O,
}),
    n(896048);
var r = n(64700),
    l = n(311907),
    i = n(734057),
    a = n(71393),
    s = n(576705),
    o = n(927813),
    c = n(698441),
    u = n(357801),
    d = n(11550),
    f = n(563312),
    p = n(974930),
    h = n(988794),
    b = n(652215);
let g = [],
    m = 15 * o.A.Millis.MINUTE;
function A(e, t) {
    return (0, l.yK)([a.A, c.Ay, s.A, i.A], () => {
        let n = a.A.getGuild(e);
        return null == n
            ? g
            : c.Ay.getGuildScheduledEventsByIndex(null != t ? t : c.ej.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
                  let t = e.channel_id;
                  if (null == t) return !0;
                  let n = i.A.getChannel(t);
                  return s.A.can(b.xBc.VIEW_CHANNEL, n);
              });
    }, [t, e]);
}
function y(e) {
    return (0, l.bG)([c.Ay, i.A, s.A], () => {
        let t = i.A.getChannel(e);
        if (!s.A.can(b.xBc.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
        let n = c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null;
    }, [e]);
}
function O(e) {
    let t = (0, l.yK)([c.Ay], () => c.Ay.getGuildScheduledEventsForGuild(e), [e]);
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
function j(e) {
    var t;
    let n = (0, l.yK)(
            [c.Ay, i.A, s.A],
            () =>
                c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === h.Ps.NONE || e.status !== h.XG.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = i.A.getChannel(e.channel_id);
                    return s.A.can(b.xBc.VIEW_CHANNEL, t);
                }),
            [e],
        ),
        r = (0, l.cf)([d.A], () => d.A.getAllEventDismissals()),
        o = (0, l.cf)([d.A], () => d.A.getAllUpcomingNoticeSeenTimes()),
        f = (0, l.cf)(
            [c.Ay],
            () =>
                null == n
                    ? {}
                    : n.reduce((e, t) => {
                          var n, r;
                          let l = (0, p.G3)(t);
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
                              (r = r = { [t.id]: c.Ay.isInterestedInEventRecurrence(t.id, l) }),
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
        g = (0, l.bG)([a.A], () => a.A.getGuild(e)),
        m =
            null != g &&
            !g.features.has(b.GuildFeatures.COMMUNITY) &&
            g.features.has(b.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != n && null != f && m)
        for (let e = 0; e < n.length; e++) {
            let l = n[e],
                i = r[l.id],
                a = o[l.id],
                s = null != (t = f[l.id]) && t,
                c = (0, u.F)(l, i, a, s);
            if (null != c)
                return {
                    upcomingEvent: l,
                    noticeType: c,
                };
        }
}
function v(e) {
    return (0, l.bG)(
        [c.Ay, i.A, s.A],
        () =>
            c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === h.Ps.NONE || !(0, c.Fd)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = i.A.getChannel(e.channel_id);
                return s.A.can(b.xBc.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function x(e) {
    return (0, l.bG)([c.Ay], () => c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function E(e) {
    return (0, l.bG)([i.A, c.Ay], () => {
        let t = c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != i.A.getChannel(e.channel_id),
        );
        return i.A.getChannel(null == t ? void 0 : t.channel_id);
    }, [e]);
}
function _(e) {
    let [t, n] = r.useState(() => Date.now());
    r.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, m);
        return () => clearInterval(e);
    }, []);
    let i = (0, l.bG)(
        [c.Ay],
        () => (null == e ? [] : c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_UPCOMING(e))),
        [e, t],
    );
    return r.useMemo(
        () =>
            i.filter((e) => {
                let { startTime: t, endTime: n } = (0, f.YR)(e),
                    { withinStartWindow: r, diffMinutes: l } = (0, p.CC)(
                        t.toISOString(),
                        null == n ? void 0 : n.toISOString(),
                    );
                return e.status !== h.XG.ACTIVE && r && l < 15;
            }),
        [i],
    );
}
