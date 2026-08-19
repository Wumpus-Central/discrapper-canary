"use strict";
n.d(t, { Ay: () => Z, b5: () => j, wn: () => H }), n(938796);
var i = n(435558),
    r = n.n(i),
    a = n(665260),
    s = n(17928),
    l = n(228366),
    o = n(544743),
    d = n(164956),
    c = n(152007),
    u = n(95701),
    _ = n(935208),
    E = n(734057),
    A = n(71393),
    h = n(287809),
    I = n(652215),
    f = n(406535),
    p = n(790782),
    T = n(355097);
let m = {},
    g = {},
    S = !1,
    N = !1,
    C = { flags: 0 },
    O = new o.Ay(),
    R = new o.Ay(),
    L = {
        suppress_everyone: !1,
        suppress_roles: !1,
        mute_scheduled_events: !1,
        mobile_push: !0,
        muted: !1,
        message_notifications: I.orn.ALL_MESSAGES,
        flags: 0,
        channel_overrides: {},
        notify_highlights: I.guM.NULL,
        hide_muted_channels: !1,
        version: -1,
        mute_config: null,
    },
    y = {
        [I.orn.ALL_MESSAGES]: { ...L, message_notifications: I.orn.ALL_MESSAGES },
        [I.orn.ONLY_MENTIONS]: { ...L, message_notifications: I.orn.ONLY_MENTIONS },
    },
    D = {},
    v = {},
    b = new Set(),
    M = new Set(),
    P = {},
    U = {};
function w(e, t) {
    let n = m[e],
        i = n?.channel_overrides ?? {},
        s = j(t.channel_overrides),
        l = { ...H(e), ...n, ...t, channel_overrides: s };
    O.clearTimer(e),
        r().forEach(i, (e) => {
            R.clearTimer(e.channel_id);
        }),
        G(e, l),
        (m[e] = l),
        (D[e] = K(m[e]));
    let o = r().filter(l.channel_overrides, (e) => a.Lt(e.flags ?? 0, T.vv.OPT_IN_ENABLED));
    (v[e] = new Set(o.map((e) => e.channel_id))),
        (function (e) {
            if (null == e) return;
            let t = new Set(v[e]),
                n = P[e] ?? {};
            for (let e in n) {
                let i = n[e];
                a.Lt(i.flags, T.vv.OPT_IN_ENABLED) ? t.add(e) : t.delete(e);
            }
            Object.keys(n).length > 0 ? (U[e] = t) : delete U[e];
        })(e),
        delete g[e];
}
function G(e, t) {
    !0 === t.muted &&
        O.setTimer(e, t.mute_config, () => {
            x(e, { muted: !1 }), l.h.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: e });
        }) &&
        (t.muted = !1),
        r().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
                R.setTimer(t.channel_id, t.mute_config, () => {
                    k(e, t.channel_id, { muted: !1 }),
                        l.h.dispatch({ type: "CHANNEL_MUTE_EXPIRED", guildId: e, channelId: t.channel_id });
                }) &&
                (t.muted = !1);
        });
}
function x(e, t) {
    let n = m[e];
    w(e, { channel_overrides: n?.channel_overrides ?? {}, ...t });
}
function k(e, t, n) {
    let i = B(e, t, n);
    V(e, { [t]: i });
}
function F(e, t) {
    let n = {},
        i = (null != e ? P[e] : null) ?? {};
    _.default.keys(t).forEach((r) => {
        let a = B(e, r, t[r]);
        (n[r] = a), (i[r] = { flags: a.flags ?? 0 });
    }),
        null != e && (P[e] = { ...P[e], ...i }),
        V(e, n);
}
function V(e, t) {
    let n = m[e],
        i = n?.channel_overrides ?? {};
    w(e, { channel_overrides: null == n ? t : { ...i, ...t } });
}
function B(e, t, n) {
    let i = m[e];
    return { channel_id: t, muted: !1, ...(i?.channel_overrides ?? {})[t], ...n };
}
function H(e) {
    let t = A.A.getGuild(e);
    return y[null != t ? t.defaultMessageNotifications : I.orn.ALL_MESSAGES];
}
function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? r().keyBy(e, "channel_id") : e;
}
function W(e) {
    return m[e] ?? H(e);
}
function Y(e) {
    (S = a.Lt(e.flags, f.i.USE_NEW_NOTIFICATIONS)), (N = a.Lt(e.flags, f.i.MENTION_ON_ALL_MESSAGES)), (C = e);
}
function K(e) {
    return new Set(
        null != e.channel_overrides
            ? r()(e.channel_overrides)
                  .filter((e) => (0, o.tG)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null,
    );
}
function $() {
    return !0;
}
class z extends s.Ay.PersistedStore {
    static displayName = "UserGuildSettingsStore";
    static persistKey = "collapsedGuilds";
    initialize(e) {
        this.waitFor(E.A, A.A, d.A, c.A, h.default),
            null != e &&
                ((S = e.useNewNotifications ?? !1),
                "userGuildSettings" in e &&
                    ((m = e.userGuildSettings),
                    (v = r().mapValues(e.optedInChannelsByGuild ?? {}, (e) => new Set(e))),
                    r().forEach(m, (e, t) => {
                        D[t] = K(e);
                    })));
    }
    getState() {
        return { useNewNotifications: S };
    }
    get mentionOnAllMessages() {
        return N;
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
        return null == n || null == n.message_notifications ? I.orn.NULL : n.message_notifications;
    }
    getChannelMuteConfig(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null != n ? n.mute_config : null;
    }
    getMutedChannels(e) {
        return D[e] ?? b;
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
        if (t !== I.orn.NULL) return t;
        if (null != e.parent_id) {
            let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
            if (t !== I.orn.NULL) return t;
        }
        return this.getMessageNotifications(e.guild_id);
    }
    resolveUnreadSetting(e) {
        if (u.Le.has(e.type) || (0, u.Gw)(e.type) || !S) return p.e.ALL_MESSAGES;
        let t = this.getChannelUnreadSetting(e.guild_id, e.id);
        if (t !== p.e.UNSET) return t;
        if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== p.e.UNSET) return t;
        }
        let n = this.getGuildUnreadSetting(e.guild_id);
        return n !== p.e.UNSET
            ? n
            : this.resolvedMessageNotifications(e) === I.orn.ALL_MESSAGES
              ? p.e.ALL_MESSAGES
              : p.e.ONLY_MENTIONS;
    }
    isGuildOrCategoryOrChannelMuted(e, t) {
        return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t);
    }
    allowNoMessages(e) {
        return (
            this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) ||
            this.resolvedMessageNotifications(e) === I.orn.NO_MESSAGES ||
            (this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e))
        );
    }
    allowAllMessages(e) {
        return (
            !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) &&
            this.resolvedMessageNotifications(e) === I.orn.ALL_MESSAGES &&
            (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
        );
    }
    isGuildCollapsed(e) {
        return m[e]?.hide_muted_channels === !0;
    }
    getAllSettings() {
        return { userGuildSettings: m, mutedChannels: D, optedInChannelsByGuild: v };
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
            if (a.Lt(t.flags, T.vv.NEW_FORUM_THREADS_ON)) return !0;
            if (a.Lt(t.flags, T.vv.NEW_FORUM_THREADS_OFF)) return !1;
        }
        return this.resolvedMessageNotifications(e) === I.orn.ALL_MESSAGES;
    }
    isOptInEnabled(e) {
        return (
            null != e &&
            (d.A.isFullServerPreview(e) ? d.A.isOptInEnabled(e) : a.Lt(this.getGuildFlags(e), T.n3.OPT_IN_CHANNELS_ON))
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
        if (n && null != U[e]) return U[e].has(t);
        let i = this.getChannelOverrides(e)[t]?.flags ?? 0;
        return a.Lt(i, T.vv.OPT_IN_ENABLED);
    }
    getOptedInChannels(e) {
        return d.A.isFullServerPreview(e) ? (d.A.getViewingChannels(e) ?? M) : (v[e] ?? M);
    }
    getOptedInChannelsWithPendingUpdates(e) {
        return U[e];
    }
    getPendingChannelUpdates(e) {
        return P[e];
    }
    getGuildFavorites(e) {
        if (d.A.isFullServerPreview(e)) return null;
        if (null == g[e]) {
            let t = r().filter(
                this.getChannelOverrides(e),
                (t) => a.Lt(t.flags ?? 0, T.vv.FAVORITED) && E.A.getChannel(t.channel_id)?.guild_id === e,
            );
            g[e] = t.map((e) => e.channel_id);
        }
        return g[e];
    }
    isFavorite(e, t) {
        return !d.A.isFullServerPreview(e) && this.getGuildFavorites(e)?.includes(t) === !0;
    }
    isMessagesFavorite(e) {
        let t = this.getChannelOverrides(null)[e]?.flags ?? 0;
        return a.Lt(t, T.vv.FAVORITED);
    }
    get accountNotificationSettings() {
        return C;
    }
    get useNewNotifications() {
        return S;
    }
    getGuildUnreadSetting(e) {
        if (!S) return p.e.ALL_MESSAGES;
        let t = this.getGuildFlags(e);
        return a.Lt(t, T.n3.UNREADS_ALL_MESSAGES)
            ? p.e.ALL_MESSAGES
            : a.Lt(t, T.n3.UNREADS_ONLY_MENTIONS)
              ? p.e.ONLY_MENTIONS
              : p.e.UNSET;
    }
    resolveGuildUnreadSetting(e) {
        let t = this.getGuildFlags(e.id);
        return !S || a.Lt(t, T.n3.UNREADS_ALL_MESSAGES)
            ? p.e.ALL_MESSAGES
            : a.Lt(t, T.n3.UNREADS_ONLY_MENTIONS)
              ? p.e.ONLY_MENTIONS
              : e.defaultMessageNotifications === I.orn.ALL_MESSAGES
                ? p.e.ALL_MESSAGES
                : p.e.ONLY_MENTIONS;
    }
    getChannelRecordUnreadSetting(e) {
        return this.getChannelUnreadSetting(e.guild_id, e.id);
    }
    getChannelUnreadSetting(e, t) {
        let n = this.getChannelIdFlags(e, t);
        return a.Lt(n, T.vv.UNREADS_ALL_MESSAGES)
            ? p.e.ALL_MESSAGES
            : a.Lt(n, T.vv.UNREADS_ONLY_MENTIONS)
              ? p.e.ONLY_MENTIONS
              : p.e.UNSET;
    }
}
let Z = new z(l.h, {
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            w(e.guild_id, { channel_overrides: {}, ...e });
        });
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: function (e) {
        let { guildId: t, settings: n } = e;
        x(t, n);
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function (e) {
        let { guildId: t, settings: n } = e;
        x(t, n), F(t, n.channel_overrides);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: function (e) {
        let { guildId: t, channelId: n, settings: i } = e;
        null != t && null != i.flags && (P[t] = { ...P[t], [n]: { flags: i.flags } }), k(t, n, i);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function (e) {
        let { guildId: t, overrides: n } = e;
        return !(null == t || d.A.isFullServerPreview(t)) && (F(t, n), !0);
    },
    CONNECTION_OPEN: function (e) {
        Y(e.notificationSettings), O.reset(), R.reset(), e.userGuildSettings.partial || ((m = {}), (D = {}), (v = {}));
        let t = new Set();
        for (let n in (e.userGuildSettings.entries.forEach((e) => {
            "channel_overrides" in e || (e.channel_overrides = {}),
                w(e.guild_id, e),
                null != e.guild_id && t.add(e.guild_id);
        }),
        m))
            t.has(n) || G(n, m[n]);
    },
    CACHE_LOADED: function (e) {
        null != e.userGuildSettings &&
            0 !== e.userGuildSettings.length &&
            ((m = {}),
            (D = {}),
            (v = {}),
            e.userGuildSettings.forEach((e) => {
                let t = e.guild_id;
                m[t] = e;
                let n = new Set(),
                    i = new Set();
                for (let t in e.channel_overrides) {
                    let r = e.channel_overrides[t];
                    (0, o.tG)(r) && n.add(t), a.Lt(r.flags ?? 0, T.vv.OPT_IN_ENABLED) && i.add(t);
                }
                (D[t] = n), (v[t] = i);
            }));
    },
    OVERLAY_INITIALIZE: function (e) {
        let { allUserGuildSettings: t } = e,
            { userGuildSettings: n, mutedChannels: i, optedInChannelsByGuild: r } = t;
        (m = { ...n }),
            (D = {}),
            (v = {}),
            _.default.keys(i).forEach((e) => {
                D[e] = new Set(i[e]);
            }),
            _.default.keys(r).forEach((e) => {
                v[e] = new Set(r[e]);
            });
    },
    GUILD_CREATE: $,
    GUILD_UPDATE: $,
    GUILD_TOGGLE_COLLAPSE_MUTED: function (e) {
        let { guildId: t } = e,
            n = null == m[t] ? H(t) : m[t];
        m[t] = { ...n, guild_id: t, hide_muted_channels: !0 !== n.hide_muted_channels };
    },
    IMPERSONATE_UPDATE: $,
    IMPERSONATE_STOP: $,
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
        delete P[t], delete U[t];
    },
    NOTIFICATION_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        Y(t);
    },
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0,
});
