"use strict";
n.d(t, { A: () => S });
var i = n(636537),
    r = n(765178),
    s = n(228366),
    a = n(883600),
    o = n(343328),
    l = n(568185),
    d = n(250953),
    _ = n(700241),
    u = n(976860),
    c = n(378570),
    E = n(95701),
    h = n(734057),
    m = n(222823),
    f = n(954571),
    g = n(371794),
    p = n(387755),
    A = n(956793),
    I = n(652215),
    T = n(985018);
let S = {
    async openPrivateChannel(e) {
        let {
                recipientIds: t,
                joinCall: n = !1,
                joinCallVideo: r = !1,
                location: s,
                onBeforeTransition: a,
                navigateToChannel: o = !0,
            } = e,
            l = this._getRecipients(t),
            d = (e) => {
                n && p.A.call(e.id, r, !0, e.isDM() ? e.getRecipientId() : null);
            };
        if (1 === l.length) {
            let [e] = l,
                t = this._openCachedDMChannel(e, a, o);
            if (null != t) return d(t), Promise.resolve(t.id);
        }
        try {
            let e = await i.Bo.post({
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
                d(t);
            }
            return e.body.id;
        } catch (e) {
            throw (e?.body?.code === I.t02.QUARANTINED && (0, _.default)(), e);
        }
    },
    _openCachedDMChannel(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = h.A.getDMFromUserId(e),
            r = null != i ? h.A.getChannel(i) : null;
        return null == r
            ? null
            : (n &&
                  (t?.(),
                  null != (0, d.Y)()
                      ? (0, c.iN)(r.id, { navigationReplace: !0 })
                      : A.default.selectPrivateChannel(r.id)),
              r);
    },
    async ensurePrivateChannel(e) {
        let t = this._getRecipients(e),
            n = await i.Bo.post({
                url: I.Rsh.USER_CHANNELS,
                body: { recipients: t },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            r = (0, E.UE)(n.body);
        return s.h.dispatch({ type: "CHANNEL_CREATE", channel: r }), r.id;
    },
    async getOrEnsurePrivateChannel(e) {
        let t = h.A.getDMFromUserId(e);
        return null != t ? t : await this.ensurePrivateChannel(e);
    },
    async getDMChannel(e) {
        let t = await i.Bo.get({ url: I.Rsh.DM_CHANNEL(e), rejectWithError: !0 }),
            n = (0, E.UE)(t.body);
        return s.h.dispatch({ type: "CHANNEL_CREATE", channel: n }), n.id;
    },
    _getRecipients: (e) => (null != e ? (Array.isArray(e) ? e : [e]) : []),
    _openPrivateChannel(e) {
        let t = (0, E.UE)(e);
        return (
            s.h.dispatch({ type: "CHANNEL_CREATE", channel: t }),
            null != (0, d.Y)() ? (0, c.iN)(t.id, { navigationReplace: !0 }) : A.default.selectPrivateChannel(t.id),
            t
        );
    },
    closePrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            (0, o.A)(e) &&
                f.default.track(I.HAw.CHANGE_LOG_DM_REMOVED, {
                    last_changelog_id: a.A.latestChangelogId(),
                    unread_count: m.Ay.getUnreadCount(e),
                }),
            s.h.dispatch({
                type: "CHANNEL_DELETE",
                channel: { id: e, guild_id: void 0, parent_id: void 0 },
                silent: n,
            }),
            t && !__OVERLAY__ && (0, u.pX)(I.BVt.FRIENDS),
            i.Bo.del({ url: I.Rsh.CHANNEL(e), query: { silent: n }, oldFormErrors: !0, rejectWithError: !1 })
                .then(() => {
                    r.O.announce(T.intl.string(T.t.nRbucl));
                })
                .catch(() => {
                    r.O.announce(T.intl.string(T.t.ndXVI5));
                })
        );
    },
    async updatePermissionOverwrite(e, t) {
        let n = await i.Bo.put({
            url: I.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
            body: t,
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return s.h.dispatch({ type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS", channelId: e, overwrite: t }), n;
    },
    async clearPermissionOverwrite(e, t) {
        let n = await i.Bo.del({
            url: I.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return s.h.dispatch({ type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS", channelId: e, overwriteId: t }), n;
    },
    addRecipient(e, t, n, s) {
        return i.Bo.put({
            url: I.Rsh.CHANNEL_RECIPIENT(e, t),
            context: { location: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        })
            .then((t) =>
                (r.O.announce(T.intl.string(T.t.cU0t1F)), s?.(), 201 === t.status)
                    ? this._openPrivateChannel(t.body).id
                    : e,
            )
            .catch(() => (r.O.announce(T.intl.string(T.t["8GEdej"])), e));
    },
    addRecipients(e, t, n, i) {
        return this.addRecipient(e, t[0], n, i).then((e) =>
            Promise.all(t.slice(1).map((t) => this.addRecipient(e, t, n))).then(() => e),
        );
    },
    removeRecipient: (e, t) => i.Bo.del({ url: I.Rsh.CHANNEL_RECIPIENT(e, t), oldFormErrors: !0, rejectWithError: !0 }),
    setDMOwner: (e, t) =>
        i.Bo.patch({ url: I.Rsh.CHANNEL(e), body: { owner: t }, oldFormErrors: !0, rejectWithError: !0 }),
    async setName(e, t) {
        let n = h.A.getChannel(e),
            r = await i.Bo.patch({ url: I.Rsh.CHANNEL(e), body: { name: t }, oldFormErrors: !0, rejectWithError: !0 }),
            s = n?.getGuildId();
        return null == s || n?.isThread() || l.A.checkGuildTemplateDirty(s), r;
    },
    async setIcon(e, t, n) {
        let r = h.A.getChannel(e),
            s = {
                channel_id: e,
                channel_type: r?.type,
                old_icon_set: r?.icon != null,
                new_icon_set: null != t,
                location: n,
            };
        f.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...s, status: "initiated" });
        try {
            let n = await i.Bo.patch({
                url: I.Rsh.CHANNEL(e),
                body: { icon: t },
                oldFormErrors: !0,
                rejectWithError: !0,
                failImmediatelyWhenRateLimited: !0,
            });
            f.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...s, status: "success" });
            let a = r?.getGuildId();
            return null == a || r?.isThread() || l.A.checkGuildTemplateDirty(a), n;
        } catch (e) {
            throw (
                (f.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, {
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
        let r = "icon" in t,
            s = h.A.getChannel(e),
            a = t.icon,
            o = {
                channel_id: e,
                channel_type: s?.type,
                old_icon_set: s?.icon != null,
                new_icon_set: null != a,
                location: n,
            };
        r && f.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...o, status: "initiated" });
        try {
            let a = await i.Bo.patch({
                    context: { location: n },
                    url: I.Rsh.CHANNEL(e),
                    body: t,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
                d = s?.getGuildId();
            return (
                null == d || s?.isThread() || l.A.checkGuildTemplateDirty(d),
                r && f.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...o, status: "success" }),
                a
            );
        } catch (e) {
            throw (
                (r &&
                    f.default.track(I.HAw.CHANNEL_ICON_EDIT_PROGRESSED, {
                        ...o,
                        status: "failed",
                        is_rate_limited: e?.body?.retry_after != null,
                        error_message: e?.body?.message,
                    }),
                e)
            );
        }
    },
    convertToGuild: (e) => i.Bo.post({ url: I.Rsh.CHANNEL_CONVERT(e), oldFormErrors: !0, rejectWithError: !0 }),
    preload(e, t) {
        s.h.dispatch({ type: "CHANNEL_PRELOAD", guildId: e === I.ME ? null : e, channelId: t, context: I.QCW });
    },
    fetchChannelStoreListing(e, t) {
        let n = null != t ? I.Rsh.CHANNEL_STORE_LISTING_SKU(e, t) : I.Rsh.CHANNEL_STORE_LISTING(e);
        return (0, g.aP)(n).then((t) => {
            s.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", channelId: e, storeListing: t.body });
        });
    },
    async createTextChannel(e, t, n, r) {
        let s = { type: I.rbe.GUILD_TEXT, name: t, permission_overwrites: [] };
        null != n && (s.parent_id = n), null != r && (s.topic = r);
        let a = await i.Bo.post({ url: I.Rsh.GUILD_CHANNELS(e), body: s, oldFormErrors: !0, rejectWithError: !1 });
        return l.A.checkGuildTemplateDirty(e), a;
    },
    fetchChannel: async (e) => (await i.Bo.get({ url: I.Rsh.CHANNEL(e), rejectWithError: !0 })).body,
};
