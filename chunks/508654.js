n.d(t, { Ay: () => f, BP: () => h, Qs: () => y, RO: () => U, WG: () => g, ob: () => D, r2: () => T, vj: () => C });
var l = n(64700),
    i = n(17928),
    u = n(734057),
    r = n(71393),
    E = n(576705),
    d = n(927813),
    s = n(698441),
    A = n(357801),
    c = n(11550),
    a = n(563312),
    N = n(974930),
    _ = n(988794),
    o = n(652215);
let G = [],
    I = 15 * d.A.Millis.MINUTE;
function f(e, t) {
    return (0, i.yK)([r.A, s.Ay, E.A, u.A], () => {
        let n = r.A.getGuild(e);
        return null == n
            ? G
            : s.Ay.getGuildScheduledEventsByIndex(t ?? s.ej.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
                  let t = e.channel_id;
                  if (null == t) return !0;
                  let n = u.A.getChannel(t);
                  return E.A.can(o.xBc.VIEW_CHANNEL, n);
              });
    }, [t, e]);
}
function y(e) {
    return (0, i.bG)([s.Ay, u.A, E.A], () => {
        let t = u.A.getChannel(e);
        if (!E.A.can(o.xBc.VIEW_CHANNEL, t) || null == t?.guild_id) return null;
        let n = s.Ay.getGuildScheduledEventsByIndex(s.ej.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null;
    }, [e]);
}
function C(e) {
    let t = (0, i.yK)([s.Ay], () => s.Ay.getGuildScheduledEventsForGuild(e), [e]);
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
function g(e) {
    let t = (0, i.yK)(
            [s.Ay, u.A, E.A],
            () =>
                s.Ay.getGuildScheduledEventsByIndex(s.ej.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === _.Ps.NONE || e.status !== _.XG.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = u.A.getChannel(e.channel_id);
                    return E.A.can(o.xBc.VIEW_CHANNEL, t);
                }),
            [e],
        ),
        n = (0, i.cf)([c.A], () => c.A.getAllEventDismissals()),
        l = (0, i.cf)([c.A], () => c.A.getAllUpcomingNoticeSeenTimes()),
        d = (0, i.cf)(
            [s.Ay],
            () =>
                null == t
                    ? {}
                    : t.reduce((e, t) => {
                          let n = (0, N.G3)(t);
                          return { ...e, [t.id]: s.Ay.isInterestedInEventRecurrence(t.id, n) };
                      }, {}),
            [t],
        ),
        a = (0, i.bG)([r.A], () => r.A.getGuild(e)),
        G =
            null != a &&
            !a.features.has(o.GuildFeatures.COMMUNITY) &&
            a.features.has(o.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != t && null != d && G)
        for (let e = 0; e < t.length; e++) {
            let i = t[e],
                u = n[i.id],
                r = l[i.id],
                E = d[i.id] ?? !1,
                s = (0, A.F)(i, u, r, E);
            if (null != s) return { upcomingEvent: i, noticeType: s };
        }
}
function h(e) {
    return (0, i.bG)(
        [s.Ay, u.A, E.A],
        () =>
            s.Ay.getGuildScheduledEventsByIndex(s.ej.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === _.Ps.NONE || !(0, s.Fd)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = u.A.getChannel(e.channel_id);
                return E.A.can(o.xBc.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function D(e) {
    return (0, i.bG)([s.Ay], () => s.Ay.getGuildScheduledEventsByIndex(s.ej.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function T(e) {
    return (0, i.bG)([u.A, s.Ay], () => {
        let t = s.Ay.getGuildScheduledEventsByIndex(s.ej.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != u.A.getChannel(e.channel_id),
        );
        return u.A.getChannel(t?.channel_id);
    }, [e]);
}
function U(e) {
    let [t, n] = l.useState(() => Date.now());
    l.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, I);
        return () => clearInterval(e);
    }, []);
    let u = (0, i.bG)(
        [s.Ay],
        () => (null == e ? [] : s.Ay.getGuildScheduledEventsByIndex(s.ej.CHANNEL_EVENT_UPCOMING(e))),
        [e, t],
    );
    return l.useMemo(
        () =>
            u.filter((e) => {
                let { startTime: t, endTime: n } = (0, a.YR)(e),
                    { withinStartWindow: l, diffMinutes: i } = (0, N.CC)(t.toISOString(), n?.toISOString());
                return e.status !== _.XG.ACTIVE && l && i < 15;
            }),
        [u],
    );
}
