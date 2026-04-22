"use strict";
n.d(t, { A: () => S });
var r = n(562465),
    i = n(765178),
    s = n(73153),
    a = n(883600),
    o = n(343328),
    l = n(568185),
    u = n(250953),
    d = n(700241),
    c = n(976860),
    _ = n(378570),
    f = n(95701),
    E = n(734057),
    h = n(222823),
    p = n(954571),
    m = n(371794),
    g = n(387755),
    A = n(956793),
    I = n(652215),
    T = n(985018);
let S = {
    async openPrivateChannel(e) {
        let {
                recipientIds: t,
                joinCall: n = !1,
                joinCallVideo: i = !1,
                location: s,
                onBeforeTransition: a,
                navigateToChannel: o = !0,
            } = e,
            l = this._getRecipients(t),
            u = (e) => {
                n && g.A.call(e.id, i, !0, e.isDM() ? e.getRecipientId() : null);
            };
        if (1 === l.length) {
            let [e] = l,
                t = this._openCachedDMChannel(e, a, o);
            if (null != t) return u(t), Promise.resolve(t.id);
        }
        try {
            let e = await r.Bo.post({
                url: I.Rsh.USER_CHANNELS,
                body: { recipients: l },
                context: { location: s },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: !1,
            });
            if (o) {
                a?.();
                let t = this._openPrivateChannel(e.body);
                u(t);
            }
            return e.body.id;
        } catch (e) {
            throw (e?.body?.code === I.t02.QUARANTINED && (0, d.default)(), e);
        }
    },
    _openCachedDMChannel(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = E.A.getDMFromUserId(e),
            i = null != r ? E.A.getChannel(r) : null;
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
        return s.h.dispatch({ type: "CHANNEL_CREATE", channel: i }), i.id;
    },
    async getOrEnsurePrivateChannel(e) {
        let t = E.A.getDMFromUserId(e);
        return null != t ? t : await this.ensurePrivateChannel(e);
    },
    async getDMChannel(e) {
        let t = await r.Bo.get({ url: I.Rsh.DM_CHANNEL(e), rejectWithError: !0 }),
            n = (0, f.UE)(t.body);
        return s.h.dispatch({ type: "CHANNEL_CREATE", channel: n }), n.id;
    },
    _getRecipients: (e) => (null != e ? (Array.isArray(e) ? e : [e]) : []),
    _openPrivateChannel(e) {
        let t = (0, f.UE)(e);
        return (
            s.h.dispatch({ type: "CHANNEL_CREATE", channel: t }),
            null != (0, u.Y)() ? (0, _.iN)(t.id, { navigationReplace: !0 }) : A.default.selectPrivateChannel(t.id),
            t
        );
    },
    closePrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            (0, o.A)(e) &&
                p.default.track(I.HAw.CHANGE_LOG_DM_REMOVED, {
                    last_changelog_id: a.A.latestChangelogId(),
                    unread_count: h.Ay.getUnreadCount(e),
                }),
            s.h.dispatch({
                type: "CHANNEL_DELETE",
                channel: { id: e, guild_id: void 0, parent_id: void 0 },
                silent: n,
            }),
            t && !__OVERLAY__ && (0, c.pX)(I.BVt.FRIENDS),
            r.Bo.del({ url: I.Rsh.CHANNEL(e), query: { silent: n }, oldFormErrors: !0, rejectWithError: !1 })
                .then(() => {
                    i.O.announce(T.intl.string(T.t.nRbucl));
                })
                .catch(() => {
                    i.O.announce(T.intl.string(T.t.ndXVI5));
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
        return s.h.dispatch({ type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS", channelId: e, overwrite: t }), n;
    },
    async clearPermissionOverwrite(e, t) {
        let n = await r.Bo.del({
            url: I.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return s.h.dispatch({ type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS", channelId: e, overwriteId: t }), n;
    },
    addRecipient(e, t, n, s) {
        return r.Bo.put({
            url: I.Rsh.CHANNEL_RECIPIENT(e, t),
            context: { location: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        })
            .then((t) =>
                (i.O.announce(T.intl.string(T.t.cU0t1F)), s?.(), 201 === t.status)
                    ? this._openPrivateChannel(t.body).id
                    : e,
            )
            .catch(() => (i.O.announce(T.intl.string(T.t["8GEdej"])), e));
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
        let n = E.A.getChannel(e),
            i = await r.Bo.patch({ url: I.Rsh.CHANNEL(e), body: { name: t }, oldFormErrors: !0, rejectWithError: !0 }),
            s = n?.getGuildId();
        return null == s || n?.isThread() || l.A.checkGuildTemplateDirty(s), i;
    },
    async setIcon(e, t, n) {
        let i = E.A.getChannel(e),
            s = {
                channel_id: e,
                channel_type: i?.type,
                old_icon_set: i?.icon != null,
                new_icon_set: null != t,
                location: n,
            };
        p.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...s, status: "initiated" });
        try {
            let n = await r.Bo.patch({
                url: I.Rsh.CHANNEL(e),
                body: { icon: t },
                oldFormErrors: !0,
                rejectWithError: !0,
                failImmediatelyWhenRateLimited: !0,
            });
            p.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...s, status: "success" });
            let a = i?.getGuildId();
            return null == a || i?.isThread() || l.A.checkGuildTemplateDirty(a), n;
        } catch (e) {
            throw (
                (p.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, {
                    ...s,
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
            s = E.A.getChannel(e),
            a = t.icon,
            o = {
                channel_id: e,
                channel_type: s?.type,
                old_icon_set: s?.icon != null,
                new_icon_set: null != a,
                location: n,
            };
        i && p.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...o, status: "initiated" });
        try {
            let a = await r.Bo.patch({
                    context: { location: n },
                    url: I.Rsh.CHANNEL(e),
                    body: t,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
                u = s?.getGuildId();
            return (
                null == u || s?.isThread() || l.A.checkGuildTemplateDirty(u),
                i && p.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...o, status: "success" }),
                a
            );
        } catch (e) {
            throw (
                (i &&
                    p.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, {
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
        s.h.dispatch({ type: "CHANNEL_PRELOAD", guildId: e === I.ME ? null : e, channelId: t, context: I.QCW });
    },
    fetchChannelStoreListing(e, t) {
        let n = null != t ? I.Rsh.CHANNEL_STORE_LISTING_SKU(e, t) : I.Rsh.CHANNEL_STORE_LISTING(e);
        return (0, m.aP)(n).then((t) => {
            s.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", channelId: e, storeListing: t.body });
        });
    },
    async createTextChannel(e, t, n, i) {
        let s = { type: I.rbe.GUILD_TEXT, name: t, permission_overwrites: [] };
        null != n && (s.parent_id = n), null != i && (s.topic = i);
        let a = await r.Bo.post({ url: I.Rsh.GUILD_CHANNELS(e), body: s, oldFormErrors: !0, rejectWithError: !1 });
        return l.A.checkGuildTemplateDirty(e), a;
    },
    fetchChannel: async (e) => (await r.Bo.get({ url: I.Rsh.CHANNEL(e), rejectWithError: !0 })).body,
};
