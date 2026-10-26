(n.d(t, { A: () => L }), n(938796));
var i = n(392421),
    r = n(636537),
    a = n(73153),
    s = n(157559),
    l = n(465532),
    o = n(666860),
    d = n(721768),
    c = n(95701),
    u = n(280450),
    _ = n(734057),
    E = n(576705),
    A = n(403362),
    h = n(45494),
    f = n(152007),
    I = n(858899);
let p = {
    showError(e) {
        (0, I.P0)({ text: e, variant: "critical" });
    },
};
var T = n(780057),
    m = n(707539),
    g = n(736130),
    S = n(652215),
    N = n(746080),
    C = n(105292);
function O(e, t) {
    return r.Bo.patch({ url: S.Rsh.CHANNEL(e.id), body: t, rejectWithError: (0, r.fT)() }).then(
        (t) => (
            a.h.dispatch({ type: "THREAD_UPDATE", channel: (0, c.UE)(t.body) }),
            e.isForumPost() && null != e.parent_id && a.h.dispatch({ type: "RESORT_THREADS", channelId: e.parent_id }),
            t
        ),
    );
}
function R(e, t) {
    a.h.dispatch({
        type: "THREAD_MEMBER_LOCAL_UPDATE",
        id: e.id,
        guildId: e.getGuildId(),
        userId: u.default.getId(),
        isJoining: t,
    });
}
let L = {
    archiveThread(e, t) {
        let n = { archived: !0 };
        return (t && (n.locked = !0), O(e, n));
    },
    async lockThread(e) {
        let t = e.isArchivedThread();
        return (t && (await this.unarchiveThread(e, !1)), O(e, { locked: !0, archived: t }));
    },
    async unlockThread(e) {
        let t = e.isArchivedThread();
        return (t && (await this.unarchiveThread(e, !0)), O(e, { locked: !1, archived: t }));
    },
    async unarchiveThread(e, t) {
        let n = { archived: !1 },
            i = e.isForumPost();
        t && (n.locked = !1);
        try {
            return await O(e, n);
        } catch (e) {
            throw (
                e.body?.code === S.t02.TOO_MANY_THREADS
                    ? s.A.show({
                          title: i ? C.intl.string(C.t.kwyWNX) : C.intl.string(C.t["PeIE/r"]),
                          body: i ? C.intl.string(C.t.KGaiEK) : C.intl.string(C.t.P0wT5S),
                      })
                    : e.body?.code === S.t02.TOO_MANY_ANNOUNCEMENT_THREADS
                      ? s.A.show({ title: C.intl.string(C.t["PeIE/r"]), body: C.intl.string(C.t.jDMxz2) })
                      : 429 === e.status
                        ? s.A.show({
                              title: i ? C.intl.string(C.t.kwyWNX) : C.intl.string(C.t["PeIE/r"]),
                              body: C.intl.string(C.t.Whhv4w),
                          })
                        : 403 === e.status
                          ? s.A.show({
                                title: i ? C.intl.string(C.t.kwyWNX) : C.intl.string(C.t["PeIE/r"]),
                                body: i ? C.intl.string(C.t.hIXtcT) : C.intl.string(C.t["96UEzi"]),
                            })
                          : s.A.show({ title: C.intl.string(C.t.j2d6Km), body: C.intl.string(C.t.fEptJP) }),
                e
            );
        }
    },
    async unarchiveThreadIfNecessary(e) {
        let t = _.A.getChannel(e),
            n = E.A.can(S.xBc.MANAGE_THREADS, t);
        null != t &&
            t.isArchivedThread() &&
            (n || t.threadMetadata?.locked !== !0) &&
            (await this.unarchiveThread(t, !1));
    },
    setInvitable: (e, t) => O(e, { invitable: t }),
    async joinThread(e, t) {
        e.isForumPost() && R(e, !0);
        try {
            return await r.Bo.post({
                url: S.Rsh.THREAD_MEMBER(e.id),
                query: { location: t },
                rejectWithError: (0, r.fT)(),
            });
        } catch (t) {
            if (t.body?.code === S.t02.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                s.A.show({
                    title: t ? C.intl.string(C.t.EMYJFi) : C.intl.string(C.t.gtdVcs),
                    body: t ? C.intl.string(C.t.QYyad3) : C.intl.string(C.t.abMwgm),
                });
            } else s.A.show({ title: C.intl.string(C.t.j2d6Km), body: C.intl.string(C.t.fEptJP) });
            e.isForumPost() && R(e, !1);
        }
    },
    async addMember(e, t, n) {
        try {
            return await r.Bo.post({
                url: S.Rsh.THREAD_MEMBER(e.id, t),
                query: { location: n },
                rejectWithError: (0, r.fT)(),
            });
        } catch (t) {
            if (t.body?.code === S.t02.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                s.A.show({
                    title: t ? C.intl.string(C.t["0yAqqN"]) : C.intl.string(C.t.YErysD),
                    body: t ? C.intl.string(C.t.QYyad3) : C.intl.string(C.t.abMwgm),
                });
            } else s.A.show({ title: C.intl.string(C.t.j2d6Km), body: C.intl.string(C.t.fEptJP) });
        }
    },
    leaveThread: (e, t) => (
        e.isForumPost() && R(e, !1),
        r.Bo.del({ url: S.Rsh.THREAD_MEMBER(e.id), query: { location: t }, rejectWithError: (0, r.fT)() })
    ),
    removeMember: (e, t, n) =>
        r.Bo.del({ url: S.Rsh.THREAD_MEMBER(e, t), query: { location: n }, rejectWithError: (0, r.fT)() }),
    setAutoArchiveDuration: (e, t) =>
        r.Bo.patch({ url: S.Rsh.CHANNEL(e.id), body: { auto_archive_duration: t }, rejectWithError: (0, r.fT)() }),
    pin(e) {
        let t = e.flags | N.lx.PINNED;
        this.updateFlags(e, t, e.isArchivedThread());
    },
    unpin(e) {
        let t = e.flags & ~N.lx.PINNED;
        this.updateFlags(e, t);
    },
    async updateFlags(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        a.h.dispatch({ type: "THREAD_UPDATE", channel: e.merge({ flags: t }) });
        let i = { flags: t };
        n && (i.archived = !1);
        try {
            await r.Bo.patch({ url: S.Rsh.CHANNEL(e.id), body: i, rejectWithError: !0 });
        } catch {
            a.h.dispatch({ type: "THREAD_UPDATE", channel: e });
        }
    },
    async replacePin(e, t) {
        let n = e.merge({ flags: e.flags & ~N.lx.PINNED }),
            i = t.merge({ flags: t.flags | N.lx.PINNED });
        (a.h.dispatch({ type: "THREAD_UPDATE", channel: n }),
            a.h.dispatch({ type: "THREAD_UPDATE", channel: i }),
            await this.unarchiveThreadIfNecessary(e.id),
            await this.unarchiveThreadIfNecessary(t.id));
        try {
            await r.Bo.patch({
                url: S.Rsh.CHANNEL(e.id),
                body: { flags: e.flags & ~N.lx.PINNED },
                rejectWithError: !0,
            });
        } catch {
            (a.h.dispatch({ type: "THREAD_UPDATE", channel: e }), a.h.dispatch({ type: "THREAD_UPDATE", channel: t }));
            return;
        }
        try {
            await r.Bo.patch({ url: S.Rsh.CHANNEL(t.id), body: { flags: t.flags | N.lx.PINNED }, rejectWithError: !0 });
        } catch {
            a.h.dispatch({ type: "THREAD_UPDATE", channel: t });
        }
    },
    openThreadCreationForMobile(e, t, n) {
        ((0, o.zV)(S.HAw.THREAD_CREATION_STARTED, { location: n, channel_id: e.id, guild_id: e.guild_id }),
            l.A.changeThreadSettings(e.id, { parentMessageId: t, isPrivate: !1, location: n }),
            null == t && (0, d.Gf)({ channelId: e.id, command: null, section: null }));
    },
    async setNotificationSettings(e, t) {
        ((0, m.hs)(e, t), f.A.hasJoined(e.id) || (await this.joinThread(e, "Change Notification Settings")));
        try {
            return await r.Bo.patch({
                url: S.Rsh.THREAD_MEMBER_SETTINGS(e.id),
                body: t,
                rejectWithError: (0, r.fT)(),
                failImmediatelyWhenRateLimited: !0,
            });
        } catch (e) {
            if (429 === e.status) return void p.showError(C.intl.string(C.t.T15lqn));
            throw e;
        }
    },
    loadArchivedThreads(e) {
        let { guildId: t, channelId: n, sortOrder: i, tagFilter: s, tagSetting: l, offset: o } = e;
        h.A.isLoading(n, i, s, l) ||
            (a.h.dispatch({ type: "LOAD_ARCHIVED_THREADS", channelId: n, sortOrder: i, tagFilter: s, tagSetting: l }),
            r.Bo.get({
                url: S.Rsh.THREAD_SEARCH(n),
                query: {
                    archived: !0,
                    sort_by: "last_message_time",
                    sort_order: "desc",
                    limit: h.m,
                    tag: s.size > 0 ? Array.from(s).join(",") : void 0,
                    tag_setting: l,
                    offset: o,
                },
                retries: 2,
                rejectWithError: !0,
            }).then(
                (e) => {
                    let {
                        body: { threads: r, members: d, has_more: c, first_messages: u, most_recent_messages: _ },
                    } = e;
                    null == r
                        ? a.h.dispatch({
                              type: "LOAD_ARCHIVED_THREADS_FAIL",
                              channelId: n,
                              sortOrder: i,
                              tagFilter: s,
                              tagSetting: l,
                          })
                        : a.h.dispatch({
                              type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                              guildId: t,
                              channelId: n,
                              offset: o,
                              sortOrder: i,
                              tagFilter: s,
                              tagSetting: l,
                              threads: r,
                              firstMessages: u,
                              mostRecentMessages: _,
                              members: (d ?? []).map((e) => (0, g.A)(e)),
                              owners: r.map((e) => e.owner).filter(A.Vq),
                              hasMore: c,
                          });
                },
                () => {
                    a.h.dispatch({
                        type: "LOAD_ARCHIVED_THREADS_FAIL",
                        channelId: n,
                        sortOrder: i,
                        tagFilter: s,
                        tagSetting: l,
                    });
                },
            ));
    },
    async searchThreads(e, t, n, s) {
        let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.n.MATCH_SOME,
            o = null != s && s.size > 0 ? Array.from(s).join(",") : void 0,
            {
                body: { threads: d, members: c, first_messages: u, most_recent_messages: _ },
            } = await r.Bo.get({
                url: S.Rsh.THREAD_SEARCH(t),
                query: { name: n, tag: o, tag_setting: l },
                rejectWithError: (0, r.fT)(),
            });
        return (
            a.h.dispatch({
                type: "LOAD_THREADS_SUCCESS",
                threads: d,
                members: c,
                guildId: e,
                firstMessages: u,
                mostRecentMessages: _,
            }),
            d.map((e) => e.id)
        );
    },
    summarizeThread(e, t) {
        if (!(!e.isThread() || T.A.isInProgress()))
            return (
                a.h.dispatch({ type: "SUMMARIZE_THREAD_START" }),
                r.Bo.post({
                    url: S.Rsh.AI_SUMMARIZE_THREAD(e.id),
                    body: { ephemeral: t ?? !0 },
                    rejectWithError: (0, r.fT)(),
                })
                    .then(() => {
                        a.h.dispatch({ type: "SUMMARIZE_THREAD_SUCCESS", channelId: e.id });
                    })
                    .catch(() => {
                        (a.h.dispatch({ type: "SUMMARIZE_THREAD_FAILURE", channelId: e.id }),
                            s.A.show({ title: C.intl.string(C.t.j2d6Km), body: C.intl.string(C.t.fEptJP) }));
                    })
            );
    },
};
