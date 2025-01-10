var i = r(47120);
var a = r(544891),
    s = r(780384),
    o = r(570140),
    l = r(802098),
    u = r(702321),
    c = r(408987),
    d = r(777639),
    f = r(895886),
    _ = r(703656),
    h = r(359110),
    p = r(131704),
    m = r(592125),
    g = r(306680),
    E = r(626135),
    v = r(73346),
    I = r(26151),
    T = r(287734),
    b = r(981631),
    y = r(388032);
n.Z = {
    async openPrivateChannel(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0,
            o = this._getRecipients(e),
            l = (e) => {
                n && I.Z.call(e.id, r, !0, e.isDM() ? e.getRecipientId() : null);
            };
        if (1 === o.length) {
            let [e] = o,
                n = this._openCachedDMChannel(e, s);
            if (null != n) return l(n), Promise.resolve(n.id);
        }
        try {
            let e = await a.tn.post({
                url: b.ANM.USER_CHANNELS,
                body: { recipients: o },
                context: { location: i },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: !1
            });
            null == s || s();
            let n = this._openPrivateChannel(e.body);
            return l(n), e.body.id;
        } catch (e) {
            var u;
            throw ((null == e ? void 0 : null === (u = e.body) || void 0 === u ? void 0 : u.code) === b.evJ.QUARANTINED && (0, f.default)(), e);
        }
    },
    _openCachedDMChannel(e, n) {
        let r = m.Z.getDMFromUserId(e),
            i = null != r ? m.Z.getChannel(r) : null;
        return null == i ? null : (null == n || n(), null != (0, d.D)() ? (0, h.Kh)(i.id, { navigationReplace: !0 }) : T.default.selectPrivateChannel(i.id), i);
    },
    async ensurePrivateChannel(e) {
        let n = this._getRecipients(e),
            r = await a.tn.post({
                url: b.ANM.USER_CHANNELS,
                body: { recipients: n },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            i = (0, p.q_)(r.body);
        return (
            o.Z.dispatch({
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
                url: b.ANM.DM_CHANNEL(e),
                rejectWithError: !0
            }),
            r = (0, p.q_)(n.body);
        return (
            o.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: r
            }),
            r.id
        );
    },
    _getRecipients: (e) => (null != e ? (Array.isArray(e) ? e : [e]) : []),
    _openPrivateChannel(e) {
        let n = (0, p.q_)(e);
        return (
            o.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: n
            }),
            null != (0, d.D)() ? (0, h.Kh)(n.id, { navigationReplace: !0 }) : T.default.selectPrivateChannel(n.id),
            n
        );
    },
    closePrivateChannel(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            (0, u.Z)(e) &&
                E.default.track(b.rMx.CHANGE_LOG_DM_REMOVED, {
                    last_changelog_id: l.Z.latestChangelogId(),
                    unread_count: g.ZP.getUnreadCount(e)
                }),
            o.Z.dispatch({
                type: 'CHANNEL_DELETE',
                channel: {
                    id: e,
                    guild_id: void 0,
                    parent_id: void 0
                },
                silent: r
            }),
            n && !__OVERLAY__ && (0, _.uL)(b.Z5c.FRIENDS),
            a.tn
                .del({
                    url: b.ANM.CHANNEL(e),
                    query: { silent: r },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(() => {
                    s.uv.announce(y.intl.string(y.t.nRbucn));
                })
                .catch(() => {
                    s.uv.announce(y.intl.string(y.t.ndXVIy));
                })
        );
    },
    async updatePermissionOverwrite(e, n) {
        let r = await a.tn.put({
            url: b.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, n.id),
            body: n,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            o.Z.dispatch({
                type: 'CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS',
                channelId: e,
                overwrite: n
            }),
            r
        );
    },
    async clearPermissionOverwrite(e, n) {
        let r = await a.tn.del({
            url: b.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, n),
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            o.Z.dispatch({
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
                url: b.ANM.CHANNEL_RECIPIENT(e, n),
                context: { location: r },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((n) => ((s.uv.announce(y.intl.string(y.t.cU0t1N)), null == i || i(), 201 === n.status) ? this._openPrivateChannel(n.body).id : e))
            .catch(() => (s.uv.announce(y.intl.string(y.t['8GEden'])), e));
    },
    addRecipients(e, n, r, i) {
        return this.addRecipient(e, n[0], r, i).then((e) => Promise.all(n.slice(1).map((n) => this.addRecipient(e, n, r))).then(() => e));
    },
    removeRecipient: (e, n) =>
        a.tn.del({
            url: b.ANM.CHANNEL_RECIPIENT(e, n),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    setDMOwner: (e, n) =>
        a.tn.patch({
            url: b.ANM.CHANNEL(e),
            body: { owner: n },
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    async setName(e, n) {
        let r = m.Z.getChannel(e),
            i = await a.tn.patch({
                url: b.ANM.CHANNEL(e),
                body: { name: n },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            s = null == r ? void 0 : r.getGuildId();
        return null != s && !(null == r ? void 0 : r.isThread()) && c.Z.checkGuildTemplateDirty(s), i;
    },
    setIcon(e, n) {
        let r = m.Z.getChannel(e);
        a.tn
            .patch({
                url: b.ANM.CHANNEL(e),
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
            url: b.ANM.CHANNEL_CONVERT(e),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    preload(e, n) {
        o.Z.dispatch({
            type: 'CHANNEL_PRELOAD',
            guildId: e === b.ME ? null : e,
            channelId: n,
            context: b.e3s
        });
    },
    fetchChannelStoreListing(e, n) {
        let r = null != n ? b.ANM.CHANNEL_STORE_LISTING_SKU(e, n) : b.ANM.CHANNEL_STORE_LISTING(e);
        return (0, v.Kb)(r).then((n) => {
            o.Z.dispatch({
                type: 'STORE_LISTING_FETCH_SUCCESS',
                channelId: e,
                storeListing: n.body
            });
        });
    },
    async createTextChannel(e, n, r, i) {
        let s = {
            type: b.d4z.GUILD_TEXT,
            name: n,
            permission_overwrites: []
        };
        null != r && (s.parent_id = r), null != i && (s.topic = i);
        let o = await a.tn.post({
            url: b.ANM.GUILD_CHANNELS(e),
            body: s,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return c.Z.checkGuildTemplateDirty(e), o;
    },
    fetchChannel: async (e) =>
        (
            await a.tn.get({
                url: b.ANM.CHANNEL(e),
                rejectWithError: !0
            })
        ).body
};
