n.d(t, { Z: () => K }), n(388685);
var l,
    r,
    i,
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    u = n(570140),
    c = n(317381),
    d = n(16609),
    E = n(430198),
    f = n(924301),
    C = n(601070),
    _ = n(569471),
    p = n(581883),
    h = n(314897),
    g = n(680089),
    I = n(592125),
    O = n(58468),
    T = n(77498),
    S = n(496675),
    N = n(306680),
    A = n(944486),
    m = n(9156),
    P = n(823379),
    b = n(709054),
    v = n(540126),
    L = n(526761);
let y = null,
    R = null,
    D = new v.ZP();
function Z() {
    let e = A.Z.getChannelId(),
        t = A.Z.getVoiceChannelId();
    return (y = e), (R = t), D.clear();
}
function j(e) {
    let {
        guild: { id: t }
    } = e;
    return D.clearGuildId(t);
}
function U(e) {
    let {
        channel: { guild_id: t }
    } = e;
    return D.clearGuildId(t);
}
function x(e) {
    let { guildId: t } = e;
    return D.clearGuildId(t);
}
function w(e) {
    let { channelId: t } = e;
    return D.nonPositionalChannelIdUpdate(t);
}
function M(e) {
    let { channel: t } = e;
    return D.nonPositionalChannelIdUpdate(t.id);
}
function G(e) {
    let { id: t } = e;
    return D.nonPositionalChannelIdUpdate(t);
}
function k() {
    let e = A.Z.getChannelId(),
        t = A.Z.getVoiceChannelId(),
        n = y !== e || R !== t;
    return (
        !!n &&
        (a()([y, R, e, t])
            .uniq()
            .forEach((e) => {
                null != e && D.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (y = e),
        (R = t),
        !0)
    );
}
function H(e) {
    let { id: t } = e,
        n = I.Z.getChannel(t);
    return null == n ? D.clearGuildId(t) : D.clearGuildId(n.guild_id);
}
function V(e) {
    let { guildId: t } = e;
    return D.clearGuildId(t);
}
function F() {
    return D.updateSubtitles();
}
function B(e) {
    let { guildScheduledEvent: t } = e;
    return D.updateSubtitles(t.guild_id);
}
class W extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, h.default, g.Z, I.Z, O.Z, c.ZP, T.Z, E.Z, f.ZP, _.Z, S.Z, N.ZP, A.Z, m.ZP, p.Z);
    }
    getGuild(e, t) {
        var n, l;
        let r = D.getGuild(e, null != (n = null == t ? void 0 : t.guildActionRows) ? n : [], null != (l = null == t ? void 0 : t.channelNoticeRows) ? l : []);
        return {
            guildChannelsVersion: r.version,
            guildChannels: r
        };
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = D.getGuildChannelRowsOnly(e);
        return {
            guildChannelsVersion: t.version,
            guildChannels: t
        };
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = D.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length;
    }
}
(i = 'ChannelListStore'),
    (r = 'displayName') in W
        ? Object.defineProperty(W, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (W[r] = i);
let K = new W(u.Z, {
    APPLICATION_FETCH_FAIL: F,
    APPLICATION_FETCH_SUCCESS: F,
    APPLICATION_FETCH: F,
    APPLICATIONS_FETCH_FAIL: F,
    APPLICATIONS_FETCH_SUCCESS: F,
    APPLICATIONS_FETCH: F,
    BACKGROUND_SYNC: Z,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            a()(t)
                .map((e) => {
                    var t;
                    return null == (t = I.Z.getChannel(e.channelId)) ? void 0 : t.guild_id;
                })
                .filter(P.lm)
                .uniq()
                .forEach((e) => {
                    D.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: x,
    CACHE_LOADED_LAZY: Z,
    CATEGORY_COLLAPSE_ALL: x,
    CATEGORY_COLLAPSE: H,
    CATEGORY_EXPAND_ALL: x,
    CATEGORY_EXPAND: H,
    CHANNEL_ACK: w,
    CHANNEL_COLLAPSE: function (e) {
        var t;
        let { channelId: n } = e;
        return D.clearGuildId(null == (t = I.Z.getChannel(n)) ? void 0 : t.guild_id);
    },
    CHANNEL_CREATE: U,
    CHANNEL_DELETE: U,
    CHANNEL_LOCAL_ACK: w,
    CHANNEL_MUTE_EXPIRED: x,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: w,
    CHANNEL_SELECT: k,
    CHANNEL_STATUSES: function (e) {
        return D.clearGuildId(e.guildId);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            a()(t)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                    D.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: F,
    CONNECTION_OPEN: Z,
    CURRENT_USER_UPDATE: Z,
    DECAY_READ_STATES: Z,
    DEV_TOOLS_DESIGN_TOGGLE_SET: Z,
    DISABLE_AUTOMATIC_ACK: w,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return D.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        var t, n;
        let { location: l } = e;
        return D.updateSubtitles(null != (t = (0, d.jS)(l)) ? t : (0, d.hu)(l), null != (n = (0, d.pY)(l)) ? n : (0, d.wq)(l));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        F();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: F,
    ENABLE_AUTOMATIC_ACK: w,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return D.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: F,
    GAMES_DATABASE_FETCH: F,
    GAMES_DATABASE_UPDATE: F,
    GUILD_APPLICATIONS_FETCH_SUCCESS: F,
    GUILD_CREATE: j,
    GUILD_DELETE: j,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return h.default.getId() === n.id && D.clearGuildId(t);
    },
    GUILD_MUTE_EXPIRED: x,
    GUILD_ROLE_CREATE: x,
    GUILD_ROLE_DELETE: x,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: x,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: x,
    GUILD_ROLE_UPDATE: x,
    GUILD_SCHEDULED_EVENT_CREATE: B,
    GUILD_SCHEDULED_EVENT_DELETE: B,
    GUILD_SCHEDULED_EVENT_UPDATE: B,
    GUILD_TOGGLE_COLLAPSE_MUTED: x,
    GUILD_UPDATE: j,
    IMPERSONATE_STOP: x,
    IMPERSONATE_UPDATE: x,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: t } = e;
            return D.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: w,
    MESSAGE_ACK: w,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return D.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: w,
    MESSAGE_DELETE: w,
    NOTIFICATION_SETTINGS_UPDATE: Z,
    OVERLAY_INITIALIZE: Z,
    PASSIVE_UPDATE_V2: function (e) {
        return D.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: Z,
    RESORT_THREADS: w,
    SET_RECENTLY_ACTIVE_COLLAPSED: Z,
    THREAD_CREATE: M,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return D.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: x,
    THREAD_MEMBER_UPDATE: G,
    THREAD_MEMBERS_UPDATE: G,
    THREAD_UPDATE: M,
    TRY_ACK: w,
    UPDATE_CHANNEL_DIMENSIONS: w,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        D.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: x,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: x,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return D.clearGuildId(t);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: x,
    USER_GUILD_SETTINGS_GUILD_UPDATE: x,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        var t;
        let { settings: n } = e;
        if (n.type !== L.yP.PRELOADED_USER_SETTINGS) return !1;
        let l = null == (t = n.proto.guilds) ? void 0 : t.guilds,
            r = !1;
        return (
            null != l &&
                b.default.keys(l).forEach((e) => {
                    null != l[e].guildRecentsDismissedAt && (r = D.updateRecentsCategory(e) || r);
                }),
            r
        );
    },
    VOICE_CATEGORY_COLLAPSE: V,
    VOICE_CATEGORY_EXPAND: V,
    VOICE_CHANNEL_SELECT: k,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return D.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = k(),
            l = new Set();
        for (let { channelId: e, oldChannelId: r } of t) null == r || l.has(r) || (D.nonPositionalChannelIdUpdate(r) && (n = !0), l.add(r)), null == e || l.has(e) || (D.nonPositionalChannelIdUpdate(e) && (n = !0), l.add(e));
        return n;
    },
    WINDOW_FOCUS: function () {
        return null != y && D.nonPositionalChannelIdUpdate(y);
    }
});
