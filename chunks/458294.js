"use strict";
n.r(t), n.d(t, { default: () => ef }), n(938796);
var i = n(435558),
    r = n.n(i);
n(252431);
var a = n(395504),
    s = n(135978),
    l = n(695633),
    o = n(152007),
    d = n(882733),
    c = n(95701),
    u = n(935208),
    _ = n(280450),
    E = n(734057),
    A = n(71393),
    h = n(536802),
    I = n(576705),
    f = n(568548),
    p = n(309010),
    T = n(543465),
    m = n(287809),
    g = n(652215),
    S = n(746080),
    N = n(790782);
let C = g.eGj,
    R = {},
    O = new Set(),
    L = 0;
function y(e) {
    let t = R[e ?? C];
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
    return (R[e ?? C] = R[e ?? C] ?? y(e));
}
function v(e) {
    let t = D(e);
    t.sentinel++, L++;
}
function b(e, t, n) {
    return null != e.guild_id && n && !((0, c.fT)(e.type) || T.Ay.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        !(
            null == e ||
            (e.isGuildVocal() && 0 === t) ||
            e.hasFlag(S.lx.IS_GUILD_RESOURCE_CHANNEL) ||
            ((0 === t || n) &&
                (e.isThread()
                    ? o.A.isMuted(e.id) || T.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id)
                    : T.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) ||
            (!e.isPrivate() && (b(e, t, (0, a.WW)(e.guild_id)) || !I.A.can(e.accessPermissions, e)))
        ) &&
        (t > 0 || T.Ay.resolveUnreadSetting(e) === N.e.ALL_MESSAGES)
    );
}
function P(e) {
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
    let n = f.Ay.hasUnread(e, t);
    return t !== N.P.GUILD_EVENT ? n : !(T.Ay.isMuted(e) || T.Ay.isMuteScheduledEventsEnabled(e)) && n;
}
function w(e, t) {
    let n = y(e);
    return (n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n;
}
function G(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function x(e, t) {}
function k(e, t, n) {
    return (
        G(t),
        (t.lowImportanceMentionCount = 0),
        (t.highImportanceMentionCount = 0),
        u.default.forEach(t.mentionCounts, (e) => {
            let { count: n, isMentionLowImportance: i } = e;
            i ? (t.lowImportanceMentionCount += n) : (t.highImportanceMentionCount += n);
        }),
        (t.unread !== n.unread ||
            t.lowImportanceMentionCount !== n.lowImportanceMentionCount ||
            t.highImportanceMentionCount !== n.highImportanceMentionCount) &&
            ((R[e ?? C] = t), null != e && (t.unread ? O.add(e) : O.delete(e)), L++, v(e ?? C), x(t, n), !0)
    );
}
function F(e, t) {
    let n = P(e),
        i = D(n),
        r = w(n, i),
        a = !1;
    if (
        (t.forEach((e) => {
            let t = E.A.getChannel(e);
            if (null == t) return void delete r.mentionCounts[e];
            if (t.getGuildId() !== n) return;
            let i = f.Ay.getMentionCount(e);
            null !== n && !a && f.Ay.hasUnread(t.id) && M(t, i, !0) && ((a = !0), (r.unreadChannelId = t.id)),
                i > 0 && M(t, i)
                    ? (r.mentionCounts[t.id] = { count: i, isMentionLowImportance: f.Ay.getIsMentionLowImportance(e) })
                    : delete r.mentionCounts[t.id];
        }),
        (r.unreadByType[N.P.CHANNEL] = a),
        r.unreadByType[N.P.CHANNEL] !== i.unreadByType[N.P.CHANNEL] && !r.unreadByType[N.P.CHANNEL])
    ) {
        let e = E.A.getChannel(i.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && f.Ay.hasUnread(e.id) && M(e))) return B(n);
        null != n && O.add(n), (r.unreadByType[N.P.CHANNEL] = !0);
    }
    return k(n, r, i);
}
function V(e, t) {
    if (null == e) return;
    let n = D(e),
        i = w(e, n);
    return (i.unreadByType[N.P.GUILD_EVENT] = U(e, t)), k(e, i, n);
}
function B(e, t) {
    let n = P(e),
        i = y(n);
    if (null == n) {
        let e = E.A.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                r = f.Ay.getMentionCount(t);
            r > 0 &&
                M(n, r) &&
                ((i.highImportanceMentionCount += r),
                (i.mentionCounts[n.id] = { count: r, isMentionLowImportance: !1 }));
        }
    } else {
        let e = T.Ay.isMuted(n);
        if (e && !1 === t) return !1;
        let u = T.Ay.getMutedChannels(n),
            _ = T.Ay.getChannelOverrides(n),
            A = (0, a.WW)(n),
            h = E.A.getMutableBasicGuildChannelsForGuild(n);
        for (let t in h) {
            var r, s, d;
            let n = h[t],
                a = e || u.has(t) || (null != n.parent_id && u.has(n.parent_id)),
                l = i.unreadByType[N.P.CHANNEL],
                {
                    mentionCount: o,
                    unread: E,
                    isMentionLowImportance: p,
                } = f.Ay.getGuildChannelUnreadState(n, A, _, a, l),
                m = o > 0;
            if (!m && a) continue;
            let g = !l && (!a || m) && E;
            (g || m) &&
                ((r = n),
                (s = o),
                (d = A),
                !(((0, c.ay)(r.type) && 0 === s) || !I.A.canBasicChannel((0, c.pd)(r.type), r) || b(r, s, d)) &&
                    !("flags" in r && r.hasFlag(S.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                    (s > 0 || T.Ay.resolveUnreadSetting(r) === N.e.ALL_MESSAGES)) &&
                (g && ((i.unreadByType[N.P.CHANNEL] = !0), (i.unreadChannelId = t)),
                m &&
                    (p ? (i.lowImportanceMentionCount += o) : (i.highImportanceMentionCount += o),
                    (i.mentionCounts[n.id] = { count: o, isMentionLowImportance: p })));
        }
        let p = l.A.getActiveJoinedThreadsForGuild(n);
        for (let t in p)
            for (let n in p[t]) {
                !i.unreadByType[N.P.CHANNEL] &&
                    f.Ay.hasUnread(n) &&
                    !o.A.isMuted(n) &&
                    !e &&
                    ((i.unreadByType[N.P.CHANNEL] = !0), (i.unreadChannelId = n));
                let t = f.Ay.getMentionCount(n),
                    r = f.Ay.getIsMentionLowImportance(n);
                t > 0 &&
                    (r ? (i.lowImportanceMentionCount += t) : (i.highImportanceMentionCount += t),
                    (i.mentionCounts[n] = { count: t, isMentionLowImportance: r }));
            }
        !i.unreadByType[N.P.GUILD_EVENT] && U(n, N.P.GUILD_EVENT) && (i.unreadByType[N.P.GUILD_EVENT] = !0);
    }
    G(i);
    let u = D(n);
    return (
        (i.unread !== u.unread ||
            i.highImportanceMentionCount !== u.highImportanceMentionCount ||
            i.lowImportanceMentionCount !== u.lowImportanceMentionCount) &&
        ((R[n ?? C] = i), null != n && (i.unread ? O.add(n) : O.delete(n)), L++, v(n ?? C), x(i, u), !0)
    );
}
function H(e) {
    let { guilds: t } = e;
    (R = {}), (L = 0), (O = new Set()), B(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && B(n.properties.id);
    }
}
function j(e) {
    let { guilds: t, readState: n } = e;
    (R = {}), (L = 0), (O = new Set());
    let i = n.entries.length < 500,
        r = new Set();
    for (let e of (i &&
        n.entries.forEach((e) => {
            null != e.mention_count &&
                e.mention_count > 0 &&
                (null == e.read_state_type || e.read_state_type === N.P.CHANNEL
                    ? r.add(E.A.getChannel(e.id)?.guild_id)
                    : r.add(e.id));
        }),
    B(null),
    t))
        B(e.id, i ? r.has(e.id) : void 0);
}
function W() {
    for (let e of ((R = {}), (O = new Set()), B(null), Object.values(A.A.getGuildIds()))) B(e);
}
function Y(e) {
    let { guild: t } = e;
    return B(t.id);
}
function K(e) {
    let { guild: t } = e;
    return null != R[t.id] && (delete R[t.id], O.delete(t.id), L++, !0);
}
function $(e) {
    let {
        channel: { id: t, guild_id: n },
    } = e;
    return F(n, [t]);
}
function z() {
    let e = E.A.getChannel(p.Ay.getChannelId());
    return null != e && F(e.getGuildId(), [e.id]);
}
function q(e) {
    let { user: t, guildId: n } = e;
    return t.id === _.default.getId() && B(n);
}
function Z(e) {
    let { channelId: t } = e,
        n = E.A.getChannel(t);
    return null != n && F(n.getGuildId(), [n.id]);
}
function X(e) {
    let { channelId: t } = e,
        n = E.A.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = D(n.guild_id);
        if (
            ((n.isThread()
                ? !o.A.hasJoined(n.id) || o.A.isMuted(n.id)
                : T.Ay.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) ||
                e.unreadByType[N.P.CHANNEL]) &&
            0 === f.Ay.getMentionCount(t)
        )
            return !1;
    }
    return F(n.getGuildId(), [n.id]);
}
function Q(e) {
    let { channelId: t, guildId: n } = e;
    return n !== g.YYv && null != t && F(n, [t]);
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
        .filter((e) => null != E.A.getChannel(e))
        .groupBy((e) => E.A.getChannel(e)?.getGuildId())
        .reduce((e, t, n) => F(n, t) || e, !1);
}
function en(e) {
    let { channel: t } = e;
    return F(t.getGuildId(), [t.id, t.parent_id]);
}
function ei(e) {
    let { guildScheduledEvent: t } = e;
    return V(t.guild_id, N.P.GUILD_EVENT);
}
function er(e) {
    let { guildScheduledEvent: t } = e;
    return V(t.guild_id, N.P.GUILD_EVENT);
}
function ea(e) {
    let { id: t, ackType: n } = e;
    return V(t, n);
}
function es(e) {
    let { id: t, guildId: n } = e;
    return F(n, [t]);
}
function el(e) {
    return (0, d.k)(e) && F(e.guildId, [e.id]);
}
function eo(e) {
    let { threads: t, guildId: n } = e;
    return F(
        n,
        t.filter((e) => o.A.hasJoined(e.id)).map((e) => e.id),
    );
}
function ed(e) {
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
function eu(e) {
    let { guildId: t } = e;
    return B(t);
}
function e_(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id ?? C));
    return u.default.keys(R).reduce((e, t) => (n.has(t) && B(t)) || e, !1);
}
function eE() {
    for (let e in R) R[e].ncMentionCount = 0;
}
function eA(e) {
    let { guildId: t } = e;
    return B(t);
}
function eh(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = E.A.getChannel(e);
        null != t && F(t.getGuildId(), [e]);
    });
}
class eI extends h.A {
    static displayName = "GuildReadStateStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: j,
            OVERLAY_INITIALIZE: H,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: Y,
            GUILD_DELETE: K,
            MESSAGE_CREATE: X,
            MESSAGE_ACK: Z,
            BULK_ACK: et,
            UPDATE_CHANNEL_DIMENSIONS: Z,
            CHANNEL_SELECT: Q,
            CHANNEL_DELETE: $,
            WINDOW_FOCUS: z,
            GUILD_ACK: ec,
            GUILD_ROLE_CREATE: eu,
            GUILD_ROLE_DELETE: eu,
            GUILD_ROLE_UPDATE: eu,
            CHANNEL_CREATE: J,
            CHANNEL_UPDATES: ee,
            THREAD_CREATE: en,
            THREAD_UPDATE: en,
            THREAD_DELETE: en,
            THREAD_LIST_SYNC: eo,
            THREAD_MEMBER_UPDATE: es,
            THREAD_MEMBERS_UPDATE: el,
            PASSIVE_UPDATE_V2: ed,
            GUILD_MEMBER_UPDATE: q,
            USER_GUILD_SETTINGS_FULL_UPDATE: e_,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: eA,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eA,
            USER_GUILD_SETTINGS_GUILD_UPDATE: eA,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eA,
            GUILD_FEATURE_ACK: ea,
            GUILD_SCHEDULED_EVENT_CREATE: ei,
            GUILD_SCHEDULED_EVENT_UPDATE: ei,
            GUILD_SCHEDULED_EVENT_DELETE: er,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: Z,
            LOAD_MESSAGES_SUCCESS: Z,
            CHANNEL_ACK: Z,
            CHANNEL_LOCAL_ACK: Z,
            NOTIFICATION_SETTINGS_UPDATE: W,
            RECOMPUTE_READ_STATES: W,
            VOICE_CHANNEL_SELECT: Z,
            ENABLE_AUTOMATIC_ACK: Z,
            RESORT_THREADS: Z,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eE,
            TRY_ACK: Z,
            LOAD_RECENT_MENTIONS_SUCCESS: eh,
        });
    }
    initialize() {
        this.waitFor(E.A, p.Ay, f.Ay, I.A, _.default, m.default, T.Ay, l.A, o.A, s.Ay);
    }
    loadCache() {
        let e = this.readSnapshot(eI.LATEST_SNAPSHOT_VERSION);
        null != e && ((R = e.guilds), (O = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return { version: eI.LATEST_SNAPSHOT_VERSION, data: { guilds: R, unreadGuilds: Array.from(O) } };
    }
    hasAnyUnread() {
        return O.size > 0;
    }
    getStoreChangeSentinel() {
        return L;
    }
    getMutableUnreadGuilds() {
        return O;
    }
    getMutableGuildStates() {
        return R;
    }
    shouldCountChannelUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return M(e, t, !0);
    }
    hasUnread(e) {
        return O.has(e);
    }
    getMentionCount(e) {
        let t = D(e);
        return t.highImportanceMentionCount + t.lowImportanceMentionCount;
    }
    getIsMentionLowImportance(e) {
        return 0 === D(e).highImportanceMentionCount;
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = E.A.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (
                null != n &&
                (!n.isGuildVocal() || 0 !== f.Ay.getMentionCount(e)) &&
                I.A.can(n.accessPermissions, n) &&
                f.Ay.hasUnreadOrMentions(e)
            )
                return !0;
        }
        let n = l.A.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != E.A.getChannel(e)) {
                for (let t in n[e]) if (f.Ay.hasUnreadOrMentions(t)) return !0;
            }
        return !!f.Ay.hasUnreadOrMentions(e, N.P.GUILD_EVENT);
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in R) {
            let i = R[n];
            (!0 !== e || n !== C) && (t += i.highImportanceMentionCount);
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in R) {
            let i = R[n];
            (!0 !== e || n !== C) && (t += i.ncMentionCount);
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        let e = R[C];
        return e?.highImportanceMentionCount ?? 0;
    }
    getMentionCountForPrivateChannel(e) {
        return R[C]?.mentionCounts[e] ?? 0;
    }
    getHighImportanceMentionCountForChannel(e, t) {
        let n = R[e ?? C]?.mentionCounts[t];
        return null == n || n.isMentionLowImportance ? 0 : n.count;
    }
    getGuildChangeSentinel(e) {
        return D(e).sentinel;
    }
}
let ef = new eI();
