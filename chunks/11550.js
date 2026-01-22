n.d(t, { A: () => g });
var r,
    l = n(311907),
    i = n(73153),
    a = n(961350),
    s = n(698441),
    o = n(357801),
    c = n(988794);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = {},
    p = {};
function h(e) {
    let t = d({}, f);
    delete t[e], (f = t);
    let n = d({}, p);
    delete n[e], (p = n);
}
class b extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(a.default, s.Ay), null != e)) {
            var t, n;
            (f = null != (t = e.upcomingEventDismissals) ? t : {}),
                (p = null != (n = e.upcomingEventSeenTimestamps) ? n : {});
        }
    }
    getGuildEventNoticeDismissalTime(e) {
        return f[e];
    }
    getAllEventDismissals() {
        return f;
    }
    getUpcomingNoticeSeenTime(e) {
        return p[e];
    }
    getAllUpcomingNoticeSeenTimes() {
        return p;
    }
    getState() {
        return {
            upcomingEventDismissals: f,
            upcomingEventSeenTimestamps: p,
        };
    }
}
u(b, "displayName", "UpcomingEventNoticesStore"), u(b, "persistKey", "UpcomingEventNotices");
let g = new b(i.h, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
        let { eventId: t } = e,
            n = d({}, f);
        (n[t] = Date.now()), (f = n);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        (t.status === c.XG.CANCELED || t.status === c.XG.COMPLETED) && h(t.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        h(t.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let { userId: t, guildEventId: n } = e;
        if (t !== a.default.getId()) return;
        let r = s.Ay.getGuildScheduledEvent(n);
        if (null == r || r.status !== c.XG.SCHEDULED || null != f[n]) return;
        let l = p[n];
        if ((0, o.F)(r, void 0, l, !1) === c.w0.NEW_EVENT) {
            let e = d({}, f);
            (e[n] = Date.now()), (f = e);
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
        let { guildEventId: t } = e,
            n = d({}, p);
        (n[t] = Date.now()), (p = n);
    },
});
