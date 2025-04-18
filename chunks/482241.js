n.d(t, { Z: () => h }), n(35282), n(953529);
var r = n(544891),
    i = n(570140),
    a = n(287734),
    o = n(703656),
    s = n(314897),
    l = n(709054),
    c = n(73346),
    u = n(924301),
    d = n(236373),
    f = n(124165),
    _ = n(765305),
    p = n(981631);
let h = {
    startEvent: (e, t) =>
        r.tn.patch({
            url: p.ANM.GUILD_EVENT(t, e),
            body: { status: _.p1.ACTIVE },
            rejectWithError: !1
        }),
    endEvent: (e, t) =>
        r.tn.patch({
            url: p.ANM.GUILD_EVENT(t, e),
            body: { status: _.p1.COMPLETED },
            rejectWithError: !1
        }),
    joinVoiceEvent(e, t) {
        a.default.selectVoiceChannel(t), (0, o.uL)(p.Z5c.CHANNEL(e, t));
    },
    saveEvent(e, t, n, i) {
        let a = _.pg.has(t.entityType) ? t.channelId : null,
            o = _._U.has(t.entityType) ? t.entityMetadata : null,
            s = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
            l = {
                name: t.name,
                description: t.description,
                image: s,
                privacy_level: t.privacyLevel,
                scheduled_start_time: t.scheduledStartTime,
                scheduled_end_time: t.scheduledEndTime,
                entity_type: t.entityType,
                channel_id: a,
                entity_metadata: o,
                broadcast_to_directory_channels: i.broadcastToDirectoryChannels,
                recurrence_rule: (0, d.J1)(t.recurrenceRule)
            };
        return r.tn.patch({
            url: p.ANM.GUILD_EVENT(n, e),
            body: l,
            rejectWithError: !1
        });
    },
    createGuildEvent(e, t, n) {
        let i = {
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
        return r.tn.post({
            url: p.ANM.GUILD_EVENTS_FOR_GUILD(t),
            body: i,
            rejectWithError: !1
        });
    },
    async fetchGuildEvent(e, t) {
        let { body: n } = await (0, c.Kb)({
            url: p.ANM.GUILD_EVENT(e, t),
            rejectWithError: !1
        });
        return (
            i.Z.dispatch({
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
            { body: n } = await (0, c.Kb)(t);
        return (
            i.Z.dispatch({
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
                body: { guild_scheduled_event_count: o, guild_scheduled_event_exception_counts: s }
            } = await r.tn.get(a),
            l = {
                eventCount: o,
                recurrenceCounts: s
            };
        return (
            i.Z.dispatch({
                type: 'GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS',
                guildId: e,
                eventId: t,
                counts: l
            }),
            l
        );
    },
    cancelGuildEvent: (e, t) =>
        r.tn.patch({
            url: p.ANM.GUILD_EVENT(t, e),
            body: { status: _.p1.CANCELED },
            rejectWithError: !1
        }),
    deleteGuildEvent: (e, t) =>
        r.tn.del({
            url: p.ANM.GUILD_EVENT(t, e),
            rejectWithError: !1
        }),
    async getGuildEventsForCurrentUser(e) {
        let { body: t } = await r.tn.get({
            url: p.ANM.USER_GUILD_EVENTS,
            query: { guild_ids: [e] },
            rejectWithError: !1
        });
        i.Z.dispatch({
            type: 'GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS',
            guildScheduledEventUsers: t,
            guildId: e
        });
    },
    async createRsvpForGuildEvent(e, t, n, a) {
        let o = s.default.getId();
        try {
            return (
                i.Z.dispatch({
                    type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
                    userId: o,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: a
                }),
                await r.tn.put({
                    url: p.ANM.USER_GUILD_EVENT(n, e, t),
                    body: { response: a },
                    rejectWithError: !1
                })
            );
        } catch (r) {
            throw (
                (i.Z.dispatch({
                    type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
                    userId: o,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: a
                }),
                r)
            );
        }
    },
    async deleteRsvpForGuildEvent(e, t, n) {
        let a = s.default.getId(),
            o = u.ZP.getRsvp(e, t, a);
        if (null != o)
            try {
                return (
                    i.Z.dispatch({
                        type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
                        userId: a,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: o.response
                    }),
                    await r.tn.del({
                        url: p.ANM.USER_GUILD_EVENT(n, e, t),
                        rejectWithError: !1
                    })
                );
            } catch (r) {
                throw (
                    (i.Z.dispatch({
                        type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
                        userId: a,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: o.response
                    }),
                    r)
                );
            }
    },
    async updateRsvp(e, t, n, r, i) {
        if (null != (0, f.X2)(e, t))
            try {
                await this.deleteRsvpForGuildEvent(e, t, n), null == i || i();
            } catch (e) {
                null == i || i(e);
            }
        else
            try {
                await this.createRsvpForGuildEvent(e, t, n, r), null == i || i();
            } catch (e) {
                null == i || i(e);
            }
    },
    async fetchUsersForGuildEvent(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.rC;
        if (null == e || null == n) return [];
        let o = await r.tn.get({
            url: p.ANM.GUILD_EVENT_USERS(n, e, t),
            query: {
                limit: a,
                with_member: !0,
                upgrade_response_type: !0
            },
            rejectWithError: !1
        });
        return (
            i.Z.dispatch({
                type: 'GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS',
                guildEventId: e,
                guildScheduledEventUsers: o.body,
                guildId: n,
                guildEventExceptionId: t
            }),
            o.body.users
        );
    },
    createGuildEventException(e, t, n) {
        let { original_scheduled_start_time: i, scheduled_start_time: a, scheduled_end_time: o, is_canceled: s } = e;
        return r.tn.post({
            url: p.ANM.GUILD_EVENT_EXCEPTIONS(t, n),
            body: {
                original_scheduled_start_time: i,
                scheduled_start_time: a,
                scheduled_end_time: o,
                is_canceled: s
            },
            rejectWithError: !1
        });
    },
    updateGuildEventException(e, t, n, i) {
        let { scheduled_start_time: a, scheduled_end_time: o, is_canceled: s } = e;
        return r.tn.patch({
            url: p.ANM.GUILD_EVENT_EXCEPTION(t, n, i),
            body: {
                scheduled_start_time: a,
                scheduled_end_time: o,
                is_canceled: s
            },
            rejectWithError: !1
        });
    },
    deleteGuildEventException: (e, t, n) =>
        r.tn.del({
            url: p.ANM.GUILD_EVENT_EXCEPTION(e, t, n),
            rejectWithError: !1
        }),
    deleteRecurrence(e, t, n, r) {
        if (null != r)
            this.updateGuildEventException(
                {
                    scheduled_start_time: r.scheduled_start_time,
                    scheduled_end_time: r.scheduled_end_time,
                    is_canceled: !0
                },
                e,
                t,
                n
            );
        else {
            let r = l.default.extractTimestamp(n);
            this.createGuildEventException(
                {
                    original_scheduled_start_time: new Date(r).toISOString(),
                    is_canceled: !0
                },
                e,
                t
            );
        }
    }
};
