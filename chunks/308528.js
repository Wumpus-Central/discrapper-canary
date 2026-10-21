n.d(t, { A: () => N });
var i = n(636537),
    r = n(765178),
    a = n(73153),
    s = n(883600),
    l = n(343328),
    o = n(377480),
    d = n(568185),
    c = n(250953),
    u = n(700241),
    _ = n(976860),
    E = n(378570),
    A = n(95701),
    h = n(734057),
    f = n(573163),
    I = n(174459),
    p = n(371794),
    T = n(387755),
    m = n(730852),
    g = n(652215),
    S = n(105292);
let N = {
    async openPrivateChannel(e) {
        let {
                recipientIds: t,
                joinCall: n = !1,
                joinCallVideo: r = !1,
                location: a,
                onBeforeTransition: s,
                navigateToChannel: l = !0,
                navigationReplace: o = !0,
            } = e,
            d = this._getRecipients(t);
        function c(e) {
            n && T.A.call(e.id, r, !0, e.isDM() ? e.getRecipientId() : null);
        }
        if (1 === d.length) {
            let [e] = d,
                t = this._openCachedDMChannel(e, s, l, o);
            if (null != t) return (c(t), Promise.resolve(t.id));
        }
        try {
            let e = await i.Bo.post({
                url: g.Rsh.USER_CHANNELS,
                body: { recipients: d },
                context: { location: a },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: (0, i.fT)(),
            });
            if (l) {
                s?.();
                let t = this._openPrivateChannel(e.body, o);
                c(t);
            }
            return e.body.id;
        } catch (e) {
            throw (e?.body?.code === g.t02.QUARANTINED && (0, u.default)(), e);
        }
    },
    async createGroupDmShell(e) {
        let { recipientId: t, location: n, onBeforeTransition: r, navigateToChannel: a = !0 } = e;
        try {
            let e = await i.Bo.post({
                url: g.Rsh.USER_GROUP_DM_SHELL,
                body: { recipient_id: t },
                context: { location: n },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: (0, i.fT)(),
            });
            return (a && (r?.(), this._openPrivateChannel(e.body)), e.body.id);
        } catch (e) {
            throw (e?.body?.code === g.t02.QUARANTINED && (0, u.default)(), e);
        }
    },
    _openCachedDMChannel(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            r = h.A.getDMFromUserId(e),
            a = null != r ? h.A.getChannel(r) : null;
        return null == a
            ? null
            : (n &&
                  (t?.(),
                  null != (0, c.Y)()
                      ? (0, E.iN)(a.id, { navigationReplace: i })
                      : m.default.selectPrivateChannel(a.id)),
              a);
    },
    async ensurePrivateChannel(e) {
        let t = this._getRecipients(e),
            n = await i.Bo.post({
                url: g.Rsh.USER_CHANNELS,
                body: { recipients: t },
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            }),
            r = (0, A.UE)(n.body);
        return (a.h.dispatch({ type: "CHANNEL_CREATE", channel: r }), r.id);
    },
    async getOrEnsurePrivateChannel(e) {
        let t = h.A.getDMFromUserId(e);
        return null != t ? t : await this.ensurePrivateChannel(e);
    },
    async getDMChannel(e) {
        let t = await i.Bo.get({ url: g.Rsh.DM_CHANNEL(e), rejectWithError: !0 }),
            n = (0, A.UE)(t.body);
        return (a.h.dispatch({ type: "CHANNEL_CREATE", channel: n }), n.id);
    },
    _getRecipients: (e) => (null != e ? (Array.isArray(e) ? e : [e]) : []),
    _openPrivateChannel(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = (0, A.UE)(e);
        return (
            a.h.dispatch({ type: "CHANNEL_CREATE", channel: n }),
            null != (0, c.Y)() ? (0, E.iN)(n.id, { navigationReplace: t }) : m.default.selectPrivateChannel(n.id),
            n
        );
    },
    closePrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (0, l.A)(e) &&
            I.default.track(g.HAw.CHANGE_LOG_DM_REMOVED, {
                last_changelog_id: s.A.latestChangelogId(),
                unread_count: f.Ay.getUnreadCount(e),
            });
        let o = h.A.getChannel(e)?.isMultiUserDM() ?? !1;
        return (
            a.h.dispatch({
                type: "CHANNEL_DELETE",
                channel: { id: e, guild_id: void 0, parent_id: void 0 },
                silent: n,
            }),
            t && !__OVERLAY__ && (0, _.pX)(g.BVt.FRIENDS),
            i.Bo.del({ url: g.Rsh.CHANNEL(e), query: { silent: n }, oldFormErrors: !0, rejectWithError: (0, i.fT)() })
                .then(() => {
                    r.O.announce(S.intl.string(o ? S.t["Gdj/qt"] : S.t.nRbucl));
                })
                .catch(() => {
                    r.O.announce(S.intl.string(o ? S.t.AKajgt : S.t.ndXVI5));
                })
        );
    },
    bulkLeaveGroupDMs: (e) =>
        i.Bo.post({
            url: g.Rsh.USER_CHANNELS_BULK_LEAVE,
            body: { channel_ids: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        }),
    async updatePermissionOverwrite(e, t) {
        let n = await i.Bo.put({
            url: g.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
            body: t,
            oldFormErrors: !0,
            rejectWithError: (0, i.fT)(),
        });
        return (a.h.dispatch({ type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS", channelId: e, overwrite: t }), n);
    },
    async clearPermissionOverwrite(e, t) {
        let n = await i.Bo.del({
            url: g.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
            oldFormErrors: !0,
            rejectWithError: (0, i.fT)(),
        });
        return (
            a.h.dispatch({ type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS", channelId: e, overwriteId: t }), n
        );
    },
    addRecipient(e, t, n, a) {
        return i.Bo.put({
            url: g.Rsh.CHANNEL_RECIPIENT(e, t),
            context: { location: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        })
            .then((t) =>
                (r.O.announce(S.intl.string(S.t.cU0t1F)), a?.(), 201 === t.status)
                    ? this._openPrivateChannel(t.body).id
                    : e,
            )
            .catch(() => (r.O.announce(S.intl.string(S.t["8GEdej"])), e));
    },
    addRecipients(e, t, n, i) {
        return this.addRecipient(e, t[0], n, i).then((e) =>
            Promise.all(t.slice(1).map((t) => this.addRecipient(e, t, n))).then(() => e),
        );
    },
    removeRecipient: (e, t) => i.Bo.del({ url: g.Rsh.CHANNEL_RECIPIENT(e, t), oldFormErrors: !0, rejectWithError: !0 }),
    setDMOwner: (e, t) =>
        i.Bo.patch({ url: g.Rsh.CHANNEL(e), body: { owner: t }, oldFormErrors: !0, rejectWithError: !0 }),
    async setName(e, t) {
        let n = h.A.getChannel(e),
            r = await i.Bo.patch({ url: g.Rsh.CHANNEL(e), body: { name: t }, oldFormErrors: !0, rejectWithError: !0 }),
            a = n?.getGuildId();
        return (null == a || n?.isThread() || d.A.checkGuildTemplateDirty(a), r);
    },
    async setIcon(e, t, n) {
        let r = h.A.getChannel(e),
            a = {
                channel_id: e,
                channel_type: r?.type,
                old_icon_set: r?.icon != null,
                new_icon_set: null != t,
                location: n,
            };
        I.default.track(g.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...a, status: "initiated" });
        try {
            let n = await i.Bo.patch({
                url: g.Rsh.CHANNEL(e),
                body: { icon: t },
                oldFormErrors: !0,
                rejectWithError: !0,
                failImmediatelyWhenRateLimited: !0,
            });
            I.default.track(g.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...a, status: "success" });
            let s = r?.getGuildId();
            return (null == s || r?.isThread() || d.A.checkGuildTemplateDirty(s), n);
        } catch (e) {
            throw (
                I.default.track(g.HAw.CHANNEL_ICON_EDIT_PROGRESSED, {
                    ...a,
                    status: "failed",
                    is_rate_limited: e?.body?.retry_after != null,
                    error_message: e?.body?.message,
                }),
                e
            );
        }
    },
    async updateChannel(e, t, n) {
        let r = "icon" in t,
            a = h.A.getChannel(e),
            s = t.icon,
            l = {
                channel_id: e,
                channel_type: a?.type,
                old_icon_set: a?.icon != null,
                new_icon_set: null != s,
                location: n,
            };
        r && I.default.track(g.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...l, status: "initiated" });
        try {
            let s = await i.Bo.patch({
                    context: { location: n },
                    url: g.Rsh.CHANNEL(e),
                    body: t,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
                o = a?.getGuildId();
            return (
                null == o || a?.isThread() || d.A.checkGuildTemplateDirty(o),
                r && I.default.track(g.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...l, status: "success" }),
                s
            );
        } catch (e) {
            throw (
                r &&
                    I.default.track(g.HAw.CHANNEL_ICON_EDIT_PROGRESSED, {
                        ...l,
                        status: "failed",
                        is_rate_limited: e?.body?.retry_after != null,
                        error_message: e?.body?.message,
                    }),
                e
            );
        }
    },
    convertToGuild: (e) => i.Bo.post({ url: g.Rsh.CHANNEL_CONVERT(e), oldFormErrors: !0, rejectWithError: !0 }),
    preload: o.A,
    fetchChannelStoreListing(e, t) {
        let n = null != t ? g.Rsh.CHANNEL_STORE_LISTING_SKU(e, t) : g.Rsh.CHANNEL_STORE_LISTING(e);
        return (0, p.aP)(n).then((t) => {
            a.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", channelId: e, storeListing: t.body });
        });
    },
    async createTextChannel(e, t, n, r) {
        let a = { type: g.rbe.GUILD_TEXT, name: t, permission_overwrites: [] };
        (null != n && (a.parent_id = n), null != r && (a.topic = r));
        let s = await i.Bo.post({
            url: g.Rsh.GUILD_CHANNELS(e),
            body: a,
            oldFormErrors: !0,
            rejectWithError: (0, i.fT)(),
        });
        return (d.A.checkGuildTemplateDirty(e), s);
    },
    fetchChannel: async (e) => (await i.Bo.get({ url: g.Rsh.CHANNEL(e), rejectWithError: !0 })).body,
    async openChannel(e) {
        try {
            let t = await this.fetchChannel(e),
                n = (0, A.UE)(t);
            return (a.h.dispatch({ type: "CHANNEL_CREATE", channel: n }), n);
        } catch {
            return;
        }
    },
};
