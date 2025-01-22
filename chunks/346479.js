var i = r(789020);
var a = r(697988),
    o = r(544891),
    s = r(570140),
    l = r(668781),
    u = r(430742),
    c = r(367907),
    d = r(555573),
    f = r(131704),
    p = r(314897),
    h = r(592125),
    _ = r(496675),
    m = r(823379),
    g = r(920303),
    E = r(569471),
    v = r(91159),
    y = r(952537),
    b = r(981631),
    I = r(176505),
    T = r(388032);
function S(e, n) {
    return o.tn
        .patch({
            url: b.ANM.CHANNEL(e.id),
            body: n,
            rejectWithError: !1
        })
        .then(
            (n) => (
                s.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: (0, f.q_)(n.body)
                }),
                e.isForumPost() &&
                    null != e.parent_id &&
                    s.Z.dispatch({
                        type: 'RESORT_THREADS',
                        channelId: e.parent_id
                    }),
                n
            )
        );
}
function A(e, n) {
    s.Z.dispatch({
        type: 'THREAD_MEMBER_LOCAL_UPDATE',
        id: e.id,
        guildId: e.getGuildId(),
        userId: p.default.getId(),
        isJoining: n
    });
}
n.Z = {
    archiveThread(e, n) {
        let r = { archived: !0 };
        return n && (r.locked = !0), S(e, r);
    },
    async lockThread(e) {
        let n = e.isArchivedThread();
        return (
            n && (await this.unarchiveThread(e, !1)),
            S(e, {
                locked: !0,
                archived: n
            })
        );
    },
    async unlockThread(e) {
        let n = e.isArchivedThread();
        return (
            n && (await this.unarchiveThread(e, !0)),
            S(e, {
                locked: !1,
                archived: n
            })
        );
    },
    async unarchiveThread(e, n) {
        let r = { archived: !1 },
            i = e.isForumPost();
        n && (r.locked = !1);
        try {
            return await S(e, r);
        } catch (e) {
            var a, o;
            throw (
                ((null === (a = e.body) || void 0 === a ? void 0 : a.code) === b.evJ.TOO_MANY_THREADS
                    ? l.Z.show({
                          title: i ? T.intl.string(T.t.kwyWNT) : T.intl.string(T.t['PeIE/v']),
                          body: i ? T.intl.string(T.t.KGaiEB) : T.intl.string(T.t.P0wT5e)
                      })
                    : (null === (o = e.body) || void 0 === o ? void 0 : o.code) === b.evJ.TOO_MANY_ANNOUNCEMENT_THREADS
                      ? l.Z.show({
                            title: T.intl.string(T.t['PeIE/v']),
                            body: T.intl.string(T.t.jDMxz8)
                        })
                      : 429 === e.status
                        ? l.Z.show({
                              title: i ? T.intl.string(T.t.kwyWNT) : T.intl.string(T.t['PeIE/v']),
                              body: T.intl.string(T.t['Whhv4+'])
                          })
                        : l.Z.show({
                              title: T.intl.string(T.t.j2d6Ki),
                              body: T.intl.string(T.t.fEptJC)
                          }),
                e)
            );
        }
    },
    async unarchiveThreadIfNecessary(e) {
        var n;
        let r = h.Z.getChannel(e),
            i = _.Z.can(b.Plq.MANAGE_THREADS, r);
        null != r && r.isArchivedThread() && (i || (null === (n = r.threadMetadata) || void 0 === n ? void 0 : n.locked) !== !0) && (await this.unarchiveThread(r, !1));
    },
    setInvitable: (e, n) => S(e, { invitable: n }),
    async joinThread(e, n) {
        e.isForumPost() && A(e, !0);
        try {
            return await o.tn.post({
                url: b.ANM.THREAD_MEMBER(e.id),
                query: { location: n },
                rejectWithError: !1
            });
        } catch (n) {
            var r;
            if ((null === (r = n.body) || void 0 === r ? void 0 : r.code) === b.evJ.TOO_MANY_THREAD_MEMBERS) {
                let n = e.isForumPost();
                l.Z.show({
                    title: n ? T.intl.string(T.t.EMYJFh) : T.intl.string(T.t.gtdVcn),
                    body: n ? T.intl.string(T.t.QYyad3) : T.intl.string(T.t.abMwgo)
                });
            } else
                l.Z.show({
                    title: T.intl.string(T.t.j2d6Ki),
                    body: T.intl.string(T.t.fEptJC)
                });
            e.isForumPost() && A(e, !1);
        }
    },
    async addMember(e, n, r) {
        try {
            return await o.tn.post({
                url: b.ANM.THREAD_MEMBER(e.id, n),
                query: { location: r },
                rejectWithError: !1
            });
        } catch (n) {
            var i;
            if ((null === (i = n.body) || void 0 === i ? void 0 : i.code) === b.evJ.TOO_MANY_THREAD_MEMBERS) {
                let n = e.isForumPost();
                l.Z.show({
                    title: n ? T.intl.string(T.t['0yAqqK']) : T.intl.string(T.t.YErysL),
                    body: n ? T.intl.string(T.t.QYyad3) : T.intl.string(T.t.abMwgo)
                });
            } else
                l.Z.show({
                    title: T.intl.string(T.t.j2d6Ki),
                    body: T.intl.string(T.t.fEptJC)
                });
        }
    },
    leaveThread: (e, n) => (
        e.isForumPost() && A(e, !1),
        o.tn.del({
            url: b.ANM.THREAD_MEMBER(e.id),
            query: { location: n },
            rejectWithError: !1
        })
    ),
    removeMember: (e, n, r) =>
        o.tn.del({
            url: b.ANM.THREAD_MEMBER(e.id, n),
            query: { location: r },
            rejectWithError: !1
        }),
    setAutoArchiveDuration: (e, n) =>
        o.tn.patch({
            url: b.ANM.CHANNEL(e.id),
            body: { auto_archive_duration: n },
            rejectWithError: !1
        }),
    pin(e) {
        let n = e.flags | I.zZ.PINNED;
        this.updateFlags(e, n, e.isArchivedThread());
    },
    unpin(e) {
        let n = e.flags & ~I.zZ.PINNED;
        this.updateFlags(e, n);
    },
    async updateFlags(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        s.Z.dispatch({
            type: 'THREAD_UPDATE',
            channel: e.merge({ flags: n })
        });
        let i = { flags: n };
        r && (i.archived = !1);
        try {
            await o.tn.patch({
                url: b.ANM.CHANNEL(e.id),
                body: i,
                rejectWithError: !0
            });
        } catch {
            s.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: e
            });
        }
    },
    async replacePin(e, n) {
        let r = e.merge({ flags: e.flags & ~I.zZ.PINNED }),
            i = n.merge({ flags: n.flags | I.zZ.PINNED });
        s.Z.dispatch({
            type: 'THREAD_UPDATE',
            channel: r
        }),
            s.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: i
            }),
            await this.unarchiveThreadIfNecessary(e.id),
            await this.unarchiveThreadIfNecessary(n.id);
        try {
            await o.tn.patch({
                url: b.ANM.CHANNEL(e.id),
                body: { flags: e.flags & ~I.zZ.PINNED },
                rejectWithError: !0
            });
        } catch {
            s.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: e
            }),
                s.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: n
                });
            return;
        }
        try {
            await o.tn.patch({
                url: b.ANM.CHANNEL(n.id),
                body: { flags: n.flags | I.zZ.PINNED },
                rejectWithError: !0
            });
        } catch {
            s.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: n
            });
        }
    },
    openThreadCreationForMobile(e, n, r) {
        (0, c.yw)(b.rMx.THREAD_CREATION_STARTED, {
            location: r,
            channel_id: e.id,
            guild_id: e.guild_id
        }),
            u.Z.changeThreadSettings(e.id, {
                parentMessageId: n,
                isPrivate: !1,
                location: r
            }),
            null == n &&
                (0, d.Po)({
                    channelId: e.id,
                    command: null,
                    section: null
                });
    },
    async setNotificationSettings(e, n) {
        return (
            (0, v.ZJ)(e, n),
            !E.Z.hasJoined(e.id) && (await this.joinThread(e, 'Change Notification Settings')),
            o.tn.patch({
                url: b.ANM.THREAD_MEMBER_SETTINGS(e.id),
                body: n,
                rejectWithError: !1
            })
        );
    },
    loadArchivedThreads(e, n, r, i, l) {
        !g.Z.isLoading(n, r, i) &&
            (s.Z.dispatch({
                type: 'LOAD_ARCHIVED_THREADS',
                channelId: n,
                sortOrder: r,
                tagFilter: i
            }),
            o.tn
                .get({
                    url: b.ANM.THREAD_SEARCH(n),
                    query: {
                        archived: !0,
                        sort_by: 'last_message_time',
                        sort_order: 'desc',
                        limit: g.I,
                        tag: i.size > 0 ? Array.from(i).join(',') : void 0,
                        tag_setting: a.z.MATCH_SOME,
                        offset: l
                    },
                    retries: 2,
                    rejectWithError: !0
                })
                .then(
                    (a) => {
                        let {
                            body: { threads: o, members: u, has_more: c, first_messages: d, most_recent_messages: f }
                        } = a;
                        null == o
                            ? s.Z.dispatch({
                                  type: 'LOAD_ARCHIVED_THREADS_FAIL',
                                  channelId: n,
                                  sortOrder: r,
                                  tagFilter: i
                              })
                            : s.Z.dispatch({
                                  type: 'LOAD_ARCHIVED_THREADS_SUCCESS',
                                  guildId: e,
                                  channelId: n,
                                  offset: l,
                                  sortOrder: r,
                                  tagFilter: i,
                                  threads: o,
                                  firstMessages: d,
                                  mostRecentMessages: f,
                                  members: (null != u ? u : []).map((e) => (0, y.Z)(e)),
                                  owners: o.map((e) => e.owner).filter(m.lm),
                                  hasMore: c
                              });
                    },
                    () => {
                        s.Z.dispatch({
                            type: 'LOAD_ARCHIVED_THREADS_FAIL',
                            channelId: n,
                            sortOrder: r,
                            tagFilter: i
                        });
                    }
                ));
    },
    async searchThreads(e, n, r, i) {
        let l = null != i && i.size > 0 ? Array.from(i).join(',') : void 0,
            {
                body: { threads: u, members: c, first_messages: d, most_recent_messages: f }
            } = await o.tn.get({
                url: b.ANM.THREAD_SEARCH(n),
                query: {
                    name: r,
                    tag: l,
                    tag_setting: a.z.MATCH_SOME
                },
                rejectWithError: !1
            });
        return (
            s.Z.dispatch({
                type: 'LOAD_THREADS_SUCCESS',
                threads: u,
                members: c,
                guildId: e,
                firstMessages: d,
                mostRecentMessages: f
            }),
            u.map((e) => e.id)
        );
    }
};
