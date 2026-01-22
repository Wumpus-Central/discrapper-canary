n.d(t, {
    Ay: () => eh,
    b5: () => Z,
    wn: () => X,
}),
    n(896048),
    n(938796);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(665260),
    o = n(311907),
    l = n(73153),
    c = n(544743),
    u = n(164956),
    d = n(152007),
    f = n(95701),
    p = n(661191),
    _ = n(734057),
    h = n(71393),
    m = n(287809),
    g = n(652215),
    E = n(406535),
    b = n(790782),
    y = n(355097);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = {},
    T = {},
    C = !1,
    N = !1,
    R = { flags: 0 },
    w = new c.Ay(),
    P = new c.Ay(),
    D = {
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
    x = {
        [g.orn.ALL_MESSAGES]: S(A({}, D), { message_notifications: g.orn.ALL_MESSAGES }),
        [g.orn.ONLY_MENTIONS]: S(A({}, D), { message_notifications: g.orn.ONLY_MENTIONS }),
    },
    L = {},
    j = {},
    M = "null",
    k = new Set(),
    U = new Set(),
    G = {},
    V = {};
function F(e, t) {
    var n;
    let r = I[e],
        i = null != (n = null == r ? void 0 : r.channel_overrides) ? n : {},
        o = Z(t.channel_overrides),
        l = S(A({}, X(e), r, t), { channel_overrides: o });
    w.clearTimer(e),
        a().forEach(i, (e) => {
            P.clearTimer(e.channel_id);
        }),
        B(e, l),
        (I[e] = l),
        (L[e] = ed(I[e]));
    let c = a().filter(l.channel_overrides, (e) => {
        var t;
        return s.Lt(null != (t = e.flags) ? t : 0, y.vv.OPT_IN_ENABLED);
    });
    (j[e] = new Set(c.map((e) => e.channel_id))), H(e), delete T[e];
}
function B(e, t) {
    !0 === t.muted &&
        w.setTimer(e, t.mute_config, () => {
            Y(e, { muted: !1 }),
                l.h.dispatch({
                    type: "GUILD_MUTE_EXPIRED",
                    guildId: e,
                });
        }) &&
        (t.muted = !1),
        a().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
                P.setTimer(t.channel_id, t.mute_config, () => {
                    W(e, t.channel_id, { muted: !1 }),
                        l.h.dispatch({
                            type: "CHANNEL_MUTE_EXPIRED",
                            guildId: e,
                            channelId: t.channel_id,
                        });
                }) &&
                (t.muted = !1);
        });
}
function H(e) {
    var t;
    if (null == e) return;
    let n = new Set(j[e]),
        r = null != (t = G[e]) ? t : {};
    for (let e in r) {
        let t = r[e];
        s.Lt(t.flags, y.vv.OPT_IN_ENABLED) ? n.add(e) : n.delete(e);
    }
    Object.keys(r).length > 0 ? (V[e] = n) : delete V[e];
}
function Y(e, t) {
    var n;
    let r = I[e];
    F(e, A({ channel_overrides: null != (n = null == r ? void 0 : r.channel_overrides) ? n : {} }, t));
}
function W(e, t, n) {
    let r = q(e, t, n);
    z(e, { [t]: r });
}
function K(e, t) {
    var n;
    let r = {},
        i = null != (n = null != e ? G[e] : null) ? n : {};
    p.default.keys(t).forEach((n) => {
        var a;
        let s = q(e, n, t[n]);
        (r[n] = s), (i[n] = { flags: null != (a = s.flags) ? a : 0 });
    }),
        null != e && (G[e] = A({}, G[e], i)),
        z(e, r);
}
function z(e, t) {
    var n;
    let r = I[e],
        i = null != (n = null == r ? void 0 : r.channel_overrides) ? n : {};
    F(e, { channel_overrides: null == r ? t : A({}, i, t) });
}
function q(e, t, n) {
    var r;
    let i = I[e];
    return A(
        {},
        {
            channel_id: t,
            muted: !1,
        },
        (null != (r = null == i ? void 0 : i.channel_overrides) ? r : {})[t],
        n,
    );
}
function X(e) {
    let t = h.A.getGuild(e);
    return x[null != t ? t.defaultMessageNotifications : g.orn.ALL_MESSAGES];
}
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? a().keyBy(e, "channel_id") : e;
}
function Q(e) {
    var t;
    return null != (t = I[e]) ? t : X(e);
}
function $(e) {
    null != e.userGuildSettings &&
        0 !== e.userGuildSettings.length &&
        ((I = {}),
        (L = {}),
        (j = {}),
        e.userGuildSettings.forEach((e) => {
            let t = e.guild_id;
            I[t] = e;
            let n = new Set(),
                r = new Set();
            for (let t in e.channel_overrides) {
                var i;
                let a = e.channel_overrides[t];
                (0, c.tG)(a) && n.add(t), s.Lt(null != (i = a.flags) ? i : 0, y.vv.OPT_IN_ENABLED) && r.add(t);
            }
            (L[t] = n), (j[t] = r);
        }));
}
function J(e) {
    en(e.notificationSettings), w.reset(), P.reset(), e.userGuildSettings.partial || ((I = {}), (L = {}), (j = {}));
    let t = new Set();
    for (let n in (e.userGuildSettings.entries.forEach((e) => {
        let n = e;
        "channel_overrides" in n || (n.channel_overrides = {}),
            F(e.guild_id, n),
            null != e.guild_id && t.add(e.guild_id);
    }),
    I))
        t.has(n) || B(n, I[n]);
}
function ee(e) {
    let { allUserGuildSettings: t } = e,
        { userGuildSettings: n, mutedChannels: r, optedInChannelsByGuild: i } = t;
    (I = A({}, n)),
        (L = {}),
        (j = {}),
        p.default.keys(r).forEach((e) => {
            L[e] = new Set(r[e]);
        }),
        p.default.keys(i).forEach((e) => {
            j[e] = new Set(i[e]);
        });
}
function et(e) {
    let { settings: t } = e;
    en(t);
}
function en(e) {
    (C = s.Lt(e.flags, E.i.USE_NEW_NOTIFICATIONS)), (N = s.Lt(e.flags, E.i.MENTION_ON_ALL_MESSAGES)), (R = e);
}
function er(e) {
    let { userGuildSettings: t } = e;
    t.forEach((e) => {
        F(e.guild_id, A({ channel_overrides: {} }, e));
    });
}
function ei(e) {
    let { guildId: t, settings: n } = e;
    Y(t, n);
}
function ea(e) {
    let { guildId: t, settings: n } = e;
    Y(t, n), K(t, n.channel_overrides);
}
function es(e) {
    let { guildId: t, channelId: n, settings: r } = e;
    null != t && null != r.flags && (G[t] = S(A({}, G[t]), { [n]: { flags: r.flags } })), W(t, n, r);
}
function eo(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete G[t], delete V[t];
}
function el(e) {
    let { guildId: t, updates: n } = e;
    if (null == t) return !1;
    let r = G[t];
    if (null == r) return !1;
    for (let e in n) a().isEqual(n[e], r[e]) && delete r[e];
}
function ec(e) {
    let { guildId: t, overrides: n } = e;
    return !(null == t || u.A.isFullServerPreview(t)) && (K(t, n), !0);
}
function eu(e) {
    let { guildId: t } = e,
        n = null == I[t] ? X(t) : I[t];
    I[t] = S(A({}, n), {
        guild_id: t,
        hide_muted_channels: !0 !== n.hide_muted_channels,
    });
}
function ed(e) {
    return new Set(
        null != e.channel_overrides
            ? a()(e.channel_overrides)
                  .filter((e) => (0, c.tG)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null,
    );
}
function ef() {
    return !0;
}
function ep() {
    return C;
}
class e_ extends (r = o.Ay.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(_.A, h.A, u.A, d.A, m.default), null != e)) {
            var t, n;
            (C = null != (t = e.useNewNotifications) && t),
                "userGuildSettings" in e &&
                    ((I = e.userGuildSettings),
                    (j = a().mapValues(null != (n = e.optedInChannelsByGuild) ? n : {}, (e) => new Set(e))),
                    a().forEach(I, (e, t) => {
                        L[t] = ed(e);
                    }));
        }
    }
    getState() {
        return { useNewNotifications: C };
    }
    get mentionOnAllMessages() {
        return N;
    }
    isSuppressEveryoneEnabled(e) {
        return Q(e).suppress_everyone;
    }
    isSuppressRolesEnabled(e) {
        return Q(e).suppress_roles;
    }
    isMuteScheduledEventsEnabled(e) {
        return Q(e).mute_scheduled_events;
    }
    isMobilePushEnabled(e) {
        return Q(e).mobile_push;
    }
    isMuted(e) {
        let t = Q(e);
        return (0, c.tG)(t);
    }
    isTemporarilyMuted(e) {
        let t = Q(e);
        return (0, c.wG)(t);
    }
    getMuteConfig(e) {
        return Q(e).mute_config;
    }
    getMessageNotifications(e) {
        return Q(e).message_notifications;
    }
    getChannelOverrides(e) {
        var t;
        return null != (t = Q(e).channel_overrides) ? t : {};
    }
    getNotifyHighlights(e) {
        return Q(e).notify_highlights;
    }
    getGuildFlags(e) {
        return Q(e).flags;
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
        var t;
        return null != (t = L[e]) ? t : k;
    }
    isChannelMuted(e, t) {
        var n;
        let r = _.A.getChannel(t);
        return (e = null != (n = null == r ? void 0 : r.getGuildId()) ? n : e), this.getMutedChannels(e).has(t);
    }
    isCategoryMuted(e, t) {
        let n = _.A.getChannel(t);
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
        if (f.Le.has(e.type) || (0, f.Gw)(e.type) || !ep()) return b.e.ALL_MESSAGES;
        let t = this.getChannelUnreadSetting(e.guild_id, e.id);
        if (t !== b.e.UNSET) return t;
        if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== b.e.UNSET) return t;
        }
        let n = this.getGuildUnreadSetting(e.guild_id);
        return n !== b.e.UNSET
            ? n
            : this.resolvedMessageNotifications(e) === g.orn.ALL_MESSAGES
              ? b.e.ALL_MESSAGES
              : b.e.ONLY_MENTIONS;
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
        var t;
        return (null == (t = I[e]) ? void 0 : t.hide_muted_channels) === !0;
    }
    getAllSettings() {
        return {
            userGuildSettings: I,
            mutedChannels: L,
            optedInChannelsByGuild: j,
        };
    }
    getChannelIdFlags(e, t) {
        var n;
        let r = this.getChannelOverrides(e)[t];
        return null != (n = null == r ? void 0 : r.flags) ? n : 0;
    }
    getChannelFlags(e) {
        return this.getChannelIdFlags(e.guild_id, e.id);
    }
    getNewForumThreadsCreated(e) {
        let t = this.getChannelOverrides(e.guild_id)[e.id];
        if (null != t && null != t.flags) {
            if (s.Lt(t.flags, y.vv.NEW_FORUM_THREADS_ON)) return !0;
            if (s.Lt(t.flags, y.vv.NEW_FORUM_THREADS_OFF)) return !1;
        }
        return this.resolvedMessageNotifications(e) === g.orn.ALL_MESSAGES;
    }
    isOptInEnabled(e) {
        return (
            null != e &&
            (u.A.isFullServerPreview(e) ? u.A.isOptInEnabled(e) : s.Lt(this.getGuildFlags(e), y.n3.OPT_IN_CHANNELS_ON))
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
        return this.isChannelRecordOrParentOptedIn(_.A.getChannel(t), n);
    }
    isChannelOptedIn(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e) return !1;
        if (u.A.isFullServerPreview(e)) return u.A.isChannelOptedIn(e, t);
        if (i && null != V[e]) return V[e].has(t);
        let a = null != (n = null == (r = this.getChannelOverrides(e)[t]) ? void 0 : r.flags) ? n : 0;
        return s.Lt(a, y.vv.OPT_IN_ENABLED);
    }
    getOptedInChannels(e) {
        var t, n;
        return u.A.isFullServerPreview(e)
            ? null != (n = u.A.getViewingChannels(e))
                ? n
                : U
            : null != (t = j[e])
              ? t
              : U;
    }
    getOptedInChannelsWithPendingUpdates(e) {
        return V[e];
    }
    getPendingChannelUpdates(e) {
        return G[e];
    }
    getGuildFavorites(e) {
        if (u.A.isFullServerPreview(e)) return null;
        if (null == T[e]) {
            let t = a().filter(this.getChannelOverrides(e), (t) => {
                var n, r;
                return (
                    s.Lt(null != (n = t.flags) ? n : 0, y.vv.FAVORITED) &&
                    (null == (r = _.A.getChannel(t.channel_id)) ? void 0 : r.guild_id) === e
                );
            });
            T[e] = t.map((e) => e.channel_id);
        }
        return T[e];
    }
    isFavorite(e, t) {
        var n;
        return !u.A.isFullServerPreview(e) && (null == (n = this.getGuildFavorites(e)) ? void 0 : n.includes(t)) === !0;
    }
    isMessagesFavorite(e) {
        var t, n;
        let r = null != (t = null == (n = this.getChannelOverrides(null)[e]) ? void 0 : n.flags) ? t : 0;
        return s.Lt(r, y.vv.FAVORITED);
    }
    isAddedToMessages(e) {
        var t, n;
        let r = null != (t = null == (n = this.getChannelOverrides(null)[e]) ? void 0 : n.flags) ? t : 0;
        return s.Lt(r, y.vv.OPT_IN_ENABLED);
    }
    getAddedToMessages() {
        var e;
        return null != (e = j[M]) ? e : U;
    }
    get accountNotificationSettings() {
        return R;
    }
    get useNewNotifications() {
        return C;
    }
    getGuildUnreadSetting(e) {
        if (!ep()) return b.e.ALL_MESSAGES;
        let t = this.getGuildFlags(e);
        return s.Lt(t, y.n3.UNREADS_ALL_MESSAGES)
            ? b.e.ALL_MESSAGES
            : s.Lt(t, y.n3.UNREADS_ONLY_MENTIONS)
              ? b.e.ONLY_MENTIONS
              : b.e.UNSET;
    }
    resolveGuildUnreadSetting(e) {
        let t = this.getGuildFlags(e.id);
        return !ep() || s.Lt(t, y.n3.UNREADS_ALL_MESSAGES)
            ? b.e.ALL_MESSAGES
            : s.Lt(t, y.n3.UNREADS_ONLY_MENTIONS)
              ? b.e.ONLY_MENTIONS
              : e.defaultMessageNotifications === g.orn.ALL_MESSAGES
                ? b.e.ALL_MESSAGES
                : b.e.ONLY_MENTIONS;
    }
    getChannelRecordUnreadSetting(e) {
        return this.getChannelUnreadSetting(e.guild_id, e.id);
    }
    getChannelUnreadSetting(e, t) {
        let n = this.getChannelIdFlags(e, t);
        return s.Lt(n, y.vv.UNREADS_ALL_MESSAGES)
            ? b.e.ALL_MESSAGES
            : s.Lt(n, y.vv.UNREADS_ONLY_MENTIONS)
              ? b.e.ONLY_MENTIONS
              : b.e.UNSET;
    }
}
O(e_, "displayName", "UserGuildSettingsStore"), O(e_, "persistKey", "collapsedGuilds");
let eh = new e_(l.h, {
    USER_GUILD_SETTINGS_FULL_UPDATE: er,
    USER_GUILD_SETTINGS_GUILD_UPDATE: ei,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ea,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: es,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ec,
    CONNECTION_OPEN: J,
    CACHE_LOADED: $,
    OVERLAY_INITIALIZE: ee,
    GUILD_CREATE: ef,
    GUILD_UPDATE: ef,
    GUILD_TOGGLE_COLLAPSE_MUTED: eu,
    IMPERSONATE_UPDATE: ef,
    IMPERSONATE_STOP: ef,
    USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: el,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eo,
    NOTIFICATION_SETTINGS_UPDATE: et,
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0,
});
