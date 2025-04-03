t.d(e, { Z: () => K }), t(47120);
var l,
    i,
    r,
    E = t(392711),
    a = t.n(E),
    d = t(442837),
    _ = t(570140),
    o = t(317381),
    u = t(16609),
    s = t(430198),
    c = t(924301),
    C = t(601070),
    A = t(569471),
    T = t(581883),
    S = t(314897),
    I = t(680089),
    L = t(592125),
    N = t(58468),
    D = t(77498),
    h = t(496675),
    U = t(306680),
    P = t(944486),
    R = t(9156),
    f = t(823379),
    g = t(709054),
    G = t(540126),
    O = t(526761);
let m = null,
    Z = null,
    H = new G.ZP();
function x() {
    let n = P.Z.getChannelId(),
        e = P.Z.getVoiceChannelId();
    return (m = n), (Z = e), H.clear();
}
function p(n) {
    let {
        guild: { id: e }
    } = n;
    return H.clearGuildId(e);
}
function v(n) {
    let {
        channel: { guild_id: e }
    } = n;
    return H.clearGuildId(e);
}
function b(n) {
    let { guildId: e } = n;
    return H.clearGuildId(e);
}
function M(n) {
    let { channelId: e } = n;
    return H.nonPositionalChannelIdUpdate(e);
}
function j(n) {
    let { channel: e } = n;
    return H.nonPositionalChannelIdUpdate(e.id);
}
function w(n) {
    let { id: e } = n;
    return H.nonPositionalChannelIdUpdate(e);
}
function y() {
    let n = P.Z.getChannelId(),
        e = P.Z.getVoiceChannelId(),
        t = m !== n || Z !== e;
    return (
        !!t &&
        (a()([m, Z, n, e])
            .uniq()
            .forEach((n) => {
                null != n && H.nonPositionalChannelIdUpdate(n) && (t = !0);
            }),
        (m = n),
        (Z = e),
        !0)
    );
}
function F(n) {
    let { id: e } = n,
        t = L.Z.getChannel(e);
    return null == t ? H.clearGuildId(e) : H.clearGuildId(t.guild_id);
}
function B(n) {
    let { guildId: e } = n;
    return H.clearGuildId(e);
}
function V() {
    return H.updateSubtitles();
}
function Y(n) {
    let { guildScheduledEvent: e } = n;
    return H.updateSubtitles(e.guild_id);
}
class k extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, S.default, I.Z, L.Z, N.Z, o.ZP, D.Z, s.Z, c.ZP, A.Z, h.Z, U.ZP, P.Z, R.ZP, T.Z);
    }
    getGuild(n, e) {
        var t, l;
        let i = H.getGuild(n, null != (t = null == e ? void 0 : e.guildActionRows) ? t : [], null != (l = null == e ? void 0 : e.channelNoticeRows) ? l : []);
        return {
            guildChannelsVersion: i.version,
            guildChannels: i
        };
    }
    getGuildWithoutChangingGuildActionRows(n) {
        let e = H.getGuildChannelRowsOnly(n);
        return {
            guildChannelsVersion: e.version,
            guildChannels: e
        };
    }
    recentsChannelCount(n) {
        if (null == n) return 0;
        let e = H.getGuildChannelRowsOnly(n);
        return e.getCategoryFromSection(e.recentsSectionNumber).getShownChannelIds().length;
    }
}
(r = 'ChannelListStore'),
    (i = 'displayName') in k
        ? Object.defineProperty(k, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (k[i] = r);
let K = new k(_.Z, {
    APPLICATION_FETCH_FAIL: V,
    APPLICATION_FETCH_SUCCESS: V,
    APPLICATION_FETCH: V,
    APPLICATIONS_FETCH_FAIL: V,
    APPLICATIONS_FETCH_SUCCESS: V,
    APPLICATIONS_FETCH: V,
    BACKGROUND_SYNC: x,
    BULK_ACK: function (n) {
        let { channels: e } = n,
            t = !1;
        return (
            a()(e)
                .map((n) => {
                    var e;
                    return null == (e = L.Z.getChannel(n.channelId)) ? void 0 : e.guild_id;
                })
                .filter(f.lm)
                .uniq()
                .forEach((n) => {
                    H.clearGuildId(n) && (t = !0);
                }),
            t
        );
    },
    BULK_CLEAR_RECENTS: b,
    CACHE_LOADED_LAZY: x,
    CATEGORY_COLLAPSE_ALL: b,
    CATEGORY_COLLAPSE: F,
    CATEGORY_EXPAND_ALL: b,
    CATEGORY_EXPAND: F,
    CHANNEL_ACK: M,
    CHANNEL_COLLAPSE: function (n) {
        var e;
        let { channelId: t } = n;
        return H.clearGuildId(null == (e = L.Z.getChannel(t)) ? void 0 : e.guild_id);
    },
    CHANNEL_CREATE: v,
    CHANNEL_DELETE: v,
    CHANNEL_LOCAL_ACK: M,
    CHANNEL_MUTE_EXPIRED: b,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: M,
    CHANNEL_SELECT: y,
    CHANNEL_STATUSES: function (n) {
        return H.clearGuildId(n.guildId);
    },
    CHANNEL_UPDATES: function (n) {
        let { channels: e } = n,
            t = !1;
        return (
            a()(e)
                .map((n) => n.guild_id)
                .uniq()
                .forEach((n) => {
                    H.clearGuildId(n) && (t = !0);
                }),
            t
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: V,
    CONNECTION_OPEN: x,
    CURRENT_USER_UPDATE: x,
    DECAY_READ_STATES: x,
    DEV_TOOLS_DESIGN_TOGGLE_SET: x,
    DISABLE_AUTOMATIC_ACK: M,
    DISMISS_FAVORITE_SUGGESTION: function (n) {
        let { channelId: e } = n;
        return H.nonPositionalChannelIdUpdate(e);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (n) {
        var e, t;
        let { location: l } = n;
        return H.updateSubtitles(null != (e = (0, u.jS)(l)) ? e : (0, u.hu)(l), null != (t = (0, u.pY)(l)) ? t : (0, u.wq)(l));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (n) {
        V();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: V,
    ENABLE_AUTOMATIC_ACK: M,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (n) {
        let { guildId: e } = n;
        return H.updateSubtitles(e);
    },
    GAMES_DATABASE_FETCH_FAIL: V,
    GAMES_DATABASE_FETCH: V,
    GAMES_DATABASE_UPDATE: V,
    GUILD_APPLICATIONS_FETCH_SUCCESS: V,
    GUILD_CREATE: p,
    GUILD_DELETE: p,
    GUILD_MEMBER_UPDATE: function (n) {
        let { guildId: e, user: t } = n;
        return S.default.getId() === t.id && H.clearGuildId(e);
    },
    GUILD_MUTE_EXPIRED: b,
    GUILD_ROLE_CREATE: b,
    GUILD_ROLE_DELETE: b,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: b,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: b,
    GUILD_ROLE_UPDATE: b,
    GUILD_SCHEDULED_EVENT_CREATE: Y,
    GUILD_SCHEDULED_EVENT_DELETE: Y,
    GUILD_SCHEDULED_EVENT_UPDATE: Y,
    GUILD_TOGGLE_COLLAPSE_MUTED: b,
    GUILD_UPDATE: p,
    IMPERSONATE_STOP: b,
    IMPERSONATE_UPDATE: b,
    LOAD_CHANNELS: function (n) {
        n.channels.forEach((n) => {
            let { guildId: e } = n;
            return H.clearGuildId(e);
        });
    },
    LOAD_MESSAGES_SUCCESS: M,
    MESSAGE_ACK: M,
    MESSAGE_CREATE: function (n) {
        let { channelId: e } = n;
        return H.nonPositionalChannelIdUpdate(e);
    },
    MESSAGE_DELETE_BULK: M,
    MESSAGE_DELETE: M,
    NOTIFICATION_SETTINGS_UPDATE: x,
    OVERLAY_INITIALIZE: x,
    PASSIVE_UPDATE_V2: function (n) {
        return H.clearGuildId(n.guildId);
    },
    RECOMPUTE_READ_STATES: x,
    RESORT_THREADS: M,
    SET_RECENTLY_ACTIVE_COLLAPSED: x,
    THREAD_CREATE: j,
    THREAD_DELETE: function (n) {
        let { channel: e } = n;
        return H.nonPositionalChannelUpdate(e);
    },
    THREAD_LIST_SYNC: b,
    THREAD_MEMBER_UPDATE: w,
    THREAD_MEMBERS_UPDATE: w,
    THREAD_UPDATE: j,
    TRY_ACK: M,
    UPDATE_CHANNEL_DIMENSIONS: M,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (n) {
        let { guildId: e } = n;
        H.updateSubtitles(e);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: b,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: b,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (n) {
        let { userGuildSettings: e } = n;
        e.forEach((n) => {
            let { guild_id: e } = n;
            return H.clearGuildId(e);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: b,
    USER_GUILD_SETTINGS_GUILD_UPDATE: b,
    USER_SETTINGS_PROTO_UPDATE: function (n) {
        var e;
        let { settings: t } = n;
        if (t.type !== O.yP.PRELOADED_USER_SETTINGS) return !1;
        let l = null == (e = t.proto.guilds) ? void 0 : e.guilds,
            i = !1;
        return (
            null != l &&
                g.default.keys(l).forEach((n) => {
                    null != l[n].guildRecentsDismissedAt && (i = H.updateRecentsCategory(n) || i);
                }),
            i
        );
    },
    VOICE_CATEGORY_COLLAPSE: B,
    VOICE_CATEGORY_EXPAND: B,
    VOICE_CHANNEL_SELECT: y,
    VOICE_CHANNEL_STATUS_UPDATE: function (n) {
        return H.nonPositionalChannelIdUpdate(n.id);
    },
    VOICE_STATE_UPDATES: function (n) {
        let { voiceStates: e } = n,
            t = y(),
            l = new Set();
        for (let { channelId: n, oldChannelId: i } of e) null == i || l.has(i) || (H.nonPositionalChannelIdUpdate(i) && (t = !0), l.add(i)), null == n || l.has(n) || (H.nonPositionalChannelIdUpdate(n) && (t = !0), l.add(n));
        return t;
    },
    WINDOW_FOCUS: function () {
        return null != m && H.nonPositionalChannelIdUpdate(m);
    }
});
