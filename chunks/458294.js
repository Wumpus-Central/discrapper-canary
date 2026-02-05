"use strict";
n.r(t), n.d(t, { default: () => eA }), n(938796);
var r = n(735438),
    i = n.n(r);
n(252431);
var a = n(395504),
    s = n(187508),
    o = n(863005),
    l = n(152007),
    u = n(882733),
    c = n(95701),
    d = n(661191),
    _ = n(961350),
    f = n(734057),
    p = n(71393),
    h = n(536802),
    m = n(576705),
    g = n(222823),
    E = n(309010),
    A = n(543465),
    I = n(287809),
    T = n(652215),
    y = n(746080),
    S = n(790782);
let v = T.eGj,
    C = {},
    b = new Set(),
    N = 0;
function R(e) {
    let t = C[e ?? v];
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
function O(e) {
    return (C[e ?? v] = C[e ?? v] ?? R(e));
}
function D(e) {
    let t = O(e);
    t.sentinel++, N++;
}
function L(e, t, n) {
    return null != e.guild_id && n && !((0, c.fT)(e.type) || A.Ay.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        !(
            null == e ||
            (e.isGuildVocal() && 0 === t) ||
            e.hasFlag(y.lx.IS_GUILD_RESOURCE_CHANNEL) ||
            ((0 === t || n) &&
                (e.isThread()
                    ? l.A.isMuted(e.id) || A.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id)
                    : A.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) ||
            (!e.isPrivate() && (L(e, t, (0, a.WW)(e.guild_id)) || !m.A.can(e.accessPermissions, e)))
        ) &&
        (t > 0 || A.Ay.resolveUnreadSetting(e) === S.e.ALL_MESSAGES)
    );
}
function x(e) {
    return "flags" in e;
}
function P(e, t, n) {
    return (
        !(
            ((0, c.ay)(e.type) && 0 === t) ||
            !m.A.canBasicChannel((0, c.pd)(e.type), e) ||
            L(e, t, n) ||
            (x(e) && e.hasFlag(y.lx.IS_GUILD_RESOURCE_CHANNEL))
        ) &&
        (t > 0 || A.Ay.resolveUnreadSetting(e) === S.e.ALL_MESSAGES)
    );
}
function M(e) {
    switch (e) {
        case v:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function k(e, t) {
    let n = g.Ay.hasUnread(e, t);
    return t !== S.P.GUILD_EVENT ? n : !(A.Ay.isMuted(e) || A.Ay.isMuteScheduledEventsEnabled(e)) && n;
}
function U(e, t) {
    let n = R(e);
    return (n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n;
}
function G(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function V(e, t) {}
function F(e, t, n) {
    return (
        G(t),
        (t.lowImportanceMentionCount = 0),
        (t.highImportanceMentionCount = 0),
        d.default.forEach(t.mentionCounts, (e) => {
            let { count: n, isMentionLowImportance: r } = e;
            r ? (t.lowImportanceMentionCount += n) : (t.highImportanceMentionCount += n);
        }),
        (t.unread !== n.unread ||
            t.lowImportanceMentionCount !== n.lowImportanceMentionCount ||
            t.highImportanceMentionCount !== n.highImportanceMentionCount) &&
            ((C[e ?? v] = t), null != e && (t.unread ? b.add(e) : b.delete(e)), N++, D(e ?? v), V(t, n), !0)
    );
}
function B(e, t) {
    let n = M(e),
        r = O(n),
        i = U(n, r),
        a = !1;
    if (
        (t.forEach((e) => {
            let t = f.A.getChannel(e);
            if (null == t) return void delete i.mentionCounts[e];
            if (t.getGuildId() !== n) return;
            let r = g.Ay.getMentionCount(e);
            null !== n && !a && g.Ay.hasUnread(t.id) && w(t, r, !0) && ((a = !0), (i.unreadChannelId = t.id)),
                r > 0 && w(t, r)
                    ? (i.mentionCounts[t.id] = { count: r, isMentionLowImportance: g.Ay.getIsMentionLowImportance(e) })
                    : delete i.mentionCounts[t.id];
        }),
        (i.unreadByType[S.P.CHANNEL] = a),
        i.unreadByType[S.P.CHANNEL] !== r.unreadByType[S.P.CHANNEL] && !i.unreadByType[S.P.CHANNEL])
    ) {
        let e = f.A.getChannel(r.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && g.Ay.hasUnread(e.id) && w(e))) return H(n);
        null != n && b.add(n), (i.unreadByType[S.P.CHANNEL] = !0);
    }
    return F(n, i, r);
}
function j(e, t) {
    if (null == e) return;
    let n = O(e),
        r = U(e, n);
    return (r.unreadByType[S.P.GUILD_EVENT] = k(e, t)), F(e, r, n);
}
function H(e, t) {
    let n = M(e),
        r = R(n);
    if (null == n) {
        let e = f.A.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                i = g.Ay.getMentionCount(t);
            i > 0 &&
                w(n, i) &&
                ((r.highImportanceMentionCount += i),
                (r.mentionCounts[n.id] = { count: i, isMentionLowImportance: !1 }));
        }
    } else {
        let e = A.Ay.isMuted(n);
        if (e && !1 === t) return !1;
        let i = A.Ay.getMutedChannels(n),
            s = A.Ay.getChannelOverrides(n),
            u = (0, a.WW)(n),
            c = f.A.getMutableBasicGuildChannelsForGuild(n);
        for (let t in c) {
            let n = c[t],
                a = e || i.has(t) || (null != n.parent_id && i.has(n.parent_id)),
                o = r.unreadByType[S.P.CHANNEL],
                {
                    mentionCount: l,
                    unread: d,
                    isMentionLowImportance: _,
                } = g.Ay.getGuildChannelUnreadState(n, u, s, a, o),
                f = l > 0;
            if (!f && a) continue;
            let p = !o && (!a || f) && d;
            (p || f) &&
                P(n, l, u) &&
                (p && ((r.unreadByType[S.P.CHANNEL] = !0), (r.unreadChannelId = t)),
                f &&
                    (_ ? (r.lowImportanceMentionCount += l) : (r.highImportanceMentionCount += l),
                    (r.mentionCounts[n.id] = { count: l, isMentionLowImportance: _ })));
        }
        let d = o.A.getActiveJoinedThreadsForGuild(n);
        for (let t in d)
            for (let n in d[t]) {
                !r.unreadByType[S.P.CHANNEL] &&
                    g.Ay.hasUnread(n) &&
                    !l.A.isMuted(n) &&
                    !e &&
                    ((r.unreadByType[S.P.CHANNEL] = !0), (r.unreadChannelId = n));
                let t = g.Ay.getMentionCount(n),
                    i = g.Ay.getIsMentionLowImportance(n);
                t > 0 &&
                    (i ? (r.lowImportanceMentionCount += t) : (r.highImportanceMentionCount += t),
                    (r.mentionCounts[n] = { count: t, isMentionLowImportance: i }));
            }
        !r.unreadByType[S.P.GUILD_EVENT] && k(n, S.P.GUILD_EVENT) && (r.unreadByType[S.P.GUILD_EVENT] = !0);
    }
    G(r);
    let i = O(n);
    return (
        (r.unread !== i.unread ||
            r.highImportanceMentionCount !== i.highImportanceMentionCount ||
            r.lowImportanceMentionCount !== i.lowImportanceMentionCount) &&
        ((C[n ?? v] = r), null != n && (r.unread ? b.add(n) : b.delete(n)), N++, D(n ?? v), V(r, i), !0)
    );
}
function Y(e) {
    let { guilds: t } = e;
    (C = {}), (N = 0), (b = new Set()), H(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && H(n.properties.id);
    }
}
function W(e) {
    let { guilds: t, readState: n } = e;
    (C = {}), (N = 0), (b = new Set());
    let r = n.entries.length < 500,
        i = new Set();
    for (let e of (r &&
        n.entries.forEach((e) => {
            null != e.mention_count &&
                e.mention_count > 0 &&
                (null == e.read_state_type || e.read_state_type === S.P.CHANNEL
                    ? i.add(f.A.getChannel(e.id)?.guild_id)
                    : i.add(e.id));
        }),
    H(null),
    t))
        H(e.id, r ? i.has(e.id) : void 0);
}
function K() {
    for (let e of ((C = {}), (b = new Set()), H(null), Object.values(p.A.getGuildIds()))) H(e);
}
function z(e) {
    let { guild: t } = e;
    return H(t.id);
}
function $(e) {
    let { guild: t } = e;
    return null != C[t.id] && (delete C[t.id], b.delete(t.id), N++, !0);
}
function q(e) {
    let {
        channel: { id: t, guild_id: n },
    } = e;
    return B(n, [t]);
}
function Z() {
    let e = f.A.getChannel(E.A.getChannelId());
    return null != e && B(e.getGuildId(), [e.id]);
}
function Q(e) {
    let { user: t, guildId: n } = e;
    return t.id === _.default.getId() && H(n);
}
function X(e) {
    let { channelId: t } = e,
        n = f.A.getChannel(t);
    return null != n && B(n.getGuildId(), [n.id]);
}
function J(e) {
    let { channelId: t } = e,
        n = f.A.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = O(n.guild_id);
        if (
            ((n.isThread()
                ? !l.A.hasJoined(n.id) || l.A.isMuted(n.id)
                : A.Ay.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) ||
                e.unreadByType[S.P.CHANNEL]) &&
            0 === g.Ay.getMentionCount(t)
        )
            return !1;
    }
    return B(n.getGuildId(), [n.id]);
}
function ee(e) {
    let { channelId: t, guildId: n } = e;
    return n !== T.YYv && null != t && B(n, [t]);
}
function et(e) {
    let { channel: t } = e;
    return B(t.getGuildId(), [t.id]);
}
function en(e) {
    let { channels: t } = e;
    return i()(t)
        .groupBy((e) => e.getGuildId())
        .reduce(
            (e, t, n) =>
                B(
                    n,
                    t.map((e) => e.id),
                ) || e,
            !1,
        );
}
function er(e) {
    let { channels: t } = e;
    return i()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != f.A.getChannel(e))
        .groupBy((e) => f.A.getChannel(e)?.getGuildId())
        .reduce((e, t, n) => B(n, t) || e, !1);
}
function ei(e) {
    let { channel: t } = e;
    return B(t.getGuildId(), [t.id, t.parent_id]);
}
function ea(e) {
    let { guildScheduledEvent: t } = e;
    return j(t.guild_id, S.P.GUILD_EVENT);
}
function es(e) {
    let { guildScheduledEvent: t } = e;
    return j(t.guild_id, S.P.GUILD_EVENT);
}
function eo(e) {
    let { id: t, ackType: n } = e;
    return j(t, n);
}
function el(e) {
    let { id: t, guildId: n } = e;
    return B(n, [t]);
}
function eu(e) {
    return (0, u.k)(e) && B(e.guildId, [e.id]);
}
function ec(e) {
    let { threads: t, guildId: n } = e;
    return B(
        n,
        t.filter((e) => l.A.hasJoined(e.id)).map((e) => e.id),
    );
}
function ed(e) {
    return (
        e.channels.length > 0 &&
        B(
            e.guildId,
            e.channels.map((e) => e.id),
        )
    );
}
function e_(e) {
    let { guildId: t } = e;
    return H(t);
}
function ef(e) {
    let { guildId: t } = e;
    return H(t);
}
function ep(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id ?? v));
    return d.default.keys(C).reduce((e, t) => (n.has(t) && H(t)) || e, !1);
}
function eh() {
    for (let e in C) C[e].ncMentionCount = 0;
}
function em(e) {
    let { guildId: t } = e;
    return H(t);
}
function eg(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = f.A.getChannel(e);
        null != t && B(t.getGuildId(), [e]);
    });
}
class eE extends h.A {
    static displayName = "GuildReadStateStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: W,
            OVERLAY_INITIALIZE: Y,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: z,
            GUILD_DELETE: $,
            MESSAGE_CREATE: J,
            MESSAGE_ACK: X,
            BULK_ACK: er,
            UPDATE_CHANNEL_DIMENSIONS: X,
            CHANNEL_SELECT: ee,
            CHANNEL_DELETE: q,
            WINDOW_FOCUS: Z,
            GUILD_ACK: e_,
            GUILD_ROLE_CREATE: ef,
            GUILD_ROLE_DELETE: ef,
            GUILD_ROLE_UPDATE: ef,
            CHANNEL_CREATE: et,
            CHANNEL_UPDATES: en,
            THREAD_CREATE: ei,
            THREAD_UPDATE: ei,
            THREAD_DELETE: ei,
            THREAD_LIST_SYNC: ec,
            THREAD_MEMBER_UPDATE: el,
            THREAD_MEMBERS_UPDATE: eu,
            PASSIVE_UPDATE_V2: ed,
            GUILD_MEMBER_UPDATE: Q,
            USER_GUILD_SETTINGS_FULL_UPDATE: ep,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: em,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: em,
            USER_GUILD_SETTINGS_GUILD_UPDATE: em,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: em,
            GUILD_FEATURE_ACK: eo,
            GUILD_SCHEDULED_EVENT_CREATE: ea,
            GUILD_SCHEDULED_EVENT_UPDATE: ea,
            GUILD_SCHEDULED_EVENT_DELETE: es,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: X,
            LOAD_MESSAGES_SUCCESS: X,
            CHANNEL_ACK: X,
            CHANNEL_LOCAL_ACK: X,
            NOTIFICATION_SETTINGS_UPDATE: K,
            RECOMPUTE_READ_STATES: K,
            VOICE_CHANNEL_SELECT: X,
            ENABLE_AUTOMATIC_ACK: X,
            RESORT_THREADS: X,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eh,
            TRY_ACK: X,
            LOAD_RECENT_MENTIONS_SUCCESS: eg,
        });
    }
    initialize() {
        this.waitFor(f.A, E.A, g.Ay, m.A, _.default, I.default, A.Ay, o.A, l.A, s.Ay);
    }
    loadCache() {
        let e = this.readSnapshot(eE.LATEST_SNAPSHOT_VERSION);
        null != e && ((C = e.guilds), (b = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return { version: eE.LATEST_SNAPSHOT_VERSION, data: { guilds: C, unreadGuilds: Array.from(b) } };
    }
    hasAnyUnread() {
        return b.size > 0;
    }
    getStoreChangeSentinel() {
        return N;
    }
    getMutableUnreadGuilds() {
        return b;
    }
    getMutableGuildStates() {
        return C;
    }
    hasUnread(e) {
        return b.has(e);
    }
    getMentionCount(e) {
        let t = O(e);
        return t.highImportanceMentionCount + t.lowImportanceMentionCount;
    }
    getIsMentionLowImportance(e) {
        return 0 === O(e).highImportanceMentionCount;
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = f.A.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (
                null != n &&
                (!n.isGuildVocal() || 0 !== g.Ay.getMentionCount(e)) &&
                m.A.can(n.accessPermissions, n) &&
                g.Ay.hasUnreadOrMentions(e)
            )
                return !0;
        }
        let n = o.A.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != f.A.getChannel(e)) {
                for (let t in n[e]) if (g.Ay.hasUnreadOrMentions(t)) return !0;
            }
        return !!g.Ay.hasUnreadOrMentions(e, S.P.GUILD_EVENT);
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in C) {
            let r = C[n];
            (!0 !== e || n !== v) && (t += r.highImportanceMentionCount);
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in C) {
            let r = C[n];
            (!0 !== e || n !== v) && (t += r.ncMentionCount);
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        let e = C[v];
        return e?.highImportanceMentionCount ?? 0;
    }
    getMentionCountForPrivateChannel(e) {
        return C[v]?.mentionCounts[e] ?? 0;
    }
    getGuildChangeSentinel(e) {
        return O(e).sentinel;
    }
}
let eA = new eE();
