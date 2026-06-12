"use strict";
n.r(t), n.d(t, { default: () => em }), n(938796);
var i = n(735438),
    r = n.n(i);
n(252431);
var s = n(395504),
    a = n(135978),
    o = n(695633),
    l = n(152007),
    u = n(882733),
    c = n(95701),
    d = n(935208),
    _ = n(495544),
    h = n(734057),
    f = n(71393),
    p = n(536802),
    E = n(576705),
    m = n(222823),
    g = n(309010),
    A = n(543465),
    I = n(287809),
    T = n(652215),
    S = n(746080),
    y = n(790782);
let N = T.eGj,
    v = {},
    C = new Set(),
    R = 0;
function O(e) {
    let t = v[e ?? N];
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
function b(e) {
    return (v[e ?? N] = v[e ?? N] ?? O(e));
}
function D(e) {
    let t = b(e);
    t.sentinel++, R++;
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
            e.hasFlag(S.lx.IS_GUILD_RESOURCE_CHANNEL) ||
            ((0 === t || n) &&
                (e.isThread()
                    ? l.A.isMuted(e.id) || A.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id)
                    : A.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) ||
            (!e.isPrivate() && (L(e, t, (0, s.WW)(e.guild_id)) || !E.A.can(e.accessPermissions, e)))
        ) &&
        (t > 0 || A.Ay.resolveUnreadSetting(e) === y.e.ALL_MESSAGES)
    );
}
function M(e) {
    switch (e) {
        case N:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function P(e, t) {
    let n = m.Ay.hasUnread(e, t);
    return t !== y.P.GUILD_EVENT ? n : !(A.Ay.isMuted(e) || A.Ay.isMuteScheduledEventsEnabled(e)) && n;
}
function x(e, t) {
    let n = O(e);
    return (n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n;
}
function k(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function U(e, t) {}
function G(e, t, n) {
    return (
        k(t),
        (t.lowImportanceMentionCount = 0),
        (t.highImportanceMentionCount = 0),
        d.default.forEach(t.mentionCounts, (e) => {
            let { count: n, isMentionLowImportance: i } = e;
            i ? (t.lowImportanceMentionCount += n) : (t.highImportanceMentionCount += n);
        }),
        (t.unread !== n.unread ||
            t.lowImportanceMentionCount !== n.lowImportanceMentionCount ||
            t.highImportanceMentionCount !== n.highImportanceMentionCount) &&
            ((v[e ?? N] = t), null != e && (t.unread ? C.add(e) : C.delete(e)), R++, D(e ?? N), U(t, n), !0)
    );
}
function F(e, t) {
    let n = M(e),
        i = b(n),
        r = x(n, i),
        s = !1;
    if (
        (t.forEach((e) => {
            let t = h.A.getChannel(e);
            if (null == t) return void delete r.mentionCounts[e];
            if (t.getGuildId() !== n) return;
            let i = m.Ay.getMentionCount(e);
            null !== n && !s && m.Ay.hasUnread(t.id) && w(t, i, !0) && ((s = !0), (r.unreadChannelId = t.id)),
                i > 0 && w(t, i)
                    ? (r.mentionCounts[t.id] = { count: i, isMentionLowImportance: m.Ay.getIsMentionLowImportance(e) })
                    : delete r.mentionCounts[t.id];
        }),
        (r.unreadByType[y.P.CHANNEL] = s),
        r.unreadByType[y.P.CHANNEL] !== i.unreadByType[y.P.CHANNEL] && !r.unreadByType[y.P.CHANNEL])
    ) {
        let e = h.A.getChannel(i.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && m.Ay.hasUnread(e.id) && w(e))) return B(n);
        null != n && C.add(n), (r.unreadByType[y.P.CHANNEL] = !0);
    }
    return G(n, r, i);
}
function V(e, t) {
    if (null == e) return;
    let n = b(e),
        i = x(e, n);
    return (i.unreadByType[y.P.GUILD_EVENT] = P(e, t)), G(e, i, n);
}
function B(e, t) {
    let n = M(e),
        i = O(n);
    if (null == n) {
        let e = h.A.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                r = m.Ay.getMentionCount(t);
            r > 0 &&
                w(n, r) &&
                ((i.highImportanceMentionCount += r),
                (i.mentionCounts[n.id] = { count: r, isMentionLowImportance: !1 }));
        }
    } else {
        let e = A.Ay.isMuted(n);
        if (e && !1 === t) return !1;
        let d = A.Ay.getMutedChannels(n),
            _ = A.Ay.getChannelOverrides(n),
            f = (0, s.WW)(n),
            p = h.A.getMutableBasicGuildChannelsForGuild(n);
        for (let t in p) {
            var r, a, u;
            let n = p[t],
                s = e || d.has(t) || (null != n.parent_id && d.has(n.parent_id)),
                o = i.unreadByType[y.P.CHANNEL],
                {
                    mentionCount: l,
                    unread: h,
                    isMentionLowImportance: g,
                } = m.Ay.getGuildChannelUnreadState(n, f, _, s, o),
                I = l > 0;
            if (!I && s) continue;
            let T = !o && (!s || I) && h;
            (T || I) &&
                ((r = n),
                (a = l),
                (u = f),
                !(((0, c.ay)(r.type) && 0 === a) || !E.A.canBasicChannel((0, c.pd)(r.type), r) || L(r, a, u)) &&
                    !("flags" in r && r.hasFlag(S.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                    (a > 0 || A.Ay.resolveUnreadSetting(r) === y.e.ALL_MESSAGES)) &&
                (T && ((i.unreadByType[y.P.CHANNEL] = !0), (i.unreadChannelId = t)),
                I &&
                    (g ? (i.lowImportanceMentionCount += l) : (i.highImportanceMentionCount += l),
                    (i.mentionCounts[n.id] = { count: l, isMentionLowImportance: g })));
        }
        let g = o.A.getActiveJoinedThreadsForGuild(n);
        for (let t in g)
            for (let n in g[t]) {
                !i.unreadByType[y.P.CHANNEL] &&
                    m.Ay.hasUnread(n) &&
                    !l.A.isMuted(n) &&
                    !e &&
                    ((i.unreadByType[y.P.CHANNEL] = !0), (i.unreadChannelId = n));
                let t = m.Ay.getMentionCount(n),
                    r = m.Ay.getIsMentionLowImportance(n);
                t > 0 &&
                    (r ? (i.lowImportanceMentionCount += t) : (i.highImportanceMentionCount += t),
                    (i.mentionCounts[n] = { count: t, isMentionLowImportance: r }));
            }
        !i.unreadByType[y.P.GUILD_EVENT] && P(n, y.P.GUILD_EVENT) && (i.unreadByType[y.P.GUILD_EVENT] = !0);
    }
    k(i);
    let d = b(n);
    return (
        (i.unread !== d.unread ||
            i.highImportanceMentionCount !== d.highImportanceMentionCount ||
            i.lowImportanceMentionCount !== d.lowImportanceMentionCount) &&
        ((v[n ?? N] = i), null != n && (i.unread ? C.add(n) : C.delete(n)), R++, D(n ?? N), U(i, d), !0)
    );
}
function H(e) {
    let { guilds: t } = e;
    (v = {}), (R = 0), (C = new Set()), B(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && B(n.properties.id);
    }
}
function j(e) {
    let { guilds: t, readState: n } = e;
    (v = {}), (R = 0), (C = new Set());
    let i = n.entries.length < 500,
        r = new Set();
    for (let e of (i &&
        n.entries.forEach((e) => {
            null != e.mention_count &&
                e.mention_count > 0 &&
                (null == e.read_state_type || e.read_state_type === y.P.CHANNEL
                    ? r.add(h.A.getChannel(e.id)?.guild_id)
                    : r.add(e.id));
        }),
    B(null),
    t))
        B(e.id, i ? r.has(e.id) : void 0);
}
function Y() {
    for (let e of ((v = {}), (C = new Set()), B(null), Object.values(f.A.getGuildIds()))) B(e);
}
function W(e) {
    let { guild: t } = e;
    return B(t.id);
}
function K(e) {
    let { guild: t } = e;
    return null != v[t.id] && (delete v[t.id], C.delete(t.id), R++, !0);
}
function $(e) {
    let {
        channel: { id: t, guild_id: n },
    } = e;
    return F(n, [t]);
}
function z() {
    let e = h.A.getChannel(g.A.getChannelId());
    return null != e && F(e.getGuildId(), [e.id]);
}
function q(e) {
    let { user: t, guildId: n } = e;
    return t.id === _.default.getId() && B(n);
}
function X(e) {
    let { channelId: t } = e,
        n = h.A.getChannel(t);
    return null != n && F(n.getGuildId(), [n.id]);
}
function Z(e) {
    let { channelId: t } = e,
        n = h.A.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = b(n.guild_id);
        if (
            ((n.isThread()
                ? !l.A.hasJoined(n.id) || l.A.isMuted(n.id)
                : A.Ay.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) ||
                e.unreadByType[y.P.CHANNEL]) &&
            0 === m.Ay.getMentionCount(t)
        )
            return !1;
    }
    return F(n.getGuildId(), [n.id]);
}
function Q(e) {
    let { channelId: t, guildId: n } = e;
    return n !== T.YYv && null != t && F(n, [t]);
}
function J(e) {
    let { channel: t } = e;
    return F(t.getGuildId(), [t.id]);
}
function ee(e) {
    let { channels: t } = e;
    return r()(t)
        .groupBy((e) => e.getGuildId())
        .reduce(
            (e, t, n) =>
                F(
                    n,
                    t.map((e) => e.id),
                ) || e,
            !1,
        );
}
function et(e) {
    let { channels: t } = e;
    return r()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != h.A.getChannel(e))
        .groupBy((e) => h.A.getChannel(e)?.getGuildId())
        .reduce((e, t, n) => F(n, t) || e, !1);
}
function en(e) {
    let { channel: t } = e;
    return F(t.getGuildId(), [t.id, t.parent_id]);
}
function ei(e) {
    let { guildScheduledEvent: t } = e;
    return V(t.guild_id, y.P.GUILD_EVENT);
}
function er(e) {
    let { guildScheduledEvent: t } = e;
    return V(t.guild_id, y.P.GUILD_EVENT);
}
function es(e) {
    let { id: t, ackType: n } = e;
    return V(t, n);
}
function ea(e) {
    let { id: t, guildId: n } = e;
    return F(n, [t]);
}
function eo(e) {
    return (0, u.k)(e) && F(e.guildId, [e.id]);
}
function el(e) {
    let { threads: t, guildId: n } = e;
    return F(
        n,
        t.filter((e) => l.A.hasJoined(e.id)).map((e) => e.id),
    );
}
function eu(e) {
    return (
        e.channels.length > 0 &&
        F(
            e.guildId,
            e.channels.map((e) => e.id),
        )
    );
}
function ec(e) {
    let { guildId: t } = e;
    return B(t);
}
function ed(e) {
    let { guildId: t } = e;
    return B(t);
}
function e_(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id ?? N));
    return d.default.keys(v).reduce((e, t) => (n.has(t) && B(t)) || e, !1);
}
function eh() {
    for (let e in v) v[e].ncMentionCount = 0;
}
function ef(e) {
    let { guildId: t } = e;
    return B(t);
}
function ep(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = h.A.getChannel(e);
        null != t && F(t.getGuildId(), [e]);
    });
}
class eE extends p.A {
    static displayName = "GuildReadStateStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: j,
            OVERLAY_INITIALIZE: H,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: W,
            GUILD_DELETE: K,
            MESSAGE_CREATE: Z,
            MESSAGE_ACK: X,
            BULK_ACK: et,
            UPDATE_CHANNEL_DIMENSIONS: X,
            CHANNEL_SELECT: Q,
            CHANNEL_DELETE: $,
            WINDOW_FOCUS: z,
            GUILD_ACK: ec,
            GUILD_ROLE_CREATE: ed,
            GUILD_ROLE_DELETE: ed,
            GUILD_ROLE_UPDATE: ed,
            CHANNEL_CREATE: J,
            CHANNEL_UPDATES: ee,
            THREAD_CREATE: en,
            THREAD_UPDATE: en,
            THREAD_DELETE: en,
            THREAD_LIST_SYNC: el,
            THREAD_MEMBER_UPDATE: ea,
            THREAD_MEMBERS_UPDATE: eo,
            PASSIVE_UPDATE_V2: eu,
            GUILD_MEMBER_UPDATE: q,
            USER_GUILD_SETTINGS_FULL_UPDATE: e_,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: ef,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ef,
            USER_GUILD_SETTINGS_GUILD_UPDATE: ef,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ef,
            GUILD_FEATURE_ACK: es,
            GUILD_SCHEDULED_EVENT_CREATE: ei,
            GUILD_SCHEDULED_EVENT_UPDATE: ei,
            GUILD_SCHEDULED_EVENT_DELETE: er,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: X,
            LOAD_MESSAGES_SUCCESS: X,
            CHANNEL_ACK: X,
            CHANNEL_LOCAL_ACK: X,
            NOTIFICATION_SETTINGS_UPDATE: Y,
            RECOMPUTE_READ_STATES: Y,
            VOICE_CHANNEL_SELECT: X,
            ENABLE_AUTOMATIC_ACK: X,
            RESORT_THREADS: X,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eh,
            TRY_ACK: X,
            LOAD_RECENT_MENTIONS_SUCCESS: ep,
        });
    }
    initialize() {
        this.waitFor(h.A, g.A, m.Ay, E.A, _.default, I.default, A.Ay, o.A, l.A, a.Ay);
    }
    loadCache() {
        let e = this.readSnapshot(eE.LATEST_SNAPSHOT_VERSION);
        null != e && ((v = e.guilds), (C = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return { version: eE.LATEST_SNAPSHOT_VERSION, data: { guilds: v, unreadGuilds: Array.from(C) } };
    }
    hasAnyUnread() {
        return C.size > 0;
    }
    getStoreChangeSentinel() {
        return R;
    }
    getMutableUnreadGuilds() {
        return C;
    }
    getMutableGuildStates() {
        return v;
    }
    shouldCountChannelUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return w(e, t, !0);
    }
    hasUnread(e) {
        return C.has(e);
    }
    getMentionCount(e) {
        let t = b(e);
        return t.highImportanceMentionCount + t.lowImportanceMentionCount;
    }
    getIsMentionLowImportance(e) {
        return 0 === b(e).highImportanceMentionCount;
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = h.A.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (
                null != n &&
                (!n.isGuildVocal() || 0 !== m.Ay.getMentionCount(e)) &&
                E.A.can(n.accessPermissions, n) &&
                m.Ay.hasUnreadOrMentions(e)
            )
                return !0;
        }
        let n = o.A.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != h.A.getChannel(e)) {
                for (let t in n[e]) if (m.Ay.hasUnreadOrMentions(t)) return !0;
            }
        return !!m.Ay.hasUnreadOrMentions(e, y.P.GUILD_EVENT);
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in v) {
            let i = v[n];
            (!0 !== e || n !== N) && (t += i.highImportanceMentionCount);
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in v) {
            let i = v[n];
            (!0 !== e || n !== N) && (t += i.ncMentionCount);
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        let e = v[N];
        return e?.highImportanceMentionCount ?? 0;
    }
    getMentionCountForPrivateChannel(e) {
        return v[N]?.mentionCounts[e] ?? 0;
    }
    getGuildChangeSentinel(e) {
        return b(e).sentinel;
    }
}
let em = new eE();
