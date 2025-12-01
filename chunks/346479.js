n.d(t, { Z: () => T }), n(997841);
var r = n(697988),
    i = n(544891),
    a = n(570140),
    o = n(668781),
    s = n(430742),
    l = n(367907),
    c = n(555573),
    u = n(131704),
    d = n(314897),
    f = n(592125),
    p = n(496675),
    _ = n(823379),
    m = n(920303),
    h = n(569471),
    g = n(286934),
    E = n(91159),
    b = n(952537),
    y = n(981631),
    O = n(176505),
    v = n(388032);
function S(e, t) {
    return i.tn
        .patch({
            url: y.ANM.CHANNEL(e.id),
            body: t,
            rejectWithError: !1,
        })
        .then(
            (t) => (
                a.Z.dispatch({
                    type: "THREAD_UPDATE",
                    channel: (0, u.q_)(t.body),
                }),
                e.isForumPost() &&
                    null != e.parent_id &&
                    a.Z.dispatch({
                        type: "RESORT_THREADS",
                        channelId: e.parent_id,
                    }),
                t
            ),
        );
}
function I(e, t) {
    a.Z.dispatch({
        type: "THREAD_MEMBER_LOCAL_UPDATE",
        id: e.id,
        guildId: e.getGuildId(),
        userId: d.default.getId(),
        isJoining: t,
    });
}
let T = {
    archiveThread(e, t) {
        let n = { archived: !0 };
        return t && (n.locked = !0), S(e, n);
    },
    async lockThread(e) {
        let t = e.isArchivedThread();
        return (
            t && (await this.unarchiveThread(e, !1)),
            S(e, {
                locked: !0,
                archived: t,
            })
        );
    },
    async unlockThread(e) {
        let t = e.isArchivedThread();
        return (
            t && (await this.unarchiveThread(e, !0)),
            S(e, {
                locked: !1,
                archived: t,
            })
        );
    },
    async unarchiveThread(e, t) {
        let n = { archived: !1 },
            r = e.isForumPost();
        t && (n.locked = !1);
        try {
            return await S(e, n);
        } catch (e) {
            var i, a;
            throw (
                ((null == (i = e.body) ? void 0 : i.code) === y.evJ.TOO_MANY_THREADS
                    ? o.Z.show({
                          title: r ? v.intl.string(v.t.kwyWNX) : v.intl.string(v.t["PeIE/r"]),
                          body: r ? v.intl.string(v.t.KGaiEK) : v.intl.string(v.t.P0wT5S),
                      })
                    : (null == (a = e.body) ? void 0 : a.code) === y.evJ.TOO_MANY_ANNOUNCEMENT_THREADS
                      ? o.Z.show({
                            title: v.intl.string(v.t["PeIE/r"]),
                            body: v.intl.string(v.t.jDMxz2),
                        })
                      : 429 === e.status
                        ? o.Z.show({
                              title: r ? v.intl.string(v.t.kwyWNX) : v.intl.string(v.t["PeIE/r"]),
                              body: v.intl.string(v.t.Whhv4w),
                          })
                        : o.Z.show({
                              title: v.intl.string(v.t.j2d6Km),
                              body: v.intl.string(v.t.fEptJP),
                          }),
                e)
            );
        }
    },
    async unarchiveThreadIfNecessary(e) {
        var t;
        let n = f.Z.getChannel(e),
            r = p.Z.can(y.Plq.MANAGE_THREADS, n);
        null != n &&
            n.isArchivedThread() &&
            (r || (null == (t = n.threadMetadata) ? void 0 : t.locked) !== !0) &&
            (await this.unarchiveThread(n, !1));
    },
    setInvitable: (e, t) => S(e, { invitable: t }),
    async joinThread(e, t) {
        e.isForumPost() && I(e, !0);
        try {
            return await i.tn.post({
                url: y.ANM.THREAD_MEMBER(e.id),
                query: { location: t },
                rejectWithError: !1,
            });
        } catch (t) {
            var n;
            if ((null == (n = t.body) ? void 0 : n.code) === y.evJ.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                o.Z.show({
                    title: t ? v.intl.string(v.t.EMYJFi) : v.intl.string(v.t.gtdVcs),
                    body: t ? v.intl.string(v.t.QYyad3) : v.intl.string(v.t.abMwgm),
                });
            } else
                o.Z.show({
                    title: v.intl.string(v.t.j2d6Km),
                    body: v.intl.string(v.t.fEptJP),
                });
            e.isForumPost() && I(e, !1);
        }
    },
    async addMember(e, t, n) {
        try {
            return await i.tn.post({
                url: y.ANM.THREAD_MEMBER(e.id, t),
                query: { location: n },
                rejectWithError: !1,
            });
        } catch (t) {
            var r;
            if ((null == (r = t.body) ? void 0 : r.code) === y.evJ.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                o.Z.show({
                    title: t ? v.intl.string(v.t["0yAqqN"]) : v.intl.string(v.t.YErysD),
                    body: t ? v.intl.string(v.t.QYyad3) : v.intl.string(v.t.abMwgm),
                });
            } else
                o.Z.show({
                    title: v.intl.string(v.t.j2d6Km),
                    body: v.intl.string(v.t.fEptJP),
                });
        }
    },
    leaveThread: (e, t) => (
        e.isForumPost() && I(e, !1),
        i.tn.del({
            url: y.ANM.THREAD_MEMBER(e.id),
            query: { location: t },
            rejectWithError: !1,
        })
    ),
    removeMember: (e, t, n) =>
        i.tn.del({
            url: y.ANM.THREAD_MEMBER(e, t),
            query: { location: n },
            rejectWithError: !1,
        }),
    setAutoArchiveDuration: (e, t) =>
        i.tn.patch({
            url: y.ANM.CHANNEL(e.id),
            body: { auto_archive_duration: t },
            rejectWithError: !1,
        }),
    pin(e) {
        let t = e.flags | O.zZ.PINNED;
        this.updateFlags(e, t, e.isArchivedThread());
    },
    unpin(e) {
        let t = e.flags & ~O.zZ.PINNED;
        this.updateFlags(e, t);
    },
    async updateFlags(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        a.Z.dispatch({
            type: "THREAD_UPDATE",
            channel: e.merge({ flags: t }),
        });
        let r = { flags: t };
        n && (r.archived = !1);
        try {
            await i.tn.patch({
                url: y.ANM.CHANNEL(e.id),
                body: r,
                rejectWithError: !0,
            });
        } catch (t) {
            a.Z.dispatch({
                type: "THREAD_UPDATE",
                channel: e,
            });
        }
    },
    async replacePin(e, t) {
        let n = e.merge({ flags: e.flags & ~O.zZ.PINNED }),
            r = t.merge({ flags: t.flags | O.zZ.PINNED });
        a.Z.dispatch({
            type: "THREAD_UPDATE",
            channel: n,
        }),
            a.Z.dispatch({
                type: "THREAD_UPDATE",
                channel: r,
            }),
            await this.unarchiveThreadIfNecessary(e.id),
            await this.unarchiveThreadIfNecessary(t.id);
        try {
            await i.tn.patch({
                url: y.ANM.CHANNEL(e.id),
                body: { flags: e.flags & ~O.zZ.PINNED },
                rejectWithError: !0,
            });
        } catch (n) {
            a.Z.dispatch({
                type: "THREAD_UPDATE",
                channel: e,
            }),
                a.Z.dispatch({
                    type: "THREAD_UPDATE",
                    channel: t,
                });
            return;
        }
        try {
            await i.tn.patch({
                url: y.ANM.CHANNEL(t.id),
                body: { flags: t.flags | O.zZ.PINNED },
                rejectWithError: !0,
            });
        } catch (e) {
            a.Z.dispatch({
                type: "THREAD_UPDATE",
                channel: t,
            });
        }
    },
    openThreadCreationForMobile(e, t, n) {
        (0, l.yw)(y.rMx.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id,
        }),
            s.Z.changeThreadSettings(e.id, {
                parentMessageId: t,
                isPrivate: !1,
                location: n,
            }),
            null == t &&
                (0, c.Po)({
                    channelId: e.id,
                    command: null,
                    section: null,
                });
    },
    async setNotificationSettings(e, t) {
        return (
            (0, E.ZJ)(e, t),
            h.Z.hasJoined(e.id) || (await this.joinThread(e, "Change Notification Settings")),
            i.tn.patch({
                url: y.ANM.THREAD_MEMBER_SETTINGS(e.id),
                body: t,
                rejectWithError: !1,
            })
        );
    },
    loadArchivedThreads(e) {
        let { guildId: t, channelId: n, sortOrder: r, tagFilter: o, tagSetting: s, offset: l } = e;
        m.Z.isLoading(n, r, o, s) ||
            (a.Z.dispatch({
                type: "LOAD_ARCHIVED_THREADS",
                channelId: n,
                sortOrder: r,
                tagFilter: o,
                tagSetting: s,
            }),
            i.tn
                .get({
                    url: y.ANM.THREAD_SEARCH(n),
                    query: {
                        archived: !0,
                        sort_by: "last_message_time",
                        sort_order: "desc",
                        limit: m.I,
                        tag: o.size > 0 ? Array.from(o).join(",") : void 0,
                        tag_setting: s,
                        offset: l,
                    },
                    retries: 2,
                    rejectWithError: !0,
                })
                .then(
                    (e) => {
                        let {
                            body: { threads: i, members: c, has_more: u, first_messages: d, most_recent_messages: f },
                        } = e;
                        null == i
                            ? a.Z.dispatch({
                                  type: "LOAD_ARCHIVED_THREADS_FAIL",
                                  channelId: n,
                                  sortOrder: r,
                                  tagFilter: o,
                                  tagSetting: s,
                              })
                            : a.Z.dispatch({
                                  type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                                  guildId: t,
                                  channelId: n,
                                  offset: l,
                                  sortOrder: r,
                                  tagFilter: o,
                                  tagSetting: s,
                                  threads: i,
                                  firstMessages: d,
                                  mostRecentMessages: f,
                                  members: (null != c ? c : []).map((e) => (0, b.Z)(e)),
                                  owners: i.map((e) => e.owner).filter(_.lm),
                                  hasMore: u,
                              });
                    },
                    () => {
                        a.Z.dispatch({
                            type: "LOAD_ARCHIVED_THREADS_FAIL",
                            channelId: n,
                            sortOrder: r,
                            tagFilter: o,
                            tagSetting: s,
                        });
                    },
                ));
    },
    async searchThreads(e, t, n, o) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.z.MATCH_SOME,
            l = null != o && o.size > 0 ? Array.from(o).join(",") : void 0,
            {
                body: { threads: c, members: u, first_messages: d, most_recent_messages: f },
            } = await i.tn.get({
                url: y.ANM.THREAD_SEARCH(t),
                query: {
                    name: n,
                    tag: l,
                    tag_setting: s,
                },
                rejectWithError: !1,
            });
        return (
            a.Z.dispatch({
                type: "LOAD_THREADS_SUCCESS",
                threads: c,
                members: u,
                guildId: e,
                firstMessages: d,
                mostRecentMessages: f,
            }),
            c.map((e) => e.id)
        );
    },
    summarizeThread(e, t) {
        if (!(!e.isThread() || g.Z.isInProgress()))
            return (
                a.Z.dispatch({ type: "SUMMARIZE_THREAD_START" }),
                i.tn
                    .post({
                        url: y.ANM.AI_SUMMARIZE_THREAD(e.id),
                        body: { ephemeral: null == t || t },
                        rejectWithError: !1,
                    })
                    .then(() => {
                        a.Z.dispatch({
                            type: "SUMMARIZE_THREAD_SUCCESS",
                            channelId: e.id,
                        });
                    })
                    .catch(() => {
                        a.Z.dispatch({
                            type: "SUMMARIZE_THREAD_FAILURE",
                            channelId: e.id,
                        }),
                            o.Z.show({
                                title: v.intl.string(v.t.j2d6Km),
                                body: v.intl.string(v.t.fEptJP),
                            });
                    })
            );
    },
};
