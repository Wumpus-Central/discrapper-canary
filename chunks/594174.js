n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => b,
        default: () => eA,
        mergeUser: () => N,
        transformUser: () => I,
        users: () => E
    }),
    n(47120),
    n(789020),
    n(51350),
    n(653041),
    n(230036);
var r = n(392711),
    i = n(2572),
    o = n(864106),
    a = n(579407),
    s = n(502087),
    l = n(168232),
    c = n(598077),
    u = n(630388),
    d = n(823379),
    f = n(314897),
    p = n(412788),
    _ = n(981631),
    h = n(308083),
    m = n(474936);
function g(e, t, n) {
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
let E = {},
    v = 0,
    b = '47835198259242069';
function y(e, t, n) {
    let r = E[e];
    if (null == r) return !1;
    let i = r;
    (i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (E[r.id] = i);
    let o = r !== i;
    return o && v++, o;
}
function O(e, t) {
    let n = E[e];
    return !(null == n || (0, h.dM)(n.primaryGuild, t.primary_guild)) && (null == n.primaryGuild || null != t.primary_guild) && ((n.primaryGuild = (0, h.lt)(t.primary_guild)), (E[n.id] = n), v++, !0);
}
function S(e, t) {
    switch (!0) {
        case null == e.primaryGuild && null == t.primary_guild:
            break;
        case null != e.primaryGuild && null == t.primary_guild:
        case (0, h.dM)(e.primaryGuild, t.primary_guild):
            t.primary_guild = e.primaryGuild;
            break;
        default:
            t.primary_guild = (0, h.lt)(t.primary_guild);
    }
    return t;
}
function I(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, l.G)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let i = e.public_flags;
    null != i && ((e.publicFlags = i), delete e.public_flags);
    let s = e.purchased_flags;
    void 0 !== s && ((e.purchasedFlags = s), delete e.purchased_flags);
    let c = e.premium_usage_flags;
    void 0 !== c && ((e.premiumUsageFlags = c), delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
    let u = e.avatar_decoration_data;
    void 0 !== u && ((e.avatarDecorationData = (0, o.FG)(u)), delete e.avatar_decoration_data);
    let d = e.collectibles;
    void 0 !== d && ((e.collectibles = (0, a.X)(d)), delete e.collectibles);
    let f = e.global_name;
    void 0 !== f && ((e.globalName = f), delete e.global_name);
    let p = e.primary_guild;
    return void 0 !== p && (e.primary_guild = (0, h.lt)(p)), e;
}
function T(e) {
    return e.id !== f.default.getId();
}
function N(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = E[e.id],
        i = void 0 !== e.id && e.id === f.default.getId();
    if (null == r) void 0 !== (t = (r = new c.Z(e)).premiumType) && i && (r.premiumType = C((0, l.QI)(r), r.premiumType));
    else if (n) {
        var o;
        let n = I(e);
        void 0 !== (t = null !== (o = n.premium_type) && void 0 !== o ? o : n.premiumType) && i && (0, l.VR)(n) && (n = A(n)), (n = S(r, n)), (r = r.merge(n));
    }
    (0, l.jX)((0, l.QI)(r), t, r.premiumType);
    let a = E[e.id] !== r;
    return (E[e.id] = r), a && v++, a;
}
function A(e) {
    var t;
    let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
        r = C((0, l.VR)(e), n);
    return void 0 !== e.premiumType ? (e.premiumType = r) : void 0 !== e.premium_type && (e.premium_type = r), e;
}
function C(e, t) {
    if (!e) return t;
    let n = s.Z.getPremiumTypeOverride(),
        r = s.Z.getPremiumTypeActual();
    return n === m.F_ ? r : n;
}
function R(e, t) {
    var n, r, i, o, a, s;
    if (
        (null != e.author && 'SENDING' !== e.state && T(e.author) && N(e.author, t),
        null === (n = e.mentions) ||
            void 0 === n ||
            n.forEach((e) => {
                T(e) && N(e, t);
            }),
        (null === (r = e.interaction) || void 0 === r ? void 0 : r.user) != null && T(null === (i = e.interaction) || void 0 === i ? void 0 : i.user) && N(e.interaction.user, t),
        null === (o = e.attachments) ||
            void 0 === o ||
            o.forEach((e) => {
                var n;
                null === (n = e.clip_participants) ||
                    void 0 === n ||
                    n.forEach((e) => {
                        T(e) && N(e, t);
                    });
            }),
        (null === (a = e.resolved) || void 0 === a ? void 0 : a.users) != null)
    )
        for (let n in e.resolved.users) {
            let r = e.resolved.users[n];
            T(r) && N(r, t);
        }
    (null === (s = e.interaction_metadata) || void 0 === s ? void 0 : s.user) != null && T(e.interaction_metadata.user) && N(e.interaction_metadata.user, t);
}
function P(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        N(t),
        n.forEach((e) => {
            N(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                y(t.user.id, e.id, t.avatar), O(t.user.id, t.user);
            });
        }),
        null != E[f.default.getId()] &&
            (E[b] = new c.Z({
                id: b,
                username: 'Wumpus',
                discriminator: '0',
                globalName: 'Wumpus',
                avatar: 'c1f86b313385cb97985f1b118851c28c'
            }));
}
function w(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            y(t.user.id, e.id, t.avatar), O(t.user.id, t.user);
        });
    }),
        null == n ||
            n.forEach((e) => {
                var t;
                null === (t = e.rawRecipients) ||
                    void 0 === t ||
                    t.forEach((e) => {
                        N(e);
                    });
            });
}
function D(e) {
    return !('incomplete' in e);
}
function x(e) {
    if (null != e.users) for (let t of e.users) !(t.id in E && D(t)) && (E[t.id] = new c.Z(t));
}
function L(e) {
    let { user: t } = e;
    t.id !== f.default.getId() && N(t);
}
function M(e) {
    let { user: t } = e;
    N(t);
}
function k(e) {
    let { user: t } = e;
    N(t);
}
function j(e) {
    let { messages: t } = e;
    return t.forEach((e) => R(e, !0)), !1;
}
function U(e) {
    let { mostRecentMessages: t } = e;
    return null == t || t.forEach((e) => R(e, !1)), !1;
}
function G(e) {
    let { messages: t } = e;
    return t.forEach((e) => j({ messages: e })), !1;
}
function B(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => R(e, !0)), null != n && n.forEach((e) => N(e.user, !0));
}
function Z(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && R(t, !0), null != n && R(n, !0), null != r && null != r.user && N(r.user, !0);
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
        let { user: t, member: r } = e;
        if (null == t) return;
        N(t);
        let i = null == r ? void 0 : r.avatar;
        null != i && y(t.id, n, i);
    });
}
function H(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && N(e.other_user);
    });
}
function W(e) {
    let { item: t } = e;
    null != t.other_user && N(t.other_user);
}
function Y(e) {
    let { message: t } = e;
    if ((R(t, !0), null != t.flags && u.yE(t.flags, _.iLy.URGENT))) {
        let e = E[f.default.getId()];
        return null != e && ((E[f.default.getId()] = e.set('flags', u.mB(e.flags, _.xW$.HAS_UNREAD_URGENT_MESSAGES, !0))), !0);
    }
    return !1;
}
function K(e) {
    let {
        channel: { rawRecipients: t }
    } = e;
    return null != t && t.forEach((e) => N(e)), !1;
}
function z(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => N(e));
    return !1;
}
let q = ['username', 'avatar', 'global_name', 'discriminator', 'bot', 'primary_guild'];
function Q(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = E[e.user.id];
            if (null == t) return !1;
            let n = q.reduce((n, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let o = t.set((0, r.camelCase)(i), e.user[i]);
                    (n = n || o !== t), (t = o);
                }
                return n;
            }, !1);
            return !!n && ((E[t.id] = t), n);
        })
        .some((e) => e);
}
function X(e) {
    let { bans: t } = e;
    t.forEach((e) => N(e.user));
}
function J(e) {
    let { bans: t } = e;
    t.forEach((e) => N(e.user));
}
function $(e) {
    return N(e.user);
}
function ee(e) {
    return !!e.isMember && N(e.user);
}
function et(e) {
    let t = N(e.user);
    return y(e.user.id, e.guildId, e.avatar) || t;
}
function en(e) {
    let { ops: t } = e;
    for (let e of t)
        if ('INSERT' === e.op || 'UPDATE' === e.op) {
            var n;
            let t = null === (n = e.item.member) || void 0 === n ? void 0 : n.user;
            if (null == t) continue;
            O(t.id, t);
        }
    return !1;
}
function er(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = N(n.user);
                return y(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function ei(e) {
    let t = !1;
    for (let n of e.members) N(n.user) && (t = !0), y(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function eo(e) {
    var t;
    let n = !1;
    for (let r of null !== (t = e.users) && void 0 !== t ? t : []) Object.hasOwn(E, r.id) || (n = N(r) || n);
    return n;
}
function ea(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && N(e.member.user) && (n = !0), null != e.presence && N(e.presence.user) && (n = !0);
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
                null != e.member && N(e.member.user) && (n = !0), null != e.presence && N(e.presence.user) && (n = !0);
            }),
        n
    );
}
function el(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: o, bot: a },
            avatar: s
        } = e;
        n !== f.default.getId() &&
            N({
                id: n,
                username: r,
                avatar: i,
                discriminator: o,
                bot: a
            }),
            y(n, t.id, s);
    });
}
function ec(e) {
    return N(e.relationship.user);
}
function eu(e) {
    return N(e.gameRelationship.user);
}
function ed(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => N(t.user) || e, !1);
}
function ef(e) {
    return N(e.suggestion.suggested_user);
}
function ep(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => N(t.suggested_user) || e, !1);
}
function e_(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == E[e.id] && (E[e.id] = new c.Z(e));
    });
}
function eh(e) {
    let { giftCode: t } = e;
    return null != t.user && N(t.user);
}
function em(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && N(t);
    });
}
function eg(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = i || N(n)), null != r && (i = i || N(r)), i;
}
function eE(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => N(t) || e, !1);
}
function ev(e) {
    let { users: t } = e;
    return t.reduce((e, t) => N(t) || e, !1);
}
function eb(e) {
    let { users: t } = e;
    return t.reduce((e, t) => N(t) || e, !1);
}
function ey(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => N(t) || e, !1);
}
function eO(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => N(t) || e, !1);
}
function eS(e) {
    let { members: t } = e,
        n = f.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : N(t.member.user) || e), !1);
}
function eI(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && R(e.message, !0);
    }, !1);
}
function eT(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, i.Z)(t) && N(t.member.user)) || e, !1);
}
class eN extends p.Z {
    initialize() {
        this.waitFor(f.default, s.Z);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: eN.LATEST_SNAPSHOT_VERSION,
            data: { users: [e].filter(d.lm) }
        };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eN.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) E[e.id] = new c.Z(e);
        if (null != e.users) for (let t of e.users) !(t.id in E && D(t)) && (E[t.id] = new c.Z(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) {
                var n;
                null === (n = e.rawRecipients) || void 0 === n || n.forEach((e) => N(e, !1));
            }
    }
    getUserStoreVersion() {
        return v;
    }
    getUser(e) {
        if (null != e) return E[e];
    }
    getUsers() {
        return E;
    }
    forEach(e) {
        for (let t in E) if (!1 === e(E[t])) break;
    }
    findByTag(e, t) {
        for (let n in E) {
            let r = E[n];
            if ((null != t && r.username === e && r.discriminator === t) || (null == t && r.username === e && r.isPomelo())) return r;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [];
        for (let t in E) {
            let r = E[t];
            e(r) && n.push(r);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return E[f.default.getId()];
    }
    constructor() {
        super({
            CONNECTION_OPEN: P,
            CONNECTION_OPEN_SUPPLEMENTAL: w,
            UPDATE_CLIENT_PREMIUM_TYPE: k,
            OVERLAY_INITIALIZE: x,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: L,
            CURRENT_USER_UPDATE: M,
            PRESENCE_UPDATES: Q,
            SEARCH_FINISH: G,
            MOD_VIEW_SEARCH_FINISH: G,
            LOAD_MESSAGES_SUCCESS: j,
            LOAD_MESSAGES_AROUND_SUCCESS: j,
            LOAD_PINNED_MESSAGES_SUCCESS: j,
            LOAD_RECENT_MENTIONS_SUCCESS: j,
            THREAD_LIST_SYNC: U,
            MESSAGE_CREATE: Y,
            MESSAGE_UPDATE: Y,
            GUILD_SETTINGS_LOADED_BANS: X,
            GUILD_SETTINGS_LOADED_BANS_BATCH: J,
            GUILD_CREATE: el,
            GUILD_BAN_ADD: $,
            GUILD_BAN_REMOVE: $,
            CHANNEL_RECIPIENT_ADD: ee,
            CHANNEL_RECIPIENT_REMOVE: ee,
            GUILD_JOIN_REQUEST_CREATE: eg,
            GUILD_JOIN_REQUEST_UPDATE: eg,
            GUILD_MEMBER_ADD: et,
            GUILD_MEMBER_UPDATE: et,
            GUILD_MEMBERS_CHUNK_BATCH: er,
            GUILD_MEMBER_LIST_UPDATE: en,
            THREAD_MEMBER_LIST_UPDATE: ea,
            THREAD_MEMBERS_UPDATE: es,
            CHANNEL_CREATE: K,
            CHANNEL_UPDATES: z,
            RELATIONSHIP_ADD: ec,
            GAME_RELATIONSHIP_ADD: eu,
            LOAD_RELATIONSHIPS_SUCCESS: ed,
            FRIEND_SUGGESTION_CREATE: ef,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: ep,
            AUDIT_LOG_FETCH_SUCCESS: e_,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: e_,
            GIFT_CODE_RESOLVE_SUCCESS: eh,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: em,
            LOAD_THREADS_SUCCESS: B,
            LOAD_ARCHIVED_THREADS_SUCCESS: B,
            LOAD_FORUM_POSTS: Z,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: V,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: H,
            NOTIFICATION_CENTER_ITEM_CREATE: W,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: F,
            PASSIVE_UPDATE_V2: ei,
            LOCAL_MESSAGES_LOADED: eo,
            FAMILY_CENTER_INITIAL_LOAD: eE,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: ev,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: ey,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eO,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eb,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eS,
            LOAD_GRAVITY_HYDRATED: eI,
            EMBEDDED_ACTIVITY_UPDATE_V2: eT
        });
    }
}
g(eN, 'displayName', 'UserStore'), g(eN, 'LATEST_SNAPSHOT_VERSION', 1);
let eA = new eN();
