var i = r(47120);
var a = r(544891),
    o = r(780384),
    s = r(570140),
    l = r(802098),
    u = r(702321),
    c = r(408987),
    d = r(777639),
    f = r(895886),
    p = r(703656),
    h = r(359110),
    _ = r(131704),
    m = r(592125),
    g = r(306680),
    E = r(626135),
    v = r(73346),
    y = r(26151),
    b = r(287734),
    I = r(981631),
    T = r(388032);
n.Z = {
    async openPrivateChannel(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0,
            o = arguments.length > 4 ? arguments[4] : void 0,
            s = this._getRecipients(e),
            l = (e) => {
                n && y.Z.call(e.id, r, !0, e.isDM() ? e.getRecipientId() : null);
            };
        if (1 === s.length) {
            let [e] = s,
                n = this._openCachedDMChannel(e, o);
            if (null != n) return l(n), Promise.resolve(n.id);
        }
        try {
            let e = await a.tn.post({
                url: I.ANM.USER_CHANNELS,
                body: { recipients: s },
                context: { location: i },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: !1
            });
            null == o || o();
            let n = this._openPrivateChannel(e.body);
            return l(n), e.body.id;
        } catch (e) {
            var u;
            throw ((null == e ? void 0 : null === (u = e.body) || void 0 === u ? void 0 : u.code) === I.evJ.QUARANTINED && (0, f.default)(), e);
        }
    },
    _openCachedDMChannel(e, n) {
        let r = m.Z.getDMFromUserId(e),
            i = null != r ? m.Z.getChannel(r) : null;
        return null == i ? null : (null == n || n(), null != (0, d.D)() ? (0, h.Kh)(i.id, { navigationReplace: !0 }) : b.default.selectPrivateChannel(i.id), i);
    },
    async ensurePrivateChannel(e) {
        let n = this._getRecipients(e),
            r = await a.tn.post({
                url: I.ANM.USER_CHANNELS,
                body: { recipients: n },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            i = (0, _.q_)(r.body);
        return (
            s.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: i
            }),
            i.id
        );
    },
    async getOrEnsurePrivateChannel(e) {
        let n = m.Z.getDMFromUserId(e);
        return null != n ? n : await this.ensurePrivateChannel(e);
    },
    async getDMChannel(e) {
        let n = await a.tn.get({
                url: I.ANM.DM_CHANNEL(e),
                rejectWithError: !0
            }),
            r = (0, _.q_)(n.body);
        return (
            s.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: r
            }),
            r.id
        );
    },
    _getRecipients: (e) => (null != e ? (Array.isArray(e) ? e : [e]) : []),
    _openPrivateChannel(e) {
        let n = (0, _.q_)(e);
        return (
            s.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: n
            }),
            null != (0, d.D)() ? (0, h.Kh)(n.id, { navigationReplace: !0 }) : b.default.selectPrivateChannel(n.id),
            n
        );
    },
    closePrivateChannel(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            (0, u.Z)(e) &&
                E.default.track(I.rMx.CHANGE_LOG_DM_REMOVED, {
                    last_changelog_id: l.Z.latestChangelogId(),
                    unread_count: g.ZP.getUnreadCount(e)
                }),
            s.Z.dispatch({
                type: 'CHANNEL_DELETE',
                channel: {
                    id: e,
                    guild_id: void 0,
                    parent_id: void 0
                },
                silent: r
            }),
            n && !__OVERLAY__ && (0, p.uL)(I.Z5c.FRIENDS),
            a.tn
                .del({
                    url: I.ANM.CHANNEL(e),
                    query: { silent: r },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(() => {
                    o.uv.announce(T.intl.string(T.t.nRbucn));
                })
                .catch(() => {
                    o.uv.announce(T.intl.string(T.t.ndXVIy));
                })
        );
    },
    async updatePermissionOverwrite(e, n) {
        let r = await a.tn.put({
            url: I.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, n.id),
            body: n,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            s.Z.dispatch({
                type: 'CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS',
                channelId: e,
                overwrite: n
            }),
            r
        );
    },
    async clearPermissionOverwrite(e, n) {
        let r = await a.tn.del({
            url: I.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, n),
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            s.Z.dispatch({
                type: 'CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS',
                channelId: e,
                overwriteId: n
            }),
            r
        );
    },
    addRecipient(e, n, r, i) {
        return a.tn
            .put({
                url: I.ANM.CHANNEL_RECIPIENT(e, n),
                context: { location: r },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((n) => ((o.uv.announce(T.intl.string(T.t.cU0t1N)), null == i || i(), 201 === n.status) ? this._openPrivateChannel(n.body).id : e))
            .catch(() => (o.uv.announce(T.intl.string(T.t['8GEden'])), e));
    },
    addRecipients(e, n, r, i) {
        return this.addRecipient(e, n[0], r, i).then((e) => Promise.all(n.slice(1).map((n) => this.addRecipient(e, n, r))).then(() => e));
    },
    removeRecipient: (e, n) =>
        a.tn.del({
            url: I.ANM.CHANNEL_RECIPIENT(e, n),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    setDMOwner: (e, n) =>
        a.tn.patch({
            url: I.ANM.CHANNEL(e),
            body: { owner: n },
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    async setName(e, n) {
        let r = m.Z.getChannel(e),
            i = await a.tn.patch({
                url: I.ANM.CHANNEL(e),
                body: { name: n },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            o = null == r ? void 0 : r.getGuildId();
        return null != o && !(null == r ? void 0 : r.isThread()) && c.Z.checkGuildTemplateDirty(o), i;
    },
    setIcon(e, n) {
        let r = m.Z.getChannel(e);
        a.tn
            .patch({
                url: I.ANM.CHANNEL(e),
                body: { icon: n },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(() => {
                let e = null == r ? void 0 : r.getGuildId();
                null != e && !(null == r ? void 0 : r.isThread()) && c.Z.checkGuildTemplateDirty(e);
            });
    },
    convertToGuild: (e) =>
        a.tn.post({
            url: I.ANM.CHANNEL_CONVERT(e),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    preload(e, n) {
        s.Z.dispatch({
            type: 'CHANNEL_PRELOAD',
            guildId: e === I.ME ? null : e,
            channelId: n,
            context: I.e3s
        });
    },
    fetchChannelStoreListing(e, n) {
        let r = null != n ? I.ANM.CHANNEL_STORE_LISTING_SKU(e, n) : I.ANM.CHANNEL_STORE_LISTING(e);
        return (0, v.Kb)(r).then((n) => {
            s.Z.dispatch({
                type: 'STORE_LISTING_FETCH_SUCCESS',
                channelId: e,
                storeListing: n.body
            });
        });
    },
    async createTextChannel(e, n, r, i) {
        let o = {
            type: I.d4z.GUILD_TEXT,
            name: n,
            permission_overwrites: []
        };
        null != r && (o.parent_id = r), null != i && (o.topic = i);
        let s = await a.tn.post({
            url: I.ANM.GUILD_CHANNELS(e),
            body: o,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return c.Z.checkGuildTemplateDirty(e), s;
    },
    fetchChannel: async (e) =>
        (
            await a.tn.get({
                url: I.ANM.CHANNEL(e),
                rejectWithError: !0
            })
        ).body
};
