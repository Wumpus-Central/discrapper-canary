"use strict";
n.d(t, { Ay: () => q, b5: () => Y, wn: () => H }), n(938796);
var r = n(735438),
    i = n.n(r),
    s = n(665260),
    a = n(311907),
    o = n(73153),
    l = n(544743),
    u = n(164956),
    d = n(152007),
    c = n(95701),
    _ = n(661191),
    f = n(734057),
    E = n(71393),
    h = n(287809),
    p = n(652215),
    m = n(406535),
    g = n(790782),
    A = n(355097);
let I = {},
    T = {},
    S = !1,
    y = !1,
    N = { flags: 0 },
    O = new l.Ay(),
    R = new l.Ay(),
    v = {
        suppress_everyone: !1,
        suppress_roles: !1,
        mute_scheduled_events: !1,
        mobile_push: !0,
        muted: !1,
        message_notifications: p.orn.ALL_MESSAGES,
        flags: 0,
        channel_overrides: {},
        notify_highlights: p.guM.NULL,
        hide_muted_channels: !1,
        version: -1,
        mute_config: null,
    },
    C = {
        [p.orn.ALL_MESSAGES]: { ...v, message_notifications: p.orn.ALL_MESSAGES },
        [p.orn.ONLY_MENTIONS]: { ...v, message_notifications: p.orn.ONLY_MENTIONS },
    },
    b = {},
    D = {},
    L = new Set(),
    w = new Set(),
    M = {},
    P = {};
function U(e, t) {
    let n = I[e],
        r = n?.channel_overrides ?? {},
        a = Y(t.channel_overrides),
        o = { ...H(e), ...n, ...t, channel_overrides: a };
    O.clearTimer(e),
        i().forEach(r, (e) => {
            R.clearTimer(e.channel_id);
        }),
        k(e, o),
        (I[e] = o),
        (b[e] = K(I[e]));
    let l = i().filter(o.channel_overrides, (e) => s.Lt(e.flags ?? 0, A.vv.OPT_IN_ENABLED));
    (D[e] = new Set(l.map((e) => e.channel_id))),
        (function (e) {
            if (null == e) return;
            let t = new Set(D[e]),
                n = M[e] ?? {};
            for (let e in n) {
                let r = n[e];
                s.Lt(r.flags, A.vv.OPT_IN_ENABLED) ? t.add(e) : t.delete(e);
            }
            Object.keys(n).length > 0 ? (P[e] = t) : delete P[e];
        })(e),
        delete T[e];
}
function k(e, t) {
    !0 === t.muted &&
        O.setTimer(e, t.mute_config, () => {
            x(e, { muted: !1 }), o.h.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: e });
        }) &&
        (t.muted = !1),
        i().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
                R.setTimer(t.channel_id, t.mute_config, () => {
                    G(e, t.channel_id, { muted: !1 }),
                        o.h.dispatch({ type: "CHANNEL_MUTE_EXPIRED", guildId: e, channelId: t.channel_id });
                }) &&
                (t.muted = !1);
        });
}
function x(e, t) {
    let n = I[e];
    U(e, { channel_overrides: n?.channel_overrides ?? {}, ...t });
}
function G(e, t, n) {
    let r = B(e, t, n);
    F(e, { [t]: r });
}
function V(e, t) {
    let n = {},
        r = (null != e ? M[e] : null) ?? {};
    _.default.keys(t).forEach((i) => {
        let s = B(e, i, t[i]);
        (n[i] = s), (r[i] = { flags: s.flags ?? 0 });
    }),
        null != e && (M[e] = { ...M[e], ...r }),
        F(e, n);
}
function F(e, t) {
    let n = I[e],
        r = n?.channel_overrides ?? {};
    U(e, { channel_overrides: null == n ? t : { ...r, ...t } });
}
function B(e, t, n) {
    let r = I[e];
    return { channel_id: t, muted: !1, ...(r?.channel_overrides ?? {})[t], ...n };
}
function H(e) {
    let t = E.A.getGuild(e);
    return C[null != t ? t.defaultMessageNotifications : p.orn.ALL_MESSAGES];
}
function Y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? i().keyBy(e, "channel_id") : e;
}
function W(e) {
    return I[e] ?? H(e);
}
function j(e) {
    (S = s.Lt(e.flags, m.i.USE_NEW_NOTIFICATIONS)), (y = s.Lt(e.flags, m.i.MENTION_ON_ALL_MESSAGES)), (N = e);
}
function K(e) {
    return new Set(
        null != e.channel_overrides
            ? i()(e.channel_overrides)
                  .filter((e) => (0, l.tG)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null,
    );
}
function $() {
    return !0;
}
class z extends a.Ay.PersistedStore {
    static displayName = "UserGuildSettingsStore";
    static persistKey = "collapsedGuilds";
    initialize(e) {
        this.waitFor(f.A, E.A, u.A, d.A, h.default),
            null != e &&
                ((S = e.useNewNotifications ?? !1),
                "userGuildSettings" in e &&
                    ((I = e.userGuildSettings),
                    (D = i().mapValues(e.optedInChannelsByGuild ?? {}, (e) => new Set(e))),
                    i().forEach(I, (e, t) => {
                        b[t] = K(e);
                    })));
    }
    getState() {
        return { useNewNotifications: S };
    }
    get mentionOnAllMessages() {
        return y;
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
        return (0, l.tG)(t);
    }
    isTemporarilyMuted(e) {
        let t = W(e);
        return (0, l.wG)(t);
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
        return null == n || null == n.message_notifications ? p.orn.NULL : n.message_notifications;
    }
    getChannelMuteConfig(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null != n ? n.mute_config : null;
    }
    getMutedChannels(e) {
        return b[e] ?? L;
    }
    isChannelMuted(e, t) {
        let n = f.A.getChannel(t);
        return (e = n?.getGuildId() ?? e), this.getMutedChannels(e).has(t);
    }
    isCategoryMuted(e, t) {
        let n = f.A.getChannel(t);
        if (null == n) return !1;
        let r = n.parent_id;
        return null != r && this.getMutedChannels(e).has(r);
    }
    resolvedMessageNotifications(e) {
        let t = this.getChannelMessageNotifications(e.guild_id, e.id);
        if (t !== p.orn.NULL) return t;
        if (null != e.parent_id) {
            let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
            if (t !== p.orn.NULL) return t;
        }
        return this.getMessageNotifications(e.guild_id);
    }
    resolveUnreadSetting(e) {
        if (c.Le.has(e.type) || (0, c.Gw)(e.type) || !S) return g.e.ALL_MESSAGES;
        let t = this.getChannelUnreadSetting(e.guild_id, e.id);
        if (t !== g.e.UNSET) return t;
        if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== g.e.UNSET) return t;
        }
        let n = this.getGuildUnreadSetting(e.guild_id);
        return n !== g.e.UNSET
            ? n
            : this.resolvedMessageNotifications(e) === p.orn.ALL_MESSAGES
              ? g.e.ALL_MESSAGES
              : g.e.ONLY_MENTIONS;
    }
    isGuildOrCategoryOrChannelMuted(e, t) {
        return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t);
    }
    allowNoMessages(e) {
        return (
            this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) ||
            this.resolvedMessageNotifications(e) === p.orn.NO_MESSAGES ||
            (this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e))
        );
    }
    allowAllMessages(e) {
        return (
            !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) &&
            this.resolvedMessageNotifications(e) === p.orn.ALL_MESSAGES &&
            (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
        );
    }
    isGuildCollapsed(e) {
        return I[e]?.hide_muted_channels === !0;
    }
    getAllSettings() {
        return { userGuildSettings: I, mutedChannels: b, optedInChannelsByGuild: D };
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
            if (s.Lt(t.flags, A.vv.NEW_FORUM_THREADS_ON)) return !0;
            if (s.Lt(t.flags, A.vv.NEW_FORUM_THREADS_OFF)) return !1;
        }
        return this.resolvedMessageNotifications(e) === p.orn.ALL_MESSAGES;
    }
    isOptInEnabled(e) {
        return (
            null != e &&
            (u.A.isFullServerPreview(e) ? u.A.isOptInEnabled(e) : s.Lt(this.getGuildFlags(e), A.n3.OPT_IN_CHANNELS_ON))
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
        return this.isChannelRecordOrParentOptedIn(f.A.getChannel(t), n);
    }
    isChannelOptedIn(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e) return !1;
        if (u.A.isFullServerPreview(e)) return u.A.isChannelOptedIn(e, t);
        if (n && null != P[e]) return P[e].has(t);
        let r = this.getChannelOverrides(e)[t]?.flags ?? 0;
        return s.Lt(r, A.vv.OPT_IN_ENABLED);
    }
    getOptedInChannels(e) {
        return u.A.isFullServerPreview(e) ? (u.A.getViewingChannels(e) ?? w) : (D[e] ?? w);
    }
    getOptedInChannelsWithPendingUpdates(e) {
        return P[e];
    }
    getPendingChannelUpdates(e) {
        return M[e];
    }
    getGuildFavorites(e) {
        if (u.A.isFullServerPreview(e)) return null;
        if (null == T[e]) {
            let t = i().filter(
                this.getChannelOverrides(e),
                (t) => s.Lt(t.flags ?? 0, A.vv.FAVORITED) && f.A.getChannel(t.channel_id)?.guild_id === e,
            );
            T[e] = t.map((e) => e.channel_id);
        }
        return T[e];
    }
    isFavorite(e, t) {
        return !u.A.isFullServerPreview(e) && this.getGuildFavorites(e)?.includes(t) === !0;
    }
    isMessagesFavorite(e) {
        let t = this.getChannelOverrides(null)[e]?.flags ?? 0;
        return s.Lt(t, A.vv.FAVORITED);
    }
    get accountNotificationSettings() {
        return N;
    }
    get useNewNotifications() {
        return S;
    }
    getGuildUnreadSetting(e) {
        if (!S) return g.e.ALL_MESSAGES;
        let t = this.getGuildFlags(e);
        return s.Lt(t, A.n3.UNREADS_ALL_MESSAGES)
            ? g.e.ALL_MESSAGES
            : s.Lt(t, A.n3.UNREADS_ONLY_MENTIONS)
              ? g.e.ONLY_MENTIONS
              : g.e.UNSET;
    }
    resolveGuildUnreadSetting(e) {
        let t = this.getGuildFlags(e.id);
        return !S || s.Lt(t, A.n3.UNREADS_ALL_MESSAGES)
            ? g.e.ALL_MESSAGES
            : s.Lt(t, A.n3.UNREADS_ONLY_MENTIONS)
              ? g.e.ONLY_MENTIONS
              : e.defaultMessageNotifications === p.orn.ALL_MESSAGES
                ? g.e.ALL_MESSAGES
                : g.e.ONLY_MENTIONS;
    }
    getChannelRecordUnreadSetting(e) {
        return this.getChannelUnreadSetting(e.guild_id, e.id);
    }
    getChannelUnreadSetting(e, t) {
        let n = this.getChannelIdFlags(e, t);
        return s.Lt(n, A.vv.UNREADS_ALL_MESSAGES)
            ? g.e.ALL_MESSAGES
            : s.Lt(n, A.vv.UNREADS_ONLY_MENTIONS)
              ? g.e.ONLY_MENTIONS
              : g.e.UNSET;
    }
}
let q = new z(o.h, {
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            U(e.guild_id, { channel_overrides: {}, ...e });
        });
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: function (e) {
        let { guildId: t, settings: n } = e;
        x(t, n);
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function (e) {
        let { guildId: t, settings: n } = e;
        x(t, n), V(t, n.channel_overrides);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: function (e) {
        let { guildId: t, channelId: n, settings: r } = e;
        null != t && null != r.flags && (M[t] = { ...M[t], [n]: { flags: r.flags } }), G(t, n, r);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function (e) {
        let { guildId: t, overrides: n } = e;
        return !(null == t || u.A.isFullServerPreview(t)) && (V(t, n), !0);
    },
    CONNECTION_OPEN: function (e) {
        j(e.notificationSettings), O.reset(), R.reset(), e.userGuildSettings.partial || ((I = {}), (b = {}), (D = {}));
        let t = new Set();
        for (let n in (e.userGuildSettings.entries.forEach((e) => {
            "channel_overrides" in e || (e.channel_overrides = {}),
                U(e.guild_id, e),
                null != e.guild_id && t.add(e.guild_id);
        }),
        I))
            t.has(n) || k(n, I[n]);
    },
    CACHE_LOADED: function (e) {
        null != e.userGuildSettings &&
            0 !== e.userGuildSettings.length &&
            ((I = {}),
            (b = {}),
            (D = {}),
            e.userGuildSettings.forEach((e) => {
                let t = e.guild_id;
                I[t] = e;
                let n = new Set(),
                    r = new Set();
                for (let t in e.channel_overrides) {
                    let i = e.channel_overrides[t];
                    (0, l.tG)(i) && n.add(t), s.Lt(i.flags ?? 0, A.vv.OPT_IN_ENABLED) && r.add(t);
                }
                (b[t] = n), (D[t] = r);
            }));
    },
    OVERLAY_INITIALIZE: function (e) {
        let { allUserGuildSettings: t } = e,
            { userGuildSettings: n, mutedChannels: r, optedInChannelsByGuild: i } = t;
        (I = { ...n }),
            (b = {}),
            (D = {}),
            _.default.keys(r).forEach((e) => {
                b[e] = new Set(r[e]);
            }),
            _.default.keys(i).forEach((e) => {
                D[e] = new Set(i[e]);
            });
    },
    GUILD_CREATE: $,
    GUILD_UPDATE: $,
    GUILD_TOGGLE_COLLAPSE_MUTED: function (e) {
        let { guildId: t } = e,
            n = null == I[t] ? H(t) : I[t];
        I[t] = { ...n, guild_id: t, hide_muted_channels: !0 !== n.hide_muted_channels };
    },
    IMPERSONATE_UPDATE: $,
    IMPERSONATE_STOP: $,
    USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function (e) {
        let { guildId: t, updates: n } = e;
        if (null == t) return !1;
        let r = M[t];
        if (null == r) return !1;
        for (let e in n) i().isEqual(n[e], r[e]) && delete r[e];
    },
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
        let { guildId: t } = e;
        if (null == t) return !1;
        delete M[t], delete P[t];
    },
    NOTIFICATION_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        j(t);
    },
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0,
});
