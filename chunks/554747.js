n.d(e, {
    Vm: () => f,
    ZP: () => L,
    eF: () => Z,
    gM: () => U,
    k5: () => D,
    qY: () => S,
    sz: () => G,
    u1: () => A
}),
    n(47120),
    n(724458);
var i = n(192379),
    l = n(442837),
    r = n(241155),
    a = n(592125),
    d = n(984933),
    s = n(430824),
    u = n(496675),
    o = n(70956),
    _ = n(823379),
    c = n(924301),
    E = n(658041),
    g = n(835184),
    I = n(79874),
    T = n(854698),
    p = n(765305),
    C = n(981631);
let m = [],
    N = 15 * o.Z.Millis.MINUTE;
function L(t, e) {
    return (0, l.Wu)(
        [s.Z, r.Z, c.ZP, u.Z, a.Z, d.ZP],
        () => {
            let n = s.Z.getGuild(t);
            if (null == n) return m;
            if (n.hasFeature(C.oNc.HUB)) {
                var i, l;
                let t = null === (i = d.ZP.getDefaultChannel(n.id)) || void 0 === i ? void 0 : i.id;
                return (null !== (l = r.Z.getEventDirectoryEntries(t)) && void 0 !== l ? l : [])
                    .map((t) => {
                        let e = t.scheduledEventId,
                            n = c.ZP.getGuildScheduledEvent(e);
                        return null != n ? n : r.Z.getCachedGuildScheduledEventById(e);
                    })
                    .filter(_.lm);
            }
            return c.ZP.getGuildScheduledEventsByIndex(null != e ? e : c.bN.GUILD_EVENT_UPCOMING(n.id)).filter((t) => {
                let e = t.channel_id;
                if (null == e) return !0;
                let n = a.Z.getChannel(e);
                return u.Z.can(C.Plq.VIEW_CHANNEL, n);
            });
        },
        [e, t]
    );
}
function S(t) {
    return (0, l.e7)(
        [c.ZP, a.Z, u.Z],
        () => {
            let e = a.Z.getChannel(t);
            if (!u.Z.can(C.Plq.VIEW_CHANNEL, e) || null == (null == e ? void 0 : e.guild_id)) return null;
            let n = c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_ACTIVE(t));
            return n.length > 0 ? n[0] : null;
        },
        [t]
    );
}
function U(t) {
    let e = (0, l.Wu)([c.ZP], () => c.ZP.getGuildScheduledEventsForGuild(t), [t]);
    return i.useMemo(() => {
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
function f(t) {
    var e;
    let n = (0, l.Wu)(
            [c.ZP, a.Z, u.Z],
            () =>
                c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_UPCOMING(t)).filter((t) => {
                    if (t.entity_type === p.WX.NONE || t.status !== p.p1.SCHEDULED) return !1;
                    if (null == t.channel_id) return !0;
                    let e = a.Z.getChannel(t.channel_id);
                    return u.Z.can(C.Plq.VIEW_CHANNEL, e);
                }),
            [t]
        ),
        i = (0, l.cj)([g.Z], () => g.Z.getAllEventDismissals()),
        r = (0, l.cj)([g.Z], () => g.Z.getAllUpcomingNoticeSeenTimes()),
        d = (0, l.cj)(
            [c.ZP],
            () =>
                null == n
                    ? {}
                    : n.reduce((t, e) => {
                          let n = (0, T.DK)(e);
                          return {
                              ...t,
                              [e.id]: c.ZP.isInterestedInEventRecurrence(e.id, n)
                          };
                      }, {}),
            [n]
        ),
        o = (0, l.e7)([s.Z], () => s.Z.getGuild(t)),
        _ = null != o && !o.hasFeature(C.oNc.COMMUNITY) && o.hasFeature(C.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != n && null != d && _)
        for (let t = 0; t < n.length; t++) {
            let l = n[t],
                a = i[l.id],
                s = r[l.id],
                u = null !== (e = d[l.id]) && void 0 !== e && e,
                o = (0, E.M)(l, a, s, u);
            if (null != o)
                return {
                    upcomingEvent: l,
                    noticeType: o
                };
        }
}
function D(t) {
    return (0, l.e7)(
        [c.ZP, a.Z, u.Z],
        () =>
            c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(t)).find((t) => {
                if (t.entity_type === p.WX.NONE || !(0, c.xt)(t)) return !1;
                if (null == t.channel_id) return !0;
                let e = a.Z.getChannel(t.channel_id);
                return u.Z.can(C.Plq.VIEW_CHANNEL, e);
            }),
        [t]
    );
}
function A(t) {
    return (0, l.e7)([c.ZP], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(t)), [t]);
}
function Z(t) {
    return (0, l.e7)(
        [a.Z, c.ZP],
        () => {
            let e = c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(t)).find((t) => null != a.Z.getChannel(t.channel_id));
            return a.Z.getChannel(null == e ? void 0 : e.channel_id);
        },
        [t]
    );
}
function G(t) {
    let [e, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let t = setInterval(() => {
            n(Date.now());
        }, N);
        return () => clearInterval(t);
    }, []);
    let r = (0, l.e7)([c.ZP], () => (null == t ? [] : c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(t))), [t, e]);
    return i.useMemo(
        () =>
            r.filter((t) => {
                let { startTime: e, endTime: n } = (0, I.Kq)(t),
                    { withinStartWindow: i, diffMinutes: l } = (0, T.ub)(e.toISOString(), null == n ? void 0 : n.toISOString());
                return t.status !== p.p1.ACTIVE && i && l < 15;
            }),
        [r]
    );
}
