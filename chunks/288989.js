n.d(t, { A: () => P, k: () => C });
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
    g = n(222823),
    m = n(967198),
    p = n(543465),
    _ = n(607567),
    x = n(403362),
    f = n(960755),
    E = n(652215),
    C =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let I = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    S = { topBar: I, bottomBar: I },
    b = {},
    N = {};
function T(e) {
    let t = h.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? u.A.isMuted(t.id) : p.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, o.Y)(t)
    );
}
function j(e) {
    let t = h.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = p.Ay.isGuildCollapsed(n),
        l = p.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && g.Ay.getMentionCount(e) > 0;
}
function v(e) {
    return (
        !p.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? d.A.getMutableParticipants(e.id, c.ip.SPEAKER).length > 0
            : _.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function y(e) {
    let { guildChannels: t } = f.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(N[e] ?? []);
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
        [A, m, p] = t.getSlicedChannels(n);
    for (let e = 0; e < m.length; e++) {
        let t = m[e];
        if (
            ((T(t.id) || s().some(t.threadIds, T)) && (d = !1),
            (j(t.id) || s().some(t.threadIds, j)) && (o = !1),
            h.includes(t.id) && (c = !0),
            !d && !o && c)
        )
            break;
    }
    let _ = 0,
        x = !1,
        E = 0,
        C = !1;
    if (d || o)
        for (let e = A.length - 1; e >= 0; e--) {
            let t = A[e];
            (T(t.id) || s().some(t.threadIds, T)) && (null == l && (l = t.id), (x = !0)),
                (j(t.id) || s().some(t.threadIds, j)) &&
                    (null == i && (i = t.id),
                    (_ += g.Ay.getMentionCount(t.id)),
                    (_ += s().sumBy(t.threadIds, g.Ay.getMentionCount)));
        }
    if (d || o)
        for (let e = 0; e < p.length; e++) {
            let t = p[e];
            if (!d && !o) break;
            (T(t.id) || s().some(t.threadIds, T)) && (null == r && (r = t.id), (C = !0)),
                (j(t.id) || s().some(t.threadIds, j)) &&
                    (null == a && (a = t.id),
                    (E += g.Ay.getMentionCount(t.id)),
                    (E += s().sumBy(t.threadIds, g.Ay.getMentionCount)));
        }
    let S = null,
        y = null,
        R = u?.getChannelRecords() ?? [];
    o && E > 0
        ? (S = { mode: "mentions", mentionCount: E, targetChannelId: a })
        : !c && s().some(R, v)
          ? (S = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && C && (S = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        o && _ > 0
            ? (y = { mode: "mentions", mentionCount: _, targetChannelId: i })
            : d && x && (y = { mode: "unread", mentionCount: 0, targetChannelId: l });
    let O = null != y && (null == S || ("mentions" !== S.mode && "mentions" === y.mode)),
        L = null != S && ("mentions" === S.mode || !O);
    return (b[e] = { topBar: O ? (y ?? I) : I, bottomBar: L ? (S ?? I) : I }), !0;
}
let R = s().throttle(y, 200);
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
function D(e) {
    let { channel: t } = e,
        n = h.A.getChannel(t.id);
    if (null == n) return !1;
    let i = A.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(E.GuildFeatures.COMMUNITY) && R(n.guild_id);
}
function M(e) {
    let { channelId: t } = e,
        n = h.A.getChannel(t);
    if (null == n) return !1;
    let i = A.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(E.GuildFeatures.COMMUNITY) && m.A.getGuildId() === n.guild_id && R(n.guild_id);
}
function G(e) {
    let { guildId: t } = e;
    return null != t && R(t);
}
class U extends a.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(f.A, h.A, A.A, u.A, g.Ay, m.A, _.Ay, d.A, p.Ay);
    }
    getUnreadStateForGuildId(e) {
        return b[e] ?? S;
    }
}
let P = new U(r.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = A.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(E.GuildFeatures.COMMUNITY) &&
            null != n &&
            !s().isEqual(N[t], n) &&
            ((N[t] = n), y(t))
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
                .filter(x.Vq)
                .uniq()
                .forEach((e) => {
                    let t = A.A.getGuild(e);
                    null != t && t.features.has(E.GuildFeatures.COMMUNITY) && R(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: M,
    CHANNEL_DELETE: D,
    CHANNEL_LOCAL_ACK: M,
    MESSAGE_ACK: M,
    MESSAGE_CREATE: M,
    MESSAGE_DELETE_BULK: M,
    MESSAGE_DELETE: M,
    PASSIVE_UPDATE_V2: function (e) {
        let t = A.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(E.GuildFeatures.COMMUNITY)) && R(e.guildId);
    },
    RESORT_THREADS: M,
    THREAD_CREATE: D,
    THREAD_DELETE: D,
    THREAD_LIST_SYNC: O,
    THREAD_MEMBER_UPDATE: L,
    THREAD_MEMBERS_UPDATE: L,
    THREAD_UPDATE: D,
    BULK_CLEAR_RECENTS: O,
    CATEGORY_COLLAPSE_ALL: O,
    CATEGORY_EXPAND_ALL: O,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = m.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = b[n];
        return null != i && "voice-channels" === i.bottomBar.mode && R(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && R(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: G,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G,
});
