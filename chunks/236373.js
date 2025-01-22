r.d(n, {
    Gb: function () {
        return _;
    },
    J1: function () {
        return c;
    },
    KV: function () {
        return d;
    },
    Ql: function () {
        return u;
    },
    j$: function () {
        return m;
    }
});
var i,
    a = r(314897),
    o = r(230900),
    s = r(854698),
    l = r(765305);
function u(e) {
    return !!(null == e ? void 0 : e.id);
}
function c(e) {
    var n, r;
    return null == e
        ? null
        : {
              start: e.start,
              end: e.end,
              frequency: e.frequency,
              interval: e.interval,
              by_weekday: e.byWeekday,
              by_n_weekday: e.byNWeekday,
              by_month: e.byMonth,
              by_month_day: (null !== (r = null === (n = e.byMonthDay) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0) > 0 ? e.byMonthDay : null,
              by_year_day: e.byYearDay,
              count: e.count
          };
}
function d(e) {
    return null == e
        ? null
        : {
              start: new Date(e.start).toISOString(),
              end: null != e.end ? new Date(e.end).toISOString() : null,
              frequency: e.frequency,
              interval: e.interval,
              byWeekday: e.by_weekday,
              byNWeekday: e.by_n_weekday,
              byMonth: e.by_month,
              byMonthDay: e.by_month_day,
              byYearDay: e.by_year_day,
              count: e.count
          };
}
function f(e) {
    return e.map((e) => ({
        event_exception_id: e.eventExceptionId,
        event_id: e.eventId,
        guild_id: e.guildId,
        scheduled_start_time: e.scheduledStartTime,
        scheduled_end_time: e.scheduledEndTime,
        is_canceled: e.isCanceled
    }));
}
function p(e) {
    return e.map((e) => ({
        eventExceptionId: e.event_exception_id,
        eventId: e.event_id,
        guildId: e.guild_id,
        scheduledStartTime: e.scheduled_start_time,
        scheduledEndTime: e.scheduled_end_time,
        isCanceled: e.is_canceled
    }));
}
function h(e) {
    return null != e && 'id' in e;
}
function _(e, n, r) {
    let { name: i, description: o, privacyLevel: s, channelId: u, scheduledStartTime: d, scheduledEndTime: p, entityType: h, entityMetadata: _, image: m, recurrenceRule: g, eventExceptions: E } = e;
    return {
        id: null != r ? r : l.Ku,
        name: i,
        description: null != o ? o : null,
        privacy_level: s,
        scheduled_start_time: d,
        scheduled_end_time: p,
        entity_type: h,
        entity_metadata: null != _ ? _ : null,
        image: null != m ? m : void 0,
        channel_id: u,
        guild_id: n,
        creator_id: a.default.getId(),
        status: l.p1.SCHEDULED,
        recurrence_rule: c(g),
        guild_scheduled_event_exceptions: f(E)
    };
}
function m(e, n) {
    var r, i, a, u, c, f, _;
    let m = {
        name: null !== (r = null == e ? void 0 : e.name) && void 0 !== r ? r : '',
        privacyLevel: null !== (i = null == e ? void 0 : e.privacy_level) && void 0 !== i ? i : l.j8.GUILD_ONLY,
        description: null !== (a = null == e ? void 0 : e.description) && void 0 !== a ? a : '',
        scheduledStartTime: null !== (u = null == e ? void 0 : e.scheduled_start_time) && void 0 !== u ? u : (0, s.ib)().toISOString(),
        entityType: null !== (c = null == e ? void 0 : e.entity_type) && void 0 !== c ? c : l.WX.NONE,
        entityMetadata: null !== (f = null == e ? void 0 : e.entity_metadata) && void 0 !== f ? f : void 0,
        channelId: null == e ? void 0 : e.channel_id,
        creatorId: null == e ? void 0 : e.creator_id,
        image: null == e ? void 0 : e.image,
        scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
        recurrenceRule: d(null == e ? void 0 : e.recurrence_rule),
        eventExceptions: p(null !== (_ = null == e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== _ ? _ : [])
    };
    if (h(e) && (null == e ? void 0 : e.entity_type) === l.WX.EXTERNAL) {
        let n = (0, o.cS)(e);
        null != n && (m.entityMetadata = { location: n });
    } else null == m.channelId && null != n && ((m.channelId = n.id), n.isGuildStageVoice() ? (m.entityType = l.WX.STAGE_INSTANCE) : n.isGuildVoice() && (m.entityType = l.WX.VOICE));
    return m;
}
!(function (e) {
    (e.CHANNEL_SELECTOR = 'ChannelSelector'), (e.DETAILS = 'Details'), (e.PREVIEW = 'Preview');
})(i || (i = {}));
