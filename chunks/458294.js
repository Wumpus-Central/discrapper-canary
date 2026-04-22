"use strict";
n.r(t), n.d(t, { default: () => em }), n(938796);
var r = n(735438),
    i = n.n(r);
n(252431);
var s = n(395504),
    a = n(187508),
    o = n(863005),
    l = n(152007),
    u = n(882733),
    d = n(95701),
    c = n(661191),
    _ = n(961350),
    f = n(734057),
    E = n(71393),
    h = n(536802),
    p = n(576705),
    m = n(222823),
    g = n(309010),
    A = n(543465),
    I = n(287809),
    T = n(652215),
    S = n(746080),
    y = n(790782);
let N = T.eGj,
    O = {},
    R = new Set(),
    v = 0;
function C(e) {
    let t = O[e ?? N];
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
    return (O[e ?? N] = O[e ?? N] ?? C(e));
}
function D(e) {
    let t = b(e);
    t.sentinel++, v++;
}
function L(e, t, n) {
    return null != e.guild_id && n && !((0, d.fT)(e.type) || A.Ay.isChannelRecordOrParentOptedIn(e)) && 0 === t;
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
            (!e.isPrivate() && (L(e, t, (0, s.WW)(e.guild_id)) || !p.A.can(e.accessPermissions, e)))
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
function U(e, t) {
    let n = C(e);
    return (n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n;
}
function k(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function x(e, t) {}
function G(e, t, n) {
    return (
        k(t),
        (t.lowImportanceMentionCount = 0),
        (t.highImportanceMentionCount = 0),
        c.default.forEach(t.mentionCounts, (e) => {
            let { count: n, isMentionLowImportance: r } = e;
            r ? (t.lowImportanceMentionCount += n) : (t.highImportanceMentionCount += n);
        }),
        (t.unread !== n.unread ||
            t.lowImportanceMentionCount !== n.lowImportanceMentionCount ||
            t.highImportanceMentionCount !== n.highImportanceMentionCount) &&
            ((O[e ?? N] = t), null != e && (t.unread ? R.add(e) : R.delete(e)), v++, D(e ?? N), x(t, n), !0)
    );
}
function V(e, t) {
    let n = M(e),
        r = b(n),
        i = U(n, r),
        s = !1;
    if (
        (t.forEach((e) => {
            let t = f.A.getChannel(e);
            if (null == t) return void delete i.mentionCounts[e];
            if (t.getGuildId() !== n) return;
            let r = m.Ay.getMentionCount(e);
            null !== n && !s && m.Ay.hasUnread(t.id) && w(t, r, !0) && ((s = !0), (i.unreadChannelId = t.id)),
                r > 0 && w(t, r)
                    ? (i.mentionCounts[t.id] = { count: r, isMentionLowImportance: m.Ay.getIsMentionLowImportance(e) })
                    : delete i.mentionCounts[t.id];
        }),
        (i.unreadByType[y.P.CHANNEL] = s),
        i.unreadByType[y.P.CHANNEL] !== r.unreadByType[y.P.CHANNEL] && !i.unreadByType[y.P.CHANNEL])
    ) {
        let e = f.A.getChannel(r.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && m.Ay.hasUnread(e.id) && w(e))) return B(n);
        null != n && R.add(n), (i.unreadByType[y.P.CHANNEL] = !0);
    }
    return G(n, i, r);
}
function F(e, t) {
    if (null == e) return;
    let n = b(e),
        r = U(e, n);
    return (r.unreadByType[y.P.GUILD_EVENT] = P(e, t)), G(e, r, n);
}
function B(e, t) {
    let n = M(e),
        r = C(n);
    if (null == n) {
        let e = f.A.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                i = m.Ay.getMentionCount(t);
            i > 0 &&
                w(n, i) &&
                ((r.highImportanceMentionCount += i),
                (r.mentionCounts[n.id] = { count: i, isMentionLowImportance: !1 }));
        }
    } else {
        let e = A.Ay.isMuted(n);
        if (e && !1 === t) return !1;
        let c = A.Ay.getMutedChannels(n),
            _ = A.Ay.getChannelOverrides(n),
            E = (0, s.WW)(n),
            h = f.A.getMutableBasicGuildChannelsForGuild(n);
        for (let t in h) {
            var i, a, u;
            let n = h[t],
                s = e || c.has(t) || (null != n.parent_id && c.has(n.parent_id)),
                o = r.unreadByType[y.P.CHANNEL],
                {
                    mentionCount: l,
                    unread: f,
                    isMentionLowImportance: g,
                } = m.Ay.getGuildChannelUnreadState(n, E, _, s, o),
                I = l > 0;
            if (!I && s) continue;
            let T = !o && (!s || I) && f;
            (T || I) &&
                ((i = n),
                (a = l),
                (u = E),
                !(((0, d.ay)(i.type) && 0 === a) || !p.A.canBasicChannel((0, d.pd)(i.type), i) || L(i, a, u)) &&
                    !("flags" in i && i.hasFlag(S.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                    (a > 0 || A.Ay.resolveUnreadSetting(i) === y.e.ALL_MESSAGES)) &&
                (T && ((r.unreadByType[y.P.CHANNEL] = !0), (r.unreadChannelId = t)),
                I &&
                    (g ? (r.lowImportanceMentionCount += l) : (r.highImportanceMentionCount += l),
                    (r.mentionCounts[n.id] = { count: l, isMentionLowImportance: g })));
        }
        let g = o.A.getActiveJoinedThreadsForGuild(n);
        for (let t in g)
            for (let n in g[t]) {
                !r.unreadByType[y.P.CHANNEL] &&
                    m.Ay.hasUnread(n) &&
                    !l.A.isMuted(n) &&
                    !e &&
                    ((r.unreadByType[y.P.CHANNEL] = !0), (r.unreadChannelId = n));
                let t = m.Ay.getMentionCount(n),
                    i = m.Ay.getIsMentionLowImportance(n);
                t > 0 &&
                    (i ? (r.lowImportanceMentionCount += t) : (r.highImportanceMentionCount += t),
                    (r.mentionCounts[n] = { count: t, isMentionLowImportance: i }));
            }
        !r.unreadByType[y.P.GUILD_EVENT] && P(n, y.P.GUILD_EVENT) && (r.unreadByType[y.P.GUILD_EVENT] = !0);
    }
    k(r);
    let c = b(n);
    return (
        (r.unread !== c.unread ||
            r.highImportanceMentionCount !== c.highImportanceMentionCount ||
            r.lowImportanceMentionCount !== c.lowImportanceMentionCount) &&
        ((O[n ?? N] = r), null != n && (r.unread ? R.add(n) : R.delete(n)), v++, D(n ?? N), x(r, c), !0)
    );
}
function H(e) {
    let { guilds: t } = e;
    (O = {}), (v = 0), (R = new Set()), B(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && B(n.properties.id);
    }
}
function Y(e) {
    let { guilds: t, readState: n } = e;
    (O = {}), (v = 0), (R = new Set());
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
    B(null),
    t))
        B(e.id, r ? i.has(e.id) : void 0);
}
function W() {
    for (let e of ((O = {}), (R = new Set()), B(null), Object.values(E.A.getGuildIds()))) B(e);
}
function j(e) {
    let { guild: t } = e;
    return B(t.id);
}
function K(e) {
    let { guild: t } = e;
    return null != O[t.id] && (delete O[t.id], R.delete(t.id), v++, !0);
}
function $(e) {
    let {
        channel: { id: t, guild_id: n },
    } = e;
    return V(n, [t]);
}
function z() {
    let e = f.A.getChannel(g.A.getChannelId());
    return null != e && V(e.getGuildId(), [e.id]);
}
function q(e) {
    let { user: t, guildId: n } = e;
    return t.id === _.default.getId() && B(n);
}
function X(e) {
    let { channelId: t } = e,
        n = f.A.getChannel(t);
    return null != n && V(n.getGuildId(), [n.id]);
}
function Q(e) {
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
            0 === m.Ay.getMentionCount(t)
        )
            return !1;
    }
    return V(n.getGuildId(), [n.id]);
}
function J(e) {
    let { channelId: t, guildId: n } = e;
    return n !== T.YYv && null != t && V(n, [t]);
}
function Z(e) {
    let { channel: t } = e;
    return V(t.getGuildId(), [t.id]);
}
function ee(e) {
    let { channels: t } = e;
    return i()(t)
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
function et(e) {
    let { channels: t } = e;
    return i()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != f.A.getChannel(e))
        .groupBy((e) => f.A.getChannel(e)?.getGuildId())
        .reduce((e, t, n) => V(n, t) || e, !1);
}
function en(e) {
    let { channel: t } = e;
    return V(t.getGuildId(), [t.id, t.parent_id]);
}
function er(e) {
    let { guildScheduledEvent: t } = e;
    return F(t.guild_id, y.P.GUILD_EVENT);
}
function ei(e) {
    let { guildScheduledEvent: t } = e;
    return F(t.guild_id, y.P.GUILD_EVENT);
}
function es(e) {
    let { id: t, ackType: n } = e;
    return F(t, n);
}
function ea(e) {
    let { id: t, guildId: n } = e;
    return V(n, [t]);
}
function eo(e) {
    return (0, u.k)(e) && V(e.guildId, [e.id]);
}
function el(e) {
    let { threads: t, guildId: n } = e;
    return V(
        n,
        t.filter((e) => l.A.hasJoined(e.id)).map((e) => e.id),
    );
}
function eu(e) {
    return (
        e.channels.length > 0 &&
        V(
            e.guildId,
            e.channels.map((e) => e.id),
        )
    );
}
function ed(e) {
    let { guildId: t } = e;
    return B(t);
}
function ec(e) {
    let { guildId: t } = e;
    return B(t);
}
function e_(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id ?? N));
    return c.default.keys(O).reduce((e, t) => (n.has(t) && B(t)) || e, !1);
}
function ef() {
    for (let e in O) O[e].ncMentionCount = 0;
}
function eE(e) {
    let { guildId: t } = e;
    return B(t);
}
function eh(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = f.A.getChannel(e);
        null != t && V(t.getGuildId(), [e]);
    });
}
class ep extends h.A {
    static displayName = "GuildReadStateStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: Y,
            OVERLAY_INITIALIZE: H,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: j,
            GUILD_DELETE: K,
            MESSAGE_CREATE: Q,
            MESSAGE_ACK: X,
            BULK_ACK: et,
            UPDATE_CHANNEL_DIMENSIONS: X,
            CHANNEL_SELECT: J,
            CHANNEL_DELETE: $,
            WINDOW_FOCUS: z,
            GUILD_ACK: ed,
            GUILD_ROLE_CREATE: ec,
            GUILD_ROLE_DELETE: ec,
            GUILD_ROLE_UPDATE: ec,
            CHANNEL_CREATE: Z,
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
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: eE,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eE,
            USER_GUILD_SETTINGS_GUILD_UPDATE: eE,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eE,
            GUILD_FEATURE_ACK: es,
            GUILD_SCHEDULED_EVENT_CREATE: er,
            GUILD_SCHEDULED_EVENT_UPDATE: er,
            GUILD_SCHEDULED_EVENT_DELETE: ei,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: X,
            LOAD_MESSAGES_SUCCESS: X,
            CHANNEL_ACK: X,
            CHANNEL_LOCAL_ACK: X,
            NOTIFICATION_SETTINGS_UPDATE: W,
            RECOMPUTE_READ_STATES: W,
            VOICE_CHANNEL_SELECT: X,
            ENABLE_AUTOMATIC_ACK: X,
            RESORT_THREADS: X,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: ef,
            TRY_ACK: X,
            LOAD_RECENT_MENTIONS_SUCCESS: eh,
        });
    }
    initialize() {
        this.waitFor(f.A, g.A, m.Ay, p.A, _.default, I.default, A.Ay, o.A, l.A, a.Ay);
    }
    loadCache() {
        let e = this.readSnapshot(ep.LATEST_SNAPSHOT_VERSION);
        null != e && ((O = e.guilds), (R = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return { version: ep.LATEST_SNAPSHOT_VERSION, data: { guilds: O, unreadGuilds: Array.from(R) } };
    }
    hasAnyUnread() {
        return R.size > 0;
    }
    getStoreChangeSentinel() {
        return v;
    }
    getMutableUnreadGuilds() {
        return R;
    }
    getMutableGuildStates() {
        return O;
    }
    shouldCountChannelUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return w(e, t, !0);
    }
    hasUnread(e) {
        return R.has(e);
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
                (!n.isGuildVocal() || 0 !== m.Ay.getMentionCount(e)) &&
                p.A.can(n.accessPermissions, n) &&
                m.Ay.hasUnreadOrMentions(e)
            )
                return !0;
        }
        let n = o.A.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != f.A.getChannel(e)) {
                for (let t in n[e]) if (m.Ay.hasUnreadOrMentions(t)) return !0;
            }
        return !!m.Ay.hasUnreadOrMentions(e, y.P.GUILD_EVENT);
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in O) {
            let r = O[n];
            (!0 !== e || n !== N) && (t += r.highImportanceMentionCount);
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in O) {
            let r = O[n];
            (!0 !== e || n !== N) && (t += r.ncMentionCount);
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        let e = O[N];
        return e?.highImportanceMentionCount ?? 0;
    }
    getMentionCountForPrivateChannel(e) {
        return O[N]?.mentionCounts[e] ?? 0;
    }
    getGuildChangeSentinel(e) {
        return b(e).sentinel;
    }
}
let em = new ep();
