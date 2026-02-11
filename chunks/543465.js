"use strict";
n.d(t, { Ay: () => ed, b5: () => K, wn: () => W }), n(938796);
var r = n(735438),
    i = n.n(r),
    a = n(665260),
    s = n(311907),
    o = n(73153),
    l = n(544743),
    u = n(164956),
    c = n(152007),
    d = n(95701),
    _ = n(661191),
    f = n(734057),
    h = n(71393),
    p = n(287809),
    g = n(652215),
    E = n(406535),
    A = n(790782),
    I = n(355097);
let T = {},
    y = {},
    S = !1,
    v = !1,
    C = { flags: 0 },
    b = new l.Ay(),
    N = new l.Ay(),
    R = {
        suppress_everyone: !1,
        suppress_roles: !1,
        mute_scheduled_events: !1,
        mobile_push: !0,
        muted: !1,
        message_notifications: g.orn.ALL_MESSAGES,
        flags: 0,
        channel_overrides: {},
        notify_highlights: g.guM.NULL,
        hide_muted_channels: !1,
        version: -1,
        mute_config: null,
    },
    O = {
        [g.orn.ALL_MESSAGES]: { ...R, message_notifications: g.orn.ALL_MESSAGES },
        [g.orn.ONLY_MENTIONS]: { ...R, message_notifications: g.orn.ONLY_MENTIONS },
    },
    D = {},
    L = {},
    w = "null",
    x = new Set(),
    P = new Set(),
    M = {},
    k = {};
function U(e, t) {
    let n = T[e],
        r = n?.channel_overrides ?? {},
        s = K(t.channel_overrides),
        o = { ...W(e), ...n, ...t, channel_overrides: s };
    b.clearTimer(e),
        i().forEach(r, (e) => {
            N.clearTimer(e.channel_id);
        }),
        G(e, o),
        (T[e] = o),
        (D[e] = eo(T[e]));
    let l = i().filter(o.channel_overrides, (e) => a.Lt(e.flags ?? 0, I.vv.OPT_IN_ENABLED));
    (L[e] = new Set(l.map((e) => e.channel_id))), F(e), delete y[e];
}
function G(e, t) {
    !0 === t.muted &&
        b.setTimer(e, t.mute_config, () => {
            V(e, { muted: !1 }), o.h.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: e });
        }) &&
        (t.muted = !1),
        i().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
                N.setTimer(t.channel_id, t.mute_config, () => {
                    B(e, t.channel_id, { muted: !1 }),
                        o.h.dispatch({ type: "CHANNEL_MUTE_EXPIRED", guildId: e, channelId: t.channel_id });
                }) &&
                (t.muted = !1);
        });
}
function F(e) {
    if (null == e) return;
    let t = new Set(L[e]),
        n = M[e] ?? {};
    for (let e in n) {
        let r = n[e];
        a.Lt(r.flags, I.vv.OPT_IN_ENABLED) ? t.add(e) : t.delete(e);
    }
    Object.keys(n).length > 0 ? (k[e] = t) : delete k[e];
}
function V(e, t) {
    let n = T[e];
    U(e, { channel_overrides: n?.channel_overrides ?? {}, ...t });
}
function B(e, t, n) {
    let r = Y(e, t, n);
    H(e, { [t]: r });
}
function j(e, t) {
    let n = {},
        r = (null != e ? M[e] : null) ?? {};
    _.default.keys(t).forEach((i) => {
        let a = Y(e, i, t[i]);
        (n[i] = a), (r[i] = { flags: a.flags ?? 0 });
    }),
        null != e && (M[e] = { ...M[e], ...r }),
        H(e, n);
}
function H(e, t) {
    let n = T[e],
        r = n?.channel_overrides ?? {};
    U(e, { channel_overrides: null == n ? t : { ...r, ...t } });
}
function Y(e, t, n) {
    let r = T[e];
    return { channel_id: t, muted: !1, ...(r?.channel_overrides ?? {})[t], ...n };
}
function W(e) {
    let t = h.A.getGuild(e);
    return O[null != t ? t.defaultMessageNotifications : g.orn.ALL_MESSAGES];
}
function K() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? i().keyBy(e, "channel_id") : e;
}
function $(e) {
    return T[e] ?? W(e);
}
function z(e) {
    null != e.userGuildSettings &&
        0 !== e.userGuildSettings.length &&
        ((T = {}),
        (D = {}),
        (L = {}),
        e.userGuildSettings.forEach((e) => {
            let t = e.guild_id;
            T[t] = e;
            let n = new Set(),
                r = new Set();
            for (let t in e.channel_overrides) {
                let i = e.channel_overrides[t];
                (0, l.tG)(i) && n.add(t), a.Lt(i.flags ?? 0, I.vv.OPT_IN_ENABLED) && r.add(t);
            }
            (D[t] = n), (L[t] = r);
        }));
}
function q(e) {
    Q(e.notificationSettings), b.reset(), N.reset(), e.userGuildSettings.partial || ((T = {}), (D = {}), (L = {}));
    let t = new Set();
    for (let n in (e.userGuildSettings.entries.forEach((e) => {
        let n = e;
        "channel_overrides" in n || (n.channel_overrides = {}),
            U(e.guild_id, n),
            null != e.guild_id && t.add(e.guild_id);
    }),
    T))
        t.has(n) || G(n, T[n]);
}
function X(e) {
    let { allUserGuildSettings: t } = e,
        { userGuildSettings: n, mutedChannels: r, optedInChannelsByGuild: i } = t;
    (T = { ...n }),
        (D = {}),
        (L = {}),
        _.default.keys(r).forEach((e) => {
            D[e] = new Set(r[e]);
        }),
        _.default.keys(i).forEach((e) => {
            L[e] = new Set(i[e]);
        });
}
function Z(e) {
    let { settings: t } = e;
    Q(t);
}
function Q(e) {
    (S = a.Lt(e.flags, E.i.USE_NEW_NOTIFICATIONS)), (v = a.Lt(e.flags, E.i.MENTION_ON_ALL_MESSAGES)), (C = e);
}
function J(e) {
    let { userGuildSettings: t } = e;
    t.forEach((e) => {
        U(e.guild_id, { channel_overrides: {}, ...e });
    });
}
function ee(e) {
    let { guildId: t, settings: n } = e;
    V(t, n);
}
function et(e) {
    let { guildId: t, settings: n } = e;
    V(t, n), j(t, n.channel_overrides);
}
function en(e) {
    let { guildId: t, channelId: n, settings: r } = e;
    null != t && null != r.flags && (M[t] = { ...M[t], [n]: { flags: r.flags } }), B(t, n, r);
}
function er(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete M[t], delete k[t];
}
function ei(e) {
    let { guildId: t, updates: n } = e;
    if (null == t) return !1;
    let r = M[t];
    if (null == r) return !1;
    for (let e in n) i().isEqual(n[e], r[e]) && delete r[e];
}
function ea(e) {
    let { guildId: t, overrides: n } = e;
    return !(null == t || u.A.isFullServerPreview(t)) && (j(t, n), !0);
}
function es(e) {
    let { guildId: t } = e,
        n = null == T[t] ? W(t) : T[t];
    T[t] = { ...n, guild_id: t, hide_muted_channels: !0 !== n.hide_muted_channels };
}
function eo(e) {
    return new Set(
        null != e.channel_overrides
            ? i()(e.channel_overrides)
                  .filter((e) => (0, l.tG)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null,
    );
}
function el() {
    return !0;
}
function eu() {
    return S;
}
class ec extends s.Ay.PersistedStore {
    static displayName = "UserGuildSettingsStore";
    static persistKey = "collapsedGuilds";
    initialize(e) {
        this.waitFor(f.A, h.A, u.A, c.A, p.default),
            null != e &&
                ((S = e.useNewNotifications ?? !1),
                "userGuildSettings" in e &&
                    ((T = e.userGuildSettings),
                    (L = i().mapValues(e.optedInChannelsByGuild ?? {}, (e) => new Set(e))),
                    i().forEach(T, (e, t) => {
                        D[t] = eo(e);
                    })));
    }
    getState() {
        return { useNewNotifications: S };
    }
    get mentionOnAllMessages() {
        return v;
    }
    isSuppressEveryoneEnabled(e) {
        return $(e).suppress_everyone;
    }
    isSuppressRolesEnabled(e) {
        return $(e).suppress_roles;
    }
    isMuteScheduledEventsEnabled(e) {
        return $(e).mute_scheduled_events;
    }
    isMobilePushEnabled(e) {
        return $(e).mobile_push;
    }
    isMuted(e) {
        let t = $(e);
        return (0, l.tG)(t);
    }
    isTemporarilyMuted(e) {
        let t = $(e);
        return (0, l.wG)(t);
    }
    getMuteConfig(e) {
        return $(e).mute_config;
    }
    getMessageNotifications(e) {
        return $(e).message_notifications;
    }
    getChannelOverrides(e) {
        return $(e).channel_overrides ?? {};
    }
    getNotifyHighlights(e) {
        return $(e).notify_highlights;
    }
    getGuildFlags(e) {
        return $(e).flags;
    }
    getChannelMessageNotifications(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null == n || null == n.message_notifications ? g.orn.NULL : n.message_notifications;
    }
    getChannelMuteConfig(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null != n ? n.mute_config : null;
    }
    getMutedChannels(e) {
        return D[e] ?? x;
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
        if (t !== g.orn.NULL) return t;
        if (null != e.parent_id) {
            let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
            if (t !== g.orn.NULL) return t;
        }
        return this.getMessageNotifications(e.guild_id);
    }
    resolveUnreadSetting(e) {
        if (d.Le.has(e.type) || (0, d.Gw)(e.type) || !eu()) return A.e.ALL_MESSAGES;
        let t = this.getChannelUnreadSetting(e.guild_id, e.id);
        if (t !== A.e.UNSET) return t;
        if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== A.e.UNSET) return t;
        }
        let n = this.getGuildUnreadSetting(e.guild_id);
        return n !== A.e.UNSET
            ? n
            : this.resolvedMessageNotifications(e) === g.orn.ALL_MESSAGES
              ? A.e.ALL_MESSAGES
              : A.e.ONLY_MENTIONS;
    }
    isGuildOrCategoryOrChannelMuted(e, t) {
        return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t);
    }
    allowNoMessages(e) {
        return (
            this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) ||
            this.resolvedMessageNotifications(e) === g.orn.NO_MESSAGES ||
            (this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e))
        );
    }
    allowAllMessages(e) {
        return (
            !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) &&
            this.resolvedMessageNotifications(e) === g.orn.ALL_MESSAGES &&
            (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
        );
    }
    isGuildCollapsed(e) {
        return T[e]?.hide_muted_channels === !0;
    }
    getAllSettings() {
        return { userGuildSettings: T, mutedChannels: D, optedInChannelsByGuild: L };
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
            if (a.Lt(t.flags, I.vv.NEW_FORUM_THREADS_ON)) return !0;
            if (a.Lt(t.flags, I.vv.NEW_FORUM_THREADS_OFF)) return !1;
        }
        return this.resolvedMessageNotifications(e) === g.orn.ALL_MESSAGES;
    }
    isOptInEnabled(e) {
        return (
            null != e &&
            (u.A.isFullServerPreview(e) ? u.A.isOptInEnabled(e) : a.Lt(this.getGuildFlags(e), I.n3.OPT_IN_CHANNELS_ON))
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
        if (n && null != k[e]) return k[e].has(t);
        let r = this.getChannelOverrides(e)[t]?.flags ?? 0;
        return a.Lt(r, I.vv.OPT_IN_ENABLED);
    }
    getOptedInChannels(e) {
        return u.A.isFullServerPreview(e) ? (u.A.getViewingChannels(e) ?? P) : (L[e] ?? P);
    }
    getOptedInChannelsWithPendingUpdates(e) {
        return k[e];
    }
    getPendingChannelUpdates(e) {
        return M[e];
    }
    getGuildFavorites(e) {
        if (u.A.isFullServerPreview(e)) return null;
        if (null == y[e]) {
            let t = i().filter(
                this.getChannelOverrides(e),
                (t) => a.Lt(t.flags ?? 0, I.vv.FAVORITED) && f.A.getChannel(t.channel_id)?.guild_id === e,
            );
            y[e] = t.map((e) => e.channel_id);
        }
        return y[e];
    }
    isFavorite(e, t) {
        return !u.A.isFullServerPreview(e) && this.getGuildFavorites(e)?.includes(t) === !0;
    }
    isMessagesFavorite(e) {
        let t = this.getChannelOverrides(null)[e]?.flags ?? 0;
        return a.Lt(t, I.vv.FAVORITED);
    }
    isAddedToMessages(e) {
        let t = this.getChannelOverrides(null)[e]?.flags ?? 0;
        return a.Lt(t, I.vv.OPT_IN_ENABLED);
    }
    getAddedToMessages() {
        return L[w] ?? P;
    }
    get accountNotificationSettings() {
        return C;
    }
    get useNewNotifications() {
        return S;
    }
    getGuildUnreadSetting(e) {
        if (!eu()) return A.e.ALL_MESSAGES;
        let t = this.getGuildFlags(e);
        return a.Lt(t, I.n3.UNREADS_ALL_MESSAGES)
            ? A.e.ALL_MESSAGES
            : a.Lt(t, I.n3.UNREADS_ONLY_MENTIONS)
              ? A.e.ONLY_MENTIONS
              : A.e.UNSET;
    }
    resolveGuildUnreadSetting(e) {
        let t = this.getGuildFlags(e.id);
        return !eu() || a.Lt(t, I.n3.UNREADS_ALL_MESSAGES)
            ? A.e.ALL_MESSAGES
            : a.Lt(t, I.n3.UNREADS_ONLY_MENTIONS)
              ? A.e.ONLY_MENTIONS
              : e.defaultMessageNotifications === g.orn.ALL_MESSAGES
                ? A.e.ALL_MESSAGES
                : A.e.ONLY_MENTIONS;
    }
    getChannelRecordUnreadSetting(e) {
        return this.getChannelUnreadSetting(e.guild_id, e.id);
    }
    getChannelUnreadSetting(e, t) {
        let n = this.getChannelIdFlags(e, t);
        return a.Lt(n, I.vv.UNREADS_ALL_MESSAGES)
            ? A.e.ALL_MESSAGES
            : a.Lt(n, I.vv.UNREADS_ONLY_MENTIONS)
              ? A.e.ONLY_MENTIONS
              : A.e.UNSET;
    }
}
let ed = new ec(o.h, {
    USER_GUILD_SETTINGS_FULL_UPDATE: J,
    USER_GUILD_SETTINGS_GUILD_UPDATE: ee,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: et,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: en,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ea,
    CONNECTION_OPEN: q,
    CACHE_LOADED: z,
    OVERLAY_INITIALIZE: X,
    GUILD_CREATE: el,
    GUILD_UPDATE: el,
    GUILD_TOGGLE_COLLAPSE_MUTED: es,
    IMPERSONATE_UPDATE: el,
    IMPERSONATE_STOP: el,
    USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: ei,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: er,
    NOTIFICATION_SETTINGS_UPDATE: Z,
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0,
});
