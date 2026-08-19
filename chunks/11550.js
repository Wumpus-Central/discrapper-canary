n.d(t, { A: () => N });
var l = n(17928),
    i = n(228366),
    u = n(280450),
    r = n(698441),
    E = n(357801),
    s = n(988794);
let d = {},
    a = {};
function c(e) {
    let t = { ...d };
    delete t[e], (d = t);
    let n = { ...a };
    delete n[e], (a = n);
}
class A extends l.Ay.PersistedStore {
    static displayName = "UpcomingEventNoticesStore";
    static persistKey = "UpcomingEventNotices";
    initialize(e) {
        this.waitFor(u.default, r.Ay),
            null != e && ((d = e.upcomingEventDismissals ?? {}), (a = e.upcomingEventSeenTimestamps ?? {}));
    }
    getGuildEventNoticeDismissalTime(e) {
        return d[e];
    }
    getAllEventDismissals() {
        return d;
    }
    getUpcomingNoticeSeenTime(e) {
        return a[e];
    }
    getAllUpcomingNoticeSeenTimes() {
        return a;
    }
    getState() {
        return { upcomingEventDismissals: d, upcomingEventSeenTimestamps: a };
    }
}
let N = new A(i.h, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
        let { eventId: t } = e,
            n = { ...d };
        (n[t] = Date.now()), (d = n);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        (t.status === s.XG.CANCELED || t.status === s.XG.COMPLETED) && c(t.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        c(t.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let { userId: t, guildEventId: n } = e;
        if (t !== u.default.getId()) return;
        let l = r.Ay.getGuildScheduledEvent(n);
        if (null == l || l.status !== s.XG.SCHEDULED || null != d[n]) return;
        let i = a[n];
        if ((0, E.F)(l, void 0, i, !1) === s.w0.NEW_EVENT) {
            let e = { ...d };
            (e[n] = Date.now()), (d = e);
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
        let { guildEventId: t } = e,
            n = { ...a };
        (n[t] = Date.now()), (a = n);
    },
});
