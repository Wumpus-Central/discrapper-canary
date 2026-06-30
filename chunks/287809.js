"use strict";
n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => y,
        default: () => eU,
        mergeUser: () => O,
        transformUser: () => v,
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
    u = n(945096),
    c = n(47537),
    d = n(244284),
    _ = n(683760),
    h = n(392737),
    f = n(572009),
    p = n(889227),
    E = n(403362),
    m = n(495544),
    g = n(536802),
    A = n(652215),
    I = n(788868);
let T = {},
    S = 0,
    y = "47835198259242069";
function C(e, t, n) {
    let i = T[e];
    if (null == i) return !1;
    let r = i;
    (r = null == n ? i.removeGuildAvatarHash(t) : i.addGuildAvatarHash(t, n)), (T[i.id] = r);
    let s = i !== r;
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
function v(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, f.nq)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let i = e.nsfw_allowed;
    null != i && ((e.nsfwAllowed = i), delete e.nsfw_allowed);
    let r = e.age_verification_status;
    null != r && ((e.ageVerificationStatus = r), delete e.age_verification_status);
    let s = e.public_flags;
    null != s && ((e.publicFlags = s), delete e.public_flags);
    let a = e.purchased_flags;
    void 0 !== a && ((e.purchasedFlags = a), delete e.purchased_flags);
    let _ = e.premium_usage_flags;
    void 0 !== _ && ((e.premiumUsageFlags = _), delete e.premium_usage_flags),
        null === e.banner_color && delete e.banner_color;
    let p = e.avatar_decoration_data;
    void 0 !== p && ((e.avatarDecorationData = (0, o.Xq)(p)), delete e.avatar_decoration_data);
    let E = e.collectibles;
    void 0 !== E && (delete e.collectibles, (e.collectibles = (0, l.t)(E)));
    let m = e.global_name;
    void 0 !== m && ((e.globalName = m), delete e.global_name);
    let g = e.primary_guild;
    void 0 !== g && (e.primary_guild = (0, c.j)(g));
    let A = e.display_name_styles;
    void 0 !== A && ((e.displayNameStyles = (0, u.mT)(A)), delete e.display_name_styles);
    let I = e.premium_state;
    void 0 !== I && ((e.premiumState = (0, h.f)(I)), delete e.premium_state);
    let T = e.restricted_schedule;
    void 0 !== T && ((e.restrictedSchedule = d.kX.fromServer(T) ?? null), delete e.restricted_schedule);
    let S = e.app_transaction_ids;
    return void 0 !== S && ((e.appTransactionIds = S), delete e.app_transaction_ids), e;
}
function R(e) {
    return e.id !== m.default.getId();
}
function O(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = T[e.id],
        r = void 0 !== e.id && e.id === m.default.getId();
    if (null == i)
        void 0 !== (t = (i = new p.A(v(e))).premiumType) && r && (i.premiumType = b((0, f.I9)(i), i.premiumType));
    else if (n) {
        var s;
        let n,
            a,
            o = v(e);
        void 0 !== (t = o.premium_type ?? o.premiumType) &&
            r &&
            (0, f._D)(o) &&
            ((n = (s = o).premium_type ?? s.premiumType),
            (a = b((0, f._D)(s), n)),
            void 0 !== s.premiumType ? (s.premiumType = a) : void 0 !== s.premium_type && (s.premium_type = a),
            (o = s)),
            (o = (function (e, t) {
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
            })(i, o)),
            (i = i.merge(o));
    }
    (0, f.gX)((0, f.I9)(i), t, i.premiumType);
    let a = T[e.id] !== i;
    return (T[e.id] = i), a && S++, a;
}
function b(e, t) {
    if (!e) return t;
    let n = _.A.getPremiumTypeOverride(),
        i = _.A.getPremiumTypeActual();
    return n === I.$I ? i : n;
}
function D(e, t) {
    if (e?.users == null) return !1;
    for (let n in e.users) {
        let i = e.users[n];
        R(i) && O(i, t);
    }
}
function L(e, t) {
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
        D(e.resolved, t),
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
function w(e) {
    let { user: t, users: n, guilds: i } = e;
    delete t.premium,
        delete t.banner_color,
        O(t),
        n.forEach((e) => {
            O(e);
        }),
        i.forEach((e) => {
            e.members.forEach((t) => {
                C(t.user.id, e.id, t.avatar), N(t.user.id, t.user);
            });
        }),
        null != T[m.default.getId()] &&
            (T[y] = new p.A({
                id: y,
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
            C(t.user.id, e.id, t.avatar), N(t.user.id, t.user);
        });
    }),
        n?.forEach((e) => {
            e.rawRecipients?.forEach((e) => {
                O(e);
            });
        });
}
function P(e) {
    return !("incomplete" in e);
}
function x(e) {
    if (null != e.users) for (let t of e.users) (t.id in T && P(t)) || (T[t.id] = new p.A(t));
}
function k(e) {
    let { user: t } = e;
    if (!R(t)) return !1;
    O(t);
}
function U(e) {
    let { userId: t, restrictedSchedule: n } = e;
    return O({ id: t, restricted_schedule: n });
}
function G(e) {
    let { userProfile: t } = e;
    if (!R(t.user)) return !1;
    O(t.user);
}
function F(e) {
    let { user: t } = e;
    O(t);
}
function V(e) {
    let { user: t } = e;
    O({ id: t.id, premiumType: t.premiumType }, !0);
}
function B(e) {
    let { messages: t } = e;
    return t.forEach((e) => L(e, !0)), !1;
}
function j(e) {
    let { messages: t } = e;
    return t.forEach((e) => L(e, !0)), !1;
}
function H(e) {
    let { pins: t } = e;
    return (
        t.forEach((e) => {
            let { message: t } = e;
            return L(t, !0);
        }),
        !1
    );
}
function Y(e) {
    let { mostRecentMessages: t } = e;
    return t?.forEach((e) => L(e, !1)), !1;
}
function W(e) {
    let { data: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t, channels: n } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    L(e, !0);
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
    null != t && t.forEach((e) => L(e, !0)), null != n && n.forEach((e) => O(e.user, !0));
}
function $(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: i } = e;
        null != t && L(t, !0), null != n && L(n, !0), null != i && null != i.user && O(i.user, !0);
    });
}
function z(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && L(t, !0);
    });
}
function q(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: i } = e;
        if (null == t) return;
        O(t);
        let r = i?.avatar;
        null != r && C(t.id, n, r);
    });
}
function Z(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && O(e.other_user);
    });
}
function X(e) {
    let { item: t } = e;
    null != t.other_user && O(t.other_user);
}
function Q(e) {
    let { message: t } = e;
    if ((L(t, !0), null != t.flags && r.Lt(t.flags, A.pr7.URGENT))) {
        let e = T[m.default.getId()];
        return (
            null != e &&
            ((T[m.default.getId()] = e.set("flags", r.lA(e.flags, A.nhx.HAS_UNREAD_URGENT_MESSAGES, !0))), !0)
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
    t.forEach((e) => O(e.user));
}
function er(e) {
    let { bans: t } = e;
    t.forEach((e) => O(e.user));
}
function es(e) {
    return O(e.user);
}
function ea(e) {
    return !!e.isMember && O(e.user);
}
function eo(e) {
    let t = O(e.user);
    return C(e.user.id, e.guildId, e.avatar) || t;
}
function el(e) {
    let { ops: t } = e;
    for (let e of t)
        if ("INSERT" === e.op || "UPDATE" === e.op) {
            let t = e.item.member?.user;
            if (null == t) continue;
            N(t.id, t);
        }
    return !1;
}
function eu(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let i = O(n.user);
                return C(n.user.id, e.guildId, n.avatar) || i || t;
            }, !1) || n;
    return n;
}
function ec(e) {
    let t = !1;
    for (let n of e.members) O(n.user) && (t = !0), C(n.user.id, e.guildId, n.avatar) && (t = !0);
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
function eh(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        t?.forEach((e) => {
            null != e.member && O(e.member.user) && (n = !0), null != e.presence && O(e.presence.user) && (n = !0);
        }),
        n
    );
}
function ef(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: i, avatar: r, discriminator: s, bot: a },
            avatar: o,
        } = e;
        n !== m.default.getId() && O({ id: n, username: i, avatar: r, discriminator: s, bot: a }), C(n, t.id, o);
    });
}
function ep(e) {
    return O(e.relationship.user);
}
function eE(e) {
    return O(e.gameRelationship.user);
}
function em(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => O(t.user) || e, !1);
}
function eg(e) {
    return O(e.suggestion.suggested_user);
}
function eA(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => O(t.suggested_user) || e, !1);
}
function eI(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == T[e.id] && (T[e.id] = new p.A(e));
    });
}
function eT(e) {
    let { giftCode: t } = e;
    return null != t.user && O(t.user);
}
function eS(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && O(t);
    });
}
function ey(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: i } = t,
        r = !1;
    return null != n && (r = O(n)), null != i && (r = r || O(i)), r;
}
function eC(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: i } = n;
    return [...t, ...i].reduce((e, t) => O(t) || e, !1);
}
function eN(e) {
    let { users: t } = e;
    return t.reduce((e, t) => O(t) || e, !1);
}
function ev(e) {
    let { users: t } = e;
    return t.reduce((e, t) => O(t) || e, !1);
}
function eR(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => O(t) || e, !1);
}
function eO(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => O(t) || e, !1);
}
function eb(e) {
    let { members: t } = e,
        n = m.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : O(t.member.user) || e), !1);
}
function eD(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && L(e.message, !0);
    }, !1);
}
function eL(e) {
    let { instance: t } = e;
    return t.participants.reduce((e, t) => ((0, a.A)(t) && O(t.member.user)) || e, !1);
}
function ew(e) {
    let {} = e,
        t = T[m.default.getId()];
    return null != t && ((T[m.default.getId()] = t.set("ageVerificationStatus", s.Tk.CLIENT_ONLY_PENDING)), !0);
}
function eM(e) {
    let { status: t } = e,
        n = T[m.default.getId()];
    return (
        null != n &&
        n.ageVerificationStatus === s.Tk.CLIENT_ONLY_PENDING &&
        ((T[m.default.getId()] = n.set("ageVerificationStatus", t)), !0)
    );
}
function eP(e) {
    let { resolved: t } = e;
    return D(t, !0);
}
function ex(e) {
    let { stickers: t } = e;
    return t.reduce((e, t) => (null != t.user && O(t.user)) || e, !1);
}
class ek extends g.A {
    static displayName = "UserStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: w,
            CONNECTION_OPEN_SUPPLEMENTAL: M,
            UPDATE_CLIENT_PREMIUM_TYPE: V,
            OVERLAY_INITIALIZE: x,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: k,
            USER_RESTRICTED_SCHEDULE_UPDATE: U,
            USER_PROFILE_FETCH_SUCCESS: G,
            CURRENT_USER_UPDATE: F,
            PRESENCE_UPDATES: en,
            SEARCH_MESSAGES_SUCCESS: W,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: W,
            LOAD_MESSAGES_SUCCESS: B,
            LOAD_MESSAGES_AROUND_SUCCESS: B,
            LOAD_RECENT_MENTIONS_SUCCESS: B,
            CONVERSATION_FETCH_SUCCESS: j,
            LOAD_PINNED_MESSAGES_SUCCESS: H,
            THREAD_LIST_SYNC: Y,
            MESSAGE_CREATE: Q,
            MESSAGE_UPDATE: Q,
            GUILD_SETTINGS_LOADED_BANS: ei,
            GUILD_SETTINGS_LOADED_BANS_BATCH: er,
            GUILD_CREATE: ef,
            GUILD_BAN_ADD: es,
            GUILD_BAN_REMOVE: es,
            CHANNEL_RECIPIENT_ADD: ea,
            CHANNEL_RECIPIENT_REMOVE: ea,
            GUILD_STICKERS_FETCH_SUCCESS: ex,
            GUILD_JOIN_REQUEST_CREATE: ey,
            GUILD_JOIN_REQUEST_UPDATE: ey,
            GUILD_MEMBER_ADD: eo,
            GUILD_MEMBER_UPDATE: eo,
            GUILD_MEMBERS_CHUNK_BATCH: eu,
            GUILD_MEMBER_LIST_UPDATE: el,
            THREAD_MEMBER_LIST_UPDATE: e_,
            THREAD_MEMBERS_UPDATE: eh,
            CHANNEL_CREATE: J,
            CHANNEL_UPDATES: ee,
            RELATIONSHIP_ADD: ep,
            GAME_RELATIONSHIP_ADD: eE,
            LOAD_RELATIONSHIPS_SUCCESS: em,
            FRIEND_SUGGESTION_CREATE: eg,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: eA,
            AUDIT_LOG_FETCH_SUCCESS: eI,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eI,
            GIFT_CODE_RESOLVE_SUCCESS: eT,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eS,
            LOAD_THREADS_SUCCESS: K,
            LOAD_ARCHIVED_THREADS_SUCCESS: K,
            LOAD_FORUM_POSTS: $,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: q,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: Z,
            NOTIFICATION_CENTER_ITEM_CREATE: X,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: z,
            PASSIVE_UPDATE_V2: ec,
            LOCAL_MESSAGES_LOADED: ed,
            FAMILY_CENTER_INITIAL_LOAD: eC,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eN,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eR,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eO,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: ev,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eb,
            LOAD_ICYMI_HYDRATED: eD,
            EMBEDDED_ACTIVITY_UPDATE_V2: eL,
            INITIATE_AGE_VERIFICATION: ew,
            CLOSE_AGE_VERIFICATION_MODAL: eM,
            INTERACTION_MODAL_CREATE: eP,
        });
    }
    initialize() {
        this.waitFor(m.default, _.A);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return { version: ek.LATEST_SNAPSHOT_VERSION, data: { users: [e].filter(E.Vq) } };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(ek.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) T[e.id] = new p.A(e);
        if (null != e.users) for (let t of e.users) (t.id in T && P(t)) || (T[t.id] = new p.A(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) e.rawRecipients?.forEach((e) => O(e, !1));
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
        return T[m.default.getId()];
    }
}
let eU = new ek();
