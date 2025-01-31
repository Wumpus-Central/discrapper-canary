n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => v,
        default: () => eN,
        mergeUser: () => A,
        transformUser: () => T,
        users: () => g
    }),
    n(47120),
    n(789020),
    n(724458),
    n(51350),
    n(653041);
var i = n(392711),
    r = n(2572),
    a = n(864106),
    s = n(502087),
    o = n(168232),
    l = n(598077),
    u = n(630388),
    c = n(823379),
    d = n(314897),
    f = n(412788),
    _ = n(981631),
    p = n(308083),
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
function y(e, t, n) {
    let i = g[e];
    if (null == i) return !1;
    let r = i;
    (r = null == n ? i.removeGuildAvatarHash(t) : i.addGuildAvatarHash(t, n)), (g[i.id] = r);
    let a = i !== r;
    return a && E++, a;
}
function I(e, t) {
    let n = g[e];
    return !(null == n || (0, p.dM)(n.primaryGuild, t.primary_guild)) && (null == n.primaryGuild || null != t.primary_guild) && ((n.primaryGuild = (0, p.lt)(t.primary_guild)), (g[n.id] = n), E++, !0);
}
function b(e, t) {
    switch (!0) {
        case null == e.primaryGuild && null == t.primary_guild:
            break;
        case null != e.primaryGuild && null == t.primary_guild:
        case (0, p.dM)(e.primaryGuild, t.primary_guild):
            t.primary_guild = e.primaryGuild;
            break;
        default:
            t.primary_guild = (0, p.lt)(t.primary_guild);
    }
    return t;
}
function T(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, o.G)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let i = e.nsfw_allowed;
    null != i && ((e.nsfwAllowed = i), delete e.nsfw_allowed);
    let r = e.public_flags;
    null != r && ((e.publicFlags = r), delete e.public_flags);
    let s = e.purchased_flags;
    void 0 !== s && ((e.purchasedFlags = s), delete e.purchased_flags);
    let l = e.premium_usage_flags;
    void 0 !== l && ((e.premiumUsageFlags = l), delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
    let u = e.avatar_decoration_data;
    void 0 !== u && ((e.avatarDecorationData = (0, a.FG)(u)), delete e.avatar_decoration_data);
    let c = e.global_name;
    void 0 !== c && ((e.globalName = c), delete e.global_name);
    let d = e.primary_guild;
    return void 0 !== d && (e.primary_guild = (0, p.lt)(d)), e;
}
function S(e) {
    return e.id !== d.default.getId();
}
function A(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = g[e.id],
        r = void 0 !== e.id && e.id === d.default.getId();
    if (null == i) void 0 !== (t = (i = new l.Z(e)).premiumType) && r && (i.premiumType = C((0, o.QI)(i), i.premiumType));
    else if (n) {
        var a;
        let n = T(e);
        void 0 !== (t = null !== (a = n.premium_type) && void 0 !== a ? a : n.premiumType) && r && (0, o.VR)(n) && (n = N(n)), (n = b(i, n)), (i = i.merge(n));
    }
    (0, o.jX)((0, o.QI)(i), t, i.premiumType);
    let s = g[e.id] !== i;
    return (g[e.id] = i), s && E++, s;
}
function N(e) {
    var t;
    let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
        i = C((0, o.VR)(e), n);
    return void 0 !== e.premiumType ? (e.premiumType = i) : void 0 !== e.premium_type && (e.premium_type = i), e;
}
function C(e, t) {
    if (!e) return t;
    let n = s.Z.getPremiumTypeOverride(),
        i = s.Z.getPremiumTypeActual();
    return n === h.F_ ? i : n;
}
function R(e, t) {
    var n, i, r, a, s, o;
    if (
        (null != e.author && 'SENDING' !== e.state && S(e.author) && A(e.author, t),
        null === (n = e.mentions) ||
            void 0 === n ||
            n.forEach((e) => {
                S(e) && A(e, t);
            }),
        (null === (i = e.interaction) || void 0 === i ? void 0 : i.user) != null && S(null === (r = e.interaction) || void 0 === r ? void 0 : r.user) && A(e.interaction.user, t),
        null === (a = e.attachments) ||
            void 0 === a ||
            a.forEach((e) => {
                var n;
                null === (n = e.clip_participants) ||
                    void 0 === n ||
                    n.forEach((e) => {
                        S(e) && A(e, t);
                    });
            }),
        (null === (s = e.resolved) || void 0 === s ? void 0 : s.users) != null)
    )
        for (let n in e.resolved.users) {
            let i = e.resolved.users[n];
            S(i) && A(i, t);
        }
    (null === (o = e.interaction_metadata) || void 0 === o ? void 0 : o.user) != null && S(e.interaction_metadata.user) && A(e.interaction_metadata.user, t);
}
function O(e) {
    let { user: t, users: n, guilds: i } = e;
    delete t.premium,
        delete t.banner_color,
        A(t),
        n.forEach((e) => {
            A(e);
        }),
        i.forEach((e) => {
            e.members.forEach((t) => {
                y(t.user.id, e.id, t.avatar), I(t.user.id, t.user);
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
function D(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            y(t.user.id, e.id, t.avatar), I(t.user.id, t.user);
        });
    }),
        null == n ||
            n.forEach((e) => {
                var t;
                null === (t = e.rawRecipients) ||
                    void 0 === t ||
                    t.forEach((e) => {
                        A(e);
                    });
            });
}
function x(e) {
    return !('incomplete' in e);
}
function L(e) {
    if (null != e.users) for (let t of e.users) !(t.id in g && x(t)) && (g[t.id] = new l.Z(t));
}
function P(e) {
    let { user: t } = e;
    t.id !== d.default.getId() && A(t);
}
function w(e) {
    let { user: t } = e;
    A(t);
}
function M(e) {
    let { user: t } = e;
    A(t);
}
function k(e) {
    let { messages: t } = e;
    return t.forEach((e) => R(e, !0)), !1;
}
function U(e) {
    let { mostRecentMessages: t } = e;
    return null == t || t.forEach((e) => R(e, !1)), !1;
}
function G(e) {
    let { messages: t } = e;
    return t.forEach((e) => k({ messages: e })), !1;
}
function B(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => R(e, !0)), null != n && n.forEach((e) => A(e.user, !0));
}
function Z(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: i } = e;
        null != t && R(t, !0), null != n && R(n, !0), null != i && null != i.user && A(i.user, !0);
    });
}
function F(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && R(t, !0);
    });
}
function V(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: i } = e;
        if (null == t) return;
        A(t);
        let r = null == i ? void 0 : i.avatar;
        null != r && y(t.id, n, r);
    });
}
function j(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && A(e.other_user);
    });
}
function H(e) {
    let { item: t } = e;
    null != t.other_user && A(t.other_user);
}
function Y(e) {
    let { message: t } = e;
    if ((R(t, !0), null != t.flags && u.yE(t.flags, _.iLy.URGENT))) {
        let e = g[d.default.getId()];
        return null != e && ((g[d.default.getId()] = e.set('flags', u.mB(e.flags, _.xW$.HAS_UNREAD_URGENT_MESSAGES, !0))), !0);
    }
    return !1;
}
function W(e) {
    let {
        channel: { rawRecipients: t }
    } = e;
    return null != t && t.forEach((e) => A(e)), !1;
}
function K(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => A(e));
    return !1;
}
let z = ['username', 'avatar', 'global_name', 'discriminator', 'bot', 'primary_guild'];
function q(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = g[e.user.id];
            if (null == t) return !1;
            let n = z.reduce((n, r) => {
                if (e.user.hasOwnProperty(r)) {
                    let a = t.set((0, i.camelCase)(r), e.user[r]);
                    (n = n || a !== t), (t = a);
                }
                return n;
            }, !1);
            return !!n && ((g[t.id] = t), n);
        })
        .some((e) => e);
}
function Q(e) {
    let { bans: t } = e;
    t.forEach((e) => A(e.user));
}
function X(e) {
    let { bans: t } = e;
    t.forEach((e) => A(e.user));
}
function J(e) {
    return A(e.user);
}
function $(e) {
    return !!e.isMember && A(e.user);
}
function ee(e) {
    let t = A(e.user);
    return y(e.user.id, e.guildId, e.avatar) || t;
}
function et(e) {
    let { ops: t } = e;
    for (let e of t)
        if ('INSERT' === e.op || 'UPDATE' === e.op) {
            var n;
            let t = null === (n = e.item.member) || void 0 === n ? void 0 : n.user;
            if (null == t) continue;
            I(t.id, t);
        }
    return !1;
}
function en(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let i = A(n.user);
                return y(n.user.id, e.guildId, n.avatar) || i || t;
            }, !1) || n;
    return n;
}
function ei(e) {
    let t = !1;
    for (let n of e.members) A(n.user) && (t = !0), y(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function er(e) {
    var t;
    let n = !1;
    for (let i of null !== (t = e.users) && void 0 !== t ? t : []) Object.hasOwn(g, i.id) || (n = A(i) || n);
    return n;
}
function ea(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && A(e.member.user) && (n = !0), null != e.presence && A(e.presence.user) && (n = !0);
        }),
        n
    );
}
function es(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        null == t ||
            t.forEach((e) => {
                null != e.member && A(e.member.user) && (n = !0), null != e.presence && A(e.presence.user) && (n = !0);
            }),
        n
    );
}
function eo(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: i, avatar: r, discriminator: a, bot: s },
            avatar: o
        } = e;
        n !== d.default.getId() &&
            A({
                id: n,
                username: i,
                avatar: r,
                discriminator: a,
                bot: s
            }),
            y(n, t.id, o);
    });
}
function el(e) {
    return A(e.relationship.user);
}
function eu(e) {
    return A(e.gameRelationship.user);
}
function ec(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => A(t.user) || e, !1);
}
function ed(e) {
    return A(e.suggestion.suggested_user);
}
function ef(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => A(t.suggested_user) || e, !1);
}
function e_(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == g[e.id] && (g[e.id] = new l.Z(e));
    });
}
function ep(e) {
    let { giftCode: t } = e;
    return null != t.user && A(t.user);
}
function eh(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && A(t);
    });
}
function em(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: i } = t,
        r = !1;
    return null != n && (r = r || A(n)), null != i && (r = r || A(i)), r;
}
function eg(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: i } = n;
    return [...t, ...i].reduce((e, t) => A(t) || e, !1);
}
function eE(e) {
    let { users: t } = e;
    return t.reduce((e, t) => A(t) || e, !1);
}
function ev(e) {
    let { users: t } = e;
    return t.reduce((e, t) => A(t) || e, !1);
}
function ey(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => A(t) || e, !1);
}
function eI(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => A(t) || e, !1);
}
function eb(e) {
    let { members: t } = e,
        n = d.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : A(t.member.user) || e), !1);
}
function eT(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && R(e.message, !0);
    }, !1);
}
function eS(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, r.Z)(t) && A(t.member.user)) || e, !1);
}
class eA extends f.Z {
    initialize() {
        this.waitFor(d.default, s.Z);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: eA.LATEST_SNAPSHOT_VERSION,
            data: { users: [e].filter(c.lm) }
        };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eA.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) g[e.id] = new l.Z(e);
        if (null != e.users) for (let t of e.users) !(t.id in g && x(t)) && (g[t.id] = new l.Z(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) {
                var n;
                null === (n = e.rawRecipients) || void 0 === n || n.forEach((e) => A(e, !1));
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
            let i = g[n];
            if ((null != t && i.username === e && i.discriminator === t) || (null == t && i.username === e && i.isPomelo())) return i;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [];
        for (let t in g) {
            let i = g[t];
            e(i) && n.push(i);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return g[d.default.getId()];
    }
    constructor() {
        super({
            CONNECTION_OPEN: O,
            CONNECTION_OPEN_SUPPLEMENTAL: D,
            UPDATE_CLIENT_PREMIUM_TYPE: M,
            OVERLAY_INITIALIZE: L,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: P,
            CURRENT_USER_UPDATE: w,
            PRESENCE_UPDATES: q,
            SEARCH_FINISH: G,
            MOD_VIEW_SEARCH_FINISH: G,
            LOAD_MESSAGES_SUCCESS: k,
            LOAD_MESSAGES_AROUND_SUCCESS: k,
            LOAD_PINNED_MESSAGES_SUCCESS: k,
            LOAD_RECENT_MENTIONS_SUCCESS: k,
            THREAD_LIST_SYNC: U,
            MESSAGE_CREATE: Y,
            MESSAGE_UPDATE: Y,
            GUILD_SETTINGS_LOADED_BANS: Q,
            GUILD_SETTINGS_LOADED_BANS_BATCH: X,
            GUILD_CREATE: eo,
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
            THREAD_MEMBER_LIST_UPDATE: ea,
            THREAD_MEMBERS_UPDATE: es,
            CHANNEL_CREATE: W,
            CHANNEL_UPDATES: K,
            RELATIONSHIP_ADD: el,
            GAME_RELATIONSHIP_ADD: eu,
            LOAD_RELATIONSHIPS_SUCCESS: ec,
            FRIEND_SUGGESTION_CREATE: ed,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: ef,
            AUDIT_LOG_FETCH_SUCCESS: e_,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: e_,
            GIFT_CODE_RESOLVE_SUCCESS: ep,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eh,
            LOAD_THREADS_SUCCESS: B,
            LOAD_ARCHIVED_THREADS_SUCCESS: B,
            LOAD_FORUM_POSTS: Z,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: V,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: j,
            NOTIFICATION_CENTER_ITEM_CREATE: H,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: F,
            PASSIVE_UPDATE_V2: ei,
            LOCAL_MESSAGES_LOADED: er,
            FAMILY_CENTER_INITIAL_LOAD: eg,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eE,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: ey,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eI,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: ev,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eb,
            LOAD_GRAVITY_HYDRATED: eT,
            EMBEDDED_ACTIVITY_UPDATE_V2: eS
        });
    }
}
m(eA, 'displayName', 'UserStore'), m(eA, 'LATEST_SNAPSHOT_VERSION', 1);
let eN = new eA();
