"use strict";
n.r(t), n.d(t, { default: () => ep }), n(938796);
var i = n(435558),
    r = n.n(i),
    a = n(5180),
    s = n(409686);
n(252431);
var l = n(395504),
    o = n(695633),
    d = n(152007),
    c = n(882733),
    u = n(95701),
    _ = n(935208),
    E = n(280450),
    A = n(734057),
    h = n(71393),
    I = n(536802),
    f = n(576705),
    p = n(568548),
    T = n(309010),
    m = n(543465),
    g = n(287809),
    S = n(652215),
    N = n(746080),
    C = n(790782);
let O = S.eGj,
    R = {},
    L = new Set(),
    y = 0;
function D(e) {
    let t = R[e ?? O];
    return {
        unread: !1,
        unreadByType: {},
        unreadChannelId: null,
        lowImportanceMentionCount: 0,
        highImportanceMentionCount: 0,
        mentionCounts: {},
        ncMentionCount: 0,
        sentinel: t?.sentinel ?? 0,
    };
}
function v(e) {
    return (R[e ?? O] = R[e ?? O] ?? D(e));
}
function b(e) {
    let t = v(e);
    t.sentinel++, y++;
}
function M(e, t, n) {
    return null != e.guild_id && n && !((0, u.fT)(e.type) || m.Ay.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        !(
            null == e ||
            (e.isGuildVocal() && 0 === t) ||
            e.hasFlag(N.lx.IS_GUILD_RESOURCE_CHANNEL) ||
            ((0 === t || n) &&
                (e.isThread()
                    ? d.A.isMuted(e.id) || m.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id)
                    : m.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) ||
            (!e.isPrivate() && (M(e, t, (0, l.WW)(e.guild_id)) || !f.A.can(e.accessPermissions, e)))
        ) &&
        (t > 0 || m.Ay.resolveUnreadSetting(e) === C.e.ALL_MESSAGES)
    );
}
function U(e) {
    switch (e) {
        case O:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function w(e, t) {
    let n = p.Ay.hasUnread(e, t);
    return t !== C.P.GUILD_EVENT ? n : !(m.Ay.isMuted(e) || m.Ay.isMuteScheduledEventsEnabled(e)) && n;
}
function G(e, t) {
    let n = D(e);
    return (n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n;
}
function x(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function k(e, t) {}
function F(e, t, n) {
    return (
        x(t),
        (t.lowImportanceMentionCount = 0),
        (t.highImportanceMentionCount = 0),
        _.default.forEach(t.mentionCounts, (e) => {
            let { count: n, isMentionLowImportance: i } = e;
            i ? (t.lowImportanceMentionCount += n) : (t.highImportanceMentionCount += n);
        }),
        (t.unread !== n.unread ||
            t.lowImportanceMentionCount !== n.lowImportanceMentionCount ||
            t.highImportanceMentionCount !== n.highImportanceMentionCount) &&
            ((R[e ?? O] = t), null != e && (t.unread ? L.add(e) : L.delete(e)), y++, b(e ?? O), k(t, n), !0)
    );
}
function V(e, t) {
    let n = U(e),
        i = v(n),
        r = G(n, i),
        a = !1;
    if (
        (t.forEach((e) => {
            let t = A.A.getChannel(e);
            if (null == t) return void delete r.mentionCounts[e];
            if (t.getGuildId() !== n) return;
            let i = p.Ay.getMentionCount(e);
            null !== n && !a && p.Ay.hasUnread(t.id) && P(t, i, !0) && ((a = !0), (r.unreadChannelId = t.id)),
                i > 0 && P(t, i)
                    ? (r.mentionCounts[t.id] = { count: i, isMentionLowImportance: p.Ay.getIsMentionLowImportance(e) })
                    : delete r.mentionCounts[t.id];
        }),
        (r.unreadByType[C.P.CHANNEL] = a),
        r.unreadByType[C.P.CHANNEL] !== i.unreadByType[C.P.CHANNEL] && !r.unreadByType[C.P.CHANNEL])
    ) {
        let e = A.A.getChannel(i.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && p.Ay.hasUnread(e.id) && P(e))) return H(n);
        null != n && L.add(n), (r.unreadByType[C.P.CHANNEL] = !0);
    }
    return F(n, r, i);
}
function B(e, t) {
    if (null == e) return;
    let n = v(e),
        i = G(e, n);
    return (i.unreadByType[C.P.GUILD_EVENT] = w(e, t)), F(e, i, n);
}
function H(e, t) {
    let n = U(e),
        i = D(n);
    if (null == n) {
        let e = A.A.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                r = p.Ay.getMentionCount(t);
            r > 0 &&
                P(n, r) &&
                ((i.highImportanceMentionCount += r),
                (i.mentionCounts[n.id] = { count: r, isMentionLowImportance: !1 }));
        }
    } else {
        let e = m.Ay.isMuted(n);
        if (e && !1 === t) return !1;
        let c = m.Ay.getMutedChannels(n),
            _ = m.Ay.getChannelOverrides(n),
            E = (0, l.WW)(n),
            h = A.A.getMutableBasicGuildChannelsForGuild(n);
        for (let t in h) {
            var r, a, s;
            let n = h[t],
                l = e || c.has(t) || (null != n.parent_id && c.has(n.parent_id)),
                o = i.unreadByType[C.P.CHANNEL],
                {
                    mentionCount: d,
                    unread: A,
                    isMentionLowImportance: I,
                } = p.Ay.getGuildChannelUnreadState(n, E, _, l, o),
                T = d > 0;
            if (!T && l) continue;
            let g = !o && (!l || T) && A;
            (g || T) &&
                ((r = n),
                (a = d),
                (s = E),
                !(((0, u.ay)(r.type) && 0 === a) || !f.A.canBasicChannel((0, u.pd)(r.type), r) || M(r, a, s)) &&
                    !("flags" in r && r.hasFlag(N.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                    (a > 0 || m.Ay.resolveUnreadSetting(r) === C.e.ALL_MESSAGES)) &&
                (g && ((i.unreadByType[C.P.CHANNEL] = !0), (i.unreadChannelId = t)),
                T &&
                    (I ? (i.lowImportanceMentionCount += d) : (i.highImportanceMentionCount += d),
                    (i.mentionCounts[n.id] = { count: d, isMentionLowImportance: I })));
        }
        let I = o.A.getActiveJoinedThreadsForGuild(n);
        for (let t in I)
            for (let n in I[t]) {
                !i.unreadByType[C.P.CHANNEL] &&
                    p.Ay.hasUnread(n) &&
                    !d.A.isMuted(n) &&
                    !e &&
                    ((i.unreadByType[C.P.CHANNEL] = !0), (i.unreadChannelId = n));
                let t = p.Ay.getMentionCount(n),
                    r = p.Ay.getIsMentionLowImportance(n);
                t > 0 &&
                    (r ? (i.lowImportanceMentionCount += t) : (i.highImportanceMentionCount += t),
                    (i.mentionCounts[n] = { count: t, isMentionLowImportance: r }));
            }
        !i.unreadByType[C.P.GUILD_EVENT] && w(n, C.P.GUILD_EVENT) && (i.unreadByType[C.P.GUILD_EVENT] = !0);
    }
    x(i);
    let c = v(n);
    return (
        (i.unread !== c.unread ||
            i.highImportanceMentionCount !== c.highImportanceMentionCount ||
            i.lowImportanceMentionCount !== c.lowImportanceMentionCount) &&
        ((R[n ?? O] = i), null != n && (i.unread ? L.add(n) : L.delete(n)), y++, b(n ?? O), k(i, c), !0)
    );
}
function j(e) {
    let { guilds: t } = e;
    (R = {}), (y = 0), (L = new Set()), H(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && H(n.properties.id);
    }
}
function W(e) {
    let { guilds: t, readState: n } = e;
    (R = {}), (y = 0), (L = new Set());
    let i = n.entries.length < 500,
        r = new Set();
    for (let e of (i &&
        n.entries.forEach((e) => {
            null != e.mention_count &&
                e.mention_count > 0 &&
                (null == e.read_state_type || e.read_state_type === C.P.CHANNEL
                    ? r.add(A.A.getChannel(e.id)?.guild_id)
                    : r.add(e.id));
        }),
    H(null),
    t))
        H(e.id, i ? r.has(e.id) : void 0);
}
function Y() {
    for (let e of ((R = {}), (L = new Set()), H(null), Object.values(h.A.getGuildIds()))) H(e);
}
function K(e) {
    let { guild: t } = e;
    return H(t.id);
}
function $(e) {
    let { guild: t } = e;
    return null != R[t.id] && (delete R[t.id], L.delete(t.id), y++, !0);
}
function z(e) {
    let {
        channel: { id: t, guild_id: n },
    } = e;
    return V(n, [t]);
}
function q() {
    let e = A.A.getChannel(T.Ay.getChannelId());
    return null != e && V(e.getGuildId(), [e.id]);
}
function Z(e) {
    let { user: t, guildId: n } = e;
    return t.id === E.default.getId() && H(n);
}
function X(e) {
    let { channelId: t } = e,
        n = A.A.getChannel(t);
    return null != n && V(n.getGuildId(), [n.id]);
}
function Q(e) {
    let { channelId: t } = e,
        n = A.A.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = v(n.guild_id);
        if (
            ((n.isThread()
                ? !d.A.hasJoined(n.id) || d.A.isMuted(n.id)
                : m.Ay.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) ||
                e.unreadByType[C.P.CHANNEL]) &&
            0 === p.Ay.getMentionCount(t)
        )
            return !1;
    }
    return V(n.getGuildId(), [n.id]);
}
function J(e) {
    let { channelId: t, guildId: n } = e;
    return !(0, a.ai)(n) && null != t && V(n, [t]);
}
function ee(e) {
    let { channel: t } = e;
    return V(t.getGuildId(), [t.id]);
}
function et(e) {
    let { channels: t } = e;
    return r()(t)
        .groupBy((e) => e.getGuildId())
        .reduce(
            (e, t, n) =>
                V(
                    n,
                    t.map((e) => e.id),
                ) || e,
            !1,
        );
}
function en(e) {
    let { channels: t } = e;
    return r()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != A.A.getChannel(e))
        .groupBy((e) => A.A.getChannel(e)?.getGuildId())
        .reduce((e, t, n) => V(n, t) || e, !1);
}
function ei(e) {
    let { channel: t } = e;
    return V(t.getGuildId(), [t.id, t.parent_id]);
}
function er(e) {
    let { guildScheduledEvent: t } = e;
    return B(t.guild_id, C.P.GUILD_EVENT);
}
function ea(e) {
    let { guildScheduledEvent: t } = e;
    return B(t.guild_id, C.P.GUILD_EVENT);
}
function es(e) {
    let { id: t, ackType: n } = e;
    return B(t, n);
}
function el(e) {
    let { id: t, guildId: n } = e;
    return V(n, [t]);
}
function eo(e) {
    return (0, c.k)(e) && V(e.guildId, [e.id]);
}
function ed(e) {
    let { threads: t, guildId: n } = e;
    return V(
        n,
        t.filter((e) => d.A.hasJoined(e.id)).map((e) => e.id),
    );
}
function ec(e) {
    return (
        e.channels.length > 0 &&
        V(
            e.guildId,
            e.channels.map((e) => e.id),
        )
    );
}
function eu(e) {
    let { guildId: t } = e;
    return H(t);
}
function e_(e) {
    let { guildId: t } = e;
    return H(t);
}
function eE(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id ?? O));
    return _.default.keys(R).reduce((e, t) => (n.has(t) && H(t)) || e, !1);
}
function eA() {
    for (let e in R) R[e].ncMentionCount = 0;
}
function eh(e) {
    let { guildId: t } = e;
    return H(t);
}
function eI(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = A.A.getChannel(e);
        null != t && V(t.getGuildId(), [e]);
    });
}
class ef extends I.A {
    static displayName = "GuildReadStateStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: W,
            OVERLAY_INITIALIZE: j,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: K,
            GUILD_DELETE: $,
            MESSAGE_CREATE: Q,
            MESSAGE_ACK: X,
            BULK_ACK: en,
            UPDATE_CHANNEL_DIMENSIONS: X,
            CHANNEL_SELECT: J,
            CHANNEL_DELETE: z,
            WINDOW_FOCUS: q,
            GUILD_ACK: eu,
            GUILD_ROLE_CREATE: e_,
            GUILD_ROLE_DELETE: e_,
            GUILD_ROLE_UPDATE: e_,
            CHANNEL_CREATE: ee,
            CHANNEL_UPDATES: et,
            THREAD_CREATE: ei,
            THREAD_UPDATE: ei,
            THREAD_DELETE: ei,
            THREAD_LIST_SYNC: ed,
            THREAD_MEMBER_UPDATE: el,
            THREAD_MEMBERS_UPDATE: eo,
            PASSIVE_UPDATE_V2: ec,
            GUILD_MEMBER_UPDATE: Z,
            USER_GUILD_SETTINGS_FULL_UPDATE: eE,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: eh,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eh,
            USER_GUILD_SETTINGS_GUILD_UPDATE: eh,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eh,
            GUILD_FEATURE_ACK: es,
            GUILD_SCHEDULED_EVENT_CREATE: er,
            GUILD_SCHEDULED_EVENT_UPDATE: er,
            GUILD_SCHEDULED_EVENT_DELETE: ea,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: X,
            LOAD_MESSAGES_SUCCESS: X,
            CHANNEL_ACK: X,
            CHANNEL_LOCAL_ACK: X,
            NOTIFICATION_SETTINGS_UPDATE: Y,
            RECOMPUTE_READ_STATES: Y,
            VOICE_CHANNEL_SELECT: X,
            ENABLE_AUTOMATIC_ACK: X,
            RESORT_THREADS: X,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eA,
            TRY_ACK: X,
            LOAD_RECENT_MENTIONS_SUCCESS: eI,
        });
    }
    initialize() {
        this.waitFor(A.A, T.Ay, p.Ay, f.A, E.default, g.default, m.Ay, o.A, d.A, s.Ay);
    }
    loadCache() {
        let e = this.readSnapshot(ef.LATEST_SNAPSHOT_VERSION);
        null != e && ((R = e.guilds), (L = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return { version: ef.LATEST_SNAPSHOT_VERSION, data: { guilds: R, unreadGuilds: Array.from(L) } };
    }
    hasAnyUnread() {
        return L.size > 0;
    }
    getStoreChangeSentinel() {
        return y;
    }
    getMutableUnreadGuilds() {
        return L;
    }
    getMutableGuildStates() {
        return R;
    }
    shouldCountChannelUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return P(e, t, !0);
    }
    hasUnread(e) {
        return L.has(e);
    }
    getMentionCount(e) {
        let t = v(e);
        return t.highImportanceMentionCount + t.lowImportanceMentionCount;
    }
    getIsMentionLowImportance(e) {
        return 0 === v(e).highImportanceMentionCount;
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = A.A.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (
                null != n &&
                (!n.isGuildVocal() || 0 !== p.Ay.getMentionCount(e)) &&
                f.A.can(n.accessPermissions, n) &&
                p.Ay.hasUnreadOrMentions(e)
            )
                return !0;
        }
        let n = o.A.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != A.A.getChannel(e)) {
                for (let t in n[e]) if (p.Ay.hasUnreadOrMentions(t)) return !0;
            }
        return !!p.Ay.hasUnreadOrMentions(e, C.P.GUILD_EVENT);
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in R) {
            let i = R[n];
            (!0 !== e || n !== O) && (t += i.highImportanceMentionCount);
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in R) {
            let i = R[n];
            (!0 !== e || n !== O) && (t += i.ncMentionCount);
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        let e = R[O];
        return e?.highImportanceMentionCount ?? 0;
    }
    getMentionCountForPrivateChannel(e) {
        return R[O]?.mentionCounts[e] ?? 0;
    }
    getHighImportanceMentionCountForChannel(e, t) {
        let n = R[e ?? O]?.mentionCounts[t];
        return null == n || n.isMentionLowImportance ? 0 : n.count;
    }
    getGuildChangeSentinel(e) {
        return v(e).sentinel;
    }
}
let ep = new ef();
