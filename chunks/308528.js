"use strict";
n.d(t, { A: () => y });
var r = n(562465),
    i = n(582754),
    a = n(73153),
    s = n(883600),
    o = n(343328),
    l = n(568185),
    u = n(250953),
    c = n(700241),
    d = n(976860),
    _ = n(378570),
    f = n(95701),
    p = n(734057),
    h = n(222823),
    m = n(954571),
    g = n(371794),
    E = n(387755),
    A = n(956793),
    I = n(652215),
    T = n(985018);
let y = {
    async openPrivateChannel(e) {
        let {
                recipientIds: t,
                joinCall: n = !1,
                joinCallVideo: i = !1,
                location: a,
                onBeforeTransition: s,
                navigateToChannel: o = !0,
            } = e,
            l = this._getRecipients(t),
            u = (e) => {
                n && E.A.call(e.id, i, !0, e.isDM() ? e.getRecipientId() : null);
            };
        if (1 === l.length) {
            let [e] = l,
                t = this._openCachedDMChannel(e, s, o);
            if (null != t) return u(t), Promise.resolve(t.id);
        }
        try {
            let e = await r.Bo.post({
                url: I.Rsh.USER_CHANNELS,
                body: { recipients: l },
                context: { location: a },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: !1,
            });
            if (o) {
                s?.();
                let t = this._openPrivateChannel(e.body);
                u(t);
            }
            return e.body.id;
        } catch (e) {
            throw (e?.body?.code === I.t02.QUARANTINED && (0, c.default)(), e);
        }
    },
    _openCachedDMChannel(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = p.A.getDMFromUserId(e),
            i = null != r ? p.A.getChannel(r) : null;
        return null == i
            ? null
            : (n &&
                  (t?.(),
                  null != (0, u.Y)()
                      ? (0, _.iN)(i.id, { navigationReplace: !0 })
                      : A.default.selectPrivateChannel(i.id)),
              i);
    },
    async ensurePrivateChannel(e) {
        let t = this._getRecipients(e),
            n = await r.Bo.post({
                url: I.Rsh.USER_CHANNELS,
                body: { recipients: t },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            i = (0, f.UE)(n.body);
        return a.h.dispatch({ type: "CHANNEL_CREATE", channel: i }), i.id;
    },
    async getOrEnsurePrivateChannel(e) {
        let t = p.A.getDMFromUserId(e);
        return null != t ? t : await this.ensurePrivateChannel(e);
    },
    async getDMChannel(e) {
        let t = await r.Bo.get({ url: I.Rsh.DM_CHANNEL(e), rejectWithError: !0 }),
            n = (0, f.UE)(t.body);
        return a.h.dispatch({ type: "CHANNEL_CREATE", channel: n }), n.id;
    },
    _getRecipients: (e) => (null != e ? (Array.isArray(e) ? e : [e]) : []),
    _openPrivateChannel(e) {
        let t = (0, f.UE)(e);
        return (
            a.h.dispatch({ type: "CHANNEL_CREATE", channel: t }),
            null != (0, u.Y)() ? (0, _.iN)(t.id, { navigationReplace: !0 }) : A.default.selectPrivateChannel(t.id),
            t
        );
    },
    closePrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            (0, o.A)(e) &&
                m.default.track(I.HAw.CHANGE_LOG_DM_REMOVED, {
                    last_changelog_id: s.A.latestChangelogId(),
                    unread_count: h.Ay.getUnreadCount(e),
                }),
            a.h.dispatch({
                type: "CHANNEL_DELETE",
                channel: { id: e, guild_id: void 0, parent_id: void 0 },
                silent: n,
            }),
            t && !__OVERLAY__ && (0, d.pX)(I.BVt.FRIENDS),
            r.Bo.del({ url: I.Rsh.CHANNEL(e), query: { silent: n }, oldFormErrors: !0, rejectWithError: !1 })
                .then(() => {
                    i.OR.announce(T.intl.string(T.t.nRbucl));
                })
                .catch(() => {
                    i.OR.announce(T.intl.string(T.t.ndXVI5));
                })
        );
    },
    async updatePermissionOverwrite(e, t) {
        let n = await r.Bo.put({
            url: I.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
            body: t,
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return a.h.dispatch({ type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS", channelId: e, overwrite: t }), n;
    },
    async clearPermissionOverwrite(e, t) {
        let n = await r.Bo.del({
            url: I.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return a.h.dispatch({ type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS", channelId: e, overwriteId: t }), n;
    },
    addRecipient(e, t, n, a) {
        return r.Bo.put({
            url: I.Rsh.CHANNEL_RECIPIENT(e, t),
            context: { location: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        })
            .then((t) =>
                (i.OR.announce(T.intl.string(T.t.cU0t1F)), a?.(), 201 === t.status)
                    ? this._openPrivateChannel(t.body).id
                    : e,
            )
            .catch(() => (i.OR.announce(T.intl.string(T.t["8GEdej"])), e));
    },
    addRecipients(e, t, n, r) {
        return this.addRecipient(e, t[0], n, r).then((e) =>
            Promise.all(t.slice(1).map((t) => this.addRecipient(e, t, n))).then(() => e),
        );
    },
    removeRecipient: (e, t) => r.Bo.del({ url: I.Rsh.CHANNEL_RECIPIENT(e, t), oldFormErrors: !0, rejectWithError: !0 }),
    setDMOwner: (e, t) =>
        r.Bo.patch({ url: I.Rsh.CHANNEL(e), body: { owner: t }, oldFormErrors: !0, rejectWithError: !0 }),
    async setName(e, t) {
        let n = p.A.getChannel(e),
            i = await r.Bo.patch({ url: I.Rsh.CHANNEL(e), body: { name: t }, oldFormErrors: !0, rejectWithError: !0 }),
            a = n?.getGuildId();
        return null == a || n?.isThread() || l.A.checkGuildTemplateDirty(a), i;
    },
    async setIcon(e, t, n) {
        let i = p.A.getChannel(e),
            a = {
                channel_id: e,
                channel_type: i?.type,
                old_icon_set: i?.icon != null,
                new_icon_set: null != t,
                location: n,
            };
        m.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...a, status: "initiated" });
        try {
            let n = await r.Bo.patch({
                url: I.Rsh.CHANNEL(e),
                body: { icon: t },
                oldFormErrors: !0,
                rejectWithError: !0,
                failImmediatelyWhenRateLimited: !0,
            });
            m.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...a, status: "success" });
            let s = i?.getGuildId();
            return null == s || i?.isThread() || l.A.checkGuildTemplateDirty(s), n;
        } catch (e) {
            throw (
                (m.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, {
                    ...a,
                    status: "failed",
                    is_rate_limited: e?.body?.retry_after != null,
                    error_message: e?.body?.message,
                }),
                e)
            );
        }
    },
    async updateChannel(e, t, n) {
        let i = "icon" in t,
            a = p.A.getChannel(e),
            s = t.icon,
            o = {
                channel_id: e,
                channel_type: a?.type,
                old_icon_set: a?.icon != null,
                new_icon_set: null != s,
                location: n,
            };
        i && m.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...o, status: "initiated" });
        try {
            let s = await r.Bo.patch({
                    context: { location: n },
                    url: I.Rsh.CHANNEL(e),
                    body: t,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
                u = a?.getGuildId();
            return (
                null == u || a?.isThread() || l.A.checkGuildTemplateDirty(u),
                i && m.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...o, status: "success" }),
                s
            );
        } catch (e) {
            throw (
                (i &&
                    m.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, {
                        ...o,
                        status: "failed",
                        is_rate_limited: e?.body?.retry_after != null,
                        error_message: e?.body?.message,
                    }),
                e)
            );
        }
    },
    convertToGuild: (e) => r.Bo.post({ url: I.Rsh.CHANNEL_CONVERT(e), oldFormErrors: !0, rejectWithError: !0 }),
    preload(e, t) {
        a.h.dispatch({ type: "CHANNEL_PRELOAD", guildId: e === I.ME ? null : e, channelId: t, context: I.QCW });
    },
    fetchChannelStoreListing(e, t) {
        let n = null != t ? I.Rsh.CHANNEL_STORE_LISTING_SKU(e, t) : I.Rsh.CHANNEL_STORE_LISTING(e);
        return (0, g.aP)(n).then((t) => {
            a.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", channelId: e, storeListing: t.body });
        });
    },
    async createTextChannel(e, t, n, i) {
        let a = { type: I.rbe.GUILD_TEXT, name: t, permission_overwrites: [] };
        null != n && (a.parent_id = n), null != i && (a.topic = i);
        let s = await r.Bo.post({ url: I.Rsh.GUILD_CHANNELS(e), body: a, oldFormErrors: !0, rejectWithError: !1 });
        return l.A.checkGuildTemplateDirty(e), s;
    },
    fetchChannel: async (e) => (await r.Bo.get({ url: I.Rsh.CHANNEL(e), rejectWithError: !0 })).body,
};
