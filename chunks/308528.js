var i = n(517846),
    r = n(620632),
    a = n(765178),
    s = n(73153),
    l = n(883600),
    o = n(343328),
    d = n(377480),
    c = n(568185),
    u = n(250953),
    _ = n(669700),
    E = n(700241),
    A = n(976860),
    f = n(378570),
    h = n(95701),
    I = n(734057),
    p = n(218461),
    m = n(129230),
    g = n(371794),
    T = n(387755),
    S = n(597798),
    N = n(652215),
    C = n(792996);
let O = {
    async openPrivateChannel(e) {
        let {
                recipientIds: t,
                joinCall: n = !1,
                joinCallVideo: a = !1,
                location: s,
                onBeforeTransition: l,
                navigateToChannel: o = !0,
                navigationReplace: d = !0,
            } = e,
            c = this._getRecipients(t);
        function u(e) {
            n && T.A.call(e.id, a, !0, e.isDM() ? e.getRecipientId() : null);
        }
        if (1 === c.length) {
            let [e] = c,
                t = this._openCachedDMChannel(e, l, o, d);
            if (null != t) return (u(t), Promise.resolve(t.id));
        }
        try {
            let e = await r.Bo.post({
                url: N.Rsh.USER_CHANNELS,
                body: { recipients: c },
                context: { location: s },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: (0, r.fT)(),
            });
            if ((e.body.type === N.rbe.GROUP_DM && _.Ay.fireSurveyAction(i.w.GROUP_DM_CREATED), o)) {
                l?.();
                let t = this._openPrivateChannel(e.body, d);
                u(t);
            }
            return e.body.id;
        } catch (e) {
            throw (e?.body?.code === N.t02.QUARANTINED && (0, E.default)(), e);
        }
    },
    async createGroupDmShell(e) {
        let { recipientId: t, location: n, onBeforeTransition: a, navigateToChannel: s = !0 } = e;
        try {
            let e = await r.Bo.post({
                url: N.Rsh.USER_GROUP_DM_SHELL,
                body: { recipient_id: t },
                context: { location: n },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: (0, r.fT)(),
            });
            return (
                e.body.type === N.rbe.GROUP_DM && _.Ay.fireSurveyAction(i.w.GROUP_DM_CREATED),
                s && (a?.(), this._openPrivateChannel(e.body)),
                e.body.id
            );
        } catch (e) {
            throw (e?.body?.code === N.t02.QUARANTINED && (0, E.default)(), e);
        }
    },
    _openCachedDMChannel(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            r = I.A.getDMFromUserId(e),
            a = null != r ? I.A.getChannel(r) : null;
        return null == a
            ? null
            : (n &&
                  (t?.(),
                  null != (0, u.Y)()
                      ? (0, f.iN)(a.id, { navigationReplace: i })
                      : S.default.selectPrivateChannel(a.id)),
              a);
    },
    async ensurePrivateChannel(e) {
        let t = this._getRecipients(e),
            n = await r.Bo.post({
                url: N.Rsh.USER_CHANNELS,
                body: { recipients: t },
                oldFormErrors: !0,
                rejectWithError: (0, r.fT)(),
            });
        n.body.type === N.rbe.GROUP_DM && _.Ay.fireSurveyAction(i.w.GROUP_DM_CREATED);
        let a = (0, h.UE)(n.body);
        return (s.h.dispatch({ type: "CHANNEL_CREATE", channel: a }), a.id);
    },
    async getOrEnsurePrivateChannel(e) {
        let t = I.A.getDMFromUserId(e);
        return null != t ? t : await this.ensurePrivateChannel(e);
    },
    async getDMChannel(e) {
        let t = await r.Bo.get({ url: N.Rsh.DM_CHANNEL(e), rejectWithError: !0 }),
            n = (0, h.UE)(t.body);
        return (s.h.dispatch({ type: "CHANNEL_CREATE", channel: n }), n.id);
    },
    _getRecipients: (e) => (null != e ? (Array.isArray(e) ? e : [e]) : []),
    _openPrivateChannel(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = (0, h.UE)(e);
        return (
            s.h.dispatch({ type: "CHANNEL_CREATE", channel: n }),
            null != (0, u.Y)() ? (0, f.iN)(n.id, { navigationReplace: t }) : S.default.selectPrivateChannel(n.id),
            n
        );
    },
    closePrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (0, o.A)(e) &&
            m.default.track(N.HAw.CHANGE_LOG_DM_REMOVED, {
                last_changelog_id: l.A.latestChangelogId(),
                unread_count: p.Ay.getUnreadCount(e),
            });
        let i = I.A.getChannel(e)?.isMultiUserDM() ?? !1;
        return (
            s.h.dispatch({
                type: "CHANNEL_DELETE",
                channel: { id: e, guild_id: void 0, parent_id: void 0 },
                silent: n,
            }),
            t && !__OVERLAY__ && (0, A.pX)(N.BVt.FRIENDS),
            r.Bo.del({ url: N.Rsh.CHANNEL(e), query: { silent: n }, oldFormErrors: !0, rejectWithError: (0, r.fT)() })
                .then(() => {
                    a.O.announce(C.intl.string(i ? C.t["Gdj/qt"] : C.t.nRbucl));
                })
                .catch(() => {
                    a.O.announce(C.intl.string(i ? C.t.AKajgt : C.t.ndXVI5));
                })
        );
    },
    bulkLeaveGroupDMs: (e) =>
        r.Bo.post({
            url: N.Rsh.USER_CHANNELS_BULK_LEAVE,
            body: { channel_ids: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        }),
    async updatePermissionOverwrite(e, t) {
        let n = await r.Bo.put({
            url: N.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
            body: t,
            oldFormErrors: !0,
            rejectWithError: (0, r.fT)(),
        });
        return (s.h.dispatch({ type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS", channelId: e, overwrite: t }), n);
    },
    async clearPermissionOverwrite(e, t) {
        let n = await r.Bo.del({
            url: N.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
            oldFormErrors: !0,
            rejectWithError: (0, r.fT)(),
        });
        return (
            s.h.dispatch({ type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS", channelId: e, overwriteId: t }), n
        );
    },
    addRecipient(e, t, n, s) {
        return r.Bo.put({
            url: N.Rsh.CHANNEL_RECIPIENT(e, t),
            context: { location: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        })
            .then((t) =>
                (a.O.announce(C.intl.string(C.t.cU0t1F)), s?.(), 201 === t.status)
                    ? (_.Ay.fireSurveyAction(i.w.GROUP_DM_CREATED), this._openPrivateChannel(t.body).id)
                    : e,
            )
            .catch(() => (a.O.announce(C.intl.string(C.t["8GEdej"])), e));
    },
    addRecipients(e, t, n, i) {
        return this.addRecipient(e, t[0], n, i).then((e) =>
            Promise.all(t.slice(1).map((t) => this.addRecipient(e, t, n))).then(() => e),
        );
    },
    removeRecipient: (e, t) => r.Bo.del({ url: N.Rsh.CHANNEL_RECIPIENT(e, t), oldFormErrors: !0, rejectWithError: !0 }),
    setDMOwner: (e, t) =>
        r.Bo.patch({ url: N.Rsh.CHANNEL(e), body: { owner: t }, oldFormErrors: !0, rejectWithError: !0 }),
    async setName(e, t) {
        let n = I.A.getChannel(e),
            i = await r.Bo.patch({ url: N.Rsh.CHANNEL(e), body: { name: t }, oldFormErrors: !0, rejectWithError: !0 }),
            a = n?.getGuildId();
        return (null == a || n?.isThread() || c.A.checkGuildTemplateDirty(a), i);
    },
    async setIcon(e, t, n) {
        let i = I.A.getChannel(e),
            a = {
                channel_id: e,
                channel_type: i?.type,
                old_icon_set: i?.icon != null,
                new_icon_set: null != t,
                location: n,
            };
        m.default.track(N.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...a, status: "initiated" });
        try {
            let n = await r.Bo.patch({
                url: N.Rsh.CHANNEL(e),
                body: { icon: t },
                oldFormErrors: !0,
                rejectWithError: !0,
                failImmediatelyWhenRateLimited: !0,
            });
            m.default.track(N.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...a, status: "success" });
            let s = i?.getGuildId();
            return (null == s || i?.isThread() || c.A.checkGuildTemplateDirty(s), n);
        } catch (e) {
            throw (
                m.default.track(N.HAw.CHANNEL_ICON_EDIT_PROGRESSED, {
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
        let i = "icon" in t,
            a = I.A.getChannel(e),
            s = t.icon,
            l = {
                channel_id: e,
                channel_type: a?.type,
                old_icon_set: a?.icon != null,
                new_icon_set: null != s,
                location: n,
            };
        i && m.default.track(N.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...l, status: "initiated" });
        try {
            let s = await r.Bo.patch({
                    context: { location: n },
                    url: N.Rsh.CHANNEL(e),
                    body: t,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
                o = a?.getGuildId();
            return (
                null == o || a?.isThread() || c.A.checkGuildTemplateDirty(o),
                i && m.default.track(N.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...l, status: "success" }),
                s
            );
        } catch (e) {
            throw (
                i &&
                    m.default.track(N.HAw.CHANNEL_ICON_EDIT_PROGRESSED, {
                        ...l,
                        status: "failed",
                        is_rate_limited: e?.body?.retry_after != null,
                        error_message: e?.body?.message,
                    }),
                e
            );
        }
    },
    convertToGuild: (e) => r.Bo.post({ url: N.Rsh.CHANNEL_CONVERT(e), oldFormErrors: !0, rejectWithError: !0 }),
    preload: d.A,
    fetchChannelStoreListing(e, t) {
        let n = null != t ? N.Rsh.CHANNEL_STORE_LISTING_SKU(e, t) : N.Rsh.CHANNEL_STORE_LISTING(e);
        return (0, g.aP)(n).then((t) => {
            s.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", channelId: e, storeListing: t.body });
        });
    },
    async createTextChannel(e, t, n, i) {
        let a = { type: N.rbe.GUILD_TEXT, name: t, permission_overwrites: [] };
        (null != n && (a.parent_id = n), null != i && (a.topic = i));
        let s = await r.Bo.post({
            url: N.Rsh.GUILD_CHANNELS(e),
            body: a,
            oldFormErrors: !0,
            rejectWithError: (0, r.fT)(),
        });
        return (c.A.checkGuildTemplateDirty(e), s);
    },
    fetchChannel: async (e) => (await r.Bo.get({ url: N.Rsh.CHANNEL(e), rejectWithError: !0 })).body,
    async openChannel(e) {
        try {
            let t = await this.fetchChannel(e),
                n = (0, h.UE)(t);
            return (s.h.dispatch({ type: "CHANNEL_CREATE", channel: n }), n);
        } catch {
            return;
        }
    },
};
n.d(t, {}, { A: O });
