n.d(t, { Ay: () => q, b5: () => Y, wn: () => B }), n(938796);
var i = n(735438),
    r = n.n(i),
    l = n(665260),
    a = n(17928),
    s = n(228366),
    o = n(544743),
    d = n(164956),
    u = n(152007),
    c = n(95701),
    h = n(935208),
    E = n(734057),
    _ = n(71393),
    p = n(287809),
    A = n(652215),
    f = n(406535),
    g = n(790782),
    I = n(355097);
let T = {},
    S = {},
    m = !1,
    O = !1,
    C = { flags: 0 },
    N = new o.Ay(),
    y = new o.Ay(),
    R = {
        suppress_everyone: !1,
        suppress_roles: !1,
        mute_scheduled_events: !1,
        mobile_push: !0,
        muted: !1,
        message_notifications: A.orn.ALL_MESSAGES,
        flags: 0,
        channel_overrides: {},
        notify_highlights: A.guM.NULL,
        hide_muted_channels: !1,
        version: -1,
        mute_config: null,
    },
    L = {
        [A.orn.ALL_MESSAGES]: { ...R, message_notifications: A.orn.ALL_MESSAGES },
        [A.orn.ONLY_MENTIONS]: { ...R, message_notifications: A.orn.ONLY_MENTIONS },
    },
    v = {},
    D = {},
    b = new Set(),
    U = new Set(),
    P = {},
    M = {};
function w(e, t) {
    let n = T[e],
        i = n?.channel_overrides ?? {},
        a = Y(t.channel_overrides),
        s = { ...B(e), ...n, ...t, channel_overrides: a };
    N.clearTimer(e),
        r().forEach(i, (e) => {
            y.clearTimer(e.channel_id);
        }),
        G(e, s),
        (T[e] = s),
        (v[e] = z(T[e]));
    let o = r().filter(s.channel_overrides, (e) => l.Lt(e.flags ?? 0, I.vv.OPT_IN_ENABLED));
    (D[e] = new Set(o.map((e) => e.channel_id))),
        (function (e) {
            if (null == e) return;
            let t = new Set(D[e]),
                n = P[e] ?? {};
            for (let e in n) {
                let i = n[e];
                l.Lt(i.flags, I.vv.OPT_IN_ENABLED) ? t.add(e) : t.delete(e);
            }
            Object.keys(n).length > 0 ? (M[e] = t) : delete M[e];
        })(e),
        delete S[e];
}
function G(e, t) {
    !0 === t.muted &&
        N.setTimer(e, t.mute_config, () => {
            F(e, { muted: !1 }), s.h.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: e });
        }) &&
        (t.muted = !1),
        r().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
                y.setTimer(t.channel_id, t.mute_config, () => {
                    V(e, t.channel_id, { muted: !1 }),
                        s.h.dispatch({ type: "CHANNEL_MUTE_EXPIRED", guildId: e, channelId: t.channel_id });
                }) &&
                (t.muted = !1);
        });
}
function F(e, t) {
    let n = T[e];
    w(e, { channel_overrides: n?.channel_overrides ?? {}, ...t });
}
function V(e, t, n) {
    let i = H(e, t, n);
    x(e, { [t]: i });
}
function k(e, t) {
    let n = {},
        i = (null != e ? P[e] : null) ?? {};
    h.default.keys(t).forEach((r) => {
        let l = H(e, r, t[r]);
        (n[r] = l), (i[r] = { flags: l.flags ?? 0 });
    }),
        null != e && (P[e] = { ...P[e], ...i }),
        x(e, n);
}
function x(e, t) {
    let n = T[e],
        i = n?.channel_overrides ?? {};
    w(e, { channel_overrides: null == n ? t : { ...i, ...t } });
}
function H(e, t, n) {
    let i = T[e];
    return { channel_id: t, muted: !1, ...(i?.channel_overrides ?? {})[t], ...n };
}
function B(e) {
    let t = _.A.getGuild(e);
    return L[null != t ? t.defaultMessageNotifications : A.orn.ALL_MESSAGES];
}
function Y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? r().keyBy(e, "channel_id") : e;
}
function W(e) {
    return T[e] ?? B(e);
}
function $(e) {
    (m = l.Lt(e.flags, f.i.USE_NEW_NOTIFICATIONS)), (O = l.Lt(e.flags, f.i.MENTION_ON_ALL_MESSAGES)), (C = e);
}
function z(e) {
    return new Set(
        null != e.channel_overrides
            ? r()(e.channel_overrides)
                  .filter((e) => (0, o.tG)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null,
    );
}
function K() {
    return !0;
}
class j extends a.Ay.PersistedStore {
    static displayName = "UserGuildSettingsStore";
    static persistKey = "collapsedGuilds";
    initialize(e) {
        this.waitFor(E.A, _.A, d.A, u.A, p.default),
            null != e &&
                ((m = e.useNewNotifications ?? !1),
                "userGuildSettings" in e &&
                    ((T = e.userGuildSettings),
                    (D = r().mapValues(e.optedInChannelsByGuild ?? {}, (e) => new Set(e))),
                    r().forEach(T, (e, t) => {
                        v[t] = z(e);
                    })));
    }
    getState() {
        return { useNewNotifications: m };
    }
    get mentionOnAllMessages() {
        return O;
    }
    isSuppressEveryoneEnabled(e) {
        return W(e).suppress_everyone;
    }
    isSuppressRolesEnabled(e) {
        return W(e).suppress_roles;
    }
    isMuteScheduledEventsEnabled(e) {
        return W(e).mute_scheduled_events;
    }
    isMobilePushEnabled(e) {
        return W(e).mobile_push;
    }
    isMuted(e) {
        let t = W(e);
        return (0, o.tG)(t);
    }
    isTemporarilyMuted(e) {
        let t = W(e);
        return (0, o.wG)(t);
    }
    getMuteConfig(e) {
        return W(e).mute_config;
    }
    getMessageNotifications(e) {
        return W(e).message_notifications;
    }
    getChannelOverrides(e) {
        return W(e).channel_overrides ?? {};
    }
    getNotifyHighlights(e) {
        return W(e).notify_highlights;
    }
    getGuildFlags(e) {
        return W(e).flags;
    }
    getChannelMessageNotifications(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null == n || null == n.message_notifications ? A.orn.NULL : n.message_notifications;
    }
    getChannelMuteConfig(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null != n ? n.mute_config : null;
    }
    getMutedChannels(e) {
        return v[e] ?? b;
    }
    isChannelMuted(e, t) {
        let n = E.A.getChannel(t);
        return (e = n?.getGuildId() ?? e), this.getMutedChannels(e).has(t);
    }
    isCategoryMuted(e, t) {
        let n = E.A.getChannel(t);
        if (null == n) return !1;
        let i = n.parent_id;
        return null != i && this.getMutedChannels(e).has(i);
    }
    resolvedMessageNotifications(e) {
        let t = this.getChannelMessageNotifications(e.guild_id, e.id);
        if (t !== A.orn.NULL) return t;
        if (null != e.parent_id) {
            let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
            if (t !== A.orn.NULL) return t;
        }
        return this.getMessageNotifications(e.guild_id);
    }
    resolveUnreadSetting(e) {
        if (c.Le.has(e.type) || (0, c.Gw)(e.type) || !m) return g.e.ALL_MESSAGES;
        let t = this.getChannelUnreadSetting(e.guild_id, e.id);
        if (t !== g.e.UNSET) return t;
        if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== g.e.UNSET) return t;
        }
        let n = this.getGuildUnreadSetting(e.guild_id);
        return n !== g.e.UNSET
            ? n
            : this.resolvedMessageNotifications(e) === A.orn.ALL_MESSAGES
              ? g.e.ALL_MESSAGES
              : g.e.ONLY_MENTIONS;
    }
    isGuildOrCategoryOrChannelMuted(e, t) {
        return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t);
    }
    allowNoMessages(e) {
        return (
            this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) ||
            this.resolvedMessageNotifications(e) === A.orn.NO_MESSAGES ||
            (this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e))
        );
    }
    allowAllMessages(e) {
        return (
            !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) &&
            this.resolvedMessageNotifications(e) === A.orn.ALL_MESSAGES &&
            (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
        );
    }
    isGuildCollapsed(e) {
        return T[e]?.hide_muted_channels === !0;
    }
    getAllSettings() {
        return { userGuildSettings: T, mutedChannels: v, optedInChannelsByGuild: D };
    }
    getChannelIdFlags(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return n?.flags ?? 0;
    }
    getChannelFlags(e) {
        return this.getChannelIdFlags(e.guild_id, e.id);
    }
    getNewForumThreadsCreated(e) {
        let t = this.getChannelOverrides(e.guild_id)[e.id];
        if (null != t && null != t.flags) {
            if (l.Lt(t.flags, I.vv.NEW_FORUM_THREADS_ON)) return !0;
            if (l.Lt(t.flags, I.vv.NEW_FORUM_THREADS_OFF)) return !1;
        }
        return this.resolvedMessageNotifications(e) === A.orn.ALL_MESSAGES;
    }
    isOptInEnabled(e) {
        return (
            null != e &&
            (d.A.isFullServerPreview(e) ? d.A.isOptInEnabled(e) : l.Lt(this.getGuildFlags(e), I.n3.OPT_IN_CHANNELS_ON))
        );
    }
    isChannelRecordOrParentOptedIn(e, t) {
        return (
            null != e &&
            null != e.guild_id &&
            (this.isChannelOptedIn(e.guild_id, e.id, t) ||
                (null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t)))
        );
    }
    isChannelOrParentOptedIn(e, t, n) {
        return this.isChannelRecordOrParentOptedIn(E.A.getChannel(t), n);
    }
    isChannelOptedIn(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e) return !1;
        if (d.A.isFullServerPreview(e)) return d.A.isChannelOptedIn(e, t);
        if (n && null != M[e]) return M[e].has(t);
        let i = this.getChannelOverrides(e)[t]?.flags ?? 0;
        return l.Lt(i, I.vv.OPT_IN_ENABLED);
    }
    getOptedInChannels(e) {
        return d.A.isFullServerPreview(e) ? (d.A.getViewingChannels(e) ?? U) : (D[e] ?? U);
    }
    getOptedInChannelsWithPendingUpdates(e) {
        return M[e];
    }
    getPendingChannelUpdates(e) {
        return P[e];
    }
    getGuildFavorites(e) {
        if (d.A.isFullServerPreview(e)) return null;
        if (null == S[e]) {
            let t = r().filter(
                this.getChannelOverrides(e),
                (t) => l.Lt(t.flags ?? 0, I.vv.FAVORITED) && E.A.getChannel(t.channel_id)?.guild_id === e,
            );
            S[e] = t.map((e) => e.channel_id);
        }
        return S[e];
    }
    isFavorite(e, t) {
        return !d.A.isFullServerPreview(e) && this.getGuildFavorites(e)?.includes(t) === !0;
    }
    isMessagesFavorite(e) {
        let t = this.getChannelOverrides(null)[e]?.flags ?? 0;
        return l.Lt(t, I.vv.FAVORITED);
    }
    get accountNotificationSettings() {
        return C;
    }
    get useNewNotifications() {
        return m;
    }
    getGuildUnreadSetting(e) {
        if (!m) return g.e.ALL_MESSAGES;
        let t = this.getGuildFlags(e);
        return l.Lt(t, I.n3.UNREADS_ALL_MESSAGES)
            ? g.e.ALL_MESSAGES
            : l.Lt(t, I.n3.UNREADS_ONLY_MENTIONS)
              ? g.e.ONLY_MENTIONS
              : g.e.UNSET;
    }
    resolveGuildUnreadSetting(e) {
        let t = this.getGuildFlags(e.id);
        return !m || l.Lt(t, I.n3.UNREADS_ALL_MESSAGES)
            ? g.e.ALL_MESSAGES
            : l.Lt(t, I.n3.UNREADS_ONLY_MENTIONS)
              ? g.e.ONLY_MENTIONS
              : e.defaultMessageNotifications === A.orn.ALL_MESSAGES
                ? g.e.ALL_MESSAGES
                : g.e.ONLY_MENTIONS;
    }
    getChannelRecordUnreadSetting(e) {
        return this.getChannelUnreadSetting(e.guild_id, e.id);
    }
    getChannelUnreadSetting(e, t) {
        let n = this.getChannelIdFlags(e, t);
        return l.Lt(n, I.vv.UNREADS_ALL_MESSAGES)
            ? g.e.ALL_MESSAGES
            : l.Lt(n, I.vv.UNREADS_ONLY_MENTIONS)
              ? g.e.ONLY_MENTIONS
              : g.e.UNSET;
    }
}
let q = new j(s.h, {
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            w(e.guild_id, { channel_overrides: {}, ...e });
        });
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: function (e) {
        let { guildId: t, settings: n } = e;
        F(t, n);
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function (e) {
        let { guildId: t, settings: n } = e;
        F(t, n), k(t, n.channel_overrides);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: function (e) {
        let { guildId: t, channelId: n, settings: i } = e;
        null != t && null != i.flags && (P[t] = { ...P[t], [n]: { flags: i.flags } }), V(t, n, i);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function (e) {
        let { guildId: t, overrides: n } = e;
        return !(null == t || d.A.isFullServerPreview(t)) && (k(t, n), !0);
    },
    CONNECTION_OPEN: function (e) {
        $(e.notificationSettings), N.reset(), y.reset(), e.userGuildSettings.partial || ((T = {}), (v = {}), (D = {}));
        let t = new Set();
        for (let n in (e.userGuildSettings.entries.forEach((e) => {
            "channel_overrides" in e || (e.channel_overrides = {}),
                w(e.guild_id, e),
                null != e.guild_id && t.add(e.guild_id);
        }),
        T))
            t.has(n) || G(n, T[n]);
    },
    CACHE_LOADED: function (e) {
        null != e.userGuildSettings &&
            0 !== e.userGuildSettings.length &&
            ((T = {}),
            (v = {}),
            (D = {}),
            e.userGuildSettings.forEach((e) => {
                let t = e.guild_id;
                T[t] = e;
                let n = new Set(),
                    i = new Set();
                for (let t in e.channel_overrides) {
                    let r = e.channel_overrides[t];
                    (0, o.tG)(r) && n.add(t), l.Lt(r.flags ?? 0, I.vv.OPT_IN_ENABLED) && i.add(t);
                }
                (v[t] = n), (D[t] = i);
            }));
    },
    OVERLAY_INITIALIZE: function (e) {
        let { allUserGuildSettings: t } = e,
            { userGuildSettings: n, mutedChannels: i, optedInChannelsByGuild: r } = t;
        (T = { ...n }),
            (v = {}),
            (D = {}),
            h.default.keys(i).forEach((e) => {
                v[e] = new Set(i[e]);
            }),
            h.default.keys(r).forEach((e) => {
                D[e] = new Set(r[e]);
            });
    },
    GUILD_CREATE: K,
    GUILD_UPDATE: K,
    GUILD_TOGGLE_COLLAPSE_MUTED: function (e) {
        let { guildId: t } = e,
            n = null == T[t] ? B(t) : T[t];
        T[t] = { ...n, guild_id: t, hide_muted_channels: !0 !== n.hide_muted_channels };
    },
    IMPERSONATE_UPDATE: K,
    IMPERSONATE_STOP: K,
    USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function (e) {
        let { guildId: t, updates: n } = e;
        if (null == t) return !1;
        let i = P[t];
        if (null == i) return !1;
        for (let e in n) r().isEqual(n[e], i[e]) && delete i[e];
    },
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
        let { guildId: t } = e;
        if (null == t) return !1;
        delete P[t], delete M[t];
    },
    NOTIFICATION_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        $(t);
    },
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0,
});
