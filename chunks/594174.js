n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => v,
        default: () => eN,
        mergeUser: () => T,
        transformUser: () => S,
        users: () => g
    }),
    n(47120),
    n(789020),
    n(51350),
    n(653041),
    n(230036);
var r = n(392711),
    i = n(2572),
    o = n(864106),
    a = n(502087),
    s = n(168232),
    l = n(598077),
    c = n(630388),
    u = n(823379),
    d = n(314897),
    f = n(412788),
    p = n(981631),
    _ = n(308083),
    h = n(474936);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = {},
    E = 0,
    v = '47835198259242069';
function b(e, t, n) {
    let r = g[e];
    if (null == r) return !1;
    let i = r;
    (i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (g[r.id] = i);
    let o = r !== i;
    return o && E++, o;
}
function y(e, t) {
    let n = g[e];
    return !(null == n || (0, _.dM)(n.primaryGuild, t.primary_guild)) && (null == n.primaryGuild || null != t.primary_guild) && ((n.primaryGuild = (0, _.lt)(t.primary_guild)), (g[n.id] = n), E++, !0);
}
function O(e, t) {
    switch (!0) {
        case null == e.primaryGuild && null == t.primary_guild:
            break;
        case null != e.primaryGuild && null == t.primary_guild:
        case (0, _.dM)(e.primaryGuild, t.primary_guild):
            t.primary_guild = e.primaryGuild;
            break;
        default:
            t.primary_guild = (0, _.lt)(t.primary_guild);
    }
    return t;
}
function S(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, s.G)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let i = e.public_flags;
    null != i && ((e.publicFlags = i), delete e.public_flags);
    let a = e.purchased_flags;
    void 0 !== a && ((e.purchasedFlags = a), delete e.purchased_flags);
    let l = e.premium_usage_flags;
    void 0 !== l && ((e.premiumUsageFlags = l), delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
    let c = e.avatar_decoration_data;
    void 0 !== c && ((e.avatarDecorationData = (0, o.FG)(c)), delete e.avatar_decoration_data);
    let u = e.global_name;
    void 0 !== u && ((e.globalName = u), delete e.global_name);
    let d = e.primary_guild;
    return void 0 !== d && (e.primary_guild = (0, _.lt)(d)), e;
}
function I(e) {
    return e.id !== d.default.getId();
}
function T(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = g[e.id],
        i = void 0 !== e.id && e.id === d.default.getId();
    if (null == r) void 0 !== (t = (r = new l.Z(e)).premiumType) && i && (r.premiumType = A((0, s.QI)(r), r.premiumType));
    else if (n) {
        var o;
        let n = S(e);
        void 0 !== (t = null !== (o = n.premium_type) && void 0 !== o ? o : n.premiumType) && i && (0, s.VR)(n) && (n = N(n)), (n = O(r, n)), (r = r.merge(n));
    }
    (0, s.jX)((0, s.QI)(r), t, r.premiumType);
    let a = g[e.id] !== r;
    return (g[e.id] = r), a && E++, a;
}
function N(e) {
    var t;
    let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
        r = A((0, s.VR)(e), n);
    return void 0 !== e.premiumType ? (e.premiumType = r) : void 0 !== e.premium_type && (e.premium_type = r), e;
}
function A(e, t) {
    if (!e) return t;
    let n = a.Z.getPremiumTypeOverride(),
        r = a.Z.getPremiumTypeActual();
    return n === h.F_ ? r : n;
}
function C(e, t) {
    var n, r, i, o, a, s;
    if (
        (null != e.author && 'SENDING' !== e.state && I(e.author) && T(e.author, t),
        null === (n = e.mentions) ||
            void 0 === n ||
            n.forEach((e) => {
                I(e) && T(e, t);
            }),
        (null === (r = e.interaction) || void 0 === r ? void 0 : r.user) != null && I(null === (i = e.interaction) || void 0 === i ? void 0 : i.user) && T(e.interaction.user, t),
        null === (o = e.attachments) ||
            void 0 === o ||
            o.forEach((e) => {
                var n;
                null === (n = e.clip_participants) ||
                    void 0 === n ||
                    n.forEach((e) => {
                        I(e) && T(e, t);
                    });
            }),
        (null === (a = e.resolved) || void 0 === a ? void 0 : a.users) != null)
    )
        for (let n in e.resolved.users) {
            let r = e.resolved.users[n];
            I(r) && T(r, t);
        }
    (null === (s = e.interaction_metadata) || void 0 === s ? void 0 : s.user) != null && I(e.interaction_metadata.user) && T(e.interaction_metadata.user, t);
}
function R(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        T(t),
        n.forEach((e) => {
            T(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                b(t.user.id, e.id, t.avatar), y(t.user.id, t.user);
            });
        }),
        null != g[d.default.getId()] &&
            (g[v] = new l.Z({
                id: v,
                username: 'Wumpus',
                discriminator: '0',
                globalName: 'Wumpus',
                avatar: 'c1f86b313385cb97985f1b118851c28c'
            }));
}
function P(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            b(t.user.id, e.id, t.avatar), y(t.user.id, t.user);
        });
    }),
        null == n ||
            n.forEach((e) => {
                var t;
                null === (t = e.rawRecipients) ||
                    void 0 === t ||
                    t.forEach((e) => {
                        T(e);
                    });
            });
}
function w(e) {
    return !('incomplete' in e);
}
function D(e) {
    if (null != e.users) for (let t of e.users) !(t.id in g && w(t)) && (g[t.id] = new l.Z(t));
}
function x(e) {
    let { user: t } = e;
    t.id !== d.default.getId() && T(t);
}
function L(e) {
    let { user: t } = e;
    T(t);
}
function M(e) {
    let { user: t } = e;
    T(t);
}
function k(e) {
    let { messages: t } = e;
    return t.forEach((e) => C(e, !0)), !1;
}
function j(e) {
    let { mostRecentMessages: t } = e;
    return null == t || t.forEach((e) => C(e, !1)), !1;
}
function U(e) {
    let { messages: t } = e;
    return t.forEach((e) => k({ messages: e })), !1;
}
function G(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => C(e, !0)), null != n && n.forEach((e) => T(e.user, !0));
}
function B(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && C(t, !0), null != n && C(n, !0), null != r && null != r.user && T(r.user, !0);
    });
}
function Z(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && C(t, !0);
    });
}
function F(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: r } = e;
        if (null == t) return;
        T(t);
        let i = null == r ? void 0 : r.avatar;
        null != i && b(t.id, n, i);
    });
}
function V(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && T(e.other_user);
    });
}
function H(e) {
    let { item: t } = e;
    null != t.other_user && T(t.other_user);
}
function W(e) {
    let { message: t } = e;
    if ((C(t, !0), null != t.flags && c.yE(t.flags, p.iLy.URGENT))) {
        let e = g[d.default.getId()];
        return null != e && ((g[d.default.getId()] = e.set('flags', c.mB(e.flags, p.xW$.HAS_UNREAD_URGENT_MESSAGES, !0))), !0);
    }
    return !1;
}
function Y(e) {
    let {
        channel: { rawRecipients: t }
    } = e;
    return null != t && t.forEach((e) => T(e)), !1;
}
function K(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => T(e));
    return !1;
}
let z = ['username', 'avatar', 'global_name', 'discriminator', 'bot', 'primary_guild'];
function q(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = g[e.user.id];
            if (null == t) return !1;
            let n = z.reduce((n, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let o = t.set((0, r.camelCase)(i), e.user[i]);
                    (n = n || o !== t), (t = o);
                }
                return n;
            }, !1);
            return !!n && ((g[t.id] = t), n);
        })
        .some((e) => e);
}
function Q(e) {
    let { bans: t } = e;
    t.forEach((e) => T(e.user));
}
function X(e) {
    let { bans: t } = e;
    t.forEach((e) => T(e.user));
}
function J(e) {
    return T(e.user);
}
function $(e) {
    return !!e.isMember && T(e.user);
}
function ee(e) {
    let t = T(e.user);
    return b(e.user.id, e.guildId, e.avatar) || t;
}
function et(e) {
    let { ops: t } = e;
    for (let e of t)
        if ('INSERT' === e.op || 'UPDATE' === e.op) {
            var n;
            let t = null === (n = e.item.member) || void 0 === n ? void 0 : n.user;
            if (null == t) continue;
            y(t.id, t);
        }
    return !1;
}
function en(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = T(n.user);
                return b(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function er(e) {
    let t = !1;
    for (let n of e.members) T(n.user) && (t = !0), b(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function ei(e) {
    var t;
    let n = !1;
    for (let r of null !== (t = e.users) && void 0 !== t ? t : []) Object.hasOwn(g, r.id) || (n = T(r) || n);
    return n;
}
function eo(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && T(e.member.user) && (n = !0), null != e.presence && T(e.presence.user) && (n = !0);
        }),
        n
    );
}
function ea(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        null == t ||
            t.forEach((e) => {
                null != e.member && T(e.member.user) && (n = !0), null != e.presence && T(e.presence.user) && (n = !0);
            }),
        n
    );
}
function es(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: o, bot: a },
            avatar: s
        } = e;
        n !== d.default.getId() &&
            T({
                id: n,
                username: r,
                avatar: i,
                discriminator: o,
                bot: a
            }),
            b(n, t.id, s);
    });
}
function el(e) {
    return T(e.relationship.user);
}
function ec(e) {
    return T(e.gameRelationship.user);
}
function eu(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => T(t.user) || e, !1);
}
function ed(e) {
    return T(e.suggestion.suggested_user);
}
function ef(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => T(t.suggested_user) || e, !1);
}
function ep(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == g[e.id] && (g[e.id] = new l.Z(e));
    });
}
function e_(e) {
    let { giftCode: t } = e;
    return null != t.user && T(t.user);
}
function eh(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && T(t);
    });
}
function em(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = i || T(n)), null != r && (i = i || T(r)), i;
}
function eg(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => T(t) || e, !1);
}
function eE(e) {
    let { users: t } = e;
    return t.reduce((e, t) => T(t) || e, !1);
}
function ev(e) {
    let { users: t } = e;
    return t.reduce((e, t) => T(t) || e, !1);
}
function eb(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => T(t) || e, !1);
}
function ey(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => T(t) || e, !1);
}
function eO(e) {
    let { members: t } = e,
        n = d.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : T(t.member.user) || e), !1);
}
function eS(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && C(e.message, !0);
    }, !1);
}
function eI(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, i.Z)(t) && T(t.member.user)) || e, !1);
}
class eT extends f.Z {
    initialize() {
        this.waitFor(d.default, a.Z);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: eT.LATEST_SNAPSHOT_VERSION,
            data: { users: [e].filter(u.lm) }
        };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eT.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) g[e.id] = new l.Z(e);
        if (null != e.users) for (let t of e.users) !(t.id in g && w(t)) && (g[t.id] = new l.Z(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) {
                var n;
                null === (n = e.rawRecipients) || void 0 === n || n.forEach((e) => T(e, !1));
            }
    }
    getUserStoreVersion() {
        return E;
    }
    getUser(e) {
        if (null != e) return g[e];
    }
    getUsers() {
        return g;
    }
    forEach(e) {
        for (let t in g) if (!1 === e(g[t])) break;
    }
    findByTag(e, t) {
        for (let n in g) {
            let r = g[n];
            if ((null != t && r.username === e && r.discriminator === t) || (null == t && r.username === e && r.isPomelo())) return r;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [];
        for (let t in g) {
            let r = g[t];
            e(r) && n.push(r);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return g[d.default.getId()];
    }
    constructor() {
        super({
            CONNECTION_OPEN: R,
            CONNECTION_OPEN_SUPPLEMENTAL: P,
            UPDATE_CLIENT_PREMIUM_TYPE: M,
            OVERLAY_INITIALIZE: D,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: x,
            CURRENT_USER_UPDATE: L,
            PRESENCE_UPDATES: q,
            SEARCH_FINISH: U,
            MOD_VIEW_SEARCH_FINISH: U,
            LOAD_MESSAGES_SUCCESS: k,
            LOAD_MESSAGES_AROUND_SUCCESS: k,
            LOAD_PINNED_MESSAGES_SUCCESS: k,
            LOAD_RECENT_MENTIONS_SUCCESS: k,
            THREAD_LIST_SYNC: j,
            MESSAGE_CREATE: W,
            MESSAGE_UPDATE: W,
            GUILD_SETTINGS_LOADED_BANS: Q,
            GUILD_SETTINGS_LOADED_BANS_BATCH: X,
            GUILD_CREATE: es,
            GUILD_BAN_ADD: J,
            GUILD_BAN_REMOVE: J,
            CHANNEL_RECIPIENT_ADD: $,
            CHANNEL_RECIPIENT_REMOVE: $,
            GUILD_JOIN_REQUEST_CREATE: em,
            GUILD_JOIN_REQUEST_UPDATE: em,
            GUILD_MEMBER_ADD: ee,
            GUILD_MEMBER_UPDATE: ee,
            GUILD_MEMBERS_CHUNK_BATCH: en,
            GUILD_MEMBER_LIST_UPDATE: et,
            THREAD_MEMBER_LIST_UPDATE: eo,
            THREAD_MEMBERS_UPDATE: ea,
            CHANNEL_CREATE: Y,
            CHANNEL_UPDATES: K,
            RELATIONSHIP_ADD: el,
            GAME_RELATIONSHIP_ADD: ec,
            LOAD_RELATIONSHIPS_SUCCESS: eu,
            FRIEND_SUGGESTION_CREATE: ed,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: ef,
            AUDIT_LOG_FETCH_SUCCESS: ep,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: ep,
            GIFT_CODE_RESOLVE_SUCCESS: e_,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eh,
            LOAD_THREADS_SUCCESS: G,
            LOAD_ARCHIVED_THREADS_SUCCESS: G,
            LOAD_FORUM_POSTS: B,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: F,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: V,
            NOTIFICATION_CENTER_ITEM_CREATE: H,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: Z,
            PASSIVE_UPDATE_V2: er,
            LOCAL_MESSAGES_LOADED: ei,
            FAMILY_CENTER_INITIAL_LOAD: eg,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eE,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eb,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: ey,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: ev,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eO,
            LOAD_GRAVITY_HYDRATED: eS,
            EMBEDDED_ACTIVITY_UPDATE_V2: eI
        });
    }
}
m(eT, 'displayName', 'UserStore'), m(eT, 'LATEST_SNAPSHOT_VERSION', 1);
let eN = new eT();
