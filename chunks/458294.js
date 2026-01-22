n.r(t),
    n.d(t, {
        default: () => eO,
    }),
    n(896048),
    n(938796);
var r = n(735438),
    i = n.n(r);
n(252431);
var a = n(395504),
    s = n(187508),
    o = n(863005),
    l = n(152007),
    c = n(882733),
    u = n(95701),
    d = n(661191),
    f = n(961350),
    p = n(734057),
    _ = n(71393),
    h = n(536802),
    m = n(576705),
    g = n(222823),
    E = n(309010),
    b = n(543465),
    y = n(287809),
    O = n(652215),
    A = n(746080),
    v = n(790782);

function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
let T = O.eGj,
    C = {},
    N = new Set(),
    R = 0;

function w(e) {
    var t;
    let n = C[null != e ? e : T];
    return {
        unread: !1,
        unreadByType: {},
        unreadChannelId: null,
        lowImportanceMentionCount: 0,
        highImportanceMentionCount: 0,
        mentionCounts: {},
        ncMentionCount: 0,
        sentinel: null != (t = null == n ? void 0 : n.sentinel) ? t : 0,
    };
}

function P(e) {
    var t;
    return (C[null != e ? e : T] = null != (t = C[null != e ? e : T]) ? t : w(e));
}

function D(e) {
    let t = P(e);
    t.sentinel++, R++;
}

function x(e, t, n) {
    return null != e.guild_id && n && !((0, u.fT)(e.type) || b.Ay.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}

function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        !(
            null == e ||
            (e.isGuildVocal() && 0 === t) ||
            e.hasFlag(A.lx.IS_GUILD_RESOURCE_CHANNEL) ||
            ((0 === t || n) &&
                (e.isThread()
                    ? l.A.isMuted(e.id) || b.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id)
                    : b.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) ||
            (!e.isPrivate() && (x(e, t, (0, a.WW)(e.guild_id)) || !m.A.can(e.accessPermissions, e)))
        ) &&
        (t > 0 || b.Ay.resolveUnreadSetting(e) === v.e.ALL_MESSAGES)
    );
}

function j(e) {
    return "flags" in e;
}

function M(e, t, n) {
    return (
        !(
            ((0, u.ay)(e.type) && 0 === t) ||
            !m.A.canBasicChannel((0, u.pd)(e.type), e) ||
            x(e, t, n) ||
            (j(e) && e.hasFlag(A.lx.IS_GUILD_RESOURCE_CHANNEL))
        ) &&
        (t > 0 || b.Ay.resolveUnreadSetting(e) === v.e.ALL_MESSAGES)
    );
}

function k(e) {
    switch (e) {
        case T:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}

function U(e, t) {
    let n = g.Ay.hasUnread(e, t);
    return t !== v.P.GUILD_EVENT ? n : !(b.Ay.isMuted(e) || b.Ay.isMuteScheduledEventsEnabled(e)) && n;
}

function G(e, t) {
    let n = w(e);
    return (n.mentionCounts = I({}, t.mentionCounts)), (n.unreadByType = I({}, t.unreadByType)), n;
}

function V(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}

function F(e, t) {}

function B(e, t, n) {
    return (
        V(t),
        (t.lowImportanceMentionCount = 0),
        (t.highImportanceMentionCount = 0),
        d.default.forEach(t.mentionCounts, (e) => {
            let { count: n, isMentionLowImportance: r } = e;
            r ? (t.lowImportanceMentionCount += n) : (t.highImportanceMentionCount += n);
        }),
        (t.unread !== n.unread ||
            t.lowImportanceMentionCount !== n.lowImportanceMentionCount ||
            t.highImportanceMentionCount !== n.highImportanceMentionCount) &&
            ((C[null != e ? e : T] = t),
            null != e && (t.unread ? N.add(e) : N.delete(e)),
            R++,
            D(null != e ? e : T),
            F(t, n),
            !0)
    );
}

function H(e, t) {
    let n = k(e),
        r = P(n),
        i = G(n, r),
        a = !1;
    if (
        (t.forEach((e) => {
            let t = p.A.getChannel(e);
            if (null == t) return void delete i.mentionCounts[e];
            if (t.getGuildId() !== n) return;
            let r = g.Ay.getMentionCount(e);
            null !== n && !a && g.Ay.hasUnread(t.id) && L(t, r, !0) && ((a = !0), (i.unreadChannelId = t.id)),
                r > 0 && L(t, r)
                    ? (i.mentionCounts[t.id] = {
                          count: r,
                          isMentionLowImportance: g.Ay.getIsMentionLowImportance(e),
                      })
                    : delete i.mentionCounts[t.id];
        }),
        (i.unreadByType[v.P.CHANNEL] = a),
        i.unreadByType[v.P.CHANNEL] !== r.unreadByType[v.P.CHANNEL] && !i.unreadByType[v.P.CHANNEL])
    ) {
        let e = p.A.getChannel(r.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && g.Ay.hasUnread(e.id) && L(e))) return W(n);
        null != n && N.add(n), (i.unreadByType[v.P.CHANNEL] = !0);
    }
    return B(n, i, r);
}

function Y(e, t) {
    if (null == e) return;
    let n = P(e),
        r = G(e, n);
    return (r.unreadByType[v.P.GUILD_EVENT] = U(e, t)), B(e, r, n);
}

function W(e, t) {
    let n = k(e),
        r = w(n);
    if (null == n) {
        let e = p.A.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                i = g.Ay.getMentionCount(t);
            i > 0 &&
                L(n, i) &&
                ((r.highImportanceMentionCount += i),
                (r.mentionCounts[n.id] = {
                    count: i,
                    isMentionLowImportance: !1,
                }));
        }
    } else {
        let e = b.Ay.isMuted(n);
        if (e && !1 === t) return !1;
        let i = b.Ay.getMutedChannels(n),
            s = b.Ay.getChannelOverrides(n),
            c = (0, a.WW)(n),
            u = p.A.getMutableBasicGuildChannelsForGuild(n);
        for (let t in u) {
            let n = u[t],
                a = e || i.has(t) || (null != n.parent_id && i.has(n.parent_id)),
                o = r.unreadByType[v.P.CHANNEL],
                {
                    mentionCount: l,
                    unread: d,
                    isMentionLowImportance: f,
                } = g.Ay.getGuildChannelUnreadState(n, c, s, a, o),
                p = l > 0;
            if (!p && a) continue;
            let _ = !o && (!a || p) && d;
            (_ || p) &&
                M(n, l, c) &&
                (_ && ((r.unreadByType[v.P.CHANNEL] = !0), (r.unreadChannelId = t)),
                p &&
                    (f ? (r.lowImportanceMentionCount += l) : (r.highImportanceMentionCount += l),
                    (r.mentionCounts[n.id] = {
                        count: l,
                        isMentionLowImportance: f,
                    })));
        }
        let d = o.A.getActiveJoinedThreadsForGuild(n);
        for (let t in d)
            for (let n in d[t]) {
                !r.unreadByType[v.P.CHANNEL] &&
                    g.Ay.hasUnread(n) &&
                    !l.A.isMuted(n) &&
                    !e &&
                    ((r.unreadByType[v.P.CHANNEL] = !0), (r.unreadChannelId = n));
                let t = g.Ay.getMentionCount(n),
                    i = g.Ay.getIsMentionLowImportance(n);
                t > 0 &&
                    (i ? (r.lowImportanceMentionCount += t) : (r.highImportanceMentionCount += t),
                    (r.mentionCounts[n] = {
                        count: t,
                        isMentionLowImportance: i,
                    }));
            }
        !r.unreadByType[v.P.GUILD_EVENT] && U(n, v.P.GUILD_EVENT) && (r.unreadByType[v.P.GUILD_EVENT] = !0);
    }
    V(r);
    let i = P(n);
    return (
        (r.unread !== i.unread ||
            r.highImportanceMentionCount !== i.highImportanceMentionCount ||
            r.lowImportanceMentionCount !== i.lowImportanceMentionCount) &&
        ((C[null != n ? n : T] = r),
        null != n && (r.unread ? N.add(n) : N.delete(n)),
        R++,
        D(null != n ? n : T),
        F(r, i),
        !0)
    );
}

function K(e) {
    let { guilds: t } = e;
    (C = {}), (R = 0), (N = new Set()), W(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && W(n.properties.id);
    }
}

function z(e) {
    let { guilds: t, readState: n } = e;
    (C = {}), (R = 0), (N = new Set());
    let r = n.entries.length < 500,
        i = new Set();
    for (let e of (r &&
        n.entries.forEach((e) => {
            if (null != e.mention_count && e.mention_count > 0)
                if (null == e.read_state_type || e.read_state_type === v.P.CHANNEL) {
                    var t;
                    i.add(null == (t = p.A.getChannel(e.id)) ? void 0 : t.guild_id);
                } else i.add(e.id);
        }),
    W(null),
    t))
        W(e.id, r ? i.has(e.id) : void 0);
}

function q() {
    for (let e of ((C = {}), (N = new Set()), W(null), Object.values(_.A.getGuildIds()))) W(e);
}

function X(e) {
    let { guild: t } = e;
    return W(t.id);
}

function Z(e) {
    let { guild: t } = e;
    return null != C[t.id] && (delete C[t.id], N.delete(t.id), R++, !0);
}

function Q(e) {
    let {
        channel: { id: t, guild_id: n },
    } = e;
    return H(n, [t]);
}

function $() {
    let e = p.A.getChannel(E.A.getChannelId());
    return null != e && H(e.getGuildId(), [e.id]);
}

function J(e) {
    let { user: t, guildId: n } = e;
    return t.id === f.default.getId() && W(n);
}

function ee(e) {
    let { channelId: t } = e,
        n = p.A.getChannel(t);
    return null != n && H(n.getGuildId(), [n.id]);
}

function et(e) {
    let { channelId: t } = e,
        n = p.A.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = P(n.guild_id);
        if (
            ((n.isThread()
                ? !l.A.hasJoined(n.id) || l.A.isMuted(n.id)
                : b.Ay.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) ||
                e.unreadByType[v.P.CHANNEL]) &&
            0 === g.Ay.getMentionCount(t)
        )
            return !1;
    }
    return H(n.getGuildId(), [n.id]);
}

function en(e) {
    let { channelId: t, guildId: n } = e;
    return n !== O.YYv && null != t && H(n, [t]);
}

function er(e) {
    let { channel: t } = e;
    return H(t.getGuildId(), [t.id]);
}

function ei(e) {
    let { channels: t } = e;
    return i()(t)
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

function ea(e) {
    let { channels: t } = e;
    return i()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != p.A.getChannel(e))
        .groupBy((e) => {
            var t;
            return null == (t = p.A.getChannel(e)) ? void 0 : t.getGuildId();
        })
        .reduce((e, t, n) => H(n, t) || e, !1);
}

function es(e) {
    let { channel: t } = e;
    return H(t.getGuildId(), [t.id, t.parent_id]);
}

function eo(e) {
    let { guildScheduledEvent: t } = e;
    return Y(t.guild_id, v.P.GUILD_EVENT);
}

function el(e) {
    let { guildScheduledEvent: t } = e;
    return Y(t.guild_id, v.P.GUILD_EVENT);
}

function ec(e) {
    let { id: t, ackType: n } = e;
    return Y(t, n);
}

function eu(e) {
    let { id: t, guildId: n } = e;
    return H(n, [t]);
}

function ed(e) {
    return (0, c.k)(e) && H(e.guildId, [e.id]);
}

function ef(e) {
    let { threads: t, guildId: n } = e;
    return H(
        n,
        t.filter((e) => l.A.hasJoined(e.id)).map((e) => e.id),
    );
}

function ep(e) {
    return (
        e.channels.length > 0 &&
        H(
            e.guildId,
            e.channels.map((e) => e.id),
        )
    );
}

function e_(e) {
    let { guildId: t } = e;
    return W(t);
}

function eh(e) {
    let { guildId: t } = e;
    return W(t);
}

function em(e) {
    let { userGuildSettings: t } = e,
        n = new Set(
            t.map((e) => {
                var t;
                return null != (t = e.guild_id) ? t : T;
            }),
        );
    return d.default.keys(C).reduce((e, t) => (n.has(t) && W(t)) || e, !1);
}

function eg() {
    for (let e in C) C[e].ncMentionCount = 0;
}

function eE(e) {
    let { guildId: t } = e;
    return W(t);
}

function eb(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = p.A.getChannel(e);
        null != t && H(t.getGuildId(), [e]);
    });
}
class ey extends h.A {
    initialize() {
        this.waitFor(p.A, E.A, g.Ay, m.A, f.default, y.default, b.Ay, o.A, l.A, s.Ay);
    }
    loadCache() {
        let e = this.readSnapshot(ey.LATEST_SNAPSHOT_VERSION);
        null != e && ((C = e.guilds), (N = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return {
            version: ey.LATEST_SNAPSHOT_VERSION,
            data: {
                guilds: C,
                unreadGuilds: Array.from(N),
            },
        };
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
        return C;
    }
    hasUnread(e) {
        return N.has(e);
    }
    getMentionCount(e) {
        let t = P(e);
        return t.highImportanceMentionCount + t.lowImportanceMentionCount;
    }
    getIsMentionLowImportance(e) {
        return 0 === P(e).highImportanceMentionCount;
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = p.A.getMutableGuildChannelsForGuild(e);
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
            if (null != p.A.getChannel(e)) {
                for (let t in n[e]) if (g.Ay.hasUnreadOrMentions(t)) return !0;
            }
        return !!g.Ay.hasUnreadOrMentions(e, v.P.GUILD_EVENT);
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in C) {
            let r = C[n];
            (!0 !== e || n !== T) && (t += r.highImportanceMentionCount);
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in C) {
            let r = C[n];
            (!0 !== e || n !== T) && (t += r.ncMentionCount);
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        var e;
        let t = C[T];
        return null != (e = null == t ? void 0 : t.highImportanceMentionCount) ? e : 0;
    }
    getMentionCountForPrivateChannel(e) {
        var t, n;
        return null != (t = null == (n = C[T]) ? void 0 : n.mentionCounts[e]) ? t : 0;
    }
    getGuildChangeSentinel(e) {
        return P(e).sentinel;
    }
    constructor() {
        super({
            CONNECTION_OPEN: z,
            OVERLAY_INITIALIZE: K,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: X,
            GUILD_DELETE: Z,
            MESSAGE_CREATE: et,
            MESSAGE_ACK: ee,
            BULK_ACK: ea,
            UPDATE_CHANNEL_DIMENSIONS: ee,
            CHANNEL_SELECT: en,
            CHANNEL_DELETE: Q,
            WINDOW_FOCUS: $,
            GUILD_ACK: e_,
            GUILD_ROLE_CREATE: eh,
            GUILD_ROLE_DELETE: eh,
            GUILD_ROLE_UPDATE: eh,
            CHANNEL_CREATE: er,
            CHANNEL_UPDATES: ei,
            THREAD_CREATE: es,
            THREAD_UPDATE: es,
            THREAD_DELETE: es,
            THREAD_LIST_SYNC: ef,
            THREAD_MEMBER_UPDATE: eu,
            THREAD_MEMBERS_UPDATE: ed,
            PASSIVE_UPDATE_V2: ep,
            GUILD_MEMBER_UPDATE: J,
            USER_GUILD_SETTINGS_FULL_UPDATE: em,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: eE,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eE,
            USER_GUILD_SETTINGS_GUILD_UPDATE: eE,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eE,
            GUILD_FEATURE_ACK: ec,
            GUILD_SCHEDULED_EVENT_CREATE: eo,
            GUILD_SCHEDULED_EVENT_UPDATE: eo,
            GUILD_SCHEDULED_EVENT_DELETE: el,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: ee,
            LOAD_MESSAGES_SUCCESS: ee,
            CHANNEL_ACK: ee,
            CHANNEL_LOCAL_ACK: ee,
            NOTIFICATION_SETTINGS_UPDATE: q,
            RECOMPUTE_READ_STATES: q,
            VOICE_CHANNEL_SELECT: ee,
            ENABLE_AUTOMATIC_ACK: ee,
            RESORT_THREADS: ee,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eg,
            TRY_ACK: ee,
            LOAD_RECENT_MENTIONS_SUCCESS: eb,
        });
    }
}
S(ey, "displayName", "GuildReadStateStore"), S(ey, "LATEST_SNAPSHOT_VERSION", 1);
let eO = new ey();
