n.d(t, { Ay: () => f, BP: () => I, Qs: () => E, RO: () => N, WG: () => x, ob: () => b, r2: () => S, vj: () => C });
var i = n(64700),
    l = n(17928),
    s = n(734057),
    r = n(71393),
    a = n(576705),
    o = n(927813),
    d = n(698441),
    c = n(357801),
    u = n(11550),
    h = n(563312),
    A = n(974930),
    _ = n(988794),
    g = n(652215);
let m = [],
    p = 15 * o.A.Millis.MINUTE;
function f(e, t) {
    return (0, l.yK)([r.A, d.Ay, a.A, s.A], () => {
        let n = r.A.getGuild(e);
        return null == n
            ? m
            : d.Ay.getGuildScheduledEventsByIndex(t ?? d.ej.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
                  let t = e.channel_id;
                  if (null == t) return !0;
                  let n = s.A.getChannel(t);
                  return a.A.can(g.xBc.VIEW_CHANNEL, n);
              });
    }, [t, e]);
}
function E(e) {
    return (0, l.bG)([d.Ay, s.A, a.A], () => {
        let t = s.A.getChannel(e);
        if (!a.A.can(g.xBc.VIEW_CHANNEL, t) || null == t?.guild_id) return null;
        let n = d.Ay.getGuildScheduledEventsByIndex(d.ej.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null;
    }, [e]);
}
function C(e) {
    let t = (0, l.yK)([d.Ay], () => d.Ay.getGuildScheduledEventsForGuild(e), [e]);
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
function x(e) {
    let t = (0, l.yK)(
            [d.Ay, s.A, a.A],
            () =>
                d.Ay.getGuildScheduledEventsByIndex(d.ej.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === _.Ps.NONE || e.status !== _.XG.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = s.A.getChannel(e.channel_id);
                    return a.A.can(g.xBc.VIEW_CHANNEL, t);
                }),
            [e],
        ),
        n = (0, l.cf)([u.A], () => u.A.getAllEventDismissals()),
        i = (0, l.cf)([u.A], () => u.A.getAllUpcomingNoticeSeenTimes()),
        o = (0, l.cf)(
            [d.Ay],
            () =>
                null == t
                    ? {}
                    : t.reduce((e, t) => {
                          let n = (0, A.G3)(t);
                          return { ...e, [t.id]: d.Ay.isInterestedInEventRecurrence(t.id, n) };
                      }, {}),
            [t],
        ),
        h = (0, l.bG)([r.A], () => r.A.getGuild(e)),
        m =
            null != h &&
            !h.features.has(g.GuildFeatures.COMMUNITY) &&
            h.features.has(g.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != t && null != o && m)
        for (let e = 0; e < t.length; e++) {
            let l = t[e],
                s = n[l.id],
                r = i[l.id],
                a = o[l.id] ?? !1,
                d = (0, c.F)(l, s, r, a);
            if (null != d) return { upcomingEvent: l, noticeType: d };
        }
}
function I(e) {
    return (0, l.bG)(
        [d.Ay, s.A, a.A],
        () =>
            d.Ay.getGuildScheduledEventsByIndex(d.ej.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === _.Ps.NONE || !(0, d.Fd)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = s.A.getChannel(e.channel_id);
                return a.A.can(g.xBc.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function b(e) {
    return (0, l.bG)([d.Ay], () => d.Ay.getGuildScheduledEventsByIndex(d.ej.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function S(e) {
    return (0, l.bG)([s.A, d.Ay], () => {
        let t = d.Ay.getGuildScheduledEventsByIndex(d.ej.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != s.A.getChannel(e.channel_id),
        );
        return s.A.getChannel(t?.channel_id);
    }, [e]);
}
function N(e) {
    let [t, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, p);
        return () => clearInterval(e);
    }, []);
    let s = (0, l.bG)(
        [d.Ay],
        () => (null == e ? [] : d.Ay.getGuildScheduledEventsByIndex(d.ej.CHANNEL_EVENT_UPCOMING(e))),
        [e, t],
    );
    return i.useMemo(
        () =>
            s.filter((e) => {
                let { startTime: t, endTime: n } = (0, h.YR)(e),
                    { withinStartWindow: i, diffMinutes: l } = (0, A.CC)(t.toISOString(), n?.toISOString());
                return e.status !== _.XG.ACTIVE && i && l < 15;
            }),
        [s],
    );
}
