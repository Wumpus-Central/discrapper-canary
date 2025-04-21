n.d(t, { Z: () => A }), n(388685);
var r = n(544891),
    i = n(780384),
    a = n(570140),
    o = n(802098),
    s = n(702321),
    l = n(408987),
    c = n(777639),
    u = n(895886),
    d = n(703656),
    f = n(359110),
    _ = n(131704),
    p = n(592125),
    h = n(306680),
    m = n(626135),
    g = n(73346),
    E = n(26151),
    b = n(287734),
    y = n(981631),
    v = n(388032);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = {
    async openPrivateChannel(e) {
        let { recipientIds: t, joinCall: n = !1, joinCallVideo: i = !1, location: a, onBeforeTransition: o, navigateToChannel: s = !0 } = e,
            l = this._getRecipients(t),
            c = (e) => {
                n && E.Z.call(e.id, i, !0, e.isDM() ? e.getRecipientId() : null);
            };
        if (1 === l.length) {
            let [e] = l,
                t = this._openCachedDMChannel(e, o, s);
            if (null != t) return c(t), Promise.resolve(t.id);
        }
        try {
            let e = await r.tn.post({
                url: y.ANM.USER_CHANNELS,
                body: { recipients: l },
                context: { location: a },
                oldFormErrors: !0,
                retries: 3,
                rejectWithError: !1
            });
            if (s) {
                null == o || o();
                let t = this._openPrivateChannel(e.body);
                c(t);
            }
            return e.body.id;
        } catch (e) {
            var d;
            throw ((null == e || null == (d = e.body) ? void 0 : d.code) === y.evJ.QUARANTINED && (0, u.default)(), e);
        }
    },
    _openCachedDMChannel(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = p.Z.getDMFromUserId(e),
            i = null != r ? p.Z.getChannel(r) : null;
        return null == i ? null : (n && (null == t || t(), null != (0, c.D)() ? (0, f.Kh)(i.id, { navigationReplace: !0 }) : b.default.selectPrivateChannel(i.id)), i);
    },
    async ensurePrivateChannel(e) {
        let t = this._getRecipients(e),
            n = await r.tn.post({
                url: y.ANM.USER_CHANNELS,
                body: { recipients: t },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            i = (0, _.q_)(n.body);
        return (
            a.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: i
            }),
            i.id
        );
    },
    async getOrEnsurePrivateChannel(e) {
        let t = p.Z.getDMFromUserId(e);
        return null != t ? t : await this.ensurePrivateChannel(e);
    },
    async getDMChannel(e) {
        let t = await r.tn.get({
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
            null != (0, c.D)() ? (0, f.Kh)(t.id, { navigationReplace: !0 }) : b.default.selectPrivateChannel(t.id),
            t
        );
    },
    closePrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            (0, s.Z)(e) &&
                m.default.track(y.rMx.CHANGE_LOG_DM_REMOVED, {
                    last_changelog_id: o.Z.latestChangelogId(),
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
            r.tn
                .del({
                    url: y.ANM.CHANNEL(e),
                    query: { silent: n },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(() => {
                    i.uv.announce(v.intl.string(v.t.nRbucn));
                })
                .catch(() => {
                    i.uv.announce(v.intl.string(v.t.ndXVIy));
                })
        );
    },
    async updatePermissionOverwrite(e, t) {
        let n = await r.tn.put({
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
        let n = await r.tn.del({
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
        return r.tn
            .put({
                url: y.ANM.CHANNEL_RECIPIENT(e, t),
                context: { location: n },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((t) => ((i.uv.announce(v.intl.string(v.t.cU0t1N)), null == a || a(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e))
            .catch(() => (i.uv.announce(v.intl.string(v.t['8GEden'])), e));
    },
    addRecipients(e, t, n, r) {
        return this.addRecipient(e, t[0], n, r).then((e) => Promise.all(t.slice(1).map((t) => this.addRecipient(e, t, n))).then(() => e));
    },
    removeRecipient: (e, t) =>
        r.tn.del({
            url: y.ANM.CHANNEL_RECIPIENT(e, t),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    setDMOwner: (e, t) =>
        r.tn.patch({
            url: y.ANM.CHANNEL(e),
            body: { owner: t },
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    async setName(e, t) {
        let n = p.Z.getChannel(e),
            i = await r.tn.patch({
                url: y.ANM.CHANNEL(e),
                body: { name: t },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            a = null == n ? void 0 : n.getGuildId();
        return null == a || (null == n ? void 0 : n.isThread()) || l.Z.checkGuildTemplateDirty(a), i;
    },
    async setIcon(e, t, n) {
        let i = p.Z.getChannel(e),
            a = {
                channel_id: e,
                channel_type: null == i ? void 0 : i.type,
                old_icon_set: (null == i ? void 0 : i.icon) != null,
                new_icon_set: null != t,
                location: n
            };
        m.default.track(y.rMx.CHANNEL_ICON_EDIT_PROGRESSED, T(I({}, a), { status: 'initiated' }));
        try {
            let n = await r.tn.patch({
                url: y.ANM.CHANNEL(e),
                body: { icon: t },
                oldFormErrors: !0,
                rejectWithError: !0,
                failImmediatelyWhenRateLimited: !0
            });
            m.default.track(y.rMx.CHANNEL_ICON_EDIT_PROGRESSED, T(I({}, a), { status: 'success' }));
            let o = null == i ? void 0 : i.getGuildId();
            return null == o || (null == i ? void 0 : i.isThread()) || l.Z.checkGuildTemplateDirty(o), n;
        } catch (e) {
            var o, s;
            throw (
                (m.default.track(
                    y.rMx.CHANNEL_ICON_EDIT_PROGRESSED,
                    T(I({}, a), {
                        status: 'failed',
                        is_rate_limited: (null == e || null == (o = e.body) ? void 0 : o.retry_after) != null,
                        error_message: null == e || null == (s = e.body) ? void 0 : s.message
                    })
                ),
                e)
            );
        }
    },
    setWallpaper: async (e, t) =>
        await r.tn.patch({
            url: y.ANM.CHANNEL(e),
            body: { wallpaper_id: t },
            oldFormErrors: !0,
            rejectWithError: !0
        }),
    convertToGuild: (e) =>
        r.tn.post({
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
    async createTextChannel(e, t, n, i) {
        let a = {
            type: y.d4z.GUILD_TEXT,
            name: t,
            permission_overwrites: []
        };
        null != n && (a.parent_id = n), null != i && (a.topic = i);
        let o = await r.tn.post({
            url: y.ANM.GUILD_CHANNELS(e),
            body: a,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.checkGuildTemplateDirty(e), o;
    },
    fetchChannel: async (e) =>
        (
            await r.tn.get({
                url: y.ANM.CHANNEL(e),
                rejectWithError: !0
            })
        ).body
};
