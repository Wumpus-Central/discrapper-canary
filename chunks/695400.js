n.d(t, { A: () => o }), n(321073);
var i = n(311907),
    l = n(73153),
    a = n(988794);
let r = { hiddenEventsAndStages: [] };
class s extends i.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (r = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && r.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && r.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return r;
    }
}
let o = new s(l.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? r.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && r.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        r.hiddenEventsAndStages.includes(n) &&
            (t.status === a.XG.CANCELED || t.status === a.XG.COMPLETED) &&
            (r.hiddenEventsAndStages = r.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        r.hiddenEventsAndStages.includes(n) &&
            (r.hiddenEventsAndStages = r.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        r.hiddenEventsAndStages.includes(n) &&
            (r.hiddenEventsAndStages = r.hiddenEventsAndStages.filter((e) => e !== n));
    },
});
