n.d(t, { Ay: () => G, BP: () => T, Qs: () => I, RO: () => S, WG: () => y, ob: () => g, r2: () => D, vj: () => C });
var l = n(582128),
    i = n(17928),
    u = n(734057),
    r = n(71393),
    E = n(576705),
    s = n(927813),
    d = n(698441),
    a = n(357801),
    c = n(11550),
    A = n(563312),
    N = n(974930),
    _ = n(988794),
    o = n(652215);
let f = [],
    h = 15 * s.A.Millis.MINUTE;
function G(e, t) {
    return (0, i.yK)([r.A, d.Ay, E.A, u.A], () => {
        let n = r.A.getGuild(e);
        return null == n
            ? f
            : d.Ay.getGuildScheduledEventsByIndex(t ?? d.ej.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
                  let t = e.channel_id;
                  if (null == t) return !0;
                  let n = u.A.getBasicChannel(t);
                  return null != n && E.A.canBasicChannel(o.hVb.VIEW_CHANNEL, n);
              });
    }, [t, e]);
}
function I(e) {
    return (0, i.bG)([d.Ay, u.A, E.A], () => {
        let t = u.A.getBasicChannel(e);
        if (null == t || !E.A.canBasicChannel(o.hVb.VIEW_CHANNEL, t) || null == t?.guild_id) return null;
        let n = d.Ay.getGuildScheduledEventsByIndex(d.ej.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null;
    }, [e]);
}
function C(e) {
    let t = (0, i.yK)([d.Ay], () => d.Ay.getGuildScheduledEventsForGuild(e), [e]);
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
function y(e) {
    let t = (0, i.yK)(
            [d.Ay, u.A, E.A],
            () =>
                d.Ay.getGuildScheduledEventsByIndex(d.ej.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === _.Ps.NONE || e.status !== _.XG.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = u.A.getBasicChannel(e.channel_id);
                    return null != t && E.A.canBasicChannel(o.hVb.VIEW_CHANNEL, t);
                }),
            [e],
        ),
        n = (0, i.cf)([c.A], () => c.A.getAllEventDismissals()),
        l = (0, i.cf)([c.A], () => c.A.getAllUpcomingNoticeSeenTimes()),
        s = (0, i.cf)(
            [d.Ay],
            () =>
                null == t
                    ? {}
                    : t.reduce((e, t) => {
                          let n = (0, N.G3)(t);
                          return { ...e, [t.id]: d.Ay.isInterestedInEventRecurrence(t.id, n) };
                      }, {}),
            [t],
        ),
        A = (0, i.bG)([r.A], () => r.A.getGuild(e)),
        f =
            null != A &&
            !A.features.has(o.GuildFeatures.COMMUNITY) &&
            A.features.has(o.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != t && null != s && f)
        for (let e = 0; e < t.length; e++) {
            let i = t[e],
                u = n[i.id],
                r = l[i.id],
                E = s[i.id] ?? !1,
                d = (0, a.F)(i, u, r, E);
            if (null != d) return { upcomingEvent: i, noticeType: d };
        }
}
function T(e) {
    return (0, i.bG)(
        [d.Ay, u.A, E.A],
        () =>
            d.Ay.getGuildScheduledEventsByIndex(d.ej.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === _.Ps.NONE || !(0, d.Fd)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = u.A.getBasicChannel(e.channel_id);
                return null != t && E.A.canBasicChannel(o.hVb.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function g(e) {
    return (0, i.bG)([d.Ay], () => d.Ay.getGuildScheduledEventsByIndex(d.ej.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function D(e) {
    return (0, i.bG)([u.A, d.Ay], () => {
        let t = d.Ay.getGuildScheduledEventsByIndex(d.ej.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != u.A.getChannel(e.channel_id),
        );
        return u.A.getChannel(t?.channel_id);
    }, [e]);
}
function S(e) {
    let [t, n] = l.useState(() => Date.now());
    l.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, h);
        return () => clearInterval(e);
    }, []);
    let u = (0, i.bG)(
        [d.Ay],
        () => (null == e ? [] : d.Ay.getGuildScheduledEventsByIndex(d.ej.CHANNEL_EVENT_UPCOMING(e))),
        [e, t],
    );
    return l.useMemo(
        () =>
            u.filter((e) => {
                let { startTime: t, endTime: n } = (0, A.YR)(e),
                    { withinStartWindow: l, diffMinutes: i } = (0, N.CC)(t.toISOString(), n?.toISOString());
                return e.status !== _.XG.ACTIVE && l && i < 15;
            }),
        [u],
    );
}
