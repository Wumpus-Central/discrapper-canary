"use strict";
n.d(t, { A: () => S });
var i = n(636537),
    r = n(765178),
    a = n(228366),
    s = n(883600),
    l = n(343328),
    o = n(568185),
    d = n(250953),
    c = n(700241),
    u = n(976860),
    _ = n(378570),
    E = n(95701),
    A = n(734057),
    h = n(568548),
    I = n(174459),
    f = n(371794),
    p = n(387755),
    T = n(730852),
    m = n(652215),
    g = n(375708);
let S = {
    async openPrivateChannel(e) {
        let {
                recipientIds: t,
                joinCall: n = !1,
                joinCallVideo: r = !1,
                location: a,
                onBeforeTransition: s,
                navigateToChannel: l = !0,
            } = e,
            o = this._getRecipients(t);
        function d(e) {
            n && p.A.call(e.id, r, !0, e.isDM() ? e.getRecipientId() : null);
        }
        if (1 === o.length) {
            let [e] = o,
                t = this._openCachedDMChannel(e, s, l);
            if (null != t) return d(t), Promise.resolve(t.id);
        }
        try {
            let e = await i.Bo.post({
                url: m.Rsh.USER_CHANNELS,
                body: { recipients: o },
                context: { location: a },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: (0, i.fT)(),
            });
            if (l) {
                s?.();
                let t = this._openPrivateChannel(e.body);
                d(t);
            }
            return e.body.id;
        } catch (e) {
            throw (e?.body?.code === m.t02.QUARANTINED && (0, c.default)(), e);
        }
    },
    async createGroupDmShell(e) {
        let { recipientId: t, location: n, onBeforeTransition: r, navigateToChannel: a = !0 } = e;
        try {
            let e = await i.Bo.post({
                url: m.Rsh.USER_GROUP_DM_SHELL,
                body: { recipient_id: t },
                context: { location: n },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: (0, i.fT)(),
            });
            return a && (r?.(), this._openPrivateChannel(e.body)), e.body.id;
        } catch (e) {
            throw (e?.body?.code === m.t02.QUARANTINED && (0, c.default)(), e);
        }
    },
    _openCachedDMChannel(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = A.A.getDMFromUserId(e),
            r = null != i ? A.A.getChannel(i) : null;
        return null == r
            ? null
            : (n &&
                  (t?.(),
                  null != (0, d.Y)()
                      ? (0, _.iN)(r.id, { navigationReplace: !0 })
                      : T.default.selectPrivateChannel(r.id)),
              r);
    },
    async ensurePrivateChannel(e) {
        let t = this._getRecipients(e),
            n = await i.Bo.post({
                url: m.Rsh.USER_CHANNELS,
                body: { recipients: t },
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            }),
            r = (0, E.UE)(n.body);
        return a.h.dispatch({ type: "CHANNEL_CREATE", channel: r }), r.id;
    },
    async getOrEnsurePrivateChannel(e) {
        let t = A.A.getDMFromUserId(e);
        return null != t ? t : await this.ensurePrivateChannel(e);
    },
    async getDMChannel(e) {
        let t = await i.Bo.get({ url: m.Rsh.DM_CHANNEL(e), rejectWithError: !0 }),
            n = (0, E.UE)(t.body);
        return a.h.dispatch({ type: "CHANNEL_CREATE", channel: n }), n.id;
    },
    _getRecipients: (e) => (null != e ? (Array.isArray(e) ? e : [e]) : []),
    _openPrivateChannel(e) {
        let t = (0, E.UE)(e);
        return (
            a.h.dispatch({ type: "CHANNEL_CREATE", channel: t }),
            null != (0, d.Y)() ? (0, _.iN)(t.id, { navigationReplace: !0 }) : T.default.selectPrivateChannel(t.id),
            t
        );
    },
    closePrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            (0, l.A)(e) &&
                I.default.track(m.HAw.CHANGE_LOG_DM_REMOVED, {
                    last_changelog_id: s.A.latestChangelogId(),
                    unread_count: h.Ay.getUnreadCount(e),
                }),
            a.h.dispatch({
                type: "CHANNEL_DELETE",
                channel: { id: e, guild_id: void 0, parent_id: void 0 },
                silent: n,
            }),
            t && !__OVERLAY__ && (0, u.pX)(m.BVt.FRIENDS),
            i.Bo.del({ url: m.Rsh.CHANNEL(e), query: { silent: n }, oldFormErrors: !0, rejectWithError: (0, i.fT)() })
                .then(() => {
                    r.O.announce(g.intl.string(g.t.nRbucl));
                })
                .catch(() => {
                    r.O.announce(g.intl.string(g.t.ndXVI5));
                })
        );
    },
    async updatePermissionOverwrite(e, t) {
        let n = await i.Bo.put({
            url: m.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
            body: t,
            oldFormErrors: !0,
            rejectWithError: (0, i.fT)(),
        });
        return a.h.dispatch({ type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS", channelId: e, overwrite: t }), n;
    },
    async clearPermissionOverwrite(e, t) {
        let n = await i.Bo.del({
            url: m.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
            oldFormErrors: !0,
            rejectWithError: (0, i.fT)(),
        });
        return a.h.dispatch({ type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS", channelId: e, overwriteId: t }), n;
    },
    addRecipient(e, t, n, a) {
        return i.Bo.put({
            url: m.Rsh.CHANNEL_RECIPIENT(e, t),
            context: { location: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        })
            .then((t) =>
                (r.O.announce(g.intl.string(g.t.cU0t1F)), a?.(), 201 === t.status)
                    ? this._openPrivateChannel(t.body).id
                    : e,
            )
            .catch(() => (r.O.announce(g.intl.string(g.t["8GEdej"])), e));
    },
    addRecipients(e, t, n, i) {
        return this.addRecipient(e, t[0], n, i).then((e) =>
            Promise.all(t.slice(1).map((t) => this.addRecipient(e, t, n))).then(() => e),
        );
    },
    removeRecipient: (e, t) => i.Bo.del({ url: m.Rsh.CHANNEL_RECIPIENT(e, t), oldFormErrors: !0, rejectWithError: !0 }),
    setDMOwner: (e, t) =>
        i.Bo.patch({ url: m.Rsh.CHANNEL(e), body: { owner: t }, oldFormErrors: !0, rejectWithError: !0 }),
    async setName(e, t) {
        let n = A.A.getChannel(e),
            r = await i.Bo.patch({ url: m.Rsh.CHANNEL(e), body: { name: t }, oldFormErrors: !0, rejectWithError: !0 }),
            a = n?.getGuildId();
        return null == a || n?.isThread() || o.A.checkGuildTemplateDirty(a), r;
    },
    async setIcon(e, t, n) {
        let r = A.A.getChannel(e),
            a = {
                channel_id: e,
                channel_type: r?.type,
                old_icon_set: r?.icon != null,
                new_icon_set: null != t,
                location: n,
            };
        I.default.track(m.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...a, status: "initiated" });
        try {
            let n = await i.Bo.patch({
                url: m.Rsh.CHANNEL(e),
                body: { icon: t },
                oldFormErrors: !0,
                rejectWithError: !0,
                failImmediatelyWhenRateLimited: !0,
            });
            I.default.track(m.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...a, status: "success" });
            let s = r?.getGuildId();
            return null == s || r?.isThread() || o.A.checkGuildTemplateDirty(s), n;
        } catch (e) {
            throw (
                (I.default.track(m.HAw.CHANNEL_ICON_EDIT_PROGRESSED, {
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
        let r = "icon" in t,
            a = A.A.getChannel(e),
            s = t.icon,
            l = {
                channel_id: e,
                channel_type: a?.type,
                old_icon_set: a?.icon != null,
                new_icon_set: null != s,
                location: n,
            };
        r && I.default.track(m.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...l, status: "initiated" });
        try {
            let s = await i.Bo.patch({
                    context: { location: n },
                    url: m.Rsh.CHANNEL(e),
                    body: t,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
                d = a?.getGuildId();
            return (
                null == d || a?.isThread() || o.A.checkGuildTemplateDirty(d),
                r && I.default.track(m.HAw.CHANNEL_ICON_EDIT_PROGRESSED, { ...l, status: "success" }),
                s
            );
        } catch (e) {
            throw (
                (r &&
                    I.default.track(m.HAw.CHANNEL_ICON_EDIT_PROGRESSED, {
                        ...l,
                        status: "failed",
                        is_rate_limited: e?.body?.retry_after != null,
                        error_message: e?.body?.message,
                    }),
                e)
            );
        }
    },
    convertToGuild: (e) => i.Bo.post({ url: m.Rsh.CHANNEL_CONVERT(e), oldFormErrors: !0, rejectWithError: !0 }),
    preload(e, t) {
        a.h.dispatch({ type: "CHANNEL_PRELOAD", guildId: e === m.ME ? null : e, channelId: t, context: m.QCW });
    },
    fetchChannelStoreListing(e, t) {
        let n = null != t ? m.Rsh.CHANNEL_STORE_LISTING_SKU(e, t) : m.Rsh.CHANNEL_STORE_LISTING(e);
        return (0, f.aP)(n).then((t) => {
            a.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", channelId: e, storeListing: t.body });
        });
    },
    async createTextChannel(e, t, n, r) {
        let a = { type: m.rbe.GUILD_TEXT, name: t, permission_overwrites: [] };
        null != n && (a.parent_id = n), null != r && (a.topic = r);
        let s = await i.Bo.post({
            url: m.Rsh.GUILD_CHANNELS(e),
            body: a,
            oldFormErrors: !0,
            rejectWithError: (0, i.fT)(),
        });
        return o.A.checkGuildTemplateDirty(e), s;
    },
    fetchChannel: async (e) => (await i.Bo.get({ url: m.Rsh.CHANNEL(e), rejectWithError: !0 })).body,
    async openChannel(e) {
        try {
            let t = await this.fetchChannel(e),
                n = (0, E.UE)(t);
            return a.h.dispatch({ type: "CHANNEL_CREATE", channel: n }), n;
        } catch {
            return;
        }
    },
};
