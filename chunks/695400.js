n.d(t, { A: () => o }), n(321073);
var i = n(311907),
    a = n(73153),
    r = n(988794);
let l = { hiddenEventsAndStages: [] };
class s extends i.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (l = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && l.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && l.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return l;
    }
}
let o = new s(a.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? l.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && l.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        l.hiddenEventsAndStages.includes(n) &&
            (t.status === r.XG.CANCELED || t.status === r.XG.COMPLETED) &&
            (l.hiddenEventsAndStages = l.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        l.hiddenEventsAndStages.includes(n) &&
            (l.hiddenEventsAndStages = l.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        l.hiddenEventsAndStages.includes(n) &&
            (l.hiddenEventsAndStages = l.hiddenEventsAndStages.filter((e) => e !== n));
    },
});
