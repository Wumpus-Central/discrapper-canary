n.d(t, { Z: () => z }), n(388685);
var r,
    i,
    s,
    a = n(392711),
    l = n.n(a),
    o = n(442837),
    c = n(570140),
    d = n(317381),
    u = n(16609),
    m = n(430198),
    g = n(924301),
    p = n(601070),
    h = n(569471),
    f = n(581883),
    _ = n(314897),
    b = n(680089),
    N = n(592125),
    x = n(58468),
    E = n(77498),
    j = n(496675),
    C = n(306680),
    O = n(944486),
    S = n(9156),
    v = n(823379),
    T = n(709054),
    I = n(540126),
    y = n(526761);
let A = null,
    P = null,
    R = new I.ZP();
function D() {
    let e = O.Z.getChannelId(),
        t = O.Z.getVoiceChannelId();
    return (A = e), (P = t), R.clear();
}
function Z(e) {
    let {
        guild: { id: t }
    } = e;
    return R.clearGuildId(t);
}
function w(e) {
    let {
        channel: { guild_id: t }
    } = e;
    return R.clearGuildId(t);
}
function k(e) {
    let { guildId: t } = e;
    return R.clearGuildId(t);
}
function W(e) {
    let { channelId: t } = e;
    return R.nonPositionalChannelIdUpdate(t);
}
function L(e) {
    let { channel: t } = e;
    return R.nonPositionalChannelIdUpdate(t.id);
}
function B(e) {
    let { id: t } = e;
    return R.nonPositionalChannelIdUpdate(t);
}
function M() {
    let e = O.Z.getChannelId(),
        t = O.Z.getVoiceChannelId(),
        n = A !== e || P !== t;
    return (
        !!n &&
        (l()([A, P, e, t])
            .uniq()
            .forEach((e) => {
                null != e && R.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (A = e),
        (P = t),
        !0)
    );
}
function U(e) {
    let { id: t } = e,
        n = N.Z.getChannel(t);
    return null == n ? R.clearGuildId(t) : R.clearGuildId(n.guild_id);
}
function V(e) {
    let { guildId: t } = e;
    return R.clearGuildId(t);
}
function G() {
    return R.updateSubtitles();
}
function F(e) {
    let { guildScheduledEvent: t } = e;
    return R.updateSubtitles(t.guild_id);
}
class H extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, _.default, b.Z, N.Z, x.Z, d.ZP, E.Z, m.Z, g.ZP, h.Z, j.Z, C.ZP, O.Z, S.ZP, f.Z);
    }
    getGuild(e, t) {
        var n, r;
        let i = R.getGuild(e, null != (n = null == t ? void 0 : t.guildActionRows) ? n : [], null != (r = null == t ? void 0 : t.channelNoticeRows) ? r : []);
        return {
            guildChannelsVersion: i.version,
            guildChannels: i
        };
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = R.getGuildChannelRowsOnly(e);
        return {
            guildChannelsVersion: t.version,
            guildChannels: t
        };
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = R.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length;
    }
}
(s = 'ChannelListStore'),
    (i = 'displayName') in H
        ? Object.defineProperty(H, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (H[i] = s);
let z = new H(c.Z, {
    APPLICATION_FETCH_FAIL: G,
    APPLICATION_FETCH_SUCCESS: G,
    APPLICATION_FETCH: G,
    APPLICATIONS_FETCH_FAIL: G,
    APPLICATIONS_FETCH_SUCCESS: G,
    APPLICATIONS_FETCH: G,
    BACKGROUND_SYNC: D,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            l()(t)
                .map((e) => {
                    var t;
                    return null == (t = N.Z.getChannel(e.channelId)) ? void 0 : t.guild_id;
                })
                .filter(v.lm)
                .uniq()
                .forEach((e) => {
                    R.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: k,
    CACHE_LOADED_LAZY: D,
    CATEGORY_COLLAPSE_ALL: k,
    CATEGORY_COLLAPSE: U,
    CATEGORY_EXPAND_ALL: k,
    CATEGORY_EXPAND: U,
    CHANNEL_ACK: W,
    CHANNEL_COLLAPSE: function (e) {
        var t;
        let { channelId: n } = e;
        return R.clearGuildId(null == (t = N.Z.getChannel(n)) ? void 0 : t.guild_id);
    },
    CHANNEL_CREATE: w,
    CHANNEL_DELETE: w,
    CHANNEL_LOCAL_ACK: W,
    CHANNEL_MUTE_EXPIRED: k,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: W,
    CHANNEL_SELECT: M,
    CHANNEL_STATUSES: function (e) {
        return R.clearGuildId(e.guildId);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            l()(t)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                    R.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: G,
    CONNECTION_OPEN: D,
    CURRENT_USER_UPDATE: D,
    DECAY_READ_STATES: D,
    DEV_TOOLS_DESIGN_TOGGLE_SET: D,
    DISABLE_AUTOMATIC_ACK: W,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return R.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        var t, n;
        let { location: r } = e;
        return R.updateSubtitles(null != (t = (0, u.jS)(r)) ? t : (0, u.hu)(r), null != (n = (0, u.pY)(r)) ? n : (0, u.wq)(r));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        G();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: G,
    ENABLE_AUTOMATIC_ACK: W,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return R.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: G,
    GAMES_DATABASE_FETCH: G,
    GAMES_DATABASE_UPDATE: G,
    GUILD_APPLICATIONS_FETCH_SUCCESS: G,
    GUILD_CREATE: Z,
    GUILD_DELETE: Z,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return _.default.getId() === n.id && R.clearGuildId(t);
    },
    GUILD_MUTE_EXPIRED: k,
    GUILD_ROLE_CREATE: k,
    GUILD_ROLE_DELETE: k,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: k,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: k,
    GUILD_ROLE_UPDATE: k,
    GUILD_SCHEDULED_EVENT_CREATE: F,
    GUILD_SCHEDULED_EVENT_DELETE: F,
    GUILD_SCHEDULED_EVENT_UPDATE: F,
    GUILD_TOGGLE_COLLAPSE_MUTED: k,
    GUILD_UPDATE: Z,
    IMPERSONATE_STOP: k,
    IMPERSONATE_UPDATE: k,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: t } = e;
            return R.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: W,
    MESSAGE_ACK: W,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return R.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: W,
    MESSAGE_DELETE: W,
    NOTIFICATION_SETTINGS_UPDATE: D,
    OVERLAY_INITIALIZE: D,
    PASSIVE_UPDATE_V2: function (e) {
        return R.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: D,
    RESORT_THREADS: W,
    SET_RECENTLY_ACTIVE_COLLAPSED: D,
    THREAD_CREATE: L,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return R.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: k,
    THREAD_MEMBER_UPDATE: B,
    THREAD_MEMBERS_UPDATE: B,
    THREAD_UPDATE: L,
    TRY_ACK: W,
    UPDATE_CHANNEL_DIMENSIONS: W,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        R.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: k,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: k,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return R.clearGuildId(t);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: k,
    USER_GUILD_SETTINGS_GUILD_UPDATE: k,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        var t;
        let { settings: n } = e;
        if (n.type !== y.yP.PRELOADED_USER_SETTINGS) return !1;
        let r = null == (t = n.proto.guilds) ? void 0 : t.guilds,
            i = !1;
        return (
            null != r &&
                T.default.keys(r).forEach((e) => {
                    null != r[e].guildRecentsDismissedAt && (i = R.updateRecentsCategory(e) || i);
                }),
            i
        );
    },
    VOICE_CATEGORY_COLLAPSE: V,
    VOICE_CATEGORY_EXPAND: V,
    VOICE_CHANNEL_SELECT: M,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return R.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = M(),
            r = new Set();
        for (let { channelId: e, oldChannelId: i } of t) null == i || r.has(i) || (R.nonPositionalChannelIdUpdate(i) && (n = !0), r.add(i)), null == e || r.has(e) || (R.nonPositionalChannelIdUpdate(e) && (n = !0), r.add(e));
        return n;
    },
    WINDOW_FOCUS: function () {
        return null != A && R.nonPositionalChannelIdUpdate(A);
    }
});
