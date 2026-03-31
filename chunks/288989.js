n.d(t, { A: () => P, k: () => I });
var i,
    l = n(735438),
    s = n.n(l),
    a = n(311907),
    r = n(73153),
    o = n(455234),
    c = n(63995),
    d = n(69407),
    u = n(152007),
    h = n(734057),
    A = n(71393),
    _ = n(222823),
    m = n(967198),
    g = n(543465),
    p = n(607567),
    f = n(403362),
    x = n(960755),
    E = n(652215),
    I =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let C = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    N = { topBar: C, bottomBar: C },
    T = {},
    S = {};
function b(e) {
    let t = h.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? u.A.isMuted(t.id) : g.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, o.Y)(t)
    );
}
function y(e) {
    let t = h.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = g.Ay.isGuildCollapsed(n),
        l = g.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && _.Ay.getMentionCount(e) > 0;
}
function v(e) {
    return (
        !g.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? c.A.getMutableParticipants(e.id, d.ip.SPEAKER).length > 0
            : p.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function j(e) {
    let { guildChannels: t } = x.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(S[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let i = null,
        l = null,
        a = null,
        r = null,
        o = !0,
        c = !0,
        d = !1,
        u = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        h = u?.getShownChannelIds() ?? [],
        [A, m, g] = t.getSlicedChannels(n);
    for (let e = 0; e < m.length; e++) {
        let t = m[e];
        if (
            ((b(t.id) || s().some(t.threadIds, b)) && (c = !1),
            (y(t.id) || s().some(t.threadIds, y)) && (o = !1),
            h.includes(t.id) && (d = !0),
            !c && !o && d)
        )
            break;
    }
    let p = 0,
        f = !1,
        E = 0,
        I = !1;
    if (c || o)
        for (let e = A.length - 1; e >= 0; e--) {
            let t = A[e];
            (b(t.id) || s().some(t.threadIds, b)) && (null == l && (l = t.id), (f = !0)),
                (y(t.id) || s().some(t.threadIds, y)) &&
                    (null == i && (i = t.id),
                    (p += _.Ay.getMentionCount(t.id)),
                    (p += s().sumBy(t.threadIds, _.Ay.getMentionCount)));
        }
    if (c || o)
        for (let e = 0; e < g.length; e++) {
            let t = g[e];
            if (!c && !o) break;
            (b(t.id) || s().some(t.threadIds, b)) && (null == r && (r = t.id), (I = !0)),
                (y(t.id) || s().some(t.threadIds, y)) &&
                    (null == a && (a = t.id),
                    (E += _.Ay.getMentionCount(t.id)),
                    (E += s().sumBy(t.threadIds, _.Ay.getMentionCount)));
        }
    let N = null,
        j = null,
        R = u?.getChannelRecords() ?? [];
    o && E > 0
        ? (N = { mode: "mentions", mentionCount: E, targetChannelId: a })
        : !d && s().some(R, v)
          ? (N = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : c && I && (N = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        o && p > 0
            ? (j = { mode: "mentions", mentionCount: p, targetChannelId: i })
            : c && f && (j = { mode: "unread", mentionCount: 0, targetChannelId: l });
    let O = null != j && (null == N || ("mentions" !== N.mode && "mentions" === j.mode)),
        L = null != N && ("mentions" === N.mode || !O);
    return (T[e] = { topBar: O ? (j ?? C) : C, bottomBar: L ? (N ?? C) : C }), !0;
}
let R = s().throttle(j, 200);
function O(e) {
    let { guildId: t } = e,
        n = A.A.getGuild(t);
    return null != n && !!n.features.has(E.GuildFeatures.COMMUNITY) && R(t);
}
function L(e) {
    let { id: t } = e,
        n = h.A.getChannel(t);
    if (null == n) return !1;
    let i = A.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(E.GuildFeatures.COMMUNITY) && R(n.guild_id);
}
function M(e) {
    let { channel: t } = e,
        n = h.A.getChannel(t.id);
    if (null == n) return !1;
    let i = A.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(E.GuildFeatures.COMMUNITY) && R(n.guild_id);
}
function D(e) {
    let { channelId: t } = e,
        n = h.A.getChannel(t);
    if (null == n) return !1;
    let i = A.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(E.GuildFeatures.COMMUNITY) && m.A.getGuildId() === n.guild_id && R(n.guild_id);
}
function U(e) {
    let { guildId: t } = e;
    return null != t && R(t);
}
class G extends a.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(x.A, h.A, A.A, u.A, _.Ay, m.A, p.Ay, c.A, g.Ay);
    }
    getUnreadStateForGuildId(e) {
        return T[e] ?? N;
    }
}
let P = new G(r.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = A.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(E.GuildFeatures.COMMUNITY) &&
            null != n &&
            !s().isEqual(S[t], n) &&
            ((S[t] = n), j(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            s()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return h.A.getChannel(t)?.guild_id;
                })
                .filter(f.Vq)
                .uniq()
                .forEach((e) => {
                    let t = A.A.getGuild(e);
                    null != t && t.features.has(E.GuildFeatures.COMMUNITY) && R(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: D,
    CHANNEL_DELETE: M,
    CHANNEL_LOCAL_ACK: D,
    MESSAGE_ACK: D,
    MESSAGE_CREATE: D,
    MESSAGE_DELETE_BULK: D,
    MESSAGE_DELETE: D,
    PASSIVE_UPDATE_V2: function (e) {
        let t = A.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(E.GuildFeatures.COMMUNITY)) && R(e.guildId);
    },
    RESORT_THREADS: D,
    THREAD_CREATE: M,
    THREAD_DELETE: M,
    THREAD_LIST_SYNC: O,
    THREAD_MEMBER_UPDATE: L,
    THREAD_MEMBERS_UPDATE: L,
    THREAD_UPDATE: M,
    BULK_CLEAR_RECENTS: O,
    CATEGORY_COLLAPSE_ALL: O,
    CATEGORY_EXPAND_ALL: O,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = m.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = T[n];
        return null != i && "voice-channels" === i.bottomBar.mode && R(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: U,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: U,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && R(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: U,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: U,
});
