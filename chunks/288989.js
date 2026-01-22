n.d(t, {
    A: () => U,
    k: () => x,
}),
    n(896048);
var r,
    l,
    i,
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    c = n(73153),
    u = n(455234),
    d = n(63995),
    f = n(69407),
    p = n(152007),
    h = n(734057),
    b = n(71393),
    g = n(222823),
    m = n(967198),
    A = n(543465),
    y = n(607567),
    O = n(403362),
    j = n(960755),
    v = n(652215),
    x =
        (((l = {}).HIDDEN = "hidden"),
        (l.UNREAD = "unread"),
        (l.MENTIONS = "mentions"),
        (l.VOICE_CHANNELS = "voice-channels"),
        l);
let E = {
        mode: "hidden",
        mentionCount: 0,
        targetChannelId: null,
    },
    _ = {
        topBar: E,
        bottomBar: E,
    },
    C = {},
    S = {};
function I(e) {
    let t = h.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? p.A.isMuted(t.id) : A.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, u.Y)(t)
    );
}
function N(e) {
    let t = h.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let r = A.Ay.isGuildCollapsed(n),
        l = A.Ay.isChannelMuted(n, t.id);
    return (!r || !l) && g.Ay.getMentionCount(e) > 0;
}
function T(e) {
    return (
        !A.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? d.A.getMutableParticipants(e.id, f.ip.SPEAKER).length > 0
            : y.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function P(e) {
    var t, n, r;
    let { guildChannels: l } = j.A.getGuildWithoutChangingGuildActionRows(e),
        i = l.getChannels(null != (t = S[e]) ? t : []);
    if (null == i || 0 === i.length) return !1;
    let a = null,
        o = null,
        c = null,
        u = null,
        d = !0,
        f = !0,
        p = !1,
        h = l.getCategoryFromSection(l.voiceChannelsSectionNumber),
        b = null != (n = null == h ? void 0 : h.getShownChannelIds()) ? n : [],
        [m, A, y] = l.getSlicedChannels(i);
    for (let e = 0; e < A.length; e++) {
        let t = A[e];
        if (
            ((I(t.id) || s().some(t.threadIds, I)) && (f = !1),
            (N(t.id) || s().some(t.threadIds, N)) && (d = !1),
            b.includes(t.id) && (p = !0),
            !f && !d && p)
        )
            break;
    }
    let O = 0,
        v = !1,
        x = 0,
        _ = !1;
    if (f || d)
        for (let e = m.length - 1; e >= 0; e--) {
            let t = m[e];
            (I(t.id) || s().some(t.threadIds, I)) && (null == o && (o = t.id), (v = !0)),
                (N(t.id) || s().some(t.threadIds, N)) &&
                    (null == a && (a = t.id),
                    (O += g.Ay.getMentionCount(t.id)),
                    (O += s().sumBy(t.threadIds, g.Ay.getMentionCount)));
        }
    if (f || d)
        for (let e = 0; e < y.length; e++) {
            let t = y[e];
            if (!f && !d) break;
            (I(t.id) || s().some(t.threadIds, I)) && (null == u && (u = t.id), (_ = !0)),
                (N(t.id) || s().some(t.threadIds, N)) &&
                    (null == c && (c = t.id),
                    (x += g.Ay.getMentionCount(t.id)),
                    (x += s().sumBy(t.threadIds, g.Ay.getMentionCount)));
        }
    let P = null,
        w = null,
        R = null != (r = null == h ? void 0 : h.getChannelRecords()) ? r : [];
    d && x > 0
        ? (P = {
              mode: "mentions",
              mentionCount: x,
              targetChannelId: c,
          })
        : !p && s().some(R, T)
          ? (P = {
                mode: "voice-channels",
                mentionCount: 0,
                targetChannelId: null,
            })
          : f &&
            _ &&
            (P = {
                mode: "unread",
                mentionCount: 0,
                targetChannelId: u,
            }),
        d && O > 0
            ? (w = {
                  mode: "mentions",
                  mentionCount: O,
                  targetChannelId: a,
              })
            : f &&
              v &&
              (w = {
                  mode: "unread",
                  mentionCount: 0,
                  targetChannelId: o,
              });
    let D = null != w && (null == P || ("mentions" !== P.mode && "mentions" === w.mode)),
        M = null != P && ("mentions" === P.mode || !D);
    return (
        (C[e] = {
            topBar: D && null != w ? w : E,
            bottomBar: M && null != P ? P : E,
        }),
        !0
    );
}
let w = s().throttle(P, 200);
function R(e) {
    let { guildId: t } = e,
        n = b.A.getGuild(t);
    return null != n && !!n.features.has(v.GuildFeatures.COMMUNITY) && w(t);
}
function D(e) {
    let { id: t } = e,
        n = h.A.getChannel(t);
    if (null == n) return !1;
    let r = b.A.getGuild(n.guild_id);
    return null != r && !!r.features.has(v.GuildFeatures.COMMUNITY) && w(n.guild_id);
}
function M(e) {
    let { channel: t } = e,
        n = h.A.getChannel(t.id);
    if (null == n) return !1;
    let r = b.A.getGuild(t.guild_id);
    return null != r && !!r.features.has(v.GuildFeatures.COMMUNITY) && w(n.guild_id);
}
function L(e) {
    let { channelId: t } = e,
        n = h.A.getChannel(t);
    if (null == n) return !1;
    let r = b.A.getGuild(n.guild_id);
    return null != r && !!r.features.has(v.GuildFeatures.COMMUNITY) && m.A.getGuildId() === n.guild_id && w(n.guild_id);
}
function G(e) {
    let { guildId: t } = e;
    return null != t && w(t);
}
class k extends (r = o.Ay.Store) {
    initialize() {
        this.waitFor(j.A, h.A, b.A, p.A, g.Ay, m.A, y.Ay, d.A, A.Ay);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null != (t = C[e]) ? t : _;
    }
}
(i = "displayName") in k
    ? Object.defineProperty(k, i, {
          value: "ChannelListUnreadsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (k[i] = "ChannelListUnreadsStore");
let U = new k(c.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            r = b.A.getGuild(t);
        return (
            null != r &&
            !!r.features.has(v.GuildFeatures.COMMUNITY) &&
            null != n &&
            !s().isEqual(S[t], n) &&
            ((S[t] = n), P(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            s()(t)
                .map((e) => {
                    var t;
                    let { channelId: n } = e;
                    return null == (t = h.A.getChannel(n)) ? void 0 : t.guild_id;
                })
                .filter(O.Vq)
                .uniq()
                .forEach((e) => {
                    let t = b.A.getGuild(e);
                    null != t && t.features.has(v.GuildFeatures.COMMUNITY) && w(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: L,
    CHANNEL_DELETE: M,
    CHANNEL_LOCAL_ACK: L,
    MESSAGE_ACK: L,
    MESSAGE_CREATE: L,
    MESSAGE_DELETE_BULK: L,
    MESSAGE_DELETE: L,
    PASSIVE_UPDATE_V2: function (e) {
        let t = b.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(v.GuildFeatures.COMMUNITY)) && w(e.guildId);
    },
    RESORT_THREADS: L,
    THREAD_CREATE: M,
    THREAD_DELETE: M,
    THREAD_LIST_SYNC: R,
    THREAD_MEMBER_UPDATE: D,
    THREAD_MEMBERS_UPDATE: D,
    THREAD_UPDATE: M,
    BULK_CLEAR_RECENTS: R,
    CATEGORY_COLLAPSE_ALL: R,
    CATEGORY_EXPAND_ALL: R,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = m.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let r = C[n];
        return null != r && "voice-channels" === r.bottomBar.mode && w(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && w(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: G,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G,
});
