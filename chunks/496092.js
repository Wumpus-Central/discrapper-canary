"use strict";
n.d(t, { A: () => h });
var r = n(562465),
    i = n(73153),
    s = n(956793),
    a = n(976860),
    o = n(961350),
    l = n(661191),
    u = n(371794),
    c = n(698441),
    d = n(794782),
    _ = n(929267),
    f = n(988794),
    p = n(652215);
let h = {
    startEvent: (e, t) =>
        r.Bo.patch({ url: p.Rsh.GUILD_EVENT(t, e), body: { status: f.XG.ACTIVE }, rejectWithError: !1 }),
    endEvent: (e, t) =>
        r.Bo.patch({ url: p.Rsh.GUILD_EVENT(t, e), body: { status: f.XG.COMPLETED }, rejectWithError: !1 }),
    joinVoiceEvent(e, t) {
        s.default.selectVoiceChannel(t), (0, a.pX)(p.BVt.CHANNEL(e, t));
    },
    saveEvent(e, t, n) {
        let i = f.GW.has(t.entityType) ? t.channelId : null,
            s = f.o_.has(t.entityType) ? t.entityMetadata : null,
            a = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
            o = {
                name: t.name,
                description: t.description,
                image: a,
                privacy_level: t.privacyLevel,
                scheduled_start_time: t.scheduledStartTime,
                scheduled_end_time: t.scheduledEndTime,
                entity_type: t.entityType,
                channel_id: i,
                entity_metadata: s,
                recurrence_rule: (0, d.RX)(t.recurrenceRule),
            };
        return r.Bo.patch({ url: p.Rsh.GUILD_EVENT(n, e), body: o, rejectWithError: !1 });
    },
    createGuildEvent(e, t) {
        let n = {
            name: e.name,
            description: e.description,
            image: e.image,
            privacy_level: e.privacyLevel,
            scheduled_start_time: e.scheduledStartTime,
            scheduled_end_time: e.scheduledEndTime,
            entity_type: e.entityType,
            channel_id: e.channelId,
            entity_metadata: e.entityMetadata,
            recurrence_rule: (0, d.RX)(e.recurrenceRule),
        };
        return r.Bo.post({ url: p.Rsh.GUILD_EVENTS_FOR_GUILD(t), body: n, rejectWithError: !1 });
    },
    async fetchGuildEvent(e, t) {
        let { body: n } = await (0, u.aP)({ url: p.Rsh.GUILD_EVENT(e, t), rejectWithError: !1 });
        return i.h.dispatch({ type: "FETCH_GUILD_EVENT", guildScheduledEvent: n }), n;
    },
    async fetchGuildEventsForGuild(e) {
        let t = { url: p.Rsh.GUILD_EVENTS_FOR_GUILD(e), rejectWithError: !1 },
            { body: n } = await (0, u.aP)(t);
        return i.h.dispatch({ type: "FETCH_GUILD_EVENTS_FOR_GUILD", guildId: e, guildScheduledEvents: n }), n;
    },
    async fetchGuildEventUserCounts(e, t, n) {
        let s = {
                url: p.Rsh.GUILD_EVENT_USER_COUNTS(e, t),
                query: { guild_scheduled_event_exception_ids: n },
                rejectWithError: !1,
            },
            {
                body: { guild_scheduled_event_count: a, guild_scheduled_event_exception_counts: o },
            } = await r.Bo.get(s),
            l = { eventCount: a, recurrenceCounts: o };
        return (
            i.h.dispatch({
                type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
                guildId: e,
                eventId: t,
                counts: l,
            }),
            l
        );
    },
    cancelGuildEvent: (e, t) =>
        r.Bo.patch({ url: p.Rsh.GUILD_EVENT(t, e), body: { status: f.XG.CANCELED }, rejectWithError: !1 }),
    deleteGuildEvent: (e, t) => r.Bo.del({ url: p.Rsh.GUILD_EVENT(t, e), rejectWithError: !1 }),
    async getGuildEventsForCurrentUser(e) {
        let { body: t } = await r.Bo.get({
            url: p.Rsh.USER_GUILD_EVENTS,
            query: { guild_ids: [e] },
            rejectWithError: !1,
        });
        i.h.dispatch({ type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS", guildScheduledEventUsers: t, guildId: e });
    },
    async createRsvpForGuildEvent(e, t, n, s) {
        let a = o.default.getId();
        try {
            return (
                i.h.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                    userId: a,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: s,
                }),
                await r.Bo.put({ url: p.Rsh.USER_GUILD_EVENT(n, e, t), body: { response: s }, rejectWithError: !1 })
            );
        } catch (r) {
            throw (
                (i.h.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                    userId: a,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: s,
                }),
                r)
            );
        }
    },
    async deleteRsvpForGuildEvent(e, t, n) {
        let s = o.default.getId(),
            a = c.Ay.getRsvp(e, t, s);
        if (null != a)
            try {
                return (
                    i.h.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                        userId: s,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: a.response,
                    }),
                    await r.Bo.del({ url: p.Rsh.USER_GUILD_EVENT(n, e, t), rejectWithError: !1 })
                );
            } catch (r) {
                throw (
                    (i.h.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                        userId: s,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: a.response,
                    }),
                    r)
                );
            }
    },
    async updateRsvp(e, t, n, r, i) {
        if (null != (0, _.TS)(e, t))
            try {
                await this.deleteRsvpForGuildEvent(e, t, n), i?.();
            } catch (e) {
                i?.(e);
            }
        else
            try {
                await this.createRsvpForGuildEvent(e, t, n, r), i?.();
            } catch (e) {
                i?.(e);
            }
    },
    async fetchUsersForGuildEvent(e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.C1;
        if (null == e || null == n) return [];
        let a = await r.Bo.get({
            url: p.Rsh.GUILD_EVENT_USERS(n, e, t),
            query: { limit: s, with_member: !0, upgrade_response_type: !0 },
            rejectWithError: !1,
        });
        return (
            i.h.dispatch({
                type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                guildEventId: e,
                guildScheduledEventUsers: a.body,
                guildId: n,
                guildEventExceptionId: t,
            }),
            a.body.users
        );
    },
    createGuildEventException(e, t, n) {
        let { original_scheduled_start_time: i, scheduled_start_time: s, scheduled_end_time: a, is_canceled: o } = e;
        return r.Bo.post({
            url: p.Rsh.GUILD_EVENT_EXCEPTIONS(t, n),
            body: { original_scheduled_start_time: i, scheduled_start_time: s, scheduled_end_time: a, is_canceled: o },
            rejectWithError: !1,
        });
    },
    updateGuildEventException(e, t, n, i) {
        let { scheduled_start_time: s, scheduled_end_time: a, is_canceled: o } = e;
        return r.Bo.patch({
            url: p.Rsh.GUILD_EVENT_EXCEPTION(t, n, i),
            body: { scheduled_start_time: s, scheduled_end_time: a, is_canceled: o },
            rejectWithError: !1,
        });
    },
    deleteGuildEventException: (e, t, n) =>
        r.Bo.del({ url: p.Rsh.GUILD_EVENT_EXCEPTION(e, t, n), rejectWithError: !1 }),
    deleteRecurrence(e, t, n, r) {
        if (null != r)
            return this.updateGuildEventException(
                {
                    scheduled_start_time: r.scheduled_start_time,
                    scheduled_end_time: r.scheduled_end_time,
                    is_canceled: !0,
                },
                e,
                t,
                n,
            );
        {
            let r = l.default.extractTimestamp(n);
            return this.createGuildEventException(
                { original_scheduled_start_time: new Date(r).toISOString(), is_canceled: !0 },
                e,
                t,
            );
        }
    },
};
