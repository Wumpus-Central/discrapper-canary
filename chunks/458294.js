let i;
(n.d(t, { default: () => eS }), n(938796));
var r = n(435558),
    a = n.n(r),
    s = n(874850),
    l = n(5180),
    o = n(849171);
n(252431);
var d = n(395504),
    c = n(863005),
    u = n(152007),
    _ = n(882733),
    E = n(95701),
    A = n(260509),
    f = n(811091),
    h = n(46653),
    I = n(734057),
    p = n(71393),
    m = n(536802),
    g = n(576705),
    T = n(218461),
    S = n(309010),
    N = n(543465),
    C = n(287809);
n(652215);
var O = n(746080),
    R = n(790782);
let L = "null",
    y = {},
    D = new Set(),
    b = 0;
function v(e) {
    let t = y[e ?? L];
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
function P(e) {
    return (y[e ?? L] = y[e ?? L] ?? v(e));
}
function M(e) {
    let t = P(e);
    (t.sentinel++, b++);
}
function U(e, t, n) {
    return null != e.guild_id && n && !((0, E.fT)(e.type) || N.Ay.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        !(
            null == e ||
            (e.isGuildVocal() && 0 === t) ||
            e.hasFlag(O.lx.IS_GUILD_RESOURCE_CHANNEL) ||
            ((0 === t || n) &&
                (e.isThread()
                    ? u.A.isMuted(e.id) || N.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id)
                    : N.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) ||
            (!e.isPrivate() && (U(e, t, (0, d.WW)(e.guild_id)) || !g.A.can(e.accessPermissions, e)))
        ) &&
        (t > 0 || N.Ay.resolveUnreadSetting(e) === R.e.ALL_MESSAGES)
    );
}
function G(e) {
    switch (e) {
        case L:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function x(e, t) {
    let n = T.Ay.hasUnread(e, t);
    return t !== R.P.GUILD_EVENT ? n : !(N.Ay.isMuted(e) || N.Ay.isMuteScheduledEventsEnabled(e)) && n;
}
function k(e, t) {
    let n = v(e);
    return ((n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n);
}
function F(e) {
    return ((e.unread = Object.values(e.unreadByType).some((e) => e)), e);
}
function B(e, t) {}
function V(e, t, n) {
    return (
        F(t),
        (t.lowImportanceMentionCount = 0),
        (t.highImportanceMentionCount = 0),
        f.default.forEach(t.mentionCounts, (e) => {
            let { count: n, isMentionLowImportance: i } = e;
            i ? (t.lowImportanceMentionCount += n) : (t.highImportanceMentionCount += n);
        }),
        (t.unread !== n.unread ||
            t.lowImportanceMentionCount !== n.lowImportanceMentionCount ||
            t.highImportanceMentionCount !== n.highImportanceMentionCount) &&
            ((y[e ?? L] = t), null != e && (t.unread ? D.add(e) : D.delete(e)), b++, M(e ?? L), B(t, n), !0)
    );
}
function H(e, t) {
    let n = G(e),
        i = P(n),
        r = k(n, i),
        a = !1;
    if (
        (t.forEach((e) => {
            let t = I.A.getChannel(e);
            if (null == t) return void delete r.mentionCounts[e];
            if (t.getGuildId() !== n) return;
            let i = T.Ay.getMentionCount(e);
            (null !== n && !a && T.Ay.hasUnread(t.id) && w(t, i, !0) && ((a = !0), (r.unreadChannelId = t.id)),
                i > 0 && w(t, i)
                    ? (r.mentionCounts[t.id] = { count: i, isMentionLowImportance: T.Ay.getIsMentionLowImportance(e) })
                    : delete r.mentionCounts[t.id]);
        }),
        (r.unreadByType[R.P.CHANNEL] = a),
        r.unreadByType[R.P.CHANNEL] !== i.unreadByType[R.P.CHANNEL] && !r.unreadByType[R.P.CHANNEL])
    ) {
        let e = I.A.getChannel(i.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && T.Ay.hasUnread(e.id) && w(e))) return W(n);
        (null != n && D.add(n), (r.unreadByType[R.P.CHANNEL] = !0));
    }
    return V(n, r, i);
}
function j(e, t) {
    if (null == e) return;
    let n = P(e),
        i = k(e, n);
    return ((i.unreadByType[R.P.GUILD_EVENT] = x(e, t)), V(e, i, n));
}
function W(e, t) {
    let n = G(e),
        i = v(n);
    if (null == n) {
        let e = I.A.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                r = T.Ay.getMentionCount(t);
            r > 0 &&
                w(n, r) &&
                ((i.highImportanceMentionCount += r),
                (i.mentionCounts[n.id] = { count: r, isMentionLowImportance: !1 }));
        }
    } else {
        let e = N.Ay.isMuted(n);
        if (e && !1 === t) return !1;
        let o = N.Ay.getMutedChannels(n),
            _ = N.Ay.getChannelOverrides(n),
            f = (0, d.WW)(n),
            h = (0, s.EV)(),
            m = { userCanSeeNSFW: h, guildIsNSFW: !h && (0, A.wh)(p.A.getGuild(n)) },
            S = I.A.getMutableBasicGuildChannelsForGuild(n);
        for (let t in S) {
            var r, a, l;
            let n = S[t],
                s = e || o.has(t) || (null != n.parent_id && o.has(n.parent_id)),
                d = i.unreadByType[R.P.CHANNEL],
                {
                    mentionCount: c,
                    unread: u,
                    isMentionLowImportance: A,
                } = T.Ay.getGuildChannelUnreadState(n, f, _, s, d, m),
                h = c > 0;
            if (!h && s) continue;
            let I = !d && (!s || h) && u;
            (I || h) &&
                ((r = n),
                (a = c),
                (l = f),
                !(((0, E.ay)(r.type) && 0 === a) || !g.A.canBasicChannel((0, E.pd)(r.type), r) || U(r, a, l)) &&
                    !("flags" in r && r.hasFlag(O.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                    (a > 0 || N.Ay.resolveUnreadSetting(r) === R.e.ALL_MESSAGES)) &&
                (I && ((i.unreadByType[R.P.CHANNEL] = !0), (i.unreadChannelId = t)),
                h &&
                    (A ? (i.lowImportanceMentionCount += c) : (i.highImportanceMentionCount += c),
                    (i.mentionCounts[n.id] = { count: c, isMentionLowImportance: A })));
        }
        let C = c.A.getActiveJoinedThreadsForGuild(n);
        for (let t in C)
            for (let n in C[t]) {
                !i.unreadByType[R.P.CHANNEL] &&
                    T.Ay.hasUnread(n) &&
                    !u.A.isMuted(n) &&
                    !e &&
                    ((i.unreadByType[R.P.CHANNEL] = !0), (i.unreadChannelId = n));
                let t = T.Ay.getMentionCount(n),
                    r = T.Ay.getIsMentionLowImportance(n);
                t > 0 &&
                    (r ? (i.lowImportanceMentionCount += t) : (i.highImportanceMentionCount += t),
                    (i.mentionCounts[n] = { count: t, isMentionLowImportance: r }));
            }
        !i.unreadByType[R.P.GUILD_EVENT] && x(n, R.P.GUILD_EVENT) && (i.unreadByType[R.P.GUILD_EVENT] = !0);
    }
    F(i);
    let o = P(n);
    return (
        (i.unread !== o.unread ||
            i.highImportanceMentionCount !== o.highImportanceMentionCount ||
            i.lowImportanceMentionCount !== o.lowImportanceMentionCount) &&
        ((y[n ?? L] = i), null != n && (i.unread ? D.add(n) : D.delete(n)), b++, M(n ?? L), B(i, o), !0)
    );
}
function Y(e) {
    let { guilds: t } = e;
    ((y = {}), (b = 0), (D = new Set()), W(null));
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && W(n.properties.id);
    }
}
function K(e) {
    let { guilds: t, readState: n } = e;
    ((y = {}), (b = 0), (D = new Set()), (i = C.default.getCurrentUser()?.nsfwAllowed));
    let r = n.entries.length < 500,
        a = new Set();
    for (let e of (r &&
        n.entries.forEach((e) => {
            null != e.mention_count &&
                e.mention_count > 0 &&
                (null == e.read_state_type || e.read_state_type === R.P.CHANNEL
                    ? a.add(I.A.getChannel(e.id)?.guild_id)
                    : a.add(e.id));
        }),
    W(null),
    t))
        W(e.id, r ? a.has(e.id) : void 0);
}
function $() {
    for (let e of ((y = {}), (D = new Set()), W(null), Object.values(p.A.getGuildIds()))) W(e);
}
function X(e) {
    let { guild: t } = e;
    return W(t.id);
}
function z(e) {
    let { guild: t } = e;
    return null != y[t.id] && (delete y[t.id], D.delete(t.id), b++, !0);
}
function q(e) {
    let {
        channel: { id: t, guild_id: n },
    } = e;
    return H(n, [t]);
}
function Q() {
    let e = I.A.getChannel(S.Ay.getChannelId());
    return null != e && H(e.getGuildId(), [e.id]);
}
function J(e) {
    let { user: t, guildId: n } = e;
    return t.id === h.default.getId() && W(n);
}
function Z(e) {
    let { channelId: t } = e,
        n = I.A.getChannel(t);
    return null != n && H(n.getGuildId(), [n.id]);
}
function ee(e) {
    let { channelId: t } = e,
        n = I.A.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = P(n.guild_id);
        if (
            ((n.isThread()
                ? !u.A.hasJoined(n.id) || u.A.isMuted(n.id)
                : N.Ay.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) ||
                e.unreadByType[R.P.CHANNEL]) &&
            0 === T.Ay.getMentionCount(t)
        )
            return !1;
    }
    return H(n.getGuildId(), [n.id]);
}
function et(e) {
    let { channelId: t, guildId: n } = e;
    return !(0, l.ai)(n) && null != t && H(n, [t]);
}
function en(e) {
    let { channel: t } = e;
    return H(t.getGuildId(), [t.id]);
}
function ei(e) {
    let { channels: t } = e;
    return a()(t)
        .groupBy((e) => e.getGuildId())
        .reduce(
            (e, t, n) =>
                H(
                    n,
                    t.map((e) => e.id),
                ) || e,
            !1,
        );
}
function er(e) {
    let { channels: t } = e;
    return a()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != I.A.getChannel(e))
        .groupBy((e) => I.A.getChannel(e)?.getGuildId())
        .reduce((e, t, n) => H(n, t) || e, !1);
}
function ea(e) {
    let { channel: t } = e;
    return H(t.getGuildId(), [t.id, t.parent_id]);
}
function es(e) {
    let { guildScheduledEvent: t } = e;
    return j(t.guild_id, R.P.GUILD_EVENT);
}
function el(e) {
    let { guildScheduledEvent: t } = e;
    return j(t.guild_id, R.P.GUILD_EVENT);
}
function eo(e) {
    let { id: t, ackType: n } = e;
    return j(t, n);
}
function ed(e) {
    let { id: t, guildId: n } = e;
    return H(n, [t]);
}
function ec(e) {
    return (0, _.k)(e) && H(e.guildId, [e.id]);
}
function eu(e) {
    let { threads: t, guildId: n } = e;
    return H(
        n,
        t.filter((e) => u.A.hasJoined(e.id)).map((e) => e.id),
    );
}
function e_(e) {
    return (
        e.channels.length > 0 &&
        H(
            e.guildId,
            e.channels.map((e) => e.id),
        )
    );
}
function eE(e) {
    let { guildId: t } = e;
    return W(t);
}
function eA(e) {
    let { guildId: t } = e;
    return W(t);
}
function ef(e) {
    let { guild: t } = e;
    return !(0, s.EV)() && W(t.id);
}
function eh() {
    let e = C.default.getCurrentUser()?.nsfwAllowed;
    return e !== i && ((i = e), $(), !0);
}
function eI(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id ?? L));
    return f.default.keys(y).reduce((e, t) => (n.has(t) && W(t)) || e, !1);
}
function ep() {
    for (let e in y) y[e].ncMentionCount = 0;
}
function em(e) {
    let { guildId: t } = e;
    return W(t);
}
function eg(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = I.A.getChannel(e);
        null != t && H(t.getGuildId(), [e]);
    });
}
class eT extends m.A {
    static displayName = "GuildReadStateStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: K,
            OVERLAY_INITIALIZE: Y,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: X,
            GUILD_DELETE: z,
            MESSAGE_CREATE: ee,
            MESSAGE_ACK: Z,
            BULK_ACK: er,
            UPDATE_CHANNEL_DIMENSIONS: Z,
            CHANNEL_SELECT: et,
            CHANNEL_DELETE: q,
            WINDOW_FOCUS: Q,
            GUILD_ACK: eE,
            GUILD_ROLE_CREATE: eA,
            GUILD_ROLE_DELETE: eA,
            GUILD_ROLE_UPDATE: eA,
            GUILD_UPDATE: ef,
            CURRENT_USER_UPDATE: eh,
            CHANNEL_CREATE: en,
            CHANNEL_UPDATES: ei,
            THREAD_CREATE: ea,
            THREAD_UPDATE: ea,
            THREAD_DELETE: ea,
            THREAD_LIST_SYNC: eu,
            THREAD_MEMBER_UPDATE: ed,
            THREAD_MEMBERS_UPDATE: ec,
            PASSIVE_UPDATE_V2: e_,
            GUILD_MEMBER_UPDATE: J,
            USER_GUILD_SETTINGS_FULL_UPDATE: eI,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: em,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: em,
            USER_GUILD_SETTINGS_GUILD_UPDATE: em,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: em,
            GUILD_FEATURE_ACK: eo,
            GUILD_SCHEDULED_EVENT_CREATE: es,
            GUILD_SCHEDULED_EVENT_UPDATE: es,
            GUILD_SCHEDULED_EVENT_DELETE: el,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: Z,
            LOAD_MESSAGES_SUCCESS: Z,
            CHANNEL_ACK: Z,
            CHANNEL_LOCAL_ACK: Z,
            NOTIFICATION_SETTINGS_UPDATE: $,
            RECOMPUTE_READ_STATES: $,
            VOICE_CHANNEL_SELECT: Z,
            ENABLE_AUTOMATIC_ACK: Z,
            RESORT_THREADS: Z,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: ep,
            TRY_ACK: Z,
            LOAD_RECENT_MENTIONS_SUCCESS: eg,
        });
    }
    initialize() {
        this.waitFor(I.A, p.A, S.Ay, T.Ay, g.A, h.default, C.default, N.Ay, c.A, u.A, o.Ay);
    }
    loadCache() {
        let e = this.readSnapshot(eT.LATEST_SNAPSHOT_VERSION);
        null != e && ((y = e.guilds), (D = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return { version: eT.LATEST_SNAPSHOT_VERSION, data: { guilds: y, unreadGuilds: Array.from(D) } };
    }
    hasAnyUnread() {
        return D.size > 0;
    }
    getStoreChangeSentinel() {
        return b;
    }
    getMutableUnreadGuilds() {
        return D;
    }
    getMutableGuildStates() {
        return y;
    }
    shouldCountChannelUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return w(e, t, !0);
    }
    hasUnread(e) {
        return D.has(e);
    }
    getMentionCount(e) {
        let t = P(e);
        return t.highImportanceMentionCount + t.lowImportanceMentionCount;
    }
    getIsMentionLowImportance(e) {
        return 0 === P(e).highImportanceMentionCount;
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = I.A.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (
                null != n &&
                (!n.isGuildVocal() || 0 !== T.Ay.getMentionCount(e)) &&
                g.A.can(n.accessPermissions, n) &&
                T.Ay.hasUnreadOrMentions(e)
            )
                return !0;
        }
        let n = c.A.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != I.A.getChannel(e)) {
                for (let t in n[e]) if (T.Ay.hasUnreadOrMentions(t)) return !0;
            }
        return !!T.Ay.hasUnreadOrMentions(e, R.P.GUILD_EVENT);
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in y) {
            let i = y[n];
            (!0 !== e || n !== L) && (t += i.highImportanceMentionCount);
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in y) {
            let i = y[n];
            (!0 !== e || n !== L) && (t += i.ncMentionCount);
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        let e = y[L];
        return e?.highImportanceMentionCount ?? 0;
    }
    getMentionCountForPrivateChannel(e) {
        return y[L]?.mentionCounts[e] ?? 0;
    }
    getHighImportanceMentionCountForChannel(e, t) {
        let n = y[e ?? L]?.mentionCounts[t];
        return null == n || n.isMentionLowImportance ? 0 : n.count;
    }
    getGuildChangeSentinel(e) {
        return P(e).sentinel;
    }
}
let eS = new eT();
