"use strict";
n.d(t, { Ay: () => q, b5: () => j, wn: () => H }), n(938796);
var i = n(735438),
    r = n.n(i),
    s = n(665260),
    a = n(17928),
    o = n(228366),
    l = n(544743),
    u = n(164956),
    c = n(152007),
    d = n(95701),
    _ = n(935208),
    f = n(734057),
    h = n(71393),
    p = n(287809),
    E = n(652215),
    m = n(406535),
    g = n(790782),
    A = n(355097);
let I = {},
    T = {},
    S = !1,
    N = !1,
    y = { flags: 0 },
    C = new l.Ay(),
    v = new l.Ay(),
    O = {
        suppress_everyone: !1,
        suppress_roles: !1,
        mute_scheduled_events: !1,
        mobile_push: !0,
        muted: !1,
        message_notifications: E.orn.ALL_MESSAGES,
        flags: 0,
        channel_overrides: {},
        notify_highlights: E.guM.NULL,
        hide_muted_channels: !1,
        version: -1,
        mute_config: null,
    },
    R = {
        [E.orn.ALL_MESSAGES]: { ...O, message_notifications: E.orn.ALL_MESSAGES },
        [E.orn.ONLY_MENTIONS]: { ...O, message_notifications: E.orn.ONLY_MENTIONS },
    },
    b = {},
    D = {},
    L = new Set(),
    w = new Set(),
    M = {},
    P = {};
function x(e, t) {
    let n = I[e],
        i = n?.channel_overrides ?? {},
        a = j(t.channel_overrides),
        o = { ...H(e), ...n, ...t, channel_overrides: a };
    C.clearTimer(e),
        r().forEach(i, (e) => {
            v.clearTimer(e.channel_id);
        }),
        U(e, o),
        (I[e] = o),
        (b[e] = K(I[e]));
    let l = r().filter(o.channel_overrides, (e) => s.Lt(e.flags ?? 0, A.vv.OPT_IN_ENABLED));
    (D[e] = new Set(l.map((e) => e.channel_id))),
        (function (e) {
            if (null == e) return;
            let t = new Set(D[e]),
                n = M[e] ?? {};
            for (let e in n) {
                let i = n[e];
                s.Lt(i.flags, A.vv.OPT_IN_ENABLED) ? t.add(e) : t.delete(e);
            }
            Object.keys(n).length > 0 ? (P[e] = t) : delete P[e];
        })(e),
        delete T[e];
}
function U(e, t) {
    !0 === t.muted &&
        C.setTimer(e, t.mute_config, () => {
            k(e, { muted: !1 }), o.h.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: e });
        }) &&
        (t.muted = !1),
        r().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
                v.setTimer(t.channel_id, t.mute_config, () => {
                    G(e, t.channel_id, { muted: !1 }),
                        o.h.dispatch({ type: "CHANNEL_MUTE_EXPIRED", guildId: e, channelId: t.channel_id });
                }) &&
                (t.muted = !1);
        });
}
function k(e, t) {
    let n = I[e];
    x(e, { channel_overrides: n?.channel_overrides ?? {}, ...t });
}
function G(e, t, n) {
    let i = B(e, t, n);
    V(e, { [t]: i });
}
function F(e, t) {
    let n = {},
        i = (null != e ? M[e] : null) ?? {};
    _.default.keys(t).forEach((r) => {
        let s = B(e, r, t[r]);
        (n[r] = s), (i[r] = { flags: s.flags ?? 0 });
    }),
        null != e && (M[e] = { ...M[e], ...i }),
        V(e, n);
}
function V(e, t) {
    let n = I[e],
        i = n?.channel_overrides ?? {};
    x(e, { channel_overrides: null == n ? t : { ...i, ...t } });
}
function B(e, t, n) {
    let i = I[e];
    return { channel_id: t, muted: !1, ...(i?.channel_overrides ?? {})[t], ...n };
}
function H(e) {
    let t = h.A.getGuild(e);
    return R[null != t ? t.defaultMessageNotifications : E.orn.ALL_MESSAGES];
}
function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? r().keyBy(e, "channel_id") : e;
}
function Y(e) {
    return I[e] ?? H(e);
}
function W(e) {
    (S = s.Lt(e.flags, m.i.USE_NEW_NOTIFICATIONS)), (N = s.Lt(e.flags, m.i.MENTION_ON_ALL_MESSAGES)), (y = e);
}
function K(e) {
    return new Set(
        null != e.channel_overrides
            ? r()(e.channel_overrides)
                  .filter((e) => (0, l.tG)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null,
    );
}
function z() {
    return !0;
}
class $ extends a.Ay.PersistedStore {
    static displayName = "UserGuildSettingsStore";
    static persistKey = "collapsedGuilds";
    initialize(e) {
        this.waitFor(f.A, h.A, u.A, c.A, p.default),
            null != e &&
                ((S = e.useNewNotifications ?? !1),
                "userGuildSettings" in e &&
                    ((I = e.userGuildSettings),
                    (D = r().mapValues(e.optedInChannelsByGuild ?? {}, (e) => new Set(e))),
                    r().forEach(I, (e, t) => {
                        b[t] = K(e);
                    })));
    }
    getState() {
        return { useNewNotifications: S };
    }
    get mentionOnAllMessages() {
        return N;
    }
    isSuppressEveryoneEnabled(e) {
        return Y(e).suppress_everyone;
    }
    isSuppressRolesEnabled(e) {
        return Y(e).suppress_roles;
    }
    isMuteScheduledEventsEnabled(e) {
        return Y(e).mute_scheduled_events;
    }
    isMobilePushEnabled(e) {
        return Y(e).mobile_push;
    }
    isMuted(e) {
        let t = Y(e);
        return (0, l.tG)(t);
    }
    isTemporarilyMuted(e) {
        let t = Y(e);
        return (0, l.wG)(t);
    }
    getMuteConfig(e) {
        return Y(e).mute_config;
    }
    getMessageNotifications(e) {
        return Y(e).message_notifications;
    }
    getChannelOverrides(e) {
        return Y(e).channel_overrides ?? {};
    }
    getNotifyHighlights(e) {
        return Y(e).notify_highlights;
    }
    getGuildFlags(e) {
        return Y(e).flags;
    }
    getChannelMessageNotifications(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null == n || null == n.message_notifications ? E.orn.NULL : n.message_notifications;
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
        let i = n.parent_id;
        return null != i && this.getMutedChannels(e).has(i);
    }
    resolvedMessageNotifications(e) {
        let t = this.getChannelMessageNotifications(e.guild_id, e.id);
        if (t !== E.orn.NULL) return t;
        if (null != e.parent_id) {
            let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
            if (t !== E.orn.NULL) return t;
        }
        return this.getMessageNotifications(e.guild_id);
    }
    resolveUnreadSetting(e) {
        if (d.Le.has(e.type) || (0, d.Gw)(e.type) || !S) return g.e.ALL_MESSAGES;
        let t = this.getChannelUnreadSetting(e.guild_id, e.id);
        if (t !== g.e.UNSET) return t;
        if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== g.e.UNSET) return t;
        }
        let n = this.getGuildUnreadSetting(e.guild_id);
        return n !== g.e.UNSET
            ? n
            : this.resolvedMessageNotifications(e) === E.orn.ALL_MESSAGES
              ? g.e.ALL_MESSAGES
              : g.e.ONLY_MENTIONS;
    }
    isGuildOrCategoryOrChannelMuted(e, t) {
        return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t);
    }
    allowNoMessages(e) {
        return (
            this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) ||
            this.resolvedMessageNotifications(e) === E.orn.NO_MESSAGES ||
            (this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e))
        );
    }
    allowAllMessages(e) {
        return (
            !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) &&
            this.resolvedMessageNotifications(e) === E.orn.ALL_MESSAGES &&
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
        return this.resolvedMessageNotifications(e) === E.orn.ALL_MESSAGES;
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
        let i = this.getChannelOverrides(e)[t]?.flags ?? 0;
        return s.Lt(i, A.vv.OPT_IN_ENABLED);
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
            let t = r().filter(
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
        return y;
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
              : e.defaultMessageNotifications === E.orn.ALL_MESSAGES
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
let q = new $(o.h, {
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            x(e.guild_id, { channel_overrides: {}, ...e });
        });
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: function (e) {
        let { guildId: t, settings: n } = e;
        k(t, n);
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function (e) {
        let { guildId: t, settings: n } = e;
        k(t, n), F(t, n.channel_overrides);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: function (e) {
        let { guildId: t, channelId: n, settings: i } = e;
        null != t && null != i.flags && (M[t] = { ...M[t], [n]: { flags: i.flags } }), G(t, n, i);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function (e) {
        let { guildId: t, overrides: n } = e;
        return !(null == t || u.A.isFullServerPreview(t)) && (F(t, n), !0);
    },
    CONNECTION_OPEN: function (e) {
        W(e.notificationSettings), C.reset(), v.reset(), e.userGuildSettings.partial || ((I = {}), (b = {}), (D = {}));
        let t = new Set();
        for (let n in (e.userGuildSettings.entries.forEach((e) => {
            "channel_overrides" in e || (e.channel_overrides = {}),
                x(e.guild_id, e),
                null != e.guild_id && t.add(e.guild_id);
        }),
        I))
            t.has(n) || U(n, I[n]);
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
                    i = new Set();
                for (let t in e.channel_overrides) {
                    let r = e.channel_overrides[t];
                    (0, l.tG)(r) && n.add(t), s.Lt(r.flags ?? 0, A.vv.OPT_IN_ENABLED) && i.add(t);
                }
                (b[t] = n), (D[t] = i);
            }));
    },
    OVERLAY_INITIALIZE: function (e) {
        let { allUserGuildSettings: t } = e,
            { userGuildSettings: n, mutedChannels: i, optedInChannelsByGuild: r } = t;
        (I = { ...n }),
            (b = {}),
            (D = {}),
            _.default.keys(i).forEach((e) => {
                b[e] = new Set(i[e]);
            }),
            _.default.keys(r).forEach((e) => {
                D[e] = new Set(r[e]);
            });
    },
    GUILD_CREATE: z,
    GUILD_UPDATE: z,
    GUILD_TOGGLE_COLLAPSE_MUTED: function (e) {
        let { guildId: t } = e,
            n = null == I[t] ? H(t) : I[t];
        I[t] = { ...n, guild_id: t, hide_muted_channels: !0 !== n.hide_muted_channels };
    },
    IMPERSONATE_UPDATE: z,
    IMPERSONATE_STOP: z,
    USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function (e) {
        let { guildId: t, updates: n } = e;
        if (null == t) return !1;
        let i = M[t];
        if (null == i) return !1;
        for (let e in n) r().isEqual(n[e], i[e]) && delete i[e];
    },
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
        let { guildId: t } = e;
        if (null == t) return !1;
        delete M[t], delete P[t];
    },
    NOTIFICATION_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        W(t);
    },
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0,
});
