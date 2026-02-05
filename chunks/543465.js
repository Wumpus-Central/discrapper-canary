"use strict";
n.d(t, { Ay: () => ec, b5: () => W, wn: () => Y }), n(938796);
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
    p = n(71393),
    h = n(287809),
    m = n(652215),
    g = n(406535),
    E = n(790782),
    A = n(355097);
let I = {},
    T = {},
    y = !1,
    S = !1,
    v = { flags: 0 },
    C = new l.Ay(),
    b = new l.Ay(),
    N = {
        suppress_everyone: !1,
        suppress_roles: !1,
        mute_scheduled_events: !1,
        mobile_push: !0,
        muted: !1,
        message_notifications: m.orn.ALL_MESSAGES,
        flags: 0,
        channel_overrides: {},
        notify_highlights: m.guM.NULL,
        hide_muted_channels: !1,
        version: -1,
        mute_config: null,
    },
    R = {
        [m.orn.ALL_MESSAGES]: { ...N, message_notifications: m.orn.ALL_MESSAGES },
        [m.orn.ONLY_MENTIONS]: { ...N, message_notifications: m.orn.ONLY_MENTIONS },
    },
    O = {},
    D = {},
    L = "null",
    w = new Set(),
    x = new Set(),
    P = {},
    M = {};
function k(e, t) {
    let n = I[e],
        r = n?.channel_overrides ?? {},
        s = W(t.channel_overrides),
        o = { ...Y(e), ...n, ...t, channel_overrides: s };
    C.clearTimer(e),
        i().forEach(r, (e) => {
            b.clearTimer(e.channel_id);
        }),
        U(e, o),
        (I[e] = o),
        (O[e] = es(I[e]));
    let l = i().filter(o.channel_overrides, (e) => a.Lt(e.flags ?? 0, A.vv.OPT_IN_ENABLED));
    (D[e] = new Set(l.map((e) => e.channel_id))), G(e), delete T[e];
}
function U(e, t) {
    !0 === t.muted &&
        C.setTimer(e, t.mute_config, () => {
            V(e, { muted: !1 }), o.h.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: e });
        }) &&
        (t.muted = !1),
        i().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
                b.setTimer(t.channel_id, t.mute_config, () => {
                    F(e, t.channel_id, { muted: !1 }),
                        o.h.dispatch({ type: "CHANNEL_MUTE_EXPIRED", guildId: e, channelId: t.channel_id });
                }) &&
                (t.muted = !1);
        });
}
function G(e) {
    if (null == e) return;
    let t = new Set(D[e]),
        n = P[e] ?? {};
    for (let e in n) {
        let r = n[e];
        a.Lt(r.flags, A.vv.OPT_IN_ENABLED) ? t.add(e) : t.delete(e);
    }
    Object.keys(n).length > 0 ? (M[e] = t) : delete M[e];
}
function V(e, t) {
    let n = I[e];
    k(e, { channel_overrides: n?.channel_overrides ?? {}, ...t });
}
function F(e, t, n) {
    let r = H(e, t, n);
    j(e, { [t]: r });
}
function B(e, t) {
    let n = {},
        r = (null != e ? P[e] : null) ?? {};
    _.default.keys(t).forEach((i) => {
        let a = H(e, i, t[i]);
        (n[i] = a), (r[i] = { flags: a.flags ?? 0 });
    }),
        null != e && (P[e] = { ...P[e], ...r }),
        j(e, n);
}
function j(e, t) {
    let n = I[e],
        r = n?.channel_overrides ?? {};
    k(e, { channel_overrides: null == n ? t : { ...r, ...t } });
}
function H(e, t, n) {
    let r = I[e];
    return { channel_id: t, muted: !1, ...(r?.channel_overrides ?? {})[t], ...n };
}
function Y(e) {
    let t = p.A.getGuild(e);
    return R[null != t ? t.defaultMessageNotifications : m.orn.ALL_MESSAGES];
}
function W() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? i().keyBy(e, "channel_id") : e;
}
function K(e) {
    return I[e] ?? Y(e);
}
function z(e) {
    null != e.userGuildSettings &&
        0 !== e.userGuildSettings.length &&
        ((I = {}),
        (O = {}),
        (D = {}),
        e.userGuildSettings.forEach((e) => {
            let t = e.guild_id;
            I[t] = e;
            let n = new Set(),
                r = new Set();
            for (let t in e.channel_overrides) {
                let i = e.channel_overrides[t];
                (0, l.tG)(i) && n.add(t), a.Lt(i.flags ?? 0, A.vv.OPT_IN_ENABLED) && r.add(t);
            }
            (O[t] = n), (D[t] = r);
        }));
}
function $(e) {
    Q(e.notificationSettings), C.reset(), b.reset(), e.userGuildSettings.partial || ((I = {}), (O = {}), (D = {}));
    let t = new Set();
    for (let n in (e.userGuildSettings.entries.forEach((e) => {
        let n = e;
        "channel_overrides" in n || (n.channel_overrides = {}),
            k(e.guild_id, n),
            null != e.guild_id && t.add(e.guild_id);
    }),
    I))
        t.has(n) || U(n, I[n]);
}
function q(e) {
    let { allUserGuildSettings: t } = e,
        { userGuildSettings: n, mutedChannels: r, optedInChannelsByGuild: i } = t;
    (I = { ...n }),
        (O = {}),
        (D = {}),
        _.default.keys(r).forEach((e) => {
            O[e] = new Set(r[e]);
        }),
        _.default.keys(i).forEach((e) => {
            D[e] = new Set(i[e]);
        });
}
function Z(e) {
    let { settings: t } = e;
    Q(t);
}
function Q(e) {
    (y = a.Lt(e.flags, g.i.USE_NEW_NOTIFICATIONS)), (S = a.Lt(e.flags, g.i.MENTION_ON_ALL_MESSAGES)), (v = e);
}
function X(e) {
    let { userGuildSettings: t } = e;
    t.forEach((e) => {
        k(e.guild_id, { channel_overrides: {}, ...e });
    });
}
function J(e) {
    let { guildId: t, settings: n } = e;
    V(t, n);
}
function ee(e) {
    let { guildId: t, settings: n } = e;
    V(t, n), B(t, n.channel_overrides);
}
function et(e) {
    let { guildId: t, channelId: n, settings: r } = e;
    null != t && null != r.flags && (P[t] = { ...P[t], [n]: { flags: r.flags } }), F(t, n, r);
}
function en(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete P[t], delete M[t];
}
function er(e) {
    let { guildId: t, updates: n } = e;
    if (null == t) return !1;
    let r = P[t];
    if (null == r) return !1;
    for (let e in n) i().isEqual(n[e], r[e]) && delete r[e];
}
function ei(e) {
    let { guildId: t, overrides: n } = e;
    return !(null == t || u.A.isFullServerPreview(t)) && (B(t, n), !0);
}
function ea(e) {
    let { guildId: t } = e,
        n = null == I[t] ? Y(t) : I[t];
    I[t] = { ...n, guild_id: t, hide_muted_channels: !0 !== n.hide_muted_channels };
}
function es(e) {
    return new Set(
        null != e.channel_overrides
            ? i()(e.channel_overrides)
                  .filter((e) => (0, l.tG)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null,
    );
}
function eo() {
    return !0;
}
function el() {
    return y;
}
class eu extends s.Ay.PersistedStore {
    static displayName = "UserGuildSettingsStore";
    static persistKey = "collapsedGuilds";
    initialize(e) {
        this.waitFor(f.A, p.A, u.A, c.A, h.default),
            null != e &&
                ((y = e.useNewNotifications ?? !1),
                "userGuildSettings" in e &&
                    ((I = e.userGuildSettings),
                    (D = i().mapValues(e.optedInChannelsByGuild ?? {}, (e) => new Set(e))),
                    i().forEach(I, (e, t) => {
                        O[t] = es(e);
                    })));
    }
    getState() {
        return { useNewNotifications: y };
    }
    get mentionOnAllMessages() {
        return S;
    }
    isSuppressEveryoneEnabled(e) {
        return K(e).suppress_everyone;
    }
    isSuppressRolesEnabled(e) {
        return K(e).suppress_roles;
    }
    isMuteScheduledEventsEnabled(e) {
        return K(e).mute_scheduled_events;
    }
    isMobilePushEnabled(e) {
        return K(e).mobile_push;
    }
    isMuted(e) {
        let t = K(e);
        return (0, l.tG)(t);
    }
    isTemporarilyMuted(e) {
        let t = K(e);
        return (0, l.wG)(t);
    }
    getMuteConfig(e) {
        return K(e).mute_config;
    }
    getMessageNotifications(e) {
        return K(e).message_notifications;
    }
    getChannelOverrides(e) {
        return K(e).channel_overrides ?? {};
    }
    getNotifyHighlights(e) {
        return K(e).notify_highlights;
    }
    getGuildFlags(e) {
        return K(e).flags;
    }
    getChannelMessageNotifications(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null == n || null == n.message_notifications ? m.orn.NULL : n.message_notifications;
    }
    getChannelMuteConfig(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null != n ? n.mute_config : null;
    }
    getMutedChannels(e) {
        return O[e] ?? w;
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
        if (t !== m.orn.NULL) return t;
        if (null != e.parent_id) {
            let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
            if (t !== m.orn.NULL) return t;
        }
        return this.getMessageNotifications(e.guild_id);
    }
    resolveUnreadSetting(e) {
        if (d.Le.has(e.type) || (0, d.Gw)(e.type) || !el()) return E.e.ALL_MESSAGES;
        let t = this.getChannelUnreadSetting(e.guild_id, e.id);
        if (t !== E.e.UNSET) return t;
        if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== E.e.UNSET) return t;
        }
        let n = this.getGuildUnreadSetting(e.guild_id);
        return n !== E.e.UNSET
            ? n
            : this.resolvedMessageNotifications(e) === m.orn.ALL_MESSAGES
              ? E.e.ALL_MESSAGES
              : E.e.ONLY_MENTIONS;
    }
    isGuildOrCategoryOrChannelMuted(e, t) {
        return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t);
    }
    allowNoMessages(e) {
        return (
            this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) ||
            this.resolvedMessageNotifications(e) === m.orn.NO_MESSAGES ||
            (this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e))
        );
    }
    allowAllMessages(e) {
        return (
            !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) &&
            this.resolvedMessageNotifications(e) === m.orn.ALL_MESSAGES &&
            (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
        );
    }
    isGuildCollapsed(e) {
        return I[e]?.hide_muted_channels === !0;
    }
    getAllSettings() {
        return { userGuildSettings: I, mutedChannels: O, optedInChannelsByGuild: D };
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
            if (a.Lt(t.flags, A.vv.NEW_FORUM_THREADS_ON)) return !0;
            if (a.Lt(t.flags, A.vv.NEW_FORUM_THREADS_OFF)) return !1;
        }
        return this.resolvedMessageNotifications(e) === m.orn.ALL_MESSAGES;
    }
    isOptInEnabled(e) {
        return (
            null != e &&
            (u.A.isFullServerPreview(e) ? u.A.isOptInEnabled(e) : a.Lt(this.getGuildFlags(e), A.n3.OPT_IN_CHANNELS_ON))
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
        if (n && null != M[e]) return M[e].has(t);
        let r = this.getChannelOverrides(e)[t]?.flags ?? 0;
        return a.Lt(r, A.vv.OPT_IN_ENABLED);
    }
    getOptedInChannels(e) {
        return u.A.isFullServerPreview(e) ? (u.A.getViewingChannels(e) ?? x) : (D[e] ?? x);
    }
    getOptedInChannelsWithPendingUpdates(e) {
        return M[e];
    }
    getPendingChannelUpdates(e) {
        return P[e];
    }
    getGuildFavorites(e) {
        if (u.A.isFullServerPreview(e)) return null;
        if (null == T[e]) {
            let t = i().filter(
                this.getChannelOverrides(e),
                (t) => a.Lt(t.flags ?? 0, A.vv.FAVORITED) && f.A.getChannel(t.channel_id)?.guild_id === e,
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
        return a.Lt(t, A.vv.FAVORITED);
    }
    isAddedToMessages(e) {
        let t = this.getChannelOverrides(null)[e]?.flags ?? 0;
        return a.Lt(t, A.vv.OPT_IN_ENABLED);
    }
    getAddedToMessages() {
        return D[L] ?? x;
    }
    get accountNotificationSettings() {
        return v;
    }
    get useNewNotifications() {
        return y;
    }
    getGuildUnreadSetting(e) {
        if (!el()) return E.e.ALL_MESSAGES;
        let t = this.getGuildFlags(e);
        return a.Lt(t, A.n3.UNREADS_ALL_MESSAGES)
            ? E.e.ALL_MESSAGES
            : a.Lt(t, A.n3.UNREADS_ONLY_MENTIONS)
              ? E.e.ONLY_MENTIONS
              : E.e.UNSET;
    }
    resolveGuildUnreadSetting(e) {
        let t = this.getGuildFlags(e.id);
        return !el() || a.Lt(t, A.n3.UNREADS_ALL_MESSAGES)
            ? E.e.ALL_MESSAGES
            : a.Lt(t, A.n3.UNREADS_ONLY_MENTIONS)
              ? E.e.ONLY_MENTIONS
              : e.defaultMessageNotifications === m.orn.ALL_MESSAGES
                ? E.e.ALL_MESSAGES
                : E.e.ONLY_MENTIONS;
    }
    getChannelRecordUnreadSetting(e) {
        return this.getChannelUnreadSetting(e.guild_id, e.id);
    }
    getChannelUnreadSetting(e, t) {
        let n = this.getChannelIdFlags(e, t);
        return a.Lt(n, A.vv.UNREADS_ALL_MESSAGES)
            ? E.e.ALL_MESSAGES
            : a.Lt(n, A.vv.UNREADS_ONLY_MENTIONS)
              ? E.e.ONLY_MENTIONS
              : E.e.UNSET;
    }
}
let ec = new eu(o.h, {
    USER_GUILD_SETTINGS_FULL_UPDATE: X,
    USER_GUILD_SETTINGS_GUILD_UPDATE: J,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ee,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: et,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ei,
    CONNECTION_OPEN: $,
    CACHE_LOADED: z,
    OVERLAY_INITIALIZE: q,
    GUILD_CREATE: eo,
    GUILD_UPDATE: eo,
    GUILD_TOGGLE_COLLAPSE_MUTED: ea,
    IMPERSONATE_UPDATE: eo,
    IMPERSONATE_STOP: eo,
    USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: er,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: en,
    NOTIFICATION_SETTINGS_UPDATE: Z,
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0,
});
