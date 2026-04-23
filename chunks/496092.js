"use strict";
n.d(t, { A: () => m });
var i = n(636537),
    r = n(228366),
    s = n(956793),
    a = n(976860),
    o = n(495544),
    l = n(935208),
    d = n(371794),
    _ = n(698441),
    u = n(794782),
    c = n(929267),
    E = n(988794),
    h = n(652215);
let m = {
    startEvent: (e, t) =>
        i.Bo.patch({ url: h.Rsh.GUILD_EVENT(t, e), body: { status: E.XG.ACTIVE }, rejectWithError: !1 }),
    endEvent: (e, t) =>
        i.Bo.patch({ url: h.Rsh.GUILD_EVENT(t, e), body: { status: E.XG.COMPLETED }, rejectWithError: !1 }),
    joinVoiceEvent(e, t) {
        s.default.selectVoiceChannel(t), (0, a.pX)(h.BVt.CHANNEL(e, t));
    },
    saveEvent(e, t, n) {
        let r = E.GW.has(t.entityType) ? t.channelId : null,
            s = E.o_.has(t.entityType) ? t.entityMetadata : null,
            a = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
            o = {
                name: t.name,
                description: t.description,
                image: a,
                privacy_level: t.privacyLevel,
                scheduled_start_time: t.scheduledStartTime,
                scheduled_end_time: t.scheduledEndTime,
                entity_type: t.entityType,
                channel_id: r,
                entity_metadata: s,
                recurrence_rule: (0, u.RX)(t.recurrenceRule),
            };
        return i.Bo.patch({ url: h.Rsh.GUILD_EVENT(n, e), body: o, rejectWithError: !1 });
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
            recurrence_rule: (0, u.RX)(e.recurrenceRule),
        };
        return i.Bo.post({ url: h.Rsh.GUILD_EVENTS_FOR_GUILD(t), body: n, rejectWithError: !1 });
    },
    async fetchGuildEvent(e, t) {
        let { body: n } = await (0, d.aP)({ url: h.Rsh.GUILD_EVENT(e, t), rejectWithError: !1 });
        return r.h.dispatch({ type: "FETCH_GUILD_EVENT", guildScheduledEvent: n }), n;
    },
    async fetchGuildEventsForGuild(e) {
        let t = { url: h.Rsh.GUILD_EVENTS_FOR_GUILD(e), rejectWithError: !1 },
            { body: n } = await (0, d.aP)(t);
        return r.h.dispatch({ type: "FETCH_GUILD_EVENTS_FOR_GUILD", guildId: e, guildScheduledEvents: n }), n;
    },
    async fetchGuildEventUserCounts(e, t, n) {
        let s = {
                url: h.Rsh.GUILD_EVENT_USER_COUNTS(e, t),
                query: { guild_scheduled_event_exception_ids: n },
                rejectWithError: !1,
            },
            {
                body: { guild_scheduled_event_count: a, guild_scheduled_event_exception_counts: o },
            } = await i.Bo.get(s),
            l = { eventCount: a, recurrenceCounts: o };
        return (
            r.h.dispatch({
                type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
                guildId: e,
                eventId: t,
                counts: l,
            }),
            l
        );
    },
    cancelGuildEvent: (e, t) =>
        i.Bo.patch({ url: h.Rsh.GUILD_EVENT(t, e), body: { status: E.XG.CANCELED }, rejectWithError: !1 }),
    deleteGuildEvent: (e, t) => i.Bo.del({ url: h.Rsh.GUILD_EVENT(t, e), rejectWithError: !1 }),
    async getGuildEventsForCurrentUser(e) {
        let { body: t } = await i.Bo.get({
            url: h.Rsh.USER_GUILD_EVENTS,
            query: { guild_ids: [e] },
            rejectWithError: !1,
        });
        r.h.dispatch({ type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS", guildScheduledEventUsers: t, guildId: e });
    },
    async createRsvpForGuildEvent(e, t, n, s) {
        let a = o.default.getId();
        try {
            return (
                r.h.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                    userId: a,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: s,
                }),
                await i.Bo.put({ url: h.Rsh.USER_GUILD_EVENT(n, e, t), body: { response: s }, rejectWithError: !1 })
            );
        } catch (i) {
            throw (
                (r.h.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                    userId: a,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: s,
                }),
                i)
            );
        }
    },
    async deleteRsvpForGuildEvent(e, t, n) {
        let s = o.default.getId(),
            a = _.Ay.getRsvp(e, t, s);
        if (null != a)
            try {
                return (
                    r.h.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                        userId: s,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: a.response,
                    }),
                    await i.Bo.del({ url: h.Rsh.USER_GUILD_EVENT(n, e, t), rejectWithError: !1 })
                );
            } catch (i) {
                throw (
                    (r.h.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                        userId: s,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: a.response,
                    }),
                    i)
                );
            }
    },
    async updateRsvp(e, t, n, i, r) {
        if (null != (0, c.TS)(e, t))
            try {
                await this.deleteRsvpForGuildEvent(e, t, n), r?.();
            } catch (e) {
                r?.(e);
            }
        else
            try {
                await this.createRsvpForGuildEvent(e, t, n, i), r?.();
            } catch (e) {
                r?.(e);
            }
    },
    async fetchUsersForGuildEvent(e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.C1;
        if (null == e || null == n) return [];
        let a = await i.Bo.get({
            url: h.Rsh.GUILD_EVENT_USERS(n, e, t),
            query: { limit: s, with_member: !0, upgrade_response_type: !0 },
            rejectWithError: !1,
        });
        return (
            r.h.dispatch({
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
        let { original_scheduled_start_time: r, scheduled_start_time: s, scheduled_end_time: a, is_canceled: o } = e;
        return i.Bo.post({
            url: h.Rsh.GUILD_EVENT_EXCEPTIONS(t, n),
            body: { original_scheduled_start_time: r, scheduled_start_time: s, scheduled_end_time: a, is_canceled: o },
            rejectWithError: !1,
        });
    },
    updateGuildEventException(e, t, n, r) {
        let { scheduled_start_time: s, scheduled_end_time: a, is_canceled: o } = e;
        return i.Bo.patch({
            url: h.Rsh.GUILD_EVENT_EXCEPTION(t, n, r),
            body: { scheduled_start_time: s, scheduled_end_time: a, is_canceled: o },
            rejectWithError: !1,
        });
    },
    deleteGuildEventException: (e, t, n) =>
        i.Bo.del({ url: h.Rsh.GUILD_EVENT_EXCEPTION(e, t, n), rejectWithError: !1 }),
    deleteRecurrence(e, t, n, i) {
        if (null != i)
            return this.updateGuildEventException(
                {
                    scheduled_start_time: i.scheduled_start_time,
                    scheduled_end_time: i.scheduled_end_time,
                    is_canceled: !0,
                },
                e,
                t,
                n,
            );
        {
            let i = l.default.extractTimestamp(n);
            return this.createGuildEventException(
                { original_scheduled_start_time: new Date(i).toISOString(), is_canceled: !0 },
                e,
                t,
            );
        }
    },
};
