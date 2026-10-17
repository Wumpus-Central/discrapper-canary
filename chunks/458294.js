let i;
(n.r(t), n.d(t, { default: () => eN }), n(938796));
var r = n(435558),
    a = n.n(r),
    s = n(874850),
    l = n(5180),
    o = n(409686);
n(252431);
var d = n(395504),
    c = n(863005),
    u = n(152007),
    _ = n(882733),
    E = n(95701),
    A = n(260509),
    h = n(935208),
    f = n(280450),
    I = n(734057),
    p = n(71393),
    T = n(536802),
    m = n(576705),
    g = n(573163),
    S = n(309010),
    N = n(543465),
    C = n(287809),
    O = n(652215),
    R = n(746080),
    L = n(790782);
let y = O.eGj,
    D = {},
    v = new Set(),
    b = 0;
function P(e) {
    let t = D[e ?? y];
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
function M(e) {
    return (D[e ?? y] = D[e ?? y] ?? P(e));
}
function U(e) {
    let t = M(e);
    (t.sentinel++, b++);
}
function w(e, t, n) {
    return null != e.guild_id && n && !((0, E.fT)(e.type) || N.Ay.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        !(
            null == e ||
            (e.isGuildVocal() && 0 === t) ||
            e.hasFlag(R.lx.IS_GUILD_RESOURCE_CHANNEL) ||
            ((0 === t || n) &&
                (e.isThread()
                    ? u.A.isMuted(e.id) || N.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id)
                    : N.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) ||
            (!e.isPrivate() && (w(e, t, (0, d.WW)(e.guild_id)) || !m.A.can(e.accessPermissions, e)))
        ) &&
        (t > 0 || N.Ay.resolveUnreadSetting(e) === L.e.ALL_MESSAGES)
    );
}
function x(e) {
    switch (e) {
        case y:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function k(e, t) {
    let n = g.Ay.hasUnread(e, t);
    return t !== L.P.GUILD_EVENT ? n : !(N.Ay.isMuted(e) || N.Ay.isMuteScheduledEventsEnabled(e)) && n;
}
function F(e, t) {
    let n = P(e);
    return ((n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n);
}
function B(e) {
    return ((e.unread = Object.values(e.unreadByType).some((e) => e)), e);
}
function V(e, t) {}
function H(e, t, n) {
    return (
        B(t),
        (t.lowImportanceMentionCount = 0),
        (t.highImportanceMentionCount = 0),
        h.default.forEach(t.mentionCounts, (e) => {
            let { count: n, isMentionLowImportance: i } = e;
            i ? (t.lowImportanceMentionCount += n) : (t.highImportanceMentionCount += n);
        }),
        (t.unread !== n.unread ||
            t.lowImportanceMentionCount !== n.lowImportanceMentionCount ||
            t.highImportanceMentionCount !== n.highImportanceMentionCount) &&
            ((D[e ?? y] = t), null != e && (t.unread ? v.add(e) : v.delete(e)), b++, U(e ?? y), V(t, n), !0)
    );
}
function j(e, t) {
    let n = x(e),
        i = M(n),
        r = F(n, i),
        a = !1;
    if (
        (t.forEach((e) => {
            let t = I.A.getChannel(e);
            if (null == t) return void delete r.mentionCounts[e];
            if (t.getGuildId() !== n) return;
            let i = g.Ay.getMentionCount(e);
            (null !== n && !a && g.Ay.hasUnread(t.id) && G(t, i, !0) && ((a = !0), (r.unreadChannelId = t.id)),
                i > 0 && G(t, i)
                    ? (r.mentionCounts[t.id] = { count: i, isMentionLowImportance: g.Ay.getIsMentionLowImportance(e) })
                    : delete r.mentionCounts[t.id]);
        }),
        (r.unreadByType[L.P.CHANNEL] = a),
        r.unreadByType[L.P.CHANNEL] !== i.unreadByType[L.P.CHANNEL] && !r.unreadByType[L.P.CHANNEL])
    ) {
        let e = I.A.getChannel(i.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && g.Ay.hasUnread(e.id) && G(e))) return Y(n);
        (null != n && v.add(n), (r.unreadByType[L.P.CHANNEL] = !0));
    }
    return H(n, r, i);
}
function W(e, t) {
    if (null == e) return;
    let n = M(e),
        i = F(e, n);
    return ((i.unreadByType[L.P.GUILD_EVENT] = k(e, t)), H(e, i, n));
}
function Y(e, t) {
    let n = x(e),
        i = P(n);
    if (null == n) {
        let e = I.A.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                r = g.Ay.getMentionCount(t);
            r > 0 &&
                G(n, r) &&
                ((i.highImportanceMentionCount += r),
                (i.mentionCounts[n.id] = { count: r, isMentionLowImportance: !1 }));
        }
    } else {
        let e = N.Ay.isMuted(n);
        if (e && !1 === t) return !1;
        let o = N.Ay.getMutedChannels(n),
            _ = N.Ay.getChannelOverrides(n),
            h = (0, d.WW)(n),
            f = (0, s.EV)(),
            T = { userCanSeeNSFW: f, guildIsNSFW: !f && (0, A.wh)(p.A.getGuild(n)) },
            S = I.A.getMutableBasicGuildChannelsForGuild(n);
        for (let t in S) {
            var r, a, l;
            let n = S[t],
                s = e || o.has(t) || (null != n.parent_id && o.has(n.parent_id)),
                d = i.unreadByType[L.P.CHANNEL],
                {
                    mentionCount: c,
                    unread: u,
                    isMentionLowImportance: A,
                } = g.Ay.getGuildChannelUnreadState(n, h, _, s, d, T),
                f = c > 0;
            if (!f && s) continue;
            let I = !d && (!s || f) && u;
            (I || f) &&
                ((r = n),
                (a = c),
                (l = h),
                !(((0, E.ay)(r.type) && 0 === a) || !m.A.canBasicChannel((0, E.pd)(r.type), r) || w(r, a, l)) &&
                    !("flags" in r && r.hasFlag(R.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                    (a > 0 || N.Ay.resolveUnreadSetting(r) === L.e.ALL_MESSAGES)) &&
                (I && ((i.unreadByType[L.P.CHANNEL] = !0), (i.unreadChannelId = t)),
                f &&
                    (A ? (i.lowImportanceMentionCount += c) : (i.highImportanceMentionCount += c),
                    (i.mentionCounts[n.id] = { count: c, isMentionLowImportance: A })));
        }
        let C = c.A.getActiveJoinedThreadsForGuild(n);
        for (let t in C)
            for (let n in C[t]) {
                !i.unreadByType[L.P.CHANNEL] &&
                    g.Ay.hasUnread(n) &&
                    !u.A.isMuted(n) &&
                    !e &&
                    ((i.unreadByType[L.P.CHANNEL] = !0), (i.unreadChannelId = n));
                let t = g.Ay.getMentionCount(n),
                    r = g.Ay.getIsMentionLowImportance(n);
                t > 0 &&
                    (r ? (i.lowImportanceMentionCount += t) : (i.highImportanceMentionCount += t),
                    (i.mentionCounts[n] = { count: t, isMentionLowImportance: r }));
            }
        !i.unreadByType[L.P.GUILD_EVENT] && k(n, L.P.GUILD_EVENT) && (i.unreadByType[L.P.GUILD_EVENT] = !0);
    }
    B(i);
    let o = M(n);
    return (
        (i.unread !== o.unread ||
            i.highImportanceMentionCount !== o.highImportanceMentionCount ||
            i.lowImportanceMentionCount !== o.lowImportanceMentionCount) &&
        ((D[n ?? y] = i), null != n && (i.unread ? v.add(n) : v.delete(n)), b++, U(n ?? y), V(i, o), !0)
    );
}
function K(e) {
    let { guilds: t } = e;
    ((D = {}), (b = 0), (v = new Set()), Y(null));
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && Y(n.properties.id);
    }
}
function $(e) {
    let { guilds: t, readState: n } = e;
    ((D = {}), (b = 0), (v = new Set()), (i = C.default.getCurrentUser()?.nsfwAllowed));
    let r = n.entries.length < 500,
        a = new Set();
    for (let e of (r &&
        n.entries.forEach((e) => {
            null != e.mention_count &&
                e.mention_count > 0 &&
                (null == e.read_state_type || e.read_state_type === L.P.CHANNEL
                    ? a.add(I.A.getChannel(e.id)?.guild_id)
                    : a.add(e.id));
        }),
    Y(null),
    t))
        Y(e.id, r ? a.has(e.id) : void 0);
}
function z() {
    for (let e of ((D = {}), (v = new Set()), Y(null), Object.values(p.A.getGuildIds()))) Y(e);
}
function X(e) {
    let { guild: t } = e;
    return Y(t.id);
}
function q(e) {
    let { guild: t } = e;
    return null != D[t.id] && (delete D[t.id], v.delete(t.id), b++, !0);
}
function Z(e) {
    let {
        channel: { id: t, guild_id: n },
    } = e;
    return j(n, [t]);
}
function Q() {
    let e = I.A.getChannel(S.Ay.getChannelId());
    return null != e && j(e.getGuildId(), [e.id]);
}
function J(e) {
    let { user: t, guildId: n } = e;
    return t.id === f.default.getId() && Y(n);
}
function ee(e) {
    let { channelId: t } = e,
        n = I.A.getChannel(t);
    return null != n && j(n.getGuildId(), [n.id]);
}
function et(e) {
    let { channelId: t } = e,
        n = I.A.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = M(n.guild_id);
        if (
            ((n.isThread()
                ? !u.A.hasJoined(n.id) || u.A.isMuted(n.id)
                : N.Ay.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) ||
                e.unreadByType[L.P.CHANNEL]) &&
            0 === g.Ay.getMentionCount(t)
        )
            return !1;
    }
    return j(n.getGuildId(), [n.id]);
}
function en(e) {
    let { channelId: t, guildId: n } = e;
    return !(0, l.ai)(n) && null != t && j(n, [t]);
}
function ei(e) {
    let { channel: t } = e;
    return j(t.getGuildId(), [t.id]);
}
function er(e) {
    let { channels: t } = e;
    return a()(t)
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
function ea(e) {
    let { channels: t } = e;
    return a()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != I.A.getChannel(e))
        .groupBy((e) => I.A.getChannel(e)?.getGuildId())
        .reduce((e, t, n) => j(n, t) || e, !1);
}
function es(e) {
    let { channel: t } = e;
    return j(t.getGuildId(), [t.id, t.parent_id]);
}
function el(e) {
    let { guildScheduledEvent: t } = e;
    return W(t.guild_id, L.P.GUILD_EVENT);
}
function eo(e) {
    let { guildScheduledEvent: t } = e;
    return W(t.guild_id, L.P.GUILD_EVENT);
}
function ed(e) {
    let { id: t, ackType: n } = e;
    return W(t, n);
}
function ec(e) {
    let { id: t, guildId: n } = e;
    return j(n, [t]);
}
function eu(e) {
    return (0, _.k)(e) && j(e.guildId, [e.id]);
}
function e_(e) {
    let { threads: t, guildId: n } = e;
    return j(
        n,
        t.filter((e) => u.A.hasJoined(e.id)).map((e) => e.id),
    );
}
function eE(e) {
    return (
        e.channels.length > 0 &&
        j(
            e.guildId,
            e.channels.map((e) => e.id),
        )
    );
}
function eA(e) {
    let { guildId: t } = e;
    return Y(t);
}
function eh(e) {
    let { guildId: t } = e;
    return Y(t);
}
function ef(e) {
    let { guild: t } = e;
    return !(0, s.EV)() && Y(t.id);
}
function eI() {
    let e = C.default.getCurrentUser()?.nsfwAllowed;
    return e !== i && ((i = e), z(), !0);
}
function ep(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id ?? y));
    return h.default.keys(D).reduce((e, t) => (n.has(t) && Y(t)) || e, !1);
}
function eT() {
    for (let e in D) D[e].ncMentionCount = 0;
}
function em(e) {
    let { guildId: t } = e;
    return Y(t);
}
function eg(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = I.A.getChannel(e);
        null != t && j(t.getGuildId(), [e]);
    });
}
class eS extends T.A {
    static displayName = "GuildReadStateStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: $,
            OVERLAY_INITIALIZE: K,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: X,
            GUILD_DELETE: q,
            MESSAGE_CREATE: et,
            MESSAGE_ACK: ee,
            BULK_ACK: ea,
            UPDATE_CHANNEL_DIMENSIONS: ee,
            CHANNEL_SELECT: en,
            CHANNEL_DELETE: Z,
            WINDOW_FOCUS: Q,
            GUILD_ACK: eA,
            GUILD_ROLE_CREATE: eh,
            GUILD_ROLE_DELETE: eh,
            GUILD_ROLE_UPDATE: eh,
            GUILD_UPDATE: ef,
            CURRENT_USER_UPDATE: eI,
            CHANNEL_CREATE: ei,
            CHANNEL_UPDATES: er,
            THREAD_CREATE: es,
            THREAD_UPDATE: es,
            THREAD_DELETE: es,
            THREAD_LIST_SYNC: e_,
            THREAD_MEMBER_UPDATE: ec,
            THREAD_MEMBERS_UPDATE: eu,
            PASSIVE_UPDATE_V2: eE,
            GUILD_MEMBER_UPDATE: J,
            USER_GUILD_SETTINGS_FULL_UPDATE: ep,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: em,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: em,
            USER_GUILD_SETTINGS_GUILD_UPDATE: em,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: em,
            GUILD_FEATURE_ACK: ed,
            GUILD_SCHEDULED_EVENT_CREATE: el,
            GUILD_SCHEDULED_EVENT_UPDATE: el,
            GUILD_SCHEDULED_EVENT_DELETE: eo,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: ee,
            LOAD_MESSAGES_SUCCESS: ee,
            CHANNEL_ACK: ee,
            CHANNEL_LOCAL_ACK: ee,
            NOTIFICATION_SETTINGS_UPDATE: z,
            RECOMPUTE_READ_STATES: z,
            VOICE_CHANNEL_SELECT: ee,
            ENABLE_AUTOMATIC_ACK: ee,
            RESORT_THREADS: ee,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eT,
            TRY_ACK: ee,
            LOAD_RECENT_MENTIONS_SUCCESS: eg,
        });
    }
    initialize() {
        this.waitFor(I.A, p.A, S.Ay, g.Ay, m.A, f.default, C.default, N.Ay, c.A, u.A, o.Ay);
    }
    loadCache() {
        let e = this.readSnapshot(eS.LATEST_SNAPSHOT_VERSION);
        null != e && ((D = e.guilds), (v = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return { version: eS.LATEST_SNAPSHOT_VERSION, data: { guilds: D, unreadGuilds: Array.from(v) } };
    }
    hasAnyUnread() {
        return v.size > 0;
    }
    getStoreChangeSentinel() {
        return b;
    }
    getMutableUnreadGuilds() {
        return v;
    }
    getMutableGuildStates() {
        return D;
    }
    shouldCountChannelUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return G(e, t, !0);
    }
    hasUnread(e) {
        return v.has(e);
    }
    getMentionCount(e) {
        let t = M(e);
        return t.highImportanceMentionCount + t.lowImportanceMentionCount;
    }
    getIsMentionLowImportance(e) {
        return 0 === M(e).highImportanceMentionCount;
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = I.A.getMutableGuildChannelsForGuild(e);
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
        let n = c.A.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != I.A.getChannel(e)) {
                for (let t in n[e]) if (g.Ay.hasUnreadOrMentions(t)) return !0;
            }
        return !!g.Ay.hasUnreadOrMentions(e, L.P.GUILD_EVENT);
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in D) {
            let i = D[n];
            (!0 !== e || n !== y) && (t += i.highImportanceMentionCount);
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in D) {
            let i = D[n];
            (!0 !== e || n !== y) && (t += i.ncMentionCount);
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        let e = D[y];
        return e?.highImportanceMentionCount ?? 0;
    }
    getMentionCountForPrivateChannel(e) {
        return D[y]?.mentionCounts[e] ?? 0;
    }
    getHighImportanceMentionCountForChannel(e, t) {
        let n = D[e ?? y]?.mentionCounts[t];
        return null == n || n.isMentionLowImportance ? 0 : n.count;
    }
    getGuildChangeSentinel(e) {
        return M(e).sentinel;
    }
}
let eN = new eS();
