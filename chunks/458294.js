"use strict";
n.r(t), n.d(t, { default: () => eI }), n(938796);
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
    h = n(71393),
    p = n(536802),
    g = n(576705),
    E = n(222823),
    A = n(309010),
    I = n(543465),
    T = n(287809),
    y = n(652215),
    S = n(746080),
    v = n(790782);
let C = y.eGj,
    b = {},
    N = new Set(),
    R = 0;
function O(e) {
    let t = b[e ?? C];
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
function D(e) {
    return (b[e ?? C] = b[e ?? C] ?? O(e));
}
function L(e) {
    let t = D(e);
    t.sentinel++, R++;
}
function w(e, t, n) {
    return null != e.guild_id && n && !((0, c.fT)(e.type) || I.Ay.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        !(
            null == e ||
            (e.isGuildVocal() && 0 === t) ||
            e.hasFlag(S.lx.IS_GUILD_RESOURCE_CHANNEL) ||
            ((0 === t || n) &&
                (e.isThread()
                    ? l.A.isMuted(e.id) || I.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id)
                    : I.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) ||
            (!e.isPrivate() && (w(e, t, (0, a.WW)(e.guild_id)) || !g.A.can(e.accessPermissions, e)))
        ) &&
        (t > 0 || I.Ay.resolveUnreadSetting(e) === v.e.ALL_MESSAGES)
    );
}
function P(e) {
    return "flags" in e;
}
function M(e, t, n) {
    return (
        !(
            ((0, c.ay)(e.type) && 0 === t) ||
            !g.A.canBasicChannel((0, c.pd)(e.type), e) ||
            w(e, t, n) ||
            (P(e) && e.hasFlag(S.lx.IS_GUILD_RESOURCE_CHANNEL))
        ) &&
        (t > 0 || I.Ay.resolveUnreadSetting(e) === v.e.ALL_MESSAGES)
    );
}
function k(e) {
    switch (e) {
        case C:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function U(e, t) {
    let n = E.Ay.hasUnread(e, t);
    return t !== v.P.GUILD_EVENT ? n : !(I.Ay.isMuted(e) || I.Ay.isMuteScheduledEventsEnabled(e)) && n;
}
function G(e, t) {
    let n = O(e);
    return (n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n;
}
function F(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function V(e, t) {}
function B(e, t, n) {
    return (
        F(t),
        (t.lowImportanceMentionCount = 0),
        (t.highImportanceMentionCount = 0),
        d.default.forEach(t.mentionCounts, (e) => {
            let { count: n, isMentionLowImportance: r } = e;
            r ? (t.lowImportanceMentionCount += n) : (t.highImportanceMentionCount += n);
        }),
        (t.unread !== n.unread ||
            t.lowImportanceMentionCount !== n.lowImportanceMentionCount ||
            t.highImportanceMentionCount !== n.highImportanceMentionCount) &&
            ((b[e ?? C] = t), null != e && (t.unread ? N.add(e) : N.delete(e)), R++, L(e ?? C), V(t, n), !0)
    );
}
function j(e, t) {
    let n = k(e),
        r = D(n),
        i = G(n, r),
        a = !1;
    if (
        (t.forEach((e) => {
            let t = f.A.getChannel(e);
            if (null == t) return void delete i.mentionCounts[e];
            if (t.getGuildId() !== n) return;
            let r = E.Ay.getMentionCount(e);
            null !== n && !a && E.Ay.hasUnread(t.id) && x(t, r, !0) && ((a = !0), (i.unreadChannelId = t.id)),
                r > 0 && x(t, r)
                    ? (i.mentionCounts[t.id] = { count: r, isMentionLowImportance: E.Ay.getIsMentionLowImportance(e) })
                    : delete i.mentionCounts[t.id];
        }),
        (i.unreadByType[v.P.CHANNEL] = a),
        i.unreadByType[v.P.CHANNEL] !== r.unreadByType[v.P.CHANNEL] && !i.unreadByType[v.P.CHANNEL])
    ) {
        let e = f.A.getChannel(r.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && E.Ay.hasUnread(e.id) && x(e))) return Y(n);
        null != n && N.add(n), (i.unreadByType[v.P.CHANNEL] = !0);
    }
    return B(n, i, r);
}
function H(e, t) {
    if (null == e) return;
    let n = D(e),
        r = G(e, n);
    return (r.unreadByType[v.P.GUILD_EVENT] = U(e, t)), B(e, r, n);
}
function Y(e, t) {
    let n = k(e),
        r = O(n);
    if (null == n) {
        let e = f.A.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                i = E.Ay.getMentionCount(t);
            i > 0 &&
                x(n, i) &&
                ((r.highImportanceMentionCount += i),
                (r.mentionCounts[n.id] = { count: i, isMentionLowImportance: !1 }));
        }
    } else {
        let e = I.Ay.isMuted(n);
        if (e && !1 === t) return !1;
        let i = I.Ay.getMutedChannels(n),
            s = I.Ay.getChannelOverrides(n),
            u = (0, a.WW)(n),
            c = f.A.getMutableBasicGuildChannelsForGuild(n);
        for (let t in c) {
            let n = c[t],
                a = e || i.has(t) || (null != n.parent_id && i.has(n.parent_id)),
                o = r.unreadByType[v.P.CHANNEL],
                {
                    mentionCount: l,
                    unread: d,
                    isMentionLowImportance: _,
                } = E.Ay.getGuildChannelUnreadState(n, u, s, a, o),
                f = l > 0;
            if (!f && a) continue;
            let h = !o && (!a || f) && d;
            (h || f) &&
                M(n, l, u) &&
                (h && ((r.unreadByType[v.P.CHANNEL] = !0), (r.unreadChannelId = t)),
                f &&
                    (_ ? (r.lowImportanceMentionCount += l) : (r.highImportanceMentionCount += l),
                    (r.mentionCounts[n.id] = { count: l, isMentionLowImportance: _ })));
        }
        let d = o.A.getActiveJoinedThreadsForGuild(n);
        for (let t in d)
            for (let n in d[t]) {
                !r.unreadByType[v.P.CHANNEL] &&
                    E.Ay.hasUnread(n) &&
                    !l.A.isMuted(n) &&
                    !e &&
                    ((r.unreadByType[v.P.CHANNEL] = !0), (r.unreadChannelId = n));
                let t = E.Ay.getMentionCount(n),
                    i = E.Ay.getIsMentionLowImportance(n);
                t > 0 &&
                    (i ? (r.lowImportanceMentionCount += t) : (r.highImportanceMentionCount += t),
                    (r.mentionCounts[n] = { count: t, isMentionLowImportance: i }));
            }
        !r.unreadByType[v.P.GUILD_EVENT] && U(n, v.P.GUILD_EVENT) && (r.unreadByType[v.P.GUILD_EVENT] = !0);
    }
    F(r);
    let i = D(n);
    return (
        (r.unread !== i.unread ||
            r.highImportanceMentionCount !== i.highImportanceMentionCount ||
            r.lowImportanceMentionCount !== i.lowImportanceMentionCount) &&
        ((b[n ?? C] = r), null != n && (r.unread ? N.add(n) : N.delete(n)), R++, L(n ?? C), V(r, i), !0)
    );
}
function W(e) {
    let { guilds: t } = e;
    (b = {}), (R = 0), (N = new Set()), Y(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && Y(n.properties.id);
    }
}
function K(e) {
    let { guilds: t, readState: n } = e;
    (b = {}), (R = 0), (N = new Set());
    let r = n.entries.length < 500,
        i = new Set();
    for (let e of (r &&
        n.entries.forEach((e) => {
            null != e.mention_count &&
                e.mention_count > 0 &&
                (null == e.read_state_type || e.read_state_type === v.P.CHANNEL
                    ? i.add(f.A.getChannel(e.id)?.guild_id)
                    : i.add(e.id));
        }),
    Y(null),
    t))
        Y(e.id, r ? i.has(e.id) : void 0);
}
function $() {
    for (let e of ((b = {}), (N = new Set()), Y(null), Object.values(h.A.getGuildIds()))) Y(e);
}
function z(e) {
    let { guild: t } = e;
    return Y(t.id);
}
function q(e) {
    let { guild: t } = e;
    return null != b[t.id] && (delete b[t.id], N.delete(t.id), R++, !0);
}
function X(e) {
    let {
        channel: { id: t, guild_id: n },
    } = e;
    return j(n, [t]);
}
function Z() {
    let e = f.A.getChannel(A.A.getChannelId());
    return null != e && j(e.getGuildId(), [e.id]);
}
function Q(e) {
    let { user: t, guildId: n } = e;
    return t.id === _.default.getId() && Y(n);
}
function J(e) {
    let { channelId: t } = e,
        n = f.A.getChannel(t);
    return null != n && j(n.getGuildId(), [n.id]);
}
function ee(e) {
    let { channelId: t } = e,
        n = f.A.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = D(n.guild_id);
        if (
            ((n.isThread()
                ? !l.A.hasJoined(n.id) || l.A.isMuted(n.id)
                : I.Ay.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) ||
                e.unreadByType[v.P.CHANNEL]) &&
            0 === E.Ay.getMentionCount(t)
        )
            return !1;
    }
    return j(n.getGuildId(), [n.id]);
}
function et(e) {
    let { channelId: t, guildId: n } = e;
    return n !== y.YYv && null != t && j(n, [t]);
}
function en(e) {
    let { channel: t } = e;
    return j(t.getGuildId(), [t.id]);
}
function er(e) {
    let { channels: t } = e;
    return i()(t)
        .groupBy((e) => e.getGuildId())
        .reduce(
            (e, t, n) =>
                j(
                    n,
                    t.map((e) => e.id),
                ) || e,
            !1,
        );
}
function ei(e) {
    let { channels: t } = e;
    return i()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != f.A.getChannel(e))
        .groupBy((e) => f.A.getChannel(e)?.getGuildId())
        .reduce((e, t, n) => j(n, t) || e, !1);
}
function ea(e) {
    let { channel: t } = e;
    return j(t.getGuildId(), [t.id, t.parent_id]);
}
function es(e) {
    let { guildScheduledEvent: t } = e;
    return H(t.guild_id, v.P.GUILD_EVENT);
}
function eo(e) {
    let { guildScheduledEvent: t } = e;
    return H(t.guild_id, v.P.GUILD_EVENT);
}
function el(e) {
    let { id: t, ackType: n } = e;
    return H(t, n);
}
function eu(e) {
    let { id: t, guildId: n } = e;
    return j(n, [t]);
}
function ec(e) {
    return (0, u.k)(e) && j(e.guildId, [e.id]);
}
function ed(e) {
    let { threads: t, guildId: n } = e;
    return j(
        n,
        t.filter((e) => l.A.hasJoined(e.id)).map((e) => e.id),
    );
}
function e_(e) {
    return (
        e.channels.length > 0 &&
        j(
            e.guildId,
            e.channels.map((e) => e.id),
        )
    );
}
function ef(e) {
    let { guildId: t } = e;
    return Y(t);
}
function eh(e) {
    let { guildId: t } = e;
    return Y(t);
}
function ep(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id ?? C));
    return d.default.keys(b).reduce((e, t) => (n.has(t) && Y(t)) || e, !1);
}
function em() {
    for (let e in b) b[e].ncMentionCount = 0;
}
function eg(e) {
    let { guildId: t } = e;
    return Y(t);
}
function eE(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = f.A.getChannel(e);
        null != t && j(t.getGuildId(), [e]);
    });
}
class eA extends p.A {
    static displayName = "GuildReadStateStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: K,
            OVERLAY_INITIALIZE: W,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: z,
            GUILD_DELETE: q,
            MESSAGE_CREATE: ee,
            MESSAGE_ACK: J,
            BULK_ACK: ei,
            UPDATE_CHANNEL_DIMENSIONS: J,
            CHANNEL_SELECT: et,
            CHANNEL_DELETE: X,
            WINDOW_FOCUS: Z,
            GUILD_ACK: ef,
            GUILD_ROLE_CREATE: eh,
            GUILD_ROLE_DELETE: eh,
            GUILD_ROLE_UPDATE: eh,
            CHANNEL_CREATE: en,
            CHANNEL_UPDATES: er,
            THREAD_CREATE: ea,
            THREAD_UPDATE: ea,
            THREAD_DELETE: ea,
            THREAD_LIST_SYNC: ed,
            THREAD_MEMBER_UPDATE: eu,
            THREAD_MEMBERS_UPDATE: ec,
            PASSIVE_UPDATE_V2: e_,
            GUILD_MEMBER_UPDATE: Q,
            USER_GUILD_SETTINGS_FULL_UPDATE: ep,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: eg,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eg,
            USER_GUILD_SETTINGS_GUILD_UPDATE: eg,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eg,
            GUILD_FEATURE_ACK: el,
            GUILD_SCHEDULED_EVENT_CREATE: es,
            GUILD_SCHEDULED_EVENT_UPDATE: es,
            GUILD_SCHEDULED_EVENT_DELETE: eo,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: J,
            LOAD_MESSAGES_SUCCESS: J,
            CHANNEL_ACK: J,
            CHANNEL_LOCAL_ACK: J,
            NOTIFICATION_SETTINGS_UPDATE: $,
            RECOMPUTE_READ_STATES: $,
            VOICE_CHANNEL_SELECT: J,
            ENABLE_AUTOMATIC_ACK: J,
            RESORT_THREADS: J,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: em,
            TRY_ACK: J,
            LOAD_RECENT_MENTIONS_SUCCESS: eE,
        });
    }
    initialize() {
        this.waitFor(f.A, A.A, E.Ay, g.A, _.default, T.default, I.Ay, o.A, l.A, s.Ay);
    }
    loadCache() {
        let e = this.readSnapshot(eA.LATEST_SNAPSHOT_VERSION);
        null != e && ((b = e.guilds), (N = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return { version: eA.LATEST_SNAPSHOT_VERSION, data: { guilds: b, unreadGuilds: Array.from(N) } };
    }
    hasAnyUnread() {
        return N.size > 0;
    }
    getStoreChangeSentinel() {
        return R;
    }
    getMutableUnreadGuilds() {
        return N;
    }
    getMutableGuildStates() {
        return b;
    }
    hasUnread(e) {
        return N.has(e);
    }
    getMentionCount(e) {
        let t = D(e);
        return t.highImportanceMentionCount + t.lowImportanceMentionCount;
    }
    getIsMentionLowImportance(e) {
        return 0 === D(e).highImportanceMentionCount;
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = f.A.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (
                null != n &&
                (!n.isGuildVocal() || 0 !== E.Ay.getMentionCount(e)) &&
                g.A.can(n.accessPermissions, n) &&
                E.Ay.hasUnreadOrMentions(e)
            )
                return !0;
        }
        let n = o.A.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != f.A.getChannel(e)) {
                for (let t in n[e]) if (E.Ay.hasUnreadOrMentions(t)) return !0;
            }
        return !!E.Ay.hasUnreadOrMentions(e, v.P.GUILD_EVENT);
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in b) {
            let r = b[n];
            (!0 !== e || n !== C) && (t += r.highImportanceMentionCount);
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in b) {
            let r = b[n];
            (!0 !== e || n !== C) && (t += r.ncMentionCount);
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        let e = b[C];
        return e?.highImportanceMentionCount ?? 0;
    }
    getMentionCountForPrivateChannel(e) {
        return b[C]?.mentionCounts[e] ?? 0;
    }
    getGuildChangeSentinel(e) {
        return D(e).sentinel;
    }
}
let eI = new eA();
