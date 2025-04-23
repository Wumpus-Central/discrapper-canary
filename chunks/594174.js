n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => v,
        default: () => eP,
        mergeUser: () => N,
        transformUser: () => T,
        users: () => b
    }),
    n(388685),
    n(997841),
    n(825670),
    n(539854),
    n(642613);
var r = n(392711),
    i = n(911969),
    a = n(2572),
    o = n(864106),
    s = n(579407),
    l = n(602210),
    c = n(502087),
    u = n(168232),
    d = n(598077),
    f = n(630388),
    _ = n(823379),
    p = n(314897),
    h = n(412788),
    m = n(981631),
    g = n(474936);
function E(e, t, n) {
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
let b = {},
    y = 0,
    v = '47835198259242069';
function O(e, t, n) {
    let r = b[e];
    if (null == r) return !1;
    let i = r;
    (i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (b[r.id] = i);
    let a = r !== i;
    return a && y++, a;
}
function I(e, t) {
    let n = b[e];
    return !(null == n || (0, l.d)(n.primaryGuild, t.primary_guild)) && (null == n.primaryGuild || null != t.primary_guild) && ((n.primaryGuild = (0, l.l)(t.primary_guild)), (b[n.id] = n), y++, !0);
}
function S(e, t) {
    switch (!0) {
        case null == e.primaryGuild && null == t.primary_guild:
            break;
        case null != e.primaryGuild && null == t.primary_guild:
        case (0, l.d)(e.primaryGuild, t.primary_guild):
            t.primary_guild = e.primaryGuild;
            break;
        default:
            t.primary_guild = (0, l.l)(t.primary_guild);
    }
    return t;
}
function T(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, u.G)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let i = e.age_verification_status;
    null != i && ((e.ageVerificationStatus = i), delete e.age_verification_status);
    let a = e.public_flags;
    null != a && ((e.publicFlags = a), delete e.public_flags);
    let c = e.purchased_flags;
    void 0 !== c && ((e.purchasedFlags = c), delete e.purchased_flags);
    let d = e.premium_usage_flags;
    void 0 !== d && ((e.premiumUsageFlags = d), delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
    let f = e.avatar_decoration_data;
    void 0 !== f && ((e.avatarDecorationData = (0, o.FG)(f)), delete e.avatar_decoration_data);
    let _ = e.collectibles;
    void 0 !== _ && (delete e.collectibles, (e.collectibles = (0, s.Xm)(_)));
    let p = e.global_name;
    void 0 !== p && ((e.globalName = p), delete e.global_name);
    let h = e.primary_guild;
    return void 0 !== h && (e.primary_guild = (0, l.l)(h)), e;
}
function A(e) {
    return e.id !== p.default.getId();
}
function N(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = b[e.id],
        i = void 0 !== e.id && e.id === p.default.getId();
    if (null == r) void 0 !== (t = (r = new d.Z(e)).premiumType) && i && (r.premiumType = R((0, u.QI)(r), r.premiumType));
    else if (n) {
        var a;
        let n = T(e);
        void 0 !== (t = null != (a = n.premium_type) ? a : n.premiumType) && i && (0, u.VR)(n) && (n = C(n)), (n = S(r, n)), (r = r.merge(n));
    }
    (0, u.jX)((0, u.QI)(r), t, r.premiumType);
    let o = b[e.id] !== r;
    return (b[e.id] = r), o && y++, o;
}
function C(e) {
    var t;
    let n = null != (t = e.premium_type) ? t : e.premiumType,
        r = R((0, u.VR)(e), n);
    return void 0 !== e.premiumType ? (e.premiumType = r) : void 0 !== e.premium_type && (e.premium_type = r), e;
}
function R(e, t) {
    if (!e) return t;
    let n = c.Z.getPremiumTypeOverride(),
        r = c.Z.getPremiumTypeActual();
    return n === g.F_ ? r : n;
}
function P(e, t) {
    var n, r, i, a, o, s;
    if (
        (null != e.author && 'SENDING' !== e.state && A(e.author) && N(e.author, t),
        null == (n = e.mentions) ||
            n.forEach((e) => {
                A(e) && N(e, t);
            }),
        (null == (r = e.interaction) ? void 0 : r.user) != null && A(null == (i = e.interaction) ? void 0 : i.user) && N(e.interaction.user, t),
        null == (a = e.attachments) ||
            a.forEach((e) => {
                var n;
                null == (n = e.clip_participants) ||
                    n.forEach((e) => {
                        A(e) && N(e, t);
                    });
            }),
        (null == (o = e.resolved) ? void 0 : o.users) != null)
    )
        for (let n in e.resolved.users) {
            let r = e.resolved.users[n];
            A(r) && N(r, t);
        }
    (null == (s = e.interaction_metadata) ? void 0 : s.user) != null && A(e.interaction_metadata.user) && N(e.interaction_metadata.user, t);
}
function w(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        N(t),
        n.forEach((e) => {
            N(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                O(t.user.id, e.id, t.avatar), I(t.user.id, t.user);
            });
        }),
        null != b[p.default.getId()] &&
            (b[v] = new d.Z({
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
            O(t.user.id, e.id, t.avatar), I(t.user.id, t.user);
        });
    }),
        null == n ||
            n.forEach((e) => {
                var t;
                null == (t = e.rawRecipients) ||
                    t.forEach((e) => {
                        N(e);
                    });
            });
}
function L(e) {
    return !('incomplete' in e);
}
function x(e) {
    if (null != e.users) for (let t of e.users) (t.id in b && L(t)) || (b[t.id] = new d.Z(t));
}
function M(e) {
    let { user: t } = e;
    t.id !== p.default.getId() && N(t);
}
function k(e) {
    let { user: t } = e;
    N(t);
}
function j(e) {
    let { user: t } = e;
    N(t);
}
function U(e) {
    let { messages: t } = e;
    return t.forEach((e) => P(e, !0)), !1;
}
function G(e) {
    let { mostRecentMessages: t } = e;
    return null == t || t.forEach((e) => P(e, !1)), !1;
}
function B(e) {
    let { messages: t } = e;
    return t.forEach((e) => U({ messages: e })), !1;
}
function V(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => P(e, !0)), null != n && n.forEach((e) => N(e.user, !0));
}
function F(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && P(t, !0), null != n && P(n, !0), null != r && null != r.user && N(r.user, !0);
    });
}
function Z(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && P(t, !0);
    });
}
function H(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: r } = e;
        if (null == t) return;
        N(t);
        let i = null == r ? void 0 : r.avatar;
        null != i && O(t.id, n, i);
    });
}
function Y(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && N(e.other_user);
    });
}
function W(e) {
    let { item: t } = e;
    null != t.other_user && N(t.other_user);
}
function K(e) {
    let { message: t } = e;
    if ((P(t, !0), null != t.flags && f.yE(t.flags, m.iLy.URGENT))) {
        let e = b[p.default.getId()];
        return null != e && ((b[p.default.getId()] = e.set('flags', f.mB(e.flags, m.xW$.HAS_UNREAD_URGENT_MESSAGES, !0))), !0);
    }
    return !1;
}
function z(e) {
    let {
        channel: { rawRecipients: t }
    } = e;
    return null != t && t.forEach((e) => N(e)), !1;
}
function q(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => N(e));
    return !1;
}
let Q = ['username', 'avatar', 'global_name', 'discriminator', 'bot', 'primary_guild'];
function X(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = b[e.user.id];
            if (null == t) return !1;
            let n = Q.reduce((n, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let a = t.set((0, r.camelCase)(i), e.user[i]);
                    (n = n || a !== t), (t = a);
                }
                return n;
            }, !1);
            return !!n && ((b[t.id] = t), n);
        })
        .some((e) => e);
}
function J(e) {
    let { bans: t } = e;
    t.forEach((e) => N(e.user));
}
function $(e) {
    let { bans: t } = e;
    t.forEach((e) => N(e.user));
}
function ee(e) {
    return N(e.user);
}
function et(e) {
    return !!e.isMember && N(e.user);
}
function en(e) {
    let t = N(e.user);
    return O(e.user.id, e.guildId, e.avatar) || t;
}
function er(e) {
    let { ops: t } = e;
    for (let e of t)
        if ('INSERT' === e.op || 'UPDATE' === e.op) {
            var n;
            let t = null == (n = e.item.member) ? void 0 : n.user;
            if (null == t) continue;
            I(t.id, t);
        }
    return !1;
}
function ei(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = N(n.user);
                return O(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function ea(e) {
    let t = !1;
    for (let n of e.members) N(n.user) && (t = !0), O(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function eo(e) {
    var t;
    let n = !1;
    for (let r of null != (t = e.users) ? t : []) Object.hasOwn(b, r.id) || (n = N(r) || n);
    return n;
}
function es(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && N(e.member.user) && (n = !0), null != e.presence && N(e.presence.user) && (n = !0);
        }),
        n
    );
}
function el(e) {
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
function ec(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: a, bot: o },
            avatar: s
        } = e;
        n !== p.default.getId() &&
            N({
                id: n,
                username: r,
                avatar: i,
                discriminator: a,
                bot: o
            }),
            O(n, t.id, s);
    });
}
function eu(e) {
    return N(e.relationship.user);
}
function ed(e) {
    return N(e.gameRelationship.user);
}
function ef(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => N(t.user) || e, !1);
}
function e_(e) {
    return N(e.suggestion.suggested_user);
}
function ep(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => N(t.suggested_user) || e, !1);
}
function eh(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == b[e.id] && (b[e.id] = new d.Z(e));
    });
}
function em(e) {
    let { giftCode: t } = e;
    return null != t.user && N(t.user);
}
function eg(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && N(t);
    });
}
function eE(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = i || N(n)), null != r && (i = i || N(r)), i;
}
function eb(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => N(t) || e, !1);
}
function ey(e) {
    let { users: t } = e;
    return t.reduce((e, t) => N(t) || e, !1);
}
function ev(e) {
    let { users: t } = e;
    return t.reduce((e, t) => N(t) || e, !1);
}
function eO(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => N(t) || e, !1);
}
function eI(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => N(t) || e, !1);
}
function eS(e) {
    let { members: t } = e,
        n = p.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : N(t.member.user) || e), !1);
}
function eT(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && P(e.message, !0);
    }, !1);
}
function eA(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, a.Z)(t) && N(t.member.user)) || e, !1);
}
function eN(e) {
    let {} = e,
        t = b[p.default.getId()];
    return null != t && ((b[p.default.getId()] = t.set('ageVerificationStatus', i.F$.CLIENT_ONLY_PENDING)), !0);
}
function eC(e) {
    let { status: t } = e,
        n = b[p.default.getId()];
    return null != n && n.ageVerificationStatus === i.F$.CLIENT_ONLY_PENDING && ((b[p.default.getId()] = n.set('ageVerificationStatus', t)), !0);
}
class eR extends h.Z {
    initialize() {
        this.waitFor(p.default, c.Z);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: eR.LATEST_SNAPSHOT_VERSION,
            data: { users: [e].filter(_.lm) }
        };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eR.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) b[e.id] = new d.Z(e);
        if (null != e.users) for (let t of e.users) (t.id in b && L(t)) || (b[t.id] = new d.Z(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) {
                var n;
                null == (n = e.rawRecipients) || n.forEach((e) => N(e, !1));
            }
    }
    getUserStoreVersion() {
        return y;
    }
    getUser(e) {
        if (null != e) return b[e];
    }
    getUsers() {
        return b;
    }
    forEach(e) {
        for (let t in b) if (!1 === e(b[t])) break;
    }
    findByTag(e, t) {
        for (let n in b) {
            let r = b[n];
            if ((null != t && r.username === e && r.discriminator === t) || (null == t && r.username === e && r.isPomelo())) return r;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [];
        for (let t in b) {
            let r = b[t];
            e(r) && n.push(r);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return b[p.default.getId()];
    }
    constructor() {
        super({
            CONNECTION_OPEN: w,
            CONNECTION_OPEN_SUPPLEMENTAL: D,
            UPDATE_CLIENT_PREMIUM_TYPE: j,
            OVERLAY_INITIALIZE: x,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: M,
            CURRENT_USER_UPDATE: k,
            PRESENCE_UPDATES: X,
            SEARCH_FINISH: B,
            MOD_VIEW_SEARCH_FINISH: B,
            LOAD_MESSAGES_SUCCESS: U,
            LOAD_MESSAGES_AROUND_SUCCESS: U,
            LOAD_PINNED_MESSAGES_SUCCESS: U,
            LOAD_RECENT_MENTIONS_SUCCESS: U,
            THREAD_LIST_SYNC: G,
            MESSAGE_CREATE: K,
            MESSAGE_UPDATE: K,
            GUILD_SETTINGS_LOADED_BANS: J,
            GUILD_SETTINGS_LOADED_BANS_BATCH: $,
            GUILD_CREATE: ec,
            GUILD_BAN_ADD: ee,
            GUILD_BAN_REMOVE: ee,
            CHANNEL_RECIPIENT_ADD: et,
            CHANNEL_RECIPIENT_REMOVE: et,
            GUILD_JOIN_REQUEST_CREATE: eE,
            GUILD_JOIN_REQUEST_UPDATE: eE,
            GUILD_MEMBER_ADD: en,
            GUILD_MEMBER_UPDATE: en,
            GUILD_MEMBERS_CHUNK_BATCH: ei,
            GUILD_MEMBER_LIST_UPDATE: er,
            THREAD_MEMBER_LIST_UPDATE: es,
            THREAD_MEMBERS_UPDATE: el,
            CHANNEL_CREATE: z,
            CHANNEL_UPDATES: q,
            RELATIONSHIP_ADD: eu,
            GAME_RELATIONSHIP_ADD: ed,
            LOAD_RELATIONSHIPS_SUCCESS: ef,
            FRIEND_SUGGESTION_CREATE: e_,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: ep,
            AUDIT_LOG_FETCH_SUCCESS: eh,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eh,
            GIFT_CODE_RESOLVE_SUCCESS: em,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eg,
            LOAD_THREADS_SUCCESS: V,
            LOAD_ARCHIVED_THREADS_SUCCESS: V,
            LOAD_FORUM_POSTS: F,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: H,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: Y,
            NOTIFICATION_CENTER_ITEM_CREATE: W,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: Z,
            PASSIVE_UPDATE_V2: ea,
            LOCAL_MESSAGES_LOADED: eo,
            FAMILY_CENTER_INITIAL_LOAD: eb,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: ey,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eO,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eI,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: ev,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eS,
            LOAD_GRAVITY_HYDRATED: eT,
            EMBEDDED_ACTIVITY_UPDATE_V2: eA,
            INITIATE_AGE_VERIFICATION: eN,
            CLOSE_AGE_VERIFICATION_MODAL: eC
        });
    }
}
E(eR, 'displayName', 'UserStore'), E(eR, 'LATEST_SNAPSHOT_VERSION', 1);
let eP = new eR();
