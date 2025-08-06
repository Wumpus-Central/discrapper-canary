n.d(t, {
    Vm: () => R,
    ZP: () => S,
    eF: () => D,
    gM: () => N,
    k5: () => P,
    qY: () => A,
    sz: () => L,
    u1: () => w,
}),
    n(388685);
var r = n(73800),
    i = n(442837),
    o = n(241155),
    a = n(592125),
    s = n(984933),
    l = n(430824),
    c = n(496675),
    u = n(70956),
    d = n(823379),
    f = n(924301),
    _ = n(658041),
    p = n(835184),
    h = n(79874),
    m = n(854698),
    g = n(765305),
    E = n(981631);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = [],
    T = 15 * u.Z.Millis.MINUTE;
function S(e, t) {
    return (0, i.Wu)([l.Z, o.Z, f.ZP, c.Z, a.Z, s.ZP], () => {
        let n = l.Z.getGuild(e);
        if (null == n) return I;
        if (n.features.has(E.oNc.HUB)) {
            var r, i;
            let e = null == (r = s.ZP.getDefaultChannel(n.id)) ? void 0 : r.id;
            return (null != (i = o.Z.getEventDirectoryEntries(e)) ? i : [])
                .map((e) => {
                    let t = e.scheduledEventId,
                        n = f.ZP.getGuildScheduledEvent(t);
                    return null != n ? n : o.Z.getCachedGuildScheduledEventById(t);
                })
                .filter(d.lm);
        }
        return f.ZP.getGuildScheduledEventsByIndex(null != t ? t : f.bN.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
            let t = e.channel_id;
            if (null == t) return !0;
            let n = a.Z.getChannel(t);
            return c.Z.can(E.Plq.VIEW_CHANNEL, n);
        });
    }, [t, e]);
}
function A(e) {
    return (0, i.e7)([f.ZP, a.Z, c.Z], () => {
        let t = a.Z.getChannel(e);
        if (!c.Z.can(E.Plq.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
        let n = f.ZP.getGuildScheduledEventsByIndex(f.bN.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null;
    }, [e]);
}
function N(e) {
    let t = (0, i.Wu)([f.ZP], () => f.ZP.getGuildScheduledEventsForGuild(e), [e]);
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
function C(e) {
    return (0, i.Wu)(
        [f.ZP, a.Z, c.Z],
        () =>
            f.ZP.getGuildScheduledEventsByIndex(f.bN.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                if (e.entity_type === g.WX.NONE || e.status !== g.p1.SCHEDULED) return !1;
                if (null == e.channel_id) return !0;
                let t = a.Z.getChannel(e.channel_id);
                return c.Z.can(E.Plq.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function R(e) {
    let t = C(e),
        n = (0, i.cj)([p.Z], () => p.Z.getAllEventDismissals()),
        r = (0, i.cj)([p.Z], () => p.Z.getAllUpcomingNoticeSeenTimes()),
        o = (0, i.cj)(
            [f.ZP],
            () =>
                null == t
                    ? {}
                    : t.reduce((e, t) => {
                          let n = (0, m.DK)(t);
                          return v(y({}, e), { [t.id]: f.ZP.isInterestedInEventRecurrence(t.id, n) });
                      }, {}),
            [t],
        ),
        a = (0, i.e7)([l.Z], () => l.Z.getGuild(e)),
        s = null != a && !a.features.has(E.oNc.COMMUNITY) && a.features.has(E.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != t && null != o && s)
        for (let e = 0; e < t.length; e++) {
            var c;
            let i = t[e],
                a = n[i.id],
                s = r[i.id],
                l = null != (c = o[i.id]) && c,
                u = (0, _.M)(i, a, s, l);
            if (null != u)
                return {
                    upcomingEvent: i,
                    noticeType: u,
                };
        }
}
function P(e) {
    return (0, i.e7)(
        [f.ZP, a.Z, c.Z],
        () =>
            f.ZP.getGuildScheduledEventsByIndex(f.bN.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === g.WX.NONE || !(0, f.xt)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = a.Z.getChannel(e.channel_id);
                return c.Z.can(E.Plq.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function w(e) {
    return (0, i.e7)([f.ZP], () => f.ZP.getGuildScheduledEventsByIndex(f.bN.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function D(e) {
    return (0, i.e7)([a.Z, f.ZP], () => {
        let t = f.ZP.getGuildScheduledEventsByIndex(f.bN.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != a.Z.getChannel(e.channel_id),
        );
        return a.Z.getChannel(null == t ? void 0 : t.channel_id);
    }, [e]);
}
function L(e) {
    let [t, n] = r.useState(() => Date.now());
    r.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, T);
        return () => clearInterval(e);
    }, []);
    let o = (0, i.e7)(
        [f.ZP],
        () => (null == e ? [] : f.ZP.getGuildScheduledEventsByIndex(f.bN.CHANNEL_EVENT_UPCOMING(e))),
        [e, t],
    );
    return r.useMemo(
        () =>
            o.filter((e) => {
                let { startTime: t, endTime: n } = (0, h.Kq)(e),
                    { withinStartWindow: r, diffMinutes: i } = (0, m.ub)(
                        t.toISOString(),
                        null == n ? void 0 : n.toISOString(),
                    );
                return e.status !== g.p1.ACTIVE && r && i < 15;
            }),
        [o],
    );
}
