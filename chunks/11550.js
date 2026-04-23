n.d(t, { A: () => A });
var i = n(17928),
    l = n(228366),
    s = n(495544),
    r = n(698441),
    a = n(357801),
    o = n(988794);
let d = {},
    c = {};
function u(e) {
    let t = { ...d };
    delete t[e], (d = t);
    let n = { ...c };
    delete n[e], (c = n);
}
class h extends i.Ay.PersistedStore {
    static displayName = "UpcomingEventNoticesStore";
    static persistKey = "UpcomingEventNotices";
    initialize(e) {
        this.waitFor(s.default, r.Ay),
            null != e && ((d = e.upcomingEventDismissals ?? {}), (c = e.upcomingEventSeenTimestamps ?? {}));
    }
    getGuildEventNoticeDismissalTime(e) {
        return d[e];
    }
    getAllEventDismissals() {
        return d;
    }
    getUpcomingNoticeSeenTime(e) {
        return c[e];
    }
    getAllUpcomingNoticeSeenTimes() {
        return c;
    }
    getState() {
        return { upcomingEventDismissals: d, upcomingEventSeenTimestamps: c };
    }
}
let A = new h(l.h, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
        let { eventId: t } = e,
            n = { ...d };
        (n[t] = Date.now()), (d = n);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        (t.status === o.XG.CANCELED || t.status === o.XG.COMPLETED) && u(t.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        u(t.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let { userId: t, guildEventId: n } = e;
        if (t !== s.default.getId()) return;
        let i = r.Ay.getGuildScheduledEvent(n);
        if (null == i || i.status !== o.XG.SCHEDULED || null != d[n]) return;
        let l = c[n];
        if ((0, a.F)(i, void 0, l, !1) === o.w0.NEW_EVENT) {
            let e = { ...d };
            (e[n] = Date.now()), (d = e);
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
        let { guildEventId: t } = e,
            n = { ...c };
        (n[t] = Date.now()), (c = n);
    },
});
