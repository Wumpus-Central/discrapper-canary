n.d(t, { A: () => P, k: () => I });
var i,
    l = n(735438),
    s = n.n(l),
    a = n(311907),
    r = n(73153),
    o = n(455234),
    d = n(63995),
    c = n(69407),
    u = n(152007),
    h = n(734057),
    A = n(71393),
    _ = n(222823),
    m = n(967198),
    g = n(543465),
    p = n(607567),
    f = n(403362),
    E = n(960755),
    x = n(652215),
    I =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let C = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    b = { topBar: C, bottomBar: C },
    N = {},
    S = {};
function v(e) {
    let t = h.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? u.A.isMuted(t.id) : g.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, o.Y)(t)
    );
}
function T(e) {
    let t = h.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = g.Ay.isGuildCollapsed(n),
        l = g.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && _.Ay.getMentionCount(e) > 0;
}
function y(e) {
    return (
        !g.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? d.A.getMutableParticipants(e.id, c.ip.SPEAKER).length > 0
            : p.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function j(e) {
    let { guildChannels: t } = E.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(S[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let i = null,
        l = null,
        a = null,
        r = null,
        o = !0,
        d = !0,
        c = !1,
        u = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        h = u?.getShownChannelIds() ?? [],
        [A, m, g] = t.getSlicedChannels(n);
    for (let e = 0; e < m.length; e++) {
        let t = m[e];
        if (
            ((v(t.id) || s().some(t.threadIds, v)) && (d = !1),
            (T(t.id) || s().some(t.threadIds, T)) && (o = !1),
            h.includes(t.id) && (c = !0),
            !d && !o && c)
        )
            break;
    }
    let p = 0,
        f = !1,
        x = 0,
        I = !1;
    if (d || o)
        for (let e = A.length - 1; e >= 0; e--) {
            let t = A[e];
            (v(t.id) || s().some(t.threadIds, v)) && (null == l && (l = t.id), (f = !0)),
                (T(t.id) || s().some(t.threadIds, T)) &&
                    (null == i && (i = t.id),
                    (p += _.Ay.getMentionCount(t.id)),
                    (p += s().sumBy(t.threadIds, _.Ay.getMentionCount)));
        }
    if (d || o)
        for (let e = 0; e < g.length; e++) {
            let t = g[e];
            if (!d && !o) break;
            (v(t.id) || s().some(t.threadIds, v)) && (null == r && (r = t.id), (I = !0)),
                (T(t.id) || s().some(t.threadIds, T)) &&
                    (null == a && (a = t.id),
                    (x += _.Ay.getMentionCount(t.id)),
                    (x += s().sumBy(t.threadIds, _.Ay.getMentionCount)));
        }
    let b = null,
        j = null,
        R = u?.getChannelRecords() ?? [];
    o && x > 0
        ? (b = { mode: "mentions", mentionCount: x, targetChannelId: a })
        : !c && s().some(R, y)
          ? (b = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && I && (b = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        o && p > 0
            ? (j = { mode: "mentions", mentionCount: p, targetChannelId: i })
            : d && f && (j = { mode: "unread", mentionCount: 0, targetChannelId: l });
    let L = null != j && (null == b || ("mentions" !== b.mode && "mentions" === j.mode)),
        O = null != b && ("mentions" === b.mode || !L);
    return (N[e] = { topBar: L ? (j ?? C) : C, bottomBar: O ? (b ?? C) : C }), !0;
}
let R = s().throttle(j, 200);
function L(e) {
    let { guildId: t } = e,
        n = A.A.getGuild(t);
    return null != n && !!n.features.has(x.GuildFeatures.COMMUNITY) && R(t);
}
function O(e) {
    let { id: t } = e,
        n = h.A.getChannel(t);
    if (null == n) return !1;
    let i = A.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(x.GuildFeatures.COMMUNITY) && R(n.guild_id);
}
function G(e) {
    let { channel: t } = e,
        n = h.A.getChannel(t.id);
    if (null == n) return !1;
    let i = A.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(x.GuildFeatures.COMMUNITY) && R(n.guild_id);
}
function M(e) {
    let { channelId: t } = e,
        n = h.A.getChannel(t);
    if (null == n) return !1;
    let i = A.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(x.GuildFeatures.COMMUNITY) && m.A.getGuildId() === n.guild_id && R(n.guild_id);
}
function D(e) {
    let { guildId: t } = e;
    return null != t && R(t);
}
class U extends a.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(E.A, h.A, A.A, u.A, _.Ay, m.A, p.Ay, d.A, g.Ay);
    }
    getUnreadStateForGuildId(e) {
        return N[e] ?? b;
    }
}
let P = new U(r.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = A.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(x.GuildFeatures.COMMUNITY) &&
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
                    null != t && t.features.has(x.GuildFeatures.COMMUNITY) && R(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: M,
    CHANNEL_DELETE: G,
    CHANNEL_LOCAL_ACK: M,
    MESSAGE_ACK: M,
    MESSAGE_CREATE: M,
    MESSAGE_DELETE_BULK: M,
    MESSAGE_DELETE: M,
    PASSIVE_UPDATE_V2: function (e) {
        let t = A.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(x.GuildFeatures.COMMUNITY)) && R(e.guildId);
    },
    RESORT_THREADS: M,
    THREAD_CREATE: G,
    THREAD_DELETE: G,
    THREAD_LIST_SYNC: L,
    THREAD_MEMBER_UPDATE: O,
    THREAD_MEMBERS_UPDATE: O,
    THREAD_UPDATE: G,
    BULK_CLEAR_RECENTS: L,
    CATEGORY_COLLAPSE_ALL: L,
    CATEGORY_EXPAND_ALL: L,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = m.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = N[n];
        return null != i && "voice-channels" === i.bottomBar.mode && R(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: D,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: D,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && R(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: D,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: D,
});
