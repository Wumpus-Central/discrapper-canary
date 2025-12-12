n.d(t, {
    Z: () => G,
    x: () => x,
}),
    n(388685);
var r,
    i,
    l,
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    c = n(570140),
    u = n(220444),
    d = n(565799),
    f = n(501655),
    h = n(569471),
    p = n(592125),
    g = n(430824),
    b = n(306680),
    m = n(914010),
    y = n(9156),
    O = n(938475),
    v = n(823379),
    j = n(734307),
    C = n(981631),
    x =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let E = {
        mode: "hidden",
        mentionCount: 0,
        targetChannelId: null,
    },
    S = {
        topBar: E,
        bottomBar: E,
    },
    I = {},
    _ = {};
function P(e) {
    let t = p.Z.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? h.Z.isMuted(t.id) : y.ZP.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, u.d)(t)
    );
}
function N(e) {
    let t = p.Z.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let r = y.ZP.isGuildCollapsed(n),
        i = y.ZP.isChannelMuted(n, t.id);
    return (!r || !i) && b.ZP.getMentionCount(e) > 0;
}
function Z(e) {
    return (
        !y.ZP.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? d.Z.getMutableParticipants(e.id, f.pV.SPEAKER).length > 0
            : O.ZP.getVoiceStatesForChannel(e).length > 0)
    );
}
function w(e) {
    var t, n, r;
    let { guildChannels: i } = j.Z.getGuildWithoutChangingGuildActionRows(e),
        l = i.getChannels(null != (t = _[e]) ? t : []);
    if (null == l || 0 === l.length) return !1;
    let a = null,
        s = null,
        c = null,
        u = null,
        d = !0,
        f = !0,
        h = !1,
        p = i.getCategoryFromSection(i.voiceChannelsSectionNumber),
        g = null != (n = null == p ? void 0 : p.getShownChannelIds()) ? n : [],
        [m, y, O] = i.getSlicedChannels(l);
    for (let e = 0; e < y.length; e++) {
        let t = y[e];
        if (
            ((P(t.id) || o().some(t.threadIds, P)) && (f = !1),
            (N(t.id) || o().some(t.threadIds, N)) && (d = !1),
            g.includes(t.id) && (h = !0),
            !f && !d && h)
        )
            break;
    }
    let v = 0,
        C = !1,
        x = 0,
        S = !1;
    if (f || d)
        for (let e = m.length - 1; e >= 0; e--) {
            let t = m[e];
            (P(t.id) || o().some(t.threadIds, P)) && (null == s && (s = t.id), (C = !0)),
                (N(t.id) || o().some(t.threadIds, N)) &&
                    (null == a && (a = t.id),
                    (v += b.ZP.getMentionCount(t.id)),
                    (v += o().sumBy(t.threadIds, b.ZP.getMentionCount)));
        }
    if (f || d)
        for (let e = 0; e < O.length; e++) {
            let t = O[e];
            if (!f && !d) break;
            (P(t.id) || o().some(t.threadIds, P)) && (null == u && (u = t.id), (S = !0)),
                (N(t.id) || o().some(t.threadIds, N)) &&
                    (null == c && (c = t.id),
                    (x += b.ZP.getMentionCount(t.id)),
                    (x += o().sumBy(t.threadIds, b.ZP.getMentionCount)));
        }
    let w = null,
        T = null,
        A = null != (r = null == p ? void 0 : p.getChannelRecords()) ? r : [];
    d && x > 0
        ? (w = {
              mode: "mentions",
              mentionCount: x,
              targetChannelId: c,
          })
        : !h && o().some(A, Z)
          ? (w = {
                mode: "voice-channels",
                mentionCount: 0,
                targetChannelId: null,
            })
          : f &&
            S &&
            (w = {
                mode: "unread",
                mentionCount: 0,
                targetChannelId: u,
            }),
        d && v > 0
            ? (T = {
                  mode: "mentions",
                  mentionCount: v,
                  targetChannelId: a,
              })
            : f &&
              C &&
              (T = {
                  mode: "unread",
                  mentionCount: 0,
                  targetChannelId: s,
              });
    let R = null != T && (null == w || ("mentions" !== w.mode && "mentions" === T.mode)),
        D = null != w && ("mentions" === w.mode || !R);
    return (
        (I[e] = {
            topBar: R && null != T ? T : E,
            bottomBar: D && null != w ? w : E,
        }),
        !0
    );
}
let T = o().throttle(w, 200);
function A(e) {
    let { guildId: t } = e,
        n = g.Z.getGuild(t);
    return null != n && !!n.features.has(C.GuildFeatures.COMMUNITY) && T(t);
}
function R(e) {
    let { id: t } = e,
        n = p.Z.getChannel(t);
    if (null == n) return !1;
    let r = g.Z.getGuild(n.guild_id);
    return null != r && !!r.features.has(C.GuildFeatures.COMMUNITY) && T(n.guild_id);
}
function D(e) {
    let { channel: t } = e,
        n = p.Z.getChannel(t.id);
    if (null == n) return !1;
    let r = g.Z.getGuild(t.guild_id);
    return null != r && !!r.features.has(C.GuildFeatures.COMMUNITY) && T(n.guild_id);
}
function M(e) {
    let { channelId: t } = e,
        n = p.Z.getChannel(t);
    if (null == n) return !1;
    let r = g.Z.getGuild(n.guild_id);
    return null != r && !!r.features.has(C.GuildFeatures.COMMUNITY) && m.Z.getGuildId() === n.guild_id && T(n.guild_id);
}
function L(e) {
    let { guildId: t } = e;
    return null != t && T(t);
}
class k extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(j.Z, p.Z, g.Z, h.Z, b.ZP, m.Z, O.ZP, d.Z, y.ZP);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null != (t = I[e]) ? t : S;
    }
}
(l = "displayName") in k
    ? Object.defineProperty(k, l, {
          value: "ChannelListUnreadsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (k[l] = "ChannelListUnreadsStore");
let G = new k(c.Z, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            r = g.Z.getGuild(t);
        return (
            null != r &&
            !!r.features.has(C.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(_[t], n) &&
            ((_[t] = n), w(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            o()(t)
                .map((e) => {
                    var t;
                    let { channelId: n } = e;
                    return null == (t = p.Z.getChannel(n)) ? void 0 : t.guild_id;
                })
                .filter(v.lm)
                .uniq()
                .forEach((e) => {
                    let t = g.Z.getGuild(e);
                    null != t && t.features.has(C.GuildFeatures.COMMUNITY) && T(e) && (n = !0);
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
        let t = g.Z.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(C.GuildFeatures.COMMUNITY)) && T(e.guildId);
    },
    RESORT_THREADS: M,
    THREAD_CREATE: D,
    THREAD_DELETE: D,
    THREAD_LIST_SYNC: A,
    THREAD_MEMBER_UPDATE: R,
    THREAD_MEMBERS_UPDATE: R,
    THREAD_UPDATE: D,
    BULK_CLEAR_RECENTS: A,
    CATEGORY_COLLAPSE_ALL: A,
    CATEGORY_EXPAND_ALL: A,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = m.Z.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let r = I[n];
        return null != r && "voice-channels" === r.bottomBar.mode && T(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: L,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: L,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && T(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: L,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: L,
});
