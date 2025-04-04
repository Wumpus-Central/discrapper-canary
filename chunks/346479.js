n.d(t, { Z: () => S }), n(789020);
var r = n(697988),
    i = n(544891),
    o = n(570140),
    a = n(668781),
    s = n(430742),
    l = n(367907),
    c = n(555573),
    u = n(131704),
    d = n(314897),
    f = n(592125),
    _ = n(496675),
    p = n(823379),
    h = n(920303),
    m = n(569471),
    g = n(91159),
    E = n(952537),
    b = n(981631),
    y = n(176505),
    v = n(388032);
function O(e, t) {
    return i.tn
        .patch({
            url: b.ANM.CHANNEL(e.id),
            body: t,
            rejectWithError: !1
        })
        .then(
            (t) => (
                o.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: (0, u.q_)(t.body)
                }),
                e.isForumPost() &&
                    null != e.parent_id &&
                    o.Z.dispatch({
                        type: 'RESORT_THREADS',
                        channelId: e.parent_id
                    }),
                t
            )
        );
}
function I(e, t) {
    o.Z.dispatch({
        type: 'THREAD_MEMBER_LOCAL_UPDATE',
        id: e.id,
        guildId: e.getGuildId(),
        userId: d.default.getId(),
        isJoining: t
    });
}
let S = {
    archiveThread(e, t) {
        let n = { archived: !0 };
        return t && (n.locked = !0), O(e, n);
    },
    async lockThread(e) {
        let t = e.isArchivedThread();
        return (
            t && (await this.unarchiveThread(e, !1)),
            O(e, {
                locked: !0,
                archived: t
            })
        );
    },
    async unlockThread(e) {
        let t = e.isArchivedThread();
        return (
            t && (await this.unarchiveThread(e, !0)),
            O(e, {
                locked: !1,
                archived: t
            })
        );
    },
    async unarchiveThread(e, t) {
        let n = { archived: !1 },
            r = e.isForumPost();
        t && (n.locked = !1);
        try {
            return await O(e, n);
        } catch (e) {
            var i, o;
            throw (
                ((null == (i = e.body) ? void 0 : i.code) === b.evJ.TOO_MANY_THREADS
                    ? a.Z.show({
                          title: r ? v.NW.string(v.t.kwyWNT) : v.NW.string(v.t['PeIE/v']),
                          body: r ? v.NW.string(v.t.KGaiEB) : v.NW.string(v.t.P0wT5e)
                      })
                    : (null == (o = e.body) ? void 0 : o.code) === b.evJ.TOO_MANY_ANNOUNCEMENT_THREADS
                      ? a.Z.show({
                            title: v.NW.string(v.t['PeIE/v']),
                            body: v.NW.string(v.t.jDMxz8)
                        })
                      : 429 === e.status
                        ? a.Z.show({
                              title: r ? v.NW.string(v.t.kwyWNT) : v.NW.string(v.t['PeIE/v']),
                              body: v.NW.string(v.t['Whhv4+'])
                          })
                        : a.Z.show({
                              title: v.NW.string(v.t.j2d6Ki),
                              body: v.NW.string(v.t.fEptJC)
                          }),
                e)
            );
        }
    },
    async unarchiveThreadIfNecessary(e) {
        var t;
        let n = f.Z.getChannel(e),
            r = _.Z.can(b.Plq.MANAGE_THREADS, n);
        null != n && n.isArchivedThread() && (r || (null == (t = n.threadMetadata) ? void 0 : t.locked) !== !0) && (await this.unarchiveThread(n, !1));
    },
    setInvitable: (e, t) => O(e, { invitable: t }),
    async joinThread(e, t) {
        e.isForumPost() && I(e, !0);
        try {
            return await i.tn.post({
                url: b.ANM.THREAD_MEMBER(e.id),
                query: { location: t },
                rejectWithError: !1
            });
        } catch (t) {
            var n;
            if ((null == (n = t.body) ? void 0 : n.code) === b.evJ.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                a.Z.show({
                    title: t ? v.NW.string(v.t.EMYJFh) : v.NW.string(v.t.gtdVcn),
                    body: t ? v.NW.string(v.t.QYyad3) : v.NW.string(v.t.abMwgo)
                });
            } else
                a.Z.show({
                    title: v.NW.string(v.t.j2d6Ki),
                    body: v.NW.string(v.t.fEptJC)
                });
            e.isForumPost() && I(e, !1);
        }
    },
    async addMember(e, t, n) {
        try {
            return await i.tn.post({
                url: b.ANM.THREAD_MEMBER(e.id, t),
                query: { location: n },
                rejectWithError: !1
            });
        } catch (t) {
            var r;
            if ((null == (r = t.body) ? void 0 : r.code) === b.evJ.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                a.Z.show({
                    title: t ? v.NW.string(v.t['0yAqqK']) : v.NW.string(v.t.YErysL),
                    body: t ? v.NW.string(v.t.QYyad3) : v.NW.string(v.t.abMwgo)
                });
            } else
                a.Z.show({
                    title: v.NW.string(v.t.j2d6Ki),
                    body: v.NW.string(v.t.fEptJC)
                });
        }
    },
    leaveThread: (e, t) => (
        e.isForumPost() && I(e, !1),
        i.tn.del({
            url: b.ANM.THREAD_MEMBER(e.id),
            query: { location: t },
            rejectWithError: !1
        })
    ),
    removeMember: (e, t, n) =>
        i.tn.del({
            url: b.ANM.THREAD_MEMBER(e.id, t),
            query: { location: n },
            rejectWithError: !1
        }),
    setAutoArchiveDuration: (e, t) =>
        i.tn.patch({
            url: b.ANM.CHANNEL(e.id),
            body: { auto_archive_duration: t },
            rejectWithError: !1
        }),
    pin(e) {
        let t = e.flags | y.zZ.PINNED;
        this.updateFlags(e, t, e.isArchivedThread());
    },
    unpin(e) {
        let t = e.flags & ~y.zZ.PINNED;
        this.updateFlags(e, t);
    },
    async updateFlags(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        o.Z.dispatch({
            type: 'THREAD_UPDATE',
            channel: e.merge({ flags: t })
        });
        let r = { flags: t };
        n && (r.archived = !1);
        try {
            await i.tn.patch({
                url: b.ANM.CHANNEL(e.id),
                body: r,
                rejectWithError: !0
            });
        } catch (t) {
            o.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: e
            });
        }
    },
    async replacePin(e, t) {
        let n = e.merge({ flags: e.flags & ~y.zZ.PINNED }),
            r = t.merge({ flags: t.flags | y.zZ.PINNED });
        o.Z.dispatch({
            type: 'THREAD_UPDATE',
            channel: n
        }),
            o.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: r
            }),
            await this.unarchiveThreadIfNecessary(e.id),
            await this.unarchiveThreadIfNecessary(t.id);
        try {
            await i.tn.patch({
                url: b.ANM.CHANNEL(e.id),
                body: { flags: e.flags & ~y.zZ.PINNED },
                rejectWithError: !0
            });
        } catch (n) {
            o.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: e
            }),
                o.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: t
                });
            return;
        }
        try {
            await i.tn.patch({
                url: b.ANM.CHANNEL(t.id),
                body: { flags: t.flags | y.zZ.PINNED },
                rejectWithError: !0
            });
        } catch (e) {
            o.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: t
            });
        }
    },
    openThreadCreationForMobile(e, t, n) {
        (0, l.yw)(b.rMx.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id
        }),
            s.Z.changeThreadSettings(e.id, {
                parentMessageId: t,
                isPrivate: !1,
                location: n
            }),
            null == t &&
                (0, c.Po)({
                    channelId: e.id,
                    command: null,
                    section: null
                });
    },
    async setNotificationSettings(e, t) {
        return (
            (0, g.ZJ)(e, t),
            m.Z.hasJoined(e.id) || (await this.joinThread(e, 'Change Notification Settings')),
            i.tn.patch({
                url: b.ANM.THREAD_MEMBER_SETTINGS(e.id),
                body: t,
                rejectWithError: !1
            })
        );
    },
    loadArchivedThreads(e, t, n, a, s) {
        h.Z.isLoading(t, n, a) ||
            (o.Z.dispatch({
                type: 'LOAD_ARCHIVED_THREADS',
                channelId: t,
                sortOrder: n,
                tagFilter: a
            }),
            i.tn
                .get({
                    url: b.ANM.THREAD_SEARCH(t),
                    query: {
                        archived: !0,
                        sort_by: 'last_message_time',
                        sort_order: 'desc',
                        limit: h.I,
                        tag: a.size > 0 ? Array.from(a).join(',') : void 0,
                        tag_setting: r.z.MATCH_SOME,
                        offset: s
                    },
                    retries: 2,
                    rejectWithError: !0
                })
                .then(
                    (r) => {
                        let {
                            body: { threads: i, members: l, has_more: c, first_messages: u, most_recent_messages: d }
                        } = r;
                        null == i
                            ? o.Z.dispatch({
                                  type: 'LOAD_ARCHIVED_THREADS_FAIL',
                                  channelId: t,
                                  sortOrder: n,
                                  tagFilter: a
                              })
                            : o.Z.dispatch({
                                  type: 'LOAD_ARCHIVED_THREADS_SUCCESS',
                                  guildId: e,
                                  channelId: t,
                                  offset: s,
                                  sortOrder: n,
                                  tagFilter: a,
                                  threads: i,
                                  firstMessages: u,
                                  mostRecentMessages: d,
                                  members: (null != l ? l : []).map((e) => (0, E.Z)(e)),
                                  owners: i.map((e) => e.owner).filter(p.lm),
                                  hasMore: c
                              });
                    },
                    () => {
                        o.Z.dispatch({
                            type: 'LOAD_ARCHIVED_THREADS_FAIL',
                            channelId: t,
                            sortOrder: n,
                            tagFilter: a
                        });
                    }
                ));
    },
    async searchThreads(e, t, n, a) {
        let s = null != a && a.size > 0 ? Array.from(a).join(',') : void 0,
            {
                body: { threads: l, members: c, first_messages: u, most_recent_messages: d }
            } = await i.tn.get({
                url: b.ANM.THREAD_SEARCH(t),
                query: {
                    name: n,
                    tag: s,
                    tag_setting: r.z.MATCH_SOME
                },
                rejectWithError: !1
            });
        return (
            o.Z.dispatch({
                type: 'LOAD_THREADS_SUCCESS',
                threads: l,
                members: c,
                guildId: e,
                firstMessages: u,
                mostRecentMessages: d
            }),
            l.map((e) => e.id)
        );
    }
};
