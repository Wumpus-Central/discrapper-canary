n.d(t, { Z: () => h });
var i = n(544891),
    r = n(570140),
    a = n(287734),
    s = n(703656),
    o = n(314897),
    l = n(709054),
    u = n(73346),
    c = n(924301),
    d = n(236373),
    f = n(124165),
    _ = n(765305),
    p = n(981631);
let h = {
    startEvent: (e, t) =>
        i.tn.patch({
            url: p.ANM.GUILD_EVENT(t, e),
            body: { status: _.p1.ACTIVE },
            rejectWithError: !1
        }),
    endEvent: (e, t) =>
        i.tn.patch({
            url: p.ANM.GUILD_EVENT(t, e),
            body: { status: _.p1.COMPLETED },
            rejectWithError: !1
        }),
    joinVoiceEvent(e, t) {
        a.default.selectVoiceChannel(t), (0, s.uL)(p.Z5c.CHANNEL(e, t));
    },
    saveEvent(e, t, n, r) {
        let a = _.pg.has(t.entityType) ? t.channelId : null,
            s = _._U.has(t.entityType) ? t.entityMetadata : null,
            o = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
            l = {
                name: t.name,
                description: t.description,
                image: o,
                privacy_level: t.privacyLevel,
                scheduled_start_time: t.scheduledStartTime,
                scheduled_end_time: t.scheduledEndTime,
                entity_type: t.entityType,
                channel_id: a,
                entity_metadata: s,
                broadcast_to_directory_channels: r.broadcastToDirectoryChannels,
                recurrence_rule: (0, d.J1)(t.recurrenceRule)
            };
        return i.tn.patch({
            url: p.ANM.GUILD_EVENT(n, e),
            body: l,
            rejectWithError: !1
        });
    },
    createGuildEvent(e, t, n) {
        let r = {
            name: e.name,
            description: e.description,
            image: e.image,
            privacy_level: e.privacyLevel,
            scheduled_start_time: e.scheduledStartTime,
            scheduled_end_time: e.scheduledEndTime,
            entity_type: e.entityType,
            channel_id: e.channelId,
            entity_metadata: e.entityMetadata,
            broadcast_to_directory_channels: n.broadcastToDirectoryChannels,
            recurrence_rule: (0, d.J1)(e.recurrenceRule)
        };
        return i.tn.post({
            url: p.ANM.GUILD_EVENTS_FOR_GUILD(t),
            body: r,
            rejectWithError: !1
        });
    },
    async fetchGuildEvent(e, t) {
        let { body: n } = await (0, u.Kb)({
            url: p.ANM.GUILD_EVENT(e, t),
            rejectWithError: !1
        });
        return (
            r.Z.dispatch({
                type: 'FETCH_GUILD_EVENT',
                guildScheduledEvent: n
            }),
            n
        );
    },
    async fetchGuildEventsForGuild(e) {
        let t = {
                url: p.ANM.GUILD_EVENTS_FOR_GUILD(e),
                rejectWithError: !1
            },
            { body: n } = await (0, u.Kb)(t);
        return (
            r.Z.dispatch({
                type: 'FETCH_GUILD_EVENTS_FOR_GUILD',
                guildId: e,
                guildScheduledEvents: n
            }),
            n
        );
    },
    async fetchGuildEventUserCounts(e, t, n) {
        let a = {
                url: p.ANM.GUILD_EVENT_USER_COUNTS(e, t),
                query: { guild_scheduled_event_exception_ids: n },
                rejectWithError: !1
            },
            {
                body: { guild_scheduled_event_count: s, guild_scheduled_event_exception_counts: o }
            } = await i.tn.get(a),
            l = {
                eventCount: s,
                recurrenceCounts: o
            };
        return (
            r.Z.dispatch({
                type: 'GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS',
                guildId: e,
                eventId: t,
                counts: l
            }),
            l
        );
    },
    cancelGuildEvent: (e, t) =>
        i.tn.patch({
            url: p.ANM.GUILD_EVENT(t, e),
            body: { status: _.p1.CANCELED },
            rejectWithError: !1
        }),
    deleteGuildEvent: (e, t) =>
        i.tn.del({
            url: p.ANM.GUILD_EVENT(t, e),
            rejectWithError: !1
        }),
    async getGuildEventsForCurrentUser(e) {
        let { body: t } = await i.tn.get({
            url: p.ANM.USER_GUILD_EVENTS,
            query: { guild_ids: [e] },
            rejectWithError: !1
        });
        r.Z.dispatch({
            type: 'GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS',
            guildScheduledEventUsers: t,
            guildId: e
        });
    },
    async createRsvpForGuildEvent(e, t, n, a) {
        let s = o.default.getId();
        try {
            return (
                r.Z.dispatch({
                    type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
                    userId: s,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: a
                }),
                await i.tn.put({
                    url: p.ANM.USER_GUILD_EVENT(n, e, t),
                    body: { response: a },
                    rejectWithError: !1
                })
            );
        } catch (i) {
            throw (
                (r.Z.dispatch({
                    type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
                    userId: s,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: a
                }),
                i)
            );
        }
    },
    async deleteRsvpForGuildEvent(e, t, n) {
        let a = o.default.getId(),
            s = c.ZP.getRsvp(e, t, a);
        if (null != s)
            try {
                return (
                    r.Z.dispatch({
                        type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
                        userId: a,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: s.response
                    }),
                    await i.tn.del({
                        url: p.ANM.USER_GUILD_EVENT(n, e, t),
                        rejectWithError: !1
                    })
                );
            } catch (i) {
                throw (
                    (r.Z.dispatch({
                        type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
                        userId: a,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: s.response
                    }),
                    i)
                );
            }
    },
    async updateRsvp(e, t, n, i, r) {
        if (null != (0, f.X2)(e, t))
            try {
                await this.deleteRsvpForGuildEvent(e, t, n), null == r || r();
            } catch (e) {
                null == r || r(e);
            }
        else
            try {
                await this.createRsvpForGuildEvent(e, t, n, i), null == r || r();
            } catch (e) {
                null == r || r(e);
            }
    },
    async fetchUsersForGuildEvent(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.rC;
        if (null == e || null == n) return [];
        let s = await i.tn.get({
            url: p.ANM.GUILD_EVENT_USERS(n, e, t),
            query: {
                limit: a,
                with_member: !0,
                upgrade_response_type: !0
            },
            rejectWithError: !1
        });
        return (
            r.Z.dispatch({
                type: 'GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS',
                guildEventId: e,
                guildScheduledEventUsers: s.body,
                guildId: n,
                guildEventExceptionId: t
            }),
            s.body.users
        );
    },
    createGuildEventException(e, t, n) {
        let { original_scheduled_start_time: r, scheduled_start_time: a, scheduled_end_time: s, is_canceled: o } = e;
        return i.tn.post({
            url: p.ANM.GUILD_EVENT_EXCEPTIONS(t, n),
            body: {
                original_scheduled_start_time: r,
                scheduled_start_time: a,
                scheduled_end_time: s,
                is_canceled: o
            },
            rejectWithError: !1
        });
    },
    updateGuildEventException(e, t, n, r) {
        let { scheduled_start_time: a, scheduled_end_time: s, is_canceled: o } = e;
        return i.tn.patch({
            url: p.ANM.GUILD_EVENT_EXCEPTION(t, n, r),
            body: {
                scheduled_start_time: a,
                scheduled_end_time: s,
                is_canceled: o
            },
            rejectWithError: !1
        });
    },
    deleteGuildEventException: (e, t, n) =>
        i.tn.del({
            url: p.ANM.GUILD_EVENT_EXCEPTION(e, t, n),
            rejectWithError: !1
        }),
    deleteRecurrence(e, t, n, i) {
        if (null != i)
            this.updateGuildEventException(
                {
                    scheduled_start_time: i.scheduled_start_time,
                    scheduled_end_time: i.scheduled_end_time,
                    is_canceled: !0
                },
                e,
                t,
                n
            );
        else {
            let i = l.default.extractTimestamp(n);
            this.createGuildEventException(
                {
                    original_scheduled_start_time: new Date(i).toISOString(),
                    is_canceled: !0
                },
                e,
                t
            );
        }
    }
};
