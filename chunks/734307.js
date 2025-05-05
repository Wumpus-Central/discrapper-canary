n.d(t, { Z: () => W }), n(388685);
var i,
    r,
    s,
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    c = n(570140),
    d = n(317381),
    u = n(16609),
    m = n(430198),
    g = n(924301),
    p = n(601070),
    h = n(569471),
    f = n(581883),
    b = n(314897),
    _ = n(680089),
    x = n(592125),
    E = n(58468),
    j = n(77498),
    C = n(496675),
    O = n(306680),
    S = n(944486),
    v = n(9156),
    T = n(823379),
    I = n(709054),
    N = n(540126),
    y = n(526761);
let A = null,
    P = null,
    R = new N.ZP();
function D() {
    let e = S.Z.getChannelId(),
        t = S.Z.getVoiceChannelId();
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
function L(e) {
    let { channelId: t } = e;
    return R.nonPositionalChannelIdUpdate(t);
}
function B(e) {
    let { channel: t } = e;
    return R.nonPositionalChannelIdUpdate(t.id);
}
function M(e) {
    let { id: t } = e;
    return R.nonPositionalChannelIdUpdate(t);
}
function U() {
    let e = S.Z.getChannelId(),
        t = S.Z.getVoiceChannelId(),
        n = A !== e || P !== t;
    return (
        !!n &&
        (a()([A, P, e, t])
            .uniq()
            .forEach((e) => {
                null != e && R.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (A = e),
        (P = t),
        !0)
    );
}
function V(e) {
    let { id: t } = e,
        n = x.Z.getChannel(t);
    return null == n ? R.clearGuildId(t) : R.clearGuildId(n.guild_id);
}
function G(e) {
    let { guildId: t } = e;
    return R.clearGuildId(t);
}
function F() {
    return R.updateSubtitles();
}
function H(e) {
    let { guildScheduledEvent: t } = e;
    return R.updateSubtitles(t.guild_id);
}
class z extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, b.default, _.Z, x.Z, E.Z, d.ZP, j.Z, m.Z, g.ZP, h.Z, C.Z, O.ZP, S.Z, v.ZP, f.Z);
    }
    getGuild(e, t) {
        var n, i;
        let r = R.getGuild(e, null != (n = null == t ? void 0 : t.guildActionRows) ? n : [], null != (i = null == t ? void 0 : t.channelNoticeRows) ? i : []);
        return {
            guildChannelsVersion: r.version,
            guildChannels: r
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
    (r = 'displayName') in z
        ? Object.defineProperty(z, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (z[r] = s);
let W = new z(c.Z, {
    APPLICATION_FETCH_FAIL: F,
    APPLICATION_FETCH_SUCCESS: F,
    APPLICATION_FETCH: F,
    APPLICATIONS_FETCH_FAIL: F,
    APPLICATIONS_FETCH_SUCCESS: F,
    APPLICATIONS_FETCH: F,
    BACKGROUND_SYNC: D,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            a()(t)
                .map((e) => {
                    var t;
                    return null == (t = x.Z.getChannel(e.channelId)) ? void 0 : t.guild_id;
                })
                .filter(T.lm)
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
    CATEGORY_COLLAPSE: V,
    CATEGORY_EXPAND_ALL: k,
    CATEGORY_EXPAND: V,
    CHANNEL_ACK: L,
    CHANNEL_COLLAPSE: function (e) {
        var t;
        let { channelId: n } = e;
        return R.clearGuildId(null == (t = x.Z.getChannel(n)) ? void 0 : t.guild_id);
    },
    CHANNEL_CREATE: w,
    CHANNEL_DELETE: w,
    CHANNEL_LOCAL_ACK: L,
    CHANNEL_MUTE_EXPIRED: k,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: L,
    CHANNEL_SELECT: U,
    CHANNEL_STATUSES: function (e) {
        return R.clearGuildId(e.guildId);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            a()(t)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                    R.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: F,
    CONNECTION_OPEN: D,
    CURRENT_USER_UPDATE: D,
    DECAY_READ_STATES: D,
    DEV_TOOLS_DESIGN_TOGGLE_SET: D,
    DISABLE_AUTOMATIC_ACK: L,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return R.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        var t, n;
        let { location: i } = e;
        return R.updateSubtitles(null != (t = (0, u.jS)(i)) ? t : (0, u.hu)(i), null != (n = (0, u.pY)(i)) ? n : (0, u.wq)(i));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        F();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: F,
    ENABLE_AUTOMATIC_ACK: L,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return R.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: F,
    GAMES_DATABASE_FETCH: F,
    GAMES_DATABASE_UPDATE: F,
    GUILD_APPLICATIONS_FETCH_SUCCESS: F,
    GUILD_CREATE: Z,
    GUILD_DELETE: Z,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return b.default.getId() === n.id && R.clearGuildId(t);
    },
    GUILD_MUTE_EXPIRED: k,
    GUILD_ROLE_CREATE: k,
    GUILD_ROLE_DELETE: k,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: k,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: k,
    GUILD_ROLE_UPDATE: k,
    GUILD_SCHEDULED_EVENT_CREATE: H,
    GUILD_SCHEDULED_EVENT_DELETE: H,
    GUILD_SCHEDULED_EVENT_UPDATE: H,
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
    LOAD_MESSAGES_SUCCESS: L,
    MESSAGE_ACK: L,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return R.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: L,
    MESSAGE_DELETE: L,
    NOTIFICATION_SETTINGS_UPDATE: D,
    OVERLAY_INITIALIZE: D,
    PASSIVE_UPDATE_V2: function (e) {
        return R.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: D,
    RESORT_THREADS: L,
    SET_RECENTLY_ACTIVE_COLLAPSED: D,
    THREAD_CREATE: B,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return R.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: k,
    THREAD_MEMBER_UPDATE: M,
    THREAD_MEMBERS_UPDATE: M,
    THREAD_UPDATE: B,
    TRY_ACK: L,
    UPDATE_CHANNEL_DIMENSIONS: L,
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
        let i = null == (t = n.proto.guilds) ? void 0 : t.guilds,
            r = !1;
        return (
            null != i &&
                I.default.keys(i).forEach((e) => {
                    null != i[e].guildRecentsDismissedAt && (r = R.updateRecentsCategory(e) || r);
                }),
            r
        );
    },
    VOICE_CATEGORY_COLLAPSE: G,
    VOICE_CATEGORY_EXPAND: G,
    VOICE_CHANNEL_SELECT: U,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return R.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = U(),
            i = new Set();
        for (let { channelId: e, oldChannelId: r } of t) null == r || i.has(r) || (R.nonPositionalChannelIdUpdate(r) && (n = !0), i.add(r)), null == e || i.has(e) || (R.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
        return n;
    },
    WINDOW_FOCUS: function () {
        return null != A && R.nonPositionalChannelIdUpdate(A);
    }
});
