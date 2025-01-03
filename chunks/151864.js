n(653041);
var i,
    r = n(442837),
    l = n(570140),
    a = n(765305);
function s(e, t, n) {
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
let o = { hiddenEventsAndStages: [] };
class c extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (o = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return !!(null != n && o.hiddenEventsAndStages.includes('stage-'.concat(n))) || (null != t && o.hiddenEventsAndStages.includes('event-'.concat(t)));
    }
    getState() {
        return o;
    }
}
s(c, 'displayName', 'LiveChannelNoticesStore'),
    s(c, 'persistKey', 'liveChannelNotices_v2'),
    (t.Z = new c(l.Z, {
        LIVE_CHANNEL_NOTICE_HIDE: function (e) {
            let { eventId: t, stageId: n } = e;
            null != t ? o.hiddenEventsAndStages.push('event-'.concat(t)) : null != n && o.hiddenEventsAndStages.push('stage-'.concat(n));
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = 'event-'.concat(t.id);
            o.hiddenEventsAndStages.includes(n) && (t.status === a.p1.CANCELED || t.status === a.p1.COMPLETED) && (o.hiddenEventsAndStages = o.hiddenEventsAndStages.filter((e) => e !== n));
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: t } = e,
                n = 'event-'.concat(t.id);
            o.hiddenEventsAndStages.includes(n) && (o.hiddenEventsAndStages = o.hiddenEventsAndStages.filter((e) => e !== n));
        },
        STAGE_INSTANCE_DELETE: function (e) {
            let { instance: t } = e,
                n = 'stage-'.concat(t.id);
            o.hiddenEventsAndStages.includes(n) && (o.hiddenEventsAndStages = o.hiddenEventsAndStages.filter((e) => e !== n));
        }
    }));
