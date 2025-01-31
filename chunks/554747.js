n.d(e, {
    Vm: () => N,
    ZP: () => D,
    eF: () => y,
    gM: () => L,
    k5: () => S,
    qY: () => G,
    sz: () => O,
    u1: () => f
}),
    n(47120),
    n(724458);
var i = n(192379),
    l = n(442837),
    d = n(241155),
    r = n(592125),
    a = n(984933),
    s = n(430824),
    u = n(496675),
    _ = n(70956),
    E = n(823379),
    o = n(924301),
    c = n(658041),
    I = n(835184),
    T = n(79874),
    g = n(854698),
    p = n(765305),
    m = n(981631);
let U = [],
    C = 15 * _.Z.Millis.MINUTE;
function D(t, e) {
    return (0, l.Wu)(
        [s.Z, d.Z, o.ZP, u.Z, r.Z, a.ZP],
        () => {
            let n = s.Z.getGuild(t);
            if (null == n) return U;
            if (n.hasFeature(m.oNc.HUB)) {
                var i, l;
                let t = null === (i = a.ZP.getDefaultChannel(n.id)) || void 0 === i ? void 0 : i.id;
                return (null !== (l = d.Z.getEventDirectoryEntries(t)) && void 0 !== l ? l : [])
                    .map((t) => {
                        let e = t.scheduledEventId,
                            n = o.ZP.getGuildScheduledEvent(e);
                        return null != n ? n : d.Z.getCachedGuildScheduledEventById(e);
                    })
                    .filter(E.lm);
            }
            return o.ZP.getGuildScheduledEventsByIndex(null != e ? e : o.bN.GUILD_EVENT_UPCOMING(n.id)).filter((t) => {
                let e = t.channel_id;
                if (null == e) return !0;
                let n = r.Z.getChannel(e);
                return u.Z.can(m.Plq.VIEW_CHANNEL, n);
            });
        },
        [e, t]
    );
}
function G(t) {
    return (0, l.e7)(
        [o.ZP, r.Z, u.Z],
        () => {
            let e = r.Z.getChannel(t);
            if (!u.Z.can(m.Plq.VIEW_CHANNEL, e) || null == (null == e ? void 0 : e.guild_id)) return null;
            let n = o.ZP.getGuildScheduledEventsByIndex(o.bN.CHANNEL_EVENT_ACTIVE(t));
            return n.length > 0 ? n[0] : null;
        },
        [t]
    );
}
function L(t) {
    let e = (0, l.Wu)([o.ZP], () => o.ZP.getGuildScheduledEventsForGuild(t), [t]);
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
function N(t) {
    var e;
    let n = (0, l.Wu)(
            [o.ZP, r.Z, u.Z],
            () =>
                o.ZP.getGuildScheduledEventsByIndex(o.bN.GUILD_EVENT_UPCOMING(t)).filter((t) => {
                    if (t.entity_type === p.WX.NONE || t.status !== p.p1.SCHEDULED) return !1;
                    if (null == t.channel_id) return !0;
                    let e = r.Z.getChannel(t.channel_id);
                    return u.Z.can(m.Plq.VIEW_CHANNEL, e);
                }),
            [t]
        ),
        i = (0, l.cj)([I.Z], () => I.Z.getAllEventDismissals()),
        d = (0, l.cj)([I.Z], () => I.Z.getAllUpcomingNoticeSeenTimes()),
        a = (0, l.cj)(
            [o.ZP],
            () =>
                null == n
                    ? {}
                    : n.reduce((t, e) => {
                          let n = (0, g.DK)(e);
                          return {
                              ...t,
                              [e.id]: o.ZP.isInterestedInEventRecurrence(e.id, n)
                          };
                      }, {}),
            [n]
        ),
        _ = (0, l.e7)([s.Z], () => s.Z.getGuild(t)),
        E = null != _ && !_.hasFeature(m.oNc.COMMUNITY) && _.hasFeature(m.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != n && null != a && E)
        for (let t = 0; t < n.length; t++) {
            let l = n[t],
                r = i[l.id],
                s = d[l.id],
                u = null !== (e = a[l.id]) && void 0 !== e && e,
                _ = (0, c.M)(l, r, s, u);
            if (null != _)
                return {
                    upcomingEvent: l,
                    noticeType: _
                };
        }
}
function S(t) {
    return (0, l.e7)(
        [o.ZP, r.Z, u.Z],
        () =>
            o.ZP.getGuildScheduledEventsByIndex(o.bN.GUILD_EVENT_ACTIVE(t)).find((t) => {
                if (t.entity_type === p.WX.NONE || !(0, o.xt)(t)) return !1;
                if (null == t.channel_id) return !0;
                let e = r.Z.getChannel(t.channel_id);
                return u.Z.can(m.Plq.VIEW_CHANNEL, e);
            }),
        [t]
    );
}
function f(t) {
    return (0, l.e7)([o.ZP], () => o.ZP.getGuildScheduledEventsByIndex(o.bN.CHANNEL_EVENT_UPCOMING(t)), [t]);
}
function y(t) {
    return (0, l.e7)(
        [r.Z, o.ZP],
        () => {
            let e = o.ZP.getGuildScheduledEventsByIndex(o.bN.GUILD_EVENT_ACTIVE(t)).find((t) => null != r.Z.getChannel(t.channel_id));
            return r.Z.getChannel(null == e ? void 0 : e.channel_id);
        },
        [t]
    );
}
function O(t) {
    let [e, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let t = setInterval(() => {
            n(Date.now());
        }, C);
        return () => clearInterval(t);
    }, []);
    let d = (0, l.e7)([o.ZP], () => (null == t ? [] : o.ZP.getGuildScheduledEventsByIndex(o.bN.CHANNEL_EVENT_UPCOMING(t))), [t, e]);
    return i.useMemo(
        () =>
            d.filter((t) => {
                let { startTime: e, endTime: n } = (0, T.Kq)(t),
                    { withinStartWindow: i, diffMinutes: l } = (0, g.ub)(e.toISOString(), null == n ? void 0 : n.toISOString());
                return t.status !== p.p1.ACTIVE && i && l < 15;
            }),
        [d]
    );
}
