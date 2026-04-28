"use strict";
n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => N,
        default: () => eG,
        mergeUser: () => D,
        transformUser: () => C,
        users: () => T,
    }),
    n(938796),
    n(205816),
    n(321073);
var i = n(735438),
    r = n(665260),
    s = n(155718),
    a = n(807605),
    o = n(821956),
    l = n(628856),
    _ = n(945096),
    d = n(47537),
    u = n(244284),
    c = n(683760),
    E = n(392737),
    h = n(572009),
    m = n(889227),
    f = n(403362),
    g = n(495544),
    A = n(536802),
    I = n(652215),
    p = n(788868);
let T = {},
    S = 0,
    N = "47835198259242069";
function O(e, t, n) {
    let i = T[e];
    if (null == i) return !1;
    let r = i;
    (r = null == n ? i.removeGuildAvatarHash(t) : i.addGuildAvatarHash(t, n)), (T[i.id] = r);
    let s = i !== r;
    return s && S++, s;
}
function R(e, t) {
    let n = T[e];
    return (
        !(null == n || (0, d.D)(n.primaryGuild, t.primary_guild)) &&
        (null == n.primaryGuild || null != t.primary_guild) &&
        ((n.primaryGuild = (0, d.j)(t.primary_guild)), (T[n.id] = n), S++, !0)
    );
}
function C(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, h.nq)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let i = e.nsfw_allowed;
    null != i && ((e.nsfwAllowed = i), delete e.nsfw_allowed);
    let r = e.age_verification_status;
    null != r && ((e.ageVerificationStatus = r), delete e.age_verification_status);
    let s = e.public_flags;
    null != s && ((e.publicFlags = s), delete e.public_flags);
    let a = e.purchased_flags;
    void 0 !== a && ((e.purchasedFlags = a), delete e.purchased_flags);
    let c = e.premium_usage_flags;
    void 0 !== c && ((e.premiumUsageFlags = c), delete e.premium_usage_flags),
        null === e.banner_color && delete e.banner_color;
    let m = e.avatar_decoration_data;
    void 0 !== m && ((e.avatarDecorationData = (0, o.Xq)(m)), delete e.avatar_decoration_data);
    let f = e.collectibles;
    void 0 !== f && (delete e.collectibles, (e.collectibles = (0, l.t)(f)));
    let g = e.global_name;
    void 0 !== g && ((e.globalName = g), delete e.global_name);
    let A = e.primary_guild;
    void 0 !== A && (e.primary_guild = (0, d.j)(A));
    let I = e.display_name_styles;
    void 0 !== I && ((e.displayNameStyles = (0, _.mT)(I)), delete e.display_name_styles);
    let p = e.premium_state;
    void 0 !== p && ((e.premiumState = (0, E.f)(p)), delete e.premium_state);
    let T = e.restricted_schedule;
    void 0 !== T && ((e.restrictedSchedule = u.kX.fromServer(T) ?? null), delete e.restricted_schedule);
    let S = e.app_transaction_ids;
    return void 0 !== S && ((e.appTransactionIds = S), delete e.app_transaction_ids), e;
}
function y(e) {
    return e.id !== g.default.getId();
}
function D(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = T[e.id],
        r = void 0 !== e.id && e.id === g.default.getId();
    if (null == i)
        void 0 !== (t = (i = new m.A(C(e))).premiumType) && r && (i.premiumType = L((0, h.I9)(i), i.premiumType));
    else if (n) {
        var s;
        let n,
            a,
            o = C(e);
        void 0 !== (t = o.premium_type ?? o.premiumType) &&
            r &&
            (0, h._D)(o) &&
            ((n = (s = o).premium_type ?? s.premiumType),
            (a = L((0, h._D)(s), n)),
            void 0 !== s.premiumType ? (s.premiumType = a) : void 0 !== s.premium_type && (s.premium_type = a),
            (o = s)),
            (o = (function (e, t) {
                switch (!0) {
                    case null == e.primaryGuild && null == t.primary_guild:
                        break;
                    case null != e.primaryGuild && null == t.primary_guild:
                    case (0, d.D)(e.primaryGuild, t.primary_guild):
                        t.primary_guild = e.primaryGuild;
                        break;
                    default:
                        t.primary_guild = (0, d.j)(t.primary_guild);
                }
                return t;
            })(i, o)),
            (i = i.merge(o));
    }
    (0, h.gX)((0, h.I9)(i), t, i.premiumType);
    let a = T[e.id] !== i;
    return (T[e.id] = i), a && S++, a;
}
function L(e, t) {
    if (!e) return t;
    let n = c.A.getPremiumTypeOverride(),
        i = c.A.getPremiumTypeActual();
    return n === p.$I ? i : n;
}
function v(e, t) {
    if (e?.users == null) return !1;
    for (let n in e.users) {
        let i = e.users[n];
        y(i) && D(i, t);
    }
}
function w(e, t) {
    null != e.author && "SENDING" !== e.state && y(e.author) && D(e.author, t),
        e.mentions?.forEach((e) => {
            y(e) && D(e, t);
        }),
        e.interaction?.user != null && y(e.interaction?.user) && D(e.interaction.user, t),
        e.attachments?.forEach((e) => {
            e.clip_participants?.forEach((e) => {
                y(e) && D(e, t);
            });
        }),
        v(e.resolved, t),
        e.interaction_metadata?.user != null && y(e.interaction_metadata.user) && D(e.interaction_metadata.user, t),
        null != e.message_snapshots &&
            e.message_snapshots.forEach((e) => {
                e.moderator_report?.reported_member?.user != null && D(e.moderator_report.reported_member.user, t),
                    e.moderator_report?.reporting_member?.user != null &&
                        D(e.moderator_report.reporting_member.user, t),
                    Object.values(e.message?.resolved?.users ?? {}).forEach((e) => {
                        y(e) && D(e, t);
                    });
            });
}
function P(e) {
    let { user: t, users: n, guilds: i } = e;
    delete t.premium,
        delete t.banner_color,
        D(t),
        n.forEach((e) => {
            D(e);
        }),
        i.forEach((e) => {
            e.members.forEach((t) => {
                O(t.user.id, e.id, t.avatar), R(t.user.id, t.user);
            });
        }),
        null != T[g.default.getId()] &&
            (T[N] = new m.A({
                id: N,
                username: "Wumpus",
                discriminator: "0",
                globalName: "Wumpus",
                avatar: "c1f86b313385cb97985f1b118851c28c",
            }));
}
function b(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            O(t.user.id, e.id, t.avatar), R(t.user.id, t.user);
        });
    }),
        n?.forEach((e) => {
            e.rawRecipients?.forEach((e) => {
                D(e);
            });
        });
}
function k(e) {
    return !("incomplete" in e);
}
function U(e) {
    if (null != e.users) for (let t of e.users) (t.id in T && k(t)) || (T[t.id] = new m.A(t));
}
function M(e) {
    let { user: t } = e;
    if (!y(t)) return !1;
    D(t);
}
function G(e) {
    let { userId: t, restrictedSchedule: n } = e;
    return D({ id: t, restricted_schedule: n });
}
function x(e) {
    let { userProfile: t } = e;
    if (!y(t.user)) return !1;
    D(t.user);
}
function V(e) {
    let { user: t } = e;
    D(t);
}
function F(e) {
    let { user: t } = e;
    D({ id: t.id, premiumType: t.premiumType }, !0);
}
function B(e) {
    let { messages: t } = e;
    return t.forEach((e) => w(e, !0)), !1;
}
function H(e) {
    let { messages: t } = e;
    return t.forEach((e) => w(e, !0)), !1;
}
function Y(e) {
    let { pins: t } = e;
    return (
        t.forEach((e) => {
            let { message: t } = e;
            return w(t, !0);
        }),
        !1
    );
}
function W(e) {
    let { mostRecentMessages: t } = e;
    return t?.forEach((e) => w(e, !1)), !1;
}
function K(e) {
    let { data: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t, channels: n } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    w(e, !0);
                });
            }),
                n.forEach((e) => {
                    (e.type === I.rbe.DM || e.type === I.rbe.GROUP_DM) &&
                        (e.recipients?.forEach((e) => D(e)), null != e.recipient && D(e.recipient));
                });
        }),
        !1
    );
}
function j(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => w(e, !0)), null != n && n.forEach((e) => D(e.user, !0));
}
function $(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: i } = e;
        null != t && w(t, !0), null != n && w(n, !0), null != i && null != i.user && D(i.user, !0);
    });
}
function z(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && w(t, !0);
    });
}
function q(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: i } = e;
        if (null == t) return;
        D(t);
        let r = i?.avatar;
        null != r && O(t.id, n, r);
    });
}
function X(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && D(e.other_user);
    });
}
function Q(e) {
    let { item: t } = e;
    null != t.other_user && D(t.other_user);
}
function J(e) {
    let { message: t } = e;
    if ((w(t, !0), null != t.flags && r.Lt(t.flags, I.pr7.URGENT))) {
        let e = T[g.default.getId()];
        return (
            null != e &&
            ((T[g.default.getId()] = e.set("flags", r.lA(e.flags, I.nhx.HAS_UNREAD_URGENT_MESSAGES, !0))), !0)
        );
    }
    return !1;
}
function Z(e) {
    let {
        channel: { rawRecipients: t },
    } = e;
    return null != t && t.forEach((e) => D(e)), !1;
}
function ee(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => D(e));
    return !1;
}
let et = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];
function en(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = T[e.user.id];
            if (null == t) return !1;
            let n = et.reduce((n, r) => {
                if (e.user.hasOwnProperty(r)) {
                    let s = t.set((0, i.camelCase)(r), e.user[r]);
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
    t.forEach((e) => D(e.user));
}
function er(e) {
    let { bans: t } = e;
    t.forEach((e) => D(e.user));
}
function es(e) {
    return D(e.user);
}
function ea(e) {
    return !!e.isMember && D(e.user);
}
function eo(e) {
    let t = D(e.user);
    return O(e.user.id, e.guildId, e.avatar) || t;
}
function el(e) {
    let { ops: t } = e;
    for (let e of t)
        if ("INSERT" === e.op || "UPDATE" === e.op) {
            let t = e.item.member?.user;
            if (null == t) continue;
            R(t.id, t);
        }
    return !1;
}
function e_(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let i = D(n.user);
                return O(n.user.id, e.guildId, n.avatar) || i || t;
            }, !1) || n;
    return n;
}
function ed(e) {
    let t = !1;
    for (let n of e.members) D(n.user) && (t = !0), O(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function eu(e) {
    let t = !1;
    for (let n of e.users ?? []) Object.hasOwn(T, n.id) || (t = D(n) || t);
    return t;
}
function ec(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && D(e.member.user) && (n = !0), null != e.presence && D(e.presence.user) && (n = !0);
        }),
        n
    );
}
function eE(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        t?.forEach((e) => {
            null != e.member && D(e.member.user) && (n = !0), null != e.presence && D(e.presence.user) && (n = !0);
        }),
        n
    );
}
function eh(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: i, avatar: r, discriminator: s, bot: a },
            avatar: o,
        } = e;
        n !== g.default.getId() && D({ id: n, username: i, avatar: r, discriminator: s, bot: a }), O(n, t.id, o);
    });
}
function em(e) {
    return D(e.relationship.user);
}
function ef(e) {
    return D(e.gameRelationship.user);
}
function eg(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => D(t.user) || e, !1);
}
function eA(e) {
    return D(e.suggestion.suggested_user);
}
function eI(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => D(t.suggested_user) || e, !1);
}
function ep(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == T[e.id] && (T[e.id] = new m.A(e));
    });
}
function eT(e) {
    let { giftCode: t } = e;
    return null != t.user && D(t.user);
}
function eS(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && D(t);
    });
}
function eN(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: i } = t,
        r = !1;
    return null != n && (r = D(n)), null != i && (r = r || D(i)), r;
}
function eO(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: i } = n;
    return [...t, ...i].reduce((e, t) => D(t) || e, !1);
}
function eR(e) {
    let { users: t } = e;
    return t.reduce((e, t) => D(t) || e, !1);
}
function eC(e) {
    let { users: t } = e;
    return t.reduce((e, t) => D(t) || e, !1);
}
function ey(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => D(t) || e, !1);
}
function eD(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => D(t) || e, !1);
}
function eL(e) {
    let { members: t } = e,
        n = g.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : D(t.member.user) || e), !1);
}
function ev(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && w(e.message, !0);
    }, !1);
}
function ew(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, a.A)(t) && D(t.member.user)) || e, !1);
}
function eP(e) {
    let {} = e,
        t = T[g.default.getId()];
    return null != t && ((T[g.default.getId()] = t.set("ageVerificationStatus", s.Tk.CLIENT_ONLY_PENDING)), !0);
}
function eb(e) {
    let { status: t } = e,
        n = T[g.default.getId()];
    return (
        null != n &&
        n.ageVerificationStatus === s.Tk.CLIENT_ONLY_PENDING &&
        ((T[g.default.getId()] = n.set("ageVerificationStatus", t)), !0)
    );
}
function ek(e) {
    let { resolved: t } = e;
    return v(t, !0);
}
function eU(e) {
    let { stickers: t } = e;
    return t.reduce((e, t) => (null != t.user && D(t.user)) || e, !1);
}
class eM extends A.A {
    static displayName = "UserStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: P,
            CONNECTION_OPEN_SUPPLEMENTAL: b,
            UPDATE_CLIENT_PREMIUM_TYPE: F,
            OVERLAY_INITIALIZE: U,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: M,
            USER_RESTRICTED_SCHEDULE_UPDATE: G,
            USER_PROFILE_FETCH_SUCCESS: x,
            CURRENT_USER_UPDATE: V,
            PRESENCE_UPDATES: en,
            SEARCH_MESSAGES_SUCCESS: K,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: K,
            LOAD_MESSAGES_SUCCESS: B,
            LOAD_MESSAGES_AROUND_SUCCESS: B,
            LOAD_RECENT_MENTIONS_SUCCESS: B,
            CONVERSATION_FETCH_SUCCESS: H,
            LOAD_PINNED_MESSAGES_SUCCESS: Y,
            THREAD_LIST_SYNC: W,
            MESSAGE_CREATE: J,
            MESSAGE_UPDATE: J,
            GUILD_SETTINGS_LOADED_BANS: ei,
            GUILD_SETTINGS_LOADED_BANS_BATCH: er,
            GUILD_CREATE: eh,
            GUILD_BAN_ADD: es,
            GUILD_BAN_REMOVE: es,
            CHANNEL_RECIPIENT_ADD: ea,
            CHANNEL_RECIPIENT_REMOVE: ea,
            GUILD_STICKERS_FETCH_SUCCESS: eU,
            GUILD_JOIN_REQUEST_CREATE: eN,
            GUILD_JOIN_REQUEST_UPDATE: eN,
            GUILD_MEMBER_ADD: eo,
            GUILD_MEMBER_UPDATE: eo,
            GUILD_MEMBERS_CHUNK_BATCH: e_,
            GUILD_MEMBER_LIST_UPDATE: el,
            THREAD_MEMBER_LIST_UPDATE: ec,
            THREAD_MEMBERS_UPDATE: eE,
            CHANNEL_CREATE: Z,
            CHANNEL_UPDATES: ee,
            RELATIONSHIP_ADD: em,
            GAME_RELATIONSHIP_ADD: ef,
            LOAD_RELATIONSHIPS_SUCCESS: eg,
            FRIEND_SUGGESTION_CREATE: eA,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: eI,
            AUDIT_LOG_FETCH_SUCCESS: ep,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: ep,
            GIFT_CODE_RESOLVE_SUCCESS: eT,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eS,
            LOAD_THREADS_SUCCESS: j,
            LOAD_ARCHIVED_THREADS_SUCCESS: j,
            LOAD_FORUM_POSTS: $,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: q,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: X,
            NOTIFICATION_CENTER_ITEM_CREATE: Q,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: z,
            PASSIVE_UPDATE_V2: ed,
            LOCAL_MESSAGES_LOADED: eu,
            FAMILY_CENTER_INITIAL_LOAD: eO,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eR,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: ey,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eD,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eC,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eL,
            LOAD_ICYMI_HYDRATED: ev,
            EMBEDDED_ACTIVITY_UPDATE_V2: ew,
            INITIATE_AGE_VERIFICATION: eP,
            CLOSE_AGE_VERIFICATION_MODAL: eb,
            INTERACTION_MODAL_CREATE: ek,
        });
    }
    initialize() {
        this.waitFor(g.default, c.A);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return { version: eM.LATEST_SNAPSHOT_VERSION, data: { users: [e].filter(f.Vq) } };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eM.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) T[e.id] = new m.A(e);
        if (null != e.users) for (let t of e.users) (t.id in T && k(t)) || (T[t.id] = new m.A(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) e.rawRecipients?.forEach((e) => D(e, !1));
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
            let i = T[n];
            if (
                (null != t && i.username === e && i.discriminator === t) ||
                (null == t && i.username === e && i.hasUniqueUsername())
            )
                return i;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [];
        for (let t in T) {
            let i = T[t];
            e(i) && n.push(i);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return T[g.default.getId()];
    }
}
let eG = new eM();
