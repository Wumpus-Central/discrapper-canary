n.d(t, { Z: () => eu }), n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(317381),
    c = n(16609),
    u = n(430198),
    d = n(924301),
    f = n(601070),
    p = n(569471),
    _ = n(581883),
    m = n(314897),
    h = n(680089),
    g = n(592125),
    E = n(58468),
    b = n(77498),
    y = n(496675),
    O = n(306680),
    v = n(944486),
    S = n(9156),
    I = n(823379),
    T = n(709054),
    A = n(540126),
    C = n(526761);
function N(e, t, n) {
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
let P = null,
    R = null,
    w = new A.ZP();
function D() {
    let e = v.Z.getChannelId(),
        t = v.Z.getVoiceChannelId();
    return (P = e), (R = t), w.clear();
}
function x(e) {
    let {
        guild: { id: t },
    } = e;
    return w.clearGuildId(t);
}
function L(e) {
    let {
        channel: { guild_id: t },
    } = e;
    return w.clearGuildId(t);
}
function j(e) {
    let { channels: t } = e,
        n = !1;
    return (
        a()(t)
            .map((e) => e.guild_id)
            .uniq()
            .forEach((e) => {
                w.clearGuildId(e) && (n = !0);
            }),
        n
    );
}
function M(e) {
    return w.nonPositionalChannelIdUpdate(e.id);
}
function k(e) {
    return w.clearGuildId(e.guildId);
}
function U(e) {
    let { guildId: t, user: n } = e;
    return m.default.getId() === n.id && w.clearGuildId(t);
}
function G(e) {
    let { userGuildSettings: t } = e;
    t.forEach((e) => {
        let { guild_id: t } = e;
        return w.clearGuildId(t);
    });
}
function Z(e) {
    let { guildId: t } = e;
    return w.clearGuildId(t);
}
function B(e) {
    e.channels.forEach((e) => {
        let { guildId: t } = e;
        return w.clearGuildId(t);
    });
}
function F(e) {
    var t;
    let { channelId: n } = e;
    return w.clearGuildId(null == (t = g.Z.getChannel(n)) ? void 0 : t.guild_id);
}
function V(e) {
    let { channelId: t } = e;
    return w.nonPositionalChannelIdUpdate(t);
}
function H(e) {
    let { channelId: t } = e;
    return w.nonPositionalChannelIdUpdate(t);
}
function Y(e) {
    let { channelId: t } = e;
    return w.nonPositionalChannelIdUpdate(t);
}
function W() {
    return null != P && w.nonPositionalChannelIdUpdate(P);
}
function K(e) {
    let { channels: t } = e,
        n = !1;
    return (
        a()(t)
            .map((e) => {
                var t;
                return null == (t = g.Z.getChannel(e.channelId)) ? void 0 : t.guild_id;
            })
            .filter(I.lm)
            .uniq()
            .forEach((e) => {
                w.clearGuildId(e) && (n = !0);
            }),
        n
    );
}
function z(e) {
    return w.clearGuildId(e.guildId);
}
function q(e) {
    let { channel: t } = e;
    return w.nonPositionalChannelIdUpdate(t.id);
}
function X(e) {
    let { channel: t } = e;
    return w.nonPositionalChannelUpdate(t);
}
function Q(e) {
    let { id: t } = e;
    return w.nonPositionalChannelIdUpdate(t);
}
function J() {
    let e = v.Z.getChannelId(),
        t = v.Z.getVoiceChannelId(),
        n = P !== e || R !== t;
    return (
        !!n &&
        (a()([P, R, e, t])
            .uniq()
            .forEach((e) => {
                null != e && w.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (P = e),
        (R = t),
        !0)
    );
}
function $(e) {
    let { voiceStates: t } = e,
        n = J(),
        r = new Set();
    for (let { channelId: e, oldChannelId: i } of t)
        null == i || r.has(i) || (w.nonPositionalChannelIdUpdate(i) && (n = !0), r.add(i)),
            null == e || r.has(e) || (w.nonPositionalChannelIdUpdate(e) && (n = !0), r.add(e));
    return n;
}
function ee(e) {
    let { id: t } = e,
        n = g.Z.getChannel(t);
    return null == n ? w.clearGuildId(t) : w.clearGuildId(n.guild_id);
}
function et(e) {
    let { guildId: t } = e;
    return w.clearGuildId(t);
}
function en(e) {
    let { location: t } = e;
    return w.updateSubtitles((0, c.j)(t), (0, c.p)(t));
}
function er(e) {
    ei();
}
function ei() {
    return w.updateSubtitles();
}
function ea(e) {
    let { guildId: t } = e;
    return w.updateSubtitles(t);
}
function eo(e) {
    let { guildScheduledEvent: t } = e;
    return w.updateSubtitles(t.guild_id);
}
function es(e) {
    let { guildId: t } = e;
    w.updateSubtitles(t);
}
function el(e) {
    var t;
    let { settings: n } = e;
    if (n.type !== C.yP.PRELOADED_USER_SETTINGS) return !1;
    let r = null == (t = n.proto.guilds) ? void 0 : t.guilds,
        i = !1;
    return (
        null != r &&
            T.default.keys(r).forEach((e) => {
                null != r[e].guildRecentsDismissedAt && (i = w.updateRecentsCategory(e) || i);
            }),
        i
    );
}
class ec extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, m.default, h.Z, g.Z, E.Z, l.ZP, b.Z, u.Z, d.ZP, p.Z, y.Z, O.ZP, v.Z, S.ZP, _.Z);
    }
    getGuild(e, t) {
        var n, r;
        let i = w.getGuild(
            e,
            null != (n = null == t ? void 0 : t.guildActionRows) ? n : [],
            null != (r = null == t ? void 0 : t.channelNoticeRows) ? r : [],
        );
        return {
            guildChannelsVersion: i.version,
            guildChannels: i,
        };
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = w.getGuildChannelRowsOnly(e);
        return {
            guildChannelsVersion: t.version,
            guildChannels: t,
        };
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = w.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length;
    }
}
N(ec, "displayName", "ChannelListStore");
let eu = new ec(s.Z, {
    APPLICATION_FETCH_FAIL: ei,
    APPLICATION_FETCH_SUCCESS: ei,
    APPLICATION_FETCH: ei,
    APPLICATIONS_FETCH_FAIL: ei,
    APPLICATIONS_FETCH_SUCCESS: ei,
    APPLICATIONS_FETCH: ei,
    BACKGROUND_SYNC: D,
    BULK_ACK: K,
    BULK_CLEAR_RECENTS: Z,
    CACHE_LOADED_LAZY: D,
    CATEGORY_COLLAPSE_ALL: Z,
    CATEGORY_COLLAPSE: ee,
    CATEGORY_EXPAND_ALL: Z,
    CATEGORY_EXPAND: ee,
    CHANNEL_ACK: Y,
    CHANNEL_COLLAPSE: F,
    CHANNEL_CREATE: L,
    CHANNEL_DELETE: L,
    CHANNEL_LOCAL_ACK: Y,
    CHANNEL_MUTE_EXPIRED: Z,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: Y,
    CHANNEL_SELECT: J,
    CHANNEL_STATUSES: k,
    CHANNEL_UPDATES: j,
    CONNECTION_OPEN_SUPPLEMENTAL: ei,
    CONNECTION_OPEN: D,
    CURRENT_USER_UPDATE: D,
    DECAY_READ_STATES: D,
    DEV_TOOLS_DESIGN_TOGGLE_SET: D,
    DISABLE_AUTOMATIC_ACK: Y,
    DISMISS_FAVORITE_SUGGESTION: H,
    EMBEDDED_ACTIVITY_UPDATE_V2: en,
    EMBEDDED_ACTIVITY_LAUNCH_START: er,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: ei,
    ENABLE_AUTOMATIC_ACK: Y,
    FETCH_GUILD_EVENTS_FOR_GUILD: ea,
    GAMES_DATABASE_FETCH_FAIL: ei,
    GAMES_DATABASE_FETCH: ei,
    GAMES_DATABASE_UPDATE: ei,
    GUILD_APPLICATIONS_FETCH_SUCCESS: ei,
    GUILD_CREATE: x,
    GUILD_DELETE: x,
    GUILD_MEMBER_UPDATE: U,
    GUILD_MUTE_EXPIRED: Z,
    GUILD_ROLE_CREATE: Z,
    GUILD_ROLE_DELETE: Z,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: Z,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: Z,
    GUILD_ROLE_UPDATE: Z,
    GUILD_SCHEDULED_EVENT_CREATE: eo,
    GUILD_SCHEDULED_EVENT_DELETE: eo,
    GUILD_SCHEDULED_EVENT_UPDATE: eo,
    GUILD_TOGGLE_COLLAPSE_MUTED: Z,
    GUILD_UPDATE: x,
    IMPERSONATE_STOP: Z,
    IMPERSONATE_UPDATE: Z,
    LOAD_CHANNELS: B,
    LOAD_MESSAGES_SUCCESS: Y,
    MESSAGE_ACK: Y,
    MESSAGE_CREATE: V,
    MESSAGE_DELETE_BULK: Y,
    MESSAGE_DELETE: Y,
    NOTIFICATION_SETTINGS_UPDATE: D,
    OVERLAY_INITIALIZE: D,
    PASSIVE_UPDATE_V2: z,
    RECOMPUTE_READ_STATES: D,
    RESORT_THREADS: Y,
    SET_RECENTLY_ACTIVE_COLLAPSED: D,
    THREAD_CREATE: q,
    THREAD_DELETE: X,
    THREAD_LIST_SYNC: Z,
    THREAD_MEMBER_UPDATE: Q,
    THREAD_MEMBERS_UPDATE: Q,
    THREAD_UPDATE: q,
    TRY_ACK: Y,
    UPDATE_CHANNEL_DIMENSIONS: Y,
    UPDATE_CHANNEL_LIST_SUBTITLES: es,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: Z,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: Z,
    USER_GUILD_SETTINGS_FULL_UPDATE: G,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: Z,
    USER_GUILD_SETTINGS_GUILD_UPDATE: Z,
    USER_SETTINGS_PROTO_UPDATE: el,
    VOICE_CATEGORY_COLLAPSE: et,
    VOICE_CATEGORY_EXPAND: et,
    VOICE_CHANNEL_SELECT: J,
    VOICE_CHANNEL_STATUS_UPDATE: M,
    VOICE_STATE_UPDATES: $,
    WINDOW_FOCUS: W,
});
