var i = r(544891),
    a = r(570140),
    o = r(287734),
    s = r(703656),
    l = r(314897),
    u = r(709054),
    c = r(73346),
    d = r(924301),
    f = r(236373),
    p = r(124165),
    h = r(765305),
    _ = r(981631);
n.Z = {
    startEvent: (e, n) =>
        i.tn.patch({
            url: _.ANM.GUILD_EVENT(n, e),
            body: { status: h.p1.ACTIVE },
            rejectWithError: !1
        }),
    endEvent: (e, n) =>
        i.tn.patch({
            url: _.ANM.GUILD_EVENT(n, e),
            body: { status: h.p1.COMPLETED },
            rejectWithError: !1
        }),
    joinVoiceEvent(e, n) {
        o.default.selectVoiceChannel(n), (0, s.uL)(_.Z5c.CHANNEL(e, n));
    },
    saveEvent(e, n, r, a) {
        let o = h.pg.has(n.entityType) ? n.channelId : null,
            s = h._U.has(n.entityType) ? n.entityMetadata : null,
            l = null != n.image && !1 === /^data:/.test(n.image) ? void 0 : n.image,
            u = {
                name: n.name,
                description: n.description,
                image: l,
                privacy_level: n.privacyLevel,
                scheduled_start_time: n.scheduledStartTime,
                scheduled_end_time: n.scheduledEndTime,
                entity_type: n.entityType,
                channel_id: o,
                entity_metadata: s,
                broadcast_to_directory_channels: a.broadcastToDirectoryChannels,
                recurrence_rule: (0, f.J1)(n.recurrenceRule)
            };
        return i.tn.patch({
            url: _.ANM.GUILD_EVENT(r, e),
            body: u,
            rejectWithError: !1
        });
    },
    createGuildEvent(e, n, r) {
        let a = {
            name: e.name,
            description: e.description,
            image: e.image,
            privacy_level: e.privacyLevel,
            scheduled_start_time: e.scheduledStartTime,
            scheduled_end_time: e.scheduledEndTime,
            entity_type: e.entityType,
            channel_id: e.channelId,
            entity_metadata: e.entityMetadata,
            broadcast_to_directory_channels: r.broadcastToDirectoryChannels,
            recurrence_rule: (0, f.J1)(e.recurrenceRule)
        };
        return i.tn.post({
            url: _.ANM.GUILD_EVENTS_FOR_GUILD(n),
            body: a,
            rejectWithError: !1
        });
    },
    async fetchGuildEvent(e, n) {
        let { body: r } = await (0, c.Kb)({
            url: _.ANM.GUILD_EVENT(e, n),
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'FETCH_GUILD_EVENT',
                guildScheduledEvent: r
            }),
            r
        );
    },
    async fetchGuildEventsForGuild(e) {
        let n = {
                url: _.ANM.GUILD_EVENTS_FOR_GUILD(e),
                rejectWithError: !1
            },
            { body: r } = await (0, c.Kb)(n);
        return (
            a.Z.dispatch({
                type: 'FETCH_GUILD_EVENTS_FOR_GUILD',
                guildId: e,
                guildScheduledEvents: r
            }),
            r
        );
    },
    async fetchGuildEventUserCounts(e, n, r) {
        let o = {
                url: _.ANM.GUILD_EVENT_USER_COUNTS(e, n),
                query: { guild_scheduled_event_exception_ids: r },
                rejectWithError: !1
            },
            {
                body: { guild_scheduled_event_count: s, guild_scheduled_event_exception_counts: l }
            } = await i.tn.get(o),
            u = {
                eventCount: s,
                recurrenceCounts: l
            };
        return (
            a.Z.dispatch({
                type: 'GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS',
                guildId: e,
                eventId: n,
                counts: u
            }),
            u
        );
    },
    cancelGuildEvent: (e, n) =>
        i.tn.patch({
            url: _.ANM.GUILD_EVENT(n, e),
            body: { status: h.p1.CANCELED },
            rejectWithError: !1
        }),
    deleteGuildEvent: (e, n) =>
        i.tn.del({
            url: _.ANM.GUILD_EVENT(n, e),
            rejectWithError: !1
        }),
    async getGuildEventsForCurrentUser(e) {
        let { body: n } = await i.tn.get({
            url: _.ANM.USER_GUILD_EVENTS,
            query: { guild_ids: [e] },
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS',
            guildScheduledEventUsers: n,
            guildId: e
        });
    },
    async createRsvpForGuildEvent(e, n, r, o) {
        let s = l.default.getId();
        try {
            return (
                a.Z.dispatch({
                    type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
                    userId: s,
                    guildId: r,
                    guildEventId: e,
                    guildEventExceptionId: n,
                    response: o
                }),
                await i.tn.put({
                    url: _.ANM.USER_GUILD_EVENT(r, e, n),
                    body: { response: o },
                    rejectWithError: !1
                })
            );
        } catch (i) {
            throw (
                (a.Z.dispatch({
                    type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
                    userId: s,
                    guildId: r,
                    guildEventId: e,
                    guildEventExceptionId: n,
                    response: o
                }),
                i)
            );
        }
    },
    async deleteRsvpForGuildEvent(e, n, r) {
        let o = l.default.getId(),
            s = d.ZP.getRsvp(e, n, o);
        if (null != s)
            try {
                return (
                    a.Z.dispatch({
                        type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
                        userId: o,
                        guildId: r,
                        guildEventId: e,
                        guildEventExceptionId: n,
                        response: s.response
                    }),
                    await i.tn.del({
                        url: _.ANM.USER_GUILD_EVENT(r, e, n),
                        rejectWithError: !1
                    })
                );
            } catch (i) {
                throw (
                    (a.Z.dispatch({
                        type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
                        userId: o,
                        guildId: r,
                        guildEventId: e,
                        guildEventExceptionId: n,
                        response: s.response
                    }),
                    i)
                );
            }
    },
    async updateRsvp(e, n, r, i, a) {
        if (null != (0, p.X2)(e, n))
            try {
                await this.deleteRsvpForGuildEvent(e, n, r), null == a || a();
            } catch (e) {
                null == a || a(e);
            }
        else
            try {
                await this.createRsvpForGuildEvent(e, n, r, i), null == a || a();
            } catch (e) {
                null == a || a(e);
            }
    },
    async fetchUsersForGuildEvent(e, n, r) {
        let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.rC;
        if (null == e || null == r) return [];
        let s = await i.tn.get({
            url: _.ANM.GUILD_EVENT_USERS(r, e, n),
            query: {
                limit: o,
                with_member: !0,
                upgrade_response_type: !0
            },
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS',
                guildEventId: e,
                guildScheduledEventUsers: s.body,
                guildId: r,
                guildEventExceptionId: n
            }),
            s.body.users
        );
    },
    createGuildEventException(e, n, r) {
        let { original_scheduled_start_time: a, scheduled_start_time: o, scheduled_end_time: s, is_canceled: l } = e;
        return i.tn.post({
            url: _.ANM.GUILD_EVENT_EXCEPTIONS(n, r),
            body: {
                original_scheduled_start_time: a,
                scheduled_start_time: o,
                scheduled_end_time: s,
                is_canceled: l
            },
            rejectWithError: !1
        });
    },
    updateGuildEventException(e, n, r, a) {
        let { scheduled_start_time: o, scheduled_end_time: s, is_canceled: l } = e;
        return i.tn.patch({
            url: _.ANM.GUILD_EVENT_EXCEPTION(n, r, a),
            body: {
                scheduled_start_time: o,
                scheduled_end_time: s,
                is_canceled: l
            },
            rejectWithError: !1
        });
    },
    deleteGuildEventException: (e, n, r) =>
        i.tn.del({
            url: _.ANM.GUILD_EVENT_EXCEPTION(e, n, r),
            rejectWithError: !1
        }),
    deleteRecurrence(e, n, r, i) {
        if (null != i)
            this.updateGuildEventException(
                {
                    scheduled_start_time: i.scheduled_start_time,
                    scheduled_end_time: i.scheduled_end_time,
                    is_canceled: !0
                },
                e,
                n,
                r
            );
        else {
            let i = u.default.extractTimestamp(r);
            this.createGuildEventException(
                {
                    original_scheduled_start_time: new Date(i).toISOString(),
                    is_canceled: !0
                },
                e,
                n
            );
        }
    }
};
