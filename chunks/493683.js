n.d(t, { Z: () => b }), n(47120);
var i = n(544891),
    r = n(780384),
    a = n(570140),
    s = n(802098),
    o = n(702321),
    l = n(408987),
    u = n(777639),
    c = n(895886),
    d = n(703656),
    f = n(359110),
    _ = n(131704),
    p = n(592125),
    h = n(306680),
    m = n(626135),
    g = n(73346),
    E = n(26151),
    v = n(287734),
    y = n(981631),
    I = n(388032);
let b = {
    async openPrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            s = this._getRecipients(e),
            o = (e) => {
                t && E.Z.call(e.id, n, !0, e.isDM() ? e.getRecipientId() : null);
            };
        if (1 === s.length) {
            let [e] = s,
                t = this._openCachedDMChannel(e, a);
            if (null != t) return o(t), Promise.resolve(t.id);
        }
        try {
            let e = await i.tn.post({
                url: y.ANM.USER_CHANNELS,
                body: { recipients: s },
                context: { location: r },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: !1
            });
            null == a || a();
            let t = this._openPrivateChannel(e.body);
            return o(t), e.body.id;
        } catch (e) {
            var l;
            throw ((null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.code) === y.evJ.QUARANTINED && (0, c.default)(), e);
        }
    },
    _openCachedDMChannel(e, t) {
        let n = p.Z.getDMFromUserId(e),
            i = null != n ? p.Z.getChannel(n) : null;
        return null == i ? null : (null == t || t(), null != (0, u.D)() ? (0, f.Kh)(i.id, { navigationReplace: !0 }) : v.default.selectPrivateChannel(i.id), i);
    },
    async ensurePrivateChannel(e) {
        let t = this._getRecipients(e),
            n = await i.tn.post({
                url: y.ANM.USER_CHANNELS,
                body: { recipients: t },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            r = (0, _.q_)(n.body);
        return (
            a.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: r
            }),
            r.id
        );
    },
    async getOrEnsurePrivateChannel(e) {
        let t = p.Z.getDMFromUserId(e);
        return null != t ? t : await this.ensurePrivateChannel(e);
    },
    async getDMChannel(e) {
        let t = await i.tn.get({
                url: y.ANM.DM_CHANNEL(e),
                rejectWithError: !0
            }),
            n = (0, _.q_)(t.body);
        return (
            a.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: n
            }),
            n.id
        );
    },
    _getRecipients: (e) => (null != e ? (Array.isArray(e) ? e : [e]) : []),
    _openPrivateChannel(e) {
        let t = (0, _.q_)(e);
        return (
            a.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: t
            }),
            null != (0, u.D)() ? (0, f.Kh)(t.id, { navigationReplace: !0 }) : v.default.selectPrivateChannel(t.id),
            t
        );
    },
    closePrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            (0, o.Z)(e) &&
                m.default.track(y.rMx.CHANGE_LOG_DM_REMOVED, {
                    last_changelog_id: s.Z.latestChangelogId(),
                    unread_count: h.ZP.getUnreadCount(e)
                }),
            a.Z.dispatch({
                type: 'CHANNEL_DELETE',
                channel: {
                    id: e,
                    guild_id: void 0,
                    parent_id: void 0
                },
                silent: n
            }),
            t && !__OVERLAY__ && (0, d.uL)(y.Z5c.FRIENDS),
            i.tn
                .del({
                    url: y.ANM.CHANNEL(e),
                    query: { silent: n },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(() => {
                    r.uv.announce(I.intl.string(I.t.nRbucn));
                })
                .catch(() => {
                    r.uv.announce(I.intl.string(I.t.ndXVIy));
                })
        );
    },
    async updatePermissionOverwrite(e, t) {
        let n = await i.tn.put({
            url: y.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
            body: t,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS',
                channelId: e,
                overwrite: t
            }),
            n
        );
    },
    async clearPermissionOverwrite(e, t) {
        let n = await i.tn.del({
            url: y.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS',
                channelId: e,
                overwriteId: t
            }),
            n
        );
    },
    addRecipient(e, t, n, a) {
        return i.tn
            .put({
                url: y.ANM.CHANNEL_RECIPIENT(e, t),
                context: { location: n },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((t) => ((r.uv.announce(I.intl.string(I.t.cU0t1N)), null == a || a(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e))
            .catch(() => (r.uv.announce(I.intl.string(I.t['8GEden'])), e));
    },
    addRecipients(e, t, n, i) {
        return this.addRecipient(e, t[0], n, i).then((e) => Promise.all(t.slice(1).map((t) => this.addRecipient(e, t, n))).then(() => e));
    },
    removeRecipient: (e, t) =>
        i.tn.del({
            url: y.ANM.CHANNEL_RECIPIENT(e, t),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    setDMOwner: (e, t) =>
        i.tn.patch({
            url: y.ANM.CHANNEL(e),
            body: { owner: t },
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    async setName(e, t) {
        let n = p.Z.getChannel(e),
            r = await i.tn.patch({
                url: y.ANM.CHANNEL(e),
                body: { name: t },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            a = null == n ? void 0 : n.getGuildId();
        return null == a || (null == n ? void 0 : n.isThread()) || l.Z.checkGuildTemplateDirty(a), r;
    },
    setIcon(e, t) {
        let n = p.Z.getChannel(e);
        i.tn
            .patch({
                url: y.ANM.CHANNEL(e),
                body: { icon: t },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(() => {
                let e = null == n ? void 0 : n.getGuildId();
                null == e || (null == n ? void 0 : n.isThread()) || l.Z.checkGuildTemplateDirty(e);
            });
    },
    convertToGuild: (e) =>
        i.tn.post({
            url: y.ANM.CHANNEL_CONVERT(e),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    preload(e, t) {
        a.Z.dispatch({
            type: 'CHANNEL_PRELOAD',
            guildId: e === y.ME ? null : e,
            channelId: t,
            context: y.e3s
        });
    },
    fetchChannelStoreListing(e, t) {
        let n = null != t ? y.ANM.CHANNEL_STORE_LISTING_SKU(e, t) : y.ANM.CHANNEL_STORE_LISTING(e);
        return (0, g.Kb)(n).then((t) => {
            a.Z.dispatch({
                type: 'STORE_LISTING_FETCH_SUCCESS',
                channelId: e,
                storeListing: t.body
            });
        });
    },
    async createTextChannel(e, t, n, r) {
        let a = {
            type: y.d4z.GUILD_TEXT,
            name: t,
            permission_overwrites: []
        };
        null != n && (a.parent_id = n), null != r && (a.topic = r);
        let s = await i.tn.post({
            url: y.ANM.GUILD_CHANNELS(e),
            body: a,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.checkGuildTemplateDirty(e), s;
    },
    fetchChannel: async (e) =>
        (
            await i.tn.get({
                url: y.ANM.CHANNEL(e),
                rejectWithError: !0
            })
        ).body
};
