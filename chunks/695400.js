n.d(t, { A: () => o }), n(321073);
var i = n(311907),
    r = n(73153),
    l = n(988794);
let a = { hiddenEventsAndStages: [] };
class s extends i.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (a = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && a.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && a.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return a;
    }
}
let o = new s(r.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? a.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && a.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        a.hiddenEventsAndStages.includes(n) &&
            (t.status === l.XG.CANCELED || t.status === l.XG.COMPLETED) &&
            (a.hiddenEventsAndStages = a.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        a.hiddenEventsAndStages.includes(n) &&
            (a.hiddenEventsAndStages = a.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        a.hiddenEventsAndStages.includes(n) &&
            (a.hiddenEventsAndStages = a.hiddenEventsAndStages.filter((e) => e !== n));
    },
});
