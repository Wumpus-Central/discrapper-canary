n.d(t, { Z: () => O }), n(47120);
var r = n(544891),
    i = n(780384),
    o = n(570140),
    a = n(802098),
    s = n(702321),
    l = n(408987),
    c = n(777639),
    u = n(895886),
    d = n(703656),
    f = n(359110),
    p = n(131704),
    _ = n(592125),
    h = n(306680),
    m = n(626135),
    g = n(73346),
    E = n(26151),
    v = n(287734),
    b = n(981631),
    y = n(388032);
let O = {
    async openPrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0,
            o = arguments.length > 4 ? arguments[4] : void 0,
            a = this._getRecipients(e),
            s = (e) => {
                t && E.Z.call(e.id, n, !0, e.isDM() ? e.getRecipientId() : null);
            };
        if (1 === a.length) {
            let [e] = a,
                t = this._openCachedDMChannel(e, o);
            if (null != t) return s(t), Promise.resolve(t.id);
        }
        try {
            let e = await r.tn.post({
                url: b.ANM.USER_CHANNELS,
                body: { recipients: a },
                context: { location: i },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: !1
            });
            null == o || o();
            let t = this._openPrivateChannel(e.body);
            return s(t), e.body.id;
        } catch (e) {
            var l;
            throw ((null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.code) === b.evJ.QUARANTINED && (0, u.default)(), e);
        }
    },
    _openCachedDMChannel(e, t) {
        let n = _.Z.getDMFromUserId(e),
            r = null != n ? _.Z.getChannel(n) : null;
        return null == r ? null : (null == t || t(), null != (0, c.D)() ? (0, f.Kh)(r.id, { navigationReplace: !0 }) : v.default.selectPrivateChannel(r.id), r);
    },
    async ensurePrivateChannel(e) {
        let t = this._getRecipients(e),
            n = await r.tn.post({
                url: b.ANM.USER_CHANNELS,
                body: { recipients: t },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            i = (0, p.q_)(n.body);
        return (
            o.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: i
            }),
            i.id
        );
    },
    async getOrEnsurePrivateChannel(e) {
        let t = _.Z.getDMFromUserId(e);
        return null != t ? t : await this.ensurePrivateChannel(e);
    },
    async getDMChannel(e) {
        let t = await r.tn.get({
                url: b.ANM.DM_CHANNEL(e),
                rejectWithError: !0
            }),
            n = (0, p.q_)(t.body);
        return (
            o.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: n
            }),
            n.id
        );
    },
    _getRecipients: (e) => (null != e ? (Array.isArray(e) ? e : [e]) : []),
    _openPrivateChannel(e) {
        let t = (0, p.q_)(e);
        return (
            o.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: t
            }),
            null != (0, c.D)() ? (0, f.Kh)(t.id, { navigationReplace: !0 }) : v.default.selectPrivateChannel(t.id),
            t
        );
    },
    closePrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            (0, s.Z)(e) &&
                m.default.track(b.rMx.CHANGE_LOG_DM_REMOVED, {
                    last_changelog_id: a.Z.latestChangelogId(),
                    unread_count: h.ZP.getUnreadCount(e)
                }),
            o.Z.dispatch({
                type: 'CHANNEL_DELETE',
                channel: {
                    id: e,
                    guild_id: void 0,
                    parent_id: void 0
                },
                silent: n
            }),
            t && !__OVERLAY__ && (0, d.uL)(b.Z5c.FRIENDS),
            r.tn
                .del({
                    url: b.ANM.CHANNEL(e),
                    query: { silent: n },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(() => {
                    i.uv.announce(y.NW.string(y.t.nRbucn));
                })
                .catch(() => {
                    i.uv.announce(y.NW.string(y.t.ndXVIy));
                })
        );
    },
    async updatePermissionOverwrite(e, t) {
        let n = await r.tn.put({
            url: b.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
            body: t,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            o.Z.dispatch({
                type: 'CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS',
                channelId: e,
                overwrite: t
            }),
            n
        );
    },
    async clearPermissionOverwrite(e, t) {
        let n = await r.tn.del({
            url: b.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            o.Z.dispatch({
                type: 'CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS',
                channelId: e,
                overwriteId: t
            }),
            n
        );
    },
    addRecipient(e, t, n, o) {
        return r.tn
            .put({
                url: b.ANM.CHANNEL_RECIPIENT(e, t),
                context: { location: n },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((t) => ((i.uv.announce(y.NW.string(y.t.cU0t1N)), null == o || o(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e))
            .catch(() => (i.uv.announce(y.NW.string(y.t['8GEden'])), e));
    },
    addRecipients(e, t, n, r) {
        return this.addRecipient(e, t[0], n, r).then((e) => Promise.all(t.slice(1).map((t) => this.addRecipient(e, t, n))).then(() => e));
    },
    removeRecipient: (e, t) =>
        r.tn.del({
            url: b.ANM.CHANNEL_RECIPIENT(e, t),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    setDMOwner: (e, t) =>
        r.tn.patch({
            url: b.ANM.CHANNEL(e),
            body: { owner: t },
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    async setName(e, t) {
        let n = _.Z.getChannel(e),
            i = await r.tn.patch({
                url: b.ANM.CHANNEL(e),
                body: { name: t },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            o = null == n ? void 0 : n.getGuildId();
        return null == o || (null == n ? void 0 : n.isThread()) || l.Z.checkGuildTemplateDirty(o), i;
    },
    setIcon(e, t) {
        let n = _.Z.getChannel(e);
        r.tn
            .patch({
                url: b.ANM.CHANNEL(e),
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
        r.tn.post({
            url: b.ANM.CHANNEL_CONVERT(e),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    preload(e, t) {
        o.Z.dispatch({
            type: 'CHANNEL_PRELOAD',
            guildId: e === b.ME ? null : e,
            channelId: t,
            context: b.e3s
        });
    },
    fetchChannelStoreListing(e, t) {
        let n = null != t ? b.ANM.CHANNEL_STORE_LISTING_SKU(e, t) : b.ANM.CHANNEL_STORE_LISTING(e);
        return (0, g.Kb)(n).then((t) => {
            o.Z.dispatch({
                type: 'STORE_LISTING_FETCH_SUCCESS',
                channelId: e,
                storeListing: t.body
            });
        });
    },
    async createTextChannel(e, t, n, i) {
        let o = {
            type: b.d4z.GUILD_TEXT,
            name: t,
            permission_overwrites: []
        };
        null != n && (o.parent_id = n), null != i && (o.topic = i);
        let a = await r.tn.post({
            url: b.ANM.GUILD_CHANNELS(e),
            body: o,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.checkGuildTemplateDirty(e), a;
    },
    fetchChannel: async (e) =>
        (
            await r.tn.get({
                url: b.ANM.CHANNEL(e),
                rejectWithError: !0
            })
        ).body
};
