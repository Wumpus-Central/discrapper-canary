"use strict";
n.r(t), n.d(t, { default: () => eA }), n(938796);
var r = n(735438),
    i = n.n(r);
n(252431);
var s = n(395504),
    a = n(187508),
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
    E = n(222823),
    g = n(309010),
    A = n(543465),
    I = n(287809),
    T = n(652215),
    S = n(746080),
    y = n(790782);
let v = T.eGj,
    N = {},
    C = new Set(),
    R = 0;
function O(e) {
    let t = N[e ?? v];
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
    return (N[e ?? v] = N[e ?? v] ?? O(e));
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
            (!e.isPrivate() && (L(e, t, (0, s.WW)(e.guild_id)) || !m.A.can(e.accessPermissions, e)))
        ) &&
        (t > 0 || A.Ay.resolveUnreadSetting(e) === y.e.ALL_MESSAGES)
    );
}
function M(e) {
    return "flags" in e;
}
function x(e, t, n) {
    return (
        !(
            ((0, c.ay)(e.type) && 0 === t) ||
            !m.A.canBasicChannel((0, c.pd)(e.type), e) ||
            L(e, t, n) ||
            (M(e) && e.hasFlag(S.lx.IS_GUILD_RESOURCE_CHANNEL))
        ) &&
        (t > 0 || A.Ay.resolveUnreadSetting(e) === y.e.ALL_MESSAGES)
    );
}
function P(e) {
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
    let n = E.Ay.hasUnread(e, t);
    return t !== y.P.GUILD_EVENT ? n : !(A.Ay.isMuted(e) || A.Ay.isMuteScheduledEventsEnabled(e)) && n;
}
function U(e, t) {
    let n = O(e);
    return (n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n;
}
function G(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function F(e, t) {}
function V(e, t, n) {
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
            ((N[e ?? v] = t), null != e && (t.unread ? C.add(e) : C.delete(e)), R++, D(e ?? v), F(t, n), !0)
    );
}
function B(e, t) {
    let n = P(e),
        r = b(n),
        i = U(n, r),
        s = !1;
    if (
        (t.forEach((e) => {
            let t = f.A.getChannel(e);
            if (null == t) return void delete i.mentionCounts[e];
            if (t.getGuildId() !== n) return;
            let r = E.Ay.getMentionCount(e);
            null !== n && !s && E.Ay.hasUnread(t.id) && w(t, r, !0) && ((s = !0), (i.unreadChannelId = t.id)),
                r > 0 && w(t, r)
                    ? (i.mentionCounts[t.id] = { count: r, isMentionLowImportance: E.Ay.getIsMentionLowImportance(e) })
                    : delete i.mentionCounts[t.id];
        }),
        (i.unreadByType[y.P.CHANNEL] = s),
        i.unreadByType[y.P.CHANNEL] !== r.unreadByType[y.P.CHANNEL] && !i.unreadByType[y.P.CHANNEL])
    ) {
        let e = f.A.getChannel(r.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && E.Ay.hasUnread(e.id) && w(e))) return j(n);
        null != n && C.add(n), (i.unreadByType[y.P.CHANNEL] = !0);
    }
    return V(n, i, r);
}
function H(e, t) {
    if (null == e) return;
    let n = b(e),
        r = U(e, n);
    return (r.unreadByType[y.P.GUILD_EVENT] = k(e, t)), V(e, r, n);
}
function j(e, t) {
    let n = P(e),
        r = O(n);
    if (null == n) {
        let e = f.A.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                i = E.Ay.getMentionCount(t);
            i > 0 &&
                w(n, i) &&
                ((r.highImportanceMentionCount += i),
                (r.mentionCounts[n.id] = { count: i, isMentionLowImportance: !1 }));
        }
    } else {
        let e = A.Ay.isMuted(n);
        if (e && !1 === t) return !1;
        let i = A.Ay.getMutedChannels(n),
            a = A.Ay.getChannelOverrides(n),
            u = (0, s.WW)(n),
            c = f.A.getMutableBasicGuildChannelsForGuild(n);
        for (let t in c) {
            let n = c[t],
                s = e || i.has(t) || (null != n.parent_id && i.has(n.parent_id)),
                o = r.unreadByType[y.P.CHANNEL],
                {
                    mentionCount: l,
                    unread: d,
                    isMentionLowImportance: _,
                } = E.Ay.getGuildChannelUnreadState(n, u, a, s, o),
                f = l > 0;
            if (!f && s) continue;
            let p = !o && (!s || f) && d;
            (p || f) &&
                x(n, l, u) &&
                (p && ((r.unreadByType[y.P.CHANNEL] = !0), (r.unreadChannelId = t)),
                f &&
                    (_ ? (r.lowImportanceMentionCount += l) : (r.highImportanceMentionCount += l),
                    (r.mentionCounts[n.id] = { count: l, isMentionLowImportance: _ })));
        }
        let d = o.A.getActiveJoinedThreadsForGuild(n);
        for (let t in d)
            for (let n in d[t]) {
                !r.unreadByType[y.P.CHANNEL] &&
                    E.Ay.hasUnread(n) &&
                    !l.A.isMuted(n) &&
                    !e &&
                    ((r.unreadByType[y.P.CHANNEL] = !0), (r.unreadChannelId = n));
                let t = E.Ay.getMentionCount(n),
                    i = E.Ay.getIsMentionLowImportance(n);
                t > 0 &&
                    (i ? (r.lowImportanceMentionCount += t) : (r.highImportanceMentionCount += t),
                    (r.mentionCounts[n] = { count: t, isMentionLowImportance: i }));
            }
        !r.unreadByType[y.P.GUILD_EVENT] && k(n, y.P.GUILD_EVENT) && (r.unreadByType[y.P.GUILD_EVENT] = !0);
    }
    G(r);
    let i = b(n);
    return (
        (r.unread !== i.unread ||
            r.highImportanceMentionCount !== i.highImportanceMentionCount ||
            r.lowImportanceMentionCount !== i.lowImportanceMentionCount) &&
        ((N[n ?? v] = r), null != n && (r.unread ? C.add(n) : C.delete(n)), R++, D(n ?? v), F(r, i), !0)
    );
}
function Y(e) {
    let { guilds: t } = e;
    (N = {}), (R = 0), (C = new Set()), j(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && j(n.properties.id);
    }
}
function W(e) {
    let { guilds: t, readState: n } = e;
    (N = {}), (R = 0), (C = new Set());
    let r = n.entries.length < 500,
        i = new Set();
    for (let e of (r &&
        n.entries.forEach((e) => {
            null != e.mention_count &&
                e.mention_count > 0 &&
                (null == e.read_state_type || e.read_state_type === y.P.CHANNEL
                    ? i.add(f.A.getChannel(e.id)?.guild_id)
                    : i.add(e.id));
        }),
    j(null),
    t))
        j(e.id, r ? i.has(e.id) : void 0);
}
function K() {
    for (let e of ((N = {}), (C = new Set()), j(null), Object.values(p.A.getGuildIds()))) j(e);
}
function $(e) {
    let { guild: t } = e;
    return j(t.id);
}
function z(e) {
    let { guild: t } = e;
    return null != N[t.id] && (delete N[t.id], C.delete(t.id), R++, !0);
}
function q(e) {
    let {
        channel: { id: t, guild_id: n },
    } = e;
    return B(n, [t]);
}
function Z() {
    let e = f.A.getChannel(g.A.getChannelId());
    return null != e && B(e.getGuildId(), [e.id]);
}
function X(e) {
    let { user: t, guildId: n } = e;
    return t.id === _.default.getId() && j(n);
}
function Q(e) {
    let { channelId: t } = e,
        n = f.A.getChannel(t);
    return null != n && B(n.getGuildId(), [n.id]);
}
function J(e) {
    let { channelId: t } = e,
        n = f.A.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = b(n.guild_id);
        if (
            ((n.isThread()
                ? !l.A.hasJoined(n.id) || l.A.isMuted(n.id)
                : A.Ay.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) ||
                e.unreadByType[y.P.CHANNEL]) &&
            0 === E.Ay.getMentionCount(t)
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
function es(e) {
    let { guildScheduledEvent: t } = e;
    return H(t.guild_id, y.P.GUILD_EVENT);
}
function ea(e) {
    let { guildScheduledEvent: t } = e;
    return H(t.guild_id, y.P.GUILD_EVENT);
}
function eo(e) {
    let { id: t, ackType: n } = e;
    return H(t, n);
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
    return j(t);
}
function ef(e) {
    let { guildId: t } = e;
    return j(t);
}
function ep(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id ?? v));
    return d.default.keys(N).reduce((e, t) => (n.has(t) && j(t)) || e, !1);
}
function eh() {
    for (let e in N) N[e].ncMentionCount = 0;
}
function em(e) {
    let { guildId: t } = e;
    return j(t);
}
function eE(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = f.A.getChannel(e);
        null != t && B(t.getGuildId(), [e]);
    });
}
class eg extends h.A {
    static displayName = "GuildReadStateStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: W,
            OVERLAY_INITIALIZE: Y,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: $,
            GUILD_DELETE: z,
            MESSAGE_CREATE: J,
            MESSAGE_ACK: Q,
            BULK_ACK: er,
            UPDATE_CHANNEL_DIMENSIONS: Q,
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
            GUILD_MEMBER_UPDATE: X,
            USER_GUILD_SETTINGS_FULL_UPDATE: ep,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: em,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: em,
            USER_GUILD_SETTINGS_GUILD_UPDATE: em,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: em,
            GUILD_FEATURE_ACK: eo,
            GUILD_SCHEDULED_EVENT_CREATE: es,
            GUILD_SCHEDULED_EVENT_UPDATE: es,
            GUILD_SCHEDULED_EVENT_DELETE: ea,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: Q,
            LOAD_MESSAGES_SUCCESS: Q,
            CHANNEL_ACK: Q,
            CHANNEL_LOCAL_ACK: Q,
            NOTIFICATION_SETTINGS_UPDATE: K,
            RECOMPUTE_READ_STATES: K,
            VOICE_CHANNEL_SELECT: Q,
            ENABLE_AUTOMATIC_ACK: Q,
            RESORT_THREADS: Q,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eh,
            TRY_ACK: Q,
            LOAD_RECENT_MENTIONS_SUCCESS: eE,
        });
    }
    initialize() {
        this.waitFor(f.A, g.A, E.Ay, m.A, _.default, I.default, A.Ay, o.A, l.A, a.Ay);
    }
    loadCache() {
        let e = this.readSnapshot(eg.LATEST_SNAPSHOT_VERSION);
        null != e && ((N = e.guilds), (C = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return { version: eg.LATEST_SNAPSHOT_VERSION, data: { guilds: N, unreadGuilds: Array.from(C) } };
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
        return N;
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
        let t = f.A.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (
                null != n &&
                (!n.isGuildVocal() || 0 !== E.Ay.getMentionCount(e)) &&
                m.A.can(n.accessPermissions, n) &&
                E.Ay.hasUnreadOrMentions(e)
            )
                return !0;
        }
        let n = o.A.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != f.A.getChannel(e)) {
                for (let t in n[e]) if (E.Ay.hasUnreadOrMentions(t)) return !0;
            }
        return !!E.Ay.hasUnreadOrMentions(e, y.P.GUILD_EVENT);
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in N) {
            let r = N[n];
            (!0 !== e || n !== v) && (t += r.highImportanceMentionCount);
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in N) {
            let r = N[n];
            (!0 !== e || n !== v) && (t += r.ncMentionCount);
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        let e = N[v];
        return e?.highImportanceMentionCount ?? 0;
    }
    getMentionCountForPrivateChannel(e) {
        return N[v]?.mentionCounts[e] ?? 0;
    }
    getGuildChangeSentinel(e) {
        return b(e).sentinel;
    }
}
let eA = new eg();
