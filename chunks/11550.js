n.d(t, { A: () => A });
var i = n(311907),
    l = n(73153),
    s = n(961350),
    a = n(698441),
    r = n(357801),
    o = n(988794);
let c = {},
    d = {};
function u(e) {
    let t = { ...c };
    delete t[e], (c = t);
    let n = { ...d };
    delete n[e], (d = n);
}
class h extends i.Ay.PersistedStore {
    static displayName = "UpcomingEventNoticesStore";
    static persistKey = "UpcomingEventNotices";
    initialize(e) {
        this.waitFor(s.default, a.Ay),
            null != e && ((c = e.upcomingEventDismissals ?? {}), (d = e.upcomingEventSeenTimestamps ?? {}));
    }
    getGuildEventNoticeDismissalTime(e) {
        return c[e];
    }
    getAllEventDismissals() {
        return c;
    }
    getUpcomingNoticeSeenTime(e) {
        return d[e];
    }
    getAllUpcomingNoticeSeenTimes() {
        return d;
    }
    getState() {
        return { upcomingEventDismissals: c, upcomingEventSeenTimestamps: d };
    }
}
let A = new h(l.h, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
        let { eventId: t } = e,
            n = { ...c };
        (n[t] = Date.now()), (c = n);
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
        let i = a.Ay.getGuildScheduledEvent(n);
        if (null == i || i.status !== o.XG.SCHEDULED || null != c[n]) return;
        let l = d[n];
        if ((0, r.F)(i, void 0, l, !1) === o.w0.NEW_EVENT) {
            let e = { ...c };
            (e[n] = Date.now()), (c = e);
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
        let { guildEventId: t } = e,
            n = { ...d };
        (n[t] = Date.now()), (d = n);
    },
});
