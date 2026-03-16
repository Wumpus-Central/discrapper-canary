"use strict";
n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => y,
        default: () => eG,
        mergeUser: () => b,
        transformUser: () => R,
        users: () => T,
    }),
    n(938796),
    n(205816),
    n(321073);
var r = n(735438),
    i = n(665260),
    s = n(155718),
    a = n(807605),
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
    E = n(961350),
    g = n(536802),
    A = n(652215),
    I = n(788868);
let T = {},
    S = 0,
    y = "47835198259242069";
function v(e, t, n) {
    let r = T[e];
    if (null == r) return !1;
    let i = r;
    (i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (T[r.id] = i);
    let s = r !== i;
    return s && S++, s;
}
function N(e, t) {
    let n = T[e];
    return (
        !(null == n || (0, c.D)(n.primaryGuild, t.primary_guild)) &&
        (null == n.primaryGuild || null != t.primary_guild) &&
        ((n.primaryGuild = (0, c.j)(t.primary_guild)), (T[n.id] = n), S++, !0)
    );
}
function C(e, t) {
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
function R(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, p.nq)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let i = e.age_verification_status;
    null != i && ((e.ageVerificationStatus = i), delete e.age_verification_status);
    let s = e.public_flags;
    null != s && ((e.publicFlags = s), delete e.public_flags);
    let a = e.purchased_flags;
    void 0 !== a && ((e.purchasedFlags = a), delete e.purchased_flags);
    let _ = e.premium_usage_flags;
    void 0 !== _ && ((e.premiumUsageFlags = _), delete e.premium_usage_flags),
        null === e.banner_color && delete e.banner_color;
    let h = e.avatar_decoration_data;
    void 0 !== h && ((e.avatarDecorationData = (0, o.Xq)(h)), delete e.avatar_decoration_data);
    let m = e.collectibles;
    void 0 !== m && (delete e.collectibles, (e.collectibles = (0, l.t)(m)));
    let E = e.global_name;
    void 0 !== E && ((e.globalName = E), delete e.global_name);
    let g = e.primary_guild;
    void 0 !== g && (e.primary_guild = (0, c.j)(g));
    let A = e.display_name_styles;
    void 0 !== A && ((e.displayNameStyles = (0, u.mT)(A)), delete e.display_name_styles);
    let I = e.premium_state;
    void 0 !== I && ((e.premiumState = (0, f.f)(I)), delete e.premium_state);
    let T = e.restricted_schedule;
    void 0 !== T && ((e.restrictedSchedule = d.kX.fromServer(T) ?? null), delete e.restricted_schedule);
    let S = e.app_transaction_ids;
    return void 0 !== S && ((e.appTransactionIds = S), delete e.app_transaction_ids), e;
}
function O(e) {
    return e.id !== E.default.getId();
}
function b(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = T[e.id],
        i = void 0 !== e.id && e.id === E.default.getId();
    if (null == r)
        void 0 !== (t = (r = new h.A(R(e))).premiumType) && i && (r.premiumType = L((0, p.I9)(r), r.premiumType));
    else if (n) {
        let n = R(e);
        void 0 !== (t = n.premium_type ?? n.premiumType) && i && (0, p._D)(n) && (n = D(n)),
            (n = C(r, n)),
            (r = r.merge(n));
    }
    (0, p.gX)((0, p.I9)(r), t, r.premiumType);
    let s = T[e.id] !== r;
    return (T[e.id] = r), s && S++, s;
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
        O(r) && b(r, t);
    }
}
function M(e, t) {
    null != e.author && "SENDING" !== e.state && O(e.author) && b(e.author, t),
        e.mentions?.forEach((e) => {
            O(e) && b(e, t);
        }),
        e.interaction?.user != null && O(e.interaction?.user) && b(e.interaction.user, t),
        e.attachments?.forEach((e) => {
            e.clip_participants?.forEach((e) => {
                O(e) && b(e, t);
            });
        }),
        w(e.resolved, t),
        e.interaction_metadata?.user != null && O(e.interaction_metadata.user) && b(e.interaction_metadata.user, t),
        null != e.message_snapshots &&
            e.message_snapshots.forEach((e) => {
                e.moderator_report?.reported_member?.user != null && b(e.moderator_report.reported_member.user, t),
                    e.moderator_report?.reporting_member?.user != null &&
                        b(e.moderator_report.reporting_member.user, t),
                    Object.values(e.message?.resolved?.users ?? {}).forEach((e) => {
                        O(e) && b(e, t);
                    });
            });
}
function x(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        b(t),
        n.forEach((e) => {
            b(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                v(t.user.id, e.id, t.avatar), N(t.user.id, t.user);
            });
        }),
        null != T[E.default.getId()] &&
            (T[y] = new h.A({
                id: y,
                username: "Wumpus",
                discriminator: "0",
                globalName: "Wumpus",
                avatar: "c1f86b313385cb97985f1b118851c28c",
            }));
}
function P(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            v(t.user.id, e.id, t.avatar), N(t.user.id, t.user);
        });
    }),
        n?.forEach((e) => {
            e.rawRecipients?.forEach((e) => {
                b(e);
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
    if (!O(t)) return !1;
    b(t);
}
function F(e) {
    let { userId: t, restrictedSchedule: n } = e;
    return b({ id: t, restricted_schedule: n });
}
function V(e) {
    let { userProfile: t } = e;
    if (!O(t.user)) return !1;
    b(t.user);
}
function B(e) {
    let { user: t } = e;
    b(t);
}
function H(e) {
    let { user: t } = e;
    b({ id: t.id, premiumType: t.premiumType }, !0);
}
function j(e) {
    let { messages: t } = e;
    return t.forEach((e) => M(e, !0)), !1;
}
function Y(e) {
    let { pins: t } = e;
    return (
        t.forEach((e) => {
            let { message: t } = e;
            return M(t, !0);
        }),
        !1
    );
}
function W(e) {
    let { mostRecentMessages: t } = e;
    return t?.forEach((e) => M(e, !1)), !1;
}
function K(e) {
    let { data: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t, channels: n } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    M(e, !0);
                });
            }),
                n.forEach((e) => {
                    (e.type === A.rbe.DM || e.type === A.rbe.GROUP_DM) &&
                        (e.recipients?.forEach((e) => b(e)), null != e.recipient && b(e.recipient));
                });
        }),
        !1
    );
}
function $(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => M(e, !0)), null != n && n.forEach((e) => b(e.user, !0));
}
function z(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && M(t, !0), null != n && M(n, !0), null != r && null != r.user && b(r.user, !0);
    });
}
function q(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && M(t, !0);
    });
}
function Z(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: r } = e;
        if (null == t) return;
        b(t);
        let i = r?.avatar;
        null != i && v(t.id, n, i);
    });
}
function X(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && b(e.other_user);
    });
}
function Q(e) {
    let { item: t } = e;
    null != t.other_user && b(t.other_user);
}
function J(e) {
    let { message: t } = e;
    if ((M(t, !0), null != t.flags && i.Lt(t.flags, A.pr7.URGENT))) {
        let e = T[E.default.getId()];
        return (
            null != e &&
            ((T[E.default.getId()] = e.set("flags", i.lA(e.flags, A.nhx.HAS_UNREAD_URGENT_MESSAGES, !0))), !0)
        );
    }
    return !1;
}
function ee(e) {
    let {
        channel: { rawRecipients: t },
    } = e;
    return null != t && t.forEach((e) => b(e)), !1;
}
function et(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => b(e));
    return !1;
}
let en = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];
function er(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = T[e.user.id];
            if (null == t) return !1;
            let n = en.reduce((n, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let s = t.set((0, r.camelCase)(i), e.user[i]);
                    (n = n || s !== t), (t = s);
                }
                return n;
            }, !1);
            return !!n && ((T[t.id] = t), n);
        })
        .some((e) => e);
}
function ei(e) {
    let { bans: t } = e;
    t.forEach((e) => b(e.user));
}
function es(e) {
    let { bans: t } = e;
    t.forEach((e) => b(e.user));
}
function ea(e) {
    return b(e.user);
}
function eo(e) {
    return !!e.isMember && b(e.user);
}
function el(e) {
    let t = b(e.user);
    return v(e.user.id, e.guildId, e.avatar) || t;
}
function eu(e) {
    let { ops: t } = e;
    for (let e of t)
        if ("INSERT" === e.op || "UPDATE" === e.op) {
            let t = e.item.member?.user;
            if (null == t) continue;
            N(t.id, t);
        }
    return !1;
}
function ec(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = b(n.user);
                return v(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function ed(e) {
    let t = !1;
    for (let n of e.members) b(n.user) && (t = !0), v(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function e_(e) {
    let t = !1;
    for (let n of e.users ?? []) Object.hasOwn(T, n.id) || (t = b(n) || t);
    return t;
}
function ef(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && b(e.member.user) && (n = !0), null != e.presence && b(e.presence.user) && (n = !0);
        }),
        n
    );
}
function ep(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        t?.forEach((e) => {
            null != e.member && b(e.member.user) && (n = !0), null != e.presence && b(e.presence.user) && (n = !0);
        }),
        n
    );
}
function eh(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: s, bot: a },
            avatar: o,
        } = e;
        n !== E.default.getId() && b({ id: n, username: r, avatar: i, discriminator: s, bot: a }), v(n, t.id, o);
    });
}
function em(e) {
    return b(e.relationship.user);
}
function eE(e) {
    return b(e.gameRelationship.user);
}
function eg(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => b(t.user) || e, !1);
}
function eA(e) {
    return b(e.suggestion.suggested_user);
}
function eI(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => b(t.suggested_user) || e, !1);
}
function eT(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == T[e.id] && (T[e.id] = new h.A(e));
    });
}
function eS(e) {
    let { giftCode: t } = e;
    return null != t.user && b(t.user);
}
function ey(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && b(t);
    });
}
function ev(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = b(n)), null != r && (i = i || b(r)), i;
}
function eN(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => b(t) || e, !1);
}
function eC(e) {
    let { users: t } = e;
    return t.reduce((e, t) => b(t) || e, !1);
}
function eR(e) {
    let { users: t } = e;
    return t.reduce((e, t) => b(t) || e, !1);
}
function eO(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => b(t) || e, !1);
}
function eb(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => b(t) || e, !1);
}
function eD(e) {
    let { members: t } = e,
        n = E.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : b(t.member.user) || e), !1);
}
function eL(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && M(e.message, !0);
    }, !1);
}
function ew(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, a.A)(t) && b(t.member.user)) || e, !1);
}
function eM(e) {
    let {} = e,
        t = T[E.default.getId()];
    return null != t && ((T[E.default.getId()] = t.set("ageVerificationStatus", s.Tk.CLIENT_ONLY_PENDING)), !0);
}
function ex(e) {
    let { status: t } = e,
        n = T[E.default.getId()];
    return (
        null != n &&
        n.ageVerificationStatus === s.Tk.CLIENT_ONLY_PENDING &&
        ((T[E.default.getId()] = n.set("ageVerificationStatus", t)), !0)
    );
}
function eP(e) {
    let { resolved: t } = e;
    return w(t, !0);
}
function ek(e) {
    let { stickers: t } = e;
    return t.reduce((e, t) => (null != t.user && b(t.user)) || e, !1);
}
class eU extends g.A {
    static displayName = "UserStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: x,
            CONNECTION_OPEN_SUPPLEMENTAL: P,
            UPDATE_CLIENT_PREMIUM_TYPE: H,
            OVERLAY_INITIALIZE: U,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: G,
            USER_RESTRICTED_SCHEDULE_UPDATE: F,
            USER_PROFILE_FETCH_SUCCESS: V,
            CURRENT_USER_UPDATE: B,
            PRESENCE_UPDATES: er,
            SEARCH_MESSAGES_SUCCESS: K,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: K,
            LOAD_MESSAGES_SUCCESS: j,
            LOAD_MESSAGES_AROUND_SUCCESS: j,
            LOAD_RECENT_MENTIONS_SUCCESS: j,
            LOAD_PINNED_MESSAGES_SUCCESS: Y,
            THREAD_LIST_SYNC: W,
            MESSAGE_CREATE: J,
            MESSAGE_UPDATE: J,
            GUILD_SETTINGS_LOADED_BANS: ei,
            GUILD_SETTINGS_LOADED_BANS_BATCH: es,
            GUILD_CREATE: eh,
            GUILD_BAN_ADD: ea,
            GUILD_BAN_REMOVE: ea,
            CHANNEL_RECIPIENT_ADD: eo,
            CHANNEL_RECIPIENT_REMOVE: eo,
            GUILD_STICKERS_FETCH_SUCCESS: ek,
            GUILD_JOIN_REQUEST_CREATE: ev,
            GUILD_JOIN_REQUEST_UPDATE: ev,
            GUILD_MEMBER_ADD: el,
            GUILD_MEMBER_UPDATE: el,
            GUILD_MEMBERS_CHUNK_BATCH: ec,
            GUILD_MEMBER_LIST_UPDATE: eu,
            THREAD_MEMBER_LIST_UPDATE: ef,
            THREAD_MEMBERS_UPDATE: ep,
            CHANNEL_CREATE: ee,
            CHANNEL_UPDATES: et,
            RELATIONSHIP_ADD: em,
            GAME_RELATIONSHIP_ADD: eE,
            LOAD_RELATIONSHIPS_SUCCESS: eg,
            FRIEND_SUGGESTION_CREATE: eA,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: eI,
            AUDIT_LOG_FETCH_SUCCESS: eT,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eT,
            GIFT_CODE_RESOLVE_SUCCESS: eS,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: ey,
            LOAD_THREADS_SUCCESS: $,
            LOAD_ARCHIVED_THREADS_SUCCESS: $,
            LOAD_FORUM_POSTS: z,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: Z,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: X,
            NOTIFICATION_CENTER_ITEM_CREATE: Q,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: q,
            PASSIVE_UPDATE_V2: ed,
            LOCAL_MESSAGES_LOADED: e_,
            FAMILY_CENTER_INITIAL_LOAD: eN,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eC,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eO,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eb,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eR,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eD,
            LOAD_ICYMI_HYDRATED: eL,
            EMBEDDED_ACTIVITY_UPDATE_V2: ew,
            INITIATE_AGE_VERIFICATION: eM,
            CLOSE_AGE_VERIFICATION_MODAL: ex,
            INTERACTION_MODAL_CREATE: eP,
        });
    }
    initialize() {
        this.waitFor(E.default, _.A);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return { version: eU.LATEST_SNAPSHOT_VERSION, data: { users: [e].filter(m.Vq) } };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eU.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) T[e.id] = new h.A(e);
        if (null != e.users) for (let t of e.users) (t.id in T && k(t)) || (T[t.id] = new h.A(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) e.rawRecipients?.forEach((e) => b(e, !1));
    }
    getUserStoreVersion() {
        return S;
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
        return T[E.default.getId()];
    }
}
let eG = new eU();
