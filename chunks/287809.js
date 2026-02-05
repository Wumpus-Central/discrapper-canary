"use strict";
n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => S,
        default: () => eU,
        mergeUser: () => O,
        transformUser: () => N,
        users: () => T,
    }),
    n(938796),
    n(205816),
    n(321073);
var r = n(735438),
    i = n(665260),
    a = n(155718),
    s = n(807605),
    o = n(507698),
    l = n(628856),
    u = n(945096),
    c = n(47537),
    d = n(244284),
    _ = n(683760),
    f = n(392737),
    p = n(572009),
    h = n(427157),
    m = n(403362),
    g = n(961350),
    E = n(536802),
    A = n(652215),
    I = n(788868);
let T = {},
    y = 0,
    S = "47835198259242069";
function v(e, t, n) {
    let r = T[e];
    if (null == r) return !1;
    let i = r;
    (i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (T[r.id] = i);
    let a = r !== i;
    return a && y++, a;
}
function C(e, t) {
    let n = T[e];
    return (
        !(null == n || (0, c.D)(n.primaryGuild, t.primary_guild)) &&
        (null == n.primaryGuild || null != t.primary_guild) &&
        ((n.primaryGuild = (0, c.j)(t.primary_guild)), (T[n.id] = n), y++, !0)
    );
}
function b(e, t) {
    switch (!0) {
        case null == e.primaryGuild && null == t.primary_guild:
            break;
        case null != e.primaryGuild && null == t.primary_guild:
        case (0, c.D)(e.primaryGuild, t.primary_guild):
            t.primary_guild = e.primaryGuild;
            break;
        default:
            t.primary_guild = (0, c.j)(t.primary_guild);
    }
    return t;
}
function N(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, p.nq)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let i = e.age_verification_status;
    null != i && ((e.ageVerificationStatus = i), delete e.age_verification_status);
    let a = e.public_flags;
    null != a && ((e.publicFlags = a), delete e.public_flags);
    let s = e.purchased_flags;
    void 0 !== s && ((e.purchasedFlags = s), delete e.purchased_flags);
    let _ = e.premium_usage_flags;
    void 0 !== _ && ((e.premiumUsageFlags = _), delete e.premium_usage_flags),
        null === e.banner_color && delete e.banner_color;
    let h = e.avatar_decoration_data;
    void 0 !== h && ((e.avatarDecorationData = (0, o.Xq)(h)), delete e.avatar_decoration_data);
    let m = e.collectibles;
    void 0 !== m && (delete e.collectibles, (e.collectibles = (0, l.t)(m)));
    let g = e.global_name;
    void 0 !== g && ((e.globalName = g), delete e.global_name);
    let E = e.primary_guild;
    void 0 !== E && (e.primary_guild = (0, c.j)(E));
    let A = e.display_name_styles;
    void 0 !== A && ((e.displayNameStyles = (0, u.mT)(A)), delete e.display_name_styles);
    let I = e.premium_state;
    void 0 !== I && ((e.premiumState = (0, f.f)(I)), delete e.premium_state);
    let T = e.restricted_schedule;
    void 0 !== T && ((e.restrictedSchedule = d.kX.fromServer(T) ?? null), delete e.restricted_schedule);
    let y = e.app_transaction_ids;
    return void 0 !== y && ((e.appTransactionIds = y), delete e.app_transaction_ids), e;
}
function R(e) {
    return e.id !== g.default.getId();
}
function O(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = T[e.id],
        i = void 0 !== e.id && e.id === g.default.getId();
    if (null == r)
        void 0 !== (t = (r = new h.A(e)).premiumType) && i && (r.premiumType = L((0, p.I9)(r), r.premiumType));
    else if (n) {
        let n = N(e);
        void 0 !== (t = n.premium_type ?? n.premiumType) && i && (0, p._D)(n) && (n = D(n)),
            (n = b(r, n)),
            (r = r.merge(n));
    }
    (0, p.gX)((0, p.I9)(r), t, r.premiumType);
    let a = T[e.id] !== r;
    return (T[e.id] = r), a && y++, a;
}
function D(e) {
    let t = e.premium_type ?? e.premiumType,
        n = L((0, p._D)(e), t);
    return void 0 !== e.premiumType ? (e.premiumType = n) : void 0 !== e.premium_type && (e.premium_type = n), e;
}
function L(e, t) {
    if (!e) return t;
    let n = _.A.getPremiumTypeOverride(),
        r = _.A.getPremiumTypeActual();
    return n === I.$I ? r : n;
}
function w(e, t) {
    if (e?.users == null) return !1;
    for (let n in e.users) {
        let r = e.users[n];
        R(r) && O(r, t);
    }
}
function x(e, t) {
    null != e.author && "SENDING" !== e.state && R(e.author) && O(e.author, t),
        e.mentions?.forEach((e) => {
            R(e) && O(e, t);
        }),
        e.interaction?.user != null && R(e.interaction?.user) && O(e.interaction.user, t),
        e.attachments?.forEach((e) => {
            e.clip_participants?.forEach((e) => {
                R(e) && O(e, t);
            });
        }),
        w(e.resolved, t),
        e.interaction_metadata?.user != null && R(e.interaction_metadata.user) && O(e.interaction_metadata.user, t),
        null != e.message_snapshots &&
            e.message_snapshots.forEach((e) => {
                e.moderator_report?.reported_member?.user != null && O(e.moderator_report.reported_member.user, t),
                    e.moderator_report?.reporting_member?.user != null &&
                        O(e.moderator_report.reporting_member.user, t),
                    Object.values(e.message?.resolved?.users ?? {}).forEach((e) => {
                        R(e) && O(e, t);
                    });
            });
}
function P(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        O(t),
        n.forEach((e) => {
            O(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                v(t.user.id, e.id, t.avatar), C(t.user.id, t.user);
            });
        }),
        null != T[g.default.getId()] &&
            (T[S] = new h.A({
                id: S,
                username: "Wumpus",
                discriminator: "0",
                globalName: "Wumpus",
                avatar: "c1f86b313385cb97985f1b118851c28c",
            }));
}
function M(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            v(t.user.id, e.id, t.avatar), C(t.user.id, t.user);
        });
    }),
        n?.forEach((e) => {
            e.rawRecipients?.forEach((e) => {
                O(e);
            });
        });
}
function k(e) {
    return !("incomplete" in e);
}
function U(e) {
    if (null != e.users) for (let t of e.users) (t.id in T && k(t)) || (T[t.id] = new h.A(t));
}
function G(e) {
    let { user: t } = e;
    if (!R(t)) return !1;
    O(t);
}
function V(e) {
    let { userProfile: t } = e;
    if (!R(t.user)) return !1;
    O(t.user);
}
function F(e) {
    let { user: t } = e;
    O(t);
}
function B(e) {
    let { user: t } = e;
    O({ id: t.id, premiumType: t.premiumType }, !0);
}
function j(e) {
    let { messages: t } = e;
    return t.forEach((e) => x(e, !0)), !1;
}
function H(e) {
    let { pins: t } = e;
    return (
        t.forEach((e) => {
            let { message: t } = e;
            return x(t, !0);
        }),
        !1
    );
}
function Y(e) {
    let { mostRecentMessages: t } = e;
    return t?.forEach((e) => x(e, !1)), !1;
}
function W(e) {
    let { data: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t, channels: n } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    x(e, !0);
                });
            }),
                n.forEach((e) => {
                    (e.type === A.rbe.DM || e.type === A.rbe.GROUP_DM) &&
                        (e.recipients?.forEach((e) => O(e)), null != e.recipient && O(e.recipient));
                });
        }),
        !1
    );
}
function K(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => x(e, !0)), null != n && n.forEach((e) => O(e.user, !0));
}
function z(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && x(t, !0), null != n && x(n, !0), null != r && null != r.user && O(r.user, !0);
    });
}
function $(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && x(t, !0);
    });
}
function q(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: r } = e;
        if (null == t) return;
        O(t);
        let i = r?.avatar;
        null != i && v(t.id, n, i);
    });
}
function Z(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && O(e.other_user);
    });
}
function Q(e) {
    let { item: t } = e;
    null != t.other_user && O(t.other_user);
}
function X(e) {
    let { message: t } = e;
    if ((x(t, !0), null != t.flags && i.Lt(t.flags, A.pr7.URGENT))) {
        let e = T[g.default.getId()];
        return (
            null != e &&
            ((T[g.default.getId()] = e.set("flags", i.lA(e.flags, A.nhx.HAS_UNREAD_URGENT_MESSAGES, !0))), !0)
        );
    }
    return !1;
}
function J(e) {
    let {
        channel: { rawRecipients: t },
    } = e;
    return null != t && t.forEach((e) => O(e)), !1;
}
function ee(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => O(e));
    return !1;
}
let et = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];
function en(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = T[e.user.id];
            if (null == t) return !1;
            let n = et.reduce((n, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let a = t.set((0, r.camelCase)(i), e.user[i]);
                    (n = n || a !== t), (t = a);
                }
                return n;
            }, !1);
            return !!n && ((T[t.id] = t), n);
        })
        .some((e) => e);
}
function er(e) {
    let { bans: t } = e;
    t.forEach((e) => O(e.user));
}
function ei(e) {
    let { bans: t } = e;
    t.forEach((e) => O(e.user));
}
function ea(e) {
    return O(e.user);
}
function es(e) {
    return !!e.isMember && O(e.user);
}
function eo(e) {
    let t = O(e.user);
    return v(e.user.id, e.guildId, e.avatar) || t;
}
function el(e) {
    let { ops: t } = e;
    for (let e of t)
        if ("INSERT" === e.op || "UPDATE" === e.op) {
            let t = e.item.member?.user;
            if (null == t) continue;
            C(t.id, t);
        }
    return !1;
}
function eu(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = O(n.user);
                return v(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function ec(e) {
    let t = !1;
    for (let n of e.members) O(n.user) && (t = !0), v(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function ed(e) {
    let t = !1;
    for (let n of e.users ?? []) Object.hasOwn(T, n.id) || (t = O(n) || t);
    return t;
}
function e_(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && O(e.member.user) && (n = !0), null != e.presence && O(e.presence.user) && (n = !0);
        }),
        n
    );
}
function ef(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        t?.forEach((e) => {
            null != e.member && O(e.member.user) && (n = !0), null != e.presence && O(e.presence.user) && (n = !0);
        }),
        n
    );
}
function ep(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: a, bot: s },
            avatar: o,
        } = e;
        n !== g.default.getId() && O({ id: n, username: r, avatar: i, discriminator: a, bot: s }), v(n, t.id, o);
    });
}
function eh(e) {
    return O(e.relationship.user);
}
function em(e) {
    return O(e.gameRelationship.user);
}
function eg(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => O(t.user) || e, !1);
}
function eE(e) {
    return O(e.suggestion.suggested_user);
}
function eA(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => O(t.suggested_user) || e, !1);
}
function eI(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == T[e.id] && (T[e.id] = new h.A(e));
    });
}
function eT(e) {
    let { giftCode: t } = e;
    return null != t.user && O(t.user);
}
function ey(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && O(t);
    });
}
function eS(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = i || O(n)), null != r && (i = i || O(r)), i;
}
function ev(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => O(t) || e, !1);
}
function eC(e) {
    let { users: t } = e;
    return t.reduce((e, t) => O(t) || e, !1);
}
function eb(e) {
    let { users: t } = e;
    return t.reduce((e, t) => O(t) || e, !1);
}
function eN(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => O(t) || e, !1);
}
function eR(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => O(t) || e, !1);
}
function eO(e) {
    let { members: t } = e,
        n = g.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : O(t.member.user) || e), !1);
}
function eD(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && x(e.message, !0);
    }, !1);
}
function eL(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, s.A)(t) && O(t.member.user)) || e, !1);
}
function ew(e) {
    let {} = e,
        t = T[g.default.getId()];
    return null != t && ((T[g.default.getId()] = t.set("ageVerificationStatus", a.Tk.CLIENT_ONLY_PENDING)), !0);
}
function ex(e) {
    let { status: t } = e,
        n = T[g.default.getId()];
    return (
        null != n &&
        n.ageVerificationStatus === a.Tk.CLIENT_ONLY_PENDING &&
        ((T[g.default.getId()] = n.set("ageVerificationStatus", t)), !0)
    );
}
function eP(e) {
    let { resolved: t } = e;
    return w(t, !0);
}
function eM(e) {
    let { stickers: t } = e;
    return t.reduce((e, t) => (null != t.user && O(t.user)) || e, !1);
}
class ek extends E.A {
    static displayName = "UserStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: P,
            CONNECTION_OPEN_SUPPLEMENTAL: M,
            UPDATE_CLIENT_PREMIUM_TYPE: B,
            OVERLAY_INITIALIZE: U,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: G,
            USER_PROFILE_FETCH_SUCCESS: V,
            CURRENT_USER_UPDATE: F,
            PRESENCE_UPDATES: en,
            SEARCH_MESSAGES_SUCCESS: W,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: W,
            LOAD_MESSAGES_SUCCESS: j,
            LOAD_MESSAGES_AROUND_SUCCESS: j,
            LOAD_RECENT_MENTIONS_SUCCESS: j,
            LOAD_PINNED_MESSAGES_SUCCESS: H,
            THREAD_LIST_SYNC: Y,
            MESSAGE_CREATE: X,
            MESSAGE_UPDATE: X,
            GUILD_SETTINGS_LOADED_BANS: er,
            GUILD_SETTINGS_LOADED_BANS_BATCH: ei,
            GUILD_CREATE: ep,
            GUILD_BAN_ADD: ea,
            GUILD_BAN_REMOVE: ea,
            CHANNEL_RECIPIENT_ADD: es,
            CHANNEL_RECIPIENT_REMOVE: es,
            GUILD_STICKERS_FETCH_SUCCESS: eM,
            GUILD_JOIN_REQUEST_CREATE: eS,
            GUILD_JOIN_REQUEST_UPDATE: eS,
            GUILD_MEMBER_ADD: eo,
            GUILD_MEMBER_UPDATE: eo,
            GUILD_MEMBERS_CHUNK_BATCH: eu,
            GUILD_MEMBER_LIST_UPDATE: el,
            THREAD_MEMBER_LIST_UPDATE: e_,
            THREAD_MEMBERS_UPDATE: ef,
            CHANNEL_CREATE: J,
            CHANNEL_UPDATES: ee,
            RELATIONSHIP_ADD: eh,
            GAME_RELATIONSHIP_ADD: em,
            LOAD_RELATIONSHIPS_SUCCESS: eg,
            FRIEND_SUGGESTION_CREATE: eE,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: eA,
            AUDIT_LOG_FETCH_SUCCESS: eI,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eI,
            GIFT_CODE_RESOLVE_SUCCESS: eT,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: ey,
            LOAD_THREADS_SUCCESS: K,
            LOAD_ARCHIVED_THREADS_SUCCESS: K,
            LOAD_FORUM_POSTS: z,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: q,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: Z,
            NOTIFICATION_CENTER_ITEM_CREATE: Q,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: $,
            PASSIVE_UPDATE_V2: ec,
            LOCAL_MESSAGES_LOADED: ed,
            FAMILY_CENTER_INITIAL_LOAD: ev,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eC,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eN,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eR,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eb,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eO,
            LOAD_ICYMI_HYDRATED: eD,
            EMBEDDED_ACTIVITY_UPDATE_V2: eL,
            INITIATE_AGE_VERIFICATION: ew,
            CLOSE_AGE_VERIFICATION_MODAL: ex,
            INTERACTION_MODAL_CREATE: eP,
        });
    }
    initialize() {
        this.waitFor(g.default, _.A);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return { version: ek.LATEST_SNAPSHOT_VERSION, data: { users: [e].filter(m.Vq) } };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(ek.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) T[e.id] = new h.A(e);
        if (null != e.users) for (let t of e.users) (t.id in T && k(t)) || (T[t.id] = new h.A(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) e.rawRecipients?.forEach((e) => O(e, !1));
    }
    getUserStoreVersion() {
        return y;
    }
    getUser(e) {
        if (null != e) return T[e];
    }
    getUsers() {
        return T;
    }
    forEach(e) {
        for (let t in T) if (!1 === e(T[t])) break;
    }
    findByTag(e, t) {
        for (let n in T) {
            let r = T[n];
            if (
                (null != t && r.username === e && r.discriminator === t) ||
                (null == t && r.username === e && r.hasUniqueUsername())
            )
                return r;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [];
        for (let t in T) {
            let r = T[t];
            e(r) && n.push(r);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return T[g.default.getId()];
    }
}
let eU = new ek();
