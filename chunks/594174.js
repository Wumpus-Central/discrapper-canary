r.r(n),
    r.d(n, {
        ASSISTANT_WUMPUS_VOICE_USER: function () {
            return A;
        },
        mergeUser: function () {
            return L;
        },
        transformUser: function () {
            return O;
        },
        users: function () {
            return y;
        }
    });
var i = r(47120);
var a = r(789020);
var s = r(724458);
var o = r(51350);
var l = r(653041);
var u = r(392711);
var c = r(2572),
    d = r(864106),
    f = r(502087),
    _ = r(168232),
    h = r(598077),
    p = r(630388),
    m = r(823379),
    g = r(314897),
    E = r(412788),
    v = r(981631),
    I = r(308083),
    T = r(474936);
function b(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let y = {},
    S = 0,
    A = '47835198259242069';
function N(e, n, r) {
    let i = y[e];
    if (null == i) return !1;
    let a = i;
    (a = null == r ? i.removeGuildAvatarHash(n) : i.addGuildAvatarHash(n, r)), (y[i.id] = a);
    let s = i !== a;
    return s && S++, s;
}
function C(e, n) {
    let r = y[e];
    return !(null == r || (0, I.dM)(r.primaryGuild, n.primary_guild)) && (null == r.primaryGuild || null != n.primary_guild) && ((r.primaryGuild = (0, I.lt)(n.primary_guild)), (y[r.id] = r), S++, !0);
}
function R(e, n) {
    switch (!0) {
        case null == e.primaryGuild && null == n.primary_guild:
            break;
        case null != e.primaryGuild && null == n.primary_guild:
        case (0, I.dM)(e.primaryGuild, n.primary_guild):
            n.primary_guild = e.primaryGuild;
            break;
        default:
            n.primary_guild = (0, I.lt)(n.primary_guild);
    }
    return n;
}
function O(e) {
    let n = e.mfa_enabled;
    null != n && ((e.mfaEnabled = n), delete e.mfa_enabled);
    let r = (0, _.G)(e.premium_type);
    void 0 !== r && ((e.premiumType = r), delete e.premium_type);
    let i = e.nsfw_allowed;
    null != i && ((e.nsfwAllowed = i), delete e.nsfw_allowed);
    let a = e.public_flags;
    null != a && ((e.publicFlags = a), delete e.public_flags);
    let s = e.purchased_flags;
    void 0 !== s && ((e.purchasedFlags = s), delete e.purchased_flags);
    let o = e.premium_usage_flags;
    void 0 !== o && ((e.premiumUsageFlags = o), delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
    let l = e.avatar_decoration_data;
    void 0 !== l && ((e.avatarDecorationData = (0, d.FG)(l)), delete e.avatar_decoration_data);
    let u = e.global_name;
    void 0 !== u && ((e.globalName = u), delete e.global_name);
    let c = e.primary_guild;
    return void 0 !== c && (e.primary_guild = (0, I.lt)(c)), e;
}
function D(e) {
    return e.id !== g.default.getId();
}
function L(e) {
    let n,
        r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = y[e.id],
        a = void 0 !== e.id && e.id === g.default.getId();
    if (null == i) void 0 !== (n = (i = new h.Z(e)).premiumType) && a && (i.premiumType = w((0, _.QI)(i), i.premiumType));
    else if (r) {
        var s;
        let r = O(e);
        void 0 !== (n = null !== (s = r.premium_type) && void 0 !== s ? s : r.premiumType) && a && (0, _.VR)(r) && (r = x(r)), (r = R(i, r)), (i = i.merge(r));
    }
    (0, _.jX)((0, _.QI)(i), n, i.premiumType);
    let o = y[e.id] !== i;
    return (y[e.id] = i), o && S++, o;
}
function x(e) {
    var n;
    let r = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType,
        i = w((0, _.VR)(e), r);
    return void 0 !== e.premiumType ? (e.premiumType = i) : void 0 !== e.premium_type && (e.premium_type = i), e;
}
function w(e, n) {
    if (!e) return n;
    let r = f.Z.getPremiumTypeOverride(),
        i = f.Z.getPremiumTypeActual();
    return r === T.F_ ? i : r;
}
function P(e, n) {
    var r, i, a, s, o, l;
    if (
        (null != e.author && 'SENDING' !== e.state && D(e.author) && L(e.author, n),
        null === (r = e.mentions) ||
            void 0 === r ||
            r.forEach((e) => {
                D(e) && L(e, n);
            }),
        (null === (i = e.interaction) || void 0 === i ? void 0 : i.user) != null && D(null === (a = e.interaction) || void 0 === a ? void 0 : a.user) && L(e.interaction.user, n),
        null === (s = e.attachments) ||
            void 0 === s ||
            s.forEach((e) => {
                var r;
                null === (r = e.clip_participants) ||
                    void 0 === r ||
                    r.forEach((e) => {
                        D(e) && L(e, n);
                    });
            }),
        (null === (o = e.resolved) || void 0 === o ? void 0 : o.users) != null)
    )
        for (let r in e.resolved.users) {
            let i = e.resolved.users[r];
            D(i) && L(i, n);
        }
    (null === (l = e.interaction_metadata) || void 0 === l ? void 0 : l.user) != null && D(e.interaction_metadata.user) && L(e.interaction_metadata.user, n);
}
function M(e) {
    let { user: n, users: r, guilds: i } = e;
    delete n.premium,
        delete n.banner_color,
        L(n),
        r.forEach((e) => {
            L(e);
        }),
        i.forEach((e) => {
            e.members.forEach((n) => {
                N(n.user.id, e.id, n.avatar), C(n.user.id, n.user);
            });
        }),
        null != y[g.default.getId()] &&
            (y[A] = new h.Z({
                id: A,
                username: 'Wumpus',
                discriminator: '0',
                globalName: 'Wumpus',
                avatar: 'c1f86b313385cb97985f1b118851c28c'
            }));
}
function k(e) {
    let { guilds: n, lazyPrivateChannels: r } = e;
    n.forEach((e) => {
        e.members.forEach((n) => {
            N(n.user.id, e.id, n.avatar), C(n.user.id, n.user);
        });
    }),
        null == r ||
            r.forEach((e) => {
                var n;
                null === (n = e.rawRecipients) ||
                    void 0 === n ||
                    n.forEach((e) => {
                        L(e);
                    });
            });
}
function U(e) {
    return !('incomplete' in e);
}
function B(e) {
    if (null != e.users)
        for (let n of e.users) {
            if (!(n.id in y && U(n))) y[n.id] = new h.Z(n);
        }
}
function G(e) {
    let { user: n } = e;
    n.id !== g.default.getId() && L(n);
}
function Z(e) {
    let { user: n } = e;
    L(n);
}
function F(e) {
    let { user: n } = e;
    L(n);
}
function V(e) {
    let { messages: n } = e;
    return n.forEach((e) => P(e, !0)), !1;
}
function j(e) {
    let { mostRecentMessages: n } = e;
    return null == n || n.forEach((e) => P(e, !1)), !1;
}
function H(e) {
    let { messages: n } = e;
    return n.forEach((e) => V({ messages: e })), !1;
}
function Y(e) {
    let { firstMessages: n, owners: r } = e;
    null != n && n.forEach((e) => P(e, !0)), null != r && r.forEach((e) => L(e.user, !0));
}
function W(e) {
    let { threads: n } = e;
    Object.values(n).forEach((e) => {
        let { first_message: n, most_recent_message: r, owner: i } = e;
        null != n && P(n, !0), null != r && P(r, !0), null != i && null != i.user && L(i.user, !0);
    });
}
function K(e) {
    let { supplementalData: n } = e;
    Object.values(n).forEach((e) => {
        let { message_preview: n } = e;
        null != n && P(n, !0);
    });
}
function z(e) {
    let { guildScheduledEventUsers: n, guildId: r } = e;
    n.forEach((e) => {
        let { user: n, member: i } = e;
        if (null == n) return;
        L(n);
        let a = null == i ? void 0 : i.avatar;
        null != a && N(n.id, r, a);
    });
}
function q(e) {
    let { items: n } = e;
    n.forEach((e) => {
        null != e.other_user && L(e.other_user);
    });
}
function Q(e) {
    let { item: n } = e;
    null != n.other_user && L(n.other_user);
}
function X(e) {
    let { message: n } = e;
    if ((P(n, !0), null != n.flags && p.yE(n.flags, v.iLy.URGENT))) {
        let e = y[g.default.getId()];
        return null != e && ((y[g.default.getId()] = e.set('flags', p.mB(e.flags, v.xW$.HAS_UNREAD_URGENT_MESSAGES, !0))), !0);
    }
    return !1;
}
function J(e) {
    let {
        channel: { rawRecipients: n }
    } = e;
    return null != n && n.forEach((e) => L(e)), !1;
}
function $(e) {
    let { channels: n } = e;
    for (let { rawRecipients: e } of n) null != e && e.forEach((e) => L(e));
    return !1;
}
let ee = ['username', 'avatar', 'global_name', 'discriminator', 'bot', 'primary_guild'];
function et(e) {
    let { updates: n } = e;
    return n
        .map((e) => {
            let n = y[e.user.id];
            if (null == n) return !1;
            let r = ee.reduce((r, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let a = n.set((0, u.camelCase)(i), e.user[i]);
                    (r = r || a !== n), (n = a);
                }
                return r;
            }, !1);
            return !!r && ((y[n.id] = n), r);
        })
        .some((e) => e);
}
function en(e) {
    let { bans: n } = e;
    n.forEach((e) => L(e.user));
}
function er(e) {
    let { bans: n } = e;
    n.forEach((e) => L(e.user));
}
function ei(e) {
    return L(e.user);
}
function ea(e) {
    return !!e.isMember && L(e.user);
}
function es(e) {
    let n = L(e.user);
    return N(e.user.id, e.guildId, e.avatar) || n;
}
function eo(e) {
    let { ops: n } = e;
    for (let e of n)
        if ('INSERT' === e.op || 'UPDATE' === e.op) {
            var r;
            let n = null === (r = e.item.member) || void 0 === r ? void 0 : r.user;
            if (null == n) continue;
            C(n.id, n);
        }
    return !1;
}
function el(e) {
    let { chunks: n } = e,
        r = !1;
    for (let e of n)
        r =
            e.members.reduce((n, r) => {
                let i = L(r.user);
                return N(r.user.id, e.guildId, r.avatar) || i || n;
            }, !1) || r;
    return r;
}
function eu(e) {
    let n = !1;
    for (let r of e.members) L(r.user) && (n = !0), N(r.user.id, e.guildId, r.avatar) && (n = !0);
    return n;
}
function ec(e) {
    var n;
    let r = !1;
    for (let i of null !== (n = e.users) && void 0 !== n ? n : []) !Object.hasOwn(y, i.id) && (r = L(i) || r);
    return r;
}
function ed(e) {
    let { members: n } = e,
        r = !1;
    return (
        n.forEach((e) => {
            null != e.member && L(e.member.user) && (r = !0), null != e.presence && L(e.presence.user) && (r = !0);
        }),
        r
    );
}
function ef(e) {
    let { addedMembers: n } = e,
        r = !1;
    return (
        null == n ||
            n.forEach((e) => {
                null != e.member && L(e.member.user) && (r = !0), null != e.presence && L(e.presence.user) && (r = !0);
            }),
        r
    );
}
function e_(e) {
    let { guild: n } = e;
    n.members.forEach((e) => {
        let {
            user: { id: r, username: i, avatar: a, discriminator: s, bot: o },
            avatar: l
        } = e;
        r !== g.default.getId() &&
            L({
                id: r,
                username: i,
                avatar: a,
                discriminator: s,
                bot: o
            }),
            N(r, n.id, l);
    });
}
function eh(e) {
    return L(e.relationship.user);
}
function ep(e) {
    let { relationships: n } = e;
    return n.reduce((e, n) => L(n.user) || e, !1);
}
function em(e) {
    return L(e.suggestion.suggested_user);
}
function eg(e) {
    let { suggestions: n } = e;
    return n.reduce((e, n) => L(n.suggested_user) || e, !1);
}
function eE(e) {
    let { users: n } = e;
    n.forEach((e) => {
        null == y[e.id] && (y[e.id] = new h.Z(e));
    });
}
function ev(e) {
    let { giftCode: n } = e;
    return null != n.user && L(n.user);
}
function eI(e) {
    let { appliedBoosts: n } = e;
    n.forEach((e) => {
        let { user: n } = e;
        if (null != n) L(n);
    });
}
function eT(e) {
    let { request: n } = e,
        { user: r, actioned_by_user: i } = n,
        a = !1;
    return null != r && (a = a || L(r)), null != i && (a = a || L(i)), a;
}
function eb(e) {
    let { users: n, familyCenterTeenActivity: r } = e,
        { users: i } = r;
    return [...n, ...i].reduce((e, n) => L(n) || e, !1);
}
function ey(e) {
    let { users: n } = e;
    return n.reduce((e, n) => L(n) || e, !1);
}
function eS(e) {
    let { users: n } = e;
    return n.reduce((e, n) => L(n) || e, !1);
}
function eA(e) {
    let { familyCenterTeenActivity: n } = e;
    if (void 0 === n) return;
    let { users: r } = n;
    return r.reduce((e, n) => L(n) || e, !1);
}
function eN(e) {
    let { familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return r.reduce((e, n) => L(n) || e, !1);
}
function eC(e) {
    let { members: n } = e,
        r = g.default.getId();
    return n.reduce((e, n) => (n.member.user.id === r ? e : L(n.member.user) || e), !1);
}
function eR(e) {
    let { messageItems: n } = e;
    n.forEach((e) => {
        null != e.message && P(e.message, !0);
    }, !1);
}
function eO(e) {
    let { participants: n } = e;
    return n.reduce((e, n) => ((0, c.Z)(n) && L(n.member.user)) || e, !1);
}
class eD extends E.Z {
    initialize() {
        this.waitFor(g.default, f.Z);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: eD.LATEST_SNAPSHOT_VERSION,
            data: { users: [e].filter(m.lm) }
        };
    }
    handleLoadCache(e) {
        let n = this.readSnapshot(eD.LATEST_SNAPSHOT_VERSION);
        if (null != n) for (let e of n.users) y[e.id] = new h.Z(e);
        if (null != e.users)
            for (let n of e.users) {
                if (!(n.id in y && U(n))) y[n.id] = new h.Z(n);
            }
        for (let n of [e.privateChannels, e.initialGuildChannels])
            for (let e of n) {
                var r;
                null === (r = e.rawRecipients) || void 0 === r || r.forEach((e) => L(e, !1));
            }
    }
    getUserStoreVersion() {
        return S;
    }
    getUser(e) {
        if (null != e) return y[e];
    }
    getUsers() {
        return y;
    }
    forEach(e) {
        for (let n in y) if (!1 === e(y[n])) break;
    }
    findByTag(e, n) {
        for (let r in y) {
            let i = y[r];
            if (null != n && i.username === e && i.discriminator === n) return i;
            if (null == n && i.username === e && i.isPomelo()) return i;
        }
    }
    filter(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = [];
        for (let n in y) {
            let i = y[n];
            e(i) && r.push(i);
        }
        return n && r.sort((e, n) => (e.username > n.username ? 1 : e.username < n.username ? -1 : 0)), r;
    }
    getCurrentUser() {
        return y[g.default.getId()];
    }
    constructor() {
        super({
            CONNECTION_OPEN: M,
            CONNECTION_OPEN_SUPPLEMENTAL: k,
            UPDATE_CLIENT_PREMIUM_TYPE: F,
            OVERLAY_INITIALIZE: B,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: G,
            CURRENT_USER_UPDATE: Z,
            PRESENCE_UPDATES: et,
            SEARCH_FINISH: H,
            MOD_VIEW_SEARCH_FINISH: H,
            LOAD_MESSAGES_SUCCESS: V,
            LOAD_MESSAGES_AROUND_SUCCESS: V,
            LOAD_PINNED_MESSAGES_SUCCESS: V,
            LOAD_RECENT_MENTIONS_SUCCESS: V,
            THREAD_LIST_SYNC: j,
            MESSAGE_CREATE: X,
            MESSAGE_UPDATE: X,
            GUILD_SETTINGS_LOADED_BANS: en,
            GUILD_SETTINGS_LOADED_BANS_BATCH: er,
            GUILD_CREATE: e_,
            GUILD_BAN_ADD: ei,
            GUILD_BAN_REMOVE: ei,
            CHANNEL_RECIPIENT_ADD: ea,
            CHANNEL_RECIPIENT_REMOVE: ea,
            GUILD_JOIN_REQUEST_CREATE: eT,
            GUILD_JOIN_REQUEST_UPDATE: eT,
            GUILD_MEMBER_ADD: es,
            GUILD_MEMBER_UPDATE: es,
            GUILD_MEMBERS_CHUNK_BATCH: el,
            GUILD_MEMBER_LIST_UPDATE: eo,
            THREAD_MEMBER_LIST_UPDATE: ed,
            THREAD_MEMBERS_UPDATE: ef,
            CHANNEL_CREATE: J,
            CHANNEL_UPDATES: $,
            RELATIONSHIP_ADD: eh,
            LOAD_RELATIONSHIPS_SUCCESS: ep,
            FRIEND_SUGGESTION_CREATE: em,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: eg,
            AUDIT_LOG_FETCH_SUCCESS: eE,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eE,
            GIFT_CODE_RESOLVE_SUCCESS: ev,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eI,
            LOAD_THREADS_SUCCESS: Y,
            LOAD_ARCHIVED_THREADS_SUCCESS: Y,
            LOAD_FORUM_POSTS: W,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: z,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: q,
            NOTIFICATION_CENTER_ITEM_CREATE: Q,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: K,
            PASSIVE_UPDATE_V2: eu,
            LOCAL_MESSAGES_LOADED: ec,
            FAMILY_CENTER_INITIAL_LOAD: eb,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: ey,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eA,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eN,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eS,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eC,
            LOAD_GRAVITY_HYDRATED: eR,
            EMBEDDED_ACTIVITY_UPDATE_V2: eO
        });
    }
}
b(eD, 'displayName', 'UserStore'), b(eD, 'LATEST_SNAPSHOT_VERSION', 1), (n.default = new eD());
