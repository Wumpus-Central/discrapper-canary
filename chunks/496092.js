n.d(t, { default: () => I });
var i = n(636537),
    r = n(73153),
    a = n(730852),
    s = n(976860),
    l = n(280450),
    o = n(935208),
    d = n(371794),
    c = n(698441),
    u = n(955817),
    _ = n(444092),
    E = n(794782),
    A = n(929267),
    h = n(988794),
    f = n(652215);
let I = {
    startEvent: (e, t) =>
        i.Bo.patch({ url: f.Rsh.GUILD_EVENT(t, e), body: { status: h.XG.ACTIVE }, rejectWithError: (0, i.fT)() }),
    endEvent: (e, t) =>
        i.Bo.patch({ url: f.Rsh.GUILD_EVENT(t, e), body: { status: h.XG.COMPLETED }, rejectWithError: (0, i.fT)() }),
    joinVoiceEvent(e, t) {
        (a.default.selectVoiceChannel(t), (0, s.pX)(f.BVt.CHANNEL(e, t)));
    },
    saveEvent(e, t, n) {
        let r = h.GW.has(t.entityType) ? t.channelId : null,
            a = h.o_.has(t.entityType) ? t.entityMetadata : null,
            s = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
            l = {
                name: t.name,
                description: t.description,
                image: s,
                privacy_level: t.privacyLevel,
                scheduled_start_time: t.scheduledStartTime,
                scheduled_end_time: t.scheduledEndTime,
                entity_type: t.entityType,
                channel_id: r,
                entity_metadata: a,
                recurrence_rule: (0, E.RX)(t.recurrenceRule),
            };
        return i.Bo.patch({ url: f.Rsh.GUILD_EVENT(n, e), body: l, rejectWithError: (0, i.fT)() });
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
            recurrence_rule: (0, E.RX)(e.recurrenceRule),
        };
        return i.Bo.post({ url: f.Rsh.GUILD_EVENTS_FOR_GUILD(t), body: n, rejectWithError: (0, i.fT)() });
    },
    fetchGuildEvent(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        async function a() {
            let { body: n } = await (0, d.aP)({ url: f.Rsh.GUILD_EVENT(e, t), rejectWithError: (0, i.fT)() });
            return (r.h.dispatch({ type: "FETCH_GUILD_EVENT", guildScheduledEvent: n }), n);
        }
        return (0, _.bL)(
            e,
            t,
            () =>
                "foreground" === n.priority
                    ? a()
                    : (0, u.xJ)(() => {
                          let e = c.Ay.getGuildScheduledEvent(t);
                          return null != e ? Promise.resolve(e) : a();
                      }),
            n,
        );
    },
    async fetchGuildEventsForGuild(e) {
        let t = { url: f.Rsh.GUILD_EVENTS_FOR_GUILD(e), rejectWithError: (0, i.fT)() },
            { body: n } = await (0, d.aP)(t);
        return (r.h.dispatch({ type: "FETCH_GUILD_EVENTS_FOR_GUILD", guildId: e, guildScheduledEvents: n }), n);
    },
    async fetchGuildEventUserCounts(e, t, n) {
        let a = {
                url: f.Rsh.GUILD_EVENT_USER_COUNTS(e, t),
                query: { guild_scheduled_event_exception_ids: n },
                rejectWithError: (0, i.fT)(),
            },
            {
                body: { guild_scheduled_event_count: s, guild_scheduled_event_exception_counts: l },
            } = await i.Bo.get(a),
            o = { eventCount: s, recurrenceCounts: l };
        return (
            r.h.dispatch({
                type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
                guildId: e,
                eventId: t,
                counts: o,
            }),
            o
        );
    },
    cancelGuildEvent: (e, t) =>
        i.Bo.patch({ url: f.Rsh.GUILD_EVENT(t, e), body: { status: h.XG.CANCELED }, rejectWithError: (0, i.fT)() }),
    deleteGuildEvent: (e, t) => i.Bo.del({ url: f.Rsh.GUILD_EVENT(t, e), rejectWithError: (0, i.fT)() }),
    async getGuildEventsForCurrentUser(e) {
        let { body: t } = await i.Bo.get({
            url: f.Rsh.USER_GUILD_EVENTS,
            query: { guild_ids: [e] },
            rejectWithError: (0, i.fT)(),
        });
        r.h.dispatch({ type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS", guildScheduledEventUsers: t, guildId: e });
    },
    async createRsvpForGuildEvent(e, t, n, a) {
        let s = l.default.getId();
        try {
            return (
                r.h.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                    userId: s,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: a,
                }),
                await i.Bo.put({
                    url: f.Rsh.USER_GUILD_EVENT(n, e, t),
                    body: { response: a },
                    rejectWithError: (0, i.fT)(),
                })
            );
        } catch (i) {
            throw (
                r.h.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                    userId: s,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: a,
                }),
                i
            );
        }
    },
    async deleteRsvpForGuildEvent(e, t, n) {
        let a = l.default.getId(),
            s = c.Ay.getRsvp(e, t, a);
        if (null != s)
            try {
                return (
                    r.h.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                        userId: a,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: s.response,
                    }),
                    await i.Bo.del({ url: f.Rsh.USER_GUILD_EVENT(n, e, t), rejectWithError: (0, i.fT)() })
                );
            } catch (i) {
                throw (
                    r.h.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                        userId: a,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: s.response,
                    }),
                    i
                );
            }
    },
    async updateRsvp(e, t, n, i, r) {
        if (null != (0, A.TS)(e, t))
            try {
                (await this.deleteRsvpForGuildEvent(e, t, n), r?.());
            } catch (e) {
                r?.(e);
            }
        else
            try {
                (await this.createRsvpForGuildEvent(e, t, n, i), r?.());
            } catch (e) {
                r?.(e);
            }
    },
    async fetchUsersForGuildEvent(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.C1;
        if (null == e || null == n) return [];
        let s = await i.Bo.get({
            url: f.Rsh.GUILD_EVENT_USERS(n, e, t),
            query: { limit: a, with_member: !0 },
            rejectWithError: (0, i.fT)(),
        });
        return (
            r.h.dispatch({
                type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                guildEventId: e,
                guildScheduledEventUsers: s.body,
                guildId: n,
                guildEventExceptionId: t,
            }),
            s.body.users
        );
    },
    createGuildEventException(e, t, n) {
        let { original_scheduled_start_time: r, scheduled_start_time: a, scheduled_end_time: s, is_canceled: l } = e;
        return i.Bo.post({
            url: f.Rsh.GUILD_EVENT_EXCEPTIONS(t, n),
            body: { original_scheduled_start_time: r, scheduled_start_time: a, scheduled_end_time: s, is_canceled: l },
            rejectWithError: (0, i.fT)(),
        });
    },
    updateGuildEventException(e, t, n, r) {
        let { scheduled_start_time: a, scheduled_end_time: s, is_canceled: l } = e;
        return i.Bo.patch({
            url: f.Rsh.GUILD_EVENT_EXCEPTION(t, n, r),
            body: { scheduled_start_time: a, scheduled_end_time: s, is_canceled: l },
            rejectWithError: (0, i.fT)(),
        });
    },
    deleteGuildEventException: (e, t, n) =>
        i.Bo.del({ url: f.Rsh.GUILD_EVENT_EXCEPTION(e, t, n), rejectWithError: (0, i.fT)() }),
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
            let i = o.default.extractTimestamp(n);
            return this.createGuildEventException(
                { original_scheduled_start_time: new Date(i).toISOString(), is_canceled: !0 },
                e,
                t,
            );
        }
    },
};
