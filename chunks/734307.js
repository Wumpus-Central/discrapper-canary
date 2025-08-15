n.d(t, { Z: () => z }), n(388685);
var i,
    r,
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    o = n(570140),
    c = n(317381),
    d = n(16609),
    u = n(430198),
    m = n(924301),
    p = n(601070),
    g = n(569471),
    h = n(581883),
    f = n(314897),
    b = n(680089),
    x = n(592125),
    _ = n(58468),
    j = n(77498),
    E = n(496675),
    C = n(306680),
    O = n(944486),
    v = n(9156),
    S = n(823379),
    T = n(709054),
    N = n(540126),
    I = n(526761);
let y = null,
    A = null,
    P = new N.ZP();
function R() {
    let e = O.Z.getChannelId(),
        t = O.Z.getVoiceChannelId();
    return (y = e), (A = t), P.clear();
}
function D(e) {
    let {
        guild: { id: t },
    } = e;
    return P.clearGuildId(t);
}
function Z(e) {
    let {
        channel: { guild_id: t },
    } = e;
    return P.clearGuildId(t);
}
function w(e) {
    let { guildId: t } = e;
    return P.clearGuildId(t);
}
function k(e) {
    let { channelId: t } = e;
    return P.nonPositionalChannelIdUpdate(t);
}
function L(e) {
    let { channel: t } = e;
    return P.nonPositionalChannelIdUpdate(t.id);
}
function B(e) {
    let { id: t } = e;
    return P.nonPositionalChannelIdUpdate(t);
}
function M() {
    let e = O.Z.getChannelId(),
        t = O.Z.getVoiceChannelId(),
        n = y !== e || A !== t;
    return (
        !!n &&
        (a()([y, A, e, t])
            .uniq()
            .forEach((e) => {
                null != e && P.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (y = e),
        (A = t),
        !0)
    );
}
function U(e) {
    let { id: t } = e,
        n = x.Z.getChannel(t);
    return null == n ? P.clearGuildId(t) : P.clearGuildId(n.guild_id);
}
function V(e) {
    let { guildId: t } = e;
    return P.clearGuildId(t);
}
function G() {
    return P.updateSubtitles();
}
function F(e) {
    let { guildScheduledEvent: t } = e;
    return P.updateSubtitles(t.guild_id);
}
class H extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, f.default, b.Z, x.Z, _.Z, c.ZP, j.Z, u.Z, m.ZP, g.Z, E.Z, C.ZP, O.Z, v.ZP, h.Z);
    }
    getGuild(e, t) {
        var n, i;
        let r = P.getGuild(
            e,
            null != (n = null == t ? void 0 : t.guildActionRows) ? n : [],
            null != (i = null == t ? void 0 : t.channelNoticeRows) ? i : [],
        );
        return {
            guildChannelsVersion: r.version,
            guildChannels: r,
        };
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = P.getGuildChannelRowsOnly(e);
        return {
            guildChannelsVersion: t.version,
            guildChannels: t,
        };
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = P.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length;
    }
}
(r = "displayName") in H
    ? Object.defineProperty(H, r, {
          value: "ChannelListStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (H[r] = "ChannelListStore");
let z = new H(o.Z, {
    APPLICATION_FETCH_FAIL: G,
    APPLICATION_FETCH_SUCCESS: G,
    APPLICATION_FETCH: G,
    APPLICATIONS_FETCH_FAIL: G,
    APPLICATIONS_FETCH_SUCCESS: G,
    APPLICATIONS_FETCH: G,
    BACKGROUND_SYNC: R,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            a()(t)
                .map((e) => {
                    var t;
                    return null == (t = x.Z.getChannel(e.channelId)) ? void 0 : t.guild_id;
                })
                .filter(S.lm)
                .uniq()
                .forEach((e) => {
                    P.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: w,
    CACHE_LOADED_LAZY: R,
    CATEGORY_COLLAPSE_ALL: w,
    CATEGORY_COLLAPSE: U,
    CATEGORY_EXPAND_ALL: w,
    CATEGORY_EXPAND: U,
    CHANNEL_ACK: k,
    CHANNEL_COLLAPSE: function (e) {
        var t;
        let { channelId: n } = e;
        return P.clearGuildId(null == (t = x.Z.getChannel(n)) ? void 0 : t.guild_id);
    },
    CHANNEL_CREATE: Z,
    CHANNEL_DELETE: Z,
    CHANNEL_LOCAL_ACK: k,
    CHANNEL_MUTE_EXPIRED: w,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: k,
    CHANNEL_SELECT: M,
    CHANNEL_STATUSES: function (e) {
        return P.clearGuildId(e.guildId);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            a()(t)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                    P.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: G,
    CONNECTION_OPEN: R,
    CURRENT_USER_UPDATE: R,
    DECAY_READ_STATES: R,
    DEV_TOOLS_DESIGN_TOGGLE_SET: R,
    DISABLE_AUTOMATIC_ACK: k,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return P.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { location: t } = e;
        return P.updateSubtitles((0, d.j)(t), (0, d.p)(t));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        G();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: G,
    ENABLE_AUTOMATIC_ACK: k,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return P.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: G,
    GAMES_DATABASE_FETCH: G,
    GAMES_DATABASE_UPDATE: G,
    GUILD_APPLICATIONS_FETCH_SUCCESS: G,
    GUILD_CREATE: D,
    GUILD_DELETE: D,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return f.default.getId() === n.id && P.clearGuildId(t);
    },
    GUILD_MUTE_EXPIRED: w,
    GUILD_ROLE_CREATE: w,
    GUILD_ROLE_DELETE: w,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: w,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: w,
    GUILD_ROLE_UPDATE: w,
    GUILD_SCHEDULED_EVENT_CREATE: F,
    GUILD_SCHEDULED_EVENT_DELETE: F,
    GUILD_SCHEDULED_EVENT_UPDATE: F,
    GUILD_TOGGLE_COLLAPSE_MUTED: w,
    GUILD_UPDATE: D,
    IMPERSONATE_STOP: w,
    IMPERSONATE_UPDATE: w,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: t } = e;
            return P.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: k,
    MESSAGE_ACK: k,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return P.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: k,
    MESSAGE_DELETE: k,
    NOTIFICATION_SETTINGS_UPDATE: R,
    OVERLAY_INITIALIZE: R,
    PASSIVE_UPDATE_V2: function (e) {
        return P.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: R,
    RESORT_THREADS: k,
    SET_RECENTLY_ACTIVE_COLLAPSED: R,
    THREAD_CREATE: L,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return P.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: w,
    THREAD_MEMBER_UPDATE: B,
    THREAD_MEMBERS_UPDATE: B,
    THREAD_UPDATE: L,
    TRY_ACK: k,
    UPDATE_CHANNEL_DIMENSIONS: k,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        P.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: w,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: w,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return P.clearGuildId(t);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: w,
    USER_GUILD_SETTINGS_GUILD_UPDATE: w,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        var t;
        let { settings: n } = e;
        if (n.type !== I.yP.PRELOADED_USER_SETTINGS) return !1;
        let i = null == (t = n.proto.guilds) ? void 0 : t.guilds,
            r = !1;
        return (
            null != i &&
                T.default.keys(i).forEach((e) => {
                    null != i[e].guildRecentsDismissedAt && (r = P.updateRecentsCategory(e) || r);
                }),
            r
        );
    },
    VOICE_CATEGORY_COLLAPSE: V,
    VOICE_CATEGORY_EXPAND: V,
    VOICE_CHANNEL_SELECT: M,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return P.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = M(),
            i = new Set();
        for (let { channelId: e, oldChannelId: r } of t)
            null == r || i.has(r) || (P.nonPositionalChannelIdUpdate(r) && (n = !0), i.add(r)),
                null == e || i.has(e) || (P.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
        return n;
    },
    WINDOW_FOCUS: function () {
        return null != y && P.nonPositionalChannelIdUpdate(y);
    },
});
