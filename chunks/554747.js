n.d(e, {
    Vm: function () {
        return f;
    },
    ZP: function () {
        return D;
    },
    eF: function () {
        return y;
    },
    gM: function () {
        return L;
    },
    k5: function () {
        return N;
    },
    qY: function () {
        return G;
    },
    sz: function () {
        return O;
    },
    u1: function () {
        return S;
    }
}),
    n(47120),
    n(724458);
var i = n(192379),
    l = n(442837),
    r = n(241155),
    d = n(592125),
    a = n(984933),
    u = n(430824),
    s = n(496675),
    o = n(70956),
    _ = n(823379),
    E = n(924301),
    c = n(658041),
    I = n(835184),
    T = n(79874),
    g = n(854698),
    p = n(765305),
    m = n(981631);
let U = [],
    C = 15 * o.Z.Millis.MINUTE;
function D(t, e) {
    return (0, l.Wu)(
        [u.Z, r.Z, E.ZP, s.Z, d.Z, a.ZP],
        () => {
            let n = u.Z.getGuild(t);
            if (null == n) return U;
            if (n.hasFeature(m.oNc.HUB)) {
                var i, l;
                let t = null === (i = a.ZP.getDefaultChannel(n.id)) || void 0 === i ? void 0 : i.id;
                return (null !== (l = r.Z.getEventDirectoryEntries(t)) && void 0 !== l ? l : [])
                    .map((t) => {
                        let e = t.scheduledEventId,
                            n = E.ZP.getGuildScheduledEvent(e);
                        return null != n ? n : r.Z.getCachedGuildScheduledEventById(e);
                    })
                    .filter(_.lm);
            }
            return E.ZP.getGuildScheduledEventsByIndex(null != e ? e : E.bN.GUILD_EVENT_UPCOMING(n.id)).filter((t) => {
                let e = t.channel_id;
                if (null == e) return !0;
                let n = d.Z.getChannel(e);
                return s.Z.can(m.Plq.VIEW_CHANNEL, n);
            });
        },
        [e, t]
    );
}
function G(t) {
    return (0, l.e7)(
        [E.ZP, d.Z, s.Z],
        () => {
            let e = d.Z.getChannel(t);
            if (!s.Z.can(m.Plq.VIEW_CHANNEL, e) || null == (null == e ? void 0 : e.guild_id)) return null;
            let n = E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_ACTIVE(t));
            return n.length > 0 ? n[0] : null;
        },
        [t]
    );
}
function L(t) {
    let e = (0, l.Wu)([E.ZP], () => E.ZP.getGuildScheduledEventsForGuild(t), [t]);
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
    var e, n;
    let i =
            ((e = t),
            (0, l.Wu)(
                [E.ZP, d.Z, s.Z],
                () =>
                    E.ZP.getGuildScheduledEventsByIndex(E.bN.GUILD_EVENT_UPCOMING(e)).filter((t) => {
                        if (t.entity_type === p.WX.NONE || t.status !== p.p1.SCHEDULED) return !1;
                        if (null == t.channel_id) return !0;
                        let e = d.Z.getChannel(t.channel_id);
                        return s.Z.can(m.Plq.VIEW_CHANNEL, e);
                    }),
                [e]
            )),
        r = (0, l.cj)([I.Z], () => I.Z.getAllEventDismissals()),
        a = (0, l.cj)([I.Z], () => I.Z.getAllUpcomingNoticeSeenTimes()),
        o = (0, l.cj)(
            [E.ZP],
            () =>
                null == i
                    ? {}
                    : i.reduce((t, e) => {
                          let n = (0, g.DK)(e);
                          return {
                              ...t,
                              [e.id]: E.ZP.isInterestedInEventRecurrence(e.id, n)
                          };
                      }, {}),
            [i]
        ),
        _ = (0, l.e7)([u.Z], () => u.Z.getGuild(t)),
        T = null != _ && !_.hasFeature(m.oNc.COMMUNITY) && _.hasFeature(m.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != i && null != o && T)
        for (let t = 0; t < i.length; t++) {
            let e = i[t],
                l = r[e.id],
                d = a[e.id],
                u = null !== (n = o[e.id]) && void 0 !== n && n,
                s = (0, c.M)(e, l, d, u);
            if (null != s)
                return {
                    upcomingEvent: e,
                    noticeType: s
                };
        }
}
function N(t) {
    return (0, l.e7)(
        [E.ZP, d.Z, s.Z],
        () =>
            E.ZP.getGuildScheduledEventsByIndex(E.bN.GUILD_EVENT_ACTIVE(t)).find((t) => {
                if (t.entity_type === p.WX.NONE || !(0, E.xt)(t)) return !1;
                if (null == t.channel_id) return !0;
                let e = d.Z.getChannel(t.channel_id);
                return s.Z.can(m.Plq.VIEW_CHANNEL, e);
            }),
        [t]
    );
}
function S(t) {
    return (0, l.e7)([E.ZP], () => E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_UPCOMING(t)), [t]);
}
function y(t) {
    return (0, l.e7)(
        [d.Z, E.ZP],
        () => {
            let e = E.ZP.getGuildScheduledEventsByIndex(E.bN.GUILD_EVENT_ACTIVE(t)).find((t) => null != d.Z.getChannel(t.channel_id));
            return d.Z.getChannel(null == e ? void 0 : e.channel_id);
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
    let r = (0, l.e7)([E.ZP], () => (null == t ? [] : E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_UPCOMING(t))), [t, e]);
    return i.useMemo(
        () =>
            r.filter((t) => {
                let { startTime: e, endTime: n } = (0, T.Kq)(t),
                    { withinStartWindow: i, diffMinutes: l } = (0, g.ub)(e.toISOString(), null == n ? void 0 : n.toISOString());
                return t.status !== p.p1.ACTIVE && i && l < 15;
            }),
        [r]
    );
}
