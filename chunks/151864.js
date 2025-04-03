n.d(t, { Z: () => u }), n(653041);
var r,
    i = n(442837),
    l = n(570140),
    a = n(765305);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = { hiddenEventsAndStages: [] };
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (s = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return !!(null != n && s.hiddenEventsAndStages.includes('stage-'.concat(n))) || (null != t && s.hiddenEventsAndStages.includes('event-'.concat(t)));
    }
    getState() {
        return s;
    }
}
o(c, 'displayName', 'LiveChannelNoticesStore'), o(c, 'persistKey', 'liveChannelNotices_v2');
let u = new c(l.Z, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t ? s.hiddenEventsAndStages.push('event-'.concat(t)) : null != n && s.hiddenEventsAndStages.push('stage-'.concat(n));
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = 'event-'.concat(t.id);
        s.hiddenEventsAndStages.includes(n) && (t.status === a.p1.CANCELED || t.status === a.p1.COMPLETED) && (s.hiddenEventsAndStages = s.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = 'event-'.concat(t.id);
        s.hiddenEventsAndStages.includes(n) && (s.hiddenEventsAndStages = s.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = 'stage-'.concat(t.id);
        s.hiddenEventsAndStages.includes(n) && (s.hiddenEventsAndStages = s.hiddenEventsAndStages.filter((e) => e !== n));
    }
});
